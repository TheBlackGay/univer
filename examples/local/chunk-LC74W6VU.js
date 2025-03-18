import {
  CROSSHAIR_HIGHLIGHT_COLORS,
  DisableCrosshairHighlightOperation,
  EnableCrosshairHighlightOperation,
  SetCrosshairHighlightColorOperation,
  SheetsCrosshairHighlightService,
  ToggleCrosshairHighlightOperation
} from "./chunk-UQRYPMBX.js";
import {
  SheetsThreadCommentModel,
  UniverSheetsThreadCommentPlugin
} from "./chunk-5E7O4A6V.js";
import {
  AddHyperLinkCommand,
  CancelHyperLinkCommand,
  FindReplaceModel,
  FindReplaceState,
  IFindReplaceService,
  SheetsHyperLinkParserService,
  SheetsHyperLinkResolverService,
  SortRangeCommand,
  UpdateHyperLinkCommand,
  createInitFindReplaceState
} from "./chunk-XDFV2ZEI.js";
import {
  AddCfCommand,
  CFNumberOperator,
  CFTimePeriodOperator,
  ClearRangeCfCommand,
  ClearWorksheetCfCommand,
  ConditionalFormattingRuleModel,
  DeleteCfCommand,
  EMPTY_ICON_TYPE,
  MoveCfCommand,
  SetCfCommand,
  createCfId,
  iconMap
} from "./chunk-WXS7WCGQ.js";
import {
  ClearSheetsFilterCriteriaCommand,
  CustomFilterOperator,
  RemoveSheetFilterCommand,
  SetSheetFilterRangeCommand,
  SetSheetsFilterCriteriaCommand,
  SheetsFilterService
} from "./chunk-3QA6BMH3.js";
import {
  SetNumfmtCommand,
  SheetsNumfmtCellContentController
} from "./chunk-YZCWNVH6.js";
import {
  AddCommentCommand,
  AddCommentMutation,
  DeleteCommentCommand,
  DeleteCommentMutation,
  DeleteCommentTreeCommand,
  IThreadCommentDataSourceService,
  ResolveCommentCommand,
  SetActiveCommentOperation,
  THREAD_COMMENT_PANEL,
  ThreadCommentModel,
  ThreadCommentPanel,
  ThreadCommentPanelService,
  ThreadCommentTree,
  ToggleSheetCommentPanelOperation,
  UniverThreadCommentUIPlugin,
  UpdateCommentCommand,
  getDT
} from "./chunk-AGG5SFHL.js";
import {
  ISheetDrawingService,
  InsertSheetDrawingCommand,
  RemoveSheetDrawingCommand,
  SetDrawingArrangeCommand,
  SetSheetDrawingCommand,
  SheetCanvasFloatDomManagerService,
  SheetDrawingAnchorType,
  SheetDrawingUpdateController
} from "./chunk-6KKG4LFT.js";
import {
  FBase,
  FBaseInitialable,
  FEnum,
  FEventName,
  FHooks,
  FUniver
} from "./chunk-IM7MDYQK.js";
import {
  AddSheetDataValidationCommand,
  ClearRangeDataValidationCommand,
  DataValidationModel,
  RemoveSheetAllDataValidationCommand,
  RemoveSheetDataValidationCommand,
  SheetDataValidationModel,
  SheetsDataValidationValidatorService,
  UpdateSheetDataValidationOptionsCommand,
  UpdateSheetDataValidationRangeCommand,
  UpdateSheetDataValidationSettingCommand,
  getRuleOptions
} from "./chunk-PJAWFGFR.js";
import {
  CellAlertManagerService,
  DragManagerService,
  EditingRenderController,
  HoverManagerService,
  IEditorBridgeService,
  IMarkSelectionService,
  ISheetClipboardService,
  ISheetSelectionRenderService,
  ScrollToRangeOperation,
  SetCellEditVisibleOperation,
  SetColumnHeaderHeightCommand,
  SetRowHeaderWidthCommand,
  SetWorksheetColAutoWidthCommand,
  SetZoomRatioCommand,
  SheetCanvasPopManagerService,
  SheetPasteShortKeyCommand,
  SheetScrollManagerService,
  SheetSkeletonManagerService,
  SheetsScrollRenderController,
  convertPositionCellToSheetOverGrid,
  convertPositionSheetOverGridToAbsolute,
  getCurrentExclusiveRangeInterest$,
  getCurrentRangeDisable$,
  getEditorObject,
  whenSheetEditorFocused
} from "./chunk-NW7E7FBW.js";
import {
  BuiltInUIPart,
  ComponentManager,
  CopyCommand,
  CutCommand,
  DocBackScrollRenderController,
  DocSelectionRenderService,
  HTML_CLIPBOARD_MIME_TYPE,
  IClipboardInterfaceService,
  IDialogService,
  IDrawingManagerService,
  IEditorService,
  IMenuManagerService,
  IMessageService,
  IRenderManagerService,
  IShortcutService,
  ISidebarService,
  IUIPartsService,
  IZenZoneService,
  InsertCommand,
  KeyCode,
  MenuManagerPosition,
  PLAIN_TEXT_CLIPBOARD_MIME_TYPE,
  PasteCommand,
  RibbonPosition,
  RibbonStartGroup,
  RichTextEditingMutation,
  SetDrawingSelectedOperation,
  SheetPasteShortKeyCommandName,
  connectInjector,
  getCurrentTypeOfRenderer,
  getImageSize,
  getMenuHiddenObservable,
  sheetContentViewportKeys,
  supportClipboardAPI,
  useDependency,
  useObservable
} from "./chunk-DOZPYWOG.js";
import {
  check_mark_single_default,
  close_single_default,
  clsx,
  comment_single_default,
  require_jsx_runtime,
  require_react
} from "./chunk-22LKBS37.js";
import {
  IRegisterFunctionService,
  PLUGIN_CONFIG_KEY_BASE,
  RegisterFunctionService
} from "./chunk-5UD457XA.js";
import {
  AddRangeProtectionMutation,
  AddWorksheetProtectionMutation,
  AppendRowCommand,
  BehaviorSubject,
  COMMAND_LISTENER_SKELETON_CHANGE,
  COMMAND_LISTENER_VALUE_CHANGE,
  CancelFrozenCommand,
  CanceledError,
  ClearSelectionAllCommand,
  ClearSelectionContentCommand,
  ClearSelectionFormatCommand,
  ColorBuilder,
  ColorKit,
  CopySheetCommand,
  DEFAULT_EMPTY_DOCUMENT_VALUE,
  DEFAULT_STYLES,
  DOCS_NORMAL_EDITOR_UNIT_ID_KEY,
  DOCS_ZEN_EDITOR_UNIT_ID_KEY,
  DeleteRangeMoveLeftCommand,
  DeleteRangeMoveUpCommand,
  DeleteRangeProtectionMutation,
  DeleteWorksheetProtectionMutation,
  DeleteWorksheetRangeThemeStyleCommand,
  DependentOn,
  Disposable,
  DisposableCollection,
  DocumentDataModel,
  DrawingTypeEnum,
  EDITOR_ACTIVATED,
  ENGINE_FORMULA_CYCLE_REFERENCE_COUNT,
  FOCUSING_DOC,
  FOCUSING_EDITOR_STANDALONE,
  FOCUSING_UNIVER_EDITOR,
  FormulaDataModel,
  GlobalComputingStatusService,
  IAuthzIoService,
  ICommandService,
  IConfigService,
  IDefinedNamesService,
  ILogService,
  INTERCEPTOR_POINT,
  IPermissionService,
  IResourceLoaderService,
  IResourceManagerService,
  IUniverInstanceService,
  ImageSourceType,
  Inject,
  Injector,
  InsertColByRangeCommand,
  InsertRangeMoveDownCommand,
  InsertRangeMoveRightCommand,
  InsertRowByRangeCommand,
  InsertSheetCommand,
  LexerTreeBuilder,
  LifecycleService,
  LocaleService,
  MoveColsCommand,
  MoveRowsCommand,
  O,
  ObjectMatrix,
  PermissionPointsDefinitions,
  Plugin,
  RTree,
  Range,
  RangeProtectionPermissionEditPoint,
  RangeProtectionPermissionViewPoint,
  RangeProtectionRuleModel,
  RangeThemeStyle,
  Rectangle,
  RedoCommand,
  RegisterWorksheetRangeThemeStyleCommand,
  RemoveColByRangeCommand,
  RemoveDefinedNameCommand,
  RemoveRowByRangeCommand,
  RemoveSheetCommand,
  RemoveWorksheetMergeCommand,
  RichTextBuilder,
  RichTextValue,
  RxDisposable,
  SCOPE_WORKBOOK_VALUE_DEFINED_NAME,
  SetBorderBasicCommand,
  SetColDataCommand,
  SetColHiddenCommand,
  SetColWidthCommand,
  SetDefinedNameCommand,
  SetFormulaCalculationNotificationMutation,
  SetFormulaCalculationStartMutation,
  SetFormulaCalculationStopMutation,
  SetFrozenCommand,
  SetGridlinesColorCommand,
  SetHorizontalTextAlignCommand,
  SetRangeProtectionMutation,
  SetRangeValuesCommand,
  SetRangeValuesMutation,
  SetRowDataCommand,
  SetRowHeightCommand,
  SetRowHiddenCommand,
  SetSelectionsOperation,
  SetSpecificColsVisibleCommand,
  SetSpecificRowsVisibleCommand,
  SetStyleCommand,
  SetTabColorCommand,
  SetTabColorMutation,
  SetTextRotationCommand,
  SetTextWrapCommand,
  SetVerticalTextAlignCommand,
  SetWorksheetActiveOperation,
  SetWorksheetDefaultStyleMutation,
  SetWorksheetHideCommand,
  SetWorksheetHideMutation,
  SetWorksheetNameCommand,
  SetWorksheetOrderCommand,
  SetWorksheetOrderMutation,
  SetWorksheetPermissionPointsMutation,
  SetWorksheetRangeThemeStyleCommand,
  SetWorksheetRowIsAutoHeightCommand,
  SetWorksheetRowIsAutoHeightMutation,
  SetWorksheetShowCommand,
  SheetInterceptorService,
  SheetPermissionCheckController,
  SheetRangeThemeService,
  SheetSkeletonChangeType,
  SheetValueChangeType,
  SheetsSelectionsService,
  SplitDelimiterEnum,
  SplitTextToColumnsCommand,
  Subject,
  TextStyleValue,
  ToggleGridlinesCommand,
  Tools,
  UndoCommand,
  UnregisterWorksheetRangeThemeStyleCommand,
  UserManagerService,
  WorkbookCommentPermission,
  WorkbookEditablePermission,
  WorksheetEditPermission,
  WorksheetProtectionPointModel,
  WorksheetProtectionRuleModel,
  WorksheetSetCellStylePermission,
  WorksheetSetCellValuePermission,
  WorksheetViewPermission,
  a,
  addMergeCellsUtil,
  awaitTime,
  combineLatest,
  copyRangeStyles,
  createIdentifier,
  debounceTime,
  debounce_default,
  delayAnimationFrame,
  deserializeRangeWithSheet,
  filter,
  firstValueFrom,
  generateRandomId,
  getAddMergeMutationRangeByType,
  getAllWorksheetPermissionPoint,
  getAllWorksheetPermissionPointByPointPanel,
  getNextPrimaryCell,
  getPrimaryForRange,
  getSheetCommandTarget,
  getSkeletonChangedEffectedRange,
  getValueChangedEffectedRange,
  isCellV,
  isFormulaString,
  isICellData,
  isNullCell,
  map,
  mergeWorksheetSnapshotWithDefault,
  merge_default,
  race,
  serializeRange,
  serializeRangeToRefString,
  serializeRangeWithSheet,
  singleReferenceToGrid,
  switchMap,
  takeUntil,
  timer,
  toDisposable,
  touchDependencies
} from "./chunk-33NDYU5R.js";
import {
  __decorateClass,
  __decorateParam,
  __publicField,
  __toESM
} from "./chunk-NSSCU2QI.js";

// ../packages-experimental/sheets-source-binding/src/model/binding-model.ts
var SheetBindingModel = class {
  constructor(json) {
    __publicField(this, "_matrix", {});
    __publicField(this, "_nodeMap", /* @__PURE__ */ new Map());
    __publicField(this, "_sourceIdMap", /* @__PURE__ */ new Map());
    if (json) {
      this._init(json);
    }
  }
  _init(json) {
    this.fromJSON(json);
  }
  getBindingNodesBySourceId(sourceId) {
    const nodeIds = this._sourceIdMap.get(sourceId);
    if (nodeIds) {
      return nodeIds.map((nodeId) => this._nodeMap.get(nodeId));
    }
    return void 0;
  }
  setBindingNode(row, column, node) {
    if (!this._matrix[row]) {
      this._matrix[row] = {};
    }
    if (!this._matrix[row][column]) {
      this._matrix[row][column] = node;
    }
    this._nodeMap.set(node.nodeId, node);
    const nodeIds = this._sourceIdMap.get(node.sourceId);
    if (nodeIds) {
      nodeIds.push(node.nodeId);
    } else {
      this._sourceIdMap.set(node.sourceId, [node.nodeId]);
    }
  }
  getBindingNode(row, column) {
    var _a;
    return (_a = this._matrix[row]) == null ? void 0 : _a[column];
  }
  removeBindingNode(row, column) {
    var _a;
    const node = (_a = this._matrix[row]) == null ? void 0 : _a[column];
    if (node) {
      this._matrix[row][column] = void 0;
      this._nodeMap.delete(node.nodeId);
      const nodeIds = this._sourceIdMap.get(node.sourceId);
      if (nodeIds) {
        const index = nodeIds.indexOf(node.nodeId);
        if (index >= 0) {
          nodeIds.splice(index, 1);
        }
        if (nodeIds.length === 0) {
          this._sourceIdMap.delete(node.sourceId);
        }
      }
    }
  }
  getBindingNodeById(nodeId) {
    return this._nodeMap.get(nodeId);
  }
  fromJSON(nodes) {
    nodes.forEach((node) => {
      this.setBindingNode(node.row, node.column, node);
    });
  }
  toJSON() {
    return Array.from(this._nodeMap.values());
  }
};

// ../packages-experimental/sheets-source-binding/src/types.ts
var DataBindingNodeTypeEnum = /* @__PURE__ */ ((DataBindingNodeTypeEnum2) => {
  DataBindingNodeTypeEnum2["List"] = "list";
  DataBindingNodeTypeEnum2["Object"] = "object";
  return DataBindingNodeTypeEnum2;
})(DataBindingNodeTypeEnum || {});
var BindModeEnum = /* @__PURE__ */ ((BindModeEnum2) => {
  BindModeEnum2["Path"] = "path";
  BindModeEnum2["Value"] = "value";
  return BindModeEnum2;
})(BindModeEnum || {});

// ../packages-experimental/sheets-source-binding/src/controllers/binding-manager.ts
var SheetsBindingManager = class extends Disposable {
  constructor(_univerInstanceService, _sheetInterceptorService, _sheetsSelectionsService) {
    super();
    this._univerInstanceService = _univerInstanceService;
    this._sheetInterceptorService = _sheetInterceptorService;
    this._sheetsSelectionsService = _sheetsSelectionsService;
    __publicField(this, "modelMap", /* @__PURE__ */ new Map());
    __publicField(this, "_cellBindInfoUpdate$", new Subject());
    __publicField(this, "cellBindInfoUpdate$", this._cellBindInfoUpdate$.asObservable());
    this._initRemoveCommand();
  }
  _initRemoveCommand() {
    this.disposeWithMe(
      this._sheetInterceptorService.interceptCommand({
        getMutations: (command) => {
          const redos = [];
          const undos = [];
          const selections = this._sheetsSelectionsService.getCurrentSelections();
          const target = getSheetCommandTarget(this._univerInstanceService);
          if (!target || !selections || selections.length === 0) {
            return {
              redos: [],
              undos: []
            };
          }
          const { unitId, subUnitId } = target;
          if (command.id === ClearSelectionContentCommand.id || command.id === ClearSelectionAllCommand.id) {
            selections.forEach(({ range }) => {
              Range.foreach(range, (row, column) => {
                const node = this.getBindingNode(unitId, subUnitId, row, column);
                if (node) {
                  this.removeBindingNode(unitId, subUnitId, row, column);
                }
              });
            });
          }
          return { redos, undos };
        }
      })
    );
  }
  getBindingModelBySourceId(sourceId) {
    const rs = [];
    this.modelMap.forEach((subMap, unitId) => {
      subMap.forEach((model, subunitId) => {
        const nodes = model.getBindingNodesBySourceId(sourceId);
        if (nodes) {
          for (const node of nodes) {
            rs.push({
              unitId,
              subunitId,
              sourceId,
              nodeId: node.nodeId,
              row: node.row,
              column: node.column
            });
          }
        }
      });
    });
    return rs;
  }
  addModel(unitId, subunitId, model) {
    var _a;
    if (!this.modelMap.has(unitId)) {
      this.modelMap.set(unitId, /* @__PURE__ */ new Map());
    }
    (_a = this.modelMap.get(unitId)) == null ? void 0 : _a.set(subunitId, model);
  }
  getModel(unitId, subunitId) {
    var _a;
    return (_a = this.modelMap.get(unitId)) == null ? void 0 : _a.get(subunitId);
  }
  setBindingNode(unitId, subunitId, node) {
    let model = this.getModel(unitId, subunitId);
    if (!model) {
      model = new SheetBindingModel();
      this.addModel(unitId, subunitId, model);
    }
    if (!node.nodeId) {
      node.nodeId = generateRandomId();
    }
    const { row, column } = node;
    if (row === void 0 || column === void 0) {
      throw new Error("row and column is required");
    }
    const oldNode = model.getBindingNode(row, column);
    const containHeader = node.type === "list" /* List */ ? Boolean(node.containHeader) : false;
    model.setBindingNode(row, column, { ...node, row, column });
    this._cellBindInfoUpdate$.next({
      unitId,
      subunitId,
      sourceId: node.sourceId,
      nodeId: node.nodeId,
      row,
      column,
      containHeader,
      changeType: oldNode ? "update" /* Update */ : "add" /* Add */,
      oldSourceId: oldNode == null ? void 0 : oldNode.sourceId,
      oldNodeContainHeader: (oldNode == null ? void 0 : oldNode.type) === "list" /* List */ ? Boolean(oldNode.containHeader) : false
    });
  }
  removeBindingNode(unitId, subunitId, row, column) {
    const model = this.getModel(unitId, subunitId);
    if (model) {
      const node = model.getBindingNode(row, column);
      if (node) {
        model.removeBindingNode(row, column);
        this._cellBindInfoUpdate$.next({
          unitId,
          subunitId,
          sourceId: node.sourceId,
          nodeId: node.nodeId,
          row,
          column,
          changeType: "remove" /* Remove */
        });
      }
    }
  }
  getBindingNode(unitId, subunitId, row, column) {
    const model = this.getModel(unitId, subunitId);
    if (model) {
      return model.getBindingNode(row, column);
    }
    return void 0;
  }
  getBindingNodeById(unitId, subunitId, nodeId) {
    const model = this.getModel(unitId, subunitId);
    if (model) {
      return model.getBindingNodeById(nodeId);
    }
    return void 0;
  }
  createModel(unitId, subunitId, json) {
    const model = new SheetBindingModel(json);
    this.addModel(unitId, subunitId, model);
    return model;
  }
  toJSON(unitId) {
    const rs = {};
    const subMap = this.modelMap.get(unitId);
    if (subMap) {
      subMap.forEach((model, subunitId) => {
        rs[subunitId] = model.toJSON();
      });
    }
    return rs;
  }
  fromJSON(unitId, json) {
    Object.entries(json).forEach(([subunitId, nodes]) => {
      this.createModel(unitId, subunitId, nodes);
    });
  }
  dispose() {
    this.modelMap.clear();
    this._cellBindInfoUpdate$.complete();
  }
};
SheetsBindingManager = __decorateClass([
  __decorateParam(0, IUniverInstanceService),
  __decorateParam(1, Inject(SheetInterceptorService)),
  __decorateParam(2, Inject(SheetsSelectionsService))
], SheetsBindingManager);

// ../packages-experimental/sheets-source-binding/src/model/source-model.ts
function isValidDate(date) {
  return date instanceof Date && !isNaN(date.getTime());
}
function transformDate(dateString) {
  const date = new Date(dateString);
  if (!isValidDate(date)) {
    return dateString;
  }
  const baseDate = new Date(Date.UTC(1900, 0, 1, 0, 0, 0));
  const leapDayDate = new Date(Date.UTC(1900, 1, 28, 0, 0, 0));
  const diffMilliseconds = date.getTime() - baseDate.getTime();
  let dayDifference = diffMilliseconds / (1e3 * 3600 * 24);
  if (date > leapDayDate) {
    dayDifference += 1;
  }
  return dayDifference + 1;
}
var SourceModelBase = class {
  constructor(id) {
    __publicField(this, "_data");
    __publicField(this, "id");
    __publicField(this, "_hasData", false);
    __publicField(this, "type");
    this.id = id;
  }
  getId() {
    return this.id;
  }
  getType() {
    return this.type;
  }
  hasData() {
    return this._hasData;
  }
  setSourceData(data) {
    this._data = data;
    this._hasData = true;
  }
  toJSON() {
    return {
      id: this.id,
      type: this.type
    };
  }
  fromJSON(info) {
    this.id = info.id;
    this.type = info.type;
  }
};
var ListSourceModel = class extends SourceModelBase {
  constructor(id, isListObject) {
    super(id);
    __publicField(this, "type", "list" /* List */);
    __publicField(this, "_isListObject");
    __publicField(this, "_fieldIndexMap", /* @__PURE__ */ new Map());
    __publicField(this, "_data", { fields: [], records: [] });
    this._isListObject = isListObject != null ? isListObject : true;
  }
  /**
   * Toggle the list object mode. The default value is true.
   * In the list object mode, the records is an array of objects. Such as [{name: 'Tom', age: 20}, {name: 'Jerry', age: 18}].
   * In the list array mode, the records is an array of arrays. Such as [['Tom', 20], ['Jerry', 18]].
   */
  toggleListObject(isListObject) {
    this._isListObject = isListObject;
  }
  getData(node, row) {
    const { path, row: baseRow, containHeader } = node;
    const colIndex = this._fieldIndexMap.get(path);
    const rowIndex = row - baseRow;
    if (containHeader && rowIndex === 0) {
      return {
        v: this._data.fields[colIndex]
      };
    }
    let data;
    const offset = containHeader ? 1 : 0;
    if (this._isListObject) {
      data = this._data.records[rowIndex - offset][path];
    } else {
      data = this._data.records[rowIndex - offset][colIndex];
    }
    if (node.isDate === true) {
      const formatter = node.formatter || "yyyy-m-d am/pm h:mm";
      return {
        v: transformDate(data),
        s: {
          n: {
            pattern: formatter
          }
        },
        t: 2 /* NUMBER */
      };
    } else {
      if (node.formatter) {
        return {
          v: data,
          s: {
            n: {
              pattern: node.formatter
            }
          }
        };
      }
      return {
        t: typeof data === "number" ? 2 /* NUMBER */ : 1 /* STRING */,
        v: data
      };
    }
  }
  setSourceData(data) {
    super.setSourceData(data);
    const { fields } = data;
    this._fieldIndexMap.clear();
    fields.forEach((field, index) => {
      this._fieldIndexMap.set(field, index);
    });
  }
  getSourceInfo() {
    return {
      sourceId: this.id,
      sourceType: this.type,
      fields: this._data.fields,
      recordCount: this._data.records.length
    };
  }
};
var ObjectSourceModel = class extends SourceModelBase {
  constructor(id) {
    super(id);
    __publicField(this, "type", "object" /* Object */);
  }
  getData(node) {
    const path = node.path;
    const paths = path.split(".");
    let data = this._data;
    for (const p of paths) {
      data = data[p];
      if (data === void 0) {
        return null;
      }
    }
    if (node.isDate === true) {
      const formatter = node.formatter || "yyyy-m-d am/pm h:mm";
      return {
        v: transformDate(data),
        s: {
          n: {
            pattern: formatter
          }
        },
        t: 2 /* NUMBER */
      };
    } else {
      if (node.formatter) {
        return {
          v: data,
          s: {
            n: {
              pattern: node.formatter
            }
          }
        };
      }
      return {
        v: data,
        t: typeof data === "number" ? 2 /* NUMBER */ : 1 /* STRING */
      };
    }
  }
  getSourceInfo() {
    return {
      sourceId: this.id,
      sourceType: "object" /* Object */
    };
  }
};

// ../packages-experimental/sheets-source-binding/src/controllers/source-manager.ts
var SheetsSourceManager = class extends Disposable {
  constructor() {
    super();
    __publicField(this, "sourceMap", /* @__PURE__ */ new Map());
    __publicField(this, "_sourceDataUpdate$", new Subject());
    __publicField(this, "sourceDataUpdate$", this._sourceDataUpdate$.asObservable());
  }
  _ensureUnitMap(unitId) {
    let unit = this.sourceMap.get(unitId);
    if (!unit) {
      unit = /* @__PURE__ */ new Map();
      this.sourceMap.set(unitId, unit);
    }
    return unit;
  }
  _getUnitMap(unitId) {
    return this.sourceMap.get(unitId);
  }
  getSource(unitId, id) {
    const unitMap = this._getUnitMap(unitId);
    return unitMap == null ? void 0 : unitMap.get(id);
  }
  createSource(unitId, type, isListObject, id) {
    const sourceId = id === void 0 ? generateRandomId() : id;
    let source;
    switch (type) {
      case "list" /* List */:
        source = new ListSourceModel(sourceId, isListObject);
        break;
      case "object" /* Object */:
        source = new ObjectSourceModel(sourceId);
        break;
      default:
        throw new Error(`Invalid source type: ${type}`);
    }
    const unitMap = this._ensureUnitMap(unitId);
    unitMap.set(sourceId, source);
    return source;
  }
  updateSourceData(unitId, idOrInstance, data) {
    const unitMap = this._getUnitMap(unitId);
    const sourceId = idOrInstance instanceof SourceModelBase ? idOrInstance.getId() : idOrInstance;
    const source = unitMap == null ? void 0 : unitMap.get(sourceId);
    if (source) {
      source.setSourceData(data);
      this._sourceDataUpdate$.next({ ...source.getSourceInfo(), unitId, changeType: "add" /* Add */ });
    } else {
      throw new Error(`Source not found: ${sourceId}`);
    }
  }
  removeSource(unitId, id) {
    const unitMap = this._getUnitMap(unitId);
    const source = unitMap == null ? void 0 : unitMap.get(id);
    if (source) {
      unitMap == null ? void 0 : unitMap.delete(id);
      this._sourceDataUpdate$.next({ ...source.getSourceInfo(), unitId, changeType: "remove" /* Remove */ });
    }
  }
  toJSON(unitId) {
    const sourceList = [];
    const unitMap = this._getUnitMap(unitId);
    if (unitMap) {
      for (const source of unitMap.values()) {
        sourceList.push(source.toJSON());
      }
    }
    return sourceList;
  }
  fromJSON(unitId, sources) {
    const unitMap = this._ensureUnitMap(unitId);
    for (const source of sources) {
      let model;
      switch (source.type) {
        case "list" /* List */:
          model = new ListSourceModel(source.id);
          break;
        case "object" /* Object */:
          model = new ObjectSourceModel(source.id);
          break;
        default:
          throw new Error(`Invalid source type: ${source.type}`);
      }
      model.fromJSON(source);
      unitMap.set(source.id, model);
    }
  }
  dispose() {
    this._sourceDataUpdate$.complete();
    this.sourceMap.clear();
  }
};

// ../packages-experimental/sheets-source-binding/src/services/source-binding-service.ts
var SheetsSourceBindService = class extends Disposable {
  constructor(_sheetInterceptorService, _sheetsBindingManager, _sheetsSourceManager) {
    super();
    this._sheetInterceptorService = _sheetInterceptorService;
    this._sheetsBindingManager = _sheetsBindingManager;
    this._sheetsSourceManager = _sheetsSourceManager;
    __publicField(this, "_bindingModel", "value" /* Value */);
    __publicField(this, "_bindModelRTreeCollection", /* @__PURE__ */ new Map());
    this._registerInterceptor();
    this._registerSourceChange();
  }
  /**
   * Set the binding model to path mode, in this mode, the binding path will show in the cell.
   */
  usePathMode() {
    this._bindingModel = "path" /* Path */;
  }
  /**
   * Set the binding model to value mode, in this mode, the value of source will show in the cell.
   */
  useValueMode() {
    this._bindingModel = "value" /* Value */;
  }
  /**
   * Get the current binding model.
   * @returns the current binding model
   */
  getBindingModel() {
    return this._bindingModel;
  }
  createBindModel(unitId, subUnitId) {
    return this._sheetsBindingManager.createModel(unitId, subUnitId);
  }
  setBindingNode(unitId, subUnitId, node) {
    this._sheetsBindingManager.setBindingNode(unitId, subUnitId, node);
  }
  removeBindingNode(unitId, subUnitId, row, column) {
    this._sheetsBindingManager.removeBindingNode(unitId, subUnitId, row, column);
  }
  getBindingNode(unitId, subUnitId, row, column) {
    return this._sheetsBindingManager.getBindingNode(unitId, subUnitId, row, column);
  }
  getSource(unitId, id) {
    return this._sheetsSourceManager.getSource(unitId, id);
  }
  createSource(unitId, type, isListObject, id) {
    return this._sheetsSourceManager.createSource(unitId, type, isListObject, id);
  }
  getSourceBindingPathInfo(unitId) {
    return {
      source: this._sheetsSourceManager.toJSON(unitId),
      cellBinding: this._sheetsBindingManager.toJSON(unitId)
    };
  }
  loadSourceBindingPathInfo(unitId, obj) {
    this._sheetsSourceManager.fromJSON(unitId, obj.source);
    this._sheetsBindingManager.fromJSON(unitId, obj.cellBinding);
  }
  _ensureRTreeCollection(unitId) {
    if (!this._bindModelRTreeCollection.has(unitId)) {
      this._bindModelRTreeCollection.set(unitId, new RTree());
    }
    return this._bindModelRTreeCollection.get(unitId);
  }
  _getRTeeCollection(unitId) {
    return this._bindModelRTreeCollection.get(unitId);
  }
  // eslint-disable-next-line max-lines-per-function
  _registerSourceChange() {
    this.disposeWithMe(this._sheetsSourceManager.sourceDataUpdate$.subscribe((sourceInfo) => {
      const { sourceId, sourceType, unitId: sourceUnitId, changeType } = sourceInfo;
      if (sourceType === "list" /* List */) {
        if (changeType === "remove" /* Remove */) {
          const nodeInfo = this._sheetsBindingManager.getBindingModelBySourceId(sourceId);
          const recordCount = sourceInfo.recordCount;
          for (const { unitId, subunitId, nodeId, row, column } of nodeInfo) {
            const rTreeCollection = this._getRTeeCollection(sourceUnitId);
            const node = this._sheetsBindingManager.getBindingNodeById(unitId, subunitId, nodeId);
            if (rTreeCollection && (node == null ? void 0 : node.type) === "list" /* List */) {
              const offset = node.containHeader ? 0 : 1;
              const range = { startRow: row, startColumn: column, endRow: row + recordCount - offset, endColumn: column };
              rTreeCollection.remove({ unitId, sheetId: subunitId, id: nodeId, range });
            }
          }
          return;
        }
        if (changeType === "update" /* Update */) {
          const oldRecordCount = sourceInfo.oldRecordCount;
          const nodeInfo = this._sheetsBindingManager.getBindingModelBySourceId(sourceId);
          for (const { unitId, subunitId, nodeId, row, column } of nodeInfo) {
            const rTreeCollection = this._getRTeeCollection(sourceUnitId);
            const node = this._sheetsBindingManager.getBindingNodeById(unitId, subunitId, nodeId);
            if (rTreeCollection && (node == null ? void 0 : node.type) === "list" /* List */) {
              const offset = node.containHeader ? 0 : 1;
              const oldRange = { startRow: row, startColumn: column, endRow: row + oldRecordCount - offset, endColumn: column };
              const range = { startRow: row, startColumn: column, endRow: row + sourceInfo.recordCount - offset, endColumn: column };
              rTreeCollection.remove({ unitId, sheetId: subunitId, id: nodeId, range: oldRange });
              rTreeCollection.insert({ unitId, sheetId: subunitId, id: nodeId, range });
            }
          }
          return;
        }
        const source = this._sheetsSourceManager.getSource(sourceUnitId, sourceId);
        if (source && source.hasData()) {
          const sourceInfo2 = source.getSourceInfo();
          const recordCount = sourceInfo2.recordCount;
          const nodeInfo = this._sheetsBindingManager.getBindingModelBySourceId(sourceId);
          for (const { unitId, subunitId, nodeId, row, column } of nodeInfo) {
            const rTreeCollection = this._ensureRTreeCollection(unitId);
            const node = this._sheetsBindingManager.getBindingNodeById(unitId, subunitId, nodeId);
            if (rTreeCollection && (node == null ? void 0 : node.type) === "list" /* List */) {
              const offset = node.containHeader ? 0 : 1;
              const range = { startRow: row, startColumn: column, endRow: row + recordCount - offset, endColumn: column };
              rTreeCollection.insert({ unitId, sheetId: subunitId, id: nodeId, range });
            }
          }
        }
      }
    }));
    this.disposeWithMe(this._sheetsBindingManager.cellBindInfoUpdate$.subscribe((nodeInfo) => {
      const { unitId, subunitId, sourceId, nodeId, row, column, changeType, containHeader } = nodeInfo;
      const rTreeCollection = this._ensureRTreeCollection(unitId);
      const source = this._sheetsSourceManager.getSource(unitId, sourceId);
      if (source && source.hasData()) {
        const sourceInfo = source.getSourceInfo();
        if (sourceInfo.sourceType === "list" /* List */) {
          const recordCount = sourceInfo.recordCount;
          const offset = containHeader ? 0 : 1;
          const range = { startRow: row, startColumn: column, endRow: row + recordCount - offset, endColumn: column };
          if (changeType === "add" /* Add */) {
            rTreeCollection.insert({ unitId, sheetId: subunitId, id: nodeId, range });
          } else if (changeType === "remove" /* Remove */) {
            rTreeCollection.remove({ unitId, sheetId: subunitId, id: nodeId, range });
          } else if (changeType === "update" /* Update */) {
            const oldSourceId = nodeInfo.oldSourceId;
            const offset2 = nodeInfo.oldNodeContainHeader ? 0 : 1;
            const oldSource = this._sheetsSourceManager.getSource(unitId, oldSourceId);
            if (oldSource && oldSource.hasData()) {
              const oldSourceInfo = oldSource.getSourceInfo();
              const oldRecordCount = oldSourceInfo.recordCount;
              const oldRange = { startRow: row, startColumn: column, endRow: row + oldRecordCount - offset2, endColumn: column };
              rTreeCollection.remove({ unitId, sheetId: subunitId, id: nodeId, range: oldRange });
            }
            rTreeCollection.insert({ unitId, sheetId: subunitId, id: nodeId, range });
          }
        }
      }
    }));
  }
  _getPathModeCellValue(unitId, subUnitId, row, col) {
    const model = this._sheetsBindingManager.getModel(unitId, subUnitId);
    const node = model == null ? void 0 : model.getBindingNode(row, col);
    if (node) {
      const nodeType = node.type;
      if (nodeType === "list" /* List */) {
        return {
          v: `#{${node.path}}`,
          s: { cl: { rgb: "blue" } }
        };
      } else if (nodeType === "object" /* Object */) {
        return {
          v: `[${node.path}]`,
          s: { cl: { rgb: "blue" } }
        };
      }
    }
  }
  _getValueModeCellValue(unitId, subUnitId, row, col) {
    const model = this._sheetsBindingManager.getModel(unitId, subUnitId);
    if (model) {
      const node = model.getBindingNode(row, col);
      if (node) {
        const { sourceId } = node;
        const source = this._sheetsSourceManager.getSource(unitId, sourceId);
        if (source && source.hasData()) {
          return (source == null ? void 0 : source.getData(node, row, col)) || { v: "" };
        }
      }
    }
    const rTreeCollection = this._getRTeeCollection(unitId);
    if (model && rTreeCollection) {
      const range = { startRow: row, startColumn: col, endRow: row, endColumn: col };
      const nodeIds = Array.from(rTreeCollection.bulkSearch([{ unitId, sheetId: subUnitId, range }]));
      if (nodeIds.length > 0) {
        const node = model.getBindingNodeById(nodeIds[0]);
        if (node) {
          const { sourceId } = node;
          const source = this._sheetsSourceManager.getSource(unitId, sourceId);
          if (source && source.hasData()) {
            return (source == null ? void 0 : source.getData(node, row, col)) || { v: "" };
          }
        }
      }
    }
  }
  getBindingModelBySourceId(sourceId) {
    return this._sheetsBindingManager.getBindingModelBySourceId(sourceId);
  }
  _registerInterceptor() {
    this.disposeWithMe(this._sheetInterceptorService.intercept(INTERCEPTOR_POINT.CELL_CONTENT, {
      effect: 2 /* Value */ | 1 /* Style */,
      priority: 102,
      handler: (cell, context, next) => {
        const { row, col, unitId, subUnitId, workbook } = context;
        let value = null;
        if (this._bindingModel === "path" /* Path */) {
          value = this._getPathModeCellValue(unitId, subUnitId, row, col);
        } else {
          value = this._getValueModeCellValue(unitId, subUnitId, row, col);
        }
        if (value !== null) {
          const defaultStyle = (typeof (cell == null ? void 0 : cell.s) === "string" ? workbook.getStyles().get(cell == null ? void 0 : cell.s) : cell == null ? void 0 : cell.s) || {};
          const newStyle = { ...defaultStyle };
          if (value && value.s) {
            Object.assign(newStyle, value.s);
          }
          return next({ ...cell, ...value, s: newStyle });
        }
        return next(cell);
      }
    }));
  }
  dispose() {
    this._bindModelRTreeCollection.clear();
  }
};
SheetsSourceBindService = __decorateClass([
  __decorateParam(0, Inject(SheetInterceptorService)),
  __decorateParam(1, Inject(SheetsBindingManager)),
  __decorateParam(2, Inject(SheetsSourceManager))
], SheetsSourceBindService);

// ../packages-experimental/sheets-source-binding/src/plugin.ts
var UniverSheetsBindingSourcePlugin = class extends Plugin {
  constructor(_config = {}, _injector, _configService) {
    super();
    this._config = _config;
    this._injector = _injector;
    this._configService = _configService;
  }
  onStarting() {
    [
      [SheetsBindingManager],
      [SheetsSourceManager],
      [SheetsSourceBindService]
    ].forEach((d) => this._injector.add(d));
  }
  onReady() {
    touchDependencies(this._injector, [
      [SheetsBindingManager],
      [SheetsSourceManager],
      [SheetsSourceBindService]
    ]);
  }
};
__publicField(UniverSheetsBindingSourcePlugin, "type", O.UNIVER_SHEET);
__publicField(UniverSheetsBindingSourcePlugin, "pluginName", "SHEET_BINDING_SOURCE_PLUGIN");
UniverSheetsBindingSourcePlugin = __decorateClass([
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IConfigService)
], UniverSheetsBindingSourcePlugin);

// ../packages/sheets-thread-comment-ui/src/types/const.ts
var SHEETS_THREAD_COMMENT_MODAL = "univer.sheet.thread-comment-modal";
var COMMENT_SINGLE_ICON = "comment-single";
var SHEETS_THREAD_COMMENT = "SHEET_THREAD_COMMENT";

// ../packages/sheets-thread-comment-ui/src/services/sheets-thread-comment-popup.service.ts
var SheetsThreadCommentPopupService = class extends Disposable {
  constructor(_canvasPopupManagerService, _zenZoneService) {
    super();
    this._canvasPopupManagerService = _canvasPopupManagerService;
    this._zenZoneService = _zenZoneService;
    __publicField(this, "_lastPopup", null);
    __publicField(this, "_activePopup");
    __publicField(this, "_activePopup$", new BehaviorSubject(null));
    __publicField(this, "activePopup$", this._activePopup$.asObservable());
    this._initZenVisible();
    this.disposeWithMe(() => {
      this._activePopup$.complete();
    });
  }
  get activePopup() {
    return this._activePopup;
  }
  _initZenVisible() {
    this.disposeWithMe(this._zenZoneService.visible$.subscribe((visible) => {
      if (visible) {
        this.hidePopup();
      }
    }));
  }
  showPopup(location2, onHide) {
    var _a;
    const { row, col, unitId, subUnitId } = location2;
    if (this._activePopup && row === this._activePopup.row && col === this._activePopup.col && unitId === this._activePopup.unitId && subUnitId === ((_a = this.activePopup) == null ? void 0 : _a.subUnitId)) {
      this._activePopup = location2;
      this._activePopup$.next(location2);
      return;
    }
    if (this._lastPopup) {
      this._lastPopup.dispose();
    }
    ;
    if (this._zenZoneService.visible) {
      return;
    }
    this._activePopup = location2;
    this._activePopup$.next(location2);
    const popupDisposable = this._canvasPopupManagerService.attachPopupToCell(
      row,
      col,
      {
        componentKey: SHEETS_THREAD_COMMENT_MODAL,
        onClickOutside: () => {
          this.hidePopup();
        },
        direction: "horizontal",
        excludeOutside: [
          ...Array.from(document.querySelectorAll(".univer-thread-comment")),
          document.getElementById("thread-comment-add")
        ].filter(Boolean)
      }
    );
    if (!popupDisposable) {
      throw new Error("[SheetsThreadCommentPopupService]: cannot show popup!");
    }
    const disposableCollection = new DisposableCollection();
    disposableCollection.add(popupDisposable);
    disposableCollection.add({
      dispose: () => {
        onHide == null ? void 0 : onHide();
      }
    });
    this._lastPopup = disposableCollection;
  }
  hidePopup() {
    if (!this._activePopup) {
      return;
    }
    if (this._lastPopup) {
      this._lastPopup.dispose();
    }
    this._lastPopup = null;
    this._activePopup = null;
    this._activePopup$.next(null);
  }
  persistPopup() {
    if (!this._activePopup || !this._activePopup.temp) {
      return;
    }
    this._activePopup = {
      ...this._activePopup,
      temp: false
    };
    this._activePopup$.next(this._activePopup);
  }
};
SheetsThreadCommentPopupService = __decorateClass([
  __decorateParam(0, Inject(SheetCanvasPopManagerService)),
  __decorateParam(1, IZenZoneService)
], SheetsThreadCommentPopupService);

// ../packages/sheets-thread-comment-ui/src/commands/operations/comment.operation.ts
var ShowAddSheetCommentModalOperation = {
  type: 1 /* OPERATION */,
  id: "sheets.operation.show-comment-modal",
  handler(accessor) {
    var _a;
    const selectionManagerService = accessor.get(SheetsSelectionsService);
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const sheetsThreadCommentPopupService = accessor.get(SheetsThreadCommentPopupService);
    const threadCommentPanelService = accessor.get(ThreadCommentPanelService);
    const activeCell = (_a = selectionManagerService.getCurrentLastSelection()) == null ? void 0 : _a.primary;
    const model = accessor.get(SheetsThreadCommentModel);
    if (!activeCell) {
      return false;
    }
    const result = getSheetCommandTarget(univerInstanceService);
    if (!result) {
      return false;
    }
    const { workbook, worksheet, unitId, subUnitId } = result;
    const location2 = {
      workbook,
      worksheet,
      unitId,
      subUnitId,
      row: activeCell.startRow,
      col: activeCell.startColumn
    };
    sheetsThreadCommentPopupService.showPopup(location2);
    const rootId = model.getByLocation(unitId, subUnitId, activeCell.startRow, activeCell.startColumn);
    if (rootId) {
      threadCommentPanelService.setActiveComment({
        unitId,
        subUnitId,
        commentId: rootId,
        trigger: "context-menu"
      });
    }
    return true;
  }
};

// ../packages/sheets-thread-comment-ui/src/controllers/config.schema.ts
var SHEETS_THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY = "sheets-thread-comment.config";
var configSymbol = Symbol(SHEETS_THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY);
var defaultPluginConfig = {};

// ../packages/sheets-thread-comment-ui/src/controllers/render-controllers/render.controller.ts
var SheetsThreadCommentRenderController = class extends Disposable {
  constructor(_sheetInterceptorService, _sheetsThreadCommentModel, _univerInstanceService, _renderManagerService) {
    super();
    this._sheetInterceptorService = _sheetInterceptorService;
    this._sheetsThreadCommentModel = _sheetsThreadCommentModel;
    this._univerInstanceService = _univerInstanceService;
    this._renderManagerService = _renderManagerService;
    this._initViewModelIntercept();
    this._initSkeletonChange();
  }
  _initViewModelIntercept() {
    this.disposeWithMe(
      this._sheetInterceptorService.intercept(
        INTERCEPTOR_POINT.CELL_CONTENT,
        {
          effect: 1 /* Style */,
          handler: (cell, pos, next) => {
            const { row, col, unitId, subUnitId } = pos;
            if (this._sheetsThreadCommentModel.showCommentMarker(unitId, subUnitId, row, col)) {
              return next({
                ...cell,
                markers: {
                  ...cell == null ? void 0 : cell.markers,
                  tr: {
                    color: "#FFBD37",
                    size: 6
                  }
                }
              });
            }
            return next(cell);
          },
          priority: 100
        }
      )
    );
  }
  _initSkeletonChange() {
    const markSkeletonDirty = () => {
      var _a;
      const workbook = this._univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET);
      if (!workbook) return;
      const unitId = workbook.getUnitId();
      const currentRender = this._renderManagerService.getRenderById(unitId);
      (_a = currentRender == null ? void 0 : currentRender.mainComponent) == null ? void 0 : _a.makeForceDirty();
    };
    this.disposeWithMe(this._sheetsThreadCommentModel.commentUpdate$.pipe(debounceTime(16)).subscribe(() => {
      markSkeletonDirty();
    }));
  }
};
SheetsThreadCommentRenderController = __decorateClass([
  __decorateParam(0, Inject(SheetInterceptorService)),
  __decorateParam(1, Inject(SheetsThreadCommentModel)),
  __decorateParam(2, IUniverInstanceService),
  __decorateParam(3, IRenderManagerService)
], SheetsThreadCommentRenderController);

// ../packages/sheets-thread-comment-ui/src/controllers/sheets-thread-comment-copy-paste.controller.ts
var transformRef = (ref, source, target) => {
  const refObj = singleReferenceToGrid(ref);
  const offsetRow = target.row - source.row;
  const offsetCol = target.column - source.column;
  const targetRange = {
    startColumn: refObj.column + offsetCol,
    startRow: refObj.row + offsetRow,
    endColumn: refObj.column + offsetCol,
    endRow: refObj.row + offsetRow
  };
  return serializeRange(targetRange);
};
var SheetsThreadCommentCopyPasteController = class extends Disposable {
  constructor(_sheetClipboardService, _sheetsThreadCommentModel, _threadCommentDataSourceService) {
    super();
    this._sheetClipboardService = _sheetClipboardService;
    this._sheetsThreadCommentModel = _sheetsThreadCommentModel;
    this._threadCommentDataSourceService = _threadCommentDataSourceService;
    __publicField(this, "_copyInfo");
    this._initClipboardHook();
  }
  // eslint-disable-next-line max-lines-per-function
  _initClipboardHook() {
    this.disposeWithMe(
      this._sheetClipboardService.addClipboardHook({
        id: SHEETS_THREAD_COMMENT,
        onBeforeCopy: (unitId, subUnitId, range) => {
          this._copyInfo = {
            unitId,
            subUnitId,
            range
          };
        },
        // eslint-disable-next-line max-lines-per-function
        onPasteCells: (_pasteFrom, pasteTo, _data, payload) => {
          const { unitId: targetUnitId, subUnitId: targetSubUnitId, range } = pasteTo;
          const targetPos = {
            row: range.rows[0],
            column: range.cols[0]
          };
          if (payload.copyType === "CUT" /* CUT */ && this._copyInfo) {
            const { range: range2, unitId: sourceUnitId, subUnitId: sourceSubUnitId } = this._copyInfo;
            const sourcePos = {
              row: range2.startRow,
              column: range2.startColumn
            };
            if (!(targetUnitId === sourceUnitId && targetSubUnitId === sourceSubUnitId)) {
              const roots = [];
              Range.foreach(range2, (row, col) => {
                const comments = this._sheetsThreadCommentModel.getAllByLocation(sourceUnitId, sourceSubUnitId, row, col);
                if (this._threadCommentDataSourceService.syncUpdateMutationToColla) {
                  comments.forEach((comment) => {
                    roots.push(comment);
                  });
                } else {
                  comments.forEach(({ children, ...comment }) => {
                    if (!comment.parentId) {
                      roots.push(comment);
                    }
                  });
                }
              });
              const sourceRedos = [];
              const sourceUndos = [];
              const targetRedos = [];
              const targetUndos = [];
              const handleCommentItem = (item) => {
                sourceRedos.unshift({
                  id: DeleteCommentMutation.id,
                  params: {
                    unitId: sourceUnitId,
                    subUnitId: sourceSubUnitId,
                    commentId: item.id
                  }
                });
                targetRedos.push({
                  id: AddCommentMutation.id,
                  params: {
                    unitId: targetUnitId,
                    subUnitId: targetSubUnitId,
                    comment: {
                      ...item,
                      ref: transformRef(item.ref, sourcePos, targetPos),
                      unitId: targetUnitId,
                      subUnitId: targetSubUnitId
                    },
                    sync: true
                  }
                });
                sourceUndos.push({
                  id: AddCommentMutation.id,
                  params: {
                    unitId: sourceUnitId,
                    subUnitId: sourceSubUnitId,
                    comment: item,
                    sync: true
                  }
                });
                targetUndos.unshift({
                  id: DeleteCommentMutation.id,
                  params: {
                    unitId: targetUnitId,
                    subUnitId: targetSubUnitId,
                    commentId: item.id
                  }
                });
              };
              roots.forEach((root) => {
                handleCommentItem(root);
              });
              return {
                redos: [...sourceRedos, ...targetRedos],
                undos: [...targetUndos, ...sourceUndos]
              };
            }
          }
          return {
            redos: [],
            undos: []
          };
        }
      })
    );
  }
};
SheetsThreadCommentCopyPasteController = __decorateClass([
  __decorateParam(0, Inject(ISheetClipboardService)),
  __decorateParam(1, Inject(SheetsThreadCommentModel)),
  __decorateParam(2, IThreadCommentDataSourceService)
], SheetsThreadCommentCopyPasteController);

// ../packages/sheets-thread-comment-ui/src/controllers/sheets-thread-comment-hover.controller.ts
var SheetsThreadCommentHoverController = class extends Disposable {
  constructor(_hoverManagerService, _sheetsThreadCommentPopupService, _sheetsThreadCommentModel, _sheetPermissionCheckController) {
    super();
    this._hoverManagerService = _hoverManagerService;
    this._sheetsThreadCommentPopupService = _sheetsThreadCommentPopupService;
    this._sheetsThreadCommentModel = _sheetsThreadCommentModel;
    this._sheetPermissionCheckController = _sheetPermissionCheckController;
    this._initHoverEvent();
  }
  _initHoverEvent() {
    this.disposeWithMe(
      this._hoverManagerService.currentCell$.pipe(debounceTime(100)).subscribe((cell) => {
        const currentPopup = this._sheetsThreadCommentPopupService.activePopup;
        if (cell && (currentPopup && currentPopup.temp || !currentPopup)) {
          const { location: location2 } = cell;
          const { unitId, subUnitId, row, col } = location2;
          const commentId = this._sheetsThreadCommentModel.getByLocation(unitId, subUnitId, row, col);
          if (commentId) {
            const commentPermission = this._sheetPermissionCheckController.permissionCheckWithRanges({
              workbookTypes: [WorkbookCommentPermission],
              worksheetTypes: [WorksheetViewPermission],
              rangeTypes: [RangeProtectionPermissionViewPoint]
            }, [{ startRow: row, startColumn: col, endRow: row, endColumn: col }]);
            if (!commentPermission) {
              return;
            }
            const comment = this._sheetsThreadCommentModel.getComment(unitId, subUnitId, commentId);
            if (comment && !comment.resolved) {
              this._sheetsThreadCommentPopupService.showPopup({
                unitId,
                subUnitId,
                row,
                col,
                commentId,
                temp: true
              });
            }
          } else {
            if (currentPopup) {
              this._sheetsThreadCommentPopupService.hidePopup();
            }
          }
        }
      })
    );
  }
};
SheetsThreadCommentHoverController = __decorateClass([
  __decorateParam(0, Inject(HoverManagerService)),
  __decorateParam(1, Inject(SheetsThreadCommentPopupService)),
  __decorateParam(2, Inject(SheetsThreadCommentModel)),
  __decorateParam(3, Inject(SheetPermissionCheckController))
], SheetsThreadCommentHoverController);

// ../packages/sheets-thread-comment-ui/src/controllers/sheets-thread-comment-popup.controller.ts
var SheetsThreadCommentPopupController = class extends Disposable {
  constructor(_commandService, _sheetsThreadCommentPopupService, _sheetsThreadCommentModel, _threadCommentPanelService, _univerInstanceService, _sheetPermissionCheckController, _markSelectionService, _sheetSelectionService, _editorBridgeService, _renderManagerService) {
    super();
    this._commandService = _commandService;
    this._sheetsThreadCommentPopupService = _sheetsThreadCommentPopupService;
    this._sheetsThreadCommentModel = _sheetsThreadCommentModel;
    this._threadCommentPanelService = _threadCommentPanelService;
    this._univerInstanceService = _univerInstanceService;
    this._sheetPermissionCheckController = _sheetPermissionCheckController;
    this._markSelectionService = _markSelectionService;
    this._sheetSelectionService = _sheetSelectionService;
    this._editorBridgeService = _editorBridgeService;
    this._renderManagerService = _renderManagerService;
    __publicField(this, "_isSwitchToCommenting", false);
    __publicField(this, "_selectionShapeInfo", null);
    this._initCommandListener();
    this._initPanelListener();
    this._initMarkSelection();
    this._initSelectionUpdateListener();
    this._initEditorBridge();
  }
  _handleSelectionChange(selections, unitId, subUnitId) {
    var _a, _b, _c;
    const range = (_a = selections[0]) == null ? void 0 : _a.range;
    const render = this._renderManagerService.getRenderById(unitId);
    const skeleton = (_b = render == null ? void 0 : render.with(SheetSkeletonManagerService).getSkeletonParam(subUnitId)) == null ? void 0 : _b.skeleton;
    if (!skeleton) {
      return;
    }
    if (!range) {
      return;
    }
    const actualCell = skeleton.getCellWithCoordByIndex(range.startRow, range.startColumn);
    const rangeType = (_c = range.rangeType) != null ? _c : 0 /* NORMAL */;
    if ((rangeType !== 0 /* NORMAL */ || range.endColumn - range.startColumn > 0 || range.endRow - range.startRow > 0) && !((actualCell.isMerged || actualCell.isMergedMainCell) && Rectangle.equals(actualCell.mergeInfo, range))) {
      if (this._threadCommentPanelService.activeCommentId) {
        this._commandService.executeCommand(SetActiveCommentOperation.id);
      }
      return;
    }
    const row = actualCell.actualRow;
    const col = actualCell.actualColumn;
    if (!this._sheetsThreadCommentModel.showCommentMarker(unitId, subUnitId, row, col)) {
      if (this._threadCommentPanelService.activeCommentId) {
        this._commandService.executeCommand(SetActiveCommentOperation.id);
      }
      return;
    }
    const commentId = this._sheetsThreadCommentModel.getByLocation(unitId, subUnitId, row, col);
    if (commentId) {
      this._commandService.executeCommand(SetActiveCommentOperation.id, {
        unitId,
        subUnitId,
        commentId
      });
    }
  }
  _initSelectionUpdateListener() {
    this.disposeWithMe(
      this._sheetSelectionService.selectionMoveEnd$.subscribe((selections) => {
        if (this._isSwitchToCommenting) {
          return;
        }
        const current = this._sheetSelectionService.currentSelectionParam;
        if (!current) {
          return;
        }
        this._handleSelectionChange(selections, current.unitId, current.sheetId);
      })
    );
  }
  _initEditorBridge() {
    this.disposeWithMe(
      this._editorBridgeService.visible$.subscribe((visible) => {
        if (visible.visible) {
          this._sheetsThreadCommentPopupService.hidePopup();
        }
      })
    );
  }
  _initCommandListener() {
    this._commandService.onCommandExecuted((commandInfo) => {
      if (commandInfo.id === DeleteCommentMutation.id) {
        const params = commandInfo.params;
        const active = this._sheetsThreadCommentPopupService.activePopup;
        if (!active) {
          return;
        }
        const { unitId, subUnitId, commentId } = active;
        if (params.unitId === unitId && params.subUnitId === subUnitId && params.commentId === commentId) {
          this._sheetsThreadCommentPopupService.hidePopup();
        }
      }
    });
  }
  _initPanelListener() {
    this.disposeWithMe(this._threadCommentPanelService.activeCommentId$.subscribe(async (commentInfo) => {
      var _a;
      if (commentInfo) {
        const { unitId, subUnitId, commentId, trigger } = commentInfo;
        const comment = this._sheetsThreadCommentModel.getComment(unitId, subUnitId, commentId);
        if (!comment || comment.resolved) {
          return;
        }
        const currentUnit = this._univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET);
        if (!currentUnit) {
          return;
        }
        const currentUnitId = currentUnit.getUnitId();
        if (currentUnitId !== unitId) {
          return;
        }
        this._isSwitchToCommenting = true;
        const currentSheetId = (_a = currentUnit.getActiveSheet()) == null ? void 0 : _a.getSheetId();
        if (currentSheetId !== subUnitId) {
          await this._commandService.executeCommand(SetWorksheetActiveOperation.id, {
            unitId,
            subUnitId
          });
        }
        this._isSwitchToCommenting = false;
        const location2 = singleReferenceToGrid(comment.ref);
        const { row, column: col } = location2;
        const commentPermission = this._sheetPermissionCheckController.permissionCheckWithRanges({
          workbookTypes: [WorkbookCommentPermission],
          worksheetTypes: [WorksheetViewPermission],
          rangeTypes: [RangeProtectionPermissionViewPoint]
        }, [{ startRow: row, startColumn: col, endRow: row, endColumn: col }]);
        if (!commentPermission) {
          return;
        }
        const GAP = 1;
        await this._commandService.executeCommand(ScrollToRangeOperation.id, {
          range: {
            startRow: Math.max(location2.row - GAP, 0),
            endRow: location2.row + GAP,
            startColumn: Math.max(location2.column - GAP, 0),
            endColumn: location2.column + GAP
          }
        });
        if (this._editorBridgeService.isVisible().visible) {
          return;
        }
        this._sheetsThreadCommentPopupService.showPopup({
          unitId,
          subUnitId,
          row: location2.row,
          col: location2.column,
          commentId: comment.id,
          trigger
        });
      } else {
        this._sheetsThreadCommentPopupService.hidePopup();
      }
    }));
  }
  _initMarkSelection() {
    this.disposeWithMe(this._threadCommentPanelService.activeCommentId$.pipe(debounceTime(100)).subscribe((activeComment) => {
      var _a, _b;
      if (!activeComment) {
        if (this._selectionShapeInfo) {
          this._markSelectionService.removeShape(this._selectionShapeInfo.shapeId);
          this._selectionShapeInfo = null;
        }
        return;
      }
      const { unitId, subUnitId, commentId } = activeComment;
      if (this._selectionShapeInfo) {
        this._markSelectionService.removeShape(this._selectionShapeInfo.shapeId);
        this._selectionShapeInfo = null;
      }
      const comment = this._sheetsThreadCommentModel.getComment(unitId, subUnitId, commentId);
      if (!comment) {
        return;
      }
      const location2 = singleReferenceToGrid(comment.ref);
      const { row, column } = location2;
      if (Number.isNaN(row) || Number.isNaN(column)) {
        return null;
      }
      const worksheet = (_a = this._univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET)) == null ? void 0 : _a.getSheetBySheetId(subUnitId);
      const mergeInfo = (_b = worksheet == null ? void 0 : worksheet.getMergedCell(row, column)) != null ? _b : {
        startColumn: column,
        endColumn: column,
        startRow: row,
        endRow: row
      };
      const shapeId = this._markSelectionService.addShape(
        {
          range: mergeInfo,
          style: {
            // hasAutoFill: false,
            fill: "rgb(255, 189, 55, 0.35)",
            strokeWidth: 1,
            stroke: "#FFBD37",
            widgets: {}
          },
          primary: null
        },
        [],
        -1
      );
      if (!shapeId) {
        return;
      }
      this._selectionShapeInfo = {
        ...activeComment,
        shapeId
      };
    }));
  }
};
SheetsThreadCommentPopupController = __decorateClass([
  __decorateParam(0, ICommandService),
  __decorateParam(1, Inject(SheetsThreadCommentPopupService)),
  __decorateParam(2, Inject(SheetsThreadCommentModel)),
  __decorateParam(3, Inject(ThreadCommentPanelService)),
  __decorateParam(4, IUniverInstanceService),
  __decorateParam(5, Inject(SheetPermissionCheckController)),
  __decorateParam(6, IMarkSelectionService),
  __decorateParam(7, Inject(SheetsSelectionsService)),
  __decorateParam(8, IEditorBridgeService),
  __decorateParam(9, IRenderManagerService)
], SheetsThreadCommentPopupController);

// ../packages/sheets-thread-comment-ui/src/controllers/sheets-thread-comment-remove.controller.ts
var ThreadCommentRemoveSheetsController = class extends Disposable {
  constructor(_sheetInterceptorService, _univerInstanceService, _threadCommentModel, _threadCommentDataSourceService) {
    super();
    this._sheetInterceptorService = _sheetInterceptorService;
    this._univerInstanceService = _univerInstanceService;
    this._threadCommentModel = _threadCommentModel;
    this._threadCommentDataSourceService = _threadCommentDataSourceService;
    this._initSheetChange();
  }
  _initSheetChange() {
    this.disposeWithMe(
      this._sheetInterceptorService.interceptCommand({
        getMutations: (commandInfo) => {
          var _a;
          if (commandInfo.id === RemoveSheetCommand.id) {
            const params = commandInfo.params;
            const workbook = params.unitId ? this._univerInstanceService.getUnit(params.unitId) : this._univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET);
            if (!workbook) {
              return { redos: [], undos: [] };
            }
            const unitId = workbook.getUnitId();
            const subUnitId = params.subUnitId || ((_a = workbook.getActiveSheet()) == null ? void 0 : _a.getSheetId());
            if (!subUnitId) {
              return { redos: [], undos: [] };
            }
            const commentMap = this._threadCommentModel.ensureMap(unitId, subUnitId);
            const comments = Array.from(commentMap.values()).filter((comment) => !comment.parentId);
            const ids = comments.map((comment) => comment.id);
            const shouldSync = this._threadCommentDataSourceService.syncUpdateMutationToColla;
            const redos = ids.map((id) => ({
              id: DeleteCommentMutation.id,
              params: {
                unitId,
                subUnitId,
                commentId: id
              }
            }));
            const undos = comments.map(({ children, ...comment }) => ({
              id: AddCommentMutation.id,
              params: {
                unitId,
                subUnitId,
                comment: {
                  ...comment,
                  children: shouldSync ? children : void 0
                },
                sync: !shouldSync
              }
            }));
            return { redos, undos };
          }
          return { redos: [], undos: [] };
        }
      })
    );
  }
};
ThreadCommentRemoveSheetsController = __decorateClass([
  __decorateParam(0, Inject(SheetInterceptorService)),
  __decorateParam(1, IUniverInstanceService),
  __decorateParam(2, Inject(ThreadCommentModel)),
  __decorateParam(3, IThreadCommentDataSourceService)
], ThreadCommentRemoveSheetsController);

// ../packages/sheets-thread-comment-ui/src/views/sheets-thread-comment-cell/index.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var SheetsThreadCommentCell = () => {
  const univerInstanceService = useDependency(IUniverInstanceService);
  const sheetsThreadCommentPopupService = useDependency(SheetsThreadCommentPopupService);
  const activePopup = useObservable(sheetsThreadCommentPopupService.activePopup$);
  const sheetThreadCommentModel = useDependency(SheetsThreadCommentModel);
  useObservable(sheetThreadCommentModel.commentUpdate$);
  if (!activePopup) {
    return null;
  }
  const { row, col, unitId, subUnitId, trigger } = activePopup;
  const rootId = sheetThreadCommentModel.getByLocation(unitId, subUnitId, row, col);
  const ref = `${Tools.chatAtABC(col)}${row + 1}`;
  const onClose = () => {
    sheetsThreadCommentPopupService.hidePopup();
  };
  const getSubUnitName = (id) => {
    var _a, _b, _c;
    return (_c = (_b = (_a = univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET)) == null ? void 0 : _a.getSheetBySheetId(id)) == null ? void 0 : _b.getName()) != null ? _c : "";
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    ThreadCommentTree,
    {
      onClick: () => {
        sheetsThreadCommentPopupService.persistPopup();
      },
      prefix: "cell",
      id: rootId,
      unitId,
      subUnitId,
      type: O.UNIVER_SHEET,
      refStr: ref,
      onClose,
      getSubUnitName,
      autoFocus: trigger === "context-menu"
    }
  );
};

// ../packages/sheets-thread-comment-ui/src/views/sheets-thread-comment-panel/index.tsx
var import_react = __toESM(require_react());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var SheetsThreadCommentPanel = () => {
  var _a;
  const markSelectionService = useDependency(IMarkSelectionService);
  const univerInstanceService = useDependency(IUniverInstanceService);
  const sheetsThreadCommentPopupService = useDependency(SheetsThreadCommentPopupService);
  const workbook = univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET);
  const unitId = workbook.getUnitId();
  const commandService = useDependency(ICommandService);
  const subUnitId$ = (0, import_react.useMemo)(() => workbook.activeSheet$.pipe(map((i) => i == null ? void 0 : i.getSheetId())), [workbook.activeSheet$]);
  const subUnitId = useObservable(subUnitId$, (_a = workbook.getActiveSheet()) == null ? void 0 : _a.getSheetId());
  const hoverShapeId = (0, import_react.useRef)(null);
  const panelService = useDependency(ThreadCommentPanelService);
  const activeCommentId = useObservable(panelService.activeCommentId$);
  const panelVisible = useObservable(panelService.panelVisible$, panelService.panelVisible);
  const sortComments = (0, import_react.useCallback)((comments) => {
    const worksheets = workbook.getSheets();
    const sheetIndex = {};
    worksheets.forEach((sheet, i) => {
      sheetIndex[sheet.getSheetId()] = i;
    });
    const sort = (comments2) => {
      return comments2.map((comment) => {
        var _a2;
        const ref = singleReferenceToGrid(comment.ref);
        const p = [(_a2 = sheetIndex[comment.subUnitId]) != null ? _a2 : 0, ref.row, ref.column];
        return { ...comment, p };
      }).sort((pre, aft) => {
        if (pre.p[0] === aft.p[0]) {
          if (pre.p[1] === aft.p[1]) {
            return pre.p[2] - aft.p[2];
          }
          return pre.p[1] - aft.p[1];
        }
        return pre.p[0] - aft.p[0];
      });
    };
    return [
      ...sort(comments.filter((comment) => !comment.resolved)),
      ...sort(comments.filter((comment) => comment.resolved))
    ];
  }, [workbook]);
  const showShape = (0, import_react.useCallback)((comment) => {
    var _a2;
    if (comment.unitId === unitId && comment.subUnitId === subUnitId && !comment.resolved) {
      const { row, column } = singleReferenceToGrid(comment.ref);
      const worksheet = workbook.getSheetBySheetId(comment.subUnitId);
      const mergeInfo = (_a2 = worksheet == null ? void 0 : worksheet.getMergedCell(row, column)) != null ? _a2 : {
        startColumn: column,
        endColumn: column,
        startRow: row,
        endRow: row
      };
      if (!Number.isNaN(row) && !Number.isNaN(column)) {
        return markSelectionService.addShape({
          range: mergeInfo,
          style: {
            // hasAutoFill: false,
            fill: "rgb(255, 189, 55, 0.35)",
            strokeWidth: 1,
            stroke: "#FFBD37",
            widgets: {}
          },
          primary: null
        });
      }
    }
    return null;
  }, [markSelectionService, subUnitId, unitId]);
  const getSubUnitName = (id) => {
    var _a2, _b;
    return (_b = (_a2 = workbook.getSheetBySheetId(id)) == null ? void 0 : _a2.getName()) != null ? _b : "";
  };
  const handleAdd = () => {
    commandService.executeCommand(ShowAddSheetCommentModalOperation.id);
  };
  const handleHover = (comment) => {
    if (activeCommentId && activeCommentId.unitId === comment.unitId && activeCommentId.subUnitId === comment.subUnitId && activeCommentId.commentId === comment.id) {
      return;
    }
    if (hoverShapeId.current) {
      markSelectionService.removeShape(hoverShapeId.current);
      hoverShapeId.current = null;
    }
    hoverShapeId.current = showShape(comment);
  };
  const handleLeave = () => {
    if (hoverShapeId.current) {
      markSelectionService.removeShape(hoverShapeId.current);
      hoverShapeId.current = null;
    }
  };
  const handleResolve = (id, resolved) => {
    if (resolved) {
      sheetsThreadCommentPopupService.hidePopup();
    }
  };
  (0, import_react.useEffect)(() => {
    if (!panelVisible && hoverShapeId.current) {
      markSelectionService.removeShape(hoverShapeId.current);
    }
  }, [markSelectionService, panelVisible]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    ThreadCommentPanel,
    {
      unitId,
      subUnitId$,
      type: O.UNIVER_SHEET,
      onAdd: handleAdd,
      getSubUnitName,
      onResolve: handleResolve,
      sortComments,
      onItemEnter: handleHover,
      onItemLeave: handleLeave,
      onDeleteComment: () => {
        handleLeave();
        return true;
      }
    }
  );
};

// ../packages/sheets-thread-comment-ui/src/controllers/menu.ts
var threadCommentMenuFactory = (accessor) => {
  return {
    id: ShowAddSheetCommentModalOperation.id,
    type: 0 /* BUTTON */,
    icon: COMMENT_SINGLE_ICON,
    title: "sheetThreadComment.menu.addComment",
    hidden$: getMenuHiddenObservable(accessor, O.UNIVER_SHEET),
    disabled$: getCurrentRangeDisable$(accessor, {
      workbookTypes: [WorkbookCommentPermission],
      worksheetTypes: [WorksheetViewPermission],
      rangeTypes: [RangeProtectionPermissionViewPoint]
    })
  };
};
var threadPanelMenuFactory = (accessor) => {
  return {
    id: ToggleSheetCommentPanelOperation.id,
    type: 0 /* BUTTON */,
    icon: COMMENT_SINGLE_ICON,
    tooltip: "sheetThreadComment.menu.commentManagement",
    disabled$: getCurrentRangeDisable$(accessor, {
      workbookTypes: [WorkbookCommentPermission],
      worksheetTypes: [WorksheetViewPermission],
      rangeTypes: [RangeProtectionPermissionViewPoint]
    }),
    hidden$: getMenuHiddenObservable(accessor, O.UNIVER_SHEET)
  };
};
var AddCommentShortcut = {
  id: ShowAddSheetCommentModalOperation.id,
  binding: 77 /* M */ | 4096 /* CTRL_COMMAND */ | 2048 /* ALT */,
  preconditions: whenSheetEditorFocused
};

// ../packages/sheets-thread-comment-ui/src/controllers/menu.schema.ts
var menuSchema = {
  ["ribbon.start.others" /* OTHERS */]: {
    [ToggleSheetCommentPanelOperation.id]: {
      order: 1,
      menuItemFactory: threadPanelMenuFactory
    }
  },
  ["contextMenu.mainArea" /* MAIN_AREA */]: {
    ["contextMenu.others" /* OTHERS */]: {
      [ShowAddSheetCommentModalOperation.id]: {
        order: 0,
        menuItemFactory: threadCommentMenuFactory
      }
    }
  }
};

// ../packages/sheets-thread-comment-ui/src/controllers/sheets-thread-comment.controller.ts
var SheetsThreadCommentController = class extends Disposable {
  constructor(_menuManagerService, _componentManager, _shortcutService) {
    super();
    this._menuManagerService = _menuManagerService;
    this._componentManager = _componentManager;
    this._shortcutService = _shortcutService;
    this._initMenu();
    this._initShortcut();
    this._initComponent();
  }
  _initShortcut() {
    this._shortcutService.registerShortcut(AddCommentShortcut);
  }
  _initMenu() {
    this._menuManagerService.mergeMenu(menuSchema);
  }
  _initComponent() {
    [
      [SHEETS_THREAD_COMMENT_MODAL, SheetsThreadCommentCell],
      [THREAD_COMMENT_PANEL, SheetsThreadCommentPanel],
      [COMMENT_SINGLE_ICON, comment_single_default]
    ].forEach(([key, comp]) => {
      this._componentManager.register(key, comp);
    });
  }
};
SheetsThreadCommentController = __decorateClass([
  __decorateParam(0, IMenuManagerService),
  __decorateParam(1, Inject(ComponentManager)),
  __decorateParam(2, IShortcutService)
], SheetsThreadCommentController);

// ../packages/sheets-thread-comment-ui/src/plugin.ts
var UniverSheetsThreadCommentUIPlugin = class extends Plugin {
  constructor(_config = defaultPluginConfig, _injector, _commandService, _configService) {
    super();
    this._config = _config;
    this._injector = _injector;
    this._commandService = _commandService;
    this._configService = _configService;
    const { menu, ...rest } = merge_default(
      {},
      defaultPluginConfig,
      this._config
    );
    if (menu) {
      this._configService.setConfig("menu", menu, { merge: true });
    }
    this._configService.setConfig(SHEETS_THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY, rest);
  }
  onStarting() {
    [
      [SheetsThreadCommentController],
      [SheetsThreadCommentRenderController],
      [SheetsThreadCommentCopyPasteController],
      [SheetsThreadCommentHoverController],
      [ThreadCommentRemoveSheetsController],
      [SheetsThreadCommentPopupController],
      [SheetsThreadCommentPopupService]
    ].forEach((dep) => {
      this._injector.add(dep);
    });
    [ShowAddSheetCommentModalOperation].forEach((command) => {
      this._commandService.registerCommand(command);
    });
    this._injector.get(SheetsThreadCommentController);
  }
  onReady() {
    this._injector.get(SheetsThreadCommentRenderController);
    this._injector.get(ThreadCommentRemoveSheetsController);
  }
  onRendered() {
    this._injector.get(SheetsThreadCommentCopyPasteController);
    this._injector.get(SheetsThreadCommentHoverController);
    this._injector.get(SheetsThreadCommentPopupController);
  }
};
__publicField(UniverSheetsThreadCommentUIPlugin, "pluginName", SHEETS_THREAD_COMMENT);
__publicField(UniverSheetsThreadCommentUIPlugin, "type", O.UNIVER_SHEET);
UniverSheetsThreadCommentUIPlugin = __decorateClass([
  DependentOn(UniverThreadCommentUIPlugin, UniverSheetsThreadCommentPlugin),
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, Inject(ICommandService)),
  __decorateParam(3, IConfigService)
], UniverSheetsThreadCommentUIPlugin);

// ../packages/sheets-zen-editor/src/controllers/config.schema.ts
var SHEETS_ZEN_EDITOR_PLUGIN_CONFIG_KEY = "sheets-zen-editor.config";
var configSymbol2 = Symbol(SHEETS_ZEN_EDITOR_PLUGIN_CONFIG_KEY);
var defaultPluginConfig2 = {};

// ../packages/sheets-zen-editor/src/commands/commands/zen-editor.command.ts
var OpenZenEditorCommand = {
  id: "zen-editor.command.open-zen-editor",
  type: 0 /* COMMAND */,
  handler: async (accessor) => {
    var _a;
    const zenZoneService = accessor.get(IZenZoneService);
    const editorService = accessor.get(IEditorService);
    const editorBridgeService = accessor.get(IEditorBridgeService);
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const sideBarService = accessor.get(ISidebarService);
    if (sideBarService.visible) {
      sideBarService.close();
      await delayAnimationFrame();
    }
    zenZoneService.open();
    const editor = editorService.getEditor(DOCS_ZEN_EDITOR_UNIT_ID_KEY);
    if (editor == null) {
      return false;
    }
    const editCellState = editorBridgeService.getLatestEditCellState();
    if (editCellState == null) {
      return false;
    }
    const snapshot = (_a = editCellState.documentLayoutObject.documentModel) == null ? void 0 : _a.getSnapshot();
    if (snapshot == null) {
      return false;
    }
    univerInstanceService.focusUnit(DOCS_ZEN_EDITOR_UNIT_ID_KEY);
    const { body, drawings, drawingsOrder, tableSource, settings } = Tools.deepClone(snapshot);
    const originSnapshot = editor.getDocumentData();
    const newSnapshot = {
      ...originSnapshot,
      body,
      drawings,
      drawingsOrder,
      tableSource,
      settings
    };
    const textRanges = [
      {
        startOffset: 0,
        endOffset: 0,
        collapsed: true
      }
    ];
    editor.focus();
    editor.setDocumentData(newSnapshot, textRanges);
    editor.clearUndoRedoHistory();
    return true;
  }
};
var CancelZenEditCommand = {
  id: "zen-editor.command.cancel-zen-edit",
  type: 0 /* COMMAND */,
  handler: async (accessor) => {
    const zenZoneEditorService = accessor.get(IZenZoneService);
    const editorBridgeService = accessor.get(IEditorBridgeService);
    const univerInstanceManager = accessor.get(IUniverInstanceService);
    const sideBarService = accessor.get(ISidebarService);
    if (sideBarService.visible) {
      sideBarService.close();
      await delayAnimationFrame();
    }
    zenZoneEditorService.close();
    const currentSheetInstance = univerInstanceManager.getCurrentUnitForType(O.UNIVER_SHEET);
    if (currentSheetInstance) {
      univerInstanceManager.focusUnit(currentSheetInstance.getUnitId());
      editorBridgeService.refreshEditCellState();
      return true;
    }
    return false;
  }
};
var ConfirmZenEditCommand = {
  id: "zen-editor.command.confirm-zen-edit",
  type: 0 /* COMMAND */,
  handler: async (accessor) => {
    var _a;
    const zenZoneEditorService = accessor.get(IZenZoneService);
    const editorBridgeService = accessor.get(IEditorBridgeService);
    const univerInstanceManager = accessor.get(IUniverInstanceService);
    const editorService = accessor.get(IEditorService);
    const sideBarService = accessor.get(ISidebarService);
    if (sideBarService.visible) {
      sideBarService.close();
      await delayAnimationFrame();
    }
    zenZoneEditorService.close();
    const editor = editorService.getEditor(DOCS_ZEN_EDITOR_UNIT_ID_KEY);
    if (editor == null) {
      return false;
    }
    const renderManagerService = accessor.get(IRenderManagerService);
    const currentSheetInstance = univerInstanceManager.getCurrentUnitForType(O.UNIVER_SHEET);
    if (currentSheetInstance) {
      const currentSheetId = currentSheetInstance.getUnitId();
      const editingRenderController = (_a = renderManagerService.getRenderById(currentSheetId)) == null ? void 0 : _a.with(EditingRenderController);
      if (editingRenderController) {
        const snapshot = Tools.deepClone(editor.getDocumentData());
        snapshot.documentStyle.documentFlavor = 0 /* UNSPECIFIED */;
        editingRenderController.submitCellData(new DocumentDataModel(snapshot));
      }
      univerInstanceManager.focusUnit(currentSheetInstance.getUnitId());
      editorBridgeService.refreshEditCellState();
      return true;
    }
    return false;
  }
};

// ../packages/sheets-zen-editor/src/views/zen-editor/ZenEditor.tsx
var import_react2 = __toESM(require_react());

// ../packages/sheets-zen-editor/src/services/zen-editor.service.ts
var ZenEditorManagerService = class {
  constructor() {
    __publicField(this, "_position", null);
    __publicField(this, "_position$", new BehaviorSubject(null));
    __publicField(this, "position$", this._position$.asObservable());
  }
  dispose() {
    this._position$.complete();
    this._position = null;
  }
  setPosition(param) {
    this._position = param;
    this._refresh(param);
  }
  getPosition() {
    return this._position;
  }
  _refresh(param) {
    this._position$.next(param);
  }
};
var IZenEditorManagerService = createIdentifier(
  "univer.sheet-zen-editor-manager.service"
);

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages/sheets-zen-editor/src/views/zen-editor/index.module.less
var index_module_default = {
  "zenEditor": "univer-zen-editor",
  "zenEditorIconWrapper": "univer-zen-editor-icon-wrapper",
  "zenEditorIconContainer": "univer-zen-editor-icon-container",
  "zenEditorIconSuccess": "univer-zen-editor-icon-success",
  "zenEditorIconError": "univer-zen-editor-icon-error",
  "zenEditorCanvasContainer": "univer-zen-editor-canvas-container"
};

// ../packages/sheets-zen-editor/src/views/zen-editor/ZenEditor.tsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var COMPONENT_PREFIX = "ZEN_EDITOR_PLUGIN_";
var ZEN_EDITOR_COMPONENT = `${COMPONENT_PREFIX}ZEN_EDITOR_COMPONENT`;
var INITIAL_SNAPSHOT = {
  id: DOCS_ZEN_EDITOR_UNIT_ID_KEY,
  body: {
    dataStream: `${DEFAULT_EMPTY_DOCUMENT_VALUE}`,
    textRuns: [],
    tables: [],
    customBlocks: [],
    paragraphs: [
      {
        startIndex: 0
      }
    ],
    sectionBreaks: [{
      startIndex: 1
    }]
  },
  tableSource: {},
  documentStyle: {
    pageSize: {
      width: 595,
      height: Number.POSITIVE_INFINITY
    },
    documentFlavor: 2 /* MODERN */,
    marginTop: 0,
    marginBottom: 0,
    marginRight: 0,
    marginLeft: 0,
    renderConfig: {
      vertexAngle: 0,
      centerAngle: 0
    }
  },
  drawings: {},
  drawingsOrder: []
};
function ZenEditor() {
  const editorRef = (0, import_react2.useRef)(null);
  const zenEditorService = useDependency(IZenEditorManagerService);
  const editorService = useDependency(IEditorService);
  const commandService = useDependency(ICommandService);
  (0, import_react2.useEffect)(() => {
    const editorDom = editorRef.current;
    if (!editorDom) {
      return;
    }
    const registerSubscription = editorService.register({
      editorUnitId: DOCS_ZEN_EDITOR_UNIT_ID_KEY,
      initialSnapshot: INITIAL_SNAPSHOT,
      scrollBar: true,
      backScrollOffset: 100
    }, editorDom);
    const resizeObserver = new ResizeObserver(() => {
      zenEditorService.setPosition(editorDom.getBoundingClientRect());
    });
    resizeObserver.observe(editorDom);
    return () => {
      registerSubscription.dispose();
      resizeObserver.unobserve(editorDom);
    };
  }, []);
  function handleCloseBtnClick() {
    const editor = editorService.getEditor(DOCS_ZEN_EDITOR_UNIT_ID_KEY);
    editor == null ? void 0 : editor.blur();
    commandService.executeCommand(CancelZenEditCommand.id);
  }
  function handleConfirmBtnClick() {
    const editor = editorService.getEditor(DOCS_ZEN_EDITOR_UNIT_ID_KEY);
    editor == null ? void 0 : editor.blur();
    commandService.executeCommand(ConfirmZenEditCommand.id);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: index_module_default.zenEditor, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: index_module_default.zenEditorIconWrapper, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "span",
        {
          className: clsx(index_module_default.zenEditorIconContainer, index_module_default.zenEditorIconError),
          onClick: handleCloseBtnClick,
          children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(close_single_default, { style: { fontSize: "22px" } })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "span",
        {
          className: clsx(index_module_default.zenEditorIconContainer, index_module_default.zenEditorIconSuccess),
          onClick: handleConfirmBtnClick,
          children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(check_mark_single_default, { style: { fontSize: "22px" } })
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: index_module_default.zenEditorCanvasContainer, ref: editorRef })
  ] });
}

// ../packages/sheets-zen-editor/src/views/menu.ts
function ZenEditorMenuItemFactory(accessor) {
  const editorBridgeService = accessor.get(IEditorBridgeService);
  return {
    id: OpenZenEditorCommand.id,
    type: 0 /* BUTTON */,
    title: "rightClick.zenEditor",
    icon: "AmplifySingle",
    hidden$: getCurrentExclusiveRangeInterest$(accessor),
    disabled$: editorBridgeService.currentEditCell$.pipe(
      switchMap((cell) => getCurrentRangeDisable$(accessor, { workbookTypes: [WorkbookEditablePermission], worksheetTypes: [WorksheetEditPermission, WorksheetSetCellValuePermission, WorksheetSetCellStylePermission], rangeTypes: [RangeProtectionPermissionEditPoint] }).pipe(map((disabled) => {
        var _a, _b, _c, _d;
        return disabled || ((_d = (_c = (_b = (_a = cell == null ? void 0 : cell.documentLayoutObject.documentModel) == null ? void 0 : _a.getBody()) == null ? void 0 : _b.customBlocks) == null ? void 0 : _c.length) != null ? _d : 0) > 0;
      })))
    )
  };
}

// ../packages/sheets-zen-editor/src/controllers/menu.schema.ts
var menuSchema2 = {
  ["contextMenu.mainArea" /* MAIN_AREA */]: {
    ["contextMenu.others" /* OTHERS */]: {
      [OpenZenEditorCommand.id]: {
        order: 2,
        menuItemFactory: ZenEditorMenuItemFactory
      }
    }
  }
};

// ../packages/sheets-zen-editor/src/controllers/shortcuts/zen-editor.shortcut.ts
var ZenEditorConfirmShortcut = {
  id: ConfirmZenEditCommand.id,
  description: "shortcut.sheet.zen-edit-confirm",
  group: "4_sheet-edit",
  preconditions: (contextService) => whenZenEditorActivated(contextService),
  binding: 13 /* ENTER */ | 2048 /* ALT */
};
var ZenEditorCancelShortcut = {
  id: CancelZenEditCommand.id,
  description: "shortcut.sheet.zen-edit-cancel",
  group: "4_sheet-edit",
  preconditions: (contextService) => whenZenEditorActivated(contextService),
  binding: 27 /* ESC */
};
function whenZenEditorActivated(contextService) {
  return contextService.getContextValue(FOCUSING_DOC) && contextService.getContextValue(FOCUSING_UNIVER_EDITOR) && contextService.getContextValue(EDITOR_ACTIVATED) && !contextService.getContextValue(FOCUSING_EDITOR_STANDALONE);
}

// ../packages/sheets-zen-editor/src/controllers/zen-editor-ui.controller.ts
var ZenEditorUIController = class extends Disposable {
  constructor(_zenZoneService, _commandService, _menuManagerService, _shortcutService) {
    super();
    this._zenZoneService = _zenZoneService;
    this._commandService = _commandService;
    this._menuManagerService = _menuManagerService;
    this._shortcutService = _shortcutService;
    this._initialize();
  }
  _initialize() {
    this._initCustomComponents();
    this._initCommands();
    this._initMenus();
    this._initShortcuts();
  }
  _initCustomComponents() {
    this.disposeWithMe(this._zenZoneService.set(ZEN_EDITOR_COMPONENT, ZenEditor));
  }
  _initCommands() {
    [OpenZenEditorCommand, CancelZenEditCommand, ConfirmZenEditCommand].forEach((c) => {
      this.disposeWithMe(this._commandService.registerCommand(c));
    });
  }
  _initMenus() {
    this._menuManagerService.mergeMenu(menuSchema2);
  }
  _initShortcuts() {
    [ZenEditorConfirmShortcut, ZenEditorCancelShortcut].forEach((item) => {
      this.disposeWithMe(this._shortcutService.registerShortcut(item));
    });
  }
};
ZenEditorUIController = __decorateClass([
  __decorateParam(0, IZenZoneService),
  __decorateParam(1, ICommandService),
  __decorateParam(2, IMenuManagerService),
  __decorateParam(3, IShortcutService)
], ZenEditorUIController);

// ../packages/sheets-zen-editor/src/controllers/zen-editor.controller.ts
var ZenEditorController = class extends RxDisposable {
  constructor(_zenEditorManagerService, _renderManagerService) {
    super();
    this._zenEditorManagerService = _zenEditorManagerService;
    this._renderManagerService = _renderManagerService;
    this._initialize();
  }
  _initialize() {
    this._syncZenEditorSize();
  }
  // Listen to changes in the size of the zen editor container to set the size of the editor.
  _syncZenEditorSize() {
    this._zenEditorManagerService.position$.pipe(takeUntil(this.dispose$)).subscribe((position) => {
      if (position == null) {
        return;
      }
      const { width, height } = position;
      const editorObject = getEditorObject(DOCS_ZEN_EDITOR_UNIT_ID_KEY, this._renderManagerService);
      if (editorObject == null) {
        return;
      }
      requestIdleCallback(() => {
        editorObject.engine.resizeBySize(width, height);
        this._calculatePagePosition(editorObject);
        this._scrollToTop();
      });
    });
  }
  _calculatePagePosition(currentRender) {
    const { document: docsComponent, scene, docBackground } = currentRender;
    const parent = scene == null ? void 0 : scene.getParent();
    const { width: docsWidth, height: docsHeight, pageMarginLeft, pageMarginTop } = docsComponent;
    if (parent == null || docsWidth === Number.POSITIVE_INFINITY || docsHeight === Number.POSITIVE_INFINITY) {
      return;
    }
    const { width: engineWidth, height: engineHeight } = parent;
    let docsLeft = 0;
    const docsTop = pageMarginTop;
    let sceneWidth = 0;
    let sceneHeight = 0;
    let scrollToX = Number.POSITIVE_INFINITY;
    const { scaleX, scaleY } = scene.getAncestorScale();
    if (engineWidth > (docsWidth + pageMarginLeft * 2) * scaleX) {
      docsLeft = engineWidth / 2 - docsWidth * scaleX / 2;
      docsLeft /= scaleX;
      sceneWidth = (engineWidth - pageMarginLeft * 2) / scaleX;
      scrollToX = 0;
    } else {
      docsLeft = pageMarginLeft;
      sceneWidth = docsWidth + pageMarginLeft * 2;
      scrollToX = (sceneWidth - engineWidth / scaleX) / 2;
    }
    if (engineHeight > docsHeight) {
      sceneHeight = (engineHeight - pageMarginTop * 2) / scaleY;
    } else {
      sceneHeight = docsHeight + pageMarginTop * 2;
    }
    scene.resize(sceneWidth, sceneHeight);
    docsComponent.translate(docsLeft, docsTop);
    docBackground.translate(docsLeft, docsTop);
    const viewport = scene.getViewport("viewMain" /* VIEW_MAIN */);
    if (scrollToX !== Number.POSITIVE_INFINITY && viewport != null) {
      const actualX = viewport.transScroll2ViewportScrollValue(scrollToX, 0).x;
      viewport.scrollToBarPos({
        x: actualX
      });
    }
    return this;
  }
  _scrollToTop() {
    var _a;
    const backScrollController = (_a = this._renderManagerService.getRenderById(DOCS_ZEN_EDITOR_UNIT_ID_KEY)) == null ? void 0 : _a.with(DocBackScrollRenderController);
    const textRange = {
      startOffset: 0,
      endOffset: 0
    };
    if (backScrollController) {
      backScrollController.scrollToRange(textRange);
    }
  }
};
ZenEditorController = __decorateClass([
  __decorateParam(0, IZenEditorManagerService),
  __decorateParam(1, IRenderManagerService)
], ZenEditorController);

// ../packages/sheets-zen-editor/src/plugin.ts
var UniverSheetsZenEditorPlugin = class extends Plugin {
  constructor(_config = defaultPluginConfig2, _injector, _configService) {
    super();
    this._config = _config;
    this._injector = _injector;
    this._configService = _configService;
    const { menu, ...rest } = merge_default(
      {},
      defaultPluginConfig2,
      this._config
    );
    if (menu) {
      this._configService.setConfig("menu", menu, { merge: true });
    }
    this._configService.setConfig(SHEETS_ZEN_EDITOR_PLUGIN_CONFIG_KEY, rest);
    this._initializeDependencies(this._injector);
  }
  _initializeDependencies(injector) {
    const dependencies = [
      [ZenEditorUIController],
      [ZenEditorController],
      [IZenEditorManagerService, { useClass: ZenEditorManagerService }]
    ];
    dependencies.forEach((dependency) => injector.add(dependency));
  }
  onReady() {
    this._injector.get(ZenEditorUIController);
  }
  onSteady() {
    this._injector.get(ZenEditorController);
  }
};
__publicField(UniverSheetsZenEditorPlugin, "pluginName", "SHEET_ZEN_EDITOR_PLUGIN");
__publicField(UniverSheetsZenEditorPlugin, "type", O.UNIVER_SHEET);
UniverSheetsZenEditorPlugin = __decorateClass([
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IConfigService)
], UniverSheetsZenEditorPlugin);

// ../packages/sheets/src/facade/f-defined-name.ts
function getDefinedNameFieldName(unitId, localeService, definedNamesService) {
  const definedNameMap = definedNamesService.getDefinedNameMap(unitId);
  if (definedNameMap == null) {
    return localeService.t("definedName.defaultName") + 1;
  }
  const definedNames = Array.from(Object.values(definedNameMap));
  const count = definedNames.length + 1;
  const name = localeService.t("definedName.defaultName") + count;
  if (definedNamesService.getValueByName(unitId, name) == null) {
    return name;
  }
  let i = count + 1;
  while (true) {
    const newName = localeService.t("definedName.defaultName") + i;
    if (definedNamesService.getValueByName(unitId, newName) == null) {
      return newName;
    }
    i++;
  }
}
var FDefinedNameBuilder = class {
  constructor() {
    __publicField(this, "_definedNameParam");
    this._definedNameParam = {
      id: generateRandomId(10),
      unitId: "",
      name: "",
      formulaOrRefString: ""
    };
  }
  /**
   * Sets the name of the defined name builder.
   * @param {string} name The name of the defined name.
   * @returns {FDefinedNameBuilder} The instance of `FDefinedNameBuilder` for method chaining.
   * @example
   * ```ts
   * const workbook = univerAPI.getActiveWorkbook();
   * const definedNameBuilder = univerAPI.newDefinedName()
   *   .setName('MyDefinedName')
   *   .build();
   * workbook.insertDefinedNameBuilder(definedNameBuilder);
   * ```
   */
  setName(name) {
    this._definedNameParam.name = name;
    return this;
  }
  /**
   * Sets the formula of the defined name builder.
   * @param {string }formula The formula of the defined name.
   * @returns {FDefinedNameBuilder} The instance of `FDefinedNameBuilder` for method chaining.
   * @example
   * ```ts
   * const workbook = univerAPI.getActiveWorkbook();
   * const definedNameBuilder = univerAPI.newDefinedName()
   *   .setFormula('SUM(Sheet1!$A$1)')
   *   .setName('MyDefinedName')
   *   .build();
   * workbook.insertDefinedNameBuilder(definedNameBuilder);
   * ```
   */
  setFormula(formula) {
    this._definedNameParam.formulaOrRefString = `=${formula}`;
    return this;
  }
  /**
   * Sets the reference of the defined name builder.
   * @param {string} a1Notation The reference of the defined name.
   * @returns {FDefinedNameBuilder} The instance of `FDefinedNameBuilder` for method chaining.
   * @example
   * ```ts
   * const workbook = univerAPI.getActiveWorkbook();
   * const definedNameBuilder = univerAPI.newDefinedName()
   *   .setRef('Sheet1!$A$1')
   *   .build();
   * workbook.insertDefinedNameBuilder(definedNameBuilder);
   * ```
   */
  setRef(a1Notation) {
    this._definedNameParam.formulaOrRefString = a1Notation;
    return this;
  }
  /**
   * Sets the reference of the defined name builder by range .
   * @param {number} row The start row of the range.
   * @param {number} column The start column of the range.
   * @param {number} numRows The number of rows in the range.
   * @param {number} numColumns The number of columns in the range.
   * @returns {FDefinedNameBuilder} The instance of `FDefinedNameBuilder` for method chaining.
   * @example
   * ```ts
   * const workbook = univerAPI.getActiveWorkbook();
   * const definedNameBuilder = univerAPI.newDefinedName()
   *   .setRefByRange(1, 3, 2, 5)
   *   .build();
   * workbook.insertDefinedNameBuilder(definedNameBuilder);
   * ```
   */
  setRefByRange(row, column, numRows, numColumns) {
    this._definedNameParam.formulaOrRefString = serializeRange({
      startRow: row,
      endRow: row + (numRows != null ? numRows : 1) - 1,
      startColumn: column,
      endColumn: column + (numColumns != null ? numColumns : 1) - 1
    });
    return this;
  }
  /**
   * Sets the comment of the defined name builder.
   * @param {string} comment The comment of the defined name.
   * @returns {FDefinedNameBuilder} The instance of `FDefinedNameBuilder` for method chaining.
   * @example
   * ```ts
   * const workbook = univerAPI.getActiveWorkbook();
   * const definedNameBuilder = univerAPI.newDefinedName()
   *   .setComment('This is a comment')
   *   .build();
   * workbook.insertDefinedNameBuilder(definedNameBuilder);
   * ```
   */
  setComment(comment) {
    this._definedNameParam.comment = comment;
    return this;
  }
  /**
   * Sets the hidden status of the defined name builder.
   * @param {boolean} hidden The hidden status of the defined name.
   * @returns {FDefinedNameBuilder} The instance of `FDefinedNameBuilder` for method chaining.
   * @example
   * ```ts
   * const workbook = univerAPI.getActiveWorkbook();
   * const definedNameBuilder = univerAPI.newDefinedName()
   *   .setHidden(true)
   *   .build();
   * workbook.insertDefinedNameBuilder(definedNameBuilder);
   * ```
   */
  setHidden(hidden) {
    this._definedNameParam.hidden = hidden;
    return this;
  }
  /**
   * Builds the defined name parameter.
   * @returns {ISetDefinedNameMutationParam} The defined name mutation parameter.
   * @example
   * ```ts
   * const workbook = univerAPI.getActiveWorkbook();
   * const definedNameBuilder = univerAPI.newDefinedName()
   *   .setRef('Sheet1!$A$1')
   *   .setName('MyDefinedName')
   *   .setComment('This is a comment')
   *   .build();
   * workbook.insertDefinedNameBuilder(definedNameBuilder);
   * ```
   */
  build() {
    return this._definedNameParam;
  }
  /**
   * Loads the defined name mutation parameter.
   * @param {ISetDefinedNameMutationParam} param - defined name mutation parameter
   * @returns {FDefinedNameBuilder} The instance of `FDefinedNameBuilder` for method chaining.
   * @example
   * ```ts
   * const workbook = univerAPI.getActiveWorkbook();
   * const definedNameParam = {
   *   id: '4TMPceoqg8',
   *   unitId: workbook.getId(),
   *   name: 'MyDefinedName',
   *   formulaOrRefString: 'Sheet1!$A$1',
   * }
   * const definedNameBuilder = univerAPI.newDefinedName()
   *   .load(definedNameParam)
   *   .build();
   * workbook.insertDefinedNameBuilder(definedNameBuilder);
   * ```
   */
  load(param) {
    this._definedNameParam = param;
    return this;
  }
};
var FDefinedName = class extends FBase {
  constructor(_definedNameParam, _injector, _commandService, _permissionService, _worksheetProtectionRuleModel, _rangeProtectionRuleModel, _worksheetProtectionPointRuleModel, _authzIoService, _localeService, _definedNamesService) {
    super();
    this._definedNameParam = _definedNameParam;
    this._injector = _injector;
    this._commandService = _commandService;
    this._permissionService = _permissionService;
    this._worksheetProtectionRuleModel = _worksheetProtectionRuleModel;
    this._rangeProtectionRuleModel = _rangeProtectionRuleModel;
    this._worksheetProtectionPointRuleModel = _worksheetProtectionPointRuleModel;
    this._authzIoService = _authzIoService;
    this._localeService = _localeService;
    this._definedNamesService = _definedNamesService;
  }
  _apply() {
    if (this._definedNameParam.name === "") {
      this._definedNameParam.name = getDefinedNameFieldName(this._definedNameParam.unitId, this._localeService, this._definedNamesService);
    }
    this._commandService.syncExecuteCommand(SetDefinedNameCommand.id, this._definedNameParam);
  }
  /**
   * Gets the name of the defined name.
   * @returns {string} The name of the defined name.
   * @example
   * ```ts
   * const workbook = univerAPI.getActiveWorkbook();
   * const definedName = workbook.getDefinedNames()[0];
   * console.log(definedName?.getName());
   * ```
   */
  getName() {
    return this._definedNameParam.name;
  }
  /**
   * Sets the name of the defined name.
   * @param {string} name The name of the defined name.
   * @example
   * ```ts
   * const workbook = univerAPI.getActiveWorkbook();
   * const definedName = workbook.getDefinedNames()[0];
   * definedName?.setName('NewDefinedName');
   * ```
   */
  setName(name) {
    this._definedNameParam.name = name;
    this._apply();
  }
  /**
   * Sets the formula of the defined name.
   * @param {string} formula The formula of the defined name.
   * @example
   * ```ts
   * const workbook = univerAPI.getActiveWorkbook();
   * const definedName = workbook.getDefinedNames()[0];
   * definedName?.setFormula('SUM(Sheet1!$A$1)');
   * ```
   */
  setFormula(formula) {
    this._definedNameParam.formulaOrRefString = `=${formula}`;
    this._apply();
  }
  /**
   * Sets the reference of the defined name.
   * @param {string} refString The reference of the defined name.
   * @example
   * ```ts
   * const workbook = univerAPI.getActiveWorkbook();
   * const definedName = workbook.getDefinedNames()[0];
   * definedName?.setRef('Sheet1!$A$1');
   * ```
   */
  setRef(refString) {
    this._definedNameParam.formulaOrRefString = refString;
    this._apply();
  }
  /**
   * Gets the formula or reference string of the defined name.
   * @returns {string} The formula or reference string of the defined name.
   * @example
   * ```ts
   * const workbook = univerAPI.getActiveWorkbook();
   * const definedName = workbook.getDefinedNames()[0];
   * console.log(definedName?.getFormulaOrRefString());
   * ```
   */
  getFormulaOrRefString() {
    return this._definedNameParam.formulaOrRefString;
  }
  /**
   * Sets the reference of the defined name by range.
   * @param {number} row The start row of the range.
   * @param {number} column The start column of the range.
   * @param {number} numRows The number of rows in the range.
   * @param {number} numColumns The number of columns in the range.
   * @example
   * ```ts
   * const workbook = univerAPI.getActiveWorkbook();
   * const definedName = workbook.getDefinedNames()[0];
   * definedName?.setRefByRange(1, 3, 2, 5);
   * ```
   */
  setRefByRange(row, column, numRows, numColumns) {
    this._definedNameParam.formulaOrRefString = serializeRange({
      startRow: row,
      endRow: row + (numRows != null ? numRows : 1) - 1,
      startColumn: column,
      endColumn: column + (numColumns != null ? numColumns : 1) - 1
    });
    this._apply();
  }
  /**
   * Gets the comment of the defined name.
   * @returns {string | undefined} The comment of the defined name.
   * @example
   * ```ts
   * const workbook = univerAPI.getActiveWorkbook();
   * const definedName = workbook.getDefinedNames()[0];
   * console.log(definedName?.getComment());
   * ```
   */
  getComment() {
    return this._definedNameParam.comment;
  }
  /**
   * Sets the comment of the defined name.
   * @param {string} comment The comment of the defined name.
   * @example
   * ```ts
   * const workbook = univerAPI.getActiveWorkbook();
   * const definedName = workbook.getDefinedNames()[0];
   * definedName?.setComment('This is a comment');
   * ```
   */
  setComment(comment) {
    this._definedNameParam.comment = comment;
    this._apply();
  }
  /**
   * Sets the scope of the defined name to the worksheet.
   * @param {FWorksheet} worksheet The worksheet to set the scope to.
   * @example
   * ```ts
   * const workbook = univerAPI.getActiveWorkbook();
   * const worksheet = workbook.getSheets()[0];
   * const definedName = workbook.getDefinedNames()[0];
   * definedName?.setScopeToWorksheet(worksheet);
   * ```
   */
  setScopeToWorksheet(worksheet) {
    this._definedNameParam.localSheetId = worksheet.getSheetId();
    this._apply();
  }
  /**
   * Sets the scope of the defined name to the workbook.
   * @example
   * ```ts
   * const workbook = univerAPI.getActiveWorkbook();
   * const definedName = workbook.getDefinedNames()[0];
   * definedName?.setScopeToWorkbook();
   * ```
   */
  setScopeToWorkbook() {
    this._definedNameParam.localSheetId = SCOPE_WORKBOOK_VALUE_DEFINED_NAME;
    this._apply();
  }
  /**
   * Sets the hidden status of the defined name.
   * @param {boolean} hidden The hidden status of the defined name.
   * @example
   * ```ts
   * const workbook = univerAPI.getActiveWorkbook();
   * const definedName = workbook.getDefinedNames()[0];
   * definedName?.setHidden(true);
   * ```
   */
  setHidden(hidden) {
    this._definedNameParam.hidden = hidden;
    this._apply();
  }
  /**
   * Deletes the defined name.
   * @example
   * ```ts
   * const workbook = univerAPI.getActiveWorkbook();
   * const definedName = workbook.getDefinedNames()[0];
   * definedName?.delete();
   * ```
   */
  delete() {
    this._commandService.syncExecuteCommand(RemoveDefinedNameCommand.id, this._definedNameParam);
  }
  /**
   * Gets the local sheet id of the defined name.
   * @returns {string | undefined} The local sheet id of the defined name.
   * @example
   * ```ts
   * const workbook = univerAPI.getActiveWorkbook();
   * const definedName = workbook.getDefinedNames()[0];
   * console.log(definedName?.getLocalSheetId());
   * ```
   */
  getLocalSheetId() {
    return this._definedNameParam.localSheetId;
  }
  /**
   * Checks if the defined name is in the workbook scope.
   * @returns {boolean} True if the defined name is in the workbook scope, false otherwise.
   * @example
   * ```ts
   * const workbook = univerAPI.getActiveWorkbook();
   * const definedName = workbook.getDefinedNames()[0];
   * console.log(definedName?.isWorkbookScope());
   * ```
   */
  isWorkbookScope() {
    return this._definedNameParam.localSheetId === SCOPE_WORKBOOK_VALUE_DEFINED_NAME;
  }
  /**
   * Converts the defined name to a defined name builder.
   * @returns {FDefinedNameBuilder} The defined name builder.
   * @example
   * ```ts
   * const workbook = univerAPI.getActiveWorkbook();
   * const definedName = workbook.getDefinedNames()[0];
   * if (!definedName) return;
   * const definedNameBuilder = definedName
   *   .toBuilder()
   *   .setName('NewDefinedName')
   *   .setFormula('SUM(Sheet1!$A$1)')
   *   .build();
   * workbook.updateDefinedNameBuilder(definedNameBuilder);
   * ```
   */
  toBuilder() {
    const builder = this._injector.createInstance(FDefinedNameBuilder);
    builder.load(this._definedNameParam);
    return builder;
  }
};
FDefinedName = __decorateClass([
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, ICommandService),
  __decorateParam(3, IPermissionService),
  __decorateParam(4, Inject(WorksheetProtectionRuleModel)),
  __decorateParam(5, Inject(RangeProtectionRuleModel)),
  __decorateParam(6, Inject(WorksheetProtectionPointModel)),
  __decorateParam(7, Inject(IAuthzIoService)),
  __decorateParam(8, Inject(LocaleService)),
  __decorateParam(9, IDefinedNamesService)
], FDefinedName);

// ../packages/sheets/src/facade/f-permission.ts
var FPermission = class extends FBase {
  constructor(_injector, _commandService, _permissionService, _worksheetProtectionRuleModel, _rangeProtectionRuleModel, _worksheetProtectionPointRuleModel, _authzIoService) {
    super();
    this._injector = _injector;
    this._commandService = _commandService;
    this._permissionService = _permissionService;
    this._worksheetProtectionRuleModel = _worksheetProtectionRuleModel;
    this._rangeProtectionRuleModel = _rangeProtectionRuleModel;
    this._worksheetProtectionPointRuleModel = _worksheetProtectionPointRuleModel;
    this._authzIoService = _authzIoService;
    /**
     * Permission point definition, can read the point constructor want to modify from here
     */
    __publicField(this, "permissionPointsDefinition", PermissionPointsDefinitions);
    /**
     * An observable object used to monitor permission change events within a range, thereby triggering corresponding subsequent processing.
     */
    __publicField(this, "rangeRuleChangedAfterAuth$");
    /**
     * An observable object used to monitor permission change events within a worksheet, thereby triggering corresponding subsequent processing.
     */
    __publicField(this, "sheetRuleChangedAfterAuth$");
    this.rangeRuleChangedAfterAuth$ = this._rangeProtectionRuleModel.ruleRefresh$;
    this.sheetRuleChangedAfterAuth$ = this._worksheetProtectionRuleModel.ruleRefresh$;
  }
  /**
   * Configures a specific permission point for a workbook.
   * This function sets or updates a permission point for a workbook identified by `unitId`.
   * It creates a new permission point if it does not already exist, and updates the point with the provided value.
   * @param {string} unitId - The unique identifier of the workbook for which the permission is being set.
   * @param {WorkbookPermissionPointConstructor} FPointClass - The constructor function for creating a permission point instance. Other point constructors can See the [permission-point documentation](https://github.com/dream-num/univer/tree/dev/packages/sheets/src/services/permission/permission-point) for more details.
   * @param {boolean} value - The boolean value to determine whether the permission point is enabled or disabled.
   *
   * @example
   * ```typescript
   * const workbook = univerAPI.getActiveWorkbook();
   * const permission = workbook.getPermission();
   * const unitId = workbook.getId();
   * permission.setWorkbookPermissionPoint(unitId, permission.permissionPointsDefinition.WorkbookEditablePermission, false)
   * ```
   */
  setWorkbookPermissionPoint(unitId, FPointClass, value) {
    const instance = new FPointClass(unitId);
    const permissionPoint = this._permissionService.getPermissionPoint(instance.id);
    if (!permissionPoint) {
      this._permissionService.addPermissionPoint(instance);
    }
    this._permissionService.updatePermissionPoint(instance.id, value);
  }
  /**
   * This function is used to set whether the workbook can be edited
   * @param {string} unitId - The unique identifier of the workbook for which the permission is being set.
   * @param {boolean} value - A value that controls whether the workbook can be edited
   *
   * @example
   * ```typescript
   * const workbook = univerAPI.getActiveWorkbook();
   * const permission = workbook.getPermission();
   * const unitId = workbook.getId();
   * permission.setWorkbookEditPermission(unitId, false);
   * ```
   */
  setWorkbookEditPermission(unitId, value) {
    this.setWorkbookPermissionPoint(unitId, WorkbookEditablePermission, value);
  }
  /**
   * This function is used to add a base permission for a worksheet.
   * Note that after adding, only the background mask of the permission module will be rendered. If you want to modify the function permissions,
   * you need to modify the permission points with the permissionId returned by this function.
   * @param {string} unitId - The unique identifier of the workbook for which the permission is being set.
   * @param {string} subUnitId - The unique identifier of the worksheet for which the permission is being set.
   * @returns {Promise<string | undefined>} - Returns the `permissionId` if the permission is successfully added. If the operation fails or no result is returned, it resolves to `undefined`.
   *
   * @example
   * ```typescript
   * const workbook = univerAPI.getActiveWorkbook();
   * const permission = workbook.getPermission();
   * const unitId = workbook.getId();
   * const worksheet = workbook.getActiveSheet();
   * const subUnitId = worksheet.getSheetId();
   * // Note that there will be no permission changes after this step is completed. It only returns an ID for subsequent permission changes.
   * // For details, please see the example of the **`setWorksheetPermissionPoint`** API.
   * const permissionId = await permission.addWorksheetBasePermission(unitId, subUnitId)
   * // Can still edit and read it.
   * console.log('debugger', permissionId)
   * ```
   */
  async addWorksheetBasePermission(unitId, subUnitId) {
    const hasRangeProtection = this._rangeProtectionRuleModel.getSubunitRuleList(unitId, subUnitId).length > 0;
    if (hasRangeProtection) {
      throw new Error("sheet protection cannot intersect with range protection");
    }
    const permissionId = await this._authzIoService.create({
      objectType: a.Worksheet,
      worksheetObject: {
        collaborators: [],
        unitID: unitId,
        strategies: [],
        name: "",
        scope: void 0
      }
    });
    const res = this._commandService.syncExecuteCommand(AddWorksheetProtectionMutation.id, {
      unitId,
      subUnitId,
      rule: {
        permissionId,
        unitType: a.Worksheet,
        unitId,
        subUnitId
      }
    });
    if (res) {
      return permissionId;
    }
  }
  /**
   * Delete the entire table protection set for the worksheet and reset the point permissions of the worksheet to true
   * @param {string} unitId - The unique identifier of the workbook for which the permission is being set.
   * @param {string} subUnitId - The unique identifier of the worksheet for which the permission is being set.
   *
   * @example
   * ```typescript
   * const workbook = univerAPI.getActiveWorkbook();
   * const permission = workbook.getPermission();
   * const unitId = workbook.getId();
   * const worksheet = workbook.getActiveSheet();
   * const subUnitId = worksheet.getSheetId();
   * permission.removeWorksheetPermission(unitId, subUnitId);
   * ```
   */
  removeWorksheetPermission(unitId, subUnitId) {
    this._commandService.syncExecuteCommand(DeleteWorksheetProtectionMutation.id, {
      unitId,
      subUnitId
    });
    [...getAllWorksheetPermissionPoint(), ...getAllWorksheetPermissionPointByPointPanel()].forEach((F) => {
      const instance = new F(unitId, subUnitId);
      this._permissionService.updatePermissionPoint(instance.id, true);
    });
    this._worksheetProtectionPointRuleModel.deleteRule(unitId, subUnitId);
  }
  /**
   * Sets the worksheet permission point by updating or adding the permission point for the worksheet.
   * If the worksheet doesn't have a base permission, it creates one to used render
   * @param {string} unitId - The unique identifier of the workbook.
   * @param {string} subUnitId - The unique identifier of the worksheet.
   * @param {WorkSheetPermissionPointConstructor} FPointClass - The constructor for the permission point class.
   *    See the [permission-point documentation](https://github.com/dream-num/univer/tree/dev/packages/sheets/src/services/permission/permission-point) for more details.
   * @param {boolean} value - The new permission value to be set for the worksheet.
   * @returns {Promise<string | undefined>} - Returns the `permissionId` if the permission point is successfully set or created. If no permission is set, it resolves to `undefined`.
   *
   * @example
   * ```typescript
   * const workbook = univerAPI.getActiveWorkbook();
   * const permission = workbook.getPermission();
   * const unitId = workbook.getId();
   * const worksheet = workbook.getActiveSheet();
   * const subUnitId = worksheet.getSheetId();
   * const permissionId = await permission.addWorksheetBasePermission(unitId, subUnitId)
   * // After this line of code , the worksheet will no longer be editable
   * permission.setWorksheetPermissionPoint(unitId, subUnitId, permission.permissionPointsDefinition.WorksheetEditPermission, false);
   * ```
   */
  async setWorksheetPermissionPoint(unitId, subUnitId, FPointClass, value) {
    const hasBasePermission = this._worksheetProtectionRuleModel.getRule(unitId, subUnitId);
    let permissionId;
    const isBasePoint = FPointClass === WorksheetEditPermission || FPointClass === WorksheetViewPermission;
    if (isBasePoint) {
      if (!hasBasePermission) {
        const hasRangeProtection = this._rangeProtectionRuleModel.getSubunitRuleList(unitId, subUnitId).length > 0;
        if (hasRangeProtection) {
          throw new Error("sheet protection cannot intersect with range protection");
        }
        permissionId = await this.addWorksheetBasePermission(unitId, subUnitId);
      } else {
        permissionId = hasBasePermission.permissionId;
      }
    } else {
      const rule = this._worksheetProtectionPointRuleModel.getRule(unitId, subUnitId);
      if (!rule) {
        permissionId = await this._authzIoService.create({
          objectType: a.Worksheet,
          worksheetObject: {
            collaborators: [],
            unitID: unitId,
            strategies: [],
            name: "",
            scope: void 0
          }
        });
        this._commandService.syncExecuteCommand(SetWorksheetPermissionPointsMutation.id, { unitId, subUnitId, rule: { unitId, subUnitId, permissionId } });
      } else {
        permissionId = rule.permissionId;
      }
    }
    const instance = new FPointClass(unitId, subUnitId);
    const permissionPoint = this._permissionService.getPermissionPoint(instance.id);
    if (!permissionPoint) {
      this._permissionService.addPermissionPoint(instance);
    }
    this._permissionService.updatePermissionPoint(instance.id, value);
    return permissionId;
  }
  /**
   * Adds a range protection to the worksheet.
   * Note that after adding, only the background mask of the permission module will be rendered. If you want to modify the function permissions,
   * you need to modify the permission points with the permissionId returned by this function.
   * @param {string} unitId - The unique identifier of the workbook.
   * @param {string} subUnitId - The unique identifier of the worksheet.
   * @param {FRange[]} ranges - The ranges to be protected.
   * @returns {Promise<{ permissionId: string, ruleId: string } | undefined>} - Returns an object containing the `permissionId` and `ruleId` if the range protection is successfully added. If the operation fails or no result is returned, it resolves to `undefined`. permissionId is used to stitch permission point ID，ruleId is used to store permission rules
   *
   * @example
   * ```typescript
   * const workbook = univerAPI.getActiveWorkbook();
   * const permission = workbook.getPermission();
   * const unitId = workbook.getId();
   * const worksheet = workbook.getActiveSheet();
   * const subUnitId = worksheet.getSheetId();
   * const range = worksheet.getRange('A1:B2');
   * const ranges = [];
   * ranges.push(range);
   * // Note that there will be no permission changes after this step is completed. It only returns an ID for subsequent permission changes.
   * // For details, please see the example of the **`setRangeProtectionPermissionPoint`** API.
   * const res = await permission.addRangeBaseProtection(unitId, subUnitId, ranges);
   * const {permissionId, ruleId} = res;
   * console.log('debugger', permissionId, ruleId);
   * ```
   */
  async addRangeBaseProtection(unitId, subUnitId, ranges) {
    const permissionId = await this._authzIoService.create({
      objectType: a.SelectRange,
      selectRangeObject: {
        collaborators: [],
        unitID: unitId,
        name: "",
        scope: void 0
      }
    });
    const ruleId = `ruleId_${generateRandomId(6)}`;
    const worksheetProtection = this._worksheetProtectionRuleModel.getRule(unitId, subUnitId);
    if (worksheetProtection) {
      throw new Error("sheet protection cannot intersect with range protection");
    }
    const subunitRuleList = this._rangeProtectionRuleModel.getSubunitRuleList(unitId, subUnitId);
    const overlap = subunitRuleList.some((rule) => {
      return rule.ranges.some((range) => {
        return ranges.some((newRange) => {
          return Rectangle.intersects(newRange.getRange(), range);
        });
      });
    });
    if (overlap) {
      throw new Error("range protection cannot intersect");
    }
    const res = this._commandService.syncExecuteCommand(AddRangeProtectionMutation.id, {
      unitId,
      subUnitId,
      rules: [{
        permissionId,
        unitType: a.SelectRange,
        unitId,
        subUnitId,
        ranges: ranges.map((range) => range.getRange()),
        id: ruleId
      }]
    });
    if (res) {
      return {
        permissionId,
        ruleId
      };
    }
  }
  /**
   * Removes the range protection from the worksheet.
   * @param {string} unitId - The unique identifier of the workbook.
   * @param {string} subUnitId - The unique identifier of the worksheet.
   * @param {string[]} ruleIds - The rule IDs of the range protection to be removed.
   *
   * @example
   * ```typescript
   * const workbook = univerAPI.getActiveWorkbook();
   * const permission = workbook.getPermission();
   * const unitId = workbook.getId();
   * const worksheet = workbook.getActiveSheet();
   * const subUnitId = worksheet.getSheetId();
   * const range = worksheet.getRange('A1:B2');
   * const ranges = [];
   * ranges.push(range);
   * const res = await permission.addRangeBaseProtection(unitId, subUnitId, ranges);
   * const ruleId = res.ruleId;
   * permission.removeRangeProtection(unitId, subUnitId, [ruleId]);
   * ```
   */
  removeRangeProtection(unitId, subUnitId, ruleIds) {
    const res = this._commandService.syncExecuteCommand(DeleteRangeProtectionMutation.id, {
      unitId,
      subUnitId,
      ruleIds
    });
    if (res) {
      const ruleList = this._rangeProtectionRuleModel.getSubunitRuleList(unitId, subUnitId);
      if (ruleList.length === 0) {
        this._worksheetProtectionPointRuleModel.deleteRule(unitId, subUnitId);
        [...getAllWorksheetPermissionPointByPointPanel()].forEach((F) => {
          const instance = new F(unitId, subUnitId);
          this._permissionService.updatePermissionPoint(instance.id, instance.value);
        });
      }
    }
  }
  /**
   * Modify the permission points of a custom area
   * @param {string} unitId - The unique identifier of the workbook.
   * @param {string} subUnitId - The unique identifier of the worksheet within the workbook.
   * @param {string} permissionId - The unique identifier of the permission that controls access to the range.
   * @param {RangePermissionPointConstructor} FPointClass - The constructor for the range permission point class.
   *    See the [permission-point documentation](https://github.com/dream-num/univer/tree/dev/packages/sheets/src/services/permission/permission-point) for more details.
   * @param {boolean} value - The new permission value to be set for the range (e.g., true for allowing access, false for restricting access).
   *
   * @example
   * ```typescript
   * const workbook = univerAPI.getActiveWorkbook();
   * const permission = workbook.getPermission();
   * const unitId = workbook.getId();
   * const worksheet = workbook.getActiveSheet();
   * const subUnitId = worksheet.getSheetId();
   * const range = worksheet.getRange('A1:B2');
   * const ranges = [];
   * ranges.push(range);
   * // Note that there will be no permission changes after this step is completed. It only returns an ID for subsequent permission changes.
   * // For details, please see the example of the **`setRangeProtectionPermissionPoint`** API.
   * const res = await permission.addRangeBaseProtection(unitId, subUnitId, ranges);
   * const {permissionId, ruleId} = res;
   * // After passing the following line of code, the range set above will become uneditable
   * permission.setRangeProtectionPermissionPoint(unitId,subUnitId,permissionId, permission.permissionPointsDefinition.RangeProtectionPermissionEditPoint, false);
   * ```
   */
  setRangeProtectionPermissionPoint(unitId, subUnitId, permissionId, FPointClass, value) {
    const instance = new FPointClass(unitId, subUnitId, permissionId);
    const permissionPoint = this._permissionService.getPermissionPoint(instance.id);
    if (!permissionPoint) {
      this._permissionService.addPermissionPoint(instance);
    }
    this._permissionService.updatePermissionPoint(instance.id, value);
  }
  /**
   * Sets the ranges for range protection in a worksheet.
   *
   * This method finds the rule by unitId, subUnitId, and ruleId, and updates the rule with the provided ranges.
   * It checks for overlaps with existing ranges in the same subunit and shows an error message if any overlap is detected.
   * If no overlap is found, it executes the command to update the range protection with the new ranges.
   * @param {string} unitId - The unique identifier of the workbook.
   * @param {string} subUnitId - The unique identifier of the worksheet within the workbook.
   * @param {string} ruleId - The ruleId of the range protection rule that is being updated.
   * @param {FRange[]} ranges - The array of new ranges to be set for the range protection rule.
   *
   * @example
   * ```typescript
   * const workbook = univerAPI.getActiveWorkbook();
   * const permission = workbook.getPermission();
   * const unitId = workbook.getId();
   * const worksheet = workbook.getActiveSheet();
   * const subUnitId = worksheet.getSheetId();
   * const range = worksheet.getRange('A1:B2');
   * const ranges = [];
   * ranges.push(range);
   * const res = await permission.addRangeBaseProtection(unitId, subUnitId, ranges);
   * const {permissionId, ruleId} = res;
   * const newRange = worksheet.getRange('C1:D2');
   * permission.setRangeProtectionRanges(unitId, subUnitId, ruleId, [newRange]);
   * ```
   */
  setRangeProtectionRanges(unitId, subUnitId, ruleId, ranges) {
    const rule = this._rangeProtectionRuleModel.getRule(unitId, subUnitId, ruleId);
    if (rule) {
      const subunitRuleList = this._rangeProtectionRuleModel.getSubunitRuleList(unitId, subUnitId).filter((r) => r.id !== ruleId);
      const overlap = subunitRuleList.some((rule2) => {
        return rule2.ranges.some((range) => {
          return ranges.some((newRange) => {
            return Rectangle.intersects(newRange.getRange(), range);
          });
        });
      });
      if (overlap) {
        throw new Error("range protection cannot intersect");
      }
      this._commandService.syncExecuteCommand(SetRangeProtectionMutation.id, {
        unitId,
        subUnitId,
        ruleId,
        rule: {
          ...rule,
          ranges: ranges.map((range) => range.getRange())
        }
      });
    }
  }
};
FPermission = __decorateClass([
  __decorateParam(0, Inject(Injector)),
  __decorateParam(1, ICommandService),
  __decorateParam(2, IPermissionService),
  __decorateParam(3, Inject(WorksheetProtectionRuleModel)),
  __decorateParam(4, Inject(RangeProtectionRuleModel)),
  __decorateParam(5, Inject(WorksheetProtectionPointModel)),
  __decorateParam(6, Inject(IAuthzIoService))
], FPermission);

// ../packages/sheets/src/facade/utils.ts
function transformFacadeHorizontalAlignment(value) {
  switch (value) {
    case "left":
      return 1 /* LEFT */;
    case "center":
      return 2 /* CENTER */;
    case "normal":
      return 3 /* RIGHT */;
    default:
      throw new Error(`Invalid horizontal alignment: ${value}`);
  }
}
function transformCoreHorizontalAlignment(value) {
  switch (value) {
    case 1 /* LEFT */:
      return "left";
    case 2 /* CENTER */:
      return "center";
    case 3 /* RIGHT */:
      return "normal";
    default:
      return "general";
  }
}
function transformFacadeVerticalAlignment(value) {
  switch (value) {
    case "top":
      return 1 /* TOP */;
    case "middle":
      return 2 /* MIDDLE */;
    case "bottom":
      return 3 /* BOTTOM */;
    default:
      throw new Error(`Invalid vertical alignment: ${value}`);
  }
}
function transformCoreVerticalAlignment(value) {
  switch (value) {
    case 1 /* TOP */:
      return "top";
    case 2 /* MIDDLE */:
      return "middle";
    case 3 /* BOTTOM */:
      return "bottom";
    default:
      return "general";
  }
}
function covertCellValue(value) {
  if (isFormulaString(value)) {
    return {
      f: value,
      v: null,
      p: null
    };
  }
  if (isCellV(value)) {
    return {
      v: value,
      p: null,
      f: null
    };
  }
  if (isICellData(value)) {
    return value;
  }
  return value;
}
function covertCellValues(value, range) {
  const cellValue = new ObjectMatrix();
  const { startRow, startColumn, endRow, endColumn } = range;
  if (Tools.isArray(value)) {
    for (let r = 0; r <= endRow - startRow; r++) {
      for (let c = 0; c <= endColumn - startColumn; c++) {
        cellValue.setValue(r + startRow, c + startColumn, covertCellValue(value[r][c]));
      }
    }
  } else {
    const valueMatrix = new ObjectMatrix(value);
    valueMatrix.forValue((r, c, v) => {
      cellValue.setValue(r, c, covertCellValue(v));
    });
  }
  return cellValue.getMatrix();
}
function covertToRowRange(range, worksheet) {
  return {
    startRow: range.startRow,
    endRow: range.endRow,
    startColumn: 0,
    endColumn: worksheet.getColumnCount() - 1,
    rangeType: 1 /* ROW */
  };
}
function covertToColRange(range, worksheet) {
  return {
    startRow: 0,
    endRow: worksheet.getRowCount() - 1,
    startColumn: range.startColumn,
    endColumn: range.endColumn,
    rangeType: 2 /* COLUMN */
  };
}

// ../packages/sheets/src/facade/f-range.ts
var FRange = class extends FBaseInitialable {
  constructor(_workbook, _worksheet, _range, _injector, _commandService, _formulaDataModel) {
    super(_injector);
    this._workbook = _workbook;
    this._worksheet = _worksheet;
    this._range = _range;
    this._injector = _injector;
    this._commandService = _commandService;
    this._formulaDataModel = _formulaDataModel;
  }
  /**
   * Get the unit ID of the current workbook
   * @returns {string} The unit ID of the workbook
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getUnitId());
   * ```
   */
  getUnitId() {
    return this._workbook.getUnitId();
  }
  /**
   * Gets the name of the worksheet
   * @returns {string} The name of the worksheet
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getSheetName());
   * ```
   */
  getSheetName() {
    return this._worksheet.getName();
  }
  /**
   * Gets the ID of the worksheet
   * @returns {string} The ID of the worksheet
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getSheetId());
   * ```
   */
  getSheetId() {
    return this._worksheet.getSheetId();
  }
  /**
   * Gets the area where the statement is applied
   * @returns {IRange} The area where the statement is applied
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * const range = fRange.getRange();
   * const { startRow, startColumn, endRow, endColumn } = range;
   * console.log(range);
   * ```
   */
  getRange() {
    return this._range;
  }
  /**
   * Gets the starting row index of the range. index starts at 0.
   * @returns {number} The starting row index of the range.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getRow()); // 0
   * ```
   */
  getRow() {
    return this._range.startRow;
  }
  /**
   * Gets the ending row index of the range. index starts at 0.
   * @returns {number} The ending row index of the range.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getLastRow()); // 1
   * ```
   */
  getLastRow() {
    return this._range.endRow;
  }
  /**
   * Gets the starting column index of the range. index starts at 0.
   * @returns {number} The starting column index of the range.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getColumn()); // 0
   * ```
   */
  getColumn() {
    return this._range.startColumn;
  }
  /**
   * Gets the ending column index of the range. index starts at 0.
   * @returns {number} The ending column index of the range.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getLastColumn()); // 1
   * ```
   */
  getLastColumn() {
    return this._range.endColumn;
  }
  /**
   * Gets the width of the applied area
   * @returns {number} The width of the area
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getWidth());
   * ```
   */
  getWidth() {
    return this._range.endColumn - this._range.startColumn + 1;
  }
  /**
   * Gets the height of the applied area
   * @returns {number} The height of the area
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getHeight());
   * ```
   */
  getHeight() {
    return this._range.endRow - this._range.startRow + 1;
  }
  /**
   * Return range whether this range is merged
   * @returns {boolean} if true is merged
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.isMerged());
   * // merge cells A1:B2
   * fRange.merge();
   * console.log(fRange.isMerged());
   * ```
   */
  isMerged() {
    const { startColumn, startRow, endColumn, endRow } = this._range;
    const mergedCells = this._worksheet.getMergedCellRange(startRow, startColumn, endRow, endColumn);
    return mergedCells.some((range) => Rectangle.equals(range, this._range));
  }
  /**
   * Return first cell style data in this range
   * @returns {IStyleData | null} The cell style data
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getCellStyleData());
   * ```
   */
  getCellStyleData() {
    var _a;
    const cell = this.getCellData();
    const styles = this._workbook.getStyles();
    if (cell && styles) {
      return (_a = styles.getStyleByCell(cell)) != null ? _a : null;
    }
    return null;
  }
  /**
   * Return first cell style in this range
   * @returns {TextStyleValue | null} The cell style
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getCellStyle());
   * ```
   */
  getCellStyle() {
    const data = this.getCellStyleData();
    return data ? TextStyleValue.create(data) : null;
  }
  /**
   * Returns the cell styles for the cells in the range.
   * @returns {Array<Array<TextStyleValue | null>>} A two-dimensional array of cell styles.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getCellStyles());
   * ```
   */
  getCellStyles() {
    const cells = this.getCellDatas();
    const styles = this._workbook.getStyles();
    return cells.map((row) => row.map((cell) => {
      if (!cell) return null;
      const style = styles.getStyleByCell(cell);
      return style ? TextStyleValue.create(style) : null;
    }));
  }
  getValue(includeRichText) {
    var _a, _b;
    if (includeRichText) {
      return this.getValueAndRichTextValue();
    }
    return (_b = (_a = this._worksheet.getCell(this._range.startRow, this._range.startColumn)) == null ? void 0 : _a.v) != null ? _b : null;
  }
  /**
   * Returns the raw value of the top-left cell in the range. Empty cells return `null`.
   * @returns {Nullable<CellValue>} The raw value of the cell. Returns `null` if the cell is empty.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setValueForCell({
   *   v: 0.2,
   *   s: {
   *     n: {
   *       pattern: '0%',
   *     },
   *   },
   * });
   * console.log(fRange.getRawValue()); // 0.2
   * ```
   */
  getRawValue() {
    var _a;
    const cell = this._worksheet.getCellMatrix().getValue(this._range.startRow, this._range.startColumn);
    if ((cell == null ? void 0 : cell.p) && ((_a = cell.p.body) == null ? void 0 : _a.dataStream)) return cell.p.body.dataStream;
    if (cell == null ? void 0 : cell.v) return cell.v;
    return null;
  }
  /**
   * Returns the displayed value of the top-left cell in the range. The value is a String. Empty cells return an empty string.
   * @returns {string} The displayed value of the cell. Returns an empty string if the cell is empty.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setValueForCell({
   *   v: 0.2,
   *   s: {
   *     n: {
   *       pattern: '0%',
   *     },
   *   },
   * });
   * console.log(fRange.getDisplayValue()); // 20%
   * ```
   */
  getDisplayValue() {
    var _a;
    const cell = this._worksheet.getCell(this._range.startRow, this._range.startColumn);
    if ((cell == null ? void 0 : cell.p) && ((_a = cell.p.body) == null ? void 0 : _a.dataStream)) return cell.p.body.dataStream;
    if (cell == null ? void 0 : cell.v) return String(cell.v);
    return "";
  }
  getValues(includeRichText) {
    var _a, _b;
    if (includeRichText) {
      return this.getValueAndRichTextValues();
    }
    const { startRow, endRow, startColumn, endColumn } = this._range;
    const range = [];
    for (let r = startRow; r <= endRow; r++) {
      const row = [];
      for (let c = startColumn; c <= endColumn; c++) {
        row.push((_b = (_a = this._worksheet.getCell(r, c)) == null ? void 0 : _a.v) != null ? _b : null);
      }
      range.push(row);
    }
    return range;
  }
  /**
   * Returns a two-dimensional array of the range raw values. Empty cells return `null`.
   * @returns {Array<Array<Nullable<CellValue>>>} The raw value of the cell. Returns `null` if the cell is empty.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setValues([
   *   [
   *     {
   *       v: 0.2,
   *       s: {
   *         n: {
   *           pattern: '0%',
   *         },
   *       },
   *     },
   *     {
   *       v: 45658,
   *       s: {
   *         n: {
   *           pattern: 'yyyy-mm-dd',
   *         },
   *       },
   *     }
   *   ],
   *   [
   *     {
   *       v: 1234.567,
   *       s: {
   *         n: {
   *           pattern: '#,##0.00',
   *         }
   *       }
   *     },
   *     null,
   *   ],
   * ]);
   * console.log(fRange.getRawValues()); // [[0.2, 45658], [1234.567, null]]
   * ```
   */
  getRawValues() {
    var _a;
    const cellMatrix = this._worksheet.getCellMatrix();
    const { startRow, endRow, startColumn, endColumn } = this._range;
    const values = [];
    for (let r = startRow; r <= endRow; r++) {
      const row = [];
      for (let c = startColumn; c <= endColumn; c++) {
        const cell = cellMatrix.getValue(r, c);
        if ((cell == null ? void 0 : cell.p) && ((_a = cell.p.body) == null ? void 0 : _a.dataStream)) {
          row.push(cell.p.body.dataStream);
        } else if (cell == null ? void 0 : cell.v) {
          row.push(cell.v);
        } else {
          row.push(null);
        }
      }
      values.push(row);
    }
    return values;
  }
  /**
   * Returns a two-dimensional array of the range displayed values. Empty cells return an empty string.
   * @returns {string[][]} A two-dimensional array of values.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setValues([
   *   [
   *     {
   *       v: 0.2,
   *       s: {
   *         n: {
   *           pattern: '0%',
   *         },
   *       },
   *     },
   *     {
   *       v: 45658,
   *       s: {
   *         n: {
   *           pattern: 'yyyy-mm-dd',
   *         },
   *       },
   *     }
   *   ],
   *   [
   *     {
   *       v: 1234.567,
   *       s: {
   *         n: {
   *           pattern: '#,##0.00',
   *         }
   *       }
   *     },
   *     null,
   *   ],
   * ]);
   * console.log(fRange.getDisplayValues()); // [['20%', '2025-01-01'], ['1,234.57', '']]
   * ```
   */
  getDisplayValues() {
    var _a;
    const { startRow, endRow, startColumn, endColumn } = this._range;
    const values = [];
    for (let r = startRow; r <= endRow; r++) {
      const row = [];
      for (let c = startColumn; c <= endColumn; c++) {
        const cell = this._worksheet.getCell(r, c);
        if ((cell == null ? void 0 : cell.p) && ((_a = cell.p.body) == null ? void 0 : _a.dataStream)) {
          row.push(cell.p.body.dataStream);
        } else if (cell == null ? void 0 : cell.v) {
          row.push(String(cell.v));
        } else {
          row.push("");
        }
      }
      values.push(row);
    }
    return values;
  }
  /**
   * Return first cell model data in this range
   * @returns {ICellData | null} The cell model data
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getCellData());
   * ```
   */
  getCellData() {
    var _a;
    return (_a = this._worksheet.getCell(this._range.startRow, this._range.startColumn)) != null ? _a : null;
  }
  /**
   * Alias for getCellDataGrid.
   * @returns {Nullable<ICellData>[][]} A two-dimensional array of cell data.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getCellDatas());
   * ```
   */
  getCellDatas() {
    return this.getCellDataGrid();
  }
  /**
   * Returns the cell data for the cells in the range.
   * @returns {Nullable<ICellData>[][]} A two-dimensional array of cell data.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getCellDataGrid());
   * ```
   */
  getCellDataGrid() {
    const { startRow, endRow, startColumn, endColumn } = this._range;
    const range = [];
    for (let r = startRow; r <= endRow; r++) {
      const row = [];
      for (let c = startColumn; c <= endColumn; c++) {
        row.push(this._worksheet.getCellRaw(r, c));
      }
      range.push(row);
    }
    return range;
  }
  /**
   * Returns the rich text value for the cell at the start of this range.
   * @returns {Nullable<RichTextValue>} The rich text value
   * @internal
   * @beta
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getRichTextValue());
   * ```
   */
  getRichTextValue() {
    const data = this.getCellData();
    if (data == null ? void 0 : data.p) {
      return new RichTextValue(data.p);
    }
    return null;
  }
  /**
   * Returns the rich text value for the cells in the range.
   * @returns {Nullable<RichTextValue>[][]} A two-dimensional array of RichTextValue objects.
   * @internal
   * @beta
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getRichTextValues());
   * ```
   */
  getRichTextValues() {
    const dataGrid = this.getCellDataGrid();
    return dataGrid.map((row) => row.map((data) => (data == null ? void 0 : data.p) ? new RichTextValue(data.p) : null));
  }
  /**
   * Returns the value and rich text value for the cell at the start of this range.
   * @returns {Nullable<CellValue | RichTextValue>} The value and rich text value
   * @internal
   * @beta
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getValueAndRichTextValue());
   * ```
   */
  getValueAndRichTextValue() {
    const cell = this.getCellData();
    return (cell == null ? void 0 : cell.p) ? new RichTextValue(cell.p) : cell == null ? void 0 : cell.v;
  }
  /**
   * Returns the value and rich text value for the cells in the range.
   * @returns {Nullable<CellValue | RichTextValue>[][]} A two-dimensional array of value and rich text value
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getValueAndRichTextValues());
   * ```
   */
  getValueAndRichTextValues() {
    const dataGrid = this.getCellDatas();
    return dataGrid.map((row) => row.map((data) => (data == null ? void 0 : data.p) ? new RichTextValue(data.p) : data == null ? void 0 : data.v));
  }
  /**
   * Returns the formula (A1 notation) of the top-left cell in the range, or an empty string if the cell is empty or doesn't contain a formula.
   * @returns {string} The formula for the cell.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getFormula());
   * ```
   */
  getFormula() {
    var _a;
    return (_a = this._formulaDataModel.getFormulaStringByCell(
      this._range.startRow,
      this._range.startColumn,
      this._worksheet.getSheetId(),
      this._workbook.getUnitId()
    )) != null ? _a : "";
  }
  /**
   * Returns the formulas (A1 notation) for the cells in the range. Entries in the 2D array are empty strings for cells with no formula.
   * @returns {string[][]} A two-dimensional array of formulas in string format.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getFormulas());
   * ```
   */
  getFormulas() {
    const formulas = [];
    const { startRow, endRow, startColumn, endColumn } = this._range;
    const sheetId = this._worksheet.getSheetId();
    const unitId = this._workbook.getUnitId();
    for (let row = startRow; row <= endRow; row++) {
      const rowFormulas = [];
      for (let col = startColumn; col <= endColumn; col++) {
        const formulaString = this._formulaDataModel.getFormulaStringByCell(row, col, sheetId, unitId);
        rowFormulas.push(formulaString || "");
      }
      formulas.push(rowFormulas);
    }
    return formulas;
  }
  /**
   * Gets whether text wrapping is enabled for top-left cell in the range.
   * @returns {boolean} whether text wrapping is enabled for the cell.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getWrap());
   * ```
   */
  getWrap() {
    return this._worksheet.getRange(this._range).getWrap() === 1 /* TRUE */;
  }
  /**
   * Gets whether text wrapping is enabled for cells in the range.
   * @returns {boolean[][]} A two-dimensional array of whether text wrapping is enabled for each cell in the range.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getWraps());
   */
  getWraps() {
    const cells = this.getCellDatas();
    const styles = this._workbook.getStyles();
    return cells.map((row) => row.map((cell) => {
      var _a;
      return ((_a = styles.getStyleByCell(cell)) == null ? void 0 : _a.tb) === 3 /* WRAP */;
    }));
  }
  /**
   * Returns the text wrapping strategy for the top left cell of the range.
   * @returns {WrapStrategy} The text wrapping strategy
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getWrapStrategy());
   * ```
   */
  getWrapStrategy() {
    return this._worksheet.getRange(this._range).getWrapStrategy();
  }
  /**
   * Returns the horizontal alignment of the text (left/center/right) of the top-left cell in the range.
   * @returns {string} The horizontal alignment of the text in the cell.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getHorizontalAlignment());
   * ```
   */
  getHorizontalAlignment() {
    const coreHorizontalAlignment = this._worksheet.getRange(this._range).getHorizontalAlignment();
    return transformCoreHorizontalAlignment(coreHorizontalAlignment);
  }
  /**
   * Returns the horizontal alignments of the cells in the range.
   * @returns {string[][]} A two-dimensional array of horizontal alignments of text associated with cells in the range.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getHorizontalAlignments());
   * ```
   */
  getHorizontalAlignments() {
    const coreHorizontalAlignments = this._worksheet.getRange(this._range).getHorizontalAlignments();
    return coreHorizontalAlignments.map((row) => row.map((alignment) => transformCoreHorizontalAlignment(alignment)));
  }
  /**
   * Returns the vertical alignment (top/middle/bottom) of the top-left cell in the range.
   * @returns {string} The vertical alignment of the text in the cell.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getVerticalAlignment());
   * ```
   */
  getVerticalAlignment() {
    return transformCoreVerticalAlignment(this._worksheet.getRange(this._range).getVerticalAlignment());
  }
  /**
   * Returns the vertical alignments of the cells in the range.
   * @returns {string[][]} A two-dimensional array of vertical alignments of text associated with cells in the range.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getVerticalAlignments());
   * ```
   */
  getVerticalAlignments() {
    const coreVerticalAlignments = this._worksheet.getRange(this._range).getVerticalAlignments();
    return coreVerticalAlignments.map((row) => row.map((alignment) => transformCoreVerticalAlignment(alignment)));
  }
  /**
   * Set custom meta data for first cell in current range.
   * @param {CustomData} data The custom meta data
   * @returns {FRange} This range, for chaining
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setCustomMetaData({ key: 'value' });
   * console.log(fRange.getCustomMetaData());
   * ```
   */
  setCustomMetaData(data) {
    return this.setValue({
      custom: data
    });
  }
  /**
   * Set custom meta data for current range.
   * @param {CustomData[][]} datas The custom meta data
   * @returns {FRange} This range, for chaining
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setCustomMetaDatas([
   *   [{ key: 'value' }, { key: 'value2' }],
   *   [{ key: 'value3' }, { key: 'value4' }],
   * ]);
   * console.log(fRange.getCustomMetaDatas());
   * ```
   */
  setCustomMetaDatas(datas) {
    return this.setValues(datas.map((row) => row.map((data) => ({ custom: data }))));
  }
  /**
   * Returns the custom meta data for the cell at the start of this range.
   * @returns {CustomData | null} The custom meta data
   * @example
   * ```
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getCustomMetaData());
   * ```
   */
  getCustomMetaData() {
    var _a;
    const cell = this.getCellData();
    return (_a = cell == null ? void 0 : cell.custom) != null ? _a : null;
  }
  /**
   * Returns the custom meta data for the cells in the range.
   * @returns {CustomData[][]} A two-dimensional array of custom meta data
   * @example
   * ```
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getCustomMetaDatas());
   * ```
   */
  getCustomMetaDatas() {
    const dataGrid = this.getCellDataGrid();
    return dataGrid.map((row) => row.map((data) => {
      var _a;
      return (_a = data == null ? void 0 : data.custom) != null ? _a : null;
    }));
  }
  /**
   * Sets basic border properties for the current range.
   * @param {BorderType} type The type of border to apply
   * @param {BorderStyleTypes} style The border style
   * @param {string} [color] Optional border color in CSS notation
   * @returns {FRange} This range, for chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setBorder(univerAPI.Enum.BorderType.ALL, univerAPI.Enum.BorderStyleTypes.THIN, '#ff0000');
   * ```
   */
  setBorder(type, style, color) {
    this._commandService.syncExecuteCommand(SetBorderBasicCommand.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      ranges: [this._range],
      value: {
        type,
        style,
        color
      }
    });
    return this;
  }
  // #region editing
  /**
   * Returns the background color of the top-left cell in the range.
   * @returns {string} The color code of the background.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getBackground());
   * ```
   */
  getBackground() {
    var _a, _b;
    const style = this.getCellStyle();
    return (_b = (_a = style == null ? void 0 : style.background) == null ? void 0 : _a.rgb) != null ? _b : DEFAULT_STYLES.bg.rgb;
  }
  /**
   * Returns the background colors of the cells in the range.
   * @returns {string[][]} A two-dimensional array of color codes of the backgrounds.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getBackgrounds());
   * ```
   */
  getBackgrounds() {
    const styles = this.getCellStyles();
    return styles.map((row) => row.map((style) => {
      var _a, _b;
      return (_b = (_a = style == null ? void 0 : style.background) == null ? void 0 : _a.rgb) != null ? _b : DEFAULT_STYLES.bg.rgb;
    }));
  }
  /**
   * Set background color for current range.
   * @param {string} color The background color
   * @returns {FRange} This range, for chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setBackgroundColor('red');
   * ```
   */
  setBackgroundColor(color) {
    this._commandService.syncExecuteCommand(SetStyleCommand.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      style: {
        type: "bg",
        value: {
          rgb: color
        }
      }
    });
    return this;
  }
  /**
   * Set background color for current range.
   * @param {string} color The background color
   * @returns {FRange} This range, for chaining
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setBackground('red');
   * ```
   */
  setBackground(color) {
    this.setBackgroundColor(color);
    return this;
  }
  /**
   * Set rotation for text in current range.
   * @param {number} rotation - The rotation angle in degrees
   * @returns This range, for chaining
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setTextRotation(45);
   * ```
   */
  setTextRotation(rotation) {
    this._commandService.syncExecuteCommand(SetTextRotationCommand.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      value: rotation
    });
    return this;
  }
  /**
   * Sets the value of the range.
   * @param {CellValue | ICellData} value The value can be a number, string, boolean, or standard cell format. If it begins with `=`, it is interpreted as a formula. The value is tiled to all cells in the range.
   * @returns {FRange} This range, for chaining
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('B2');
   * fRange.setValue(123);
   *
   * // or
   * fRange.setValue({ v: 234, s: { bg: { rgb: '#ff0000' } } });
   * ```
   */
  setValue(value) {
    const realValue = covertCellValue(value);
    if (!realValue) {
      throw new Error("Invalid value");
    }
    this._commandService.syncExecuteCommand(SetRangeValuesCommand.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      value: realValue
    });
    return this;
  }
  /**
   * Set new value for current cell, first cell in this range.
   * @param {CellValue | ICellData} value  The value can be a number, string, boolean, or standard cell format. If it begins with `=`, it is interpreted as a formula. The value is tiled to all cells in the range.
   * @returns {FRange} This range, for chaining
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setValueForCell(123);
   *
   * // or
   * fRange.setValueForCell({ v: 234, s: { bg: { rgb: '#ff0000' } } });
   * ```
   */
  setValueForCell(value) {
    const realValue = covertCellValue(value);
    if (!realValue) {
      throw new Error("Invalid value");
    }
    this._commandService.syncExecuteCommand(SetRangeValuesCommand.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: {
        startColumn: this._range.startColumn,
        startRow: this._range.startRow,
        endColumn: this._range.startColumn,
        endRow: this._range.startRow
      },
      value: realValue
    });
    return this;
  }
  /**
   * Set the rich text value for the cell at the start of this range.
   * @param {RichTextValue | IDocumentData} value The rich text value
   * @returns {FRange} The range
   * @example
   * ```
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getValue(true));
   *
   * // Set A1 cell value to rich text
   * const richText = univerAPI.newRichText()
   *   .insertText('Hello World')
   *   .setStyle(0, 1, { bl: 1, cl: { rgb: '#c81e1e' } })
   *   .setStyle(6, 7, { bl: 1, cl: { rgb: '#c81e1e' } });
   * fRange.setRichTextValueForCell(richText);
   * console.log(fRange.getValue(true).toPlainText()); // Hello World
   * ```
   */
  setRichTextValueForCell(value) {
    const p = value instanceof RichTextValue ? value.getData() : value;
    const params = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: {
        startColumn: this._range.startColumn,
        startRow: this._range.startRow,
        endColumn: this._range.startColumn,
        endRow: this._range.startRow
      },
      value: { p }
    };
    this._commandService.syncExecuteCommand(SetRangeValuesCommand.id, params);
    return this;
  }
  /**
   * Set the rich text value for the cells in the range.
   * @param {RichTextValue[][]} values The rich text value
   * @returns {FRange} The range
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getValue(true));
   *
   * // Set A1:B2 cell value to rich text
   * const richText = univerAPI.newRichText()
   *   .insertText('Hello World')
   *   .setStyle(0, 1, { bl: 1, cl: { rgb: '#c81e1e' } })
   *   .setStyle(6, 7, { bl: 1, cl: { rgb: '#c81e1e' } });
   * fRange.setRichTextValues([
   *   [richText, richText],
   *   [null, null]
   * ]);
   * console.log(fRange.getValue(true).toPlainText()); // Hello World
   * ```
   */
  setRichTextValues(values) {
    const cellDatas = values.map((row) => row.map((item) => item && { p: item instanceof RichTextValue ? item.getData() : item }));
    const realValue = covertCellValues(cellDatas, this._range);
    const params = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      value: realValue
    };
    this._commandService.syncExecuteCommand(SetRangeValuesCommand.id, params);
    return this;
  }
  /**
   * Set the cell wrap of the given range.
   * Cells with wrap enabled (the default) resize to display their full content. Cells with wrap disabled display as much as possible in the cell without resizing or running to multiple lines.
   * @param {boolean} isWrapEnabled Whether to enable wrap
   * @returns {FRange} this range, for chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setWrap(true);
   * console.log(fRange.getWrap());
   * ```
   */
  setWrap(isWrapEnabled) {
    this._commandService.syncExecuteCommand(SetTextWrapCommand.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      value: isWrapEnabled ? 3 /* WRAP */ : 0 /* UNSPECIFIED */
    });
    return this;
  }
  /**
   * Sets the text wrapping strategy for the cells in the range.
   * @param {WrapStrategy} strategy The text wrapping strategy
   * @returns {FRange} this range, for chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setWrapStrategy(univerAPI.Enum.WrapStrategy.WRAP);
   * console.log(fRange.getWrapStrategy());
   * ```
   */
  setWrapStrategy(strategy) {
    this._commandService.syncExecuteCommand(SetTextWrapCommand.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      value: strategy
    });
    return this;
  }
  /**
   * Set the vertical (top to bottom) alignment for the given range (top/middle/bottom).
   * @param {"top" | "middle" | "bottom"} alignment The vertical alignment
   * @returns {FRange} this range, for chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setVerticalAlignment('top');
   * ```
   */
  setVerticalAlignment(alignment) {
    this._commandService.syncExecuteCommand(SetVerticalTextAlignCommand.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      value: transformFacadeVerticalAlignment(alignment)
    });
    return this;
  }
  /**
   * Set the horizontal (left to right) alignment for the given range (left/center/right).
   * @param {"left" | "center" | "normal"} alignment The horizontal alignment
   * @returns {FRange} this range, for chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setHorizontalAlignment('left');
   * ```
   */
  setHorizontalAlignment(alignment) {
    this._commandService.syncExecuteCommand(SetHorizontalTextAlignCommand.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      value: transformFacadeHorizontalAlignment(alignment)
    });
    return this;
  }
  /**
   * Sets a different value for each cell in the range. The value can be a two-dimensional array or a standard range matrix (must match the dimensions of this range), consisting of numbers, strings, Boolean values or Composed of standard cell formats. If a value begins with `=`, it is interpreted as a formula.
   * @param {CellValue[][] | IObjectMatrixPrimitiveType<CellValue> | ICellData[][] | IObjectMatrixPrimitiveType<ICellData>} value The value can be a two-dimensional array or a standard range matrix (must match the dimensions of this range), consisting of numbers, strings, Boolean values or Composed of standard cell formats.
   * @returns {FRange} This range, for chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setValues([
   *   [1, { v: 2, s: { bg: { rgb: '#ff0000' } } }],
   *   [3, 4]
   * ]);
   * ```
   */
  setValues(value) {
    const realValue = covertCellValues(value, this._range);
    this._commandService.syncExecuteCommand(SetRangeValuesCommand.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      value: realValue
    });
    return this;
  }
  /**
   * Sets the font weight for the given range (normal/bold),
   * @param {FontWeight|null} fontWeight The font weight, either 'normal' or 'bold'; a null value resets the font weight.
   * @returns {FRange} This range, for chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setFontWeight('bold');
   * ```
   */
  setFontWeight(fontWeight) {
    let value;
    if (fontWeight === "bold") {
      value = 1 /* TRUE */;
    } else if (fontWeight === "normal") {
      value = 0 /* FALSE */;
    } else if (fontWeight === null) {
      value = null;
    } else {
      throw new Error("Invalid fontWeight");
    }
    const style = {
      type: "bl",
      value
    };
    const setStyleParams = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      style
    };
    this._commandService.syncExecuteCommand(SetStyleCommand.id, setStyleParams);
    return this;
  }
  /**
   * Sets the font style for the given range ('italic' or 'normal').
   * @param {FontStyle|null} fontStyle The font style, either 'italic' or 'normal'; a null value resets the font style.
   * @returns {FRange} This range, for chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setFontStyle('italic');
   * ```
   */
  setFontStyle(fontStyle) {
    let value;
    if (fontStyle === "italic") {
      value = 1 /* TRUE */;
    } else if (fontStyle === "normal") {
      value = 0 /* FALSE */;
    } else if (fontStyle === null) {
      value = null;
    } else {
      throw new Error("Invalid fontStyle");
    }
    const style = {
      type: "it",
      value
    };
    const setStyleParams = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      style
    };
    this._commandService.syncExecuteCommand(SetStyleCommand.id, setStyleParams);
    return this;
  }
  /**
   * Sets the font line style of the given range ('underline', 'line-through', or 'none').
   * @param {FontLine|null} fontLine The font line style, either 'underline', 'line-through', or 'none'; a null value resets the font line style.
   * @returns {FRange} This range, for chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setFontLine('underline');
   * ```
   */
  setFontLine(fontLine) {
    if (fontLine === "underline") {
      this._setFontUnderline({
        s: 1 /* TRUE */
      });
    } else if (fontLine === "line-through") {
      this._setFontStrikethrough({
        s: 1 /* TRUE */
      });
    } else if (fontLine === "none") {
      this._setFontUnderline({
        s: 0 /* FALSE */
      });
      this._setFontStrikethrough({
        s: 0 /* FALSE */
      });
    } else if (fontLine === null) {
      this._setFontUnderline(null);
      this._setFontStrikethrough(null);
    } else {
      throw new Error("Invalid fontLine");
    }
    return this;
  }
  /**
   * Sets the font underline style of the given ITextDecoration
   * @param {ITextDecoration|null} value The font underline style of the given ITextDecoration; a null value resets the font underline style
   * @returns {void}
   */
  _setFontUnderline(value) {
    const style = {
      type: "ul",
      value
    };
    const setStyleParams = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      style
    };
    this._commandService.syncExecuteCommand(SetStyleCommand.id, setStyleParams);
  }
  /**
   * Sets the font strikethrough style of the given ITextDecoration
   * @param {ITextDecoration|null} value The font strikethrough style of the given ITextDecoration; a null value resets the font strikethrough style
   * @returns {void}
   */
  _setFontStrikethrough(value) {
    const style = {
      type: "st",
      value
    };
    const setStyleParams = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      style
    };
    this._commandService.syncExecuteCommand(SetStyleCommand.id, setStyleParams);
  }
  /**
   * Sets the font family, such as "Arial" or "Helvetica".
   * @param {string|null} fontFamily The font family to set; a null value resets the font family.
   * @returns {FRange} This range, for chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setFontFamily('Arial');
   * ```
   */
  setFontFamily(fontFamily) {
    const style = {
      type: "ff",
      value: fontFamily
    };
    const setStyleParams = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      style
    };
    this._commandService.syncExecuteCommand(SetStyleCommand.id, setStyleParams);
    return this;
  }
  /**
   * Sets the font size, with the size being the point size to use.
   * @param {number|null} size A font size in point size. A null value resets the font size.
   * @returns {FRange} This range, for chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setFontSize(24);
   * ```
   */
  setFontSize(size) {
    const style = {
      type: "fs",
      value: size
    };
    const setStyleParams = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      style
    };
    this._commandService.syncExecuteCommand(SetStyleCommand.id, setStyleParams);
    return this;
  }
  /**
   * Sets the font color in CSS notation (such as '#ffffff' or 'white').
   * @param {string|null} color The font color in CSS notation (such as '#ffffff' or 'white'); a null value resets the color.
   * @returns {FRange} This range, for chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setFontColor('#ff0000');
   * ```
   */
  setFontColor(color) {
    const value = color === null ? null : { rgb: color };
    const style = {
      type: "cl",
      value
    };
    const setStyleParams = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      style
    };
    this._commandService.syncExecuteCommand(SetStyleCommand.id, setStyleParams);
    return this;
  }
  // #endregion editing
  //#region Merge cell
  /**
   * Merge cells in a range into one merged cell
   * @param {boolean} [defaultMerge] - If true, only the value in the upper left cell is retained.
   * @returns {FRange} This range, for chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.merge();
   * console.log(fRange.isMerged());
   * ```
   */
  merge(defaultMerge = true) {
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    addMergeCellsUtil(this._injector, unitId, subUnitId, [this._range], defaultMerge);
    return this;
  }
  /**
   * Merges cells in a range horizontally.
   * @param {boolean} [defaultMerge] - If true, only the value in the upper left cell is retained.
   * @returns {FRange} This range, for chaining
   * @example
   * ```ts
   * // Assume the active sheet is a new sheet with no merged cells.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.mergeAcross();
   * // There will be two merged cells. A1:B1 and A2:B2.
   * const mergeData = fWorksheet.getMergeData();
   * mergeData.forEach((item) => {
   *   console.log(item.getA1Notation());
   * });
   * ```
   */
  mergeAcross(defaultMerge = true) {
    const ranges = getAddMergeMutationRangeByType([this._range], 1 /* ROWS */);
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    addMergeCellsUtil(this._injector, unitId, subUnitId, ranges, defaultMerge);
    return this;
  }
  /**
   * Merges cells in a range vertically.
   * @param {boolean} [defaultMerge] - If true, only the value in the upper left cell is retained.
   * @returns {FRange} This range, for chaining
   * @example
   * ```ts
   * // Assume the active sheet is a new sheet with no merged cells.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.mergeVertically();
   * // There will be two merged cells. A1:A2 and B1:B2.
   * const mergeData = fWorksheet.getMergeData();
   * mergeData.forEach((item) => {
   *   console.log(item.getA1Notation());
   * });
   * ```
   */
  mergeVertically(defaultMerge = true) {
    const ranges = getAddMergeMutationRangeByType([this._range], 0 /* COLUMNS */);
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    addMergeCellsUtil(this._injector, unitId, subUnitId, ranges, defaultMerge);
    return this;
  }
  /**
   * Returns true if cells in the current range overlap a merged cell.
   * @returns {boolean} is overlap with a merged cell
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.merge();
   * const anchor = fWorksheet.getRange('A1');
   * console.log(anchor.isPartOfMerge()); // true
   * ```
   */
  isPartOfMerge() {
    const { startRow, startColumn, endRow, endColumn } = this._range;
    return this._worksheet.getMergedCellRange(startRow, startColumn, endRow, endColumn).length > 0;
  }
  /**
   * Break all horizontally- or vertically-merged cells contained within the range list into individual cells again.
   * @returns {FRange} This range, for chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.merge();
   * const anchor = fWorksheet.getRange('A1');
   * console.log(anchor.isPartOfMerge()); // true
   * fRange.breakApart();
   * console.log(anchor.isPartOfMerge()); // false
   * ```
   */
  breakApart() {
    this._commandService.syncExecuteCommand(RemoveWorksheetMergeCommand.id, { ranges: [this._range] });
    return this;
  }
  //#endregion
  /**
   * Iterate cells in this range. Merged cells will be respected.
   * @param {Function} callback the callback function to be called for each cell in the range
   * @param {number} callback.row the row number of the cell
   * @param {number} callback.col the column number of the cell
   * @param {ICellData} callback.cell the cell data
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.forEach((row, col, cell) => {
   *   console.log(row, col, cell);
   * });
   * ```
   */
  forEach(callback) {
    const { startColumn, startRow, endColumn, endRow } = this._range;
    this._worksheet.getMatrixWithMergedCells(startRow, startColumn, endRow, endColumn).forValue((row, col, value) => {
      callback(row, col, value);
    });
  }
  /**
   * Returns a string description of the range, in A1 notation.
   * @param {boolean} [withSheet] - If true, the sheet name is included in the A1 notation.
   * @param {AbsoluteRefType} [startAbsoluteRefType] - The absolute reference type for the start cell.
   * @param {AbsoluteRefType} [endAbsoluteRefType] - The absolute reference type for the end cell.
   * @returns {string} The A1 notation of the range.
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // By default, the A1 notation is returned without the sheet name and without absolute reference types.
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getA1Notation()); // A1:B2
   *
   * // By setting withSheet to true, the sheet name is included in the A1 notation.
   * fWorksheet.setName('Sheet1');
   * console.log(fRange.getA1Notation(true)); // Sheet1!A1:B2
   *
   * // By setting startAbsoluteRefType, the absolute reference type for the start cell is included in the A1 notation.
   * console.log(fRange.getA1Notation(false, univerAPI.Enum.AbsoluteRefType.ROW)); // A$1:B2
   * console.log(fRange.getA1Notation(false, univerAPI.Enum.AbsoluteRefType.COLUMN)); // $A1:B2
   * console.log(fRange.getA1Notation(false, univerAPI.Enum.AbsoluteRefType.ALL)); // $A$1:B2
   *
   * // By setting endAbsoluteRefType, the absolute reference type for the end cell is included in the A1 notation.
   * console.log(fRange.getA1Notation(false, null, univerAPI.Enum.AbsoluteRefType.ROW)); // A1:B$2
   * console.log(fRange.getA1Notation(false, null, univerAPI.Enum.AbsoluteRefType.COLUMN)); // A1:$B2
   * console.log(fRange.getA1Notation(false, null, univerAPI.Enum.AbsoluteRefType.ALL)); // A1:$B$2
   *
   * // By setting all parameters example
   * console.log(fRange.getA1Notation(true, univerAPI.Enum.AbsoluteRefType.ALL, univerAPI.Enum.AbsoluteRefType.ALL)); // Sheet1!$A$1:$B$2
   * ```
   */
  getA1Notation(withSheet, startAbsoluteRefType, endAbsoluteRefType) {
    const range = {
      ...this._range,
      startAbsoluteRefType,
      endAbsoluteRefType
    };
    return withSheet ? serializeRangeWithSheet(this._worksheet.getName(), range) : serializeRange(range);
  }
  /**
   * Sets the specified range as the active range, with the top left cell in the range as the current cell.
   * @returns {FRange}  This range, for chaining.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.activate(); // the active cell will be A1
   * ```
   */
  activate() {
    const fWorkbook = this._injector.createInstance(FWorkbook, this._workbook);
    fWorkbook.setActiveRange(this);
    return this;
  }
  /**
   * Sets the specified cell as the current cell.
   * If the specified cell is present in an existing range, then that range becomes the active range with the cell as the current cell.
   * If the specified cell is not part of an existing range, then a new range is created with the cell as the active range and the current cell.
   * @returns {FRange}  This range, for chaining.
   * @description If the range is not a single cell, an error will be thrown.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set the range A1:B2 as the active range, default active cell is A1
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.activate();
   * console.log(fWorksheet.getActiveRange().getA1Notation()); // A1:B2
   * console.log(fWorksheet.getActiveCell().getA1Notation()); // A1
   *
   * // Set the cell B2 as the active cell
   * // Because B2 is in the active range A1:B2, the active range will not change, and the active cell will be changed to B2
   * const cell = fWorksheet.getRange('B2');
   * cell.activateAsCurrentCell();
   * console.log(fWorksheet.getActiveRange().getA1Notation()); // A1:B2
   * console.log(fWorksheet.getActiveCell().getA1Notation()); // B2
   *
   * // Set the cell C3 as the active cell
   * // Because C3 is not in the active range A1:B2, a new active range C3:C3 will be created, and the active cell will be changed to C3
   * const cell2 = fWorksheet.getRange('C3');
   * cell2.activateAsCurrentCell();
   * console.log(fWorksheet.getActiveRange().getA1Notation()); // C3:C3
   * console.log(fWorksheet.getActiveCell().getA1Notation()); // C3
   * ```
   */
  activateAsCurrentCell() {
    const mergeInfo = this._worksheet.getMergedCell(this._range.startRow, this._range.startColumn);
    const valid = mergeInfo && Rectangle.equals(mergeInfo, this._range) || !mergeInfo && this._range.startRow === this._range.endRow && this._range.startColumn === this._range.endColumn;
    if (valid) {
      const fWorkbook = this._injector.createInstance(FWorkbook, this._workbook);
      const activeRange = fWorkbook.getActiveRange();
      if (!activeRange || activeRange.getUnitId() !== this.getUnitId() || activeRange.getSheetId() !== this.getSheetId()) {
        return this.activate();
      }
      if (Rectangle.contains(activeRange.getRange(), this._range)) {
        const setSelectionOperationParams = {
          unitId: this.getUnitId(),
          subUnitId: this.getSheetId(),
          selections: [
            {
              range: activeRange.getRange(),
              primary: getPrimaryForRange(this.getRange(), this._worksheet),
              style: null
            }
          ]
        };
        this._commandService.syncExecuteCommand(SetSelectionsOperation.id, setSelectionOperationParams);
        return this;
      }
      return this.activate();
    } else {
      throw new Error("The range is not a single cell");
    }
  }
  /**
   * Splits a column of text into multiple columns based on a custom specified delimiter.
   * @param {boolean} [treatMultipleDelimitersAsOne] Whether to treat multiple continuous delimiters as one. The default value is false.
   * @param {SplitDelimiterEnum} [delimiter] The delimiter to use to split the text. The default delimiter is Tab(1)、Comma(2)、Semicolon(4)、Space(8)、Custom(16).A delimiter like 6 (SplitDelimiterEnum.Comma|SplitDelimiterEnum.Semicolon) means using Comma and Semicolon to split the text.
   * @param {string} [customDelimiter] The custom delimiter to split the text. An error will be thrown if custom delimiter is set but the customDelimiter is not a character.
   * @example Show how to split text to columns with custom delimiter
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // A1:A3 has following values:
   * //     A   |
   * //  1#2#3  |
   * //  4##5#6 |
   * const fRange = fWorksheet.getRange('A1:A3');
   * fRange.setValues([
   *   ['A'],
   *   ['1#2#3'],
   *   ['4##5#6']
   * ]);
   *
   * // After calling splitTextToColumns(false, univerAPI.Enum.SplitDelimiterType.Custom, '#'), the range will be:
   * //  A |   |   |
   * //  1 | 2 | 3 |
   * //  4 |   | 5 | 6
   * fRange.splitTextToColumns(false, univerAPI.Enum.SplitDelimiterType.Custom, '#');
   *
   * // After calling splitTextToColumns(true, univerAPI.Enum.SplitDelimiterType.Custom, '#'), the range will be:
   * //  A |   |
   * //  1 | 2 | 3
   * //  4 | 5 | 6
   * fRange.splitTextToColumns(true, univerAPI.Enum.SplitDelimiterType.Custom, '#');
   * ```
   */
  splitTextToColumns(treatMultipleDelimitersAsOne, delimiter, customDelimiter) {
    this._commandService.syncExecuteCommand(SplitTextToColumnsCommand.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      delimiter,
      customDelimiter,
      treatMultipleDelimitersAsOne
    });
  }
  /**
   * Set the theme style for the range.
   * @param {string|undefined} themeName The name of the theme style to apply.If a undefined value is passed, the theme style will be removed if it exist.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:E20');
   * fRange.useThemeStyle('default');
   * ```
   */
  useThemeStyle(themeName) {
    if (themeName === null || themeName === void 0) {
      const usedThemeName = this.getUsedThemeStyle();
      if (usedThemeName) {
        this.removeThemeStyle(usedThemeName);
      }
    } else {
      this._commandService.syncExecuteCommand(SetWorksheetRangeThemeStyleCommand.id, {
        unitId: this._workbook.getUnitId(),
        subUnitId: this._worksheet.getSheetId(),
        range: this._range,
        themeName
      });
    }
  }
  /**
   * Remove the theme style for the range.
   * @param {string} themeName The name of the theme style to remove.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:E20');
   * fRange.removeThemeStyle('default');
   * ```
   */
  removeThemeStyle(themeName) {
    this._commandService.syncExecuteCommand(DeleteWorksheetRangeThemeStyleCommand.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      themeName
    });
  }
  /**
   * Gets the theme style applied to the range.
   * @returns {string | undefined} The name of the theme style applied to the range or not exist.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:E20');
   * console.log(fRange.getUsedThemeStyle()); // undefined
   * fRange.useThemeStyle('default');
   * console.log(fRange.getUsedThemeStyle()); // 'default'
   * ```
   */
  getUsedThemeStyle() {
    return this._injector.get(SheetRangeThemeService).getAppliedRangeThemeStyle({
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range
    });
  }
  /**
   * Clears content and formatting information of the range. Or Optionally clears only the contents or only the formatting.
   * @param {IFacadeClearOptions} [options] - Options for clearing the range. If not provided, the contents and formatting are cleared both.
   * @param {boolean} [options.contentsOnly] - If true, the contents of the range are cleared. If false, the contents and formatting are cleared. Default is false.
   * @param {boolean} [options.formatOnly] - If true, the formatting of the range is cleared. If false, the contents and formatting are cleared. Default is false.
   * @returns {FWorksheet} Returns the current worksheet instance for method chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * const fRange = fWorkSheet.getRange('A1:D10');
   *
   * // clear the content and format of the range A1:D10
   * fRange.clear();
   *
   * // clear the content only of the range A1:D10
   * fRange.clear({ contentsOnly: true });
   * ```
   */
  clear(options) {
    if (options && options.contentsOnly && !options.formatOnly) {
      return this.clearContent();
    }
    if (options && options.formatOnly && !options.contentsOnly) {
      return this.clearFormat();
    }
    this._commandService.syncExecuteCommand(ClearSelectionAllCommand.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      ranges: [this._range],
      options
    });
    return this;
  }
  /**
   * Clears content of the range, while preserving formatting information.
   * @returns {FWorksheet} Returns the current worksheet instance for method chaining
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * const fRange = fWorkSheet.getRange('A1:D10');
   *
   * // clear the content only of the range A1:D10
   * fRange.clearContent();
   * ```
   */
  clearContent() {
    this._commandService.syncExecuteCommand(ClearSelectionContentCommand.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      ranges: [this._range]
    });
    return this;
  }
  /**
   * Clears formatting information of the range, while preserving contents.
   * @returns {FWorksheet} Returns the current worksheet instance for method chaining
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * const fRange = fWorkSheet.getRange('A1:D10');
   * // clear the format only of the range A1:D10
   * fRange.clearFormat();
   * ```
   */
  clearFormat() {
    this._commandService.syncExecuteCommand(ClearSelectionFormatCommand.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      ranges: [this._range]
    });
    return this;
  }
  /**
   * Inserts empty cells into this range. Existing data in the sheet along the provided dimension is shifted away from the inserted range.
   * @param {Dimension} shiftDimension - The dimension along which to shift existing data.
   * @example
   * ```ts
   * // Assume the active sheet empty sheet.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const values = [
   *   [1, 2, 3, 4],
   *   [2, 3, 4, 5],
   *   [3, 4, 5, 6],
   *   [4, 5, 6, 7],
   *   [5, 6, 7, 8],
   * ];
   *
   * // Set the range A1:D5 with some values, the range A1:D5 will be:
   * // 1 | 2 | 3 | 4
   * // 2 | 3 | 4 | 5
   * // 3 | 4 | 5 | 6
   * // 4 | 5 | 6 | 7
   * // 5 | 6 | 7 | 8
   * const fRange = fWorksheet.getRange('A1:D5');
   * fRange.setValues(values);
   * console.log(fWorksheet.getRange('A1:D5').getValues()); // [[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6], [4, 5, 6, 7], [5, 6, 7, 8]]
   *
   * // Insert the empty cells into the range A1:B2 along the columns dimension, the range A1:D5 will be:
   * //   |   | 1 | 2
   * //   |   | 2 | 3
   * // 3 | 4 | 5 | 6
   * // 4 | 5 | 6 | 7
   * // 5 | 6 | 7 | 8
   * const fRange2 = fWorksheet.getRange('A1:B2');
   * fRange2.insertCells(univerAPI.Enum.Dimension.COLUMNS);
   * console.log(fWorksheet.getRange('A1:D5').getValues()); // [[null, null, 1, 2], [null, null, 2, 3], [3, 4, 5, 6], [4, 5, 6, 7], [5, 6, 7, 8]]
   *
   * // Set the range A1:D5 values again, the range A1:D5 will be:
   * // 1 | 2 | 3 | 4
   * // 2 | 3 | 4 | 5
   * // 3 | 4 | 5 | 6
   * // 4 | 5 | 6 | 7
   * // 5 | 6 | 7 | 8
   * fRange.setValues(values);
   *
   * // Insert the empty cells into the range A1:B2 along the rows dimension, the range A1:D5 will be:
   * //   |   | 3 | 4
   * //   |   | 4 | 5
   * // 1 | 2 | 5 | 6
   * // 2 | 3 | 6 | 7
   * // 3 | 4 | 7 | 8
   * const fRange3 = fWorksheet.getRange('A1:B2');
   * fRange3.insertCells(univerAPI.Enum.Dimension.ROWS);
   * console.log(fWorksheet.getRange('A1:D5').getValues()); // [[null, null, 3, 4], [null, null, 4, 5], [1, 2, 5, 6], [2, 3, 6, 7], [3, 4, 7, 8]]
   * ```
   */
  insertCells(shiftDimension) {
    if (shiftDimension === 1 /* ROWS */) {
      this._commandService.executeCommand(InsertRangeMoveDownCommand.id, {
        range: this._range
      });
    } else {
      this._commandService.executeCommand(InsertRangeMoveRightCommand.id, {
        range: this._range
      });
    }
  }
  /**
   * Deletes this range of cells. Existing data in the sheet along the provided dimension is shifted towards the deleted range.
   * @param {Dimension} shiftDimension - The dimension along which to shift existing data.
   * @example
   * ```ts
   * // Assume the active sheet empty sheet.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const values = [
   *   [1, 2, 3, 4],
   *   [2, 3, 4, 5],
   *   [3, 4, 5, 6],
   *   [4, 5, 6, 7],
   *   [5, 6, 7, 8],
   * ];
   *
   * // Set the range A1:D5 with some values, the range A1:D5 will be:
   * // 1 | 2 | 3 | 4
   * // 2 | 3 | 4 | 5
   * // 3 | 4 | 5 | 6
   * // 4 | 5 | 6 | 7
   * // 5 | 6 | 7 | 8
   * const fRange = fWorksheet.getRange('A1:D5');
   * fRange.setValues(values);
   * console.log(fWorksheet.getRange('A1:D5').getValues()); // [[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6], [4, 5, 6, 7], [5, 6, 7, 8]]
   *
   * // Delete the range A1:B2 along the columns dimension, the range A1:D5 will be:
   * // 3 | 4 |   |
   * // 4 | 5 |   |
   * // 3 | 4 | 5 | 6
   * // 4 | 5 | 6 | 7
   * // 5 | 6 | 7 | 8
   * const fRange2 = fWorksheet.getRange('A1:B2');
   * fRange2.deleteCells(univerAPI.Enum.Dimension.COLUMNS);
   * console.log(fWorksheet.getRange('A1:D5').getValues()); // [[3, 4, null, null], [4, 5, null, null], [3, 4, 5, 6], [4, 5, 6, 7], [5, 6, 7, 8]]
   *
   * // Set the range A1:D5 values again, the range A1:D5 will be:
   * // 1 | 2 | 3 | 4
   * // 2 | 3 | 4 | 5
   * // 3 | 4 | 5 | 6
   * // 4 | 5 | 6 | 7
   * // 5 | 6 | 7 | 8
   * fRange.setValues(values);
   *
   * // Delete the range A1:B2 along the rows dimension, the range A1:D5 will be:
   * // 3 | 4 | 3 | 4
   * // 4 | 5 | 4 | 5
   * // 5 | 6 | 5 | 6
   * //   |   | 6 | 7
   * //   |   | 7 | 8
   * const fRange3 = fWorksheet.getRange('A1:B2');
   * fRange3.deleteCells(univerAPI.Enum.Dimension.ROWS);
   * console.log(fWorksheet.getRange('A1:D5').getValues()); // [[3, 4, 3, 4], [4, 5, 4, 5], [5, 6, 5, 6], [null, null, 6, 7], [null, null, 7, 8]]
   * ```
   */
  deleteCells(shiftDimension) {
    if (shiftDimension === 1 /* ROWS */) {
      this._commandService.executeCommand(DeleteRangeMoveUpCommand.id, {
        range: this._range
      });
    } else {
      this._commandService.executeCommand(DeleteRangeMoveLeftCommand.id, {
        range: this._range
      });
    }
  }
  /**
   * Returns a copy of the range expanded `Direction.UP` and `Direction.DOWN` if the specified dimension is `Dimension.ROWS`, or `Direction.NEXT` and `Direction.PREVIOUS` if the dimension is `Dimension.COLUMNS`.
   * The expansion of the range is based on detecting data next to the range that is organized like a table.
   * The expanded range covers all adjacent cells with data in them along the specified dimension including the table boundaries.
   * If the original range is surrounded by empty cells along the specified dimension, the range itself is returned.
   * @param {Dimension} [dimension] - The dimension along which to expand the range. If not provided, the range will be expanded in both dimensions.
   * @returns {FRange} The range's data region or a range covering each column or each row spanned by the original range.
   * @example
   * ```ts
   * // Assume the active sheet is a new sheet with no data.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set the range A1:D4 with some values, the range A1:D4 will be:
   * //  |     |     |
   * //  |     | 100 |
   * //  | 100 |     | 100
   * //  |     | 100 |
   * fWorksheet.getRange('C2').setValue(100);
   * fWorksheet.getRange('B3').setValue(100);
   * fWorksheet.getRange('D3').setValue(100);
   * fWorksheet.getRange('C4').setValue(100);
   *
   * // Get C3 data region along the rows dimension, the range will be C2:D4
   * const range = fWorksheet.getRange('C3').getDataRegion(univerAPI.Enum.Dimension.ROWS);
   * console.log(range.getA1Notation()); // C2:C4
   *
   * // Get C3 data region along the columns dimension, the range will be B3:D3
   * const range2 = fWorksheet.getRange('C3').getDataRegion(univerAPI.Enum.Dimension.COLUMNS);
   * console.log(range2.getA1Notation()); // B3:D3
   *
   * // Get C3 data region along the both dimension, the range will be B2:D4
   * const range3 = fWorksheet.getRange('C3').getDataRegion();
   * console.log(range3.getA1Notation()); // B2:D4
   * ```
   */
  // eslint-disable-next-line complexity
  getDataRegion(dimension) {
    const { startRow, startColumn, endRow, endColumn } = this._range;
    const maxRows = this._worksheet.getMaxRows();
    const maxColumns = this._worksheet.getMaxColumns();
    const cellMatrix = this._worksheet.getCellMatrix();
    let newStartRow = startRow;
    let newStartColumn = startColumn;
    let newEndRow = endRow;
    let newEndColumn = endColumn;
    if (dimension !== 0 /* COLUMNS */) {
      let topRowHasValue = false;
      let bottomRowHasValue = false;
      for (let c = startColumn; c <= endColumn; c++) {
        if (startRow > 0 && !isNullCell(cellMatrix.getValue(startRow - 1, c))) {
          topRowHasValue = true;
        }
        if (endRow < maxRows - 1 && !isNullCell(cellMatrix.getValue(endRow + 1, c))) {
          bottomRowHasValue = true;
        }
        if (topRowHasValue && bottomRowHasValue) {
          break;
        }
      }
      if (topRowHasValue) {
        newStartRow = startRow - 1;
      }
      if (bottomRowHasValue) {
        newEndRow = endRow + 1;
      }
    }
    if (dimension !== 1 /* ROWS */) {
      let leftColumnHasValue = false;
      let rightColumnHasValue = false;
      for (let r = startRow; r <= endRow; r++) {
        if (startColumn > 0 && !isNullCell(cellMatrix.getValue(r, startColumn - 1))) {
          leftColumnHasValue = true;
        }
        if (endColumn < maxColumns - 1 && !isNullCell(cellMatrix.getValue(r, endColumn + 1))) {
          rightColumnHasValue = true;
        }
        if (leftColumnHasValue && rightColumnHasValue) {
          break;
        }
      }
      if (leftColumnHasValue) {
        newStartColumn = startColumn - 1;
      }
      if (rightColumnHasValue) {
        newEndColumn = endColumn + 1;
      }
    }
    return this._injector.createInstance(FRange, this._workbook, this._worksheet, {
      startRow: newStartRow,
      startColumn: newStartColumn,
      endRow: newEndRow,
      endColumn: newEndColumn
    });
  }
  /**
   * Returns true if the range is totally blank.
   * @returns {boolean} true if the range is blank; false otherwise.
   * @example
   * ```ts
   * // Assume the active sheet is a new sheet with no data.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.isBlank()); // true
   *
   * // Set the range A1:B2 with some values
   * fRange.setValueForCell(123);
   * console.log(fRange.isBlank()); // false
   * ```
   */
  isBlank() {
    const cellMatrix = this._worksheet.getCellMatrix();
    const { startRow, startColumn, endRow, endColumn } = this._range;
    let isBlank = true;
    for (let r = startRow; r <= endRow; r++) {
      for (let c = startColumn; c <= endColumn; c++) {
        if (!isNullCell(cellMatrix.getValue(r, c))) {
          isBlank = false;
          break;
        }
      }
      if (!isBlank) {
        break;
      }
    }
    return isBlank;
  }
  /**
   * Returns a new range that is relative to the current range, whose upper left point is offset from the current range by the given rows and columns, and with the given height and width in cells.
   * @param {number} rowOffset - The number of rows down from the range's top-left cell; negative values represent rows up from the range's top-left cell.
   * @param {number} columnOffset - The number of columns right from the range's top-left cell; negative values represent columns left from the range's top-left cell.
   * @param {number} numRows - The height in rows of the new range.
   * @param {number} numColumns - The width in columns of the new range.
   * @returns {FRange} The new range.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getA1Notation()); // A1:B2
   *
   * // Offset the range by 1 row and 1 column, and set the height of the new range to 3 and the width to 3
   * const newRange = fRange.offset(1, 1, 3, 3);
   * console.log(newRange.getA1Notation()); // B2:D4
   * ```
   */
  offset(rowOffset, columnOffset, numRows, numColumns) {
    const { startRow, startColumn, endRow, endColumn } = this._range;
    const newStartRow = startRow + rowOffset;
    const newStartColumn = startColumn + columnOffset;
    const newEndRow = numRows ? newStartRow + numRows - 1 : endRow + rowOffset;
    const newEndColumn = numColumns ? newStartColumn + numColumns - 1 : endColumn + columnOffset;
    if (newStartRow < 0 || newStartColumn < 0 || newEndRow < 0 || newEndColumn < 0) {
      throw new Error("The row or column index is out of range");
    }
    return this._injector.createInstance(FRange, this._workbook, this._worksheet, {
      startRow: newStartRow,
      startColumn: newStartColumn,
      endRow: newEndRow,
      endColumn: newEndColumn
    });
  }
  /**
   * Updates the formula for this range. The given formula must be in A1 notation.
   * @param {string} formula - A string representing the formula to set for the cell.
   * @returns {FRange} This range instance for chaining.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1');
   * fRange.setFormula('=SUM(A2:A5)');
   * console.log(fRange.getFormula()); // '=SUM(A2:A5)'
   * ```
   */
  setFormula(formula) {
    return this.setValue({
      f: formula
    });
  }
  /**
   * Sets a rectangular grid of formulas (must match dimensions of this range). The given formulas must be in A1 notation.
   * @param {string[][]} formulas - A two-dimensional string array of formulas.
   * @returns {FRange} This range instance for chaining.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setFormulas([
   *   ['=SUM(A2:A5)', '=SUM(B2:B5)'],
   *   ['=SUM(A6:A9)', '=SUM(B6:B9)'],
   * ]);
   * console.log(fRange.getFormulas()); // [['=SUM(A2:A5)', '=SUM(B2:B5)'], ['=SUM(A6:A9)', '=SUM(B6:B9)']]
   * ```
   */
  setFormulas(formulas) {
    return this.setValues(formulas.map((row) => row.map((formula) => ({ f: formula }))));
  }
};
FRange = __decorateClass([
  __decorateParam(3, Inject(Injector)),
  __decorateParam(4, ICommandService),
  __decorateParam(5, Inject(FormulaDataModel))
], FRange);

// ../packages/sheets/src/facade/f-selection.ts
var FSelection = class {
  constructor(_workbook, _worksheet, _selections, _injector) {
    this._workbook = _workbook;
    this._worksheet = _worksheet;
    this._selections = _selections;
    this._injector = _injector;
  }
  /**
   * Represents the active selection in the sheet. Which means the selection contains the active cell.
   * @returns {FRange | null} The active selection.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A10:B11');
   * fRange.activate();
   * const fSelection = fWorksheet.getSelection();
   * console.log(fSelection.getActiveRange().getA1Notation()); // A10:B11
   * ```
   */
  getActiveRange() {
    const active = this._selections.find((selection) => !!selection.primary);
    if (!active) {
      return null;
    }
    return this._injector.createInstance(FRange, this._workbook, this._worksheet, active.range);
  }
  /**
   * Represents the active selection list in the sheet.
   * @returns {FRange[]} The active selection list.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fSelection = fWorksheet.getSelection();
   * const activeRangeList = fSelection.getActiveRangeList();
   * activeRangeList.forEach((range) => {
   *   console.log(range.getA1Notation());
   * });
   * ```
   */
  getActiveRangeList() {
    return this._selections.map((selection) => {
      return this._injector.createInstance(FRange, this._workbook, this._worksheet, selection.range);
    });
  }
  /**
   * Represents the current select cell in the sheet.
   * @returns {ISelectionCell} The current select cell info.Pay attention to the type of the return value.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A10:B11');
   * fRange.activate();
   * const fSelection = fWorksheet.getSelection();
   * const currentCell = fSelection.getCurrentCell();
   * const { actualRow, actualColumn } = currentCell;
   * console.log(currentCell);
   * console.log(`actualRow: ${actualRow}, actualColumn: ${actualColumn}`); // actualRow: 9, actualColumn: 0
   * ```
   */
  getCurrentCell() {
    const current = this._selections.find((selection) => !!selection.primary);
    if (!current) {
      return null;
    }
    return current.primary;
  }
  /**
   * Returns the active sheet in the spreadsheet.
   * @returns {FWorksheet} The active sheet in the spreadsheet.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fSelection = fWorksheet.getSelection();
   * const activeSheet = fSelection.getActiveSheet();
   * console.log(activeSheet.equalTo(fWorksheet)); // true
   * ```
   */
  getActiveSheet() {
    const fWorkbook = this._injector.createInstance(FWorkbook, this._workbook);
    return this._injector.createInstance(FWorksheet, fWorkbook, this._workbook, this._worksheet);
  }
  /**
   * Update the primary cell in the selection. if the primary cell not exists in selections, add it to the selections and clear the old selections.
   * @param {FRange} cell The new primary cell to update.
   * @returns {FSelection} The new selection after updating the primary cell.Because the selection is immutable, the return value is a new selection.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A10:B11');
   * fRange.activate();
   * const cell = fWorksheet.getRange('B11');
   *
   * let fSelection = fWorksheet.getSelection();
   * fSelection = fSelection.updatePrimaryCell(cell);
   *
   * const currentCell = fSelection.getCurrentCell();
   * const { actualRow, actualColumn } = currentCell;
   * console.log(currentCell);
   * console.log(`actualRow: ${actualRow}, actualColumn: ${actualColumn}`); // actualRow: 10, actualColumn: 1
   * ```
   */
  updatePrimaryCell(cell) {
    const commandService = this._injector.get(ICommandService);
    let newSelections = [];
    let hasSetPrimary = false;
    for (const { range, style } of this._selections) {
      if (Rectangle.contains(range, cell.getRange())) {
        newSelections.push({
          range,
          primary: getPrimaryForRange(cell.getRange(), this._worksheet),
          style
        });
        hasSetPrimary = true;
      } else {
        newSelections.push({
          range,
          primary: null,
          style
        });
      }
    }
    if (!hasSetPrimary) {
      newSelections = [
        {
          range: cell.getRange(),
          primary: getPrimaryForRange(cell.getRange(), this._worksheet)
        }
      ];
    }
    const setSelectionOperationParams = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      selections: newSelections
    };
    commandService.syncExecuteCommand(SetSelectionsOperation.id, setSelectionOperationParams);
    return new FSelection(this._workbook, this._worksheet, newSelections, this._injector);
  }
  /**
   * Get the next primary cell in the specified direction. If the primary cell not exists in selections, return null.
   * The next primary cell in the specified direction is the next cell only within the current selection range.
   * For example, if the current selection is A1:B2, and the primary cell is B1, the next cell in the right direction is A2 instead of C1.
   * @param {Direction} direction The direction to move the primary cell.The enum value is maybe one of the following: UP(0),RIGHT(1), DOWN(2), LEFT(3).
   * @returns {FRange | null} The next primary cell in the specified direction.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * // make sure the active cell is A1 and selection is A1:B2
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.activate();
   *
   * // get the next cell in the right direction, and update the primary cell to the next cell, now the active cell is B1
   * let fSelection = fWorksheet.getSelection();
   * const nextCell = fSelection.getNextDataRange(univerAPI.Enum.Direction.RIGHT);
   * console.log(nextCell?.getA1Notation()); // B1
   * fSelection = fSelection.updatePrimaryCell(nextCell);
   *
   * // get the next cell in the right direction, the next cell is A2
   * const nextCell2 = fSelection.getNextDataRange(univerAPI.Enum.Direction.RIGHT);
   * console.log(nextCell2?.getA1Notation()); // A2
   * ```
   */
  getNextDataRange(direction) {
    const active = this._selections.find((selection) => !!selection.primary);
    if (!active) {
      return null;
    }
    const range = getNextPrimaryCell(this._selections.concat(), direction, this._worksheet);
    if (range) {
      return this._injector.createInstance(FRange, this._workbook, this._worksheet, range);
    }
    return null;
  }
};
FSelection = __decorateClass([
  __decorateParam(3, Inject(Injector))
], FSelection);

// ../packages/sheets/src/facade/f-worksheet.ts
var FWorksheet = class extends FBaseInitialable {
  /**
   * Creates a new worksheet facade instance
   * @param {FWorkbook} _fWorkbook - The facade workbook instance
   * @param {Workbook} _workbook - The workbook instance
   * @param {Worksheet} _worksheet - The worksheet instance
   * @param {Injector} _injector - The injector instance
   * @param {SheetsSelectionsService} _selectionManagerService - The selection manager service
   * @param {ILogService} _logService - The log service
   * @param {ICommandService} _commandService - The command service
   */
  constructor(_fWorkbook, _workbook, _worksheet, _injector, _selectionManagerService, _logService, _commandService) {
    super(_injector);
    this._fWorkbook = _fWorkbook;
    this._workbook = _workbook;
    this._worksheet = _worksheet;
    this._injector = _injector;
    this._selectionManagerService = _selectionManagerService;
    this._logService = _logService;
    this._commandService = _commandService;
    /**
     * Sets the active selection region for this sheet.
     * @param range - The range to set as the active selection
     * @returns This sheet, for chaining
     * @example
     * ```ts
     * const fWorkSheet = univerAPI.getActiveWorkbook().getActiveSheet();
     * fWorkSheet.setActiveSelection(fWorkSheet.getRange('A10:B10'));
     * ```
     */
    __publicField(this, "setActiveSelection", this.setActiveRange);
  }
  /**
   * Get the worksheet instance.
   * @returns {Worksheet} The worksheet instance.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * const sheet = fWorksheet.getSheet();
   * console.log(sheet);
   * ```
   */
  getSheet() {
    return this._worksheet;
  }
  /**
   * Get the injector instance.
   * @returns {Injector} The injector instance.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * const injector = fWorksheet.getInject();
   * console.log(injector);
   * ```
   */
  getInject() {
    return this._injector;
  }
  /**
   * Get the workbook instance.
   * @returns {Workbook} The workbook instance.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * const workbook = fWorksheet.getWorkbook();
   * console.log(workbook);
   * ```
   */
  getWorkbook() {
    return this._workbook;
  }
  /**
   * Get the worksheet id.
   * @returns {string} The id of the worksheet.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * const sheetId = fWorksheet.getSheetId();
   * console.log(sheetId);
   * ```
   */
  getSheetId() {
    return this._worksheet.getSheetId();
  }
  /**
   * Get the worksheet name.
   * @returns {string} The name of the worksheet.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * const sheetName = fWorksheet.getSheetName();
   * console.log(sheetName);
   * ```
   */
  getSheetName() {
    return this._worksheet.getName();
  }
  /**
   * Get the current selection of the worksheet.
   * @returns {FSelection} return the current selections of the worksheet or null if there is no selection.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * const selection = fWorksheet.getSelection();
   * console.log(selection);
   * ```
   */
  getSelection() {
    const selections = this._selectionManagerService.getCurrentSelections();
    if (!selections) {
      return null;
    }
    return this._injector.createInstance(FSelection, this._workbook, this._worksheet, selections);
  }
  // #region rows
  // #region default style
  /**
   * Get the default style of the worksheet.
   * @returns {IStyleData} Default style of the worksheet.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * const defaultStyle = fWorksheet.getDefaultStyle();
   * console.log(defaultStyle);
   * ```
   */
  getDefaultStyle() {
    return this._worksheet.getDefaultCellStyle();
  }
  /**
   * Get the default style of the worksheet row
   * @param {number} index - The row index
   * @param {boolean} [keepRaw] - If true, return the raw style data maybe the style name or style data, otherwise return the data from row manager
   * @returns {(Nullable<IStyleData> | string)} The default style of the worksheet row name or style data
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Get default style for row 0 (1)
   * const rowStyle = fWorksheet.getRowDefaultStyle(0);
   * console.log(rowStyle);
   * // Get raw style data for row 0
   * const rawRowStyle = fWorksheet.getRowDefaultStyle(0, true);
   * console.log(rawRowStyle);
   * ```
   */
  getRowDefaultStyle(index, keepRaw = false) {
    return keepRaw ? this._worksheet.getRowStyle(index, keepRaw) : this._worksheet.getRowStyle(index);
  }
  /**
   * Get the default style of the worksheet column
   * @param {number} index - The column index
   * @param {boolean} [keepRaw] - If true, return the raw style data maybe the style name or style data, otherwise return the data from col manager
   * @returns {(Nullable<IStyleData> | string)} The default style of the worksheet column name or style data
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Get default style for column 0 (A)
   * const colStyle = fWorksheet.getColumnDefaultStyle(0);
   * console.log(colStyle);
   * // Get raw style data for column 0
   * const rawColStyle = fWorksheet.getColumnDefaultStyle(0, true);
   * console.log(rawColStyle);
   * ```
   */
  getColumnDefaultStyle(index, keepRaw = false) {
    return keepRaw ? this._worksheet.getColumnStyle(index, keepRaw) : this._worksheet.getColumnStyle(index);
  }
  /**
   * Set the default style of the worksheet
   * @param {string} style - The style to set
   * @returns {FWorksheet} This worksheet instance for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * fWorksheet.setDefaultStyle('default');
   * // or
   * // fWorksheet.setDefaultStyle({fs: 12, ff: 'Arial'});
   * ```
   */
  setDefaultStyle(style) {
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    this._commandService.syncExecuteCommand(SetWorksheetDefaultStyleMutation.id, {
      unitId,
      subUnitId,
      defaultStyle: style
    });
    this._worksheet.setDefaultCellStyle(style);
    return this;
  }
  /**
   * Set the default style of the worksheet row
   * @param {number} index - The row index
   * @param {string | Nullable<IStyleData>} style - The style name or style data
   * @returns {FWorksheet} This sheet, for chaining.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * fWorksheet.setColumnDefaultStyle(0, 'default');
   * // or
   * // fWorksheet.setColumnDefaultStyle(0, {fs: 12, ff: 'Arial'});
   * ```
   */
  setColumnDefaultStyle(index, style) {
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    const params = {
      unitId,
      subUnitId,
      columnData: {
        [index]: {
          s: style
        }
      }
    };
    this._commandService.syncExecuteCommand(SetColDataCommand.id, params);
    return this;
  }
  /**
   * Set the default style of the worksheet column
   * @param {number} index - The column index
   * @param {string | Nullable<IStyleData>} style - The style name or style data
   * @returns {FWorksheet} This sheet, for chaining.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * fWorksheet.setRowDefaultStyle(0, 'default');
   * // or
   * // fWorksheet.setRowDefaultStyle(0, {fs: 12, ff: 'Arial'});
   * ```
   */
  setRowDefaultStyle(index, style) {
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    const params = {
      unitId,
      subUnitId,
      rowData: {
        [index]: {
          s: style
        }
      }
    };
    this._commandService.syncExecuteCommand(SetRowDataCommand.id, params);
    return this;
  }
  getRange(rowOrA1Notation, column, numRows, numColumns) {
    let range;
    let sheet;
    if (typeof rowOrA1Notation === "object") {
      range = rowOrA1Notation;
      sheet = this._worksheet;
    } else if (typeof rowOrA1Notation === "string") {
      const { range: parsedRange, sheetName } = deserializeRangeWithSheet(rowOrA1Notation);
      const rangeSheet = sheetName ? this._workbook.getSheetBySheetName(sheetName) : this._worksheet;
      if (!rangeSheet) {
        throw new Error("Range not found");
      }
      sheet = rangeSheet;
      range = {
        ...parsedRange,
        unitId: this._workbook.getUnitId(),
        sheetId: sheet.getSheetId(),
        // Use the current range instead of the future actual range to match Apps Script behavior.
        // Users can create the latest range in real time when needed.
        rangeType: 0 /* NORMAL */,
        startRow: parsedRange.rangeType === 2 /* COLUMN */ ? 0 : parsedRange.startRow,
        endRow: parsedRange.rangeType === 2 /* COLUMN */ ? sheet.getMaxRows() - 1 : parsedRange.endRow,
        startColumn: parsedRange.rangeType === 1 /* ROW */ ? 0 : parsedRange.startColumn,
        endColumn: parsedRange.rangeType === 1 /* ROW */ ? sheet.getMaxColumns() - 1 : parsedRange.endColumn
      };
    } else if (typeof rowOrA1Notation === "number" && column !== void 0) {
      sheet = this._worksheet;
      range = {
        startRow: rowOrA1Notation,
        endRow: rowOrA1Notation + (numRows != null ? numRows : 1) - 1,
        startColumn: column,
        endColumn: column + (numColumns != null ? numColumns : 1) - 1,
        unitId: this._workbook.getUnitId(),
        sheetId: this._worksheet.getSheetId()
      };
    } else {
      throw new Error("Invalid range specification");
    }
    return this._injector.createInstance(FRange, this._workbook, sheet, range);
  }
  /**
   * Returns the current number of columns in the sheet, regardless of content.
   * @returns {number} The maximum columns count of the sheet
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * const totalColumns = fWorksheet.getMaxColumns();
   * console.log(`Sheet has ${totalColumns} columns`);
   * ```
   */
  getMaxColumns() {
    return this._worksheet.getMaxColumns();
  }
  /**
   * Returns the current number of rows in the sheet, regardless of content.
   * @returns {number}The maximum rows count of the sheet
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * const totalRows = fWorksheet.getMaxRows();
   * console.log(`Sheet has ${totalRows} rows`);
   * ```
   */
  getMaxRows() {
    return this._worksheet.getMaxRows();
  }
  /**
   * Inserts a row after the given row position.
   * @param {number} afterPosition - The row after which the new row should be added, starting at 0 for the first row.
   * @returns {FWorksheet} This sheet, for chaining.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Insert a row after the third row
   * fWorksheet.insertRowAfter(2);
   * // Insert a row after the first row
   * fWorksheet.insertRowAfter(0);
   * ```
   */
  insertRowAfter(afterPosition) {
    return this.insertRowsAfter(afterPosition, 1);
  }
  /**
   * Inserts a row before the given row position.
   * @param {number} beforePosition - The row before which the new row should be added, starting at 0 for the first row.
   * @returns {FWorksheet} This sheet, for chaining.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Insert a row before the third row
   * fWorksheet.insertRowBefore(2);
   * // Insert a row before the first row
   * fWorksheet.insertRowBefore(0);
   * ```
   */
  insertRowBefore(beforePosition) {
    return this.insertRowsBefore(beforePosition, 1);
  }
  /**
   * Inserts one or more consecutive blank rows in a sheet starting at the specified location.
   * @param {number} rowIndex - The index indicating where to insert a row, starting at 0 for the first row.
   * @param {number} numRows - The number of rows to insert.
   * @returns {FWorksheet} This sheet, for chaining.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Insert 3 rows before the third row
   * fWorksheet.insertRows(2, 3);
   * // Insert 1 row before the first row
   * fWorksheet.insertRows(0);
   * ```
   */
  insertRows(rowIndex, numRows = 1) {
    return this.insertRowsBefore(rowIndex, numRows);
  }
  /**
   * Inserts a number of rows after the given row position.
   * @param {number} afterPosition - The row after which the new rows should be added, starting at 0 for the first row.
   * @param {number} howMany - The number of rows to insert.
   * @returns {FWorksheet} This sheet, for chaining.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Insert 3 rows after the third row
   * fWorksheet.insertRowsAfter(2, 3);
   * // Insert 1 row after the first row
   * fWorksheet.insertRowsAfter(0, 1);
   * ```
   */
  insertRowsAfter(afterPosition, howMany) {
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    const direction = 2 /* DOWN */;
    const startRow = afterPosition + 1;
    const endRow = afterPosition + howMany;
    const startColumn = 0;
    const endColumn = this._worksheet.getColumnCount() - 1;
    const cellValue = copyRangeStyles(this._worksheet, startRow, endRow, startColumn, endColumn, true, afterPosition);
    this._commandService.syncExecuteCommand(InsertRowByRangeCommand.id, {
      unitId,
      subUnitId,
      direction,
      range: {
        startRow,
        endRow,
        startColumn,
        endColumn
      },
      cellValue
    });
    return this;
  }
  /**
   * Inserts a number of rows before the given row position.
   * @param {number} beforePosition - The row before which the new rows should be added, starting at 0 for the first row.
   * @param {number} howMany - The number of rows to insert.
   * @returns {FWorksheet} This sheet, for chaining.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Insert 3 rows before the third row
   * fWorksheet.insertRowsBefore(2, 3);
   * // Insert 1 row before the first row
   * fWorksheet.insertRowsBefore(0, 1);
   * ```
   */
  insertRowsBefore(beforePosition, howMany) {
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    const direction = 0 /* UP */;
    const startRow = beforePosition;
    const endRow = beforePosition + howMany - 1;
    const startColumn = 0;
    const endColumn = this._worksheet.getColumnCount() - 1;
    const cellValue = copyRangeStyles(this._worksheet, startRow, endRow, startColumn, endColumn, true, beforePosition - 1);
    this._commandService.syncExecuteCommand(InsertRowByRangeCommand.id, {
      unitId,
      subUnitId,
      direction,
      range: {
        startRow,
        endRow,
        startColumn,
        endColumn
      },
      cellValue
    });
    return this;
  }
  /**
   * Deletes the row at the given row position.
   * @param {number} rowPosition - The position of the row, starting at 0 for the first row.
   * @returns {FWorksheet} This sheet, for chaining.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Delete the third row
   * fWorksheet.deleteRow(2);
   * // Delete the first row
   * fWorksheet.deleteRow(0);
   * ```
   */
  deleteRow(rowPosition) {
    return this.deleteRows(rowPosition, 1);
  }
  /**
   * Deletes a number of rows starting at the given row position.
   * @param {number} rowPosition - The position of the first row to delete, starting at 0 for the first row.
   * @param {number} howMany - The number of rows to delete.
   * @returns {FWorksheet} This sheet, for chaining.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Delete 3 rows at row index 2 (rows 3-5)
   * fWorksheet.deleteRows(2, 3);
   * // Delete 1 row at row index 0 (first row)
   * fWorksheet.deleteRows(0, 1);
   * ```
   */
  deleteRows(rowPosition, howMany) {
    const range = {
      startRow: rowPosition,
      endRow: rowPosition + howMany - 1,
      startColumn: 0,
      endColumn: this._worksheet.getColumnCount() - 1
    };
    this._commandService.syncExecuteCommand(RemoveRowByRangeCommand.id, {
      range,
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId()
    });
    return this;
  }
  /**
   * Moves the rows selected by the given range to the position indicated by the destinationIndex. The rowSpec itself does not have to exactly represent an entire row or group of rows to move—it selects all rows that the range spans.
   * @param {FRange} rowSpec - A range spanning the rows that should be moved.
   * @param {number} destinationIndex - The index that the rows should be moved to. Note that this index is based on the coordinates before the rows are moved. Existing data is shifted down to make room for the moved rows while the source rows are removed from the grid. Therefore, the data may end up at a different index than originally specified. Use 0-index for this method.
   * @returns {FWorksheet} This sheet, for chaining.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Move 3 rows at row index 2 (rows 3-5) to row index 0
   * const rowSpec1 = fWorksheet.getRange('3:5');
   * fWorksheet.moveRows(rowSpec1, 0);
   * // Move 1 row at row index 0 (first row) to row index 2
   * const rowSpec2 = fWorksheet.getRange('1:1');
   * fWorksheet.moveRows(rowSpec2, 2);
   * ```
   */
  moveRows(rowSpec, destinationIndex) {
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    const range = covertToRowRange(rowSpec.getRange(), this._worksheet);
    const fromRange = range;
    const toRange = {
      startRow: destinationIndex,
      endRow: destinationIndex,
      startColumn: range.startColumn,
      endColumn: range.endColumn
    };
    this._commandService.syncExecuteCommand(MoveRowsCommand.id, {
      unitId,
      subUnitId,
      range,
      fromRange,
      toRange
    });
    return this;
  }
  /**
   * Hides the rows in the given range.
   * @param {FRange} row - The row range to hide.
   * @returns {FWorksheet} This sheet, for chaining.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Hide 3 rows starting from row index 1 (rows 2-4)
   * const row1 = fWorksheet.getRange('2:4');
   * fWorksheet.hideRow(row1);
   * // Hide single row at index 0 (first row)
   * const row2 = fWorksheet.getRange('1:1');
   * fWorksheet.hideRow(row2);
   * ```
   */
  hideRow(row) {
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    const range = covertToRowRange(row.getRange(), this._worksheet);
    this._commandService.syncExecuteCommand(SetRowHiddenCommand.id, {
      unitId,
      subUnitId,
      ranges: [range]
    });
    return this;
  }
  /**
   * Hides one or more consecutive rows starting at the given index. Use 0-index for this method
   * @param {number} rowIndex - The starting index of the rows to hide
   * @param {number} numRow - The number of rows to hide
   * @returns {FWorksheet} This sheet, for chaining.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Hide 3 rows starting from row index 1 (rows 2-4)
   * fWorksheet.hideRows(1, 3);
   * // Hide single row at index 0 (first row)
   * fWorksheet.hideRows(0);
   * ```
   */
  hideRows(rowIndex, numRow = 1) {
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    const range = {
      startRow: rowIndex,
      endRow: rowIndex + numRow - 1,
      startColumn: 0,
      endColumn: this._worksheet.getColumnCount() - 1,
      rangeType: 1 /* ROW */
    };
    this._commandService.syncExecuteCommand(SetRowHiddenCommand.id, {
      unitId,
      subUnitId,
      ranges: [range]
    });
    return this;
  }
  /**
   * Make the row in the given range visible.
   * @param {FRange} row - The range to unhide, if hidden.
   * @returns {FWorksheet} This sheet, for chaining.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Unhide 3 rows starting from row index 1 (rows 2-4)
   * const row1 = fWorksheet.getRange('2:4');
   * fWorksheet.unhideRow(row1);
   * // Unhide single row at index 0 (first row)
   * const row2 = fWorksheet.getRange('1:1');
   * fWorksheet.unhideRow(row2);
   * ```
   */
  unhideRow(row) {
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    const range = covertToRowRange(row.getRange(), this._worksheet);
    this._commandService.syncExecuteCommand(SetSpecificRowsVisibleCommand.id, {
      unitId,
      subUnitId,
      ranges: [range]
    });
    return this;
  }
  /**
   * Scrolling sheet to make specific rows visible.
   * @param {number} rowIndex - The starting index of the rows
   * @param {number} numRows - The number of rows
   * @returns {FWorksheet} This worksheet instance for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Show 3 rows starting from row index 1 (rows 2-4)
   * fWorksheet.showRows(1, 3);
   * // Show single row at index 0 (first row)
   * fWorksheet.showRows(0);
   * ```
   */
  showRows(rowIndex, numRows = 1) {
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    const range = {
      startRow: rowIndex,
      endRow: rowIndex + numRows - 1,
      startColumn: 0,
      endColumn: this._worksheet.getColumnCount() - 1,
      rangeType: 1 /* ROW */
    };
    this._commandService.syncExecuteCommand(SetSpecificRowsVisibleCommand.id, {
      unitId,
      subUnitId,
      ranges: [range]
    });
    return this;
  }
  /**
   * Sets the row height of the given row in pixels. By default, rows grow to fit cell contents. If you want to force rows to a specified height, use setRowHeightsForced(startRow, numRows, height).
   * @param {number} rowPosition - The row position to change.
   * @param {number} height - The height in pixels to set it to.
   * @returns {FWorksheet} This worksheet instance for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Set the height of the second row to 30 pixels
   * fWorksheet.setRowHeight(1, 30);
   * // Set the height of the first row to 20 pixels
   * fWorksheet.setRowHeight(0, 20);
   * ```
   */
  setRowHeight(rowPosition, height) {
    return this.setRowHeights(rowPosition, 1, height);
  }
  /**
   * Make certain row wrap and auto height.
   * @param {number} rowPosition - The row position to change.
   * @param {BooleanNumber} auto - Whether to auto fit the row height.
   * @returns {FWorksheet} This worksheet instance for chaining
   * @example
   * ```ts
   * const fWorkSheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * fWorkSheet.autoFitRow(24);
   * ```
   */
  autoFitRow(rowPosition, auto = 1 /* TRUE */) {
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    const ranges = [{
      startRow: rowPosition,
      endRow: rowPosition,
      startColumn: 0,
      endColumn: this._worksheet.getColumnCount() - 1
    }];
    this._commandService.syncExecuteCommand(SetTextWrapCommand.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: ranges[0],
      value: 3 /* WRAP */
    });
    this._commandService.syncExecuteCommand(SetWorksheetRowIsAutoHeightMutation.id, {
      unitId,
      subUnitId,
      ranges,
      autoHeightInfo: auto
    });
    return this;
  }
  /**
   * Sets the height of the given rows in pixels.
   * By default, rows grow to fit cell contents. If you want to force rows to a specified height, use setRowHeightsForced(startRow, numRows, height).
   * @param {number} startRow - The starting row position to change
   * @param {number} numRows - The number of rows to change
   * @param {number} height - The height in pixels to set it to
   * @returns {FWorksheet} This worksheet instance for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * fWorksheet.setRowHeights(1, 10, 30);
   * ```
   */
  setRowHeights(startRow, numRows, height) {
    var _a;
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    const rowManager = this._worksheet.getRowManager();
    const autoHeightRanges = [];
    const rowHeightRanges = [];
    for (let i = startRow; i < startRow + numRows; i++) {
      const autoRowHeight = ((_a = rowManager.getRow(i)) == null ? void 0 : _a.ah) || this._worksheet.getConfig().defaultRowHeight;
      const range = {
        startRow: i,
        endRow: i,
        startColumn: 0,
        endColumn: this._worksheet.getColumnCount() - 1
      };
      if (height <= autoRowHeight) {
        autoHeightRanges.push(range);
      } else {
        rowHeightRanges.push(range);
      }
    }
    if (rowHeightRanges.length > 0) {
      this._commandService.syncExecuteCommand(SetRowHeightCommand.id, {
        unitId,
        subUnitId,
        ranges: rowHeightRanges,
        value: height
      });
    }
    if (autoHeightRanges.length > 0) {
      this._commandService.syncExecuteCommand(SetWorksheetRowIsAutoHeightCommand.id, {
        unitId,
        subUnitId,
        ranges: autoHeightRanges
      });
    }
    return this;
  }
  /**
   * Gets the height in pixels of the given row.
   * @param {number} rowPosition - The position of the row to examine. index starts at 0.
   * @returns {number} The height in pixels of the given row.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set the value of the cell A1 to 'Hello, Univer!', set the font size to 30 and font weight to bold
   * const fRange = fWorksheet.getRange('A1');
   * fRange.setValue('Hello, Univer!').setFontSize(30).setFontWeight('bold');
   *
   * // Get the height of the first row
   * console.log(fWorksheet.getRowHeight(0));
   * ```
   */
  getRowHeight(rowPosition) {
    return this._worksheet.getRowHeight(rowPosition);
  }
  /**
   * Sets the height of the given rows to auto.
   * @param {number} startRow - The starting row position to change
   * @param {number} numRows - The number of rows to change
   * @returns {FWorksheet} This worksheet instance for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * fWorksheet.setRowAutoHeight(1, 10);
   * ```
   */
  setRowAutoHeight(startRow, numRows) {
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    const ranges = [
      {
        startRow,
        endRow: startRow + numRows - 1,
        startColumn: 0,
        endColumn: this._worksheet.getColumnCount() - 1
      }
    ];
    this._commandService.syncExecuteCommand(SetWorksheetRowIsAutoHeightCommand.id, {
      unitId,
      subUnitId,
      ranges
    });
    return this;
  }
  /**
   * Sets the height of the given ranges to auto.
   * @param {IRange[]} ranges - The ranges to change
   * @returns {FWorksheet} This worksheet instance for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * const ranges = [
   * { startRow: 1, endRow: 10, startColumn: 0, endColumn: 10 },
   * { startRow: 11, endRow: 20, startColumn: 0, endColumn: 10 },
   * ]
   * fWorksheet.setRangesAutoHeight(ranges);
   * ```
   */
  setRangesAutoHeight(ranges) {
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    this._commandService.syncExecuteCommand(SetWorksheetRowIsAutoHeightCommand.id, {
      unitId,
      subUnitId,
      ranges
    });
    return this;
  }
  /**
   * Sets the height of the given rows in pixels. By default, rows grow to fit cell contents. When you use setRowHeightsForced, rows are forced to the specified height even if the cell contents are taller than the row height.
   * @param {number} startRow - The starting row position to change
   * @param {number} numRows - The number of rows to change
   * @param {number} height - The height in pixels to set it to
   * @returns {FWorksheet} This worksheet instance for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * fWorksheet.setRowHeightsForced(1, 10, 30);
   * ```
   */
  setRowHeightsForced(startRow, numRows, height) {
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    const ranges = [
      {
        startRow,
        endRow: startRow + numRows - 1,
        startColumn: 0,
        endColumn: this._worksheet.getColumnCount() - 1
      }
    ];
    this._commandService.syncExecuteCommand(SetRowHeightCommand.id, {
      unitId,
      subUnitId,
      ranges,
      value: height
    });
    return this;
  }
  // #endregion
  /**
   * Set custom properties for given rows.
   * @param {IObjectArrayPrimitiveType<CustomData>} custom - The custom properties to set
   * @returns {FWorksheet} This worksheet instance for chaining
   * @example
   * ```typescript
   * const fWorkSheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * fWorkSheet.setRowCustom({ 0: { key: 'value' } });
   * ```
   */
  setRowCustom(custom) {
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    const rowData = {};
    for (const [rowIndex, customData] of Object.entries(custom)) {
      rowData[Number(rowIndex)] = {
        custom: customData
      };
    }
    const params = {
      unitId,
      subUnitId,
      rowData
    };
    this._commandService.syncExecuteCommand(SetRowDataCommand.id, params);
    return this;
  }
  // #region Column
  /**
   * Inserts a column after the given column position.
   * @param {number} afterPosition - The column after which the new column should be added, starting at 0 for the first column
   * @returns {FWorksheet} This worksheet instance for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Insert a column after column C
   * fWorksheet.insertColumnAfter(2);
   * // Insert a column after column A
   * fWorksheet.insertColumnAfter(0);
   * ```
   */
  insertColumnAfter(afterPosition) {
    return this.insertColumnsAfter(afterPosition, 1);
  }
  /**
   * Inserts a column before the given column position.
   * @param {number} beforePosition - The column before which the new column should be added, starting at 0 for the first column
   * @returns {FWorksheet} This worksheet instance for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Insert a column before column C
   * fWorksheet.insertColumnBefore(2);
   * // Insert a column before column A
   * fWorksheet.insertColumnBefore(0);
   * ```
   */
  insertColumnBefore(beforePosition) {
    return this.insertColumnsBefore(beforePosition, 1);
  }
  /**
   * Inserts one or more consecutive blank columns in a sheet starting at the specified location.
   * @param {number} columnIndex - The index indicating where to insert a column, starting at 0 for the first column
   * @param {number} numColumns - The number of columns to insert
   * @returns {FWorksheet} This sheet, for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Insert 3 columns before column C
   * fWorksheet.insertColumns(2, 3);
   * // Insert 1 column before column A
   * fWorksheet.insertColumns(0);
   * ```
   */
  insertColumns(columnIndex, numColumns = 1) {
    return this.insertColumnsBefore(columnIndex, numColumns);
  }
  /**
   * Inserts a given number of columns after the given column position.
   * @param {number} afterPosition - The column after which the new columns should be added, starting at 0 for the first column
   * @param {number} howMany - The number of columns to insert
   * @returns {FWorksheet} This sheet, for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Insert 3 columns after column C
   * fWorksheet.insertColumnsAfter(2, 3);
   * // Insert 1 column after column A
   * fWorksheet.insertColumnsAfter(0, 1);
   * ```
   */
  insertColumnsAfter(afterPosition, howMany) {
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    const direction = 1 /* RIGHT */;
    const startRow = 0;
    const endRow = this._worksheet.getRowCount() - 1;
    const startColumn = afterPosition + 1;
    const endColumn = afterPosition + howMany;
    const cellValue = copyRangeStyles(this._worksheet, startRow, endRow, startColumn, endColumn, false, afterPosition);
    this._commandService.syncExecuteCommand(InsertColByRangeCommand.id, {
      unitId,
      subUnitId,
      direction,
      range: {
        startRow,
        endRow,
        startColumn,
        endColumn
      },
      cellValue
    });
    return this;
  }
  /**
   * Inserts a number of columns before the given column position.
   * @param {number} beforePosition - The column before which the new columns should be added, starting at 0 for the first column
   * @param {number} howMany - The number of columns to insert
   * @returns {FWorksheet} This sheet, for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Insert 3 columns before column C
   * fWorksheet.insertColumnsBefore(2, 3);
   * // Insert 1 column before column A
   * fWorksheet.insertColumnsBefore(0, 1);
   * ```
   */
  insertColumnsBefore(beforePosition, howMany) {
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    const direction = 3 /* LEFT */;
    const startRow = 0;
    const endRow = this._worksheet.getRowCount() - 1;
    const startColumn = beforePosition;
    const endColumn = beforePosition + howMany - 1;
    const cellValue = copyRangeStyles(this._worksheet, startRow, endRow, startColumn, endColumn, false, beforePosition - 1);
    this._commandService.syncExecuteCommand(InsertColByRangeCommand.id, {
      unitId,
      subUnitId,
      direction,
      range: {
        startRow,
        endRow,
        startColumn,
        endColumn
      },
      cellValue
    });
    return this;
  }
  /**
   * Deletes the column at the given column position.
   * @param {number} columnPosition - The position of the column, starting at 0 for the first column
   * @returns {FWorksheet} This sheet, for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Delete column C
   * fWorksheet.deleteColumn(2);
   * // Delete column A
   * fWorksheet.deleteColumn(0);
   * ```
   */
  deleteColumn(columnPosition) {
    return this.deleteColumns(columnPosition, 1);
  }
  /**
   * Deletes a number of columns starting at the given column position.
   * @param {number} columnPosition - The position of the first column to delete, starting at 0 for the first column
   * @param {number} howMany - The number of columns to delete
   * @returns {FWorksheet} This sheet, for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Delete 3 columns at column index 2 (columns C, D, E)
   * fWorksheet.deleteColumns(2, 3);
   * // Delete 1 column at column index 0 (column A)
   * fWorksheet.deleteColumns(0, 1);
   * ```
   */
  deleteColumns(columnPosition, howMany) {
    const range = {
      startRow: 0,
      endRow: this._worksheet.getRowCount() - 1,
      startColumn: columnPosition,
      endColumn: columnPosition + howMany - 1
    };
    this._commandService.syncExecuteCommand(RemoveColByRangeCommand.id, {
      range,
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId()
    });
    return this;
  }
  /**
   * Moves the columns selected by the given range to the position indicated by the destinationIndex. The columnSpec itself does not have to exactly represent an entire column or group of columns to move—it selects all columns that the range spans.
   * @param {FRange} columnSpec - A range spanning the columns that should be moved
   * @param {number} destinationIndex - The index that the columns should be moved to. Note that this index is based on the coordinates before the columns are moved. Existing data is shifted right to make room for the moved columns while the source columns are removed from the grid. Therefore, the data may end up at a different index than originally specified. Use 0-index for this method
   * @returns {FWorksheet} This sheet, for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Move columns C, D, E to column index 2 (columns B, C, D)
   * const columnSpec1 = fWorksheet.getRange('C:E');
   * fWorksheet.moveColumns(columnSpec1, 1);
   * // Move column F to column index 0 (column A)
   * const columnSpec2 = fWorksheet.getRange('F:F');
   * fWorksheet.moveColumns(columnSpec2, 0);
   * ```
   */
  moveColumns(columnSpec, destinationIndex) {
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    const range = covertToColRange(columnSpec.getRange(), this._worksheet);
    const fromRange = range;
    const toRange = {
      startRow: 0,
      endRow: this._worksheet.getRowCount() - 1,
      startColumn: destinationIndex,
      endColumn: destinationIndex
    };
    this._commandService.syncExecuteCommand(MoveColsCommand.id, {
      unitId,
      subUnitId,
      range,
      fromRange,
      toRange
    });
    return this;
  }
  /**
   * Hides the column or columns in the given range.
   * @param {FRange} column - The column range to hide
   * @returns {FWorksheet} This sheet, for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Hide columns C, D, E
   * const column1 = fWorksheet.getRange('C:E');
   * fWorksheet.hideColumn(column1);
   * // Hide column A
   * const column2 = fWorksheet.getRange('A:A');
   * fWorksheet.hideColumn(column2);
   * ```
   */
  hideColumn(column) {
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    const range = covertToColRange(column.getRange(), this._worksheet);
    this._commandService.syncExecuteCommand(SetColHiddenCommand.id, {
      unitId,
      subUnitId,
      ranges: [range]
    });
    return this;
  }
  /**
   * Hides one or more consecutive columns starting at the given index. Use 0-index for this method
   * @param {number} columnIndex - The starting index of the columns to hide
   * @param {number} numColumn - The number of columns to hide
   * @returns {FWorksheet} This sheet, for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Hide columns C, D, E
   * fWorksheet.hideColumns(2, 3);
   * // Hide column A
   * fWorksheet.hideColumns(0, 1);
   * ```
   */
  hideColumns(columnIndex, numColumn = 1) {
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    const range = {
      startRow: 0,
      endRow: this._worksheet.getRowCount() - 1,
      startColumn: columnIndex,
      endColumn: columnIndex + numColumn - 1,
      rangeType: 2 /* COLUMN */
    };
    this._commandService.syncExecuteCommand(SetColHiddenCommand.id, {
      unitId,
      subUnitId,
      ranges: [range]
    });
    return this;
  }
  /**
   * Show the column in the given range.
   * @param {FRange} column - The range to unhide, if hidden
   * @returns {FWorksheet} This sheet, for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Unhide columns C, D, E
   * const column1 = fWorksheet.getRange('C:E');
   * fWorksheet.unhideColumn(column1);
   * // Unhide column A
   * const column2 = fWorksheet.getRange('A:A');
   * fWorksheet.unhideColumn(column2);
   * ```
   */
  unhideColumn(column) {
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    const range = covertToColRange(column.getRange(), this._worksheet);
    this._commandService.syncExecuteCommand(SetSpecificColsVisibleCommand.id, {
      unitId,
      subUnitId,
      ranges: [range]
    });
    return this;
  }
  /**
   * Show one or more consecutive columns starting at the given index. Use 0-index for this method
   * @param {number} columnIndex - The starting index of the columns to unhide
   * @param {number} numColumns - The number of columns to unhide
   * @returns {FWorksheet} This sheet, for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Unhide columns C, D, E
   * fWorksheet.showColumns(2, 3);
   * // Unhide column A
   * fWorksheet.showColumns(0, 1);
   * ```
   */
  showColumns(columnIndex, numColumns = 1) {
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    const range = {
      startRow: 0,
      endRow: this._worksheet.getRowCount() - 1,
      startColumn: columnIndex,
      endColumn: columnIndex + numColumns - 1,
      rangeType: 2 /* COLUMN */
    };
    this._commandService.syncExecuteCommand(SetSpecificColsVisibleCommand.id, {
      unitId,
      subUnitId,
      ranges: [range]
    });
    return this;
  }
  /**
   * Sets the width of the given column in pixels.
   * @param {number} columnPosition - The position of the given column to set
   * @param {number} width - The width in pixels to set it to
   * @returns {FWorksheet} This sheet, for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Set width of column B to 100 pixels
   * fWorksheet.setColumnWidth(1, 100);
   * ```
   */
  setColumnWidth(columnPosition, width) {
    return this.setColumnWidths(columnPosition, 1, width);
  }
  /**
   * Sets the width of the given columns in pixels.
   * @param {number} startColumn - The starting column position to change
   * @param {number} numColumn - The number of columns to change
   * @param {number} width - The width in pixels to set it to
   * @returns {FWorksheet} This sheet, for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Set width of columns B-D (index 1-3) to 100 pixels
   * fWorksheet.setColumnWidths(1, 3, 100);
   * ```
   */
  setColumnWidths(startColumn, numColumn, width) {
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    const ranges = [
      {
        startColumn,
        endColumn: startColumn + numColumn - 1,
        startRow: 0,
        endRow: this._worksheet.getRowCount() - 1
      }
    ];
    this._commandService.syncExecuteCommand(SetColWidthCommand.id, {
      unitId,
      subUnitId,
      ranges,
      value: width
    });
    return this;
  }
  /**
   * Gets the width in pixels of the given column.
   * @param {number} columnPosition - The position of the column to examine. index starts at 0.
   * @returns {number} The width of the column in pixels
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set the long text value in cell A1
   * const fRange = fWorksheet.getRange('A1');
   * fRange.setValue('Whenever it is a damp, drizzly November in my soul...');
   *
   * // Set the column A to a width which fits the text
   * fWorksheet.autoResizeColumn(0);
   *
   * // Get the width of the column A
   * console.log(fWorksheet.getColumnWidth(0));
   * ```
   */
  getColumnWidth(columnPosition) {
    return this._worksheet.getColumnWidth(columnPosition);
  }
  // #endregion
  /**
   * Set custom properties for given columns.
   * @param {IObjectArrayPrimitiveType<CustomData>} custom - The custom properties to set
   * @returns {FWorksheet} This worksheet instance for chaining
   * @example
   * ```ts
   * const fWorkSheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * fWorkSheet.setColumnCustom({ 0: { key: 'value' } });
   * ```
   */
  setColumnCustom(custom) {
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    const columnData = {};
    for (const [columnIndex, customData] of Object.entries(custom)) {
      columnData[Number(columnIndex)] = {
        custom: customData
      };
    }
    const params = {
      unitId,
      subUnitId,
      columnData
    };
    this._commandService.syncExecuteCommand(SetColDataCommand.id, params);
    return this;
  }
  // #region merge cells
  /**
   * Get all merged cells in the current worksheet
   * @returns {FRange[]} All the merged cells in the worksheet
   * @example
   * ```ts
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Get all merged ranges in the sheet
   * const mergedData = fWorksheet.getMergeData();
   * // Process each merged range
   * mergedData.forEach(range => {
   *   console.log(range.getA1Notation());
   * });
   * ```
   */
  getMergeData() {
    return this._worksheet.getMergeData().map((merge) => this._injector.createInstance(FRange, this._workbook, this._worksheet, merge));
  }
  /**
   * Get all merged cells in the current sheet
   * @returns {FRange[]} all merged cells
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Get all merged ranges in the sheet
   * const mergedRanges = fWorksheet.getMergedRanges();
   * // Process each merged range
   * mergedRanges.forEach(range => {
   *   console.log(range.getA1Notation());
   * });
   * ```
   */
  getMergedRanges() {
    const snapshot = this._worksheet.getSnapshot();
    return snapshot.mergeData.map((merge) => this._injector.createInstance(FRange, this._workbook, this._worksheet, merge));
  }
  /**
   * Get the merged cell data of the specified row and column.
   * @param {number} row - The row index
   * @param {number} column - The column index
   * @returns {FRange|undefined} The merged cell data, or undefined if the cell is not merged
   * @example
   * ```ts
   * const fWorkSheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * const merge = fWorkSheet.getCellMergeData(0, 0);
   * if (merge) {
   *   console.log('Merged range:', merge.getA1Notation());
   * }
   * ```
   */
  getCellMergeData(row, column) {
    const worksheet = this._worksheet;
    const mergeData = worksheet.getMergedCell(row, column);
    if (mergeData) {
      return this._injector.createInstance(FRange, this._workbook, this._worksheet, mergeData);
    }
  }
  // #endregion
  /**
   * Returns the selected range in the active sheet, or null if there is no active range.
   * @returns {FRange | null} the active range
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Get the currently active range
   * const activeRange = fWorksheet.getActiveRange();
   * if (activeRange) {
   *   console.log('Active range:', activeRange.getA1Notation());
   * }
   * ```
   */
  getActiveRange() {
    return this._fWorkbook.getActiveRange();
  }
  /**
   * Sets the active selection region for this sheet.
   * @param {FRange} range - The range to set as the active selection
   * @returns {FWorksheet} This sheet, for chaining
   * @example
   * ```ts
   * const fWorkSheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * fWorkSheet.setActiveRange(fWorkSheet.getRange('A10:B10'));
   * ```
   */
  setActiveRange(range) {
    const { unitId, sheetId } = range.getRange();
    if (unitId !== this._workbook.getUnitId() || sheetId !== this._worksheet.getSheetId()) {
      throw new Error("Specified range must be part of the sheet.");
    }
    this._fWorkbook.setActiveRange(range);
    return this;
  }
  /**
   * Returns the active cell in this sheet.
   * @returns {FRange | null} The active cell
   * @example
   * ```typescript
   * const fWorkSheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * console.log(fWorkSheet.getActiveCell().getA1Notation());
   * ```
   */
  getActiveCell() {
    return this._fWorkbook.getActiveCell();
  }
  /**
   * Sets the frozen state of the current sheet.
   * @param {IFreeze} freeze - the scrolling viewport start range and count of freezed rows and columns.
   * that means if you want to freeze the first 3 rows and 2 columns, you should set freeze as { startRow: 3, startColumn: 2, xSplit: 2, ySplit: 3 }
   * @deprecated use `setFrozenRows` and `setFrozenColumns` instead.
   * @returns {FWorksheet} This worksheet instance for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Freeze first 3 rows and 2 columns
   * fWorksheet.setFreeze({
   *   startRow: 3,
   *   startColumn: 2,
   *   xSplit: 2,
   *   ySplit: 3
   * });
   * ```
   */
  setFreeze(freeze) {
    this._logService.warn("setFreeze is deprecated, use setFrozenRows and setFrozenColumns instead");
    this._commandService.syncExecuteCommand(SetFrozenCommand.id, {
      ...freeze,
      unitId: this._workbook.getUnitId(),
      subUnitId: this.getSheetId()
    });
    return this;
  }
  /**
   * Cancels the frozen state of the current sheet.
   * @returns {FWorksheet} This worksheet instance for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Cancel freeze
   * fWorksheet.cancelFreeze();
   * ```
   */
  cancelFreeze() {
    this._commandService.syncExecuteCommand(CancelFrozenCommand.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this.getSheetId()
    });
    return this;
  }
  /**
   * Get the freeze state of the current sheet.
   * @returns {IFreeze} The freeze state of the current sheet
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Get the freeze state of the current sheet
   * const freeze = fWorksheet.getFreeze();
   * console.log(freeze);
   * ```
   */
  getFreeze() {
    return this._worksheet.getFreeze();
  }
  setFrozenColumns(...args) {
    const freezeCfg = this.getFreeze();
    if (arguments.length === 1) {
      const columns = args[0];
      this.setFreeze({
        ...freezeCfg,
        startColumn: columns > 0 ? columns : -1,
        xSplit: columns
      });
    } else if (arguments.length === 2) {
      let [startColumn = 0, endColumn = 0] = args;
      if (startColumn > endColumn) {
        [startColumn, endColumn] = [endColumn, startColumn];
      }
      this._commandService.syncExecuteCommand(SetFrozenCommand.id, {
        startColumn: endColumn + 1,
        xSplit: endColumn - startColumn + 1,
        startRow: freezeCfg.startRow,
        ySplit: freezeCfg.ySplit,
        unitId: this._workbook.getUnitId(),
        subUnitId: this.getSheetId()
      });
    }
    return this;
  }
  setFrozenRows(...args) {
    const freezeCfg = this.getFreeze();
    if (arguments.length === 1) {
      const rows = args[0];
      this.setFreeze({
        ...freezeCfg,
        startRow: rows > 0 ? rows : -1,
        ySplit: rows
      });
    } else if (arguments.length === 2) {
      let [startRow = 0, endRow = 0] = args;
      if (startRow > endRow) {
        [startRow, endRow] = [endRow, startRow];
      }
      this._commandService.syncExecuteCommand(SetFrozenCommand.id, {
        startRow: endRow + 1,
        ySplit: endRow - startRow + 1,
        startColumn: freezeCfg.startColumn,
        xSplit: freezeCfg.xSplit,
        unitId: this._workbook.getUnitId(),
        subUnitId: this.getSheetId()
      });
    }
    return this;
  }
  /**
   * Get the number of frozen columns.
   * @returns {number} The number of frozen columns, returns 0 if no columns are frozen.
   * @example
   * ```typescript
   * const fWorkSheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Get the number of frozen columns
   * const frozenColumns = fWorkSheet.getFrozenColumns();
   * console.log(frozenColumns);
   * ```
   */
  getFrozenColumns() {
    const freeze = this.getFreeze();
    if (freeze.startColumn === -1) {
      return 0;
    }
    return freeze.startColumn;
  }
  /**
   * Get the number of frozen rows.
   * @returns {number} The number of frozen rows. returns 0 if no rows are frozen.
   * @example
   * ```typescript
   * const fWorkSheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Get the number of frozen rows
   * const frozenRows = fWorkSheet.getFrozenRows();
   * console.log(frozenRows);
   * ```
   */
  getFrozenRows() {
    const freeze = this.getFreeze();
    if (freeze.startRow === -1) {
      return 0;
    }
    return freeze.startRow;
  }
  /**
   * Get freezed rows.
   * @returns {IRowRange} The range of the frozen rows.
   * @example
   * ```ts
   * const fWorkSheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Get the range of the frozen rows
   * const frozenRows = fWorkSheet.getFrozenRowRange();
   * console.log(frozenRows);
   * ```
   */
  getFrozenRowRange() {
    const cfg = this._worksheet.getFreeze();
    return {
      startRow: cfg.startRow - cfg.ySplit,
      endRow: cfg.startRow - 1
    };
  }
  /**
   * Get freezed columns
   * @returns {IColumnRange} The range of the frozen columns.
   * @example
   * ```ts
   * const fWorkSheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Get the range of the frozen columns
   * const frozenColumns = fWorkSheet.getFrozenColumnRange();
   * console.log(frozenColumns);
   * ```
   */
  getFrozenColumnRange() {
    const cfg = this._worksheet.getFreeze();
    return {
      startColumn: cfg.startColumn - cfg.xSplit,
      endColumn: cfg.startColumn - 1
    };
  }
  /**
   * Returns true if the sheet's gridlines are hidden; otherwise returns false. Gridlines are visible by default.
   * @returns {boolean} True if the sheet's gridlines are hidden; otherwise false.
   * @example
   * ```ts
   * const fWorkSheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // check if the gridlines are hidden
   * if (fWorkSheet.hasHiddenGridLines()) {
   *    console.log('Gridlines are hidden');
   * }
   * ```
   */
  hasHiddenGridLines() {
    return this._worksheet.getConfig().showGridlines === 0 /* FALSE */;
  }
  /**
   * Hides or reveals the sheet gridlines.
   * @param {boolean} hidden - If `true`, hide gridlines in this sheet; otherwise show the gridlines.
   * @returns {FWorksheet} Returns the current worksheet instance for method chaining
   * @example
   * ``` ts
   * const fWorkSheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // hide the gridlines
   * fWorkSheet.setHiddenGridlines(true);
   * ```
   */
  setHiddenGridlines(hidden) {
    this._commandService.syncExecuteCommand(ToggleGridlinesCommand.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      showGridlines: hidden ? 0 /* FALSE */ : 1 /* TRUE */
    });
    return this;
  }
  /**
   * Set the color of the gridlines in the sheet.
   * @param {string|undefined} color - The color to set for the gridlines.Undefined or null to reset to the default color.
   * @returns {FWorksheet} Returns the current worksheet instance for method chaining
   * @example
   * ```ts
   * const fWorkSheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // set the gridlines color to red
   * fWorkSheet.setGridLinesColor('#ff0000');
   * ```
   */
  setGridLinesColor(color) {
    this._commandService.syncExecuteCommand(SetGridlinesColorCommand.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      color
    });
    return this;
  }
  /**
   * Get the color of the gridlines in the sheet.
   * @returns {string | undefined} The color of the gridlines in the sheet or undefined. The default color is 'rgb(214, 216, 219)'.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * // get the gridlines color of the sheet
   * console.log(fWorkSheet.getGridLinesColor());
   * ```
   */
  getGridLinesColor() {
    return this._worksheet.getGridlinesColor();
  }
  /**
   * Sets the sheet tab color.
   * @param {string|null|undefined} color - A color code in CSS notation (like '#ffffff' or 'white'), or null to reset the tab color.
   * @returns {FWorksheet} Returns the current worksheet instance for method chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * // set the tab color to red
   * fWorkSheet.setTabColor('#ff0000');
   * ```
   */
  setTabColor(color) {
    this._commandService.syncExecuteCommand(SetTabColorCommand.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      value: color
    });
    return this;
  }
  /**
   * Get the tab color of the sheet.
   * @returns {string} The tab color of the sheet or undefined.
   * The default color is css style property 'unset'.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * // get the tab color of the sheet
   * console.log(fWorkSheet.getTabColor());
   * ```
   */
  getTabColor() {
    return this._worksheet.getTabColor();
  }
  // eslint-disable-next-line
  /**
   * @deprecated use `univerAPI.addEvent(univerAPI.Event.SheetValueChanged, (params) => {})` instead
   */
  onCellDataChange(callback) {
    const commandService = this._injector.get(ICommandService);
    return commandService.onCommandExecuted((command) => {
      if (command.id === SetRangeValuesMutation.id) {
        const params = command.params;
        if (params.unitId === this._workbook.getUnitId() && params.subUnitId === this._worksheet.getSheetId() && params.cellValue) {
          callback(new ObjectMatrix(params.cellValue));
        }
      }
    });
  }
  // eslint-disable-next-line
  /**
   * @deprecated use `univerAPI.addEvent(univerAPI.Event.BeforeSheetEditEnd, (params) => {})` instead
   */
  onBeforeCellDataChange(callback) {
    const commandService = this._injector.get(ICommandService);
    return commandService.beforeCommandExecuted((command) => {
      if (command.id === SetRangeValuesMutation.id) {
        const params = command.params;
        if (params.unitId === this._workbook.getUnitId() && params.subUnitId === this._worksheet.getSheetId() && params.cellValue) {
          callback(new ObjectMatrix(params.cellValue));
        }
      }
    });
  }
  /**
   * Hides this sheet. Has no effect if the sheet is already hidden. If this method is called on the only visible sheet, it throws an exception.
   * @returns {FWorksheet} Returns the current worksheet instance for method chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * // hide the active sheet
   * fWorkSheet.hideSheet();
   * ```
   */
  hideSheet() {
    const commandService = this._injector.get(ICommandService);
    const workbook = this._workbook;
    const sheets = workbook.getSheets();
    const visibleSheets = sheets.filter((sheet) => sheet.isSheetHidden() !== 1 /* TRUE */);
    if (visibleSheets.length <= 1) {
      throw new Error("Cannot hide the only visible sheet");
    }
    commandService.syncExecuteCommand(SetWorksheetHideCommand.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId()
    });
    return this;
  }
  /**
   * Shows this sheet. Has no effect if the sheet is already visible.
   * @returns {FWorksheet} Returns the current worksheet instance for method chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheets = fWorkbook.getSheets();
   * // show the last sheet
   * fWorkSheets[fWorkSheets.length - 1].showSheet();
   * ```
   */
  showSheet() {
    const commandService = this._injector.get(ICommandService);
    commandService.syncExecuteCommand(SetWorksheetShowCommand.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId()
    });
    return this;
  }
  /**
   * Returns true if the sheet is currently hidden.
   * @returns {boolean} True if the sheet is hidden; otherwise, false.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheets = fWorkbook.getSheets();
   * // check if the last sheet is hidden
   * console.log(fWorkSheets[fWorkSheets.length - 1].isSheetHidden());
   * ```
   */
  isSheetHidden() {
    return Boolean(this._worksheet.isSheetHidden() === 1 /* TRUE */);
  }
  /**
   * Sets the sheet name.
   * @param {string} name - The new name for the sheet.
   * @returns {FWorksheet} Returns the current worksheet instance for method chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * // set the sheet name to 'Sheet1'
   * fWorkSheet.setName('NewSheet1');
   * ```
   */
  setName(name) {
    this._commandService.syncExecuteCommand(SetWorksheetNameCommand.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      name
    });
    return this;
  }
  /**
   * Activates this sheet. Does not alter the sheet itself, only the parent's notion of the active sheet.
   * @returns {FWorksheet} Current sheet, for chaining.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheets = fWorkbook.getSheets();
   * // activate the last sheet
   * fWorkSheets[fWorkSheets.length - 1].activate();
   * ```
   */
  activate() {
    this._fWorkbook.setActiveSheet(this);
    return this;
  }
  /**
   * Gets the position of the sheet in its parent spreadsheet. Starts at 0.
   * @returns {number} The position of the sheet in its parent spreadsheet.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * // get the position of the active sheet
   * const position = fWorkSheet.getIndex();
   * console.log(position);
   * ```
   */
  getIndex() {
    return this._workbook.getSheetIndex(this._worksheet);
  }
  /**
   * Clears the sheet of content and formatting information.Or Optionally clears only the contents or only the formatting.
   * @param {IFacadeClearOptions} [options] - Options for clearing the sheet. If not provided, the contents and formatting are cleared both.
   * @param {boolean} [options.contentsOnly] - If true, the contents of the sheet are cleared. If false, the contents and formatting are cleared. Default is false.
   * @param {boolean} [options.formatOnly] - If true, the formatting of the sheet is cleared. If false, the contents and formatting are cleared. Default is false.
   * @returns {FWorksheet} Returns the current worksheet instance for method chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * // clear the sheet of content and formatting information
   * fWorkSheet.clear();
   * // clear the sheet of content only
   * fWorkSheet.clear({ contentsOnly: true });
   * ```
   */
  clear(options) {
    if (options && options.contentsOnly && !options.formatOnly) {
      return this.clearContents();
    }
    if (options && options.formatOnly && !options.contentsOnly) {
      return this.clearFormats();
    }
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    const commandService = this._injector.get(ICommandService);
    const range = {
      startRow: 0,
      endRow: this._worksheet.getRowCount() - 1,
      startColumn: 0,
      endColumn: this._worksheet.getColumnCount() - 1
    };
    commandService.syncExecuteCommand(ClearSelectionAllCommand.id, {
      unitId,
      subUnitId,
      ranges: [range],
      options
    });
    return this;
  }
  /**
   * Clears the sheet of contents, while preserving formatting information.
   * @returns {FWorksheet} Returns the current worksheet instance for method chaining
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * // clear the sheet of content only
   * fWorkSheet.clearContents();
   * ```
   */
  clearContents() {
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    const commandService = this._injector.get(ICommandService);
    const range = {
      startRow: 0,
      endRow: this._worksheet.getRowCount() - 1,
      startColumn: 0,
      endColumn: this._worksheet.getColumnCount() - 1
    };
    commandService.syncExecuteCommand(ClearSelectionContentCommand.id, {
      unitId,
      subUnitId,
      ranges: [range]
    });
    return this;
  }
  /**
   * Clears the sheet of formatting, while preserving contents.
   * @returns {FWorksheet} Returns the current worksheet instance for method chaining
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * // clear the sheet of formatting only
   * fWorkSheet.clearFormats();
   * ```
   */
  clearFormats() {
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    const commandService = this._injector.get(ICommandService);
    const range = {
      startRow: 0,
      endRow: this._worksheet.getRowCount() - 1,
      startColumn: 0,
      endColumn: this._worksheet.getColumnCount() - 1
    };
    commandService.syncExecuteCommand(ClearSelectionFormatCommand.id, {
      unitId,
      subUnitId,
      ranges: [range]
    });
    return this;
  }
  /**
   * Returns a Range corresponding to the dimensions in which data is present.
   * This is functionally equivalent to creating a Range bounded by A1 and (Sheet.getLastColumns(), Sheet.getLastRows()).
   * @returns {FRange} The range of the data in the sheet.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * // Assume the sheet is a empty sheet
   * const cellRange = fWorkSheet.getRange('J50');
   * cellRange.setValue('Hello World');
   * console.log(fWorkSheet.getDataRange().getA1Notation()); // A1:J50
   * ```
   */
  getDataRange() {
    const lastRow = this.getLastRows();
    const lastColumn = this.getLastColumns();
    return this.getRange(0, 0, lastRow + 1, lastColumn + 1);
  }
  /**
   * @deprecated use `getLastColumn` instead.
   * Returns the column index of the last column that contains content.
   * @returns {number} the column index of the last column that contains content.
   */
  getLastColumns() {
    return this._worksheet.getLastColumnWithContent();
  }
  /**
   * Returns the column index of the last column that contains content.
   * @returns {number} the column index of the last column that contains content.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * // Assume the sheet is a empty sheet
   * const cellRange = fWorkSheet.getRange('J50');
   * cellRange.setValue('Hello World');
   * console.log(fWorkSheet.getLastColumn()); // 9
   * ```
   */
  getLastColumn() {
    return this._worksheet.getLastColumnWithContent();
  }
  /**
   * @deprecated use `getLastRow` instead.
   * Returns the row index of the last row that contains content.
   * @returns {number} the row index of the last row that contains content.
   */
  getLastRows() {
    return this._worksheet.getLastRowWithContent();
  }
  /**
   * Returns the row index of the last row that contains content.
   * @returns {number} the row index of the last row that contains content.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * // Assume the sheet is a empty sheet
   * const cellRange = fWorkSheet.getRange('J50');
   * cellRange.setValue('Hello World');
   * console.log(fWorkSheet.getLastRow()); // 49
   * ```
   */
  getLastRow() {
    return this._worksheet.getLastRowWithContent();
  }
  /**
   * Judge whether provided FWorksheet is equal to current.
   * @param {FWorksheet} other - the FWorksheet to compare with.
   * @returns {boolean} true if the FWorksheet is equal to the current FWorksheet, false otherwise.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const sheets = fWorkbook.getSheets();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * console.log(fWorkSheet.equalTo(sheets[0])); // true, if the active sheet is the first sheet.
   * ```
   */
  equalTo(other) {
    if (other instanceof FWorksheet) {
      return this._worksheet.getSheetId() === other.getSheetId() && this._workbook.getUnitId() === other.getWorkbook().getUnitId();
    }
    return false;
  }
  /**
   * Insert a defined name for worksheet.
   * @param {string} name - The name of the defined name to insert
   * @param {string} formulaOrRefString - The formula(=sum(A2:b10)) or reference(A1) string of the defined name to insert
   * @example
   * ```ts
   * // The code below inserts a defined name
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * fWorksheet.insertDefinedName('MyDefinedName', 'Sheet1!A1');
   * ```
   */
  insertDefinedName(name, formulaOrRefString) {
    const definedNameBuilder = this._injector.createInstance(FDefinedNameBuilder);
    const param = definedNameBuilder.setName(name).setRef(formulaOrRefString).build();
    param.localSheetId = this.getSheetId();
    this._fWorkbook.insertDefinedNameBuilder(param);
  }
  /**
   * Get all the defined names in the worksheet.
   * @returns {FDefinedName[]} All the defined names in the worksheet
   * @example
   * ```ts
   * // The code below gets all the defined names in the worksheet
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * const definedNames = fWorksheet.getDefinedNames();
   * console.log(definedNames);
   * ```
   */
  getDefinedNames() {
    const names = this._fWorkbook.getDefinedNames();
    return names.filter((name) => name.getLocalSheetId() === this.getSheetId());
  }
  /**
   * Set custom metadata of worksheet
   * @param {CustomData | undefined} custom - custom metadata
   * @returns {FWorksheet} Current worksheet, for chaining.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * fWorkSheet.setCustomMetadata({ key: 'value' });
   * ```
   */
  setCustomMetadata(custom) {
    this._worksheet.setCustomMetadata(custom);
    return this;
  }
  /**
   * Get custom metadata of worksheet
   * @returns {CustomData | undefined} custom metadata
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * const custom = fWorkSheet.getCustomMetadata();
   * console.log(custom);
   * ```
   */
  getCustomMetadata() {
    return this._worksheet.getCustomMetadata();
  }
  /**
   * Set custom metadata of row
   * @param {number} index - row index
   * @param {CustomData | undefined} custom - custom metadata
   * @returns {FWorksheet} Current worksheet, for chaining.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * fWorkSheet.setRowCustomMetadata(0, { key: 'value' });
   * ```
   */
  setRowCustomMetadata(index, custom) {
    this._worksheet.getRowManager().setCustomMetadata(index, custom);
    return this;
  }
  /**
   * Set custom metadata of column
   * @param {number} index - column index
   * @param {CustomData | undefined} custom - custom metadata
   * @returns {FWorksheet} Current worksheet, for chaining.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * fWorkSheet.setColumnCustomMetadata(0, { key: 'value' });
   * ```
   */
  setColumnCustomMetadata(index, custom) {
    this._worksheet.getColumnManager().setCustomMetadata(index, custom);
    return this;
  }
  /**
   * Get custom metadata of row
   * @param {number} index - row index
   * @returns {CustomData | undefined} custom metadata
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * const custom = fWorkSheet.getRowCustomMetadata(0);
   * console.log(custom);
   * ```
   */
  getRowCustomMetadata(index) {
    return this._worksheet.getRowManager().getCustomMetadata(index);
  }
  /**
   * Get custom metadata of column
   * @param {number} index - column index
   * @returns {CustomData | undefined} custom metadata
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * const custom = fWorkSheet.getColumnCustomMetadata(0);
   * console.log(custom);
   * ```
   */
  getColumnCustomMetadata(index) {
    return this._worksheet.getColumnManager().getCustomMetadata(index);
  }
  /**
   * Appends a row to the bottom of the current data region in the sheet. If a cell's content begins with =, it's interpreted as a formula.
   * @param {CellValue[]} rowContents - An array of values for the new row.
   * @returns {FWorksheet} Returns the current worksheet instance for method chaining.
   * @example
   * ```ts
   * // Appends a new row with 4 columns to the bottom of the current
   * // data region in the sheet containing the values in the array.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * fWorkSheet.appendRow([1, 'Hello Univer', true, '=A1']);
   * ```
   */
  appendRow(rowContents) {
    const hasValue = this._worksheet.getCellMatrix().hasValue();
    const lastRow = this._worksheet.getLastRowWithContent();
    const maxRows = this._worksheet.getRowCount();
    const maxColumns = this._worksheet.getColumnCount();
    const row = hasValue ? lastRow + 1 : lastRow;
    const cellMatrix = new ObjectMatrix();
    for (let c = 0; c < rowContents.length; c++) {
      cellMatrix.setValue(row, c, covertCellValue(rowContents[c]));
    }
    this._commandService.syncExecuteCommand(AppendRowCommand.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      cellValue: cellMatrix.getMatrix(),
      insertRowNums: row > maxRows - 1 ? 1 : 0,
      insertColumnNums: rowContents.length > maxColumns ? rowContents.length - maxColumns : 0,
      maxRows,
      maxColumns
    });
    return this;
  }
};
FWorksheet = __decorateClass([
  __decorateParam(3, Inject(Injector)),
  __decorateParam(4, Inject(SheetsSelectionsService)),
  __decorateParam(5, Inject(ILogService)),
  __decorateParam(6, ICommandService)
], FWorksheet);

// ../packages/sheets/src/facade/f-workbook.ts
var FWorkbook = class extends FBaseInitialable {
  constructor(_workbook, _injector, _resourceLoaderService, _selectionManagerService, _univerInstanceService, _commandService, _permissionService, _logService, _localeService, _definedNamesService) {
    super(_injector);
    this._workbook = _workbook;
    this._injector = _injector;
    this._resourceLoaderService = _resourceLoaderService;
    this._selectionManagerService = _selectionManagerService;
    this._univerInstanceService = _univerInstanceService;
    this._commandService = _commandService;
    this._permissionService = _permissionService;
    this._logService = _logService;
    this._localeService = _localeService;
    this._definedNamesService = _definedNamesService;
    __publicField(this, "id");
    this.id = this._workbook.getUnitId();
  }
  /**
   * Get the Workbook instance.
   * @returns {Workbook} The Workbook instance.
   * @example
   * ```ts
   * // The code below gets the Workbook instance
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const workbook = fWorkbook.getWorkbook();
   * console.log(workbook);
   * ```
   */
  getWorkbook() {
    return this._workbook;
  }
  /**
   * Get the id of the workbook.
   * @returns {string} The id of the workbook.
   * @example
   * ```ts
   * // The code below gets the id of the workbook
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const unitId = fWorkbook.getId();
   * console.log(unitId);
   * ```
   */
  getId() {
    return this.id;
  }
  /**
   * Get the name of the workbook.
   * @returns {string} The name of the workbook.
   * @example
   * ```ts
   * // The code below gets the name of the workbook
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const name = fWorkbook.getName();
   * console.log(name);
   * ```
   */
  getName() {
    return this._workbook.name;
  }
  /**
   * Set the name of the workbook.
   * @param {string} name The new name of the workbook.
   * @example
   * ```ts
   * // The code below sets the name of the workbook
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * fWorkbook.setName('MyWorkbook');
   * ```
   */
  setName(name) {
    this._workbook.setName(name);
  }
  /**
   * Save workbook snapshot data, including conditional formatting, data validation, and other plugin data.
   * @returns {IWorkbookData} Workbook snapshot data
   * @example
   * ```ts
   * // The code below saves the workbook snapshot data
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const snapshot = fWorkbook.save();
   * console.log(snapshot);
   * ```
   */
  save() {
    const snapshot = this._resourceLoaderService.saveUnit(this._workbook.getUnitId());
    return snapshot;
  }
  /**
   * @deprecated use 'save' instead.
   * @returns {IWorkbookData} Workbook snapshot data
   * @memberof FWorkbook
   * @example
   * ```ts
   * // The code below saves the workbook snapshot data
   * const activeSpreadsheet = univerAPI.getActiveWorkbook();
   * const snapshot = activeSpreadsheet.getSnapshot();
   * ```
   */
  getSnapshot() {
    this._logService.warn("use 'save' instead of 'getSnapshot'");
    return this.save();
  }
  /**
   * Get the active sheet of the workbook.
   * @returns {FWorksheet} The active sheet of the workbook
   * @example
   * ```ts
   * // The code below gets the active sheet of the workbook
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * console.log(fWorksheet);
   * ```
   */
  getActiveSheet() {
    const activeSheet = this._workbook.getActiveSheet();
    return this._injector.createInstance(FWorksheet, this, this._workbook, activeSheet);
  }
  /**
   * Gets all the worksheets in this workbook
   * @returns {FWorksheet[]} An array of all the worksheets in the workbook
   * @example
   * ```ts
   * // The code below gets all the worksheets in the workbook
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const sheets = fWorkbook.getSheets();
   * console.log(sheets);
   * ```
   */
  getSheets() {
    return this._workbook.getSheets().map((sheet) => {
      return this._injector.createInstance(FWorksheet, this, this._workbook, sheet);
    });
  }
  /**
   * Create a new worksheet and returns a handle to it.
   * @param {string} name Name of the new sheet
   * @param {number} rows How many rows would the new sheet have
   * @param {number} column How many columns would the new sheet have
   * @returns {FWorksheet} The new created sheet
   * @example
   * ```ts
   * // The code below creates a new sheet
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const newSheet = fWorkbook.create('MyNewSheet', 10, 10);
   * console.log(newSheet);
   * ```
   */
  create(name, rows, column) {
    const newSheet = mergeWorksheetSnapshotWithDefault({});
    newSheet.rowCount = rows;
    newSheet.columnCount = column;
    newSheet.name = name;
    newSheet.id = name.toLowerCase().replace(/ /g, "-");
    this._commandService.syncExecuteCommand(InsertSheetCommand.id, {
      unitId: this.id,
      index: this._workbook.getSheets().length,
      sheet: newSheet
    });
    this._commandService.syncExecuteCommand(SetWorksheetActiveOperation.id, {
      unitId: this.id,
      subUnitId: this._workbook.getSheets()[this._workbook.getSheets().length - 1].getSheetId()
    });
    const worksheet = this._workbook.getActiveSheet();
    if (!worksheet) {
      throw new Error("No active sheet found");
    }
    return this._injector.createInstance(FWorksheet, this, this._workbook, worksheet);
  }
  /**
   * Get a worksheet by sheet id.
   * @param {string} sheetId The id of the sheet to get.
   * @returns {FWorksheet | null} The worksheet with given sheet id
   * @example
   * ```ts
   * // The code below gets a worksheet by sheet id
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const sheet = fWorkbook.getSheetBySheetId('sheetId');
   * console.log(sheet);
   * ```
   */
  getSheetBySheetId(sheetId) {
    const worksheet = this._workbook.getSheetBySheetId(sheetId);
    if (!worksheet) {
      return null;
    }
    return this._injector.createInstance(FWorksheet, this, this._workbook, worksheet);
  }
  /**
   * Get a worksheet by sheet name.
   * @param {string} name The name of the sheet to get.
   * @returns {FWorksheet | null} The worksheet with given sheet name
   * @example
   * ```ts
   * // The code below gets a worksheet by sheet name
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const sheet = fWorkbook.getSheetByName('Sheet1');
   * console.log(sheet);
   * ```
   */
  getSheetByName(name) {
    const worksheet = this._workbook.getSheetBySheetName(name);
    if (!worksheet) {
      return null;
    }
    return this._injector.createInstance(FWorksheet, this, this._workbook, worksheet);
  }
  /**
   * Sets the given worksheet to be the active worksheet in the workbook.
   * @param {FWorksheet | string} sheet The instance or id of the worksheet to set as active.
   * @returns {FWorksheet} The active worksheet
   * @example
   * ```ts
   * // The code below sets the given worksheet to be the active worksheet
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const sheet = fWorkbook.getSheets()[1];
   * fWorkbook.setActiveSheet(sheet);
   * ```
   */
  setActiveSheet(sheet) {
    this._commandService.syncExecuteCommand(SetWorksheetActiveOperation.id, {
      unitId: this.id,
      subUnitId: typeof sheet === "string" ? sheet : sheet.getSheetId()
    });
    return typeof sheet === "string" ? this.getSheetBySheetId(sheet) : sheet;
  }
  /**
   * Inserts a new worksheet into the workbook.
   * Using a default sheet name. The new sheet becomes the active sheet
   * @param {string} [sheetName] The name of the new sheet
   * @returns {FWorksheet} The new sheet
   * @example
   * ```ts
   * // The code below inserts a new sheet into the workbook
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * fWorkbook.insertSheet();
   *
   * // The code below inserts a new sheet into the workbook, using a custom name
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * fWorkbook.insertSheet('MyNewSheet');
   * ```
   */
  insertSheet(sheetName) {
    if (sheetName != null) {
      this._commandService.syncExecuteCommand(InsertSheetCommand.id, { sheet: { name: sheetName } });
    } else {
      this._commandService.syncExecuteCommand(InsertSheetCommand.id);
    }
    const unitId = this.id;
    const subUnitId = this._workbook.getSheets()[this._workbook.getSheets().length - 1].getSheetId();
    this._commandService.syncExecuteCommand(SetWorksheetActiveOperation.id, {
      unitId,
      subUnitId
    });
    const worksheet = this._workbook.getActiveSheet();
    if (!worksheet) {
      throw new Error("No active sheet found");
    }
    return this._injector.createInstance(FWorksheet, this, this._workbook, worksheet);
  }
  /**
   * Deletes the specified worksheet.
   * @param {FWorksheet | string} sheet The instance or id of the worksheet to delete.
   * @returns {boolean} True if the worksheet was deleted, false otherwise.
   * @example
   * ```ts
   * // The code below deletes the specified worksheet
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const sheet = fWorkbook.getSheets()[1];
   * fWorkbook.deleteSheet(sheet);
   *
   * // The code below deletes the specified worksheet by id
   * // fWorkbook.deleteSheet(sheet.getSheetId());
   * ```
   */
  deleteSheet(sheet) {
    const unitId = this.id;
    const subUnitId = typeof sheet === "string" ? sheet : sheet.getSheetId();
    return this._commandService.syncExecuteCommand(RemoveSheetCommand.id, {
      unitId,
      subUnitId
    });
  }
  // #region editing
  /**
   * Undo the last action.
   * @returns {FWorkbook} A promise that resolves to true if the undo was successful, false otherwise.
   * @example
   * ```ts
   * // The code below undoes the last action
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * fWorkbook.undo();
   * ```
   */
  undo() {
    this._univerInstanceService.focusUnit(this.id);
    this._commandService.syncExecuteCommand(UndoCommand.id);
    return this;
  }
  /**
   * Redo the last undone action.
   * @returns {FWorkbook} A promise that resolves to true if the redo was successful, false otherwise.
   * @example
   * ```ts
   * // The code below redoes the last undone action
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * fWorkbook.redo();
   * ```
   */
  redo() {
    this._univerInstanceService.focusUnit(this.id);
    this._commandService.syncExecuteCommand(RedoCommand.id);
    return this;
  }
  /**
   * Callback for command execution.
   * @callback onBeforeCommandExecuteCallback
   * @param {ICommandInfo<ISheetCommandSharedParams>} command The command that was executed.
   */
  /**
   * Register a callback that will be triggered before invoking a command targeting the Univer sheet.
   * @param {onBeforeCommandExecuteCallback} callback the callback.
   * @returns {IDisposable} A function to dispose the listening.
   * @example
   * ```ts
   * // The code below registers a callback that will be triggered before invoking a command targeting the Univer sheet
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * fWorkbook.onBeforeCommandExecute((command) => {
   *   console.log('Before command execute:', command);
   * });
   * ```
   */
  onBeforeCommandExecute(callback) {
    return this._commandService.beforeCommandExecuted((command) => {
      var _a;
      if (((_a = command.params) == null ? void 0 : _a.unitId) !== this.id) {
        return;
      }
      callback(command);
    });
  }
  /**
   * Callback for command execution.
   * @callback onCommandExecutedCallback
   * @param {ICommandInfo<ISheetCommandSharedParams>} command The command that was executed
   */
  /**
   * Register a callback that will be triggered when a command is invoked targeting the Univer sheet.
   * @param {onCommandExecutedCallback} callback the callback.
   * @returns {IDisposable} A function to dispose the listening.
   * @example
   * ```ts
   * // The code below registers a callback that will be triggered when a command is invoked targeting the Univer sheet
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * fWorkbook.onCommandExecuted((command) => {
   *   console.log('Command executed:', command);
   * });
   * ```
   */
  onCommandExecuted(callback) {
    return this._commandService.onCommandExecuted((command) => {
      var _a;
      if (((_a = command.params) == null ? void 0 : _a.unitId) !== this.id) {
        return;
      }
      callback(command);
    });
  }
  /**
   * Callback for selection changes.
   * @callback onSelectionChangeCallback
   * @param {IRange[]} selections The new selection.
   */
  /**
   * Register a callback that will be triggered when the selection changes.
   * @param {onSelectionChangeCallback} callback The callback.
   * @returns {IDisposable} A function to dispose the listening
   * @example
   * ```ts
   * // The code below registers a callback that will be triggered when the selection changes
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * fWorkbook.onSelectionChange((selections) => {
   *   console.log('Selection changed:', selections);
   * });
   * ```
   */
  onSelectionChange(callback) {
    return toDisposable(
      this._selectionManagerService.selectionMoveEnd$.subscribe((selections) => {
        if (this._univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET).getUnitId() !== this.id) {
          return;
        }
        if (!(selections == null ? void 0 : selections.length)) {
          callback([]);
        } else {
          callback(selections.map((s) => s.range));
        }
      })
    );
  }
  /**
   * Used to modify the editing permissions of the workbook. When the value is false, editing is not allowed.
   * @param {boolean} value  editable value want to set
   * @returns {FWorkbook} FWorkbook instance
   * @example
   * ```ts
   * // The code below sets the editing permissions of the workbook
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * fWorkbook.setEditable(false);
   * ```
   */
  setEditable(value) {
    const instance = new WorkbookEditablePermission(this._workbook.getUnitId());
    const editPermissionPoint = this._permissionService.getPermissionPoint(instance.id);
    if (!editPermissionPoint) {
      this._permissionService.addPermissionPoint(instance);
    }
    this._permissionService.updatePermissionPoint(instance.id, value);
    return this;
  }
  /**
   * Sets the selection region for active sheet.
   * @param {FRange} range The range to set as the active selection.
   * @returns {FWorkbook} FWorkbook instance
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const range = fWorkbook.getActiveSheet().getRange('A10:B10');
   * fWorkbook.setActiveRange(range);
   * ```
   */
  setActiveRange(range) {
    const sheet = this.getActiveSheet();
    const sheetId = range.getRange().sheetId || sheet.getSheetId();
    const worksheet = sheetId ? this._workbook.getSheetBySheetId(sheetId) : this._workbook.getActiveSheet(true);
    if (!worksheet) {
      throw new Error("No active sheet found");
    }
    if (worksheet.getSheetId() !== sheet.getSheetId()) {
      this.setActiveSheet(this._injector.createInstance(FWorksheet, this, this._workbook, worksheet));
    }
    const setSelectionOperationParams = {
      unitId: this.getId(),
      subUnitId: sheetId,
      selections: [range].map((r) => ({ range: r.getRange(), primary: getPrimaryForRange(r.getRange(), worksheet), style: null }))
    };
    this._commandService.syncExecuteCommand(SetSelectionsOperation.id, setSelectionOperationParams);
    return this;
  }
  /**
   * Returns the selected range in the active sheet, or null if there is no active range.
   * @returns {FRange | null} The active range
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const activeRange = fWorkbook.getActiveRange();
   * console.log(activeRange);
   * ```
   */
  // could sheet have no active range ?
  getActiveRange() {
    const activeSheet = this._workbook.getActiveSheet();
    const selections = this._selectionManagerService.getCurrentSelections();
    const active = selections.find((selection) => !!selection.primary);
    if (!active) {
      return null;
    }
    return this._injector.createInstance(FRange, this._workbook, activeSheet, active.range);
  }
  /**
   * Returns the active cell in this spreadsheet.
   * @returns {FRange | null} The active cell
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * console.log(fWorkbook.getActiveCell().getA1Notation());
   * ```
   */
  getActiveCell() {
    const activeSheet = this._workbook.getActiveSheet();
    const selections = this._selectionManagerService.getCurrentSelections();
    const active = selections.find((selection) => !!selection.primary);
    if (!active) {
      return null;
    }
    const cell = {
      ...active.primary,
      rangeType: 0 /* NORMAL */
    };
    return this._injector.createInstance(FRange, this._workbook, activeSheet, cell);
  }
  /**
   * Deletes the currently active sheet.
   * @returns {boolean} true if the sheet was deleted, false otherwise
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * fWorkbook.deleteActiveSheet();
   * ```
   */
  deleteActiveSheet() {
    const sheet = this.getActiveSheet();
    return this.deleteSheet(sheet);
  }
  /**
   * Duplicates the given worksheet.
   * @param {FWorksheet} sheet The worksheet to duplicate.
   * @returns {FWorksheet} The duplicated worksheet
   * @example
   * ```ts
   * // The code below duplicates the given worksheet
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const activeSheet = fWorkbook.getActiveSheet();
   * const duplicatedSheet = fWorkbook.duplicateSheet(activeSheet);
   * console.log(duplicatedSheet);
   * ```
   */
  duplicateSheet(sheet) {
    this._commandService.syncExecuteCommand(CopySheetCommand.id, {
      unitId: sheet.getWorkbook().getUnitId(),
      subUnitId: sheet.getSheetId()
    });
    return this._injector.createInstance(FWorksheet, this, this._workbook, this._workbook.getActiveSheet());
  }
  /**
   * Duplicates the active sheet.
   * @returns {FWorksheet} The duplicated worksheet
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const duplicatedSheet = fWorkbook.duplicateActiveSheet();
   * console.log(duplicatedSheet);
   * ```
   */
  duplicateActiveSheet() {
    const sheet = this.getActiveSheet();
    return this.duplicateSheet(sheet);
  }
  /**
   * Get the number of sheets in the workbook.
   * @returns {number} The number of sheets in the workbook
   * @example
   * ```ts
   * // The code below gets the number of sheets in the workbook
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * console.log(fWorkbook.getNumSheets());
   * ```
   */
  getNumSheets() {
    return this._workbook.getSheets().length;
  }
  /**
   * Get the locale of the workbook.
   * @returns {LocaleType} The locale of the workbook
   * @example
   * ```ts
   * // The code below gets the locale of the workbook
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * console.log(fWorkbook.getLocale());
   * ```
   */
  getLocale() {
    return this._localeService.getCurrentLocale();
  }
  /**
   * @deprecated use `setSpreadsheetLocale` instead.
   * @param {LocaleType} locale - The locale to set
   */
  setLocale(locale) {
    this._localeService.setLocale(locale);
  }
  /**
   * Set the locale of the workbook.
   * @param {LocaleType} locale The locale to set
   * @returns {FWorkbook} This workbook, for chaining
   * @example
   * ```ts
   * // The code below sets the locale of the workbook
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * fWorkbook.setSpreadsheetLocale(univerAPI.Enum.LocaleType.EN_US);
   * console.log(fWorkbook.getLocale());
   * ```
   */
  setSpreadsheetLocale(locale) {
    this._localeService.setLocale(locale);
    return this;
  }
  /**
   * Get the URL of the workbook.
   * @returns {string} The URL of the workbook
   * @example
   * ```ts
   * // The code below gets the URL of the workbook
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const url = fWorkbook.getUrl();
   * console.log(url);
   * ```
   */
  getUrl() {
    return location.href;
  }
  /**
   * Move the sheet to the specified index.
   * @param {FWorksheet} sheet The sheet to move
   * @param {number} index The index to move the sheet to
   * @returns {FWorkbook} This workbook, for chaining
   * @example
   * ```ts
   * // The code below moves the sheet to the specified index
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const sheet = fWorkbook.getActiveSheet();
   * fWorkbook.moveSheet(sheet, 1);
   * ```
   */
  moveSheet(sheet, index) {
    let sheetIndexVal = index;
    if (sheetIndexVal < 0) {
      sheetIndexVal = 0;
    } else if (sheetIndexVal > this._workbook.getSheets().length - 1) {
      sheetIndexVal = this._workbook.getSheets().length - 1;
    }
    this._commandService.syncExecuteCommand(SetWorksheetOrderCommand.id, {
      unitId: sheet.getWorkbook().getUnitId(),
      order: sheetIndexVal,
      subUnitId: sheet.getSheetId()
    });
    return this;
  }
  /**
   * Move the active sheet to the specified index.
   * @param {number} index The index to move the active sheet to
   * @returns {FWorkbook} This workbook, for chaining
   * @example
   * ```ts
   * // The code below moves the active sheet to the specified index
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * fWorkbook.moveActiveSheet(1);
   * ```
   */
  moveActiveSheet(index) {
    const sheet = this.getActiveSheet();
    return this.moveSheet(sheet, index);
  }
  /**
   * Get the PermissionInstance.
   * @returns {FPermission} - The PermissionInstance.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const permission = fWorkbook.getPermission();
   * console.log(permission);
   * ```
   */
  getPermission() {
    return this._injector.createInstance(FPermission);
  }
  /**
   * Get the defined name by name.
   * @param {string} name The name of the defined name to get
   * @returns {FDefinedName | null} The defined name with the given name
   * @example
   * ```ts
   * // The code below gets the defined name by name
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const definedName = fWorkbook.getDefinedName('MyDefinedName');
   * console.log(definedName);
   * ```
   */
  getDefinedName(name) {
    const definedName = this._definedNamesService.getValueByName(this.id, name);
    if (!definedName) {
      return null;
    }
    return this._injector.createInstance(FDefinedName, { ...definedName, unitId: this.id });
  }
  /**
   * Get all the defined names in the workbook.
   * @returns {FDefinedName[]} All the defined names in the workbook
   * @example
   * ```ts
   * // The code below gets all the defined names in the workbook
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const definedNames = fWorkbook.getDefinedNames();
   * console.log(definedNames);
   * ```
   */
  getDefinedNames() {
    const definedNames = this._definedNamesService.getDefinedNameMap(this.id);
    if (!definedNames) {
      return [];
    }
    return Object.values(definedNames).map((definedName) => {
      return this._injector.createInstance(FDefinedName, { ...definedName, unitId: this.id });
    });
  }
  /**
   * Insert a defined name.
   * @param {string} name The name of the defined name to insert
   * @param {string} formulaOrRefString The formula(=sum(A2:b10)) or reference(A1) string of the defined name to insert
   * @returns {FWorkbook} The current FWorkbook instance
   * @example
   * ```ts
   * // The code below inserts a defined name
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * fWorkbook.insertDefinedName('MyDefinedName', 'Sheet1!A1');
   * ```
   */
  insertDefinedName(name, formulaOrRefString) {
    const definedNameBuilder = this._injector.createInstance(FDefinedNameBuilder);
    const param = definedNameBuilder.setName(name).setRef(formulaOrRefString).build();
    param.localSheetId = SCOPE_WORKBOOK_VALUE_DEFINED_NAME;
    this.insertDefinedNameBuilder(param);
    return this;
  }
  /**
   * Delete the defined name with the given name.
   * @param {string} name The name of the defined name to delete
   * @returns {boolean} true if the defined name was deleted, false otherwise
   * @example
   * ```ts
   * // The code below deletes the defined name with the given name
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * fWorkbook.deleteDefinedName('MyDefinedName');
   * ```
   */
  deleteDefinedName(name) {
    const definedName = this.getDefinedName(name);
    if (definedName) {
      definedName.delete();
      return true;
    }
    return false;
  }
  /**
   * Insert a defined name by builder param.
   * @param {ISetDefinedNameMutationParam} param The param to insert the defined name
   * @returns {void}
   * @example
   * ```ts
   * // The code below inserts a defined name by builder param
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const definedNameBuilder = univerAPI.newDefinedName()
   *   .setRef('Sheet1!$A$1')
   *   .setName('MyDefinedName')
   *   .setComment('This is a comment')
   *   .build();
   * fWorkbook.insertDefinedNameBuilder(definedNameBuilder);
   * ```
   */
  insertDefinedNameBuilder(param) {
    param.unitId = this.getId();
    this._commandService.syncExecuteCommand(SetDefinedNameCommand.id, param);
  }
  /**
   * Update the defined name with the given name.
   * @param {ISetDefinedNameMutationParam} param The param to insert the defined name
   * @returns {void}
   * @example
   * ```ts
   * // The code below updates the defined name with the given name
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const definedNameBuilder = fWorkbook.getDefinedName('MyDefinedName').toBuilder();
   * const param = definedNameBuilder.setRef('Sheet1!A2')
   *   .setName('NewDefinedName')
   *   .build();
   * fWorkbook.updateDefinedNameBuilder(param);
   * ```
   */
  updateDefinedNameBuilder(param) {
    this._commandService.syncExecuteCommand(SetDefinedNameCommand.id, param);
  }
  /**
   * Gets the registered range themes.
   * @returns {string[]} The name list of registered range themes.
   * @example
   * ```ts
   * // The code below gets the registered range themes
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const themes = fWorkbook.getRegisteredRangeThemes();
   * console.log(themes);
   * ```
   */
  getRegisteredRangeThemes() {
    return this._injector.get(SheetRangeThemeService).getRegisteredRangeThemes();
  }
  /**
   * Register a custom range theme style.
   * @param {RangeThemeStyle} rangeThemeStyle The range theme style to register
   * @returns {void}
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const rangeThemeStyle = fWorkbook.createRangeThemeStyle('MyTheme', {
   *   secondRowStyle: {
   *     bg: {
   *       rgb: 'rgb(214,231,241)',
   *     },
   *   },
   * });
   * fWorkbook.registerRangeTheme(rangeThemeStyle);
   * ```
   */
  registerRangeTheme(rangeThemeStyle) {
    this._commandService.syncExecuteCommand(RegisterWorksheetRangeThemeStyleCommand.id, {
      unitId: this.getId(),
      rangeThemeStyle
    });
  }
  /**
   * Unregister a custom range theme style.
   * @param {string} themeName The name of the theme to unregister
   * @returns {void}
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * fWorkbook.unregisterRangeTheme('MyTheme');
   * ```
   */
  unregisterRangeTheme(themeName) {
    this._commandService.syncExecuteCommand(UnregisterWorksheetRangeThemeStyleCommand.id, {
      unitId: this.getId(),
      themeName
    });
  }
  /**
   * Create a range theme style.
   * @param {string} themeName - The name of the theme to register
   * @param {Omit<IRangeThemeStyleJSON, 'name'>} themeStyleJson - The theme style json to register
   * @returns {RangeThemeStyle} - The created range theme style
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const rangeThemeStyle = fWorkbook.createRangeThemeStyle('MyTheme', {
   *   secondRowStyle: {
   *     bg: {
   *       rgb: 'rgb(214,231,241)',
   *     },
   *   },
   * });
   * console.log(rangeThemeStyle);
   * ```
   */
  createRangeThemeStyle(themeName, themeStyleJson) {
    return new RangeThemeStyle(themeName, themeStyleJson);
  }
  /**
   * Set custom metadata of workbook
   * @param {CustomData | undefined} custom custom metadata
   * @returns {FWorkbook} FWorkbook
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * fWorkbook.setCustomMetadata({ key: 'value' });
   * ```
   */
  setCustomMetadata(custom) {
    this._workbook.setCustomMetadata(custom);
    return this;
  }
  /**
   * Get custom metadata of workbook
   * @returns {CustomData | undefined} custom metadata
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const custom = fWorkbook.getCustomMetadata();
   * console.log(custom);
   * ```
   */
  getCustomMetadata() {
    return this._workbook.getCustomMetadata();
  }
};
FWorkbook = __decorateClass([
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, Inject(IResourceLoaderService)),
  __decorateParam(3, Inject(SheetsSelectionsService)),
  __decorateParam(4, IUniverInstanceService),
  __decorateParam(5, ICommandService),
  __decorateParam(6, IPermissionService),
  __decorateParam(7, ILogService),
  __decorateParam(8, Inject(LocaleService)),
  __decorateParam(9, IDefinedNamesService)
], FWorkbook);

// ../packages/sheets/src/facade/f-univer.ts
var FUniverSheetsMixin = class extends FUniver {
  getCommandSheetTarget(commandInfo) {
    var _a;
    const params = commandInfo.params;
    if (!params) return this.getActiveSheet();
    const workbook = params.unitId ? this.getUniverSheet(params.unitId) : (_a = this.getActiveWorkbook) == null ? void 0 : _a.call(this);
    if (!workbook) {
      return;
    }
    const worksheet = workbook.getSheetBySheetId(params.subUnitId || params.sheetId) || workbook.getActiveSheet();
    if (!worksheet) {
      return;
    }
    return { workbook, worksheet };
  }
  getSheetTarget(unitId, subUnitId) {
    const workbook = this.getUniverSheet(unitId);
    if (!workbook) {
      return;
    }
    const worksheet = workbook.getSheetBySheetId(subUnitId);
    if (!worksheet) {
      return;
    }
    return { workbook, worksheet };
  }
  _initWorkbookEvent(injector) {
    const univerInstanceService = injector.get(IUniverInstanceService);
    this.registerEventHandler(
      this.Event.WorkbookDisposed,
      () => univerInstanceService.unitDisposed$.subscribe((unit) => {
        if (unit.type === O.UNIVER_SHEET) {
          this.fireEvent(this.Event.WorkbookDisposed, {
            unitId: unit.getUnitId(),
            unitType: unit.type,
            snapshot: unit.getSnapshot()
          });
        }
      })
    );
    this.registerEventHandler(
      this.Event.WorkbookCreated,
      () => univerInstanceService.unitAdded$.subscribe((unit) => {
        if (unit.type === O.UNIVER_SHEET) {
          const workbook = unit;
          const workbookUnit = injector.createInstance(FWorkbook, workbook);
          this.fireEvent(this.Event.WorkbookCreated, {
            unitId: unit.getUnitId(),
            type: unit.type,
            workbook: workbookUnit,
            unit: workbookUnit
          });
        }
      })
    );
  }
  /**
   * @ignore
   */
  // eslint-disable-next-line max-lines-per-function
  _initialize(injector) {
    const commandService = injector.get(ICommandService);
    this.registerEventHandler(
      this.Event.BeforeSheetCreate,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        var _a;
        if (commandInfo.id === InsertSheetCommand.id) {
          const params = commandInfo.params;
          const { unitId, index, sheet } = params || {};
          const workbook = unitId ? this.getUniverSheet(unitId) : (_a = this.getActiveWorkbook) == null ? void 0 : _a.call(this);
          if (!workbook) {
            return;
          }
          const eventParams = {
            workbook,
            index,
            sheet
          };
          this.fireEvent(this.Event.BeforeSheetCreate, eventParams);
          if (eventParams.cancel) {
            throw new CanceledError();
          }
        }
      })
    );
    this.registerEventHandler(
      this.Event.BeforeActiveSheetChange,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        var _a;
        if (commandInfo.id === SetWorksheetActiveOperation.id) {
          const { subUnitId: sheetId, unitId } = commandInfo.params;
          const workbook = unitId ? this.getUniverSheet(unitId) : (_a = this.getActiveWorkbook) == null ? void 0 : _a.call(this);
          if (!workbook || !sheetId) return;
          const activeSheet = workbook.getSheetBySheetId(sheetId);
          const oldActiveSheet = workbook.getActiveSheet();
          if (!activeSheet || !oldActiveSheet) return;
          const eventParams = {
            workbook,
            activeSheet,
            oldActiveSheet
          };
          this.fireEvent(this.Event.BeforeActiveSheetChange, eventParams);
          if (eventParams.cancel) {
            throw new CanceledError();
          }
        }
      })
    );
    this.registerEventHandler(
      this.Event.BeforeSheetDelete,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        if (commandInfo.id === RemoveSheetCommand.id) {
          const target = this.getCommandSheetTarget(commandInfo);
          if (!target) return;
          const { workbook, worksheet } = target;
          const eventParams = {
            workbook,
            worksheet
          };
          this.fireEvent(this.Event.BeforeSheetDelete, eventParams);
          if (eventParams.cancel) {
            throw new CanceledError();
          }
        }
      })
    );
    this.registerEventHandler(
      this.Event.BeforeSheetMove,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        if (commandInfo.id === SetWorksheetOrderMutation.id) {
          const { fromOrder, toOrder } = commandInfo.params;
          const target = this.getCommandSheetTarget(commandInfo);
          if (!target) return;
          const eventParams = {
            workbook: target.workbook,
            worksheet: target.worksheet,
            newIndex: toOrder,
            oldIndex: fromOrder
          };
          this.fireEvent(this.Event.BeforeSheetMove, eventParams);
          if (eventParams.cancel) {
            throw new CanceledError();
          }
        }
      })
    );
    this.registerEventHandler(
      this.Event.BeforeSheetNameChange,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        if (commandInfo.id === SetWorksheetNameCommand.id) {
          const { name } = commandInfo.params;
          const target = this.getCommandSheetTarget(commandInfo);
          if (!target) return;
          const eventParams = {
            workbook: target.workbook,
            worksheet: target.worksheet,
            newName: name,
            oldName: target.worksheet.getSheetName()
          };
          this.fireEvent(this.Event.BeforeSheetNameChange, eventParams);
          if (eventParams.cancel) {
            throw new CanceledError();
          }
        }
      })
    );
    this.registerEventHandler(
      this.Event.BeforeSheetTabColorChange,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        if (commandInfo.id === SetTabColorMutation.id) {
          const { color } = commandInfo.params;
          const target = this.getCommandSheetTarget(commandInfo);
          if (!target) return;
          const eventParams = {
            workbook: target.workbook,
            worksheet: target.worksheet,
            newColor: color,
            oldColor: target.worksheet.getTabColor()
          };
          this.fireEvent(this.Event.BeforeSheetTabColorChange, eventParams);
          if (eventParams.cancel) {
            throw new CanceledError();
          }
        }
      })
    );
    this.registerEventHandler(
      this.Event.BeforeSheetHideChange,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        if (commandInfo.id === SetWorksheetHideMutation.id) {
          const { hidden } = commandInfo.params;
          const target = this.getCommandSheetTarget(commandInfo);
          if (!target) return;
          const eventParams = {
            workbook: target.workbook,
            worksheet: target.worksheet,
            hidden: Boolean(hidden)
          };
          this.fireEvent(this.Event.BeforeSheetHideChange, eventParams);
          if (eventParams.cancel) {
            throw new CanceledError();
          }
        }
      })
    );
    this.registerEventHandler(
      this.Event.BeforeGridlineColorChange,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        var _a;
        if (commandInfo.id === SetGridlinesColorCommand.id) {
          const target = this.getCommandSheetTarget(commandInfo);
          if (!target) return;
          const eventParams = {
            ...target,
            color: (_a = commandInfo.params) == null ? void 0 : _a.color
          };
          this.fireEvent(this.Event.BeforeGridlineColorChange, eventParams);
          if (eventParams.cancel) {
            throw new CanceledError();
          }
        }
      })
    );
    this.registerEventHandler(
      this.Event.BeforeGridlineEnableChange,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        var _a, _b;
        if (commandInfo.id === ToggleGridlinesCommand.id) {
          const target = this.getCommandSheetTarget(commandInfo);
          if (!target) return;
          const eventParams = {
            ...target,
            enabled: (_b = Boolean((_a = commandInfo.params) == null ? void 0 : _a.showGridlines)) != null ? _b : !target.worksheet.hasHiddenGridLines()
          };
          this.fireEvent(this.Event.BeforeGridlineEnableChange, eventParams);
          if (eventParams.cancel) {
            throw new CanceledError();
          }
        }
      })
    );
    this.registerEventHandler(
      this.Event.SheetValueChanged,
      () => commandService.onCommandExecuted((commandInfo) => {
        if (COMMAND_LISTENER_VALUE_CHANGE.indexOf(commandInfo.id) > -1) {
          const sheet = this.getActiveSheet();
          if (!sheet) return;
          const ranges = getValueChangedEffectedRange(commandInfo).map(
            (range) => {
              var _a, _b;
              return (_b = (_a = this.getWorkbook(range.unitId)) == null ? void 0 : _a.getSheetBySheetId(range.subUnitId)) == null ? void 0 : _b.getRange(range.range);
            }
          ).filter(Boolean);
          if (!ranges.length) return;
          this.fireEvent(this.Event.SheetValueChanged, {
            payload: commandInfo,
            effectedRanges: ranges
          });
        }
      })
    );
    this.registerEventHandler(
      this.Event.SheetCreated,
      () => commandService.onCommandExecuted((commandInfo) => {
        var _a;
        if (commandInfo.id === InsertSheetCommand.id) {
          const params = commandInfo.params;
          const { unitId } = params || {};
          const workbook = unitId ? this.getUniverSheet(unitId) : (_a = this.getActiveWorkbook) == null ? void 0 : _a.call(this);
          if (!workbook) {
            return;
          }
          const worksheet = workbook.getActiveSheet();
          if (!worksheet) {
            return;
          }
          const eventParams = {
            workbook,
            worksheet
          };
          this.fireEvent(
            this.Event.SheetCreated,
            eventParams
          );
        }
      })
    );
    this.registerEventHandler(
      this.Event.ActiveSheetChanged,
      () => commandService.onCommandExecuted((commandInfo) => {
        if (commandInfo.id === SetWorksheetActiveOperation.id) {
          const target = this.getActiveSheet();
          if (!target) return;
          const { workbook, worksheet: activeSheet } = target;
          this._fireActiveSheetChanged(workbook, activeSheet);
        }
      })
    );
    this.registerEventHandler(
      this.Event.SheetDeleted,
      () => commandService.onCommandExecuted((commandInfo) => {
        var _a;
        if (commandInfo.id === RemoveSheetCommand.id) {
          const { subUnitId: sheetId, unitId } = commandInfo.params;
          const workbook = unitId ? this.getUniverSheet(unitId) : (_a = this.getActiveWorkbook) == null ? void 0 : _a.call(this);
          if (!workbook || !sheetId) return;
          this._fireSheetDeleted(workbook, sheetId);
        }
      })
    );
    this.registerEventHandler(
      this.Event.SheetMoved,
      () => commandService.onCommandExecuted((commandInfo) => {
        if (commandInfo.id === SetWorksheetOrderMutation.id) {
          const { toOrder: toIndex } = commandInfo.params;
          const target = this.getCommandSheetTarget(commandInfo);
          if (!target) return;
          this._fireSheetMoved(target.workbook, target.worksheet, toIndex);
        }
      })
    );
    this.registerEventHandler(
      this.Event.SheetNameChanged,
      () => commandService.onCommandExecuted((commandInfo) => {
        if (commandInfo.id === SetWorksheetNameCommand.id) {
          const { name } = commandInfo.params;
          const target = this.getCommandSheetTarget(commandInfo);
          if (!target) return;
          this._fireSheetNameChanged(target.workbook, target.worksheet, name);
        }
      })
    );
    this.registerEventHandler(
      this.Event.SheetTabColorChanged,
      () => commandService.onCommandExecuted((commandInfo) => {
        if (commandInfo.id === SetTabColorMutation.id) {
          const { color } = commandInfo.params;
          const target = this.getCommandSheetTarget(commandInfo);
          if (!target) return;
          this._fireSheetTabColorChanged(target.workbook, target.worksheet, color);
        }
      })
    );
    this.registerEventHandler(
      this.Event.SheetHideChanged,
      () => commandService.onCommandExecuted((commandInfo) => {
        if (commandInfo.id === SetWorksheetHideMutation.id) {
          const { hidden } = commandInfo.params;
          const target = this.getCommandSheetTarget(commandInfo);
          if (!target) return;
          this._fireSheetHideChanged(target.workbook, target.worksheet, !!hidden);
        }
      })
    );
    this.registerEventHandler(
      this.Event.GridlineChanged,
      () => commandService.onCommandExecuted((commandInfo) => {
        if (commandInfo.id === SetGridlinesColorCommand.id || commandInfo.id === ToggleGridlinesCommand.id) {
          const target = this.getCommandSheetTarget(commandInfo);
          if (!target) return;
          this.fireEvent(this.Event.GridlineChanged, {
            ...target,
            enabled: !target.worksheet.hasHiddenGridLines(),
            color: target.worksheet.getGridLinesColor()
          });
        }
      })
    );
    this._initWorkbookEvent(injector);
  }
  createUniverSheet(data, options) {
    const instanceService = this._injector.get(IUniverInstanceService);
    const workbook = instanceService.createUnit(O.UNIVER_SHEET, data, options);
    return this._injector.createInstance(FWorkbook, workbook);
  }
  createWorkbook(data, options) {
    return this.createUniverSheet(data, options);
  }
  getActiveWorkbook() {
    const workbook = this._univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET);
    if (!workbook) {
      return null;
    }
    return this._injector.createInstance(FWorkbook, workbook);
  }
  getActiveUniverSheet() {
    return this.getActiveWorkbook();
  }
  getUniverSheet(id) {
    const workbook = this._univerInstanceService.getUnit(id, O.UNIVER_SHEET);
    if (!workbook) {
      return null;
    }
    return this._injector.createInstance(FWorkbook, workbook);
  }
  getWorkbook(id) {
    return this.getUniverSheet(id);
  }
  getPermission() {
    return this._injector.createInstance(FPermission);
  }
  onUniverSheetCreated(callback) {
    const subscription = this._univerInstanceService.getTypeOfUnitAdded$(O.UNIVER_SHEET).subscribe((workbook) => {
      const fworkbook = this._injector.createInstance(FWorkbook, workbook);
      callback(fworkbook);
    });
    return toDisposable(subscription);
  }
  newDefinedName() {
    return this._injector.createInstance(FDefinedNameBuilder);
  }
  getActiveSheet() {
    const workbook = this.getActiveWorkbook();
    if (!workbook) {
      return null;
    }
    const worksheet = workbook.getActiveSheet();
    if (!worksheet) {
      return null;
    }
    return { workbook, worksheet };
  }
  _fireActiveSheetChanged(workbook, newActiveSheet) {
    this.fireEvent(this.Event.ActiveSheetChanged, {
      workbook,
      activeSheet: newActiveSheet
    });
  }
  _fireSheetDeleted(workbook, sheetId) {
    this.fireEvent(this.Event.SheetDeleted, {
      workbook,
      sheetId
    });
  }
  _fireSheetMoved(workbook, worksheet, toIndex) {
    this.fireEvent(this.Event.SheetMoved, {
      workbook,
      worksheet,
      newIndex: toIndex
    });
  }
  _fireSheetNameChanged(workbook, worksheet, newName) {
    this.fireEvent(this.Event.SheetNameChanged, {
      workbook,
      worksheet,
      newName
    });
  }
  _fireSheetTabColorChanged(workbook, worksheet, newColor) {
    this.fireEvent(this.Event.SheetTabColorChanged, {
      workbook,
      worksheet,
      newColor
    });
  }
  _fireSheetHideChanged(workbook, worksheet, hidden) {
    this.fireEvent(this.Event.SheetHideChanged, {
      workbook,
      worksheet,
      hidden
    });
  }
};
FUniver.extend(FUniverSheetsMixin);

// ../packages/sheets/src/facade/f-enum.ts
var FSheetsEnum = class {
  get SheetValueChangeType() {
    return SheetValueChangeType;
  }
  get SheetSkeletonChangeType() {
    return SheetSkeletonChangeType;
  }
  get SplitDelimiterType() {
    return SplitDelimiterEnum;
  }
};
FEnum.extend(FSheetsEnum);

// ../packages/sheets/src/facade/f-event.ts
var FSheetEventName = class {
  get SheetCreated() {
    return "SheetCreated";
  }
  get BeforeSheetCreate() {
    return "BeforeSheetCreate";
  }
  get WorkbookCreated() {
    return "WorkbookCreated";
  }
  get WorkbookDisposed() {
    return "WorkbookDisposed";
  }
  get GridlineChanged() {
    return "GridlineChanged";
  }
  get BeforeGridlineEnableChange() {
    return "BeforeGridlineEnableChange";
  }
  get BeforeGridlineColorChange() {
    return "BeforeGridlineColorChange";
  }
  get BeforeActiveSheetChange() {
    return "BeforeActiveSheetChange";
  }
  get ActiveSheetChanged() {
    return "ActiveSheetChanged";
  }
  get SheetDeleted() {
    return "SheetDeleted";
  }
  get BeforeSheetDelete() {
    return "BeforeSheetDelete";
  }
  get SheetMoved() {
    return "SheetMoved";
  }
  get BeforeSheetMove() {
    return "BeforeSheetMove";
  }
  get SheetNameChanged() {
    return "SheetNameChanged";
  }
  get BeforeSheetNameChange() {
    return "BeforeSheetNameChange";
  }
  get SheetTabColorChanged() {
    return "SheetTabColorChanged";
  }
  get BeforeSheetTabColorChange() {
    return "BeforeSheetTabColorChange";
  }
  get SheetHideChanged() {
    return "SheetHideChanged";
  }
  get BeforeSheetHideChange() {
    return "BeforeSheetHideChange";
  }
  get SheetValueChanged() {
    return "SheetValueChanged";
  }
};
FEventName.extend(FSheetEventName);

// ../packages/sheets/src/facade/f-sheet-hooks.ts
var FSheetHooks = class extends FBase {
  constructor(_injector) {
    super();
    this._injector = _injector;
  }
};
FSheetHooks = __decorateClass([
  __decorateParam(0, Inject(Injector))
], FSheetHooks);

// ../packages/ui/src/facade/f-menu-builder.ts
var FMenuBase = class extends FBase {
  /**
   * Append the menu to any menu position on Univer UI.
   * @param {string | string[]} path - Some predefined path to append the menu. The paths can be an array,
   * or an array joined by `|` separator. Since lots of submenus reuse the same name,
   * you may need to specify their parent menus as well.
   *
   * @example
   * ```typescript
   * // This menu item will appear on every `contextMenu.others` section.
   * univerAPI.createMenu({
   *   id: 'custom-menu-id-1',
   *   title: 'Custom Menu 1',
   *   action: () => {
   *     console.log('Custom Menu 1 clicked');
   *   },
   * }).appendTo('contextMenu.others');
   *
   * // This menu item will only appear on the `contextMenu.others` section on the main area.
   * univerAPI.createMenu({
   *   id: 'custom-menu-id-2',
   *   title: 'Custom Menu 2',
   *   action: () => {
   *     console.log('Custom Menu 2 clicked');
   *   },
   * }).appendTo(['contextMenu.mainArea', 'contextMenu.others']);
   * ```
   */
  appendTo(path) {
    const paths = typeof path === "string" ? path.split("|") : path;
    const len = paths.length;
    const menuConfig = {};
    let obj = menuConfig;
    const schema = this.__getSchema();
    paths.forEach((p, index) => {
      if (index === len - 1) {
        obj[p] = schema;
      } else {
        obj[p] = {};
      }
      obj = obj[p];
    });
    this._menuManagerService.mergeMenu(menuConfig);
  }
};
var FMenu = class extends FMenuBase {
  constructor(_item, _injector, _commandService, _menuManagerService) {
    super();
    this._item = _item;
    this._injector = _injector;
    this._commandService = _commandService;
    this._menuManagerService = _menuManagerService;
    __publicField(this, "_commandToRegister", /* @__PURE__ */ new Map());
    __publicField(this, "_buildingSchema");
    const commandId = typeof _item.action === "string" ? _item.action : Tools.generateRandomId(12);
    if (commandId !== _item.action) {
      this._commandToRegister.set(commandId, _item.action);
    }
    this._buildingSchema = {
      // eslint-disable-next-line ts/explicit-function-return-type
      menuItemFactory: () => ({
        id: _item.id,
        type: 0 /* BUTTON */,
        // we only support button for now
        icon: _item.icon,
        title: _item.title,
        tooltip: _item.tooltip,
        commandId
      })
    };
    if (typeof _item.order !== "undefined") {
      this._buildingSchema.order = _item.order;
    }
  }
  /**
   * @ignore
   */
  __getSchema() {
    this._commandToRegister.forEach((command, id) => {
      if (!this._commandService.hasCommand(id)) {
        this._commandService.registerCommand({
          id,
          type: 0 /* COMMAND */,
          handler: command
        });
      }
    });
    return { [this._item.id]: this._buildingSchema };
  }
};
__publicField(FMenu, "RibbonStartGroup", RibbonStartGroup);
__publicField(FMenu, "RibbonPosition", RibbonPosition);
__publicField(FMenu, "MenuManagerPosition", MenuManagerPosition);
FMenu = __decorateClass([
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, ICommandService),
  __decorateParam(3, IMenuManagerService)
], FMenu);
var FSubmenu = class extends FMenuBase {
  constructor(_item, _injector, _menuManagerService) {
    super();
    this._item = _item;
    this._injector = _injector;
    this._menuManagerService = _menuManagerService;
    __publicField(this, "_menuByGroups", []);
    __publicField(this, "_submenus", []);
    __publicField(this, "_buildingSchema");
    this._buildingSchema = {
      // eslint-disable-next-line ts/explicit-function-return-type
      menuItemFactory: () => ({
        id: _item.id,
        type: 3 /* SUBITEMS */,
        icon: _item.icon,
        title: _item.title,
        tooltip: _item.tooltip
      })
    };
    if (typeof _item.order !== "undefined") {
      this._buildingSchema.order = _item.order;
    }
  }
  /**
   * Add a menu to the submenu. It can be a {@link FMenu} or a {@link FSubmenu}.
   * @param {FMenu | FSubmenu} submenu - Menu to add to the submenu.
   * @returns {FSubmenu} The FSubmenu itself for chaining calls.
   * @example
   * ```typescript
   * // Create two leaf menus.
   * const menu1 = univerAPI.createMenu({
   *   id: 'submenu-nested-1',
   *   title: 'Item 1',
   *   action: () => {
   *     console.log('Item 1 clicked');
   *   }
   * });
   * const menu2 = univerAPI.createMenu({
   *   id: 'submenu-nested-2',
   *   title: 'Item 2',
   *   action: () => {
   *     console.log('Item 2 clicked');
   *   }
   * });
   *
   * // Add the leaf menus to a submenu.
   * const submenu = univerAPI.createSubmenu({ id: 'submenu-nested', title: 'Nested Submenu' })
   *   .addSubmenu(menu1)
   *   .addSeparator()
   *   .addSubmenu(menu2);
   *
   * // Create a root submenu append to the `contextMenu.others` section.
   * univerAPI.createSubmenu({ id: 'custom-submenu', title: 'Custom Submenu' })
   *   .addSubmenu(submenu)
   *   .appendTo('contextMenu.others');
   * ```
   */
  addSubmenu(submenu) {
    this._submenus.push(submenu);
    return this;
  }
  /**
   * Add a separator to the submenu.
   * @returns {FSubmenu} The FSubmenu itself for chaining calls.
   * @example
   * ```typescript
   * // Create two leaf menus.
   * const menu1 = univerAPI.createMenu({
   *   id: 'submenu-nested-1',
   *   title: 'Item 1',
   *   action: () => {
   *     console.log('Item 1 clicked');
   *   }
   * });
   * const menu2 = univerAPI.createMenu({
   *   id: 'submenu-nested-2',
   *   title: 'Item 2',
   *   action: () => {
   *     console.log('Item 2 clicked');
   *   }
   * });
   *
   * // Add the leaf menus to a submenu and add a separator between them.
   * // Append the submenu to the `contextMenu.others` section.
   * univerAPI.createSubmenu({ id: 'submenu-nested', title: 'Nested Submenu' })
   *   .addSubmenu(menu1)
   *   .addSeparator()
   *   .addSubmenu(menu2)
   *   .appendTo('contextMenu.others');
   * ```
   */
  addSeparator() {
    this._menuByGroups.push(this._submenus);
    this._submenus = [];
    return this;
  }
  /**
   * @ignore
   */
  __getSchema() {
    const schema = {};
    this.addSeparator();
    this._menuByGroups.forEach((group, index) => {
      const groupSchema = {};
      group.forEach((menu) => {
        Object.assign(groupSchema, menu.__getSchema());
      });
      schema[`${this._item.id}-group-${index}`] = groupSchema;
    });
    return { [this._item.id]: Object.assign(this._buildingSchema, schema) };
  }
};
FSubmenu = __decorateClass([
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IMenuManagerService)
], FSubmenu);

// ../packages/ui/src/facade/f-shortcut.ts
var FShortcut = class extends FBase {
  constructor(_injector, _renderManagerService, _univerInstanceService, _shortcutService) {
    super();
    this._injector = _injector;
    this._renderManagerService = _renderManagerService;
    this._univerInstanceService = _univerInstanceService;
    this._shortcutService = _shortcutService;
    __publicField(this, "_forceDisableDisposable", null);
  }
  /**
   * Enable shortcuts of Univer.
   * @returns {FShortcut} The Facade API instance itself for chaining.
   *
   * @example
   * ```typescript
   * fShortcut.enableShortcut(); // Use the FShortcut instance used by disableShortcut before, do not create a new instance
   * ```
   */
  enableShortcut() {
    var _a;
    (_a = this._forceDisableDisposable) == null ? void 0 : _a.dispose();
    this._forceDisableDisposable = null;
    return this;
  }
  /**
   * Disable shortcuts of Univer.
   * @returns {FShortcut} The Facade API instance itself for chaining.
   *
   * @example
   * ```typescript
   * const fShortcut = univerAPI.getShortcut();
   * fShortcut.disableShortcut();
   * ```
   */
  disableShortcut() {
    if (!this._forceDisableDisposable) {
      this._forceDisableDisposable = this._shortcutService.forceDisable();
    }
    return this;
  }
  /**
   * Trigger shortcut of Univer by a KeyboardEvent and return the matched shortcut item.
   * @param {KeyboardEvent} e - The KeyboardEvent to trigger.
   * @returns {IShortcutItem<object> | undefined} The matched shortcut item.
   *
   * @example
   * ```typescript
   * // Assum the current sheet is empty sheet.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1');
   *
   * // Set A1 cell active and set value to 'Hello Univer'.
   * fRange.activate();
   * fRange.setValue('Hello Univer');
   * console.log(fRange.getCellStyle().bold); // false
   *
   * // Set A1 cell bold by shortcut.
   * const fShortcut = univerAPI.getShortcut();
   * const pseudoEvent = new KeyboardEvent('keydown', {
   *   key: 'b',
   *   ctrlKey: true,
   *   keyCode: univerAPI.Enum.KeyCode.B
   * });
   * const ifShortcutItem = fShortcut.triggerShortcut(pseudoEvent);
   * if (ifShortcutItem) {
   *   const commandId = ifShortcutItem.id;
   *   console.log(fRange.getCellStyle().bold); // true
   * }
   * ```
   */
  triggerShortcut(e) {
    const workbook = this._univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET);
    if (!workbook) {
      return;
    }
    const renderUnit = this._renderManagerService.getRenderById(workbook.getUnitId());
    if (!renderUnit) {
      return;
    }
    const canvas = renderUnit.engine.getCanvasElement();
    canvas.dispatchEvent(e);
    return this._shortcutService.dispatch(e);
  }
  /**
   * Dispatch a KeyboardEvent to the shortcut service and return the matched shortcut item.
   * @param {KeyboardEvent} e - The KeyboardEvent to dispatch.
   * @returns {IShortcutItem<object> | undefined} The matched shortcut item.
   *
   * @example
   * ```typescript
   * const fShortcut = univerAPI.getShortcut();
   * const pseudoEvent = new KeyboardEvent('keydown', { key: 's', ctrlKey: true });
   * const ifShortcutItem = fShortcut.dispatchShortcutEvent(pseudoEvent);
   * if (ifShortcutItem) {
   *   const commandId = ifShortcutItem.id;
   *   // Do something with the commandId.
   * }
   * ```
   */
  dispatchShortcutEvent(e) {
    return this._shortcutService.dispatch(e);
  }
};
FShortcut = __decorateClass([
  __decorateParam(0, Inject(Injector)),
  __decorateParam(1, Inject(IRenderManagerService)),
  __decorateParam(2, IUniverInstanceService),
  __decorateParam(3, IShortcutService)
], FShortcut);

// ../packages/ui/src/facade/f-univer.ts
var FUniverUIMixin = class extends FUniver {
  getURL() {
    return new URL(window.location.href);
  }
  getShortcut() {
    return this._injector.createInstance(FShortcut);
  }
  copy() {
    return this._commandService.executeCommand(CopyCommand.id);
  }
  paste() {
    return this._commandService.executeCommand(PasteCommand.id);
  }
  createMenu(menuItem) {
    return this._injector.createInstance(FMenu, menuItem);
  }
  createSubmenu(submenuItem) {
    return this._injector.createInstance(FSubmenu, submenuItem);
  }
  openSiderbar(params) {
    const sideBarService = this._injector.get(ISidebarService);
    return sideBarService.open(params);
  }
  openSidebar(params) {
    return this.openSiderbar(params);
  }
  openDialog(dialog) {
    const dialogService = this._injector.get(IDialogService);
    const disposable = dialogService.open({
      ...dialog,
      onClose: () => {
        disposable.dispose();
      }
    });
    return disposable;
  }
  getComponentManager() {
    return this._injector.get(ComponentManager);
  }
  showMessage(options) {
    const messageService = this._injector.get(IMessageService);
    messageService.show(options);
    return this;
  }
  setUIVisible(ui, visible) {
    const uiPartService = this._injector.get(IUIPartsService);
    uiPartService.setUIVisible(ui, visible);
    return this;
  }
  isUIVisible(ui) {
    const uiPartService = this._injector.get(IUIPartsService);
    return uiPartService.isUIVisible(ui);
  }
  registerUIPart(key, component) {
    const uiPartService = this._injector.get(IUIPartsService);
    return uiPartService.registerComponent(key, () => connectInjector(component, this._injector));
  }
  registerComponent(name, component, options) {
    const componentManager = this._injector.get(ComponentManager);
    return this.disposeWithMe(componentManager.register(name, component, options));
  }
  setCurrent(unitId) {
    const rendererManagerService = this._injector.get(IRenderManagerService);
    const renderUnit = rendererManagerService.getRenderById(unitId);
    if (!renderUnit) {
      throw new Error("Unit not found");
    }
    this._univerInstanceService.setCurrentUnitForType(unitId);
  }
};
FUniver.extend(FUniverUIMixin);

// ../packages/ui/src/facade/f-hooks.ts
var FHooksSheetsMixin = class extends FHooks {
  onBeforeCopy(callback) {
    const commandService = this._injector.get(ICommandService);
    return commandService.beforeCommandExecuted((command) => {
      if (command.id === CopyCommand.id) {
        callback();
      }
    });
  }
  onCopy(callback) {
    const commandService = this._injector.get(ICommandService);
    return commandService.onCommandExecuted((command) => {
      if (command.id === CopyCommand.id) {
        callback();
      }
    });
  }
  onBeforePaste(callback) {
    const commandService = this._injector.get(ICommandService);
    return commandService.beforeCommandExecuted((command) => {
      if (command.id === PasteCommand.id) {
        callback();
      }
    });
  }
  onPaste(callback) {
    const commandService = this._injector.get(ICommandService);
    return commandService.onCommandExecuted((command) => {
      if (command.id === PasteCommand.id || command.id === SheetPasteShortKeyCommandName) {
        callback();
      }
    });
  }
};
FHooks.extend(FHooksSheetsMixin);

// ../packages/ui/src/facade/f-enum.ts
var FUIEnum = class extends FEnum {
  get BuiltInUIPart() {
    return BuiltInUIPart;
  }
  get KeyCode() {
    return KeyCode;
  }
};
FEnum.extend(FUIEnum);

// ../packages/docs-ui/src/facade/f-document.ts
var FDocument = class {
  constructor(_documentDataModel, _injector, _univerInstanceService, _commandService, _resourceManagerService, _renderManagerService) {
    this._documentDataModel = _documentDataModel;
    this._injector = _injector;
    this._univerInstanceService = _univerInstanceService;
    this._commandService = _commandService;
    this._resourceManagerService = _resourceManagerService;
    this._renderManagerService = _renderManagerService;
    __publicField(this, "id");
    this.id = this._documentDataModel.getUnitId();
  }
  getId() {
    return this._documentDataModel.getUnitId();
  }
  getName() {
    return this.getSnapshot().title || "";
  }
  getSnapshot() {
    const resources = this._resourceManagerService.getResourcesByType(this.id, O.UNIVER_DOC);
    const snapshot = this._documentDataModel.getSnapshot();
    snapshot.resources = resources;
    return snapshot;
  }
  undo() {
    this._univerInstanceService.focusUnit(this.id);
    return this._commandService.executeCommand(UndoCommand.id);
  }
  redo() {
    this._univerInstanceService.focusUnit(this.id);
    return this._commandService.executeCommand(RedoCommand.id);
  }
  /**
   * Adds the specified text to the end of this text region.
   * @param text - The text to be added to the end of this text region.
   */
  appendText(text) {
    const unitId = this.id;
    const { body } = this.getSnapshot();
    if (!body) {
      throw new Error("The document body is empty");
    }
    const lastPosition = body.dataStream.length - 2;
    const activeRange = {
      startOffset: lastPosition,
      endOffset: lastPosition,
      collapsed: true,
      segmentId: ""
    };
    const { segmentId } = activeRange;
    return this._commandService.executeCommand(InsertCommand.id, {
      unitId,
      body: {
        dataStream: text
      },
      range: activeRange,
      segmentId
    });
  }
  /**
   * Sets the selection to a specified text range in the document.
   * @param startOffset - The starting offset of the selection in the document.
   * @param endOffset - The ending offset of the selection in the document.
   * @example
   * ```typescript
   * document.setSelection(10, 20);
   * ```
   */
  setSelection(startOffset, endOffset) {
    var _a;
    const docSelectionRenderService = (_a = this._renderManagerService.getRenderById(this.getId())) == null ? void 0 : _a.with(DocSelectionRenderService);
    docSelectionRenderService == null ? void 0 : docSelectionRenderService.removeAllRanges();
    docSelectionRenderService == null ? void 0 : docSelectionRenderService.addDocRanges(
      [
        {
          startOffset,
          endOffset,
          rangeType: "TEXT" /* TEXT */
        }
      ],
      true
    );
  }
};
FDocument = __decorateClass([
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IUniverInstanceService),
  __decorateParam(3, ICommandService),
  __decorateParam(4, IResourceManagerService),
  __decorateParam(5, IRenderManagerService)
], FDocument);

// ../packages/docs-ui/src/facade/f-univer.ts
var FUniverDocsMixin = class extends FUniver {
  createUniverDoc(data) {
    const document2 = this._univerInstanceService.createUnit(O.UNIVER_DOC, data);
    return this._injector.createInstance(FDocument, document2);
  }
  getActiveDocument() {
    const document2 = this._univerInstanceService.getCurrentUnitForType(O.UNIVER_DOC);
    if (!document2) {
      return null;
    }
    return this._injector.createInstance(FDocument, document2);
  }
  getUniverDoc(id) {
    const document2 = this._univerInstanceService.getUniverDocInstance(id);
    if (!document2) {
      return null;
    }
    return this._injector.createInstance(FDocument, document2);
  }
};
FUniver.extend(FUniverDocsMixin);

// ../packages/sheets-ui/src/facade/f-univer.ts
var FUniverSheetsUIMixin = class extends FUniver {
  // eslint-disable-next-line max-lines-per-function
  _initSheetUIEvent(injector) {
    const commandService = injector.get(ICommandService);
    this.registerEventHandler(
      this.Event.BeforeSheetEditStart,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        if (commandInfo.id !== SetCellEditVisibleOperation.id) return;
        const target = this.getActiveSheet();
        if (!target) return;
        const { workbook, worksheet } = target;
        const editorBridgeService = injector.get(IEditorBridgeService);
        const params = commandInfo.params;
        const { visible, keycode, eventType } = params;
        const loc = editorBridgeService.getEditLocation();
        if (visible) {
          const eventParams = {
            row: loc.row,
            column: loc.column,
            eventType,
            keycode,
            workbook,
            worksheet,
            isZenEditor: false
          };
          this.fireEvent(this.Event.BeforeSheetEditStart, eventParams);
          if (eventParams.cancel) {
            throw new CanceledError();
          }
        }
      })
    );
    this.registerEventHandler(
      this.Event.BeforeSheetEditEnd,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        if (commandInfo.id !== SetCellEditVisibleOperation.id) return;
        const target = this.getActiveSheet();
        if (!target) return;
        const { workbook, worksheet } = target;
        const editorBridgeService = injector.get(IEditorBridgeService);
        const univerInstanceService = injector.get(IUniverInstanceService);
        const params = commandInfo.params;
        const { visible, keycode, eventType } = params;
        const loc = editorBridgeService.getEditLocation();
        if (!visible) {
          const eventParams = {
            row: loc.row,
            column: loc.column,
            eventType,
            keycode,
            workbook,
            worksheet,
            isZenEditor: false,
            value: RichTextValue.create(univerInstanceService.getUnit(DOCS_NORMAL_EDITOR_UNIT_ID_KEY).getSnapshot()),
            isConfirm: keycode !== 27 /* ESC */
          };
          this.fireEvent(this.Event.BeforeSheetEditEnd, eventParams);
          if (eventParams.cancel) {
            throw new CanceledError();
          }
        }
      })
    );
    this.registerEventHandler(
      this.Event.SheetEditStarted,
      () => commandService.onCommandExecuted((commandInfo) => {
        if (commandInfo.id !== SetCellEditVisibleOperation.id) return;
        const target = this.getCommandSheetTarget(commandInfo);
        if (!target) return;
        const { workbook, worksheet } = target;
        const editorBridgeService = injector.get(IEditorBridgeService);
        const params = commandInfo.params;
        const { visible, keycode, eventType } = params;
        const loc = editorBridgeService.getEditLocation();
        if (visible) {
          const eventParams = {
            row: loc.row,
            column: loc.column,
            eventType,
            keycode,
            workbook,
            worksheet,
            isZenEditor: false
          };
          this.fireEvent(this.Event.SheetEditStarted, eventParams);
        }
      })
    );
    this.registerEventHandler(
      this.Event.SheetEditEnded,
      () => commandService.onCommandExecuted((commandInfo) => {
        if (commandInfo.id !== SetCellEditVisibleOperation.id) return;
        const target = this.getCommandSheetTarget(commandInfo);
        if (!target) return;
        const { workbook, worksheet } = target;
        const editorBridgeService = injector.get(IEditorBridgeService);
        const params = commandInfo.params;
        const { visible, keycode, eventType } = params;
        const loc = editorBridgeService.getEditLocation();
        if (!visible) {
          const eventParams = {
            row: loc.row,
            column: loc.column,
            eventType,
            keycode,
            workbook,
            worksheet,
            isZenEditor: false,
            isConfirm: keycode !== 27 /* ESC */
          };
          this.fireEvent(this.Event.SheetEditEnded, eventParams);
        }
      })
    );
    this.registerEventHandler(
      this.Event.SheetEditChanging,
      () => commandService.onCommandExecuted((commandInfo) => {
        if (commandInfo.id !== RichTextEditingMutation.id) return;
        const target = this.getActiveSheet();
        if (!target) return;
        const { workbook, worksheet } = target;
        const editorBridgeService = injector.get(IEditorBridgeService);
        const univerInstanceService = injector.get(IUniverInstanceService);
        const params = commandInfo.params;
        if (!editorBridgeService.isVisible().visible) return;
        const { unitId } = params;
        if (unitId === DOCS_NORMAL_EDITOR_UNIT_ID_KEY) {
          const { row, column } = editorBridgeService.getEditLocation();
          const eventParams = {
            workbook,
            worksheet,
            row,
            column,
            value: RichTextValue.create(univerInstanceService.getUnit(DOCS_NORMAL_EDITOR_UNIT_ID_KEY).getSnapshot()),
            isZenEditor: false
          };
          this.fireEvent(this.Event.SheetEditChanging, eventParams);
        }
      })
    );
    this.registerEventHandler(
      this.Event.BeforeSheetZoomChange,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        if (commandInfo.id !== SetZoomRatioCommand.id) return;
        const target = this.getCommandSheetTarget(commandInfo);
        if (!target) return;
        const { workbook, worksheet } = target;
        const eventParams = {
          zoom: commandInfo.params.zoomRatio,
          workbook,
          worksheet
        };
        this.fireEvent(this.Event.BeforeSheetZoomChange, eventParams);
        if (eventParams.cancel) {
          throw new CanceledError();
        }
      })
    );
    this.registerEventHandler(
      this.Event.SheetZoomChanged,
      () => commandService.onCommandExecuted((commandInfo) => {
        if (commandInfo.id !== SetZoomRatioCommand.id) return;
        const target = this.getCommandSheetTarget(commandInfo);
        if (!target) return;
        const { workbook, worksheet } = target;
        this.fireEvent(this.Event.SheetZoomChanged, {
          zoom: worksheet.getZoom(),
          workbook,
          worksheet
        });
      })
    );
  }
  // eslint-disable-next-line max-lines-per-function
  _initObserverListener(injector) {
    const renderManagerService = injector.get(IRenderManagerService);
    const lifeCycleService = injector.get(LifecycleService);
    const disposable = new DisposableCollection();
    this.disposeWithMe(lifeCycleService.lifecycle$.subscribe((lifecycle) => {
      if (lifecycle !== 2 /* Rendered */) return;
      disposable.dispose();
      const hoverManagerService = injector.get(HoverManagerService);
      const dragManagerService = injector.get(DragManagerService);
      if (!hoverManagerService) return;
      this.registerEventHandler(
        this.Event.CellClicked,
        () => {
          var _a;
          return (_a = hoverManagerService.currentClickedCell$) == null ? void 0 : _a.pipe(filter((cell) => !!cell)).subscribe((cell) => {
            const baseParams = this.getSheetTarget(cell.location.unitId, cell.location.subUnitId);
            if (!baseParams) return;
            this.fireEvent(this.Event.CellClicked, {
              ...baseParams,
              ...cell,
              row: cell.location.row,
              column: cell.location.col
            });
          });
        }
      );
      this.registerEventHandler(
        this.Event.CellHover,
        () => {
          var _a;
          return (_a = hoverManagerService.currentRichText$) == null ? void 0 : _a.pipe(filter((cell) => !!cell)).subscribe((cell) => {
            const baseParams = this.getSheetTarget(cell.unitId, cell.subUnitId);
            if (!baseParams) return;
            this.fireEvent(this.Event.CellHover, {
              ...baseParams,
              ...cell,
              row: cell.row,
              column: cell.col
            });
          });
        }
      );
      this.registerEventHandler(
        this.Event.CellPointerDown,
        () => {
          var _a;
          return (_a = hoverManagerService.currentPointerDownCell$) == null ? void 0 : _a.pipe(filter((cell) => !!cell)).subscribe((cell) => {
            const baseParams = this.getSheetTarget(cell.unitId, cell.subUnitId);
            if (!baseParams) return;
            this.fireEvent(this.Event.CellPointerDown, {
              ...baseParams,
              ...cell,
              row: cell.row,
              column: cell.col
            });
          });
        }
      );
      this.registerEventHandler(
        this.Event.CellPointerUp,
        () => {
          var _a;
          return (_a = hoverManagerService.currentPointerUpCell$) == null ? void 0 : _a.pipe(filter((cell) => !!cell)).subscribe((cell) => {
            const baseParams = this.getSheetTarget(cell.unitId, cell.subUnitId);
            if (!baseParams) return;
            this.fireEvent(this.Event.CellPointerUp, {
              ...baseParams,
              ...cell,
              row: cell.row,
              column: cell.col
            });
          });
        }
      );
      this.registerEventHandler(
        this.Event.CellPointerMove,
        () => {
          var _a;
          return (_a = hoverManagerService.currentCellPosWithEvent$) == null ? void 0 : _a.pipe(filter((cell) => !!cell)).subscribe((cell) => {
            const baseParams = this.getSheetTarget(cell.unitId, cell.subUnitId);
            if (!baseParams) return;
            this.fireEvent(this.Event.CellPointerMove, {
              ...baseParams,
              ...cell,
              row: cell.row,
              column: cell.col
            });
          });
        }
      );
      this.registerEventHandler(
        this.Event.DragOver,
        () => {
          var _a;
          return (_a = dragManagerService.currentCell$) == null ? void 0 : _a.pipe(filter((cell) => !!cell)).subscribe((cell) => {
            const baseParams = this.getSheetTarget(cell.location.unitId, cell.location.subUnitId);
            if (!baseParams) return;
            this.fireEvent(this.Event.DragOver, {
              ...baseParams,
              ...cell,
              row: cell.location.row,
              column: cell.location.col
            });
          });
        }
      );
      this.registerEventHandler(
        this.Event.Drop,
        () => {
          var _a;
          return (_a = dragManagerService.endCell$) == null ? void 0 : _a.pipe(filter((cell) => !!cell)).subscribe((cell) => {
            const baseParams = this.getSheetTarget(cell.location.unitId, cell.location.subUnitId);
            if (!baseParams) return;
            this.fireEvent(this.Event.Drop, {
              ...baseParams,
              ...cell,
              row: cell.location.row,
              column: cell.location.col
            });
          });
        }
      );
      this.registerEventHandler(
        this.Event.RowHeaderClick,
        () => {
          var _a;
          return (_a = hoverManagerService.currentRowHeaderClick$) == null ? void 0 : _a.pipe(filter((header) => !!header)).subscribe((header) => {
            const baseParams = this.getSheetTarget(header.unitId, header.subUnitId);
            if (!baseParams) return;
            this.fireEvent(this.Event.RowHeaderClick, {
              ...baseParams,
              row: header.index
            });
          });
        }
      );
      this.registerEventHandler(
        this.Event.RowHeaderPointerDown,
        () => {
          var _a;
          return (_a = hoverManagerService.currentRowHeaderPointerDown$) == null ? void 0 : _a.pipe(filter((header) => !!header)).subscribe((header) => {
            const baseParams = this.getSheetTarget(header.unitId, header.subUnitId);
            if (!baseParams) return;
            this.fireEvent(this.Event.RowHeaderPointerDown, {
              ...baseParams,
              row: header.index
            });
          });
        }
      );
      this.registerEventHandler(
        this.Event.RowHeaderPointerUp,
        () => {
          var _a;
          return (_a = hoverManagerService.currentRowHeaderPointerUp$) == null ? void 0 : _a.pipe(filter((header) => !!header)).subscribe((header) => {
            const baseParams = this.getSheetTarget(header.unitId, header.subUnitId);
            if (!baseParams) return;
            this.fireEvent(this.Event.RowHeaderPointerUp, {
              ...baseParams,
              row: header.index
            });
          });
        }
      );
      this.registerEventHandler(
        this.Event.RowHeaderHover,
        () => {
          var _a;
          return (_a = hoverManagerService.currentHoveredRowHeader$) == null ? void 0 : _a.pipe(filter((header) => !!header)).subscribe((header) => {
            const baseParams = this.getSheetTarget(header.unitId, header.subUnitId);
            if (!baseParams) return;
            this.fireEvent(this.Event.RowHeaderHover, {
              ...baseParams,
              row: header.index
            });
          });
        }
      );
      this.registerEventHandler(
        this.Event.ColumnHeaderClick,
        () => {
          var _a;
          return (_a = hoverManagerService.currentColHeaderClick$) == null ? void 0 : _a.pipe(filter((header) => !!header)).subscribe((header) => {
            const baseParams = this.getSheetTarget(header.unitId, header.subUnitId);
            if (!baseParams) return;
            this.fireEvent(this.Event.ColumnHeaderClick, {
              ...baseParams,
              column: header.index
            });
          });
        }
      );
      this.registerEventHandler(
        this.Event.ColumnHeaderPointerDown,
        () => {
          var _a;
          return (_a = hoverManagerService.currentColHeaderPointerDown$) == null ? void 0 : _a.pipe(filter((header) => !!header)).subscribe((header) => {
            const baseParams = this.getSheetTarget(header.unitId, header.subUnitId);
            if (!baseParams) return;
            this.fireEvent(this.Event.ColumnHeaderPointerDown, {
              ...baseParams,
              column: header.index
            });
          });
        }
      );
      this.registerEventHandler(
        this.Event.ColumnHeaderPointerUp,
        () => {
          var _a;
          return (_a = hoverManagerService.currentColHeaderPointerUp$) == null ? void 0 : _a.pipe(filter((header) => !!header)).subscribe((header) => {
            const baseParams = this.getSheetTarget(header.unitId, header.subUnitId);
            if (!baseParams) return;
            this.fireEvent(this.Event.ColumnHeaderPointerUp, {
              ...baseParams,
              column: header.index
            });
          });
        }
      );
      this.registerEventHandler(
        this.Event.ColumnHeaderHover,
        () => {
          var _a;
          return (_a = hoverManagerService.currentHoveredColHeader$) == null ? void 0 : _a.pipe(filter((header) => !!header)).subscribe((header) => {
            const baseParams = this.getSheetTarget(header.unitId, header.subUnitId);
            if (!baseParams) return;
            this.fireEvent(this.Event.ColumnHeaderHover, {
              ...baseParams,
              column: header.index
            });
          });
        }
      );
    }));
    this.disposeWithMe(disposable);
    const unitMap = /* @__PURE__ */ new Map();
    let sheetRenderUnit;
    const combined$ = combineLatest([
      renderManagerService.created$,
      lifeCycleService.lifecycle$
    ]);
    this.disposeWithMe(combined$.subscribe(([created, lifecycle]) => {
      var _a;
      if (created.type === O.UNIVER_SHEET) {
        sheetRenderUnit = created;
      }
      if (lifecycle <= 2 /* Rendered */) return;
      if (!sheetRenderUnit) return;
      const disposable2 = new DisposableCollection();
      const workbook = this.getWorkbook(sheetRenderUnit.unitId);
      if (!workbook) return;
      if (unitMap.get(sheetRenderUnit.unitId)) {
        (_a = unitMap.get(sheetRenderUnit.unitId)) == null ? void 0 : _a.dispose();
      }
      unitMap.set(sheetRenderUnit.unitId, disposable2);
      const scrollManagerService = sheetRenderUnit.with(SheetScrollManagerService);
      const selectionService = sheetRenderUnit.with(SheetsSelectionsService);
      disposable2.add(this.registerEventHandler(
        this.Event.Scroll,
        () => scrollManagerService.validViewportScrollInfo$.subscribe((params) => {
          if (!params) return;
          this.fireEvent(this.Event.Scroll, {
            workbook,
            worksheet: workbook.getActiveSheet(),
            ...params
          });
        })
      ));
      disposable2.add(this.registerEventHandler(
        this.Event.SelectionMoveStart,
        () => selectionService.selectionMoveStart$.subscribe((selections) => {
          var _a2;
          this.fireEvent(this.Event.SelectionMoveStart, {
            workbook,
            worksheet: workbook.getActiveSheet(),
            selections: (_a2 = selections == null ? void 0 : selections.map((s) => s.range)) != null ? _a2 : []
          });
        })
      ));
      disposable2.add(this.registerEventHandler(
        this.Event.SelectionMoving,
        () => selectionService.selectionMoving$.subscribe((selections) => {
          var _a2;
          this.fireEvent(this.Event.SelectionMoving, {
            workbook,
            worksheet: workbook.getActiveSheet(),
            selections: (_a2 = selections == null ? void 0 : selections.map((s) => s.range)) != null ? _a2 : []
          });
        })
      ));
      disposable2.add(this.registerEventHandler(
        this.Event.SelectionMoveEnd,
        () => selectionService.selectionMoveEnd$.subscribe((selections) => {
          var _a2;
          this.fireEvent(this.Event.SelectionMoveEnd, {
            workbook,
            worksheet: workbook.getActiveSheet(),
            selections: (_a2 = selections == null ? void 0 : selections.map((s) => s.range)) != null ? _a2 : []
          });
        })
      ));
      disposable2.add(this.registerEventHandler(
        this.Event.SelectionChanged,
        () => selectionService.selectionChanged$.subscribe((selections) => {
          var _a2;
          this.fireEvent(this.Event.SelectionChanged, {
            workbook,
            worksheet: workbook.getActiveSheet(),
            selections: (_a2 = selections == null ? void 0 : selections.map((s) => s.range)) != null ? _a2 : []
          });
        })
      ));
      sheetRenderUnit = null;
      this.disposeWithMe(disposable2);
    }));
    this.disposeWithMe(renderManagerService.disposed$.subscribe((unitId) => {
      var _a;
      (_a = unitMap.get(unitId)) == null ? void 0 : _a.dispose();
      unitMap.delete(unitId);
    }));
    this.disposeWithMe(() => {
      unitMap.forEach((disposable2) => {
        disposable2.dispose();
      });
    });
  }
  /**
   * @ignore
   */
  _initialize(injector) {
    this._initSheetUIEvent(injector);
    this._initObserverListener(injector);
    const commandService = injector.get(ICommandService);
    this.registerEventHandler(
      this.Event.BeforeClipboardChange,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        switch (commandInfo.id) {
          case CopyCommand.id:
          case CutCommand.id:
            this._beforeClipboardChange();
            break;
        }
      })
    );
    this.registerEventHandler(
      this.Event.ClipboardChanged,
      () => commandService.onCommandExecuted((commandInfo) => {
        switch (commandInfo.id) {
          case CopyCommand.id:
          case CutCommand.id:
            this._clipboardChanged();
            break;
        }
      })
    );
    this.registerEventHandler(
      this.Event.BeforeClipboardPaste,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        switch (commandInfo.id) {
          case SheetPasteShortKeyCommand.id:
            this._beforeClipboardPaste(commandInfo.params);
            break;
          case PasteCommand.id:
            this._beforeClipboardPasteAsync();
            break;
        }
      })
    );
    this.registerEventHandler(
      this.Event.ClipboardPasted,
      () => commandService.onCommandExecuted((commandInfo) => {
        switch (commandInfo.id) {
          case SheetPasteShortKeyCommand.id:
            this._clipboardPaste(commandInfo.params);
            break;
          case PasteCommand.id:
            this._clipboardPasteAsync();
            break;
        }
      })
    );
    this.registerEventHandler(
      this.Event.SheetSkeletonChanged,
      () => commandService.onCommandExecuted((commandInfo) => {
        if (COMMAND_LISTENER_SKELETON_CHANGE.indexOf(commandInfo.id) > -1) {
          const sheet = this.getActiveSheet();
          if (!sheet) return;
          const ranges = getSkeletonChangedEffectedRange(commandInfo, sheet.worksheet.getMaxColumns()).map((range) => {
            var _a, _b;
            return (_b = (_a = this.getWorkbook(range.unitId)) == null ? void 0 : _a.getSheetBySheetId(range.subUnitId)) == null ? void 0 : _b.getRange(range.range);
          }).filter(Boolean);
          if (!ranges.length) return;
          this.fireEvent(this.Event.SheetSkeletonChanged, {
            workbook: sheet.workbook,
            worksheet: sheet.worksheet,
            payload: commandInfo,
            skeleton: sheet.worksheet.getSkeleton(),
            effectedRanges: ranges
          });
        }
      })
    );
  }
  _generateClipboardCopyParam() {
    const workbook = this.getActiveWorkbook();
    const worksheet = workbook == null ? void 0 : workbook.getActiveSheet();
    const range = workbook == null ? void 0 : workbook.getActiveRange();
    if (!workbook || !worksheet || !range) {
      return;
    }
    const clipboardService = this._injector.get(ISheetClipboardService);
    const content = clipboardService.generateCopyContent(workbook.getId(), worksheet.getSheetId(), range.getRange());
    if (!content) {
      return;
    }
    const { html, plain } = content;
    const eventParams = {
      workbook,
      worksheet,
      text: plain,
      html,
      fromSheet: worksheet,
      fromRange: range
    };
    return eventParams;
  }
  _beforeClipboardChange() {
    const eventParams = this._generateClipboardCopyParam();
    if (!eventParams) return;
    this.fireEvent(this.Event.BeforeClipboardChange, eventParams);
    if (eventParams.cancel) {
      throw new CanceledError();
    }
  }
  _clipboardChanged() {
    const eventParams = this._generateClipboardCopyParam();
    if (!eventParams) return;
    this.fireEvent(this.Event.ClipboardChanged, eventParams);
  }
  _generateClipboardPasteParam(params) {
    if (!params) {
      return;
    }
    const { htmlContent, textContent } = params;
    const workbook = this.getActiveWorkbook();
    const worksheet = workbook == null ? void 0 : workbook.getActiveSheet();
    if (!workbook || !worksheet) {
      return;
    }
    const eventParams = {
      workbook,
      worksheet,
      text: textContent,
      html: htmlContent
    };
    return eventParams;
  }
  async _generateClipboardPasteParamAsync() {
    const workbook = this.getActiveWorkbook();
    const worksheet = workbook == null ? void 0 : workbook.getActiveSheet();
    if (!workbook || !worksheet) {
      return;
    }
    const clipboardInterfaceService = this._injector.get(IClipboardInterfaceService);
    const clipboardItems = await clipboardInterfaceService.read();
    const item = clipboardItems[0];
    let eventParams;
    if (item) {
      const types = item.types;
      const text = types.indexOf(PLAIN_TEXT_CLIPBOARD_MIME_TYPE) !== -1 ? await item.getType(PLAIN_TEXT_CLIPBOARD_MIME_TYPE).then((blob) => blob && blob.text()) : "";
      const html = types.indexOf(HTML_CLIPBOARD_MIME_TYPE) !== -1 ? await item.getType(HTML_CLIPBOARD_MIME_TYPE).then((blob) => blob && blob.text()) : "";
      eventParams = {
        workbook,
        worksheet,
        text,
        html
      };
    }
    return eventParams;
  }
  _beforeClipboardPaste(params) {
    const eventParams = this._generateClipboardPasteParam(params);
    if (!eventParams) return;
    this.fireEvent(this.Event.BeforeClipboardPaste, eventParams);
    if (eventParams.cancel) {
      throw new CanceledError();
    }
  }
  _clipboardPaste(params) {
    const eventParams = this._generateClipboardPasteParam(params);
    if (!eventParams) return;
    this.fireEvent(this.Event.ClipboardPasted, eventParams);
    if (eventParams.cancel) {
      throw new CanceledError();
    }
  }
  async _beforeClipboardPasteAsync() {
    if (!supportClipboardAPI()) {
      const logService = this._injector.get(ILogService);
      logService.warn("[Facade]: The navigator object only supports the browser environment");
      return;
    }
    const eventParams = await this._generateClipboardPasteParamAsync();
    if (!eventParams) return;
    this.fireEvent(this.Event.BeforeClipboardPaste, eventParams);
    if (eventParams.cancel) {
      throw new CanceledError();
    }
  }
  async _clipboardPasteAsync() {
    if (!supportClipboardAPI()) {
      const logService = this._injector.get(ILogService);
      logService.warn("[Facade]: The navigator object only supports the browser environment");
      return;
    }
    const eventParams = await this._generateClipboardPasteParamAsync();
    if (!eventParams) return;
    this.fireEvent(this.Event.ClipboardPasted, eventParams);
    if (eventParams.cancel) {
      throw new CanceledError();
    }
  }
  customizeColumnHeader(cfg) {
    var _a, _b;
    const wb = this.getActiveWorkbook();
    if (!wb) {
      console.error("WorkBook not exist");
      return;
    }
    const unitId = wb == null ? void 0 : wb.getId();
    const renderManagerService = this._injector.get(IRenderManagerService);
    const activeSheet = wb.getActiveSheet();
    const subUnitId = activeSheet.getSheetId();
    const render = renderManagerService.getRenderById(unitId);
    if (render && ((_a = cfg.headerStyle) == null ? void 0 : _a.size)) {
      const skm = render.with(SheetSkeletonManagerService);
      skm.setColumnHeaderSize(render, subUnitId, (_b = cfg.headerStyle) == null ? void 0 : _b.size);
      activeSheet == null ? void 0 : activeSheet.refreshCanvas();
    }
    const sheetColumn = this._getSheetRenderComponent(unitId, "__SpreadsheetColumnHeader__" /* COLUMN */);
    sheetColumn.setCustomHeader(cfg);
    activeSheet == null ? void 0 : activeSheet.refreshCanvas();
  }
  customizeRowHeader(cfg) {
    const wb = this.getActiveWorkbook();
    if (!wb) {
      console.error("WorkBook not exist");
      return;
    }
    const unitId = wb == null ? void 0 : wb.getId();
    const sheetRow = this._getSheetRenderComponent(unitId, "__SpreadsheetRowHeader__" /* ROW */);
    sheetRow.setCustomHeader(cfg);
  }
  registerSheetRowHeaderExtension(unitId, ...extensions) {
    const sheetComponent = this._getSheetRenderComponent(unitId, "__SpreadsheetRowHeader__" /* ROW */);
    const registerDisposable = sheetComponent.register(...extensions);
    return toDisposable(() => {
      registerDisposable.dispose();
      sheetComponent.makeDirty(true);
    });
  }
  registerSheetColumnHeaderExtension(unitId, ...extensions) {
    const sheetComponent = this._getSheetRenderComponent(unitId, "__SpreadsheetColumnHeader__" /* COLUMN */);
    const registerDisposable = sheetComponent.register(...extensions);
    return toDisposable(() => {
      registerDisposable.dispose();
      sheetComponent.makeDirty(true);
    });
  }
  registerSheetMainExtension(unitId, ...extensions) {
    const sheetComponent = this._getSheetRenderComponent(unitId, "__SpreadsheetRender__" /* MAIN */);
    const registerDisposable = sheetComponent.register(...extensions);
    return toDisposable(() => {
      registerDisposable.dispose();
      sheetComponent.makeDirty(true);
    });
  }
  /**
   * Get sheet render component from render by unitId and view key.
   * @private
   * @param {string} unitId The unit id of the spreadsheet.
   * @param {SHEET_VIEW_KEY} viewKey The view key of the spreadsheet.
   * @returns {Nullable<RenderComponentType>} The render component.
   */
  _getSheetRenderComponent(unitId, viewKey) {
    const renderManagerService = this._injector.get(IRenderManagerService);
    const render = renderManagerService.getRenderById(unitId);
    if (!render) {
      throw new Error(`Render Unit with unitId ${unitId} not found`);
    }
    const { components } = render;
    const renderComponent = components.get(viewKey);
    if (!renderComponent) {
      throw new Error("Render component not found");
    }
    return renderComponent;
  }
  /**
   * Get sheet hooks.
   * @returns {FSheetHooks} FSheetHooks instance
   */
  getSheetHooks() {
    return this._injector.createInstance(FSheetHooks);
  }
};
FUniver.extend(FUniverSheetsUIMixin);

// ../packages/sheets-ui/src/facade/f-workbook.ts
var FWorkbookSheetsUIMixin = class extends FWorkbook {
  openSiderbar(params) {
    this._logDeprecation("openSiderbar");
    const sideBarService = this._injector.get(ISidebarService);
    return sideBarService.open(params);
  }
  openDialog(dialog) {
    this._logDeprecation("openDialog");
    const dialogService = this._injector.get(IDialogService);
    const disposable = dialogService.open({
      ...dialog,
      onClose: () => {
        disposable.dispose();
      }
    });
    return disposable;
  }
  _logDeprecation(name) {
    const logService = this._injector.get(ILogService);
    logService.warn("[FWorkbook]", `${name} is deprecated. Please use the function of the same name on "FUniver".`);
  }
  generateCellParams(cell) {
    const worksheet = this.getActiveSheet();
    return {
      row: cell.row,
      column: cell.col,
      workbook: this,
      worksheet
    };
  }
  onCellClick(callback) {
    const hoverManagerService = this._injector.get(HoverManagerService);
    return toDisposable(
      hoverManagerService.currentClickedCell$.pipe(filter((cell) => !!cell)).subscribe((cell) => {
        callback(cell);
      })
    );
  }
  onCellHover(callback) {
    const hoverManagerService = this._injector.get(HoverManagerService);
    return toDisposable(
      hoverManagerService.currentRichText$.pipe(filter((cell) => !!cell)).subscribe(callback)
    );
  }
  onCellPointerDown(callback) {
    const hoverManagerService = this._injector.get(HoverManagerService);
    return toDisposable(
      hoverManagerService.currentPointerDownCell$.subscribe(callback)
    );
  }
  onCellPointerUp(callback) {
    const hoverManagerService = this._injector.get(HoverManagerService);
    return toDisposable(
      hoverManagerService.currentPointerUpCell$.subscribe(callback)
    );
  }
  onCellPointerMove(callback) {
    const hoverManagerService = this._injector.get(HoverManagerService);
    return toDisposable(
      hoverManagerService.currentCellPosWithEvent$.pipe(filter((cell) => !!cell)).subscribe((cell) => {
        callback(cell, cell.event);
      })
    );
  }
  onDragOver(callback) {
    const dragManagerService = this._injector.get(DragManagerService);
    return toDisposable(
      dragManagerService.currentCell$.pipe(filter((cell) => !!cell)).subscribe((cell) => {
        callback(cell);
      })
    );
  }
  onDrop(callback) {
    const dragManagerService = this._injector.get(DragManagerService);
    return toDisposable(
      dragManagerService.endCell$.pipe(filter((cell) => !!cell)).subscribe((cell) => {
        callback(cell);
      })
    );
  }
  startEditing() {
    const commandService = this._injector.get(ICommandService);
    return commandService.syncExecuteCommand(SetCellEditVisibleOperation.id, {
      eventType: 3 /* Dblclick */,
      unitId: this._workbook.getUnitId(),
      visible: true
    });
  }
  async endEditing(save) {
    const commandService = this._injector.get(ICommandService);
    commandService.syncExecuteCommand(SetCellEditVisibleOperation.id, {
      eventType: 4 /* Keyboard */,
      keycode: save ? 13 /* ENTER */ : 27 /* ESC */,
      visible: false,
      unitId: this._workbook.getUnitId()
    });
    await awaitTime(0);
    return true;
  }
  endEditingAsync(save = true) {
    return this.endEditing(save);
  }
  /**
   * Get scroll state of specified sheet.
   * @param {string} sheetId - sheet id
   * @returns {IScrollState} scroll state
   * @example
   * ``` ts
   * univerAPI.getActiveWorkbook().getScrollStateBySheetId($sheetId)
   * ```
   */
  getScrollStateBySheetId(sheetId) {
    const unitId = this._workbook.getUnitId();
    const renderManagerService = this._injector.get(IRenderManagerService);
    const render = renderManagerService.getRenderById(unitId);
    if (!render) return null;
    const scm = render.with(SheetScrollManagerService);
    return scm.getScrollStateByParam({ unitId, sheetId });
  }
  disableSelection() {
    const unitId = this._workbook.getUnitId();
    const renderManagerService = this._injector.get(IRenderManagerService);
    const render = renderManagerService.getRenderById(unitId);
    if (render) {
      render.with(ISheetSelectionRenderService).disableSelection();
    }
    return this;
  }
  enableSelection() {
    const unitId = this._workbook.getUnitId();
    const renderManagerService = this._injector.get(IRenderManagerService);
    const render = renderManagerService.getRenderById(unitId);
    if (render) {
      render.with(ISheetSelectionRenderService).enableSelection();
    }
    return this;
  }
  transparentSelection() {
    const unitId = this._workbook.getUnitId();
    const renderManagerService = this._injector.get(IRenderManagerService);
    const render = renderManagerService.getRenderById(unitId);
    if (render) {
      render.with(ISheetSelectionRenderService).transparentSelection();
    }
    return this;
  }
  showSelection() {
    const unitId = this._workbook.getUnitId();
    const renderManagerService = this._injector.get(IRenderManagerService);
    const render = renderManagerService.getRenderById(unitId);
    if (render) {
      render.with(ISheetSelectionRenderService).showSelection();
    }
    return this;
  }
};
FWorkbook.extend(FWorkbookSheetsUIMixin);

// ../packages/sheets-ui/src/facade/f-worksheet.ts
var FWorksheetSkeletonMixin = class extends FWorksheet {
  refreshCanvas() {
    const renderManagerService = this._injector.get(IRenderManagerService);
    const unitId = this._fWorkbook.id;
    const render = renderManagerService.getRenderById(unitId);
    if (!render) {
      throw new Error(`Render Unit with unitId ${unitId} not found`);
    }
    render.with(SheetSkeletonManagerService).reCalculate();
    const mainComponent = render.mainComponent;
    if (!mainComponent) {
      throw new Error("Main component not found");
    }
    mainComponent.makeDirty();
    return this;
  }
  zoom(zoomRatio) {
    const commandService = this._injector.get(ICommandService);
    const _zoomRatio = Math.min(Math.max(zoomRatio, 0.1), 4);
    commandService.executeCommand(SetZoomRatioCommand.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      zoomRatio: _zoomRatio
    });
    return this;
  }
  getZoom() {
    return this._worksheet.getZoomRatio();
  }
  getVisibleRange() {
    const unitId = this._workbook.getUnitId();
    const renderManagerService = this._injector.get(IRenderManagerService);
    const render = renderManagerService.getRenderById(unitId);
    let range = {
      startColumn: 0,
      startRow: 0,
      endColumn: 0,
      endRow: 0
    };
    if (!render) return range;
    const skm = render.with(SheetSkeletonManagerService);
    const sk = skm.getCurrentSkeleton();
    if (!sk) return range;
    const visibleRangeMap = sk == null ? void 0 : sk.getVisibleRanges();
    if (!visibleRangeMap) return range;
    range = sk.getVisibleRangeByViewport("viewMain" /* VIEW_MAIN */);
    for (const [k, r] of visibleRangeMap) {
      if (sheetContentViewportKeys.indexOf(k) === -1) continue;
      range.startColumn = Math.min(range.startColumn, r.startColumn);
      range.startRow = Math.min(range.startRow, r.startRow);
      range.endColumn = Math.max(range.endColumn, r.endColumn);
      range.endRow = Math.max(range.endRow, r.endRow);
    }
    return range;
  }
  scrollToCell(row, column) {
    const unitId = this._workbook.getUnitId();
    const renderManagerService = this._injector.get(IRenderManagerService);
    const render = renderManagerService.getRenderById(unitId);
    if (render) {
      const scrollRenderController = render == null ? void 0 : render.with(SheetsScrollRenderController);
      scrollRenderController.scrollToCell(row, column);
    }
    return this;
  }
  getScrollState() {
    const emptyScrollState = {
      offsetX: 0,
      offsetY: 0,
      sheetViewStartColumn: 0,
      sheetViewStartRow: 0
    };
    const unitId = this._workbook.getUnitId();
    const sheetId = this._worksheet.getSheetId();
    const renderManagerService = this._injector.get(IRenderManagerService);
    const render = renderManagerService.getRenderById(unitId);
    if (!render) return emptyScrollState;
    const sheetScrollManagerService = render.with(SheetScrollManagerService);
    const scrollState = sheetScrollManagerService.getScrollStateByParam({ unitId, sheetId });
    return scrollState || emptyScrollState;
  }
  onScroll(callback) {
    var _a;
    const unitId = this._workbook.getUnitId();
    const renderManagerService = this._injector.get(IRenderManagerService);
    const scrollManagerService = (_a = renderManagerService.getRenderById(unitId)) == null ? void 0 : _a.with(SheetScrollManagerService);
    if (scrollManagerService) {
      const sub = scrollManagerService.validViewportScrollInfo$.subscribe((params) => {
        callback(params);
      });
      return toDisposable(sub);
    }
    return toDisposable(() => {
    });
  }
  getSkeleton() {
    var _a, _b;
    const service = (_a = this._injector.get(IRenderManagerService).getRenderById(this._workbook.getUnitId())) == null ? void 0 : _a.with(SheetSkeletonManagerService);
    return (_b = service == null ? void 0 : service.getWorksheetSkeleton(this._worksheet.getSheetId())) == null ? void 0 : _b.skeleton;
  }
  autoResizeColumn(columnPosition) {
    return this.autoResizeColumns(columnPosition, 1);
  }
  autoResizeColumns(startColumn, numColumns) {
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    const ranges = [
      {
        startColumn,
        endColumn: startColumn + numColumns - 1,
        startRow: 0,
        endRow: this._worksheet.getRowCount() - 1
      }
    ];
    this._commandService.syncExecuteCommand(SetWorksheetColAutoWidthCommand.id, {
      unitId,
      subUnitId,
      ranges
    });
    return this;
  }
  setColumnAutoWidth(columnPosition, numColumn) {
    return this.autoResizeColumns(columnPosition, numColumn);
  }
  autoResizeRows(startRow, numRows) {
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    const ranges = [
      {
        startRow,
        endRow: startRow + numRows - 1,
        startColumn: 0,
        endColumn: this._worksheet.getColumnCount() - 1
      }
    ];
    this._commandService.syncExecuteCommand(SetWorksheetRowIsAutoHeightCommand.id, {
      unitId,
      subUnitId,
      ranges
    });
    return this;
  }
  customizeColumnHeader(cfg) {
    var _a, _b;
    const activeSheet = this;
    const unitId = this._fWorkbook.getId();
    const renderManagerService = this._injector.get(IRenderManagerService);
    const subUnitId = activeSheet.getSheetId();
    const render = renderManagerService.getRenderById(unitId);
    if (render && ((_a = cfg.headerStyle) == null ? void 0 : _a.size)) {
      const skm = render.with(SheetSkeletonManagerService);
      skm.setColumnHeaderSize(render, subUnitId, (_b = cfg.headerStyle) == null ? void 0 : _b.size);
      activeSheet == null ? void 0 : activeSheet.refreshCanvas();
    }
    const sheetColumn = this._getSheetRenderComponent(unitId, "__SpreadsheetColumnHeader__" /* COLUMN */);
    if (sheetColumn) {
      sheetColumn.setCustomHeader(cfg);
      activeSheet == null ? void 0 : activeSheet.refreshCanvas();
    }
  }
  customizeRowHeader(cfg) {
    const unitId = this._fWorkbook.getId();
    const sheetRow = this._getSheetRenderComponent(unitId, "__SpreadsheetRowHeader__" /* ROW */);
    sheetRow.setCustomHeader(cfg);
  }
  setColumnHeaderHeight(height) {
    const activeSheet = this;
    const unitId = this._fWorkbook.getId();
    const subUnitId = activeSheet.getSheetId();
    this._commandService.executeCommand(SetColumnHeaderHeightCommand.id, {
      unitId,
      subUnitId,
      size: height
    });
    activeSheet == null ? void 0 : activeSheet.refreshCanvas();
    return this;
  }
  setRowHeaderWidth(width) {
    const activeSheet = this;
    const unitId = this._fWorkbook.getId();
    const subUnitId = activeSheet.getSheetId();
    this._commandService.executeCommand(SetRowHeaderWidthCommand.id, {
      unitId,
      subUnitId,
      size: width
    });
    const sheetRow = this._getSheetRenderComponent(unitId, "__SpreadsheetRowHeader__" /* ROW */);
    if (sheetRow) {
      sheetRow.setCustomHeader({ headerStyle: { size: width } });
    }
    activeSheet == null ? void 0 : activeSheet.refreshCanvas();
    return this;
  }
  /**
   * Get sheet render component from render by unitId and view key.
   * @private
   * @param {string} unitId The unit id of the spreadsheet.
   * @param {SHEET_VIEW_KEY} viewKey The view key of the spreadsheet.
   * @returns {Nullable<RenderComponentType>} The render component.
   */
  _getSheetRenderComponent(unitId, viewKey) {
    const renderManagerService = this._injector.get(IRenderManagerService);
    const render = renderManagerService.getRenderById(unitId);
    if (!render) {
      throw new Error(`Render Unit with unitId ${unitId} not found`);
    }
    const { components } = render;
    const renderComponent = components.get(viewKey);
    if (!renderComponent) {
      throw new Error("Render component not found");
    }
    return renderComponent;
  }
};
FWorksheet.extend(FWorksheetSkeletonMixin);

// ../packages/sheets-ui/src/facade/f-permission.ts
var FPermissionSheetsUIMixin = class extends FPermission {
  setPermissionDialogVisible(visible) {
    this._permissionService.setShowComponents(visible);
  }
};
FPermission.extend(FPermissionSheetsUIMixin);

// ../packages/sheets-ui/src/facade/f-sheet-hooks.ts
var FSheetHooksUIMixin = class extends FSheetHooks {
  onCellPointerMove(callback) {
    return toDisposable(this._injector.get(HoverManagerService).currentPosition$.subscribe(callback));
  }
  onCellPointerOver(callback) {
    return toDisposable(this._injector.get(HoverManagerService).currentCell$.subscribe(callback));
  }
  onCellDragOver(callback) {
    return toDisposable(this._injector.get(DragManagerService).currentCell$.subscribe(callback));
  }
  onCellDrop(callback) {
    return toDisposable(this._injector.get(DragManagerService).endCell$.subscribe(callback));
  }
  onCellRender(customRender, effect = 1 /* Style */, priority = 9 /* DATA_VALIDATION */) {
    return this._injector.get(SheetInterceptorService).intercept(INTERCEPTOR_POINT.CELL_CONTENT, {
      effect,
      handler: (cell, pos, next) => {
        return next({
          ...cell,
          customRender: [
            ...(cell == null ? void 0 : cell.customRender) || [],
            ...customRender || []
          ]
        });
      },
      priority
    });
  }
  onBeforeCellEdit(callback) {
    return this._injector.get(ICommandService).beforeCommandExecuted((command) => {
      const params = command.params;
      if (command.id === SetCellEditVisibleOperation.id && params.visible) {
        callback(params);
      }
    });
  }
  onAfterCellEdit(callback) {
    return this._injector.get(ICommandService).onCommandExecuted((command) => {
      const params = command.params;
      if (command.id === SetCellEditVisibleOperation.id && !params.visible) {
        callback(params);
      }
    });
  }
};
FSheetHooks.extend(FSheetHooksUIMixin);

// ../packages/sheets-ui/src/facade/f-event.ts
var CellFEventName = {
  CellClicked: "CellClicked",
  CellPointerDown: "CellPointerDown",
  CellPointerUp: "CellPointerUp",
  CellPointerMove: "CellPointerMove",
  CellHover: "CellHover",
  DragOver: "DragOver",
  Drop: "Drop",
  Scroll: "Scroll",
  SelectionMoveStart: "SelectionMoveStart",
  SelectionMoving: "SelectionMoving",
  SelectionMoveEnd: "SelectionMoveEnd",
  SelectionChanged: "SelectionChanged"
};
var FSheetsUIEventName = class {
  get BeforeClipboardChange() {
    return "BeforeClipboardChange";
  }
  get ClipboardChanged() {
    return "ClipboardChanged";
  }
  get BeforeClipboardPaste() {
    return "BeforeClipboardPaste";
  }
  get ClipboardPasted() {
    return "ClipboardPasted";
  }
  get BeforeSheetEditStart() {
    return "BeforeSheetEditStart";
  }
  get SheetEditStarted() {
    return "SheetEditStarted";
  }
  get SheetEditChanging() {
    return "SheetEditChanging";
  }
  get BeforeSheetEditEnd() {
    return "BeforeSheetEditEnd";
  }
  get SheetEditEnded() {
    return "SheetEditEnded";
  }
  get CellClicked() {
    return CellFEventName.CellClicked;
  }
  get CellHover() {
    return CellFEventName.CellHover;
  }
  get CellPointerDown() {
    return CellFEventName.CellPointerDown;
  }
  get CellPointerUp() {
    return CellFEventName.CellPointerUp;
  }
  get CellPointerMove() {
    return CellFEventName.CellPointerMove;
  }
  get DragOver() {
    return "DragOver";
  }
  get Drop() {
    return "Drop";
  }
  get Scroll() {
    return "Scroll";
  }
  get SelectionMoveStart() {
    return "SelectionMoveStart";
  }
  get SelectionChanged() {
    return "SelectionChanged";
  }
  get SelectionMoving() {
    return "SelectionMoving";
  }
  get SelectionMoveEnd() {
    return "SelectionMoveEnd";
  }
  get RowHeaderClick() {
    return "RowHeaderClick";
  }
  get RowHeaderPointerDown() {
    return "RowHeaderPointerDown";
  }
  get RowHeaderPointerUp() {
    return "RowHeaderPointerUp";
  }
  get RowHeaderHover() {
    return "RowHeaderHover";
  }
  get ColumnHeaderClick() {
    return "ColumnHeaderClick";
  }
  get ColumnHeaderPointerDown() {
    return "ColumnHeaderPointerDown";
  }
  get ColumnHeaderPointerUp() {
    return "ColumnHeaderPointerUp";
  }
  get ColumnHeaderHover() {
    return "ColumnHeaderHover";
  }
  get SheetSkeletonChanged() {
    return "SheetSkeletonChanged";
  }
  get BeforeSheetZoomChange() {
    return "BeforeSheetZoomChange";
  }
  get SheetZoomChanged() {
    return "SheetZoomChanged";
  }
};
FEventName.extend(FSheetsUIEventName);

// ../packages/sheets-ui/src/facade/f-range.ts
var FRangeSheetsUIMixin = class extends FRange {
  getCell() {
    var _a;
    const renderManagerService = this._injector.get(IRenderManagerService);
    const logService = this._injector.get(ILogService);
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    const render = renderManagerService.getRenderById(unitId);
    const skeleton = (_a = render == null ? void 0 : render.with(SheetSkeletonManagerService).getSkeletonParam(subUnitId)) == null ? void 0 : _a.skeleton;
    if (!skeleton) {
      logService.error("[Facade]: `FRange.getCell` can only be called in current worksheet");
      throw new Error("`FRange.getCell` can only be called in current worksheet");
    }
    return skeleton.getCellWithCoordByIndex(this._range.startRow, this._range.startColumn);
  }
  getCellRect() {
    const { startX: x, startY: y, endX: x2, endY: y2 } = this.getCell();
    const data = { x, y, width: x2 - x, height: y2 - y, top: y, left: x, bottom: y2, right: x2 };
    return { ...data, toJSON: () => JSON.stringify(data) };
  }
  generateHTML() {
    var _a;
    const clipboardService = this._injector.get(ISheetClipboardService);
    const copyContent = clipboardService.generateCopyContent(
      this._workbook.getUnitId(),
      this._worksheet.getSheetId(),
      this._range
    );
    return (_a = copyContent == null ? void 0 : copyContent.html) != null ? _a : "";
  }
  attachPopup(popup) {
    var _a, _b, _c;
    popup.direction = (_a = popup.direction) != null ? _a : "horizontal";
    popup.extraProps = (_b = popup.extraProps) != null ? _b : {};
    popup.offset = (_c = popup.offset) != null ? _c : [0, 0];
    const { key, disposableCollection } = transformComponentKey(popup, this._injector.get(ComponentManager));
    const sheetsPopupService = this._injector.get(SheetCanvasPopManagerService);
    const disposePopup = sheetsPopupService.attachPopupToCell(
      this._range.startRow,
      this._range.startColumn,
      { ...popup, componentKey: key },
      this.getUnitId(),
      this._worksheet.getSheetId()
    );
    if (disposePopup) {
      disposableCollection.add(disposePopup);
      return disposableCollection;
    }
    disposableCollection.dispose();
    return null;
  }
  attachAlertPopup(alert) {
    const cellAlertService = this._injector.get(CellAlertManagerService);
    const location2 = {
      workbook: this._workbook,
      worksheet: this._worksheet,
      row: this._range.startRow,
      col: this._range.startColumn,
      unitId: this.getUnitId(),
      subUnitId: this._worksheet.getSheetId()
    };
    cellAlertService.showAlert({
      ...alert,
      location: location2
    });
    return {
      dispose: () => {
        cellAlertService.removeAlert(alert.key);
      }
    };
  }
  /**
   * attachDOMPopup
   * @param popup
   * @returns {IDisposable} disposable
      let sheet = univerAPI.getActiveWorkbook().getActiveSheet();
      let range = sheet.getRange(2, 2, 3, 3);
      univerAPI.getActiveWorkbook().setActiveRange(range);
      let disposable = range.attachDOMPopup({
      componentKey: 'univer.sheet.single-dom-popup',
      extraProps: { alert: { type: 0, title: 'This is an Info', message: 'This is an info message' } },
      });
   */
  attachRangePopup(popup) {
    var _a, _b, _c;
    popup.direction = (_a = popup.direction) != null ? _a : "top-center";
    popup.extraProps = (_b = popup.extraProps) != null ? _b : {};
    popup.offset = (_c = popup.offset) != null ? _c : [0, 0];
    const { key, disposableCollection } = transformComponentKey(popup, this._injector.get(ComponentManager));
    const sheetsPopupService = this._injector.get(SheetCanvasPopManagerService);
    const disposePopup = sheetsPopupService.attachRangePopup(
      this._range,
      { ...popup, componentKey: key },
      this.getUnitId(),
      this._worksheet.getSheetId()
    );
    if (disposePopup) {
      disposableCollection.add(disposePopup);
      return disposableCollection;
    }
    disposableCollection.dispose();
    return null;
  }
  highlight(style, primary) {
    const markSelectionService = this._injector.get(IMarkSelectionService);
    const id = markSelectionService.addShape({ range: this._range, style, primary });
    if (!id) {
      throw new Error("Failed to highlight current range");
    }
    return toDisposable(() => {
      markSelectionService.removeShape(id);
    });
  }
};
FRange.extend(FRangeSheetsUIMixin);
function transformComponentKey(component, componentManager) {
  const { componentKey, isVue3 } = component;
  let key;
  const disposableCollection = new DisposableCollection();
  if (typeof componentKey === "string") {
    key = componentKey;
  } else {
    key = `External_${generateRandomId(6)}`;
    disposableCollection.add(componentManager.register(key, componentKey, { framework: isVue3 ? "vue3" : "react" }));
  }
  return {
    key,
    disposableCollection
  };
}

// ../packages/sheets-data-validation/src/facade/f-data-validation-builder.ts
var FDataValidationBuilder = class _FDataValidationBuilder {
  constructor(rule) {
    __publicField(this, "_rule");
    this._rule = rule != null ? rule : {
      uid: generateRandomId(),
      ranges: void 0,
      type: "custom" /* CUSTOM */
    };
  }
  /**
   * Builds an FDataValidation instance based on the _rule property of the current class
   * @returns {FDataValidation} A new instance of the FDataValidation class
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new data validation rule that requires a number between 1 and 10 for the range A1:B10
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireNumberBetween(1, 10)
   *   .setOptions({
   *     allowBlank: true,
   *     showErrorMessage: true,
   *     error: 'Please enter a number between 1 and 10'
   *   })
   *   .build();
   * fRange.setDataValidation(rule);
   * ```
   */
  build() {
    return new FDataValidation(this._rule);
  }
  /**
   * Creates a duplicate of the current DataValidationBuilder object
   * @returns {FDataValidationBuilder} A new instance of the DataValidationBuilder class
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new data validation rule that requires a number between 1 and 10 for the range A1:B10
   * const fRange = fWorksheet.getRange('A1:B10');
   * const builder = univerAPI.newDataValidation()
   *   .requireNumberBetween(1, 10)
   *   .setOptions({
   *     allowBlank: true,
   *     showErrorMessage: true,
   *     error: 'Please enter a number between 1 and 10'
   *   });
   * fRange.setDataValidation(builder.build());
   *
   * // Copy the builder applied to the new range F1:G10
   * const newRange = fWorksheet.getRange('F1:G10');
   * const copyBuilder = builder.copy();
   * newRange.setDataValidation(copyBuilder.build());
   * ```
   */
  copy() {
    return new _FDataValidationBuilder({
      ...this._rule,
      uid: generateRandomId()
    });
  }
  /**
   * Determines whether invalid data is allowed
   * @returns {boolean} True if invalid data is allowed, False otherwise
   * @example
   * ```typescript
   * const builder = univerAPI.newDataValidation().requireNumberBetween(1, 10);
   * console.log(builder.getAllowInvalid());
   * ```
   */
  getAllowInvalid() {
    return this._rule.errorStyle !== 1 /* STOP */;
  }
  /**
   * Gets the data validation type of the rule
   * @returns {DataValidationType | string} The data validation type
   * @example
   * ```typescript
   * const builder = univerAPI.newDataValidation();
   * console.log(builder.getCriteriaType()); // custom
   *
   * builder.requireNumberBetween(1, 10);
   * console.log(builder.getCriteriaType()); // decimal
   *
   * builder.requireValueInList(['Yes', 'No']);
   * console.log(builder.getCriteriaType()); // list
   * ```
   */
  getCriteriaType() {
    return this._rule.type;
  }
  /**
   * Gets the values used for criteria evaluation
   * @returns {[string | undefined, string | undefined, string | undefined]} An array containing the operator, formula1, and formula2 values
   * @example
   * ```typescript
   * const builder = univerAPI.newDataValidation().requireNumberBetween(1, 10);
   * const [operator, formula1, formula2] = builder.getCriteriaValues();
   * console.log(operator, formula1, formula2); // between 1 10
   *
   * builder.requireValueInList(['Yes', 'No']);
   * console.log(builder.getCriteriaValues()); // undefined Yes,No undefined
   * ```
   */
  getCriteriaValues() {
    return [this._rule.operator, this._rule.formula1, this._rule.formula2];
  }
  /**
   * Gets the help text information, which is used to provide users with guidance and support
   * @returns {string | undefined} Returns the help text information. If there is no error message, it returns an undefined value
   * @example
   * ```typescript
   * const builder = univerAPI.newDataValidation().setOptions({
   *   showErrorMessage: true,
   *   error: 'Please enter a valid value'
   * });
   * console.log(builder.getHelpText()); // 'Please enter a valid value'
   * ```
   */
  getHelpText() {
    return this._rule.error;
  }
  /**
   * Sets the data validation rule to require that the input is a boolean value; this value is rendered as a checkbox.
   * @param {string} [checkedValue] - The value assigned to a checked box.
   * @param {string} [uncheckedValue] - The value assigned to an unchecked box.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set the data validation for cell A1:A10 to require a checkbox with default 1 and 0 values
   * const fRange = fWorksheet.getRange('A1:A10');
   * const rule = univerAPI.newDataValidation()
   *   .requireCheckbox()
   *   .build();
   * fRange.setDataValidation(rule);
   *
   * // Set the data validation for cell B1:B10 to require a checkbox with 'Yes' and 'No' values
   * const fRange2 = fWorksheet.getRange('B1:B10');
   * const rule2 = univerAPI.newDataValidation()
   *   .requireCheckbox('Yes', 'No')
   *   .build();
   * fRange2.setDataValidation(rule2);
   * ```
   */
  requireCheckbox(checkedValue, uncheckedValue) {
    this._rule.type = "checkbox" /* CHECKBOX */;
    this._rule.formula1 = checkedValue;
    this._rule.formula2 = uncheckedValue;
    return this;
  }
  /**
   * Set the data validation type to DATE and configure the validation rules to be after a specific date.
   * @param {Date} date - The latest unacceptable date.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set some date values in the range A1:B2
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setValues([
   *   ['2024-01-01', '2024-12-31'],
   *   ['2025-01-01', '2025-12-31']
   * ]);
   *
   * // Create a data validation rule that requires a date after 2025-01-01
   * const rule = univerAPI.newDataValidation()
   *   .requireDateAfter(new Date('2025-01-01'))
   *   .build();
   * fRange.setDataValidation(rule);
   *
   * // Get the validation status of the range
   * const status = await fRange.getValidatorStatus();
   * console.log(status); // [['invalid', 'invalid', 'invalid', 'valid']]
   * ```
   */
  requireDateAfter(date) {
    this._rule.type = "date" /* DATE */;
    this._rule.formula1 = date.toLocaleDateString();
    this._rule.operator = "greaterThan" /* GREATER_THAN */;
    return this;
  }
  /**
   * Set the data validation type to DATE and configure the validation rules to be before a specific date.
   * @param {Date} date - The earliest unacceptable date.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set some date values in the range A1:B2
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setValues([
   *   ['2024-01-01', '2024-12-31'],
   *   ['2025-01-01', '2025-12-31']
   * ]);
   *
   * // Create a data validation rule that requires a date before 2025-01-01
   * const rule = univerAPI.newDataValidation()
   *   .requireDateBefore(new Date('2025-01-01'))
   *   .build();
   * fRange.setDataValidation(rule);
   *
   * // Get the validation status of the range
   * const status = await fRange.getValidatorStatus();
   * console.log(status); // [['valid', 'valid', 'invalid', 'invalid']]
   * ```
   */
  requireDateBefore(date) {
    this._rule.type = "date" /* DATE */;
    this._rule.formula1 = date.toLocaleDateString();
    this._rule.formula2 = void 0;
    this._rule.operator = "lessThan" /* LESS_THAN */;
    return this;
  }
  /**
   * Set the data validation type to DATE and configure the validation rules to be within a specific date range.
   * @param {Date} start - The earliest acceptable date.
   * @param {Date} end - The latest acceptable date.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set some date values in the range A1:B2
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setValues([
   *   ['2024-01-01', '2024-12-31'],
   *   ['2025-01-01', '2025-12-31']
   * ]);
   *
   * // Create a data validation rule that requires a date between 2024-06-01 and 2025-06-01
   * const rule = univerAPI.newDataValidation()
   *   .requireDateBetween(new Date('2024-06-01'), new Date('2025-06-01'))
   *   .build();
   * fRange.setDataValidation(rule);
   *
   * // Get the validation status of the range
   * const status = await fRange.getValidatorStatus();
   * console.log(status); // [['invalid', 'valid', 'valid', 'invalid']]
   * ```
   */
  requireDateBetween(start, end) {
    this._rule.type = "date" /* DATE */;
    this._rule.formula1 = start.toLocaleDateString();
    this._rule.formula2 = end.toLocaleDateString();
    this._rule.operator = "between" /* BETWEEN */;
    return this;
  }
  /**
   * Set the data validation type to DATE and configure the validation rules to be equal to a specific date.
   * @param {Date} date - The sole acceptable date.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set some date values in the range A1:B2
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setValues([
   *   ['2024-01-01', '2024-12-31'],
   *   ['2025-01-01', '2025-12-31']
   * ]);
   *
   * // Create a data validation rule that requires a date equal to 2025-01-01
   * const rule = univerAPI.newDataValidation()
   *   .requireDateEqualTo(new Date('2025-01-01'))
   *   .build();
   * fRange.setDataValidation(rule);
   *
   * // Get the validation status of the cell A2
   * const status = await fWorksheet.getRange('A2').getValidatorStatus();
   * console.log(status?.[0]?.[0]); // 'valid'
   *
   * // Get the validation status of the cell B2
   * const status2 = await fWorksheet.getRange('B2').getValidatorStatus();
   * console.log(status2?.[0]?.[0]); // 'invalid'
   * ```
   */
  requireDateEqualTo(date) {
    this._rule.type = "date" /* DATE */;
    this._rule.formula1 = date.toLocaleDateString();
    this._rule.formula2 = void 0;
    this._rule.operator = "equal" /* EQUAL */;
    return this;
  }
  /**
   * Set the data validation type to DATE and configure the validation rules to be not within a specific date range.
   * @param {Date} start - The earliest unacceptable date.
   * @param {Date} end - The latest unacceptable date.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set some date values in the range A1:B2
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setValues([
   *   ['2024-01-01', '2024-12-31'],
   *   ['2025-01-01', '2025-12-31']
   * ]);
   *
   * // Create a data validation rule that requires a date not between 2024-06-01 and 2025-06-01
   * const rule = univerAPI.newDataValidation()
   *   .requireDateNotBetween(new Date('2024-06-01'), new Date('2025-06-01'))
   *   .build();
   * fRange.setDataValidation(rule);
   *
   * // Get the validation status of the range
   * const status = await fRange.getValidatorStatus();
   * console.log(status); // [['valid', 'invalid', 'invalid', 'valid']]
   * ```
   */
  requireDateNotBetween(start, end) {
    this._rule.type = "date" /* DATE */;
    this._rule.formula1 = start.toLocaleDateString();
    this._rule.formula2 = end.toLocaleDateString();
    this._rule.operator = "notBetween" /* NOT_BETWEEN */;
    return this;
  }
  /**
   * Set the data validation type to DATE and configure the validation rules to be on or after a specific date.
   * @param {Date} date - The earliest acceptable date.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set some date values in the range A1:B2
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setValues([
   *   ['2024-01-01', '2024-12-31'],
   *   ['2025-01-01', '2025-12-31']
   * ]);
   *
   * // Create a data validation rule that requires a date on or after 2025-01-01
   * const rule = univerAPI.newDataValidation()
   *   .requireDateOnOrAfter(new Date('2025-01-01'))
   *   .build();
   * fRange.setDataValidation(rule);
   *
   * // Get the validation status of the range
   * const status = await fRange.getValidatorStatus();
   * console.log(status); // [['invalid', 'invalid', 'valid', 'valid']]
   * ```
   */
  requireDateOnOrAfter(date) {
    this._rule.type = "date" /* DATE */;
    this._rule.formula1 = date.toLocaleDateString();
    this._rule.formula2 = void 0;
    this._rule.operator = "greaterThanOrEqual" /* GREATER_THAN_OR_EQUAL */;
    return this;
  }
  /**
   * Set the data validation type to DATE and configure the validation rules to be on or before a specific date.
   * @param {Date} date - The latest acceptable date.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set some date values in the range A1:B2
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setValues([
   *   ['2024-01-01', '2024-12-31'],
   *   ['2025-01-01', '2025-12-31']
   * ]);
   *
   * // Create a data validation rule that requires a date on or before 2025-01-01
   * const rule = univerAPI.newDataValidation()
   *   .requireDateOnOrBefore(new Date('2025-01-01'))
   *   .build();
   * fRange.setDataValidation(rule);
   *
   * // Get the validation status of the range
   * const status = await fRange.getValidatorStatus();
   * console.log(status); // [['valid', 'valid', 'valid', 'invalid']]
   * ```
   */
  requireDateOnOrBefore(date) {
    this._rule.type = "date" /* DATE */;
    this._rule.formula1 = date.toLocaleDateString();
    this._rule.formula2 = void 0;
    this._rule.operator = "lessThanOrEqual" /* LESS_THAN_OR_EQUAL */;
    return this;
  }
  /**
   * Sets the data validation rule to require that the given formula evaluates to `true`.
   * @param {string} formula - The formula string that needs to be satisfied, formula result should be TRUE or FALSE, and references range will relative offset.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set some values in the range A1:B2 and C1:D2
   * const cell = fWorksheet.getRange('A1:B2');
   * cell.setValues([
   *   [4, 3],
   *   [2, 1]
   * ]);
   * const fRange = fWorksheet.getRange('C1:D2');
   * fRange.setValues([
   *   [1, 2],
   *   [3, 4]
   * ]);
   *
   * // Create a data validation rule that requires the formula '=A1>2' to be satisfied
   * const rule = univerAPI.newDataValidation()
   *   .requireFormulaSatisfied('=A1>2')
   *   .setOptions({
   *     showErrorMessage: true,
   *     error: 'Please enter a value equal to A1'
   *   })
   *   .build();
   * fRange.setDataValidation(rule);
   *
   * // Get the validation status of the range
   * const status = await fRange.getValidatorStatus();
   * console.log(status); // [['valid', 'valid', 'invalid', 'invalid']]
   * ```
   */
  requireFormulaSatisfied(formula) {
    this._rule.type = "custom" /* CUSTOM */;
    this._rule.formula1 = formula;
    this._rule.formula2 = void 0;
    return this;
  }
  /**
   * Sets the data validation rule to require a number that falls between, or is either of, two specified numbers.
   * @param {number} start - The lowest acceptable value.
   * @param {number} end - The highest acceptable value.
   * @param {boolean} [isInteger] - Indicates whether the required number is an integer.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new data validation rule that requires a number between 1 and 10 for the range A1:B10
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireNumberBetween(1, 10)
   *   .setOptions({
   *     allowBlank: false,
   *     showErrorMessage: true,
   *     error: 'Please enter a number between 1 and 10'
   *   })
   *   .build();
   * fRange.setDataValidation(rule);
   * ```
   */
  requireNumberBetween(start, end, isInteger) {
    this._rule.formula1 = `${start}`;
    this._rule.formula2 = `${end}`;
    this._rule.operator = "between" /* BETWEEN */;
    this._rule.type = isInteger ? "whole" /* WHOLE */ : "decimal" /* DECIMAL */;
    return this;
  }
  /**
   * Sets the data validation rule to require a number equal to the given value.
   * @param {number} num - The sole acceptable value.
   * @param {boolean} [isInteger] - Indicates whether the required number is an integer.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new data validation rule that requires a number equal to 10 for the range A1:B10
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireNumberEqualTo(10)
   *   .setOptions({
   *     allowBlank: false,
   *     showErrorMessage: true,
   *     error: 'Please enter a number equal to 10'
   *   })
   *   .build();
   * fRange.setDataValidation(rule);
   * ```
   */
  requireNumberEqualTo(num, isInteger) {
    this._rule.formula1 = `${num}`;
    this._rule.formula2 = void 0;
    this._rule.operator = "equal" /* EQUAL */;
    this._rule.type = isInteger ? "whole" /* WHOLE */ : "decimal" /* DECIMAL */;
    return this;
  }
  /**
   * Sets the data validation rule to require a number greater than the given value.
   * @param {number} num - The highest unacceptable value.
   * @param {boolean} [isInteger] - Indicates whether the required number is an integer.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new data validation rule that requires a number greater than 10 for the range A1:B10
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireNumberGreaterThan(10)
   *   .setOptions({
   *     allowBlank: false,
   *     showErrorMessage: true,
   *     error: 'Please enter a number greater than 10'
   *   })
   *   .build();
   * fRange.setDataValidation(rule);
   * ```
   */
  requireNumberGreaterThan(num, isInteger) {
    this._rule.formula1 = `${num}`;
    this._rule.formula2 = void 0;
    this._rule.operator = "greaterThan" /* GREATER_THAN */;
    this._rule.type = isInteger ? "whole" /* WHOLE */ : "decimal" /* DECIMAL */;
    return this;
  }
  /**
   * Sets the data validation rule to require a number greater than or equal to the given value.
   * @param {number} num - The lowest acceptable value.
   * @param {boolean} [isInteger] - Indicates whether the required number is an integer.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new data validation rule that requires a number greater than 10 or equal to 10 for the range A1:B10
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireNumberGreaterThanOrEqualTo(10)
   *   .setOptions({
   *     allowBlank: false,
   *     showErrorMessage: true,
   *     error: 'Please enter a number greater than 10 or equal to 10'
   *   })
   *   .build();
   * fRange.setDataValidation(rule);
   * ```
   */
  requireNumberGreaterThanOrEqualTo(num, isInteger) {
    this._rule.formula1 = `${num}`;
    this._rule.formula2 = void 0;
    this._rule.operator = "greaterThanOrEqual" /* GREATER_THAN_OR_EQUAL */;
    this._rule.type = isInteger ? "whole" /* WHOLE */ : "decimal" /* DECIMAL */;
    return this;
  }
  /**
   * Sets the data validation rule to require a number less than the given value.
   * @param {number} num - The lowest unacceptable value.
   * @param {boolean} [isInteger] - Indicates whether the required number is an integer.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new data validation rule that requires a number less than 10 for the range A1:B10
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireNumberLessThan(10)
   *   .setOptions({
   *     allowBlank: false,
   *     showErrorMessage: true,
   *     error: 'Please enter a number less than 10'
   *   })
   *   .build();
   * fRange.setDataValidation(rule);
   * ```
   */
  requireNumberLessThan(num, isInteger) {
    this._rule.formula1 = `${num}`;
    this._rule.formula2 = void 0;
    this._rule.operator = "lessThan" /* LESS_THAN */;
    this._rule.type = isInteger ? "whole" /* WHOLE */ : "decimal" /* DECIMAL */;
    return this;
  }
  /**
   * Sets the data validation rule to require a number less than or equal to the given value.
   * @param {number} num - The highest acceptable value.
   * @param {boolean} [isInteger] - Indicates whether the required number is an integer.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new data validation rule that requires a number less than 10 or equal to 10 for the range A1:B10
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireNumberLessThanOrEqualTo(10)
   *   .setOptions({
   *     allowBlank: false,
   *     showErrorMessage: true,
   *     error: 'Please enter a number less than 10 or equal to 10'
   *   })
   *   .build();
   * fRange.setDataValidation(rule);
   * ```
   */
  requireNumberLessThanOrEqualTo(num, isInteger) {
    this._rule.formula1 = `${num}`;
    this._rule.formula2 = void 0;
    this._rule.operator = "lessThanOrEqual" /* LESS_THAN_OR_EQUAL */;
    this._rule.type = isInteger ? "whole" /* WHOLE */ : "decimal" /* DECIMAL */;
    return this;
  }
  /**
   * Sets the data validation rule to require a number that does not fall between, and is neither of, two specified numbers.
   * @param {number} start - The lowest unacceptable value.
   * @param {number} end - The highest unacceptable value.
   * @param {boolean} [isInteger] - Optional parameter, indicating whether the number to be verified is an integer.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new data validation rule that requires a number not between 1 and 10 for the range A1:B10
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireNumberNotBetween(1, 10)
   *   .setOptions({
   *     allowBlank: false,
   *     showErrorMessage: true,
   *     error: 'Please enter a number not between 1 and 10'
   *   })
   *   .build();
   * fRange.setDataValidation(rule);
   * ```
   */
  requireNumberNotBetween(start, end, isInteger) {
    this._rule.formula1 = `${start}`;
    this._rule.formula2 = `${end}`;
    this._rule.operator = "notBetween" /* NOT_BETWEEN */;
    this._rule.type = isInteger ? "whole" /* WHOLE */ : "decimal" /* DECIMAL */;
    return this;
  }
  /**
   * Sets the data validation rule to require a number not equal to the given value.
   * @param {number} num - The sole unacceptable value.
   * @param {boolean} [isInteger] - Indicates whether the required number is an integer.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new data validation rule that requires a number not equal to 10 for the range A1:B10
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireNumberNotEqualTo(10)
   *   .setOptions({
   *     allowBlank: false,
   *     showErrorMessage: true,
   *     error: 'Please enter a number not equal to 10'
   *   })
   *   .build();
   * fRange.setDataValidation(rule);
   * ```
   */
  requireNumberNotEqualTo(num, isInteger) {
    this._rule.formula1 = `${num}`;
    this._rule.formula2 = void 0;
    this._rule.operator = "notEqual" /* NOT_EQUAL */;
    this._rule.type = isInteger ? "whole" /* WHOLE */ : "decimal" /* DECIMAL */;
    return this;
  }
  /**
   * Sets a data validation rule that requires the user to enter a value from a list of specific values.
   * The list can be displayed in a dropdown, and the user can choose multiple values according to the settings.
   * @param {string[]} values - An array of acceptable values.
   * @param {boolean} [multiple] - Optional parameter indicating whether the user can select multiple values.
   * @param {boolean} [showDropdown] - Optional parameter indicating whether to display the list in a dropdown.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new data validation rule that requires the user to enter a value from the list ['Yes', 'No'] for the range A1:B10
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireValueInList(['Yes', 'No'])
   *   .setOptions({
   *     allowBlank: true,
   *     showErrorMessage: true,
   *     error: 'Please enter a value from the list'
   *   })
   *   .build();
   * fRange.setDataValidation(rule);
   * ```
   */
  requireValueInList(values, multiple, showDropdown) {
    this._rule.type = multiple ? "listMultiple" /* LIST_MULTIPLE */ : "list" /* LIST */;
    this._rule.formula1 = values.join(",");
    this._rule.formula2 = void 0;
    this._rule.showDropDown = showDropdown != null ? showDropdown : true;
    return this;
  }
  /**
   * Sets a data validation rule that requires the user to enter a value within a specific range.
   * The range is defined by an FRange object, which contains the unit ID, sheet name, and cell range.
   * @param {FRange} range - An FRange object representing the range of values that the user can enter.
   * @param {boolean} [multiple] - Optional parameter indicating whether the user can select multiple values.
   * @param {boolean} [showDropdown] - Optional parameter indicating whether to display the list in a dropdown.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set the values in the range B1:B2
   * const fRange = fWorksheet.getRange('B1:B2');
   * fRange.setValues([
   *   ['Yes'],
   *   ['No']
   * ]);
   *
   * // Create a new data validation rule that requires the user to enter a value from the range B1:B2 for the range A1:A10
   * const rule = univerAPI.newDataValidation()
   *   .requireValueInRange(fRange)
   *   .setOptions({
   *     allowBlank: false,
   *     showErrorMessage: true,
   *     error: 'Please enter a value from the list'
   *   })
   *   .build();
   * const cell = fWorksheet.getRange('A1');
   * cell.setDataValidation(rule);
   * ```
   */
  requireValueInRange(range, multiple, showDropdown) {
    this._rule.type = multiple ? "listMultiple" /* LIST_MULTIPLE */ : "list" /* LIST */;
    this._rule.formula1 = `=${serializeRangeToRefString({
      unitId: range.getUnitId(),
      sheetName: range.getSheetName(),
      range: range.getRange()
    })}`;
    this._rule.formula2 = void 0;
    this._rule.showDropDown = showDropdown != null ? showDropdown : true;
    return this;
  }
  /**
   * Sets whether to allow invalid data and configures the error style.
   * If invalid data is not allowed, the error style will be set to STOP, indicating that data entry must stop upon encountering an error.
   * If invalid data is allowed, the error style will be set to WARNING, indicating that a warning will be displayed when invalid data is entered, but data entry can continue.
   * @param {boolean} allowInvalidData - Whether to allow invalid data.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set the data validation for cell A1:B2 to allow invalid data, so A1:B2 will display a warning when invalid data is entered
   * const fRange = fWorksheet.getRange('A1:B2');
   * const rule = univerAPI.newDataValidation()
   *   .requireValueInList(['Yes', 'No'])
   *   .setAllowInvalid(true)
   *   .build();
   * fRange.setDataValidation(rule);
   *
   * // Set the data validation for cell C1:D2 to not allow invalid data, so C1:D2 will stop data entry when invalid data is entered
   * const fRange2 = fWorksheet.getRange('C1:D2');
   * const rule2 = univerAPI.newDataValidation()
   *   .requireValueInList(['Yes', 'No'])
   *   .setAllowInvalid(false)
   *   .build();
   * fRange2.setDataValidation(rule2);
   * ```
   */
  setAllowInvalid(allowInvalidData) {
    this._rule.errorStyle = !allowInvalidData ? 1 /* STOP */ : 2 /* WARNING */;
    return this;
  }
  /**
   * Sets whether to allow blank values.
   * @param {boolean} allowBlank - Whether to allow blank values.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * // Assume current sheet is empty data
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set the data validation for cell A1:B2 to allow blank values
   * const fRange = fWorksheet.getRange('A1:B2');
   * const rule = univerAPI.newDataValidation()
   *   .requireValueInList(['Yes', 'No'])
   *   .setAllowBlank(true)
   *   .build();
   * fRange.setDataValidation(rule);
   *
   * // Set the data validation for cell C1:D2 to not allow blank values
   * const fRange2 = fWorksheet.getRange('C1:D2');
   * const rule2 = univerAPI.newDataValidation()
   *   .requireValueInList(['Yes', 'No'])
   *   .setAllowBlank(false)
   *   .build();
   * fRange2.setDataValidation(rule2);
   * ```
   */
  setAllowBlank(allowBlank) {
    this._rule.allowBlank = allowBlank;
    return this;
  }
  /**
   * Sets the options for the data validation rule.
   * @param {Partial<IDataValidationRuleOptions>} options - The options to set for the data validation rule.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new data validation rule that requires the user to enter a value from the list ['Yes', 'No'] for the range A1:B10
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireValueInList(['Yes', 'No'])
   *   .setOptions({
   *     allowBlank: true,
   *     showErrorMessage: true,
   *     error: 'Please enter a value from the list'
   *   })
   *   .build();
   * fRange.setDataValidation(rule);
   * ```
   */
  setOptions(options) {
    Object.assign(this._rule, options);
    return this;
  }
};

// ../packages/sheets-data-validation/src/facade/f-data-validation.ts
var FDataValidation = class {
  constructor(rule, worksheet, _injector) {
    __publicField(this, "rule");
    __publicField(this, "_worksheet");
    __publicField(this, "_injector");
    this._injector = _injector;
    this.rule = rule;
    this._worksheet = worksheet;
  }
  /**
   * Gets whether invalid data is allowed based on the error style value
   * @returns {boolean} true if invalid data is allowed, false otherwise
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const rules = fWorksheet.getDataValidations();
   * rules.forEach((rule) => {
   *   console.log(rule, rule.getAllowInvalid());
   * });
   * ```
   */
  getAllowInvalid() {
    return this.rule.errorStyle !== 1 /* STOP */;
  }
  /**
   * Gets the data validation type of the rule
   * @returns {DataValidationType | string} The data validation type
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const rules = fWorksheet.getDataValidations();
   * rules.forEach((rule) => {
   *   console.log(rule, rule.getCriteriaType());
   * });
   * ```
   */
  getCriteriaType() {
    return this.rule.type;
  }
  /**
   * Gets the values used for criteria evaluation
   * @returns {[string | undefined, string | undefined, string | undefined]} An array containing the operator, formula1, and formula2 values
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const rules = fWorksheet.getDataValidations();
   * rules.forEach((rule) => {
   *   console.log(rule);
   *   const criteriaValues = rule.getCriteriaValues();
   *   const [operator, formula1, formula2] = criteriaValues;
   *   console.log(operator, formula1, formula2);
   * });
   * ```
   */
  getCriteriaValues() {
    return [this.rule.operator, this.rule.formula1, this.rule.formula2];
  }
  /**
   * Gets the help text information, which is used to provide users with guidance and support
   * @returns {string | undefined} Returns the help text information. If there is no error message, it returns an undefined value
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireNumberBetween(1, 10)
   *   .setOptions({
   *     allowBlank: true,
   *     showErrorMessage: true,
   *     error: 'Please enter a number between 1 and 10'
   *   })
   *   .build();
   * fRange.setDataValidation(rule);
   * console.log(fRange.getDataValidation().getHelpText()); // 'Please enter a number between 1 and 10'
   * ```
   */
  getHelpText() {
    return this.rule.error;
  }
  /**
   * Creates a new instance of FDataValidationBuilder using the current rule object
   * @returns {FDataValidationBuilder} A new FDataValidationBuilder instance with the same rule configuration
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireNumberBetween(1, 10)
   *   .setOptions({
   *     allowBlank: true,
   *     showErrorMessage: true,
   *     error: 'Please enter a number between 1 and 10'
   *   })
   *   .build();
   * fRange.setDataValidation(rule);
   *
   * const builder = fRange.getDataValidation().copy();
   * const newRule = builder
   *   .requireNumberBetween(1, 5)
   *   .setOptions({
   *     error: 'Please enter a number between 1 and 5'
   *   })
   *   .build();
   * fRange.setDataValidation(newRule);
   * ```
   */
  copy() {
    return new FDataValidationBuilder(this.rule);
  }
  /**
   * Gets whether the data validation rule is applied to the worksheet
   * @returns {boolean} true if the rule is applied, false otherwise
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const rules = fWorksheet.getDataValidations();
   * rules.forEach((rule) => {
   *   console.log(rule, rule.getApplied());
   * });
   *
   * const fRange = fWorksheet.getRange('A1:B10');
   * console.log(fRange.getDataValidation()?.getApplied());
   * ```
   */
  getApplied() {
    if (!this._worksheet) {
      return false;
    }
    const dataValidationModel = this._injector.get(DataValidationModel);
    const currentRule = dataValidationModel.getRuleById(this._worksheet.getUnitId(), this._worksheet.getSheetId(), this.rule.uid);
    if (currentRule && currentRule.ranges.length) {
      return true;
    }
    return false;
  }
  /**
   * Gets the ranges to which the data validation rule is applied
   * @returns {FRange[]} An array of FRange objects representing the ranges to which the data validation rule is applied
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const rules = fWorksheet.getDataValidations();
   * rules.forEach((rule) => {
   *   console.log(rule);
   *   const ranges = rule.getRanges();
   *   ranges.forEach((range) => {
   *     console.log(range.getA1Notation());
   *   });
   * });
   * ```
   */
  getRanges() {
    if (!this.getApplied()) {
      return [];
    }
    const workbook = this._injector.get(IUniverInstanceService).getUnit(this._worksheet.getUnitId());
    return this.rule.ranges.map((range) => this._injector.createInstance(FRange, workbook, this._worksheet, range));
  }
  /**
   * Gets the unit ID of the worksheet
   * @returns {string | undefined} The unit ID of the worksheet
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B10');
   * console.log(fRange.getDataValidation().getUnitId());
   * ```
   */
  getUnitId() {
    var _a;
    return (_a = this._worksheet) == null ? void 0 : _a.getUnitId();
  }
  /**
   * Gets the sheet ID of the worksheet
   * @returns {string | undefined} The sheet ID of the worksheet
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B10');
   * console.log(fRange.getDataValidation().getSheetId());
   * ```
   */
  getSheetId() {
    var _a;
    return (_a = this._worksheet) == null ? void 0 : _a.getSheetId();
  }
  /**
   * Set Criteria for the data validation rule
   * @param {DataValidationType} type - The type of data validation criteria
   * @param {[DataValidationOperator, string, string]} values - An array containing the operator, formula1, and formula2 values
   * @param {boolean} [allowBlank] - Whether to allow blank values
   * @returns {FDataValidation} The current instance for method chaining
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new data validation rule that requires a number equal to 20 for the range A1:B10
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireNumberEqualTo(20)
   *   .build();
   * fRange.setDataValidation(rule);
   *
   * // Change the rule criteria to require a number between 1 and 10
   * fRange.getDataValidation().setCriteria(
   *   univerAPI.Enum.DataValidationType.DECIMAL,
   *   [univerAPI.Enum.DataValidationOperator.BETWEEN, '1', '10']
   * );
   * ```
   */
  setCriteria(type, values, allowBlank = true) {
    if (this.getApplied()) {
      const commandService = this._injector.get(ICommandService);
      const res = commandService.syncExecuteCommand(UpdateSheetDataValidationSettingCommand.id, {
        unitId: this.getUnitId(),
        subUnitId: this.getSheetId(),
        ruleId: this.rule.uid,
        setting: {
          operator: values[0],
          formula1: values[1],
          formula2: values[2],
          type: this.rule.type,
          allowBlank
        }
      });
      if (!res) {
        throw new Error("setCriteria failed");
      }
    }
    this.rule.operator = values[0];
    this.rule.formula1 = values[1];
    this.rule.formula2 = values[2];
    this.rule.type = type;
    this.rule.allowBlank = allowBlank;
    return this;
  }
  /**
   * Set the options for the data validation rule
   * @param {Partial<IDataValidationRuleOptions>} options - The options to set for the data validation rule
   * @returns {FDataValidation} The current instance for method chaining
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new data validation rule that requires a number equal to 20 for the range A1:B10
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireNumberEqualTo(20)
   *   .build();
   * fRange.setDataValidation(rule);
   *
   * // Supplement the rule with additional options
   * fRange.getDataValidation().setOptions({
   *   allowBlank: true,
   *   showErrorMessage: true,
   *   error: 'Please enter a valid value'
   * });
   * ```
   */
  setOptions(options) {
    if (this.getApplied()) {
      const commandService = this._injector.get(ICommandService);
      const res = commandService.syncExecuteCommand(UpdateSheetDataValidationOptionsCommand.id, {
        unitId: this.getUnitId(),
        subUnitId: this.getSheetId(),
        ruleId: this.rule.uid,
        options: {
          ...getRuleOptions(this.rule),
          ...options
        }
      });
      if (!res) {
        throw new Error("setOptions failed");
      }
    }
    Object.assign(this.rule, options);
    return this;
  }
  /**
   * Set the ranges to the data validation rule
   * @param {FRange[]} ranges - New ranges array
   * @returns {FDataValidation} The current instance for method chaining
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new data validation rule that requires a number equal to 20 for the range A1:B10
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireNumberEqualTo(20)
   *   .build();
   * fRange.setDataValidation(rule);
   *
   * // Change the range to C1:D10
   * const newRuleRange = fWorksheet.getRange('C1:D10');
   * fRange.getDataValidation().setRanges([newRuleRange]);
   * ```
   */
  setRanges(ranges) {
    if (this.getApplied()) {
      const commandService = this._injector.get(ICommandService);
      const res = commandService.syncExecuteCommand(UpdateSheetDataValidationRangeCommand.id, {
        unitId: this.getUnitId(),
        subUnitId: this.getSheetId(),
        ruleId: this.rule.uid,
        ranges: ranges.map((range) => range.getRange())
      });
      if (!res) {
        throw new Error("setRanges failed");
      }
    }
    this.rule.ranges = ranges.map((range) => range.getRange());
    return this;
  }
  /**
   * Delete the data validation rule from the worksheet
   * @returns {boolean} true if the rule is deleted successfully, false otherwise
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new data validation rule that requires a number equal to 20 for the range A1:B10
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireNumberEqualTo(20)
   *   .build();
   * fRange.setDataValidation(rule);
   *
   * // Delete the data validation rule
   * fRange.getDataValidation().delete();
   * ```
   */
  delete() {
    if (!this.getApplied()) {
      return false;
    }
    const commandService = this._injector.get(ICommandService);
    return commandService.syncExecuteCommand(RemoveSheetDataValidationCommand.id, {
      unitId: this.getUnitId(),
      subUnitId: this.getSheetId(),
      ruleId: this.rule.uid
    });
  }
};

// ../packages/sheets-data-validation/src/facade/f-range.ts
var FRangeDataValidationMixin = class extends FRange {
  setDataValidation(rule) {
    if (!rule) {
      this._commandService.syncExecuteCommand(ClearRangeDataValidationCommand.id, {
        unitId: this._workbook.getUnitId(),
        subUnitId: this._worksheet.getSheetId(),
        ranges: [this._range]
      });
      return this;
    }
    const params = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      rule: {
        ...rule.rule,
        ranges: [this._range]
      }
    };
    this._commandService.syncExecuteCommand(AddSheetDataValidationCommand.id, params);
    return this;
  }
  getDataValidation() {
    const validatorService = this._injector.get(SheetsDataValidationValidatorService);
    const rule = validatorService.getDataValidation(
      this._workbook.getUnitId(),
      this._worksheet.getSheetId(),
      [this._range]
    );
    if (rule) {
      return new FDataValidation(rule, this._worksheet, this._injector);
    }
    return rule;
  }
  getDataValidations() {
    const validatorService = this._injector.get(SheetsDataValidationValidatorService);
    return validatorService.getDataValidations(
      this._workbook.getUnitId(),
      this._worksheet.getSheetId(),
      [this._range]
    ).map((rule) => new FDataValidation(rule, this._worksheet, this._injector));
  }
  async getValidatorStatus() {
    const validatorService = this._injector.get(SheetsDataValidationValidatorService);
    return validatorService.validatorRanges(
      this._workbook.getUnitId(),
      this._worksheet.getSheetId(),
      [this._range]
    );
  }
};
FRange.extend(FRangeDataValidationMixin);

// ../packages/sheets-data-validation/src/facade/f-univer.ts
var FUnvierDataValidationMixin = class extends FUniver {
  /**
   * @deprecated use `univerAPI.newDataValidation()` as instead.
   * @returns {FDataValidationBuilder} A new instance of the FDataValidationBuilder class
   */
  static newDataValidation() {
    return new FDataValidationBuilder();
  }
  newDataValidation() {
    return new FDataValidationBuilder();
  }
  /**
   * @ignore
   */
  // eslint-disable-next-line max-lines-per-function
  _initialize(injector) {
    const commandService = injector.get(ICommandService);
    this.registerEventHandler(
      this.Event.SheetDataValidationChanged,
      () => {
        if (!injector.has(SheetDataValidationModel)) return { dispose: () => {
        } };
        const sheetDataValidationModel = injector.get(SheetDataValidationModel);
        return sheetDataValidationModel.ruleChange$.subscribe((ruleChange) => {
          const { unitId, subUnitId, rule, oldRule, type } = ruleChange;
          const target = this.getSheetTarget(unitId, subUnitId);
          if (!target) {
            return;
          }
          const { workbook, worksheet } = target;
          const fRule = new FDataValidation(rule, worksheet.getSheet(), this._injector);
          this.fireEvent(this.Event.SheetDataValidationChanged, {
            origin: ruleChange,
            worksheet,
            workbook,
            changeType: type,
            oldRule,
            rule: fRule
          });
        });
      }
    );
    this.registerEventHandler(
      this.Event.SheetDataValidatorStatusChanged,
      () => {
        if (!injector.has(SheetDataValidationModel)) return { dispose: () => {
        } };
        const sheetDataValidationModel = injector.get(SheetDataValidationModel);
        return sheetDataValidationModel.validStatusChange$.subscribe((statusChange) => {
          const { unitId, subUnitId, ruleId, status, row, col } = statusChange;
          const target = this.getSheetTarget(unitId, subUnitId);
          if (!target) {
            return;
          }
          const { workbook, worksheet } = target;
          const rule = worksheet.getDataValidation(ruleId);
          if (!rule) {
            return;
          }
          this.fireEvent(this.Event.SheetDataValidatorStatusChanged, {
            workbook,
            worksheet,
            row,
            column: col,
            rule,
            status
          });
        });
      }
    );
    this.registerEventHandler(
      this.Event.BeforeSheetDataValidationAdd,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        if (commandInfo.id === AddSheetDataValidationCommand.id) {
          const params = commandInfo.params;
          const target = this.getSheetTarget(params.unitId, params.subUnitId);
          if (!target) {
            return;
          }
          const { workbook, worksheet } = target;
          const eventParams = {
            worksheet,
            workbook,
            rule: params.rule
          };
          this.fireEvent(this.Event.BeforeSheetDataValidationAdd, eventParams);
          if (eventParams.cancel) {
            throw new CanceledError();
          }
        }
      })
    );
    this.registerEventHandler(
      this.Event.BeforeSheetDataValidationCriteriaUpdate,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        if (commandInfo.id === UpdateSheetDataValidationSettingCommand.id) {
          const params = commandInfo.params;
          const target = this.getSheetTarget(params.unitId, params.subUnitId);
          if (!target) {
            return;
          }
          const { workbook, worksheet } = target;
          const rule = worksheet.getDataValidation(params.ruleId);
          if (!rule) {
            return;
          }
          const eventParams = {
            worksheet,
            workbook,
            rule,
            ruleId: params.ruleId,
            newCriteria: params.setting
          };
          this.fireEvent(this.Event.BeforeSheetDataValidationCriteriaUpdate, eventParams);
          if (eventParams.cancel) {
            throw new CanceledError();
          }
        }
      })
    );
    this.registerEventHandler(
      this.Event.BeforeSheetDataValidationRangeUpdate,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        if (commandInfo.id === UpdateSheetDataValidationRangeCommand.id) {
          const params = commandInfo.params;
          const target = this.getSheetTarget(params.unitId, params.subUnitId);
          if (!target) {
            return;
          }
          const { workbook, worksheet } = target;
          const rule = worksheet.getDataValidation(params.ruleId);
          if (!rule) {
            return;
          }
          const eventParams = {
            worksheet,
            workbook,
            rule,
            ruleId: params.ruleId,
            newRanges: params.ranges
          };
          this.fireEvent(this.Event.BeforeSheetDataValidationRangeUpdate, eventParams);
          if (eventParams.cancel) {
            throw new CanceledError();
          }
        }
      })
    );
    this.registerEventHandler(
      this.Event.BeforeSheetDataValidationOptionsUpdate,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        if (commandInfo.id === UpdateSheetDataValidationOptionsCommand.id) {
          const params = commandInfo.params;
          const target = this.getSheetTarget(params.unitId, params.subUnitId);
          if (!target) {
            return;
          }
          const { workbook, worksheet } = target;
          const rule = worksheet.getDataValidation(params.ruleId);
          if (!rule) {
            return;
          }
          const eventParams = {
            worksheet,
            workbook,
            rule,
            ruleId: params.ruleId,
            newOptions: params.options
          };
          this.fireEvent(this.Event.BeforeSheetDataValidationOptionsUpdate, eventParams);
          if (eventParams.cancel) {
            throw new CanceledError();
          }
        }
      })
    );
    this.registerEventHandler(
      this.Event.BeforeSheetDataValidationDelete,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        if (commandInfo.id === RemoveSheetDataValidationCommand.id) {
          const params = commandInfo.params;
          const target = this.getSheetTarget(params.unitId, params.subUnitId);
          if (!target) {
            return;
          }
          const { workbook, worksheet } = target;
          const rule = worksheet.getDataValidation(params.ruleId);
          if (!rule) {
            return;
          }
          const eventParams = {
            worksheet,
            workbook,
            rule,
            ruleId: params.ruleId
          };
          this.fireEvent(this.Event.BeforeSheetDataValidationDelete, eventParams);
          if (eventParams.cancel) {
            throw new CanceledError();
          }
        }
      })
    );
    this.registerEventHandler(
      this.Event.BeforeSheetDataValidationDeleteAll,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        if (commandInfo.id === RemoveSheetAllDataValidationCommand.id) {
          const params = commandInfo.params;
          const target = this.getSheetTarget(params.unitId, params.subUnitId);
          if (!target) {
            return;
          }
          const { workbook, worksheet } = target;
          const eventParams = {
            worksheet,
            workbook,
            rules: worksheet.getDataValidations()
          };
          this.fireEvent(this.Event.BeforeSheetDataValidationDeleteAll, eventParams);
          if (eventParams.cancel) {
            throw new CanceledError();
          }
        }
      })
    );
  }
};
FUniver.extend(FUnvierDataValidationMixin);

// ../packages/sheets-data-validation/src/facade/f-workbook.ts
var FWorkbookDataValidationMixin = class extends FWorkbook {
  _initialize() {
    Object.defineProperty(this, "_dataValidationModel", {
      get() {
        return this._injector.get(SheetDataValidationModel);
      }
    });
  }
  getValidatorStatus() {
    const validatorService = this._injector.get(SheetsDataValidationValidatorService);
    return validatorService.validatorWorkbook(this._workbook.getUnitId());
  }
  // region DataValidationHooks
  onDataValidationChange(callback) {
    return toDisposable(this._dataValidationModel.ruleChange$.pipe(filter((change) => change.unitId === this._workbook.getUnitId())).subscribe(callback));
  }
  onDataValidationStatusChange(callback) {
    return toDisposable(this._dataValidationModel.validStatusChange$.pipe(filter((change) => change.unitId === this._workbook.getUnitId())).subscribe(callback));
  }
  onBeforeAddDataValidation(callback) {
    return toDisposable(this._commandService.beforeCommandExecuted((commandInfo, options) => {
      const params = commandInfo.params;
      if (commandInfo.id === AddSheetDataValidationCommand.id) {
        if (params.unitId !== this._workbook.getUnitId()) {
          return;
        }
        if (callback(params, options) === false) {
          throw new Error("Command is stopped by the hook onBeforeAddDataValidation");
        }
      }
    }));
  }
  onBeforeUpdateDataValidationCriteria(callback) {
    return toDisposable(this._commandService.beforeCommandExecuted((commandInfo, options) => {
      const params = commandInfo.params;
      if (commandInfo.id === UpdateSheetDataValidationSettingCommand.id) {
        if (params.unitId !== this._workbook.getUnitId()) {
          return;
        }
        if (callback(params, options) === false) {
          throw new Error("Command is stopped by the hook onBeforeUpdateDataValidationCriteria");
        }
      }
    }));
  }
  onBeforeUpdateDataValidationRange(callback) {
    return toDisposable(this._commandService.beforeCommandExecuted((commandInfo, options) => {
      const params = commandInfo.params;
      if (commandInfo.id === UpdateSheetDataValidationRangeCommand.id) {
        if (params.unitId !== this._workbook.getUnitId()) {
          return;
        }
        if (callback(params, options) === false) {
          throw new Error("Command is stopped by the hook onBeforeUpdateDataValidationRange");
        }
      }
    }));
  }
  onBeforeUpdateDataValidationOptions(callback) {
    return toDisposable(this._commandService.beforeCommandExecuted((commandInfo, options) => {
      const params = commandInfo.params;
      if (commandInfo.id === UpdateSheetDataValidationOptionsCommand.id) {
        if (params.unitId !== this._workbook.getUnitId()) {
          return;
        }
        if (callback(params, options) === false) {
          throw new Error("Command is stopped by the hook onBeforeUpdateDataValidationOptions");
        }
      }
    }));
  }
  onBeforeDeleteDataValidation(callback) {
    return toDisposable(this._commandService.beforeCommandExecuted((commandInfo, options) => {
      const params = commandInfo.params;
      if (commandInfo.id === RemoveSheetDataValidationCommand.id) {
        if (params.unitId !== this._workbook.getUnitId()) {
          return;
        }
        if (callback(params, options) === false) {
          throw new Error("Command is stopped by the hook onBeforeDeleteDataValidation");
        }
      }
    }));
  }
  onBeforeDeleteAllDataValidation(callback) {
    return toDisposable(this._commandService.beforeCommandExecuted((commandInfo, options) => {
      const params = commandInfo.params;
      if (commandInfo.id === RemoveSheetAllDataValidationCommand.id) {
        if (params.unitId !== this._workbook.getUnitId()) {
          return;
        }
        if (callback(params, options) === false) {
          throw new Error("Command is stopped by the hook onBeforeDeleteAllDataValidation");
        }
      }
    }));
  }
};
FWorkbook.extend(FWorkbookDataValidationMixin);

// ../packages/sheets-data-validation/src/facade/f-worksheet.ts
var FWorksheetDataValidationMixin = class extends FWorksheet {
  getDataValidations() {
    const dataValidationModel = this._injector.get(DataValidationModel);
    return dataValidationModel.getRules(this._workbook.getUnitId(), this._worksheet.getSheetId()).map((rule) => new FDataValidation(rule, this._worksheet, this._injector));
  }
  getValidatorStatus() {
    const validatorService = this._injector.get(SheetsDataValidationValidatorService);
    return validatorService.validatorWorksheet(
      this._workbook.getUnitId(),
      this._worksheet.getSheetId()
    );
  }
  getValidatorStatusAsync() {
    return this.getValidatorStatus();
  }
  getDataValidation(ruleId) {
    const dataValidationModel = this._injector.get(DataValidationModel);
    const rule = dataValidationModel.getRuleById(this._workbook.getUnitId(), this._worksheet.getSheetId(), ruleId);
    if (rule) {
      return new FDataValidation(rule, this._worksheet, this._injector);
    }
    return null;
  }
};
FWorksheet.extend(FWorksheetDataValidationMixin);

// ../packages/sheets-data-validation/src/facade/f-event.ts
var FDataValidationEvent = class {
  get SheetDataValidationChanged() {
    return "SheetDataValidationChanged";
  }
  get SheetDataValidatorStatusChanged() {
    return "SheetDataValidatorStatusChanged";
  }
  get BeforeSheetDataValidationAdd() {
    return "BeforeSheetDataValidationAdd";
  }
  get BeforeSheetDataValidationDelete() {
    return "BeforeSheetDataValidationDelete";
  }
  get BeforeSheetDataValidationDeleteAll() {
    return "BeforeSheetDataValidationDeleteAll";
  }
  get BeforeSheetDataValidationCriteriaUpdate() {
    return "BeforeSheetDataValidationCriteriaUpdate";
  }
  get BeforeSheetDataValidationRangeUpdate() {
    return "BeforeSheetDataValidationRangeUpdate";
  }
  get BeforeSheetDataValidationOptionsUpdate() {
    return "BeforeSheetDataValidationOptionsUpdate";
  }
};
FEventName.extend(FDataValidationEvent);

// ../packages/engine-formula/src/facade/f-formula.ts
var FFormula = class extends FBase {
  constructor(_commandService, _injector, _lexerTreeBuilder, _configService) {
    super();
    this._commandService = _commandService;
    this._injector = _injector;
    this._lexerTreeBuilder = _lexerTreeBuilder;
    this._configService = _configService;
    this._initialize();
  }
  /**
   * @ignore
   */
  _initialize() {
  }
  /**
   * The tree builder for formula string.
   * @type {LexerTreeBuilder}
   */
  get lexerTreeBuilder() {
    return this._lexerTreeBuilder;
  }
  /**
   * Offsets the formula
   * @param {string} formulaString - The formula string to offset
   * @param {number} refOffsetX - The offset column
   * @param {number} refOffsetY - The offset row
   * @param {boolean} [ignoreAbsolute] - Whether to ignore the absolute reference
   * @returns {string} The offset formula string
   *
   * @example
   * ```ts
   * const formulaEngine = univerAPI.getFormula();
   * const result = formulaEngine.moveFormulaRefOffset('=SUM(A1,B2)', 1, 1);
   * console.log(result);
   * ```
   */
  moveFormulaRefOffset(formulaString, refOffsetX, refOffsetY, ignoreAbsolute) {
    return this._lexerTreeBuilder.moveFormulaRefOffset(formulaString, refOffsetX, refOffsetY, ignoreAbsolute);
  }
  /**
   * Resolves the formula string to a 'node' node
   * @param {string} formulaString - The formula string to resolve
   * @returns {Array<ISequenceNode | string>} The nodes of the formula string
   *
   * @example
   * ```ts
   * const formulaEngine = univerAPI.getFormula();
   * const nodes = formulaEngine.sequenceNodesBuilder('=SUM(A1,B2)');
   * console.log(nodes);
   * ```
   */
  sequenceNodesBuilder(formulaString) {
    return this._lexerTreeBuilder.sequenceNodesBuilder(formulaString) || [];
  }
  /**
   * Start the calculation of the formula.
   *
   * @example
   * ```ts
   * const formulaEngine = univerAPI.getFormula();
   * formulaEngine.executeCalculation();
   * ```
   */
  executeCalculation() {
    this._commandService.executeCommand(SetFormulaCalculationStartMutation.id, { commands: [], forceCalculation: true }, { onlyLocal: true });
  }
  /**
   * Stop the calculation of the formula.
   *
   * @example
   * ```ts
   * const formulaEngine = univerAPI.getFormula();
   * formulaEngine.stopCalculation();
   * ```
   */
  stopCalculation() {
    this._commandService.executeCommand(SetFormulaCalculationStopMutation.id, {});
  }
  /**
   * Listening calculation starts.
   * @param {Function} callback - The callback function to be called when the formula calculation starts.
   * @returns {IDisposable} The disposable instance.
   *
   * @example
   * ```ts
   * const formulaEngine = univerAPI.getFormula();
   * formulaEngine.calculationStart((forceCalculation) => {
   *   console.log('Calculation start', forceCalculation);
   * });
   * ```
   */
  calculationStart(callback) {
    return this._commandService.onCommandExecuted((command) => {
      if (command.id === SetFormulaCalculationStartMutation.id) {
        const params = command.params;
        callback(params.forceCalculation);
      }
    });
  }
  /**
   * Listening calculation ends.
   * @param {Function} callback - The callback function to be called when the formula calculation ends.
   * @returns {IDisposable} The disposable instance.
   *
   * @example
   * ```ts
   * const formulaEngine = univerAPI.getFormula();
   * formulaEngine.calculationEnd((functionsExecutedState) => {
   *   console.log('Calculation end', functionsExecutedState);
   * });
   * ```
   */
  calculationEnd(callback) {
    return this._commandService.onCommandExecuted((command) => {
      if (command.id !== SetFormulaCalculationNotificationMutation.id) {
        return;
      }
      const params = command.params;
      if (params.functionsExecutedState !== void 0) {
        callback(params.functionsExecutedState);
      }
    });
  }
  /**
   * Wait for computing in the Univer instance to complete. Please note that this does not only include formula calculation,
   * but also other computing tasks, e.g. pivot table calculation.
   * @param {number} [timeout] The maximum time to wait for the computing to complete, in milliseconds. The default
   * value is 30,000 milliseconds.
   * @returns {Promise<boolean>} This method returns `true` if the computing is complete. If the timeout is reached, this
   * method returns `false`.
   *
   * @example
   * ```ts
   * const formulaEngine = univerAPI.getFormula();
   * formulaEngine.whenComputingCompleteAsync(3000).then((isComplete) => {
   *   console.log('Computing complete:', isComplete);
   * });
   * ```
   */
  whenComputingCompleteAsync(timeout) {
    const gcss = this._injector.get(GlobalComputingStatusService);
    if (gcss.computingStatus) return Promise.resolve(true);
    return firstValueFrom(race(
      gcss.computingStatus$.pipe(filter((computing) => computing)),
      timer(timeout != null ? timeout : 3e4).pipe(map(() => false))
    ));
  }
  /**
   * @deprecated Use `whenComputingCompleteAsync` instead.
   * @returns {Promise<void>} This method returns a promise that resolves when the calculation is complete.
   */
  onCalculationEnd() {
    return new Promise((resolve, reject) => {
      const timer2 = setTimeout(() => {
        reject(new Error("Calculation end timeout"));
      }, 3e4);
      const disposable = this.calculationEnd(() => {
        clearTimeout(timer2);
        disposable.dispose();
        resolve();
      });
    });
  }
  /**
   * Listening calculation processing.
   * @param {Function} callback - The callback function to be called when the formula calculation is in progress.
   * @returns {IDisposable} The disposable instance.
   *
   * @example
   * ```ts
   * const formulaEngine = univerAPI.getFormula();
   * formulaEngine.calculationProcessing((stageInfo) => {
   *   console.log('Calculation processing', stageInfo);
   * });
   * ```
   */
  calculationProcessing(callback) {
    return this._commandService.onCommandExecuted((command) => {
      if (command.id !== SetFormulaCalculationNotificationMutation.id) {
        return;
      }
      const params = command.params;
      if (params.stageInfo !== void 0) {
        callback(params.stageInfo);
      }
    });
  }
  /**
   * When a formula contains a circular reference, set the maximum number of iterations for the formula calculation.
   * @param {number} maxIteration The maximum number of iterations. The default value is 1.
   *
   * @example
   * ```ts
   * // Set the maximum number of iterations for the formula calculation to 5.
   * // The default value is 1.
   * const formulaEngine = univerAPI.getFormula();
   * formulaEngine.setMaxIteration(5);
   * ```
   */
  setMaxIteration(maxIteration) {
    this._configService.setConfig(ENGINE_FORMULA_CYCLE_REFERENCE_COUNT, maxIteration);
  }
};
FFormula = __decorateClass([
  __decorateParam(0, Inject(ICommandService)),
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, Inject(LexerTreeBuilder)),
  __decorateParam(3, IConfigService)
], FFormula);

// ../packages/engine-formula/src/facade/f-univer.ts
var FUniverEngineFormulaMixin = class extends FUniver {
  getFormula() {
    return this._injector.createInstance(FFormula);
  }
};
FUniver.extend(FUniverEngineFormulaMixin);

// ../packages/sheets-filter/src/facade/f-filter.ts
var FFilter = class {
  constructor(_workbook, _worksheet, _filterModel, _injector, _commandSrv) {
    this._workbook = _workbook;
    this._worksheet = _worksheet;
    this._filterModel = _filterModel;
    this._injector = _injector;
    this._commandSrv = _commandSrv;
  }
  /**
   * Get the filtered out rows by this filter.
   * @returns {number[]} Filtered out rows by this filter.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set some values of the range C1:F10
   * const fRange = fWorksheet.getRange('C1:F10');
   * fRange.setValues([
   *   [1, 2, 3, 4],
   *   [2, 3, 4, 5],
   *   [3, 4, 5, 6],
   *   [4, 5, 6, 7],
   *   [5, 6, 7, 8],
   *   [6, 7, 8, 9],
   *   [7, 8, 9, 10],
   *   [8, 9, 10, 11],
   *   [9, 10, 11, 12],
   *   [10, 11, 12, 13],
   * ]);
   *
   * // Create a filter on the range C1:F10
   * let fFilter = fRange.createFilter();
   *
   * // If the filter already exists, remove it and create a new one
   * if (!fFilter) {
   *   fRange.getFilter().remove();
   *   fFilter = fRange.createFilter();
   * }
   *
   * // Set the filter criteria of the column C, filter out the rows that are not 1, 5, 9
   * const column = fWorksheet.getRange('C:C').getColumn();
   * fFilter.setColumnFilterCriteria(column, {
   *   colId: 0,
   *   filters: {
   *     filters: ['1', '5', '9'],
   *   },
   * });
   *
   * // Get the filtered out rows
   * console.log(fFilter.getFilteredOutRows()); // [1, 2, 3, 5, 6, 7, 9]
   * ```
   */
  getFilteredOutRows() {
    return Array.from(this._filterModel.filteredOutRows).sort();
  }
  /**
   * Get the filter criteria of a column.
   * @param {number} column - The column index.
   * @returns {Nullable<IFilterColumn>} The filter criteria of the column.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set some values of the range C1:F10
   * const fRange = fWorksheet.getRange('C1:F10');
   * fRange.setValues([
   *   [1, 2, 3, 4],
   *   [2, 3, 4, 5],
   *   [3, 4, 5, 6],
   *   [4, 5, 6, 7],
   *   [5, 6, 7, 8],
   *   [6, 7, 8, 9],
   *   [7, 8, 9, 10],
   *   [8, 9, 10, 11],
   *   [9, 10, 11, 12],
   *   [10, 11, 12, 13],
   * ]);
   *
   * // Create a filter on the range C1:F10
   * let fFilter = fRange.createFilter();
   *
   * // If the filter already exists, remove it and create a new one
   * if (!fFilter) {
   *   fRange.getFilter().remove();
   *   fFilter = fRange.createFilter();
   * }
   *
   * // Set the filter criteria of the column C, filter out the rows that are not 1, 5, 9
   * const column = fWorksheet.getRange('C:C').getColumn();
   * fFilter.setColumnFilterCriteria(column, {
   *   colId: 0,
   *   filters: {
   *     filters: ['1', '5', '9'],
   *   },
   * });
   *
   * // Print the filter criteria of the column C and D
   * console.log(fFilter.getColumnFilterCriteria(column)); // { colId: 0, filters: { filters: ['1', '5', '9'] } }
   * console.log(fFilter.getColumnFilterCriteria(column + 1)); // undefined
   * ```
   */
  getColumnFilterCriteria(column) {
    var _a;
    return (_a = this._filterModel.getFilterColumn(column)) == null ? void 0 : _a.getColumnData();
  }
  /**
   * Clear the filter criteria of a column.
   * @param {number} column - The column index.
   * @returns {FFilter} The FFilter instance for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set some values of the range C1:F10
   * const fRange = fWorksheet.getRange('C1:F10');
   * fRange.setValues([
   *   [1, 2, 3, 4],
   *   [2, 3, 4, 5],
   *   [3, 4, 5, 6],
   *   [4, 5, 6, 7],
   *   [5, 6, 7, 8],
   *   [6, 7, 8, 9],
   *   [7, 8, 9, 10],
   *   [8, 9, 10, 11],
   *   [9, 10, 11, 12],
   *   [10, 11, 12, 13],
   * ]);
   *
   * // Create a filter on the range C1:F10
   * let fFilter = fRange.createFilter();
   *
   * // If the filter already exists, remove it and create a new one
   * if (!fFilter) {
   *   fRange.getFilter().remove();
   *   fFilter = fRange.createFilter();
   * }
   *
   * // Set the filter criteria of the column C, filter out the rows that are not 1, 5, 9
   * const column = fWorksheet.getRange('C:C').getColumn();
   * fFilter.setColumnFilterCriteria(column, {
   *   colId: 0,
   *   filters: {
   *     filters: ['1', '5', '9'],
   *   },
   * });
   *
   * // Clear the filter criteria of the column C after 3 seconds
   * setTimeout(() => {
   *   fFilter.removeColumnFilterCriteria(column);
   * }, 3000);
   * ```
   */
  removeColumnFilterCriteria(column) {
    this._commandSrv.syncExecuteCommand(SetSheetsFilterCriteriaCommand.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      col: column,
      criteria: null
    });
    return this;
  }
  /**
   * Set the filter criteria of a column.
   * @param {number} column - The column index.
   * @param {ISetSheetsFilterCriteriaCommandParams['criteria']} criteria - The new filter criteria.
   * @returns {FFilter} The FFilter instance for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set some values of the range C1:F10
   * const fRange = fWorksheet.getRange('C1:F10');
   * fRange.setValues([
   *   [1, 2, 3, 4],
   *   [2, 3, 4, 5],
   *   [3, 4, 5, 6],
   *   [4, 5, 6, 7],
   *   [5, 6, 7, 8],
   *   [6, 7, 8, 9],
   *   [7, 8, 9, 10],
   *   [8, 9, 10, 11],
   *   [9, 10, 11, 12],
   *   [10, 11, 12, 13],
   * ]);
   *
   * // Create a filter on the range C1:F10
   * let fFilter = fRange.createFilter();
   *
   * // If the filter already exists, remove it and create a new one
   * if (!fFilter) {
   *   fRange.getFilter().remove();
   *   fFilter = fRange.createFilter();
   * }
   *
   * // Set the filter criteria of the column C, filter out the rows that are not 1, 5, 9
   * const column = fWorksheet.getRange('C:C').getColumn();
   * fFilter.setColumnFilterCriteria(column, {
   *   colId: 0,
   *   filters: {
   *     filters: ['1', '5', '9'],
   *   },
   * });
   * ```
   */
  setColumnFilterCriteria(column, criteria) {
    this._commandSrv.syncExecuteCommand(SetSheetsFilterCriteriaCommand.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      col: column,
      criteria
    });
    return this;
  }
  /**
   * Get the range of the filter.
   * @returns {FRange} The range of the filter.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fFilter = fWorksheet.getFilter();
   * console.log(fFilter?.getRange().getA1Notation());
   * ```
   */
  getRange() {
    const range = this._filterModel.getRange();
    return this._injector.createInstance(FRange, this._workbook, this._worksheet, range);
  }
  /**
   * Remove the filter criteria of all columns.
   * @returns {FFilter} The FFilter instance for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set some values of the range C1:F10
   * const fRange = fWorksheet.getRange('C1:F10');
   * fRange.setValues([
   *   [1, 2, 3, 4],
   *   [2, 3, 4, 5],
   *   [3, 4, 5, 6],
   *   [4, 5, 6, 7],
   *   [5, 6, 7, 8],
   *   [6, 7, 8, 9],
   *   [7, 8, 9, 10],
   *   [8, 9, 10, 11],
   *   [9, 10, 11, 12],
   *   [10, 11, 12, 13],
   * ]);
   *
   * // Create a filter on the range C1:F10
   * let fFilter = fRange.createFilter();
   *
   * // If the filter already exists, remove it and create a new one
   * if (!fFilter) {
   *   fRange.getFilter().remove();
   *   fFilter = fRange.createFilter();
   * }
   *
   * // Set the filter criteria of the column C, filter out the rows that are not 1, 5, 9
   * const column = fWorksheet.getRange('C:C').getColumn();
   * fFilter.setColumnFilterCriteria(column, {
   *   colId: 0,
   *   filters: {
   *     filters: ['1', '5', '9'],
   *   },
   * });
   *
   * // Clear the filter criteria of all columns after 3 seconds
   * setTimeout(() => {
   *   fFilter.removeFilterCriteria();
   * }, 3000);
   * ```
   */
  removeFilterCriteria() {
    this._commandSrv.syncExecuteCommand(ClearSheetsFilterCriteriaCommand.id);
    return this;
  }
  /**
   * Remove the filter from the worksheet.
   * @returns {boolean} True if the filter is removed successfully; otherwise, false.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:D14');
   * let fFilter = fRange.createFilter();
   *
   * // If the worksheet already has a filter, remove it and create a new filter.
   * if (!fFilter) {
   *   fWorksheet.getFilter().remove();
   *   fFilter = fRange.createFilter();
   * }
   * console.log(fFilter);
   * ```
   */
  remove() {
    return this._commandSrv.syncExecuteCommand(RemoveSheetFilterCommand.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId()
    });
  }
};
FFilter = __decorateClass([
  __decorateParam(3, Inject(Injector)),
  __decorateParam(4, ICommandService)
], FFilter);

// ../packages/sheets-filter/src/facade/f-range.ts
var FRangeFilter = class extends FRange {
  createFilter() {
    if (this._getFilterModel()) return null;
    const success = this._commandService.syncExecuteCommand(SetSheetFilterRangeCommand.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range
    });
    if (!success) return null;
    return this.getFilter();
  }
  /**
   * Get the filter for the current range's worksheet.
   * @returns {FFilter | null} The interface class to handle the filter. If the worksheet does not have a filter,
   * this method would return `null`.
   */
  getFilter() {
    const filterModel = this._getFilterModel();
    if (!filterModel) return null;
    return this._injector.createInstance(FFilter, this._workbook, this._worksheet, filterModel);
  }
  _getFilterModel() {
    return this._injector.get(SheetsFilterService).getFilterModel(
      this._workbook.getUnitId(),
      this._worksheet.getSheetId()
    );
  }
};
FRange.extend(FRangeFilter);

// ../packages/sheets-filter/src/facade/f-worksheet.ts
var FWorksheetFilter = class extends FWorksheet {
  getFilter() {
    const filterModel = this._getFilterModel();
    if (!filterModel) return null;
    return this._injector.createInstance(FFilter, this._workbook, this._worksheet, filterModel);
  }
  _getFilterModel() {
    return this._injector.get(SheetsFilterService).getFilterModel(
      this._workbook.getUnitId(),
      this._worksheet.getSheetId()
    );
  }
};
FWorksheet.extend(FWorksheetFilter);

// ../packages/sheets-filter/src/facade/f-enum.ts
var FSheetsFilterEnumMixin = class {
  get CustomFilterOperator() {
    return CustomFilterOperator;
  }
};
FEnum.extend(FSheetsFilterEnumMixin);

// ../packages/sheets-filter/src/facade/f-event.ts
var FSheetFilterEventName = class extends FEventName {
  get SheetBeforeRangeFilter() {
    return "SheetBeforeRangeFilter";
  }
  get SheetRangeFiltered() {
    return "SheetRangeFiltered";
  }
  get SheetRangeFilterCleared() {
    return "SheetRangeFilterCleared";
  }
  get SheetBeforeRangeFilterClear() {
    return "SheetBeforeRangeFilterClear";
  }
};
FEventName.extend(FSheetFilterEventName);
FEventName.extend(FSheetEventName);
var FUniverSheetsFilterEventMixin = class extends FUniver {
  /**
   * @ignore
   */
  _initialize(injector) {
    const commandService = injector.get(ICommandService);
    this.registerEventHandler(
      this.Event.SheetBeforeRangeFilter,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        if (commandInfo.id === SetSheetsFilterCriteriaCommand.id) {
          this._beforeRangeFilter(commandInfo);
        }
      })
    );
    this.registerEventHandler(
      this.Event.SheetBeforeRangeFilterClear,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        if (commandInfo.id === ClearSheetsFilterCriteriaCommand.id) {
          this._beforeRangeFilterClear();
        }
      })
    );
    this.registerEventHandler(
      this.Event.SheetRangeFiltered,
      () => commandService.onCommandExecuted((commandInfo) => {
        if (commandInfo.id === SetSheetsFilterCriteriaCommand.id) {
          this._onRangeFiltered(commandInfo);
        }
      })
    );
    this.registerEventHandler(
      this.Event.SheetRangeFilterCleared,
      () => commandService.onCommandExecuted((commandInfo) => {
        if (commandInfo.id === ClearSheetsFilterCriteriaCommand.id) {
          this._onRangeFilterCleared();
        }
      })
    );
  }
  _beforeRangeFilter(commandInfo) {
    const params = commandInfo.params;
    const fWorkbook = this.getUniverSheet(params.unitId);
    const eventParams = {
      workbook: fWorkbook,
      worksheet: fWorkbook.getSheetBySheetId(params.subUnitId),
      col: params.col,
      criteria: params.criteria
    };
    this.fireEvent(this.Event.SheetBeforeRangeFilter, eventParams);
    if (eventParams.cancel) {
      throw new Error("SetSheetsFilterCriteriaCommand canceled.");
    }
  }
  _onRangeFiltered(commandInfo) {
    const params = commandInfo.params;
    const fWorkbook = this.getUniverSheet(params.unitId);
    const eventParams = {
      workbook: fWorkbook,
      worksheet: fWorkbook.getSheetBySheetId(params.subUnitId),
      col: params.col,
      criteria: params.criteria
    };
    this.fireEvent(this.Event.SheetRangeFiltered, eventParams);
  }
  _beforeRangeFilterClear() {
    const fWorkbook = this.getActiveWorkbook();
    if (!fWorkbook) return;
    const eventParams = {
      workbook: fWorkbook,
      worksheet: fWorkbook.getActiveSheet()
    };
    this.fireEvent(this.Event.SheetBeforeRangeFilterClear, eventParams);
    if (eventParams.cancel) {
      throw new Error("SetSheetsFilterCriteriaCommand canceled.");
    }
  }
  _onRangeFilterCleared() {
    const fWorkbook = this.getActiveWorkbook();
    if (!fWorkbook) return;
    const eventParams = {
      workbook: fWorkbook,
      worksheet: fWorkbook.getActiveSheet()
    };
    this.fireEvent(this.Event.SheetRangeFilterCleared, eventParams);
  }
};
FUniver.extend(FUniverSheetsFilterEventMixin);

// ../packages/sheets-formula/src/facade/f-univer.ts
var FUniverSheetsFormulaMixin = class extends FUniver {
  /**
   * Initialize the FUniver instance.
   * @ignore
   */
  _initialize() {
    this._debouncedFormulaCalculation = debounce_default(() => {
      this._commandService.executeCommand(
        SetFormulaCalculationStartMutation.id,
        {
          commands: [],
          forceCalculation: true
        },
        {
          onlyLocal: true
        }
      );
    }, 10);
  }
  registerFunction(config) {
    let registerFunctionService = this._injector.get(IRegisterFunctionService);
    if (!registerFunctionService) {
      this._injector.add([IRegisterFunctionService, { useClass: RegisterFunctionService }]);
      registerFunctionService = this._injector.get(IRegisterFunctionService);
    }
    const functionsDisposable = registerFunctionService.registerFunctions(config);
    this._debouncedFormulaCalculation();
    return functionsDisposable;
  }
};
FUniver.extend(FUniverSheetsFormulaMixin);

// ../packages/sheets-formula/src/facade/f-formula.ts
var FFormulaSheetsMixin = class extends FFormula {
  /**
   * Initialize the FUniver instance.
   * @ignore
   */
  _initialize() {
    this._debouncedFormulaCalculation = debounce_default(() => {
      this._commandService.executeCommand(
        SetFormulaCalculationStartMutation.id,
        {
          commands: [],
          forceCalculation: true
        },
        {
          onlyLocal: true
        }
      );
    }, 10);
  }
  setInitialFormulaComputing(calculationMode) {
    const lifecycleService = this._injector.get(LifecycleService);
    const lifecycleStage = lifecycleService.stage;
    const logService = this._injector.get(ILogService);
    const configService = this._injector.get(IConfigService);
    if (lifecycleStage > 0 /* Starting */) {
      logService.warn("[FFormula]", "CalculationMode is called after the Starting lifecycle and will take effect the next time the Univer Sheet is constructed. If you want it to take effect when the Univer Sheet is initialized this time, consider calling it before the Ready lifecycle or using configuration.");
    }
    const config = configService.getConfig(PLUGIN_CONFIG_KEY_BASE);
    if (!config) {
      configService.setConfig(PLUGIN_CONFIG_KEY_BASE, { initialFormulaComputing: calculationMode });
      return;
    }
    config.initialFormulaComputing = calculationMode;
  }
  registerFunction(name, func, options) {
    var _a;
    let registerFunctionService = this._injector.get(IRegisterFunctionService);
    if (!registerFunctionService) {
      this._injector.add([IRegisterFunctionService, { useClass: RegisterFunctionService }]);
      registerFunctionService = this._injector.get(IRegisterFunctionService);
    }
    const params = {
      name,
      func,
      description: typeof options === "string" ? options : (_a = options == null ? void 0 : options.description) != null ? _a : "",
      locales: typeof options === "object" ? options.locales : void 0
    };
    const functionsDisposable = registerFunctionService.registerFunction(params);
    this._debouncedFormulaCalculation();
    return functionsDisposable;
  }
  registerAsyncFunction(name, func, options) {
    var _a;
    let registerFunctionService = this._injector.get(IRegisterFunctionService);
    if (!registerFunctionService) {
      this._injector.add([IRegisterFunctionService, { useClass: RegisterFunctionService }]);
      registerFunctionService = this._injector.get(IRegisterFunctionService);
    }
    const params = {
      name,
      func,
      description: typeof options === "string" ? options : (_a = options == null ? void 0 : options.description) != null ? _a : "",
      locales: typeof options === "object" ? options.locales : void 0
    };
    const functionsDisposable = registerFunctionService.registerAsyncFunction(params);
    this._debouncedFormulaCalculation();
    return functionsDisposable;
  }
};
FFormula.extend(FFormulaSheetsMixin);

// ../packages/sheets-numfmt/src/facade/f-range.ts
var FRangeLegacy = class extends FRange {
  setNumberFormat(pattern) {
    const values = [];
    this.forEach((row, col) => values.push({ row, col, pattern }));
    this._commandService.syncExecuteCommand(SetNumfmtCommand.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      values
    });
    return this;
  }
  setNumberFormats(patterns) {
    const values = [];
    this.forEach((row, col) => {
      var _a;
      const pattern = (_a = patterns[row]) == null ? void 0 : _a[col];
      values.push({ row, col, pattern });
    });
    this._commandService.syncExecuteCommand(SetNumfmtCommand.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      values
    });
    return this;
  }
  getNumberFormat() {
    var _a, _b;
    const style = this.getCellStyle();
    return (_b = (_a = style == null ? void 0 : style.numberFormat) == null ? void 0 : _a.pattern) != null ? _b : "";
  }
  getNumberFormats() {
    const styles = this.getCellStyles();
    return styles.map((row) => row.map((cellStyle) => {
      var _a, _b;
      return (_b = (_a = cellStyle == null ? void 0 : cellStyle.numberFormat) == null ? void 0 : _a.pattern) != null ? _b : "";
    }));
  }
};
FRange.extend(FRangeLegacy);

// ../packages/sheets-numfmt/src/facade/f-workbook.ts
var FWorkbookLegacy = class extends FWorkbook {
  setNumfmtLocal(local) {
    const sheetsNumfmtCellContentController = this._injector.get(SheetsNumfmtCellContentController);
    sheetsNumfmtCellContentController.setNumfmtLocal(local);
    return this;
  }
};
FWorkbook.extend(FWorkbookLegacy);

// ../packages/sheets-hyper-link/src/facade/f-workbook.ts
var SheetHyperLinkBuilder = class {
  constructor(_workbook, _parserService) {
    this._workbook = _workbook;
    this._parserService = _parserService;
  }
  getRangeUrl(range) {
    this._parserService.buildHyperLink(this._workbook.getId(), range.getSheetId(), range.getRange());
    return this;
  }
};
SheetHyperLinkBuilder = __decorateClass([
  __decorateParam(1, Inject(SheetsHyperLinkParserService))
], SheetHyperLinkBuilder);
var FWorkbookHyperLinkMixin = class extends FWorkbook {
  createSheetHyperlink(sheetId, range) {
    const parserService = this._injector.get(SheetsHyperLinkParserService);
    return parserService.buildHyperLink(this.getId(), sheetId, range);
  }
  /**
   * Parse the hyperlink string to get the hyperlink info.
   * @param {string} hyperlink the hyperlink string
   * @returns {ISheetHyperLinkInfo} the hyperlink info
   */
  parseSheetHyperlink(hyperlink) {
    const resolverService = this._injector.get(SheetsHyperLinkParserService);
    return resolverService.parseHyperLink(hyperlink);
  }
};
FWorkbook.extend(FWorkbookHyperLinkMixin);

// ../packages/sheets-hyper-link/src/facade/f-worksheet.ts
var FWorksheetHyperlinkMixin = class extends FWorksheet {
  getUrl() {
    const parserService = this._injector.get(SheetsHyperLinkParserService);
    return parserService.buildHyperLink(this._workbook.getUnitId(), this._worksheet.getSheetId());
  }
};
FWorksheet.extend(FWorksheetHyperlinkMixin);

// ../packages/sheets-hyper-link/src/facade/f-range.ts
var FRangeHyperlinkMixin = class extends FRange {
  // #region hyperlink
  setHyperLink(url, label) {
    const params = {
      unitId: this.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      link: {
        row: this._range.startRow,
        column: this._range.startColumn,
        payload: url,
        display: label,
        id: generateRandomId()
      }
    };
    return this._commandService.executeCommand(AddHyperLinkCommand.id, params);
  }
  getHyperLinks() {
    var _a, _b, _c;
    const cellValue = this._worksheet.getCellRaw(this._range.startRow, this._range.startColumn);
    if (!(cellValue == null ? void 0 : cellValue.p)) {
      return [];
    }
    return (_c = (_b = (_a = cellValue.p.body) == null ? void 0 : _a.customRanges) == null ? void 0 : _b.filter((range) => range.rangeType === 0 /* HYPERLINK */).map((range) => {
      var _a2, _b2, _c2, _d, _e;
      return {
        id: `${range.rangeId}`,
        startIndex: range.startIndex,
        endIndex: range.endIndex,
        url: (_b2 = (_a2 = range.properties) == null ? void 0 : _a2.url) != null ? _b2 : "",
        label: (_e = (_d = (_c2 = cellValue.p) == null ? void 0 : _c2.body) == null ? void 0 : _d.dataStream.slice(range.startIndex, range.endIndex + 1).replaceAll("" /* CUSTOM_RANGE_START */, "").replaceAll("" /* CUSTOM_RANGE_END */, "")) != null ? _e : ""
      };
    })) != null ? _c : [];
  }
  updateHyperLink(id, url, label) {
    const params = {
      unitId: this.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      row: this._range.startRow,
      column: this._range.startColumn,
      id,
      payload: {
        payload: url,
        display: label
      }
    };
    return this._commandService.executeCommand(UpdateHyperLinkCommand.id, params);
  }
  cancelHyperLink(id) {
    const params = {
      unitId: this.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      row: this._range.startRow,
      column: this._range.startColumn,
      id
    };
    return this._commandService.syncExecuteCommand(CancelHyperLinkCommand.id, params);
  }
  getUrl() {
    const parserService = this._injector.get(SheetsHyperLinkParserService);
    return parserService.buildHyperLink(this.getUnitId(), this.getSheetId(), this.getRange());
  }
  // #endregion
};
FRange.extend(FRangeHyperlinkMixin);

// ../packages/sheets-hyper-link/src/facade/f-event.ts
var FSheetLinkEvent = class {
  get BeforeSheetLinkAdd() {
    return "BeforeSheetLinkAdd";
  }
  get BeforeSheetLinkCancel() {
    return "BeforeSheetLinkCancel";
  }
  get BeforeSheetLinkUpdate() {
    return "BeforeSheetLinkUpdate";
  }
};
FEventName.extend(FSheetLinkEvent);

// ../packages/sheets-hyper-link/src/facade/f-univer.ts
var FSheetLinkUniver = class extends FUniver {
  /**
   * @ignore
   */
  _initialize(injector) {
    const commandService = injector.get(ICommandService);
    this.registerEventHandler(
      this.Event.BeforeSheetLinkAdd,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        if (commandInfo.id !== AddHyperLinkCommand.id) return;
        const eventTarget = this.getCommandSheetTarget(commandInfo);
        if (!eventTarget) return;
        const params = commandInfo.params;
        const eventParams = {
          workbook: eventTarget.workbook,
          worksheet: eventTarget.worksheet,
          row: params.link.row,
          col: params.link.column,
          link: params.link
        };
        this.fireEvent(this.Event.BeforeSheetLinkAdd, eventParams);
        if (eventParams.cancel) {
          throw new CanceledError();
        }
      })
    );
    this.registerEventHandler(
      this.Event.BeforeSheetLinkUpdate,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        if (commandInfo.id !== UpdateHyperLinkCommand.id) return;
        const eventTarget = this.getCommandSheetTarget(commandInfo);
        if (!eventTarget) return;
        const params = commandInfo.params;
        const eventParams = {
          workbook: eventTarget.workbook,
          worksheet: eventTarget.worksheet,
          row: params.row,
          column: params.column,
          id: params.id,
          payload: params.payload
        };
        this.fireEvent(this.Event.BeforeSheetLinkUpdate, eventParams);
        if (eventParams.cancel) {
          throw new CanceledError();
        }
      })
    );
    this.registerEventHandler(
      this.Event.BeforeSheetLinkCancel,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        if (commandInfo.id !== CancelHyperLinkCommand.id) return;
        const eventTarget = this.getCommandSheetTarget(commandInfo);
        if (!eventTarget) return;
        const params = commandInfo.params;
        const eventParams = {
          workbook: eventTarget.workbook,
          worksheet: eventTarget.worksheet,
          row: params.row,
          column: params.column,
          id: params.id
        };
        this.fireEvent(this.Event.BeforeSheetLinkCancel, eventParams);
        if (eventParams.cancel) {
          throw new CanceledError();
        }
      })
    );
  }
};
FUniver.extend(FSheetLinkUniver);

// ../packages/sheets-hyper-link-ui/src/facade/f-workbook.ts
var FWorkbookHyperLinkUIMixin = class extends FWorkbookHyperLinkMixin {
  // TODO: this should be migrated back to hyperlink ui plugin
  navigateToSheetHyperlink(hyperlink) {
    const parserService = this._injector.get(SheetsHyperLinkParserService);
    const resolverService = this._injector.get(SheetsHyperLinkResolverService);
    const info = parserService.parseHyperLink(hyperlink);
    resolverService.navigate(info);
  }
};
FWorkbook.extend(FWorkbookHyperLinkUIMixin);

// ../packages/sheets-thread-comment/src/facade/f-thread-comment.ts
var FTheadCommentItem = class _FTheadCommentItem {
  constructor(comment) {
    __publicField(this, "_comment", {
      id: generateRandomId(),
      ref: "",
      threadId: "",
      dT: "",
      personId: "",
      text: RichTextBuilder.newEmptyData().body,
      attachments: [],
      unitId: "",
      subUnitId: ""
    });
    if (comment) {
      this._comment = comment;
    }
  }
  /**
   * Create a new FTheadCommentItem
   * @param {IThreadComment|undefined} comment The comment
   * @returns {FTheadCommentItem} A new instance of FTheadCommentItem
   * @example
   * ```ts
   * const commentBuilder = univerAPI.newTheadComment();
   * console.log(commentBuilder);
   * ```
   */
  static create(comment) {
    return new _FTheadCommentItem(comment);
  }
  /**
   * Get the person id of the comment
   * @returns {string} The person id of the comment
   * @example
   * ```ts
   * const commentBuilder = univerAPI.newTheadComment();
   * console.log(commentBuilder.personId);
   * ```
   */
  get personId() {
    return this._comment.personId;
  }
  /**
   * Get the date time of the comment
   * @returns {string} The date time of the comment
   * @example
   * ```ts
   * const commentBuilder = univerAPI.newTheadComment();
   * console.log(commentBuilder.dateTime);
   * ```
   */
  get dateTime() {
    return this._comment.dT;
  }
  /**
   * Get the content of the comment
   * @returns {RichTextValue} The content of the comment
   * @example
   * ```ts
   * const commentBuilder = univerAPI.newTheadComment();
   * console.log(commentBuilder.content);
   * ```
   */
  get content() {
    return RichTextValue.createByBody(this._comment.text);
  }
  /**
   * Get the id of the comment
   * @returns {string} The id of the comment
   * @example
   * ```ts
   * const commentBuilder = univerAPI.newTheadComment();
   * console.log(commentBuilder.id);
   * ```
   */
  get id() {
    return this._comment.id;
  }
  /**
   * Get the thread id of the comment
   * @returns {string} The thread id of the comment
   * @example
   * ```ts
   * const commentBuilder = univerAPI.newTheadComment();
   * console.log(commentBuilder.threadId);
   * ```
   */
  get threadId() {
    return this._comment.threadId;
  }
  /**
   * Copy the comment
   * @returns {FTheadCommentBuilder} The comment builder
   * @example
   * ```ts
   * const commentBuilder = univerAPI.newTheadComment();
   * const newCommentBuilder = commentBuilder.copy();
   * console.log(newCommentBuilder);
   * ```
   */
  copy() {
    return FTheadCommentBuilder.create(Tools.deepClone(this._comment));
  }
};
var FTheadCommentBuilder = class _FTheadCommentBuilder extends FTheadCommentItem {
  static create(comment) {
    return new _FTheadCommentBuilder(comment);
  }
  /**
   * Set the content of the comment
   * @param {IDocumentBody | RichTextValue} content The content of the comment
   * @returns {FTheadCommentBuilder} The comment builder for chaining
   * @example
   * ```ts
   * // Create a new comment
   * const richText = univerAPI.newRichText().insertText('hello univer');
   * const commentBuilder = univerAPI.newTheadComment()
   *   .setContent(richText);
   * console.log(commentBuilder.content);
   *
   * // Add the comment to the cell A1
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const cell = fWorksheet.getRange('A1');
   * const result = await cell.addCommentAsync(commentBuilder);
   * console.log(result);
   * ```
   */
  setContent(content) {
    if (content instanceof RichTextValue) {
      this._comment.text = content.getData().body;
    } else {
      this._comment.text = content;
    }
    return this;
  }
  /**
   * Set the person id of the comment
   * @param {string} userId The person id of the comment
   * @returns {FTheadCommentBuilder} The comment builder for chaining
   * @example
   * ```ts
   * // Create a new comment
   * const richText = univerAPI.newRichText().insertText('hello univer');
   * const commentBuilder = univerAPI.newTheadComment()
   *   .setContent(richText)
   *   .setPersonId('mock-user-id');
   * console.log(commentBuilder.personId);
   *
   * // Add the comment to the cell A1
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const cell = fWorksheet.getRange('A1');
   * const result = await cell.addCommentAsync(commentBuilder);
   * console.log(result);
   * ```
   */
  setPersonId(userId) {
    this._comment.personId = userId;
    return this;
  }
  /**
   * Set the date time of the comment
   * @param {Date} date The date time of the comment
   * @returns {FTheadCommentBuilder} The comment builder for chaining
   * @example
   * ```ts
   * // Create a new comment
   * const richText = univerAPI.newRichText().insertText('hello univer');
   * const commentBuilder = univerAPI.newTheadComment()
   *   .setContent(richText)
   *   .setDateTime(new Date('2025-02-21 14:22:22'));
   * console.log(commentBuilder.dateTime);
   *
   * // Add the comment to the cell A1
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const cell = fWorksheet.getRange('A1');
   * const result = await cell.addCommentAsync(commentBuilder);
   * console.log(result);
   * ```
   */
  setDateTime(date) {
    this._comment.dT = getDT(date);
    return this;
  }
  /**
   * Set the id of the comment
   * @param {string} id The id of the comment
   * @returns {FTheadCommentBuilder} The comment builder for chaining
   * @example
   * ```ts
   * // Create a new comment
   * const richText = univerAPI.newRichText().insertText('hello univer');
   * const commentBuilder = univerAPI.newTheadComment()
   *   .setContent(richText)
   *   .setId('mock-comment-id');
   * console.log(commentBuilder.id);
   *
   * // Add the comment to the cell A1
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const cell = fWorksheet.getRange('A1');
   * const result = await cell.addCommentAsync(commentBuilder);
   * console.log(result);
   * ```
   */
  setId(id) {
    this._comment.id = id;
    return this;
  }
  /**
   * Set the thread id of the comment
   * @param {string} threadId The thread id of the comment
   * @returns {FTheadCommentBuilder} The comment builder
   * @example
   * ```ts
   * // Create a new comment
   * const richText = univerAPI.newRichText().insertText('hello univer');
   * const commentBuilder = univerAPI.newTheadComment()
   *   .setContent(richText)
   *   .setThreadId('mock-thread-id');
   * console.log(commentBuilder.threadId);
   *
   * // Add the comment to the cell A1
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const cell = fWorksheet.getRange('A1');
   * const result = await cell.addCommentAsync(commentBuilder);
   * console.log(result);
   * ```
   */
  setThreadId(threadId) {
    this._comment.threadId = threadId;
    return this;
  }
  /**
   * Build the comment
   * @returns {IThreadComment} The comment
   * @example
   * ```ts
   * const richText = univerAPI.newRichText().insertText('hello univer');
   * const comment = univerAPI.newTheadComment()
   *   .setContent(richText)
   *   .setPersonId('mock-user-id')
   *   .setDateTime(new Date('2025-02-21 14:22:22'))
   *   .setId('mock-comment-id')
   *   .setThreadId('mock-thread-id')
   *   .build();
   * console.log(comment);
   * ```
   */
  build() {
    return this._comment;
  }
};
var FThreadComment = class {
  /**
   * @ignore
   */
  constructor(_thread, _parent, _injector, _commandService, _univerInstanceService, _threadCommentModel, _userManagerService) {
    this._thread = _thread;
    this._parent = _parent;
    this._injector = _injector;
    this._commandService = _commandService;
    this._univerInstanceService = _univerInstanceService;
    this._threadCommentModel = _threadCommentModel;
    this._userManagerService = _userManagerService;
  }
  _getRef() {
    var _a;
    const ref = ((_a = this._parent) == null ? void 0 : _a.ref) || this._thread.ref;
    const range = deserializeRangeWithSheet(ref);
    return range.range;
  }
  /**
   * Whether the comment is a root comment
   * @returns {boolean} Whether the comment is a root comment
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const comments = fWorksheet.getComments();
   * comments.forEach((comment) => {
   *   console.log(comment.getIsRoot());
   * });
   * ```
   */
  getIsRoot() {
    return !this._parent;
  }
  /**
   * Get the comment data
   * @returns {IBaseComment} The comment data
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const comments = fWorksheet.getComments();
   * comments.forEach((comment) => {
   *   console.log(comment.getCommentData());
   * });
   * ```
   */
  getCommentData() {
    const { children, ...comment } = this._thread;
    return comment;
  }
  /**
   * Get the replies of the comment
   * @returns {FThreadComment[]} the replies of the comment
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const comments = fWorksheet.getComments();
   * comments.forEach((comment) => {
   *   if (comment.getIsRoot()) {
   *     const replies = comment.getReplies();
   *     replies.forEach((reply) => {
   *       console.log(reply.getCommentData());
   *     });
   *   }
   * });
   * ```
   */
  getReplies() {
    var _a;
    const range = this._getRef();
    const comments = this._threadCommentModel.getCommentWithChildren(this._thread.unitId, this._thread.subUnitId, range.startRow, range.startColumn);
    return (_a = comments == null ? void 0 : comments.children) == null ? void 0 : _a.map((child) => this._injector.createInstance(FThreadComment, child));
  }
  /**
   * Get the range of the comment
   * @returns {FRange | null} The range of the comment
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const comments = fWorksheet.getComments();
   * comments.forEach((comment) => {
   *   console.log(comment.getRange().getA1Notation());
   * });
   * ```
   */
  getRange() {
    const workbook = this._univerInstanceService.getUnit(this._thread.unitId, O.UNIVER_SHEET);
    if (!workbook) {
      return null;
    }
    const worksheet = workbook.getSheetBySheetId(this._thread.subUnitId);
    if (!worksheet) {
      return null;
    }
    const range = this._getRef();
    return this._injector.createInstance(FRange, workbook, worksheet, range);
  }
  // eslint-disable-next-line
  /**
   * @deprecated use `getRichText` as instead
   */
  getContent() {
    return this._thread.text;
  }
  /**
   * Get the rich text of the comment
   * @returns {RichTextValue} The rich text of the comment
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const comments = fWorksheet.getComments();
   * comments.forEach((comment) => {
   *   console.log(comment.getRichText());
   * });
   * ```
   */
  getRichText() {
    const body = this._thread.text;
    return RichTextValue.create({ body, documentStyle: {}, id: "d" });
  }
  /**
   * Delete the comment and it's replies
   * @returns {Promise<boolean>} Whether the comment is deleted successfully
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const comments = fWorksheet.getComments();
   *
   * // Delete the first comment
   * const result = await comments[0]?.deleteAsync();
   * console.log(result);
   * ```
   */
  deleteAsync() {
    return this._commandService.executeCommand(
      this.getIsRoot() ? DeleteCommentTreeCommand.id : DeleteCommentCommand.id,
      {
        commentId: this._thread.id,
        unitId: this._thread.unitId,
        subUnitId: this._thread.subUnitId
      }
    );
  }
  // eslint-disable-next-line
  /**
   * @deprecated use `deleteAsync` as instead.
   */
  delete() {
    return this.deleteAsync();
  }
  // eslint-disable-next-line
  /**
   * @deprecated use `updateAsync` as instead
   */
  async update(content) {
    return this.updateAsync(content);
  }
  /**
   * Update the comment content
   * @param {IDocumentBody | RichTextValue} content The new content of the comment
   * @returns {Promise<boolean>} Whether the comment is updated successfully
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new comment
   * const richText = univerAPI.newRichText().insertText('hello univer');
   * const commentBuilder = univerAPI.newTheadComment()
   *   .setContent(richText)
   *   .setId('mock-comment-id');
   * const cell = fWorksheet.getRange('A1');
   * await cell.addCommentAsync(commentBuilder);
   *
   * // Update the comment after 3 seconds
   * setTimeout(async () => {
   *   const comment = fWorksheet.getCommentById('mock-comment-id');
   *   const newRichText = univerAPI.newRichText().insertText('Hello Univer AI');
   *   const result = await comment.updateAsync(newRichText);
   *   console.log(result);
   * }, 3000);
   * ```
   */
  async updateAsync(content) {
    const body = content instanceof RichTextValue ? content.getData().body : content;
    const dt = getDT();
    const res = await this._commandService.executeCommand(
      UpdateCommentCommand.id,
      {
        unitId: this._thread.unitId,
        subUnitId: this._thread.subUnitId,
        payload: {
          commentId: this._thread.id,
          text: body,
          updated: true,
          updateT: dt
        }
      }
    );
    return res;
  }
  // eslint-disable-next-line
  /**
   * @deprecated use `resolveAsync` as instead
   */
  resolve(resolved) {
    return this.resolveAsync(resolved);
  }
  /**
   * Resolve the comment
   * @param {boolean} resolved Whether the comment is resolved
   * @returns {Promise<boolean>} Set the comment to resolved or not operation result
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new comment
   * const richText = univerAPI.newRichText().insertText('hello univer');
   * const commentBuilder = univerAPI.newTheadComment()
   *   .setContent(richText)
   *   .setId('mock-comment-id');
   * const cell = fWorksheet.getRange('A1');
   * await cell.addCommentAsync(commentBuilder);
   *
   * // Resolve the comment after 3 seconds
   * setTimeout(async () => {
   *   const comment = fWorksheet.getCommentById('mock-comment-id');
   *   const result = await comment.resolveAsync(true);
   *   console.log(result);
   * }, 3000);
   * ```
   */
  resolveAsync(resolved) {
    return this._commandService.executeCommand(
      ResolveCommentCommand.id,
      {
        unitId: this._thread.unitId,
        subUnitId: this._thread.subUnitId,
        commentId: this._thread.id,
        resolved: resolved != null ? resolved : !this._thread.resolved
      }
    );
  }
  /**
   * Reply to the comment
   * @param {FTheadCommentBuilder} comment The comment to reply to
   * @returns {Promise<boolean>} Whether the comment is replied successfully
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new comment
   * const richText = univerAPI.newRichText().insertText('hello univer');
   * const commentBuilder = univerAPI.newTheadComment()
   *   .setContent(richText)
   *   .setId('mock-comment-id');
   * const cell = fWorksheet.getRange('A1');
   * await cell.addCommentAsync(commentBuilder);
   *
   * // Reply to the comment
   * const replyText = univerAPI.newRichText().insertText('Hello Univer AI');
   * const reply = univerAPI.newTheadComment().setContent(replyText);
   * const comment = fWorksheet.getCommentById('mock-comment-id');
   * const result = await comment.replyAsync(reply);
   * console.log(result);
   * ```
   */
  replyAsync(comment) {
    var _a;
    const commentData = comment.build();
    return this._commandService.executeCommand(
      AddCommentCommand.id,
      {
        unitId: this._thread.unitId,
        subUnitId: this._thread.subUnitId,
        comment: {
          id: generateRandomId(),
          parentId: this._thread.id,
          threadId: this._thread.threadId,
          ref: ((_a = this._parent) == null ? void 0 : _a.ref) || this._thread.ref,
          unitId: this._thread.unitId,
          subUnitId: this._thread.subUnitId,
          text: commentData.text,
          attachments: commentData.attachments,
          dT: commentData.dT || getDT(),
          personId: commentData.personId || this._userManagerService.getCurrentUser().userID
        }
      }
    );
  }
};
FThreadComment = __decorateClass([
  __decorateParam(2, Inject(Injector)),
  __decorateParam(3, ICommandService),
  __decorateParam(4, IUniverInstanceService),
  __decorateParam(5, Inject(SheetsThreadCommentModel)),
  __decorateParam(6, Inject(UserManagerService))
], FThreadComment);

// ../packages/sheets-thread-comment/src/facade/f-range.ts
var FRangeCommentMixin = class extends FRange {
  getComment() {
    const injector = this._injector;
    const sheetsTheadCommentModel = injector.get(SheetsThreadCommentModel);
    const unitId = this._workbook.getUnitId();
    const sheetId = this._worksheet.getSheetId();
    const commentId = sheetsTheadCommentModel.getByLocation(unitId, sheetId, this._range.startRow, this._range.startColumn);
    if (!commentId) {
      return null;
    }
    const comment = sheetsTheadCommentModel.getComment(unitId, sheetId, commentId);
    if (comment) {
      return this._injector.createInstance(FThreadComment, comment);
    }
    return null;
  }
  getComments() {
    const injector = this._injector;
    const sheetsTheadCommentModel = injector.get(SheetsThreadCommentModel);
    const unitId = this._workbook.getUnitId();
    const sheetId = this._worksheet.getSheetId();
    const comments = [];
    Range.foreach(this._range, (row, col) => {
      const commentId = sheetsTheadCommentModel.getByLocation(unitId, sheetId, row, col);
      if (commentId) {
        const comment = sheetsTheadCommentModel.getComment(unitId, sheetId, commentId);
        if (comment) {
          comments.push(this._injector.createInstance(FThreadComment, comment));
        }
      }
    });
    return comments;
  }
  addComment(content) {
    var _a;
    const injector = this._injector;
    const currentComment = (_a = this.getComment()) == null ? void 0 : _a.getCommentData();
    const commentService = injector.get(ICommandService);
    const userService = injector.get(UserManagerService);
    const unitId = this._workbook.getUnitId();
    const sheetId = this._worksheet.getSheetId();
    const refStr = `${Tools.chatAtABC(this._range.startColumn)}${this._range.startRow + 1}`;
    const currentUser = userService.getCurrentUser();
    const commentData = content instanceof FTheadCommentBuilder ? content.build() : { text: content };
    return commentService.executeCommand(AddCommentCommand.id, {
      unitId,
      subUnitId: sheetId,
      comment: {
        text: commentData.text,
        dT: commentData.dT || getDT(),
        attachments: [],
        id: commentData.id || generateRandomId(),
        ref: refStr,
        personId: commentData.personId || currentUser.userID,
        parentId: currentComment == null ? void 0 : currentComment.id,
        unitId,
        subUnitId: sheetId,
        threadId: (currentComment == null ? void 0 : currentComment.threadId) || generateRandomId()
      }
    });
  }
  clearComment() {
    var _a;
    const injector = this._injector;
    const currentComment = (_a = this.getComment()) == null ? void 0 : _a.getCommentData();
    const commentService = injector.get(ICommandService);
    const unitId = this._workbook.getUnitId();
    const sheetId = this._worksheet.getSheetId();
    if (currentComment) {
      return commentService.executeCommand(DeleteCommentTreeCommand.id, {
        unitId,
        subUnitId: sheetId,
        threadId: currentComment.threadId,
        commentId: currentComment.id
      });
    }
    return Promise.resolve(true);
  }
  clearComments() {
    const comments = this.getComments();
    const promises = comments.map((comment) => comment.deleteAsync());
    return Promise.all(promises).then(() => true);
  }
  addCommentAsync(content) {
    return this.addComment(content);
  }
  clearCommentAsync() {
    return this.clearComment();
  }
  clearCommentsAsync() {
    return this.clearComments();
  }
};
FRange.extend(FRangeCommentMixin);

// ../packages/sheets-thread-comment/src/facade/f-workbook.ts
var FWorkbookThreadCommentMixin = class extends FWorkbook {
  /**
   * @ignore
   */
  _initialize() {
    Object.defineProperty(this, "_threadCommentModel", {
      get() {
        return this._injector.get(ThreadCommentModel);
      }
    });
  }
  getComments() {
    return this._threadCommentModel.getUnit(this._workbook.getUnitId()).map((i) => this._injector.createInstance(FThreadComment, i.root));
  }
  clearComments() {
    const comments = this.getComments();
    const promises = comments.map((comment) => comment.deleteAsync());
    return Promise.all(promises).then(() => true);
  }
  /**
   * @param callback
   * @deprecated
   */
  onThreadCommentChange(callback) {
    return toDisposable(this._threadCommentModel.commentUpdate$.pipe(filter((change) => change.unitId === this._workbook.getUnitId())).subscribe(callback));
  }
  /**
   * @param callback
   * @deprecated
   */
  onBeforeAddThreadComment(callback) {
    return toDisposable(this._commandService.beforeCommandExecuted((commandInfo, options) => {
      const params = commandInfo.params;
      if (commandInfo.id === AddCommentCommand.id) {
        if (params.unitId !== this._workbook.getUnitId()) {
          return;
        }
        if (callback(params, options) === false) {
          throw new Error("Command is stopped by the hook onBeforeAddThreadComment");
        }
      }
    }));
  }
  /**
   * @param callback
   * @deprecated
   */
  onBeforeUpdateThreadComment(callback) {
    return toDisposable(this._commandService.beforeCommandExecuted((commandInfo, options) => {
      const params = commandInfo.params;
      if (commandInfo.id === UpdateCommentCommand.id) {
        if (params.unitId !== this._workbook.getUnitId()) {
          return;
        }
        if (callback(params, options) === false) {
          throw new Error("Command is stopped by the hook onBeforeUpdateThreadComment");
        }
      }
    }));
  }
  /**
   * @param callback
   * @deprecated
   */
  onBeforeDeleteThreadComment(callback) {
    return toDisposable(this._commandService.beforeCommandExecuted((commandInfo, options) => {
      const params = commandInfo.params;
      if (commandInfo.id === DeleteCommentCommand.id || commandInfo.id === DeleteCommentTreeCommand.id) {
        if (params.unitId !== this._workbook.getUnitId()) {
          return;
        }
        if (callback(params, options) === false) {
          throw new Error("Command is stopped by the hook onBeforeDeleteThreadComment");
        }
      }
    }));
  }
};
FWorkbook.extend(FWorkbookThreadCommentMixin);

// ../packages/sheets-thread-comment/src/facade/f-worksheet.ts
var FWorksheetCommentMixin = class extends FWorksheet {
  getComments() {
    const sheetsTheadCommentModel = this._injector.get(SheetsThreadCommentModel);
    const comments = sheetsTheadCommentModel.getSubUnitAll(this._workbook.getUnitId(), this._worksheet.getSheetId());
    return comments.map((comment) => this._injector.createInstance(FThreadComment, comment));
  }
  clearComments() {
    const comments = this.getComments();
    const promises = comments.map((comment) => comment.deleteAsync());
    return Promise.all(promises).then(() => true);
  }
  /**
   * Subscribe to comment events.
   * @param callback Callback function, param contains comment info and target cell.
   */
  onCommented(callback) {
    const commandService = this._injector.get(ICommandService);
    return commandService.onCommandExecuted((command) => {
      if (command.id === AddCommentCommand.id) {
        const params = command.params;
        callback(params);
      }
    });
  }
  getCommentById(commentId) {
    const sheetsTheadCommentModel = this._injector.get(SheetsThreadCommentModel);
    const comment = sheetsTheadCommentModel.getComment(this._workbook.getUnitId(), this._worksheet.getSheetId(), commentId);
    if (comment) {
      return this._injector.createInstance(FThreadComment, comment);
    }
  }
};
FWorksheet.extend(FWorksheetCommentMixin);

// ../packages/sheets-thread-comment/src/facade/f-event.ts
var CommentEvent = {
  CommentAdded: "CommentAdded",
  BeforeCommentAdd: "BeforeCommentAdd",
  CommentUpdated: "CommentUpdated",
  BeforeCommentUpdate: "BeforeCommentUpdate",
  CommentDeleted: "CommentDeleted",
  BeforeCommentDelete: "BeforeCommentDelete",
  CommentResolved: "CommentResolved",
  BeforeCommentResolve: "BeforeCommentResolve"
};
var FCommentEvent = class extends FEventName {
  get CommentAdded() {
    return CommentEvent.CommentAdded;
  }
  get BeforeCommentAdd() {
    return CommentEvent.BeforeCommentAdd;
  }
  get CommentUpdated() {
    return CommentEvent.CommentUpdated;
  }
  get BeforeCommentUpdate() {
    return CommentEvent.BeforeCommentUpdate;
  }
  get CommentDeleted() {
    return CommentEvent.CommentDeleted;
  }
  get BeforeCommentDelete() {
    return CommentEvent.BeforeCommentDelete;
  }
  get CommentResolved() {
    return CommentEvent.CommentResolved;
  }
  get BeforeCommentResolve() {
    return CommentEvent.BeforeCommentResolve;
  }
};
FEventName.extend(FCommentEvent);

// ../packages/sheets-thread-comment/src/facade/f-univer.ts
var FUniverCommentMixin = class extends FUniver {
  // eslint-disable-next-line max-lines-per-function
  _initialize(injector) {
    const commandService = injector.get(ICommandService);
    this.registerEventHandler(
      this.Event.CommentAdded,
      () => commandService.onCommandExecuted((commandInfo) => {
        var _a, _b, _c, _d, _e;
        if (commandInfo.id !== AddCommentCommand.id) return;
        const params = commandInfo.params;
        if (!params) return;
        const workbook = params.unitId ? this.getUniverSheet(params.unitId) : (_a = this.getActiveWorkbook) == null ? void 0 : _a.call(this);
        if (!workbook) return;
        const worksheet = workbook.getSheetBySheetId(params.subUnitId || params.sheetId) || workbook.getActiveSheet();
        if (!worksheet) return;
        const addParams = commandInfo.params;
        const { comment } = addParams;
        const threadComment = worksheet.getRange(comment.ref).getComment();
        if (threadComment) {
          this.fireEvent(this.Event.CommentAdded, {
            workbook,
            worksheet,
            row: (_c = (_b = threadComment.getRange()) == null ? void 0 : _b.getRow()) != null ? _c : 0,
            col: (_e = (_d = threadComment.getRange()) == null ? void 0 : _d.getColumn()) != null ? _e : 0,
            comment: threadComment
          });
        }
      })
    );
    this.registerEventHandler(
      this.Event.CommentUpdated,
      () => commandService.onCommandExecuted((commandInfo) => {
        var _a, _b, _c, _d, _e;
        if (commandInfo.id !== UpdateCommentCommand.id) return;
        const params = commandInfo.params;
        if (!params) return;
        const workbook = params.unitId ? this.getUniverSheet(params.unitId) : (_a = this.getActiveWorkbook) == null ? void 0 : _a.call(this);
        if (!workbook) return;
        const worksheet = workbook.getSheetBySheetId(params.subUnitId || params.sheetId) || workbook.getActiveSheet();
        if (!worksheet) return;
        const updateParams = commandInfo.params;
        const { commentId } = updateParams.payload;
        const threadComment = worksheet.getCommentById(commentId);
        if (threadComment) {
          this.fireEvent(this.Event.CommentUpdated, {
            workbook,
            worksheet,
            row: (_c = (_b = threadComment.getRange()) == null ? void 0 : _b.getRow()) != null ? _c : 0,
            col: (_e = (_d = threadComment.getRange()) == null ? void 0 : _d.getColumn()) != null ? _e : 0,
            comment: threadComment
          });
        }
      })
    );
    this.registerEventHandler(
      this.Event.CommentDeleted,
      () => commandService.onCommandExecuted((commandInfo) => {
        var _a;
        if (commandInfo.id !== DeleteCommentCommand.id && commandInfo.id !== DeleteCommentTreeCommand.id) return;
        const params = commandInfo.params;
        if (!params) return;
        const workbook = params.unitId ? this.getUniverSheet(params.unitId) : (_a = this.getActiveWorkbook) == null ? void 0 : _a.call(this);
        if (!workbook) return;
        const worksheet = workbook.getSheetBySheetId(params.subUnitId || params.sheetId) || workbook.getActiveSheet();
        if (!worksheet) return;
        const deleteParams = commandInfo.params;
        const { commentId } = deleteParams;
        this.fireEvent(this.Event.CommentDeleted, {
          workbook,
          worksheet,
          commentId
        });
      })
    );
    this.registerEventHandler(
      this.Event.CommentResolved,
      () => commandService.onCommandExecuted((commandInfo) => {
        var _a, _b, _c;
        if (commandInfo.id !== ResolveCommentCommand.id) return;
        const params = commandInfo.params;
        if (!params) return;
        const workbook = params.unitId ? this.getUniverSheet(params.unitId) : (_a = this.getActiveWorkbook) == null ? void 0 : _a.call(this);
        if (!workbook) return;
        const worksheet = workbook.getSheetBySheetId(params.subUnitId || params.sheetId) || workbook.getActiveSheet();
        if (!worksheet) return;
        const resolveParams = commandInfo.params;
        const { commentId, resolved } = resolveParams;
        const threadComment = worksheet.getComments().find((c) => c.getCommentData().id === commentId);
        if (threadComment) {
          this.fireEvent(this.Event.CommentResolved, {
            workbook,
            worksheet,
            row: (_b = threadComment.getRange().getRow()) != null ? _b : 0,
            col: (_c = threadComment.getRange().getColumn()) != null ? _c : 0,
            comment: threadComment,
            resolved
          });
        }
      })
    );
    this.registerEventHandler(
      this.Event.BeforeCommentAdd,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        var _a, _b, _c;
        if (commandInfo.id !== AddCommentCommand.id) return;
        const params = commandInfo.params;
        if (!params) return;
        const workbook = params.unitId ? this.getUniverSheet(params.unitId) : (_a = this.getActiveWorkbook) == null ? void 0 : _a.call(this);
        if (!workbook) return;
        const worksheet = workbook.getSheetBySheetId(params.subUnitId || params.sheetId) || workbook.getActiveSheet();
        if (!worksheet) return;
        const addParams = commandInfo.params;
        const { comment } = addParams;
        const activeRange = worksheet.getActiveRange();
        if (!activeRange) return;
        const eventParams = {
          workbook,
          worksheet,
          row: (_b = activeRange.getRow()) != null ? _b : 0,
          col: (_c = activeRange.getColumn()) != null ? _c : 0,
          comment: FTheadCommentItem.create(comment)
        };
        this.fireEvent(this.Event.BeforeCommentAdd, eventParams);
        if (eventParams.cancel) {
          throw new CanceledError();
        }
      })
    );
    this.registerEventHandler(
      this.Event.BeforeCommentUpdate,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        var _a, _b, _c, _d, _e;
        if (commandInfo.id !== UpdateCommentCommand.id) return;
        const params = commandInfo.params;
        if (!params) return;
        const workbook = params.unitId ? this.getUniverSheet(params.unitId) : (_a = this.getActiveWorkbook) == null ? void 0 : _a.call(this);
        if (!workbook) return;
        const worksheet = workbook.getSheetBySheetId(params.subUnitId || params.sheetId) || workbook.getActiveSheet();
        if (!worksheet) return;
        const updateParams = commandInfo.params;
        const { commentId, text } = updateParams.payload;
        const threadComment = worksheet.getCommentById(commentId);
        if (threadComment) {
          const eventParams = {
            workbook,
            worksheet,
            row: (_c = (_b = threadComment.getRange()) == null ? void 0 : _b.getRow()) != null ? _c : 0,
            col: (_e = (_d = threadComment.getRange()) == null ? void 0 : _d.getColumn()) != null ? _e : 0,
            comment: threadComment,
            newContent: RichTextValue.createByBody(text)
          };
          this.fireEvent(this.Event.BeforeCommentUpdate, eventParams);
          if (eventParams.cancel) {
            throw new CanceledError();
          }
        }
      })
    );
    this.registerEventHandler(
      this.Event.BeforeCommentDelete,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        var _a, _b, _c, _d, _e;
        if (commandInfo.id !== DeleteCommentCommand.id && commandInfo.id !== DeleteCommentTreeCommand.id) return;
        const params = commandInfo.params;
        if (!params) return;
        const workbook = params.unitId ? this.getUniverSheet(params.unitId) : (_a = this.getActiveWorkbook) == null ? void 0 : _a.call(this);
        if (!workbook) return;
        const worksheet = workbook.getSheetBySheetId(params.subUnitId || params.sheetId) || workbook.getActiveSheet();
        if (!worksheet) return;
        const deleteParams = commandInfo.params;
        const { commentId } = deleteParams;
        const threadComment = worksheet.getCommentById(commentId);
        if (threadComment) {
          const eventParams = {
            workbook,
            worksheet,
            row: (_c = (_b = threadComment.getRange()) == null ? void 0 : _b.getRow()) != null ? _c : 0,
            col: (_e = (_d = threadComment.getRange()) == null ? void 0 : _d.getColumn()) != null ? _e : 0,
            comment: threadComment
          };
          this.fireEvent(this.Event.BeforeCommentDelete, eventParams);
          if (eventParams.cancel) {
            throw new CanceledError();
          }
        }
      })
    );
    this.registerEventHandler(
      this.Event.BeforeCommentResolve,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        var _a, _b, _c;
        if (commandInfo.id !== ResolveCommentCommand.id) return;
        const params = commandInfo.params;
        if (!params) return;
        const workbook = params.unitId ? this.getUniverSheet(params.unitId) : (_a = this.getActiveWorkbook) == null ? void 0 : _a.call(this);
        if (!workbook) return;
        const worksheet = workbook.getSheetBySheetId(params.subUnitId || params.sheetId) || workbook.getActiveSheet();
        if (!worksheet) return;
        const resolveParams = commandInfo.params;
        const { commentId, resolved } = resolveParams;
        const threadComment = worksheet.getComments().find((c) => c.getCommentData().id === commentId);
        if (threadComment) {
          const eventParams = {
            workbook,
            worksheet,
            row: (_b = threadComment.getRange().getRow()) != null ? _b : 0,
            col: (_c = threadComment.getRange().getColumn()) != null ? _c : 0,
            comment: threadComment,
            resolved
          };
          this.fireEvent(this.Event.BeforeCommentResolve, eventParams);
          if (eventParams.cancel) {
            throw new CanceledError();
          }
        }
      })
    );
  }
  /**
   * @ignore
   */
  newTheadComment(comment) {
    return new FTheadCommentBuilder(comment);
  }
};
FUniver.extend(FUniverCommentMixin);

// ../packages/sheets-conditional-formatting/src/facade/f-conditional-formatting-builder.ts
var ConditionalFormatRuleBaseBuilder = class _ConditionalFormatRuleBaseBuilder {
  constructor(initRule = {}) {
    __publicField(this, "_rule", {});
    this._rule = initRule;
    this._ensureAttr(this._rule, ["rule"]);
  }
  get _ruleConfig() {
    return this._rule.rule || null;
  }
  _getDefaultConfig(type = "highlightCell" /* highlightCell */) {
    switch (type) {
      case "colorScale" /* colorScale */: {
        return {
          type,
          config: [
            { index: 0, color: new ColorKit("").toRgbString(), value: { type: "min" /* min */ } },
            { index: 0, color: new ColorKit("green").toRgbString(), value: { type: "max" /* max */ } }
          ]
        };
      }
      case "dataBar" /* dataBar */: {
        return {
          type,
          isShowValue: true,
          config: { min: { type: "min" /* min */ }, max: { type: "max" /* max */ }, positiveColor: new ColorKit("green").toRgbString(), nativeColor: new ColorKit("").toRgbString(), isGradient: false }
        };
      }
      case "highlightCell" /* highlightCell */: {
        return {
          type,
          subType: "text" /* text */,
          operator: "containsText" /* containsText */,
          value: "abc",
          style: {}
        };
      }
      case "iconSet" /* iconSet */: {
        return {
          type,
          isShowValue: true,
          config: [{
            operator: "greaterThanOrEqual" /* greaterThanOrEqual */,
            value: { type: "min" /* min */ },
            iconType: EMPTY_ICON_TYPE,
            iconId: ""
          }, {
            operator: "greaterThanOrEqual" /* greaterThanOrEqual */,
            value: { type: "percentile" /* percentile */, value: 0.5 },
            iconType: EMPTY_ICON_TYPE,
            iconId: ""
          }, {
            operator: "lessThanOrEqual" /* lessThanOrEqual */,
            value: { type: "max" /* max */ },
            iconType: EMPTY_ICON_TYPE,
            iconId: ""
          }]
        };
      }
    }
  }
  // eslint-disable-next-line ts/no-explicit-any
  _ensureAttr(obj, keys) {
    keys.reduce((pre, cur) => {
      if (!pre[cur]) {
        pre[cur] = {};
      }
      return pre[cur];
    }, obj);
    return obj;
  }
  /**
   * Constructs a conditional format rule from the settings applied to the builder.
   * @returns {IConditionFormattingRule} The conditional format rule.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with no content in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellEmpty()
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  build() {
    var _a;
    if (!this._rule.cfId) {
      this._rule.cfId = createCfId();
    }
    if (!this._rule.ranges) {
      this._rule.ranges = [];
    }
    if (this._rule.stopIfTrue === void 0) {
      this._rule.stopIfTrue = false;
    }
    if (!((_a = this._rule.rule) == null ? void 0 : _a.type)) {
      this._rule.rule.type = "highlightCell" /* highlightCell */;
      this._ensureAttr(this._rule, ["rule", "style"]);
    }
    const defaultConfig = this._getDefaultConfig(this._rule.rule.type);
    const result = { ...this._rule, rule: { ...defaultConfig, ...this._rule.rule } };
    return result;
  }
  /**
   * Deep clone a current builder.
   * @returns {ConditionalFormatRuleBaseBuilder} A new builder with the same settings as the original.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with no content in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const builder = fWorksheet.newConditionalFormattingRule()
   *   .whenCellEmpty()
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()]);
   * fWorksheet.addConditionalFormattingRule(builder.build());
   *
   * // Copy the rule and change the background color to green for the range A1:B2.
   * const newRange = fWorksheet.getRange('A1:B2');
   * const newBuilder = builder.copy()
   *   .setBackground('#00FF00')
   *   .setRanges([newRange.getRange()]);
   * fWorksheet.addConditionalFormattingRule(newBuilder.build());
   * ```
   */
  copy() {
    const newRule = Tools.deepClone(this._rule);
    if (newRule.cfId) {
      newRule.cfId = createCfId();
    }
    return new _ConditionalFormatRuleBaseBuilder(newRule);
  }
  /**
   * Gets the scope of the current conditional format.
   * @returns {IRange[]} The ranges to which the conditional format applies.
   */
  getRanges() {
    return this._rule.ranges || [];
  }
  /**
   * Get the icon set mapping dictionary.
   * @returns {Record<string, string[]>} The icon set mapping dictionary.
   */
  getIconMap() {
    return iconMap;
  }
  /**
   * Create a conditional format ID.
   * @returns {string} The conditional format ID.
   */
  createCfId() {
    return createCfId();
  }
  /**
   * Sets the scope for conditional formatting.
   * @param {IRange[]} ranges - The ranges to which the conditional format applies.
   * @returns {ConditionalFormatRuleBaseBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with no content in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellEmpty()
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setRanges(ranges) {
    this._rule.ranges = ranges;
    return this;
  }
};
var ConditionalFormatHighlightRuleBuilder = class _ConditionalFormatHighlightRuleBuilder extends ConditionalFormatRuleBaseBuilder {
  constructor(initConfig = {}) {
    super(initConfig);
    this._ensureAttr(this._rule, ["rule", "style"]);
  }
  /**
   * Deep clone a current builder.
   * @returns {ConditionalFormatHighlightRuleBuilder} A new builder with the same settings as the original.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with no content in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const builder = fWorksheet.newConditionalFormattingRule()
   *   .whenCellEmpty()
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()]);
   * fWorksheet.addConditionalFormattingRule(builder.build());
   *
   * // Copy the rule and change the background color to green for the range A1:B2.
   * const newRange = fWorksheet.getRange('A1:B2');
   * const newBuilder = builder.copy()
   *   .setBackground('#00FF00')
   *   .setRanges([newRange.getRange()]);
   * fWorksheet.addConditionalFormattingRule(newBuilder.build());
   * ```
   */
  copy() {
    const newRule = Tools.deepClone(this._rule);
    if (newRule.cfId) {
      newRule.cfId = createCfId();
    }
    return new _ConditionalFormatHighlightRuleBuilder(newRule);
  }
  /**
   * Set average rule.
   * @param {IAverageHighlightCell['operator']} operator - The operator to use for the average rule.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with greater than average values in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .setAverage(univerAPI.Enum.ConditionFormatNumberOperatorEnum.greaterThan)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setAverage(operator) {
    const ruleConfig = this._ruleConfig;
    ruleConfig.type = "highlightCell" /* highlightCell */;
    ruleConfig.subType = "average" /* average */;
    ruleConfig.operator = operator;
    return this;
  }
  /**
   * Set unique values rule.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with unique values in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .setUniqueValues()
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setUniqueValues() {
    const ruleConfig = this._ruleConfig;
    ruleConfig.type = "highlightCell" /* highlightCell */;
    ruleConfig.subType = "uniqueValues" /* uniqueValues */;
    return this;
  }
  /**
   * Set duplicate values rule.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with duplicate values in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .setDuplicateValues()
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setDuplicateValues() {
    const ruleConfig = this._ruleConfig;
    ruleConfig.type = "highlightCell" /* highlightCell */;
    ruleConfig.subType = "duplicateValues" /* duplicateValues */;
    return this;
  }
  /**
   * Set rank rule.
   * @param {{ isBottom: boolean, isPercent: boolean, value: number }} config - The rank rule settings.
   * @param {boolean} config.isBottom - Whether to highlight the bottom rank.
   * @param {boolean} config.isPercent - Whether to use a percentage rank.
   * @param {number} config.value - The rank value.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights the bottom 10% of values in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .setRank({ isBottom: true, isPercent: true, value: 10 })
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setRank(config) {
    const ruleConfig = this._ruleConfig;
    ruleConfig.type = "highlightCell" /* highlightCell */;
    ruleConfig.subType = "rank" /* rank */;
    ruleConfig.isBottom = config.isBottom;
    ruleConfig.isPercent = config.isPercent;
    ruleConfig.value = config.value;
    return this;
  }
  /**
   * Sets the background color for the conditional format rule's format.
   * @param {string} [color] - The background color to set. If not provided, the background color is removed.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with no content in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellEmpty()
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setBackground(color) {
    var _a;
    if (((_a = this._ruleConfig) == null ? void 0 : _a.type) === "highlightCell" /* highlightCell */) {
      if (color) {
        this._ensureAttr(this._ruleConfig, ["style", "bg"]);
        const colorKit = new ColorKit(color);
        this._ruleConfig.style.bg.rgb = colorKit.toRgbString();
      } else {
        delete this._ruleConfig.style.bg;
      }
    }
    return this;
  }
  /**
   * Sets text bolding for the conditional format rule's format.
   * @param {boolean} isBold - Whether to bold the text.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that bolds the text for cells with not empty content in the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellNotEmpty()
   *   .setBold(true)
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setBold(isBold) {
    var _a;
    if (((_a = this._ruleConfig) == null ? void 0 : _a.type) === "highlightCell" /* highlightCell */) {
      this._ensureAttr(this._ruleConfig, ["style"]);
      this._ruleConfig.style.bl = isBold ? 1 /* TRUE */ : 0 /* FALSE */;
    }
    return this;
  }
  /**
   * Sets the font color for the conditional format rule's format.
   * @param {string} [color] - The font color to set. If not provided, the font color is removed.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that changes the font color to red for cells with not empty content in the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellNotEmpty()
   *   .setFontColor('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setFontColor(color) {
    var _a;
    if (((_a = this._ruleConfig) == null ? void 0 : _a.type) === "highlightCell" /* highlightCell */) {
      if (color) {
        const colorKit = new ColorKit(color);
        this._ensureAttr(this._ruleConfig, ["style", "cl"]);
        this._ruleConfig.style.cl.rgb = colorKit.toRgbString();
      } else {
        delete this._ruleConfig.style.cl;
      }
    }
    return this;
  }
  /**
   * Sets text italics for the conditional format rule's format.
   * @param {boolean} isItalic - Whether to italicize the text.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that italicizes the text for cells with not empty content in the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellNotEmpty()
   *   .setItalic(true)
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setItalic(isItalic) {
    var _a;
    if (((_a = this._ruleConfig) == null ? void 0 : _a.type) === "highlightCell" /* highlightCell */) {
      this._ensureAttr(this._ruleConfig, ["style"]);
      this._ruleConfig.style.it = isItalic ? 1 /* TRUE */ : 0 /* FALSE */;
    }
    return this;
  }
  /**
   * Sets text strikethrough for the conditional format rule's format.
   * @param {boolean} isStrikethrough - Whether is strikethrough the text.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that set text strikethrough for cells with not empty content in the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellNotEmpty()
   *   .setStrikethrough(true)
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setStrikethrough(isStrikethrough) {
    var _a;
    if (((_a = this._ruleConfig) == null ? void 0 : _a.type) === "highlightCell" /* highlightCell */) {
      this._ensureAttr(this._ruleConfig, ["style", "st"]);
      this._ruleConfig.style.st.s = isStrikethrough ? 1 /* TRUE */ : 0 /* FALSE */;
    }
    return this;
  }
  /**
   * Sets text underlining for the conditional format rule's format.
   * @param {boolean} isUnderline - Whether to underline the text.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that underlines the text for cells with not empty content in the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellNotEmpty()
   *   .setUnderline(true)
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setUnderline(isUnderline) {
    var _a;
    if (((_a = this._ruleConfig) == null ? void 0 : _a.type) === "highlightCell" /* highlightCell */) {
      this._ensureAttr(this._ruleConfig, ["style", "ul"]);
      this._ruleConfig.style.ul.s = isUnderline ? 1 /* TRUE */ : 0 /* FALSE */;
    }
    return this;
  }
  /**
   * Sets the conditional format rule to trigger when the cell is empty.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with no content in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellEmpty()
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenCellEmpty() {
    const ruleConfig = this._ruleConfig;
    ruleConfig.type = "highlightCell" /* highlightCell */;
    ruleConfig.subType = "text" /* text */;
    ruleConfig.value = "";
    ruleConfig.operator = "equal" /* equal */;
    return this;
  }
  /**
   * Sets the conditional format rule to trigger when the cell is not empty.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that changes the font color to red for cells with not empty content in the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellNotEmpty()
   *   .setFontColor('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenCellNotEmpty() {
    const ruleConfig = this._ruleConfig;
    ruleConfig.type = "highlightCell" /* highlightCell */;
    ruleConfig.subType = "text" /* text */;
    ruleConfig.value = "";
    ruleConfig.operator = "notEqual" /* notEqual */;
    return this;
  }
  /**
   * Sets the conditional format rule to trigger when a time period is met.
   * @param {CFTimePeriodOperator} date - The time period to check for.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with dates in the last 7 days in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenDate(univerAPI.Enum.ConditionFormatTimePeriodOperatorEnum.last7Days)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenDate(date) {
    const ruleConfig = this._ruleConfig;
    ruleConfig.type = "highlightCell" /* highlightCell */;
    ruleConfig.subType = "timePeriod" /* timePeriod */;
    ruleConfig.operator = date;
    return this;
  }
  /**
   * Sets the conditional format rule to trigger when that the given formula evaluates to `true`.
   * @param {string} formulaString - A custom formula that evaluates to true if the input is valid. formulaString start with '='.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values greater than 10 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenFormulaSatisfied('=A1>10')
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenFormulaSatisfied(formulaString) {
    const ruleConfig = this._ruleConfig;
    ruleConfig.type = "highlightCell" /* highlightCell */;
    ruleConfig.subType = "formula" /* formula */;
    ruleConfig.value = formulaString;
    return this;
  }
  /**
   * Sets the conditional format rule to trigger when a number falls between, or is either of, two specified values.
   * @param {number} start - The lowest acceptable value.
   * @param {number} end - The highest acceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values between 10 and 20 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberBetween(10, 20)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenNumberBetween(start, end) {
    const min = Math.min(start, end);
    const max = Math.max(start, end);
    const ruleConfig = this._ruleConfig;
    ruleConfig.type = "highlightCell" /* highlightCell */;
    ruleConfig.subType = "number" /* number */;
    ruleConfig.value = [min, max];
    ruleConfig.operator = "between" /* between */;
    return this;
  }
  /**
   * Sets the conditional format rule to trigger when a number is equal to the given value.
   * @param {number} value - The sole acceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values equal to 10 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberEqualTo(10)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenNumberEqualTo(value) {
    const ruleConfig = this._ruleConfig;
    ruleConfig.type = "highlightCell" /* highlightCell */;
    ruleConfig.subType = "number" /* number */;
    ruleConfig.value = value;
    ruleConfig.operator = "equal" /* equal */;
    return this;
  }
  /**
   * Sets the conditional format rule to trigger when a number is greater than the given value.
   * @param {number} value - The highest unacceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values greater than 10 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberGreaterThan(10)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenNumberGreaterThan(value) {
    const ruleConfig = this._ruleConfig;
    ruleConfig.type = "highlightCell" /* highlightCell */;
    ruleConfig.subType = "number" /* number */;
    ruleConfig.value = value;
    ruleConfig.operator = "greaterThan" /* greaterThan */;
    return this;
  }
  /**
   * Sets the conditional format rule to trigger when a number is greater than or equal to the given value.
   * @param {number} value - The lowest acceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values greater than or equal to 10 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberGreaterThanOrEqualTo(10)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenNumberGreaterThanOrEqualTo(value) {
    const ruleConfig = this._ruleConfig;
    ruleConfig.type = "highlightCell" /* highlightCell */;
    ruleConfig.subType = "number" /* number */;
    ruleConfig.value = value;
    ruleConfig.operator = "greaterThanOrEqual" /* greaterThanOrEqual */;
    return this;
  }
  /**
   * Sets the conditional conditional format rule to trigger when a number less than the given value.
   * @param {number} value - The lowest unacceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values less than 10 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberLessThan(10)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenNumberLessThan(value) {
    const ruleConfig = this._ruleConfig;
    ruleConfig.type = "highlightCell" /* highlightCell */;
    ruleConfig.subType = "number" /* number */;
    ruleConfig.value = value;
    ruleConfig.operator = "lessThan" /* lessThan */;
    return this;
  }
  /**
   * Sets the conditional format rule to trigger when a number less than or equal to the given value.
   * @param {number} value - The highest acceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values less than or equal to 10 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberLessThanOrEqualTo(10)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenNumberLessThanOrEqualTo(value) {
    const ruleConfig = this._ruleConfig;
    ruleConfig.type = "highlightCell" /* highlightCell */;
    ruleConfig.subType = "number" /* number */;
    ruleConfig.value = value;
    ruleConfig.operator = "lessThanOrEqual" /* lessThanOrEqual */;
    return this;
  }
  /**
   * Sets the conditional format rule to trigger when a number does not fall between, and is neither of, two specified values.
   * @param {number} start - The lowest unacceptable value.
   * @param {number} end - The highest unacceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values not between 10 and 20 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberNotBetween(10, 20)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenNumberNotBetween(start, end) {
    const min = Math.min(start, end);
    const max = Math.max(start, end);
    const ruleConfig = this._ruleConfig;
    ruleConfig.type = "highlightCell" /* highlightCell */;
    ruleConfig.subType = "number" /* number */;
    ruleConfig.value = [min, max];
    ruleConfig.operator = "notBetween" /* notBetween */;
    return this;
  }
  /**
   * Sets the conditional format rule to trigger when a number is not equal to the given value.
   * @param {number} value - The sole unacceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values not equal to 10 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberNotEqualTo(10)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenNumberNotEqualTo(value) {
    const ruleConfig = this._ruleConfig;
    ruleConfig.type = "highlightCell" /* highlightCell */;
    ruleConfig.subType = "number" /* number */;
    ruleConfig.value = value;
    ruleConfig.operator = "notEqual" /* notEqual */;
    return this;
  }
  /**
   * Sets the conditional format rule to trigger when that the input contains the given value.
   * @param {string} text - The value that the input must contain.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with text containing 'apple' in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenTextContains('apple')
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenTextContains(text) {
    const ruleConfig = this._ruleConfig;
    ruleConfig.type = "highlightCell" /* highlightCell */;
    ruleConfig.subType = "text" /* text */;
    ruleConfig.value = text;
    ruleConfig.operator = "containsText" /* containsText */;
    return this;
  }
  /**
   * Sets the conditional format rule to trigger when that the input does not contain the given value.
   * @param {string} text - The value that the input must not contain.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with text not containing 'apple' in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenTextDoesNotContain('apple')
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenTextDoesNotContain(text) {
    const ruleConfig = this._ruleConfig;
    ruleConfig.type = "highlightCell" /* highlightCell */;
    ruleConfig.subType = "text" /* text */;
    ruleConfig.value = text;
    ruleConfig.operator = "notContainsText" /* notContainsText */;
    return this;
  }
  /**
   * Sets the conditional format rule to trigger when that the input ends with the given value.
   * @param {string} text - Text to compare against the end of the string.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with text ending with '.ai' in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenTextEndsWith('.ai')
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenTextEndsWith(text) {
    const ruleConfig = this._ruleConfig;
    ruleConfig.type = "highlightCell" /* highlightCell */;
    ruleConfig.subType = "text" /* text */;
    ruleConfig.value = text;
    ruleConfig.operator = "endsWith" /* endsWith */;
    return this;
  }
  /**
   * Sets the conditional format rule to trigger when that the input is equal to the given value.
   * @param {string} text - The sole acceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with text equal to 'apple' in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenTextEqualTo('apple')
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenTextEqualTo(text) {
    const ruleConfig = this._ruleConfig;
    ruleConfig.type = "highlightCell" /* highlightCell */;
    ruleConfig.subType = "text" /* text */;
    ruleConfig.value = text;
    ruleConfig.operator = "equal" /* equal */;
    return this;
  }
  /**
   * Sets the conditional format rule to trigger when that the input starts with the given value.
   * @param {string} text - Text to compare against the beginning of the string.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with text starting with 'https://' in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenTextStartsWith('https://')
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenTextStartsWith(text) {
    const ruleConfig = this._ruleConfig;
    ruleConfig.type = "highlightCell" /* highlightCell */;
    ruleConfig.subType = "text" /* text */;
    ruleConfig.value = text;
    ruleConfig.operator = "beginsWith" /* beginsWith */;
    return this;
  }
};
var ConditionalFormatDataBarRuleBuilder = class _ConditionalFormatDataBarRuleBuilder extends ConditionalFormatRuleBaseBuilder {
  /**
   * Deep clone a current builder.
   * @returns {ConditionalFormatDataBarRuleBuilder} A new instance of the builder with the same settings as the original.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that adds a data bar to cells with values between -100 and 100 in the range A1:D10.
   * // positive values are green and negative values are red.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const builder = fWorksheet.newConditionalFormattingRule()
   *   .setDataBar({
   *     min: { type: 'num', value: -100 },
   *     max: { type: 'num', value: 100 },
   *     positiveColor: '#00FF00',
   *     nativeColor: '#FF0000',
   *     isShowValue: true
   *   })
   *   .setRanges([fRange.getRange()]);
   * fWorksheet.addConditionalFormattingRule(builder.build());
   *
   * // Copy the rule and apply it to a new range.
   * const newRange = fWorksheet.getRange('F1:F10');
   * const newBuilder = builder.copy()
   *   .setRanges([newRange.getRange()]);
   * fWorksheet.addConditionalFormattingRule(newBuilder.build());
   * ```
   */
  copy() {
    const newRule = Tools.deepClone(this._rule);
    if (newRule.cfId) {
      newRule.cfId = createCfId();
    }
    return new _ConditionalFormatDataBarRuleBuilder(newRule);
  }
  /**
   * Set data bar rule.
   * @param {{
   *         min: IValueConfig;
   *         max: IValueConfig;
   *         isGradient?: boolean;
   *         positiveColor: string;
   *         nativeColor: string;
   *         isShowValue?: boolean;
   *     }} config - The data bar rule settings.
   * @param {IValueConfig} config.min - The minimum value for the data bar.
   * @param {IValueConfig} config.max - The maximum value for the data bar.
   * @param {boolean} [config.isGradient] - Whether the data bar is gradient.
   * @param {string} config.positiveColor - The color for positive values.
   * @param {string} config.nativeColor - The color for negative values.
   * @param {boolean} [config.isShowValue] - Whether to show the value in the cell.
   * @returns {ConditionalFormatDataBarRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that adds a data bar to cells with values between -100 and 100 in the range A1:D10.
   * // positive values are green and negative values are red.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .setDataBar({
   *     min: { type: 'num', value: -100 },
   *     max: { type: 'num', value: 100 },
   *     positiveColor: '#00FF00',
   *     nativeColor: '#FF0000',
   *     isShowValue: true
   *   })
   *  .setRanges([fRange.getRange()])
   * .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setDataBar(config) {
    const ruleConfig = this._ruleConfig;
    ruleConfig.type = "dataBar" /* dataBar */;
    ruleConfig.isShowValue = !!config.isShowValue;
    ruleConfig.config = {
      min: config.min,
      max: config.max,
      positiveColor: config.positiveColor,
      nativeColor: config.nativeColor,
      isGradient: !!config.isGradient
    };
    return this;
  }
};
var ConditionalFormatColorScaleRuleBuilder = class _ConditionalFormatColorScaleRuleBuilder extends ConditionalFormatRuleBaseBuilder {
  /**
   * Deep clone a current builder.
   * @returns {ConditionalFormatColorScaleRuleBuilder} A new instance of the builder with the same settings as the original.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that adds a color scale to cells with values between 0 and 100 in the range A1:D10.
   * // The color scale is green for 0, yellow for 50, and red for 100.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const builder = fWorksheet.newConditionalFormattingRule()
   *   .setColorScale([
   *     { index: 0, color: '#00FF00', value: { type: 'num', value: 0 } },
   *     { index: 1, color: '#FFFF00', value: { type: 'num', value: 50 } },
   *     { index: 2, color: '#FF0000', value: { type: 'num', value: 100 } }
   *   ])
   *   .setRanges([fRange.getRange()]);
   * fWorksheet.addConditionalFormattingRule(builder.build());
   *
   * // Copy the rule and apply it to a new range.
   * const newRange = fWorksheet.getRange('F1:F10');
   * const newBuilder = builder.copy()
   *   .setRanges([newRange.getRange()]);
   * fWorksheet.addConditionalFormattingRule(newBuilder.build());
   * ```
   */
  copy() {
    const newRule = Tools.deepClone(this._rule);
    if (newRule.cfId) {
      newRule.cfId = createCfId();
    }
    return new _ConditionalFormatColorScaleRuleBuilder(newRule);
  }
  /**
   * Set color scale rule.
   * @param {{ index: number; color: string; value: IValueConfig }[]} config - The color scale rule settings.
   * @param {number} config.index - The index of the color scale configuration.
   * @param {string} config.color - The color corresponding to the index of the color scale configuration.
   * @param {IValueConfig} config.value - The condition value corresponding to the index of the color scale configuration.
   * @returns {ConditionalFormatColorScaleRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that adds a color scale to cells with values between 0 and 100 in the range A1:D10.
   * // The color scale is green for 0, yellow for 50, and red for 100.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .setColorScale([
   *     { index: 0, color: '#00FF00', value: { type: 'num', value: 0 } },
   *     { index: 1, color: '#FFFF00', value: { type: 'num', value: 50 } },
   *     { index: 2, color: '#FF0000', value: { type: 'num', value: 100 } }
   *   ])
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setColorScale(config) {
    const ruleConfig = this._ruleConfig;
    ruleConfig.type = "colorScale" /* colorScale */;
    ruleConfig.config = config;
    return this;
  }
};
var ConditionalFormatIconSetRuleBuilder = class _ConditionalFormatIconSetRuleBuilder extends ConditionalFormatRuleBaseBuilder {
  /**
   * Deep clone a current builder.
   * @returns {ConditionalFormatIconSetRuleBuilder} A new instance of the builder with the same settings as the original.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a 3-arrow icon set conditional formatting rule in the range A1:D10.
   * // The first arrow is green for values greater than 20.
   * // The second arrow is yellow for values greater than 10.
   * // The third arrow is red for values less than or equal to 10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const builder = fWorksheet.newConditionalFormattingRule()
   *   .setIconSet({
   *     iconConfigs: [
   *       { iconType: '3Arrows', iconId: '0', operator: univerAPI.Enum.ConditionFormatNumberOperatorEnum.greaterThan, value: { type: 'num', value: 20 } },
   *       { iconType: '3Arrows', iconId: '1', operator: univerAPI.Enum.ConditionFormatNumberOperatorEnum.greaterThan, value: { type: 'num', value: 10 } },
   *       { iconType: '3Arrows', iconId: '2', operator: univerAPI.Enum.ConditionFormatNumberOperatorEnum.lessThanOrEqual, value: { type: 'num', value: 10 } }
   *     ],
   *     isShowValue: true,
   *   })
   *   .setRanges([fRange.getRange()]);
   * fWorksheet.addConditionalFormattingRule(builder.build());
   *
   * // Copy the rule and apply it to a new range.
   * const newRange = fWorksheet.getRange('F1:F10');
   * const newBuilder = builder.copy()
   *   .setRanges([newRange.getRange()]);
   * fWorksheet.addConditionalFormattingRule(newBuilder.build());
   * ```
   */
  copy() {
    const newRule = Tools.deepClone(this._rule);
    if (newRule.cfId) {
      newRule.cfId = createCfId();
    }
    return new _ConditionalFormatIconSetRuleBuilder(newRule);
  }
  /**
   * Set up icon set conditional formatting rule.
   * @param {{ iconConfigs: IIconSet['config'], isShowValue: boolean }} config - The icon set conditional formatting rule settings.
   * @param {IIconSet['config']} config.iconConfigs - The icon configurations. iconId property is a string indexing of a group icons.
   * @param {boolean} config.isShowValue - Whether to show the value in the cell.
   * @returns {ConditionalFormatIconSetRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a 3-arrow icon set conditional formatting rule in the range A1:D10.
   * // The first arrow is green for values greater than 20.
   * // The second arrow is yellow for values greater than 10.
   * // The third arrow is red for values less than or equal to 10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const builder = fWorksheet.newConditionalFormattingRule();
   * console.log(builder.getIconMap()); // icons key-value map
   * const rule = builder.setIconSet({
   *     iconConfigs: [
   *       { iconType: '3Arrows', iconId: '0', operator: univerAPI.Enum.ConditionFormatNumberOperatorEnum.greaterThan, value: { type: 'num', value: 20 } },
   *       { iconType: '3Arrows', iconId: '1', operator: univerAPI.Enum.ConditionFormatNumberOperatorEnum.greaterThan, value: { type: 'num', value: 10 } },
   *       { iconType: '3Arrows', iconId: '2', operator: univerAPI.Enum.ConditionFormatNumberOperatorEnum.lessThanOrEqual, value: { type: 'num', value: 10 } }
   *     ],
   *     isShowValue: true,
   *   })
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setIconSet(config) {
    const ruleConfig = this._ruleConfig;
    ruleConfig.type = "iconSet" /* iconSet */;
    ruleConfig.config = config.iconConfigs;
    ruleConfig.isShowValue = config.isShowValue;
    return this;
  }
};
var FConditionalFormattingBuilder = class {
  constructor(_initConfig = {}) {
    this._initConfig = _initConfig;
  }
  /**
   * Constructs a conditional format rule from the settings applied to the builder.
   * @returns {IConditionFormattingRule} The conditional format rule.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values greater than 10 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberGreaterThan(10)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  build() {
    return new ConditionalFormatRuleBaseBuilder(this._initConfig).build();
  }
  /**
   * Set average rule.
   * @param {IAverageHighlightCell['operator']} operator - The operator to use for the average rule.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with greater than average values in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .setAverage(univerAPI.Enum.ConditionFormatNumberOperatorEnum.greaterThan)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setAverage(operator) {
    return new ConditionalFormatHighlightRuleBuilder(this._initConfig).setAverage(operator);
  }
  /**
   * Set unique values rule.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with unique values in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .setUniqueValues()
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setUniqueValues() {
    return new ConditionalFormatHighlightRuleBuilder(this._initConfig).setUniqueValues();
  }
  /**
   * Set duplicate values rule.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with duplicate values in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .setDuplicateValues()
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setDuplicateValues() {
    return new ConditionalFormatHighlightRuleBuilder(this._initConfig).setDuplicateValues();
  }
  /**
   * Set rank rule.
   * @param {{ isBottom: boolean, isPercent: boolean, value: number }} config - The rank rule settings.
   * @param {boolean} config.isBottom - Whether to highlight the bottom rank.
   * @param {boolean} config.isPercent - Whether to use a percentage rank.
   * @param {number} config.value - The rank value.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights the bottom 10% of values in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .setRank({ isBottom: true, isPercent: true, value: 10 })
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setRank(config) {
    return new ConditionalFormatHighlightRuleBuilder(this._initConfig).setRank(config);
  }
  /**
   * Get the icon set mapping dictionary.
   * @returns {Record<string, string[]>} The icon set mapping dictionary.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * console.log(fWorksheet.newConditionalFormattingRule().getIconMap()); // icons key-value map
   * ```
   */
  getIconMap() {
    return iconMap;
  }
  /**
   * Set up icon set conditional formatting rule.
   * @param {{ iconConfigs: IIconSet['config'], isShowValue: boolean }} config - The icon set conditional formatting rule settings.
   * @param {IIconSet['config']} config.iconConfigs - The icon configurations. iconId property is a string indexing of a group icons.
   * @param {boolean} config.isShowValue - Whether to show the value in the cell.
   * @returns {ConditionalFormatIconSetRuleBuilder} The conditional format icon set rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a 3-arrow icon set conditional formatting rule in the range A1:D10.
   * // The first arrow is green for values greater than 20.
   * // The second arrow is yellow for values greater than 10.
   * // The third arrow is red for values less than or equal to 10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const builder = fWorksheet.newConditionalFormattingRule();
   * console.log(builder.getIconMap()); // icons key-value map
   * const rule = builder.setIconSet({
   *     iconConfigs: [
   *       { iconType: '3Arrows', iconId: '0', operator: univerAPI.Enum.ConditionFormatNumberOperatorEnum.greaterThan, value: { type: 'num', value: 20 } },
   *       { iconType: '3Arrows', iconId: '1', operator: univerAPI.Enum.ConditionFormatNumberOperatorEnum.greaterThan, value: { type: 'num', value: 10 } },
   *       { iconType: '3Arrows', iconId: '2', operator: univerAPI.Enum.ConditionFormatNumberOperatorEnum.lessThanOrEqual, value: { type: 'num', value: 10 } }
   *     ],
   *     isShowValue: true,
   *   })
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setIconSet(config) {
    return new ConditionalFormatIconSetRuleBuilder(this._initConfig).setIconSet(config);
  }
  /**
   * Set color scale rule.
   * @param {{ index: number; color: string; value: IValueConfig }[]} config - The color scale rule settings.
   * @param {number} config.index - The index of the color scale.
   * @param {string} config.color - The color for the color scale.
   * @param {IValueConfig} config.value - The value for the color scale.
   * @returns {ConditionalFormatColorScaleRuleBuilder} The conditional format color scale rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that adds a color scale to cells with values between 0 and 100 in the range A1:D10.
   * // The color scale is green for 0, yellow for 50, and red for 100.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .setColorScale([
   *     { index: 0, color: '#00FF00', value: { type: 'num', value: 0 } },
   *     { index: 1, color: '#FFFF00', value: { type: 'num', value: 50 } },
   *     { index: 2, color: '#FF0000', value: { type: 'num', value: 100 } }
   *   ])
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setColorScale(config) {
    return new ConditionalFormatColorScaleRuleBuilder(this._initConfig).setColorScale(config);
  }
  /**
   * Set data bar rule.
   * @param {{
   *         min: IValueConfig;
   *         max: IValueConfig;
   *         isGradient?: boolean;
   *         positiveColor: string;
   *         nativeColor: string;
   *         isShowValue?: boolean;
   *     }} config - The data bar rule settings.
   * @param {IValueConfig} config.min - The minimum value for the data bar.
   * @param {IValueConfig} config.max - The maximum value for the data bar.
   * @param {boolean} [config.isGradient] - Whether the data bar is gradient.
   * @param {string} config.positiveColor - The color for positive values.
   * @param {string} config.nativeColor - The color for negative values.
   * @param {boolean} [config.isShowValue] - Whether to show the value in the cell.
   * @returns {ConditionalFormatDataBarRuleBuilder} The conditional format data bar rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that adds a data bar to cells with values between -100 and 100 in the range A1:D10.
   * // positive values are green and negative values are red.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .setDataBar({
   *     min: { type: 'num', value: -100 },
   *     max: { type: 'num', value: 100 },
   *     positiveColor: '#00FF00',
   *     nativeColor: '#FF0000',
   *     isShowValue: true
   *   })
   *  .setRanges([fRange.getRange()])
   * .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setDataBar(config) {
    return new ConditionalFormatDataBarRuleBuilder(this._initConfig).setDataBar(config);
  }
  /**
   * Sets the background color for the conditional format rule's format.
   * @param {string} [color] - The background color to set. If not provided, the background color is removed.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with no content in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellEmpty()
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setBackground(color) {
    return new ConditionalFormatHighlightRuleBuilder(this._initConfig).setBackground(color);
  }
  /**
   * Sets text bolding for the conditional format rule's format.
   * @param {boolean} isBold - Whether to bold the text.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that bolds the text for cells with not empty content in the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellNotEmpty()
   *   .setBold(true)
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setBold(isBold) {
    return new ConditionalFormatHighlightRuleBuilder(this._initConfig).setBold(isBold);
  }
  /**
   * Sets the font color for the conditional format rule's format.
   * @param {string} [color] - The font color to set. If not provided, the font color is removed.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that changes the font color to red for cells with not empty content in the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellNotEmpty()
   *   .setFontColor('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setFontColor(color) {
    return new ConditionalFormatHighlightRuleBuilder(this._initConfig).setFontColor(color);
  }
  /**
   * Sets text italics for the conditional format rule's format.
   * @param {boolean} isItalic - Whether to italicize the text.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that italicizes the text for cells with not empty content in the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellNotEmpty()
   *   .setItalic(true)
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setItalic(isItalic) {
    return new ConditionalFormatHighlightRuleBuilder(this._initConfig).setItalic(isItalic);
  }
  /**
   * Sets text strikethrough for the conditional format rule's format.
   * @param {boolean} isStrikethrough - Whether is strikethrough the text.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that set text strikethrough for cells with not empty content in the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellNotEmpty()
   *   .setStrikethrough(true)
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setStrikethrough(isStrikethrough) {
    return new ConditionalFormatHighlightRuleBuilder(this._initConfig).setStrikethrough(isStrikethrough);
  }
  /**
   * Sets text underlining for the conditional format rule's format.
   * @param {boolean} isUnderline - Whether to underline the text.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that underlines the text for cells with not empty content in the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellNotEmpty()
   *   .setUnderline(true)
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setUnderline(isUnderline) {
    return new ConditionalFormatHighlightRuleBuilder(this._initConfig).setUnderline(isUnderline);
  }
  /**
   * Sets the conditional format rule to trigger when the cell is empty.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with no content in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellEmpty()
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenCellEmpty() {
    return new ConditionalFormatHighlightRuleBuilder(this._initConfig).whenCellEmpty();
  }
  /**
   * Sets the conditional format rule to trigger when the cell is not empty.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that changes the font color to red for cells with not empty content in the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellNotEmpty()
   *   .setFontColor('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenCellNotEmpty() {
    return new ConditionalFormatHighlightRuleBuilder(this._initConfig).whenCellNotEmpty();
  }
  /**
   * Sets the conditional format rule to trigger when a time period is met.
   * @param {CFTimePeriodOperator} date - The time period to check for.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with dates in the last 7 days in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenDate(univerAPI.Enum.ConditionFormatTimePeriodOperatorEnum.last7Days)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenDate(date) {
    return new ConditionalFormatHighlightRuleBuilder(this._initConfig).whenDate(date);
  }
  /**
   * Sets the conditional format rule to trigger when that the given formula evaluates to `true`.
   * @param {string} formulaString - A custom formula that evaluates to true if the input is valid. formulaString start with '='.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values greater than 10 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenFormulaSatisfied('=A1>10')
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenFormulaSatisfied(formulaString) {
    return new ConditionalFormatHighlightRuleBuilder(this._initConfig).whenFormulaSatisfied(formulaString);
  }
  /**
   * Sets the conditional format rule to trigger when a number falls between, or is either of, two specified values.
   * @param {number} start - The lowest acceptable value.
   * @param {number} end - The highest acceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values between 10 and 20 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberBetween(10, 20)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenNumberBetween(start, end) {
    return new ConditionalFormatHighlightRuleBuilder(this._initConfig).whenNumberBetween(start, end);
  }
  /**
   * Sets the conditional format rule to trigger when a number is equal to the given value.
   * @param {number} value - The sole acceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values equal to 10 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberEqualTo(10)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenNumberEqualTo(value) {
    return new ConditionalFormatHighlightRuleBuilder(this._initConfig).whenNumberEqualTo(value);
  }
  /**
   * Sets the conditional format rule to trigger when a number is greater than the given value.
   * @param {number} value - The highest unacceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values greater than 10 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberGreaterThan(10)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenNumberGreaterThan(value) {
    return new ConditionalFormatHighlightRuleBuilder(this._initConfig).whenNumberGreaterThan(value);
  }
  /**
   * Sets the conditional format rule to trigger when a number is greater than or equal to the given value.
   * @param {number} value - The lowest acceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values greater than or equal to 10 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberGreaterThanOrEqualTo(10)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenNumberGreaterThanOrEqualTo(value) {
    return new ConditionalFormatHighlightRuleBuilder(this._initConfig).whenNumberGreaterThanOrEqualTo(value);
  }
  /**
   * Sets the conditional conditional format rule to trigger when a number less than the given value.
   * @param {number} value - The lowest unacceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values less than 10 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberLessThan(10)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenNumberLessThan(value) {
    return new ConditionalFormatHighlightRuleBuilder(this._initConfig).whenNumberLessThan(value);
  }
  /**
   * Sets the conditional format rule to trigger when a number less than or equal to the given value.
   * @param {number} value - The highest acceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values less than or equal to 10 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberLessThanOrEqualTo(10)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenNumberLessThanOrEqualTo(value) {
    return new ConditionalFormatHighlightRuleBuilder(this._initConfig).whenNumberLessThanOrEqualTo(value);
  }
  /**
   * Sets the conditional format rule to trigger when a number does not fall between, and is neither of, two specified values.
   * @param {number} start - The lowest unacceptable value.
   * @param {number} end - The highest unacceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values not between 10 and 20 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberNotBetween(10, 20)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenNumberNotBetween(start, end) {
    return new ConditionalFormatHighlightRuleBuilder(this._initConfig).whenNumberNotBetween(start, end);
  }
  /**
   * Sets the conditional format rule to trigger when a number is not equal to the given value.
   * @param {number} value - The sole unacceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values not equal to 10 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberNotEqualTo(10)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenNumberNotEqualTo(value) {
    return new ConditionalFormatHighlightRuleBuilder(this._initConfig).whenNumberNotEqualTo(value);
  }
  /**
   * Sets the conditional format rule to trigger when that the input contains the given value.
   * @param {string} text - The value that the input must contain.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with text containing 'apple' in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenTextContains('apple')
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenTextContains(text) {
    return new ConditionalFormatHighlightRuleBuilder(this._initConfig).whenTextContains(text);
  }
  /**
   * Sets the conditional format rule to trigger when that the input does not contain the given value.
   * @param {string} text - The value that the input must not contain.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with text not containing 'apple' in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenTextDoesNotContain('apple')
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenTextDoesNotContain(text) {
    return new ConditionalFormatHighlightRuleBuilder(this._initConfig).whenTextDoesNotContain(text);
  }
  /**
   * Sets the conditional format rule to trigger when that the input ends with the given value.
   * @param {string} text - Text to compare against the end of the string.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with text ending with '.ai' in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenTextEndsWith('.ai')
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenTextEndsWith(text) {
    return new ConditionalFormatHighlightRuleBuilder(this._initConfig).whenTextEndsWith(text);
  }
  /**
   * Sets the conditional format rule to trigger when that the input is equal to the given value.
   * @param {string} text - The sole acceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with text equal to 'apple' in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenTextEqualTo('apple')
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenTextEqualTo(text) {
    return new ConditionalFormatHighlightRuleBuilder(this._initConfig).whenTextEqualTo(text);
  }
  /**
   * Sets the conditional format rule to trigger when that the input starts with the given value.
   * @param {string} text - Text to compare against the beginning of the string.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with text starting with 'https://' in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenTextStartsWith('https://')
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenTextStartsWith(text) {
    return new ConditionalFormatHighlightRuleBuilder(this._initConfig).whenTextStartsWith(text);
  }
};

// ../packages/sheets-conditional-formatting/src/facade/f-range.ts
var FRangeConditionalFormattingMixin = class extends FRange {
  _getConditionalFormattingRuleModel() {
    return this._injector.get(ConditionalFormattingRuleModel);
  }
  getConditionalFormattingRules() {
    const rules = this._getConditionalFormattingRuleModel().getSubunitRules(this._workbook.getUnitId(), this._worksheet.getSheetId()) || [];
    return [...rules].filter((rule) => rule.ranges.some((range) => Rectangle.intersects(range, this._range)));
  }
  createConditionalFormattingRule() {
    return new FConditionalFormattingBuilder({ ranges: [this._range] });
  }
  addConditionalFormattingRule(rule) {
    const params = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      rule
    };
    this._commandService.syncExecuteCommand(AddCfCommand.id, params);
    return this;
  }
  deleteConditionalFormattingRule(cfId) {
    const params = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      cfId
    };
    this._commandService.syncExecuteCommand(DeleteCfCommand.id, params);
    return this;
  }
  moveConditionalFormattingRule(cfId, toCfId, type = "after") {
    const params = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      start: { id: cfId, type: "self" },
      end: { id: toCfId, type }
    };
    this._commandService.syncExecuteCommand(MoveCfCommand.id, params);
    return this;
  }
  setConditionalFormattingRule(cfId, rule) {
    const params = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      rule,
      cfId
    };
    this._commandService.syncExecuteCommand(SetCfCommand.id, params);
    return this;
  }
  clearConditionalFormatRules() {
    const params = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      ranges: [this._range]
    };
    this._commandService.syncExecuteCommand(ClearRangeCfCommand.id, params);
    return this;
  }
};
FRange.extend(FRangeConditionalFormattingMixin);

// ../packages/sheets-conditional-formatting/src/facade/f-workbook.ts
var FWorkbookConditionalFormattingMixin = class extends FWorkbook {
  newColor() {
    return new ColorBuilder();
  }
};
FWorkbook.extend(FWorkbookConditionalFormattingMixin);

// ../packages/sheets-conditional-formatting/src/facade/f-worksheet.ts
var FWorksheetConditionalFormattingMixin = class extends FWorksheet {
  _getConditionalFormattingRuleModel() {
    return this._injector.get(ConditionalFormattingRuleModel);
  }
  getConditionalFormattingRules() {
    const rules = this._getConditionalFormattingRuleModel().getSubunitRules(this._workbook.getUnitId(), this._worksheet.getSheetId()) || [];
    return [...rules];
  }
  createConditionalFormattingRule() {
    return new FConditionalFormattingBuilder();
  }
  newConditionalFormattingRule() {
    return new FConditionalFormattingBuilder();
  }
  addConditionalFormattingRule(rule) {
    const params = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      rule
    };
    this._commandService.syncExecuteCommand(AddCfCommand.id, params);
    return this;
  }
  deleteConditionalFormattingRule(cfId) {
    const params = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      cfId
    };
    this._commandService.syncExecuteCommand(DeleteCfCommand.id, params);
    return this;
  }
  moveConditionalFormattingRule(cfId, toCfId, type = "after") {
    const params = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      start: { id: cfId, type: "self" },
      end: { id: toCfId, type }
    };
    this._commandService.syncExecuteCommand(MoveCfCommand.id, params);
    return this;
  }
  setConditionalFormattingRule(cfId, rule) {
    const params = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      cfId,
      rule
    };
    this._commandService.syncExecuteCommand(SetCfCommand.id, params);
    return this;
  }
  clearConditionalFormatRules() {
    const params = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId()
    };
    this._commandService.syncExecuteCommand(ClearWorksheetCfCommand.id, params);
    return this;
  }
};
FWorksheet.extend(FWorksheetConditionalFormattingMixin);

// ../packages/sheets-conditional-formatting/src/facade/f-enum.ts
var FSheetsConditionalFormattingEnum = class {
  get ConditionFormatNumberOperatorEnum() {
    return CFNumberOperator;
  }
  get ConditionFormatTimePeriodOperatorEnum() {
    return CFTimePeriodOperator;
  }
};
FEnum.extend(FSheetsConditionalFormattingEnum);

// ../packages/sheets-find-replace/src/facade/f-text-finder.ts
var FTextFinder = class extends Disposable {
  constructor(_initialState, _injector, _univerInstanceService, _findReplaceService) {
    super();
    this._injector = _injector;
    this._univerInstanceService = _univerInstanceService;
    this._findReplaceService = _findReplaceService;
    __publicField(this, "_state", new FindReplaceState());
    __publicField(this, "_model");
    __publicField(this, "_complete");
    const providers = this._findReplaceService.getProviders();
    this._model = this._injector.createInstance(FindReplaceModel, this._state, providers);
    const newState = {
      ...createInitFindReplaceState(),
      ..._initialState
    };
    this._state.changeState(newState);
  }
  findAll() {
    if (!this._state.findCompleted || !this._complete) {
      return [];
    }
    return this._complete.results.map((result) => {
      return this._findMatchToFRange(result);
    });
  }
  findNext() {
    var _a;
    if (!this._state.findCompleted || !this._complete) {
      return null;
    }
    const match = (_a = this._model) == null ? void 0 : _a.moveToNextMatch();
    if (!match) {
      return null;
    }
    return this._findMatchToFRange(match);
  }
  findPrevious() {
    var _a;
    const match = (_a = this._model) == null ? void 0 : _a.moveToPreviousMatch();
    if (!match) {
      return null;
    }
    return this._findMatchToFRange(match);
  }
  getCurrentMatch() {
    var _a;
    if (!this._state.findCompleted || !this._complete) {
      throw new Error("Find operation is not completed.");
    }
    const match = (_a = this._model) == null ? void 0 : _a.currentMatch$.value;
    if (!match) {
      return null;
    }
    return this._findMatchToFRange(match);
  }
  async matchCaseAsync(matchCase) {
    this._state.changeState({ caseSensitive: matchCase, findCompleted: false });
    return new Promise((resolve) => {
      const subscribe = this._state.stateUpdates$.subscribe(async (state) => {
        if (state.findCompleted === true) {
          subscribe.unsubscribe();
          await this.ensureCompleteAsync();
          resolve(this);
        }
      });
    });
  }
  async matchEntireCellAsync(matchEntireCell) {
    this._state.changeState({ matchesTheWholeCell: matchEntireCell, findCompleted: false });
    return new Promise((resolve) => {
      const subscribe = this._state.stateUpdates$.subscribe(async (state) => {
        if (state.findCompleted === true) {
          subscribe.unsubscribe();
          await this.ensureCompleteAsync();
          resolve(this);
        }
      });
    });
  }
  async matchFormulaTextAsync(matchFormulaText) {
    this._state.changeState({ findBy: matchFormulaText ? "formula" /* FORMULA */ : "value" /* VALUE */, findCompleted: false });
    return new Promise((resolve) => {
      const subscribe = this._state.stateUpdates$.subscribe(async (state) => {
        if (state.findCompleted === true) {
          subscribe.unsubscribe();
          await this.ensureCompleteAsync();
          resolve(this);
        }
      });
    });
  }
  async replaceAllWithAsync(replaceText) {
    var _a, _b, _c;
    await this._state.changeState({ replaceRevealed: true, replaceString: replaceText });
    const res = (_c = (_b = await ((_a = this._model) == null ? void 0 : _a.replaceAll())) == null ? void 0 : _b.success) != null ? _c : 0;
    this._state.changeState({ replaceRevealed: false });
    return res;
  }
  async replaceWithAsync(replaceText) {
    var _a;
    await this._state.changeState({ replaceRevealed: true, replaceString: replaceText });
    await ((_a = this._model) == null ? void 0 : _a.replace());
    this._state.changeState({ replaceRevealed: false });
    return true;
  }
  async ensureCompleteAsync() {
    var _a;
    this._complete = await ((_a = this._model) == null ? void 0 : _a.start());
  }
  _findMatchToFRange(match) {
    const { unitId } = match;
    const { subUnitId, range } = match.range;
    const workbook = this._univerInstanceService.getUnit(unitId);
    const worksheet = workbook.getSheetBySheetId(subUnitId);
    return this._injector.createInstance(FRange, workbook, worksheet, range);
  }
};
FTextFinder = __decorateClass([
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IUniverInstanceService),
  __decorateParam(3, IFindReplaceService)
], FTextFinder);

// ../packages/sheets-find-replace/src/facade/f-univer.ts
var FUniverFindReplaceMixin = class extends FUniver {
  async createTextFinderAsync(text) {
    const state = { findString: text };
    const textFinder = this._injector.createInstance(FTextFinder, state);
    await textFinder.ensureCompleteAsync();
    return textFinder;
  }
};
FUniver.extend(FUniverFindReplaceMixin);

// ../packages/sheets-drawing-ui/src/facade/f-over-grid-image.ts
function convertSheetImageToFOverGridImage(sheetImage, sheetSkeletonManagerService) {
  const { from, to, flipY = false, flipX = false, angle = 0, skewX = 0, skewY = 0 } = sheetImage.sheetTransform;
  const { column: fromColumn, columnOffset: fromColumnOffset, row: fromRow, rowOffset: fromRowOffset } = from;
  const absolutePosition = convertPositionSheetOverGridToAbsolute(
    sheetImage.unitId,
    sheetImage.subUnitId,
    { from, to },
    sheetSkeletonManagerService
  );
  const { width, height } = absolutePosition;
  return {
    ...sheetImage,
    column: fromColumn,
    columnOffset: fromColumnOffset,
    row: fromRow,
    rowOffset: fromRowOffset,
    width,
    height,
    flipY,
    flipX,
    angle,
    skewX,
    skewY
  };
}
function convertFOverGridImageToSheetImage(fOverGridImage, selectionRenderService, sheetSkeletonManagerService) {
  const { column: fromColumn, columnOffset: fromColumnOffset, row: fromRow, rowOffset: fromRowOffset, flipY = false, flipX = false, angle = 0, skewX = 0, skewY = 0, width, height } = fOverGridImage;
  const absolutePosition = convertPositionCellToSheetOverGrid(
    fOverGridImage.unitId,
    fOverGridImage.subUnitId,
    { column: fromColumn, columnOffset: fromColumnOffset, row: fromRow, rowOffset: fromRowOffset },
    width,
    height,
    selectionRenderService,
    sheetSkeletonManagerService
  );
  const { sheetTransform, transform } = absolutePosition;
  return {
    ...fOverGridImage,
    sheetTransform: {
      ...sheetTransform,
      flipY,
      flipX,
      angle,
      skewX,
      skewY
    },
    transform: {
      ...transform,
      flipY,
      flipX,
      angle,
      skewX,
      skewY
    }
  };
}
var FOverGridImageBuilder = class {
  constructor(unitId, subUnitId, _injector) {
    this._injector = _injector;
    __publicField(this, "_image");
    this._image = {
      drawingId: generateRandomId(6),
      drawingType: 0 /* DRAWING_IMAGE */,
      imageSourceType: "BASE64" /* BASE64 */,
      source: "",
      unitId,
      subUnitId,
      column: 0,
      columnOffset: 0,
      row: 0,
      rowOffset: 0,
      width: 0,
      height: 0
    };
  }
  /**
   * Set the initial image configuration for the image builder.
   * @param {ISheetImage} image - The image configuration
   * @returns {FOverGridImageBuilder} The `FOverGridImageBuilder` for chaining
   * @example
   * ```ts
   * // create a new image builder and set initial image configuration.
   * // then build `ISheetImage` and insert it into the sheet, position is start from F6 cell.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = await fWorksheet.newOverGridImage()
   *   .setImage({
   *     drawingId: '123456',
   *     drawingType: univerAPI.Enum.DrawingType.DRAWING_IMAGE,
   *     imageSourceType: univerAPI.Enum.ImageSourceType.BASE64,
   *     source: 'https://avatars.githubusercontent.com/u/61444807?s=48&v=4',
   *     unitId: fWorkbook.getId(),
   *     subUnitId: fWorksheet.getSheetId(),
   *   })
   *   .setColumn(5)
   *   .setRow(5)
   *   .buildAsync();
   * fWorksheet.insertImages([image]);
   * ```
   */
  setImage(image) {
    const renderManagerService = this._injector.get(IRenderManagerService);
    const render = renderManagerService.getRenderById(image.unitId);
    if (!render) {
      throw new Error(`Render Unit with unitId ${image.unitId} not found`);
    }
    const skeletonManagerService = render.with(SheetSkeletonManagerService);
    if (image.sheetTransform == null) {
      image.sheetTransform = {
        from: {
          column: 0,
          columnOffset: 0,
          row: 0,
          rowOffset: 0
        },
        to: {
          column: 0,
          columnOffset: 0,
          row: 0,
          rowOffset: 0
        }
      };
    }
    this._image = convertSheetImageToFOverGridImage(image, skeletonManagerService);
    return this;
  }
  setSource(source, sourceType) {
    const sourceTypeVal = sourceType != null ? sourceType : "URL" /* URL */;
    this._image.source = source;
    this._image.imageSourceType = sourceTypeVal;
    return this;
  }
  /**
   * Get the source of the image
   * @returns {string} The source of the image
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const images = fWorksheet.getImages();
   * images.forEach((image) => {
   *   console.log(image, image.toBuilder().getSource());
   * });
   * ```
   */
  getSource() {
    return this._image.source;
  }
  /**
   * Get the source type of the image
   * @returns {ImageSourceType} The source type of the image
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const images = fWorksheet.getImages();
   * images.forEach((image) => {
   *   console.log(image, image.toBuilder().getSourceType());
   * });
   * ```
   */
  getSourceType() {
    return this._image.imageSourceType;
  }
  /**
   * Set the horizontal position of the image
   * @param {number} column - The column index of the image start position, start at 0
   * @returns {FOverGridImageBuilder} The `FOverGridImageBuilder` for chaining
   * @example
   * ```ts
   * // create a new image builder and set image source.
   * // then build `ISheetImage` and insert it into the sheet, position is start from F6 cell.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = await fWorksheet.newOverGridImage()
   *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', univerAPI.Enum.ImageSourceType.URL)
   *   .setColumn(5)
   *   .setRow(5)
   *   .buildAsync();
   * fWorksheet.insertImages([image]);
   * ```
   */
  setColumn(column) {
    this._image.column = column;
    return this;
  }
  /**
   * Set the vertical position of the image
   * @param {number} row - The row index of the image start position, start at 0
   * @returns {FOverGridImageBuilder} The `FOverGridImageBuilder` for chaining
   * @example
   * ```ts
   * // create a new image builder and set image source.
   * // then build `ISheetImage` and insert it into the sheet, position is start from F6 cell.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = await fWorksheet.newOverGridImage()
   *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', univerAPI.Enum.ImageSourceType.URL)
   *   .setColumn(5)
   *   .setRow(5)
   *   .buildAsync();
   * fWorksheet.insertImages([image]);
   * ```
   */
  setRow(row) {
    this._image.row = row;
    return this;
  }
  /**
   * Set the horizontal offset of the image
   * @param {number} offset - The column offset of the image start position, pixel unit
   * @returns {FOverGridImageBuilder} The `FOverGridImageBuilder` for chaining
   * @example
   * ```ts
   * // create a new image builder and set image source.
   * // then build `ISheetImage` and insert it into the sheet, position is start from F6 cell and horizontal offset is 10px.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = await fWorksheet.newOverGridImage()
   *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', univerAPI.Enum.ImageSourceType.URL)
   *   .setColumn(5)
   *   .setRow(5)
   *   .setColumnOffset(10)
   *   .buildAsync();
   * fWorksheet.insertImages([image]);
   * ```
   */
  setColumnOffset(offset) {
    this._image.columnOffset = offset;
    return this;
  }
  /**
   * Set the vertical offset of the image
   * @param {number} offset - The row offset of the image start position, pixel unit
   * @returns {FOverGridImageBuilder} The `FOverGridImageBuilder` for chaining
   * @example
   * ```ts
   * // create a new image builder and set image source.
   * // then build `ISheetImage` and insert it into the sheet, position is start from F6 cell and vertical offset is 10px.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = await fWorksheet.newOverGridImage()
   *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', univerAPI.Enum.ImageSourceType.URL)
   *   .setColumn(5)
   *   .setRow(5)
   *   .setRowOffset(10)
   *   .buildAsync();
   * fWorksheet.insertImages([image]);
   * ```
   */
  setRowOffset(offset) {
    this._image.rowOffset = offset;
    return this;
  }
  /**
   * Set the width of the image
   * @param {number} width - The width of the image, pixel unit
   * @returns {FOverGridImageBuilder} The `FOverGridImageBuilder` for chaining
   * @example
   * ```ts
   * // create a new image builder and set image source.
   * // then build `ISheetImage` and insert it into the sheet, position is start from F6 cell, width is 120px and height is 50px.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = await fWorksheet.newOverGridImage()
   *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', univerAPI.Enum.ImageSourceType.URL)
   *   .setColumn(5)
   *   .setRow(5)
   *   .setWidth(120)
   *   .setHeight(50)
   *   .buildAsync();
   * fWorksheet.insertImages([image]);
   * ```
   */
  setWidth(width) {
    this._image.width = width;
    return this;
  }
  /**
   * Set the height of the image
   * @param {number} height - The height of the image, pixel unit
   * @returns {FOverGridImageBuilder} The `FOverGridImageBuilder` for chaining
   * @example
   * ```ts
   * // create a new image builder and set image source.
   * // then build `ISheetImage` and insert it into the sheet, position is start from F6 cell, width is 120px and height is 50px.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = await fWorksheet.newOverGridImage()
   *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', univerAPI.Enum.ImageSourceType.URL)
   *   .setColumn(5)
   *   .setRow(5)
   *   .setWidth(120)
   *   .setHeight(50)
   *   .buildAsync();
   * fWorksheet.insertImages([image]);
   * ```
   */
  setHeight(height) {
    this._image.height = height;
    return this;
  }
  /**
   * Set the anchor type of the image, whether the position and size change with the cell
   * @param {SheetDrawingAnchorType} anchorType - The anchor type of the image
   * @returns {FOverGridImageBuilder} The `FOverGridImageBuilder` for chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // image1 position is start from A6 cell, anchor type is Position.
   * // Only the position of the drawing follows the cell changes. When rows or columns are inserted or deleted, the position of the drawing changes, but the size remains the same.
   * const image1 = await fWorksheet.newOverGridImage()
   *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', univerAPI.Enum.ImageSourceType.URL)
   *   .setColumn(0)
   *   .setRow(5)
   *   .setAnchorType(univerAPI.Enum.SheetDrawingAnchorType.Position)
   *   .buildAsync();
   *
   * // image2 position is start from C6 cell, anchor type is Both.
   * // The size and position of the drawing follow the cell changes. When rows or columns are inserted or deleted, the size and position of the drawing change accordingly.
   * const image2 = await fWorksheet.newOverGridImage()
   *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', univerAPI.Enum.ImageSourceType.URL)
   *   .setColumn(2)
   *   .setRow(5)
   *   .setAnchorType(univerAPI.Enum.SheetDrawingAnchorType.Both)
   *   .buildAsync();
   *
   * // image3 position is start from E6 cell, anchor type is None.
   * // The size and position of the drawing do not follow the cell changes. When rows or columns are inserted or deleted, the position and size of the drawing remain unchanged.
   * const image3 = await fWorksheet.newOverGridImage()
   *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', univerAPI.Enum.ImageSourceType.URL)
   *   .setColumn(4)
   *   .setRow(5)
   *   .setAnchorType(univerAPI.Enum.SheetDrawingAnchorType.None)
   *   .buildAsync();
   *
   * // insert images into the sheet
   * fWorksheet.insertImages([image1, image2, image3]);
   *
   * // after 2 seconds, set the row height of the 5th row to 100px and insert a row before the 5th row.
   * // then observe the position and size changes of the images.
   * setTimeout(() => {
   *   fWorksheet.setRowHeight(5, 100).insertRowBefore(5);
   * }, 2000);
   * ```
   */
  setAnchorType(anchorType) {
    this._image.anchorType = anchorType;
    return this;
  }
  /**
   * Set the cropping region of the image by defining the top edges, thereby displaying the specific part of the image you want.
   * @param {number} top - The number of pixels to crop from the top of the image
   * @returns {FOverGridImageBuilder} The `FOverGridImageBuilder` for chaining
   * @example
   * ```ts
   * // create a new image builder and set image source.
   * // then build `ISheetImage` and insert it into the sheet, position is start from F6 cell, top crop is 10px.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = await fWorksheet.newOverGridImage()
   *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', univerAPI.Enum.ImageSourceType.URL)
   *   .setColumn(5)
   *   .setRow(5)
   *   .setCropTop(10)
   *   .buildAsync();
   * fWorksheet.insertImages([image]);
   * ```
   */
  setCropTop(top) {
    this._initializeSrcRect();
    this._image.srcRect.top = top;
    return this;
  }
  /**
   * Set the cropping region of the image by defining the left edges, thereby displaying the specific part of the image you want.
   * @param {number} left - The number of pixels to crop from the left side of the image
   * @returns {FOverGridImageBuilder} The `FOverGridImageBuilder` for chaining
   * @example
   * ```ts
   * // create a new image builder and set image source.
   * // then build `ISheetImage` and insert it into the sheet, position is start from F6 cell, left crop is 10px.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = await fWorksheet.newOverGridImage()
   *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', univerAPI.Enum.ImageSourceType.URL)
   *   .setColumn(5)
   *   .setRow(5)
   *   .setCropLeft(10)
   *   .buildAsync();
   * fWorksheet.insertImages([image]);
   * ```
   */
  setCropLeft(left) {
    this._initializeSrcRect();
    this._image.srcRect.left = left;
    return this;
  }
  /**
   * Set the cropping region of the image by defining the bottom edges, thereby displaying the specific part of the image you want.
   * @param {number} bottom - The number of pixels to crop from the bottom of the image
   * @returns {FOverGridImageBuilder} The `FOverGridImageBuilder` for chaining
   * @example
   * ```ts
   * // create a new image builder and set image source.
   * // then build `ISheetImage` and insert it into the sheet, position is start from F6 cell, bottom crop is 10px.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = await fWorksheet.newOverGridImage()
   *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', univerAPI.Enum.ImageSourceType.URL)
   *   .setColumn(5)
   *   .setRow(5)
   *   .setCropBottom(10)
   *   .buildAsync();
   * fWorksheet.insertImages([image]);
   * ```
   */
  setCropBottom(bottom) {
    this._initializeSrcRect();
    this._image.srcRect.bottom = bottom;
    return this;
  }
  /**
   * Set the cropping region of the image by defining the right edges, thereby displaying the specific part of the image you want.
   * @param {number} right - The number of pixels to crop from the right side of the image
   * @returns {FOverGridImageBuilder} The `FOverGridImageBuilder` for chaining
   * @example
   * ```ts
   * // create a new image builder and set image source.
   * // then build `ISheetImage` and insert it into the sheet, position is start from F6 cell, right crop is 10px.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = await fWorksheet.newOverGridImage()
   *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', univerAPI.Enum.ImageSourceType.URL)
   *   .setColumn(5)
   *   .setRow(5)
   *   .setCropRight(10)
   *   .buildAsync();
   * fWorksheet.insertImages([image]);
   * ```
   */
  setCropRight(right) {
    this._initializeSrcRect();
    this._image.srcRect.right = right;
    return this;
  }
  _initializeSrcRect() {
    if (this._image.srcRect == null) {
      this._image.srcRect = {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      };
    }
  }
  /**
   * Set the rotation angle of the image
   * @param {number} angle - Degree of rotation of the image, for example, 90, 180, 270, etc.
   * @returns {FOverGridImageBuilder} The `FOverGridImageBuilder` for chaining
   * @example
   * ```ts
   * // create a new image builder and set image source.
   * // then build `ISheetImage` and insert it into the sheet, position is start from F6 cell, rotate 90 degrees.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = await fWorksheet.newOverGridImage()
   *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', univerAPI.Enum.ImageSourceType.URL)
   *   .setColumn(5)
   *   .setRow(5)
   *   .setRotate(90)
   *   .buildAsync();
   * fWorksheet.insertImages([image]);
   * ```
   */
  setRotate(angle) {
    this._image.angle = angle;
    return this;
  }
  setUnitId(unitId) {
    this._image.unitId = unitId;
    return this;
  }
  setSubUnitId(subUnitId) {
    this._image.subUnitId = subUnitId;
    return this;
  }
  async buildAsync() {
    const renderManagerService = this._injector.get(IRenderManagerService);
    const render = renderManagerService.getRenderById(this._image.unitId);
    if (!render) {
      throw new Error(`Render Unit with unitId ${this._image.unitId} not found`);
    }
    const selectionRenderService = render.with(ISheetSelectionRenderService);
    const skeletonManagerService = render.with(SheetSkeletonManagerService);
    if (this._image.width === 0 || this._image.height === 0) {
      const size = await getImageSize(this._image.source);
      const width = size.width;
      const height = size.height;
      if (this._image.width === 0) {
        this._image.width = width;
      }
      if (this._image.height === 0) {
        this._image.height = height;
      }
    }
    return convertFOverGridImageToSheetImage(this._image, selectionRenderService, skeletonManagerService);
  }
};
FOverGridImageBuilder = __decorateClass([
  __decorateParam(2, Inject(Injector))
], FOverGridImageBuilder);
var FOverGridImage = class extends FBase {
  constructor(_image, _commandService, _injector) {
    super();
    this._image = _image;
    this._commandService = _commandService;
    this._injector = _injector;
  }
  /**
   * Get the id of the image
   * @returns {string} The id of the image
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const images = fWorksheet.getImages();
   * images.forEach((image) => {
   *   console.log(image, image.getId());
   * });
   * ```
   */
  getId() {
    return this._image.drawingId;
  }
  /**
   * Get the drawing type of the image
   * @returns {DrawingTypeEnum} The drawing type of the image
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const images = fWorksheet.getImages();
   * images.forEach((image) => {
   *   console.log(image, image.getType());
   * });
   * ```
   */
  getType() {
    return this._image.drawingType;
  }
  /**
   * Remove the image from the sheet
   * @returns {boolean} true if the image is removed successfully, otherwise false
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = fWorksheet.getImages()[0];
   * const result = image?.remove();
   * console.log(result);
   * ```
   */
  remove() {
    return this._commandService.syncExecuteCommand(RemoveSheetDrawingCommand.id, { unitId: this._image.unitId, drawings: [this._image] });
  }
  /**
   * Convert the image to a FOverGridImageBuilder
   * @returns {FOverGridImageBuilder} The builder FOverGridImageBuilder
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const images = fWorksheet.getImages();
   * images.forEach((image) => {
   *   console.log(image, image.toBuilder().getSource());
   * });
   * ```
   */
  toBuilder() {
    const builder = this._injector.createInstance(FOverGridImageBuilder);
    builder.setImage(this._image);
    return builder;
  }
  setSource(source, sourceType) {
    const sourceTypeVal = sourceType != null ? sourceType : "URL" /* URL */;
    this._image.source = source;
    this._image.imageSourceType = sourceTypeVal;
    return this._commandService.syncExecuteCommand(SetSheetDrawingCommand.id, { unitId: this._image.unitId, drawings: [this._image] });
  }
  async setPositionAsync(row, column, rowOffset, columnOffset) {
    const builder = this.toBuilder();
    builder.setColumn(column);
    builder.setRow(row);
    if (rowOffset != null) {
      builder.setRowOffset(rowOffset);
    }
    if (columnOffset != null) {
      builder.setColumnOffset(columnOffset);
    }
    const param = await builder.buildAsync();
    return this._commandService.syncExecuteCommand(SetSheetDrawingCommand.id, { unitId: this._image.unitId, drawings: [param] });
  }
  /**
   * Set the size of the image
   * @param {number} width - The width of the image, pixel unit
   * @param {number} height - The height of the image, pixel unit
   * @returns {boolean} true if the size is set successfully, otherwise false
   * @example
   * ```ts
   * // set the image width 120px and height 50px
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = fWorksheet.getImages()[0];
   * const result = image?.setSizeAsync(120, 50);
   * console.log(result);
   * ```
   */
  async setSizeAsync(width, height) {
    const builder = this.toBuilder();
    builder.setWidth(width);
    builder.setHeight(height);
    const param = await builder.buildAsync();
    return this._commandService.syncExecuteCommand(SetSheetDrawingCommand.id, { unitId: this._image.unitId, drawings: [param] });
  }
  /**
   * Set the cropping region of the image by defining the top, bottom, left, and right edges, thereby displaying the specific part of the image you want.
   * @param {number} top - The number of pixels to crop from the top of the image
   * @param {number} left - The number of pixels to crop from the left side of the image
   * @param {number} bottom - The number of pixels to crop from the bottom of the image
   * @param {number} right - The number of pixels to crop from the right side of the image
   * @returns {boolean} true if the crop is set successfully, otherwise false
   * @example
   * ```ts
   * // set the crop of the image, top 10px, left 10px, bottom 10px, right 10px.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = fWorksheet.getImages()[0];
   * const result = image?.setCrop(10, 10, 10, 10);
   * console.log(result);
   * ```
   */
  setCrop(top, left, bottom, right) {
    if (this._image.srcRect == null) {
      this._image.srcRect = {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      };
    }
    if (top != null) {
      this._image.srcRect.top = top;
    }
    if (left != null) {
      this._image.srcRect.left = left;
    }
    if (bottom != null) {
      this._image.srcRect.bottom = bottom;
    }
    if (right != null) {
      this._image.srcRect.right = right;
    }
    return this._commandService.syncExecuteCommand(SetSheetDrawingCommand.id, { unitId: this._image.unitId, drawings: [this._image] });
  }
  /**
   * Set the rotation angle of the image
   * @param {number} angle - Degree of rotation of the image, for example, 90, 180, 270, etc.
   * @returns {boolean} true if the rotation is set successfully, otherwise false
   * @example
   * ```ts
   * // set 90 degrees rotation of the image
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = fWorksheet.getImages()[0];
   * const result = image?.setRotate(90);
   * console.log(result);
   * ```
   */
  setRotate(angle) {
    this._image.sheetTransform.angle = angle;
    this._image.transform && (this._image.transform.angle = angle);
    return this._commandService.syncExecuteCommand(SetSheetDrawingCommand.id, { unitId: this._image.unitId, drawings: [this._image] });
  }
  /**
   * Move the image layer forward by one level
   * @returns {boolean} true if the image is moved forward successfully, otherwise false
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = fWorksheet.getImages()[0];
   * const result = image?.setForward();
   * console.log(result);
   * ```
   */
  setForward() {
    return this._commandService.syncExecuteCommand(SetDrawingArrangeCommand.id, {
      unitId: this._image.unitId,
      subUnitId: this._image.subUnitId,
      drawingIds: [this._image.drawingId],
      arrangeType: 0 /* forward */
    });
  }
  /**
   * Move the image layer backward by one level
   * @returns {boolean} true if the image is moved backward successfully, otherwise false
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = fWorksheet.getImages()[0];
   * const result = image?.setBackward();
   * console.log(result);
   * ```
   */
  setBackward() {
    return this._commandService.syncExecuteCommand(SetDrawingArrangeCommand.id, {
      unitId: this._image.unitId,
      subUnitId: this._image.subUnitId,
      drawingIds: [this._image.drawingId],
      arrangeType: 1 /* backward */
    });
  }
  /**
   * Move the image layer to the bottom layer
   * @returns {boolean} true if the image is moved to the bottom layer successfully, otherwise false
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = fWorksheet.getImages()[0];
   * const result = image?.setBack();
   * console.log(result);
   * ```
   */
  setBack() {
    return this._commandService.syncExecuteCommand(SetDrawingArrangeCommand.id, {
      unitId: this._image.unitId,
      subUnitId: this._image.subUnitId,
      drawingIds: [this._image.drawingId],
      arrangeType: 3 /* back */
    });
  }
  /**
   * Move the image layer to the top layer
   * @returns {boolean} true if the image is moved to the top layer successfully, otherwise false
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = fWorksheet.getImages()[0];
   * const result = image?.setFront();
   * console.log(result);
   * ```
   */
  setFront() {
    return this._commandService.syncExecuteCommand(SetDrawingArrangeCommand.id, {
      unitId: this._image.unitId,
      subUnitId: this._image.subUnitId,
      drawingIds: [this._image.drawingId],
      arrangeType: 2 /* front */
    });
  }
};
FOverGridImage = __decorateClass([
  __decorateParam(1, ICommandService),
  __decorateParam(2, Inject(Injector))
], FOverGridImage);

// ../packages/sheets-drawing-ui/src/facade/f-worksheet.ts
var FWorksheetLegacy = class extends FWorksheet {
  addFloatDomToPosition(layer, id) {
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    const { key, disposableCollection } = transformComponentKey(layer, this._injector.get(ComponentManager));
    const floatDomService = this._injector.get(SheetCanvasFloatDomManagerService);
    const res = floatDomService.addFloatDomToPosition({ ...layer, componentKey: key, unitId, subUnitId }, id);
    if (res) {
      disposableCollection.add(res.dispose);
      return {
        id: res.id,
        dispose: () => {
          disposableCollection.dispose();
          res.dispose();
        }
      };
    }
    disposableCollection.dispose();
    return null;
  }
  addFloatDomToRange(fRange, layer, domLayout, id) {
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    const { key, disposableCollection } = transformComponentKey(layer, this._injector.get(ComponentManager));
    const floatDomService = this._injector.get(SheetCanvasFloatDomManagerService);
    const res = floatDomService.addFloatDomToRange(fRange.getRange(), { ...layer, componentKey: key, unitId, subUnitId }, domLayout, id);
    if (res) {
      disposableCollection.add(res.dispose);
      return {
        id: res.id,
        dispose: () => {
          disposableCollection.dispose();
          res.dispose();
        }
      };
    }
    disposableCollection.dispose();
    return null;
  }
  addFloatDomToColumnHeader(column, layer, domLayout, id) {
    const unitId = this._workbook.getUnitId();
    const subUnitId = this._worksheet.getSheetId();
    const { key, disposableCollection } = transformComponentKey(layer, this._injector.get(ComponentManager));
    const floatDomService = this._injector.get(SheetCanvasFloatDomManagerService);
    const domRangeDispose = floatDomService.addFloatDomToColumnHeader(column, { ...layer, componentKey: key, unitId, subUnitId }, domLayout, id);
    if (domRangeDispose) {
      disposableCollection.add(domRangeDispose.dispose);
      return {
        id: domRangeDispose.id,
        dispose: () => {
          disposableCollection.dispose();
          domRangeDispose.dispose();
        }
      };
    }
    disposableCollection.dispose();
    return null;
  }
  async insertImage(url, column, row, offsetX, offsetY) {
    const imageBuilder = this.newOverGridImage();
    if (typeof url === "string") {
      imageBuilder.setSource(url);
    } else {
      const blobSource = url.getBlob();
      const base64 = await blobSource.getDataAsString();
      imageBuilder.setSource(base64, "BASE64" /* BASE64 */);
    }
    if (column !== void 0) {
      imageBuilder.setColumn(column);
    } else {
      imageBuilder.setColumn(0);
    }
    if (row !== void 0) {
      imageBuilder.setRow(row);
    } else {
      imageBuilder.setRow(0);
    }
    if (offsetX !== void 0) {
      imageBuilder.setColumnOffset(offsetX);
    } else {
      imageBuilder.setColumnOffset(0);
    }
    if (offsetY !== void 0) {
      imageBuilder.setRowOffset(offsetY);
    } else {
      imageBuilder.setRowOffset(0);
    }
    const param = await imageBuilder.buildAsync();
    return this._commandService.syncExecuteCommand(InsertSheetDrawingCommand.id, { unitId: this._fWorkbook.getId(), drawings: [param] });
  }
  insertImages(sheetImages) {
    const param = sheetImages.map((image) => {
      image.unitId = this._fWorkbook.getId();
      image.subUnitId = this.getSheetId();
      return image;
    });
    this._commandService.syncExecuteCommand(InsertSheetDrawingCommand.id, { unitId: this._fWorkbook.getId(), drawings: param });
    return this;
  }
  deleteImages(sheetImages) {
    const drawings = sheetImages.map((image) => {
      return {
        unitId: this._fWorkbook.getId(),
        drawingId: image.getId(),
        subUnitId: this.getSheetId(),
        drawingType: image.getType()
      };
    });
    this._commandService.syncExecuteCommand(RemoveSheetDrawingCommand.id, { unitId: this._fWorkbook.getId(), drawings });
    return this;
  }
  getImages() {
    const sheetDrawingService = this._injector.get(ISheetDrawingService);
    const drawingData = sheetDrawingService.getDrawingData(this._fWorkbook.getId(), this.getSheetId());
    const images = [];
    for (const drawingId in drawingData) {
      const drawing = drawingData[drawingId];
      if (drawing.drawingType !== 0 /* DRAWING_IMAGE */) {
        continue;
      }
      images.push(this._injector.createInstance(FOverGridImage, drawing));
    }
    return images;
  }
  getImageById(id) {
    const sheetDrawingService = this._injector.get(ISheetDrawingService);
    const drawing = sheetDrawingService.getDrawingByParam({ unitId: this._fWorkbook.getId(), subUnitId: this.getSheetId(), drawingId: id });
    if (drawing && drawing.drawingType === 0 /* DRAWING_IMAGE */) {
      return this._injector.createInstance(FOverGridImage, drawing);
    }
    return null;
  }
  getActiveImages() {
    const sheetDrawingService = this._injector.get(ISheetDrawingService);
    const drawingData = sheetDrawingService.getFocusDrawings();
    const images = [];
    for (const drawingId in drawingData) {
      const drawing = drawingData[drawingId];
      images.push(this._injector.createInstance(FOverGridImage, drawing));
    }
    return images;
  }
  updateImages(sheetImages) {
    this._commandService.syncExecuteCommand(SetSheetDrawingCommand.id, { unitId: this._fWorkbook.getId(), drawings: sheetImages });
    return this;
  }
  onImageInserted(callback) {
    const sheetDrawingService = this._injector.get(ISheetDrawingService);
    return toDisposable(sheetDrawingService.add$.subscribe((drawingSearches) => {
      const drawings = drawingSearches.map(
        (drawingSearch) => this._injector.createInstance(FOverGridImage, sheetDrawingService.getDrawingByParam(drawingSearch))
      );
      callback(drawings);
    }));
  }
  onImageDeleted(callback) {
    const sheetDrawingService = this._injector.get(ISheetDrawingService);
    return toDisposable(sheetDrawingService.remove$.subscribe((drawingSearches) => {
      const drawings = drawingSearches.map(
        (drawingSearch) => this._injector.createInstance(FOverGridImage, sheetDrawingService.getDrawingByParam(drawingSearch))
      );
      callback(drawings);
    }));
  }
  onImageChanged(callback) {
    const sheetDrawingService = this._injector.get(ISheetDrawingService);
    return toDisposable(sheetDrawingService.update$.subscribe((drawingSearches) => {
      const drawings = drawingSearches.map(
        (drawingSearch) => this._injector.createInstance(FOverGridImage, sheetDrawingService.getDrawingByParam(drawingSearch))
      );
      callback(drawings);
    }));
  }
  newOverGridImage() {
    const unitId = this._fWorkbook.getId();
    const subUnitId = this.getSheetId();
    return this._injector.createInstance(FOverGridImageBuilder, unitId, subUnitId);
  }
};
FWorksheet.extend(FWorksheetLegacy);

// ../packages/sheets-drawing-ui/src/facade/f-enum.ts
var FDrawingEnumMixin = class extends FEnum {
  get DrawingType() {
    return DrawingTypeEnum;
  }
  get ImageSourceType() {
    return ImageSourceType;
  }
  get SheetDrawingAnchorType() {
    return SheetDrawingAnchorType;
  }
};
FEnum.extend(FDrawingEnumMixin);

// ../packages/sheets-drawing-ui/src/facade/f-event.ts
var FDrawingEventNameMixin = class extends FEventName {
  get BeforeOverGridImageChange() {
    return "BeforeOverGridImageChange";
  }
  get OverGridImageChanged() {
    return "OverGridImageChanged";
  }
  get BeforeOverGridImageInsert() {
    return "BeforeOverGridImageInsert";
  }
  get OverGridImageInserted() {
    return "OverGridImageInserted";
  }
  get BeforeOverGridImageRemove() {
    return "BeforeOverGridImageRemove";
  }
  get OverGridImageRemoved() {
    return "OverGridImageRemoved";
  }
  get BeforeOverGridImageSelect() {
    return "BeforeOverGridImageSelect";
  }
  get OverGridImageSelected() {
    return "OverGridImageSelected";
  }
};
FEventName.extend(FDrawingEventNameMixin);

// ../packages/sheets-drawing-ui/src/facade/f-univer.ts
var FUniverDrawingMixin = class extends FUniver {
  /**
   * @ignore
   */
  // eslint-disable-next-line max-lines-per-function
  _initialize(injector) {
    const commandService = injector.get(ICommandService);
    this.registerEventHandler(
      this.Event.BeforeOverGridImageInsert,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        if (commandInfo.id !== InsertSheetDrawingCommand.id) return;
        const params = commandInfo.params;
        const workbook = this.getActiveWorkbook();
        if (workbook == null || params == null) {
          return;
        }
        const { drawings } = params;
        const eventParams = {
          workbook,
          insertImageParams: drawings
        };
        this.fireEvent(this.Event.BeforeOverGridImageInsert, eventParams);
        if (eventParams.cancel) {
          throw new Error("Canceled by BeforeOverGridImageInsert event");
        }
      })
    );
    this.registerEventHandler(
      this.Event.BeforeOverGridImageRemove,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        if (commandInfo.id !== RemoveSheetDrawingCommand.id) return;
        const params = commandInfo.params;
        const workbook = this.getActiveWorkbook();
        if (workbook == null || params == null) {
          return;
        }
        const drawingManagerService = injector.get(IDrawingManagerService);
        const { drawings } = params;
        const willRemoveDrawings = drawings.map((drawing) => {
          return drawingManagerService.getDrawingByParam(drawing);
        });
        const eventParams = {
          workbook,
          images: this._createFOverGridImage(willRemoveDrawings)
        };
        this.fireEvent(this.Event.BeforeOverGridImageRemove, eventParams);
        if (eventParams.cancel) {
          throw new Error("Canceled by BeforeOverGridImageRemove event");
        }
      })
    );
    this.registerEventHandler(
      this.Event.BeforeOverGridImageChange,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        if (commandInfo.id !== SetSheetDrawingCommand.id) return;
        const params = commandInfo.params;
        const workbook = this.getActiveWorkbook();
        if (workbook == null || params == null) {
          return;
        }
        const { drawings } = params;
        const drawingManagerService = injector.get(IDrawingManagerService);
        const images = [];
        drawings.forEach((drawing) => {
          const image = drawingManagerService.getDrawingByParam(drawing);
          if (image == null) {
            return;
          }
          images.push({
            changeParam: drawing,
            image: this._injector.createInstance(FOverGridImage, image)
          });
        });
        const eventParams = {
          workbook,
          images
        };
        this.fireEvent(this.Event.BeforeOverGridImageChange, eventParams);
        if (eventParams.cancel) {
          drawingManagerService.updateNotification(drawings);
          throw new Error("Canceled by BeforeOverGridImageChange event");
        }
      })
    );
    this.registerEventHandler(
      this.Event.BeforeOverGridImageSelect,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        if (commandInfo.id !== SetDrawingSelectedOperation.id) return;
        const drawings = commandInfo.params;
        const workbook = this.getActiveWorkbook();
        if (workbook == null) {
          return;
        }
        const drawingManagerService = injector.get(IDrawingManagerService);
        const oldSelectedDrawings = drawingManagerService.getFocusDrawings();
        const selectedDrawings = drawings.map((drawing) => {
          return drawingManagerService.getDrawingByParam(drawing);
        });
        const eventParams = {
          workbook,
          selectedImages: this._createFOverGridImage(selectedDrawings),
          oldSelectedImages: this._createFOverGridImage(oldSelectedDrawings)
        };
        this.fireEvent(this.Event.BeforeOverGridImageSelect, eventParams);
        if (eventParams.cancel) {
          throw new Error("Canceled by BeforeOverGridImageSelect event");
        }
      })
    );
    this.registerEventHandler(
      this.Event.OverGridImageInserted,
      () => commandService.onCommandExecuted((commandInfo) => {
        if (commandInfo.id !== InsertSheetDrawingCommand.id) return;
        const params = commandInfo.params;
        const workbook = this.getActiveWorkbook();
        if (workbook == null || params == null) {
          return;
        }
        const { drawings } = params;
        this.fireEvent(this.Event.OverGridImageInserted, {
          workbook,
          images: this._createFOverGridImage(drawings)
        });
      })
    );
    this.registerEventHandler(
      this.Event.OverGridImageRemoved,
      () => commandService.onCommandExecuted((commandInfo) => {
        if (commandInfo.id !== RemoveSheetDrawingCommand.id) return;
        const params = commandInfo.params;
        const workbook = this.getActiveWorkbook();
        if (workbook == null || params == null) {
          return;
        }
        const { drawings } = params;
        this.fireEvent(this.Event.OverGridImageRemoved, {
          workbook,
          removeImageParams: drawings
        });
      })
    );
    this.registerEventHandler(
      this.Event.OverGridImageChanged,
      () => commandService.onCommandExecuted((commandInfo) => {
        if (commandInfo.id !== SetSheetDrawingCommand.id) return;
        const params = commandInfo.params;
        const workbook = this.getActiveWorkbook();
        if (workbook == null || params == null) {
          return;
        }
        const { drawings } = params;
        const drawingManagerService = injector.get(IDrawingManagerService);
        const images = drawings.map((drawing) => {
          return this._injector.createInstance(FOverGridImage, drawingManagerService.getDrawingByParam(drawing));
        });
        this.fireEvent(this.Event.OverGridImageChanged, {
          workbook,
          images
        });
      })
    );
    this.registerEventHandler(
      this.Event.OverGridImageSelected,
      () => commandService.onCommandExecuted((commandInfo) => {
        if (commandInfo.id !== SetDrawingSelectedOperation.id) return;
        const drawings = commandInfo.params;
        const workbook = this.getActiveWorkbook();
        if (workbook == null) {
          return;
        }
        const drawingManagerService = injector.get(IDrawingManagerService);
        const selectedDrawings = drawings.map((drawing) => {
          return drawingManagerService.getDrawingByParam(drawing);
        });
        this.fireEvent(this.Event.OverGridImageSelected, {
          workbook,
          selectedImages: this._createFOverGridImage(selectedDrawings)
        });
      })
    );
  }
  _createFOverGridImage(drawings) {
    return drawings.map((drawing) => {
      return this._injector.createInstance(FOverGridImage, drawing);
    });
  }
};
FUniver.extend(FUniverDrawingMixin);

// ../packages/sheets-drawing-ui/src/facade/f-range.ts
var FRangeSheetDrawingUI = class extends FRange {
  async insertCellImageAsync(file) {
    var _a;
    const renderManagerService = this._injector.get(IRenderManagerService);
    const controller = (_a = getCurrentTypeOfRenderer(O.UNIVER_SHEET, this._injector.get(IUniverInstanceService), renderManagerService)) == null ? void 0 : _a.with(SheetDrawingUpdateController);
    if (!controller) {
      return false;
    }
    const location2 = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      row: this.getRow(),
      col: this.getColumn()
    };
    if (typeof file === "string") {
      return controller.insertCellImageByUrl(file, location2);
    } else {
      return controller.insertCellImageByFile(file, location2);
    }
  }
};
FRange.extend(FRangeSheetDrawingUI);

// ../packages/sheets-zen-editor/src/facade/f-univer.ts
var FUniverSheetsZenEditorMixin = class extends FUniver {
  // eslint-disable-next-line max-lines-per-function
  _initSheetZenEditorEvent(injector) {
    const commandService = injector.get(ICommandService);
    this.registerEventHandler(
      this.Event.BeforeSheetEditStart,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        if (commandInfo.id === OpenZenEditorCommand.id) {
          const target = this.getCommandSheetTarget(commandInfo);
          if (!target) {
            return;
          }
          const { workbook, worksheet } = target;
          const editorBridgeService = injector.get(IEditorBridgeService);
          const params = commandInfo.params;
          const { keycode, eventType } = params;
          const loc = editorBridgeService.getEditLocation();
          const eventParams = {
            row: loc.row,
            column: loc.column,
            eventType,
            keycode,
            workbook,
            worksheet,
            isZenEditor: true
          };
          this.fireEvent(this.Event.BeforeSheetEditStart, eventParams);
          if (eventParams.cancel) {
            throw new CanceledError();
          }
        }
      })
    );
    this.registerEventHandler(
      this.Event.BeforeSheetEditEnd,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        if (commandInfo.id === CancelZenEditCommand.id || commandInfo.id === ConfirmZenEditCommand.id) {
          const target = this.getCommandSheetTarget(commandInfo);
          if (!target) {
            return;
          }
          const { workbook, worksheet } = target;
          const editorBridgeService = injector.get(IEditorBridgeService);
          const univerInstanceService = injector.get(IUniverInstanceService);
          const params = commandInfo.params;
          const { keycode, eventType } = params;
          const loc = editorBridgeService.getEditLocation();
          const eventParams = {
            row: loc.row,
            column: loc.column,
            eventType,
            keycode,
            workbook,
            worksheet,
            isZenEditor: true,
            value: RichTextValue.create(univerInstanceService.getUnit(DOCS_ZEN_EDITOR_UNIT_ID_KEY).getSnapshot()),
            isConfirm: commandInfo.id === ConfirmZenEditCommand.id
          };
          this.fireEvent(this.Event.BeforeSheetEditEnd, eventParams);
          if (eventParams.cancel) {
            throw new CanceledError();
          }
        }
      })
    );
    this.registerEventHandler(
      this.Event.SheetEditStarted,
      () => commandService.onCommandExecuted((commandInfo) => {
        if (commandInfo.id === OpenZenEditorCommand.id) {
          const target = this.getCommandSheetTarget(commandInfo);
          if (!target) {
            return;
          }
          const { workbook, worksheet } = target;
          const editorBridgeService = injector.get(IEditorBridgeService);
          const params = commandInfo.params;
          const { keycode, eventType } = params;
          const loc = editorBridgeService.getEditLocation();
          const eventParams = {
            row: loc.row,
            column: loc.column,
            eventType,
            keycode,
            workbook,
            worksheet,
            isZenEditor: true
          };
          this.fireEvent(this.Event.SheetEditStarted, eventParams);
        }
      })
    );
    this.registerEventHandler(
      this.Event.SheetEditEnded,
      () => commandService.onCommandExecuted((commandInfo) => {
        if (commandInfo.id === CancelZenEditCommand.id || commandInfo.id === ConfirmZenEditCommand.id) {
          const target = this.getCommandSheetTarget(commandInfo);
          if (!target) {
            return;
          }
          const { workbook, worksheet } = target;
          const editorBridgeService = injector.get(IEditorBridgeService);
          const params = commandInfo.params;
          const { keycode, eventType } = params;
          const loc = editorBridgeService.getEditLocation();
          const eventParams = {
            row: loc.row,
            column: loc.column,
            eventType,
            keycode,
            workbook,
            worksheet,
            isZenEditor: true,
            isConfirm: commandInfo.id === ConfirmZenEditCommand.id
          };
          this.fireEvent(this.Event.SheetEditEnded, eventParams);
        }
      })
    );
    this.registerEventHandler(
      this.Event.SheetEditChanging,
      () => commandService.onCommandExecuted((commandInfo) => {
        if (commandInfo.id === RichTextEditingMutation.id) {
          const target = this.getActiveSheet();
          if (!target) {
            return;
          }
          const { workbook, worksheet } = target;
          const editorBridgeService = injector.get(IEditorBridgeService);
          const univerInstanceService = injector.get(IUniverInstanceService);
          const params = commandInfo.params;
          if (!editorBridgeService.isVisible().visible) return;
          const { unitId } = params;
          if (unitId === DOCS_ZEN_EDITOR_UNIT_ID_KEY) {
            const { row, column } = editorBridgeService.getEditLocation();
            const eventParams = {
              workbook,
              worksheet,
              row,
              column,
              value: RichTextValue.create(univerInstanceService.getUnit(DOCS_ZEN_EDITOR_UNIT_ID_KEY).getSnapshot()),
              isZenEditor: true
            };
            this.fireEvent(this.Event.SheetEditChanging, eventParams);
          }
        }
      })
    );
  }
  /**
   * @ignore
   */
  _initialize(injector) {
    this._initSheetZenEditorEvent(injector);
  }
};
FUniver.extend(FUniverSheetsZenEditorMixin);

// ../packages/sheets-zen-editor/src/facade/f-workbook.ts
var FWorkbookSheetsZenEditorMixin = class extends FWorkbook {
  startZenEditingAsync() {
    const commandService = this._injector.get(ICommandService);
    return commandService.executeCommand(OpenZenEditorCommand.id);
  }
  endZenEditingAsync(save = true) {
    const commandService = this._injector.get(ICommandService);
    return save ? commandService.executeCommand(ConfirmZenEditCommand.id) : commandService.executeCommand(CancelZenEditCommand.id);
  }
};
FWorkbook.extend(FWorkbookSheetsZenEditorMixin);

// ../packages-experimental/sheets-source-binding/src/facade/f-enum.ts
var FSourceBindingEnum = class extends FEnum {
  get DataBindingNodeTypeEnum() {
    return DataBindingNodeTypeEnum;
  }
  get BindModeEnum() {
    return BindModeEnum;
  }
};
FEnum.extend(FSourceBindingEnum);

// ../packages-experimental/sheets-source-binding/src/facade/f-workbook.ts
var FWorkbookSourceBinding = class extends FWorkbook {
  createSource(type, isListObject, id) {
    const injector = this._injector;
    const sheetsSourceBindService = injector.get(SheetsSourceBindService);
    return sheetsSourceBindService.createSource(this.getId(), type, isListObject, id);
  }
  getSource(sourceId) {
    const injector = this._injector;
    const sheetsSourceBindService = injector.get(SheetsSourceBindService);
    return sheetsSourceBindService.getSource(this.getId(), sourceId);
  }
  setSourceData(sourceId, data) {
    const injector = this._injector;
    const sheetsSourceManager = injector.get(SheetsSourceManager);
    sheetsSourceManager.updateSourceData(this.getId(), sourceId, data);
  }
  usePathMode() {
    const injector = this._injector;
    const sheetsSourceBindService = injector.get(SheetsSourceBindService);
    sheetsSourceBindService.usePathMode();
  }
  useValueMode() {
    const injector = this._injector;
    const sheetsSourceBindService = injector.get(SheetsSourceBindService);
    sheetsSourceBindService.useValueMode();
  }
  loadSourceBindingPathInfo(obj) {
    const injector = this._injector;
    const sheetsSourceBindService = injector.get(SheetsSourceBindService);
    sheetsSourceBindService.loadSourceBindingPathInfo(this.getId(), obj);
  }
  saveSourceBindingPathInfo() {
    const injector = this._injector;
    const sheetsSourceBindService = injector.get(SheetsSourceBindService);
    return sheetsSourceBindService.getSourceBindingPathInfo(this.getId());
  }
  getBindingModelBySourceId(sourceId) {
    const injector = this._injector;
    const sheetsSourceBindService = injector.get(SheetsSourceBindService);
    return sheetsSourceBindService.getBindingModelBySourceId(sourceId);
  }
};
FWorkbook.extend(FWorkbookSourceBinding);

// ../packages-experimental/sheets-source-binding/src/facade/f-worksheet.ts
var FWorksheetSourceBinding = class extends FWorksheet {
  setBindingNode(bindingNode) {
    const injector = this._injector;
    const sheetsSourceBindService = injector.get(SheetsSourceBindService);
    const unitId = this._workbook.getUnitId();
    sheetsSourceBindService.setBindingNode(unitId, this.getSheetId(), bindingNode);
  }
  removeBindingNode(row, column) {
    const injector = this._injector;
    const sheetsSourceBindService = injector.get(SheetsSourceBindService);
    const unitId = this._workbook.getUnitId();
    sheetsSourceBindService.removeBindingNode(unitId, this.getSheetId(), row, column);
  }
  getBindingNode(row, column) {
    const injector = this._injector;
    const sheetsSourceBindService = injector.get(SheetsSourceBindService);
    const unitId = this._workbook.getUnitId();
    return sheetsSourceBindService.getBindingNode(unitId, this.getSheetId(), row, column);
  }
};
FWorksheet.extend(FWorksheetSourceBinding);

// ../packages/sheets-crosshair-highlight/src/facade/f-univer.ts
var FSheetCrosshairHighlightEventMixin = class {
  get CrosshairHighlightEnabledChanged() {
    return "CrosshairHighlightEnabledChanged";
  }
  get CrosshairHighlightColorChanged() {
    return "CrosshairHighlightColorChanged";
  }
};
var FUniverCrosshairHighlightMixin = class extends FUniver {
  /**
   * @ignore
   */
  _initialize(injector) {
    const commandService = injector.get(ICommandService);
    this.registerEventHandler(
      this.Event.CrosshairHighlightEnabledChanged,
      () => commandService.onCommandExecuted((commandInfo) => {
        if (commandInfo.id === EnableCrosshairHighlightOperation.id || commandInfo.id === DisableCrosshairHighlightOperation.id || commandInfo.id === ToggleCrosshairHighlightOperation.id) {
          const activeSheet = this.getActiveSheet();
          if (!activeSheet) return;
          this.fireEvent(this.Event.CrosshairHighlightEnabledChanged, {
            enabled: this.getCrosshairHighlightEnabled(),
            ...activeSheet
          });
        }
      })
    );
    this.registerEventHandler(
      this.Event.CrosshairHighlightColorChanged,
      () => commandService.onCommandExecuted((commandInfo) => {
        if (commandInfo.id === SetCrosshairHighlightColorOperation.id) {
          const activeSheet = this.getActiveSheet();
          if (!activeSheet) return;
          this.fireEvent(this.Event.CrosshairHighlightColorChanged, {
            color: this.getCrosshairHighlightColor(),
            ...activeSheet
          });
        }
      })
    );
  }
  setCrosshairHighlightEnabled(enabled) {
    if (enabled) {
      this._commandService.syncExecuteCommand(EnableCrosshairHighlightOperation.id);
    } else {
      this._commandService.syncExecuteCommand(DisableCrosshairHighlightOperation.id);
    }
    return this;
  }
  setCrosshairHighlightColor(color) {
    this._commandService.syncExecuteCommand(SetCrosshairHighlightColorOperation.id, {
      value: color
    });
    return this;
  }
  getCrosshairHighlightEnabled() {
    const crosshairHighlightService = this._injector.get(SheetsCrosshairHighlightService);
    return crosshairHighlightService.enabled;
  }
  getCrosshairHighlightColor() {
    const crosshairHighlightService = this._injector.get(SheetsCrosshairHighlightService);
    return crosshairHighlightService.color;
  }
  get CROSSHAIR_HIGHLIGHT_COLORS() {
    return CROSSHAIR_HIGHLIGHT_COLORS;
  }
};
FEventName.extend(FSheetCrosshairHighlightEventMixin);
FUniver.extend(FUniverCrosshairHighlightMixin);

// ../packages/sheets-sort/src/facade/f-range.ts
var FRangeSort = class extends FRange {
  sort(column) {
    const columnBase = this._range.startColumn;
    const columns = Array.isArray(column) ? column : [column];
    const orderRules = columns.map((c) => {
      if (typeof c === "number") {
        return { colIndex: c + columnBase, type: "asc" /* ASC */ };
      }
      return {
        colIndex: c.column + columnBase,
        type: c.ascending ? "asc" /* ASC */ : "desc" /* DESC */
      };
    });
    this._commandService.syncExecuteCommand(SortRangeCommand.id, {
      orderRules,
      range: this._range,
      hasTitle: false,
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId()
    });
    return this;
  }
};
FRange.extend(FRangeSort);

// ../packages/sheets-sort/src/facade/f-worksheet.ts
var FWorksheetSort = class extends FWorksheet {
  sort(colIndex, asc = true) {
    const orderRules = [{
      colIndex,
      type: asc ? "asc" /* ASC */ : "desc" /* DESC */
    }];
    const range = {
      startRow: 0,
      startColumn: 0,
      endRow: this._worksheet.getRowCount() - 1,
      endColumn: this._worksheet.getColumnCount() - 1,
      rangeType: 3 /* ALL */
    };
    this._commandService.syncExecuteCommand(SortRangeCommand.id, {
      orderRules,
      range,
      hasTitle: false,
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId()
    });
    return this;
  }
};
FWorksheet.extend(FWorksheetSort);

// ../packages/sheets-sort/src/facade/f-event.ts
var FSheetSortEventName = class {
  get SheetRangeSorted() {
    return "SheetRangeSorted";
  }
  get SheetBeforeRangeSort() {
    return "SheetBeforeRangeSort";
  }
};
FEventName.extend(FSheetEventName);
var FUniverSheetsSortEventMixin = class extends FUniver {
  /**
   * @ignore
   */
  _initialize(injector) {
    const commandService = injector.get(ICommandService);
    this.registerEventHandler(
      this.Event.SheetBeforeRangeSort,
      () => commandService.beforeCommandExecuted((commandInfo) => {
        if (commandInfo.id !== SortRangeCommand.id) return;
        this._beforeRangeSort(commandInfo);
      })
    );
    this.registerEventHandler(
      this.Event.SheetRangeSorted,
      () => commandService.onCommandExecuted((commandInfo) => {
        if (commandInfo.id !== SortRangeCommand.id) return;
        this._onRangeSorted(commandInfo);
      })
    );
  }
  _beforeRangeSort(commandInfo) {
    const params = commandInfo.params;
    const fWorkbook = this.getUniverSheet(params.unitId);
    const fWorksheet = fWorkbook.getSheetBySheetId(params.subUnitId);
    const { startColumn, endColumn, startRow, endRow } = params.range;
    const fRange = fWorksheet.getRange(startRow, startColumn, endRow - startRow + 1, endColumn - startColumn + 1);
    const eventParams = {
      workbook: fWorkbook,
      worksheet: fWorksheet,
      range: fRange,
      sortColumn: params.orderRules.map((rule) => ({
        column: rule.colIndex - startColumn,
        ascending: rule.type === "asc" /* ASC */
      }))
    };
    this.fireEvent(this.Event.SheetBeforeRangeSort, eventParams);
    if (eventParams.cancel) {
      throw new Error("SortRangeCommand canceled.");
    }
  }
  _onRangeSorted(commandInfo) {
    const params = commandInfo.params;
    const fWorkbook = this.getUniverSheet(params.unitId);
    const fWorksheet = fWorkbook.getSheetBySheetId(params.subUnitId);
    const { startColumn, endColumn, startRow, endRow } = params.range;
    const fRange = fWorksheet.getRange(startRow, startColumn, endRow - startRow + 1, endColumn - startColumn + 1);
    const eventParams = {
      workbook: fWorkbook,
      worksheet: fWorksheet,
      range: fRange,
      sortColumn: params.orderRules.map((rule) => ({
        column: rule.colIndex - startColumn,
        ascending: rule.type === "asc" /* ASC */
      }))
    };
    this.fireEvent(this.Event.SheetRangeSorted, eventParams);
    if (eventParams.cancel) {
      throw new Error("SortRangeCommand canceled.");
    }
  }
};
FUniver.extend(FUniverSheetsSortEventMixin);
FEventName.extend(FSheetSortEventName);

export {
  UniverSheetsBindingSourcePlugin,
  UniverSheetsThreadCommentUIPlugin,
  UniverSheetsZenEditorPlugin
};
//# sourceMappingURL=chunk-LC74W6VU.js.map
