import {
  ClearSheetsFilterCriteriaCommand,
  FILTER_MUTATIONS,
  ReCalcSheetsFilterCommand,
  ReCalcSheetsFilterMutation,
  RemoveSheetFilterCommand,
  RemoveSheetsFilterMutation,
  SetSheetFilterRangeCommand,
  SetSheetsFilterCriteriaCommand,
  SetSheetsFilterCriteriaMutation,
  SetSheetsFilterRangeMutation,
  SheetsFilterService,
  SmartToggleSheetsFilterCommand,
  UniverSheetsFilterPlugin
} from "./chunk-3QA6BMH3.js";
import {
  ISheetSelectionRenderService,
  SelectionControl,
  SetCellEditVisibleOperation,
  SheetCanvasPopManagerService,
  SheetSkeletonManagerService,
  SheetsRenderService,
  attachSelectionWithCoord,
  getCoordByCell,
  getCurrentRangeDisable$,
  getObservableWithExclusiveRange$,
  whenSheetEditorFocused
} from "./chunk-NW7E7FBW.js";
import {
  ComponentContainer,
  ComponentManager,
  ILayoutService,
  IMenuManagerService,
  IMessageService,
  IRenderManagerService,
  IShortcutService,
  Rect,
  Shape,
  getMenuHiddenObservable,
  useComponentsOfPart,
  useDependency,
  useObservable
} from "./chunk-DOZPYWOG.js";
import {
  Button,
  Checkbox,
  Input,
  Radio,
  RadioGroup,
  Segmented,
  Select,
  Tree,
  filter_single_default,
  require_jsx_runtime,
  require_react
} from "./chunk-22LKBS37.js";
import {
  BehaviorSubject,
  DependentOn,
  Disposable,
  ICommandService,
  IConfigService,
  IContextService,
  ILogService,
  INTERCEPTOR_POINT,
  IRPCChannelService,
  IUniverInstanceService,
  Inject,
  Injector,
  LocaleService,
  O,
  Optional,
  Plugin,
  Quantity,
  RangeProtectionPermissionViewPoint,
  RefRangeService,
  ReplaySubject,
  RxDisposable,
  SetRangeValuesMutation,
  SheetInterceptorService,
  SheetPermissionCheckController,
  SheetsSelectionsService,
  Subject,
  ThemeService,
  Tools,
  WorksheetFilterPermission,
  WorksheetViewPermission,
  combineLatest,
  createIdentifier,
  distinctUntilChanged,
  expandToContinuousRange,
  extractPureTextFromCell,
  filter,
  fromCallback,
  fromModule,
  getSheetCommandTarget,
  map,
  merge,
  merge_default,
  numfmt,
  of,
  shareReplay,
  startWith,
  switchMap,
  takeUntil,
  throttleTime,
  toModule
} from "./chunk-33NDYU5R.js";
import {
  __decorateClass,
  __decorateParam,
  __publicField,
  __toESM
} from "./chunk-NSSCU2QI.js";

// ../packages/sheets-filter-ui/src/controllers/config.schema.ts
var SHEETS_FILTER_UI_PLUGIN_CONFIG_KEY = "sheets-filter-ui.config";
var configSymbol = Symbol(SHEETS_FILTER_UI_PLUGIN_CONFIG_KEY);
var defaultPluginConfig = {};

// ../packages/sheets-filter-ui/src/models/conditions.ts
var FilterConditionItems;
((FilterConditionItems2) => {
  FilterConditionItems2.NONE = {
    label: "sheets-filter.conditions.none",
    operator: "none" /* NONE */,
    order: 1 /* SECOND */,
    numOfParameters: 0,
    getDefaultFormParams: () => {
      throw new Error("[FilterConditionItems.NONE]: should not have initial form params!");
    },
    testMappingParams: (params) => {
      return params.operator1 === "none" /* NONE */;
    },
    mapToFilterColumn: () => null,
    testMappingFilterColumn: (filterColumn) => {
      if (!filterColumn.customFilters && !filterColumn.filters) return {};
      return false;
    }
  };
  FilterConditionItems2.EMPTY = {
    label: "sheets-filter.conditions.empty",
    operator: "empty" /* EMPTY */,
    order: 1 /* SECOND */,
    numOfParameters: 0,
    getDefaultFormParams: () => {
      throw new Error("[FilterConditionItems.EMPTY]: should not have initial form params!");
    },
    testMappingParams: ({ operator1 }) => operator1 === "empty" /* EMPTY */,
    mapToFilterColumn: () => ({ customFilters: { customFilters: [{ val: "" }] } }),
    testMappingFilterColumn: (filterColumn) => {
      var _a;
      if (((_a = filterColumn.customFilters) == null ? void 0 : _a.customFilters.length) !== 1) {
        return false;
      }
      const firstCustomFilter = filterColumn.customFilters.customFilters[0];
      const mapped = firstCustomFilter.val === "" && firstCustomFilter.operator === void 0;
      if (!mapped) {
        return false;
      }
      return { operator1: "empty" /* EMPTY */ };
    }
  };
  FilterConditionItems2.NOT_EMPTY = {
    label: "sheets-filter.conditions.not-empty",
    operator: "notEmpty" /* NOT_EMPTY */,
    order: 1 /* SECOND */,
    numOfParameters: 0,
    getDefaultFormParams: () => {
      throw new Error("[FilterConditionItems.NOT_EMPTY]: should not have initial form params!");
    },
    testMappingParams: ({ operator1 }) => operator1 === "notEmpty" /* NOT_EMPTY */,
    mapToFilterColumn: () => ({ customFilters: { customFilters: [{ val: "", operator: "notEqual" /* NOT_EQUALS */ }] } }),
    testMappingFilterColumn: (filterColumn) => {
      var _a;
      if (((_a = filterColumn.customFilters) == null ? void 0 : _a.customFilters.length) !== 1) {
        return false;
      }
      const firstCustomFilter = filterColumn.customFilters.customFilters[0];
      const canMap = firstCustomFilter.val === " " && firstCustomFilter.operator === "notEqual" /* NOT_EQUALS */;
      if (!canMap) {
        return false;
      }
      return { operator1: "notEmpty" /* NOT_EMPTY */ };
    }
  };
  FilterConditionItems2.TEXT_CONTAINS = {
    label: "sheets-filter.conditions.text-contains",
    operator: "contains" /* CONTAINS */,
    order: 0 /* FIRST */,
    numOfParameters: 1,
    getDefaultFormParams: () => ({ operator1: "contains" /* CONTAINS */, val1: "" }),
    testMappingParams: (params) => {
      const [op] = getOnlyOperatorAndVal(params);
      return op === "contains" /* CONTAINS */;
    },
    mapToFilterColumn: (mapParams) => {
      const { val1 } = mapParams;
      if (val1 === "") return null;
      return {
        customFilters: { customFilters: [{ val: `*${val1}*` }] }
      };
    },
    testMappingFilterColumn: (filterColumn) => {
      var _a;
      if (((_a = filterColumn.customFilters) == null ? void 0 : _a.customFilters.length) !== 1) {
        return false;
      }
      const firstCustomFilter = filterColumn.customFilters.customFilters[0];
      const valAsString = firstCustomFilter.val.toString();
      if (!firstCustomFilter.operator && valAsString.startsWith("*") && valAsString.endsWith("*")) {
        return { operator1: "contains" /* CONTAINS */, val1: valAsString.slice(1, -1) };
      }
      return false;
    }
  };
  FilterConditionItems2.DOES_NOT_CONTAIN = {
    label: "sheets-filter.conditions.does-not-contain",
    operator: "doesNotContain" /* DOES_NOT_CONTAIN */,
    order: 0 /* FIRST */,
    numOfParameters: 1,
    getDefaultFormParams: () => ({ operator1: "doesNotContain" /* DOES_NOT_CONTAIN */, val1: "" }),
    mapToFilterColumn: (mapParams) => ({
      customFilters: { customFilters: [{ val: `*${mapParams.val1}*`, operator: "notEqual" /* NOT_EQUALS */ }] }
    }),
    testMappingParams: (params) => {
      const [op] = getOnlyOperatorAndVal(params);
      return op === "doesNotContain" /* DOES_NOT_CONTAIN */;
    },
    testMappingFilterColumn: (filterColumn) => {
      var _a;
      if (((_a = filterColumn.customFilters) == null ? void 0 : _a.customFilters.length) !== 1) {
        return false;
      }
      const firstCustomFilter = filterColumn.customFilters.customFilters[0];
      const valAsString = firstCustomFilter.val.toString();
      if (firstCustomFilter.operator === "notEqual" /* NOT_EQUALS */ && valAsString.startsWith("*") && valAsString.endsWith("*")) {
        return { operator1: "doesNotContain" /* DOES_NOT_CONTAIN */, val1: valAsString.slice(1, -1) };
      }
      return false;
    }
  };
  FilterConditionItems2.STARTS_WITH = {
    label: "sheets-filter.conditions.starts-with",
    operator: "startsWith" /* STARTS_WITH */,
    order: 0 /* FIRST */,
    numOfParameters: 1,
    getDefaultFormParams: () => ({ operator1: "startsWith" /* STARTS_WITH */, val1: "" }),
    mapToFilterColumn: (mapParams) => ({
      customFilters: { customFilters: [{ val: `${mapParams.val1}*` }] }
    }),
    testMappingParams: (params) => {
      const [op] = getOnlyOperatorAndVal(params);
      return op === "startsWith" /* STARTS_WITH */;
    },
    testMappingFilterColumn: (filterColumn) => {
      var _a;
      if (((_a = filterColumn.customFilters) == null ? void 0 : _a.customFilters.length) !== 1) {
        return false;
      }
      const firstCustomFilter = filterColumn.customFilters.customFilters[0];
      const valAsString = firstCustomFilter.val.toString();
      if (!firstCustomFilter.operator && valAsString.endsWith("*") && !valAsString.startsWith("*")) {
        return { operator1: "startsWith" /* STARTS_WITH */, val1: valAsString.slice(0, -1) };
      }
      return false;
    }
  };
  FilterConditionItems2.ENDS_WITH = {
    label: "sheets-filter.conditions.ends-with",
    operator: "endsWith" /* ENDS_WITH */,
    order: 0 /* FIRST */,
    numOfParameters: 1,
    getDefaultFormParams: () => ({ operator1: "endsWith" /* ENDS_WITH */, val1: "" }),
    mapToFilterColumn: (mapParams) => ({
      customFilters: { customFilters: [{ val: `*${mapParams.val1}` }] }
    }),
    testMappingParams: (params) => {
      const [op] = getOnlyOperatorAndVal(params);
      return op === "endsWith" /* ENDS_WITH */;
    },
    testMappingFilterColumn: (filterColumn) => {
      var _a;
      if (((_a = filterColumn.customFilters) == null ? void 0 : _a.customFilters.length) !== 1) {
        return false;
      }
      const firstCustomFilter = filterColumn.customFilters.customFilters[0];
      const valAsString = firstCustomFilter.val.toString();
      if (!firstCustomFilter.operator && valAsString.startsWith("*") && !valAsString.endsWith("*")) {
        return { operator1: "endsWith" /* ENDS_WITH */, val1: valAsString.slice(1) };
      }
      return false;
    }
  };
  FilterConditionItems2.EQUALS = {
    label: "sheets-filter.conditions.equals",
    operator: "equals" /* EQUALS */,
    order: 0 /* FIRST */,
    numOfParameters: 1,
    getDefaultFormParams: () => ({ operator1: "equals" /* EQUALS */, val1: "" }),
    testMappingParams: (params) => {
      const [op] = getOnlyOperatorAndVal(params);
      return op === "equals" /* EQUALS */;
    },
    mapToFilterColumn: (mapParams) => {
      const { val1 } = mapParams;
      if (val1 === "") return null;
      return {
        customFilters: { customFilters: [{ val: val1 }] }
      };
    },
    testMappingFilterColumn: (filterColumn) => {
      var _a, _b, _c;
      if (((_b = (_a = filterColumn.filters) == null ? void 0 : _a.filters) == null ? void 0 : _b.length) === 1) {
        return { operator1: "equals" /* EQUALS */, val1: "" };
      }
      if (((_c = filterColumn.customFilters) == null ? void 0 : _c.customFilters.length) === 1 && !filterColumn.customFilters.customFilters[0].operator) {
        return { operator1: "equals" /* EQUALS */, val1: filterColumn.customFilters.customFilters[0].val.toString() };
      }
      return false;
    }
  };
  FilterConditionItems2.GREATER_THAN = {
    label: "sheets-filter.conditions.greater-than",
    operator: "greaterThan" /* GREATER_THAN */,
    numOfParameters: 1,
    order: 0 /* FIRST */,
    getDefaultFormParams: () => ({ operator1: "greaterThan" /* GREATER_THAN */, val1: "" }),
    mapToFilterColumn: (mapParams) => ({
      customFilters: { customFilters: [{ val: mapParams.val1, operator: "greaterThan" /* GREATER_THAN */ }] }
    }),
    testMappingParams: (params) => {
      const [op] = getOnlyOperatorAndVal(params);
      return op === "greaterThan" /* GREATER_THAN */;
    },
    testMappingFilterColumn: (filterColumn) => {
      var _a;
      if (((_a = filterColumn.customFilters) == null ? void 0 : _a.customFilters.length) !== 1) {
        return false;
      }
      const firstCustomFilter = filterColumn.customFilters.customFilters[0];
      if (firstCustomFilter.operator !== "greaterThan" /* GREATER_THAN */) {
        return false;
      }
      return { operator1: "greaterThan" /* GREATER_THAN */, val1: firstCustomFilter.val.toString() };
    }
  };
  FilterConditionItems2.GREATER_THAN_OR_EQUAL = {
    label: "sheets-filter.conditions.greater-than-or-equal",
    operator: "greaterThanOrEqual" /* GREATER_THAN_OR_EQUAL */,
    numOfParameters: 1,
    order: 0 /* FIRST */,
    getDefaultFormParams: () => ({ operator1: "greaterThanOrEqual" /* GREATER_THAN_OR_EQUAL */, val1: "" }),
    testMappingParams: (params) => {
      const [op] = getOnlyOperatorAndVal(params);
      return op === "greaterThanOrEqual" /* GREATER_THAN_OR_EQUAL */;
    },
    mapToFilterColumn: (mapParams) => ({
      customFilters: { customFilters: [{ val: mapParams.val1, operator: "greaterThanOrEqual" /* GREATER_THAN_OR_EQUAL */ }] }
    }),
    testMappingFilterColumn: (filterColumn) => {
      var _a;
      if (((_a = filterColumn.customFilters) == null ? void 0 : _a.customFilters.length) !== 1) {
        return false;
      }
      const firstCustomFilter = filterColumn.customFilters.customFilters[0];
      if (firstCustomFilter.operator !== "greaterThanOrEqual" /* GREATER_THAN_OR_EQUAL */) {
        return false;
      }
      return { operator1: "greaterThanOrEqual" /* GREATER_THAN_OR_EQUAL */, val1: firstCustomFilter.val.toString() };
    }
  };
  FilterConditionItems2.LESS_THAN = {
    label: "sheets-filter.conditions.less-than",
    operator: "lessThan" /* LESS_THAN */,
    numOfParameters: 1,
    order: 0 /* FIRST */,
    getDefaultFormParams: () => ({ operator1: "lessThan" /* LESS_THAN */, val1: "" }),
    testMappingParams: (params) => {
      const [op] = getOnlyOperatorAndVal(params);
      return op === "lessThan" /* LESS_THAN */;
    },
    mapToFilterColumn: (mapParams) => ({
      customFilters: { customFilters: [{ val: mapParams.val1, operator: "lessThan" /* LESS_THAN */ }] }
    }),
    testMappingFilterColumn: (filterColumn) => {
      var _a;
      if (((_a = filterColumn.customFilters) == null ? void 0 : _a.customFilters.length) !== 1) {
        return false;
      }
      const firstCustomFilter = filterColumn.customFilters.customFilters[0];
      if (firstCustomFilter.operator !== "lessThan" /* LESS_THAN */) {
        return false;
      }
      return { operator1: "lessThan" /* LESS_THAN */, val1: firstCustomFilter.val.toString() };
    }
  };
  FilterConditionItems2.LESS_THAN_OR_EQUAL = {
    label: "sheets-filter.conditions.less-than-or-equal",
    operator: "lessThanOrEqual" /* LESS_THAN_OR_EQUAL */,
    numOfParameters: 1,
    order: 0 /* FIRST */,
    getDefaultFormParams: () => ({ operator1: "lessThanOrEqual" /* LESS_THAN_OR_EQUAL */, val1: "" }),
    testMappingParams: (params) => {
      const [op] = getOnlyOperatorAndVal(params);
      return op === "lessThanOrEqual" /* LESS_THAN_OR_EQUAL */;
    },
    mapToFilterColumn: (mapParams) => ({
      customFilters: { customFilters: [{ val: mapParams.val1, operator: "lessThanOrEqual" /* LESS_THAN_OR_EQUAL */ }] }
    }),
    testMappingFilterColumn: (filterColumn) => {
      var _a;
      if (((_a = filterColumn.customFilters) == null ? void 0 : _a.customFilters.length) !== 1) {
        return false;
      }
      const firstCustomFilter = filterColumn.customFilters.customFilters[0];
      if (firstCustomFilter.operator !== "lessThanOrEqual" /* LESS_THAN_OR_EQUAL */) {
        return false;
      }
      return { operator1: "lessThanOrEqual" /* LESS_THAN_OR_EQUAL */, val1: firstCustomFilter.val.toString() };
    }
  };
  FilterConditionItems2.EQUAL = {
    label: "sheets-filter.conditions.equal",
    operator: "equal" /* EQUAL */,
    numOfParameters: 1,
    order: 0 /* FIRST */,
    getDefaultFormParams: () => ({ operator1: "equal" /* EQUAL */, val1: "" }),
    testMappingParams: (params) => {
      const [op] = getOnlyOperatorAndVal(params);
      return op === "equal" /* EQUAL */;
    },
    mapToFilterColumn: (mapParams) => ({
      customFilters: { customFilters: [{ val: mapParams.val1, operator: "equal" /* EQUAL */ }] }
    }),
    testMappingFilterColumn: (filterColumn) => {
      var _a;
      if (((_a = filterColumn.customFilters) == null ? void 0 : _a.customFilters.length) !== 1) {
        return false;
      }
      const firstCustomFilter = filterColumn.customFilters.customFilters[0];
      if (firstCustomFilter.operator !== "equal" /* EQUAL */) {
        return false;
      }
      return { operator1: "equal" /* EQUAL */, val1: firstCustomFilter.val.toString() };
    }
  };
  FilterConditionItems2.NOT_EQUAL = {
    label: "sheets-filter.conditions.not-equal",
    operator: "notEqual" /* NOT_EQUALS */,
    numOfParameters: 1,
    order: 0 /* FIRST */,
    getDefaultFormParams: () => ({ operator1: "notEqual" /* NOT_EQUALS */, val1: "" }),
    testMappingParams: (params) => {
      const [op] = getOnlyOperatorAndVal(params);
      return op === "notEqual" /* NOT_EQUALS */;
    },
    mapToFilterColumn: (mapParams) => ({
      customFilters: { customFilters: [{ val: mapParams.val1, operator: "notEqual" /* NOT_EQUALS */ }] }
    }),
    testMappingFilterColumn: (filterColumn) => {
      var _a;
      if (((_a = filterColumn.customFilters) == null ? void 0 : _a.customFilters.length) !== 1) {
        return false;
      }
      const firstCustomFilter = filterColumn.customFilters.customFilters[0];
      if (firstCustomFilter.operator !== "notEqual" /* NOT_EQUALS */) {
        return false;
      }
      return { operator1: "notEqual" /* NOT_EQUALS */, val1: firstCustomFilter.val.toString() };
    }
  };
  FilterConditionItems2.BETWEEN = {
    label: "sheets-filter.conditions.between",
    operator: "between" /* BETWEEN */,
    order: 1 /* SECOND */,
    numOfParameters: 2,
    getDefaultFormParams: () => ({
      and: true,
      operator1: "greaterThanOrEqual" /* GREATER_THAN_OR_EQUAL */,
      val1: "",
      operator2: "lessThanOrEqual" /* LESS_THAN_OR_EQUAL */,
      val2: ""
    }),
    testMappingParams: (params) => {
      const { and, operator1, operator2 } = params;
      if (!and) return false;
      const operators = [operator1, operator2];
      return operators.includes("greaterThanOrEqual" /* GREATER_THAN_OR_EQUAL */) && operators.includes("lessThanOrEqual" /* LESS_THAN_OR_EQUAL */);
    },
    mapToFilterColumn: (mapParams) => {
      const { val1, val2, operator1 } = mapParams;
      const operator1IsGreater = operator1 === "greaterThanOrEqual" /* GREATER_THAN_OR_EQUAL */;
      return {
        customFilters: {
          and: 1 /* TRUE */,
          customFilters: [
            { val: operator1IsGreater ? val1 : val2, operator: "greaterThanOrEqual" /* GREATER_THAN_OR_EQUAL */ },
            { val: operator1IsGreater ? val2 : val1, operator: "lessThanOrEqual" /* LESS_THAN_OR_EQUAL */ }
          ]
        }
      };
    },
    testMappingFilterColumn: (filterColumn) => {
      var _a;
      if (((_a = filterColumn.customFilters) == null ? void 0 : _a.customFilters.length) !== 2) {
        return false;
      }
      const [firstCustomFilter, secondCustomFilter] = filterColumn.customFilters.customFilters;
      if (firstCustomFilter.operator === "greaterThanOrEqual" /* GREATER_THAN_OR_EQUAL */ && secondCustomFilter.operator === "lessThanOrEqual" /* LESS_THAN_OR_EQUAL */ && filterColumn.customFilters.and) {
        return {
          and: true,
          operator1: "greaterThanOrEqual" /* GREATER_THAN_OR_EQUAL */,
          val1: firstCustomFilter.val.toString(),
          operator2: "lessThanOrEqual" /* LESS_THAN_OR_EQUAL */,
          val2: secondCustomFilter.val.toString()
        };
      }
      if (secondCustomFilter.operator === "greaterThanOrEqual" /* GREATER_THAN_OR_EQUAL */ && firstCustomFilter.operator === "lessThanOrEqual" /* LESS_THAN_OR_EQUAL */ && filterColumn.customFilters.and) {
        return {
          and: true,
          operator1: "greaterThanOrEqual" /* GREATER_THAN_OR_EQUAL */,
          val1: secondCustomFilter.val.toString(),
          operator2: "lessThanOrEqual" /* LESS_THAN_OR_EQUAL */,
          val2: firstCustomFilter.val.toLocaleString()
        };
      }
      return false;
    }
  };
  FilterConditionItems2.NOT_BETWEEN = {
    label: "sheets-filter.conditions.not-between",
    operator: "notBetween" /* NOT_BETWEEN */,
    order: 1 /* SECOND */,
    numOfParameters: 2,
    getDefaultFormParams: () => ({
      operator1: "lessThan" /* LESS_THAN */,
      val1: "",
      operator2: "greaterThan" /* GREATER_THAN */,
      val2: ""
    }),
    testMappingParams: (params) => {
      const { and, operator1, operator2 } = params;
      if (and) return false;
      const operators = [operator1, operator2];
      return operators.includes("greaterThan" /* GREATER_THAN */) && operators.includes("lessThan" /* LESS_THAN */);
    },
    mapToFilterColumn: (mapParams) => {
      const { val1, val2, operator1 } = mapParams;
      const operator1IsGreater = operator1 === "greaterThan" /* GREATER_THAN */;
      return {
        customFilters: {
          customFilters: [
            { val: operator1IsGreater ? val1 : val2, operator: "greaterThan" /* GREATER_THAN */ },
            { val: operator1IsGreater ? val2 : val1, operator: "lessThan" /* LESS_THAN */ }
          ]
        }
      };
    },
    testMappingFilterColumn: (filterColumn) => {
      var _a;
      if (((_a = filterColumn.customFilters) == null ? void 0 : _a.customFilters.length) !== 2) {
        return false;
      }
      const [firstCustomFilter, secondCustomFilter] = filterColumn.customFilters.customFilters;
      if (firstCustomFilter.operator === "lessThan" /* LESS_THAN */ && secondCustomFilter.operator === "greaterThan" /* GREATER_THAN */ && !filterColumn.customFilters.and) {
        return {
          operator1: "lessThan" /* LESS_THAN */,
          val1: firstCustomFilter.val.toString(),
          operator2: "greaterThan" /* GREATER_THAN */,
          val2: secondCustomFilter.val.toString()
        };
      }
      if (secondCustomFilter.operator === "lessThan" /* LESS_THAN */ && firstCustomFilter.operator === "greaterThan" /* GREATER_THAN */ && !filterColumn.customFilters.and) {
        return {
          operator1: "greaterThan" /* GREATER_THAN */,
          val1: secondCustomFilter.val.toString(),
          operator2: "lessThan" /* LESS_THAN */,
          val2: firstCustomFilter.val.toLocaleString()
        };
      }
      return false;
    }
  };
  FilterConditionItems2.CUSTOM = {
    label: "sheets-filter.conditions.custom",
    operator: "custom" /* CUSTOM */,
    order: 1 /* SECOND */,
    numOfParameters: 2,
    getDefaultFormParams: () => {
      return {
        operator1: "none" /* NONE */,
        val1: "",
        operator2: "none" /* NONE */,
        val2: ""
      };
    },
    testMappingParams: () => true,
    mapToFilterColumn: (mapParams) => {
      const { and, val1, val2, operator1, operator2 } = mapParams;
      function mapOperator(operator, val) {
        for (const condition of FilterConditionItems2.ALL_CONDITIONS) {
          if (condition.operator === operator) {
            return condition.mapToFilterColumn({ val1: val, operator1: operator });
          }
        }
      }
      const operator1IsNone = !operator1 || operator1 === FilterConditionItems2.NONE.operator;
      const operator2IsNone = !operator2 || operator2 === FilterConditionItems2.NONE.operator;
      if (operator1IsNone && operator2IsNone) {
        return FilterConditionItems2.NONE.mapToFilterColumn({});
      }
      if (operator1IsNone) {
        return mapOperator(operator2, val2);
      }
      if (operator2IsNone) {
        return mapOperator(operator1, val1);
      }
      const mappedCustomFilter1 = mapOperator(operator1, val1);
      const mappedCustomFilter2 = mapOperator(operator2, val2);
      const customFilters = {
        customFilters: [
          mappedCustomFilter1.customFilters.customFilters[0],
          mappedCustomFilter2.customFilters.customFilters[0]
        ]
      };
      if (and) customFilters.and = 1 /* TRUE */;
      return { customFilters };
    },
    testMappingFilterColumn: (filterColumn) => {
      var _a;
      if (((_a = filterColumn.customFilters) == null ? void 0 : _a.customFilters.length) !== 2) {
        return false;
      }
      const params = filterColumn.customFilters.customFilters.map((customFilter) => {
        return testMappingFilterColumn({ customFilters: { customFilters: [customFilter] } });
      });
      const result = {
        operator1: params[0][0].operator,
        val1: params[0][1].val1,
        operator2: params[1][0].operator,
        val2: params[1][1].val1
      };
      if (filterColumn.customFilters.and) {
        result.and = true;
      }
      return result;
    }
  };
  FilterConditionItems2.ALL_CONDITIONS = [
    // ------------------------------
    FilterConditionItems2.NONE,
    // ------------------------------
    FilterConditionItems2.EMPTY,
    FilterConditionItems2.NOT_EMPTY,
    // ------------------------------
    FilterConditionItems2.TEXT_CONTAINS,
    FilterConditionItems2.DOES_NOT_CONTAIN,
    FilterConditionItems2.STARTS_WITH,
    FilterConditionItems2.ENDS_WITH,
    FilterConditionItems2.EQUALS,
    // ------------------------------
    FilterConditionItems2.GREATER_THAN,
    FilterConditionItems2.GREATER_THAN_OR_EQUAL,
    FilterConditionItems2.LESS_THAN,
    FilterConditionItems2.LESS_THAN_OR_EQUAL,
    FilterConditionItems2.EQUAL,
    FilterConditionItems2.NOT_EQUAL,
    FilterConditionItems2.BETWEEN,
    FilterConditionItems2.NOT_BETWEEN,
    // ------------------------------
    FilterConditionItems2.CUSTOM
  ];
  function getItemByOperator(operator) {
    const item = FilterConditionItems2.ALL_CONDITIONS.find((condition) => condition.operator === operator);
    if (!item) {
      throw new Error(`[SheetsFilter]: no condition item found for operator: ${operator}`);
    }
    return item;
  }
  FilterConditionItems2.getItemByOperator = getItemByOperator;
  function testMappingParams(mapParams, numOfParameters) {
    for (const condition of FilterConditionItems2.ALL_CONDITIONS.filter((condition2) => condition2.numOfParameters === numOfParameters)) {
      if (condition.numOfParameters !== 0 && condition.testMappingParams(mapParams)) {
        return condition;
      }
    }
    for (const condition of FilterConditionItems2.ALL_CONDITIONS) {
      if (condition.testMappingParams(mapParams)) {
        return condition;
      }
    }
    throw new Error("[SheetsFilter]: no condition item can be mapped from the filter map params!");
  }
  FilterConditionItems2.testMappingParams = testMappingParams;
  function getInitialFormParams(operator) {
    const condition = FilterConditionItems2.ALL_CONDITIONS.find((condition2) => condition2.operator === operator);
    if ((condition == null ? void 0 : condition.numOfParameters) === 0) {
      return { operator1: condition.operator };
    }
    return condition.getDefaultFormParams();
  }
  FilterConditionItems2.getInitialFormParams = getInitialFormParams;
  function mapToFilterColumn(condition, mapParams) {
    return condition.mapToFilterColumn(mapParams);
  }
  FilterConditionItems2.mapToFilterColumn = mapToFilterColumn;
  function testMappingFilterColumn(filterColumn) {
    if (!filterColumn) {
      return [FilterConditionItems2.NONE, {}];
    }
    for (const condition of FilterConditionItems2.ALL_CONDITIONS) {
      const mapParams = condition.testMappingFilterColumn(filterColumn);
      if (mapParams) {
        return [condition, mapParams];
      }
    }
    return [FilterConditionItems2.NONE, {}];
  }
  FilterConditionItems2.testMappingFilterColumn = testMappingFilterColumn;
})(FilterConditionItems || (FilterConditionItems = {}));
function getOnlyOperatorAndVal(mapParams) {
  const { operator1, operator2, val1, val2 } = mapParams;
  if (operator1 && operator2) {
    throw new Error("Both operator1 and operator2 are set!");
  }
  if (!operator1 && !operator2) {
    throw new Error("Neither operator1 and operator2 and both not set!");
  }
  return operator1 ? [operator1, val1] : [operator2, val2];
}

// ../packages/sheets-filter-ui/src/models/utils.ts
function statisticFilterByValueItems(items) {
  const checkedItems = [];
  const uncheckedItems = [];
  let checked = 0;
  let unchecked = 0;
  function traverse(node) {
    if (node.leaf) {
      if (node.checked) {
        checkedItems.push(node);
        checked += node.count;
      } else {
        uncheckedItems.push(node);
        unchecked += node.count;
      }
    }
    if (node.children) {
      node.children.forEach(traverse);
    }
  }
  items.forEach(traverse);
  return {
    checkedItems,
    uncheckedItems,
    checked,
    unchecked
  };
}

// ../packages/sheets-filter-ui/src/worker/generate-filter-values.service.ts
var SHEETS_GENERATE_FILTER_VALUES_SERVICE_NAME = "sheets-filter.generate-filter-values.service";
var ISheetsGenerateFilterValuesService = createIdentifier(SHEETS_GENERATE_FILTER_VALUES_SERVICE_NAME);
var CAN_PARSE_DATE_FORMAT = ["yyyy-mm-dd", "yyyy-mm-dd;@", "yyyy/mm/dd;@", "yyyy/mm/dd hh:mm", "yyyy-m-d am/pm h:mm", "yyyy-MM-dd", "yyyy/MM/dd", "yyyy/mm/dd", 'yyyy"\u5E74"MM"\u6708"dd"\u65E5"', "MM-dd", 'M"\u6708"d"\u65E5"', "MM-dd A/P hh:mm"];
var SheetsGenerateFilterValuesService = class extends Disposable {
  constructor(_localeService, _univerInstanceService, _logService) {
    super();
    this._localeService = _localeService;
    this._univerInstanceService = _univerInstanceService;
    this._logService = _logService;
  }
  async getFilterValues(params) {
    var _a;
    const { unitId, subUnitId, filteredOutRowsByOtherColumns, filters, blankChecked, iterateRange, alreadyChecked } = params;
    const workbook = this._univerInstanceService.getUnit(unitId);
    const worksheet = (_a = this._univerInstanceService.getUnit(unitId)) == null ? void 0 : _a.getSheetBySheetId(subUnitId);
    if (!workbook || !worksheet) return [];
    this._logService.debug("[SheetsGenerateFilterValuesService]", "getFilterValues for", { unitId, subUnitId });
    return getFilterTreeByValueItems(filters, this._localeService, iterateRange, worksheet, new Set(filteredOutRowsByOtherColumns), new Set(alreadyChecked.map(String)), blankChecked, workbook.getStyles());
  }
};
SheetsGenerateFilterValuesService = __decorateClass([
  __decorateParam(0, Inject(LocaleService)),
  __decorateParam(1, IUniverInstanceService),
  __decorateParam(2, ILogService)
], SheetsGenerateFilterValuesService);
function getFilterTreeByValueItems(filters, localeService, iterateRange, worksheet, filteredOutRowsByOtherColumns, alreadyChecked, blankChecked, styles) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const items = /* @__PURE__ */ new Map();
  const treeMap = /* @__PURE__ */ new Map();
  const DefaultPattern = "yyyy-mm-dd";
  const canSplitPatternSet = new Set(CAN_PARSE_DATE_FORMAT);
  const EmptyKey = "empty";
  let emptyCount = 0;
  for (const cell of worksheet.iterateByColumn(iterateRange, false, false)) {
    const { row, rowSpan = 1 } = cell;
    let rowIndex = 0;
    while (rowIndex < rowSpan) {
      const targetRow = row + rowIndex;
      if (filteredOutRowsByOtherColumns.has(targetRow)) {
        rowIndex++;
        continue;
      }
      const value = (cell == null ? void 0 : cell.value) ? extractPureTextFromCell(cell.value) : "";
      if (!value) {
        emptyCount += 1;
        rowIndex += rowSpan;
        continue;
      }
      const fmtStr = ((_a = cell.value) == null ? void 0 : _a.v) && !cell.value.p ? (_d = (_c = styles.get((_b = cell.value) == null ? void 0 : _b.s)) == null ? void 0 : _c.n) == null ? void 0 : _d.pattern : "";
      const isDateValue = fmtStr && numfmt.isDate(fmtStr);
      if (fmtStr && isDateValue && canSplitPatternSet.has(fmtStr)) {
        const originValue = (_e = worksheet.getCellRaw(cell.row, cell.col)) == null ? void 0 : _e.v;
        if (!originValue) {
          rowIndex++;
          continue;
        }
        const valueParsedByDefaultPattern = numfmt.format(DefaultPattern, originValue);
        const [year, month, day] = valueParsedByDefaultPattern.split("-").map(Number);
        let yearItem = items.get(`${year}`);
        if (!yearItem) {
          yearItem = {
            title: `${year}`,
            key: `${year}`,
            children: [],
            count: 0,
            leaf: false,
            checked: false
          };
          items.set(`${year}`, yearItem);
          treeMap.set(`${year}`, [`${year}`]);
        }
        let monthItem = (_f = yearItem.children) == null ? void 0 : _f.find((item) => item.key === `${year}-${month}`);
        if (!monthItem) {
          monthItem = {
            title: localeService.t(`sheets-filter.date.${month}`),
            key: `${year}-${month}`,
            children: [],
            count: 0,
            leaf: false,
            checked: false
          };
          (_g = yearItem.children) == null ? void 0 : _g.push(monthItem);
          treeMap.set(`${year}-${month}`, [`${year}`, `${year}-${month}`]);
        }
        const dayItem = (_h = monthItem == null ? void 0 : monthItem.children) == null ? void 0 : _h.find((item) => item.key === `${year}-${month}-${day}`);
        if (!dayItem) {
          (_i = monthItem.children) == null ? void 0 : _i.push({
            title: `${day}`,
            key: `${year}-${month}-${day}`,
            count: 1,
            originValues: /* @__PURE__ */ new Set([value]),
            leaf: true,
            checked: alreadyChecked.size ? alreadyChecked.has(value) : !blankChecked
          });
          monthItem.count++;
          yearItem.count++;
          treeMap.set(`${year}-${month}-${day}`, [`${year}`, `${year}-${month}`, `${year}-${month}-${day}`]);
        } else {
          dayItem.originValues.add(value);
          dayItem.count++;
          monthItem.count++;
          yearItem.count++;
        }
      } else {
        const key = value;
        let item = items.get(key);
        if (!item) {
          item = {
            title: value,
            leaf: true,
            checked: alreadyChecked.size ? alreadyChecked.has(value) : !blankChecked,
            key,
            count: 1
          };
          items.set(key, item);
          treeMap.set(key, [key]);
        } else {
          item.count++;
        }
      }
      rowIndex++;
    }
  }
  const initialBlankChecked = filters ? blankChecked : true;
  if (emptyCount > 0) {
    const item = {
      title: localeService.t("sheets-filter.panel.empty"),
      count: emptyCount,
      leaf: true,
      checked: initialBlankChecked,
      key: EmptyKey
    };
    items.set("empty", item);
    treeMap.set("empty", [EmptyKey]);
  }
  return {
    filterTreeItems: generateFilterTreeBySort(Array.from(items.values())),
    filterTreeMapCache: treeMap
  };
}
function generateFilterTreeBySort(tree) {
  return Array.from(tree).sort((a, b) => {
    if (a.children && !b.children) return -1;
    if (!a.children && b.children) return 1;
    return b.title.localeCompare(a.title);
  }).map((yearItem) => {
    if (yearItem.children) {
      yearItem.children.sort((a, b) => {
        const monthA = Number.parseInt(a.key.split("-")[1], 10);
        const monthB = Number.parseInt(b.key.split("-")[1], 10);
        return monthA - monthB;
      }).forEach((monthItem) => {
        if (monthItem.children) {
          monthItem.children.sort((a, b) => {
            const dayA = Number.parseInt(a.key.split("-")[2], 10);
            const dayB = Number.parseInt(b.key.split("-")[2], 10);
            return dayA - dayB;
          });
        }
      });
    }
    return yearItem;
  });
}

// ../packages/sheets-filter-ui/src/services/util.ts
function findObjectByKey(data, targetKey) {
  for (const node of data) {
    if (node.key === targetKey) {
      return node;
    }
    if (node.children) {
      const result = findObjectByKey(node.children, targetKey);
      if (result) {
        return result;
      }
    }
  }
  return null;
}
function areAllLeafNodesChecked(node) {
  if (node.leaf) {
    return node.checked;
  }
  return node.children ? node.children.every((child) => areAllLeafNodesChecked(child)) : true;
}
function updateLeafNodesCheckedStatus(node, status) {
  if (node.leaf) {
    if (status !== void 0) {
      node.checked = status;
    } else {
      node.checked = !node.checked;
    }
  }
  if (node.children) {
    node.children.forEach((child) => updateLeafNodesCheckedStatus(child, status));
  }
}
function searchTree(items, searchKeywords) {
  const result = [];
  items.forEach((item) => {
    const originMatches = item.originValues ? searchKeywords.some(
      (keyword) => Array.from(item.originValues).some(
        (value) => value.toLowerCase().includes(keyword.toLowerCase())
      )
    ) : false;
    const titleMatches = !originMatches && searchKeywords.some(
      (keyword) => item.title.toLowerCase().includes(keyword.toLowerCase())
    );
    const matches = originMatches || titleMatches;
    if (matches) {
      result.push({ ...item });
    } else if (item.children) {
      const filteredChildren = searchTree(item.children, searchKeywords);
      if (filteredChildren.length > 0) {
        const aggregatedCount = filteredChildren.reduce((sum, child) => sum + child.count, 0);
        result.push({ ...item, count: aggregatedCount, children: filteredChildren });
      }
    }
  });
  return result;
}

// ../packages/sheets-filter-ui/src/services/sheets-filter-panel.service.ts
var ISheetsFilterPanelService = createIdentifier("sheets-filter-ui.sheets-filter-panel.service");
var SheetsFilterPanelService = class extends Disposable {
  constructor(_injector, _refRangeService) {
    super();
    this._injector = _injector;
    this._refRangeService = _refRangeService;
    __publicField(this, "_filterBy$", new BehaviorSubject(0 /* VALUES */));
    __publicField(this, "filterBy$", this._filterBy$.asObservable());
    __publicField(this, "_filterByModel$", new ReplaySubject(1));
    __publicField(this, "filterByModel$", this._filterByModel$.asObservable());
    __publicField(this, "_filterByModel", null);
    __publicField(this, "_hasCriteria$", new BehaviorSubject(false));
    __publicField(this, "hasCriteria$", this._hasCriteria$.asObservable());
    __publicField(this, "_filterModel", null);
    __publicField(this, "_col$", new BehaviorSubject(-1));
    __publicField(this, "col$", this._col$.asObservable());
    __publicField(this, "_filterHeaderListener", null);
  }
  get filterBy() {
    return this._filterBy$.getValue();
  }
  get filterByModel() {
    return this._filterByModel;
  }
  set filterByModel(model) {
    this._filterByModel = model;
    this._filterByModel$.next(model);
  }
  get filterModel() {
    return this._filterModel;
  }
  get col() {
    return this._col$.getValue();
  }
  dispose() {
    this._filterBy$.complete();
    this._filterByModel$.complete();
    this._hasCriteria$.complete();
  }
  setupCol(filterModel, col) {
    this.terminate();
    this._filterModel = filterModel;
    this._col$.next(col);
    const filterColumn = filterModel.getFilterColumn(col);
    if (filterColumn) {
      const info = filterColumn.getColumnData();
      if (info.customFilters) {
        this._hasCriteria$.next(true);
        this._setupByConditions(filterModel, col);
        return;
      }
      if (info.filters) {
        this._hasCriteria$.next(true);
        this._setupByValues(filterModel, col);
        return;
      }
      this._hasCriteria$.next(false);
      this._setupByValues(filterModel, col);
      return;
    }
    this._hasCriteria$.next(false);
    this._setupByValues(filterModel, col);
  }
  changeFilterBy(filterBy) {
    if (!this._filterModel || this.col === -1) {
      return false;
    }
    if (filterBy === 0 /* VALUES */) {
      this._setupByValues(this._filterModel, this.col);
    } else {
      this._setupByConditions(this._filterModel, this.col);
    }
    return true;
  }
  terminate() {
    this._filterModel = null;
    this._col$.next(-1);
    this._disposeFilterHeaderChangeListener();
    return true;
  }
  _disposeFilterHeaderChangeListener() {
    var _a;
    (_a = this._filterHeaderListener) == null ? void 0 : _a.dispose();
    this._filterHeaderListener = null;
  }
  _listenToFilterHeaderChange(filterModel, col) {
    this._disposeFilterHeaderChangeListener();
    const unitId = filterModel.unitId;
    const subUnitId = filterModel.subUnitId;
    const filterRange = filterModel.getRange();
    const columnHeaderRange = {
      startColumn: col,
      startRow: filterRange.startRow,
      endRow: filterRange.startRow,
      endColumn: col
    };
    this._filterHeaderListener = this._refRangeService.watchRange(unitId, subUnitId, columnHeaderRange, (before, after) => {
      if (!after) {
        this.terminate();
      } else {
        const offset = after.startColumn - before.startColumn;
        if (offset !== 0) {
          this._filterByModel.deltaCol(offset);
        }
      }
    });
  }
  async _setupByValues(filterModel, col) {
    this._disposePreviousModel();
    const range = filterModel.getRange();
    if (range.startRow === range.endRow) return false;
    const filterByModel = await ByValuesModel.fromFilterColumn(
      this._injector,
      filterModel,
      col
    );
    this.filterByModel = filterByModel;
    this._filterBy$.next(0 /* VALUES */);
    this._listenToFilterHeaderChange(filterModel, col);
    return true;
  }
  _setupByConditions(filterModel, col) {
    this._disposePreviousModel();
    const range = filterModel.getRange();
    if (range.startRow === range.endRow) return false;
    const model = ByConditionsModel.fromFilterColumn(
      this._injector,
      filterModel,
      col,
      filterModel.getFilterColumn(col)
    );
    this.filterByModel = model;
    this._filterBy$.next(1 /* CONDITIONS */);
    this._listenToFilterHeaderChange(filterModel, col);
    return true;
  }
  _disposePreviousModel() {
    var _a;
    (_a = this._filterByModel) == null ? void 0 : _a.dispose();
    this.filterByModel = null;
  }
};
SheetsFilterPanelService = __decorateClass([
  __decorateParam(0, Inject(Injector)),
  __decorateParam(1, Inject(RefRangeService))
], SheetsFilterPanelService);
var ByConditionsModel = class extends Disposable {
  constructor(_filterModel, col, conditionItem, conditionParams, _commandService) {
    super();
    this._filterModel = _filterModel;
    this.col = col;
    this._commandService = _commandService;
    __publicField(this, "canApply$", of(true));
    __publicField(this, "_conditionItem$");
    __publicField(this, "conditionItem$");
    __publicField(this, "_filterConditionFormParams$");
    __publicField(this, "filterConditionFormParams$");
    this._conditionItem$ = new BehaviorSubject(conditionItem);
    this.conditionItem$ = this._conditionItem$.asObservable();
    this._filterConditionFormParams$ = new BehaviorSubject(conditionParams);
    this.filterConditionFormParams$ = this._filterConditionFormParams$.asObservable();
  }
  /**
   * Create a model with targeting filter column. If there is not a filter column, the model would be created with
   * default values.
   *
   * @param injector
   * @param filterModel
   * @param col
   * @param filterColumn
   *
   * @returns the model to control the panel's state
   */
  static fromFilterColumn(injector, filterModel, col, filterColumn) {
    const [conditionItem, conditionParams] = FilterConditionItems.testMappingFilterColumn(filterColumn == null ? void 0 : filterColumn.getColumnData());
    const model = injector.createInstance(ByConditionsModel, filterModel, col, conditionItem, conditionParams);
    return model;
  }
  get conditionItem() {
    return this._conditionItem$.getValue();
  }
  get filterConditionFormParams() {
    return this._filterConditionFormParams$.getValue();
  }
  dispose() {
    super.dispose();
    this._conditionItem$.complete();
    this._filterConditionFormParams$.complete();
  }
  deltaCol(offset) {
    this.col += offset;
  }
  clear() {
    if (this._disposed) return Promise.resolve(false);
    return this._commandService.executeCommand(SetSheetsFilterCriteriaCommand.id, {
      unitId: this._filterModel.unitId,
      subUnitId: this._filterModel.subUnitId,
      col: this.col,
      criteria: null
    });
  }
  /**
   * Apply the filter condition to the target filter column.
   */
  async apply() {
    if (this._disposed) return false;
    const filterColumn = FilterConditionItems.mapToFilterColumn(this.conditionItem, this.filterConditionFormParams);
    return this._commandService.executeCommand(SetSheetsFilterCriteriaCommand.id, {
      unitId: this._filterModel.unitId,
      subUnitId: this._filterModel.subUnitId,
      col: this.col,
      criteria: filterColumn
    });
  }
  /**
   * This method would be called when user changes the primary condition. The model would load the corresponding
   * `IFilterConditionFormParams` and load default condition form params.
   */
  onPrimaryConditionChange(operator) {
    const conditionItem = FilterConditionItems.ALL_CONDITIONS.find((item) => item.operator === operator);
    if (!conditionItem) {
      throw new Error(`[ByConditionsModel]: condition item not found for operator: ${operator}!`);
    }
    this._conditionItem$.next(conditionItem);
    this._filterConditionFormParams$.next(FilterConditionItems.getInitialFormParams(operator));
  }
  /**
   * This method would be called when user changes the primary conditions, the input values or "AND" "OR" ratio.
   * If the primary conditions or the ratio is changed, the method would load the corresponding `IFilterCondition`.
   *
   * When the panel call this method, it only has to pass the changed keys.
   *
   * @param params
   */
  onConditionFormChange(params) {
    const newParams = { ...this.filterConditionFormParams, ...params };
    if (newParams.and !== true) {
      delete newParams.and;
    }
    if (typeof params.and !== "undefined" || typeof params.operator1 !== "undefined" || typeof params.operator2 !== "undefined") {
      const conditionItem = FilterConditionItems.testMappingParams(newParams, this.conditionItem.numOfParameters);
      this._conditionItem$.next(conditionItem);
    }
    this._filterConditionFormParams$.next(newParams);
  }
};
ByConditionsModel = __decorateClass([
  __decorateParam(4, ICommandService)
], ByConditionsModel);
var ByValuesModel = class extends Disposable {
  constructor(_filterModel, col, items, cache, _commandService) {
    super();
    this._filterModel = _filterModel;
    this.col = col;
    this._commandService = _commandService;
    __publicField(this, "_rawFilterItems$");
    __publicField(this, "rawFilterItems$");
    __publicField(this, "filterItems$");
    __publicField(this, "_filterItems", []);
    __publicField(this, "_treeMapCache");
    __publicField(this, "canApply$");
    __publicField(this, "_manuallyUpdateFilterItems$");
    __publicField(this, "_searchString$");
    __publicField(this, "searchString$");
    this._treeMapCache = cache;
    this._searchString$ = new BehaviorSubject("");
    this.searchString$ = this._searchString$.asObservable();
    this._rawFilterItems$ = new BehaviorSubject(items);
    this.rawFilterItems$ = this._rawFilterItems$.asObservable();
    this._manuallyUpdateFilterItems$ = new Subject();
    this.filterItems$ = merge(
      combineLatest([
        this._searchString$.pipe(
          throttleTime(500, void 0, { leading: true, trailing: true }),
          startWith(void 0)
        ),
        this._rawFilterItems$
      ]).pipe(
        map(([searchString, items2]) => {
          if (!searchString) return items2;
          const lowerSearchString = searchString.toLowerCase();
          const searchKeyWords = lowerSearchString.split(/\s+/).filter((s) => !!s);
          return searchTree(items2, searchKeyWords);
        })
      ),
      this._manuallyUpdateFilterItems$
    ).pipe(shareReplay(1));
    this.canApply$ = this.filterItems$.pipe(map((items2) => {
      const stat = statisticFilterByValueItems(items2);
      return stat.checked > 0;
    }));
    this.disposeWithMe(this.filterItems$.subscribe((items2) => this._filterItems = items2));
  }
  /**
   * Create a model with targeting filter column. If there is not a filter column, the model would be created with
   * default values.
   *
   * @param injector
   * @param filterModel
   * @param col
   *
   * @returns the model to control the panel's state
   */
  static async fromFilterColumn(injector, filterModel, col) {
    var _a;
    const univerInstanceService = injector.get(IUniverInstanceService);
    const localeService = injector.get(LocaleService);
    const generateFilterValuesService = injector.get(ISheetsGenerateFilterValuesService, Quantity.OPTIONAL);
    const { unitId, subUnitId } = filterModel;
    const workbook = univerInstanceService.getUniverSheetInstance(unitId);
    if (!workbook) throw new Error(`[ByValuesModel]: Workbook not found for filter model with unitId: ${unitId}!`);
    const worksheet = workbook == null ? void 0 : workbook.getSheetBySheetId(subUnitId);
    if (!worksheet) throw new Error(`[ByValuesModel]: Worksheet not found for filter model with unitId: ${unitId} and subUnitId: ${subUnitId}!`);
    const range = filterModel.getRange();
    const column = col;
    const filters = (_a = filterModel.getFilterColumn(col)) == null ? void 0 : _a.getColumnData().filters;
    const alreadyChecked = new Set(filters == null ? void 0 : filters.filters);
    const blankChecked = !!(filters && filters.blank);
    const filteredOutRowsByOtherColumns = filterModel.getFilteredOutRowsExceptCol(col);
    const iterateRange = { ...range, startRow: range.startRow + 1, startColumn: column, endColumn: column };
    let items;
    let cache;
    if (generateFilterValuesService) {
      const res = await generateFilterValuesService.getFilterValues({
        unitId,
        subUnitId,
        filteredOutRowsByOtherColumns: Array.from(filteredOutRowsByOtherColumns),
        filters: !!filters,
        blankChecked,
        iterateRange,
        alreadyChecked: Array.from(alreadyChecked)
      });
      items = res.filterTreeItems;
      cache = res.filterTreeMapCache;
    } else {
      const res = getFilterTreeByValueItems(!!filters, localeService, iterateRange, worksheet, filteredOutRowsByOtherColumns, alreadyChecked, blankChecked, workbook.getStyles());
      items = res.filterTreeItems;
      cache = res.filterTreeMapCache;
    }
    return injector.createInstance(ByValuesModel, filterModel, col, items, cache);
  }
  get rawFilterItems() {
    return this._rawFilterItems$.getValue();
  }
  get filterItems() {
    return this._filterItems;
  }
  get treeMapCache() {
    return this._treeMapCache;
  }
  dispose() {
    this._rawFilterItems$.complete();
    this._searchString$.complete();
  }
  deltaCol(offset) {
    this.col += offset;
  }
  setSearchString(str) {
    this._searchString$.next(str);
  }
  onCheckAllToggled(checked) {
    const items = Tools.deepClone(this._filterItems);
    items.forEach((item) => updateLeafNodesCheckedStatus(item, checked));
    this._manuallyUpdateFilterItems(items);
  }
  /**
   * Toggle a filter item.
   */
  onFilterCheckToggled(item) {
    const items = Tools.deepClone(this._filterItems);
    const changedItem = findObjectByKey(items, item.key);
    if (!changedItem) {
      return;
    }
    const allLeafChecked = areAllLeafNodesChecked(changedItem);
    updateLeafNodesCheckedStatus(changedItem, !allLeafChecked);
    this._manuallyUpdateFilterItems(items);
  }
  onFilterOnly(itemKeys) {
    const items = Tools.deepClone(this._filterItems);
    items.forEach((item) => updateLeafNodesCheckedStatus(item, false));
    itemKeys.forEach((key) => {
      const changedItem = findObjectByKey(items, key);
      if (changedItem) {
        updateLeafNodesCheckedStatus(changedItem, true);
      }
    });
    this._manuallyUpdateFilterItems(items);
  }
  _manuallyUpdateFilterItems(items) {
    this._manuallyUpdateFilterItems$.next(items);
  }
  // expose method here to let the panel change filter items
  // #region ByValuesModel apply methods
  clear() {
    if (this._disposed) return Promise.resolve(false);
    return this._commandService.executeCommand(SetSheetsFilterCriteriaCommand.id, {
      unitId: this._filterModel.unitId,
      subUnitId: this._filterModel.subUnitId,
      col: this.col,
      criteria: null
    });
  }
  /**
   * Apply the filter condition to the target filter column.
   */
  async apply() {
    if (this._disposed) {
      return false;
    }
    const statistics = statisticFilterByValueItems(this._filterItems);
    const { checked, checkedItems } = statistics;
    const rawFilterItems = this.rawFilterItems;
    let rawFilterCount = 0;
    for (const item of rawFilterItems) {
      rawFilterCount += item.count;
    }
    const noChecked = checked === 0;
    const allChecked = statistics.checked === rawFilterCount;
    const criteria = { colId: this.col };
    if (noChecked) {
      throw new Error("[ByValuesModel]: no checked items!");
    } else if (allChecked) {
      return this._commandService.executeCommand(SetSheetsFilterCriteriaCommand.id, {
        unitId: this._filterModel.unitId,
        subUnitId: this._filterModel.subUnitId,
        col: this.col,
        criteria: null
      });
    } else {
      criteria.filters = {};
      const nonEmptyItems = checkedItems.filter((item) => item.key !== "empty");
      if (nonEmptyItems.length > 0) {
        criteria.filters = {
          filters: nonEmptyItems.flatMap((item) => item.originValues ? Array.from(item.originValues) : [item.title])
        };
      }
      const hasEmpty = nonEmptyItems.length !== checkedItems.length;
      if (hasEmpty) {
        criteria.filters.blank = true;
      }
    }
    return this._commandService.executeCommand(SetSheetsFilterCriteriaCommand.id, {
      unitId: this._filterModel.unitId,
      subUnitId: this._filterModel.subUnitId,
      col: this.col,
      criteria
    });
  }
  // #endregion
};
ByValuesModel = __decorateClass([
  __decorateParam(4, ICommandService)
], ByValuesModel);

// ../packages/sheets-filter-ui/src/commands/operations/sheets-filter.operation.ts
var FILTER_PANEL_OPENED_KEY = "FILTER_PANEL_OPENED";
var OpenFilterPanelOperation = {
  id: "sheet.operation.open-filter-panel",
  type: 1 /* OPERATION */,
  handler: (accessor, params) => {
    const contextService = accessor.get(IContextService);
    const sheetsFilterService = accessor.get(SheetsFilterService);
    const sheetsFilterPanelService = accessor.get(SheetsFilterPanelService);
    const commandService = accessor.get(ICommandService);
    commandService.syncExecuteCommand(SetCellEditVisibleOperation.id, { visible: false });
    const { unitId, subUnitId, col } = params;
    const filterModel = sheetsFilterService.getFilterModel(unitId, subUnitId);
    if (!filterModel) return false;
    sheetsFilterPanelService.setupCol(filterModel, col);
    if (!contextService.getContextValue(FILTER_PANEL_OPENED_KEY)) {
      contextService.setContextValue(FILTER_PANEL_OPENED_KEY, true);
    }
    return true;
  }
};
var CloseFilterPanelOperation = {
  id: "sheet.operation.close-filter-panel",
  type: 1 /* OPERATION */,
  handler: (accessor) => {
    const contextService = accessor.get(IContextService);
    const sheetsFilterPanelService = accessor.get(SheetsFilterPanelService);
    const layoutService = accessor.get(ILayoutService, Quantity.OPTIONAL);
    if (contextService.getContextValue(FILTER_PANEL_OPENED_KEY)) {
      contextService.setContextValue(FILTER_PANEL_OPENED_KEY, false);
      layoutService == null ? void 0 : layoutService.focus();
      return sheetsFilterPanelService.terminate();
    }
    return false;
  }
};
var ChangeFilterByOperation = {
  id: "sheet.operation.apply-filter",
  type: 1 /* OPERATION */,
  handler: (accessor, params) => {
    const { filterBy } = params;
    const sheetsFilterPanelService = accessor.get(SheetsFilterPanelService);
    return sheetsFilterPanelService.changeFilterBy(filterBy);
  }
};

// ../packages/sheets-filter-ui/src/controllers/sheets-filter-permission.controller.ts
var SheetsFilterPermissionController = class extends Disposable {
  constructor(_sheetsFilterService, _localeService, _commandService, _sheetPermissionCheckPermission, _injector, _sheetsSelectionService) {
    super();
    this._sheetsFilterService = _sheetsFilterService;
    this._localeService = _localeService;
    this._commandService = _commandService;
    this._sheetPermissionCheckPermission = _sheetPermissionCheckPermission;
    this._injector = _injector;
    this._sheetsSelectionService = _sheetsSelectionService;
    this._commandExecutedListener();
  }
  _commandExecutedListener() {
    this.disposeWithMe(
      this._commandService.beforeCommandExecuted((command) => {
        var _a, _b, _c;
        if (command.id === SmartToggleSheetsFilterCommand.id) {
          const univerInstanceService = this._injector.get(IUniverInstanceService);
          const target = getSheetCommandTarget(univerInstanceService);
          if (!target) return;
          const { unitId, subUnitId, worksheet } = target;
          const filterRange = (_a = this._sheetsFilterService.getFilterModel(unitId, subUnitId)) == null ? void 0 : _a.getRange();
          let permission;
          if (filterRange) {
            permission = this._sheetPermissionCheckPermission.permissionCheckWithRanges({
              rangeTypes: [RangeProtectionPermissionViewPoint],
              worksheetTypes: [WorksheetFilterPermission, WorksheetViewPermission]
            }, [filterRange]);
          } else {
            const range = (_b = this._sheetsSelectionService.getCurrentLastSelection()) == null ? void 0 : _b.range;
            if (range) {
              let newRange = { ...range };
              const isCellRange = range.startColumn === range.endColumn && range.startRow === range.endRow;
              newRange = isCellRange ? expandToContinuousRange(newRange, { left: true, right: true, up: true, down: true }, worksheet) : newRange;
              permission = this._sheetPermissionCheckPermission.permissionCheckWithRanges({
                rangeTypes: [RangeProtectionPermissionViewPoint],
                worksheetTypes: [WorksheetViewPermission, WorksheetFilterPermission]
              }, [newRange], unitId, subUnitId);
            } else {
              permission = this._sheetPermissionCheckPermission.permissionCheckWithoutRange({
                rangeTypes: [RangeProtectionPermissionViewPoint],
                worksheetTypes: [WorksheetViewPermission, WorksheetFilterPermission]
              });
            }
          }
          if (!permission) {
            this._sheetPermissionCheckPermission.blockExecuteWithoutPermission(this._localeService.t("permission.dialog.filterErr"));
          }
        }
        if (command.id === OpenFilterPanelOperation.id) {
          const params = command.params;
          const { unitId, subUnitId } = params;
          const filterRange = (_c = this._sheetsFilterService.getFilterModel(unitId, subUnitId)) == null ? void 0 : _c.getRange();
          const colRange = Tools.deepClone(filterRange);
          if (colRange) {
            colRange.startColumn = params.col;
            colRange.endColumn = params.col;
            const permission = this._sheetPermissionCheckPermission.permissionCheckWithRanges({
              rangeTypes: [RangeProtectionPermissionViewPoint],
              worksheetTypes: [WorksheetFilterPermission, WorksheetViewPermission]
            }, [colRange]);
            if (!permission) {
              this._sheetPermissionCheckPermission.blockExecuteWithoutPermission(this._localeService.t("permission.dialog.filterErr"));
            }
          }
        }
      })
    );
  }
};
SheetsFilterPermissionController = __decorateClass([
  __decorateParam(0, Inject(SheetsFilterService)),
  __decorateParam(1, Inject(LocaleService)),
  __decorateParam(2, ICommandService),
  __decorateParam(3, Inject(SheetPermissionCheckController)),
  __decorateParam(4, Inject(Injector)),
  __decorateParam(5, Inject(SheetsSelectionsService))
], SheetsFilterPermissionController);

// ../packages/sheets-filter-ui/src/views/components/SheetsFilterPanel.tsx
var import_react3 = __toESM(require_react());

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages/sheets-filter-ui/src/views/components/index.module.less
var index_module_default = {
  "sheetsFilterPanel": "univer-sheets-filter-panel",
  "sheetsFilterPanelHeader": "univer-sheets-filter-panel-header",
  "sheetsFilterPanelContent": "univer-sheets-filter-panel-content",
  "sheetsFilterPanelSelectAll": "univer-sheets-filter-panel-select-all",
  "sheetsFilterPanelSelectAllCount": "univer-sheets-filter-panel-select-all-count",
  "sheetsFilterPanelValuesContainer": "univer-sheets-filter-panel-values-container",
  "inputAffixWrapper": "univer-input-affix-wrapper",
  "select": "univer-select",
  "radioGroup": "univer-radio-group",
  "sheetsFilterPanelValuesFind": "univer-sheets-filter-panel-values-find",
  "sheetsFilterPanelValuesList": "univer-sheets-filter-panel-values-list",
  "sheetsFilterPanelValuesListInnerContainer": "univer-sheets-filter-panel-values-list-inner-container",
  "sheetsFilterPanelValuesVirtual": "univer-sheets-filter-panel-values-virtual",
  "sheetsFilterPanelValuesItem": "univer-sheets-filter-panel-values-item",
  "sheetsFilterPanelValuesItemInner": "univer-sheets-filter-panel-values-item-inner",
  "sheetsFilterPanelValuesItemCount": "univer-sheets-filter-panel-values-item-count",
  "sheetsFilterPanelValuesItemExcludeButton": "univer-sheets-filter-panel-values-item-exclude-button",
  "sheetsFilterPanelValuesItemText": "univer-sheets-filter-panel-values-item-text",
  "sheetsFilterPanelConditionsContainer": "univer-sheets-filter-panel-conditions-container",
  "sheetsFilterPanelConditionsContainerInner": "univer-sheets-filter-panel-conditions-container-inner",
  "sheetsFilterPanelConditionsDesc": "univer-sheets-filter-panel-conditions-desc",
  "sheetsFilterPanelFooter": "univer-sheets-filter-panel-footer",
  "sheetsFilterPanelFooterPrimaryButtons": "univer-sheets-filter-panel-footer-primary-buttons",
  "button": "univer-button",
  "input": "univer-input",
  "formDualColumnLayout": "univer-form-dual-column-layout",
  "sheetsFilterTreeNode": "univer-sheets-filter-tree-node",
  "sheetsFilterTreeNodeFilterOnly": "univer-sheets-filter-tree-node-filter-only",
  "sheetsFilterTreeNodeAttach": "univer-sheets-filter-tree-node-attach"
};

// ../packages/sheets-filter-ui/src/views/components/SheetsFilterByConditionsPanel.tsx
var import_react = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
function FilterByCondition(props) {
  var _a, _b;
  const { model } = props;
  const localeService = useDependency(LocaleService);
  const condition = useObservable(model.conditionItem$, void 0);
  const formParams = useObservable(model.filterConditionFormParams$, void 0);
  const radioValue = (formParams == null ? void 0 : formParams.and) ? "AND" : "OR";
  const onRadioChange = (0, import_react.useCallback)((key) => {
    model.onConditionFormChange({ and: key === "AND" });
  }, [model]);
  const primaryOptions = usePrimaryOptions(localeService);
  const onPrimaryConditionChange = (0, import_react.useCallback)((value) => {
    model.onPrimaryConditionChange(value);
  }, [model]);
  const secondaryOptions = useSecondaryOptions(localeService);
  const onFormParamsChange = (0, import_react.useCallback)((diffParams) => {
    model.onConditionFormChange(diffParams);
  }, [model]);
  const placeholder = localeService.t("sheets-filter.panel.input-values-placeholder");
  function renderSecondaryCondition(operator, val, name) {
    const shouldRenderInput = FilterConditionItems.getItemByOperator(operator).numOfParameters === 1;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      name === "operator2" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioGroup, { value: radioValue, onChange: onRadioChange, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { value: "AND", children: localeService.t("sheets-filter.panel.and") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { value: "OR", children: localeService.t("sheets-filter.panel.or") })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { value: operator, options: secondaryOptions, onChange: (operator2) => onFormParamsChange({ [name]: operator2 }) }),
      shouldRenderInput && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { value: val, placeholder, onChange: (value) => onFormParamsChange({ [name === "operator1" ? "val1" : "val2"]: value }) }) })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: index_module_default.sheetsFilterPanelConditionsContainer, children: condition && formParams && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { value: condition.operator, options: primaryOptions, onChange: onPrimaryConditionChange }),
    FilterConditionItems.getItemByOperator(condition.operator).numOfParameters !== 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: index_module_default.sheetsFilterPanelConditionsContainerInner, children: [
      condition.numOfParameters >= 1 && renderSecondaryCondition(formParams.operator1, (_a = formParams.val1) != null ? _a : "", "operator1"),
      condition.numOfParameters >= 2 && renderSecondaryCondition(formParams.operator2, (_b = formParams.val2) != null ? _b : "", "operator2"),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: index_module_default.sheetsFilterPanelConditionsDesc, children: [
        localeService.t("sheets-filter.panel.?"),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
        localeService.t("sheets-filter.panel.*")
      ] })
    ] }) : null
  ] }) });
}
function usePrimaryOptions(localeService) {
  const locale = localeService.getCurrentLocale();
  return (0, import_react.useMemo)(
    () => [
      {
        options: [
          { label: localeService.t(FilterConditionItems.NONE.label), value: FilterConditionItems.NONE.operator }
        ]
      },
      {
        options: [
          { label: localeService.t(FilterConditionItems.EMPTY.label), value: FilterConditionItems.EMPTY.operator },
          { label: localeService.t(FilterConditionItems.NOT_EMPTY.label), value: FilterConditionItems.NOT_EMPTY.operator }
        ]
      },
      {
        options: [
          { label: localeService.t(FilterConditionItems.TEXT_CONTAINS.label), value: FilterConditionItems.TEXT_CONTAINS.operator },
          { label: localeService.t(FilterConditionItems.DOES_NOT_CONTAIN.label), value: FilterConditionItems.DOES_NOT_CONTAIN.operator },
          { label: localeService.t(FilterConditionItems.STARTS_WITH.label), value: FilterConditionItems.STARTS_WITH.operator },
          { label: localeService.t(FilterConditionItems.ENDS_WITH.label), value: FilterConditionItems.ENDS_WITH.operator },
          { label: localeService.t(FilterConditionItems.EQUALS.label), value: FilterConditionItems.EQUALS.operator }
        ]
      },
      {
        options: [
          { label: localeService.t(FilterConditionItems.GREATER_THAN.label), value: FilterConditionItems.GREATER_THAN.operator },
          { label: localeService.t(FilterConditionItems.GREATER_THAN_OR_EQUAL.label), value: FilterConditionItems.GREATER_THAN_OR_EQUAL.operator },
          { label: localeService.t(FilterConditionItems.LESS_THAN.label), value: FilterConditionItems.LESS_THAN.operator },
          { label: localeService.t(FilterConditionItems.LESS_THAN_OR_EQUAL.label), value: FilterConditionItems.LESS_THAN_OR_EQUAL.operator },
          { label: localeService.t(FilterConditionItems.EQUAL.label), value: FilterConditionItems.EQUAL.operator },
          { label: localeService.t(FilterConditionItems.NOT_EQUAL.label), value: FilterConditionItems.NOT_EQUAL.operator },
          { label: localeService.t(FilterConditionItems.BETWEEN.label), value: FilterConditionItems.BETWEEN.operator },
          { label: localeService.t(FilterConditionItems.NOT_BETWEEN.label), value: FilterConditionItems.NOT_BETWEEN.operator }
        ]
      },
      {
        options: [
          { label: localeService.t(FilterConditionItems.CUSTOM.label), value: FilterConditionItems.CUSTOM.operator }
        ]
      }
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [locale, localeService]
  );
}
function useSecondaryOptions(localeService) {
  const locale = localeService.getCurrentLocale();
  return (0, import_react.useMemo)(
    () => FilterConditionItems.ALL_CONDITIONS.filter((c) => c.numOfParameters !== 2).map((c) => ({ label: localeService.t(c.label), value: c.operator })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [locale, localeService]
  );
}

// ../packages/sheets-filter-ui/src/views/components/SheetsFilterByValuesPanel.tsx
var import_react2 = __toESM(require_react());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
function FilterByValue(props) {
  const { model } = props;
  const localeService = useDependency(LocaleService);
  const searchText = useObservable(model.searchString$, "", true);
  const items = useObservable(model.filterItems$, void 0, true);
  const filterOnly = localeService.t("sheets-filter.panel.filter-only");
  const stat = statisticFilterByValueItems(items);
  const allChecked = stat.checked > 0 && stat.unchecked === 0;
  const indeterminate = stat.checked > 0 && stat.unchecked > 0;
  const treeMap = model.treeMapCache;
  const onCheckAllToggled = (0, import_react2.useCallback)(() => {
    model.onCheckAllToggled(!allChecked);
  }, [model, allChecked]);
  const onSearchValueChange = (0, import_react2.useCallback)((str) => {
    model.setSearchString(str);
  }, [model]);
  function extractCheckedKeys(items2) {
    let checkedKeys = [];
    items2.forEach((item) => {
      if (item.checked) {
        checkedKeys.push(item.key);
      }
      if (item.children) {
        checkedKeys = checkedKeys.concat(extractCheckedKeys(item.children));
      }
    });
    return checkedKeys;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: index_module_default.sheetsFilterPanelValuesContainer, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Input, { autoFocus: true, value: searchText, placeholder: localeService.t("sheets-filter.panel.search-placeholder"), onChange: onSearchValueChange }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: index_module_default.sheetsFilterPanelValuesList, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: index_module_default.sheetsFilterPanelValuesItem, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: index_module_default.sheetsFilterPanelValuesItemInner, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          Checkbox,
          {
            indeterminate,
            disabled: items.length === 0,
            checked: allChecked,
            onChange: onCheckAllToggled
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: index_module_default.sheetsFilterPanelValuesItemText, children: `${localeService.t("sheets-filter.panel.select-all")}` }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: index_module_default.sheetsFilterPanelValuesItemCount, children: `(${stat.checked}/${stat.checked + stat.unchecked})` })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: index_module_default.sheetsFilterPanelValuesVirtual, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        Tree,
        {
          data: items,
          defaultExpandAll: false,
          valueGroup: extractCheckedKeys(items),
          height: 180,
          onChange: (node) => {
            model.onFilterCheckToggled(node);
          },
          defaultCache: treeMap,
          itemHeight: 28,
          treeNodeClassName: index_module_default.sheetsFilterTreeNode,
          attachRender: (item) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: index_module_default.sheetsFilterTreeNodeAttach, children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: index_module_default.sheetsFilterPanelValuesItemCount, children: `(${item.count})` }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              Button,
              {
                className: index_module_default.sheetsFilterTreeNodeFilterOnly,
                size: "small",
                type: "link",
                onClick: () => {
                  const filterValues = [];
                  if (item.children) {
                    item.children.forEach((child) => {
                      if (child.children) {
                        child.children.forEach((subChild) => {
                          filterValues.push(subChild.key);
                        });
                      } else {
                        filterValues.push(child.key);
                      }
                    });
                  } else {
                    filterValues.push(item.key);
                  }
                  model.onFilterOnly(filterValues);
                },
                children: filterOnly
              }
            )
          ] })
        }
      ) })
    ] })
  ] });
}

// ../packages/sheets-filter-ui/src/views/components/SheetsFilterPanel.tsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
function FilterPanel() {
  var _a;
  const sheetsFilterPanelService = useDependency(SheetsFilterPanelService);
  const localeService = useDependency(LocaleService);
  const commandService = useDependency(ICommandService);
  const filterBy = useObservable(sheetsFilterPanelService.filterBy$, void 0, true);
  const filterByModel = useObservable(sheetsFilterPanelService.filterByModel$, void 0, false);
  const canApply = useObservable(() => (filterByModel == null ? void 0 : filterByModel.canApply$) || of(false), void 0, false, [filterByModel]);
  const items = useFilterByOptions(localeService);
  const clearFilterDisabled = !useObservable(sheetsFilterPanelService.hasCriteria$);
  const onFilterByTypeChange = (0, import_react3.useCallback)((value) => {
    commandService.executeCommand(ChangeFilterByOperation.id, { filterBy: value });
  }, [commandService]);
  const onClearCriteria = (0, import_react3.useCallback)(async () => {
    await (filterByModel == null ? void 0 : filterByModel.clear());
    commandService.executeCommand(CloseFilterPanelOperation.id);
  }, [filterByModel, commandService]);
  const onCancel = (0, import_react3.useCallback)(() => {
    commandService.executeCommand(CloseFilterPanelOperation.id);
  }, [commandService]);
  const onApply = (0, import_react3.useCallback)(async () => {
    await (filterByModel == null ? void 0 : filterByModel.apply());
    commandService.executeCommand(CloseFilterPanelOperation.id);
  }, [filterByModel, commandService]);
  const filterService = useDependency(SheetsFilterService);
  const range = (_a = filterService.activeFilterModel) == null ? void 0 : _a.getRange();
  const colIndex = sheetsFilterPanelService.col;
  const FilterPanelEmbedPointPart = useComponentsOfPart("filter-panel-embed-point" /* FILTER_PANEL_EMBED_POINT */);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: index_module_default.sheetsFilterPanel, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      ComponentContainer,
      {
        components: FilterPanelEmbedPointPart,
        sharedProps: { range, colIndex, onClose: onCancel }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: index_module_default.sheetsFilterPanelHeader, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      Segmented,
      {
        value: filterBy,
        items,
        onChange: (value) => onFilterByTypeChange(value)
      }
    ) }),
    filterByModel ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: index_module_default.sheetsFilterPanelContent, children: filterBy === 0 /* VALUES */ ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(FilterByValue, { model: filterByModel }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(FilterByCondition, { model: filterByModel }) }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { flex: 1 } }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: index_module_default.sheetsFilterPanelFooter, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Button, { type: "link", onClick: onClearCriteria, disabled: clearFilterDisabled, children: localeService.t("sheets-filter.panel.clear-filter") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: index_module_default.sheetsFilterPanelFooterPrimaryButtons, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Button, { type: "default", onClick: onCancel, children: localeService.t("sheets-filter.panel.cancel") }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Button, { disabled: !canApply, type: "primary", onClick: onApply, children: localeService.t("sheets-filter.panel.confirm") })
      ] })
    ] })
  ] });
}
function useFilterByOptions(localeService) {
  const locale = localeService.getCurrentLocale();
  return (0, import_react3.useMemo)(() => [
    { label: localeService.t("sheets-filter.panel.by-values"), value: 0 /* VALUES */ },
    { label: localeService.t("sheets-filter.panel.by-conditions"), value: 1 /* CONDITIONS */ }
  ], [locale, localeService]);
}

// ../packages/sheets-filter-ui/src/controllers/sheets-filter.menu.ts
function SmartToggleFilterMenuItemFactory(accessor) {
  const sheetsFilterService = accessor.get(SheetsFilterService);
  return {
    id: SmartToggleSheetsFilterCommand.id,
    type: 2 /* BUTTON_SELECTOR */,
    icon: "FilterSingle",
    tooltip: "sheets-filter.toolbar.smart-toggle-filter-tooltip",
    hidden$: getMenuHiddenObservable(accessor, O.UNIVER_SHEET),
    activated$: sheetsFilterService.activeFilterModel$.pipe(map((model) => !!model)),
    disabled$: getObservableWithExclusiveRange$(accessor, getCurrentRangeDisable$(accessor, { worksheetTypes: [WorksheetFilterPermission, WorksheetViewPermission], rangeTypes: [RangeProtectionPermissionViewPoint] }))
  };
}
function ClearFilterCriteriaMenuItemFactory(accessor) {
  const sheetsFilterService = accessor.get(SheetsFilterService);
  return {
    id: ClearSheetsFilterCriteriaCommand.id,
    type: 0 /* BUTTON */,
    title: "sheets-filter.toolbar.clear-filter-criteria",
    hidden$: getMenuHiddenObservable(accessor, O.UNIVER_SHEET),
    disabled$: sheetsFilterService.activeFilterModel$.pipe(switchMap((model) => {
      var _a;
      return (_a = model == null ? void 0 : model.hasCriteria$.pipe(map((m) => !m))) != null ? _a : of(true);
    }))
  };
}
function ReCalcFilterMenuItemFactory(accessor) {
  const sheetsFilterService = accessor.get(SheetsFilterService);
  return {
    id: ReCalcSheetsFilterCommand.id,
    type: 0 /* BUTTON */,
    title: "sheets-filter.toolbar.re-calc-filter-conditions",
    hidden$: getMenuHiddenObservable(accessor, O.UNIVER_SHEET),
    disabled$: sheetsFilterService.activeFilterModel$.pipe(switchMap((model) => {
      var _a;
      return (_a = model == null ? void 0 : model.hasCriteria$.pipe(map((m) => !m))) != null ? _a : of(true);
    }))
  };
}

// ../packages/sheets-filter-ui/src/controllers/menu.schema.ts
var menuSchema = {
  ["ribbon.start.insert" /* FORMULAS_INSERT */]: {
    [SmartToggleSheetsFilterCommand.id]: {
      order: 10,
      menuItemFactory: SmartToggleFilterMenuItemFactory,
      [ClearSheetsFilterCriteriaCommand.id]: {
        order: 0,
        menuItemFactory: ClearFilterCriteriaMenuItemFactory
      },
      [ReCalcSheetsFilterCommand.id]: {
        order: 1,
        menuItemFactory: ReCalcFilterMenuItemFactory
      }
    }
  }
};

// ../packages/sheets-filter-ui/src/views/widgets/drawings.ts
var BUTTON_VIEWPORT = 16;
var FILTER_BUTTON_EMPTY = new Path2D("M3.30363 3C2.79117 3 2.51457 3.60097 2.84788 3.99024L6.8 8.60593V12.5662C6.8 12.7184 6.8864 12.8575 7.02289 12.9249L8.76717 13.7863C8.96655 13.8847 9.2 13.7396 9.2 13.5173V8.60593L13.1521 3.99024C13.4854 3.60097 13.2088 3 12.6964 3H3.30363Z");
var FilterButton = class {
  static drawNoCriteria(ctx, size, fgColor, bgColor) {
    ctx.save();
    Rect.drawWith(ctx, {
      radius: 2,
      width: BUTTON_VIEWPORT,
      height: BUTTON_VIEWPORT,
      fill: bgColor
    });
    ctx.lineCap = "square";
    ctx.strokeStyle = fgColor;
    ctx.scale(size / BUTTON_VIEWPORT, size / BUTTON_VIEWPORT);
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.lineCap = "round";
    ctx.moveTo(3, 4);
    ctx.lineTo(13, 4);
    ctx.moveTo(4.5, 8);
    ctx.lineTo(11.5, 8);
    ctx.moveTo(6, 12);
    ctx.lineTo(10, 12);
    ctx.stroke();
    ctx.restore();
  }
  static drawHasCriteria(ctx, size, fgColor, bgColor) {
    ctx.save();
    Rect.drawWith(ctx, {
      radius: 2,
      width: BUTTON_VIEWPORT,
      height: BUTTON_VIEWPORT,
      fill: bgColor
    });
    ctx.scale(size / BUTTON_VIEWPORT, size / BUTTON_VIEWPORT);
    ctx.fillStyle = fgColor;
    ctx.fill(FILTER_BUTTON_EMPTY);
    ctx.restore();
  }
};

// ../packages/sheets-filter-ui/src/views/widgets/filter-button.shape.ts
var FILTER_ICON_SIZE = 16;
var FILTER_ICON_PADDING = 1;
var SheetsFilterButtonShape = class extends Shape {
  constructor(key, props, _contextService, _commandService, _themeService) {
    super(key, props);
    this._contextService = _contextService;
    this._commandService = _commandService;
    this._themeService = _themeService;
    __publicField(this, "_cellWidth", 0);
    __publicField(this, "_cellHeight", 0);
    __publicField(this, "_filterParams");
    __publicField(this, "_hovered", false);
    this.setShapeProps(props);
    this.onPointerDown$.subscribeEvent((evt) => this.onPointerDown(evt));
    this.onPointerEnter$.subscribeEvent(() => this.onPointerEnter());
    this.onPointerLeave$.subscribeEvent(() => this.onPointerLeave());
  }
  setShapeProps(props) {
    if (typeof props.cellHeight !== "undefined") {
      this._cellHeight = props.cellHeight;
    }
    if (typeof props.cellWidth !== "undefined") {
      this._cellWidth = props.cellWidth;
    }
    if (typeof props.filterParams !== "undefined") {
      this._filterParams = props.filterParams;
    }
    this.transformByState({
      width: props.width,
      height: props.height
    });
  }
  _draw(ctx) {
    const cellHeight = this._cellHeight;
    const cellWidth = this._cellWidth;
    const left = FILTER_ICON_SIZE - cellWidth;
    const top = FILTER_ICON_SIZE - cellHeight;
    ctx.save();
    const cellRegion = new Path2D();
    cellRegion.rect(left, top, cellWidth, cellHeight);
    ctx.clip(cellRegion);
    const { hasCriteria } = this._filterParams;
    const fgColor = this._themeService.getCurrentTheme().primaryColor;
    const bgColor = this._hovered ? this._themeService.getCurrentTheme().grey50 : "rgba(255, 255, 255, 1.0)";
    if (hasCriteria) {
      FilterButton.drawHasCriteria(ctx, FILTER_ICON_SIZE, fgColor, bgColor);
    } else {
      FilterButton.drawNoCriteria(ctx, FILTER_ICON_SIZE, fgColor, bgColor);
    }
    ctx.restore();
  }
  onPointerDown(evt) {
    if (evt.button === 2) {
      return;
    }
    const { col, unitId, subUnitId } = this._filterParams;
    const opened = this._contextService.getContextValue(FILTER_PANEL_OPENED_KEY);
    if (opened || !this._commandService.hasCommand(OpenFilterPanelOperation.id)) {
      return;
    }
    setTimeout(() => {
      this._commandService.executeCommand(OpenFilterPanelOperation.id, {
        unitId,
        subUnitId,
        col
      });
    }, 200);
  }
  onPointerEnter() {
    this._hovered = true;
    this.makeDirty(true);
  }
  onPointerLeave() {
    this._hovered = false;
    this.makeDirty(true);
  }
};
SheetsFilterButtonShape = __decorateClass([
  __decorateParam(2, IContextService),
  __decorateParam(3, ICommandService),
  __decorateParam(4, Inject(ThemeService))
], SheetsFilterButtonShape);

// ../packages/sheets-filter-ui/src/views/render-modules/sheets-filter.render-controller.ts
var DEFAULT_Z_INDEX = 1e3;
var SHEETS_FILTER_BUTTON_Z_INDEX = 5e3;
var SheetsFilterRenderController = class extends RxDisposable {
  constructor(_context, _injector, _sheetSkeletonManagerService, _sheetsFilterService, _themeService, _sheetInterceptorService, _commandService, _selectionRenderService) {
    super();
    this._context = _context;
    this._injector = _injector;
    this._sheetSkeletonManagerService = _sheetSkeletonManagerService;
    this._sheetsFilterService = _sheetsFilterService;
    this._themeService = _themeService;
    this._sheetInterceptorService = _sheetInterceptorService;
    this._commandService = _commandService;
    this._selectionRenderService = _selectionRenderService;
    __publicField(this, "_filterRangeShape", null);
    __publicField(this, "_buttonRenderDisposable", null);
    __publicField(this, "_filterButtonShapes", []);
    this._initRenderer();
  }
  dispose() {
    super.dispose();
    this._disposeRendering();
  }
  _initRenderer() {
    this._sheetSkeletonManagerService.currentSkeleton$.pipe(
      switchMap((skeletonParams) => {
        var _a, _b;
        if (!skeletonParams) return of(null);
        const { unit: workbook, unitId } = this._context;
        const worksheetId = ((_a = workbook.getActiveSheet()) == null ? void 0 : _a.getSheetId()) || "";
        const filterModel = (_b = this._sheetsFilterService.getFilterModel(unitId, worksheetId)) != null ? _b : void 0;
        const getParams = () => ({
          unitId,
          worksheetId,
          filterModel,
          range: filterModel == null ? void 0 : filterModel.getRange(),
          skeleton: skeletonParams.skeleton
        });
        return fromCallback(this._commandService.onCommandExecuted.bind(this._commandService)).pipe(
          filter(
            ([command]) => {
              var _a2;
              return command.type === 2 /* MUTATION */ && ((_a2 = command.params) == null ? void 0 : _a2.unitId) === workbook.getUnitId() && (FILTER_MUTATIONS.has(command.id) || command.id === SetRangeValuesMutation.id);
            }
          ),
          throttleTime(20, void 0, { leading: false, trailing: true }),
          map(getParams),
          startWith(getParams())
          // must trigger once
        );
      }),
      takeUntil(this.dispose$)
    ).subscribe((renderParams) => {
      this._disposeRendering();
      if (!renderParams || !renderParams.range) {
        return;
      }
      this._renderRange(renderParams.range, renderParams.skeleton);
      this._renderButtons(renderParams);
    });
  }
  _renderRange(range, skeleton) {
    const { scene } = this._context;
    const { rowHeaderWidth, columnHeaderHeight } = skeleton;
    const filterRangeShape = this._filterRangeShape = new SelectionControl(
      scene,
      DEFAULT_Z_INDEX,
      this._themeService,
      {
        rowHeaderWidth,
        columnHeaderHeight,
        enableAutoFill: false,
        highlightHeader: false
      }
    );
    const selectionWithStyle = {
      range,
      primary: null,
      style: { fill: "rgba(0, 0, 0, 0.0)" }
    };
    const selectionWithCoord = attachSelectionWithCoord(selectionWithStyle, skeleton);
    filterRangeShape.updateRangeBySelectionWithCoord(selectionWithCoord);
    filterRangeShape.setEvent(false);
    scene.makeDirty(true);
  }
  _renderButtons(params) {
    const { range, filterModel, unitId, skeleton, worksheetId } = params;
    const { scene } = this._context;
    this._interceptCellContent(unitId, worksheetId, params.range);
    const { startColumn, endColumn, startRow } = range;
    for (let col = startColumn; col <= endColumn; col++) {
      const key = `sheets-filter-button-${col}`;
      const startPosition = getCoordByCell(startRow, col, scene, skeleton);
      const { startX, startY, endX, endY } = startPosition;
      const cellWidth = endX - startX;
      const cellHeight = endY - startY;
      if (cellHeight <= FILTER_ICON_PADDING || cellWidth <= FILTER_ICON_PADDING) {
        continue;
      }
      const hasCriteria = !!filterModel.getFilterColumn(col);
      const iconStartX = endX - FILTER_ICON_SIZE - FILTER_ICON_PADDING;
      const iconStartY = endY - FILTER_ICON_SIZE - FILTER_ICON_PADDING;
      const props = {
        left: iconStartX,
        top: iconStartY,
        height: FILTER_ICON_SIZE,
        width: FILTER_ICON_SIZE,
        zIndex: SHEETS_FILTER_BUTTON_Z_INDEX,
        cellHeight,
        cellWidth,
        filterParams: { unitId, subUnitId: worksheetId, col, hasCriteria }
      };
      const buttonShape = this._injector.createInstance(SheetsFilterButtonShape, key, props);
      this._filterButtonShapes.push(buttonShape);
    }
    scene.addObjects(this._filterButtonShapes);
    scene.makeDirty();
  }
  _interceptCellContent(workbookId, worksheetId, range) {
    const { startRow, startColumn, endColumn } = range;
    this._buttonRenderDisposable = this._sheetInterceptorService.intercept(INTERCEPTOR_POINT.CELL_CONTENT, {
      effect: 1 /* Style */,
      handler: (cell, pos, next) => {
        const { row, col, unitId, subUnitId } = pos;
        if (unitId !== workbookId || subUnitId !== worksheetId || row !== startRow || col < startColumn || col > endColumn) {
          return next(cell);
        }
        return next({
          ...cell,
          fontRenderExtension: {
            ...cell == null ? void 0 : cell.fontRenderExtension,
            rightOffset: FILTER_ICON_SIZE
          }
        });
      },
      priority: 10
    });
  }
  _disposeRendering() {
    var _a, _b;
    (_a = this._filterRangeShape) == null ? void 0 : _a.dispose();
    this._filterButtonShapes.forEach((s) => s.dispose());
    (_b = this._buttonRenderDisposable) == null ? void 0 : _b.dispose();
    this._filterRangeShape = null;
    this._buttonRenderDisposable = null;
    this._filterButtonShapes = [];
  }
};
SheetsFilterRenderController = __decorateClass([
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, Inject(SheetSkeletonManagerService)),
  __decorateParam(3, Inject(SheetsFilterService)),
  __decorateParam(4, Inject(ThemeService)),
  __decorateParam(5, Inject(SheetInterceptorService)),
  __decorateParam(6, ICommandService),
  __decorateParam(7, ISheetSelectionRenderService)
], SheetsFilterRenderController);

// ../packages/sheets-filter-ui/src/controllers/sheets-filter-ui-mobile.controller.ts
var SheetsFilterUIMobileController = class extends RxDisposable {
  constructor(_renderManagerService, _sheetsRenderService) {
    super();
    this._renderManagerService = _renderManagerService;
    this._sheetsRenderService = _sheetsRenderService;
    [
      SetSheetsFilterRangeMutation,
      SetSheetsFilterCriteriaMutation,
      RemoveSheetsFilterMutation,
      ReCalcSheetsFilterMutation
    ].forEach((m) => this.disposeWithMe(this._sheetsRenderService.registerSkeletonChangingMutations(m.id)));
    this.disposeWithMe(this._renderManagerService.registerRenderModule(
      O.UNIVER_SHEET,
      [SheetsFilterRenderController]
    ));
  }
};
SheetsFilterUIMobileController = __decorateClass([
  __decorateParam(0, IRenderManagerService),
  __decorateParam(1, Inject(SheetsRenderService))
], SheetsFilterUIMobileController);

// ../packages/sheets-filter-ui/src/controllers/sheets-filter.shortcut.ts
var SmartToggleFilterShortcut = {
  id: SmartToggleSheetsFilterCommand.id,
  binding: 76 /* L */ | 4096 /* CTRL_COMMAND */ | 1024 /* SHIFT */,
  description: "sheets-filter.shortcut.smart-toggle-filter",
  preconditions: whenSheetEditorFocused,
  group: "4_sheet-edit"
};

// ../packages/sheets-filter-ui/src/controllers/sheets-filter-ui-desktop.controller.ts
var FILTER_PANEL_POPUP_KEY = "FILTER_PANEL_POPUP";
var SheetsFilterUIDesktopController = class extends SheetsFilterUIMobileController {
  constructor(_injector, _componentManager, _sheetsFilterPanelService, _sheetCanvasPopupService, _sheetsFilterService, _localeService, _shortcutService, _commandService, _menuManagerService, _contextService, _messageService, sheetsRenderService, renderManagerService) {
    super(renderManagerService, sheetsRenderService);
    this._injector = _injector;
    this._componentManager = _componentManager;
    this._sheetsFilterPanelService = _sheetsFilterPanelService;
    this._sheetCanvasPopupService = _sheetCanvasPopupService;
    this._sheetsFilterService = _sheetsFilterService;
    this._localeService = _localeService;
    this._shortcutService = _shortcutService;
    this._commandService = _commandService;
    this._menuManagerService = _menuManagerService;
    this._contextService = _contextService;
    this._messageService = _messageService;
    __publicField(this, "_popupDisposable");
    this._initCommands();
    this._initShortcuts();
    this._initMenuItems();
    this._initUI();
  }
  dispose() {
    super.dispose();
    this._closeFilterPopup();
  }
  _initShortcuts() {
    [
      SmartToggleFilterShortcut
    ].forEach((shortcut) => {
      this.disposeWithMe(this._shortcutService.registerShortcut(shortcut));
    });
  }
  _initCommands() {
    [
      SmartToggleSheetsFilterCommand,
      RemoveSheetFilterCommand,
      SetSheetFilterRangeCommand,
      SetSheetsFilterCriteriaCommand,
      ClearSheetsFilterCriteriaCommand,
      ReCalcSheetsFilterCommand,
      ChangeFilterByOperation,
      OpenFilterPanelOperation,
      CloseFilterPanelOperation
    ].forEach((c) => {
      this.disposeWithMe(this._commandService.registerCommand(c));
    });
  }
  _initMenuItems() {
    this._menuManagerService.mergeMenu(menuSchema);
  }
  _initUI() {
    this.disposeWithMe(this._componentManager.register(FILTER_PANEL_POPUP_KEY, FilterPanel));
    this.disposeWithMe(this._componentManager.register("FilterSingle", filter_single_default));
    this.disposeWithMe(this._contextService.subscribeContextValue$(FILTER_PANEL_OPENED_KEY).pipe(distinctUntilChanged()).subscribe((open) => {
      if (open) {
        this._openFilterPopup();
      } else {
        this._closeFilterPopup();
      }
    }));
    this.disposeWithMe(this._sheetsFilterService.errorMsg$.subscribe((content) => {
      if (content) {
        this._messageService.show({
          type: "error" /* Error */,
          content: this._localeService.t(content)
        });
      }
    }));
  }
  _openFilterPopup() {
    const currentFilterModel = this._sheetsFilterPanelService.filterModel;
    if (!currentFilterModel) {
      throw new Error("[SheetsFilterUIController]: no filter model when opening filter popup!");
    }
    const range = currentFilterModel.getRange();
    const col = this._sheetsFilterPanelService.col;
    const { startRow } = range;
    this._popupDisposable = this._sheetCanvasPopupService.attachPopupToCell(startRow, col, {
      componentKey: FILTER_PANEL_POPUP_KEY,
      direction: "horizontal",
      onClickOutside: () => this._commandService.syncExecuteCommand(CloseFilterPanelOperation.id),
      offset: [5, 0]
    });
  }
  _closeFilterPopup() {
    var _a;
    (_a = this._popupDisposable) == null ? void 0 : _a.dispose();
    this._popupDisposable = null;
  }
};
SheetsFilterUIDesktopController = __decorateClass([
  __decorateParam(0, Inject(Injector)),
  __decorateParam(1, Inject(ComponentManager)),
  __decorateParam(2, Inject(SheetsFilterPanelService)),
  __decorateParam(3, Inject(SheetCanvasPopManagerService)),
  __decorateParam(4, Inject(SheetsFilterService)),
  __decorateParam(5, Inject(LocaleService)),
  __decorateParam(6, IShortcutService),
  __decorateParam(7, ICommandService),
  __decorateParam(8, IMenuManagerService),
  __decorateParam(9, IContextService),
  __decorateParam(10, IMessageService),
  __decorateParam(11, Inject(SheetsRenderService)),
  __decorateParam(12, IRenderManagerService)
], SheetsFilterUIDesktopController);

// ../packages/sheets-filter-ui/src/filter-ui-desktop.plugin.ts
var NAME = "SHEET_FILTER_UI_PLUGIN";
var UniverSheetsFilterUIPlugin = class extends Plugin {
  constructor(_config = defaultPluginConfig, _injector, _configService, _rpcChannelService) {
    super();
    this._config = _config;
    this._injector = _injector;
    this._configService = _configService;
    this._rpcChannelService = _rpcChannelService;
    const { menu, ...rest } = merge_default(
      {},
      defaultPluginConfig,
      this._config
    );
    if (menu) {
      this._configService.setConfig("menu", menu, { merge: true });
    }
    this._configService.setConfig(SHEETS_FILTER_UI_PLUGIN_CONFIG_KEY, rest);
  }
  onStarting() {
    [
      [SheetsFilterPanelService],
      [SheetsFilterPermissionController],
      [SheetsFilterUIDesktopController]
    ].forEach((d) => this._injector.add(d));
    if (this._config.useRemoteFilterValuesGenerator && this._rpcChannelService) {
      this._injector.add([ISheetsGenerateFilterValuesService, {
        useFactory: () => toModule(
          this._rpcChannelService.requestChannel(SHEETS_GENERATE_FILTER_VALUES_SERVICE_NAME)
        )
      }]);
    }
  }
  onReady() {
    this._injector.get(SheetsFilterPermissionController);
  }
  onRendered() {
    this._injector.get(SheetsFilterUIDesktopController);
  }
};
__publicField(UniverSheetsFilterUIPlugin, "type", O.UNIVER_SHEET);
__publicField(UniverSheetsFilterUIPlugin, "pluginName", NAME);
UniverSheetsFilterUIPlugin = __decorateClass([
  DependentOn(UniverSheetsFilterPlugin),
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IConfigService),
  __decorateParam(3, Optional(IRPCChannelService))
], UniverSheetsFilterUIPlugin);

// ../packages/sheets-filter-ui/src/filter-ui-mobile.plugin.ts
var NAME2 = "SHEET_FILTER_UI_PLUGIN";
var UniverSheetsFilterMobileUIPlugin = class extends Plugin {
  constructor(_config = defaultPluginConfig, _injector, _configService) {
    super();
    this._config = _config;
    this._injector = _injector;
    this._configService = _configService;
    const { menu, ...rest } = merge_default(
      {},
      defaultPluginConfig,
      this._config
    );
    if (menu) {
      this._configService.setConfig("menu", menu, { merge: true });
    }
    this._configService.setConfig(SHEETS_FILTER_UI_PLUGIN_CONFIG_KEY, rest);
  }
  onStarting() {
    [
      [SheetsFilterPermissionController],
      [SheetsFilterUIMobileController]
    ].forEach((d) => this._injector.add(d));
  }
  onReady() {
    this._injector.get(SheetsFilterPermissionController);
  }
  onRendered() {
    this._injector.get(SheetsFilterUIMobileController);
  }
};
__publicField(UniverSheetsFilterMobileUIPlugin, "type", O.UNIVER_SHEET);
__publicField(UniverSheetsFilterMobileUIPlugin, "pluginName", NAME2);
UniverSheetsFilterMobileUIPlugin = __decorateClass([
  DependentOn(UniverSheetsFilterPlugin),
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IConfigService)
], UniverSheetsFilterMobileUIPlugin);

// ../packages/sheets-filter-ui/src/worker/plugin.ts
var UniverSheetsFilterUIWorkerPlugin = class extends Plugin {
  constructor(_config, _injector, _rpcChannelService) {
    super();
    this._config = _config;
    this._injector = _injector;
    this._rpcChannelService = _rpcChannelService;
  }
  onStarting() {
    [
      [ISheetsGenerateFilterValuesService, { useClass: SheetsGenerateFilterValuesService }]
    ].forEach((d) => this._injector.add(d));
  }
  onReady() {
    this._rpcChannelService.registerChannel(
      SHEETS_GENERATE_FILTER_VALUES_SERVICE_NAME,
      fromModule(this._injector.get(ISheetsGenerateFilterValuesService))
    );
  }
};
__publicField(UniverSheetsFilterUIWorkerPlugin, "type", O.UNIVER_SHEET);
__publicField(UniverSheetsFilterUIWorkerPlugin, "pluginName", "SHEET_FILTER_UI_WORKER_PLUGIN");
UniverSheetsFilterUIWorkerPlugin = __decorateClass([
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IRPCChannelService)
], UniverSheetsFilterUIWorkerPlugin);

export {
  UniverSheetsFilterUIPlugin,
  UniverSheetsFilterMobileUIPlugin
};
//# sourceMappingURL=chunk-LVPBHJE6.js.map
