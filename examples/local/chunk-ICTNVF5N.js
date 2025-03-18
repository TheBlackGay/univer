import {
  AddDecimalCommand,
  CURRENCYFORMAT,
  DATEFMTLISG,
  MenuCurrencyService,
  NUMBERFORMAT,
  SetCurrencyCommand,
  SetNumfmtCommand,
  SetPercentCommand,
  SheetsNumfmtCellContentController,
  SubtractDecimalCommand,
  UniverSheetsNumfmtPlugin,
  countryCurrencyMap,
  currencySymbols,
  getCurrencyFormatOptions,
  getCurrencyType,
  getDateFormatOptions,
  getDecimalFromPattern,
  getNumberFormatOptions,
  getPatternPreview,
  getPatternPreviewIgnoreGeneral,
  getPatternType,
  isPatternEqualWithoutDecimal,
  isPatternHasDecimal,
  setPatternDecimal
} from "./chunk-YZCWNVH6.js";
import {
  CellAlertManagerService,
  HoverManagerService,
  IEditorBridgeService,
  SheetSkeletonManagerService,
  UniverSheetsUIPlugin,
  deriveStateFromActiveSheet$,
  getCurrentRangeDisable$
} from "./chunk-NW7E7FBW.js";
import {
  ComponentManager,
  ILayoutService,
  IMenuManagerService,
  IRenderManagerService,
  ISidebarService,
  IZenZoneService,
  UI_PLUGIN_CONFIG_KEY,
  getMenuHiddenObservable,
  useDependency
} from "./chunk-DOZPYWOG.js";
import {
  Button,
  Input,
  InputNumber,
  Select,
  SelectList,
  Separator,
  check_mark_single_default,
  require_jsx_runtime,
  require_react
} from "./chunk-22LKBS37.js";
import {
  AFTER_CELL_EDIT,
  BEFORE_CELL_EDIT,
  DEFAULT_TEXT_FORMAT_EXCEL,
  DependentOn,
  Disposable,
  DisposableCollection,
  FormulaDataModel,
  ICommandService,
  IConfigService,
  ILocalStorageService,
  INTERCEPTOR_POINT,
  INumfmtService,
  IUniverInstanceService,
  Inject,
  Injector,
  LocaleService,
  O,
  Observable,
  Optional,
  Plugin,
  Range,
  RangeProtectionPermissionEditPoint,
  RemoveNumfmtMutation,
  SetNumfmtMutation,
  SetRangeValuesCommand,
  SheetInterceptorService,
  SheetsSelectionsService,
  ThemeService,
  WorkbookEditablePermission,
  WorksheetEditPermission,
  WorksheetSetCellStylePermission,
  combineLatest,
  debounceTime,
  factoryRemoveNumfmtUndoMutation,
  factorySetNumfmtUndoMutation,
  filter,
  fromCallback,
  isDefaultFormat,
  isRealNum,
  isTextFormat,
  map,
  merge,
  merge_default,
  numfmt,
  registerDependencies,
  switchMap,
  tap,
  toDisposable,
  touchDependencies,
  transformCellsToRange
} from "./chunk-33NDYU5R.js";
import {
  __decorateClass,
  __decorateParam,
  __publicField,
  __toESM
} from "./chunk-NSSCU2QI.js";

// ../packages/sheets-numfmt-ui/src/controllers/config.schema.ts
var SHEETS_NUMFMT_UI_PLUGIN_CONFIG_KEY = "sheets-numfmt.config";
var configSymbol = Symbol(SHEETS_NUMFMT_UI_PLUGIN_CONFIG_KEY);
var defaultPluginConfig = {};

// ../packages/sheets-numfmt-ui/src/controllers/numfmt-alert-render.controller.ts
var ALERT_KEY = "SHEET_NUMFMT_ALERT";
var NumfmtAlertRenderController = class extends Disposable {
  constructor(_context, _hoverManagerService, _cellAlertManagerService, _localeService, _formulaDataModel, _zenZoneService, _numfmtService) {
    super();
    this._context = _context;
    this._hoverManagerService = _hoverManagerService;
    this._cellAlertManagerService = _cellAlertManagerService;
    this._localeService = _localeService;
    this._formulaDataModel = _formulaDataModel;
    this._zenZoneService = _zenZoneService;
    this._numfmtService = _numfmtService;
    this._init();
  }
  _init() {
    this._initCellAlertPopup();
    this._initZenService();
  }
  _initCellAlertPopup() {
    this.disposeWithMe(this._hoverManagerService.currentCell$.pipe(debounceTime(100)).subscribe((cellPos) => {
      var _a;
      if (cellPos) {
        const location = cellPos.location;
        const workbook = this._context.unit;
        const worksheet = workbook.getActiveSheet();
        if (!worksheet) return;
        const unitId = location.unitId;
        const sheetId = location.subUnitId;
        let numfmtValue;
        const cellData = worksheet.getCell(location.row, location.col);
        if (cellData == null ? void 0 : cellData.s) {
          const style = workbook.getStyles().get(cellData.s);
          if (style == null ? void 0 : style.n) {
            numfmtValue = style.n;
          }
        }
        if (!numfmtValue) {
          numfmtValue = this._numfmtService.getValue(unitId, sheetId, location.row, location.col);
        }
        if (!numfmtValue) {
          this._hideAlert();
          return;
        }
        if (isTextFormat(numfmtValue.pattern) && (cellData == null ? void 0 : cellData.v) && isRealNum(cellData.v)) {
          const currentAlert = this._cellAlertManagerService.currentAlert.get(ALERT_KEY);
          const currentLoc = (_a = currentAlert == null ? void 0 : currentAlert.alert) == null ? void 0 : _a.location;
          if (currentLoc && currentLoc.row === location.row && currentLoc.col === location.col && currentLoc.subUnitId === location.subUnitId && currentLoc.unitId === location.unitId) {
            return;
          }
          this._cellAlertManagerService.showAlert({
            type: 2 /* ERROR */,
            title: this._localeService.t("info.error"),
            message: this._localeService.t("info.forceStringInfo"),
            location,
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
NumfmtAlertRenderController = __decorateClass([
  __decorateParam(1, Inject(HoverManagerService)),
  __decorateParam(2, Inject(CellAlertManagerService)),
  __decorateParam(3, Inject(LocaleService)),
  __decorateParam(4, Inject(FormulaDataModel)),
  __decorateParam(5, IZenZoneService),
  __decorateParam(6, Inject(INumfmtService))
], NumfmtAlertRenderController);

// ../packages/sheets-numfmt-ui/src/commands/operations/close.numfmt.panel.operation.ts
var CloseNumfmtPanelOperator = {
  id: "sheet.operation.close.numfmt.panel",
  type: 1 /* OPERATION */,
  handler: () => (
    // do nothing, just notify panel is closed
    true
  )
};

// ../packages/sheets-numfmt-ui/src/commands/operations/open.numfmt.panel.operation.ts
var OpenNumfmtPanelOperator = {
  id: "sheet.operation.open.numfmt.panel",
  type: 1 /* OPERATION */,
  handler: (accessor) => {
    const numfmtController = accessor.get(SheetNumfmtUIController);
    numfmtController.openPanel();
    return true;
  }
};

// ../packages/sheets-numfmt-ui/src/views/components/index.tsx
var import_react9 = __toESM(require_react());

// ../packages/sheets-numfmt-ui/src/controllers/user-habit.controller.ts
var import_react = __toESM(require_react());
var UserHabitCurrencyContext = (0, import_react.createContext)([]);
var UserHabitController = class {
  constructor(_localStorageService) {
    this._localStorageService = _localStorageService;
  }
  _getKey(habit) {
    return `userHabitController_${habit}`;
  }
  async addHabit(habit, initValue) {
    const key3 = this._getKey(habit);
    return this._localStorageService.getItem(key3).then((item) => {
      if (!item) {
        this._localStorageService.setItem(key3, initValue);
      }
    });
  }
  markHabit(habit, value) {
    const key3 = this._getKey(habit);
    this._localStorageService.getItem(key3).then((list) => {
      if (list) {
        const index = list.findIndex((item) => item === value);
        index > -1 && list.splice(index, 1);
        list.unshift(value);
        this._localStorageService.setItem(key3, list);
      }
    });
  }
  async getHabit(habit, sortList) {
    const key3 = this._getKey(habit);
    const result = await this._localStorageService.getItem(key3);
    if (sortList && result) {
      const priority = result.map((item, index, arr) => {
        const length = arr.length;
        return {
          value: item,
          priority: length - index
        };
      });
      return sortList.sort((a, b) => {
        var _a, _b;
        const ap = ((_a = priority.find((item) => item.value === a)) == null ? void 0 : _a.priority) || -1;
        const bp = ((_b = priority.find((item) => item.value === b)) == null ? void 0 : _b.priority) || -1;
        return bp - ap;
      });
    }
    return result || [];
  }
  deleteHabit(habit) {
    this._localStorageService.removeItem(habit);
  }
};
UserHabitController = __decorateClass([
  __decorateParam(0, Inject(ILocalStorageService))
], UserHabitController);

// ../packages/sheets-numfmt-ui/src/views/hooks/use-currency-options.ts
var import_react2 = __toESM(require_react());
var key = "numfmtCurrency";
var useCurrencyOptions = (onOptionChange) => {
  const userHabitController = useDependency(UserHabitController);
  const [options, optionsSet] = (0, import_react2.useState)(currencySymbols);
  (0, import_react2.useEffect)(() => {
    userHabitController.addHabit("numfmtCurrency", []).then(() => {
      userHabitController.getHabit(key, [...currencySymbols]).then((list) => {
        optionsSet(list);
        onOptionChange && onOptionChange(list);
      });
    });
  }, []);
  const mark = (v) => {
    userHabitController.markHabit(key, v);
  };
  return { userHabitCurrency: options, mark };
};

// ../packages/sheets-numfmt-ui/src/views/hooks/use-next-tick.ts
var import_react3 = __toESM(require_react());
var useNextTick = () => {
  const effectList = (0, import_react3.useRef)([]);
  const [value, dispatch] = (0, import_react3.useState)({});
  (0, import_react3.useEffect)(() => {
    effectList.current.forEach((fn) => {
      fn();
    });
    effectList.current = [];
  }, [value]);
  const nextTick = (fn) => {
    effectList.current.push(fn);
    dispatch({});
  };
  return nextTick;
};

// ../packages/sheets-numfmt-ui/src/views/components/accounting/index.tsx
var import_react4 = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var isAccountingPanel = (pattern) => {
  const type = getCurrencyType(pattern);
  return !!type && pattern.startsWith("_(");
};
var AccountingPanel = (props) => {
  const { defaultPattern, action, onChange } = props;
  const [decimal, decimalSet] = (0, import_react4.useState)(() => getDecimalFromPattern(defaultPattern || "", 2));
  const userHabitCurrency = (0, import_react4.useContext)(UserHabitCurrencyContext);
  const [suffix, suffixSet] = (0, import_react4.useState)(() => getCurrencyType(defaultPattern) || userHabitCurrency[0]);
  const options = (0, import_react4.useMemo)(() => userHabitCurrency.map((key3) => ({ label: key3, value: key3 })), []);
  const localeService = useDependency(LocaleService);
  const t = localeService.t;
  action.current = () => setPatternDecimal(`_("${suffix}"* #,##0${decimal > 0 ? ".0" : ""}_)`, decimal);
  const onSelect = (v) => {
    suffixSet(v);
    onChange(setPatternDecimal(`_("${v}"* #,##0${decimal > 0 ? ".0" : ""}_)`, decimal));
  };
  const onDecimalChange = (v) => {
    const decimal2 = v || 0;
    decimalSet(decimal2);
    onChange(setPatternDecimal(`_("${suffix}"* #,##0${decimal2 > 0 ? ".0" : ""}_)`, decimal2));
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "m-t-16 options", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "option", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "label", children: t("sheet.numfmt.decimalLength") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "m-t-8 w-120", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputNumber, { value: decimal, max: 20, min: 0, onChange: onDecimalChange }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "option", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "label", children: t("sheet.numfmt.currencyType") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "m-t-8 w-140", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { onChange: onSelect, options, value: suffix }) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "describe m-t-14", children: t("sheet.numfmt.accountingDes") })
  ] });
};

// ../packages/sheets-numfmt-ui/src/views/components/currency/index.tsx
var import_react5 = __toESM(require_react());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var isCurrencyPanel = (pattern) => {
  const type = getCurrencyType(pattern);
  return !!type && !pattern.startsWith("_(");
};
var CurrencyPanel = (props) => {
  const localeService = useDependency(LocaleService);
  const t = localeService.t;
  const userHabitCurrency = (0, import_react5.useContext)(UserHabitCurrencyContext);
  const [suffix, suffixSet] = (0, import_react5.useState)(() => getCurrencyType(props.defaultPattern) || userHabitCurrency[0]);
  const [decimal, decimalSet] = (0, import_react5.useState)(() => getDecimalFromPattern(props.defaultPattern || "", 2));
  const [pattern, patternSet] = (0, import_react5.useState)(() => {
    var _a;
    const negativeOptions2 = getCurrencyFormatOptions(suffix);
    const pattern2 = ((_a = negativeOptions2.find((item) => isPatternEqualWithoutDecimal(item.value, props.defaultPattern))) == null ? void 0 : _a.value) || negativeOptions2[0].value;
    return pattern2;
  });
  const negativeOptions = (0, import_react5.useMemo)(() => getCurrencyFormatOptions(suffix), [suffix]);
  const options = (0, import_react5.useMemo)(() => userHabitCurrency.map((key3) => ({ label: key3, value: key3 })), [userHabitCurrency]);
  props.action.current = () => setPatternDecimal(pattern, decimal);
  const onSelect = (value) => {
    if (value === void 0) {
      return;
    }
    suffixSet(value);
    const pattern2 = getCurrencyFormatOptions(value)[0].value;
    patternSet(pattern2);
    props.onChange(setPatternDecimal(pattern2, decimal));
  };
  const onChange = (value) => {
    if (value === void 0) {
      return;
    }
    patternSet(value);
    props.onChange(setPatternDecimal(value, decimal));
  };
  const onDecimalChange = (v) => {
    decimalSet(v || 0);
    props.onChange(setPatternDecimal(pattern, v || 0));
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "m-t-16 options", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "option", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "label", children: t("sheet.numfmt.decimalLength") }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "m-t-8 w-120", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(InputNumber, { value: decimal, max: 20, min: 0, onChange: onDecimalChange }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "option", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "label", children: t("sheet.numfmt.currencyType") }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "m-t-8 w-140", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Select, { onChange: onSelect, options, value: suffix }) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "m-t-16 label", children: t("sheet.numfmt.negType") }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "m-t-8", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SelectList, { onChange, options: negativeOptions, value: pattern }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "describe m-t-14", children: t("sheet.numfmt.currencyDes") })
  ] });
};

// ../packages/sheets-numfmt-ui/src/views/components/custom-format/index.tsx
var import_react6 = __toESM(require_react());

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages/sheets-numfmt-ui/src/views/components/custom-format/index.module.less
var index_module_default = {
  "customFormatTitle": "univer-custom-format-title",
  "customFormatInput": "univer-custom-format-input",
  "customFormatHistoryList": "univer-custom-format-history-list",
  "customFormatHistoryListItem": "univer-custom-format-history-list-item",
  "customFormatHistoryListItemIconWrap": "univer-custom-format-history-list-item-icon-wrap",
  "customFormatDes": "univer-custom-format-des"
};

// ../packages/sheets-numfmt-ui/src/views/components/custom-format/index.tsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var key2 = "customFormat";
var historyPatternKey = "numfmt_custom_pattern";
function CustomFormat(props) {
  const { defaultPattern, action, onChange } = props;
  const userHabitController = useDependency(UserHabitController);
  const localStorageService = useDependency(ILocalStorageService);
  const localeService = useDependency(LocaleService);
  const [pattern, patternSet] = (0, import_react6.useState)(defaultPattern);
  action.current = () => {
    userHabitController.markHabit(key2, pattern);
    localStorageService.getItem(historyPatternKey).then((list = []) => {
      const _list = [.../* @__PURE__ */ new Set([pattern, ...list || []])].splice(0, 10).filter((e) => !!e);
      localStorageService.setItem(historyPatternKey, _list);
    });
    return pattern;
  };
  const [options, optionsSet] = (0, import_react6.useState)([]);
  (0, import_react6.useEffect)(() => {
    localStorageService.getItem(historyPatternKey).then((historyList) => {
      const list = [
        ...CURRENCYFORMAT.map((item) => item.suffix("$")),
        ...DATEFMTLISG.map((item) => item.suffix),
        ...NUMBERFORMAT.map((item) => item.suffix)
      ];
      list.push(...historyList || []);
      userHabitController.addHabit(key2, []).finally(() => {
        userHabitController.getHabit(key2, list).then((list2) => {
          optionsSet([...new Set(list2)]);
        });
      });
    });
  }, []);
  const handleClick = (p) => {
    patternSet(p);
    onChange(p);
  };
  const handleBlur = () => {
    onChange(pattern);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: index_module_default.customFormat, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: index_module_default.customFormatTitle, children: localeService.t("sheet.numfmt.customFormat") }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Input, { placeholder: localeService.t("sheet.numfmt.customFormat"), onBlur: handleBlur, value: pattern, onChange: patternSet, className: index_module_default.customFormatInput }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: index_module_default.customFormatHistoryList, children: options.map((p) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { onClick: () => handleClick(p), className: index_module_default.customFormatHistoryListItem, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: index_module_default.customFormatHistoryListItemIconWrap, children: pattern === p && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(check_mark_single_default, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { children: p })
    ] }, p)) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: index_module_default.customFormatDes, children: localeService.t("sheet.numfmt.customFormatDes") })
  ] });
}

// ../packages/sheets-numfmt-ui/src/views/components/date/index.tsx
var import_react7 = __toESM(require_react());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var isDatePanel = (pattern) => {
  const info = numfmt.getInfo(pattern);
  return getDateFormatOptions().map((item) => item.value).includes(pattern) || ["date", "datetime", "time"].includes(info.type);
};
var DatePanel = (props) => {
  const options = (0, import_react7.useMemo)(getDateFormatOptions, []);
  const localeService = useDependency(LocaleService);
  const t = localeService.t;
  const [suffix, suffixSet] = (0, import_react7.useState)(() => {
    if (props.defaultPattern) {
      const item = options.find((item2) => item2.value === props.defaultPattern);
      if (item) {
        return item.value;
      }
    }
    return options[0].value;
  });
  props.action.current = () => suffix;
  const onChange = (v) => {
    if (v === void 0) {
      return;
    }
    suffixSet(v);
    props.onChange(v);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "m-t-16 label", children: t("sheet.numfmt.dateType") }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "m-t-8", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SelectList, { value: suffix, options, onChange }) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "describe m-t-14", children: t("sheet.numfmt.dateDes") })
  ] });
};

// ../packages/sheets-numfmt-ui/src/views/components/general/index.tsx
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var isGeneralPanel = (pattern) => !pattern;
var GeneralPanel = (props) => {
  const localeService = useDependency(LocaleService);
  const t = localeService.t;
  props.action.current = () => "";
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "describe m-t-14", children: t("sheet.numfmt.generalDes") }) });
};

// ../packages/sheets-numfmt-ui/src/views/components/thousandth-percentile/index.tsx
var import_react8 = __toESM(require_react());
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var isThousandthPercentilePanel = (pattern) => getNumberFormatOptions().some((item) => isPatternEqualWithoutDecimal(item.value, pattern));
var ThousandthPercentilePanel = (props) => {
  const localeService = useDependency(LocaleService);
  const options = (0, import_react8.useMemo)(getNumberFormatOptions, []);
  const [decimal, decimalSet] = (0, import_react8.useState)(() => getDecimalFromPattern(props.defaultPattern || "", 0));
  const [suffix, suffixSet] = (0, import_react8.useState)(() => {
    const item = options.find((item2) => isPatternEqualWithoutDecimal(item2.value, props.defaultPattern || ""));
    return (item == null ? void 0 : item.value) || options[0].value;
  });
  const pattern = (0, import_react8.useMemo)(() => setPatternDecimal(suffix, Number(decimal || 0)), [suffix, decimal]);
  const isInputDisable = (0, import_react8.useMemo)(() => !isPatternHasDecimal(suffix), [suffix]);
  const handleDecimalChange = (decimal2) => {
    decimalSet(decimal2 || 0);
    props.onChange(setPatternDecimal(suffix, Number(decimal2 || 0)));
  };
  const handleClick = (v) => {
    if (v === void 0) {
      return;
    }
    decimalSet(getDecimalFromPattern(v, 0));
    suffixSet(v);
    props.onChange(v);
  };
  props.action.current = () => pattern;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "m-t-16 label", children: localeService.t("sheet.numfmt.decimalLength") }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "m-t-8", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      InputNumber,
      {
        disabled: isInputDisable,
        value: decimal,
        max: 20,
        min: 0,
        onChange: handleDecimalChange
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "m-t-16 label", children: [
      " ",
      localeService.t("sheet.numfmt.negType")
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "m-t-8", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SelectList, { onChange: handleClick, options, value: suffix }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "describe m-t-14", children: localeService.t("sheet.numfmt.thousandthPercentileDes") })
  ] });
};

// ../packages/sheets-numfmt-ui/src/views/components/index.tsx
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var import_react10 = __toESM(require_react());
var SheetNumfmtPanel = (props) => {
  const { defaultValue, defaultPattern, row, col } = props.value;
  const localeService = useDependency(LocaleService);
  const getCurrentPattern = (0, import_react9.useRef)(() => "");
  const t = localeService.t;
  const nextTick = useNextTick();
  const typeOptions = (0, import_react9.useMemo)(
    () => [
      { label: "sheet.numfmt.general", component: GeneralPanel },
      { label: "sheet.numfmt.accounting", component: AccountingPanel },
      { label: "sheet.numfmt.currency", component: CurrencyPanel },
      { label: "sheet.numfmt.date", component: DatePanel },
      { label: "sheet.numfmt.thousandthPercentile", component: ThousandthPercentilePanel },
      { label: "sheet.numfmt.customFormat", component: CustomFormat }
    ].map((item) => ({ ...item, label: t(item.label) })),
    []
  );
  const [type, typeSet] = (0, import_react9.useState)(findDefaultType);
  const [key3, keySet] = (0, import_react9.useState)(() => `${row}_${col}`);
  const { mark, userHabitCurrency } = useCurrencyOptions(() => keySet(`${row}_${col}_userCurrency'`));
  const BusinessComponent = (0, import_react9.useMemo)(() => {
    var _a;
    return (_a = typeOptions.find((item) => item.label === type)) == null ? void 0 : _a.component;
  }, [type]);
  function findDefaultType() {
    const list = [isGeneralPanel, isAccountingPanel, isCurrencyPanel, isDatePanel, isThousandthPercentilePanel];
    return list.reduce((pre, curFn, index) => pre || (curFn(defaultPattern) ? typeOptions[index].label : ""), "") || typeOptions[0].label;
  }
  const selectOptions = typeOptions.map((option) => ({
    label: option.label,
    value: option.label
  }));
  const handleSelect = (value) => {
    typeSet(value);
    nextTick(() => props.onChange({ type: "change", value: getCurrentPattern.current() || "" }));
  };
  const handleChange = (v) => {
    props.onChange({ type: "change", value: v });
  };
  const handleConfirm = () => {
    const pattern = getCurrentPattern.current() || "";
    const currency = getCurrencyType(pattern);
    if (currency) {
      mark(currency);
    }
    props.onChange({ type: "confirm", value: pattern });
  };
  const handleCancel = () => {
    props.onChange({ type: "cancel", value: "" });
  };
  const subProps = {
    onChange: handleChange,
    defaultValue,
    defaultPattern,
    action: getCurrentPattern
  };
  (0, import_react9.useEffect)(() => {
    typeSet(findDefaultType());
    keySet(`${row}_${col}`);
  }, [row, col]);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "numfmt-panel p-b-20", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "label m-t-14", children: t("sheet.numfmt.numfmtType") }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "m-t-8", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Select, { onChange: handleSelect, options: selectOptions, value: type, style: { width: "100%" } }) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { children: BusinessComponent && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(UserHabitCurrencyContext.Provider, { value: userHabitCurrency, children: /* @__PURE__ */ (0, import_react10.createElement)(BusinessComponent, { ...subProps, key: key3 }) }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "btn-list m-t-14 m-b-20", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Button, { size: "small", onClick: handleCancel, className: "m-r-12", children: t("sheet.numfmt.cancel") }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Button, { type: "primary", size: "small", onClick: handleConfirm, children: t("sheet.numfmt.confirm") })
    ] })
  ] });
};

// ../packages/sheets-numfmt-ui/src/controllers/numfmt.controller.ts
var SHEET_NUMFMT_PANEL = "SHEET_NUMFMT_PANEL";
var SheetNumfmtUIController = class extends Disposable {
  constructor(_sheetInterceptorService, _themeService, _univerInstanceService, _commandService, _selectionManagerService, _renderManagerService, _numfmtService, _componentManager, _sidebarService, _localeService, _sheetsNumfmtCellContentController) {
    super();
    this._sheetInterceptorService = _sheetInterceptorService;
    this._themeService = _themeService;
    this._univerInstanceService = _univerInstanceService;
    this._commandService = _commandService;
    this._selectionManagerService = _selectionManagerService;
    this._renderManagerService = _renderManagerService;
    this._numfmtService = _numfmtService;
    this._componentManager = _componentManager;
    this._sidebarService = _sidebarService;
    this._localeService = _localeService;
    this._sheetsNumfmtCellContentController = _sheetsNumfmtCellContentController;
    /**
     * If _previewPattern is null ,the realTimeRenderingInterceptor will skip and if it is '',realTimeRenderingInterceptor will clear numfmt.
     * @private
     * @type {(string | null)}
     * @memberof NumfmtController
     */
    __publicField(this, "_previewPattern", "");
    __publicField(this, "_sidebarDisposable", null);
    this._initRealTimeRenderingInterceptor();
    this._initPanel();
    this._initCommands();
    this._initCloseListener();
    this._commandExecutedListener();
    this._initNumfmtLocalChange();
  }
  _initNumfmtLocalChange() {
    this.disposeWithMe(merge(this._sheetsNumfmtCellContentController.local$, this._localeService.currentLocale$).subscribe(() => {
      this._forceUpdate();
    }));
  }
  openPanel() {
    var _a;
    const sidebarService = this._sidebarService;
    const selectionManagerService = this._selectionManagerService;
    const commandService = this._commandService;
    const univerInstanceService = this._univerInstanceService;
    const numfmtService = this._numfmtService;
    const localeService = this._localeService;
    const selections = ((_a = selectionManagerService.getCurrentSelections()) == null ? void 0 : _a.map((s) => s.range)) || [];
    const range = selections[0];
    if (!range) {
      return false;
    }
    const workbook = univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET);
    const sheet = workbook.getActiveSheet();
    if (!sheet) {
      return false;
    }
    const cellValue = sheet.getCellRaw(range.startRow, range.startColumn);
    const numfmtValue = numfmtService.getValue(
      workbook.getUnitId(),
      sheet.getSheetId(),
      range.startRow,
      range.startColumn
    );
    let pattern = "";
    if (numfmtValue) {
      pattern = numfmtValue.pattern;
    }
    const defaultValue = (cellValue == null ? void 0 : cellValue.t) === 2 /* NUMBER */ ? cellValue.v : 12345678;
    const props = {
      onChange: (config) => {
        var _a2;
        if (config.type === "change") {
          this._previewPattern = config.value;
          this._forceUpdate();
        } else if (config.type === "confirm") {
          const selections2 = ((_a2 = selectionManagerService.getCurrentSelections()) == null ? void 0 : _a2.map((s) => s.range)) || [];
          const params = { values: [] };
          const patternType = getPatternType(config.value);
          selections2.forEach((rangeInfo) => {
            Range.foreach(rangeInfo, (row, col) => {
              params.values.push({
                row,
                col,
                pattern: config.value,
                type: patternType
              });
            });
          });
          commandService.executeCommand(SetNumfmtCommand.id, params);
          sidebarService.close();
        } else if (config.type === "cancel") {
          sidebarService.close();
        }
      },
      value: { defaultPattern: pattern, defaultValue, row: range.startRow, col: range.startColumn }
    };
    this._sidebarDisposable = sidebarService.open({
      header: { title: localeService.t("sheet.numfmt.title") },
      children: {
        label: SHEET_NUMFMT_PANEL,
        ...props
        // need passthrough to react props.
      },
      onClose: () => {
        this._forceUpdate();
        commandService.executeCommand(CloseNumfmtPanelOperator.id);
      }
    });
    return true;
  }
  _forceUpdate(unitId) {
    var _a;
    const renderUnit = this._renderManagerService.getRenderById(
      unitId != null ? unitId : this._univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET).getUnitId()
    );
    renderUnit == null ? void 0 : renderUnit.with(SheetSkeletonManagerService).reCalculate();
    (_a = renderUnit == null ? void 0 : renderUnit.mainComponent) == null ? void 0 : _a.makeDirty();
  }
  _initCommands() {
    [
      OpenNumfmtPanelOperator,
      CloseNumfmtPanelOperator
    ].forEach((config) => {
      this.disposeWithMe(this._commandService.registerCommand(config));
    });
  }
  _initPanel() {
    this._componentManager.register(SHEET_NUMFMT_PANEL, SheetNumfmtPanel);
  }
  // eslint-disable-next-line max-lines-per-function
  _initRealTimeRenderingInterceptor() {
    const isPanelOpenObserver = new Observable((subscriber) => {
      this._commandService.onCommandExecuted((commandInfo) => {
        if (commandInfo.id === OpenNumfmtPanelOperator.id) {
          subscriber.next(true);
        }
        if (commandInfo.id === CloseNumfmtPanelOperator.id) {
          subscriber.next(false);
        }
      });
    });
    const combineOpenAndSelection$ = combineLatest([
      isPanelOpenObserver,
      this._selectionManagerService.selectionMoveEnd$.pipe(
        map((selectionInfos) => {
          if (!selectionInfos) {
            return [];
          }
          return selectionInfos.map((selectionInfo) => selectionInfo.range);
        })
      )
    ]);
    this.disposeWithMe(
      toDisposable(
        combineOpenAndSelection$.pipe(
          switchMap(
            ([isOpen, selectionRanges]) => new Observable((subscribe) => {
              const disposableCollection = new DisposableCollection();
              isOpen && selectionRanges.length && subscribe.next({ selectionRanges, disposableCollection });
              return () => {
                disposableCollection.dispose();
              };
            })
          ),
          tap(() => {
            this._previewPattern = null;
          })
        ).subscribe(({ disposableCollection, selectionRanges }) => {
          var _a, _b;
          const workbook = this._univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET);
          this.openPanel();
          disposableCollection.add(
            this._sheetInterceptorService.intercept(INTERCEPTOR_POINT.CELL_CONTENT, {
              priority: 99,
              effect: 2 /* Value */ | 1 /* Style */,
              handler: (cell, location, next) => {
                const { row, col } = location;
                const defaultValue = next(cell) || {};
                if (selectionRanges.find(
                  (range) => range.startColumn <= col && range.endColumn >= col && range.startRow <= row && range.endRow >= row
                )) {
                  const rawValue = location.worksheet.getCellRaw(row, col);
                  const value = rawValue == null ? void 0 : rawValue.v;
                  const type = rawValue == null ? void 0 : rawValue.t;
                  if (value === void 0 || value === null || type !== 2 /* NUMBER */ || this._previewPattern === null) {
                    return defaultValue;
                  }
                  const info = getPatternPreviewIgnoreGeneral(this._previewPattern, value, this._sheetsNumfmtCellContentController.local);
                  if (info.color) {
                    const colorMap = this._themeService.getCurrentTheme();
                    const color = colorMap[`${info.color}500`];
                    return {
                      ...defaultValue,
                      v: info.result,
                      t: 1 /* STRING */,
                      s: { cl: { rgb: color } }
                    };
                  }
                  return {
                    ...defaultValue,
                    v: info.result,
                    t: 1 /* STRING */
                  };
                }
                return defaultValue;
              }
            })
          );
          (_b = (_a = this._renderManagerService.getRenderById(workbook.getUnitId())) == null ? void 0 : _a.mainComponent) == null ? void 0 : _b.makeDirty();
        })
      )
    );
  }
  _commandExecutedListener() {
    const commandList = [RemoveNumfmtMutation.id, SetNumfmtMutation.id];
    this.disposeWithMe(
      new Observable((subscribe) => {
        const disposable = this._commandService.onCommandExecuted((command) => {
          if (commandList.includes(command.id)) {
            const params = command.params;
            subscribe.next(params.unitId);
          }
        });
        return () => disposable.dispose();
      }).pipe(debounceTime(16)).subscribe((unitId) => this._forceUpdate(unitId))
    );
  }
  _initCloseListener() {
    this._univerInstanceService.getCurrentTypeOfUnit$(O.UNIVER_SHEET).subscribe((unit) => {
      var _a;
      if (!unit) {
        (_a = this._sidebarDisposable) == null ? void 0 : _a.dispose();
        this._sidebarDisposable = null;
      }
    });
  }
};
SheetNumfmtUIController = __decorateClass([
  __decorateParam(0, Inject(SheetInterceptorService)),
  __decorateParam(1, Inject(ThemeService)),
  __decorateParam(2, IUniverInstanceService),
  __decorateParam(3, ICommandService),
  __decorateParam(4, Inject(SheetsSelectionsService)),
  __decorateParam(5, IRenderManagerService),
  __decorateParam(6, INumfmtService),
  __decorateParam(7, Inject(ComponentManager)),
  __decorateParam(8, ISidebarService),
  __decorateParam(9, Inject(LocaleService)),
  __decorateParam(10, Inject(SheetsNumfmtCellContentController))
], SheetNumfmtUIController);

// ../packages/sheets-numfmt-ui/src/controllers/numfmt.editor.controller.ts
var createCollectEffectMutation = () => {
  let list = [];
  const add = (unitId, subUnitId, row, col, value) => list.push({ unitId, subUnitId, row, col, value });
  const getEffects = () => list;
  const clean = () => {
    list = [];
  };
  return {
    add,
    getEffects,
    clean
  };
};
var NumfmtEditorController = class extends Disposable {
  constructor(_sheetInterceptorService, _numfmtService, _univerInstanceService, _injector, _editorBridgeService) {
    super();
    this._sheetInterceptorService = _sheetInterceptorService;
    this._numfmtService = _numfmtService;
    this._univerInstanceService = _univerInstanceService;
    this._injector = _injector;
    this._editorBridgeService = _editorBridgeService;
    // collect effect mutations when edit end and push this to  commands stack in next commands progress
    __publicField(this, "_collectEffectMutation", createCollectEffectMutation());
    this._initInterceptorEditorStart();
    this._initInterceptorEditorEnd();
    this._initInterceptorCommands();
  }
  _initInterceptorEditorStart() {
    if (!this._editorBridgeService) {
      return;
    }
    this.disposeWithMe(
      toDisposable(
        this._sheetInterceptorService.writeCellInterceptor.intercept(BEFORE_CELL_EDIT, {
          handler: (value, context, next) => {
            const row = context.row;
            const col = context.col;
            const numfmtCell = this._numfmtService.getValue(
              context.unitId,
              context.subUnitId,
              row,
              col
            );
            if (numfmtCell) {
              const type = getPatternType(numfmtCell.pattern);
              switch (type) {
                case "scientific":
                case "currency":
                case "grouped":
                case "number": {
                  const cell = context.worksheet.getCellRaw(row, col);
                  return next && next(cell);
                }
                case "percent":
                case "date":
                case "time":
                case "datetime":
                default: {
                  return next && next(value);
                }
              }
            }
            return next(value);
          }
        })
      )
    );
  }
  /**
   * Process the  values after  edit
   * @private
   * @memberof NumfmtService
   */
  _initInterceptorEditorEnd() {
    this.disposeWithMe(
      toDisposable(
        this._sheetInterceptorService.writeCellInterceptor.intercept(AFTER_CELL_EDIT, {
          // eslint-disable-next-line complexity
          handler: (value, context, next) => {
            var _a, _b, _c, _d;
            this._collectEffectMutation.clean();
            const currentNumfmtValue = this._numfmtService.getValue(
              context.unitId,
              context.subUnitId,
              context.row,
              context.col
            );
            const currentNumfmtType = (_a = currentNumfmtValue && getPatternType(currentNumfmtValue.pattern)) != null ? _a : "";
            const clean = () => {
              currentNumfmtValue && this._collectEffectMutation.add(
                context.unitId,
                context.subUnitId,
                context.row,
                context.col,
                null
              );
            };
            if (!(value == null ? void 0 : value.v) && !(value == null ? void 0 : value.p)) {
              return next(value);
            }
            if (isTextFormat(currentNumfmtValue == null ? void 0 : currentNumfmtValue.pattern) || value.t === 4 /* FORCE_STRING */) {
              return next(value);
            }
            const body = (_b = value.p) == null ? void 0 : _b.body;
            const content = ((_d = (_c = value == null ? void 0 : value.p) == null ? void 0 : _c.body) == null ? void 0 : _d.dataStream) ? value.p.body.dataStream.replace(/\r\n$/, "") : String(value.v);
            const numfmtInfo = numfmt.parseDate(content) || numfmt.parseTime(content) || numfmt.parseNumber(content);
            if (body) {
              if (!canConvertRichTextToNumfmt(body)) {
                return next(value);
              } else {
                const { dataStream } = body;
                const dataStreamWithoutEnd = dataStream.replace(/\r\n$/, "");
                const num = Number(dataStreamWithoutEnd);
                if (Number.isNaN(num) && !numfmtInfo) {
                  return next(value);
                }
              }
            }
            if (numfmtInfo) {
              if (numfmtInfo.z) {
                this._collectEffectMutation.add(
                  context.unitId,
                  context.subUnitId,
                  context.row,
                  context.col,
                  {
                    pattern: numfmtInfo.z
                  }
                );
              }
              const v = Number(numfmtInfo.v);
              return next({ ...value, p: void 0, v, t: 2 /* NUMBER */ });
            } else if (["date", "time", "datetime", "percent"].includes(currentNumfmtType) || !isNumeric(content)) {
              clean();
            }
            return next(value);
          }
        })
      )
    );
  }
  _initInterceptorCommands() {
    const self = this;
    this.disposeWithMe(
      this._sheetInterceptorService.interceptCommand({
        getMutations(command) {
          var _a;
          switch (command.id) {
            case SetRangeValuesCommand.id: {
              const workbook = self._univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET);
              const unitId = workbook.getUnitId();
              const subUnitId = (_a = workbook.getActiveSheet()) == null ? void 0 : _a.getSheetId();
              if (!subUnitId) {
                return {
                  redos: [],
                  undos: []
                };
              }
              const list = self._collectEffectMutation.getEffects();
              self._collectEffectMutation.clean();
              if (!list.length) {
                return {
                  redos: [],
                  undos: []
                };
              }
              const cells = list.filter((item) => {
                var _a2;
                return !!((_a2 = item.value) == null ? void 0 : _a2.pattern);
              }).map((item) => ({
                row: item.row,
                col: item.col,
                pattern: item.value.pattern
              }));
              const removeCells = list.filter((item) => {
                var _a2;
                return !((_a2 = item.value) == null ? void 0 : _a2.pattern);
              }).map((item) => ({
                startRow: item.row,
                endColumn: item.col,
                startColumn: item.col,
                endRow: item.row
              }));
              const redos = [];
              const undos = [];
              if (cells.length) {
                const redo = {
                  id: SetNumfmtMutation.id,
                  params: transformCellsToRange(unitId, subUnitId, cells)
                };
                redos.push(redo);
                undos.push(...factorySetNumfmtUndoMutation(self._injector, redo.params));
              }
              if (removeCells.length) {
                const redo = {
                  id: RemoveNumfmtMutation.id,
                  params: {
                    unitId,
                    subUnitId,
                    ranges: removeCells
                  }
                };
                redos.push(redo);
                undos.push(...factoryRemoveNumfmtUndoMutation(self._injector, redo.params));
              }
              return {
                redos,
                undos: undos.reverse()
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
NumfmtEditorController = __decorateClass([
  __decorateParam(0, Inject(SheetInterceptorService)),
  __decorateParam(1, Inject(INumfmtService)),
  __decorateParam(2, Inject(IUniverInstanceService)),
  __decorateParam(3, Inject(Injector)),
  __decorateParam(4, Optional(IEditorBridgeService))
], NumfmtEditorController);
function isNumeric(str) {
  return /^-?\d+(\.\d+)?$/.test(str);
}
function canConvertRichTextToNumfmt(body) {
  const { textRuns = [], paragraphs = [], customRanges, customBlocks = [] } = body;
  const richTextStyle = ["va"];
  return !(textRuns.some((textRun) => {
    const hasRichTextStyle = Boolean(textRun.ts && Object.keys(textRun.ts).some((property) => {
      return richTextStyle.includes(property);
    }));
    return hasRichTextStyle;
  }) || paragraphs.some((paragraph) => paragraph.bullet) || paragraphs.length >= 2 || Boolean(customRanges == null ? void 0 : customRanges.length) || customBlocks.length > 0);
}

// ../packages/sheets-numfmt-ui/src/controllers/menu.ts
var MENU_OPTIONS = [
  {
    label: "sheet.numfmt.general",
    pattern: null
  },
  {
    label: "sheet.numfmt.text",
    pattern: DEFAULT_TEXT_FORMAT_EXCEL
  },
  "|",
  {
    label: "sheet.numfmt.number",
    pattern: "0"
  },
  "|",
  {
    label: "sheet.numfmt.accounting",
    pattern: '"\xA5" #,##0.00_);[Red]("\xA5"#,##0.00)'
  },
  {
    label: "sheet.numfmt.financialValue",
    pattern: "#,##0.00;[Red]#,##0.00"
  },
  {
    label: "sheet.numfmt.currency",
    pattern: '"\xA5"#,##0.00_);[Red]("\xA5"#,##0.00)'
  },
  {
    label: "sheet.numfmt.roundingCurrency",
    pattern: '"\xA5"#,##0;[Red]"\xA5"#,##0'
  },
  "|",
  {
    label: "sheet.numfmt.date",
    pattern: "yyyy-mm-dd;@"
  },
  {
    label: "sheet.numfmt.time",
    pattern: 'am/pm h":"mm":"ss'
  },
  {
    label: "sheet.numfmt.dateTime",
    pattern: "yyyy-m-d am/pm h:mm"
  },
  {
    label: "sheet.numfmt.timeDuration",
    pattern: "h:mm:ss"
  },
  "|",
  {
    label: "sheet.numfmt.percent",
    pattern: "0.00%"
  },
  "|",
  {
    label: "sheet.numfmt.moreFmt",
    pattern: ""
  }
];
var CurrencyMenuItem = (accessor) => {
  return {
    icon: new Observable((subscribe) => {
      const menuCurrencyService = accessor.get(MenuCurrencyService);
      function getIconKey(symbol2) {
        const iconMap = {
          [countryCurrencyMap.US]: "DollarSingle",
          [countryCurrencyMap.RU]: "RoubleSingle",
          [countryCurrencyMap.CN]: "RmbSingle",
          [countryCurrencyMap.AT]: "EuroSingle"
        };
        return iconMap[symbol2] || "DollarSingle";
      }
      const symbol = countryCurrencyMap[menuCurrencyService.getCurrencySymbol()] || "$";
      subscribe.next(getIconKey(symbol));
      return menuCurrencyService.currencySymbol$.subscribe((code) => {
        const symbol2 = countryCurrencyMap[code] || "$";
        subscribe.next(getIconKey(symbol2));
      });
    }),
    id: SetCurrencyCommand.id,
    title: "sheet.numfmt.currency",
    tooltip: "sheet.numfmt.currency",
    type: 0 /* BUTTON */,
    hidden$: getMenuHiddenObservable(accessor, O.UNIVER_SHEET),
    disabled$: getCurrentRangeDisable$(accessor, { workbookTypes: [WorkbookEditablePermission], worksheetTypes: [WorksheetEditPermission, WorksheetSetCellStylePermission], rangeTypes: [RangeProtectionPermissionEditPoint] })
  };
};
var AddDecimalMenuItem = (accessor) => {
  return {
    icon: "AddDigitsSingle",
    id: AddDecimalCommand.id,
    title: "sheet.numfmt.addDecimal",
    tooltip: "sheet.numfmt.addDecimal",
    type: 0 /* BUTTON */,
    hidden$: getMenuHiddenObservable(accessor, O.UNIVER_SHEET),
    disabled$: getCurrentRangeDisable$(accessor, { workbookTypes: [WorkbookEditablePermission], worksheetTypes: [WorksheetEditPermission, WorksheetSetCellStylePermission], rangeTypes: [RangeProtectionPermissionEditPoint] })
  };
};
var SubtractDecimalMenuItem = (accessor) => {
  return {
    icon: "ReduceDigitsSingle",
    id: SubtractDecimalCommand.id,
    title: "sheet.numfmt.subtractDecimal",
    tooltip: "sheet.numfmt.subtractDecimal",
    type: 0 /* BUTTON */,
    hidden$: getMenuHiddenObservable(accessor, O.UNIVER_SHEET),
    disabled$: getCurrentRangeDisable$(accessor, { workbookTypes: [WorkbookEditablePermission], worksheetTypes: [WorksheetEditPermission, WorksheetSetCellStylePermission], rangeTypes: [RangeProtectionPermissionEditPoint] })
  };
};
var PercentMenuItem = (accessor) => {
  return {
    icon: "PercentSingle",
    id: SetPercentCommand.id,
    title: "sheet.numfmt.percent",
    tooltip: "sheet.numfmt.percent",
    type: 0 /* BUTTON */,
    hidden$: getMenuHiddenObservable(accessor, O.UNIVER_SHEET),
    disabled$: getCurrentRangeDisable$(accessor, { workbookTypes: [WorkbookEditablePermission], worksheetTypes: [WorksheetEditPermission, WorksheetSetCellStylePermission], rangeTypes: [RangeProtectionPermissionEditPoint] })
  };
};
var FactoryOtherMenuItem = (accessor) => {
  const univerInstanceService = accessor.get(IUniverInstanceService);
  const commandService = accessor.get(ICommandService);
  const localeService = accessor.get(LocaleService);
  const selectionManagerService = accessor.get(SheetsSelectionsService);
  const commandList = [RemoveNumfmtMutation.id, SetNumfmtMutation.id];
  const value$ = deriveStateFromActiveSheet$(
    univerInstanceService,
    "",
    ({ workbook, worksheet }) => new Observable(
      (subscribe) => merge(
        selectionManagerService.selectionMoveEnd$,
        fromCallback(commandService.onCommandExecuted.bind(commandService)).pipe(
          filter(([commandInfo]) => commandList.includes(commandInfo.id))
        )
      ).subscribe(() => {
        var _a, _b;
        const selections = selectionManagerService.getCurrentSelections();
        if (selections && selections[0]) {
          const range = selections[0].range;
          const row = range.startRow;
          const col = range.startColumn;
          const numfmtValue = (_b = workbook.getStyles().get((_a = worksheet.getCell(row, col)) == null ? void 0 : _a.s)) == null ? void 0 : _b.n;
          const pattern = numfmtValue == null ? void 0 : numfmtValue.pattern;
          let value = localeService.t("sheet.numfmt.general");
          if (isDefaultFormat(pattern)) {
            subscribe.next(value);
            return;
          }
          if (pattern) {
            const item = MENU_OPTIONS.filter((item2) => typeof item2 === "object" && item2.pattern).find(
              (item2) => isPatternEqualWithoutDecimal(pattern, item2.pattern)
            );
            if (item && typeof item === "object" && item.pattern) {
              value = localeService.t(item.label);
            } else {
              value = localeService.t("sheet.numfmt.moreFmt");
            }
          }
          subscribe.next(value);
        }
      })
    )
  );
  return {
    label: MORE_NUMFMT_TYPE_KEY,
    id: OpenNumfmtPanelOperator.id,
    tooltip: "sheet.numfmt.title",
    type: 1 /* SELECTOR */,
    slot: true,
    selections: [
      {
        label: {
          name: OPTIONS_KEY,
          hoverable: false,
          selectable: false
        }
      }
    ],
    value$,
    hidden$: getMenuHiddenObservable(accessor, O.UNIVER_SHEET),
    disabled$: getCurrentRangeDisable$(accessor, { workbookTypes: [WorkbookEditablePermission], worksheetTypes: [WorksheetSetCellStylePermission, WorksheetEditPermission], rangeTypes: [RangeProtectionPermissionEditPoint] })
  };
};

// ../packages/sheets-numfmt-ui/src/views/components/more-numfmt-type/MoreNumfmtType.tsx
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var MORE_NUMFMT_TYPE_KEY = "sheet.numfmt.moreNumfmtType";
var OPTIONS_KEY = "sheet.numfmt.moreNumfmtType.options";
var MoreNumfmtType = (props) => {
  const { value } = props;
  const localeService = useDependency(LocaleService);
  const text = value != null ? value : localeService.t("sheet.numfmt.general");
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "univer-text-sm", children: text });
};
var Options = () => {
  const commandService = useDependency(ICommandService);
  const localeService = useDependency(LocaleService);
  const layoutService = useDependency(ILayoutService);
  const sheetsNumfmtCellContentController = useDependency(SheetsNumfmtCellContentController);
  const selectionManagerService = useDependency(SheetsSelectionsService);
  const setNumfmt = (pattern) => {
    const selection = selectionManagerService.getCurrentLastSelection();
    if (!selection) {
      return;
    }
    const range = selection.range;
    const values = [];
    Range.foreach(range, (row, col) => {
      if (pattern) {
        values.push({ row, col, pattern, type: getPatternType(pattern) });
      } else {
        values.push({ row, col });
      }
    });
    commandService.executeCommand(SetNumfmtCommand.id, { values });
    layoutService.focus();
  };
  const handleOnclick = (index) => {
    if (index === 0) {
      setNumfmt(null);
    } else if (index === MENU_OPTIONS.length - 1) {
      commandService.executeCommand(OpenNumfmtPanelOperator.id);
      layoutService.focus();
    } else {
      const item = MENU_OPTIONS[index];
      item.pattern && setNumfmt(item.pattern);
    }
  };
  const defaultValue = 1220;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "univer-grid univer-gap-1 univer-p-1.5", children: MENU_OPTIONS.map((item, index) => {
    if (item === "|") {
      return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Separator, {}, index);
    }
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
      "div",
      {
        className: `
                          univer-flex univer-h-7 univer-items-center univer-justify-between univer-gap-6 univer-rounded
                          univer-px-2 univer-text-[13px]
                          hover:univer-bg-gray-100
                        `,
        onClick: () => {
          handleOnclick(index);
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: localeService.t(item.label) }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "univer-text-xs univer-text-gray-500", children: item.pattern ? getPatternPreview(item.pattern || "", defaultValue, sheetsNumfmtCellContentController.local).result.trim() : "" })
        ]
      },
      index
    );
  }) });
};

// ../packages/sheets-numfmt-ui/src/controllers/menu.schema.ts
var menuSchema = {
  ["ribbon.start.insert" /* FORMULAS_INSERT */]: {
    [SetCurrencyCommand.id]: {
      order: 4,
      menuItemFactory: CurrencyMenuItem
    },
    [AddDecimalCommand.id]: {
      order: 5,
      menuItemFactory: AddDecimalMenuItem
    },
    [SubtractDecimalCommand.id]: {
      order: 6,
      menuItemFactory: SubtractDecimalMenuItem
    },
    [SetPercentCommand.id]: {
      order: 7,
      menuItemFactory: PercentMenuItem
    },
    [OpenNumfmtPanelOperator.id]: {
      order: 8,
      menuItemFactory: FactoryOtherMenuItem
    }
  }
};

// ../packages/sheets-numfmt-ui/src/controllers/numfmt.menu.controller.ts
var NumfmtMenuController = class extends Disposable {
  constructor(_componentManager, _menuManagerService) {
    super();
    this._componentManager = _componentManager;
    this._menuManagerService = _menuManagerService;
    this._initMenu();
  }
  _initMenu() {
    this._menuManagerService.mergeMenu(menuSchema);
    this.disposeWithMe(this._componentManager.register(MORE_NUMFMT_TYPE_KEY, MoreNumfmtType));
    this.disposeWithMe(this._componentManager.register(OPTIONS_KEY, Options));
  }
};
NumfmtMenuController = __decorateClass([
  __decorateParam(0, Inject(ComponentManager)),
  __decorateParam(1, IMenuManagerService)
], NumfmtMenuController);

// ../packages/sheets-numfmt-ui/src/plugin.ts
var SHEET_NUMFMT_UI_PLUGIN = "SHEET_NUMFMT_UI_PLUGIN";
var UniverSheetsNumfmtUIPlugin = class extends Plugin {
  constructor(_config = defaultPluginConfig, _injector, _configService, _renderManagerService) {
    super();
    this._config = _config;
    this._injector = _injector;
    this._configService = _configService;
    this._renderManagerService = _renderManagerService;
    const { menu, ...rest } = merge_default(
      {},
      defaultPluginConfig,
      this._config
    );
    if (menu) {
      this._configService.setConfig("menu", menu, { merge: true });
    }
    this._configService.setConfig(UI_PLUGIN_CONFIG_KEY, rest);
  }
  onStarting() {
    registerDependencies(this._injector, [
      [SheetNumfmtUIController],
      [NumfmtEditorController],
      [UserHabitController],
      [NumfmtMenuController]
    ]);
  }
  onRendered() {
    this._registerRenderModules();
    touchDependencies(this._injector, [
      [SheetNumfmtUIController],
      [NumfmtEditorController],
      [NumfmtMenuController]
    ]);
  }
  _registerRenderModules() {
    const modules = [
      [NumfmtAlertRenderController]
    ];
    modules.forEach((m) => {
      this.disposeWithMe(this._renderManagerService.registerRenderModule(O.UNIVER_SHEET, m));
    });
  }
};
__publicField(UniverSheetsNumfmtUIPlugin, "pluginName", SHEET_NUMFMT_UI_PLUGIN);
__publicField(UniverSheetsNumfmtUIPlugin, "type", O.UNIVER_SHEET);
UniverSheetsNumfmtUIPlugin = __decorateClass([
  DependentOn(UniverSheetsUIPlugin, UniverSheetsNumfmtPlugin),
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IConfigService),
  __decorateParam(3, IRenderManagerService)
], UniverSheetsNumfmtUIPlugin);

export {
  UniverSheetsNumfmtUIPlugin
};
//# sourceMappingURL=chunk-ICTNVF5N.js.map
