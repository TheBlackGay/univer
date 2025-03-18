import {
  AddCommentMutation,
  DeleteCommentMutation,
  ThreadCommentModel,
  UniverThreadCommentPlugin,
  UpdateCommentRefMutation
} from "./chunk-AGG5SFHL.js";
import {
  DependentOn,
  Disposable,
  ICommandService,
  IUniverInstanceService,
  Inject,
  Injector,
  O,
  ObjectMatrix,
  Plugin,
  RefRangeService,
  SheetsSelectionsService,
  Subject,
  handleCommonRangeChangeWithEffectRefCommandsSkipNoInterests,
  sequenceExecuteAsync,
  serializeRange,
  singleReferenceToGrid,
  toDisposable
} from "./chunk-33NDYU5R.js";
import {
  __decorateClass,
  __decorateParam,
  __publicField
} from "./chunk-NSSCU2QI.js";

// ../packages/sheets-thread-comment/src/models/sheets-thread-comment.model.ts
var SheetsThreadCommentModel = class extends Disposable {
  constructor(_threadCommentModel, _univerInstanceService) {
    super();
    this._threadCommentModel = _threadCommentModel;
    this._univerInstanceService = _univerInstanceService;
    __publicField(this, "_matrixMap", /* @__PURE__ */ new Map());
    __publicField(this, "_locationMap", /* @__PURE__ */ new Map());
    __publicField(this, "_commentUpdate$", new Subject());
    __publicField(this, "commentUpdate$", this._commentUpdate$.asObservable());
    this._init();
    this.disposeWithMe(() => {
      this._commentUpdate$.complete();
    });
  }
  _init() {
    this._initData();
    this._initUpdateTransform();
  }
  _ensureCommentMatrix(unitId, subUnitId) {
    let unitMap = this._matrixMap.get(unitId);
    if (!unitMap) {
      unitMap = /* @__PURE__ */ new Map();
      this._matrixMap.set(unitId, unitMap);
    }
    let subUnitMap = unitMap.get(subUnitId);
    if (!subUnitMap) {
      subUnitMap = new ObjectMatrix();
      unitMap.set(subUnitId, subUnitMap);
    }
    return subUnitMap;
  }
  _ensureCommentLocationMap(unitId, subUnitId) {
    let unitMap = this._locationMap.get(unitId);
    if (!unitMap) {
      unitMap = /* @__PURE__ */ new Map();
      this._locationMap.set(unitId, unitMap);
    }
    let subUnitMap = unitMap.get(subUnitId);
    if (!subUnitMap) {
      subUnitMap = /* @__PURE__ */ new Map();
      unitMap.set(subUnitId, subUnitMap);
    }
    return subUnitMap;
  }
  _addCommentToMatrix(matrix, row, column, commentId) {
    var _a;
    const current = (_a = matrix.getValue(row, column)) != null ? _a : /* @__PURE__ */ new Set();
    current.add(commentId);
    matrix.setValue(row, column, current);
  }
  _deleteCommentFromMatrix(matrix, row, column, commentId) {
    if (row >= 0 && column >= 0) {
      const current = matrix.getValue(row, column);
      if (current && current.has(commentId)) {
        current.delete(commentId);
        if (current.size === 0) {
          matrix.realDeleteValue(row, column);
        }
      }
    }
  }
  _ensure(unitId, subUnitId) {
    const matrix = this._ensureCommentMatrix(unitId, subUnitId);
    const locationMap = this._ensureCommentLocationMap(unitId, subUnitId);
    return { matrix, locationMap };
  }
  _initData() {
    const datas = this._threadCommentModel.getAll();
    for (const data of datas) {
      for (const thread of data.threads) {
        const { unitId, subUnitId, root } = thread;
        this._addComment(unitId, subUnitId, root);
      }
    }
  }
  _addComment(unitId, subUnitId, comment) {
    const location = singleReferenceToGrid(comment.ref);
    const parentId = comment.parentId;
    const { row, column } = location;
    const commentId = comment.id;
    const { matrix, locationMap } = this._ensure(unitId, subUnitId);
    if (!parentId && row >= 0 && column >= 0) {
      this._addCommentToMatrix(matrix, row, column, commentId);
      locationMap.set(commentId, { row, column });
    }
    if (!parentId) {
      this._commentUpdate$.next({
        unitId,
        subUnitId,
        payload: comment,
        type: "add",
        isRoot: !parentId,
        ...location
      });
    }
  }
  // eslint-disable-next-line max-lines-per-function
  _initUpdateTransform() {
    this.disposeWithMe(this._threadCommentModel.commentUpdate$.subscribe((update) => {
      const { unitId, subUnitId } = update;
      try {
        const type = this._univerInstanceService.getUnitType(unitId);
        if (type !== O.UNIVER_SHEET) {
          return;
        }
      } catch (error) {
      }
      const { matrix, locationMap } = this._ensure(unitId, subUnitId);
      switch (update.type) {
        case "add": {
          this._addComment(update.unitId, update.subUnitId, update.payload);
          break;
        }
        case "delete": {
          const { isRoot, comment } = update.payload;
          if (isRoot) {
            const location = singleReferenceToGrid(comment.ref);
            const { row, column } = location;
            this._deleteCommentFromMatrix(matrix, row, column, comment.id);
            this._commentUpdate$.next({
              ...update,
              ...location
            });
          }
          break;
        }
        case "update": {
          const { commentId } = update.payload;
          const comment = this._threadCommentModel.getComment(unitId, subUnitId, commentId);
          if (!comment) {
            return;
          }
          const location = singleReferenceToGrid(comment.ref);
          this._commentUpdate$.next({
            ...update,
            ...location
          });
          break;
        }
        case "updateRef": {
          const location = singleReferenceToGrid(update.payload.ref);
          const { commentId } = update.payload;
          const currentLoc = locationMap.get(commentId);
          if (!currentLoc) {
            return;
          }
          const { row, column } = currentLoc;
          this._deleteCommentFromMatrix(matrix, row, column, commentId);
          locationMap.delete(commentId);
          if (location.row >= 0 && location.column >= 0) {
            this._addCommentToMatrix(matrix, location.row, location.column, commentId);
            locationMap.set(commentId, { row: location.row, column: location.column });
          }
          this._commentUpdate$.next({
            ...update,
            ...location
          });
          break;
        }
        case "resolve": {
          const { unitId: unitId2, subUnitId: subUnitId2, payload } = update;
          const { locationMap: locationMap2 } = this._ensure(unitId2, subUnitId2);
          const location = locationMap2.get(payload.commentId);
          if (location) {
            this._commentUpdate$.next({
              ...update,
              ...location
            });
          }
          break;
        }
        default:
          break;
      }
    }));
  }
  getByLocation(unitId, subUnitId, row, column) {
    var _a;
    const comments = this.getAllByLocation(unitId, subUnitId, row, column);
    const activeComments = comments.filter((comment) => !comment.resolved);
    return (_a = activeComments[0]) == null ? void 0 : _a.id;
  }
  getAllByLocation(unitId, subUnitId, row, column) {
    const matrix = this._ensureCommentMatrix(unitId, subUnitId);
    const current = matrix.getValue(row, column);
    if (!current) {
      return [];
    }
    return Array.from(current).map((id) => this.getComment(unitId, subUnitId, id)).filter(Boolean);
  }
  getComment(unitId, subUnitId, commentId) {
    return this._threadCommentModel.getComment(unitId, subUnitId, commentId);
  }
  getCommentWithChildren(unitId, subUnitId, row, column) {
    const commentId = this.getByLocation(unitId, subUnitId, row, column);
    if (!commentId) {
      return void 0;
    }
    const comment = this.getComment(unitId, subUnitId, commentId);
    if (!comment) {
      return void 0;
    }
    return this._threadCommentModel.getThread(unitId, subUnitId, comment.threadId);
  }
  showCommentMarker(unitId, subUnitId, row, column) {
    const commentId = this.getByLocation(unitId, subUnitId, row, column);
    if (!commentId) {
      return false;
    }
    const comment = this.getComment(unitId, subUnitId, commentId);
    if (comment && !comment.resolved) {
      return true;
    }
    return false;
  }
  getSubUnitAll(unitId, subUnitId) {
    return this._threadCommentModel.getUnit(unitId).filter((i) => i.subUnitId === subUnitId).map((i) => i.root);
  }
};
SheetsThreadCommentModel = __decorateClass([
  __decorateParam(0, Inject(ThreadCommentModel)),
  __decorateParam(1, IUniverInstanceService)
], SheetsThreadCommentModel);

// ../packages/sheets-thread-comment/src/controllers/sheets-thread-comment-ref-range.controller.ts
var SheetsThreadCommentRefRangeController = class extends Disposable {
  constructor(_refRangeService, _sheetsThreadCommentModel, _threadCommentModel, _selectionManagerService, _commandService) {
    super();
    this._refRangeService = _refRangeService;
    this._sheetsThreadCommentModel = _sheetsThreadCommentModel;
    this._threadCommentModel = _threadCommentModel;
    this._selectionManagerService = _selectionManagerService;
    this._commandService = _commandService;
    __publicField(this, "_disposableMap", /* @__PURE__ */ new Map());
    __publicField(this, "_watcherMap", /* @__PURE__ */ new Map());
    __publicField(this, "_handleRangeChange", (unitId, subUnitId, comment, resultRange, silent) => {
      const commentId = comment.id;
      const oldRange = {
        startColumn: comment.column,
        endColumn: comment.column,
        startRow: comment.row,
        endRow: comment.row
      };
      if (!resultRange) {
        return {
          redos: [{
            id: DeleteCommentMutation.id,
            params: {
              unitId,
              subUnitId,
              commentId
            }
          }],
          undos: [{
            id: AddCommentMutation.id,
            params: {
              unitId,
              subUnitId,
              comment,
              sync: true
            }
          }]
        };
      }
      return {
        redos: [{
          id: UpdateCommentRefMutation.id,
          params: {
            unitId,
            subUnitId,
            payload: {
              ref: serializeRange(resultRange),
              commentId
            },
            silent
          }
        }],
        undos: [{
          id: UpdateCommentRefMutation.id,
          params: {
            unitId,
            subUnitId,
            payload: {
              ref: serializeRange(oldRange),
              commentId
            },
            silent
          }
        }]
      };
    });
    this._initData();
    this._initRefRange();
  }
  _getIdWithUnitId(unitId, subUnitId, id) {
    return `${unitId}-${subUnitId}-${id}`;
  }
  _register(unitId, subUnitId, comment) {
    const commentId = comment.id;
    const oldRange = {
      startColumn: comment.column,
      endColumn: comment.column,
      startRow: comment.row,
      endRow: comment.row
    };
    this._disposableMap.set(
      this._getIdWithUnitId(unitId, subUnitId, commentId),
      this._refRangeService.registerRefRange(oldRange, (commandInfo) => {
        const resultRanges = handleCommonRangeChangeWithEffectRefCommandsSkipNoInterests(oldRange, commandInfo, { selectionManagerService: this._selectionManagerService });
        const resultRange = Array.isArray(resultRanges) ? resultRanges[0] : resultRanges;
        if (resultRange && resultRange.startColumn === oldRange.startColumn && resultRange.startRow === oldRange.startRow) {
          return {
            undos: [],
            redos: []
          };
        }
        const res = this._handleRangeChange(unitId, subUnitId, comment, resultRange, false);
        return res;
      }, unitId, subUnitId)
    );
  }
  _watch(unitId, subUnitId, comment) {
    const commentId = comment.id;
    const oldRange = {
      startColumn: comment.column,
      endColumn: comment.column,
      startRow: comment.row,
      endRow: comment.row
    };
    this._watcherMap.set(
      this._getIdWithUnitId(unitId, subUnitId, commentId),
      this._refRangeService.watchRange(unitId, subUnitId, oldRange, (before, after) => {
        const { redos } = this._handleRangeChange(unitId, subUnitId, comment, after, true);
        sequenceExecuteAsync(redos, this._commandService, { onlyLocal: true });
      }, true)
    );
  }
  _unwatch(unitId, subUnitId, commentId) {
    var _a;
    const id = this._getIdWithUnitId(unitId, subUnitId, commentId);
    (_a = this._watcherMap.get(id)) == null ? void 0 : _a.dispose();
    this._watcherMap.delete(id);
  }
  _unregister(unitId, subUnitId, commentId) {
    var _a;
    const id = this._getIdWithUnitId(unitId, subUnitId, commentId);
    (_a = this._disposableMap.get(id)) == null ? void 0 : _a.dispose();
    this._disposableMap.delete(id);
  }
  _initData() {
    const datas = this._threadCommentModel.getAll();
    for (const data of datas) {
      for (const thread of data.threads) {
        const { unitId, subUnitId, root } = thread;
        const pos = singleReferenceToGrid(root.ref);
        const sheetComment = {
          ...root,
          ...pos
        };
        this._register(unitId, subUnitId, sheetComment);
        this._watch(unitId, subUnitId, sheetComment);
      }
    }
  }
  _initRefRange() {
    this.disposeWithMe(
      this._sheetsThreadCommentModel.commentUpdate$.subscribe((option) => {
        const { unitId, subUnitId } = option;
        switch (option.type) {
          case "add": {
            if (option.payload.parentId) {
              return;
            }
            const comment = {
              ...option.payload,
              row: option.row,
              column: option.column
            };
            this._register(option.unitId, option.subUnitId, comment);
            this._watch(option.unitId, option.subUnitId, comment);
            break;
          }
          case "delete": {
            this._unregister(unitId, subUnitId, option.payload.commentId);
            this._unwatch(unitId, subUnitId, option.payload.commentId);
            break;
          }
          case "updateRef": {
            const comment = this._sheetsThreadCommentModel.getComment(unitId, subUnitId, option.payload.commentId);
            if (!comment) {
              return;
            }
            this._unregister(unitId, subUnitId, option.payload.commentId);
            const sheetComment = {
              ...comment,
              row: option.row,
              column: option.column
            };
            if (!option.silent) {
              this._unwatch(unitId, subUnitId, option.payload.commentId);
              this._watch(unitId, subUnitId, sheetComment);
            }
            this._register(option.unitId, option.subUnitId, sheetComment);
            break;
          }
        }
      })
    );
    this.disposeWithMe(toDisposable(() => {
      this._disposableMap.forEach((item) => {
        item.dispose();
      });
      this._disposableMap.clear();
    }));
  }
};
SheetsThreadCommentRefRangeController = __decorateClass([
  __decorateParam(0, Inject(RefRangeService)),
  __decorateParam(1, Inject(SheetsThreadCommentModel)),
  __decorateParam(2, Inject(ThreadCommentModel)),
  __decorateParam(3, Inject(SheetsSelectionsService)),
  __decorateParam(4, ICommandService)
], SheetsThreadCommentRefRangeController);

// ../packages/sheets-thread-comment/src/types/const.ts
var SHEET_THREAD_COMMENT_BASE = "SHEET_THREAD_COMMENT_BASE_PLUGIN";

// ../packages/sheets-thread-comment/src/plugin.ts
var UniverSheetsThreadCommentPlugin = class extends Plugin {
  constructor(config, _injector, _commandService) {
    super();
    this._injector = _injector;
    this._commandService = _commandService;
  }
  onStarting() {
    [
      [SheetsThreadCommentModel],
      [SheetsThreadCommentRefRangeController]
    ].forEach((dep) => {
      this._injector.add(dep);
    });
    this._injector.get(SheetsThreadCommentRefRangeController);
  }
};
__publicField(UniverSheetsThreadCommentPlugin, "pluginName", SHEET_THREAD_COMMENT_BASE);
__publicField(UniverSheetsThreadCommentPlugin, "type", O.UNIVER_SHEET);
UniverSheetsThreadCommentPlugin = __decorateClass([
  DependentOn(UniverThreadCommentPlugin),
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, Inject(ICommandService))
], UniverSheetsThreadCommentPlugin);

export {
  SheetsThreadCommentModel,
  UniverSheetsThreadCommentPlugin
};
//# sourceMappingURL=chunk-5E7O4A6V.js.map
