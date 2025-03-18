import {
  BreakLineCommand,
  IEditorService,
  ISidebarService,
  RichTextEditor,
  useDependency,
  useObservable
} from "./chunk-DOZPYWOG.js";
import {
  Button,
  Dropdown,
  Select,
  Tooltip,
  clsx,
  delete_single_default,
  increase_single_default,
  more_horizontal_single_default,
  reply_to_comment_single_default,
  require_jsx_runtime,
  require_react,
  resolved_single_default,
  solve_single_default
} from "./chunk-22LKBS37.js";
import {
  BehaviorSubject,
  BuildTextUtils,
  DOCS_NORMAL_EDITOR_UNIT_ID_KEY,
  DependentOn,
  Disposable,
  ICommandService,
  IConfigService,
  IResourceManagerService,
  IUniverInstanceService,
  Inject,
  Injector,
  LifecycleService,
  LocaleService,
  O,
  Plugin,
  Subject,
  Tools,
  UserManagerService,
  createIdentifier,
  debounceTime,
  filter,
  generateRandomId,
  getBodySlice,
  import_dayjs,
  mergeOverrideWithDependencies,
  merge_default
} from "./chunk-33NDYU5R.js";
import {
  __decorateClass,
  __decorateParam,
  __publicField,
  __toESM
} from "./chunk-NSSCU2QI.js";

// ../packages/thread-comment/src/services/tc-datasource.service.ts
var ThreadCommentDataSourceService = class extends Disposable {
  constructor() {
    super();
    __publicField(this, "_dataSource", null);
    __publicField(this, "syncUpdateMutationToColla", true);
  }
  set dataSource(dataSource) {
    this._dataSource = dataSource;
  }
  get dataSource() {
    return this._dataSource;
  }
  async getThreadComment(unitId, subUnitId, threadId) {
    if (this._dataSource) {
      const comments = await this._dataSource.listComments(unitId, subUnitId, [threadId]);
      return comments[0];
    }
    return null;
  }
  async addComment(comment) {
    var _a;
    if (this._dataSource) {
      return this._dataSource.addComment(comment);
    }
    return { ...comment, threadId: (_a = comment.threadId) != null ? _a : comment.id };
  }
  async updateComment(comment) {
    if (this._dataSource) {
      return this._dataSource.updateComment(comment);
    }
    return true;
  }
  async resolveComment(comment) {
    if (this._dataSource) {
      return this._dataSource.resolveComment(comment);
    }
    return true;
  }
  async deleteComment(unitId, subUnitId, threadId, commentId) {
    if (this._dataSource) {
      return this._dataSource.deleteComment(unitId, subUnitId, threadId, commentId);
    }
    return true;
  }
  async listThreadComments(unitId, subUnitId, threadIds) {
    if (this.dataSource) {
      return this.dataSource.listComments(unitId, subUnitId, threadIds);
    }
    return false;
  }
  saveToSnapshot(unitComments, unitId) {
    if (this._dataSource) {
      const map = {};
      Object.keys(unitComments).forEach((subUnitId) => {
        const comments = unitComments[subUnitId];
        map[subUnitId] = comments.map(this.dataSource.saveCommentToSnapshot);
      });
      return map;
    }
    return unitComments;
  }
};
var IThreadCommentDataSourceService = createIdentifier("univer.thread-comment.data-source-service");

// ../packages/thread-comment/src/models/thread-comment.model.ts
var ThreadCommentModel = class extends Disposable {
  constructor(_dataSourceService, _lifecycleService) {
    super();
    this._dataSourceService = _dataSourceService;
    this._lifecycleService = _lifecycleService;
    __publicField(this, "_commentsMap", /* @__PURE__ */ new Map());
    __publicField(this, "_threadMap", /* @__PURE__ */ new Map());
    __publicField(this, "_commentUpdate$", new Subject());
    __publicField(this, "commentUpdate$", this._commentUpdate$.asObservable());
    __publicField(this, "_tasks", []);
    this.disposeWithMe(() => {
      this._commentUpdate$.complete();
    });
    this.disposeWithMe(this._lifecycleService.lifecycle$.subscribe((stage) => {
      const taskMap = /* @__PURE__ */ new Map();
      if (stage === 2 /* Rendered */) {
        this._tasks.forEach(({ unitId, subUnitId, threadIds }) => {
          let unitMap = taskMap.get(unitId);
          if (!unitMap) {
            unitMap = /* @__PURE__ */ new Map();
            taskMap.set(unitId, unitMap);
          }
          let subUnitMap = unitMap.get(subUnitId);
          if (!subUnitMap) {
            subUnitMap = /* @__PURE__ */ new Set();
            unitMap.set(subUnitId, subUnitMap);
          }
          for (const threadId of threadIds) {
            subUnitMap.add(threadId);
          }
        });
        this._tasks = [];
        taskMap.forEach((subUnitMap, unitId) => {
          subUnitMap.forEach((threadIds, subUnitId) => {
            this.syncThreadComments(unitId, subUnitId, Array.from(threadIds));
          });
        });
      }
    }));
  }
  _ensureCommentMap(unitId, subUnitId) {
    let unitMap = this._commentsMap.get(unitId);
    if (!unitMap) {
      unitMap = /* @__PURE__ */ new Map();
      this._commentsMap.set(unitId, unitMap);
    }
    let subUnitMap = unitMap.get(subUnitId);
    if (!subUnitMap) {
      subUnitMap = /* @__PURE__ */ new Map();
      unitMap.set(subUnitId, subUnitMap);
    }
    return subUnitMap;
  }
  ensureMap(unitId, subUnitId) {
    return this._ensureCommentMap(unitId, subUnitId);
  }
  _ensureThreadMap(unitId, subUnitId) {
    let unitMap = this._threadMap.get(unitId);
    if (!unitMap) {
      unitMap = /* @__PURE__ */ new Map();
      this._threadMap.set(unitId, unitMap);
    }
    let subUnitMap = unitMap.get(subUnitId);
    if (!subUnitMap) {
      subUnitMap = /* @__PURE__ */ new Map();
      unitMap.set(subUnitId, subUnitMap);
    }
    return subUnitMap;
  }
  _replaceComment(unitId, subUnitId, comment) {
    const commentMap = this._ensureCommentMap(unitId, subUnitId);
    const currentComment = commentMap.get(comment.id);
    if (currentComment) {
      const { children, ...rest } = comment;
      const newComment = {
        ...rest,
        ref: currentComment.ref
      };
      commentMap.set(comment.id, newComment);
      children == null ? void 0 : children.forEach((child) => {
        commentMap.set(child.id, {
          ...child,
          ref: ""
        });
      });
      this._commentUpdate$.next({
        unitId,
        subUnitId,
        type: "syncUpdate",
        payload: newComment
      });
      if (Boolean(comment.resolved) !== Boolean(currentComment.resolved)) {
        this._commentUpdate$.next({
          unitId,
          subUnitId,
          type: "resolve",
          payload: {
            commentId: comment.id,
            resolved: Boolean(comment.resolved)
          }
        });
      }
    }
  }
  async syncThreadComments(unitId, subUnitId, threadIds) {
    if (this._lifecycleService.stage < 2 /* Rendered */) {
      this._tasks.push({ unitId, subUnitId, threadIds });
      return;
    }
    const threadMap = this._ensureThreadMap(unitId, subUnitId);
    const commentMap = this._ensureCommentMap(unitId, subUnitId);
    const comments = await this._dataSourceService.listThreadComments(unitId, subUnitId, threadIds);
    if (!comments) {
      return;
    }
    const deleteThreads = new Set(threadIds);
    comments.forEach((comment) => {
      this._replaceComment(unitId, subUnitId, comment);
      deleteThreads.delete(comment.threadId);
    });
    deleteThreads.forEach((id) => {
      threadMap.delete(id);
      commentMap.forEach((comment, commentId) => {
        if (comment.threadId === id) {
          commentMap.delete(commentId);
        }
      });
    });
  }
  addComment(unitId, subUnitId, origin, shouldSync) {
    const commentMap = this._ensureCommentMap(unitId, subUnitId);
    const { parentId, children = [], ...rest } = origin;
    const comment = {
      ...rest,
      parentId: parentId === origin.id ? void 0 : parentId
    };
    if (!comment.threadId) {
      comment.threadId = comment.parentId || comment.id;
    }
    const addCommentItem = (item) => {
      commentMap.set(item.id, item);
      this._commentUpdate$.next({
        unitId,
        subUnitId,
        type: "add",
        payload: item,
        isRoot: !item.parentId
      });
    };
    addCommentItem(comment);
    const threadMap = this._ensureThreadMap(unitId, subUnitId);
    if (!comment.parentId) {
      threadMap.set(comment.threadId, comment);
      for (const child of children) {
        addCommentItem(child);
      }
    }
    if (shouldSync) {
      this.syncThreadComments(unitId, subUnitId, [comment.threadId]);
    }
    return true;
  }
  updateComment(unitId, subUnitId, payload, silent) {
    const commentMap = this._ensureCommentMap(unitId, subUnitId);
    const oldComment = commentMap.get(payload.commentId);
    if (!oldComment) {
      return true;
    }
    oldComment.updated = true;
    oldComment.text = payload.text;
    oldComment.attachments = payload.attachments;
    oldComment.updateT = payload.updateT;
    this._commentUpdate$.next({
      unitId,
      subUnitId,
      type: "update",
      payload,
      silent
    });
    return true;
  }
  updateCommentRef(unitId, subUnitId, payload, silent) {
    const commentMap = this._ensureCommentMap(unitId, subUnitId);
    const oldComment = commentMap.get(payload.commentId);
    if (!oldComment) {
      return false;
    }
    oldComment.ref = payload.ref;
    this._commentUpdate$.next({
      unitId,
      subUnitId,
      type: "updateRef",
      payload,
      silent,
      threadId: oldComment.threadId
    });
    return true;
  }
  resolveComment(unitId, subUnitId, commentId, resolved) {
    const commentMap = this._ensureCommentMap(unitId, subUnitId);
    const oldComment = commentMap.get(commentId);
    if (!oldComment) {
      return false;
    }
    oldComment.resolved = resolved;
    this._commentUpdate$.next({
      unitId,
      subUnitId,
      type: "resolve",
      payload: {
        commentId,
        resolved
      }
    });
    return true;
  }
  getComment(unitId, subUnitId, commentId) {
    const commentMap = this._ensureCommentMap(unitId, subUnitId);
    return commentMap.get(commentId);
  }
  getRootComment(unitId, subUnitId, threadId) {
    const threadMap = this._ensureThreadMap(unitId, subUnitId);
    return threadMap.get(threadId);
  }
  getThread(unitId, subUnitId, threadId) {
    const commentMap = this._ensureCommentMap(unitId, subUnitId);
    const comments = Array.from(commentMap.values()).filter((comment) => comment.threadId === threadId);
    let root;
    const children = [];
    const relativeUsers = /* @__PURE__ */ new Set();
    for (const comment of comments) {
      if (!comment.parentId) {
        root = comment;
      } else {
        children.push(comment);
      }
      relativeUsers.add(comment.personId);
    }
    if (!root) {
      return void 0;
    }
    return {
      root,
      children,
      relativeUsers,
      unitId,
      subUnitId,
      threadId
    };
  }
  getCommentWithChildren(unitId, subUnitId, commentId) {
    const comment = this.getComment(unitId, subUnitId, commentId);
    if (!comment) {
      return void 0;
    }
    return this.getThread(unitId, subUnitId, comment.threadId);
  }
  _deleteComment(unitId, subUnitId, commentId) {
    const commentMap = this._ensureCommentMap(unitId, subUnitId);
    const current = commentMap.get(commentId);
    if (!current) {
      return;
    }
    commentMap.delete(commentId);
    this._commentUpdate$.next({
      unitId,
      subUnitId,
      type: "delete",
      payload: {
        commentId,
        isRoot: !current.parentId,
        comment: current
      }
    });
  }
  deleteThread(unitId, subUnitId, threadId) {
    const threadMap = this._ensureThreadMap(unitId, subUnitId);
    threadMap.delete(threadId);
    const commentMap = this._ensureCommentMap(unitId, subUnitId);
    commentMap.forEach((comment) => {
      if (comment.threadId === threadId) {
        this._deleteComment(unitId, subUnitId, comment.id);
      }
    });
  }
  deleteComment(unitId, subUnitId, commentId) {
    const commentMap = this._ensureCommentMap(unitId, subUnitId);
    const current = commentMap.get(commentId);
    if (!current) {
      return true;
    }
    if (current.parentId) {
      this._deleteComment(unitId, subUnitId, commentId);
    } else {
      this.deleteThread(unitId, subUnitId, current.threadId);
    }
    return true;
  }
  deleteUnit(unitId) {
    const unitMap = this._commentsMap.get(unitId);
    if (!unitMap) {
      return;
    }
    unitMap.forEach((subUnitMap, subUnitId) => {
      subUnitMap.forEach((comment) => {
        this.deleteComment(unitId, subUnitId, comment.id);
      });
    });
  }
  getUnit(unitId) {
    const unitMap = this._threadMap.get(unitId);
    if (!unitMap) {
      return [];
    }
    const threads = [];
    unitMap.forEach((subUnitSet, subUnitId) => {
      subUnitSet.forEach((threadComment, threadId) => {
        const thread = this.getThread(unitId, subUnitId, threadId);
        if (thread) {
          threads.push(thread);
        }
      });
    });
    return threads;
  }
  getAll() {
    const all = [];
    this._commentsMap.forEach((unitMap, unitId) => {
      all.push({
        unitId,
        threads: this.getUnit(unitId)
      });
    });
    return all;
  }
};
ThreadCommentModel = __decorateClass([
  __decorateParam(0, Inject(IThreadCommentDataSourceService)),
  __decorateParam(1, Inject(LifecycleService))
], ThreadCommentModel);

// ../packages/thread-comment/src/types/const/index.ts
var TC_PLUGIN_NAME = "UNIVER_THREAD_COMMENT_PLUGIN";

// ../packages/thread-comment/src/controllers/tc-resource.controller.ts
var SHEET_UNIVER_THREAD_COMMENT_PLUGIN = `SHEET_${TC_PLUGIN_NAME}`;
var ThreadCommentResourceController = class extends Disposable {
  constructor(_resourceManagerService, _threadCommentModel, _threadCommentDataSourceService) {
    super();
    this._resourceManagerService = _resourceManagerService;
    this._threadCommentModel = _threadCommentModel;
    this._threadCommentDataSourceService = _threadCommentDataSourceService;
    this._initSnapshot();
  }
  _initSnapshot() {
    const toJson = (unitID) => {
      const map = this._threadCommentModel.getUnit(unitID);
      const resultMap = {};
      if (map) {
        map.forEach((info) => {
          var _a;
          const subUnitComments = (_a = resultMap[info.subUnitId]) != null ? _a : [];
          subUnitComments.push({
            ...info.root,
            children: info.children
          });
          resultMap[info.subUnitId] = subUnitComments;
        });
        return JSON.stringify(this._threadCommentDataSourceService.saveToSnapshot(resultMap, unitID));
      }
      return "";
    };
    const parseJson = (json) => {
      if (!json) {
        return {};
      }
      try {
        return JSON.parse(json);
      } catch (err) {
        return {};
      }
    };
    this.disposeWithMe(
      this._resourceManagerService.registerPluginResource({
        pluginName: SHEET_UNIVER_THREAD_COMMENT_PLUGIN,
        businesses: [O.UNIVER_SHEET, O.UNIVER_DOC],
        toJson: (unitID) => toJson(unitID),
        parseJson: (json) => parseJson(json),
        onUnLoad: (unitID) => {
          this._threadCommentModel.deleteUnit(unitID);
        },
        onLoad: async (unitID, value) => {
          Object.keys(value).forEach((subunitId) => {
            const commentList = value[subunitId];
            commentList.forEach((comment) => {
              this._threadCommentModel.addComment(unitID, subunitId, comment);
            });
            this._threadCommentModel.syncThreadComments(unitID, subunitId, commentList.map((i) => i.threadId));
          });
        }
      })
    );
  }
};
ThreadCommentResourceController = __decorateClass([
  __decorateParam(0, IResourceManagerService),
  __decorateParam(1, Inject(ThreadCommentModel)),
  __decorateParam(2, IThreadCommentDataSourceService)
], ThreadCommentResourceController);

// ../packages/thread-comment/src/commands/mutations/comment.mutation.ts
var AddCommentMutation = {
  id: "thread-comment.mutation.add-comment",
  type: 2 /* MUTATION */,
  handler(accessor, params, options) {
    if (!params) {
      return false;
    }
    const threadCommentModel = accessor.get(ThreadCommentModel);
    const { unitId, subUnitId, comment, sync } = params;
    const shouldSync = sync || (options == null ? void 0 : options.fromChangeset) && !comment.parentId;
    return threadCommentModel.addComment(unitId, subUnitId, comment, shouldSync);
  }
};
var UpdateCommentMutation = {
  id: "thread-comment.mutation.update-comment",
  type: 2 /* MUTATION */,
  handler(accessor, params) {
    if (!params) {
      return false;
    }
    const threadCommentModel = accessor.get(ThreadCommentModel);
    const { unitId, subUnitId, payload, silent } = params;
    return threadCommentModel.updateComment(unitId, subUnitId, payload, silent);
  }
};
var UpdateCommentRefMutation = {
  id: "thread-comment.mutation.update-comment-ref",
  type: 2 /* MUTATION */,
  handler(accessor, params) {
    if (!params) {
      return false;
    }
    const threadCommentModel = accessor.get(ThreadCommentModel);
    const { unitId, subUnitId, payload, silent } = params;
    return threadCommentModel.updateCommentRef(unitId, subUnitId, payload, silent);
  }
};
var ResolveCommentMutation = {
  id: "thread-comment.mutation.resolve-comment",
  type: 2 /* MUTATION */,
  handler(accessor, params) {
    if (!params) {
      return false;
    }
    const threadCommentModel = accessor.get(ThreadCommentModel);
    const { unitId, subUnitId, resolved, commentId } = params;
    return threadCommentModel.resolveComment(unitId, subUnitId, commentId, resolved);
  }
};
var DeleteCommentMutation = {
  id: "thread-comment.mutation.delete-comment",
  type: 2 /* MUTATION */,
  handler(accessor, params) {
    if (!params) {
      return false;
    }
    const threadCommentModel = accessor.get(ThreadCommentModel);
    const { unitId, subUnitId, commentId } = params;
    return threadCommentModel.deleteComment(unitId, subUnitId, commentId);
  }
};

// ../packages/thread-comment/src/commands/commands/comment.command.ts
var AddCommentCommand = {
  id: "thread-comment.command.add-comment",
  type: 0 /* COMMAND */,
  async handler(accessor, params) {
    if (!params) {
      return false;
    }
    const commandService = accessor.get(ICommandService);
    const dataSourceService = accessor.get(IThreadCommentDataSourceService);
    const { comment: originComment } = params;
    const comment = await dataSourceService.addComment(originComment);
    const syncUpdateMutationToColla = dataSourceService.syncUpdateMutationToColla;
    const isRoot = !originComment.parentId;
    const redo = {
      id: AddCommentMutation.id,
      params: {
        ...params,
        comment
      }
    };
    if (isRoot) {
      const res = await commandService.executeCommand(redo.id, redo.params);
      return res;
    }
    return commandService.executeCommand(redo.id, redo.params, {
      onlyLocal: !syncUpdateMutationToColla
    });
  }
};
var UpdateCommentCommand = {
  id: "thread-comment.command.update-comment",
  type: 0 /* COMMAND */,
  async handler(accessor, params) {
    if (!params) {
      return false;
    }
    const { unitId, subUnitId, payload } = params;
    const commandService = accessor.get(ICommandService);
    const threadCommentModel = accessor.get(ThreadCommentModel);
    const dataSourceService = accessor.get(IThreadCommentDataSourceService);
    const syncUpdateMutationToColla = dataSourceService.syncUpdateMutationToColla;
    const current = threadCommentModel.getComment(
      unitId,
      subUnitId,
      payload.commentId
    );
    if (!current) {
      return false;
    }
    const { children, ...currentComment } = current;
    const success = await dataSourceService.updateComment({
      ...currentComment,
      ...payload
    });
    if (!success) {
      return false;
    }
    const redo = {
      id: UpdateCommentMutation.id,
      params
    };
    commandService.executeCommand(redo.id, redo.params, { onlyLocal: !syncUpdateMutationToColla });
    return true;
  }
};
var ResolveCommentCommand = {
  id: "thread-comment.command.resolve-comment",
  type: 0 /* COMMAND */,
  async handler(accessor, params) {
    if (!params) {
      return false;
    }
    const { unitId, subUnitId, resolved, commentId } = params;
    const dataSourceService = accessor.get(IThreadCommentDataSourceService);
    const threadCommentModel = accessor.get(ThreadCommentModel);
    const currentComment = threadCommentModel.getComment(unitId, subUnitId, commentId);
    const syncUpdateMutationToColla = dataSourceService.syncUpdateMutationToColla;
    if (!currentComment) {
      return false;
    }
    const success = await dataSourceService.resolveComment({
      ...currentComment,
      resolved
    });
    if (!success) {
      return false;
    }
    const commandService = accessor.get(ICommandService);
    return commandService.executeCommand(
      ResolveCommentMutation.id,
      params,
      { onlyLocal: !syncUpdateMutationToColla }
    );
  }
};
var DeleteCommentCommand = {
  id: "thread-comment.command.delete-comment",
  type: 0 /* COMMAND */,
  async handler(accessor, params) {
    if (!params) {
      return false;
    }
    const threadCommentModel = accessor.get(ThreadCommentModel);
    const dataSourceService = accessor.get(IThreadCommentDataSourceService);
    const commandService = accessor.get(ICommandService);
    const { unitId, subUnitId, commentId } = params;
    const syncUpdateMutationToColla = dataSourceService.syncUpdateMutationToColla;
    const comment = threadCommentModel.getComment(unitId, subUnitId, commentId);
    if (!comment) {
      return false;
    }
    if (!await dataSourceService.deleteComment(unitId, subUnitId, comment.threadId, commentId)) {
      return false;
    }
    const redo = {
      id: DeleteCommentMutation.id,
      params
    };
    return commandService.executeCommand(redo.id, redo.params, { onlyLocal: !syncUpdateMutationToColla });
  }
};
var DeleteCommentTreeCommand = {
  id: "thread-comment.command.delete-comment-tree",
  type: 0 /* COMMAND */,
  async handler(accessor, params) {
    if (!params) {
      return false;
    }
    const threadCommentModel = accessor.get(ThreadCommentModel);
    const commandService = accessor.get(ICommandService);
    const dataSourceService = accessor.get(IThreadCommentDataSourceService);
    const { unitId, subUnitId, commentId } = params;
    const commentWithChildren = threadCommentModel.getCommentWithChildren(unitId, subUnitId, commentId);
    if (!commentWithChildren) {
      return false;
    }
    if (!await dataSourceService.deleteComment(unitId, subUnitId, commentWithChildren.root.threadId, commentId)) {
      return false;
    }
    return await commandService.executeCommand(DeleteCommentMutation.id, {
      unitId,
      subUnitId,
      commentId: commentWithChildren.root.id
    });
  }
};

// ../packages/thread-comment/src/controllers/config.schema.ts
var THREAD_COMMENT_PLUGIN_CONFIG_KEY = "thread-comment.config";
var configSymbol = Symbol(THREAD_COMMENT_PLUGIN_CONFIG_KEY);
var defaultPluginConfig = {};

// ../packages/thread-comment/src/plugin.ts
var UniverThreadCommentPlugin = class extends Plugin {
  constructor(_config = defaultPluginConfig, _injector, _commandService, _configService) {
    super();
    this._config = _config;
    this._injector = _injector;
    this._commandService = _commandService;
    this._configService = _configService;
    const { ...rest } = merge_default(
      {},
      defaultPluginConfig,
      this._config
    );
    this._configService.setConfig(THREAD_COMMENT_PLUGIN_CONFIG_KEY, rest);
  }
  onStarting() {
    var _a;
    mergeOverrideWithDependencies([
      [IThreadCommentDataSourceService, { useClass: ThreadCommentDataSourceService }],
      [ThreadCommentModel],
      [ThreadCommentResourceController]
    ], (_a = this._config) == null ? void 0 : _a.overrides).forEach(
      (d) => {
        this._injector.add(d);
      }
    );
    [
      AddCommentCommand,
      UpdateCommentCommand,
      DeleteCommentCommand,
      ResolveCommentCommand,
      DeleteCommentTreeCommand,
      AddCommentMutation,
      UpdateCommentMutation,
      UpdateCommentRefMutation,
      DeleteCommentMutation,
      ResolveCommentMutation
    ].forEach((command) => {
      this._commandService.registerCommand(command);
    });
    this._injector.get(ThreadCommentResourceController);
  }
};
__publicField(UniverThreadCommentPlugin, "pluginName", TC_PLUGIN_NAME);
__publicField(UniverThreadCommentPlugin, "type", O.UNIVER_UNKNOWN);
UniverThreadCommentPlugin = __decorateClass([
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, ICommandService),
  __decorateParam(3, IConfigService)
], UniverThreadCommentPlugin);

// ../packages/thread-comment/src/common/utils.ts
function getDT(date) {
  return (0, import_dayjs.default)(date).format("YYYY/MM/DD HH:mm");
}

// ../packages/thread-comment-ui/src/services/thread-comment-panel.service.ts
var ThreadCommentPanelService = class extends Disposable {
  constructor(_sidebarService, _univerInstanceService) {
    super();
    this._sidebarService = _sidebarService;
    this._univerInstanceService = _univerInstanceService;
    __publicField(this, "_panelVisible", false);
    __publicField(this, "_panelVisible$", new BehaviorSubject(false));
    __publicField(this, "_activeCommentId");
    __publicField(this, "_activeCommentId$", new BehaviorSubject(void 0));
    __publicField(this, "panelVisible$", this._panelVisible$.asObservable());
    __publicField(this, "activeCommentId$", this._activeCommentId$.asObservable());
    this._init();
    this.disposeWithMe(() => {
      this._activeCommentId$.complete();
      this._panelVisible$.complete();
    });
  }
  _init() {
    this.disposeWithMe(
      this._sidebarService.sidebarOptions$.subscribe((opt) => {
        if (!opt.visible) {
          this.setPanelVisible(false);
        }
      })
    );
    this.disposeWithMe(
      this._univerInstanceService.getCurrentTypeOfUnit$(O.UNIVER_SHEET).pipe(filter((sheet) => !sheet)).subscribe(() => {
        this._sidebarService.close();
      })
    );
  }
  get panelVisible() {
    return this._panelVisible;
  }
  get activeCommentId() {
    return this._activeCommentId;
  }
  setPanelVisible(visible) {
    this._panelVisible = visible;
    this._panelVisible$.next(visible);
  }
  setActiveComment(commentInfo) {
    this._activeCommentId = commentInfo;
    this._activeCommentId$.next(commentInfo);
  }
};
ThreadCommentPanelService = __decorateClass([
  __decorateParam(0, Inject(ISidebarService)),
  __decorateParam(1, IUniverInstanceService)
], ThreadCommentPanelService);

// ../packages/thread-comment-ui/src/types/const.ts
var THREAD_COMMENT_PANEL = "thread-comment-panel";
var PLUGIN_NAME = "UNIVER_THREAD_COMMENT_UI_PLUGIN";

// ../packages/thread-comment-ui/src/commands/operations/comment.operations.ts
var ToggleSheetCommentPanelOperation = {
  id: "thread-comment-ui.operation.toggle-panel",
  type: 1 /* OPERATION */,
  handler(accessor) {
    const sidebarService = accessor.get(ISidebarService);
    const panelService = accessor.get(ThreadCommentPanelService);
    if (panelService.panelVisible) {
      sidebarService.close();
      panelService.setPanelVisible(false);
    } else {
      sidebarService.open({
        header: { title: "threadCommentUI.panel.title" },
        children: { label: THREAD_COMMENT_PANEL },
        width: 330
      });
      panelService.setPanelVisible(true);
    }
    return true;
  }
};
var SetActiveCommentOperation = {
  id: "thread-comment-ui.operation.set-active-comment",
  type: 1 /* OPERATION */,
  handler(accessor, params) {
    const panelService = accessor.get(ThreadCommentPanelService);
    panelService.setActiveComment(params);
    return true;
  }
};

// ../packages/thread-comment-ui/src/controllers/config.schema.ts
var THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY = "thread-comment-ui.config";
var configSymbol2 = Symbol(THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY);
var defaultPluginConfig2 = {};

// ../packages/thread-comment-ui/src/plugin.ts
var UniverThreadCommentUIPlugin = class extends Plugin {
  constructor(_config = defaultPluginConfig2, _injector, _commandService, _configService) {
    super();
    this._config = _config;
    this._injector = _injector;
    this._commandService = _commandService;
    this._configService = _configService;
    const { menu, ...rest } = merge_default(
      {},
      defaultPluginConfig2,
      this._config
    );
    if (menu) {
      this._configService.setConfig("menu", menu, { merge: true });
    }
    this._configService.setConfig(THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY, rest);
  }
  onStarting() {
    var _a;
    mergeOverrideWithDependencies([
      [ThreadCommentPanelService]
    ], (_a = this._config) == null ? void 0 : _a.overrides).forEach((dep) => {
      this._injector.add(dep);
    });
    [ToggleSheetCommentPanelOperation, SetActiveCommentOperation].forEach((command) => {
      this._commandService.registerCommand(command);
    });
  }
};
__publicField(UniverThreadCommentUIPlugin, "pluginName", PLUGIN_NAME);
__publicField(UniverThreadCommentUIPlugin, "type", O.UNIVER_UNKNOWN);
UniverThreadCommentUIPlugin = __decorateClass([
  DependentOn(UniverThreadCommentPlugin),
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, ICommandService),
  __decorateParam(3, IConfigService)
], UniverThreadCommentUIPlugin);

// ../packages/thread-comment-ui/src/views/thread-comment-panel/index.tsx
var import_react3 = __toESM(require_react());

// ../packages/thread-comment-ui/src/views/thread-comment-tree/index.tsx
var import_react2 = __toESM(require_react());

// ../packages/thread-comment-ui/src/views/thread-comment-editor/index.tsx
var import_react = __toESM(require_react());

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages/thread-comment-ui/src/views/thread-comment-editor/index.module.less
var index_module_default = {
  "threadCommentEditorButtons": "univer-thread-comment-editor-buttons",
  "threadCommentEditorSuggestion": "univer-thread-comment-editor-suggestion",
  "threadCommentEditorSuggestionActive": "univer-thread-comment-editor-suggestionActive",
  "threadCommentEditorSuggestionIcon": "univer-thread-comment-editor-suggestion-icon"
};

// ../packages/thread-comment-ui/src/views/thread-comment-editor/index.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
function getSnapshot(body) {
  return {
    id: "d",
    body,
    documentStyle: {}
  };
}
var ThreadCommentEditor = (0, import_react.forwardRef)((props, ref) => {
  var _a;
  const { comment, onSave, id, onCancel, autoFocus, unitId, type } = props;
  const commandService = useDependency(ICommandService);
  const localeService = useDependency(LocaleService);
  const [editing, setEditing] = (0, import_react.useState)(false);
  const editorService = useDependency(IEditorService);
  const editor = (0, import_react.useRef)(null);
  const rootEditorId = type === O.UNIVER_SHEET ? DOCS_NORMAL_EDITOR_UNIT_ID_KEY : unitId;
  const [canSubmit, setCanSubmit] = (0, import_react.useState)(() => {
    var _a2, _b, _c;
    return BuildTextUtils.transform.getPlainText((_c = (_b = (_a2 = editor.current) == null ? void 0 : _a2.getDocumentData().body) == null ? void 0 : _b.dataStream) != null ? _c : "");
  });
  (0, import_react.useEffect)(() => {
    var _a2, _b, _c, _d;
    setCanSubmit(BuildTextUtils.transform.getPlainText((_c = (_b = (_a2 = editor.current) == null ? void 0 : _a2.getDocumentData().body) == null ? void 0 : _b.dataStream) != null ? _c : ""));
    const sub = (_d = editor.current) == null ? void 0 : _d.selectionChange$.subscribe(() => {
      var _a3, _b2, _c2;
      setCanSubmit(BuildTextUtils.transform.getPlainText((_c2 = (_b2 = (_a3 = editor.current) == null ? void 0 : _a3.getDocumentData().body) == null ? void 0 : _b2.dataStream) != null ? _c2 : ""));
    });
    return () => sub == null ? void 0 : sub.unsubscribe();
  }, [(_a = editor.current) == null ? void 0 : _a.selectionChange$]);
  const keyboardEventConfig = (0, import_react.useMemo)(() => ({
    keyCodes: [{ keyCode: 13 /* ENTER */ }],
    handler: (keyCode) => {
      if (keyCode === 13 /* ENTER */) {
        commandService.executeCommand(
          BreakLineCommand.id
        );
      }
    }
  }), [commandService]);
  (0, import_react.useImperativeHandle)(ref, () => ({
    reply(text) {
      var _a2, _b;
      (_a2 = editor.current) == null ? void 0 : _a2.focus();
      (_b = editor.current) == null ? void 0 : _b.setDocumentData(getSnapshot(text));
    }
  }));
  const handleSave = () => {
    if (editor.current) {
      const newText = Tools.deepClone(editor.current.getDocumentData().body);
      setEditing(false);
      onSave == null ? void 0 : onSave({
        ...comment,
        text: newText
      });
      editor.current.replaceText("");
      setTimeout(() => {
        var _a2, _b;
        (_a2 = editor.current) == null ? void 0 : _a2.setSelectionRanges([]);
        (_b = editor.current) == null ? void 0 : _b.blur();
      }, 10);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: index_module_default.threadCommentEditor, onClick: (e) => e.preventDefault(), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      RichTextEditor,
      {
        editorRef: editor,
        autoFocus,
        style: { width: "100%" },
        keyboardEventConfig,
        placeholder: localeService.t("threadCommentUI.editor.placeholder"),
        initialValue: (comment == null ? void 0 : comment.text) && getSnapshot(comment.text),
        onFocusChange: (isFocus) => isFocus && setEditing(isFocus),
        isSingle: false,
        maxHeight: 64,
        onClickOutside: () => {
          setTimeout(() => {
            editorService.focus(rootEditorId);
          }, 30);
        }
      }
    ),
    editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: index_module_default.threadCommentEditorButtons, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        Button,
        {
          style: { marginRight: 12 },
          onClick: () => {
            var _a2;
            onCancel == null ? void 0 : onCancel();
            setEditing(false);
            (_a2 = editor.current) == null ? void 0 : _a2.replaceText("", true);
            commandService.executeCommand(SetActiveCommentOperation.id);
          },
          children: localeService.t("threadCommentUI.editor.cancel")
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        Button,
        {
          type: "primary",
          disabled: !canSubmit,
          onClick: handleSave,
          children: localeService.t(id ? "threadCommentUI.editor.save" : "threadCommentUI.editor.reply")
        }
      )
    ] }) : null
  ] });
});

// ../packages/thread-comment-ui/src/views/thread-comment-editor/util.ts
var transformDocument2TextNodesInParagraph = (doc) => {
  const { dataStream, customRanges } = doc;
  const end = dataStream.endsWith("\r\n") ? dataStream.length - 2 : dataStream.length;
  const textNodes = [];
  let lastIndex = 0;
  customRanges == null ? void 0 : customRanges.forEach((range) => {
    if (lastIndex < range.startIndex) {
      textNodes.push({
        type: "text",
        content: dataStream.slice(lastIndex, range.startIndex)
      });
    }
    textNodes.push({
      type: "mention",
      content: {
        label: dataStream.slice(range.startIndex, range.endIndex + 1),
        id: range.rangeId
      }
    });
    lastIndex = range.endIndex + 1;
  });
  textNodes.push({
    type: "text",
    content: dataStream.slice(lastIndex, end)
  });
  return textNodes;
};
var transformDocument2TextNodes = (doc) => {
  const { paragraphs = [] } = doc;
  let lastIndex = 0;
  return paragraphs.map((paragraph) => {
    const body = getBodySlice(doc, lastIndex, paragraph.startIndex);
    lastIndex = paragraph.startIndex + 1;
    return transformDocument2TextNodesInParagraph(body);
  });
};
var transformTextNodes2Document = (nodes) => {
  let str = "";
  const customRanges = [];
  nodes.forEach((node) => {
    switch (node.type) {
      case "text":
        str += node.content;
        break;
      case "mention": {
        const start = str.length;
        str += node.content.label;
        const end = str.length - 1;
        customRanges.push({
          rangeId: node.content.id,
          rangeType: 6 /* MENTION */,
          startIndex: start,
          endIndex: end,
          properties: {}
        });
        break;
      }
      default:
        break;
    }
  });
  str += "\n\r";
  return {
    textRuns: [],
    paragraphs: [
      {
        startIndex: str.length - 2,
        paragraphStyle: {}
      }
    ],
    sectionBreaks: [
      {
        startIndex: str.length - 1
      }
    ],
    dataStream: str,
    customRanges
  };
};

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages/thread-comment-ui/src/views/thread-comment-tree/index.module.less
var index_module_default2 = {
  "threadComment": "univer-thread-comment",
  "threadCommentActive": "univer-thread-comment-active",
  "threadCommentContent": "univer-thread-comment-content",
  "threadCommentHighlight": "univer-thread-comment-highlight",
  "threadCommentIconContainer": "univer-thread-comment-icon-container",
  "threadCommentIcon": "univer-thread-comment-icon",
  "threadCommentTitle": "univer-thread-comment-title",
  "threadCommentTitlePosition": "univer-thread-comment-title-position",
  "threadCommentTitleHighlight": "univer-thread-comment-title-highlight",
  "threadCommentTitlePositionText": "univer-thread-comment-title-position-text",
  "threadCommentUsername": "univer-thread-comment-username",
  "threadCommentItem": "univer-thread-comment-item",
  "threadCommentItemHead": "univer-thread-comment-item-head",
  "threadCommentItemTitle": "univer-thread-comment-item-title",
  "threadCommentItemTitlePosition": "univer-thread-comment-item-title-position",
  "threadCommentItemTitleHighlight": "univer-thread-comment-item-title-highlight",
  "threadCommentItemTime": "univer-thread-comment-item-time",
  "threadCommentItemContent": "univer-thread-comment-item-content",
  "threadCommentItemAt": "univer-thread-comment-item-at"
};

// ../packages/thread-comment-ui/src/views/thread-comment-tree/index.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var MOCK_ID = "__mock__";
var ThreadCommentItem = (props) => {
  const { item, unitId, subUnitId, editing, onEditingChange, onReply, resolved, isRoot, onClose, onDeleteComment, type } = props;
  const commandService = useDependency(ICommandService);
  const localeService = useDependency(LocaleService);
  const userManagerService = useDependency(UserManagerService);
  const user = userManagerService.getUser(item.personId);
  const currentUser = useObservable(userManagerService.currentUser$);
  const isCommentBySelf = (currentUser == null ? void 0 : currentUser.userID) === item.personId;
  const isMock = item.id === MOCK_ID;
  const [showReply, setShowReply] = (0, import_react2.useState)(false);
  const handleDeleteItem = () => {
    if ((onDeleteComment == null ? void 0 : onDeleteComment(item)) === false) {
      return;
    }
    commandService.executeCommand(
      isRoot ? DeleteCommentTreeCommand.id : DeleteCommentCommand.id,
      {
        unitId,
        subUnitId,
        commentId: item.id
      }
    );
    if (isRoot) {
      onClose == null ? void 0 : onClose();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: index_module_default2.threadCommentItem, onMouseLeave: () => setShowReply(false), onMouseEnter: () => setShowReply(true), children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", { className: index_module_default2.threadCommentItemHead, src: user == null ? void 0 : user.avatar }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: index_module_default2.threadCommentItemTitle, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: index_module_default2.threadCommentUsername, children: (user == null ? void 0 : user.name) || " " }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
        isMock || resolved ? null : showReply ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: index_module_default2.threadCommentIcon, onClick: () => onReply(user), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(reply_to_comment_single_default, {}) }) : null,
        isCommentBySelf && !isMock && !resolved ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          Dropdown,
          {
            overlay: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "univer-rounded-lg univer-p-4 univer-theme", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
              "ul",
              {
                className: `
                                              univer-m-0 univer-grid univer-list-none univer-gap-2 univer-p-0
                                              univer-text-sm
                                              [&_a]:univer-cursor-pointer [&_a]:univer-rounded [&_a]:univer-p-1
                                            `,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    "a",
                    {
                      className: "hover:univer-bg-gray-200",
                      onClick: () => onEditingChange == null ? void 0 : onEditingChange(true),
                      children: localeService.t("threadCommentUI.item.edit")
                    }
                  ) }),
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    "a",
                    {
                      className: "hover:univer-bg-gray-200",
                      onClick: handleDeleteItem,
                      children: localeService.t("threadCommentUI.item.delete")
                    }
                  ) })
                ]
              }
            ) }),
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: index_module_default2.threadCommentIcon, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(more_horizontal_single_default, {}) })
          }
        ) : null
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: index_module_default2.threadCommentItemTime, children: item.dT }),
    editing ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      ThreadCommentEditor,
      {
        type,
        id: item.id,
        comment: item,
        onCancel: () => onEditingChange == null ? void 0 : onEditingChange(false),
        autoFocus: true,
        unitId,
        subUnitId,
        onSave: ({ text, attachments }) => {
          onEditingChange == null ? void 0 : onEditingChange(false);
          commandService.executeCommand(
            UpdateCommentCommand.id,
            {
              unitId,
              subUnitId,
              payload: {
                commentId: item.id,
                text,
                attachments
              }
            }
          );
        }
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: index_module_default2.threadCommentItemContent, children: transformDocument2TextNodes(item.text).map((paragraph, i) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { children: paragraph.map((item2, i2) => {
      switch (item2.type) {
        case "mention":
          return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("a", { className: index_module_default2.threadCommentItemAt, children: [
            item2.content.label,
            " "
          ] }, i2);
        default:
          return item2.content;
      }
    }) }, i)) })
  ] });
};
var ThreadCommentTree = (props) => {
  var _a, _b, _c;
  const {
    id,
    unitId,
    subUnitId,
    refStr,
    showEdit = true,
    onClick,
    showHighlight,
    onClose,
    getSubUnitName,
    prefix,
    autoFocus,
    onMouseEnter,
    onMouseLeave,
    onAddComment,
    onDeleteComment,
    onResolve,
    type
  } = props;
  const threadCommentModel = useDependency(ThreadCommentModel);
  const [isHover, setIsHover] = (0, import_react2.useState)(false);
  const [editingId, setEditingId] = (0, import_react2.useState)("");
  const updte$ = (0, import_react2.useMemo)(() => threadCommentModel.commentUpdate$.pipe(debounceTime(16)), [threadCommentModel]);
  useObservable(updte$);
  const comments = id ? threadCommentModel.getCommentWithChildren(unitId, subUnitId, id) : null;
  const commandService = useDependency(ICommandService);
  const userManagerService = useDependency(UserManagerService);
  const resolved = comments == null ? void 0 : comments.root.resolved;
  const currentUser = useObservable(userManagerService.currentUser$);
  const editorRef = (0, import_react2.useRef)(null);
  const renderComments = [
    ...comments ? [comments.root] : (
      // mock empty comment
      [{
        id: MOCK_ID,
        text: {
          dataStream: "\n\r"
        },
        personId: (_a = currentUser == null ? void 0 : currentUser.userID) != null ? _a : "",
        ref: refStr != null ? refStr : "",
        dT: "",
        unitId,
        subUnitId,
        threadId: ""
      }]
    ),
    ...(_b = comments == null ? void 0 : comments.children) != null ? _b : []
  ];
  const scroller = (0, import_react2.useRef)(null);
  const handleResolve = (e) => {
    e.stopPropagation();
    if (!resolved) {
      commandService.executeCommand(SetActiveCommentOperation.id);
    } else {
      commandService.executeCommand(SetActiveCommentOperation.id, {
        unitId,
        subUnitId,
        commentId: id
      });
    }
    commandService.executeCommand(ResolveCommentCommand.id, {
      unitId,
      subUnitId,
      commentId: id,
      resolved: !resolved
    });
    onResolve == null ? void 0 : onResolve(!resolved);
  };
  const handleDeleteRoot = (e) => {
    e.stopPropagation();
    commandService.executeCommand(SetActiveCommentOperation.id);
    if ((comments == null ? void 0 : comments.root) && (onDeleteComment == null ? void 0 : onDeleteComment(comments.root)) === false) {
      return;
    }
    commandService.executeCommand(
      DeleteCommentTreeCommand.id,
      {
        unitId,
        subUnitId,
        commentId: id
      }
    );
    onClose == null ? void 0 : onClose();
  };
  (0, import_react2.useEffect)(() => {
    return onMouseLeave == null ? void 0 : onMouseLeave();
  }, []);
  const subUnitName = getSubUnitName((_c = comments == null ? void 0 : comments.root.subUnitId) != null ? _c : subUnitId);
  const editorVisible = showEdit && !editingId && !resolved;
  const title = `${refStr || (comments == null ? void 0 : comments.root.ref) || ""}${subUnitName ? " \xB7 " : ""}${subUnitName}`;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      className: clsx(index_module_default2.threadComment, {
        [index_module_default2.threadCommentActive]: !resolved && (showHighlight || isHover || prefix === "cell")
      }),
      onClick,
      id: `${prefix}-${unitId}-${subUnitId}-${id}`,
      onMouseEnter: () => {
        onMouseEnter == null ? void 0 : onMouseEnter();
        setIsHover(true);
      },
      onMouseLeave: () => {
        onMouseLeave == null ? void 0 : onMouseLeave();
        setIsHover(false);
      },
      children: [
        !resolved && showHighlight ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: index_module_default2.threadCommentHighlight }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: index_module_default2.threadCommentTitle, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: index_module_default2.threadCommentTitlePosition, children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: index_module_default2.threadCommentTitleHighlight }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tooltip, { showIfEllipsis: true, title, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: index_module_default2.threadCommentTitlePositionText, children: title }) })
          ] }),
          comments ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: index_module_default2.threadCommentIconContainer, children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "div",
              {
                onClick: handleResolve,
                className: index_module_default2.threadCommentIcon,
                style: { color: resolved ? "rgb(var(--green-500))" : "" },
                children: resolved ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(resolved_single_default, {}) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(solve_single_default, {})
              }
            ),
            (currentUser == null ? void 0 : currentUser.userID) === comments.root.personId ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: index_module_default2.threadCommentIcon, onClick: handleDeleteRoot, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(delete_single_default, {}) }) : null
          ] }) : null
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: index_module_default2.threadCommentContent, ref: scroller, children: renderComments.map(
          (item) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            ThreadCommentItem,
            {
              onClose,
              unitId,
              subUnitId,
              item,
              isRoot: item.id === (comments == null ? void 0 : comments.root.id),
              editing: editingId === item.id,
              resolved: comments == null ? void 0 : comments.root.resolved,
              type,
              onEditingChange: (editing) => {
                if (editing) {
                  setEditingId(item.id);
                } else {
                  setEditingId("");
                }
              },
              onReply: (user) => {
                if (!user) {
                  return;
                }
                requestAnimationFrame(() => {
                  var _a2;
                  (_a2 = editorRef.current) == null ? void 0 : _a2.reply(transformTextNodes2Document([{
                    type: "mention",
                    content: {
                      id: user.userID,
                      label: user.name
                    }
                  }]));
                });
              },
              onAddComment,
              onDeleteComment
            },
            item.id
          )
        ) }),
        editorVisible ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          ThreadCommentEditor,
          {
            ref: editorRef,
            type,
            unitId,
            subUnitId,
            onSave: async ({ text, attachments }) => {
              const comment = {
                text,
                attachments,
                dT: getDT(),
                id: generateRandomId(),
                ref: refStr,
                personId: currentUser == null ? void 0 : currentUser.userID,
                parentId: comments == null ? void 0 : comments.root.id,
                unitId,
                subUnitId,
                threadId: comments == null ? void 0 : comments.root.threadId
              };
              if ((onAddComment == null ? void 0 : onAddComment(comment)) === false) {
                return;
              }
              await commandService.executeCommand(
                AddCommentCommand.id,
                {
                  unitId,
                  subUnitId,
                  comment
                }
              );
              if (scroller.current) {
                scroller.current.scrollTop = scroller.current.scrollHeight;
              }
            },
            autoFocus: autoFocus || !comments,
            onCancel: () => {
              if (!comments) {
                onClose == null ? void 0 : onClose();
              }
            }
          },
          `${autoFocus}`
        ) }) : null
      ]
    }
  );
};

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages/thread-comment-ui/src/views/thread-comment-panel/index.module.less
var index_module_default3 = {
  "threadCommentPanel": "univer-thread-comment-panel",
  "threadComment": "univer-thread-comment",
  "threadCommentPanelForms": "univer-thread-comment-panel-forms",
  "select": "univer-select",
  "threadCommentPanelEmpty": "univer-thread-comment-panel-empty",
  "threadCommentPanelAdd": "univer-thread-comment-panel-add",
  "threadCommentPanelSolved": "univer-thread-comment-panel-solved"
};

// ../packages/thread-comment-ui/src/views/thread-comment-panel/index.tsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var ThreadCommentPanel = (props) => {
  const {
    unitId,
    subUnitId$,
    type,
    onAdd,
    getSubUnitName,
    onResolve,
    sortComments,
    onItemLeave,
    onItemEnter,
    disableAdd,
    tempComment,
    onAddComment,
    onDeleteComment,
    showComments
  } = props;
  const [unit, setUnit] = (0, import_react3.useState)("all");
  const [status, setStatus] = (0, import_react3.useState)("all");
  const localeService = useDependency(LocaleService);
  const userService = useDependency(UserManagerService);
  const threadCommentModel = useDependency(ThreadCommentModel);
  const [unitComments, setUnitComments] = (0, import_react3.useState)(() => threadCommentModel.getUnit(unitId));
  const panelService = useDependency(ThreadCommentPanelService);
  const activeCommentId = useObservable(panelService.activeCommentId$);
  const update = useObservable(threadCommentModel.commentUpdate$);
  const commandService = useDependency(ICommandService);
  const subUnitId = useObservable(subUnitId$);
  const shouldScroll = (0, import_react3.useRef)(true);
  const prefix = "panel";
  const currentUser = useObservable(userService.currentUser$);
  const comments = (0, import_react3.useMemo)(() => {
    var _a;
    const allComments = unit === "all" ? unitComments : (_a = unitComments.filter((i) => i.subUnitId === subUnitId)) != null ? _a : [];
    const sort = sortComments != null ? sortComments : (a) => a;
    const res = allComments.map((i) => {
      var _a2;
      return { ...i.root, children: (_a2 = i.children) != null ? _a2 : [], users: i.relativeUsers };
    });
    if (showComments) {
      const map = /* @__PURE__ */ new Map();
      res.forEach((comment) => {
        map.set(comment.id, comment);
      });
      return [...showComments, ""].map((id) => map.get(id)).filter(Boolean);
    } else {
      return sort(res);
    }
  }, [showComments, unit, unitComments, sortComments, subUnitId]);
  const commentsSorted = (0, import_react3.useMemo)(() => [
    ...comments.filter((comment) => !comment.resolved),
    ...comments.filter((comment) => comment.resolved)
  ], [comments]);
  const statuedComments = (0, import_react3.useMemo)(() => {
    if (status === "resolved") {
      return commentsSorted.filter((comment) => comment.resolved);
    }
    if (status === "unsolved") {
      return commentsSorted.filter((comment) => !comment.resolved);
    }
    if (status === "concern_me") {
      if (!(currentUser == null ? void 0 : currentUser.userID)) {
        return commentsSorted;
      }
      return commentsSorted.filter((comment) => comment == null ? void 0 : comment.users.has(currentUser.userID));
    }
    return commentsSorted;
  }, [commentsSorted, currentUser == null ? void 0 : currentUser.userID, status]);
  const renderComments = tempComment ? [tempComment, ...statuedComments] : statuedComments;
  const unSolvedComments = renderComments.filter((comment) => !comment.resolved);
  const solvedComments = renderComments.filter((comment) => comment.resolved);
  const isFiltering = status !== "all" || unit !== "all";
  const onReset = () => {
    setStatus("all");
    setUnit("all");
  };
  (0, import_react3.useEffect)(() => {
    if (unitId) {
      setUnitComments(
        threadCommentModel.getUnit(unitId)
      );
    }
  }, [unitId, threadCommentModel, update]);
  (0, import_react3.useEffect)(() => {
    var _a;
    if (!activeCommentId) {
      return;
    }
    if (!shouldScroll.current) {
      shouldScroll.current = true;
      return;
    }
    const { unitId: unitId2, subUnitId: subUnitId2, commentId } = activeCommentId;
    const id = `${prefix}-${unitId2}-${subUnitId2}-${commentId}`;
    (_a = document.getElementById(id)) == null ? void 0 : _a.scrollIntoView({ block: "center" });
  }, [activeCommentId]);
  const renderComment = (comment) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    ThreadCommentTree,
    {
      prefix,
      getSubUnitName,
      id: comment.id,
      unitId: comment.unitId,
      subUnitId: comment.subUnitId,
      refStr: comment.ref,
      type,
      showEdit: (activeCommentId == null ? void 0 : activeCommentId.commentId) === comment.id,
      showHighlight: (activeCommentId == null ? void 0 : activeCommentId.commentId) === comment.id,
      onClick: () => {
        shouldScroll.current = false;
        if (!comment.resolved) {
          commandService.executeCommand(
            SetActiveCommentOperation.id,
            {
              unitId: comment.unitId,
              subUnitId: comment.subUnitId,
              commentId: comment.id,
              temp: false
            }
          );
        } else {
          commandService.executeCommand(SetActiveCommentOperation.id);
        }
      },
      onMouseEnter: () => onItemEnter == null ? void 0 : onItemEnter(comment),
      onMouseLeave: () => onItemLeave == null ? void 0 : onItemLeave(comment),
      onAddComment,
      onDeleteComment,
      onResolve: (resolved) => onResolve == null ? void 0 : onResolve(comment.id, resolved)
    },
    comment.id
  );
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: index_module_default3.threadCommentPanel, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: index_module_default3.threadCommentPanelForms, children: [
      type === O.UNIVER_SHEET ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        Select,
        {
          borderless: true,
          value: unit,
          onChange: (e) => setUnit(e),
          options: [
            {
              value: "current",
              label: localeService.t("threadCommentUI.filter.sheet.current")
            },
            {
              value: "all",
              label: localeService.t("threadCommentUI.filter.sheet.all")
            }
          ]
        }
      ) : null,
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        Select,
        {
          borderless: true,
          value: status,
          onChange: (e) => setStatus(e),
          options: [
            {
              value: "all",
              label: localeService.t("threadCommentUI.filter.status.all")
            },
            {
              value: "resolved",
              label: localeService.t("threadCommentUI.filter.status.resolved")
            },
            {
              value: "unsolved",
              label: localeService.t("threadCommentUI.filter.status.unsolved")
            },
            {
              value: "concern_me",
              label: localeService.t("threadCommentUI.filter.status.concernMe")
            }
          ]
        }
      )
    ] }),
    unSolvedComments.map(renderComment),
    solvedComments.length ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: index_module_default3.threadCommentPanelSolved, children: "\u5DF2\u89E3\u51B3" }) : null,
    solvedComments.map(renderComment),
    renderComments.length ? null : /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: index_module_default3.threadCommentPanelEmpty, children: [
      isFiltering ? localeService.t("threadCommentUI.panel.filterEmpty") : localeService.t("threadCommentUI.panel.empty"),
      isFiltering ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        Button,
        {
          onClick: onReset,
          type: "link",
          children: localeService.t("threadCommentUI.panel.reset")
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        Button,
        {
          id: "thread-comment-add",
          className: index_module_default3.threadCommentPanelAdd,
          type: "primary",
          onClick: onAdd,
          disabled: disableAdd,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(increase_single_default, {}),
            localeService.t("threadCommentUI.panel.addComment")
          ]
        }
      )
    ] })
  ] });
};

export {
  IThreadCommentDataSourceService,
  ThreadCommentModel,
  AddCommentMutation,
  UpdateCommentRefMutation,
  DeleteCommentMutation,
  AddCommentCommand,
  UpdateCommentCommand,
  ResolveCommentCommand,
  DeleteCommentCommand,
  DeleteCommentTreeCommand,
  UniverThreadCommentPlugin,
  getDT,
  ThreadCommentPanelService,
  THREAD_COMMENT_PANEL,
  ToggleSheetCommentPanelOperation,
  SetActiveCommentOperation,
  UniverThreadCommentUIPlugin,
  ThreadCommentTree,
  ThreadCommentPanel
};
//# sourceMappingURL=chunk-AGG5SFHL.js.map
