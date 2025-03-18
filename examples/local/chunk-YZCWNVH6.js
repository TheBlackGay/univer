import {
  BehaviorSubject,
  DependentOn,
  Disposable,
  ICommandService,
  INTERCEPTOR_POINT,
  INumfmtService,
  IUndoRedoService,
  IUniverInstanceService,
  Inject,
  Injector,
  LocaleService,
  O,
  ObjectMatrix,
  Plugin,
  Range,
  RemoveNumfmtMutation,
  SetNumfmtMutation,
  SetRangeValuesMutation,
  SheetInterceptorService,
  SheetsSelectionsService,
  ThemeService,
  UniverSheetsPlugin,
  checkCellValueType,
  factoryRemoveNumfmtUndoMutation,
  factorySetNumfmtUndoMutation,
  getSheetCommandTarget,
  isTextFormat,
  merge,
  numfmt,
  of,
  rangeMerge,
  registerDependencies,
  sequenceExecute,
  skip,
  stripErrorMargin,
  switchMap,
  touchDependencies,
  transformCellsToRange
} from "./chunk-33NDYU5R.js";
import {
  __decorateClass,
  __decorateParam,
  __publicField
} from "./chunk-NSSCU2QI.js";

// ../packages/sheets-numfmt/src/base/const/plugin-name.ts
var SHEET_NUMFMT_PLUGIN = "SHEET_NUMFMT_PLUGIN";

// ../packages/sheets-numfmt/src/utils/decimal.ts
var getDecimalFromPattern = (pattern, defaultValue = 0) => {
  var _a;
  if (!pattern) {
    return defaultValue;
  }
  const info = numfmt.getInfo(pattern);
  return (_a = info.maxDecimals) != null ? _a : defaultValue;
};
var isPatternEqualWithoutDecimal = (patternA, patternB) => {
  if (patternA && !patternB || !patternA && patternB) {
    return false;
  }
  const getString = (tokens) => tokens.reduce(
    (pre, cur) => {
      if (pre.isEnd) {
        return pre;
      }
      const str = cur.value || cur.num;
      if (cur.type === "point") {
        pre.isEnd = true;
        return pre;
      }
      return { ...pre, result: pre.result + str };
    },
    { isEnd: false, result: "" }
  ).result;
  const partitionsA = numfmt.getInfo(patternA)._partitions;
  const partitionsB = numfmt.getInfo(patternB)._partitions;
  const A1 = getString(partitionsA[0].tokens);
  const B1 = getString(partitionsB[0].tokens);
  const A2 = getString(partitionsA[1].tokens);
  const B2 = getString(partitionsB[1].tokens);
  return A1 === B1 && A2 === B2 && partitionsA[1].color === partitionsB[1].color;
};
var getDecimalString = (length) => new Array(Math.min(Math.max(0, Number(length)), 30)).fill(0).join("");
var setPatternDecimal = (patterns, decimalLength) => {
  const tokens = patterns.split(";").map((pattern) => {
    if (/\.0?/.test(pattern)) {
      return pattern.replace(
        /\.0*/g,
        `${decimalLength > 0 ? "." : ""}${getDecimalString(Number(decimalLength || 0))}`
      );
    }
    if (/0([^0]?)|0$/.test(pattern)) {
      return pattern.replace(
        /0([^0]+)|0$/,
        `0${decimalLength > 0 ? "." : ""}${getDecimalString(Number(decimalLength || 0))}$1`
      );
    }
    return pattern;
  });
  return tokens.join(";");
};
var isPatternHasDecimal = (pattern) => /\.0?/.test(pattern) || /0([^0]?)|0$/.test(pattern);

// ../packages/sheets-numfmt/src/commands/commands/set-numfmt.command.ts
var SetNumfmtCommand = {
  id: "sheet.command.numfmt.set.numfmt",
  type: 0 /* COMMAND */,
  // eslint-disable-next-line max-lines-per-function
  handler: (accessor, params) => {
    if (!params) {
      return false;
    }
    const commandService = accessor.get(ICommandService);
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const undoRedoService = accessor.get(IUndoRedoService);
    const target = getSheetCommandTarget(univerInstanceService, params);
    if (!target) return false;
    const { unitId, subUnitId, worksheet } = target;
    const setCells = params.values.filter((value) => !!value.pattern);
    const removeCells = params.values.filter((value) => !value.pattern);
    const setRedos = transformCellsToRange(unitId, subUnitId, setCells);
    const removeRedos = {
      unitId,
      subUnitId,
      ranges: removeCells.map((cell) => ({
        startColumn: cell.col,
        startRow: cell.row,
        endColumn: cell.col,
        endRow: cell.row
      }))
    };
    const redos = [];
    const undos = [];
    if (setCells.length) {
      const setCellTypeObj = setCells.reduce((pre, cur) => {
        if (isTextFormat(cur.pattern)) {
          pre.setValue(cur.row, cur.col, { t: 1 /* STRING */ });
        }
        const cell = worksheet.getCellRaw(cur.row, cur.col);
        if (cell) {
          const type = checkCellValueType(cell.v);
          if (type !== cell.t) {
            pre.setValue(cur.row, cur.col, { t: type });
          }
        }
        return pre;
      }, new ObjectMatrix()).getMatrix();
      const undoSetCellTypeObj = new ObjectMatrix();
      new ObjectMatrix(setCellTypeObj).forValue((row, col) => {
        const cell = worksheet.getCellRaw(row, col);
        if (cell) {
          undoSetCellTypeObj.setValue(row, col, { t: cell.t });
        } else {
          undoSetCellTypeObj.setValue(row, col, { t: void 0 });
        }
      });
      Object.keys(setRedos.values).forEach((key) => {
        const v = setRedos.values[key];
        v.ranges = rangeMerge(v.ranges);
      });
      redos.push({
        id: SetNumfmtMutation.id,
        params: setRedos
      });
      const undo = factorySetNumfmtUndoMutation(accessor, setRedos);
      undos.push(...undo);
    }
    if (removeCells.length) {
      removeRedos.ranges = rangeMerge(removeRedos.ranges);
      const setCellTypeObj = removeCells.reduce((pre, cur) => {
        const cell = worksheet.getCellRaw(cur.row, cur.col);
        if (cell) {
          const type = checkCellValueType(cell.v);
          if (type !== cell.t) {
            pre.setValue(cur.row, cur.col, { t: type });
          }
        }
        return pre;
      }, new ObjectMatrix()).getMatrix();
      const undoSetCellTypeObj = new ObjectMatrix();
      new ObjectMatrix(setCellTypeObj).forValue((row, col) => {
        const cell = worksheet.getCellRaw(row, col);
        if (cell) {
          undoSetCellTypeObj.setValue(row, col, { t: cell.t });
        } else {
          undoSetCellTypeObj.setValue(row, col, { t: void 0 });
        }
      });
      redos.push({
        id: RemoveNumfmtMutation.id,
        params: removeRedos
      }, {
        id: SetRangeValuesMutation.id,
        params: {
          unitId,
          subUnitId,
          cellValue: setCellTypeObj
        }
      });
      const undo = factoryRemoveNumfmtUndoMutation(accessor, removeRedos);
      undos.push({
        id: SetRangeValuesMutation.id,
        params: {
          unitId,
          subUnitId,
          cellValue: undoSetCellTypeObj.getMatrix()
        }
      }, ...undo);
    }
    const result = sequenceExecute(redos, commandService).result;
    if (result) {
      undoRedoService.pushUndoRedo({
        unitID: unitId,
        undoMutations: undos,
        redoMutations: redos
      });
    }
    return result;
  }
};

// ../packages/sheets-numfmt/src/commands/commands/add-decimal.command.ts
var AddDecimalCommand = {
  id: "sheet.command.numfmt.add.decimal.command",
  type: 0 /* COMMAND */,
  handler: async (accessor) => {
    const commandService = accessor.get(ICommandService);
    const selectionManagerService = accessor.get(SheetsSelectionsService);
    const numfmtService = accessor.get(INumfmtService);
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const selections = selectionManagerService.getCurrentSelections();
    if (!selections || !selections.length) {
      return false;
    }
    const target = getSheetCommandTarget(univerInstanceService);
    if (!target) return false;
    const { unitId, subUnitId } = target;
    let maxDecimals = 0;
    selections.forEach((selection) => {
      Range.foreach(selection.range, (row, col) => {
        const numfmtValue = numfmtService.getValue(unitId, subUnitId, row, col);
        if (!numfmtValue) {
          const cell = target.worksheet.getCellRaw(row, col);
          if (!maxDecimals && cell && cell.t === 2 /* NUMBER */ && cell.v) {
            const regResult = /\.(\d*)$/.exec(String(cell.v));
            if (regResult) {
              const length = regResult[1].length;
              if (!length) {
                return;
              }
              maxDecimals = Math.max(maxDecimals, length);
            }
          }
          return;
        }
        const decimals2 = getDecimalFromPattern(numfmtValue.pattern);
        maxDecimals = decimals2 > maxDecimals ? decimals2 : maxDecimals;
      });
    });
    const decimals = maxDecimals + 1;
    const defaultPattern = setPatternDecimal(`0${decimals > 0 ? ".0" : ""}`, decimals);
    const values = [];
    selections.forEach((selection) => {
      Range.foreach(selection.range, (row, col) => {
        const numfmtValue = numfmtService.getValue(unitId, subUnitId, row, col);
        if (!numfmtValue) {
          values.push({
            row,
            col,
            pattern: defaultPattern
          });
        } else {
          const decimals2 = getDecimalFromPattern(numfmtValue.pattern);
          const pattern = setPatternDecimal(numfmtValue.pattern, decimals2 + 1);
          pattern !== numfmtValue.pattern && values.push({
            row,
            col,
            pattern
          });
        }
      });
    });
    if (values.length) {
      const result = await commandService.executeCommand(SetNumfmtCommand.id, { values });
      return result;
    }
    return false;
  }
};

// ../packages/sheets-numfmt/src/base/const/currency-symbols.ts
var currencySymbols = [
  "$",
  "\xA3",
  "\xA5",
  "\xA4",
  "\u058F",
  "\u060B",
  "\u09F3",
  "\u0E3F",
  // '៛',
  "\u20A1",
  "\u20A6",
  "\u20A9",
  "\u20AA",
  "\u20AB",
  "\u20AC",
  "\u20AD",
  "\u20AE",
  "\u20B1",
  "\u20B2",
  "\u20B4",
  "\u20B8",
  "\u20B9",
  "\u20BA",
  "\u20BC",
  "\u20BD",
  "\u20BE",
  "\u20BF"
];
var countryCurrencyMap = {
  US: "$",
  // United States Dollar
  CA: "C$",
  // Canadian Dollar
  GB: "\xA3",
  // British Pound Sterling
  JP: "\xA5",
  // Japanese Yen
  IN: "\u20B9",
  // Indian Rupee
  AU: "A$",
  // Australian Dollar
  CN: "\xA5",
  // Chinese Yuan
  KR: "\u20A9",
  // South Korean Won
  RU: "\u20BD",
  // Russian Ruble
  // Euro countries
  AT: "\u20AC",
  BE: "\u20AC",
  CY: "\u20AC",
  EE: "\u20AC",
  FI: "\u20AC",
  FR: "\u20AC",
  DE: "\u20AC",
  GR: "\u20AC",
  IE: "\u20AC",
  IT: "\u20AC",
  LV: "\u20AC",
  LT: "\u20AC",
  LU: "\u20AC",
  MT: "\u20AC",
  NL: "\u20AC",
  PT: "\u20AC",
  SK: "\u20AC",
  SI: "\u20AC",
  ES: "\u20AC"
  // Add more mappings as needed
};

// ../packages/sheets-numfmt/src/base/const/formatdetail.ts
var DATEFMTLISG = [
  {
    label: "1930-08-05",
    suffix: "yyyy-MM-dd"
  },
  {
    label: "1930/08/05",
    suffix: "yyyy/MM/dd"
  },
  {
    label: "1930\u5E7408\u670805\u65E5",
    suffix: 'yyyy"\u5E74"MM"\u6708"dd"\u65E5"'
  },
  {
    label: "08-05",
    suffix: "MM-dd"
  },
  {
    label: "8\u67085\u65E5",
    suffix: 'M"\u6708"d"\u65E5"'
  },
  {
    label: "13:30:30",
    suffix: "h:mm:ss"
  },
  {
    label: "13:30",
    suffix: "h:mm"
  },
  {
    label: "\u4E0B\u534801:30",
    suffix: "A/P hh:mm"
  },
  {
    label: "\u4E0B\u53481:30",
    suffix: "A/P h:mm"
  },
  {
    label: "\u4E0B\u53481:30:30",
    suffix: "A/P h:mm:ss"
  },
  {
    label: "08-05 \u4E0B\u5348 01:30",
    suffix: "MM-dd A/P hh:mm"
  }
];
var NUMBERFORMAT = [
  {
    label: "(1,235)",
    suffix: "#,##0_);(#,##0)"
  },
  {
    label: "(1,235) ",
    suffix: "#,##0_);[Red](#,##0)",
    color: "red"
  },
  {
    label: "1,234.56",
    suffix: "#,##0.00_);#,##0.00"
  },
  {
    label: "1,234.56",
    suffix: "#,##0.00_);[Red]#,##0.00",
    color: "red"
  },
  {
    label: "-1,234.56",
    suffix: "#,##0.00_);-#,##0.00"
  },
  {
    label: "-1,234.56",
    suffix: "#,##0.00_);[Red]-#,##0.00",
    color: "red"
  }
];
var CURRENCYFORMAT = [
  {
    label: (suffix) => `${suffix}1,235`,
    suffix: (suffix) => `"${suffix}"#,##0.00_);"${suffix}"#,##0.00`
  },
  {
    label: (suffix) => `${suffix}1,235`,
    suffix: (suffix) => `"${suffix}"#,##0.00_);[Red]"${suffix}"#,##0.00`,
    color: "red"
  },
  {
    label: (suffix) => `(${suffix}1,235)`,
    suffix: (suffix) => `"${suffix}"#,##0.00_);("${suffix}"#,##0.00)`
  },
  {
    label: (suffix) => `(${suffix}1,235)`,
    suffix: (suffix) => `"${suffix}"#,##0.00_);[Red]("${suffix}"#,##0.00)`,
    color: "red"
  },
  {
    label: (suffix) => `-${suffix}1,235`,
    suffix: (suffix) => `"${suffix}"#,##0.00_);-"${suffix}"#,##0.00`
  },
  {
    label: (suffix) => `-${suffix}1,235`,
    suffix: (suffix) => `"${suffix}"#,##0.00_);[Red]-"${suffix}"#,##0.00`,
    color: "red"
  }
];

// ../packages/sheets-numfmt/src/service/menu.currency.service.ts
var MenuCurrencyService = class {
  constructor() {
    __publicField(this, "_currencySymbol$", new BehaviorSubject("US"));
    __publicField(this, "currencySymbol$", this._currencySymbol$.asObservable());
  }
  /**
   * Set the currency symbol by setting the country code.
   */
  setCurrencySymbolByCountryCode(symbol) {
    this._currencySymbol$.next(symbol);
  }
  getCurrencySymbol() {
    return this._currencySymbol$.getValue();
  }
};

// ../packages/sheets-numfmt/src/commands/commands/set-currency.command.ts
var SetCurrencyCommand = {
  id: "sheet.command.numfmt.set.currency",
  type: 0 /* COMMAND */,
  handler: async (accessor) => {
    const commandService = accessor.get(ICommandService);
    const selectionManagerService = accessor.get(SheetsSelectionsService);
    const menuCurrencyService = accessor.get(MenuCurrencyService);
    const symbol = countryCurrencyMap[menuCurrencyService.getCurrencySymbol()] || "$";
    const selections = selectionManagerService.getCurrentSelections();
    if (!selections || !selections.length) {
      return false;
    }
    const values = [];
    const suffix = CURRENCYFORMAT[4].suffix(symbol);
    selections.forEach((selection) => {
      Range.foreach(selection.range, (row, col) => {
        values.push({ row, col, pattern: suffix, type: "currency" });
      });
    });
    const result = await commandService.executeCommand(SetNumfmtCommand.id, { values });
    return result;
  }
};

// ../packages/sheets-numfmt/src/commands/commands/set-percent.command.ts
var SetPercentCommand = {
  id: "sheet.command.numfmt.set.percent",
  type: 0 /* COMMAND */,
  handler: async (accessor) => {
    const commandService = accessor.get(ICommandService);
    const selectionManagerService = accessor.get(SheetsSelectionsService);
    const selections = selectionManagerService.getCurrentSelections();
    if (!selections || !selections.length) {
      return false;
    }
    const values = [];
    const suffix = "0%";
    selections.forEach((selection) => {
      Range.foreach(selection.range, (row, col) => {
        values.push({ row, col, pattern: suffix, type: "percent" });
      });
    });
    const result = await commandService.executeCommand(SetNumfmtCommand.id, { values });
    return result;
  }
};

// ../packages/sheets-numfmt/src/commands/commands/subtract-decimal.command.ts
var SubtractDecimalCommand = {
  id: "sheet.command.numfmt.subtract.decimal.command",
  type: 0 /* COMMAND */,
  handler: async (accessor) => {
    const commandService = accessor.get(ICommandService);
    const selectionManagerService = accessor.get(SheetsSelectionsService);
    const numfmtService = accessor.get(INumfmtService);
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const selections = selectionManagerService.getCurrentSelections();
    if (!selections || !selections.length) {
      return false;
    }
    const target = getSheetCommandTarget(univerInstanceService);
    if (!target) return false;
    const { unitId, subUnitId } = target;
    let maxDecimals = 0;
    selections.forEach((selection) => {
      Range.foreach(selection.range, (row, col) => {
        const numfmtValue = numfmtService.getValue(unitId, subUnitId, row, col);
        if (!numfmtValue) {
          const cell = target.worksheet.getCellRaw(row, col);
          if (!maxDecimals && cell && cell.t === 2 /* NUMBER */ && cell.v) {
            const regResult = /\.(\d*)$/.exec(String(cell.v));
            if (regResult) {
              const length = regResult[1].length;
              if (!length) {
                return;
              }
              maxDecimals = Math.max(maxDecimals, length);
            }
          }
          return;
        }
        const decimals2 = getDecimalFromPattern(numfmtValue.pattern);
        maxDecimals = decimals2 > maxDecimals ? decimals2 : maxDecimals;
      });
    });
    const decimals = maxDecimals - 1;
    const defaultPattern = setPatternDecimal(`0${decimals > 0 ? ".0" : "."}`, decimals);
    const values = [];
    selections.forEach((selection) => {
      Range.foreach(selection.range, (row, col) => {
        const numfmtValue = numfmtService.getValue(unitId, subUnitId, row, col);
        if (!numfmtValue) {
          values.push({
            row,
            col,
            pattern: defaultPattern
          });
        } else {
          const decimals2 = getDecimalFromPattern(numfmtValue.pattern);
          values.push({
            row,
            col,
            pattern: setPatternDecimal(numfmtValue.pattern, decimals2 - 1)
          });
        }
      });
    });
    const result = await commandService.executeCommand(SetNumfmtCommand.id, { values });
    return result;
  }
};

// ../packages/sheets-numfmt/src/utils/pattern.ts
var getPatternType = (pattern) => numfmt.getInfo(pattern).type || "unknown";
var getPatternPreview = (pattern, value, locale = "en") => {
  const info = numfmt.getInfo(pattern);
  const negInfo = info._partitions[1];
  const result = numfmt.format(pattern, value, { locale, throws: false });
  if (value < 0) {
    return {
      result,
      color: negInfo.color
    };
  }
  return {
    result
  };
};
var getPatternPreviewIgnoreGeneral = (pattern, value, locale) => {
  if (pattern === "General") {
    return {
      result: String(stripErrorMargin(value))
      // In Excel, the default General format also needs to handle numeric precision.
    };
  }
  return getPatternPreview(pattern, value, locale);
};

// ../packages/sheets-numfmt/src/controllers/numfmt-cell-content.controller.ts
var TEXT_FORMAT_MARK = {
  tl: {
    size: 6,
    color: "#409f11"
  }
};
var SheetsNumfmtCellContentController = class extends Disposable {
  constructor(_instanceService, _sheetInterceptorService, _themeService, _commandService, _numfmtService, _localeService) {
    super();
    this._instanceService = _instanceService;
    this._sheetInterceptorService = _sheetInterceptorService;
    this._themeService = _themeService;
    this._commandService = _commandService;
    this._numfmtService = _numfmtService;
    this._localeService = _localeService;
    __publicField(this, "_local$", new BehaviorSubject("en"));
    __publicField(this, "local$", this._local$.asObservable());
    this._initInterceptorCellContent();
  }
  get local() {
    const _local = this._local$.getValue();
    if (_local) {
      return _local;
    }
    const currentLocale = this._localeService.getCurrentLocale();
    switch (currentLocale) {
      case "frFR" /* FR_FR */: {
        return "fr";
      }
      case "ruRU" /* RU_RU */: {
        return "ru";
      }
      case "viVN" /* VI_VN */: {
        return "vi";
      }
      case "zhCN" /* ZH_CN */: {
        return "zh-CN";
      }
      case "zhTW" /* ZH_TW */: {
        return "zh-TW";
      }
      case "enUS" /* EN_US */:
      case "faIR" /* FA_IR */:
      default: {
        return "en";
      }
    }
  }
  // eslint-disable-next-line max-lines-per-function
  _initInterceptorCellContent() {
    const renderCache = new ObjectMatrix();
    this.disposeWithMe(merge(this._local$, this._localeService.currentLocale$).subscribe(() => {
      renderCache.reset();
    }));
    this.disposeWithMe(this._sheetInterceptorService.intercept(INTERCEPTOR_POINT.CELL_CONTENT, {
      effect: 2 /* Value */ | 1 /* Style */,
      handler: (cell, location, next) => {
        const unitId = location.unitId;
        const sheetId = location.subUnitId;
        let numfmtValue;
        const originCellValue = cell;
        if (!originCellValue) {
          return next(cell);
        }
        if (cell == null ? void 0 : cell.s) {
          const style = location.workbook.getStyles().get(cell.s);
          if (style == null ? void 0 : style.n) {
            numfmtValue = style.n;
          }
        }
        if (!numfmtValue) {
          numfmtValue = this._numfmtService.getValue(unitId, sheetId, location.row, location.col);
        }
        if (!numfmtValue) {
          return next(cell);
        }
        const type = checkCellValueType(originCellValue.v);
        if (type !== 2 /* NUMBER */) {
          return next(cell);
        }
        if (isTextFormat(numfmtValue.pattern)) {
          return next({
            ...cell,
            t: 1 /* STRING */,
            markers: {
              ...cell == null ? void 0 : cell.markers,
              ...TEXT_FORMAT_MARK
            }
          });
        }
        let numfmtRes = "";
        const cache = renderCache.getValue(location.row, location.col);
        if (cache && cache.parameters === `${originCellValue.v}_${numfmtValue.pattern}`) {
          return next({ ...cell, ...cache.result });
        }
        const info = getPatternPreviewIgnoreGeneral(numfmtValue.pattern, Number(originCellValue.v), this.local);
        numfmtRes = info.result;
        if (!numfmtRes) {
          return next(cell);
        }
        const res = { v: numfmtRes, t: 2 /* NUMBER */ };
        if (info.color) {
          const color = this._themeService.getCurrentTheme()[`${info.color}500`];
          if (color) {
            res.interceptorStyle = { cl: { rgb: color } };
          }
        }
        renderCache.setValue(location.row, location.col, {
          result: res,
          parameters: `${originCellValue.v}_${numfmtValue.pattern}`
        });
        return next({ ...cell, ...res });
      },
      priority: 10 /* NUMFMT */
    }));
    this.disposeWithMe(this._commandService.onCommandExecuted((commandInfo) => {
      if (commandInfo.id === SetNumfmtMutation.id) {
        const params = commandInfo.params;
        Object.keys(params.values).forEach((key) => {
          const v = params.values[key];
          v.ranges.forEach((range) => {
            Range.foreach(range, (row, col) => {
              renderCache.realDeleteValue(row, col);
            });
          });
        });
      } else if (commandInfo.id === SetRangeValuesMutation.id) {
        const params = commandInfo.params;
        new ObjectMatrix(params.cellValue).forValue((row, col) => {
          renderCache.realDeleteValue(row, col);
        });
      }
    }));
    this.disposeWithMe(
      this._instanceService.getCurrentTypeOfUnit$(O.UNIVER_SHEET).pipe(
        switchMap((workbook) => {
          var _a;
          return (_a = workbook == null ? void 0 : workbook.activeSheet$) != null ? _a : of(null);
        }),
        skip(1)
      ).subscribe(() => renderCache.reset())
    );
  }
  setNumfmtLocal(local) {
    this._local$.next(local);
  }
};
SheetsNumfmtCellContentController = __decorateClass([
  __decorateParam(0, IUniverInstanceService),
  __decorateParam(1, Inject(SheetInterceptorService)),
  __decorateParam(2, Inject(ThemeService)),
  __decorateParam(3, Inject(ICommandService)),
  __decorateParam(4, Inject(INumfmtService)),
  __decorateParam(5, Inject(LocaleService))
], SheetsNumfmtCellContentController);

// ../packages/sheets-numfmt/src/controllers/numfmt-currency.controller.ts
var NumfmtCurrencyController = class extends Disposable {
  constructor() {
    super(...arguments);
    __publicField(this, "_currencySymbol$", new BehaviorSubject("US"));
    __publicField(this, "currencySymbol$", this._currencySymbol$.asObservable());
  }
  /**
   * Set the currency symbol by setting the country code.
   */
  setCurrencySymbolByCountryCode(symbol) {
    this._currencySymbol$.next(symbol);
  }
  getCurrencySymbol() {
    return this._currencySymbol$.getValue();
  }
};

// ../packages/sheets-numfmt/src/numfmt-plugin.ts
var UniverSheetsNumfmtPlugin = class extends Plugin {
  constructor(_config = void 0, _injector, _commandService) {
    super();
    this._config = _config;
    this._injector = _injector;
    this._commandService = _commandService;
  }
  onStarting() {
    registerDependencies(this._injector, [
      [SheetsNumfmtCellContentController],
      [MenuCurrencyService],
      [NumfmtCurrencyController]
    ]);
    touchDependencies(this._injector, [
      [SheetsNumfmtCellContentController]
    ]);
  }
  onRendered() {
    touchDependencies(this._injector, [
      [NumfmtCurrencyController]
    ]);
    [
      AddDecimalCommand,
      SubtractDecimalCommand,
      SetCurrencyCommand,
      SetPercentCommand,
      SetNumfmtCommand
    ].forEach((config) => {
      this.disposeWithMe(this._commandService.registerCommand(config));
    });
  }
};
__publicField(UniverSheetsNumfmtPlugin, "pluginName", SHEET_NUMFMT_PLUGIN);
__publicField(UniverSheetsNumfmtPlugin, "type", O.UNIVER_SHEET);
UniverSheetsNumfmtPlugin = __decorateClass([
  DependentOn(UniverSheetsPlugin),
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, ICommandService)
], UniverSheetsNumfmtPlugin);

// ../packages/sheets-numfmt/src/utils/currency.ts
var getCurrencyType = (pattern) => {
  const item = currencySymbols.find((code) => pattern.includes(code));
  return item;
};

// ../packages/sheets-numfmt/src/utils/options.ts
var getCurrencyFormatOptions = (suffix) => CURRENCYFORMAT.map((item) => ({
  label: item.label(suffix),
  value: item.suffix(suffix),
  color: item.color
}));
var getDateFormatOptions = () => DATEFMTLISG.map((item) => ({ label: item.label, value: item.suffix }));
var getNumberFormatOptions = () => NUMBERFORMAT.map((item) => ({ label: item.label, value: item.suffix, color: item.color }));

export {
  currencySymbols,
  countryCurrencyMap,
  DATEFMTLISG,
  NUMBERFORMAT,
  CURRENCYFORMAT,
  getDecimalFromPattern,
  isPatternEqualWithoutDecimal,
  setPatternDecimal,
  isPatternHasDecimal,
  SetNumfmtCommand,
  AddDecimalCommand,
  MenuCurrencyService,
  SetCurrencyCommand,
  SetPercentCommand,
  SubtractDecimalCommand,
  getPatternType,
  getPatternPreview,
  getPatternPreviewIgnoreGeneral,
  SheetsNumfmtCellContentController,
  UniverSheetsNumfmtPlugin,
  getCurrencyType,
  getCurrencyFormatOptions,
  getDateFormatOptions,
  getNumberFormatOptions
};
//# sourceMappingURL=chunk-YZCWNVH6.js.map
