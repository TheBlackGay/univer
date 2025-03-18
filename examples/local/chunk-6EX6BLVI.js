import {
  BaseSelectionRenderService,
  CellAlertManagerService,
  EMBEDDING_FORMULA_EDITOR,
  EMBEDDING_FORMULA_EDITOR_COMPONENT_KEY,
  ExpandSelectionCommand,
  HoverManagerService,
  IAutoFillService,
  IEditorBridgeService,
  IMarkSelectionService,
  ISheetClipboardService,
  MoveSelectionCommand,
  PASTE_SPECIAL_MENU_ID,
  PREDEFINED_HOOK_NAME,
  RANGE_SELECTOR_COMPONENT_KEY,
  SelectionControl,
  SetCellEditVisibleOperation,
  SheetPasteCommand,
  SheetSkeletonManagerService,
  attachSelectionWithCoord,
  genNormalSelectionStyle,
  getCoordByOffset,
  getCurrentRangeDisable$,
  getSheetObject,
  matchedSelectionByRowColIndex,
  selectionDataForSelectAll,
  useActiveWorkbook,
  whenFormulaEditorActivated
} from "./chunk-NW7E7FBW.js";
import {
  ComponentManager,
  DocBackScrollRenderController,
  DocSelectionManagerService,
  DocSelectionRenderService,
  IClipboardInterfaceService,
  IContextMenuService,
  IEditorService,
  ILayoutService,
  IMenuManagerService,
  IRenderManagerService,
  IShortcutService,
  ISidebarService,
  IUIPartsService,
  IZenZoneService,
  MoveCursorOperation,
  MoveSelectionOperation,
  ProgressBar,
  RectPopup,
  ReplaceTextRunsCommand,
  RichTextEditor,
  Vector2,
  connectInjector,
  getMenuHiddenObservable,
  useDependency,
  useEvent,
  useInjector,
  useKeyboardEvent,
  useObservable,
  useResize,
  useUpdateEffect
} from "./chunk-DOZPYWOG.js";
import {
  Button,
  Dialog,
  Input,
  Popup,
  Select,
  Tooltip,
  check_mark_single_default,
  close_single_default,
  clsx,
  delete_single_default,
  details_single_default,
  increase_single_default,
  more_single_default,
  require_jsx_runtime,
  require_react,
  select_range_single_default
} from "./chunk-22LKBS37.js";
import {
  IDescriptionService,
  InsertFunctionCommand,
  TriggerCalculationController,
  UniverSheetsFormulaPlugin
} from "./chunk-5UD457XA.js";
import {
  BEFORE_CELL_EDIT,
  BehaviorSubject,
  BuildTextUtils,
  ColorKit,
  DEFAULT_EMPTY_DOCUMENT_VALUE,
  DOCS_FORMULA_BAR_EDITOR_UNIT_ID_KEY,
  DOCS_NORMAL_EDITOR_UNIT_ID_KEY,
  DependentOn,
  Disposable,
  DisposableCollection,
  EDITOR_ACTIVATED,
  ERROR_TYPE_SET,
  FOCUSING_DOC,
  FOCUSING_UNIVER_EDITOR,
  FormulaDataModel,
  FunctionType,
  ICommandService,
  IConfigService,
  IContextService,
  ILogService,
  INTERCEPTOR_POINT,
  IRefSelectionsService,
  IUniverInstanceService,
  Inject,
  Injector,
  LexerTreeBuilder,
  LocaleService,
  O,
  ObjectMatrix,
  Observable,
  Plugin,
  REF_SELECTIONS_ENABLED,
  RangeProtectionPermissionEditPoint,
  Rectangle,
  RichTextBuilder,
  RxDisposable,
  SetArrayFormulaDataMutation,
  SetFormulaCalculationResultMutation,
  SetFormulaCalculationStopMutation,
  SetRangeValuesMutation,
  SetRangeValuesUndoMutationFactory,
  SetSelectionsOperation,
  SetWorksheetActiveOperation,
  SetWorksheetRowAutoHeightMutation,
  SheetInterceptorService,
  SheetsSelectionsService,
  Subject,
  ThemeService,
  Tools,
  UniverFormulaEnginePlugin,
  WorkbookEditablePermission,
  WorksheetEditPermission,
  WorksheetSetCellValuePermission,
  combineLatestWith,
  convertSelectionDataToRange,
  createIdentifier,
  createInternalEditorID,
  debounceTime,
  deserializeRangeWithSheet,
  deserializeRangeWithSheetWithCache,
  distinctUntilChanged,
  filter,
  generateRandomId,
  generateStringWithSequence,
  getBodySlice,
  getCellAtRowCol,
  getCellValueType,
  getSheetCommandTarget,
  isFormulaId,
  isFormulaLexerToken,
  isFormulaString,
  isICellData,
  isRealNum,
  map,
  matchRefDrawToken,
  merge,
  merge_default,
  of,
  registerDependencies,
  serializeRange,
  serializeRangeWithSheet,
  setEndForRange,
  switchMap,
  throttleTime,
  toDisposable,
  touchDependencies
} from "./chunk-33NDYU5R.js";
import {
  __decorateClass,
  __decorateParam,
  __publicField,
  __toESM
} from "./chunk-NSSCU2QI.js";

// ../packages/sheets-formula-ui/src/common/plugin-name.ts
var FORMULA_UI_PLUGIN_NAME = "SHEET_FORMULA_UI_PLUGIN";

// ../packages/sheets-formula-ui/src/controllers/config.schema.ts
var PLUGIN_CONFIG_KEY_BASE = "sheets-formula-ui.base.config";
var configSymbolBase = Symbol(PLUGIN_CONFIG_KEY_BASE);
var defaultPluginBaseConfig = {};

// ../packages/sheets-formula-ui/src/controllers/utils/utils.ts
function whenEditorStandalone(contextService) {
  return contextService.getContextValue(FOCUSING_DOC) && contextService.getContextValue(FOCUSING_UNIVER_EDITOR);
}
function extractFormulaError(cell, isArrayFormulaCell = false) {
  if (!isArrayFormulaCell && !(isFormulaString(cell == null ? void 0 : cell.f) || isFormulaId(cell == null ? void 0 : cell.si))) {
    return null;
  }
  if (typeof (cell == null ? void 0 : cell.v) === "string" && ERROR_TYPE_SET.has(cell.v)) {
    return cell.v;
  }
  return null;
}

// ../packages/sheets-formula-ui/src/controllers/formula-alert-render.controller.ts
var ALERT_KEY = "SHEET_FORMULA_ALERT";
var ErrorTypeToMessageMap = {
  ["#DIV/0!" /* DIV_BY_ZERO */]: "divByZero",
  ["#NAME?" /* NAME */]: "name",
  ["#VALUE!" /* VALUE */]: "value",
  ["#NUM!" /* NUM */]: "num",
  ["#N/A" /* NA */]: "na",
  ["#CYCLE!" /* CYCLE */]: "cycle",
  ["#REF!" /* REF */]: "ref",
  ["#SPILL!" /* SPILL */]: "spill",
  ["#CALC!" /* CALC */]: "calc",
  ["#ERROR!" /* ERROR */]: "error",
  ["#GETTING_DATA" /* CONNECT */]: "connect",
  ["#NULL!" /* NULL */]: "null"
};
var FormulaAlertRenderController = class extends Disposable {
  constructor(_context, _hoverManagerService, _cellAlertManagerService, _localeService, _formulaDataModel, _zenZoneService) {
    super();
    this._context = _context;
    this._hoverManagerService = _hoverManagerService;
    this._cellAlertManagerService = _cellAlertManagerService;
    this._localeService = _localeService;
    this._formulaDataModel = _formulaDataModel;
    this._zenZoneService = _zenZoneService;
    this._init();
  }
  _init() {
    this._initCellAlertPopup();
    this._initZenService();
  }
  _initCellAlertPopup() {
    this.disposeWithMe(this._hoverManagerService.currentCell$.pipe(debounceTime(100)).subscribe((cellPos) => {
      var _a, _b, _c, _d, _e;
      if (cellPos) {
        const workbook = this._context.unit;
        const worksheet = workbook.getActiveSheet();
        if (!worksheet) return;
        const cellData = worksheet.getCell(cellPos.location.row, cellPos.location.col);
        const arrayFormulaCellData = (_d = (_c = (_b = (_a = this._formulaDataModel.getArrayFormulaCellData()) == null ? void 0 : _a[cellPos.location.unitId]) == null ? void 0 : _b[cellPos.location.subUnitId]) == null ? void 0 : _c[cellPos.location.row]) == null ? void 0 : _d[cellPos.location.col];
        if (isICellData(cellData)) {
          const errorType = extractFormulaError(cellData, !!arrayFormulaCellData);
          if (!errorType) {
            this._hideAlert();
            return;
          }
          const currentAlert = this._cellAlertManagerService.currentAlert.get(ALERT_KEY);
          const currentLoc = (_e = currentAlert == null ? void 0 : currentAlert.alert) == null ? void 0 : _e.location;
          if (currentLoc && currentLoc.row === cellPos.location.row && currentLoc.col === cellPos.location.col && currentLoc.subUnitId === cellPos.location.subUnitId && currentLoc.unitId === cellPos.location.unitId) {
            return;
          }
          this._cellAlertManagerService.showAlert({
            type: 2 /* ERROR */,
            title: this._localeService.t("formula.error.title"),
            message: this._localeService.t(`formula.error.${ErrorTypeToMessageMap[errorType]}`),
            location: cellPos.location,
            width: 200,
            height: 74,
            key: ALERT_KEY
          });
          return;
        }
      }
      this._hideAlert();
    }));
  }
  _initZenService() {
    this.disposeWithMe(this._zenZoneService.visible$.subscribe((visible) => {
      if (visible) {
        this._hideAlert();
      }
    }));
  }
  _hideAlert() {
    this._cellAlertManagerService.removeAlert(ALERT_KEY);
  }
};
FormulaAlertRenderController = __decorateClass([
  __decorateParam(1, Inject(HoverManagerService)),
  __decorateParam(2, Inject(CellAlertManagerService)),
  __decorateParam(3, Inject(LocaleService)),
  __decorateParam(4, Inject(FormulaDataModel)),
  __decorateParam(5, IZenZoneService)
], FormulaAlertRenderController);

// ../packages/sheets-formula-ui/src/controllers/formula-auto-fill.controller.ts
var FormulaAutoFillController = class extends Disposable {
  constructor(_autoFillService, _lexerTreeBuilder) {
    super();
    this._autoFillService = _autoFillService;
    this._lexerTreeBuilder = _lexerTreeBuilder;
    this._registerAutoFill();
  }
  _registerAutoFill() {
    const formulaRule = {
      type: "formula" /* FORMULA */,
      priority: 1001,
      match: (cellData) => isFormulaString(cellData == null ? void 0 : cellData.f) || isFormulaId(cellData == null ? void 0 : cellData.si),
      isContinue: (prev, cur) => {
        if (prev.type === "formula" /* FORMULA */) {
          return true;
        }
        return false;
      },
      applyFunctions: {
        ["COPY" /* COPY */]: (dataWithIndex, len, direction, copyDataPiece, location) => {
          const { data, index } = dataWithIndex;
          return this._fillCopyFormula(data, len, direction, index, copyDataPiece, location);
        }
      }
    };
    this._autoFillService.registerRule(formulaRule);
  }
  _fillCopyFormula(data, len, direction, index, copyDataPiece, location) {
    var _a, _b;
    const step = getDataLength(copyDataPiece);
    const applyData = [];
    const formulaIdMap = /* @__PURE__ */ new Map();
    for (let i = 1; i <= len; i++) {
      const dataIndex = (i - 1) % data.length;
      const sourceIndex = index[dataIndex];
      const d = Tools.deepClone(data[dataIndex]);
      if (d) {
        const originalFormula = ((_a = data[dataIndex]) == null ? void 0 : _a.f) || "";
        const originalFormulaId = ((_b = data[dataIndex]) == null ? void 0 : _b.si) || "";
        const checkFormula = isFormulaString(originalFormula);
        const checkFormulaId = isFormulaId(originalFormulaId);
        if (checkFormulaId) {
          d.si = originalFormulaId;
          d.f = null;
          d.v = null;
          d.p = null;
          d.t = null;
          applyData.push(d);
        } else if (checkFormula) {
          let formulaId = formulaIdMap.get(dataIndex);
          if (!formulaId) {
            formulaId = Tools.generateRandomId(6);
            formulaIdMap.set(dataIndex, formulaId);
            const { offsetX, offsetY } = directionToOffset(step, len, direction, location, sourceIndex);
            const shiftedFormula = this._lexerTreeBuilder.moveFormulaRefOffset(
              originalFormula,
              offsetX,
              offsetY
            );
            d.si = formulaId;
            d.f = shiftedFormula;
            d.v = null;
            d.p = null;
            d.t = null;
          } else {
            d.si = formulaId;
            d.f = null;
            d.v = null;
            d.p = null;
            d.t = null;
          }
          applyData.push(d);
        }
      }
    }
    return applyData;
  }
};
FormulaAutoFillController = __decorateClass([
  __decorateParam(0, IAutoFillService),
  __decorateParam(1, Inject(LexerTreeBuilder))
], FormulaAutoFillController);
function directionToOffset(step, len, direction, location, sourceIndex) {
  const { source, target } = location;
  const { rows: targetRows } = target;
  const { rows: sourceRows } = source;
  let offsetX = 0;
  let offsetY = 0;
  switch (direction) {
    case 0 /* UP */:
      offsetY = targetRows[sourceIndex] - sourceRows[sourceIndex];
      break;
    case 1 /* RIGHT */:
      offsetX = step;
      break;
    case 2 /* DOWN */:
      offsetY = targetRows[sourceIndex] - sourceRows[sourceIndex];
      break;
    case 3 /* LEFT */:
      offsetX = -step * len;
      break;
  }
  return { offsetX, offsetY };
}
function getDataLength(copyDataPiece) {
  let length = 0;
  for (const t in copyDataPiece) {
    copyDataPiece[t].forEach((item) => {
      length += item.data.length;
    });
  }
  return length;
}

// ../packages/sheets-formula-ui/src/controllers/formula-clipboard.controller.ts
var DEFAULT_PASTE_FORMULA = "default-paste-formula";
var FormulaClipboardController = class extends Disposable {
  constructor(_currentUniverSheet, _lexerTreeBuilder, _sheetClipboardService, _injector, _formulaDataModel) {
    super();
    this._currentUniverSheet = _currentUniverSheet;
    this._lexerTreeBuilder = _lexerTreeBuilder;
    this._sheetClipboardService = _sheetClipboardService;
    this._injector = _injector;
    this._formulaDataModel = _formulaDataModel;
    this._initialize();
  }
  _initialize() {
    this._registerClipboardHook();
  }
  _registerClipboardHook() {
    this.disposeWithMe(this._sheetClipboardService.addClipboardHook(this._pasteFormulaHook()));
    this.disposeWithMe(this._sheetClipboardService.addClipboardHook(this._pasteWithFormulaHook()));
  }
  _pasteFormulaHook() {
    return {
      id: PREDEFINED_HOOK_NAME.SPECIAL_PASTE_FORMULA,
      priority: 10,
      specialPasteInfo: { label: "specialPaste.formula" },
      onPasteCells: (pasteFrom, pasteTo, data, payload) => this._onPasteCells(pasteFrom, pasteTo, data, payload, true)
    };
  }
  _pasteWithFormulaHook() {
    return {
      id: DEFAULT_PASTE_FORMULA,
      priority: 10,
      onPasteCells: (pasteFrom, pasteTo, data, payload) => this._onPasteCells(pasteFrom, pasteTo, data, payload, false)
    };
  }
  _onPasteCells(pasteFrom, pasteTo, data, payload, isSpecialPaste) {
    var _a;
    const specialPastes = [
      PREDEFINED_HOOK_NAME.SPECIAL_PASTE_FORMAT,
      PREDEFINED_HOOK_NAME.SPECIAL_PASTE_COL_WIDTH
    ];
    if (specialPastes.includes(payload.pasteType)) {
      return {
        undos: [],
        redos: []
      };
    }
    const workbook = this._currentUniverSheet.getCurrentUnitForType(O.UNIVER_SHEET);
    const unitId = pasteTo.unitId || workbook.getUnitId();
    const subUnitId = pasteTo.subUnitId || ((_a = workbook.getActiveSheet()) == null ? void 0 : _a.getSheetId());
    if (!unitId || !subUnitId) {
      return {
        undos: [],
        redos: []
      };
    }
    const pastedRange = pasteTo.range;
    const matrix = data;
    const copyInfo = {
      copyType: payload.copyType || "COPY" /* COPY */,
      copyRange: pasteFrom == null ? void 0 : pasteFrom.range,
      pasteType: payload.pasteType
    };
    return this._injector.invoke((accessor) => getSetCellFormulaMutations(
      unitId,
      subUnitId,
      pastedRange,
      matrix,
      accessor,
      copyInfo,
      this._lexerTreeBuilder,
      this._formulaDataModel,
      isSpecialPaste,
      pasteFrom
    ));
  }
};
FormulaClipboardController = __decorateClass([
  __decorateParam(0, IUniverInstanceService),
  __decorateParam(1, Inject(LexerTreeBuilder)),
  __decorateParam(2, ISheetClipboardService),
  __decorateParam(3, Inject(Injector)),
  __decorateParam(4, Inject(FormulaDataModel))
], FormulaClipboardController);
function getSetCellFormulaMutations(unitId, subUnitId, range, matrix, accessor, copyInfo, lexerTreeBuilder, formulaDataModel, isSpecialPaste = false, pasteFrom) {
  const redoMutationsInfo = [];
  const undoMutationsInfo = [];
  const valueMatrix = getValueMatrix(unitId, subUnitId, range, matrix, copyInfo, lexerTreeBuilder, formulaDataModel, pasteFrom);
  if (!valueMatrix.hasValue()) {
    return {
      undos: [],
      redos: []
    };
  }
  const setValuesMutation = {
    unitId,
    subUnitId,
    cellValue: valueMatrix.getData()
  };
  redoMutationsInfo.push({
    id: SetRangeValuesMutation.id,
    params: setValuesMutation
  });
  const undoSetValuesMutation = SetRangeValuesUndoMutationFactory(
    accessor,
    setValuesMutation
  );
  undoMutationsInfo.push({
    id: SetRangeValuesMutation.id,
    params: undoSetValuesMutation
  });
  return {
    undos: undoMutationsInfo,
    redos: redoMutationsInfo
  };
}
function getValueMatrix(unitId, subUnitId, range, matrix, copyInfo, lexerTreeBuilder, formulaDataModel, pasteFrom) {
  if (!pasteFrom) {
    return getValueMatrixOfPasteFromIsNull(unitId, subUnitId, range, matrix, formulaDataModel);
  }
  if (copyInfo.pasteType === PREDEFINED_HOOK_NAME.SPECIAL_PASTE_VALUE) {
    return getSpecialPasteValueValueMatrix(unitId, subUnitId, range, matrix, formulaDataModel, pasteFrom);
  }
  if (copyInfo.pasteType === PREDEFINED_HOOK_NAME.SPECIAL_PASTE_FORMULA) {
    return getSpecialPasteFormulaValueMatrix(unitId, subUnitId, range, matrix, lexerTreeBuilder, formulaDataModel, pasteFrom);
  }
  return getDefaultPasteValueMatrix(unitId, subUnitId, range, matrix, copyInfo.copyType, lexerTreeBuilder, formulaDataModel, pasteFrom);
}
function getValueMatrixOfPasteFromIsNull(unitId, subUnitId, range, matrix, formulaDataModel) {
  const valueMatrix = new ObjectMatrix();
  const formulaData = formulaDataModel.getSheetFormulaData(unitId, subUnitId);
  matrix.forValue((row, col, value) => {
    var _a;
    const toRow = range.rows[row];
    const toCol = range.cols[col];
    const valueObject = {};
    if (isFormulaString(value.v)) {
      valueObject.v = null;
      valueObject.f = `${value.v}`;
      valueObject.si = null;
      valueObject.p = null;
      valueMatrix.setValue(toRow, toCol, valueObject);
    } else if ((_a = formulaData == null ? void 0 : formulaData[toRow]) == null ? void 0 : _a[toCol]) {
      valueObject.v = value.v;
      valueObject.f = null;
      valueObject.si = null;
      valueObject.p = null;
      valueMatrix.setValue(toRow, toCol, valueObject);
    }
  });
  return valueMatrix;
}
function getSpecialPasteValueValueMatrix(unitId, subUnitId, range, matrix, formulaDataModel, pasteFrom) {
  var _a, _b;
  const valueMatrix = new ObjectMatrix();
  const arrayFormulaCellData = (_b = (_a = formulaDataModel.getArrayFormulaCellData()) == null ? void 0 : _a[pasteFrom.unitId]) == null ? void 0 : _b[pasteFrom.subUnitId];
  const formulaData = formulaDataModel.getSheetFormulaData(unitId, subUnitId);
  matrix.forValue((row, col, value) => {
    var _a2, _b2;
    const fromRow = pasteFrom.range.rows[row % pasteFrom.range.rows.length];
    const fromCol = pasteFrom.range.cols[col % pasteFrom.range.cols.length];
    const toRow = range.rows[row];
    const toCol = range.cols[col];
    const valueObject = {};
    if (isFormulaString(value.f) || isFormulaId(value.si)) {
      valueObject.v = value.v;
      valueObject.f = null;
      valueObject.si = null;
      valueObject.p = null;
      valueMatrix.setValue(toRow, toCol, valueObject);
    } else if ((_a2 = arrayFormulaCellData == null ? void 0 : arrayFormulaCellData[fromRow]) == null ? void 0 : _a2[fromCol]) {
      const cell = arrayFormulaCellData[fromRow][fromCol];
      valueObject.v = cell.v;
      valueObject.f = null;
      valueObject.si = null;
      valueObject.p = null;
      valueMatrix.setValue(toRow, toCol, valueObject);
    } else if ((_b2 = formulaData == null ? void 0 : formulaData[toRow]) == null ? void 0 : _b2[toCol]) {
      valueObject.v = value.v;
      valueObject.f = null;
      valueObject.si = null;
      valueObject.p = null;
      if (value.p) {
        const richText = getCellRichText(value);
        if (richText) {
          valueObject.v = richText;
        }
      }
      valueMatrix.setValue(toRow, toCol, valueObject);
    }
  });
  return valueMatrix;
}
function getSpecialPasteFormulaValueMatrix(unitId, subUnitId, range, matrix, lexerTreeBuilder, formulaDataModel, pasteFrom) {
  const valueMatrix = new ObjectMatrix();
  const formulaIdMap = /* @__PURE__ */ new Map();
  matrix.forValue((row, col, value) => {
    const toRow = range.rows[row];
    const toCol = range.cols[col];
    const valueObject = {};
    if (isFormulaId(value.si)) {
      if (pasteFrom.unitId !== unitId || pasteFrom.subUnitId !== subUnitId) {
        const formulaString = formulaDataModel.getFormulaStringByCell(
          pasteFrom.range.rows[row % pasteFrom.range.rows.length],
          pasteFrom.range.cols[col % pasteFrom.range.cols.length],
          pasteFrom.subUnitId,
          pasteFrom.unitId
        );
        const offsetX = range.cols[col] - pasteFrom.range.cols[col % pasteFrom.range.cols.length];
        const offsetY = range.rows[row] - pasteFrom.range.rows[row % pasteFrom.range.rows.length];
        const shiftedFormula = lexerTreeBuilder.moveFormulaRefOffset(formulaString || "", offsetX, offsetY);
        valueObject.si = null;
        valueObject.f = shiftedFormula;
      } else {
        valueObject.si = value.si;
        valueObject.f = null;
      }
      valueObject.v = null;
      valueObject.p = null;
      valueMatrix.setValue(toRow, toCol, valueObject);
    } else if (isFormulaString(value.f)) {
      const index = `${row % pasteFrom.range.rows.length}_${col % pasteFrom.range.cols.length}`;
      let formulaId = formulaIdMap.get(index);
      if (!formulaId) {
        formulaId = Tools.generateRandomId(6);
        formulaIdMap.set(index, formulaId);
        const offsetX = range.cols[col] - pasteFrom.range.cols[col % pasteFrom.range.cols.length];
        const offsetY = range.rows[row] - pasteFrom.range.rows[row % pasteFrom.range.rows.length];
        const shiftedFormula = lexerTreeBuilder.moveFormulaRefOffset(value.f || "", offsetX, offsetY);
        valueObject.si = formulaId;
        valueObject.f = shiftedFormula;
      } else {
        valueObject.si = formulaId;
        valueObject.f = null;
      }
      valueObject.v = null;
      valueObject.p = null;
      valueMatrix.setValue(toRow, toCol, valueObject);
    } else {
      valueObject.v = value.v;
      valueObject.f = null;
      valueObject.si = null;
      valueObject.p = null;
      if (value.p) {
        const richText = getCellRichText(value);
        if (richText) {
          valueObject.v = richText;
        }
      }
      valueMatrix.setValue(toRow, toCol, valueObject);
    }
  });
  return valueMatrix;
}
function getDefaultPasteValueMatrix(unitId, subUnitId, range, matrix, copyType, lexerTreeBuilder, formulaDataModel, pasteFrom) {
  const valueMatrix = new ObjectMatrix();
  const formulaIdMap = /* @__PURE__ */ new Map();
  const formulaData = formulaDataModel.getSheetFormulaData(unitId, subUnitId);
  const cutFormulaIds = [];
  if (copyType === "CUT" /* CUT */) {
    matrix.forValue((row, col, value) => {
      const toRow = range.rows[row];
      const toCol = range.cols[col];
      const valueObject = {};
      if (isFormulaId(value.si)) {
        if (isFormulaString(value.f)) {
          cutFormulaIds.push(value.si);
          valueObject.f = value.f;
          valueObject.si = value.si;
        } else if (cutFormulaIds.includes(value.si)) {
          valueObject.f = null;
          valueObject.si = value.si;
        } else {
          const formulaString = formulaDataModel.getFormulaStringByCell(
            pasteFrom.range.rows[row % pasteFrom.range.rows.length],
            pasteFrom.range.cols[col % pasteFrom.range.cols.length],
            pasteFrom.subUnitId,
            pasteFrom.unitId
          );
          valueObject.f = formulaString;
          valueObject.si = null;
        }
        valueObject.v = null;
        valueObject.p = null;
        valueMatrix.setValue(toRow, toCol, valueObject);
      } else if (isFormulaString(value.f)) {
        valueObject.f = value.f;
        valueObject.si = null;
        valueObject.v = null;
        valueObject.p = null;
        valueMatrix.setValue(toRow, toCol, valueObject);
      }
    });
  } else {
    matrix.forValue((row, col, value) => {
      var _a;
      const toRow = range.rows[row];
      const toCol = range.cols[col];
      const valueObject = {};
      if (isFormulaId(value.si)) {
        if (pasteFrom.unitId !== unitId || pasteFrom.subUnitId !== subUnitId) {
          const formulaString = formulaDataModel.getFormulaStringByCell(
            pasteFrom.range.rows[row % pasteFrom.range.rows.length],
            pasteFrom.range.cols[col % pasteFrom.range.cols.length],
            pasteFrom.subUnitId,
            pasteFrom.unitId
          );
          const offsetX = range.cols[col] - pasteFrom.range.cols[col % pasteFrom.range.cols.length];
          const offsetY = range.rows[row] - pasteFrom.range.rows[row % pasteFrom.range.rows.length];
          const shiftedFormula = lexerTreeBuilder.moveFormulaRefOffset(formulaString || "", offsetX, offsetY);
          valueObject.si = null;
          valueObject.f = shiftedFormula;
        } else {
          valueObject.si = value.si;
          valueObject.f = null;
        }
        valueObject.v = null;
        valueObject.p = null;
        valueMatrix.setValue(toRow, toCol, valueObject);
      } else if (isFormulaString(value.f)) {
        const index = `${row % pasteFrom.range.rows.length}_${col % pasteFrom.range.cols.length}`;
        let formulaId = formulaIdMap.get(index);
        if (!formulaId) {
          formulaId = Tools.generateRandomId(6);
          formulaIdMap.set(index, formulaId);
          const offsetX = range.cols[col] - pasteFrom.range.cols[col % pasteFrom.range.cols.length];
          const offsetY = range.rows[row] - pasteFrom.range.rows[row % pasteFrom.range.rows.length];
          const shiftedFormula = lexerTreeBuilder.moveFormulaRefOffset(value.f || "", offsetX, offsetY);
          valueObject.si = formulaId;
          valueObject.f = shiftedFormula;
        } else {
          valueObject.si = formulaId;
          valueObject.f = null;
        }
        valueObject.v = null;
        valueObject.p = null;
        valueMatrix.setValue(toRow, toCol, valueObject);
      } else if ((_a = formulaData == null ? void 0 : formulaData[toRow]) == null ? void 0 : _a[toCol]) {
        valueObject.v = value.v;
        valueObject.f = null;
        valueObject.si = null;
        valueObject.p = value.p;
        valueMatrix.setValue(toRow, toCol, valueObject);
      }
    });
  }
  if (cutFormulaIds.length > 0) {
    new ObjectMatrix(formulaData).forValue((row, col, value) => {
      if (!(pasteFrom.range.rows.includes(row) && pasteFrom.range.cols.includes(col)) && !(range.rows.includes(row) && range.cols.includes(col)) && cutFormulaIds.includes(value == null ? void 0 : value.si)) {
        const formulaString = formulaDataModel.getFormulaStringByCell(
          row,
          col,
          pasteFrom.subUnitId,
          pasteFrom.unitId
        );
        valueMatrix.setValue(row, col, {
          f: formulaString,
          si: null,
          v: null,
          p: null
        });
      }
    });
  }
  return valueMatrix;
}
function getCellRichText(cell) {
  if (cell == null ? void 0 : cell.p) {
    const body = cell == null ? void 0 : cell.p.body;
    if (body == null) {
      return;
    }
    const data = body.dataStream;
    const lastString = data.substring(data.length - 2, data.length);
    const newDataStream = lastString === DEFAULT_EMPTY_DOCUMENT_VALUE ? data.substring(0, data.length - 2) : data;
    return newDataStream;
  }
}

// ../packages/sheets-formula-ui/src/controllers/formula-editor-show.controller.ts
var FormulaEditorShowController = class extends Disposable {
  constructor(_context, _sheetInterceptorService, _formulaDataModel, _themeService, _renderManagerService, _sheetSkeletonManagerService, _commandService, _logService) {
    super();
    this._context = _context;
    this._sheetInterceptorService = _sheetInterceptorService;
    this._formulaDataModel = _formulaDataModel;
    this._themeService = _themeService;
    this._renderManagerService = _renderManagerService;
    this._sheetSkeletonManagerService = _sheetSkeletonManagerService;
    this._commandService = _commandService;
    this._logService = _logService;
    __publicField(this, "_previousShape");
    __publicField(this, "_skeleton");
    this._initSkeletonChangeListener();
    this._initInterceptorEditorStart();
    this._commandExecutedListener();
  }
  _initSkeletonChangeListener() {
    this.disposeWithMe(
      this._sheetSkeletonManagerService.currentSkeleton$.subscribe((param) => {
        var _a, _b;
        if (param == null) {
          this._logService.debug("[FormulaEditorShowController]: should not receive currentSkeleton$ as null!");
        } else {
          const { skeleton } = param;
          const prevSheetId = (_b = (_a = this._skeleton) == null ? void 0 : _a.worksheet) == null ? void 0 : _b.getSheetId();
          this._changeRuntime(skeleton);
          if (prevSheetId !== skeleton.worksheet.getSheetId()) {
            this._removeArrayFormulaRangeShape();
          } else {
            const { unitId, sheetId } = param;
            this._updateArrayFormulaRangeShape(unitId, sheetId);
          }
        }
      })
    );
  }
  _changeRuntime(skeleton) {
    this._skeleton = skeleton;
  }
  _initInterceptorEditorStart() {
    this.disposeWithMe(
      toDisposable(
        this._sheetInterceptorService.writeCellInterceptor.intercept(BEFORE_CELL_EDIT, {
          handler: (value, context, next) => {
            var _a, _b, _c, _d;
            const { row, col, unitId, subUnitId, worksheet } = context;
            const arrayFormulaMatrixRange = this._formulaDataModel.getArrayFormulaRange();
            const arrayFormulaMatrixCell = this._formulaDataModel.getArrayFormulaCellData();
            this._removeArrayFormulaRangeShape();
            if (value == null) {
              return next(value);
            }
            let cellInfo = null;
            const formulaString = this._formulaDataModel.getFormulaStringByCell(row, col, subUnitId, unitId);
            if (formulaString !== null) {
              cellInfo = { f: formulaString };
            }
            if (value.v != null && value.v !== "" && ((_c = (_b = (_a = arrayFormulaMatrixCell[unitId]) == null ? void 0 : _a[subUnitId]) == null ? void 0 : _b[row]) == null ? void 0 : _c[col]) == null) {
              if (cellInfo) {
                return { ...value, ...cellInfo };
              }
              return next(value);
            }
            const matrixRange = (_d = arrayFormulaMatrixRange == null ? void 0 : arrayFormulaMatrixRange[unitId]) == null ? void 0 : _d[subUnitId];
            if (matrixRange != null) {
              cellInfo = this._displayArrayFormulaRangeShape(matrixRange, row, col, unitId, subUnitId, worksheet, cellInfo);
            }
            if (cellInfo) {
              return { ...value, ...cellInfo };
            }
            return next(value);
          }
        })
      )
    );
  }
  _commandExecutedListener() {
    this.disposeWithMe(this._commandService.onCommandExecuted((command, options) => {
      if (command.id === SetFormulaCalculationResultMutation.id || command.id === SetArrayFormulaDataMutation.id && options && options.remove) {
        this._removeArrayFormulaRangeShape();
      }
    }));
    this.disposeWithMe(
      this._commandService.beforeCommandExecuted((command) => {
        if (SetWorksheetRowAutoHeightMutation.id === command.id) {
          requestIdleCallback(() => {
            const params = command.params;
            const { unitId, subUnitId, rowsAutoHeightInfo } = params;
            this._refreshArrayFormulaRangeShapeByRow(unitId, subUnitId, rowsAutoHeightInfo);
          });
        }
      })
    );
  }
  _displayArrayFormulaRangeShape(matrixRange, row, col, unitId, subUnitId, worksheet, cellInfo) {
    const sheetFormulaData = this._formulaDataModel.getSheetFormulaData(unitId, subUnitId);
    new ObjectMatrix(matrixRange).forValue((rowIndex, columnIndex, range) => {
      var _a;
      if (range == null) {
        return true;
      }
      const { startRow, startColumn, endRow, endColumn } = range;
      if (rowIndex === row && columnIndex === col) {
        this._createArrayFormulaRangeShape(range, unitId);
        return false;
      }
      if (row >= startRow && row <= endRow && col >= startColumn && col <= endColumn) {
        const mainCellValue = worksheet.getCell(startRow, startColumn);
        if ((mainCellValue == null ? void 0 : mainCellValue.v) === "#SPILL!" /* SPILL */) {
          return;
        }
        const formulaDataItem = (_a = sheetFormulaData == null ? void 0 : sheetFormulaData[rowIndex]) == null ? void 0 : _a[columnIndex];
        if (formulaDataItem == null || formulaDataItem.f == null) {
          return true;
        }
        if (cellInfo == null) {
          cellInfo = {
            f: formulaDataItem.f,
            isInArrayFormulaRange: true
          };
        }
        this._createArrayFormulaRangeShape(range, unitId);
        return false;
      }
    });
    return cellInfo;
  }
  _createArrayFormulaRangeShape(arrayRange, unitId) {
    const renderUnit = this._renderManagerService.getRenderById(unitId);
    const skeleton = this._sheetSkeletonManagerService.getCurrentSkeleton();
    if (!renderUnit || !skeleton) return;
    const { scene } = renderUnit;
    if (!scene) return;
    const styleSheet = this._themeService.getCurrentTheme();
    const selectionWithStyle = {
      range: arrayRange,
      primary: null,
      style: {
        strokeWidth: 1,
        stroke: styleSheet.hyacinth700,
        fill: new ColorKit(styleSheet.colorWhite).setAlpha(0).toString(),
        widgets: {}
      }
    };
    const selectionWithCoord = attachSelectionWithCoord(selectionWithStyle, skeleton);
    const { rowHeaderWidth, columnHeaderHeight } = skeleton;
    const control = new SelectionControl(scene, 100 /* FORMULA_EDITOR_SHOW */, this._themeService, {
      highlightHeader: false,
      rowHeaderWidth,
      columnHeaderHeight
    });
    control.updateRangeBySelectionWithCoord(selectionWithCoord);
    control.setEvent(false);
    this._previousShape = control;
  }
  _removeArrayFormulaRangeShape() {
    if (this._previousShape == null) {
      return;
    }
    this._previousShape.dispose();
    this._previousShape = null;
  }
  _refreshArrayFormulaRangeShape(unitId, _range) {
    if (this._previousShape) {
      const { startRow, endRow, startColumn, endColumn } = this._previousShape.getRange();
      const range = { startRow, endRow, startColumn, endColumn };
      this._removeArrayFormulaRangeShape();
      this._createArrayFormulaRangeShape(range, unitId);
    }
  }
  _checkCurrentSheet(unitId, subUnitId) {
    const skeleton = this._sheetSkeletonManagerService.getCurrentSkeleton();
    if (!skeleton) return false;
    const worksheet = skeleton.worksheet;
    if (!worksheet) return false;
    if (worksheet.unitId === unitId && worksheet.getSheetId() === subUnitId) {
      return true;
    }
    return false;
  }
  _updateArrayFormulaRangeShape(unitId, subUnitId) {
    if (!this._checkCurrentSheet(unitId, subUnitId)) return;
    if (!this._previousShape) return;
    this._refreshArrayFormulaRangeShape(unitId);
  }
  _refreshArrayFormulaRangeShapeByRow(unitId, subUnitId, rowAutoHeightInfo) {
    if (!this._checkCurrentSheet(unitId, subUnitId)) return;
    if (!this._previousShape) return;
    const { startRow: shapeStartRow, endRow: shapeEndRow, startColumn: shapeStartColumn, endColumn: shapeEndColumn } = this._previousShape.getRange();
    for (let i = 0; i < rowAutoHeightInfo.length; i++) {
      const { row } = rowAutoHeightInfo[i];
      if (shapeStartRow >= row) {
        const shapeRange = {
          startRow: shapeStartRow,
          endRow: shapeEndRow,
          startColumn: shapeStartColumn,
          endColumn: shapeEndColumn
        };
        this._refreshArrayFormulaRangeShape(unitId, shapeRange);
        break;
      }
    }
  }
};
FormulaEditorShowController = __decorateClass([
  __decorateParam(1, Inject(SheetInterceptorService)),
  __decorateParam(2, Inject(FormulaDataModel)),
  __decorateParam(3, Inject(ThemeService)),
  __decorateParam(4, IRenderManagerService),
  __decorateParam(5, Inject(SheetSkeletonManagerService)),
  __decorateParam(6, ICommandService),
  __decorateParam(7, ILogService)
], FormulaEditorShowController);

// ../packages/sheets-formula-ui/src/controllers/formula-render.controller.ts
var FORMULA_ERROR_MARK = {
  tl: {
    size: 6,
    color: "#409f11"
  }
};
var FormulaRenderManagerController = class extends RxDisposable {
  constructor(_sheetInterceptorService, _formulaDataModel) {
    super();
    this._sheetInterceptorService = _sheetInterceptorService;
    this._formulaDataModel = _formulaDataModel;
    this.disposeWithMe(this._sheetInterceptorService.intercept(
      INTERCEPTOR_POINT.CELL_CONTENT,
      {
        effect: 1 /* Style */,
        handler: (cell, pos, next) => {
          var _a, _b, _c, _d;
          const arrayFormulaCellData = (_d = (_c = (_b = (_a = this._formulaDataModel.getArrayFormulaCellData()) == null ? void 0 : _a[pos.unitId]) == null ? void 0 : _b[pos.subUnitId]) == null ? void 0 : _c[pos.row]) == null ? void 0 : _d[pos.col];
          const errorType = extractFormulaError(cell, !!arrayFormulaCellData);
          if (!errorType) {
            return next(cell);
          }
          return next({
            ...cell,
            markers: {
              ...cell == null ? void 0 : cell.markers,
              ...FORMULA_ERROR_MARK
            }
          });
        },
        priority: 10
      }
    ));
  }
};
FormulaRenderManagerController = __decorateClass([
  __decorateParam(0, Inject(SheetInterceptorService)),
  __decorateParam(1, Inject(FormulaDataModel))
], FormulaRenderManagerController);

// ../packages/sheets-formula-ui/src/commands/commands/formula-clipboard.command.ts
var SheetOnlyPasteFormulaCommand = {
  id: "sheet.command.paste-formula",
  type: 0 /* COMMAND */,
  handler: async (accessor) => {
    const commandService = accessor.get(ICommandService);
    return commandService.executeCommand(SheetPasteCommand.id, {
      value: PREDEFINED_HOOK_NAME.SPECIAL_PASTE_FORMULA
    });
  }
};

// ../packages/sheets-formula-ui/src/commands/operations/editor-formula.operation.ts
var SelectEditorFormulaOperation = {
  id: "formula-ui.operation.select-editor-formula",
  type: 1 /* OPERATION */,
  handler: (accessor, params) => true
};

// ../packages/sheets-formula-ui/src/services/prompt.service.ts
var FORMULA_PROMPT_ACTIVATED = "FORMULA_PROMPT_ACTIVATED";
var IFormulaPromptService = createIdentifier("formula-ui.prompt-service");
var FormulaPromptService = class {
  constructor(_contextService) {
    this._contextService = _contextService;
    __publicField(this, "_search$", new Subject());
    __publicField(this, "_help$", new Subject());
    __publicField(this, "_navigate$", new Subject());
    __publicField(this, "_accept$", new Subject());
    __publicField(this, "_acceptFormulaName$", new Subject());
    __publicField(this, "search$", this._search$.asObservable());
    __publicField(this, "help$", this._help$.asObservable());
    __publicField(this, "navigate$", this._navigate$.asObservable());
    __publicField(this, "accept$", this._accept$.asObservable());
    __publicField(this, "acceptFormulaName$", this._acceptFormulaName$.asObservable());
    __publicField(this, "_searching", false);
    __publicField(this, "_helping", false);
    __publicField(this, "_sequenceNodes", []);
    __publicField(this, "_isLockedOnSelectionChangeRefString", false);
    __publicField(this, "_isLockedOnSelectionInsertRefString", false);
  }
  dispose() {
    this._search$.complete();
    this._help$.complete();
    this._navigate$.complete();
    this._accept$.complete();
    this._acceptFormulaName$.complete();
    this._sequenceNodes = [];
  }
  search(param) {
    this._contextService.setContextValue(FORMULA_PROMPT_ACTIVATED, param.visible);
    this._searching = param.visible;
    this._search$.next(param);
  }
  isSearching() {
    return this._searching;
  }
  help(param) {
    this._helping = param.visible;
    this._help$.next(param);
  }
  isHelping() {
    return this._helping;
  }
  navigate(param) {
    this._navigate$.next(param);
  }
  accept(param) {
    this._accept$.next(param);
  }
  acceptFormulaName(param) {
    this._acceptFormulaName$.next(param);
  }
  getSequenceNodes() {
    return [...this._sequenceNodes];
  }
  setSequenceNodes(nodes) {
    this._sequenceNodes = nodes;
  }
  clearSequenceNodes() {
    this._sequenceNodes = [];
  }
  getCurrentSequenceNode(strIndex) {
    return this._sequenceNodes[this.getCurrentSequenceNodeIndex(strIndex)];
  }
  getCurrentSequenceNodeByIndex(nodeIndex) {
    return this._sequenceNodes[nodeIndex];
  }
  /**
   * Query the text coordinates in the sequenceNodes and determine the actual insertion index.
   * @param strIndex
   */
  getCurrentSequenceNodeIndex(strIndex) {
    let nodeIndex = 0;
    const firstNode = this._sequenceNodes[0];
    for (let i = 0, len = this._sequenceNodes.length; i < len; i++) {
      const node = this._sequenceNodes[i];
      if (typeof node === "string") {
        nodeIndex++;
      } else {
        const { endIndex } = node;
        nodeIndex = endIndex;
      }
      if (strIndex <= nodeIndex) {
        if (typeof firstNode === "string" && strIndex !== 0) {
          return i + 1;
        }
        return i;
      }
    }
    return this._sequenceNodes.length;
  }
  /**
   * Synchronize the reference text based on the changes of the selection.
   * @param nodeIndex
   * @param refString
   */
  updateSequenceRef(nodeIndex, refString) {
    const node = this._sequenceNodes[nodeIndex];
    if (typeof node === "string" || node.nodeType !== 4 /* REFERENCE */) {
      return;
    }
    const difference = refString.length - node.token.length;
    const newNode = { ...node };
    newNode.token = refString;
    newNode.endIndex += difference;
    this._sequenceNodes[nodeIndex] = newNode;
    for (let i = nodeIndex + 1, len = this._sequenceNodes.length; i < len; i++) {
      const node2 = this._sequenceNodes[i];
      if (typeof node2 === "string") {
        continue;
      }
      const newNode2 = { ...node2 };
      newNode2.startIndex += difference;
      newNode2.endIndex += difference;
      this._sequenceNodes[i] = newNode2;
    }
  }
  /**
   * When the cursor is on the right side of a formula token,
   * you can add reference text to the formula by drawing a selection.
   * @param index
   * @param refString
   */
  insertSequenceRef(index, refString) {
    const refStringCount = refString.length;
    const nodeIndex = this.getCurrentSequenceNodeIndex(index);
    this._sequenceNodes.splice(nodeIndex, 0, {
      token: refString,
      startIndex: index,
      endIndex: index + refStringCount - 1,
      nodeType: 4 /* REFERENCE */
    });
    for (let i = nodeIndex + 1, len = this._sequenceNodes.length; i < len; i++) {
      const node = this._sequenceNodes[i];
      if (typeof node === "string") {
        continue;
      }
      const newNode = { ...node };
      newNode.startIndex += refStringCount;
      newNode.endIndex += refStringCount;
      this._sequenceNodes[i] = newNode;
    }
  }
  /**
   * Insert a string at the cursor position in the text corresponding to the sequenceNodes.
   * @param index
   * @param content
   */
  insertSequenceString(index, content) {
    const nodeIndex = this.getCurrentSequenceNodeIndex(index);
    const str = content.split("");
    this._sequenceNodes.splice(nodeIndex, 0, ...str);
    const contentCount = str.length;
    for (let i = nodeIndex + contentCount, len = this._sequenceNodes.length; i < len; i++) {
      const node = this._sequenceNodes[i];
      if (typeof node === "string") {
        continue;
      }
      const newNode = { ...node };
      newNode.startIndex += contentCount;
      newNode.endIndex += contentCount;
      this._sequenceNodes[i] = newNode;
    }
  }
  enableLockedSelectionChange() {
    this._isLockedOnSelectionChangeRefString = true;
  }
  disableLockedSelectionChange() {
    this._isLockedOnSelectionChangeRefString = false;
  }
  isLockedSelectionChange() {
    return this._isLockedOnSelectionChangeRefString;
  }
  enableLockedSelectionInsert() {
    this._isLockedOnSelectionInsertRefString = true;
  }
  disableLockedSelectionInsert() {
    this._isLockedOnSelectionInsertRefString = false;
  }
  isLockedSelectionInsert() {
    return this._isLockedOnSelectionInsertRefString;
  }
};
FormulaPromptService = __decorateClass([
  __decorateParam(0, IContextService)
], FormulaPromptService);

// ../packages/sheets-formula-ui/src/commands/operations/help-function.operation.ts
var HelpFunctionOperation = {
  id: "formula-ui.operation.help-function",
  type: 1 /* OPERATION */,
  handler: async (accessor, params) => {
    const promptService = accessor.get(IFormulaPromptService);
    promptService.help(params);
    return true;
  }
};

// ../packages/sheets-formula-ui/src/commands/operations/insert-function.operation.ts
var InsertFunctionOperation = {
  id: "formula-ui.operation.insert-function",
  type: 1 /* OPERATION */,
  // eslint-disable-next-line
  handler: async (accessor, params) => {
    var _a, _b;
    const selectionManagerService = accessor.get(SheetsSelectionsService);
    const editorService = accessor.get(IEditorService);
    const currentSelections = selectionManagerService.getCurrentSelections();
    if (!currentSelections || !currentSelections.length) {
      return false;
    }
    const target = getSheetCommandTarget(accessor.get(IUniverInstanceService));
    if (!target) return false;
    const { worksheet, unitId, subUnitId } = target;
    const cellMatrix = worksheet.getCellMatrix();
    const { value } = params;
    const commandService = accessor.get(ICommandService);
    const editorBridgeService = accessor.get(IEditorBridgeService);
    const list = [];
    const listOfRangeHasNumber = [];
    let editRange = null;
    let editRow = 0;
    let editColumn = 0;
    let editFormulaRangeString = "";
    if (currentSelections.length === 1 && (isSingleCell(currentSelections[0].range) || isMultiRowsColumnsRange(currentSelections[0].range) && rangeHasNoNumber(cellMatrix, currentSelections[0].range))) {
      const { range, primary } = currentSelections[0];
      const row = (_a = primary == null ? void 0 : primary.actualRow) != null ? _a : range.startRow;
      const column = (_b = primary == null ? void 0 : primary.actualColumn) != null ? _b : range.startColumn;
      editRange = range;
      editRow = row;
      editColumn = column;
      const refRange = findRefRange(cellMatrix, row, column);
      if (refRange) {
        editFormulaRangeString = serializeRange(refRange);
      }
    } else {
      currentSelections.some((selection) => {
        var _a2, _b2;
        const { range, primary } = selection;
        if (rangeHasNoNumber(cellMatrix, range)) {
          const row = (_a2 = primary == null ? void 0 : primary.actualRow) != null ? _a2 : range.startRow;
          const column = (_b2 = primary == null ? void 0 : primary.actualColumn) != null ? _b2 : range.startColumn;
          const refRange = findRefRange(cellMatrix, row, column);
          if (!refRange) {
            editRange = range;
            editRow = row;
            editColumn = column;
            return true;
          }
          const rangeString = serializeRange(refRange);
          const formulaString = `=${value}(${rangeString})`;
          list.push({
            range,
            primary: {
              row,
              column
            },
            formula: formulaString
          });
        } else {
          const { startRow, startColumn, endRow, endColumn } = range;
          if (startRow === endRow) {
            const blankCellColumn = findBlankCellOfRow(cellMatrix, startRow, endColumn, worksheet.getColumnCount() - 1);
            const newEndColumn = blankCellColumn === endColumn ? endColumn - 1 : endColumn;
            const rangeString = serializeRange({
              startRow,
              endRow,
              startColumn,
              endColumn: newEndColumn
            });
            const formulaString = `=${value}(${rangeString})`;
            listOfRangeHasNumber.push({
              range,
              primary: {
                row: startRow,
                column: blankCellColumn
              },
              formula: formulaString
            });
          } else {
            let maxBlankCellRow = -1;
            for (let c = startColumn; c <= endColumn; c++) {
              const blankCellRow = findBlankCellOfColumn(cellMatrix, c, endRow, worksheet.getRowCount() - 1);
              maxBlankCellRow = Math.max(maxBlankCellRow, blankCellRow);
            }
            const newEndRow = maxBlankCellRow === endRow ? endRow - 1 : endRow;
            for (let c = startColumn; c <= endColumn; c++) {
              const rangeString = serializeRange({
                startRow,
                endRow: newEndRow,
                startColumn: c,
                endColumn: c
              });
              const formulaString = `=${value}(${rangeString})`;
              listOfRangeHasNumber.push({
                range,
                primary: {
                  row: maxBlankCellRow,
                  column: c
                },
                formula: formulaString
              });
            }
          }
        }
        return false;
      });
    }
    if (editRange) {
      const destRange = getCellAtRowCol(editRow, editColumn, worksheet);
      const resultRange = {
        range: Rectangle.clone(editRange),
        primary: {
          startRow: destRange.startRow,
          startColumn: destRange.startColumn,
          endRow: destRange.endRow,
          endColumn: destRange.endColumn,
          actualRow: editRow,
          actualColumn: editColumn,
          isMerged: destRange.isMerged,
          isMergedMainCell: destRange.startRow === editRow && destRange.startColumn === editColumn
        }
      };
      const setSelectionParams = {
        unitId,
        subUnitId,
        selections: [resultRange]
      };
      await commandService.executeCommand(SetSelectionsOperation.id, setSelectionParams);
      const editor = editorService.getEditor(DOCS_NORMAL_EDITOR_UNIT_ID_KEY);
      const formulaEditor = editorService.getEditor(DOCS_FORMULA_BAR_EDITOR_UNIT_ID_KEY);
      commandService.syncExecuteCommand(SetCellEditVisibleOperation.id, {
        visible: true,
        unitId,
        eventType: 3 /* Dblclick */
      });
      const formulaText = `=${value}(${editFormulaRangeString}`;
      editor == null ? void 0 : editor.replaceText(formulaText);
      formulaEditor == null ? void 0 : formulaEditor.replaceText(formulaText, false);
    }
    if (list.length === 0 && listOfRangeHasNumber.length === 0) return false;
    return commandService.executeCommand(InsertFunctionCommand.id, {
      list,
      listOfRangeHasNumber
    });
  }
};
function findRefRange(cellMatrix, row, column) {
  const startRow = findStartRow(cellMatrix, row, column);
  if (startRow !== row) {
    return {
      startRow,
      endRow: row - 1,
      startColumn: column,
      endColumn: column
    };
  }
  const startColumn = findStartColumn(cellMatrix, row, column);
  if (startColumn !== column) {
    return {
      startRow: row,
      endRow: row,
      startColumn,
      endColumn: column - 1
    };
  }
  return null;
}
function findStartRow(cellMatrix, row, column) {
  let isFirstNumber = false;
  if (row === 0) return row;
  for (let r = row - 1; r >= 0; r--) {
    const cell = cellMatrix.getValue(r, column);
    if (isNumberCell(cell) && !isFirstNumber) {
      if (r === 0) return 0;
      isFirstNumber = true;
    } else if (isFirstNumber && !isNumberCell(cell)) {
      return r + 1;
    } else if (isFirstNumber && r === 0) {
      return 0;
    }
  }
  return row;
}
function findStartColumn(cellMatrix, row, column) {
  let isFirstNumber = false;
  if (column === 0) return column;
  for (let c = column - 1; c >= 0; c--) {
    const cell = cellMatrix.getValue(row, c);
    if (isNumberCell(cell) && !isFirstNumber) {
      if (c === 0) return 0;
      isFirstNumber = true;
    } else if (isFirstNumber && !isNumberCell(cell)) {
      return c + 1;
    } else if (isFirstNumber && c === 0) {
      return 0;
    }
  }
  return column;
}
function isNumberCell(cell) {
  if (cell == null ? void 0 : cell.p) {
    const body = cell == null ? void 0 : cell.p.body;
    if (body == null) {
      return false;
    }
    const data = body.dataStream;
    const lastString = data.substring(data.length - 2, data.length);
    const newDataStream = lastString === DEFAULT_EMPTY_DOCUMENT_VALUE ? data.substring(0, data.length - 2) : data;
    return isRealNum(newDataStream);
  }
  return cell && (cell.t === 2 /* NUMBER */ || getCellValueType(cell) === 2 /* NUMBER */);
}
function isSingleCell(range) {
  return range.startRow === range.endRow && range.startColumn === range.endColumn;
}
function isMultiRowsColumnsRange(range) {
  return range.startRow !== range.endRow && range.startColumn !== range.endColumn;
}
function rangeHasNoNumber(cellMatrix, range) {
  for (let i = range.startRow; i <= range.endRow; i++) {
    for (let j = range.startColumn; j <= range.endColumn; j++) {
      if (isNumberCell(cellMatrix.getValue(i, j))) {
        return false;
      }
    }
  }
  return true;
}
function findBlankCellOfRow(cellMatrix, row, startColumn, endColumn) {
  for (let c = startColumn; c <= endColumn; c++) {
    if (!cellMatrix.getValue(row, c)) {
      return c;
    }
  }
  return endColumn;
}
function findBlankCellOfColumn(cellMatrix, column, startRow, endRow) {
  for (let r = startRow; r <= endRow; r++) {
    if (!cellMatrix.getValue(r, column)) {
      return r;
    }
  }
  return endRow;
}

// ../packages/sheets-formula-ui/src/views/more-functions/interface.ts
var MORE_FUNCTIONS_COMPONENT = `${FORMULA_UI_PLUGIN_NAME}_MORE_FUNCTIONS_COMPONENT`;

// ../packages/sheets-formula-ui/src/commands/operations/more-functions.operation.ts
var MoreFunctionsOperation = {
  id: "formula-ui.operation.more-functions",
  type: 1 /* OPERATION */,
  handler: async (accessor) => {
    const sidebarService = accessor.get(ISidebarService);
    sidebarService.open({
      header: { title: "formula.insert.tooltip" },
      children: { label: MORE_FUNCTIONS_COMPONENT }
    });
    return true;
  }
};

// ../packages/sheets-formula-ui/src/commands/operations/reference-absolute.operation.ts
var ReferenceAbsoluteOperation = {
  id: "formula-ui.operation.change-ref-to-absolute",
  type: 1 /* OPERATION */,
  handler: async (accessor) => true
};

// ../packages/sheets-formula-ui/src/commands/operations/search-function.operation.ts
var SearchFunctionOperation = {
  id: "formula-ui.operation.search-function",
  type: 1 /* OPERATION */,
  handler: async (accessor, params) => {
    const promptService = accessor.get(IFormulaPromptService);
    promptService.search(params);
    return true;
  }
};

// ../packages/sheets-formula-ui/src/views/formula-progress/FormulaProgress.tsx
var import_react = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
function FormulaProgressBar() {
  const triggerCalculationController = useDependency(TriggerCalculationController);
  const commandService = useDependency(ICommandService);
  const progress = useObservable(triggerCalculationController.progress$);
  const terminateCalculation = (0, import_react.useCallback)(() => {
    commandService.executeCommand(SetFormulaCalculationStopMutation.id);
  }, [commandService]);
  const clearProgress = (0, import_react.useCallback)(() => {
    triggerCalculationController.clearProgress();
  }, [triggerCalculationController]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar, { progress, onTerminate: terminateCalculation, onClearProgress: clearProgress });
}

// ../packages/sheets-formula-ui/src/views/prompt/help-function/HelpFunction.tsx
var import_react3 = __toESM(require_react());

// ../packages/sheets-formula-ui/src/services/utils.ts
function getFunctionTypeValues(enumObj, localeService) {
  return Object.keys(enumObj).filter((key) => isNaN(Number(key)) && key !== "DefinedName").map((key) => ({
    label: localeService.t(`formula.functionType.${key.toLocaleLowerCase()}`),
    value: `${enumObj[key]}`
  }));
}
function generateParam(param) {
  if (!param.require && !param.repeat) {
    return `[${param.name}]`;
  } else if (param.require && !param.repeat) {
    return param.name;
  } else if (!param.require && param.repeat) {
    return `[${param.name},...]`;
  } else if (param.require && param.repeat) {
    return `${param.name},...`;
  }
}

// ../packages/sheets-formula-ui/src/views/prompt/resize-scroll-observer.ts
var import_react2 = __toESM(require_react());
var useResizeScrollObserver = (callback, delay = 100) => {
  (0, import_react2.useEffect)(() => {
    let throttleTimeout = null;
    const throttledCallback = () => {
      if (throttleTimeout === null) {
        throttleTimeout = window.setTimeout(() => {
          callback();
          throttleTimeout = null;
        }, delay);
      }
    };
    window.addEventListener("scroll", throttledCallback);
    window.addEventListener("resize", throttledCallback);
    return () => {
      if (throttleTimeout !== null) {
        clearTimeout(throttleTimeout);
      }
      window.removeEventListener("scroll", throttledCallback);
      window.removeEventListener("resize", throttledCallback);
    };
  }, [callback, delay]);
};

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages/sheets-formula-ui/src/views/prompt/help-function/index.module.less
var index_module_default = {
  "formulaHelpFunction": "univer-formula-help-function",
  "formulaHelpFunctionTitle": "univer-formula-help-function-title",
  "formulaHelpFunctionTitleIcons": "univer-formula-help-function-title-icons",
  "formulaHelpFunctionTitleIcon": "univer-formula-help-function-title-icon",
  "formulaHelpFunctionContent": "univer-formula-help-function-content",
  "formulaHelpFunctionContentInner": "univer-formula-help-function-content-inner",
  "formulaHelpFunctionContentParams": "univer-formula-help-function-content-params",
  "formulaHelpFunctionContentParamsTitle": "univer-formula-help-function-content-params-title",
  "formulaHelpFunctionContentParamsDetail": "univer-formula-help-function-content-params-detail",
  "formulaHelpFunctionActive": "univer-formula-help-function-active",
  "formulaHelpDecorator": "univer-formula-help-decorator",
  "formulaHelpParam": "univer-formula-help-param",
  "formulaHelpParamPrefix": "univer-formula-help-param-prefix",
  "formulaHelpParamItem": "univer-formula-help-param-item",
  "formulaHelpParamActive": "univer-formula-help-param-active"
};

// ../packages/sheets-formula-ui/src/views/prompt/help-function/HelpFunction.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
function HelpFunction() {
  const [visible, setVisible] = (0, import_react3.useState)(false);
  const [contentVisible, setContentVisible] = (0, import_react3.useState)(true);
  const [helpVisible, setHelpVisible] = (0, import_react3.useState)(true);
  const [paramIndex, setParamIndex] = (0, import_react3.useState)(0);
  const [offset, setOffset] = (0, import_react3.useState)([0, 0]);
  const [decoratorPosition, setDecoratorPosition] = (0, import_react3.useState)({ left: 0, top: 0 });
  const [functionInfo, setFunctionInfo] = (0, import_react3.useState)(null);
  const promptService = useDependency(IFormulaPromptService);
  const localeService = useDependency(LocaleService);
  const required = localeService.t("formula.prompt.required");
  const optional = localeService.t("formula.prompt.optional");
  const univerInstanceService = useDependency(IUniverInstanceService);
  const editorService = useDependency(IEditorService);
  const sidebarService = useDependency(ISidebarService);
  const injector = useInjector();
  useResizeScrollObserver(updatePosition);
  (0, import_react3.useEffect)(() => {
    const subscription = promptService.help$.subscribe((params) => {
      const { visible: visible2, paramIndex: paramIndex2, functionInfo: functionInfo2 } = params;
      if (!visible2) {
        setVisible(visible2);
        return;
      }
      const position = getPosition();
      if (position == null) {
        return;
      }
      const { left, top, height } = position;
      if (functionInfo2.description === "" && functionInfo2.functionParameter.length === 0) {
        return;
      }
      setOffset([left, top + height]);
      setParamIndex(paramIndex2);
      setFunctionInfo(functionInfo2);
      setDecoratorPosition({ left, top });
      setVisible(visible2);
    });
    const sidebarSubscription = sidebarService.scrollEvent$.pipe(throttleTime(100)).subscribe(updatePosition);
    return () => {
      subscription == null ? void 0 : subscription.unsubscribe();
      sidebarSubscription.unsubscribe();
    };
  }, []);
  function updatePosition() {
    if (!helpVisible) {
      return;
    }
    const position = getPosition();
    if (position == null) {
      return;
    }
    const { left, top, height } = position;
    setOffset([left, top + height]);
  }
  function getPosition() {
    const documentDataModel = univerInstanceService.getCurrentUniverDocInstance();
    if (!documentDataModel) {
      return;
    }
    const editorUnitId = documentDataModel.getUnitId();
    if (!editorService.isEditor(editorUnitId)) {
      return;
    }
    const editor = editorService.getEditor(editorUnitId);
    return editor == null ? void 0 : editor.getBoundingClientRect();
  }
  function handleSwitchActive(paramIndex2) {
    setParamIndex(paramIndex2);
  }
  function handleClose() {
    setHelpVisible(!helpVisible);
    const layoutService = injector.get(ILayoutService);
    layoutService.focus();
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: helpVisible ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Popup, { visible, offset, children: functionInfo ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: index_module_default.formulaHelpFunction, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: index_module_default.formulaHelpFunctionTitle, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        Help,
        {
          prefix: functionInfo.functionName,
          value: functionInfo.functionParameter,
          active: paramIndex,
          onClick: handleSwitchActive
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: index_module_default.formulaHelpFunctionTitleIcons, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "div",
          {
            className: index_module_default.formulaHelpFunctionTitleIcon,
            style: { transform: contentVisible ? "rotateZ(-90deg)" : "rotateZ(90deg)" },
            onClick: () => setContentVisible(!contentVisible),
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(more_single_default, {})
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "div",
          {
            className: index_module_default.formulaHelpFunctionTitleIcon,
            onClick: handleClose,
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(close_single_default, {})
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "div",
      {
        className: index_module_default.formulaHelpFunctionContent,
        style: {
          height: contentVisible ? "unset" : 0,
          padding: contentVisible ? "revert-layer" : 0
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: index_module_default.formulaHelpFunctionContentInner, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            Params,
            {
              title: localeService.t("formula.prompt.helpExample"),
              value: `${functionInfo.functionName}(${functionInfo.functionParameter.map((item) => item.example).join(",")})`
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            Params,
            {
              title: localeService.t("formula.prompt.helpAbstract"),
              value: functionInfo.description
            }
          ),
          functionInfo && functionInfo.functionParameter && functionInfo.functionParameter.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            Params,
            {
              className: paramIndex === i ? index_module_default.formulaHelpFunctionActive : "",
              title: item.name,
              value: `${item.require ? required : optional} ${item.detail}`
            },
            i
          ))
        ] })
      }
    )
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, {}) }) : visible ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      className: index_module_default.formulaHelpDecorator,
      onClick: () => setHelpVisible(!helpVisible),
      style: { left: decoratorPosition.left - 24, top: decoratorPosition.top },
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(details_single_default, {})
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, {}) });
}
var Params = (props) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: index_module_default.formulaHelpFunctionContentParams, children: [
  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      className: `
          ${index_module_default.formulaHelpFunctionContentParamsTitle}
          ${props.className}
        `,
      children: props.title
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: index_module_default.formulaHelpFunctionContentParamsDetail, children: props.value })
] });
var Help = (props) => {
  const { prefix, value, active, onClick } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: index_module_default.formulaHelpParam, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: index_module_default.formulaHelpParamPrefix, children: [
      prefix,
      "("
    ] }),
    value && value.map((item, i) => (
      // TODO@Dushusir: more params needs to be active
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: index_module_default.formulaHelpParamItem, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "span",
          {
            className: active === i ? index_module_default.formulaHelpFunctionActive : index_module_default.formulaHelpParamActive,
            onClick: () => onClick(i),
            children: generateParam(item)
          }
        ),
        i === value.length - 1 ? "" : ","
      ] }, i)
    )),
    ")"
  ] });
};

// ../packages/sheets-formula-ui/src/views/prompt/search-function/SearchFunction.tsx
var import_react4 = __toESM(require_react());

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages/sheets-formula-ui/src/views/prompt/search-function/index.module.less
var index_module_default2 = {
  "formulaSearchFunction": "univer-formula-search-function",
  "formulaSearchFunctionItem": "univer-formula-search-function-item",
  "formulaSearchFunctionItemName": "univer-formula-search-function-item-name",
  "formulaSearchFunctionItemNameLight": "univer-formula-search-function-item-name-light",
  "formulaSearchFunctionItemDesc": "univer-formula-search-function-item-desc",
  "formulaSearchFunctionItemActive": "univer-formula-search-function-item-active"
};

// ../packages/sheets-formula-ui/src/views/prompt/search-function/SearchFunction.tsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
function SearchFunction() {
  const [visible, setVisible] = (0, import_react4.useState)(false);
  const [active, setActive] = (0, import_react4.useState)(0);
  const [offset, setOffset] = (0, import_react4.useState)([0, 0]);
  const [searchList, setSearchList] = (0, import_react4.useState)([]);
  const [searchText, setSearchText] = (0, import_react4.useState)("");
  const ulRef = (0, import_react4.useRef)(null);
  const promptService = useDependency(IFormulaPromptService);
  const univerInstanceService = useDependency(IUniverInstanceService);
  const editorService = useDependency(IEditorService);
  (0, import_react4.useEffect)(() => {
    let updatedSearchList = [];
    let updatedActive = 0;
    const subscribeSearch = promptService.search$.subscribe((params) => {
      const { visible: visible2, searchText: searchText2, searchList: searchList2 } = params;
      if (!visible2) {
        setVisible(visible2);
        return;
      }
      const position = getPosition();
      if (position == null) {
        return;
      }
      const { left, top, height } = position;
      setSearchText(searchText2);
      setSearchList(searchList2);
      updatedSearchList = searchList2;
      setOffset([left, top + height]);
      setVisible(visible2);
      setActive(0);
      updatedActive = 0;
    });
    const subscribeNavigate = promptService.navigate$.subscribe((params) => {
      const { direction } = params;
      if (direction === 0 /* UP */) {
        let nextActive = updatedActive - 1;
        nextActive = nextActive < 0 ? updatedSearchList.length - 1 : nextActive;
        setActive(nextActive);
        updatedActive = nextActive;
      } else if (direction === 2 /* DOWN */) {
        let nextActive = updatedActive + 1;
        nextActive = nextActive >= updatedSearchList.length ? 0 : nextActive;
        setActive(nextActive);
        updatedActive = nextActive;
      }
      scrollToVisible(updatedActive);
    });
    const subscribeAccept = promptService.accept$.subscribe((params) => {
      const functionName = updatedSearchList[updatedActive].name;
      promptService.acceptFormulaName(functionName);
    });
    return () => {
      subscribeSearch == null ? void 0 : subscribeSearch.unsubscribe();
      subscribeNavigate == null ? void 0 : subscribeNavigate.unsubscribe();
      subscribeAccept == null ? void 0 : subscribeAccept.unsubscribe();
    };
  }, []);
  function getPosition() {
    const documentDataModel = univerInstanceService.getCurrentUniverDocInstance();
    const editorUnitId = documentDataModel.getUnitId();
    if (!editorService.isEditor(editorUnitId)) {
      return;
    }
    const editor = editorService.getEditor(editorUnitId);
    return editor == null ? void 0 : editor.getBoundingClientRect();
  }
  function handleLiMouseEnter(index) {
    setActive(index);
  }
  function handleLiMouseLeave() {
    setActive(-1);
  }
  function scrollToVisible(liIndex) {
    var _a;
    const liElement = (_a = ulRef.current) == null ? void 0 : _a.querySelectorAll(`.${index_module_default2.formulaSearchFunctionItem}`)[liIndex];
    if (!liElement) return;
    const ulElement = liElement.parentNode;
    if (!ulElement) return;
    const ulRect = ulElement.getBoundingClientRect();
    const ulTop = ulRect.top;
    const ulHeight = ulElement.offsetHeight;
    const liRect = liElement.getBoundingClientRect();
    const liTop = liRect.top;
    const liHeight = liRect.height;
    if (liTop >= 0 && liTop > ulTop && liTop - ulTop + liHeight <= ulHeight) {
      return;
    }
    const scrollTo = liElement.offsetTop - (ulHeight - liHeight) / 2;
    ulElement.scrollTo({
      top: scrollTo,
      behavior: "smooth"
    });
  }
  return searchList.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Popup, { visible, offset, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("ul", { className: index_module_default2.formulaSearchFunction, ref: ulRef, children: searchList.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "li",
    {
      className: active === index ? `
                              ${index_module_default2.formulaSearchFunctionItem}
                              ${index_module_default2.formulaSearchFunctionItemActive}
                            ` : index_module_default2.formulaSearchFunctionItem,
      onMouseEnter: () => handleLiMouseEnter(index),
      onMouseLeave: handleLiMouseLeave,
      onClick: () => promptService.acceptFormulaName(item.name),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: index_module_default2.formulaSearchFunctionItemName, children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: index_module_default2.formulaSearchFunctionItemNameLight, children: item.name.substring(0, searchText.length) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: item.name.slice(searchText.length) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: index_module_default2.formulaSearchFunctionItemDesc, children: item.desc })
      ]
    },
    index
  )) }) });
}

// ../packages/sheets-formula-ui/src/views/FormulaPromptContainer.tsx
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
function RenderFormulaPromptContent() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SearchFunction, {}),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(HelpFunction, {})
  ] });
}

// ../packages/sheets-formula-ui/src/views/more-functions/MoreFunctions.tsx
var import_react7 = __toESM(require_react());

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages/sheets-formula-ui/src/views/more-functions/index.module.less
var index_module_default3 = {
  "formulaMoreFunctions": "univer-formula-more-functions",
  "formulaMoreFunctionsOperation": "univer-formula-more-functions-operation"
};

// ../packages/sheets-formula-ui/src/views/more-functions/input-params/InputParams.tsx
var import_react5 = __toESM(require_react());

// ../packages/sheets-formula-ui/src/views/more-functions/function-help/FunctionHelp.tsx
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
function FunctionHelp(props) {
  const { prefix, value } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("span", { children: [
      prefix,
      "("
    ] }),
    value && value.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("span", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: generateParam(item) }),
      i === value.length - 1 ? "" : ","
    ] }, i)),
    ")"
  ] });
}

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages/sheets-formula-ui/src/views/more-functions/function-params/index.module.less
var index_module_default4 = {
  "formulaFunctionParams": "univer-formula-function-params",
  "formulaFunctionParamsTitle": "univer-formula-function-params-title",
  "formulaFunctionParamsDetail": "univer-formula-function-params-detail"
};

// ../packages/sheets-formula-ui/src/views/more-functions/function-params/FunctionParams.tsx
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
function FunctionParams(props) {
  const { className, value, title } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: index_module_default4.formulaFunctionParams, children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "div",
      {
        className: `
              ${index_module_default4.formulaFunctionParamsTitle}
              ${className}
            `,
        children: title
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: index_module_default4.formulaFunctionParamsDetail, children: value })
  ] });
}

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages/sheets-formula-ui/src/views/more-functions/input-params/index.module.less
var index_module_default5 = {
  "formulaInputParamsList": "univer-formula-input-params-list",
  "formulaInputParamsListItemName": "univer-formula-input-params-list-item-name",
  "formulaInputParamsListItemSelector": "univer-formula-input-params-list-item-selector"
};

// ../packages/sheets-formula-ui/src/views/more-functions/input-params/InputParams.tsx
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
function InputParams(props) {
  const { functionInfo, onChange } = props;
  if (!functionInfo) return null;
  const [params, setParams] = (0, import_react5.useState)([]);
  const [functionParameter, setFunctionParameter] = (0, import_react5.useState)(functionInfo.functionParameter);
  const [activeIndex, setActiveIndex] = (0, import_react5.useState)(-1);
  function handleChange(range, paramIndex) {
    const newParams = [...params];
    newParams[paramIndex] = range;
    setParams(newParams);
    onChange(newParams);
  }
  function handleActive(i) {
    if (i === functionParameter.length - 1 && functionParameter[i].repeat) {
      const newFunctionParameter = [...functionParameter];
      newFunctionParameter.push(functionParameter[i]);
      setFunctionParameter(newFunctionParameter);
    }
    setActiveIndex(i);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: index_module_default5.formulaInputParams, children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: index_module_default5.formulaInputParamsList, children: functionParameter.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: index_module_default5.formulaInputParamsListItemName, children: item.name }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: index_module_default5.formulaInputParamsListItemSelector })
    ] }, i)) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: index_module_default5.formulaInputParamsInfo, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      FunctionParams,
      {
        title: activeIndex === -1 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(FunctionHelp, { prefix: functionInfo.functionName, value: functionParameter }) : functionParameter[activeIndex].name,
        value: activeIndex === -1 ? functionInfo.description : functionParameter[activeIndex].detail
      }
    ) })
  ] });
}

// ../packages/sheets-formula-ui/src/views/more-functions/select-function/SelectFunction.tsx
var import_react6 = __toESM(require_react());

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages/sheets-formula-ui/src/views/more-functions/select-function/index.module.less
var index_module_default6 = {
  "formulaSelectFunctionSelect": "univer-formula-select-function-select",
  "formulaSelectFunctionResult": "univer-formula-select-function-result",
  "formulaSelectFunctionResultItem": "univer-formula-select-function-result-item",
  "formulaSelectFunctionResultItemNameLight": "univer-formula-select-function-result-item-name-light",
  "formulaSelectFunctionResultItemSelected": "univer-formula-select-function-result-item-selected",
  "formulaSelectFunctionResultItemActive": "univer-formula-select-function-result-item-active",
  "formulaSelectFunctionContent": "univer-formula-select-function-content"
};

// ../packages/sheets-formula-ui/src/views/more-functions/select-function/SelectFunction.tsx
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
function SelectFunction(props) {
  const { onChange } = props;
  const allTypeValue = "-1";
  const [searchText, setSearchText] = (0, import_react6.useState)("");
  const [selectList, setSelectList] = (0, import_react6.useState)([]);
  const [active, setActive] = (0, import_react6.useState)(0);
  const [typeSelected, setTypeSelected] = (0, import_react6.useState)(allTypeValue);
  const [nameSelected, setNameSelected] = (0, import_react6.useState)(0);
  const [functionInfo, setFunctionInfo] = (0, import_react6.useState)(null);
  const descriptionService = useDependency(IDescriptionService);
  const localeService = useDependency(LocaleService);
  const sidebarService = useDependency(ISidebarService);
  const sidebarOptions = useObservable(sidebarService.sidebarOptions$);
  const options = getFunctionTypeValues(FunctionType, localeService);
  options.unshift({
    label: localeService.t("formula.moreFunctions.allFunctions"),
    value: allTypeValue
  });
  const required = localeService.t("formula.prompt.required");
  const optional = localeService.t("formula.prompt.optional");
  (0, import_react6.useEffect)(() => {
    handleSelectChange(allTypeValue);
  }, []);
  (0, import_react6.useEffect)(() => {
    setCurrentFunctionInfo(0);
  }, [selectList]);
  (0, import_react6.useEffect)(() => {
    if (sidebarOptions == null ? void 0 : sidebarOptions.visible) {
      setSearchText("");
      setSelectList([]);
      setActive(0);
      setTypeSelected(allTypeValue);
      setNameSelected(0);
      setFunctionInfo(null);
      handleSelectChange(allTypeValue);
    }
  }, [sidebarOptions]);
  const highlightSearchText = (text) => {
    if (searchText.trim() === "") return text;
    const regex = new RegExp(`(${searchText.toLocaleUpperCase()})`);
    const parts = text.split(regex).filter(Boolean);
    return parts.map((part, index) => {
      if (part.match(regex)) {
        return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: index_module_default6.formulaSelectFunctionResultItemNameLight, children: part }, index);
      }
      return part;
    });
  };
  const setCurrentFunctionInfo = (selectedIndex) => {
    if (selectList.length === 0) {
      setFunctionInfo(null);
      return;
    }
    setNameSelected(selectedIndex);
    const functionInfo2 = descriptionService.getFunctionInfo(selectList[selectedIndex].name);
    if (!functionInfo2) {
      setFunctionInfo(null);
      return;
    }
    setFunctionInfo(functionInfo2);
    onChange(functionInfo2);
  };
  function handleSelectChange(value) {
    setTypeSelected(value);
    const selectList2 = descriptionService.getSearchListByType(+value);
    setSelectList(selectList2);
  }
  function handleSearchInputChange(value) {
    setSearchText(value);
    const selectList2 = descriptionService.getSearchListByName(value);
    setSelectList(selectList2);
  }
  function handleSelectListKeyDown(e) {
    e.stopPropagation();
    if (e.key === "ArrowDown") {
      const nextActive = active + 1;
      setActive(nextActive === selectList.length ? 0 : nextActive);
    } else if (e.key === "ArrowUp") {
      const nextActive = active - 1;
      setActive(nextActive === -1 ? selectList.length - 1 : nextActive);
    } else if (e.key === "Enter") {
      setCurrentFunctionInfo(active);
    }
  }
  const handleLiMouseEnter = (index) => {
    setActive(index);
  };
  const handleLiMouseLeave = () => {
    setActive(-1);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: index_module_default6.formulaSelectFunctionSelect, children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Select, { value: typeSelected, options, onChange: handleSelectChange }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        Input,
        {
          placeholder: localeService.t("formula.moreFunctions.searchFunctionPlaceholder"),
          onKeyDown: handleSelectListKeyDown,
          value: searchText,
          onChange: handleSearchInputChange,
          size: "small",
          allowClear: true
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("ul", { className: index_module_default6.formulaSelectFunctionResult, onKeyDown: handleSelectListKeyDown, tabIndex: -1, children: selectList.map(({ name }, index) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
      "li",
      {
        className: active === index ? `
                              ${index_module_default6.formulaSelectFunctionResultItem}
                              ${index_module_default6.formulaSelectFunctionResultItemActive}
                            ` : index_module_default6.formulaSelectFunctionResultItem,
        onMouseEnter: () => handleLiMouseEnter(index),
        onMouseLeave: handleLiMouseLeave,
        onClick: () => setCurrentFunctionInfo(index),
        children: [
          nameSelected === index && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(check_mark_single_default, { className: index_module_default6.formulaSelectFunctionResultItemSelected }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: index_module_default6.formulaSelectFunctionResultItemName, children: highlightSearchText(name) })
        ]
      },
      index
    )) }),
    functionInfo && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: index_module_default6.formulaSelectFunctionContent, children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(FunctionParams, { title: functionInfo.functionName, value: functionInfo.description }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        FunctionParams,
        {
          title: localeService.t("formula.moreFunctions.syntax"),
          value: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(FunctionHelp, { prefix: functionInfo.functionName, value: functionInfo.functionParameter })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        FunctionParams,
        {
          title: localeService.t("formula.prompt.helpExample"),
          value: `${functionInfo.functionName}(${functionInfo.functionParameter.map((item) => item.example).join(",")})`
        }
      ),
      functionInfo.functionParameter && functionInfo.functionParameter.map((item) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        FunctionParams,
        {
          title: item.name,
          value: `${item.require ? required : optional} ${item.detail}`
        },
        item.name
      ))
    ] })
  ] });
}

// ../packages/sheets-formula-ui/src/views/more-functions/MoreFunctions.tsx
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
function MoreFunctions() {
  const workbook = useActiveWorkbook();
  const [selectFunction, setSelectFunction] = (0, import_react7.useState)(true);
  const [inputParams, setInputParams] = (0, import_react7.useState)(false);
  const [functionInfo, setFunctionInfo] = (0, import_react7.useState)(null);
  const editorBridgeService = useDependency(IEditorBridgeService);
  const localeService = useDependency(LocaleService);
  const editorService = useDependency(IEditorService);
  const univerInstanceService = useDependency(IUniverInstanceService);
  const commandService = useDependency(ICommandService);
  function handleClickNextPrev() {
    if (selectFunction) {
    }
    setSelectFunction(!selectFunction);
    setInputParams(!inputParams);
  }
  function handleConfirm() {
    const sheetTarget = getSheetCommandTarget(univerInstanceService);
    if (!sheetTarget) return;
    commandService.executeCommand(SetCellEditVisibleOperation.id, {
      visible: true,
      unitId: sheetTarget.unitId,
      eventType: 3 /* Dblclick */
    });
    const editor = editorService.getEditor(DOCS_NORMAL_EDITOR_UNIT_ID_KEY);
    const formulaEditor = editorService.getEditor(DOCS_FORMULA_BAR_EDITOR_UNIT_ID_KEY);
    const formulaText = `=${functionInfo == null ? void 0 : functionInfo.functionName}(`;
    editor == null ? void 0 : editor.replaceText(formulaText);
    formulaEditor == null ? void 0 : formulaEditor.replaceText(formulaText, false);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: index_module_default3.formulaMoreFunctions, children: [
    selectFunction && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SelectFunction, { onChange: setFunctionInfo }),
    inputParams && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(InputParams, { functionInfo, onChange: () => {
    } }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: index_module_default3.formulaMoreFunctionsOperation, children: [
      inputParams && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { type: "primary", size: "small", onClick: handleClickNextPrev, children: localeService.t("formula.moreFunctions.next") }),
      inputParams && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { size: "small", onClick: handleClickNextPrev, children: localeService.t("formula.moreFunctions.prev") }),
      selectFunction && !!workbook && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { type: "primary", size: "small", onClick: handleConfirm, children: localeService.t("formula.moreFunctions.confirm") })
    ] })
  ] });
}

// ../packages/sheets-formula-ui/src/controllers/menu.ts
function InsertFunctionMenuItemFactory(accessor) {
  return {
    id: InsertFunctionOperation.id,
    icon: "FunctionSingle",
    tooltip: "formula.insert.tooltip",
    type: 1 /* SELECTOR */,
    selections: [
      {
        label: {
          name: "SUM",
          selectable: false
        },
        value: "SUM",
        icon: "SumSingle"
      },
      {
        label: {
          name: "AVERAGE",
          selectable: false
        },
        value: "AVERAGE",
        icon: "AvgSingle"
      },
      {
        label: {
          name: "COUNT",
          selectable: false
        },
        value: "COUNT",
        icon: "CntSingle"
      },
      {
        label: {
          name: "MAX",
          selectable: false
        },
        value: "MAX",
        icon: "MaxSingle"
      },
      {
        label: {
          name: "MIN",
          selectable: false
        },
        value: "MIN",
        icon: "MinSingle"
      }
    ],
    hidden$: getMenuHiddenObservable(accessor, O.UNIVER_SHEET),
    disabled$: getCurrentRangeDisable$(accessor, { workbookTypes: [WorkbookEditablePermission], worksheetTypes: [WorksheetEditPermission, WorksheetSetCellValuePermission], rangeTypes: [RangeProtectionPermissionEditPoint] })
  };
}
function MoreFunctionsMenuItemFactory(accessor) {
  return {
    id: MoreFunctionsOperation.id,
    title: "formula.insert.more",
    type: 0 /* BUTTON */
  };
}
function menuClipboardDisabledObservable(injector) {
  const univerInstanceService = injector.get(IUniverInstanceService);
  const workbook$ = univerInstanceService.getCurrentTypeOfUnit$(O.UNIVER_SHEET);
  return workbook$.pipe(
    switchMap((workbook) => {
      if (!workbook) {
        return of(true);
      }
      const clipboardInterfaceService = injector.get(IClipboardInterfaceService);
      if (clipboardInterfaceService) {
        return new Observable((subscriber) => subscriber.next(!injector.get(IClipboardInterfaceService).supportClipboard));
      }
      return of(true);
    })
  );
}
function PasteFormulaMenuItemFactory(accessor) {
  return {
    id: SheetOnlyPasteFormulaCommand.id,
    type: 0 /* BUTTON */,
    title: "formula.operation.pasteFormula",
    disabled$: menuClipboardDisabledObservable(accessor).pipe(
      combineLatestWith(getCurrentRangeDisable$(accessor, { workbookTypes: [WorkbookEditablePermission], rangeTypes: [RangeProtectionPermissionEditPoint], worksheetTypes: [WorksheetSetCellValuePermission, WorksheetEditPermission] })),
      map(([d1, d2]) => d1 || d2)
    )
  };
}

// ../packages/sheets-formula-ui/src/controllers/menu.schema.ts
var menuSchema = {
  ["ribbon.start.insert" /* FORMULAS_INSERT */]: {
    [InsertFunctionOperation.id]: {
      order: 1,
      menuItemFactory: InsertFunctionMenuItemFactory,
      [MoreFunctionsOperation.id]: {
        order: 1,
        menuItemFactory: MoreFunctionsMenuItemFactory
      }
    }
  },
  [PASTE_SPECIAL_MENU_ID]: {
    [SheetOnlyPasteFormulaCommand.id]: {
      order: 4,
      menuItemFactory: PasteFormulaMenuItemFactory
    }
  }
};

// ../packages/sheets-formula-ui/src/common/prompt.ts
var META_KEY_CTRL_AND_SHIFT = "meta_key_ctrl_And_Shift";

// ../packages/sheets-formula-ui/src/controllers/shortcuts/prompt.shortcut.ts
var PROMPT_SELECTION_KEYCODE_ARROW_LIST = [
  40 /* ARROW_DOWN */,
  38 /* ARROW_UP */,
  37 /* ARROW_LEFT */,
  39 /* ARROW_RIGHT */
];
var PROMPT_SELECTION_KEYCODE_LIST = [...PROMPT_SELECTION_KEYCODE_ARROW_LIST, 13 /* ENTER */, 9 /* TAB */, 27 /* ESC */];
function promptSelectionShortcutItem() {
  const shortcutList = [];
  for (const keycode of PROMPT_SELECTION_KEYCODE_LIST) {
    shortcutList.push({
      id: SelectEditorFormulaOperation.id,
      binding: keycode,
      preconditions: (contextService) => whenFormulaEditorActivated(contextService),
      staticParameters: {
        eventType: 4 /* Keyboard */,
        keycode
      }
    });
  }
  return shortcutList;
}
function promptSelectionShortcutItemShift() {
  const shortcutList = [];
  for (const keycode of PROMPT_SELECTION_KEYCODE_ARROW_LIST) {
    shortcutList.push({
      id: SelectEditorFormulaOperation.id,
      binding: keycode | 1024 /* SHIFT */,
      preconditions: (contextService) => whenFormulaEditorActivated(contextService),
      staticParameters: {
        eventType: 4 /* Keyboard */,
        keycode,
        metaKey: 1024 /* SHIFT */
      }
    });
  }
  return shortcutList;
}
function promptSelectionShortcutItemCtrl() {
  const shortcutList = [];
  for (const keycode of PROMPT_SELECTION_KEYCODE_ARROW_LIST) {
    shortcutList.push({
      id: SelectEditorFormulaOperation.id,
      binding: keycode | 4096 /* CTRL_COMMAND */,
      preconditions: (contextService) => whenFormulaEditorActivated(contextService),
      staticParameters: {
        eventType: 4 /* Keyboard */,
        keycode,
        metaKey: 4096 /* CTRL_COMMAND */
      }
    });
  }
  return shortcutList;
}
function promptSelectionShortcutItemCtrlAndShift() {
  const shortcutList = [];
  for (const keycode of PROMPT_SELECTION_KEYCODE_ARROW_LIST) {
    shortcutList.push({
      id: SelectEditorFormulaOperation.id,
      binding: keycode | 1024 /* SHIFT */ | 4096 /* CTRL_COMMAND */,
      preconditions: (contextService) => whenFormulaEditorActivated(contextService),
      staticParameters: {
        eventType: 4 /* Keyboard */,
        keycode,
        metaKey: META_KEY_CTRL_AND_SHIFT
      }
    });
  }
  return shortcutList;
}
var ChangeRefToAbsoluteShortcut = {
  id: ReferenceAbsoluteOperation.id,
  binding: 115 /* F4 */,
  preconditions: (contextService) => whenFormulaEditorActivated(contextService)
};
function singleEditorPromptSelectionShortcutItem() {
  const shortcutList = [];
  for (const keycode of [13 /* ENTER */, 9 /* TAB */, 40 /* ARROW_DOWN */, 38 /* ARROW_UP */]) {
    shortcutList.push({
      id: SelectEditorFormulaOperation.id,
      binding: keycode,
      preconditions: (contextService) => whenEditorStandalone(contextService),
      staticParameters: {
        eventType: 4 /* Keyboard */,
        keycode,
        isSingleEditor: true
      }
    });
  }
  return shortcutList;
}

// ../packages/sheets-formula-ui/src/controllers/formula-ui.controller.ts
var FormulaUIController = class extends Disposable {
  constructor(_injector, _menuManagerService, _commandService, _shortcutService, _uiPartsService, _renderManagerService, _componentManager) {
    super();
    this._injector = _injector;
    this._menuManagerService = _menuManagerService;
    this._commandService = _commandService;
    this._shortcutService = _shortcutService;
    this._uiPartsService = _uiPartsService;
    this._renderManagerService = _renderManagerService;
    this._componentManager = _componentManager;
    this._initialize();
  }
  _initialize() {
    this._registerCommands();
    this._registerMenus();
    this._registerShortcuts();
    this._registerComponents();
    this._registerRenderModules();
  }
  _registerMenus() {
    this._menuManagerService.mergeMenu(menuSchema);
  }
  _registerCommands() {
    [
      SheetOnlyPasteFormulaCommand,
      InsertFunctionOperation,
      MoreFunctionsOperation,
      SearchFunctionOperation,
      HelpFunctionOperation,
      SelectEditorFormulaOperation,
      ReferenceAbsoluteOperation
    ].forEach((command) => this.disposeWithMe(this._commandService.registerCommand(command)));
  }
  _registerShortcuts() {
    [
      ...promptSelectionShortcutItem(),
      ...promptSelectionShortcutItemShift(),
      ...promptSelectionShortcutItemCtrl(),
      ...promptSelectionShortcutItemCtrlAndShift(),
      ...singleEditorPromptSelectionShortcutItem(),
      ChangeRefToAbsoluteShortcut
    ].forEach((item) => {
      this.disposeWithMe(this._shortcutService.registerShortcut(item));
    });
  }
  _registerComponents() {
    this.disposeWithMe(this._uiPartsService.registerComponent("content" /* CONTENT */, () => connectInjector(RenderFormulaPromptContent, this._injector)));
    this.disposeWithMe(this._uiPartsService.registerComponent("formula-aux" /* FORMULA_AUX */, () => connectInjector(FormulaProgressBar, this._injector)));
    this._componentManager.register(MORE_FUNCTIONS_COMPONENT, MoreFunctions);
  }
  _registerRenderModules() {
    this.disposeWithMe(this._renderManagerService.registerRenderModule(O.UNIVER_SHEET, [FormulaEditorShowController]));
  }
};
FormulaUIController = __decorateClass([
  __decorateParam(0, Inject(Injector)),
  __decorateParam(1, IMenuManagerService),
  __decorateParam(2, ICommandService),
  __decorateParam(3, IShortcutService),
  __decorateParam(4, IUIPartsService),
  __decorateParam(5, IRenderManagerService),
  __decorateParam(6, Inject(ComponentManager))
], FormulaUIController);

// ../packages/sheets-formula-ui/src/services/range-selector.service.ts
var GlobalRangeSelectorService = class {
  constructor() {
    __publicField(this, "_currentSelector$", new BehaviorSubject(null));
    __publicField(this, "currentSelector$", this._currentSelector$.asObservable());
  }
  showRangeSelectorDialog(opts) {
    const callback = opts.callback;
    const promise = new Promise((resolve) => {
      opts.callback = (ranges) => {
        resolve(ranges);
        callback(ranges);
      };
    });
    this._currentSelector$.next(opts);
    return promise;
  }
};

// ../packages/sheets-formula-ui/src/services/render-services/ref-selections.render-service.ts
var RefSelectionsRenderService = class extends BaseSelectionRenderService {
  constructor(_context, injector, themeService, shortcutService, sheetSkeletonManagerService, _contextService, _refSelectionsService) {
    super(
      injector,
      themeService,
      shortcutService,
      sheetSkeletonManagerService,
      _contextService
    );
    this._context = _context;
    this._contextService = _contextService;
    this._refSelectionsService = _refSelectionsService;
    __publicField(this, "_workbookSelections");
    __publicField(this, "_eventDisposables");
    this._workbookSelections = this._refSelectionsService.getWorkbookSelections(this._context.unitId);
    this._initSelectionChangeListener();
    this._initSkeletonChangeListener();
    this._initUserActionSyncListener();
    this._setSelectionStyle(getDefaultRefSelectionStyle(this._themeService));
    this._remainLastEnabled = true;
    this._highlightHeader = false;
  }
  getLocation() {
    return this._skeleton.getLocation();
  }
  setRemainLastEnabled(enabled) {
    this._remainLastEnabled = enabled;
  }
  /**
   * This is set to true when you need to add a new selection.
   * @param {boolean} enabled
   * @memberof RefSelectionsRenderService
   */
  setSkipLastEnabled(enabled) {
    this._skipLastEnabled = enabled;
  }
  clearLastSelection() {
    const last = this._selectionControls[this._selectionControls.length - 1];
    if (last) {
      last.dispose();
      this._selectionControls.pop();
    }
  }
  /**
   * Call this method and user will be able to select on the canvas to update selections.
   */
  enableSelectionChanging() {
    this._disableSelectionChanging();
    this._eventDisposables = this._initCanvasEventListeners();
    return toDisposable(() => this._disableSelectionChanging());
  }
  _disableSelectionChanging() {
    var _a;
    (_a = this._eventDisposables) == null ? void 0 : _a.dispose();
    this._eventDisposables = null;
  }
  disableSelectionChanging() {
    this._disableSelectionChanging();
  }
  _initCanvasEventListeners() {
    const sheetObject = this._getSheetObject();
    const { spreadsheetRowHeader, spreadsheetColumnHeader, spreadsheet, spreadsheetLeftTopPlaceholder } = sheetObject;
    const { scene } = this._context;
    const listenerDisposables = new DisposableCollection();
    listenerDisposables.add(spreadsheet == null ? void 0 : spreadsheet.onPointerDown$.subscribeEvent((evt, state) => {
      if (!this.inRefSelectionMode()) return;
      this._onPointerDown(evt, spreadsheet.zIndex + 1, 0 /* NORMAL */, this._getActiveViewport(evt));
      if (evt.button !== 2) {
        state.stopPropagation();
      }
    }));
    listenerDisposables.add(
      spreadsheetRowHeader == null ? void 0 : spreadsheetRowHeader.onPointerDown$.subscribeEvent((evt, state) => {
        if (!this.inRefSelectionMode()) return;
        const skeleton = this._sheetSkeletonManagerService.getCurrent().skeleton;
        const { row } = getCoordByOffset(evt.offsetX, evt.offsetY, scene, skeleton);
        const matchSelectionData = matchedSelectionByRowColIndex(this._workbookSelections.getCurrentSelections(), row, 1 /* ROW */);
        if (matchSelectionData) return;
        this._onPointerDown(evt, (spreadsheet.zIndex || 1) + 1, 1 /* ROW */, this._getActiveViewport(evt), 2 /* Y */);
        if (evt.button !== 2) {
          state.stopPropagation();
        }
      })
    );
    listenerDisposables.add(spreadsheetColumnHeader == null ? void 0 : spreadsheetColumnHeader.onPointerDown$.subscribeEvent((evt, state) => {
      if (!this.inRefSelectionMode()) return;
      const skeleton = this._sheetSkeletonManagerService.getCurrent().skeleton;
      const { column } = getCoordByOffset(evt.offsetX, evt.offsetY, scene, skeleton);
      const matchSelectionData = matchedSelectionByRowColIndex(this._workbookSelections.getCurrentSelections(), column, 2 /* COLUMN */);
      if (matchSelectionData) return;
      this._onPointerDown(evt, (spreadsheet.zIndex || 1) + 1, 2 /* COLUMN */, this._getActiveViewport(evt), 1 /* X */);
      if (evt.button !== 2) {
        state.stopPropagation();
      }
    }));
    listenerDisposables.add(spreadsheetLeftTopPlaceholder == null ? void 0 : spreadsheetLeftTopPlaceholder.onPointerDown$.subscribeEvent((evt, state) => {
      this._reset();
      if (!this.inRefSelectionMode()) return;
      const skeleton = this._sheetSkeletonManagerService.getCurrent().skeleton;
      const selectionWithStyle = selectionDataForSelectAll(skeleton);
      this._addSelectionControlByModelData(selectionWithStyle);
      this._selectionMoveStart$.next(this.getSelectionDataWithStyle());
      const dispose = scene.onPointerUp$.subscribeEvent(() => {
        dispose.unsubscribe();
        this._selectionMoveEnd$.next(this.getSelectionDataWithStyle());
      });
      if (evt.button !== 2) {
        state.stopPropagation();
      }
    }));
    return listenerDisposables;
  }
  /**
   * Add a selection in spreadsheet, create a new SelectionControl and then update this control by range derives from selection.
   * For ref selection, create selectionShapeExtension to handle user action.
   * @param {ISelectionWithCoord} selectionWithStyle
   */
  _addSelectionControlByModelData(selectionWithStyle) {
    var _a;
    const skeleton = this._skeleton;
    const style = (_a = selectionWithStyle.style) != null ? _a : genNormalSelectionStyle(this._themeService);
    const scene = this._scene;
    selectionWithStyle.style = style;
    const control = this.newSelectionControl(scene, skeleton, selectionWithStyle);
    return control;
  }
  _initSelectionChangeListener() {
    this.disposeWithMe(this._refSelectionsService.selectionSet$.subscribe((selectionsWithStyles) => {
      this._reset();
      const skeleton = this._skeleton;
      if (!skeleton) return;
      this.resetSelectionsByModelData(selectionsWithStyles || []);
    }));
  }
  /**
   * Update selectionModel in this._workbookSelections by user action in spreadsheet area.
   */
  _initUserActionSyncListener() {
    this.disposeWithMe(this.selectionMoveStart$.subscribe((selectionDataWithStyle) => {
      this._updateSelections(selectionDataWithStyle, 0 /* MOVE_START */);
    }));
    this.disposeWithMe(this.selectionMoving$.subscribe((selectionDataWithStyle) => {
      this._updateSelections(selectionDataWithStyle, 1 /* MOVING */);
    }));
    this.disposeWithMe(this.selectionMoveEnd$.subscribe((selectionDataWithStyle) => {
      this._updateSelections(selectionDataWithStyle, 2 /* MOVE_END */);
    }));
  }
  _updateSelections(selectionDataWithStyleList, type) {
    const workbook = this._context.unit;
    const sheetId = workbook.getActiveSheet().getSheetId();
    if (selectionDataWithStyleList.length === 0) return;
    this._workbookSelections.setSelections(
      sheetId,
      selectionDataWithStyleList.map((selectionDataWithStyle) => convertSelectionDataToRange(selectionDataWithStyle)),
      type
    );
  }
  _initSkeletonChangeListener() {
    this.disposeWithMe(this._sheetSkeletonManagerService.currentSkeleton$.subscribe((param) => {
      if (!param) {
        return;
      }
      const { skeleton } = param;
      const { scene } = this._context;
      const viewportMain = scene.getViewport("viewMain" /* VIEW_MAIN */);
      if (this._skeleton && this._skeleton.worksheet.getSheetId() !== skeleton.worksheet.getSheetId()) {
        this._reset();
      }
      this._changeRuntime(skeleton, scene, viewportMain);
      const currentSelections = this._workbookSelections.getCurrentSelections();
      this.resetSelectionsByModelData(currentSelections);
    }));
  }
  _getActiveViewport(evt) {
    const sheetObject = this._getSheetObject();
    return sheetObject == null ? void 0 : sheetObject.scene.getActiveViewportByCoord(Vector2.FromArray([evt.offsetX, evt.offsetY]));
  }
  _getSheetObject() {
    return getSheetObject(this._context.unit, this._context);
  }
  /**
   * Handle pointer down event, bind pointermove & pointerup handler.
   * then trigger selectionMoveStart$.
   *
   * @param evt
   * @param _zIndex
   * @param rangeType
   * @param viewport
   * @param scrollTimerType
   */
  // eslint-disable-next-line complexity, max-lines-per-function
  _onPointerDown(evt, _zIndex = 0, rangeType = 0 /* NORMAL */, viewport, scrollTimerType = 3 /* ALL */) {
    var _a;
    this._rangeType = rangeType;
    const skeleton = this._skeleton;
    const scene = this._scene;
    if (!scene || !skeleton) {
      return;
    }
    if (viewport) {
      this._activeViewport = viewport;
    }
    const { offsetX: evtOffsetX, offsetY: evtOffsetY } = evt;
    const viewportMain = scene.getViewport("viewMain" /* VIEW_MAIN */);
    if (!viewportMain) return;
    const relativeCoords = scene.getCoordRelativeToViewport(Vector2.FromArray([evtOffsetX, evtOffsetY]));
    const { x: offsetX, y: offsetY } = relativeCoords;
    this._startViewportPosX = offsetX;
    this._startViewportPosY = offsetY;
    const scrollXY = scene.getScrollXYInfoByViewport(relativeCoords);
    const { scaleX, scaleY } = scene.getAncestorScale();
    const selectCell = this._skeleton.getCellByOffset(offsetX, offsetY, scaleX, scaleY, scrollXY);
    if (!selectCell) return;
    switch (rangeType) {
      case 0 /* NORMAL */:
        break;
      case 1 /* ROW */:
        selectCell.startColumn = 0;
        selectCell.endColumn = this._skeleton.getColumnCount() - 1;
        break;
      case 2 /* COLUMN */:
        selectCell.startRow = 0;
        selectCell.endRow = this._skeleton.getRowCount() - 1;
        break;
      case 3 /* ALL */:
        selectCell.startRow = 0;
        selectCell.startColumn = 0;
        selectCell.endRow = this._skeleton.getRowCount() - 1;
        selectCell.endColumn = this._skeleton.getColumnCount() - 1;
    }
    const selectionWithStyle = { range: selectCell, primary: selectCell, style: null };
    selectionWithStyle.range.rangeType = rangeType;
    const selectionCellWithCoord = attachSelectionWithCoord(selectionWithStyle, this._skeleton);
    this._startRangeWhenPointerDown = { ...selectionCellWithCoord.rangeWithCoord };
    const cursorCellRangeWithRangeType = { ...selectionCellWithCoord.rangeWithCoord, rangeType };
    let activeSelectionControl = this.getActiveSelectionControl();
    const curControls = this.getSelectionControls();
    for (const control of curControls) {
      if (evt.button === 2 && Rectangle.contains(control.model, cursorCellRangeWithRangeType)) {
        activeSelectionControl = control;
        return;
      }
      if (control.model.isEqual(cursorCellRangeWithRangeType)) {
        activeSelectionControl = control;
        break;
      }
    }
    this._checkClearPreviousControls(evt);
    const currentCell = activeSelectionControl == null ? void 0 : activeSelectionControl.model.currentCell;
    const expandByShiftKey = evt.shiftKey && currentCell;
    const remainLastEnable = this._remainLastEnabled && !evt.ctrlKey && !evt.shiftKey && !this._skipLastEnabled && !this._singleSelectionEnabled;
    if (expandByShiftKey && currentCell) {
      this._makeSelectionByTwoCells(
        currentCell,
        cursorCellRangeWithRangeType,
        skeleton,
        rangeType,
        activeSelectionControl
        // Get updated in this method
      );
    } else if (remainLastEnable && activeSelectionControl) {
      activeSelectionControl.updateRangeBySelectionWithCoord(selectionCellWithCoord);
    } else {
      activeSelectionControl = this.newSelectionControl(scene, skeleton, selectionWithStyle);
    }
    for (let i = 0; i < this.getSelectionControls().length - 1; i++) {
      this.getSelectionControls()[i].clearHighlight();
    }
    this._selectionMoveStart$.next(this.getSelectionDataWithStyle());
    scene.disableObjectsEvent();
    this._clearUpdatingListeners();
    this._addEndingListeners();
    (_a = scene.getTransformer()) == null ? void 0 : _a.clearSelectedObjects();
    this._setupPointerMoveListener(viewportMain, activeSelectionControl, rangeType, scrollTimerType, offsetX, offsetY);
    this._escapeShortcutDisposable = this._shortcutService.forceEscape();
    this._scenePointerUpSub = scene.onPointerUp$.subscribeEvent(() => {
      var _a2;
      this._clearUpdatingListeners();
      this._selectionMoveEnd$.next(this.getSelectionDataWithStyle());
      (_a2 = this._escapeShortcutDisposable) == null ? void 0 : _a2.dispose();
      this._escapeShortcutDisposable = null;
    });
  }
  /**
   * Diff between normal selection, no highlightHeader for ref selections.
   * @param scene
   * @param skeleton
   * @param selectionWithCoord
   * @returns {SelectionControl} selectionControl just created
   */
  newSelectionControl(scene, skeleton, selection) {
    const zIndex = this.getSelectionControls().length;
    const { rowHeaderWidth, columnHeaderHeight } = skeleton;
    const control = new SelectionControl(scene, zIndex, this._themeService, {
      highlightHeader: this._highlightHeader,
      enableAutoFill: false,
      rowHeaderWidth,
      columnHeaderHeight
    });
    const selectionWithCoord = attachSelectionWithCoord(selection, skeleton);
    control.updateRangeBySelectionWithCoord(selectionWithCoord);
    this._selectionControls.push(control);
    control.setControlExtension({
      skeleton,
      scene,
      themeService: this._themeService,
      injector: this._injector,
      selectionHooks: {
        selectionMoveEnd: () => {
          this._selectionMoveEnd$.next(this.getSelectionDataWithStyle());
        }
      }
    });
    return control;
  }
};
RefSelectionsRenderService = __decorateClass([
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, Inject(ThemeService)),
  __decorateParam(3, IShortcutService),
  __decorateParam(4, Inject(SheetSkeletonManagerService)),
  __decorateParam(5, IContextService),
  __decorateParam(6, IRefSelectionsService)
], RefSelectionsRenderService);
function getDefaultRefSelectionStyle(themeService) {
  const style = genNormalSelectionStyle(themeService);
  style.widgets = { tl: true, tc: true, tr: true, ml: true, mr: true, bl: true, bc: true, br: true };
  return style;
}

// ../packages/sheets-formula-ui/src/views/formula-editor/index.tsx
var import_react24 = __toESM(require_react());

// ../packages/sheets-formula-ui/src/views/range-selector/utils/find-index-from-sequence-nodes.ts
var findIndexFromSequenceNodes = (sequenceNode, targetIndex, isEqual = true) => {
  let result = -1;
  sequenceNode.reduce((pre, cur, index) => {
    if (pre.isFinish) {
      return pre;
    }
    const oldIndex = pre.currentIndex;
    if (typeof cur !== "string") {
      pre.currentIndex += cur.token.length;
    } else {
      const length = cur.length;
      pre.currentIndex += length;
    }
    if (isEqual ? pre.currentIndex === targetIndex : targetIndex > oldIndex && targetIndex <= pre.currentIndex) {
      result = index;
      pre.isFinish = true;
    }
    return pre;
  }, { currentIndex: 0, isFinish: false });
  return result;
};
var findRefSequenceIndex = (sequenceNode, targetIndex) => {
  const last = sequenceNode[targetIndex];
  let result = -1;
  if (!last || typeof last === "string" || last.nodeType !== 4 /* REFERENCE */) return -1;
  for (let i = 0; i <= targetIndex; i++) {
    const currentNode = sequenceNode[i];
    if (typeof currentNode !== "string" && currentNode.nodeType === 4 /* REFERENCE */) {
      result++;
    }
  }
  return result;
};

// ../packages/sheets-formula-ui/src/views/formula-editor/help-function/HelpFunction.tsx
var import_react12 = __toESM(require_react());

// ../packages/sheets-formula-ui/src/views/formula-editor/hooks/use-editor-position.ts
var import_react9 = __toESM(require_react());

// ../packages/sheets-formula-ui/src/views/formula-editor/hooks/use-resize-scroll-observer.ts
var import_react8 = __toESM(require_react());
var useResizeScrollObserver2 = (callback, delay = 100) => {
  (0, import_react8.useEffect)(() => {
    let throttleTimeout = null;
    const throttledCallback = () => {
      if (throttleTimeout === null) {
        throttleTimeout = window.setTimeout(() => {
          callback();
          throttleTimeout = null;
        }, delay);
      }
    };
    window.addEventListener("scroll", throttledCallback);
    window.addEventListener("resize", throttledCallback);
    return () => {
      if (throttleTimeout !== null) {
        clearTimeout(throttleTimeout);
      }
      window.removeEventListener("scroll", throttledCallback);
      window.removeEventListener("resize", throttledCallback);
    };
  }, [callback, delay]);
};
var use_resize_scroll_observer_default = useResizeScrollObserver2;

// ../packages/sheets-formula-ui/src/views/formula-editor/hooks/use-editor-position.ts
function useEditorPosition(editorId, ready, deps) {
  const editorService = useDependency(IEditorService);
  const position$ = (0, import_react9.useMemo)(() => new BehaviorSubject({ left: -999, top: -999, right: -999, bottom: -999 }), []);
  const sidebarService = useDependency(ISidebarService);
  const univerInstanceService = useDependency(IUniverInstanceService);
  const updatePosition = useEvent(() => {
    const doc = editorService.getEditor(editorId);
    if (!doc) {
      return;
    }
    const position = doc.getBoundingClientRect();
    const { left, top, right, bottom } = position;
    const current = position$.getValue();
    if (current.left === left && current.top === top && current.right === right && current.bottom === bottom) {
      return;
    }
    position$.next({ left: left - 1, right: right + 1, top: top - 1, bottom: bottom + 1 });
    return position;
  });
  (0, import_react9.useEffect)(() => {
    if (!ready) {
      return;
    }
    updatePosition();
  }, [editorId, editorService, univerInstanceService.unitAdded$, updatePosition, ready, ...deps != null ? deps : []]);
  use_resize_scroll_observer_default(updatePosition);
  (0, import_react9.useEffect)(() => {
    const sidebarSubscription = sidebarService.scrollEvent$.pipe(throttleTime(100)).subscribe(updatePosition);
    return () => {
      sidebarSubscription.unsubscribe();
    };
  }, []);
  return [position$, updatePosition];
}

// ../packages/sheets-formula-ui/src/views/formula-editor/hooks/use-formula-describe.ts
var import_react11 = __toESM(require_react());

// ../packages/sheets-formula-ui/src/views/formula-editor/hooks/use-state-ref.ts
var import_react10 = __toESM(require_react());
var useStateRef = (value) => {
  const cache = (0, import_react10.useRef)(value);
  cache.current = value;
  return cache;
};

// ../packages/sheets-formula-ui/src/views/formula-editor/hooks/use-formula-describe.ts
var useFormulaDescribe = (isNeed, formulaText, editor) => {
  const descriptionService = useDependency(IDescriptionService);
  const lexerTreeBuilder = useDependency(LexerTreeBuilder);
  const [functionInfo, functionInfoSet] = (0, import_react11.useState)();
  const [paramIndex, paramIndexSet] = (0, import_react11.useState)(-1);
  const [isShow, isShowSet] = (0, import_react11.useState)(true);
  const isShowRef = useStateRef(isShow);
  const formulaTextRef = (0, import_react11.useRef)(formulaText);
  formulaTextRef.current = formulaText;
  const reset = () => {
    functionInfoSet(void 0);
    paramIndexSet(-1);
    isShowSet(false);
  };
  (0, import_react11.useEffect)(() => {
    if (editor && isNeed) {
      const d = editor.selectionChange$.pipe(debounceTime(50)).subscribe((e) => {
        if (e.textRanges.length === 1) {
          const [range] = e.textRanges;
          if (range.collapsed && isShowRef.current) {
            const res = lexerTreeBuilder.getFunctionAndParameter(`${formulaTextRef.current}A`, range.startOffset - 1);
            if (res) {
              const { functionName, paramIndex: paramIndex2 } = res;
              const info = descriptionService.getFunctionInfo(functionName);
              functionInfoSet(info);
              paramIndexSet(paramIndex2);
              return;
            }
          }
        }
        functionInfoSet(void 0);
        paramIndexSet(-1);
      });
      const d2 = editor.selectionChange$.pipe(
        filter((e) => e.isEditing),
        filter((e) => e.textRanges.length === 1),
        map((e) => e.textRanges[0].startOffset),
        distinctUntilChanged()
      ).subscribe(() => {
        isShowSet(true);
      });
      return () => {
        d.unsubscribe();
        d2.unsubscribe();
      };
    }
  }, [editor, isNeed]);
  (0, import_react11.useEffect)(() => {
    if (!isNeed) {
      reset();
    }
  }, [isNeed]);
  return {
    functionInfo,
    paramIndex,
    reset
  };
};

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages/sheets-formula-ui/src/views/formula-editor/help-function/index.module.less
var index_module_default7 = {
  "formulaHelpFunction": "univer-formula-help-function",
  "formulaHelpFunctionTitle": "univer-formula-help-function-title",
  "formulaHelpFunctionTitleIcons": "univer-formula-help-function-title-icons",
  "formulaHelpFunctionTitleIcon": "univer-formula-help-function-title-icon",
  "formulaHelpFunctionContent": "univer-formula-help-function-content",
  "formulaHelpFunctionContentInner": "univer-formula-help-function-content-inner",
  "formulaHelpFunctionContentParams": "univer-formula-help-function-content-params",
  "formulaHelpFunctionContentParamsTitle": "univer-formula-help-function-content-params-title",
  "formulaHelpFunctionContentParamsDetail": "univer-formula-help-function-content-params-detail",
  "formulaHelpFunctionActive": "univer-formula-help-function-active",
  "formulaHelpDecorator": "univer-formula-help-decorator",
  "formulaHelpParam": "univer-formula-help-param",
  "formulaHelpParamPrefix": "univer-formula-help-param-prefix",
  "formulaHelpParamItem": "univer-formula-help-param-item",
  "formulaHelpParamActive": "univer-formula-help-param-active"
};

// ../packages/sheets-formula-ui/src/views/formula-editor/help-function/HelpFunction.tsx
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var Params2 = ({ className, title, value }) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: index_module_default7.formulaHelpFunctionContentParams, children: [
  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    "div",
    {
      className: `
          ${index_module_default7.formulaHelpFunctionContentParamsTitle}
          ${className}
        `,
      children: title
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: index_module_default7.formulaHelpFunctionContentParamsDetail, children: value })
] });
var Help2 = (props) => {
  const { prefix, value, active, onClick } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: index_module_default7.formulaHelpParam, children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { className: index_module_default7.formulaHelpParamPrefix, children: [
      prefix,
      "("
    ] }),
    value && value.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { className: index_module_default7.formulaHelpParamItem, children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        "span",
        {
          className: active === i ? index_module_default7.formulaHelpFunctionActive : index_module_default7.formulaHelpParamActive,
          onClick: () => onClick(i),
          children: generateParam(item)
        }
      ),
      i === value.length - 1 ? "" : ","
    ] }, item.name)),
    ")"
  ] });
};
var noop = () => {
};
function HelpFunction2(props) {
  const { onParamsSwitch = noop, onClose: propColose = noop, isFocus, editor, formulaText } = props;
  const { functionInfo, paramIndex, reset } = useFormulaDescribe(isFocus, formulaText, editor);
  const visible = (0, import_react12.useMemo)(() => !!functionInfo && paramIndex >= 0, [functionInfo, paramIndex]);
  const [contentVisible, setContentVisible] = (0, import_react12.useState)(true);
  const localeService = useDependency(LocaleService);
  const required = localeService.t("formula.prompt.required");
  const optional = localeService.t("formula.prompt.optional");
  const editorId = editor.getEditorId();
  const [position$] = useEditorPosition(editorId, visible, [functionInfo, paramIndex]);
  function handleSwitchActive(paramIndex2) {
    onParamsSwitch && onParamsSwitch(paramIndex2);
  }
  const onClose = () => {
    reset();
    propColose();
  };
  return visible && functionInfo ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(RectPopup, { portal: true, onClickOutside: () => reset(), anchorRect$: position$, direction: "vertical", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: index_module_default7.formulaHelpFunction, children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: index_module_default7.formulaHelpFunctionTitle, children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        Help2,
        {
          prefix: functionInfo.functionName,
          value: functionInfo.functionParameter,
          active: paramIndex,
          onClick: handleSwitchActive
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: index_module_default7.formulaHelpFunctionTitleIcons, children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "div",
          {
            className: index_module_default7.formulaHelpFunctionTitleIcon,
            style: { transform: contentVisible ? "rotateZ(-90deg)" : "rotateZ(90deg)" },
            onClick: () => setContentVisible(!contentVisible),
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(more_single_default, {})
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "div",
          {
            className: index_module_default7.formulaHelpFunctionTitleIcon,
            onClick: onClose,
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(close_single_default, {})
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "div",
      {
        className: index_module_default7.formulaHelpFunctionContent,
        style: {
          height: contentVisible ? "unset" : 0,
          padding: contentVisible ? "revert-layer" : 0
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: index_module_default7.formulaHelpFunctionContentInner, children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            Params2,
            {
              title: localeService.t("formula.prompt.helpExample"),
              value: `${functionInfo.functionName}(${functionInfo.functionParameter.map((item) => item.example).join(",")})`
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            Params2,
            {
              title: localeService.t("formula.prompt.helpAbstract"),
              value: functionInfo.description
            }
          ),
          functionInfo && functionInfo.functionParameter && functionInfo.functionParameter.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            Params2,
            {
              className: paramIndex === i ? index_module_default7.formulaHelpFunctionActive : "",
              title: item.name,
              value: `${item.require ? required : optional} ${item.detail}`
            },
            i
          ))
        ] })
      }
    )
  ] }) }) : null;
}

// ../packages/sheets-formula-ui/src/views/formula-editor/hooks/use-focus.ts
var useFocus = (editor) => {
  const editorService = useDependency(IEditorService);
  const focus = useEvent((offset) => {
    var _a, _b;
    if (editor) {
      editorService.focus(editor.getEditorId());
      const selections = [...editor.getSelectionRanges()];
      if (Tools.isDefine(offset)) {
        editor.setSelectionRanges([{ startOffset: offset, endOffset: offset }]);
      } else if (!selections.length && !editor.docSelectionRenderService.isOnPointerEvent) {
        const body = (_b = (_a = editor.getDocumentData().body) == null ? void 0 : _a.dataStream) != null ? _b : "\r\n";
        const offset2 = Math.max(body.length - 2, 0);
        editor.setSelectionRanges([{ startOffset: offset2, endOffset: offset2 }]);
      }
    }
    ;
  });
  return focus;
};

// ../packages/sheets-formula-ui/src/views/formula-editor/hooks/use-formula-selection.ts
var import_react13 = __toESM(require_react());
function getCurrentBodyDataStreamAndOffset(accssor) {
  var _a, _b;
  const univerInstanceService = accssor.get(IUniverInstanceService);
  const documentModel = univerInstanceService.getCurrentUniverDocInstance();
  if (!(documentModel == null ? void 0 : documentModel.getBody())) {
    return;
  }
  const dataStream = (_b = (_a = documentModel.getBody()) == null ? void 0 : _a.dataStream) != null ? _b : "";
  return { dataStream, offset: 0 };
}
function useFormulaSelecting(opts) {
  var _a;
  const { editorId, isFocus, disableOnClick, unitId, subUnitId } = opts;
  const renderManagerService = useDependency(IRenderManagerService);
  const univerInstanceService = useDependency(IUniverInstanceService);
  const sheetRenderer = renderManagerService.getRenderById(unitId);
  const renderer = renderManagerService.getRenderById(editorId);
  const docSelectionRenderService = renderer == null ? void 0 : renderer.with(DocSelectionRenderService);
  const docSelectionManagerService = useDependency(DocSelectionManagerService);
  const injector = useDependency(Injector);
  const [isSelecting, innerSetIsSelecting] = (0, import_react13.useState)(0 /* NOT_SELECT */);
  const lexerTreeBuilder = useDependency(LexerTreeBuilder);
  const isDisabledByPointer = (0, import_react13.useRef)(true);
  const refSelectionsRenderService = sheetRenderer == null ? void 0 : sheetRenderer.with(RefSelectionsRenderService);
  const isSelectingRef = useStateRef(isSelecting);
  const workbook = univerInstanceService.getUnit(unitId, O.UNIVER_SHEET);
  const sourceSheet = workbook == null ? void 0 : workbook.getSheetBySheetId(subUnitId);
  const setIsSelecting = useEvent((v) => {
    if (refSelectionsRenderService) {
      refSelectionsRenderService.setSkipLastEnabled(v === 1 /* NEED_ADD */ || v === 3 /* EDIT_OTHER_SHEET_REFERENCE */);
    }
    isSelectingRef.current = v;
    innerSetIsSelecting(v);
  });
  const calculateSelectingType = useEvent(() => {
    var _a2, _b;
    if (!workbook) return;
    const currentSheet = workbook.getActiveSheet();
    const activeRange = docSelectionRenderService == null ? void 0 : docSelectionRenderService.getActiveTextRange();
    const index = (activeRange == null ? void 0 : activeRange.collapsed) ? activeRange.startOffset : -1;
    const config = getCurrentBodyDataStreamAndOffset(injector);
    if (!config) return;
    const dataStream = (_a2 = config == null ? void 0 : config.dataStream) == null ? void 0 : _a2.slice(0, -2);
    const nodes = ((_b = lexerTreeBuilder.sequenceNodesBuilder(dataStream)) != null ? _b : []).map((node) => {
      if (typeof node === "object") {
        if (node.nodeType === 4 /* REFERENCE */) {
          return {
            ...node,
            range: deserializeRangeWithSheetWithCache(node.token)
          };
        }
        return {
          ...node,
          range: void 0
        };
      }
      return node;
    });
    const char = dataStream[index - 1];
    const nextChar = dataStream[index];
    const focusingNode = nodes.find((node) => typeof node === "object" && node.nodeType === 4 /* REFERENCE */ && index === node.endIndex + 2);
    const adding = char && matchRefDrawToken(char) && (!nextChar || isFormulaLexerToken(nextChar) && nextChar !== "(" /* OPEN_BRACKET */);
    const editing = Boolean(focusingNode);
    if ((dataStream == null ? void 0 : dataStream.substring(0, 1)) === "=" && (adding || editing)) {
      if (editing) {
        if (isDisabledByPointer.current) {
          return;
        }
        if (!focusingNode.range.sheetName && currentSheet.getSheetId() === (sourceSheet == null ? void 0 : sourceSheet.getSheetId()) || focusingNode.range.sheetName === currentSheet.getName()) {
          setIsSelecting(2 /* CAN_EDIT */);
        } else {
          setIsSelecting(3 /* EDIT_OTHER_SHEET_REFERENCE */);
        }
      } else {
        isDisabledByPointer.current = false;
        setIsSelecting(1 /* NEED_ADD */);
      }
    } else {
      setIsSelecting(0 /* NOT_SELECT */);
    }
  });
  (0, import_react13.useEffect)(() => {
    const sub = docSelectionManagerService.textSelection$.pipe(filter((param) => param.unitId === editorId)).subscribe(() => {
      calculateSelectingType();
    });
    return () => sub.unsubscribe();
  }, [calculateSelectingType, docSelectionManagerService.textSelection$, editorId]);
  (0, import_react13.useEffect)(() => {
    if (!isFocus) {
      setIsSelecting(0 /* NOT_SELECT */);
      isDisabledByPointer.current = true;
    }
  }, [isFocus, setIsSelecting]);
  (0, import_react13.useEffect)(() => {
    var _a2;
    if (!disableOnClick) return;
    const sub = (_a2 = renderer == null ? void 0 : renderer.mainComponent) == null ? void 0 : _a2.onPointerDown$.subscribeEvent(() => {
      setIsSelecting(0 /* NOT_SELECT */);
      isDisabledByPointer.current = true;
    });
    return () => sub == null ? void 0 : sub.unsubscribe();
  }, [disableOnClick, (_a = renderer == null ? void 0 : renderer.mainComponent) == null ? void 0 : _a.onPointerDown$, setIsSelecting]);
  (0, import_react13.useEffect)(() => {
    if (!isFocus) return;
    const sub = workbook == null ? void 0 : workbook.activeSheet$.subscribe(() => {
      calculateSelectingType();
    });
    return () => sub == null ? void 0 : sub.unsubscribe();
  }, [calculateSelectingType, isFocus, workbook == null ? void 0 : workbook.activeSheet$]);
  return { isSelecting, isSelectingRef };
}

// ../packages/sheets-formula-ui/src/views/formula-editor/hooks/use-formula-token.ts
var import_react14 = __toESM(require_react());
var useFormulaToken = () => {
  const lexerTreeBuilder = useDependency(LexerTreeBuilder);
  const getFormulaToken = (0, import_react14.useCallback)((text) => lexerTreeBuilder.sequenceNodesBuilder(text) || [], [lexerTreeBuilder]);
  return getFormulaToken;
};

// ../packages/sheets-formula-ui/src/views/formula-editor/hooks/use-highlight.ts
var import_react15 = __toESM(require_react());

// ../packages/sheets-formula-ui/src/common/selection.ts
function genFormulaRefSelectionStyle(themeService, refColor, id) {
  const style = themeService.getCurrentTheme();
  const fill = new ColorKit(refColor).setAlpha(0.05).toRgbString();
  return {
    id,
    strokeWidth: 1,
    stroke: refColor,
    fill,
    widgets: { tl: true, tc: true, tr: true, ml: true, mr: true, bl: true, bc: true, br: true },
    widgetSize: 6,
    widgetStrokeWidth: 1,
    widgetStroke: style.colorWhite
  };
}

// ../packages/sheets-formula-ui/src/views/formula-editor/hooks/use-highlight.ts
function calcHighlightRanges(opts) {
  var _a, _b, _c;
  const {
    unitId,
    subUnitId,
    refSelections,
    editor,
    refSelectionsService,
    refSelectionsRenderService,
    sheetSkeletonManagerService,
    themeService,
    univerInstanceService
  } = opts;
  const workbook = univerInstanceService.getUnit(unitId, O.UNIVER_SHEET);
  const worksheet = workbook == null ? void 0 : workbook.getActiveSheet();
  const selectionWithStyle = [];
  if (!workbook || !worksheet) {
    refSelectionsService.setSelections(selectionWithStyle);
    return;
  }
  const currentSheetId = worksheet.getSheetId();
  const getSheetIdByName = (name) => {
    var _a2;
    return (_a2 = workbook == null ? void 0 : workbook.getSheetBySheetName(name)) == null ? void 0 : _a2.getSheetId();
  };
  const skeleton = (_a = sheetSkeletonManagerService == null ? void 0 : sheetSkeletonManagerService.getWorksheetSkeleton(currentSheetId)) == null ? void 0 : _a.skeleton;
  if (!skeleton) return;
  const endIndexes = [];
  for (let i = 0, len = refSelections.length; i < len; i++) {
    const refSelection = refSelections[i];
    const { themeColor, token, refIndex, endIndex } = refSelection;
    const unitRangeName = deserializeRangeWithSheet(token);
    const { unitId: refUnitId, sheetName, range: rawRange } = unitRangeName;
    if (refUnitId && unitId !== refUnitId) {
      continue;
    }
    const refSheetId = getSheetIdByName(sheetName);
    if (refSheetId && refSheetId !== currentSheetId || !refSheetId && currentSheetId !== subUnitId) {
      continue;
    }
    const range = setEndForRange(rawRange, worksheet.getRowCount(), worksheet.getColumnCount());
    range.unitId = unitId;
    range.sheetId = currentSheetId;
    selectionWithStyle.push({
      range,
      primary: null,
      style: genFormulaRefSelectionStyle(themeService, themeColor, refIndex.toString())
    });
    endIndexes.push(endIndex);
  }
  if (editor) {
    const cursor = (_c = (_b = editor.getSelectionRanges()) == null ? void 0 : _b[0]) == null ? void 0 : _c.startOffset;
    const activeIndex = endIndexes.findIndex((end) => end + 2 === cursor);
    if (activeIndex !== -1) {
      refSelectionsRenderService == null ? void 0 : refSelectionsRenderService.setActiveSelectionIndex(activeIndex);
    } else {
      refSelectionsRenderService == null ? void 0 : refSelectionsRenderService.resetActiveSelectionIndex();
    }
  }
  return selectionWithStyle;
}
function useSheetHighlight(unitId, subUnitId) {
  const univerInstanceService = useDependency(IUniverInstanceService);
  const themeService = useDependency(ThemeService);
  const refSelectionsService = useDependency(IRefSelectionsService);
  const renderManagerService = useDependency(IRenderManagerService);
  const render = renderManagerService.getRenderById(unitId);
  const refSelectionsRenderService = render == null ? void 0 : render.with(RefSelectionsRenderService);
  const sheetSkeletonManagerService = render == null ? void 0 : render.with(SheetSkeletonManagerService);
  const highlightSheet = useEvent((refSelections, editor) => {
    if (refSelectionsRenderService == null ? void 0 : refSelectionsRenderService.selectionMoving) return;
    const selectionWithStyle = calcHighlightRanges({
      unitId,
      subUnitId,
      refSelections,
      editor,
      refSelectionsService,
      refSelectionsRenderService,
      sheetSkeletonManagerService,
      themeService,
      univerInstanceService
    });
    if (!selectionWithStyle) return;
    const allControls = (refSelectionsRenderService == null ? void 0 : refSelectionsRenderService.getSelectionControls()) || [];
    if (allControls.length === selectionWithStyle.length) {
      refSelectionsRenderService == null ? void 0 : refSelectionsRenderService.resetSelectionsByModelData(selectionWithStyle);
    } else {
      refSelectionsService.setSelections(selectionWithStyle);
    }
  });
  (0, import_react15.useEffect)(() => {
    return () => {
      refSelectionsRenderService == null ? void 0 : refSelectionsRenderService.resetActiveSelectionIndex();
    };
  }, [refSelectionsRenderService]);
  return highlightSheet;
}
function useDocHight(_leadingCharacter = "") {
  const descriptionService = useDependency(IDescriptionService);
  const colorMap = useColor();
  const commandService = useDependency(ICommandService);
  const leadingCharacterLength = (0, import_react15.useMemo)(() => _leadingCharacter.length, [_leadingCharacter]);
  const highlightDoc = useEvent((editor, sequenceNodes, isNeedResetSelection = true, newSelections) => {
    const data = editor.getDocumentData();
    const editorId = editor.getEditorId();
    if (!data) {
      return [];
    }
    const body = data.body;
    if (!body) {
      return [];
    }
    const str = body.dataStream.slice(0, body.dataStream.length - 2);
    const cloneBody = { dataStream: "", ...data.body };
    if (!str.startsWith(_leadingCharacter)) return [];
    if (sequenceNodes == null || sequenceNodes.length === 0) {
      cloneBody.textRuns = [];
      commandService.syncExecuteCommand(ReplaceTextRunsCommand.id, {
        unitId: editorId,
        body: getBodySlice(cloneBody, 0, cloneBody.dataStream.length - 2)
      });
      return [];
    } else {
      const { textRuns, refSelections } = buildTextRuns(descriptionService, colorMap, sequenceNodes);
      if (leadingCharacterLength) {
        textRuns.forEach((e) => {
          e.ed = e.ed + leadingCharacterLength;
          e.st = e.st + leadingCharacterLength;
        });
      }
      cloneBody.textRuns = [{ st: 0, ed: 1, ts: { fs: 11 } }, ...textRuns];
      const text = sequenceNodes.reduce((pre, cur) => {
        if (typeof cur === "string") {
          return `${pre}${cur}`;
        }
        return `${pre}${cur.token}`;
      }, "");
      cloneBody.dataStream = `${_leadingCharacter}${text}\r
`;
      let selections;
      if (isNeedResetSelection) {
        selections = editor.getSelectionRanges();
        const maxOffset = cloneBody.dataStream.length - 2 + leadingCharacterLength;
        selections.forEach((selection) => {
          selection.startOffset = Math.max(0, Math.min(selection.startOffset, maxOffset));
          selection.endOffset = Math.max(0, Math.min(selection.endOffset, maxOffset));
        });
      }
      commandService.syncExecuteCommand(ReplaceTextRunsCommand.id, {
        unitId: editorId,
        body: getBodySlice(cloneBody, 0, cloneBody.dataStream.length - 2),
        textRanges: newSelections != null ? newSelections : selections
      });
      return refSelections;
    }
  });
  return highlightDoc;
}
function useColor() {
  const themeService = useDependency(ThemeService);
  const style = themeService.getCurrentTheme();
  const result = (0, import_react15.useMemo)(() => {
    const formulaRefColors = [
      style.loopColor1,
      style.loopColor2,
      style.loopColor3,
      style.loopColor4,
      style.loopColor5,
      style.loopColor6,
      style.loopColor7,
      style.loopColor8,
      style.loopColor9,
      style.loopColor10,
      style.loopColor11,
      style.loopColor12
    ];
    const numberColor = style.hyacinth700;
    const stringColor = style.verdancy800;
    const plainTextColor = style.colorBlack;
    return { formulaRefColors, numberColor, stringColor, plainTextColor };
  }, [style]);
  return result;
}
function buildTextRuns(descriptionService, colorMap, sequenceNodes) {
  const { formulaRefColors, numberColor, stringColor, plainTextColor } = colorMap;
  const textRuns = [];
  const refSelections = [];
  const themeColorMap = /* @__PURE__ */ new Map();
  let refColorIndex = 0;
  for (let i = 0, len = sequenceNodes.length; i < len; i++) {
    const node = sequenceNodes[i];
    if (typeof node === "string") {
      const theLastItem = textRuns[textRuns.length - 1];
      const start = theLastItem ? theLastItem.ed : 0;
      const end = start + node.length;
      textRuns.push({
        st: start,
        ed: end,
        ts: {
          cl: {
            rgb: plainTextColor
          },
          fs: 11
        }
      });
      continue;
    }
    if (descriptionService.hasDefinedNameDescription(node.token.trim())) {
      textRuns.push({
        st: node.startIndex,
        ed: node.endIndex + 1,
        ts: {
          cl: {
            rgb: plainTextColor
          },
          fs: 11
        }
      });
      continue;
    }
    const { startIndex, endIndex, nodeType, token } = node;
    let themeColor = "";
    if (nodeType === 4 /* REFERENCE */) {
      if (themeColorMap.has(token)) {
        themeColor = themeColorMap.get(token);
      } else {
        const colorIndex = refColorIndex % formulaRefColors.length;
        themeColor = formulaRefColors[colorIndex];
        themeColorMap.set(token, themeColor);
        refColorIndex++;
      }
      refSelections.push({
        refIndex: i,
        themeColor,
        token,
        startIndex: node.startIndex,
        endIndex: node.endIndex,
        index: refSelections.length
      });
    } else if (nodeType === 1 /* NUMBER */) {
      themeColor = numberColor;
    } else if (nodeType === 2 /* STRING */) {
      themeColor = stringColor;
    } else if (nodeType === 5 /* ARRAY */) {
      themeColor = stringColor;
    }
    if (themeColor && themeColor.length > 0) {
      textRuns.push({
        st: startIndex,
        ed: endIndex + 1,
        ts: {
          cl: {
            rgb: themeColor
          },
          fs: 11
        }
      });
    } else {
      textRuns.push({
        st: startIndex,
        ed: endIndex + 1,
        ts: {
          cl: {
            rgb: plainTextColor
          },
          fs: 11
        }
      });
    }
  }
  return { textRuns, refSelections };
}

// ../packages/sheets-formula-ui/src/views/formula-editor/hooks/use-left-and-right-arrow.ts
var import_react16 = __toESM(require_react());
var useLeftAndRightArrow = (isNeed, shouldMoveSelection, editor, onMoveInEditor) => {
  const commandService = useDependency(ICommandService);
  const shortcutService = useDependency(IShortcutService);
  const shouldMoveSelectionRef = (0, import_react16.useRef)(shouldMoveSelection);
  shouldMoveSelectionRef.current = shouldMoveSelection;
  const onMoveInEditorRef = (0, import_react16.useRef)(onMoveInEditor);
  onMoveInEditorRef.current = onMoveInEditor;
  (0, import_react16.useEffect)(() => {
    if (!editor || !isNeed) {
      return;
    }
    const editorId = editor.getEditorId();
    const operationId = `sheet.formula-embedding-editor.${editorId}`;
    const d = new DisposableCollection();
    const handleMoveInEditor = (keycode, metaKey) => {
      if (onMoveInEditorRef.current) {
        onMoveInEditorRef.current(keycode, metaKey);
        return;
      }
      let direction = 3 /* LEFT */;
      if (keycode === 40 /* ARROW_DOWN */) {
        direction = 2 /* DOWN */;
      } else if (keycode === 38 /* ARROW_UP */) {
        direction = 0 /* UP */;
      } else if (keycode === 39 /* ARROW_RIGHT */) {
        direction = 1 /* RIGHT */;
      }
      if (metaKey === 1024 /* SHIFT */) {
        commandService.executeCommand(MoveSelectionOperation.id, {
          direction
        });
      } else {
        commandService.executeCommand(MoveCursorOperation.id, {
          direction
        });
      }
    };
    const handleKeycode = (keycode, metaKey) => {
      let direction = 2 /* DOWN */;
      if (keycode === 40 /* ARROW_DOWN */) {
        direction = 2 /* DOWN */;
      } else if (keycode === 38 /* ARROW_UP */) {
        direction = 0 /* UP */;
      } else if (keycode === 37 /* ARROW_LEFT */) {
        direction = 3 /* LEFT */;
      } else if (keycode === 39 /* ARROW_RIGHT */) {
        direction = 1 /* RIGHT */;
      }
      if (shouldMoveSelectionRef.current) {
        if (metaKey === 4096 /* CTRL_COMMAND */) {
          commandService.executeCommand(MoveSelectionCommand.id, {
            direction,
            jumpOver: 1 /* moveGap */,
            extra: "formula-editor",
            fromCurrentSelection: shouldMoveSelectionRef.current === 1 /* NEED_ADD */ || shouldMoveSelectionRef.current === 3 /* EDIT_OTHER_SHEET_REFERENCE */
          });
        } else if (metaKey === 1024 /* SHIFT */) {
          commandService.executeCommand(ExpandSelectionCommand.id, {
            direction,
            extra: "formula-editor"
          });
        } else if (metaKey === (4096 /* CTRL_COMMAND */ | 1024 /* SHIFT */)) {
          commandService.executeCommand(ExpandSelectionCommand.id, {
            direction,
            jumpOver: 1 /* moveGap */,
            extra: "formula-editor"
          });
        } else {
          commandService.executeCommand(MoveSelectionCommand.id, {
            direction,
            extra: "formula-editor",
            fromCurrentSelection: shouldMoveSelectionRef.current === 1 /* NEED_ADD */ || shouldMoveSelectionRef.current === 3 /* EDIT_OTHER_SHEET_REFERENCE */
          });
        }
      } else {
        handleMoveInEditor(keycode, metaKey);
      }
    };
    d.add(commandService.registerCommand({
      id: operationId,
      type: 1 /* OPERATION */,
      handler(_event, params) {
        const { keyCode, metaKey } = params;
        handleKeycode(keyCode, metaKey);
      }
    }));
    const keyCodes = [
      { keyCode: 40 /* ARROW_DOWN */ },
      { keyCode: 37 /* ARROW_LEFT */ },
      { keyCode: 39 /* ARROW_RIGHT */ },
      { keyCode: 38 /* ARROW_UP */ },
      { keyCode: 40 /* ARROW_DOWN */, metaKey: 1024 /* SHIFT */ },
      { keyCode: 37 /* ARROW_LEFT */, metaKey: 1024 /* SHIFT */ },
      { keyCode: 39 /* ARROW_RIGHT */, metaKey: 1024 /* SHIFT */ },
      { keyCode: 38 /* ARROW_UP */, metaKey: 1024 /* SHIFT */ },
      { keyCode: 40 /* ARROW_DOWN */, metaKey: 4096 /* CTRL_COMMAND */ },
      { keyCode: 37 /* ARROW_LEFT */, metaKey: 4096 /* CTRL_COMMAND */ },
      { keyCode: 39 /* ARROW_RIGHT */, metaKey: 4096 /* CTRL_COMMAND */ },
      { keyCode: 38 /* ARROW_UP */, metaKey: 4096 /* CTRL_COMMAND */ },
      { keyCode: 40 /* ARROW_DOWN */, metaKey: 4096 /* CTRL_COMMAND */ | 1024 /* SHIFT */ },
      { keyCode: 37 /* ARROW_LEFT */, metaKey: 4096 /* CTRL_COMMAND */ | 1024 /* SHIFT */ },
      { keyCode: 39 /* ARROW_RIGHT */, metaKey: 4096 /* CTRL_COMMAND */ | 1024 /* SHIFT */ },
      { keyCode: 38 /* ARROW_UP */, metaKey: 4096 /* CTRL_COMMAND */ | 1024 /* SHIFT */ }
    ];
    keyCodes.map(({ keyCode, metaKey }) => {
      return {
        id: operationId,
        binding: metaKey ? keyCode | metaKey : keyCode,
        preconditions: () => true,
        priority: 900,
        staticParameters: {
          eventType: 4 /* Keyboard */,
          keyCode,
          metaKey
        }
      };
    }).forEach((item) => {
      d.add(shortcutService.registerShortcut(item));
    });
    return () => {
      d.dispose();
    };
  }, [commandService, editor, isNeed, shortcutService]);
};

// ../packages/sheets-formula-ui/src/views/formula-editor/hooks/use-refactor-effect.ts
var import_react17 = __toESM(require_react());
var useRefactorEffect = (isNeed, selecting, unitId, disableContextMenu = true) => {
  const renderManagerService = useDependency(IRenderManagerService);
  const contextService = useDependency(IContextService);
  const contextMenuService = useDependency(IContextMenuService);
  const refSelectionsService = useDependency(IRefSelectionsService);
  const render = renderManagerService.getRenderById(unitId);
  const refSelectionsRenderService = render == null ? void 0 : render.with(RefSelectionsRenderService);
  (0, import_react17.useLayoutEffect)(() => {
    if (isNeed) {
      contextService.setContextValue(EDITOR_ACTIVATED, true);
      return () => {
        contextService.setContextValue(EDITOR_ACTIVATED, false);
        refSelectionsService.clear();
      };
    }
  }, [contextService, isNeed, refSelectionsService]);
  (0, import_react17.useLayoutEffect)(() => {
    if (isNeed && selecting) {
      const d1 = refSelectionsRenderService == null ? void 0 : refSelectionsRenderService.enableSelectionChanging();
      contextService.setContextValue(REF_SELECTIONS_ENABLED, true);
      return () => {
        contextService.setContextValue(REF_SELECTIONS_ENABLED, false);
        d1 == null ? void 0 : d1.dispose();
      };
    }
  }, [contextService, isNeed, refSelectionsRenderService, selecting]);
  (0, import_react17.useEffect)(() => {
    if (isNeed) {
      contextService.setContextValue(EDITOR_ACTIVATED, true);
      disableContextMenu && contextMenuService.disable();
      return () => {
        contextService.setContextValue(EDITOR_ACTIVATED, false);
        disableContextMenu && contextMenuService.enable();
      };
    }
  }, [contextMenuService, contextService, isNeed, disableContextMenu]);
  (0, import_react17.useEffect)(() => {
    if (isNeed) {
      refSelectionsRenderService == null ? void 0 : refSelectionsRenderService.setSkipLastEnabled(false);
    }
  }, [isNeed, refSelectionsRenderService]);
};

// ../packages/sheets-formula-ui/src/views/formula-editor/hooks/use-reset-selection.ts
var import_react18 = __toESM(require_react());
var useResetSelection = (isNeed, unitId, subUnitId) => {
  const univerInstanceService = useDependency(IUniverInstanceService);
  const sheetsSelectionsService = useDependency(SheetsSelectionsService);
  const resetSelection = (0, import_react18.useCallback)(() => {
    if (isNeed) {
      const selections = [...sheetsSelectionsService.getWorkbookSelections(unitId).getSelectionsOfWorksheet(subUnitId)];
      const workbook = univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET);
      const currentSheet = workbook == null ? void 0 : workbook.getActiveSheet();
      if (currentSheet && currentSheet.getSheetId() === subUnitId) {
        sheetsSelectionsService.setSelections(selections);
      }
    }
    ;
  }, [isNeed, sheetsSelectionsService, subUnitId, unitId, univerInstanceService]);
  return resetSelection;
};

// ../packages/sheets-formula-ui/src/views/formula-editor/hooks/use-sheet-selection-change.ts
var import_react19 = __toESM(require_react());

// ../packages/sheets-formula-ui/src/views/range-selector/utils/get-offset-from-sequence-nodes.ts
var getOffsetFromSequenceNodes = (sequenceNode) => {
  return sequenceNode.reduce((pre, cur) => {
    if (typeof cur === "string") {
      return pre + cur.length;
    }
    return pre + cur.token.length;
  }, 0);
};

// ../packages/sheets-formula-ui/src/views/range-selector/utils/sequence-node-to-text.ts
var sequenceNodeToText = (sequenceNode) => sequenceNode.map((item) => typeof item === "string" ? item : item.token).join("");

// ../packages/sheets-formula-ui/src/views/range-selector/utils/unit-ranges-to-text.ts
var unitRangesToText = (ranges, isNeedSheetName = false, originSheetName = "") => {
  if (!isNeedSheetName) {
    return ranges.map((item) => serializeRange(item.range));
  } else {
    return ranges.map((item) => {
      if (item.sheetName !== "" && item.sheetName !== originSheetName) {
        return serializeRangeWithSheet(item.sheetName, item.range);
      }
      return serializeRange(item.range);
    });
  }
};

// ../packages/sheets-formula-ui/src/views/formula-editor/hooks/use-sheet-selection-change.ts
var prepareSelectionChangeContext = (opts) => {
  var _a, _b, _c;
  const { editor, lexerTreeBuilder } = opts;
  const currentDocSelections = editor == null ? void 0 : editor.getSelectionRanges();
  if ((currentDocSelections == null ? void 0 : currentDocSelections.length) !== 1) {
    return;
  }
  const docRange = currentDocSelections[0];
  const offset = docRange.startOffset - 1;
  const dataStream = ((_b = (_a = editor == null ? void 0 : editor.getDocumentData().body) == null ? void 0 : _a.dataStream) != null ? _b : "\r\n").slice(0, -2);
  const sequenceNodes = (_c = lexerTreeBuilder.sequenceNodesBuilder(dataStream.slice(1))) != null ? _c : [];
  const nodeIndex = findIndexFromSequenceNodes(sequenceNodes, offset, false);
  const updatingRefIndex = findRefSequenceIndex(sequenceNodes, nodeIndex);
  return {
    nodeIndex,
    updatingRefIndex,
    sequenceNodes,
    offset
  };
};
var noop2 = () => {
};
var useSheetSelectionChange = (isNeed, isFocus, isSelectingRef, unitId, subUnitId, refSelectionRef, isSupportAcrossSheet, listenSelectionSet, editor, handleRangeChange = noop2) => {
  const renderManagerService = useDependency(IRenderManagerService);
  const univerInstanceService = useDependency(IUniverInstanceService);
  const commandService = useDependency(ICommandService);
  const docSelectionManagerService = useDependency(DocSelectionManagerService);
  const themeService = useDependency(ThemeService);
  const lexerTreeBuilder = useDependency(LexerTreeBuilder);
  const workbook = univerInstanceService.getUnit(unitId);
  const getSheetNameById = useEvent((sheetId) => {
    var _a, _b;
    return (_b = (_a = workbook == null ? void 0 : workbook.getSheetBySheetId(sheetId)) == null ? void 0 : _a.getName()) != null ? _b : "";
  });
  const sheetName = (0, import_react19.useMemo)(() => getSheetNameById(subUnitId), [getSheetNameById, subUnitId]);
  const activeSheet = useObservable(workbook == null ? void 0 : workbook.activeSheet$);
  const contextRef = useStateRef({ activeSheet, sheetName });
  const render = renderManagerService.getRenderById(unitId);
  const refSelectionsRenderService = render == null ? void 0 : render.with(RefSelectionsRenderService);
  const sheetSkeletonManagerService = render == null ? void 0 : render.with(SheetSkeletonManagerService);
  const refSelectionsService = useDependency(IRefSelectionsService);
  const onSelectionsChange = useEvent((selections, isEnd) => {
    var _a, _b, _c, _d, _e, _f;
    const ctx = prepareSelectionChangeContext({ editor, lexerTreeBuilder });
    if (!ctx) return;
    const { nodeIndex, updatingRefIndex, sequenceNodes, offset } = ctx;
    if (isSelectingRef.current === 1 /* NEED_ADD */) {
      if (offset !== 0) {
        if (nodeIndex === -1 && sequenceNodes.length) {
          return;
        }
        const range = selections[selections.length - 1];
        const lastNodes = sequenceNodes.splice(nodeIndex + 1);
        const rangeSheetId = (_a = range.sheetId) != null ? _a : subUnitId;
        const unitRangeName = {
          range,
          unitId: (_b = range.unitId) != null ? _b : unitId,
          sheetName: getSheetNameById(rangeSheetId)
        };
        const isAcrossSheet = rangeSheetId !== subUnitId;
        const refRanges = unitRangesToText([unitRangeName], isSupportAcrossSheet && isAcrossSheet, sheetName);
        sequenceNodes.push({ token: refRanges[0], nodeType: 4 /* REFERENCE */ });
        const newSequenceNodes = [...sequenceNodes, ...lastNodes];
        const result = sequenceNodeToText(newSequenceNodes);
        handleRangeChange(result, getOffsetFromSequenceNodes(sequenceNodes), isEnd);
      } else {
        const range = selections[selections.length - 1];
        const rangeSheetId = (_c = range.sheetId) != null ? _c : subUnitId;
        const unitRangeName = {
          range,
          unitId: (_d = range.unitId) != null ? _d : unitId,
          sheetName: getSheetNameById(rangeSheetId)
        };
        const isAcrossSheet = rangeSheetId !== subUnitId;
        const refRanges = unitRangesToText([unitRangeName], isSupportAcrossSheet && isAcrossSheet);
        sequenceNodes.unshift({ token: refRanges[0], nodeType: 4 /* REFERENCE */ });
        const result = sequenceNodeToText(sequenceNodes);
        handleRangeChange(result, refRanges[0].length, isEnd);
      }
    } else if (isSelectingRef.current === 3 /* EDIT_OTHER_SHEET_REFERENCE */) {
      const last = selections.pop();
      if (!last) return;
      const node = sequenceNodes[nodeIndex];
      if (typeof node === "object" && node.nodeType === 4 /* REFERENCE */) {
        const oldToken = node.token;
        node.token = sheetName === (activeSheet == null ? void 0 : activeSheet.getName()) ? serializeRange(last) : serializeRangeWithSheet(activeSheet.getName(), last);
        const newOffset = offset + (node.token.length - oldToken.length);
        handleRangeChange(generateStringWithSequence(sequenceNodes), newOffset, isEnd);
      }
    } else {
      const orderedSelections = [...selections];
      if (updatingRefIndex !== -1) {
        const last = orderedSelections.pop();
        last && orderedSelections.splice(updatingRefIndex, 0, last);
      }
      let currentRefIndex = 0;
      const newTokens = sequenceNodes.map((item) => {
        var _a2, _b2, _c2;
        if (typeof item === "string") {
          return item;
        }
        if (item.nodeType === 4 /* REFERENCE */) {
          const nodeRange = deserializeRangeWithSheet(item.token);
          if (!nodeRange.sheetName) {
            nodeRange.sheetName = sheetName;
          }
          if (isSupportAcrossSheet) {
            if (((_a2 = contextRef.current.activeSheet) == null ? void 0 : _a2.getName()) !== nodeRange.sheetName) {
              return item.token;
            }
          }
          const selection = orderedSelections[currentRefIndex];
          currentRefIndex++;
          if (!selection) {
            return "";
          }
          const rangeSheetId = (_b2 = selection.sheetId) != null ? _b2 : subUnitId;
          const unitRangeName = {
            range: selection,
            unitId: (_c2 = selection.unitId) != null ? _c2 : unitId,
            sheetName: getSheetNameById(rangeSheetId)
          };
          const refRanges = unitRangesToText([unitRangeName], isSupportAcrossSheet, sheetName);
          return refRanges[0];
        }
        return item.token;
      });
      let currentText = "";
      let newOffset;
      newTokens.forEach((item, index) => {
        currentText += item;
        if (index === nodeIndex) {
          newOffset = currentText.length;
        }
      });
      const theLastList = [];
      for (let index = currentRefIndex; index <= selections.length - 1; index++) {
        const selection = selections[index];
        const rangeSheetId = (_e = selection.sheetId) != null ? _e : subUnitId;
        const unitRangeName = {
          range: selection,
          unitId: (_f = selection.unitId) != null ? _f : unitId,
          sheetName: getSheetNameById(rangeSheetId)
        };
        const isAcrossSheet = rangeSheetId !== subUnitId;
        const refRanges = unitRangesToText([unitRangeName], isSupportAcrossSheet && isAcrossSheet, sheetName);
        theLastList.push(refRanges[0]);
      }
      const preNode = sequenceNodes[sequenceNodes.length - 1];
      const isPreNodeRef = preNode && (typeof preNode === "string" ? false : preNode.nodeType === 4 /* REFERENCE */);
      const result = `${currentText}${theLastList.length && isPreNodeRef ? "," : ""}${theLastList.join(",")}`;
      handleRangeChange(result, !theLastList.length && newOffset ? newOffset : result.length, isEnd);
    }
  });
  (0, import_react19.useEffect)(() => {
    if (refSelectionsRenderService && isNeed) {
      let isFirst = true;
      const handleSelectionsChange = (selections, isEnd) => {
        if (isFirst) {
          isFirst = false;
          return;
        }
        onSelectionsChange(selections.map((i) => i.rangeWithCoord), isEnd);
      };
      const disposableCollection = new DisposableCollection();
      disposableCollection.add(refSelectionsRenderService.selectionMoving$.subscribe((selections) => {
        handleSelectionsChange(selections, false);
      }));
      disposableCollection.add(refSelectionsRenderService.selectionMoveEnd$.subscribe((selections) => {
        handleSelectionsChange(selections, true);
      }));
      return () => {
        disposableCollection.dispose();
      };
    }
  }, [isNeed, onSelectionsChange, refSelectionsRenderService]);
  (0, import_react19.useEffect)(() => {
    if (isFocus && refSelectionsRenderService && editor) {
      const disposableCollection = new DisposableCollection();
      const reListen = () => {
        disposableCollection.dispose();
        const controls = refSelectionsRenderService.getSelectionControls();
        controls.forEach((control, index) => {
          disposableCollection.add(
            control.selectionScaling$.subscribe((newRange) => {
              const selections = refSelectionsRenderService.getSelectionDataWithStyle().map((i) => i.rangeWithCoord);
              const current = selections[index];
              newRange.sheetId = current.sheetId;
              newRange.unitId = current.unitId;
              selections[index] = newRange;
              onSelectionsChange(selections, false);
            })
          );
          disposableCollection.add(
            control.selectionMoving$.subscribe((newRange) => {
              const selections = refSelectionsRenderService.getSelectionDataWithStyle().map((i) => i.rangeWithCoord);
              const current = selections[index];
              newRange.sheetId = current.sheetId;
              newRange.unitId = current.unitId;
              selections[index] = newRange;
              onSelectionsChange(selections, true);
            })
          );
        });
      };
      const dispose = merge(
        editor.input$,
        refSelectionsService.selectionSet$,
        refSelectionsRenderService.selectionMoveEnd$
      ).pipe(
        debounceTime(50)
      ).subscribe(() => {
        reListen();
      });
      return () => {
        dispose.unsubscribe();
        disposableCollection.dispose();
      };
    }
  }, [editor, isFocus, onSelectionsChange, refSelectionsRenderService, refSelectionsService.selectionSet$]);
  refSelectionsRenderService == null ? void 0 : refSelectionsRenderService.getSelectionDataWithStyle();
  (0, import_react19.useEffect)(() => {
    if (listenSelectionSet) {
      const d = commandService.onCommandExecuted((commandInfo) => {
        var _a;
        if (commandInfo.id !== SetSelectionsOperation.id) {
          return;
        }
        const params = commandInfo.params;
        if (params.extra !== "formula-editor") {
          return;
        }
        if (params.selections.length) {
          const last = params.selections[params.selections.length - 1];
          if (last) {
            const isAdd = isSelectingRef.current === 1 /* NEED_ADD */;
            const selections = ((_a = refSelectionsRenderService == null ? void 0 : refSelectionsRenderService.getSelectionDataWithStyle()) != null ? _a : []).map((i) => i.rangeWithCoord);
            if (isAdd) {
              selections.push(last.range);
            } else {
              selections[selections.length - 1] = last.range;
            }
            onSelectionsChange(selections, true);
          }
        }
      });
      return () => {
        d.dispose();
      };
    }
  }, [commandService, editor, isSelectingRef, lexerTreeBuilder, listenSelectionSet, onSelectionsChange, refSelectionsRenderService]);
  (0, import_react19.useEffect)(() => {
    if (!editor) {
      return;
    }
    const sub = docSelectionManagerService.textSelection$.subscribe((e) => {
      if (e.unitId !== editor.getEditorId()) {
        return;
      }
      calcHighlightRanges({
        unitId,
        subUnitId,
        refSelections: refSelectionRef.current,
        editor,
        refSelectionsService,
        refSelectionsRenderService,
        sheetSkeletonManagerService,
        themeService,
        univerInstanceService
      });
    });
    return () => sub.unsubscribe();
  }, [docSelectionManagerService.textSelection$, editor, refSelectionRef, refSelectionsRenderService, refSelectionsService, sheetSkeletonManagerService, subUnitId, themeService, unitId, univerInstanceService]);
};

// ../packages/sheets-formula-ui/src/views/formula-editor/hooks/use-switch-sheet.ts
var import_react20 = __toESM(require_react());
var useSwitchSheet = (isNeed, unitId, isSupportAcrossSheet, isFocusSet, onBlur, refresh) => {
  const commandService = useDependency(ICommandService);
  const editorService = useDependency(IEditorService);
  const renderManagerService = useDependency(IRenderManagerService);
  const render = renderManagerService.getRenderById(unitId);
  const refSelectionsRenderService = render == null ? void 0 : render.with(RefSelectionsRenderService);
  (0, import_react20.useEffect)(() => {
    if (isNeed && refSelectionsRenderService) {
      if (isSupportAcrossSheet) {
        const d = commandService.onCommandExecuted((info) => {
          if (info.id === SetWorksheetActiveOperation.id) {
            const length = refSelectionsRenderService.getSelectionControls().length;
            for (let index = 1; index <= length; index++) {
              refSelectionsRenderService.clearLastSelection();
            }
            setTimeout(() => {
              refresh();
            }, 30);
          }
        });
        return () => {
          d.dispose();
        };
      } else {
        const d = commandService.beforeCommandExecuted((info) => {
          if (info.id === SetWorksheetActiveOperation.id) {
            isFocusSet(false);
            onBlur();
            refresh();
            const editor = editorService.getEditor(DOCS_NORMAL_EDITOR_UNIT_ID_KEY);
            editor == null ? void 0 : editor.focus();
          }
        });
        return () => {
          d.dispose();
        };
      }
    }
  }, [isNeed, refSelectionsRenderService]);
};

// ../packages/sheets-formula-ui/src/views/formula-editor/hooks/use-verify.ts
var import_react21 = __toESM(require_react());
var useVerify = (isNeed, onVerify, formulaText) => {
  const lexerTreeBuilder = useDependency(LexerTreeBuilder);
  const isInitRender = (0, import_react21.useRef)(true);
  (0, import_react21.useEffect)(() => {
    if (isNeed) {
      const time = setTimeout(() => {
        isInitRender.current = false;
      }, 500);
      return () => {
        clearTimeout(time);
      };
    }
  }, [isNeed]);
  (0, import_react21.useEffect)(() => {
    if (!isInitRender.current) {
      if (onVerify) {
        const result = lexerTreeBuilder.checkIfAddBracket(formulaText);
        onVerify(result === 0 && formulaText.startsWith("=" /* EQUALS */), `${formulaText}`);
      }
    }
  }, [formulaText, onVerify]);
};

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages/sheets-formula-ui/src/views/formula-editor/index.module.less
var index_module_default8 = {
  "sheetEmbeddingFormulaEditorActive": "univer-sheet-embedding-formula-editor-active",
  "sheetEmbeddingFormulaEditorWrap": "univer-sheet-embedding-formula-editor-wrap",
  "sheetEmbeddingFormulaEditorText": "univer-sheet-embedding-formula-editor-text",
  "sheetEmbeddingFormulaEditorError": "univer-sheet-embedding-formula-editor-error",
  "sheetEmbeddingFormulaEditor": "univer-sheet-embedding-formula-editor",
  "sheetEmbeddingFormulaEditorErrorWrap": "univer-sheet-embedding-formula-editor-error-wrap"
};

// ../packages/sheets-formula-ui/src/views/formula-editor/search-function/SearchFunction.tsx
var import_react23 = __toESM(require_react());

// ../packages/sheets-formula-ui/src/views/formula-editor/hooks/use-formula-search.ts
var import_react22 = __toESM(require_react());
var useFormulaSearch = (isNeed, nodes = [], editor) => {
  const descriptionService = useDependency(IDescriptionService);
  const [searchList, searchListSet] = (0, import_react22.useState)([]);
  const [searchText, searchTextSet] = (0, import_react22.useState)("");
  const indexRef = (0, import_react22.useRef)(-1);
  const stateRef = useStateRef({ nodes });
  const reset = () => {
    searchListSet([]);
    searchTextSet("");
    indexRef.current = -1;
  };
  (0, import_react22.useEffect)(() => {
    if (editor && isNeed) {
      const d = editor.input$.pipe(debounceTime(300)).subscribe(() => {
        const selections = editor.getSelectionRanges();
        if (selections.length === 1) {
          const nodes2 = stateRef.current.nodes;
          const range = selections[0];
          if (range.collapsed) {
            const currentNodeIndex = findIndexFromSequenceNodes(nodes2, range.startOffset - 1, false);
            indexRef.current = currentNodeIndex;
            const currentNode = nodes2[currentNodeIndex];
            if (currentNode && typeof currentNode !== "string" && currentNode.nodeType === 3 /* FUNCTION */) {
              indexRef.current = currentNodeIndex;
              const token = currentNode.token;
              const list = descriptionService.getSearchListByNameFirstLetter(token);
              searchListSet(list);
              searchTextSet(token);
              return;
            }
          }
        }
        indexRef.current = -1;
        searchTextSet("");
        searchListSet((pre) => {
          if (!(pre == null ? void 0 : pre.length)) {
            return pre;
          }
          return [];
        });
      });
      return () => {
        d.unsubscribe();
      };
    }
    ;
  }, [editor, isNeed]);
  (0, import_react22.useEffect)(() => {
    if (!isNeed) {
      reset();
    }
  }, [isNeed]);
  const handlerFormulaReplace = (formulaName) => {
    const cloneNodes = [...stateRef.current.nodes];
    if (indexRef.current !== -1) {
      const lastNodes = cloneNodes.splice(indexRef.current + 1);
      const oldNode = cloneNodes.pop() || "";
      let offset = (typeof oldNode === "string" ? oldNode.length : oldNode.token.length) - formulaName.length;
      cloneNodes.push(formulaName);
      if (lastNodes[0] !== "(" /* OPEN_BRACKET */) {
        cloneNodes.push("(" /* OPEN_BRACKET */);
        offset--;
      }
      const text = sequenceNodeToText([...cloneNodes, ...lastNodes]);
      return { text, offset };
    }
  };
  return {
    searchList,
    searchText,
    handlerFormulaReplace,
    reset
  };
};

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages/sheets-formula-ui/src/views/formula-editor/search-function/index.module.less
var index_module_default9 = {
  "formulaSearchFunction": "univer-formula-search-function",
  "formulaSearchFunctionItem": "univer-formula-search-function-item",
  "formulaSearchFunctionItemName": "univer-formula-search-function-item-name",
  "formulaSearchFunctionItemNameLight": "univer-formula-search-function-item-name-light",
  "formulaSearchFunctionItemDesc": "univer-formula-search-function-item-desc",
  "formulaSearchFunctionItemActive": "univer-formula-search-function-item-active"
};

// ../packages/sheets-formula-ui/src/views/formula-editor/search-function/SearchFunction.tsx
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var noop3 = () => {
};
var SearchFunction2 = (0, import_react23.forwardRef)(SearchFunctionFactory);
function SearchFunctionFactory(props, ref) {
  const { isFocus, sequenceNodes, onSelect, editor, onClose = noop3 } = props;
  const editorId = editor.getEditorId();
  const shortcutService = useDependency(IShortcutService);
  const commandService = useDependency(ICommandService);
  const { searchList, searchText, handlerFormulaReplace, reset: resetFormulaSearch } = useFormulaSearch(isFocus, sequenceNodes, editor);
  const visible = (0, import_react23.useMemo)(() => !!searchList.length, [searchList]);
  const ulRef = (0, import_react23.useRef)(void 0);
  const [active, activeSet] = (0, import_react23.useState)(0);
  const isEnableMouseEnterOrOut = (0, import_react23.useRef)(false);
  const [position$] = useEditorPosition(editorId, visible, [searchText, searchList]);
  const stateRef = useStateRef({ searchList, active });
  const handleFunctionSelect = (v) => {
    const res = handlerFormulaReplace(v);
    if (res) {
      resetFormulaSearch();
      onSelect(res);
    }
  };
  function handleLiMouseEnter(index) {
    if (!isEnableMouseEnterOrOut.current) {
      return;
    }
    activeSet(index);
  }
  function handleLiMouseLeave() {
    if (!isEnableMouseEnterOrOut.current) {
      return;
    }
    activeSet(-1);
  }
  (0, import_react23.useEffect)(() => {
    if (!searchList.length) {
      return;
    }
    const operationId = `sheet.formula-embedding-editor.search_function.${editorId}`;
    const d = new DisposableCollection();
    const handleKeycode = (keycode) => {
      const { searchList: searchList2, active: active2 } = stateRef.current;
      switch (keycode) {
        case 38 /* ARROW_UP */: {
          activeSet((pre) => {
            const res = Math.max(0, pre - 1);
            scrollToVisible(res);
            return res;
          });
          break;
        }
        case 40 /* ARROW_DOWN */: {
          activeSet((pre) => {
            const res = Math.min(searchList2.length - 1, pre + 1);
            scrollToVisible(res);
            return res;
          });
          break;
        }
        case 9 /* TAB */:
        case 13 /* ENTER */: {
          const item = searchList2[active2];
          handleFunctionSelect(item.name);
          break;
        }
        case 27 /* ESC */: {
          resetFormulaSearch();
          onClose();
          break;
        }
      }
    };
    d.add(commandService.registerCommand({
      id: operationId,
      type: 1 /* OPERATION */,
      handler(_event, params) {
        const { keyCode } = params;
        handleKeycode(keyCode);
      }
    }));
    [38 /* ARROW_UP */, 40 /* ARROW_DOWN */, 13 /* ENTER */, 27 /* ESC */, 9 /* TAB */].map((keyCode) => {
      return {
        id: operationId,
        binding: keyCode,
        preconditions: () => true,
        priority: 1e3,
        staticParameters: {
          eventType: 4 /* Keyboard */,
          keyCode
        }
      };
    }).forEach((item) => {
      d.add(shortcutService.registerShortcut(item));
    });
    return () => {
      d.dispose();
    };
  }, [searchList]);
  function scrollToVisible(liIndex) {
    var _a;
    const liElement = (_a = ulRef.current) == null ? void 0 : _a.querySelectorAll(`.${index_module_default9.formulaSearchFunctionItem}`)[liIndex];
    if (!liElement) return;
    const ulElement = liElement.parentNode;
    if (!ulElement) return;
    const ulRect = ulElement.getBoundingClientRect();
    const ulTop = ulRect.top;
    const ulHeight = ulElement.offsetHeight;
    const liRect = liElement.getBoundingClientRect();
    const liTop = liRect.top;
    const liHeight = liRect.height;
    if (liTop >= 0 && liTop > ulTop && liTop - ulTop + liHeight <= ulHeight) {
      return;
    }
    const scrollTo = liElement.offsetTop - (ulHeight - liHeight) / 2;
    ulElement.scrollTo({
      top: scrollTo,
      behavior: "smooth"
    });
  }
  const debounceResetMouseState = (0, import_react23.useMemo)(() => {
    let time = "";
    return () => {
      clearTimeout(time);
      isEnableMouseEnterOrOut.current = true;
      time = setTimeout(() => {
        isEnableMouseEnterOrOut.current = false;
      }, 300);
    };
  }, []);
  return searchList.length > 0 && visible && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(RectPopup, { portal: true, anchorRect$: position$, direction: "vertical", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    "ul",
    {
      className: index_module_default9.formulaSearchFunction,
      ref: (v) => {
        ulRef.current = v;
        if (ref) {
          ref.current = v;
        }
      },
      children: searchList.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
        "li",
        {
          className: active === index ? `
                              ${index_module_default9.formulaSearchFunctionItem}
                              ${index_module_default9.formulaSearchFunctionItemActive}
                            ` : index_module_default9.formulaSearchFunctionItem,
          onMouseEnter: () => handleLiMouseEnter(index),
          onMouseLeave: handleLiMouseLeave,
          onMouseMove: debounceResetMouseState,
          onClick: () => {
            handleFunctionSelect(item.name);
            if (editor) {
              editor.focus();
            }
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: index_module_default9.formulaSearchFunctionItemName, children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: index_module_default9.formulaSearchFunctionItemNameLight, children: item.name.substring(0, searchText.length) }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: item.name.slice(searchText.length) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: index_module_default9.formulaSearchFunctionItemDesc, children: item.desc })
          ]
        },
        item.name
      ))
    }
  ) });
}

// ../packages/sheets-formula-ui/src/views/formula-editor/utils/get-formula-text.ts
var getFormulaText = (formula) => {
  if (formula.startsWith("=" /* EQUALS */)) {
    return formula.slice(1);
  }
  return "";
};

// ../packages/sheets-formula-ui/src/views/formula-editor/index.tsx
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var noop4 = () => {
};
function FormulaEditor(props) {
  var _a, _b;
  const {
    errorText,
    initValue,
    unitId,
    subUnitId,
    isFocus: _isFocus = true,
    isSupportAcrossSheet = false,
    onFocus = noop4,
    onBlur = noop4,
    onChange: propOnChange,
    onVerify,
    actions,
    className,
    editorId: propEditorId,
    moveCursor = true,
    onFormulaSelectingChange: propOnFormulaSelectingChange,
    keyboradEventConfig,
    onMoveInEditor,
    resetSelectionOnBlur = true,
    autoScrollbar = true,
    isSingle = true,
    disableSelectionOnClick = false,
    disableContextMenu,
    style
  } = props;
  const editorService = useDependency(IEditorService);
  const sheetEmbeddingRef = (0, import_react24.useRef)(null);
  const onChange = useEvent(propOnChange);
  if (actions) {
    actions.handleOutClick = (e, cb) => {
      if (sheetEmbeddingRef.current) {
        const isContain = sheetEmbeddingRef.current.contains(e.target);
        !isContain && cb();
      }
    };
  }
  const onFormulaSelectingChange = useEvent(propOnFormulaSelectingChange);
  const searchFunctionRef = (0, import_react24.useRef)(null);
  const editorRef = (0, import_react24.useRef)(void 0);
  const editor = editorRef.current;
  const [isFocus, isFocusSet] = (0, import_react24.useState)(_isFocus);
  const formulaEditorContainerRef = (0, import_react24.useRef)(null);
  const editorId = (0, import_react24.useMemo)(() => propEditorId != null ? propEditorId : createInternalEditorID(`${EMBEDDING_FORMULA_EDITOR}-${generateRandomId(4)}`), []);
  const isError = (0, import_react24.useMemo)(() => errorText !== void 0, [errorText]);
  const univerInstanceService = useDependency(IUniverInstanceService);
  const document = univerInstanceService.getUnit(editorId);
  useObservable(document == null ? void 0 : document.change$);
  const getFormulaToken = useFormulaToken();
  const formulaText = BuildTextUtils.transform.getPlainText((_b = (_a = document == null ? void 0 : document.getBody()) == null ? void 0 : _a.dataStream) != null ? _b : "");
  const formulaTextRef = useStateRef(formulaText);
  const formulaWithoutEqualSymbol = (0, import_react24.useMemo)(() => getFormulaText(formulaText), [formulaText]);
  const sequenceNodes = (0, import_react24.useMemo)(() => getFormulaToken(formulaWithoutEqualSymbol), [formulaWithoutEqualSymbol, getFormulaToken]);
  const { isSelecting, isSelectingRef } = useFormulaSelecting({ unitId, subUnitId, editorId, isFocus, disableOnClick: disableSelectionOnClick });
  const highTextRef = (0, import_react24.useRef)("");
  const renderManagerService = useDependency(IRenderManagerService);
  const renderer = renderManagerService.getRenderById(editorId);
  const docSelectionRenderService = renderer == null ? void 0 : renderer.with(DocSelectionRenderService);
  const isFocusing = docSelectionRenderService == null ? void 0 : docSelectionRenderService.isFocusing;
  const currentDoc$ = (0, import_react24.useMemo)(() => univerInstanceService.getCurrentTypeOfUnit$(O.UNIVER_DOC), [univerInstanceService]);
  const currentDoc = useObservable(currentDoc$);
  const docFocusing = (currentDoc == null ? void 0 : currentDoc.getUnitId()) === editorId;
  const refSelections = (0, import_react24.useRef)([]);
  const selectingMode = isSelecting;
  useUpdateEffect(() => {
    onChange(formulaText);
  }, [formulaText, onChange]);
  const highlightDoc = useDocHight("=");
  const highlightSheet = useSheetHighlight(unitId, subUnitId);
  const highlight = useEvent((text, isNeedResetSelection = true, isEnd, newSelections) => {
    if (!editorRef.current) return;
    highTextRef.current = text;
    const sequenceNodes2 = getFormulaToken(text[0] === "=" ? text.slice(1) : "");
    const ranges = highlightDoc(
      editorRef.current,
      sequenceNodes2,
      isNeedResetSelection,
      newSelections
    );
    refSelections.current = ranges;
    if (isEnd) {
      const currentDocSelections = newSelections != null ? newSelections : editor == null ? void 0 : editor.getSelectionRanges();
      if ((currentDocSelections == null ? void 0 : currentDocSelections.length) !== 1) {
        return;
      }
      const docRange = currentDocSelections[0];
      const offset = docRange.startOffset - 1;
      const nodeIndex = findIndexFromSequenceNodes(sequenceNodes2, offset, false);
      const refIndex = findRefSequenceIndex(sequenceNodes2, nodeIndex);
      if (refIndex >= 0) {
        const target = ranges.splice(refIndex, 1)[0];
        target && ranges.push(target);
      }
      highlightSheet(isFocus ? ranges : [], editorRef.current);
    }
  });
  (0, import_react24.useEffect)(() => {
    if (isFocus) {
      highlight(formulaText, false, true);
    }
  }, [isFocus]);
  (0, import_react24.useEffect)(() => {
    if (isFocus) {
      if (highTextRef.current === formulaText) return;
      highlight(formulaText, false, true);
    }
  }, [formulaText]);
  useVerify(isFocus, onVerify, formulaText);
  const focus = useFocus(editor);
  const resetSelection = useResetSelection(isFocus, unitId, subUnitId);
  (0, import_react24.useEffect)(() => {
    onFormulaSelectingChange(isSelecting);
  }, [onFormulaSelectingChange, isSelecting]);
  useKeyboardEvent(isFocus, keyboradEventConfig, editor);
  (0, import_react24.useLayoutEffect)(() => {
    let dispose;
    if (formulaEditorContainerRef.current) {
      dispose = editorService.register({
        autofocus: true,
        editorUnitId: editorId,
        initialSnapshot: {
          id: editorId,
          body: {
            dataStream: `${initValue}\r
`,
            textRuns: [],
            customBlocks: [],
            customDecorations: [],
            customRanges: []
          },
          documentStyle: {}
        }
      }, formulaEditorContainerRef.current);
      const editor2 = editorService.getEditor(editorId);
      editorRef.current = editor2;
      highlight(initValue, false, true);
    }
    return () => {
      dispose == null ? void 0 : dispose.dispose();
    };
  }, []);
  (0, import_react24.useLayoutEffect)(() => {
    if (_isFocus) {
      isFocusSet(_isFocus);
      focus();
    } else {
      if (resetSelectionOnBlur) {
        editor == null ? void 0 : editor.blur();
        resetSelection();
      }
      isFocusSet(_isFocus);
    }
  }, [_isFocus, editor, focus, resetSelection, resetSelectionOnBlur]);
  const { checkScrollBar } = useResize(editor, isSingle, autoScrollbar);
  useRefactorEffect(isFocus, Boolean(isSelecting && docFocusing), unitId, disableContextMenu);
  useLeftAndRightArrow(isFocus && moveCursor, selectingMode, editor, onMoveInEditor);
  const handleSelectionChange = useEvent((refString, offset, isEnd) => {
    if (!isFocusing) {
      return;
    }
    const newSelections = offset !== -1 ? [{ startOffset: offset + 1, endOffset: offset + 1, collapsed: true }] : void 0;
    highlight(`=${refString}`, true, isEnd, newSelections);
    if (isEnd) {
      focus();
      if (offset !== -1) {
        setTimeout(() => {
          const range = { startOffset: offset + 1, endOffset: offset + 1 };
          const docBackScrollRenderController = editor == null ? void 0 : editor.render.with(DocBackScrollRenderController);
          docBackScrollRenderController == null ? void 0 : docBackScrollRenderController.scrollToRange({ ...range, collapsed: true });
        }, 50);
      }
      checkScrollBar();
    }
  });
  useSheetSelectionChange(
    isFocus && Boolean(isSelecting && docFocusing),
    isFocus,
    isSelectingRef,
    unitId,
    subUnitId,
    refSelections,
    isSupportAcrossSheet,
    Boolean(selectingMode),
    editor,
    handleSelectionChange
  );
  useSwitchSheet(isFocus && Boolean(isSelecting && docFocusing), unitId, isSupportAcrossSheet, isFocusSet, onBlur, () => {
    highlight(formulaTextRef.current, false, true);
  });
  const handleFunctionSelect = (res) => {
    if (res) {
      const selections = editor == null ? void 0 : editor.getSelectionRanges();
      if (selections && selections.length === 1) {
        const range = selections[0];
        if (range.collapsed) {
          const offset = res.offset;
          setTimeout(() => {
            editor == null ? void 0 : editor.setSelectionRanges([{ startOffset: range.startOffset - offset, endOffset: range.endOffset - offset }]);
          }, 30);
        }
      }
      focus();
      highlight(`=${res.text}`);
    }
  };
  const handleMouseUp = () => {
    isFocusSet(true);
    onFocus();
    focus();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { style, className: clsx(index_module_default8.sheetEmbeddingFormulaEditor, className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "div",
      {
        className: clsx(index_module_default8.sheetEmbeddingFormulaEditorWrap, {
          [index_module_default8.sheetEmbeddingFormulaEditorActive]: isFocus,
          [index_module_default8.sheetEmbeddingFormulaEditorError]: isError
        }),
        ref: sheetEmbeddingRef,
        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          "div",
          {
            className: index_module_default8.sheetEmbeddingFormulaEditorText,
            ref: formulaEditorContainerRef,
            onMouseUp: handleMouseUp
          }
        )
      }
    ),
    errorText !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: index_module_default8.sheetEmbeddingFormulaEditorErrorWrap, children: errorText }) : null,
    editor ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      HelpFunction2,
      {
        editor,
        isFocus,
        formulaText,
        onClose: () => focus()
      }
    ) : null,
    editor ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      SearchFunction2,
      {
        isFocus,
        sequenceNodes,
        onSelect: handleFunctionSelect,
        ref: searchFunctionRef,
        editor
      }
    ) : null
  ] });
}

// ../packages/sheets-formula-ui/src/views/range-selector/index.tsx
var import_react27 = __toESM(require_react());

// ../packages/sheets-formula-ui/src/views/range-selector/hooks/use-ranges-highlight.ts
var import_react25 = __toESM(require_react());
function useRangesHighlight(editor, focusing, unitId, subUnitId) {
  const lexerTreeBuilder = useDependency(LexerTreeBuilder);
  const highlightDoc = useDocHight("");
  const change = useObservable(editor == null ? void 0 : editor.getDocumentDataModel().change$);
  const [sequenceNodes, setSequenceNodes] = (0, import_react25.useState)([]);
  const markSelectionService = useDependency(IMarkSelectionService);
  const last = (0, import_react25.useRef)("");
  const univerInstanceService = useDependency(IUniverInstanceService);
  (0, import_react25.useEffect)(() => {
    if (!editor) return;
    const text = editor.getDocumentDataModel().getPlainText();
    if (last.current === text) {
      return;
    }
    last.current = text;
    const nodes = lexerTreeBuilder.sequenceNodesBuilder(text);
    setSequenceNodes(nodes != null ? nodes : []);
  }, [change, editor, lexerTreeBuilder]);
  (0, import_react25.useEffect)(() => {
    var _a, _b;
    if (!editor) return;
    if (!focusing) {
      const current = editor.getDocumentData();
      editor.setDocumentData({
        ...current,
        body: {
          ...current.body,
          dataStream: (_b = (_a = current.body) == null ? void 0 : _a.dataStream) != null ? _b : "",
          textRuns: []
        }
      });
      return;
    }
    const selections = highlightDoc(editor, sequenceNodes, false);
    const disposable = new DisposableCollection();
    selections.forEach((selection) => {
      const range = deserializeRangeWithSheet(selection.token);
      const workbook = univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET);
      const worksheet = workbook == null ? void 0 : workbook.getActiveSheet();
      if (!range.sheetName && subUnitId !== (worksheet == null ? void 0 : worksheet.getSheetId()) || range.sheetName && (worksheet == null ? void 0 : worksheet.getName()) !== range.sheetName) {
        return;
      }
      const rgb = new ColorKit(selection.themeColor).toRgb();
      const id = markSelectionService.addShape({
        range: range.range,
        style: {
          stroke: selection.themeColor,
          fill: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)`,
          strokeDash: 12
        },
        primary: null
      });
      if (id) {
        disposable.add(() => markSelectionService.removeShape(id));
      }
    });
    return () => {
      disposable.dispose();
    };
  }, [editor, focusing, highlightDoc, markSelectionService, sequenceNodes]);
  return { sequenceNodes };
}

// ../packages/sheets-formula-ui/src/views/range-selector/hooks/use-selection-change.ts
var import_react26 = __toESM(require_react());
function useRangeSelectorSelectionChange(opts) {
  const sheetsSelectionsService = useDependency(SheetsSelectionsService);
  const { supportAcrossSheet = false, unitId, subUnitId, onChange: _onChange } = opts;
  const univerInstanceService = useDependency(IUniverInstanceService);
  const workbook = univerInstanceService.getUnit(unitId, O.UNIVER_SHEET);
  const onChange = useEvent(_onChange);
  const handleSelectionChange = useEvent((selections, isStart) => {
    const currentSheet = workbook == null ? void 0 : workbook.getActiveSheet();
    if (!currentSheet) return;
    if (!supportAcrossSheet && currentSheet.getSheetId() !== subUnitId) return;
    if (!(selections == null ? void 0 : selections.length)) return;
    const ranges = selections.map((item) => ({
      range: item.range,
      unitId,
      sheetName: currentSheet.getSheetId() === subUnitId ? "" : currentSheet.getName()
    }));
    onChange(ranges, isStart);
  });
  (0, import_react26.useEffect)(() => {
    const disposableCollection = new DisposableCollection();
    disposableCollection.add(sheetsSelectionsService.selectionMoveStart$.subscribe((selections) => {
      handleSelectionChange(selections, true);
    }));
    disposableCollection.add(sheetsSelectionsService.selectionMoving$.subscribe((selections) => {
      handleSelectionChange(selections, false);
    }));
    disposableCollection.add(sheetsSelectionsService.selectionMoveEnd$.subscribe((selections) => {
      handleSelectionChange(selections, false);
    }));
    return () => {
      disposableCollection.dispose();
    };
  }, [handleSelectionChange, sheetsSelectionsService.selectionMoveEnd$, sheetsSelectionsService.selectionMoveStart$, sheetsSelectionsService.selectionMoving$]);
}

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages/sheets-formula-ui/src/views/range-selector/index.module.less
var index_module_default10 = {
  "sheetRangeSelectorTextWrap": "univer-sheet-range-selector-text-wrap",
  "sheetRangeSelectorPlaceholder": "univer-sheet-range-selector-placeholder",
  "sheetRangeSelectorError": "univer-sheet-range-selector-error",
  "sheetRangeSelectorErrorWrap": "univer-sheet-range-selector-error-wrap",
  "sheetRangeSelectorText": "univer-sheet-range-selector-text",
  "sheetRangeSelectorActive": "univer-sheet-range-selector-active",
  "sheetRangeSelectorIcon": "univer-sheet-range-selector-icon",
  "sheetRangeSelectorDialog": "univer-sheet-range-selector-dialog",
  "sheetRangeSelectorDialogItem": "univer-sheet-range-selector-dialog-item",
  "sheetRangeSelectorDialogItemDelete": "univer-sheet-range-selector-dialog-item-delete"
};

// ../packages/sheets-formula-ui/src/views/range-selector/util.ts
var verifyRange = (sequenceNodes) => {
  const isFail = sequenceNodes.some((item) => {
    if (typeof item === "string") {
      if (item !== "," /* COMMA */) {
        return true;
      }
    } else {
      if (item.nodeType !== 4 /* REFERENCE */) {
        return true;
      }
    }
    return false;
  });
  return !isFail;
};

// ../packages/sheets-formula-ui/src/views/range-selector/utils/range-pre-process.ts
var rangePreProcess = (range) => {
  if (range.endColumn < range.startColumn) {
    const end = range.endColumn;
    range.endColumn = range.startColumn;
    range.startColumn = end;
  }
  if (range.endRow < range.startRow) {
    const end = range.endRow;
    range.endRow = range.startRow;
    range.startRow = end;
  }
  return range;
};

// ../packages/sheets-formula-ui/src/views/range-selector/index.tsx
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
function RangeSelectorDialog(props) {
  const { visible, initialValue, unitId, subUnitId, maxRangeCount = Infinity, supportAcrossSheet, onConfirm, onClose, onShowBySelection } = props;
  const localeService = useDependency(LocaleService);
  const lexerTreeBuilder = useDependency(LexerTreeBuilder);
  const [ranges, setRanges] = (0, import_react27.useState)([]);
  const [focusIndex, setFocusIndex] = (0, import_react27.useState)(0);
  const scrollbarRef = (0, import_react27.useRef)(null);
  (0, import_react27.useEffect)(() => {
    if (visible && initialValue.length) {
      const newRanges = initialValue.map((range) => range.sheetName ? serializeRangeWithSheet(range.sheetName, range.range) : serializeRange(range.range));
      setRanges(newRanges);
      setFocusIndex(newRanges.length - 1);
    } else {
      setRanges([""]);
      setFocusIndex(0);
    }
  }, [visible]);
  const handleRangeInput = (index, value) => {
    const newRanges = [...ranges];
    newRanges[index] = value;
    setRanges(newRanges);
  };
  const handleRangeAdd = () => {
    setRanges([...ranges, ""]);
    setFocusIndex(ranges.length);
  };
  const handleRangeRemove = (index) => {
    ranges.splice(index, 1);
    setRanges([...ranges]);
  };
  useRangeSelectorSelectionChange({
    unitId,
    subUnitId,
    supportAcrossSheet,
    onChange: (selections, isStart) => {
      if (!visible) {
        if (onShowBySelection == null ? void 0 : onShowBySelection(selections)) {
          return;
        }
      }
      const current = new Set(ranges);
      const addedRangesOrigin = selections.map((range) => !range.sheetName ? serializeRange(range.range) : serializeRangeWithSheet(range.sheetName, range.range));
      const addedRanges = addedRangesOrigin.filter((item) => !current.has(item));
      if (!addedRanges.length) return;
      const newRanges = [...ranges];
      if (addedRangesOrigin.length > 1) {
        if (!isStart) {
          newRanges.splice(focusIndex, 1);
        }
        newRanges.push(...addedRanges);
        const finalRanges = newRanges.slice(0, maxRangeCount);
        setRanges(finalRanges);
        setFocusIndex(finalRanges.length - 1);
        requestAnimationFrame(() => {
          var _a;
          (_a = scrollbarRef.current) == null ? void 0 : _a.scrollTo({ top: scrollbarRef.current.scrollHeight });
        });
      } else {
        newRanges.splice(focusIndex, 1, ...addedRanges);
        const finalRanges = newRanges.slice(0, maxRangeCount);
        setRanges(finalRanges);
        setFocusIndex(focusIndex + addedRanges.length - 1);
      }
    }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    Dialog,
    {
      width: "328px",
      visible,
      title: localeService.t("rangeSelector.title"),
      draggable: true,
      closeIcon: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(close_single_default, {}),
      footer: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("footer", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Button, { onClick: onClose, children: localeService.t("rangeSelector.cancel") }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          Button,
          {
            style: { marginLeft: 10 },
            onClick: () => {
              onConfirm(
                ranges.filter((text) => {
                  const nodes = lexerTreeBuilder.sequenceNodesBuilder(text);
                  return nodes && nodes.length === 1 && typeof nodes[0] !== "string" && nodes[0].nodeType === 4 /* REFERENCE */;
                }).map((text) => deserializeRangeWithSheet(text)).map((unitRange) => ({ ...unitRange, range: rangePreProcess(unitRange.range) }))
              );
            },
            type: "primary",
            children: localeService.t("rangeSelector.confirm")
          }
        )
      ] }),
      onClose,
      children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { ref: scrollbarRef, className: index_module_default10.sheetRangeSelectorDialog, children: [
        ranges.map((text, index) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: index_module_default10.sheetRangeSelectorDialogItem, children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            Input,
            {
              affixWrapperStyle: { width: "100%" },
              placeholder: localeService.t("rangeSelector.placeHolder"),
              onFocus: () => setFocusIndex(index),
              value: text,
              onChange: (value) => handleRangeInput(index, value),
              style: { borderColor: focusIndex === index ? "rgb(var(--primary-color))" : void 0 }
            }
          ),
          ranges.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(delete_single_default, { className: index_module_default10.sheetRangeSelectorDialogItemDelete, onClick: () => handleRangeRemove(index) })
        ] }, index)),
        ranges.length < maxRangeCount && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(Button, { type: "link", size: "small", onClick: handleRangeAdd, children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(increase_single_default, {}),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { children: localeService.t("rangeSelector.addAnotherRange") })
        ] }) })
      ] })
    }
  );
}
function parseRanges(rangeString) {
  return rangeString.split("," /* COMMA */).filter((e) => !!e).map((text) => deserializeRangeWithSheet(text));
}
function stringifyRanges(ranges) {
  return ranges.map((range) => range.sheetName ? serializeRangeWithSheet(range.sheetName, range.range) : serializeRange(range.range)).join("," /* COMMA */);
}
function RangeSelector(props) {
  const [editor, setEditor] = (0, import_react27.useState)(null);
  const {
    onVerify,
    selectorRef,
    unitId,
    subUnitId,
    maxRangeCount,
    supportAcrossSheet,
    autoFocus,
    onChange,
    onRangeSelectorDialogVisibleChange,
    onClickOutside,
    onFocusChange,
    forceShowDialogWhenSelectionChanged,
    hideEditor,
    resetRange
  } = props;
  const [focusing, setFocusing] = (0, import_react27.useState)(autoFocus != null ? autoFocus : false);
  const [popupVisible, setPopupVisible] = (0, import_react27.useState)(false);
  const [rangeSelectorRanges, setRangeSelectorRanges] = (0, import_react27.useState)([]);
  const localeService = useDependency(LocaleService);
  const editorService = useDependency(IEditorService);
  const { sequenceNodes } = useRangesHighlight(editor, focusing, unitId, subUnitId);
  const sequenceNodesRef = useStateRef(sequenceNodes);
  const commandService = useDependency(ICommandService);
  const blurEditor = useEvent(() => {
    editor == null ? void 0 : editor.setSelectionRanges([]);
    editor == null ? void 0 : editor.blur();
    editorService.blur();
  });
  const handleOpenModal = useEvent(() => {
    var _a;
    blurEditor();
    setRangeSelectorRanges(parseRanges((_a = editor == null ? void 0 : editor.getDocumentDataModel().getPlainText()) != null ? _a : ""));
    setPopupVisible(true);
  });
  (0, import_react27.useEffect)(() => {
    if (!selectorRef) return;
    selectorRef.current = {
      get editor() {
        return editor;
      },
      focus() {
        editorService.focus(editor.getEditorId());
      },
      blur: blurEditor,
      verify: () => verifyRange(sequenceNodesRef.current),
      showDialog: (ranges) => {
        blurEditor();
        setRangeSelectorRanges(ranges);
        setPopupVisible(true);
      },
      hideDialog: () => {
        setRangeSelectorRanges([]);
        setPopupVisible(false);
      },
      getValue: () => {
        var _a;
        return (_a = editor == null ? void 0 : editor.getDocumentDataModel().getPlainText()) != null ? _a : "";
      }
    };
  }, [blurEditor, editor, editorService, selectorRef, sequenceNodesRef]);
  (0, import_react27.useEffect)(() => {
    var _a;
    onVerify == null ? void 0 : onVerify(verifyRange(sequenceNodes), (_a = editor == null ? void 0 : editor.getDocumentDataModel().getPlainText()) != null ? _a : "");
  }, [sequenceNodes]);
  (0, import_react27.useEffect)(() => {
    onRangeSelectorDialogVisibleChange == null ? void 0 : onRangeSelectorDialogVisibleChange(popupVisible);
  }, [popupVisible]);
  (0, import_react27.useEffect)(() => {
    if (popupVisible && resetRange) {
      return () => {
        const params = {
          unitId,
          subUnitId,
          selections: resetRange
        };
        commandService.executeCommand(SetSelectionsOperation.id, params);
      };
    }
  }, [popupVisible]);
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
    !hideEditor ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      RichTextEditor,
      {
        isSingle: true,
        ...props,
        onFocusChange: (focusing2, newValue) => {
          setFocusing(focusing2);
          onFocusChange == null ? void 0 : onFocusChange(focusing2, newValue);
        },
        editorRef: setEditor,
        onClickOutside: () => {
          setFocusing(false);
          blurEditor();
          onClickOutside == null ? void 0 : onClickOutside();
        },
        icon: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Tooltip, { title: localeService.t("rangeSelector.buttonTooltip"), placement: "bottom", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(select_range_single_default, { className: index_module_default10.sheetRangeSelectorIcon, onClick: handleOpenModal }) })
      }
    ) : null,
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      RangeSelectorDialog,
      {
        initialValue: rangeSelectorRanges,
        unitId,
        subUnitId,
        visible: popupVisible,
        maxRangeCount,
        onConfirm: (ranges) => {
          const resultStr = stringifyRanges(ranges);
          const empty = RichTextBuilder.newEmptyData();
          empty.body.dataStream = resultStr;
          editor == null ? void 0 : editor.replaceText(resultStr, false);
          onChange == null ? void 0 : onChange(empty, resultStr);
          setPopupVisible(false);
          setRangeSelectorRanges([]);
          requestAnimationFrame(() => {
            blurEditor();
          });
        },
        onClose: () => {
          setPopupVisible(false);
          setRangeSelectorRanges([]);
        },
        supportAcrossSheet,
        onShowBySelection: (ranges) => {
          if (focusing || forceShowDialogWhenSelectionChanged) {
            setRangeSelectorRanges(ranges);
            setPopupVisible(true);
            return false;
          } else {
            return true;
          }
        }
      }
    )
  ] });
}

// ../packages/sheets-formula-ui/src/views/range-selector/global.tsx
var import_react28 = __toESM(require_react());
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
var GlobalRangeSelector = () => {
  var _a, _b;
  const rangeSelectorService = useDependency(GlobalRangeSelectorService);
  const current = useObservable(rangeSelectorService.currentSelector$);
  const instance = (0, import_react28.useRef)(null);
  (0, import_react28.useEffect)(() => {
    var _a2, _b2;
    if (current) {
      (_b2 = instance.current) == null ? void 0 : _b2.showDialog((_a2 = current.initialValue) != null ? _a2 : []);
      return () => {
        var _a3;
        (_a3 = instance.current) == null ? void 0 : _a3.hideDialog();
      };
    }
  }, [current]);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    RangeSelector,
    {
      unitId: (_a = current == null ? void 0 : current.unitId) != null ? _a : "",
      subUnitId: (_b = current == null ? void 0 : current.subUnitId) != null ? _b : "",
      hideEditor: true,
      selectorRef: instance,
      onChange: (_, value) => {
        var _a2;
        current == null ? void 0 : current.callback((_a2 = value == null ? void 0 : value.split(",").map((i) => deserializeRangeWithSheet(i))) != null ? _a2 : []);
      }
    }
  );
};

// ../packages/sheets-formula-ui/src/sheets-formula-ui.plugin.ts
var UniverSheetsFormulaUIPlugin = class extends Plugin {
  constructor(_config = defaultPluginBaseConfig, _injector, _renderManagerService, _configService, _uiPartsService) {
    super();
    this._config = _config;
    this._injector = _injector;
    this._renderManagerService = _renderManagerService;
    this._configService = _configService;
    this._uiPartsService = _uiPartsService;
    const { menu, ...rest } = merge_default(
      defaultPluginBaseConfig,
      this._config
    );
    if (menu) {
      this._configService.setConfig("menu", menu, { merge: true });
    }
    this._configService.setConfig(PLUGIN_CONFIG_KEY_BASE, rest, { merge: true });
  }
  onStarting() {
    registerDependencies(this._injector, [
      [IFormulaPromptService, { useClass: FormulaPromptService }],
      [GlobalRangeSelectorService],
      [FormulaUIController],
      [FormulaAutoFillController],
      [FormulaClipboardController],
      [FormulaEditorShowController],
      [FormulaRenderManagerController]
    ]);
  }
  onRendered() {
    [
      [RefSelectionsRenderService],
      [FormulaAlertRenderController]
    ].forEach((dep) => {
      this.disposeWithMe(this._renderManagerService.registerRenderModule(O.UNIVER_SHEET, dep));
    });
    touchDependencies(this._injector, [
      [FormulaUIController],
      // FormulaProgressBar relies on TriggerCalculationController, but it is necessary to ensure that the formula calculation is done after rendered.
      [FormulaClipboardController],
      [FormulaRenderManagerController]
    ]);
    this._initUIPart();
  }
  onSteady() {
    this._injector.get(FormulaAutoFillController);
  }
  _initUIPart() {
    const componentManager = this._injector.get(ComponentManager);
    this.disposeWithMe(componentManager.register(RANGE_SELECTOR_COMPONENT_KEY, RangeSelector));
    this.disposeWithMe(componentManager.register(EMBEDDING_FORMULA_EDITOR_COMPONENT_KEY, FormulaEditor));
    this.disposeWithMe(this._uiPartsService.registerComponent("global" /* GLOBAL */, () => connectInjector(GlobalRangeSelector, this._injector)));
  }
};
__publicField(UniverSheetsFormulaUIPlugin, "pluginName", FORMULA_UI_PLUGIN_NAME);
__publicField(UniverSheetsFormulaUIPlugin, "type", O.UNIVER_SHEET);
UniverSheetsFormulaUIPlugin = __decorateClass([
  DependentOn(UniverFormulaEnginePlugin, UniverSheetsFormulaPlugin),
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IRenderManagerService),
  __decorateParam(3, IConfigService),
  __decorateParam(4, IUIPartsService)
], UniverSheetsFormulaUIPlugin);

export {
  FORMULA_PROMPT_ACTIVATED,
  FormulaEditor,
  RangeSelector,
  GlobalRangeSelectorService,
  UniverSheetsFormulaUIPlugin
};
//# sourceMappingURL=chunk-6EX6BLVI.js.map
