import {
  UniverSheetsFindReplacePlugin,
  UniverSheetsSortUIPlugin
} from "../chunk-FQXQOQ76.js";
import {
  UniverDocUniFormulaPlugin
} from "../chunk-HLX4WHWU.js";
import {
  ActivateSlidePageOperation,
  AppendSlideOperation,
  SHAPE_MENU_ID,
  SLIDES_IMAGE_MENU_ID,
  SetSlidePageThumbOperation,
  SlideAddTextCommand,
  SlideEditorContainer,
  SlidesUIController,
  UniverSlidesPlugin,
  UniverSlidesUIPlugin,
  menuSchema as menuSchema4
} from "../chunk-US47PHMK.js";
import {
  UniverSheetsConditionalFormattingUIPlugin
} from "../chunk-KZFTO66A.js";
import {
  UniverSheetsThreadCommentPlugin
} from "../chunk-5E7O4A6V.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "../chunk-XDFV2ZEI.js";
import "../chunk-WXS7WCGQ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "../chunk-6EX6BLVI.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-ICTNVF5N.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-YZCWNVH6.js";
import {
  UniverThreadCommentUIPlugin
} from "../chunk-AGG5SFHL.js";
import {
  UniverDebuggerPlugin
} from "../chunk-6RL4G227.js";
import "../chunk-OZCZVRL3.js";
import {
  DOCS_IMAGE_MENU_ID,
  UniverDocsDrawingUIPlugin
} from "../chunk-IEN5A4MA.js";
import {
  SHEETS_IMAGE_MENU_ID,
  UniverSheetsDrawingUIPlugin
} from "../chunk-6KKG4LFT.js";
import {
  DEFAULT_DOCUMENT_DATA_CN,
  DEFAULT_DOCUMENT_DATA_EN,
  DEFAULT_SLIDE_DATA,
  DEFAULT_WORKBOOK_DATA_DEMO,
  DEFAULT_WORKBOOK_DATA_DEMO1
} from "../chunk-R36TW3RS.js";
import {
  FUniver
} from "../chunk-IM7MDYQK.js";
import "../chunk-PJAWFGFR.js";
import {
  IEditorBridgeService,
  IFormulaEditorManagerService,
  RenderSheetContent,
  SetCellEditVisibleOperation,
  SetRangeBoldCommand,
  SetRangeFontFamilyCommand,
  SetRangeFontSizeCommand,
  SetRangeItalicCommand,
  SetRangeStrickThroughCommand,
  SetRangeTextColorCommand,
  SetRangeUnderlineCommand,
  SheetUIController,
  UniverSheetsUIPlugin,
  deriveStateFromActiveSheet$,
  getCurrentRangeDisable$,
  menuSchema as menuSchema3,
  useActiveWorkbook,
  useWorkbooks
} from "../chunk-NW7E7FBW.js";
import {
  BrowserClipboardService,
  BulletListCommand,
  CanvasFloatDomService,
  CanvasPopup,
  CanvasPopupService,
  ComponentContainer,
  ComponentManager,
  ContextMenuService,
  CustomLabel,
  DISABLE_AUTO_FOCUS_KEY,
  DesktopBeforeCloseService,
  DesktopConfirmService,
  DesktopContextMenu,
  DesktopDialogService,
  DesktopGlobalZoneService,
  DesktopLayoutService,
  DesktopLocalFileService,
  DesktopLocalStorageService,
  DesktopMessageService,
  DesktopNotificationService,
  DesktopSidebarService,
  DesktopZenZoneService,
  DocCreateTableOperation,
  DocSelectionManagerService,
  DocUIController,
  ErrorController,
  FloatDom,
  GlobalZone,
  IBeforeCloseService,
  ICanvasPopupService,
  IClipboardInterfaceService,
  IConfirmService,
  IContextMenuService,
  IDialogService,
  IGlobalZoneService,
  ILayoutService,
  ILeftSidebarService,
  ILocalFileService,
  IMenuManagerService,
  IMessageService,
  INotificationService,
  IPlatformService,
  IRenderManagerService,
  IShortcutService,
  ISidebarService,
  IUIController,
  IUIPartsService,
  IZenZoneService,
  MenuManagerService,
  OrderListCommand,
  PlatformService,
  SetInlineFormatBoldCommand,
  SetInlineFormatCommand,
  SetInlineFormatFontFamilyCommand,
  SetInlineFormatFontSizeCommand,
  SetInlineFormatItalicCommand,
  SetInlineFormatStrikethroughCommand,
  SetInlineFormatTextBackgroundColorCommand,
  SetInlineFormatTextColorCommand,
  SetInlineFormatUnderlineCommand,
  SetTextSelectionsOperation,
  SharedController,
  ShortcutPanelController,
  ShortcutPanelService,
  ShortcutService,
  ToolbarItem,
  UIPartsService,
  UNIVER_UI_PLUGIN_NAME,
  UNI_DISABLE_CHANGING_FOCUS_KEY,
  UniverDocsPlugin,
  UniverDocsUIPlugin,
  UniverRenderEnginePlugin,
  ZIndexManager,
  connectInjector,
  getMenuHiddenObservable,
  menuSchema,
  menuSchema2,
  useComponentsOfPart,
  useDependency,
  useObservable
} from "../chunk-DOZPYWOG.js";
import "../chunk-OJWCZZ56.js";
import "../chunk-222VPS6G.js";
import {
  ConfigContext,
  ConfigProvider,
  Dropdown,
  Tooltip,
  check_mark_single_default,
  close_single_default,
  clsx,
  default_module_default,
  delete_single_default,
  download_single_default,
  flip,
  fullscreen_single_default,
  fx_single_default,
  increase_single_default,
  lock_single_default,
  menu_single_default,
  offset,
  pivot_table_single_default,
  print_single_default,
  render,
  require_jsx_runtime,
  require_react,
  require_react_dom,
  share_single_default,
  shift,
  themeInstance,
  unmount,
  useFloating,
  zen_single_default,
  zoom_reduce_single_default
} from "../chunk-22LKBS37.js";
import {
  enUS,
  faIR
} from "../chunk-NNLNWQYK.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-5UD457XA.js";
import {
  BehaviorSubject,
  DEFAULT_EMPTY_DOCUMENT_VALUE,
  DOCS_FORMULA_BAR_EDITOR_UNIT_ID_KEY,
  DOCS_NORMAL_EDITOR_UNIT_ID_KEY,
  DependentOn,
  Disposable,
  EDITOR_ACTIVATED,
  EMPTY,
  FOCUSING_SHEET,
  ICommandService,
  IConfigService,
  IContextService,
  ILocalStorageService,
  IPermissionService,
  IUniverInstanceService,
  Inject,
  Injector,
  InsertSheetCommand,
  InsertSheetMutation,
  LifecycleService,
  LocaleService,
  O,
  Observable,
  Optional,
  Plugin,
  RangeProtectionPermissionEditPoint,
  RangeProtectionRuleModel,
  Rectangle,
  RedoCommand,
  RemoveSheetMutation,
  SetBackgroundColorCommand,
  SetRangeValuesMutation,
  SetSelectionsOperation,
  SetTabColorMutation,
  SetWorksheetActiveOperation,
  SetWorksheetHideMutation,
  SetWorksheetNameMutation,
  SetWorksheetOrderMutation,
  SheetsSelectionsService,
  ThemeService,
  Tools,
  UndoCommand,
  Univer,
  UniverFormulaEnginePlugin,
  UniverRPCMainThreadPlugin,
  UniverSheetsPlugin,
  WorkbookEditablePermission,
  WorksheetEditPermission,
  WorksheetProtectionRuleModel,
  WorksheetSetCellStylePermission,
  WorksheetSetCellValuePermission,
  auditTime,
  createIdentifier,
  debounce_default,
  delay,
  distinctUntilChanged,
  filter,
  isInternalEditorID,
  map,
  merge,
  mergeOverrideWithDependencies,
  merge_default,
  switchMap,
  take,
  throttleTime,
  toDisposable
} from "../chunk-33NDYU5R.js";
import "../chunk-WKXT4HLI.js";
import "../chunk-TI7IKOEF.js";
import {
  __commonJS,
  __decorateClass,
  __decorateParam,
  __publicField,
  __toESM
} from "../chunk-NSSCU2QI.js";

// ../node_modules/.pnpm/use-sync-external-store@1.2.0_react@19.0.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "../node_modules/.pnpm/use-sync-external-store@1.2.0_react@19.0.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React9 = require_react();
        var ReactSharedInternals = React9.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useState8 = React9.useState, useEffect9 = React9.useEffect, useLayoutEffect4 = React9.useLayoutEffect, useDebugValue2 = React9.useDebugValue;
        var didWarnOld18Alpha = false;
        var didWarnUncachedGetSnapshot = false;
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          {
            if (!didWarnOld18Alpha) {
              if (React9.startTransition !== void 0) {
                didWarnOld18Alpha = true;
                error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.");
              }
            }
          }
          var value = getSnapshot();
          {
            if (!didWarnUncachedGetSnapshot) {
              var cachedValue = getSnapshot();
              if (!objectIs(value, cachedValue)) {
                error("The result of getSnapshot should be cached to avoid an infinite loop");
                didWarnUncachedGetSnapshot = true;
              }
            }
          }
          var _useState = useState8({
            inst: {
              value,
              getSnapshot
            }
          }), inst = _useState[0].inst, forceUpdate = _useState[1];
          useLayoutEffect4(function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
          }, [subscribe, value, getSnapshot]);
          useEffect9(function() {
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
            var handleStoreChange = function() {
              if (checkIfSnapshotChanged(inst)) {
                forceUpdate({
                  inst
                });
              }
            };
            return subscribe(handleStoreChange);
          }, [subscribe]);
          useDebugValue2(value);
          return value;
        }
        function checkIfSnapshotChanged(inst) {
          var latestGetSnapshot = inst.getSnapshot;
          var prevValue = inst.value;
          try {
            var nextValue = latestGetSnapshot();
            return !objectIs(prevValue, nextValue);
          } catch (error2) {
            return true;
          }
        }
        function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
          return getSnapshot();
        }
        var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
        var isServerEnvironment = !canUseDOM;
        var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore;
        var useSyncExternalStore$2 = React9.useSyncExternalStore !== void 0 ? React9.useSyncExternalStore : shim;
        exports.useSyncExternalStore = useSyncExternalStore$2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// ../node_modules/.pnpm/use-sync-external-store@1.2.0_react@19.0.0/node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "../node_modules/.pnpm/use-sync-external-store@1.2.0_react@19.0.0/node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// ../node_modules/.pnpm/use-sync-external-store@1.2.0_react@19.0.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js
var require_with_selector_development = __commonJS({
  "../node_modules/.pnpm/use-sync-external-store@1.2.0_react@19.0.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React9 = require_react();
        var shim = require_shim();
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useSyncExternalStore = shim.useSyncExternalStore;
        var useRef6 = React9.useRef, useEffect9 = React9.useEffect, useMemo6 = React9.useMemo, useDebugValue2 = React9.useDebugValue;
        function useSyncExternalStoreWithSelector2(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
          var instRef = useRef6(null);
          var inst;
          if (instRef.current === null) {
            inst = {
              hasValue: false,
              value: null
            };
            instRef.current = inst;
          } else {
            inst = instRef.current;
          }
          var _useMemo = useMemo6(function() {
            var hasMemo = false;
            var memoizedSnapshot;
            var memoizedSelection;
            var memoizedSelector = function(nextSnapshot) {
              if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                var _nextSelection = selector(nextSnapshot);
                if (isEqual !== void 0) {
                  if (inst.hasValue) {
                    var currentSelection = inst.value;
                    if (isEqual(currentSelection, _nextSelection)) {
                      memoizedSelection = currentSelection;
                      return currentSelection;
                    }
                  }
                }
                memoizedSelection = _nextSelection;
                return _nextSelection;
              }
              var prevSnapshot = memoizedSnapshot;
              var prevSelection = memoizedSelection;
              if (objectIs(prevSnapshot, nextSnapshot)) {
                return prevSelection;
              }
              var nextSelection = selector(nextSnapshot);
              if (isEqual !== void 0 && isEqual(prevSelection, nextSelection)) {
                return prevSelection;
              }
              memoizedSnapshot = nextSnapshot;
              memoizedSelection = nextSelection;
              return nextSelection;
            };
            var maybeGetServerSnapshot = getServerSnapshot === void 0 ? null : getServerSnapshot;
            var getSnapshotWithSelector = function() {
              return memoizedSelector(getSnapshot());
            };
            var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? void 0 : function() {
              return memoizedSelector(maybeGetServerSnapshot());
            };
            return [getSnapshotWithSelector, getServerSnapshotWithSelector];
          }, [getSnapshot, getServerSnapshot, selector, isEqual]), getSelection = _useMemo[0], getServerSelection = _useMemo[1];
          var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
          useEffect9(function() {
            inst.hasValue = true;
            inst.value = value;
          }, [value]);
          useDebugValue2(value);
          return value;
        }
        exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// ../node_modules/.pnpm/use-sync-external-store@1.2.0_react@19.0.0/node_modules/use-sync-external-store/shim/with-selector.js
var require_with_selector = __commonJS({
  "../node_modules/.pnpm/use-sync-external-store@1.2.0_react@19.0.0/node_modules/use-sync-external-store/shim/with-selector.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_with_selector_development();
    }
  }
});

// ../node_modules/.pnpm/@xyflow+react@12.3.5_@types+react@19.0.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@xyflow/react/dist/esm/index.js
var import_jsx_runtime = __toESM(require_jsx_runtime());

// ../node_modules/.pnpm/classcat@5.0.5/node_modules/classcat/index.js
function cc(names) {
  if (typeof names === "string" || typeof names === "number") return "" + names;
  let out = "";
  if (Array.isArray(names)) {
    for (let i = 0, tmp; i < names.length; i++) {
      if ((tmp = cc(names[i])) !== "") {
        out += (out && " ") + tmp;
      }
    }
  } else {
    for (let k in names) {
      if (names[k]) out += (out && " ") + k;
    }
  }
  return out;
}

// ../node_modules/.pnpm/d3-dispatch@3.0.1/node_modules/d3-dispatch/src/dispatch.js
var noop = { value: () => {
} };
function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}
function Dispatch(_) {
  this._ = _;
}
function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return { type: t, name };
  });
}
Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._, T = parseTypenames(typename + "", _), t, i = -1, n = T.length;
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }
    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};
function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}
function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({ name, value: callback });
  return type;
}
var dispatch_default = dispatch;

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/namespaces.js
var xhtml = "http://www.w3.org/1999/xhtml";
var namespaces_default = {
  svg: "http://www.w3.org/2000/svg",
  xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/namespace.js
function namespace_default(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return namespaces_default.hasOwnProperty(prefix) ? { space: namespaces_default[prefix], local: name } : name;
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/creator.js
function creatorInherit(name) {
  return function() {
    var document2 = this.ownerDocument, uri = this.namespaceURI;
    return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
  };
}
function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
function creator_default(name) {
  var fullname = namespace_default(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selector.js
function none() {
}
function selector_default(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/select.js
function select_default(select) {
  if (typeof select !== "function") select = selector_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/array.js
function array(x) {
  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selectorAll.js
function empty() {
  return [];
}
function selectorAll_default(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/selectAll.js
function arrayAll(select) {
  return function() {
    return array(select.apply(this, arguments));
  };
}
function selectAll_default(select) {
  if (typeof select === "function") select = arrayAll(select);
  else select = selectorAll_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }
  return new Selection(subgroups, parents);
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/matcher.js
function matcher_default(selector) {
  return function() {
    return this.matches(selector);
  };
}
function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/selectChild.js
var find = Array.prototype.find;
function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}
function childFirst() {
  return this.firstElementChild;
}
function selectChild_default(match) {
  return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/selectChildren.js
var filter2 = Array.prototype.filter;
function children() {
  return Array.from(this.children);
}
function childrenFilter(match) {
  return function() {
    return filter2.call(this.children, match);
  };
}
function selectChildren_default(match) {
  return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/filter.js
function filter_default(match) {
  if (typeof match !== "function") match = matcher_default(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/sparse.js
function sparse_default(update) {
  return new Array(update.length);
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/enter.js
function enter_default() {
  return new Selection(this._enter || this._groups.map(sparse_default), this._parents);
}
function EnterNode(parent, datum2) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum2;
}
EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function(selector) {
    return this._parent.querySelector(selector);
  },
  querySelectorAll: function(selector) {
    return this._parent.querySelectorAll(selector);
  }
};

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/constant.js
function constant_default(x) {
  return function() {
    return x;
  };
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/data.js
function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0, node, groupLength = group.length, dataLength = data.length;
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}
function bindKey(parent, group, enter, update, exit, data, key) {
  var i, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
      exit[i] = node;
    }
  }
}
function datum(node) {
  return node.__data__;
}
function data_default(value, key) {
  if (!arguments.length) return Array.from(this, datum);
  var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
  if (typeof value !== "function") value = constant_default(value);
  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j], group = groups[j], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength) ;
        previous._next = next || null;
      }
    }
  }
  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}
function arraylike(data) {
  return typeof data === "object" && "length" in data ? data : Array.from(data);
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/exit.js
function exit_default() {
  return new Selection(this._exit || this._groups.map(sparse_default), this._parents);
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/join.js
function join_default(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter) enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update) update = update.selection();
  }
  if (onexit == null) exit.remove();
  else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/merge.js
function merge_default2(context) {
  var selection2 = context.selection ? context.selection() : context;
  for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge2 = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge2[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Selection(merges, this._parents);
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/order.js
function order_default() {
  for (var groups = this._groups, j = -1, m = groups.length; ++j < m; ) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }
  return this;
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/sort.js
function sort_default(compare) {
  if (!compare) compare = ascending;
  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }
  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }
  return new Selection(sortgroups, this._parents).order();
}
function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/call.js
function call_default() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/nodes.js
function nodes_default() {
  return Array.from(this);
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/node.js
function node_default() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }
  return null;
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/size.js
function size_default() {
  let size = 0;
  for (const node of this) ++size;
  return size;
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/empty.js
function empty_default() {
  return !this.node();
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/each.js
function each_default(callback) {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }
  return this;
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/attr.js
function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}
function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}
function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}
function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}
function attr_default(name, value) {
  var fullname = namespace_default(name);
  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }
  return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/window.js
function window_default(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/style.js
function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}
function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}
function style_default(name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
  return node.style.getPropertyValue(name) || window_default(node).getComputedStyle(node, null).getPropertyValue(name);
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/property.js
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}
function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}
function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}
function property_default(name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/classed.js
function classArray(string) {
  return string.trim().split(/^|\s+/);
}
function classList(node) {
  return node.classList || new ClassList(node);
}
function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};
function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}
function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}
function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}
function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}
function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}
function classed_default(name, value) {
  var names = classArray(name + "");
  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }
  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/text.js
function textRemove() {
  this.textContent = "";
}
function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}
function text_default(value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/html.js
function htmlRemove() {
  this.innerHTML = "";
}
function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}
function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}
function html_default(value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/raise.js
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}
function raise_default() {
  return this.each(raise);
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/lower.js
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function lower_default() {
  return this.each(lower);
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/append.js
function append_default(name) {
  var create2 = typeof name === "function" ? name : creator_default(name);
  return this.select(function() {
    return this.appendChild(create2.apply(this, arguments));
  });
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/insert.js
function constantNull() {
  return null;
}
function insert_default(name, before) {
  var create2 = typeof name === "function" ? name : creator_default(name), select = before == null ? constantNull : typeof before === "function" ? before : selector_default(before);
  return this.select(function() {
    return this.insertBefore(create2.apply(this, arguments), select.apply(this, arguments) || null);
  });
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/remove.js
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}
function remove_default() {
  return this.each(remove);
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/clone.js
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function clone_default(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/datum.js
function datum_default(value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/on.js
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}
function parseTypenames2(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return { type: t, name };
  });
}
function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}
function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = { type: typename.type, name: typename.name, value, listener, options };
    if (!on) this.__on = [o];
    else on.push(o);
  };
}
function on_default(typename, value, options) {
  var typenames = parseTypenames2(typename + ""), i, n = typenames.length, t;
  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }
  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
  return this;
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/dispatch.js
function dispatchEvent(node, type, params) {
  var window2 = window_default(node), event = window2.CustomEvent;
  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window2.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }
  node.dispatchEvent(event);
}
function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}
function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}
function dispatch_default2(type, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/iterator.js
function* iterator_default() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) yield node;
    }
  }
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/index.js
var root = [null];
function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}
function selection() {
  return new Selection([[document.documentElement]], root);
}
function selection_selection() {
  return this;
}
Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: select_default,
  selectAll: selectAll_default,
  selectChild: selectChild_default,
  selectChildren: selectChildren_default,
  filter: filter_default,
  data: data_default,
  enter: enter_default,
  exit: exit_default,
  join: join_default,
  merge: merge_default2,
  selection: selection_selection,
  order: order_default,
  sort: sort_default,
  call: call_default,
  nodes: nodes_default,
  node: node_default,
  size: size_default,
  empty: empty_default,
  each: each_default,
  attr: attr_default,
  style: style_default,
  property: property_default,
  classed: classed_default,
  text: text_default,
  html: html_default,
  raise: raise_default,
  lower: lower_default,
  append: append_default,
  insert: insert_default,
  remove: remove_default,
  clone: clone_default,
  datum: datum_default,
  on: on_default,
  dispatch: dispatch_default2,
  [Symbol.iterator]: iterator_default
};
var selection_default = selection;

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/select.js
function select_default2(selector) {
  return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/sourceEvent.js
function sourceEvent_default(event) {
  let sourceEvent;
  while (sourceEvent = event.sourceEvent) event = sourceEvent;
  return event;
}

// ../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/pointer.js
function pointer_default(event, node) {
  event = sourceEvent_default(event);
  if (node === void 0) node = event.currentTarget;
  if (node) {
    var svg = node.ownerSVGElement || node;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      point.x = event.clientX, point.y = event.clientY;
      point = point.matrixTransform(node.getScreenCTM().inverse());
      return [point.x, point.y];
    }
    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }
  return [event.pageX, event.pageY];
}

// ../node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/noevent.js
var nonpassive = { passive: false };
var nonpassivecapture = { capture: true, passive: false };
function nopropagation(event) {
  event.stopImmediatePropagation();
}
function noevent_default(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

// ../node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/nodrag.js
function nodrag_default(view) {
  var root2 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", noevent_default, nonpassivecapture);
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", noevent_default, nonpassivecapture);
  } else {
    root2.__noselect = root2.style.MozUserSelect;
    root2.style.MozUserSelect = "none";
  }
}
function yesdrag(view, noclick) {
  var root2 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", null);
  if (noclick) {
    selection2.on("click.drag", noevent_default, nonpassivecapture);
    setTimeout(function() {
      selection2.on("click.drag", null);
    }, 0);
  }
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", null);
  } else {
    root2.style.MozUserSelect = root2.__noselect;
    delete root2.__noselect;
  }
}

// ../node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/constant.js
var constant_default2 = (x) => () => x;

// ../node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/event.js
function DragEvent(type, {
  sourceEvent,
  subject,
  target,
  identifier,
  active,
  x,
  y,
  dx,
  dy,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
    subject: { value: subject, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    identifier: { value: identifier, enumerable: true, configurable: true },
    active: { value: active, enumerable: true, configurable: true },
    x: { value: x, enumerable: true, configurable: true },
    y: { value: y, enumerable: true, configurable: true },
    dx: { value: dx, enumerable: true, configurable: true },
    dy: { value: dy, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}
DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};

// ../node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/drag.js
function defaultFilter(event) {
  return !event.ctrlKey && !event.button;
}
function defaultContainer() {
  return this.parentNode;
}
function defaultSubject(event, d) {
  return d == null ? { x: event.x, y: event.y } : d;
}
function defaultTouchable() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function drag_default() {
  var filter3 = defaultFilter, container = defaultContainer, subject = defaultSubject, touchable = defaultTouchable, gestures = {}, listeners = dispatch_default("start", "drag", "end"), active = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
  function drag(selection2) {
    selection2.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved, nonpassive).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function mousedowned(event, d) {
    if (touchending || !filter3.call(this, event, d)) return;
    var gesture = beforestart(this, container.call(this, event, d), event, d, "mouse");
    if (!gesture) return;
    select_default2(event.view).on("mousemove.drag", mousemoved, nonpassivecapture).on("mouseup.drag", mouseupped, nonpassivecapture);
    nodrag_default(event.view);
    nopropagation(event);
    mousemoving = false;
    mousedownx = event.clientX;
    mousedowny = event.clientY;
    gesture("start", event);
  }
  function mousemoved(event) {
    noevent_default(event);
    if (!mousemoving) {
      var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag", event);
  }
  function mouseupped(event) {
    select_default2(event.view).on("mousemove.drag mouseup.drag", null);
    yesdrag(event.view, mousemoving);
    noevent_default(event);
    gestures.mouse("end", event);
  }
  function touchstarted(event, d) {
    if (!filter3.call(this, event, d)) return;
    var touches = event.changedTouches, c = container.call(this, event, d), n = touches.length, i, gesture;
    for (i = 0; i < n; ++i) {
      if (gesture = beforestart(this, c, event, d, touches[i].identifier, touches[i])) {
        nopropagation(event);
        gesture("start", event, touches[i]);
      }
    }
  }
  function touchmoved(event) {
    var touches = event.changedTouches, n = touches.length, i, gesture;
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        noevent_default(event);
        gesture("drag", event, touches[i]);
      }
    }
  }
  function touchended(event) {
    var touches = event.changedTouches, n = touches.length, i, gesture;
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, 500);
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        nopropagation(event);
        gesture("end", event, touches[i]);
      }
    }
  }
  function beforestart(that, container2, event, d, identifier, touch) {
    var dispatch2 = listeners.copy(), p = pointer_default(touch || event, container2), dx, dy, s;
    if ((s = subject.call(that, new DragEvent("beforestart", {
      sourceEvent: event,
      target: drag,
      identifier,
      active,
      x: p[0],
      y: p[1],
      dx: 0,
      dy: 0,
      dispatch: dispatch2
    }), d)) == null) return;
    dx = s.x - p[0] || 0;
    dy = s.y - p[1] || 0;
    return function gesture(type, event2, touch2) {
      var p0 = p, n;
      switch (type) {
        case "start":
          gestures[identifier] = gesture, n = active++;
          break;
        case "end":
          delete gestures[identifier], --active;
        // falls through
        case "drag":
          p = pointer_default(touch2 || event2, container2), n = active;
          break;
      }
      dispatch2.call(
        type,
        that,
        new DragEvent(type, {
          sourceEvent: event2,
          subject: s,
          target: drag,
          identifier,
          active: n,
          x: p[0] + dx,
          y: p[1] + dy,
          dx: p[0] - p0[0],
          dy: p[1] - p0[1],
          dispatch: dispatch2
        }),
        d
      );
    };
  }
  drag.filter = function(_) {
    return arguments.length ? (filter3 = typeof _ === "function" ? _ : constant_default2(!!_), drag) : filter3;
  };
  drag.container = function(_) {
    return arguments.length ? (container = typeof _ === "function" ? _ : constant_default2(_), drag) : container;
  };
  drag.subject = function(_) {
    return arguments.length ? (subject = typeof _ === "function" ? _ : constant_default2(_), drag) : subject;
  };
  drag.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant_default2(!!_), drag) : touchable;
  };
  drag.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag : value;
  };
  drag.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
  };
  return drag;
}

// ../node_modules/.pnpm/d3-color@3.1.0/node_modules/d3-color/src/define.js
function define_default(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

// ../node_modules/.pnpm/d3-color@3.1.0/node_modules/d3-color/src/color.js
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*";
var reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex = /^#([0-9a-f]{3,8})$/;
var reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`);
var reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`);
var reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`);
var reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`);
var reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`);
var reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define_default(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHex8() {
  return this.rgb().formatHex8();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format) ? rgbn(named[format]) : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define_default(Rgb, rgb, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}
function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl();
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
define_default(Hsl, hsl, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));
function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

// ../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/basis.js
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
function basis_default(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// ../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// ../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/constant.js
var constant_default3 = (x) => () => x;

// ../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/color.js
function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}
function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}
function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant_default3(isNaN(a) ? b : a);
  };
}
function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant_default3(isNaN(a) ? b : a);
}

// ../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/rgb.js
var rgb_default = function rgbGamma(y) {
  var color2 = gamma(y);
  function rgb2(start2, end) {
    var r = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g = color2(start2.g, end.g), b = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.r = r(t);
      start2.g = g(t);
      start2.b = b(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  }
  rgb2.gamma = rgbGamma;
  return rgb2;
}(1);
function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color2;
    for (i = 0; i < n; ++i) {
      color2 = rgb(colors[i]);
      r[i] = color2.r || 0;
      g[i] = color2.g || 0;
      b[i] = color2.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color2.opacity = 1;
    return function(t) {
      color2.r = r(t);
      color2.g = g(t);
      color2.b = b(t);
      return color2 + "";
    };
  };
}
var rgbBasis = rgbSpline(basis_default);
var rgbBasisClosed = rgbSpline(basisClosed_default);

// ../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/number.js
function number_default(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}

// ../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/string.js
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB = new RegExp(reA.source, "g");
function zero(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function string_default(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
  a = a + "", b = b + "";
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs;
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i]) s[i] += bm;
      else s[++i] = bm;
    } else {
      s[++i] = null;
      q.push({ i, x: number_default(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs;
    else s[++i] = bs;
  }
  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2) s[(o = q[i2]).i] = o.x(t);
    return s.join("");
  });
}

// ../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/transform/decompose.js
var degrees = 180 / Math.PI;
var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose_default(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX,
    scaleY
  };
}

// ../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/transform/parse.js
var svgNode;
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? identity : decompose_default(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
  if (value == null) return identity;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity;
  value = value.matrix;
  return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
}

// ../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/transform/index.js
function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360;
      else if (b - a > 180) a += 360;
      q.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: number_default(a, b) });
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }
  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: number_default(a, b) });
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a, b) {
    var s = [], q = [];
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null;
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

// ../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/zoom.js
var epsilon2 = 1e-12;
function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}
function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}
function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}
var zoom_default = function zoomRho(rho, rho2, rho4) {
  function zoom(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
    if (d2 < epsilon2) {
      S = Math.log(w1 / w0) / rho;
      i = function(t) {
        return [
          ux0 + t * dx,
          uy0 + t * dy,
          w0 * Math.exp(rho * t * S)
        ];
      };
    } else {
      var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i = function(t) {
        var s = t * S, coshr0 = cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
        return [
          ux0 + u * dx,
          uy0 + u * dy,
          w0 * coshr0 / cosh(rho * s + r0)
        ];
      };
    }
    i.duration = S * 1e3 * rho / Math.SQRT2;
    return i;
  }
  zoom.rho = function(_) {
    var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
    return zoomRho(_1, _2, _4);
  };
  return zoom;
}(Math.SQRT2, 2, 4);

// ../node_modules/.pnpm/d3-timer@3.0.1/node_modules/d3-timer/src/timer.js
var frame = 0;
var timeout = 0;
var interval = 0;
var pokeDelay = 1e3;
var taskHead;
var taskTail;
var clockLast = 0;
var clockNow = 0;
var clockSkew = 0;
var clock = typeof performance === "object" && performance.now ? performance : Date;
var setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
  setTimeout(f, 17);
};
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
  clockNow = 0;
}
function Timer() {
  this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay2, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay2 == null ? 0 : +delay2);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};
function timer(callback, delay2, time) {
  var t = new Timer();
  t.restart(callback, delay2, time);
  return t;
}
function timerFlush() {
  now();
  ++frame;
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(void 0, e);
    t = t._next;
  }
  --frame;
}
function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}
function poke() {
  var now2 = clock.now(), delay2 = now2 - clockLast;
  if (delay2 > pokeDelay) clockSkew -= delay2, clockLast = now2;
}
function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}
function sleep(time) {
  if (frame) return;
  if (timeout) timeout = clearTimeout(timeout);
  var delay2 = time - clockNow;
  if (delay2 > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

// ../node_modules/.pnpm/d3-timer@3.0.1/node_modules/d3-timer/src/timeout.js
function timeout_default(callback, delay2, time) {
  var t = new Timer();
  delay2 = delay2 == null ? 0 : +delay2;
  t.restart((elapsed) => {
    t.stop();
    callback(elapsed + delay2);
  }, delay2, time);
  return t;
}

// ../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/schedule.js
var emptyOn = dispatch_default("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function schedule_default(node, name, id2, index2, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id2 in schedules) return;
  create(node, id2, {
    name,
    index: index2,
    // For context during callback.
    group,
    // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}
function init(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}
function set2(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}
function get2(node, id2) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id2])) throw new Error("transition not found");
  return schedule;
}
function create(node, id2, self) {
  var schedules = node.__transition, tween;
  schedules[id2] = self;
  self.timer = timer(schedule, 0, self.time);
  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start2, self.delay, self.time);
    if (self.delay <= elapsed) start2(elapsed - self.delay);
  }
  function start2(elapsed) {
    var i, j, n, o;
    if (self.state !== SCHEDULED) return stop();
    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;
      if (o.state === STARTED) return timeout_default(start2);
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      } else if (+i < id2) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }
    timeout_default(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return;
    self.state = STARTED;
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }
  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
    while (++i < n) {
      tween[i].call(node, t);
    }
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }
  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id2];
    for (var i in schedules) return;
    delete node.__transition;
  }
}

// ../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/interrupt.js
function interrupt_default(node, name) {
  var schedules = node.__transition, schedule, active, empty2 = true, i;
  if (!schedules) return;
  name = name == null ? null : name + "";
  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) {
      empty2 = false;
      continue;
    }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }
  if (empty2) delete node.__transition;
}

// ../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/selection/interrupt.js
function interrupt_default2(name) {
  return this.each(function() {
    interrupt_default(this, name);
  });
}

// ../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/tween.js
function tweenRemove(id2, name) {
  var tween0, tween1;
  return function() {
    var schedule = set2(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }
    schedule.tween = tween1;
  };
}
function tweenFunction(id2, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error();
  return function() {
    var schedule = set2(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = { name, value }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }
    schedule.tween = tween1;
  };
}
function tween_default(name, value) {
  var id2 = this._id;
  name += "";
  if (arguments.length < 2) {
    var tween = get2(this.node(), id2).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }
  return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
}
function tweenValue(transition2, name, value) {
  var id2 = transition2._id;
  transition2.each(function() {
    var schedule = set2(this, id2);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });
  return function(node) {
    return get2(node, id2).value[name];
  };
}

// ../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/interpolate.js
function interpolate_default(a, b) {
  var c;
  return (typeof b === "number" ? number_default : b instanceof color ? rgb_default : (c = color(b)) ? (b = c, rgb_default) : string_default)(a, b);
}

// ../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/attr.js
function attrRemove2(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS2(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrConstantNS2(fullname, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attrFunctionNS2(fullname, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attr_default2(name, value) {
  var fullname = namespace_default(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate_default;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS2 : attrFunction2)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS2 : attrRemove2)(fullname) : (fullname.local ? attrConstantNS2 : attrConstant2)(fullname, i, value));
}

// ../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/attrTween.js
function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}
function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}
function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function attrTween_default(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  var fullname = namespace_default(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}

// ../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/delay.js
function delayFunction(id2, value) {
  return function() {
    init(this, id2).delay = +value.apply(this, arguments);
  };
}
function delayConstant(id2, value) {
  return value = +value, function() {
    init(this, id2).delay = value;
  };
}
function delay_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get2(this.node(), id2).delay;
}

// ../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/duration.js
function durationFunction(id2, value) {
  return function() {
    set2(this, id2).duration = +value.apply(this, arguments);
  };
}
function durationConstant(id2, value) {
  return value = +value, function() {
    set2(this, id2).duration = value;
  };
}
function duration_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get2(this.node(), id2).duration;
}

// ../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/ease.js
function easeConstant(id2, value) {
  if (typeof value !== "function") throw new Error();
  return function() {
    set2(this, id2).ease = value;
  };
}
function ease_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each(easeConstant(id2, value)) : get2(this.node(), id2).ease;
}

// ../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/easeVarying.js
function easeVarying(id2, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function") throw new Error();
    set2(this, id2).ease = v;
  };
}
function easeVarying_default(value) {
  if (typeof value !== "function") throw new Error();
  return this.each(easeVarying(this._id, value));
}

// ../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/filter.js
function filter_default2(match) {
  if (typeof match !== "function") match = matcher_default(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Transition(subgroups, this._parents, this._name, this._id);
}

// ../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/merge.js
function merge_default3(transition2) {
  if (transition2._id !== this._id) throw new Error();
  for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge2 = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge2[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Transition(merges, this._parents, this._name, this._id);
}

// ../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/on.js
function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}
function onFunction(id2, name, listener) {
  var on0, on1, sit = start(name) ? init : set2;
  return function() {
    var schedule = sit(this, id2), on = schedule.on;
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
    schedule.on = on1;
  };
}
function on_default2(name, listener) {
  var id2 = this._id;
  return arguments.length < 2 ? get2(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
}

// ../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/remove.js
function removeFunction(id2) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id2) return;
    if (parent) parent.removeChild(this);
  };
}
function remove_default2() {
  return this.on("end.remove", removeFunction(this._id));
}

// ../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/select.js
function select_default3(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function") select = selector_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule_default(subgroup[i], name, id2, i, subgroup, get2(node, id2));
      }
    }
  }
  return new Transition(subgroups, this._parents, name, id2);
}

// ../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/selectAll.js
function selectAll_default2(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function") select = selectorAll_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children2 = select.call(node, node.__data__, i, group), child, inherit2 = get2(node, id2), k = 0, l = children2.length; k < l; ++k) {
          if (child = children2[k]) {
            schedule_default(child, name, id2, k, children2, inherit2);
          }
        }
        subgroups.push(children2);
        parents.push(node);
      }
    }
  }
  return new Transition(subgroups, parents, name, id2);
}

// ../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/selection.js
var Selection2 = selection_default.prototype.constructor;
function selection_default2() {
  return new Selection2(this._groups, this._parents);
}

// ../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/style.js
function styleNull(name, interpolate) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}
function styleRemove2(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function styleFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function styleMaybeRemove(id2, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
  return function() {
    var schedule = set2(this, id2), on = schedule.on, listener = schedule.value[key] == null ? remove2 || (remove2 = styleRemove2(name)) : void 0;
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
    schedule.on = on1;
  };
}
function style_default2(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate_default;
  return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove2(name)) : typeof value === "function" ? this.styleTween(name, styleFunction2(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant2(name, i, value), priority).on("end.style." + name, null);
}

// ../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/styleTween.js
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}
function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}
function styleTween_default(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}

// ../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/text.js
function textConstant2(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction2(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}
function text_default2(value) {
  return this.tween("text", typeof value === "function" ? textFunction2(tweenValue(this, "text", value)) : textConstant2(value == null ? "" : value + ""));
}

// ../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/textTween.js
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}
function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function textTween_default(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, textTween(value));
}

// ../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/transition.js
function transition_default() {
  var name = this._name, id0 = this._id, id1 = newId();
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit2 = get2(node, id0);
        schedule_default(node, name, id1, i, group, {
          time: inherit2.time + inherit2.delay + inherit2.duration,
          delay: 0,
          duration: inherit2.duration,
          ease: inherit2.ease
        });
      }
    }
  }
  return new Transition(groups, this._parents, name, id1);
}

// ../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/end.js
function end_default() {
  var on0, on1, that = this, id2 = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = { value: reject }, end = { value: function() {
      if (--size === 0) resolve();
    } };
    that.each(function() {
      var schedule = set2(this, id2), on = schedule.on;
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }
      schedule.on = on1;
    });
    if (size === 0) resolve();
  });
}

// ../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/index.js
var id = 0;
function Transition(groups, parents, name, id2) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id2;
}
function transition(name) {
  return selection_default().transition(name);
}
function newId() {
  return ++id;
}
var selection_prototype = selection_default.prototype;
Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: select_default3,
  selectAll: selectAll_default2,
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: filter_default2,
  merge: merge_default3,
  selection: selection_default2,
  transition: transition_default,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: on_default2,
  attr: attr_default2,
  attrTween: attrTween_default,
  style: style_default2,
  styleTween: styleTween_default,
  text: text_default2,
  textTween: textTween_default,
  remove: remove_default2,
  tween: tween_default,
  delay: delay_default,
  duration: duration_default,
  ease: ease_default,
  easeVarying: easeVarying_default,
  end: end_default,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

// ../node_modules/.pnpm/d3-ease@3.0.1/node_modules/d3-ease/src/cubic.js
function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

// ../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/selection/transition.js
var defaultTiming = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};
function inherit(node, id2) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id2])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id2} not found`);
    }
  }
  return timing;
}
function transition_default2(name) {
  var id2, timing;
  if (name instanceof Transition) {
    id2 = name._id, name = name._name;
  } else {
    id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule_default(node, name, id2, i, group, timing || inherit(node, id2));
      }
    }
  }
  return new Transition(groups, this._parents, name, id2);
}

// ../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/selection/index.js
selection_default.prototype.interrupt = interrupt_default2;
selection_default.prototype.transition = transition_default2;

// ../node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/constant.js
var constant_default4 = (x) => () => x;

// ../node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/event.js
function ZoomEvent(type, {
  sourceEvent,
  target,
  transform: transform2,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    transform: { value: transform2, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}

// ../node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/transform.js
function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}
Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var identity2 = new Transform(1, 0, 0);
transform.prototype = Transform.prototype;
function transform(node) {
  while (!node.__zoom) if (!(node = node.parentNode)) return identity2;
  return node.__zoom;
}

// ../node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/noevent.js
function nopropagation2(event) {
  event.stopImmediatePropagation();
}
function noevent_default2(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

// ../node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/zoom.js
function defaultFilter2(event) {
  return (!event.ctrlKey || event.type === "wheel") && !event.button;
}
function defaultExtent() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}
function defaultTransform() {
  return this.__zoom || identity2;
}
function defaultWheelDelta(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) * (event.ctrlKey ? 10 : 1);
}
function defaultTouchable2() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function defaultConstrain(transform2, extent, translateExtent) {
  var dx0 = transform2.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform2.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform2.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform2.invertY(extent[1][1]) - translateExtent[1][1];
  return transform2.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}
function zoom_default2() {
  var filter3 = defaultFilter2, extent = defaultExtent, constrain = defaultConstrain, wheelDelta2 = defaultWheelDelta, touchable = defaultTouchable2, scaleExtent = [0, Infinity], translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]], duration = 250, interpolate = zoom_default, listeners = dispatch_default("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
  function zoom(selection2) {
    selection2.property("__zoom", defaultTransform).on("wheel.zoom", wheeled, { passive: false }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  zoom.transform = function(collection, transform2, point, event) {
    var selection2 = collection.selection ? collection.selection() : collection;
    selection2.property("__zoom", defaultTransform);
    if (collection !== selection2) {
      schedule(collection, transform2, point, event);
    } else {
      selection2.interrupt().each(function() {
        gesture(this, arguments).event(event).start().zoom(null, typeof transform2 === "function" ? transform2.apply(this, arguments) : transform2).end();
      });
    }
  };
  zoom.scaleBy = function(selection2, k, p, event) {
    zoom.scaleTo(selection2, function() {
      var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p, event);
  };
  zoom.scaleTo = function(selection2, k, p, event) {
    zoom.transform(selection2, function() {
      var e = extent.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    }, p, event);
  };
  zoom.translateBy = function(selection2, x, y, event) {
    zoom.transform(selection2, function() {
      return constrain(this.__zoom.translate(
        typeof x === "function" ? x.apply(this, arguments) : x,
        typeof y === "function" ? y.apply(this, arguments) : y
      ), extent.apply(this, arguments), translateExtent);
    }, null, event);
  };
  zoom.translateTo = function(selection2, x, y, p, event) {
    zoom.transform(selection2, function() {
      var e = extent.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(identity2.translate(p0[0], p0[1]).scale(t.k).translate(
        typeof x === "function" ? -x.apply(this, arguments) : -x,
        typeof y === "function" ? -y.apply(this, arguments) : -y
      ), e, translateExtent);
    }, p, event);
  };
  function scale(transform2, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform2.k ? transform2 : new Transform(k, transform2.x, transform2.y);
  }
  function translate(transform2, p0, p1) {
    var x = p0[0] - p1[0] * transform2.k, y = p0[1] - p1[1] * transform2.k;
    return x === transform2.x && y === transform2.y ? transform2 : new Transform(transform2.k, x, y);
  }
  function centroid(extent2) {
    return [(+extent2[0][0] + +extent2[1][0]) / 2, (+extent2[0][1] + +extent2[1][1]) / 2];
  }
  function schedule(transition2, transform2, point, event) {
    transition2.on("start.zoom", function() {
      gesture(this, arguments).event(event).start();
    }).on("interrupt.zoom end.zoom", function() {
      gesture(this, arguments).event(event).end();
    }).tween("zoom", function() {
      var that = this, args = arguments, g = gesture(that, args).event(event), e = extent.apply(that, args), p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform2 === "function" ? transform2.apply(that, args) : transform2, i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
      return function(t) {
        if (t === 1) t = b;
        else {
          var l = i(t), k = w / l[2];
          t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k);
        }
        g.zoom(null, t);
      };
    });
  }
  function gesture(that, args, clean) {
    return !clean && that.__zooming || new Gesture(that, args);
  }
  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }
  Gesture.prototype = {
    event: function(event) {
      if (event) this.sourceEvent = event;
      return this;
    },
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform2) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform2.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform2.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform2.invert(this.touch1[0]);
      this.that.__zoom = transform2;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      var d = select_default2(this.that).datum();
      listeners.call(
        type,
        this.that,
        new ZoomEvent(type, {
          sourceEvent: this.sourceEvent,
          target: zoom,
          type,
          transform: this.that.__zoom,
          dispatch: listeners
        }),
        d
      );
    }
  };
  function wheeled(event, ...args) {
    if (!filter3.apply(this, arguments)) return;
    var g = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta2.apply(this, arguments)))), p = pointer_default(event);
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    } else if (t.k === k) return;
    else {
      g.mouse = [p, t.invert(p)];
      interrupt_default(this);
      g.start();
    }
    noevent_default2(event);
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }
  function mousedowned(event, ...args) {
    if (touchending || !filter3.apply(this, arguments)) return;
    var currentTarget = event.currentTarget, g = gesture(this, args, true).event(event), v = select_default2(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = pointer_default(event, currentTarget), x0 = event.clientX, y0 = event.clientY;
    nodrag_default(event.view);
    nopropagation2(event);
    g.mouse = [p, this.__zoom.invert(p)];
    interrupt_default(this);
    g.start();
    function mousemoved(event2) {
      noevent_default2(event2);
      if (!g.moved) {
        var dx = event2.clientX - x0, dy = event2.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.event(event2).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer_default(event2, currentTarget), g.mouse[1]), g.extent, translateExtent));
    }
    function mouseupped(event2) {
      v.on("mousemove.zoom mouseup.zoom", null);
      yesdrag(event2.view, g.moved);
      noevent_default2(event2);
      g.event(event2).end();
    }
  }
  function dblclicked(event, ...args) {
    if (!filter3.apply(this, arguments)) return;
    var t0 = this.__zoom, p0 = pointer_default(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
    noevent_default2(event);
    if (duration > 0) select_default2(this).transition().duration(duration).call(schedule, t1, p0, event);
    else select_default2(this).call(zoom.transform, t1, p0, event);
  }
  function touchstarted(event, ...args) {
    if (!filter3.apply(this, arguments)) return;
    var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
    nopropagation2(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer_default(t, this);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
      else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
    }
    if (touchstarting) touchstarting = clearTimeout(touchstarting);
    if (started) {
      if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() {
        touchstarting = null;
      }, touchDelay);
      interrupt_default(this);
      g.start();
    }
  }
  function touchmoved(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
    noevent_default2(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer_default(t, this);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    } else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
    else return;
    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }
  function touchended(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
    nopropagation2(event);
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else {
      g.end();
      if (g.taps === 2) {
        t = pointer_default(t, this);
        if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
          var p = select_default2(this).on("dblclick.zoom");
          if (p) p.apply(this, arguments);
        }
      }
    }
  }
  zoom.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta2 = typeof _ === "function" ? _ : constant_default4(+_), zoom) : wheelDelta2;
  };
  zoom.filter = function(_) {
    return arguments.length ? (filter3 = typeof _ === "function" ? _ : constant_default4(!!_), zoom) : filter3;
  };
  zoom.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant_default4(!!_), zoom) : touchable;
  };
  zoom.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant_default4([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };
  zoom.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };
  zoom.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };
  zoom.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };
  zoom.duration = function(_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };
  zoom.interpolate = function(_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };
  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };
  zoom.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };
  zoom.tapDistance = function(_) {
    return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
  };
  return zoom;
}

// ../node_modules/.pnpm/@xyflow+system@0.0.46/node_modules/@xyflow/system/dist/esm/index.js
var errorMessages = {
  error001: () => "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",
  error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
  error003: (nodeType) => `Node type "${nodeType}" not found. Using fallback type "default".`,
  error004: () => "The React Flow parent container needs a width and a height to render the graph.",
  error005: () => "Only child nodes can use a parent extent.",
  error006: () => "Can't create edge. An edge needs a source and a target.",
  error007: (id2) => `The old edge with id=${id2} does not exist.`,
  error009: (type) => `Marker type "${type}" doesn't exist.`,
  error008: (handleType, { id: id2, sourceHandle, targetHandle }) => `Couldn't create edge for ${handleType} handle id: "${handleType === "source" ? sourceHandle : targetHandle}", edge id: ${id2}.`,
  error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
  error011: (edgeType) => `Edge type "${edgeType}" not found. Using fallback type "default".`,
  error012: (id2) => `Node with id "${id2}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
  error013: (lib = "react") => `It seems that you haven't loaded the styles. Please import '@xyflow/${lib}/dist/style.css' or base.css to make sure everything is working properly.`
};
var infiniteExtent = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var elementSelectionKeys = ["Enter", " ", "Escape"];
var ConnectionMode;
(function(ConnectionMode2) {
  ConnectionMode2["Strict"] = "strict";
  ConnectionMode2["Loose"] = "loose";
})(ConnectionMode || (ConnectionMode = {}));
var PanOnScrollMode;
(function(PanOnScrollMode2) {
  PanOnScrollMode2["Free"] = "free";
  PanOnScrollMode2["Vertical"] = "vertical";
  PanOnScrollMode2["Horizontal"] = "horizontal";
})(PanOnScrollMode || (PanOnScrollMode = {}));
var SelectionMode;
(function(SelectionMode2) {
  SelectionMode2["Partial"] = "partial";
  SelectionMode2["Full"] = "full";
})(SelectionMode || (SelectionMode = {}));
var initialConnection = {
  inProgress: false,
  isValid: null,
  from: null,
  fromHandle: null,
  fromPosition: null,
  fromNode: null,
  to: null,
  toHandle: null,
  toPosition: null,
  toNode: null
};
var ConnectionLineType;
(function(ConnectionLineType2) {
  ConnectionLineType2["Bezier"] = "default";
  ConnectionLineType2["Straight"] = "straight";
  ConnectionLineType2["Step"] = "step";
  ConnectionLineType2["SmoothStep"] = "smoothstep";
  ConnectionLineType2["SimpleBezier"] = "simplebezier";
})(ConnectionLineType || (ConnectionLineType = {}));
var MarkerType;
(function(MarkerType2) {
  MarkerType2["Arrow"] = "arrow";
  MarkerType2["ArrowClosed"] = "arrowclosed";
})(MarkerType || (MarkerType = {}));
var Position;
(function(Position2) {
  Position2["Left"] = "left";
  Position2["Top"] = "top";
  Position2["Right"] = "right";
  Position2["Bottom"] = "bottom";
})(Position || (Position = {}));
var oppositePosition = {
  [Position.Left]: Position.Right,
  [Position.Right]: Position.Left,
  [Position.Top]: Position.Bottom,
  [Position.Bottom]: Position.Top
};
function getConnectionStatus(isValid) {
  return isValid === null ? null : isValid ? "valid" : "invalid";
}
var isEdgeBase = (element) => "id" in element && "source" in element && "target" in element;
var isNodeBase = (element) => "id" in element && "position" in element && !("source" in element) && !("target" in element);
var isInternalNodeBase = (element) => "id" in element && "internals" in element && !("source" in element) && !("target" in element);
var getNodePositionWithOrigin = (node, nodeOrigin = [0, 0]) => {
  var _a;
  const { width, height } = getNodeDimensions(node);
  const origin = (_a = node.origin) != null ? _a : nodeOrigin;
  const offsetX = width * origin[0];
  const offsetY = height * origin[1];
  return {
    x: node.position.x - offsetX,
    y: node.position.y - offsetY
  };
};
var getNodesBounds = (nodes, params = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
  if (!params.nodeLookup) {
    console.warn("Please use `getNodesBounds` from `useReactFlow`/`useSvelteFlow` hook to ensure correct values for sub flows. If not possible, you have to provide a nodeLookup to support sub flows.");
  }
  if (nodes.length === 0) {
    return { x: 0, y: 0, width: 0, height: 0 };
  }
  const box = nodes.reduce((currBox, nodeOrId) => {
    const isId = typeof nodeOrId === "string";
    let currentNode = !params.nodeLookup && !isId ? nodeOrId : void 0;
    if (params.nodeLookup) {
      currentNode = isId ? params.nodeLookup.get(nodeOrId) : !isInternalNodeBase(nodeOrId) ? params.nodeLookup.get(nodeOrId.id) : nodeOrId;
    }
    const nodeBox = currentNode ? nodeToBox(currentNode, params.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return getBoundsOfBoxes(currBox, nodeBox);
  }, { x: Infinity, y: Infinity, x2: -Infinity, y2: -Infinity });
  return boxToRect(box);
};
var getInternalNodesBounds = (nodeLookup, params = {}) => {
  if (nodeLookup.size === 0) {
    return { x: 0, y: 0, width: 0, height: 0 };
  }
  let box = { x: Infinity, y: Infinity, x2: -Infinity, y2: -Infinity };
  nodeLookup.forEach((node) => {
    if (params.filter === void 0 || params.filter(node)) {
      const nodeBox = nodeToBox(node);
      box = getBoundsOfBoxes(box, nodeBox);
    }
  });
  return boxToRect(box);
};
var getNodesInside = (nodes, rect, [tx, ty, tScale] = [0, 0, 1], partially = false, excludeNonSelectableNodes = false) => {
  var _a, _b, _c, _d, _e, _f;
  const paneRect = {
    ...pointToRendererPoint(rect, [tx, ty, tScale]),
    width: rect.width / tScale,
    height: rect.height / tScale
  };
  const visibleNodes = [];
  for (const node of nodes.values()) {
    const { measured, selectable = true, hidden = false } = node;
    if (excludeNonSelectableNodes && !selectable || hidden) {
      continue;
    }
    const width = (_c = (_b = (_a = measured.width) != null ? _a : node.width) != null ? _b : node.initialWidth) != null ? _c : null;
    const height = (_f = (_e = (_d = measured.height) != null ? _d : node.height) != null ? _e : node.initialHeight) != null ? _f : null;
    const overlappingArea = getOverlappingArea(paneRect, nodeToRect(node));
    const area = (width != null ? width : 0) * (height != null ? height : 0);
    const partiallyVisible = partially && overlappingArea > 0;
    const forceInitialRender = !node.internals.handleBounds;
    const isVisible = forceInitialRender || partiallyVisible || overlappingArea >= area;
    if (isVisible || node.dragging) {
      visibleNodes.push(node);
    }
  }
  return visibleNodes;
};
var getConnectedEdges = (nodes, edges) => {
  const nodeIds = /* @__PURE__ */ new Set();
  nodes.forEach((node) => {
    nodeIds.add(node.id);
  });
  return edges.filter((edge) => nodeIds.has(edge.source) || nodeIds.has(edge.target));
};
function getFitViewNodes(nodeLookup, options) {
  const fitViewNodes = /* @__PURE__ */ new Map();
  const optionNodeIds = (options == null ? void 0 : options.nodes) ? new Set(options.nodes.map((node) => node.id)) : null;
  nodeLookup.forEach((n) => {
    const isVisible = n.measured.width && n.measured.height && ((options == null ? void 0 : options.includeHiddenNodes) || !n.hidden);
    if (isVisible && (!optionNodeIds || optionNodeIds.has(n.id))) {
      fitViewNodes.set(n.id, n);
    }
  });
  return fitViewNodes;
}
async function fitView({ nodes, width, height, panZoom, minZoom, maxZoom }, options) {
  var _a, _b, _c;
  if (nodes.size === 0) {
    return Promise.resolve(false);
  }
  const bounds = getInternalNodesBounds(nodes);
  const viewport = getViewportForBounds(bounds, width, height, (_a = options == null ? void 0 : options.minZoom) != null ? _a : minZoom, (_b = options == null ? void 0 : options.maxZoom) != null ? _b : maxZoom, (_c = options == null ? void 0 : options.padding) != null ? _c : 0.1);
  await panZoom.setViewport(viewport, { duration: options == null ? void 0 : options.duration });
  return Promise.resolve(true);
}
function calculateNodePosition({ nodeId, nextPosition, nodeLookup, nodeOrigin = [0, 0], nodeExtent, onError }) {
  var _a;
  const node = nodeLookup.get(nodeId);
  const parentNode = node.parentId ? nodeLookup.get(node.parentId) : void 0;
  const { x: parentX, y: parentY } = parentNode ? parentNode.internals.positionAbsolute : { x: 0, y: 0 };
  const origin = (_a = node.origin) != null ? _a : nodeOrigin;
  let extent = nodeExtent;
  if (node.extent === "parent" && !node.expandParent) {
    if (!parentNode) {
      onError == null ? void 0 : onError("005", errorMessages["error005"]());
    } else {
      const parentWidth = parentNode.measured.width;
      const parentHeight = parentNode.measured.height;
      if (parentWidth && parentHeight) {
        extent = [
          [parentX, parentY],
          [parentX + parentWidth, parentY + parentHeight]
        ];
      }
    }
  } else if (parentNode && isCoordinateExtent(node.extent)) {
    extent = [
      [node.extent[0][0] + parentX, node.extent[0][1] + parentY],
      [node.extent[1][0] + parentX, node.extent[1][1] + parentY]
    ];
  }
  const positionAbsolute = isCoordinateExtent(extent) ? clampPosition(nextPosition, extent, node.measured) : nextPosition;
  return {
    position: {
      x: positionAbsolute.x - parentX + node.measured.width * origin[0],
      y: positionAbsolute.y - parentY + node.measured.height * origin[1]
    },
    positionAbsolute
  };
}
async function getElementsToRemove({ nodesToRemove = [], edgesToRemove = [], nodes, edges, onBeforeDelete }) {
  const nodeIds = new Set(nodesToRemove.map((node) => node.id));
  const matchingNodes = [];
  for (const node of nodes) {
    if (node.deletable === false) {
      continue;
    }
    const isIncluded = nodeIds.has(node.id);
    const parentHit = !isIncluded && node.parentId && matchingNodes.find((n) => n.id === node.parentId);
    if (isIncluded || parentHit) {
      matchingNodes.push(node);
    }
  }
  const edgeIds = new Set(edgesToRemove.map((edge) => edge.id));
  const deletableEdges = edges.filter((edge) => edge.deletable !== false);
  const connectedEdges = getConnectedEdges(matchingNodes, deletableEdges);
  const matchingEdges = connectedEdges;
  for (const edge of deletableEdges) {
    const isIncluded = edgeIds.has(edge.id);
    if (isIncluded && !matchingEdges.find((e) => e.id === edge.id)) {
      matchingEdges.push(edge);
    }
  }
  if (!onBeforeDelete) {
    return {
      edges: matchingEdges,
      nodes: matchingNodes
    };
  }
  const onBeforeDeleteResult = await onBeforeDelete({
    nodes: matchingNodes,
    edges: matchingEdges
  });
  if (typeof onBeforeDeleteResult === "boolean") {
    return onBeforeDeleteResult ? { edges: matchingEdges, nodes: matchingNodes } : { edges: [], nodes: [] };
  }
  return onBeforeDeleteResult;
}
var clamp = (val, min = 0, max = 1) => Math.min(Math.max(val, min), max);
var clampPosition = (position = { x: 0, y: 0 }, extent, dimensions) => {
  var _a, _b;
  return {
    x: clamp(position.x, extent[0][0], extent[1][0] - ((_a = dimensions == null ? void 0 : dimensions.width) != null ? _a : 0)),
    y: clamp(position.y, extent[0][1], extent[1][1] - ((_b = dimensions == null ? void 0 : dimensions.height) != null ? _b : 0))
  };
};
function clampPositionToParent(childPosition, childDimensions, parent) {
  const { width: parentWidth, height: parentHeight } = getNodeDimensions(parent);
  const { x: parentX, y: parentY } = parent.internals.positionAbsolute;
  return clampPosition(childPosition, [
    [parentX, parentY],
    [parentX + parentWidth, parentY + parentHeight]
  ], childDimensions);
}
var calcAutoPanVelocity = (value, min, max) => {
  if (value < min) {
    return clamp(Math.abs(value - min), 1, min) / min;
  } else if (value > max) {
    return -clamp(Math.abs(value - max), 1, min) / min;
  }
  return 0;
};
var calcAutoPan = (pos, bounds, speed = 15, distance2 = 40) => {
  const xMovement = calcAutoPanVelocity(pos.x, distance2, bounds.width - distance2) * speed;
  const yMovement = calcAutoPanVelocity(pos.y, distance2, bounds.height - distance2) * speed;
  return [xMovement, yMovement];
};
var getBoundsOfBoxes = (box1, box2) => ({
  x: Math.min(box1.x, box2.x),
  y: Math.min(box1.y, box2.y),
  x2: Math.max(box1.x2, box2.x2),
  y2: Math.max(box1.y2, box2.y2)
});
var rectToBox = ({ x, y, width, height }) => ({
  x,
  y,
  x2: x + width,
  y2: y + height
});
var boxToRect = ({ x, y, x2, y2 }) => ({
  x,
  y,
  width: x2 - x,
  height: y2 - y
});
var nodeToRect = (node, nodeOrigin = [0, 0]) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const { x, y } = isInternalNodeBase(node) ? node.internals.positionAbsolute : getNodePositionWithOrigin(node, nodeOrigin);
  return {
    x,
    y,
    width: (_d = (_c = (_b = (_a = node.measured) == null ? void 0 : _a.width) != null ? _b : node.width) != null ? _c : node.initialWidth) != null ? _d : 0,
    height: (_h = (_g = (_f = (_e = node.measured) == null ? void 0 : _e.height) != null ? _f : node.height) != null ? _g : node.initialHeight) != null ? _h : 0
  };
};
var nodeToBox = (node, nodeOrigin = [0, 0]) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const { x, y } = isInternalNodeBase(node) ? node.internals.positionAbsolute : getNodePositionWithOrigin(node, nodeOrigin);
  return {
    x,
    y,
    x2: x + ((_d = (_c = (_b = (_a = node.measured) == null ? void 0 : _a.width) != null ? _b : node.width) != null ? _c : node.initialWidth) != null ? _d : 0),
    y2: y + ((_h = (_g = (_f = (_e = node.measured) == null ? void 0 : _e.height) != null ? _f : node.height) != null ? _g : node.initialHeight) != null ? _h : 0)
  };
};
var getBoundsOfRects = (rect1, rect2) => boxToRect(getBoundsOfBoxes(rectToBox(rect1), rectToBox(rect2)));
var getOverlappingArea = (rectA, rectB) => {
  const xOverlap = Math.max(0, Math.min(rectA.x + rectA.width, rectB.x + rectB.width) - Math.max(rectA.x, rectB.x));
  const yOverlap = Math.max(0, Math.min(rectA.y + rectA.height, rectB.y + rectB.height) - Math.max(rectA.y, rectB.y));
  return Math.ceil(xOverlap * yOverlap);
};
var isRectObject = (obj) => isNumeric(obj.width) && isNumeric(obj.height) && isNumeric(obj.x) && isNumeric(obj.y);
var isNumeric = (n) => !isNaN(n) && isFinite(n);
var devWarn = (id2, message) => {
  if (true) {
    console.warn(`[React Flow]: ${message} Help: https://reactflow.dev/error#${id2}`);
  }
};
var snapPosition = (position, snapGrid = [1, 1]) => {
  return {
    x: snapGrid[0] * Math.round(position.x / snapGrid[0]),
    y: snapGrid[1] * Math.round(position.y / snapGrid[1])
  };
};
var pointToRendererPoint = ({ x, y }, [tx, ty, tScale], snapToGrid = false, snapGrid = [1, 1]) => {
  const position = {
    x: (x - tx) / tScale,
    y: (y - ty) / tScale
  };
  return snapToGrid ? snapPosition(position, snapGrid) : position;
};
var rendererPointToPoint = ({ x, y }, [tx, ty, tScale]) => {
  return {
    x: x * tScale + tx,
    y: y * tScale + ty
  };
};
var getViewportForBounds = (bounds, width, height, minZoom, maxZoom, padding) => {
  const xZoom = width / (bounds.width * (1 + padding));
  const yZoom = height / (bounds.height * (1 + padding));
  const zoom = Math.min(xZoom, yZoom);
  const clampedZoom = clamp(zoom, minZoom, maxZoom);
  const boundsCenterX = bounds.x + bounds.width / 2;
  const boundsCenterY = bounds.y + bounds.height / 2;
  const x = width / 2 - boundsCenterX * clampedZoom;
  const y = height / 2 - boundsCenterY * clampedZoom;
  return { x, y, zoom: clampedZoom };
};
var isMacOs = () => {
  var _a;
  return typeof navigator !== "undefined" && ((_a = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : _a.indexOf("Mac")) >= 0;
};
function isCoordinateExtent(extent) {
  return extent !== void 0 && extent !== "parent";
}
function getNodeDimensions(node) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  return {
    width: (_d = (_c = (_b = (_a = node.measured) == null ? void 0 : _a.width) != null ? _b : node.width) != null ? _c : node.initialWidth) != null ? _d : 0,
    height: (_h = (_g = (_f = (_e = node.measured) == null ? void 0 : _e.height) != null ? _f : node.height) != null ? _g : node.initialHeight) != null ? _h : 0
  };
}
function nodeHasDimensions(node) {
  var _a, _b, _c, _d, _e, _f;
  return ((_c = (_b = (_a = node.measured) == null ? void 0 : _a.width) != null ? _b : node.width) != null ? _c : node.initialWidth) !== void 0 && ((_f = (_e = (_d = node.measured) == null ? void 0 : _d.height) != null ? _e : node.height) != null ? _f : node.initialHeight) !== void 0;
}
function evaluateAbsolutePosition(position, dimensions = { width: 0, height: 0 }, parentId, nodeLookup, nodeOrigin) {
  var _a, _b;
  const positionAbsolute = { ...position };
  const parent = nodeLookup.get(parentId);
  if (parent) {
    const origin = parent.origin || nodeOrigin;
    positionAbsolute.x += parent.internals.positionAbsolute.x - ((_a = dimensions.width) != null ? _a : 0) * origin[0];
    positionAbsolute.y += parent.internals.positionAbsolute.y - ((_b = dimensions.height) != null ? _b : 0) * origin[1];
  }
  return positionAbsolute;
}
function getPointerPosition(event, { snapGrid = [0, 0], snapToGrid = false, transform: transform2, containerBounds }) {
  var _a, _b;
  const { x, y } = getEventPosition(event);
  const pointerPos = pointToRendererPoint({ x: x - ((_a = containerBounds == null ? void 0 : containerBounds.left) != null ? _a : 0), y: y - ((_b = containerBounds == null ? void 0 : containerBounds.top) != null ? _b : 0) }, transform2);
  const { x: xSnapped, y: ySnapped } = snapToGrid ? snapPosition(pointerPos, snapGrid) : pointerPos;
  return {
    xSnapped,
    ySnapped,
    ...pointerPos
  };
}
var getDimensions = (node) => ({
  width: node.offsetWidth,
  height: node.offsetHeight
});
var getHostForElement = (element) => {
  var _a;
  return ((_a = element.getRootNode) == null ? void 0 : _a.call(element)) || (window == null ? void 0 : window.document);
};
var inputTags = ["INPUT", "SELECT", "TEXTAREA"];
function isInputDOMNode(event) {
  var _a, _b;
  const target = ((_b = (_a = event.composedPath) == null ? void 0 : _a.call(event)) == null ? void 0 : _b[0]) || event.target;
  const isInput = inputTags.includes(target == null ? void 0 : target.nodeName) || (target == null ? void 0 : target.hasAttribute("contenteditable"));
  return isInput || !!(target == null ? void 0 : target.closest(".nokey"));
}
var isMouseEvent = (event) => "clientX" in event;
var getEventPosition = (event, bounds) => {
  var _a, _b, _c, _d;
  const isMouse = isMouseEvent(event);
  const evtX = isMouse ? event.clientX : (_a = event.touches) == null ? void 0 : _a[0].clientX;
  const evtY = isMouse ? event.clientY : (_b = event.touches) == null ? void 0 : _b[0].clientY;
  return {
    x: evtX - ((_c = bounds == null ? void 0 : bounds.left) != null ? _c : 0),
    y: evtY - ((_d = bounds == null ? void 0 : bounds.top) != null ? _d : 0)
  };
};
var getHandleBounds = (type, nodeElement, nodeBounds, zoom, nodeId) => {
  const handles = nodeElement.querySelectorAll(`.${type}`);
  if (!handles || !handles.length) {
    return null;
  }
  return Array.from(handles).map((handle) => {
    const handleBounds = handle.getBoundingClientRect();
    return {
      id: handle.getAttribute("data-handleid"),
      type,
      nodeId,
      position: handle.getAttribute("data-handlepos"),
      x: (handleBounds.left - nodeBounds.left) / zoom,
      y: (handleBounds.top - nodeBounds.top) / zoom,
      ...getDimensions(handle)
    };
  });
};
function getBezierEdgeCenter({ sourceX, sourceY, targetX, targetY, sourceControlX, sourceControlY, targetControlX, targetControlY }) {
  const centerX = sourceX * 0.125 + sourceControlX * 0.375 + targetControlX * 0.375 + targetX * 0.125;
  const centerY = sourceY * 0.125 + sourceControlY * 0.375 + targetControlY * 0.375 + targetY * 0.125;
  const offsetX = Math.abs(centerX - sourceX);
  const offsetY = Math.abs(centerY - sourceY);
  return [centerX, centerY, offsetX, offsetY];
}
function calculateControlOffset(distance2, curvature) {
  if (distance2 >= 0) {
    return 0.5 * distance2;
  }
  return curvature * 25 * Math.sqrt(-distance2);
}
function getControlWithCurvature({ pos, x1, y1, x2, y2, c }) {
  switch (pos) {
    case Position.Left:
      return [x1 - calculateControlOffset(x1 - x2, c), y1];
    case Position.Right:
      return [x1 + calculateControlOffset(x2 - x1, c), y1];
    case Position.Top:
      return [x1, y1 - calculateControlOffset(y1 - y2, c)];
    case Position.Bottom:
      return [x1, y1 + calculateControlOffset(y2 - y1, c)];
  }
}
function getBezierPath({ sourceX, sourceY, sourcePosition = Position.Bottom, targetX, targetY, targetPosition = Position.Top, curvature = 0.25 }) {
  const [sourceControlX, sourceControlY] = getControlWithCurvature({
    pos: sourcePosition,
    x1: sourceX,
    y1: sourceY,
    x2: targetX,
    y2: targetY,
    c: curvature
  });
  const [targetControlX, targetControlY] = getControlWithCurvature({
    pos: targetPosition,
    x1: targetX,
    y1: targetY,
    x2: sourceX,
    y2: sourceY,
    c: curvature
  });
  const [labelX, labelY, offsetX, offsetY] = getBezierEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourceControlX,
    sourceControlY,
    targetControlX,
    targetControlY
  });
  return [
    `M${sourceX},${sourceY} C${sourceControlX},${sourceControlY} ${targetControlX},${targetControlY} ${targetX},${targetY}`,
    labelX,
    labelY,
    offsetX,
    offsetY
  ];
}
function getEdgeCenter({ sourceX, sourceY, targetX, targetY }) {
  const xOffset = Math.abs(targetX - sourceX) / 2;
  const centerX = targetX < sourceX ? targetX + xOffset : targetX - xOffset;
  const yOffset = Math.abs(targetY - sourceY) / 2;
  const centerY = targetY < sourceY ? targetY + yOffset : targetY - yOffset;
  return [centerX, centerY, xOffset, yOffset];
}
function getElevatedEdgeZIndex({ sourceNode, targetNode, selected: selected2 = false, zIndex = 0, elevateOnSelect = false }) {
  if (!elevateOnSelect) {
    return zIndex;
  }
  const edgeOrConnectedNodeSelected = selected2 || targetNode.selected || sourceNode.selected;
  const selectedZIndex = Math.max(sourceNode.internals.z || 0, targetNode.internals.z || 0, 1e3);
  return zIndex + (edgeOrConnectedNodeSelected ? selectedZIndex : 0);
}
function isEdgeVisible({ sourceNode, targetNode, width, height, transform: transform2 }) {
  const edgeBox = getBoundsOfBoxes(nodeToBox(sourceNode), nodeToBox(targetNode));
  if (edgeBox.x === edgeBox.x2) {
    edgeBox.x2 += 1;
  }
  if (edgeBox.y === edgeBox.y2) {
    edgeBox.y2 += 1;
  }
  const viewRect = {
    x: -transform2[0] / transform2[2],
    y: -transform2[1] / transform2[2],
    width: width / transform2[2],
    height: height / transform2[2]
  };
  return getOverlappingArea(viewRect, boxToRect(edgeBox)) > 0;
}
var getEdgeId = ({ source, sourceHandle, target, targetHandle }) => `xy-edge__${source}${sourceHandle || ""}-${target}${targetHandle || ""}`;
var connectionExists = (edge, edges) => {
  return edges.some((el) => el.source === edge.source && el.target === edge.target && (el.sourceHandle === edge.sourceHandle || !el.sourceHandle && !edge.sourceHandle) && (el.targetHandle === edge.targetHandle || !el.targetHandle && !edge.targetHandle));
};
var addEdge = (edgeParams, edges) => {
  if (!edgeParams.source || !edgeParams.target) {
    devWarn("006", errorMessages["error006"]());
    return edges;
  }
  let edge;
  if (isEdgeBase(edgeParams)) {
    edge = { ...edgeParams };
  } else {
    edge = {
      ...edgeParams,
      id: getEdgeId(edgeParams)
    };
  }
  if (connectionExists(edge, edges)) {
    return edges;
  }
  if (edge.sourceHandle === null) {
    delete edge.sourceHandle;
  }
  if (edge.targetHandle === null) {
    delete edge.targetHandle;
  }
  return edges.concat(edge);
};
function getStraightPath({ sourceX, sourceY, targetX, targetY }) {
  const [labelX, labelY, offsetX, offsetY] = getEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY
  });
  return [`M ${sourceX},${sourceY}L ${targetX},${targetY}`, labelX, labelY, offsetX, offsetY];
}
var handleDirections = {
  [Position.Left]: { x: -1, y: 0 },
  [Position.Right]: { x: 1, y: 0 },
  [Position.Top]: { x: 0, y: -1 },
  [Position.Bottom]: { x: 0, y: 1 }
};
var getDirection = ({ source, sourcePosition = Position.Bottom, target }) => {
  if (sourcePosition === Position.Left || sourcePosition === Position.Right) {
    return source.x < target.x ? { x: 1, y: 0 } : { x: -1, y: 0 };
  }
  return source.y < target.y ? { x: 0, y: 1 } : { x: 0, y: -1 };
};
var distance = (a, b) => Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
function getPoints({ source, sourcePosition = Position.Bottom, target, targetPosition = Position.Top, center, offset: offset2 }) {
  var _a, _b;
  const sourceDir = handleDirections[sourcePosition];
  const targetDir = handleDirections[targetPosition];
  const sourceGapped = { x: source.x + sourceDir.x * offset2, y: source.y + sourceDir.y * offset2 };
  const targetGapped = { x: target.x + targetDir.x * offset2, y: target.y + targetDir.y * offset2 };
  const dir = getDirection({
    source: sourceGapped,
    sourcePosition,
    target: targetGapped
  });
  const dirAccessor = dir.x !== 0 ? "x" : "y";
  const currDir = dir[dirAccessor];
  let points = [];
  let centerX, centerY;
  const sourceGapOffset = { x: 0, y: 0 };
  const targetGapOffset = { x: 0, y: 0 };
  const [defaultCenterX, defaultCenterY, defaultOffsetX, defaultOffsetY] = getEdgeCenter({
    sourceX: source.x,
    sourceY: source.y,
    targetX: target.x,
    targetY: target.y
  });
  if (sourceDir[dirAccessor] * targetDir[dirAccessor] === -1) {
    centerX = (_a = center.x) != null ? _a : defaultCenterX;
    centerY = (_b = center.y) != null ? _b : defaultCenterY;
    const verticalSplit = [
      { x: centerX, y: sourceGapped.y },
      { x: centerX, y: targetGapped.y }
    ];
    const horizontalSplit = [
      { x: sourceGapped.x, y: centerY },
      { x: targetGapped.x, y: centerY }
    ];
    if (sourceDir[dirAccessor] === currDir) {
      points = dirAccessor === "x" ? verticalSplit : horizontalSplit;
    } else {
      points = dirAccessor === "x" ? horizontalSplit : verticalSplit;
    }
  } else {
    const sourceTarget = [{ x: sourceGapped.x, y: targetGapped.y }];
    const targetSource = [{ x: targetGapped.x, y: sourceGapped.y }];
    if (dirAccessor === "x") {
      points = sourceDir.x === currDir ? targetSource : sourceTarget;
    } else {
      points = sourceDir.y === currDir ? sourceTarget : targetSource;
    }
    if (sourcePosition === targetPosition) {
      const diff = Math.abs(source[dirAccessor] - target[dirAccessor]);
      if (diff <= offset2) {
        const gapOffset = Math.min(offset2 - 1, offset2 - diff);
        if (sourceDir[dirAccessor] === currDir) {
          sourceGapOffset[dirAccessor] = (sourceGapped[dirAccessor] > source[dirAccessor] ? -1 : 1) * gapOffset;
        } else {
          targetGapOffset[dirAccessor] = (targetGapped[dirAccessor] > target[dirAccessor] ? -1 : 1) * gapOffset;
        }
      }
    }
    if (sourcePosition !== targetPosition) {
      const dirAccessorOpposite = dirAccessor === "x" ? "y" : "x";
      const isSameDir = sourceDir[dirAccessor] === targetDir[dirAccessorOpposite];
      const sourceGtTargetOppo = sourceGapped[dirAccessorOpposite] > targetGapped[dirAccessorOpposite];
      const sourceLtTargetOppo = sourceGapped[dirAccessorOpposite] < targetGapped[dirAccessorOpposite];
      const flipSourceTarget = sourceDir[dirAccessor] === 1 && (!isSameDir && sourceGtTargetOppo || isSameDir && sourceLtTargetOppo) || sourceDir[dirAccessor] !== 1 && (!isSameDir && sourceLtTargetOppo || isSameDir && sourceGtTargetOppo);
      if (flipSourceTarget) {
        points = dirAccessor === "x" ? sourceTarget : targetSource;
      }
    }
    const sourceGapPoint = { x: sourceGapped.x + sourceGapOffset.x, y: sourceGapped.y + sourceGapOffset.y };
    const targetGapPoint = { x: targetGapped.x + targetGapOffset.x, y: targetGapped.y + targetGapOffset.y };
    const maxXDistance = Math.max(Math.abs(sourceGapPoint.x - points[0].x), Math.abs(targetGapPoint.x - points[0].x));
    const maxYDistance = Math.max(Math.abs(sourceGapPoint.y - points[0].y), Math.abs(targetGapPoint.y - points[0].y));
    if (maxXDistance >= maxYDistance) {
      centerX = (sourceGapPoint.x + targetGapPoint.x) / 2;
      centerY = points[0].y;
    } else {
      centerX = points[0].x;
      centerY = (sourceGapPoint.y + targetGapPoint.y) / 2;
    }
  }
  const pathPoints = [
    source,
    { x: sourceGapped.x + sourceGapOffset.x, y: sourceGapped.y + sourceGapOffset.y },
    ...points,
    { x: targetGapped.x + targetGapOffset.x, y: targetGapped.y + targetGapOffset.y },
    target
  ];
  return [pathPoints, centerX, centerY, defaultOffsetX, defaultOffsetY];
}
function getBend(a, b, c, size) {
  const bendSize = Math.min(distance(a, b) / 2, distance(b, c) / 2, size);
  const { x, y } = b;
  if (a.x === x && x === c.x || a.y === y && y === c.y) {
    return `L${x} ${y}`;
  }
  if (a.y === y) {
    const xDir2 = a.x < c.x ? -1 : 1;
    const yDir2 = a.y < c.y ? 1 : -1;
    return `L ${x + bendSize * xDir2},${y}Q ${x},${y} ${x},${y + bendSize * yDir2}`;
  }
  const xDir = a.x < c.x ? 1 : -1;
  const yDir = a.y < c.y ? -1 : 1;
  return `L ${x},${y + bendSize * yDir}Q ${x},${y} ${x + bendSize * xDir},${y}`;
}
function getSmoothStepPath({ sourceX, sourceY, sourcePosition = Position.Bottom, targetX, targetY, targetPosition = Position.Top, borderRadius = 5, centerX, centerY, offset: offset2 = 20 }) {
  const [points, labelX, labelY, offsetX, offsetY] = getPoints({
    source: { x: sourceX, y: sourceY },
    sourcePosition,
    target: { x: targetX, y: targetY },
    targetPosition,
    center: { x: centerX, y: centerY },
    offset: offset2
  });
  const path = points.reduce((res, p, i) => {
    let segment = "";
    if (i > 0 && i < points.length - 1) {
      segment = getBend(points[i - 1], p, points[i + 1], borderRadius);
    } else {
      segment = `${i === 0 ? "M" : "L"}${p.x} ${p.y}`;
    }
    res += segment;
    return res;
  }, "");
  return [path, labelX, labelY, offsetX, offsetY];
}
function isNodeInitialized(node) {
  var _a;
  return node && !!(node.internals.handleBounds || ((_a = node.handles) == null ? void 0 : _a.length)) && !!(node.measured.width || node.width || node.initialWidth);
}
function getEdgePosition(params) {
  var _a, _b, _c, _d, _e;
  const { sourceNode, targetNode } = params;
  if (!isNodeInitialized(sourceNode) || !isNodeInitialized(targetNode)) {
    return null;
  }
  const sourceHandleBounds = sourceNode.internals.handleBounds || toHandleBounds(sourceNode.handles);
  const targetHandleBounds = targetNode.internals.handleBounds || toHandleBounds(targetNode.handles);
  const sourceHandle = getHandle$1((_a = sourceHandleBounds == null ? void 0 : sourceHandleBounds.source) != null ? _a : [], params.sourceHandle);
  const targetHandle = getHandle$1(
    // when connection type is loose we can define all handles as sources and connect source -> source
    params.connectionMode === ConnectionMode.Strict ? (_b = targetHandleBounds == null ? void 0 : targetHandleBounds.target) != null ? _b : [] : ((_c = targetHandleBounds == null ? void 0 : targetHandleBounds.target) != null ? _c : []).concat((_d = targetHandleBounds == null ? void 0 : targetHandleBounds.source) != null ? _d : []),
    params.targetHandle
  );
  if (!sourceHandle || !targetHandle) {
    (_e = params.onError) == null ? void 0 : _e.call(params, "008", errorMessages["error008"](!sourceHandle ? "source" : "target", {
      id: params.id,
      sourceHandle: params.sourceHandle,
      targetHandle: params.targetHandle
    }));
    return null;
  }
  const sourcePosition = (sourceHandle == null ? void 0 : sourceHandle.position) || Position.Bottom;
  const targetPosition = (targetHandle == null ? void 0 : targetHandle.position) || Position.Top;
  const source = getHandlePosition(sourceNode, sourceHandle, sourcePosition);
  const target = getHandlePosition(targetNode, targetHandle, targetPosition);
  return {
    sourceX: source.x,
    sourceY: source.y,
    targetX: target.x,
    targetY: target.y,
    sourcePosition,
    targetPosition
  };
}
function toHandleBounds(handles) {
  var _a, _b;
  if (!handles) {
    return null;
  }
  const source = [];
  const target = [];
  for (const handle of handles) {
    handle.width = (_a = handle.width) != null ? _a : 1;
    handle.height = (_b = handle.height) != null ? _b : 1;
    if (handle.type === "source") {
      source.push(handle);
    } else if (handle.type === "target") {
      target.push(handle);
    }
  }
  return {
    source,
    target
  };
}
function getHandlePosition(node, handle, fallbackPosition = Position.Left, center = false) {
  var _a, _b, _c;
  const x = ((_a = handle == null ? void 0 : handle.x) != null ? _a : 0) + node.internals.positionAbsolute.x;
  const y = ((_b = handle == null ? void 0 : handle.y) != null ? _b : 0) + node.internals.positionAbsolute.y;
  const { width, height } = handle != null ? handle : getNodeDimensions(node);
  if (center) {
    return { x: x + width / 2, y: y + height / 2 };
  }
  const position = (_c = handle == null ? void 0 : handle.position) != null ? _c : fallbackPosition;
  switch (position) {
    case Position.Top:
      return { x: x + width / 2, y };
    case Position.Right:
      return { x: x + width, y: y + height / 2 };
    case Position.Bottom:
      return { x: x + width / 2, y: y + height };
    case Position.Left:
      return { x, y: y + height / 2 };
  }
}
function getHandle$1(bounds, handleId) {
  if (!bounds) {
    return null;
  }
  return (!handleId ? bounds[0] : bounds.find((d) => d.id === handleId)) || null;
}
function getMarkerId(marker, id2) {
  if (!marker) {
    return "";
  }
  if (typeof marker === "string") {
    return marker;
  }
  const idPrefix = id2 ? `${id2}__` : "";
  return `${idPrefix}${Object.keys(marker).sort().map((key) => `${key}=${marker[key]}`).join("&")}`;
}
function createMarkerIds(edges, { id: id2, defaultColor, defaultMarkerStart, defaultMarkerEnd }) {
  const ids = /* @__PURE__ */ new Set();
  return edges.reduce((markers, edge) => {
    [edge.markerStart || defaultMarkerStart, edge.markerEnd || defaultMarkerEnd].forEach((marker) => {
      if (marker && typeof marker === "object") {
        const markerId = getMarkerId(marker, id2);
        if (!ids.has(markerId)) {
          markers.push({ id: markerId, color: marker.color || defaultColor, ...marker });
          ids.add(markerId);
        }
      }
    });
    return markers;
  }, []).sort((a, b) => a.id.localeCompare(b.id));
}
var defaultOptions = {
  nodeOrigin: [0, 0],
  nodeExtent: infiniteExtent,
  elevateNodesOnSelect: true,
  defaults: {}
};
var adoptUserNodesDefaultOptions = {
  ...defaultOptions,
  checkEquality: true
};
function mergeObjects(base, incoming) {
  const result = { ...base };
  for (const key in incoming) {
    if (incoming[key] !== void 0) {
      result[key] = incoming[key];
    }
  }
  return result;
}
function updateAbsolutePositions(nodeLookup, parentLookup, options) {
  const _options = mergeObjects(defaultOptions, options);
  for (const node of nodeLookup.values()) {
    if (node.parentId) {
      updateChildNode(node, nodeLookup, parentLookup, _options);
    } else {
      const positionWithOrigin = getNodePositionWithOrigin(node, _options.nodeOrigin);
      const extent = isCoordinateExtent(node.extent) ? node.extent : _options.nodeExtent;
      const clampedPosition = clampPosition(positionWithOrigin, extent, getNodeDimensions(node));
      node.internals.positionAbsolute = clampedPosition;
    }
  }
}
function adoptUserNodes(nodes, nodeLookup, parentLookup, options) {
  var _a, _b;
  const _options = mergeObjects(adoptUserNodesDefaultOptions, options);
  const tmpLookup = new Map(nodeLookup);
  const selectedNodeZ = (_options == null ? void 0 : _options.elevateNodesOnSelect) ? 1e3 : 0;
  nodeLookup.clear();
  parentLookup.clear();
  for (const userNode of nodes) {
    let internalNode = tmpLookup.get(userNode.id);
    if (_options.checkEquality && userNode === (internalNode == null ? void 0 : internalNode.internals.userNode)) {
      nodeLookup.set(userNode.id, internalNode);
    } else {
      const positionWithOrigin = getNodePositionWithOrigin(userNode, _options.nodeOrigin);
      const extent = isCoordinateExtent(userNode.extent) ? userNode.extent : _options.nodeExtent;
      const clampedPosition = clampPosition(positionWithOrigin, extent, getNodeDimensions(userNode));
      internalNode = {
        ..._options.defaults,
        ...userNode,
        measured: {
          width: (_a = userNode.measured) == null ? void 0 : _a.width,
          height: (_b = userNode.measured) == null ? void 0 : _b.height
        },
        internals: {
          positionAbsolute: clampedPosition,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: !userNode.measured ? void 0 : internalNode == null ? void 0 : internalNode.internals.handleBounds,
          z: calculateZ(userNode, selectedNodeZ),
          userNode
        }
      };
      nodeLookup.set(userNode.id, internalNode);
    }
    if (userNode.parentId) {
      updateChildNode(internalNode, nodeLookup, parentLookup, options);
    }
  }
}
function updateParentLookup(node, parentLookup) {
  if (!node.parentId) {
    return;
  }
  const childNodes = parentLookup.get(node.parentId);
  if (childNodes) {
    childNodes.set(node.id, node);
  } else {
    parentLookup.set(node.parentId, /* @__PURE__ */ new Map([[node.id, node]]));
  }
}
function updateChildNode(node, nodeLookup, parentLookup, options) {
  const { elevateNodesOnSelect, nodeOrigin, nodeExtent } = mergeObjects(defaultOptions, options);
  const parentId = node.parentId;
  const parentNode = nodeLookup.get(parentId);
  if (!parentNode) {
    console.warn(`Parent node ${parentId} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  updateParentLookup(node, parentLookup);
  const selectedNodeZ = elevateNodesOnSelect ? 1e3 : 0;
  const { x, y, z } = calculateChildXYZ(node, parentNode, nodeOrigin, nodeExtent, selectedNodeZ);
  const { positionAbsolute } = node.internals;
  const positionChanged = x !== positionAbsolute.x || y !== positionAbsolute.y;
  if (positionChanged || z !== node.internals.z) {
    node.internals = {
      ...node.internals,
      positionAbsolute: positionChanged ? { x, y } : positionAbsolute,
      z
    };
  }
}
function calculateZ(node, selectedNodeZ) {
  return (isNumeric(node.zIndex) ? node.zIndex : 0) + (node.selected ? selectedNodeZ : 0);
}
function calculateChildXYZ(childNode, parentNode, nodeOrigin, nodeExtent, selectedNodeZ) {
  var _a;
  const { x: parentX, y: parentY } = parentNode.internals.positionAbsolute;
  const childDimensions = getNodeDimensions(childNode);
  const positionWithOrigin = getNodePositionWithOrigin(childNode, nodeOrigin);
  const clampedPosition = isCoordinateExtent(childNode.extent) ? clampPosition(positionWithOrigin, childNode.extent, childDimensions) : positionWithOrigin;
  let absolutePosition = clampPosition({ x: parentX + clampedPosition.x, y: parentY + clampedPosition.y }, nodeExtent, childDimensions);
  if (childNode.extent === "parent") {
    absolutePosition = clampPositionToParent(absolutePosition, childDimensions, parentNode);
  }
  const childZ = calculateZ(childNode, selectedNodeZ);
  const parentZ = (_a = parentNode.internals.z) != null ? _a : 0;
  return {
    x: absolutePosition.x,
    y: absolutePosition.y,
    z: parentZ > childZ ? parentZ : childZ
  };
}
function handleExpandParent(children2, nodeLookup, parentLookup, nodeOrigin = [0, 0]) {
  var _a, _b;
  const changes = [];
  const parentExpansions = /* @__PURE__ */ new Map();
  for (const child of children2) {
    const parent = nodeLookup.get(child.parentId);
    if (!parent) {
      continue;
    }
    const parentRect = (_b = (_a = parentExpansions.get(child.parentId)) == null ? void 0 : _a.expandedRect) != null ? _b : nodeToRect(parent);
    const expandedRect = getBoundsOfRects(parentRect, child.rect);
    parentExpansions.set(child.parentId, { expandedRect, parent });
  }
  if (parentExpansions.size > 0) {
    parentExpansions.forEach(({ expandedRect, parent }, parentId) => {
      var _a2, _b2;
      const positionAbsolute = parent.internals.positionAbsolute;
      const dimensions = getNodeDimensions(parent);
      const origin = (_a2 = parent.origin) != null ? _a2 : nodeOrigin;
      const xChange = expandedRect.x < positionAbsolute.x ? Math.round(Math.abs(positionAbsolute.x - expandedRect.x)) : 0;
      const yChange = expandedRect.y < positionAbsolute.y ? Math.round(Math.abs(positionAbsolute.y - expandedRect.y)) : 0;
      const newWidth = Math.max(dimensions.width, Math.round(expandedRect.width));
      const newHeight = Math.max(dimensions.height, Math.round(expandedRect.height));
      const widthChange = (newWidth - dimensions.width) * origin[0];
      const heightChange = (newHeight - dimensions.height) * origin[1];
      if (xChange > 0 || yChange > 0 || widthChange || heightChange) {
        changes.push({
          id: parentId,
          type: "position",
          position: {
            x: parent.position.x - xChange + widthChange,
            y: parent.position.y - yChange + heightChange
          }
        });
        (_b2 = parentLookup.get(parentId)) == null ? void 0 : _b2.forEach((childNode) => {
          if (!children2.some((child) => child.id === childNode.id)) {
            changes.push({
              id: childNode.id,
              type: "position",
              position: {
                x: childNode.position.x + xChange,
                y: childNode.position.y + yChange
              }
            });
          }
        });
      }
      if (dimensions.width < expandedRect.width || dimensions.height < expandedRect.height || xChange || yChange) {
        changes.push({
          id: parentId,
          type: "dimensions",
          setAttributes: true,
          dimensions: {
            width: newWidth + (xChange ? origin[0] * xChange - widthChange : 0),
            height: newHeight + (yChange ? origin[1] * yChange - heightChange : 0)
          }
        });
      }
    });
  }
  return changes;
}
function updateNodeInternals(updates, nodeLookup, parentLookup, domNode, nodeOrigin, nodeExtent) {
  const viewportNode = domNode == null ? void 0 : domNode.querySelector(".xyflow__viewport");
  let updatedInternals = false;
  if (!viewportNode) {
    return { changes: [], updatedInternals };
  }
  const changes = [];
  const style2 = window.getComputedStyle(viewportNode);
  const { m22: zoom } = new window.DOMMatrixReadOnly(style2.transform);
  const parentExpandChildren = [];
  for (const update of updates.values()) {
    const node = nodeLookup.get(update.id);
    if (!node) {
      continue;
    }
    if (node.hidden) {
      node.internals = {
        ...node.internals,
        handleBounds: void 0
      };
      updatedInternals = true;
    } else {
      const dimensions = getDimensions(update.nodeElement);
      const dimensionChanged = node.measured.width !== dimensions.width || node.measured.height !== dimensions.height;
      const doUpdate = !!(dimensions.width && dimensions.height && (dimensionChanged || !node.internals.handleBounds || update.force));
      if (doUpdate) {
        const nodeBounds = update.nodeElement.getBoundingClientRect();
        const extent = isCoordinateExtent(node.extent) ? node.extent : nodeExtent;
        let { positionAbsolute } = node.internals;
        if (node.parentId && node.extent === "parent") {
          positionAbsolute = clampPositionToParent(positionAbsolute, dimensions, nodeLookup.get(node.parentId));
        } else if (extent) {
          positionAbsolute = clampPosition(positionAbsolute, extent, dimensions);
        }
        node.measured = dimensions;
        node.internals = {
          ...node.internals,
          positionAbsolute,
          handleBounds: {
            source: getHandleBounds("source", update.nodeElement, nodeBounds, zoom, node.id),
            target: getHandleBounds("target", update.nodeElement, nodeBounds, zoom, node.id)
          }
        };
        if (node.parentId) {
          updateChildNode(node, nodeLookup, parentLookup, { nodeOrigin });
        }
        updatedInternals = true;
        if (dimensionChanged) {
          changes.push({
            id: node.id,
            type: "dimensions",
            dimensions
          });
          if (node.expandParent && node.parentId) {
            parentExpandChildren.push({
              id: node.id,
              parentId: node.parentId,
              rect: nodeToRect(node, nodeOrigin)
            });
          }
        }
      }
    }
  }
  if (parentExpandChildren.length > 0) {
    const parentExpandChanges = handleExpandParent(parentExpandChildren, nodeLookup, parentLookup, nodeOrigin);
    changes.push(...parentExpandChanges);
  }
  return { changes, updatedInternals };
}
async function panBy({ delta, panZoom, transform: transform2, translateExtent, width, height }) {
  if (!panZoom || !delta.x && !delta.y) {
    return Promise.resolve(false);
  }
  const nextViewport = await panZoom.setViewportConstrained({
    x: transform2[0] + delta.x,
    y: transform2[1] + delta.y,
    zoom: transform2[2]
  }, [
    [0, 0],
    [width, height]
  ], translateExtent);
  const transformChanged = !!nextViewport && (nextViewport.x !== transform2[0] || nextViewport.y !== transform2[1] || nextViewport.k !== transform2[2]);
  return Promise.resolve(transformChanged);
}
function updateConnectionLookup(connectionLookup, edgeLookup, edges) {
  connectionLookup.clear();
  edgeLookup.clear();
  for (const edge of edges) {
    const { source, target, sourceHandle = null, targetHandle = null } = edge;
    const sourceKey = `${source}-source-${sourceHandle}`;
    const targetKey = `${target}-target-${targetHandle}`;
    const prevSource = connectionLookup.get(sourceKey) || /* @__PURE__ */ new Map();
    const prevTarget = connectionLookup.get(targetKey) || /* @__PURE__ */ new Map();
    const connection = { edgeId: edge.id, source, target, sourceHandle, targetHandle };
    edgeLookup.set(edge.id, edge);
    connectionLookup.set(sourceKey, prevSource.set(`${target}-${targetHandle}`, connection));
    connectionLookup.set(targetKey, prevTarget.set(`${source}-${sourceHandle}`, connection));
  }
}
function isParentSelected(node, nodeLookup) {
  if (!node.parentId) {
    return false;
  }
  const parentNode = nodeLookup.get(node.parentId);
  if (!parentNode) {
    return false;
  }
  if (parentNode.selected) {
    return true;
  }
  return isParentSelected(parentNode, nodeLookup);
}
function hasSelector(target, selector, domNode) {
  let current = target;
  do {
    if (current == null ? void 0 : current.matches(selector))
      return true;
    if (current === domNode)
      return false;
    current = current.parentElement;
  } while (current);
  return false;
}
function getDragItems(nodeLookup, nodesDraggable, mousePos, nodeId) {
  var _a, _b;
  const dragItems = /* @__PURE__ */ new Map();
  for (const [id2, node] of nodeLookup) {
    if ((node.selected || node.id === nodeId) && (!node.parentId || !isParentSelected(node, nodeLookup)) && (node.draggable || nodesDraggable && typeof node.draggable === "undefined")) {
      const internalNode = nodeLookup.get(id2);
      if (internalNode) {
        dragItems.set(id2, {
          id: id2,
          position: internalNode.position || { x: 0, y: 0 },
          distance: {
            x: mousePos.x - internalNode.internals.positionAbsolute.x,
            y: mousePos.y - internalNode.internals.positionAbsolute.y
          },
          extent: internalNode.extent,
          parentId: internalNode.parentId,
          origin: internalNode.origin,
          expandParent: internalNode.expandParent,
          internals: {
            positionAbsolute: internalNode.internals.positionAbsolute || { x: 0, y: 0 }
          },
          measured: {
            width: (_a = internalNode.measured.width) != null ? _a : 0,
            height: (_b = internalNode.measured.height) != null ? _b : 0
          }
        });
      }
    }
  }
  return dragItems;
}
function getEventHandlerParams({ nodeId, dragItems, nodeLookup, dragging = true }) {
  var _a, _b, _c;
  const nodesFromDragItems = [];
  for (const [id2, dragItem] of dragItems) {
    const node2 = (_a = nodeLookup.get(id2)) == null ? void 0 : _a.internals.userNode;
    if (node2) {
      nodesFromDragItems.push({
        ...node2,
        position: dragItem.position,
        dragging
      });
    }
  }
  if (!nodeId) {
    return [nodesFromDragItems[0], nodesFromDragItems];
  }
  const node = (_b = nodeLookup.get(nodeId)) == null ? void 0 : _b.internals.userNode;
  return [
    !node ? nodesFromDragItems[0] : {
      ...node,
      position: ((_c = dragItems.get(nodeId)) == null ? void 0 : _c.position) || node.position,
      dragging
    },
    nodesFromDragItems
  ];
}
function XYDrag({ onNodeMouseDown, getStoreItems, onDragStart, onDrag, onDragStop }) {
  let lastPos = { x: null, y: null };
  let autoPanId = 0;
  let dragItems = /* @__PURE__ */ new Map();
  let autoPanStarted = false;
  let mousePosition = { x: 0, y: 0 };
  let containerBounds = null;
  let dragStarted = false;
  let d3Selection = null;
  let abortDrag = false;
  function update({ noDragClassName, handleSelector, domNode, isSelectable, nodeId, nodeClickDistance = 0 }) {
    d3Selection = select_default2(domNode);
    function updateNodes({ x, y }, dragEvent) {
      const { nodeLookup, nodeExtent, snapGrid, snapToGrid, nodeOrigin, onNodeDrag, onSelectionDrag, onError, updateNodePositions } = getStoreItems();
      lastPos = { x, y };
      let hasChange = false;
      let nodesBox = { x: 0, y: 0, x2: 0, y2: 0 };
      if (dragItems.size > 1 && nodeExtent) {
        const rect = getInternalNodesBounds(dragItems);
        nodesBox = rectToBox(rect);
      }
      for (const [id2, dragItem] of dragItems) {
        if (!nodeLookup.has(id2)) {
          continue;
        }
        let nextPosition = { x: x - dragItem.distance.x, y: y - dragItem.distance.y };
        if (snapToGrid) {
          nextPosition = snapPosition(nextPosition, snapGrid);
        }
        let adjustedNodeExtent = [
          [nodeExtent[0][0], nodeExtent[0][1]],
          [nodeExtent[1][0], nodeExtent[1][1]]
        ];
        if (dragItems.size > 1 && nodeExtent && !dragItem.extent) {
          const { positionAbsolute: positionAbsolute2 } = dragItem.internals;
          const x1 = positionAbsolute2.x - nodesBox.x + nodeExtent[0][0];
          const x2 = positionAbsolute2.x + dragItem.measured.width - nodesBox.x2 + nodeExtent[1][0];
          const y1 = positionAbsolute2.y - nodesBox.y + nodeExtent[0][1];
          const y2 = positionAbsolute2.y + dragItem.measured.height - nodesBox.y2 + nodeExtent[1][1];
          adjustedNodeExtent = [
            [x1, y1],
            [x2, y2]
          ];
        }
        const { position, positionAbsolute } = calculateNodePosition({
          nodeId: id2,
          nextPosition,
          nodeLookup,
          nodeExtent: adjustedNodeExtent,
          nodeOrigin,
          onError
        });
        hasChange = hasChange || dragItem.position.x !== position.x || dragItem.position.y !== position.y;
        dragItem.position = position;
        dragItem.internals.positionAbsolute = positionAbsolute;
      }
      if (!hasChange) {
        return;
      }
      updateNodePositions(dragItems, true);
      if (dragEvent && (onDrag || onNodeDrag || !nodeId && onSelectionDrag)) {
        const [currentNode, currentNodes] = getEventHandlerParams({
          nodeId,
          dragItems,
          nodeLookup
        });
        onDrag == null ? void 0 : onDrag(dragEvent, dragItems, currentNode, currentNodes);
        onNodeDrag == null ? void 0 : onNodeDrag(dragEvent, currentNode, currentNodes);
        if (!nodeId) {
          onSelectionDrag == null ? void 0 : onSelectionDrag(dragEvent, currentNodes);
        }
      }
    }
    async function autoPan() {
      var _a, _b;
      if (!containerBounds) {
        return;
      }
      const { transform: transform2, panBy: panBy2, autoPanSpeed } = getStoreItems();
      const [xMovement, yMovement] = calcAutoPan(mousePosition, containerBounds, autoPanSpeed);
      if (xMovement !== 0 || yMovement !== 0) {
        lastPos.x = ((_a = lastPos.x) != null ? _a : 0) - xMovement / transform2[2];
        lastPos.y = ((_b = lastPos.y) != null ? _b : 0) - yMovement / transform2[2];
        if (await panBy2({ x: xMovement, y: yMovement })) {
          updateNodes(lastPos, null);
        }
      }
      autoPanId = requestAnimationFrame(autoPan);
    }
    function startDrag(event) {
      var _a;
      const { nodeLookup, multiSelectionActive, nodesDraggable, transform: transform2, snapGrid, snapToGrid, selectNodesOnDrag, onNodeDragStart, onSelectionDragStart, unselectNodesAndEdges } = getStoreItems();
      dragStarted = true;
      if ((!selectNodesOnDrag || !isSelectable) && !multiSelectionActive && nodeId) {
        if (!((_a = nodeLookup.get(nodeId)) == null ? void 0 : _a.selected)) {
          unselectNodesAndEdges();
        }
      }
      if (isSelectable && selectNodesOnDrag && nodeId) {
        onNodeMouseDown == null ? void 0 : onNodeMouseDown(nodeId);
      }
      const pointerPos = getPointerPosition(event.sourceEvent, { transform: transform2, snapGrid, snapToGrid, containerBounds });
      lastPos = pointerPos;
      dragItems = getDragItems(nodeLookup, nodesDraggable, pointerPos, nodeId);
      if (dragItems.size > 0 && (onDragStart || onNodeDragStart || !nodeId && onSelectionDragStart)) {
        const [currentNode, currentNodes] = getEventHandlerParams({
          nodeId,
          dragItems,
          nodeLookup
        });
        onDragStart == null ? void 0 : onDragStart(event.sourceEvent, dragItems, currentNode, currentNodes);
        onNodeDragStart == null ? void 0 : onNodeDragStart(event.sourceEvent, currentNode, currentNodes);
        if (!nodeId) {
          onSelectionDragStart == null ? void 0 : onSelectionDragStart(event.sourceEvent, currentNodes);
        }
      }
    }
    const d3DragInstance = drag_default().clickDistance(nodeClickDistance).on("start", (event) => {
      const { domNode: domNode2, nodeDragThreshold, transform: transform2, snapGrid, snapToGrid } = getStoreItems();
      containerBounds = (domNode2 == null ? void 0 : domNode2.getBoundingClientRect()) || null;
      abortDrag = false;
      if (nodeDragThreshold === 0) {
        startDrag(event);
      }
      const pointerPos = getPointerPosition(event.sourceEvent, { transform: transform2, snapGrid, snapToGrid, containerBounds });
      lastPos = pointerPos;
      mousePosition = getEventPosition(event.sourceEvent, containerBounds);
    }).on("drag", (event) => {
      var _a, _b;
      const { autoPanOnNodeDrag, transform: transform2, snapGrid, snapToGrid, nodeDragThreshold, nodeLookup } = getStoreItems();
      const pointerPos = getPointerPosition(event.sourceEvent, { transform: transform2, snapGrid, snapToGrid, containerBounds });
      if (event.sourceEvent.type === "touchmove" && event.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      nodeId && !nodeLookup.has(nodeId)) {
        abortDrag = true;
      }
      if (abortDrag) {
        return;
      }
      if (!autoPanStarted && autoPanOnNodeDrag && dragStarted) {
        autoPanStarted = true;
        autoPan();
      }
      if (!dragStarted) {
        const x = pointerPos.xSnapped - ((_a = lastPos.x) != null ? _a : 0);
        const y = pointerPos.ySnapped - ((_b = lastPos.y) != null ? _b : 0);
        const distance2 = Math.sqrt(x * x + y * y);
        if (distance2 > nodeDragThreshold) {
          startDrag(event);
        }
      }
      if ((lastPos.x !== pointerPos.xSnapped || lastPos.y !== pointerPos.ySnapped) && dragItems && dragStarted) {
        mousePosition = getEventPosition(event.sourceEvent, containerBounds);
        updateNodes(pointerPos, event.sourceEvent);
      }
    }).on("end", (event) => {
      if (!dragStarted || abortDrag) {
        return;
      }
      autoPanStarted = false;
      dragStarted = false;
      cancelAnimationFrame(autoPanId);
      if (dragItems.size > 0) {
        const { nodeLookup, updateNodePositions, onNodeDragStop, onSelectionDragStop } = getStoreItems();
        updateNodePositions(dragItems, false);
        if (onDragStop || onNodeDragStop || !nodeId && onSelectionDragStop) {
          const [currentNode, currentNodes] = getEventHandlerParams({
            nodeId,
            dragItems,
            nodeLookup,
            dragging: false
          });
          onDragStop == null ? void 0 : onDragStop(event.sourceEvent, dragItems, currentNode, currentNodes);
          onNodeDragStop == null ? void 0 : onNodeDragStop(event.sourceEvent, currentNode, currentNodes);
          if (!nodeId) {
            onSelectionDragStop == null ? void 0 : onSelectionDragStop(event.sourceEvent, currentNodes);
          }
        }
      }
    }).filter((event) => {
      const target = event.target;
      const isDraggable = !event.button && (!noDragClassName || !hasSelector(target, `.${noDragClassName}`, domNode)) && (!handleSelector || hasSelector(target, handleSelector, domNode));
      return isDraggable;
    });
    d3Selection.call(d3DragInstance);
  }
  function destroy() {
    d3Selection == null ? void 0 : d3Selection.on(".drag", null);
  }
  return {
    update,
    destroy
  };
}
function getNodesWithinDistance(position, nodeLookup, distance2) {
  const nodes = [];
  const rect = {
    x: position.x - distance2,
    y: position.y - distance2,
    width: distance2 * 2,
    height: distance2 * 2
  };
  for (const node of nodeLookup.values()) {
    if (getOverlappingArea(rect, nodeToRect(node)) > 0) {
      nodes.push(node);
    }
  }
  return nodes;
}
var ADDITIONAL_DISTANCE = 250;
function getClosestHandle(position, connectionRadius, nodeLookup, fromHandle) {
  var _a, _b, _c, _d, _e;
  let closestHandles = [];
  let minDistance = Infinity;
  const closeNodes = getNodesWithinDistance(position, nodeLookup, connectionRadius + ADDITIONAL_DISTANCE);
  for (const node of closeNodes) {
    const allHandles = [...(_b = (_a = node.internals.handleBounds) == null ? void 0 : _a.source) != null ? _b : [], ...(_d = (_c = node.internals.handleBounds) == null ? void 0 : _c.target) != null ? _d : []];
    for (const handle of allHandles) {
      if (fromHandle.nodeId === handle.nodeId && fromHandle.type === handle.type && fromHandle.id === handle.id) {
        continue;
      }
      const { x, y } = getHandlePosition(node, handle, handle.position, true);
      const distance2 = Math.sqrt(Math.pow(x - position.x, 2) + Math.pow(y - position.y, 2));
      if (distance2 > connectionRadius) {
        continue;
      }
      if (distance2 < minDistance) {
        closestHandles = [{ ...handle, x, y }];
        minDistance = distance2;
      } else if (distance2 === minDistance) {
        closestHandles.push({ ...handle, x, y });
      }
    }
  }
  if (!closestHandles.length) {
    return null;
  }
  if (closestHandles.length > 1) {
    const oppositeHandleType = fromHandle.type === "source" ? "target" : "source";
    return (_e = closestHandles.find((handle) => handle.type === oppositeHandleType)) != null ? _e : closestHandles[0];
  }
  return closestHandles[0];
}
function getHandle(nodeId, handleType, handleId, nodeLookup, connectionMode, withAbsolutePosition = false) {
  var _a, _b, _c, _d, _e, _f;
  const node = nodeLookup.get(nodeId);
  if (!node) {
    return null;
  }
  const handles = connectionMode === "strict" ? (_a = node.internals.handleBounds) == null ? void 0 : _a[handleType] : [...(_c = (_b = node.internals.handleBounds) == null ? void 0 : _b.source) != null ? _c : [], ...(_e = (_d = node.internals.handleBounds) == null ? void 0 : _d.target) != null ? _e : []];
  const handle = (_f = handleId ? handles == null ? void 0 : handles.find((h) => h.id === handleId) : handles == null ? void 0 : handles[0]) != null ? _f : null;
  return handle && withAbsolutePosition ? { ...handle, ...getHandlePosition(node, handle, handle.position, true) } : handle;
}
function getHandleType(edgeUpdaterType, handleDomNode) {
  if (edgeUpdaterType) {
    return edgeUpdaterType;
  } else if (handleDomNode == null ? void 0 : handleDomNode.classList.contains("target")) {
    return "target";
  } else if (handleDomNode == null ? void 0 : handleDomNode.classList.contains("source")) {
    return "source";
  }
  return null;
}
function isConnectionValid(isInsideConnectionRadius, isHandleValid) {
  let isValid = null;
  if (isHandleValid) {
    isValid = true;
  } else if (isInsideConnectionRadius && !isHandleValid) {
    isValid = false;
  }
  return isValid;
}
var alwaysValid = () => true;
function onPointerDown(event, { connectionMode, connectionRadius, handleId, nodeId, edgeUpdaterType, isTarget, domNode, nodeLookup, lib, autoPanOnConnect, flowId, panBy: panBy2, cancelConnection, onConnectStart, onConnect, onConnectEnd, isValidConnection = alwaysValid, onReconnectEnd, updateConnection, getTransform, getFromHandle, autoPanSpeed }) {
  const doc = getHostForElement(event.target);
  let autoPanId = 0;
  let closestHandle;
  const { x, y } = getEventPosition(event);
  const clickedHandle = doc == null ? void 0 : doc.elementFromPoint(x, y);
  const handleType = getHandleType(edgeUpdaterType, clickedHandle);
  const containerBounds = domNode == null ? void 0 : domNode.getBoundingClientRect();
  if (!containerBounds || !handleType) {
    return;
  }
  const fromHandleInternal = getHandle(nodeId, handleType, handleId, nodeLookup, connectionMode);
  if (!fromHandleInternal) {
    return;
  }
  let position = getEventPosition(event, containerBounds);
  let autoPanStarted = false;
  let connection = null;
  let isValid = false;
  let handleDomNode = null;
  function autoPan() {
    if (!autoPanOnConnect || !containerBounds) {
      return;
    }
    const [x2, y2] = calcAutoPan(position, containerBounds, autoPanSpeed);
    panBy2({ x: x2, y: y2 });
    autoPanId = requestAnimationFrame(autoPan);
  }
  const fromHandle = {
    ...fromHandleInternal,
    nodeId,
    type: handleType,
    position: fromHandleInternal.position
  };
  const fromNodeInternal = nodeLookup.get(nodeId);
  const from = getHandlePosition(fromNodeInternal, fromHandle, Position.Left, true);
  const newConnection = {
    inProgress: true,
    isValid: null,
    from,
    fromHandle,
    fromPosition: fromHandle.position,
    fromNode: fromNodeInternal,
    to: position,
    toHandle: null,
    toPosition: oppositePosition[fromHandle.position],
    toNode: null
  };
  updateConnection(newConnection);
  let previousConnection = newConnection;
  onConnectStart == null ? void 0 : onConnectStart(event, { nodeId, handleId, handleType });
  function onPointerMove(event2) {
    if (!getFromHandle() || !fromHandle) {
      onPointerUp(event2);
      return;
    }
    const transform2 = getTransform();
    position = getEventPosition(event2, containerBounds);
    closestHandle = getClosestHandle(pointToRendererPoint(position, transform2, false, [1, 1]), connectionRadius, nodeLookup, fromHandle);
    if (!autoPanStarted) {
      autoPan();
      autoPanStarted = true;
    }
    const result = isValidHandle(event2, {
      handle: closestHandle,
      connectionMode,
      fromNodeId: nodeId,
      fromHandleId: handleId,
      fromType: isTarget ? "target" : "source",
      isValidConnection,
      doc,
      lib,
      flowId,
      nodeLookup
    });
    handleDomNode = result.handleDomNode;
    connection = result.connection;
    isValid = isConnectionValid(!!closestHandle, result.isValid);
    const newConnection2 = {
      // from stays the same
      ...previousConnection,
      isValid,
      to: closestHandle && isValid ? rendererPointToPoint({ x: closestHandle.x, y: closestHandle.y }, transform2) : position,
      toHandle: result.toHandle,
      toPosition: isValid && result.toHandle ? result.toHandle.position : oppositePosition[fromHandle.position],
      toNode: result.toHandle ? nodeLookup.get(result.toHandle.nodeId) : null
    };
    if (isValid && closestHandle && previousConnection.toHandle && newConnection2.toHandle && previousConnection.toHandle.type === newConnection2.toHandle.type && previousConnection.toHandle.nodeId === newConnection2.toHandle.nodeId && previousConnection.toHandle.id === newConnection2.toHandle.id && previousConnection.to.x === newConnection2.to.x && previousConnection.to.y === newConnection2.to.y) {
      return;
    }
    updateConnection(newConnection2);
    previousConnection = newConnection2;
  }
  function onPointerUp(event2) {
    if ((closestHandle || handleDomNode) && connection && isValid) {
      onConnect == null ? void 0 : onConnect(connection);
    }
    const { inProgress, ...connectionState } = previousConnection;
    const finalConnectionState = {
      ...connectionState,
      toPosition: previousConnection.toHandle ? previousConnection.toPosition : null
    };
    onConnectEnd == null ? void 0 : onConnectEnd(event2, finalConnectionState);
    if (edgeUpdaterType) {
      onReconnectEnd == null ? void 0 : onReconnectEnd(event2, finalConnectionState);
    }
    cancelConnection();
    cancelAnimationFrame(autoPanId);
    autoPanStarted = false;
    isValid = false;
    connection = null;
    handleDomNode = null;
    doc.removeEventListener("mousemove", onPointerMove);
    doc.removeEventListener("mouseup", onPointerUp);
    doc.removeEventListener("touchmove", onPointerMove);
    doc.removeEventListener("touchend", onPointerUp);
  }
  doc.addEventListener("mousemove", onPointerMove);
  doc.addEventListener("mouseup", onPointerUp);
  doc.addEventListener("touchmove", onPointerMove);
  doc.addEventListener("touchend", onPointerUp);
}
function isValidHandle(event, { handle, connectionMode, fromNodeId, fromHandleId, fromType, doc, lib, flowId, isValidConnection = alwaysValid, nodeLookup }) {
  const isTarget = fromType === "target";
  const handleDomNode = handle ? doc.querySelector(`.${lib}-flow__handle[data-id="${flowId}-${handle == null ? void 0 : handle.nodeId}-${handle == null ? void 0 : handle.id}-${handle == null ? void 0 : handle.type}"]`) : null;
  const { x, y } = getEventPosition(event);
  const handleBelow = doc.elementFromPoint(x, y);
  const handleToCheck = (handleBelow == null ? void 0 : handleBelow.classList.contains(`${lib}-flow__handle`)) ? handleBelow : handleDomNode;
  const result = {
    handleDomNode: handleToCheck,
    isValid: false,
    connection: null,
    toHandle: null
  };
  if (handleToCheck) {
    const handleType = getHandleType(void 0, handleToCheck);
    const handleNodeId = handleToCheck.getAttribute("data-nodeid");
    const handleId = handleToCheck.getAttribute("data-handleid");
    const connectable = handleToCheck.classList.contains("connectable");
    const connectableEnd = handleToCheck.classList.contains("connectableend");
    if (!handleNodeId || !handleType) {
      return result;
    }
    const connection = {
      source: isTarget ? handleNodeId : fromNodeId,
      sourceHandle: isTarget ? handleId : fromHandleId,
      target: isTarget ? fromNodeId : handleNodeId,
      targetHandle: isTarget ? fromHandleId : handleId
    };
    result.connection = connection;
    const isConnectable = connectable && connectableEnd;
    const isValid = isConnectable && (connectionMode === ConnectionMode.Strict ? isTarget && handleType === "source" || !isTarget && handleType === "target" : handleNodeId !== fromNodeId || handleId !== fromHandleId);
    result.isValid = isValid && isValidConnection(connection);
    result.toHandle = getHandle(handleNodeId, handleType, handleId, nodeLookup, connectionMode, false);
  }
  return result;
}
var XYHandle = {
  onPointerDown,
  isValid: isValidHandle
};
function XYMinimap({ domNode, panZoom, getTransform, getViewScale }) {
  const selection2 = select_default2(domNode);
  function update({ translateExtent, width, height, zoomStep = 10, pannable = true, zoomable = true, inversePan = false }) {
    const zoomHandler = (event) => {
      const transform2 = getTransform();
      if (event.sourceEvent.type !== "wheel" || !panZoom) {
        return;
      }
      const pinchDelta = -event.sourceEvent.deltaY * (event.sourceEvent.deltaMode === 1 ? 0.05 : event.sourceEvent.deltaMode ? 1 : 2e-3) * zoomStep;
      const nextZoom = transform2[2] * Math.pow(2, pinchDelta);
      panZoom.scaleTo(nextZoom);
    };
    let panStart = [0, 0];
    const panStartHandler = (event) => {
      var _a, _b;
      if (event.sourceEvent.type === "mousedown" || event.sourceEvent.type === "touchstart") {
        panStart = [
          (_a = event.sourceEvent.clientX) != null ? _a : event.sourceEvent.touches[0].clientX,
          (_b = event.sourceEvent.clientY) != null ? _b : event.sourceEvent.touches[0].clientY
        ];
      }
    };
    const panHandler = (event) => {
      var _a, _b;
      const transform2 = getTransform();
      if (event.sourceEvent.type !== "mousemove" && event.sourceEvent.type !== "touchmove" || !panZoom) {
        return;
      }
      const panCurrent = [
        (_a = event.sourceEvent.clientX) != null ? _a : event.sourceEvent.touches[0].clientX,
        (_b = event.sourceEvent.clientY) != null ? _b : event.sourceEvent.touches[0].clientY
      ];
      const panDelta = [panCurrent[0] - panStart[0], panCurrent[1] - panStart[1]];
      panStart = panCurrent;
      const moveScale = getViewScale() * Math.max(transform2[2], Math.log(transform2[2])) * (inversePan ? -1 : 1);
      const position = {
        x: transform2[0] - panDelta[0] * moveScale,
        y: transform2[1] - panDelta[1] * moveScale
      };
      const extent = [
        [0, 0],
        [width, height]
      ];
      panZoom.setViewportConstrained({
        x: position.x,
        y: position.y,
        zoom: transform2[2]
      }, extent, translateExtent);
    };
    const zoomAndPanHandler = zoom_default2().on("start", panStartHandler).on("zoom", pannable ? panHandler : null).on("zoom.wheel", zoomable ? zoomHandler : null);
    selection2.call(zoomAndPanHandler, {});
  }
  function destroy() {
    selection2.on("zoom", null);
  }
  return {
    update,
    destroy,
    pointer: pointer_default
  };
}
var viewChanged = (prevViewport, eventViewport) => prevViewport.x !== eventViewport.x || prevViewport.y !== eventViewport.y || prevViewport.zoom !== eventViewport.k;
var transformToViewport = (transform2) => ({
  x: transform2.x,
  y: transform2.y,
  zoom: transform2.k
});
var viewportToTransform = ({ x, y, zoom }) => identity2.translate(x, y).scale(zoom);
var isWrappedWithClass = (event, className) => event.target.closest(`.${className}`);
var isRightClickPan = (panOnDrag, usedButton) => usedButton === 2 && Array.isArray(panOnDrag) && panOnDrag.includes(2);
var getD3Transition = (selection2, duration = 0, onEnd = () => {
}) => {
  const hasDuration = typeof duration === "number" && duration > 0;
  if (!hasDuration) {
    onEnd();
  }
  return hasDuration ? selection2.transition().duration(duration).on("end", onEnd) : selection2;
};
var wheelDelta = (event) => {
  const factor = event.ctrlKey && isMacOs() ? 10 : 1;
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) * factor;
};
function createPanOnScrollHandler({ zoomPanValues, noWheelClassName, d3Selection, d3Zoom, panOnScrollMode, panOnScrollSpeed, zoomOnPinch, onPanZoomStart, onPanZoom, onPanZoomEnd }) {
  return (event) => {
    if (isWrappedWithClass(event, noWheelClassName)) {
      return false;
    }
    event.preventDefault();
    event.stopImmediatePropagation();
    const currentZoom = d3Selection.property("__zoom").k || 1;
    if (event.ctrlKey && zoomOnPinch) {
      const point = pointer_default(event);
      const pinchDelta = wheelDelta(event);
      const zoom = currentZoom * Math.pow(2, pinchDelta);
      d3Zoom.scaleTo(d3Selection, zoom, point, event);
      return;
    }
    const deltaNormalize = event.deltaMode === 1 ? 20 : 1;
    let deltaX = panOnScrollMode === PanOnScrollMode.Vertical ? 0 : event.deltaX * deltaNormalize;
    let deltaY = panOnScrollMode === PanOnScrollMode.Horizontal ? 0 : event.deltaY * deltaNormalize;
    if (!isMacOs() && event.shiftKey && panOnScrollMode !== PanOnScrollMode.Vertical) {
      deltaX = event.deltaY * deltaNormalize;
      deltaY = 0;
    }
    d3Zoom.translateBy(
      d3Selection,
      -(deltaX / currentZoom) * panOnScrollSpeed,
      -(deltaY / currentZoom) * panOnScrollSpeed,
      // @ts-ignore
      { internal: true }
    );
    const nextViewport = transformToViewport(d3Selection.property("__zoom"));
    clearTimeout(zoomPanValues.panScrollTimeout);
    if (!zoomPanValues.isPanScrolling) {
      zoomPanValues.isPanScrolling = true;
      onPanZoomStart == null ? void 0 : onPanZoomStart(event, nextViewport);
    }
    if (zoomPanValues.isPanScrolling) {
      onPanZoom == null ? void 0 : onPanZoom(event, nextViewport);
      zoomPanValues.panScrollTimeout = setTimeout(() => {
        onPanZoomEnd == null ? void 0 : onPanZoomEnd(event, nextViewport);
        zoomPanValues.isPanScrolling = false;
      }, 150);
    }
  };
}
function createZoomOnScrollHandler({ noWheelClassName, preventScrolling, d3ZoomHandler }) {
  return function(event, d) {
    const preventZoom = !preventScrolling && event.type === "wheel" && !event.ctrlKey;
    if (preventZoom || isWrappedWithClass(event, noWheelClassName)) {
      return null;
    }
    event.preventDefault();
    d3ZoomHandler.call(this, event, d);
  };
}
function createPanZoomStartHandler({ zoomPanValues, onDraggingChange, onPanZoomStart }) {
  return (event) => {
    var _a, _b, _c;
    if ((_a = event.sourceEvent) == null ? void 0 : _a.internal) {
      return;
    }
    const viewport = transformToViewport(event.transform);
    zoomPanValues.mouseButton = ((_b = event.sourceEvent) == null ? void 0 : _b.button) || 0;
    zoomPanValues.isZoomingOrPanning = true;
    zoomPanValues.prevViewport = viewport;
    if (((_c = event.sourceEvent) == null ? void 0 : _c.type) === "mousedown") {
      onDraggingChange(true);
    }
    if (onPanZoomStart) {
      onPanZoomStart == null ? void 0 : onPanZoomStart(event.sourceEvent, viewport);
    }
  };
}
function createPanZoomHandler({ zoomPanValues, panOnDrag, onPaneContextMenu, onTransformChange, onPanZoom }) {
  return (event) => {
    var _a, _b, _c;
    zoomPanValues.usedRightMouseButton = !!(onPaneContextMenu && isRightClickPan(panOnDrag, (_a = zoomPanValues.mouseButton) != null ? _a : 0));
    if (!((_b = event.sourceEvent) == null ? void 0 : _b.sync)) {
      onTransformChange([event.transform.x, event.transform.y, event.transform.k]);
    }
    if (onPanZoom && !((_c = event.sourceEvent) == null ? void 0 : _c.internal)) {
      onPanZoom == null ? void 0 : onPanZoom(event.sourceEvent, transformToViewport(event.transform));
    }
  };
}
function createPanZoomEndHandler({ zoomPanValues, panOnDrag, panOnScroll, onDraggingChange, onPanZoomEnd, onPaneContextMenu }) {
  return (event) => {
    var _a, _b;
    if ((_a = event.sourceEvent) == null ? void 0 : _a.internal) {
      return;
    }
    zoomPanValues.isZoomingOrPanning = false;
    if (onPaneContextMenu && isRightClickPan(panOnDrag, (_b = zoomPanValues.mouseButton) != null ? _b : 0) && !zoomPanValues.usedRightMouseButton && event.sourceEvent) {
      onPaneContextMenu(event.sourceEvent);
    }
    zoomPanValues.usedRightMouseButton = false;
    onDraggingChange(false);
    if (onPanZoomEnd && viewChanged(zoomPanValues.prevViewport, event.transform)) {
      const viewport = transformToViewport(event.transform);
      zoomPanValues.prevViewport = viewport;
      clearTimeout(zoomPanValues.timerId);
      zoomPanValues.timerId = setTimeout(
        () => {
          onPanZoomEnd == null ? void 0 : onPanZoomEnd(event.sourceEvent, viewport);
        },
        // we need a setTimeout for panOnScroll to supress multiple end events fired during scroll
        panOnScroll ? 150 : 0
      );
    }
  };
}
function createFilter({ zoomActivationKeyPressed, zoomOnScroll, zoomOnPinch, panOnDrag, panOnScroll, zoomOnDoubleClick, userSelectionActive, noWheelClassName, noPanClassName, lib }) {
  return (event) => {
    var _a;
    const zoomScroll = zoomActivationKeyPressed || zoomOnScroll;
    const pinchZoom = zoomOnPinch && event.ctrlKey;
    if (event.button === 1 && event.type === "mousedown" && (isWrappedWithClass(event, `${lib}-flow__node`) || isWrappedWithClass(event, `${lib}-flow__edge`))) {
      return true;
    }
    if (!panOnDrag && !zoomScroll && !panOnScroll && !zoomOnDoubleClick && !zoomOnPinch) {
      return false;
    }
    if (userSelectionActive) {
      return false;
    }
    if (isWrappedWithClass(event, noWheelClassName) && event.type === "wheel") {
      return false;
    }
    if (isWrappedWithClass(event, noPanClassName) && (event.type !== "wheel" || panOnScroll && event.type === "wheel" && !zoomActivationKeyPressed)) {
      return false;
    }
    if (!zoomOnPinch && event.ctrlKey && event.type === "wheel") {
      return false;
    }
    if (!zoomOnPinch && event.type === "touchstart" && ((_a = event.touches) == null ? void 0 : _a.length) > 1) {
      event.preventDefault();
      return false;
    }
    if (!zoomScroll && !panOnScroll && !pinchZoom && event.type === "wheel") {
      return false;
    }
    if (!panOnDrag && (event.type === "mousedown" || event.type === "touchstart")) {
      return false;
    }
    if (Array.isArray(panOnDrag) && !panOnDrag.includes(event.button) && event.type === "mousedown") {
      return false;
    }
    const buttonAllowed = Array.isArray(panOnDrag) && panOnDrag.includes(event.button) || !event.button || event.button <= 1;
    return (!event.ctrlKey || event.type === "wheel") && buttonAllowed;
  };
}
function XYPanZoom({ domNode, minZoom, maxZoom, paneClickDistance, translateExtent, viewport, onPanZoom, onPanZoomStart, onPanZoomEnd, onDraggingChange }) {
  const zoomPanValues = {
    isZoomingOrPanning: false,
    usedRightMouseButton: false,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: false
  };
  const bbox = domNode.getBoundingClientRect();
  const d3ZoomInstance = zoom_default2().clickDistance(!isNumeric(paneClickDistance) || paneClickDistance < 0 ? 0 : paneClickDistance).scaleExtent([minZoom, maxZoom]).translateExtent(translateExtent);
  const d3Selection = select_default2(domNode).call(d3ZoomInstance);
  setViewportConstrained({
    x: viewport.x,
    y: viewport.y,
    zoom: clamp(viewport.zoom, minZoom, maxZoom)
  }, [
    [0, 0],
    [bbox.width, bbox.height]
  ], translateExtent);
  const d3ZoomHandler = d3Selection.on("wheel.zoom");
  const d3DblClickZoomHandler = d3Selection.on("dblclick.zoom");
  d3ZoomInstance.wheelDelta(wheelDelta);
  function setTransform(transform2, options) {
    if (d3Selection) {
      return new Promise((resolve) => {
        d3ZoomInstance == null ? void 0 : d3ZoomInstance.transform(getD3Transition(d3Selection, options == null ? void 0 : options.duration, () => resolve(true)), transform2);
      });
    }
    return Promise.resolve(false);
  }
  function update({ noWheelClassName, noPanClassName, onPaneContextMenu, userSelectionActive, panOnScroll, panOnDrag, panOnScrollMode, panOnScrollSpeed, preventScrolling, zoomOnPinch, zoomOnScroll, zoomOnDoubleClick, zoomActivationKeyPressed, lib, onTransformChange }) {
    if (userSelectionActive && !zoomPanValues.isZoomingOrPanning) {
      destroy();
    }
    const isPanOnScroll = panOnScroll && !zoomActivationKeyPressed && !userSelectionActive;
    const wheelHandler = isPanOnScroll ? createPanOnScrollHandler({
      zoomPanValues,
      noWheelClassName,
      d3Selection,
      d3Zoom: d3ZoomInstance,
      panOnScrollMode,
      panOnScrollSpeed,
      zoomOnPinch,
      onPanZoomStart,
      onPanZoom,
      onPanZoomEnd
    }) : createZoomOnScrollHandler({
      noWheelClassName,
      preventScrolling,
      d3ZoomHandler
    });
    d3Selection.on("wheel.zoom", wheelHandler, { passive: false });
    if (!userSelectionActive) {
      const startHandler = createPanZoomStartHandler({
        zoomPanValues,
        onDraggingChange,
        onPanZoomStart
      });
      d3ZoomInstance.on("start", startHandler);
      const panZoomHandler = createPanZoomHandler({
        zoomPanValues,
        panOnDrag,
        onPaneContextMenu: !!onPaneContextMenu,
        onPanZoom,
        onTransformChange
      });
      d3ZoomInstance.on("zoom", panZoomHandler);
      const panZoomEndHandler = createPanZoomEndHandler({
        zoomPanValues,
        panOnDrag,
        panOnScroll,
        onPaneContextMenu,
        onPanZoomEnd,
        onDraggingChange
      });
      d3ZoomInstance.on("end", panZoomEndHandler);
    }
    const filter3 = createFilter({
      zoomActivationKeyPressed,
      panOnDrag,
      zoomOnScroll,
      panOnScroll,
      zoomOnDoubleClick,
      zoomOnPinch,
      userSelectionActive,
      noPanClassName,
      noWheelClassName,
      lib
    });
    d3ZoomInstance.filter(filter3);
    if (zoomOnDoubleClick) {
      d3Selection.on("dblclick.zoom", d3DblClickZoomHandler);
    } else {
      d3Selection.on("dblclick.zoom", null);
    }
  }
  function destroy() {
    d3ZoomInstance.on("zoom", null);
  }
  async function setViewportConstrained(viewport2, extent, translateExtent2) {
    const nextTransform = viewportToTransform(viewport2);
    const contrainedTransform = d3ZoomInstance == null ? void 0 : d3ZoomInstance.constrain()(nextTransform, extent, translateExtent2);
    if (contrainedTransform) {
      await setTransform(contrainedTransform);
    }
    return new Promise((resolve) => resolve(contrainedTransform));
  }
  async function setViewport(viewport2, options) {
    const nextTransform = viewportToTransform(viewport2);
    await setTransform(nextTransform, options);
    return new Promise((resolve) => resolve(nextTransform));
  }
  function syncViewport(viewport2) {
    if (d3Selection) {
      const nextTransform = viewportToTransform(viewport2);
      const currentTransform = d3Selection.property("__zoom");
      if (currentTransform.k !== viewport2.zoom || currentTransform.x !== viewport2.x || currentTransform.y !== viewport2.y) {
        d3ZoomInstance == null ? void 0 : d3ZoomInstance.transform(d3Selection, nextTransform, null, { sync: true });
      }
    }
  }
  function getViewport() {
    const transform2 = d3Selection ? transform(d3Selection.node()) : { x: 0, y: 0, k: 1 };
    return { x: transform2.x, y: transform2.y, zoom: transform2.k };
  }
  function scaleTo(zoom, options) {
    if (d3Selection) {
      return new Promise((resolve) => {
        d3ZoomInstance == null ? void 0 : d3ZoomInstance.scaleTo(getD3Transition(d3Selection, options == null ? void 0 : options.duration, () => resolve(true)), zoom);
      });
    }
    return Promise.resolve(false);
  }
  function scaleBy(factor, options) {
    if (d3Selection) {
      return new Promise((resolve) => {
        d3ZoomInstance == null ? void 0 : d3ZoomInstance.scaleBy(getD3Transition(d3Selection, options == null ? void 0 : options.duration, () => resolve(true)), factor);
      });
    }
    return Promise.resolve(false);
  }
  function setScaleExtent(scaleExtent) {
    d3ZoomInstance == null ? void 0 : d3ZoomInstance.scaleExtent(scaleExtent);
  }
  function setTranslateExtent(translateExtent2) {
    d3ZoomInstance == null ? void 0 : d3ZoomInstance.translateExtent(translateExtent2);
  }
  function setClickDistance(distance2) {
    const validDistance = !isNumeric(distance2) || distance2 < 0 ? 0 : distance2;
    d3ZoomInstance == null ? void 0 : d3ZoomInstance.clickDistance(validDistance);
  }
  return {
    update,
    destroy,
    setViewport,
    setViewportConstrained,
    getViewport,
    scaleTo,
    scaleBy,
    setScaleExtent,
    setTranslateExtent,
    syncViewport,
    setClickDistance
  };
}
var ResizeControlVariant;
(function(ResizeControlVariant2) {
  ResizeControlVariant2["Line"] = "line";
  ResizeControlVariant2["Handle"] = "handle";
})(ResizeControlVariant || (ResizeControlVariant = {}));
var XY_RESIZER_HANDLE_POSITIONS = ["top-left", "top-right", "bottom-left", "bottom-right"];
var XY_RESIZER_LINE_POSITIONS = ["top", "right", "bottom", "left"];
function getResizeDirection({ width, prevWidth, height, prevHeight, affectsX, affectsY }) {
  const deltaWidth = width - prevWidth;
  const deltaHeight = height - prevHeight;
  const direction = [deltaWidth > 0 ? 1 : deltaWidth < 0 ? -1 : 0, deltaHeight > 0 ? 1 : deltaHeight < 0 ? -1 : 0];
  if (deltaWidth && affectsX) {
    direction[0] = direction[0] * -1;
  }
  if (deltaHeight && affectsY) {
    direction[1] = direction[1] * -1;
  }
  return direction;
}
function getControlDirection(controlPosition) {
  const isHorizontal = controlPosition.includes("right") || controlPosition.includes("left");
  const isVertical = controlPosition.includes("bottom") || controlPosition.includes("top");
  const affectsX = controlPosition.includes("left");
  const affectsY = controlPosition.includes("top");
  return {
    isHorizontal,
    isVertical,
    affectsX,
    affectsY
  };
}
function getLowerExtentClamp(lowerExtent, lowerBound) {
  return Math.max(0, lowerBound - lowerExtent);
}
function getUpperExtentClamp(upperExtent, upperBound) {
  return Math.max(0, upperExtent - upperBound);
}
function getSizeClamp(size, minSize, maxSize) {
  return Math.max(0, minSize - size, size - maxSize);
}
function xor(a, b) {
  return a ? !b : b;
}
function getDimensionsAfterResize(startValues, controlDirection, pointerPosition, boundaries, keepAspectRatio, nodeOrigin, extent, childExtent) {
  let { affectsX, affectsY } = controlDirection;
  const { isHorizontal, isVertical } = controlDirection;
  const isDiagonal = isHorizontal && isVertical;
  const { xSnapped, ySnapped } = pointerPosition;
  const { minWidth, maxWidth, minHeight, maxHeight } = boundaries;
  const { x: startX, y: startY, width: startWidth, height: startHeight, aspectRatio } = startValues;
  let distX = Math.floor(isHorizontal ? xSnapped - startValues.pointerX : 0);
  let distY = Math.floor(isVertical ? ySnapped - startValues.pointerY : 0);
  const newWidth = startWidth + (affectsX ? -distX : distX);
  const newHeight = startHeight + (affectsY ? -distY : distY);
  const originOffsetX = -nodeOrigin[0] * startWidth;
  const originOffsetY = -nodeOrigin[1] * startHeight;
  let clampX = getSizeClamp(newWidth, minWidth, maxWidth);
  let clampY = getSizeClamp(newHeight, minHeight, maxHeight);
  if (extent) {
    let xExtentClamp = 0;
    let yExtentClamp = 0;
    if (affectsX && distX < 0) {
      xExtentClamp = getLowerExtentClamp(startX + distX + originOffsetX, extent[0][0]);
    } else if (!affectsX && distX > 0) {
      xExtentClamp = getUpperExtentClamp(startX + newWidth + originOffsetX, extent[1][0]);
    }
    if (affectsY && distY < 0) {
      yExtentClamp = getLowerExtentClamp(startY + distY + originOffsetY, extent[0][1]);
    } else if (!affectsY && distY > 0) {
      yExtentClamp = getUpperExtentClamp(startY + newHeight + originOffsetY, extent[1][1]);
    }
    clampX = Math.max(clampX, xExtentClamp);
    clampY = Math.max(clampY, yExtentClamp);
  }
  if (childExtent) {
    let xExtentClamp = 0;
    let yExtentClamp = 0;
    if (affectsX && distX > 0) {
      xExtentClamp = getUpperExtentClamp(startX + distX, childExtent[0][0]);
    } else if (!affectsX && distX < 0) {
      xExtentClamp = getLowerExtentClamp(startX + newWidth, childExtent[1][0]);
    }
    if (affectsY && distY > 0) {
      yExtentClamp = getUpperExtentClamp(startY + distY, childExtent[0][1]);
    } else if (!affectsY && distY < 0) {
      yExtentClamp = getLowerExtentClamp(startY + newHeight, childExtent[1][1]);
    }
    clampX = Math.max(clampX, xExtentClamp);
    clampY = Math.max(clampY, yExtentClamp);
  }
  if (keepAspectRatio) {
    if (isHorizontal) {
      const aspectHeightClamp = getSizeClamp(newWidth / aspectRatio, minHeight, maxHeight) * aspectRatio;
      clampX = Math.max(clampX, aspectHeightClamp);
      if (extent) {
        let aspectExtentClamp = 0;
        if (!affectsX && !affectsY || affectsX && !affectsY && isDiagonal) {
          aspectExtentClamp = getUpperExtentClamp(startY + originOffsetY + newWidth / aspectRatio, extent[1][1]) * aspectRatio;
        } else {
          aspectExtentClamp = getLowerExtentClamp(startY + originOffsetY + (affectsX ? distX : -distX) / aspectRatio, extent[0][1]) * aspectRatio;
        }
        clampX = Math.max(clampX, aspectExtentClamp);
      }
      if (childExtent) {
        let aspectExtentClamp = 0;
        if (!affectsX && !affectsY || affectsX && !affectsY && isDiagonal) {
          aspectExtentClamp = getLowerExtentClamp(startY + newWidth / aspectRatio, childExtent[1][1]) * aspectRatio;
        } else {
          aspectExtentClamp = getUpperExtentClamp(startY + (affectsX ? distX : -distX) / aspectRatio, childExtent[0][1]) * aspectRatio;
        }
        clampX = Math.max(clampX, aspectExtentClamp);
      }
    }
    if (isVertical) {
      const aspectWidthClamp = getSizeClamp(newHeight * aspectRatio, minWidth, maxWidth) / aspectRatio;
      clampY = Math.max(clampY, aspectWidthClamp);
      if (extent) {
        let aspectExtentClamp = 0;
        if (!affectsX && !affectsY || affectsY && !affectsX && isDiagonal) {
          aspectExtentClamp = getUpperExtentClamp(startX + newHeight * aspectRatio + originOffsetX, extent[1][0]) / aspectRatio;
        } else {
          aspectExtentClamp = getLowerExtentClamp(startX + (affectsY ? distY : -distY) * aspectRatio + originOffsetX, extent[0][0]) / aspectRatio;
        }
        clampY = Math.max(clampY, aspectExtentClamp);
      }
      if (childExtent) {
        let aspectExtentClamp = 0;
        if (!affectsX && !affectsY || affectsY && !affectsX && isDiagonal) {
          aspectExtentClamp = getLowerExtentClamp(startX + newHeight * aspectRatio, childExtent[1][0]) / aspectRatio;
        } else {
          aspectExtentClamp = getUpperExtentClamp(startX + (affectsY ? distY : -distY) * aspectRatio, childExtent[0][0]) / aspectRatio;
        }
        clampY = Math.max(clampY, aspectExtentClamp);
      }
    }
  }
  distY = distY + (distY < 0 ? clampY : -clampY);
  distX = distX + (distX < 0 ? clampX : -clampX);
  if (keepAspectRatio) {
    if (isDiagonal) {
      if (newWidth > newHeight * aspectRatio) {
        distY = (xor(affectsX, affectsY) ? -distX : distX) / aspectRatio;
      } else {
        distX = (xor(affectsX, affectsY) ? -distY : distY) * aspectRatio;
      }
    } else {
      if (isHorizontal) {
        distY = distX / aspectRatio;
        affectsY = affectsX;
      } else {
        distX = distY * aspectRatio;
        affectsX = affectsY;
      }
    }
  }
  const x = affectsX ? startX + distX : startX;
  const y = affectsY ? startY + distY : startY;
  return {
    width: startWidth + (affectsX ? -distX : distX),
    height: startHeight + (affectsY ? -distY : distY),
    x: nodeOrigin[0] * distX * (!affectsX ? 1 : -1) + x,
    y: nodeOrigin[1] * distY * (!affectsY ? 1 : -1) + y
  };
}
var initPrevValues = { width: 0, height: 0, x: 0, y: 0 };
var initStartValues = {
  ...initPrevValues,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1
};
function nodeToParentExtent(node) {
  return [
    [0, 0],
    [node.measured.width, node.measured.height]
  ];
}
function nodeToChildExtent(child, parent, nodeOrigin) {
  var _a, _b;
  const x = parent.position.x + child.position.x;
  const y = parent.position.y + child.position.y;
  const width = (_a = child.measured.width) != null ? _a : 0;
  const height = (_b = child.measured.height) != null ? _b : 0;
  const originOffsetX = nodeOrigin[0] * width;
  const originOffsetY = nodeOrigin[1] * height;
  return [
    [x - originOffsetX, y - originOffsetY],
    [x + width - originOffsetX, y + height - originOffsetY]
  ];
}
function XYResizer({ domNode, nodeId, getStoreItems, onChange, onEnd }) {
  const selection2 = select_default2(domNode);
  function update({ controlPosition, boundaries, keepAspectRatio, onResizeStart, onResize, onResizeEnd, shouldResize }) {
    let prevValues = { ...initPrevValues };
    let startValues = { ...initStartValues };
    const controlDirection = getControlDirection(controlPosition);
    let node = void 0;
    let containerBounds = null;
    let childNodes = [];
    let parentNode = void 0;
    let parentExtent = void 0;
    let childExtent = void 0;
    const dragHandler = drag_default().on("start", (event) => {
      var _a, _b, _c, _d, _e, _f;
      const { nodeLookup, transform: transform2, snapGrid, snapToGrid, nodeOrigin, paneDomNode } = getStoreItems();
      node = nodeLookup.get(nodeId);
      if (!node) {
        return;
      }
      containerBounds = (_a = paneDomNode == null ? void 0 : paneDomNode.getBoundingClientRect()) != null ? _a : null;
      const { xSnapped, ySnapped } = getPointerPosition(event.sourceEvent, {
        transform: transform2,
        snapGrid,
        snapToGrid,
        containerBounds
      });
      prevValues = {
        width: (_b = node.measured.width) != null ? _b : 0,
        height: (_c = node.measured.height) != null ? _c : 0,
        x: (_d = node.position.x) != null ? _d : 0,
        y: (_e = node.position.y) != null ? _e : 0
      };
      startValues = {
        ...prevValues,
        pointerX: xSnapped,
        pointerY: ySnapped,
        aspectRatio: prevValues.width / prevValues.height
      };
      parentNode = void 0;
      if (node.parentId && (node.extent === "parent" || node.expandParent)) {
        parentNode = nodeLookup.get(node.parentId);
        parentExtent = parentNode && node.extent === "parent" ? nodeToParentExtent(parentNode) : void 0;
      }
      childNodes = [];
      childExtent = void 0;
      for (const [childId, child] of nodeLookup) {
        if (child.parentId === nodeId) {
          childNodes.push({
            id: childId,
            position: { ...child.position },
            extent: child.extent
          });
          if (child.extent === "parent" || child.expandParent) {
            const extent = nodeToChildExtent(child, node, (_f = child.origin) != null ? _f : nodeOrigin);
            if (childExtent) {
              childExtent = [
                [Math.min(extent[0][0], childExtent[0][0]), Math.min(extent[0][1], childExtent[0][1])],
                [Math.max(extent[1][0], childExtent[1][0]), Math.max(extent[1][1], childExtent[1][1])]
              ];
            } else {
              childExtent = extent;
            }
          }
        }
      }
      onResizeStart == null ? void 0 : onResizeStart(event, { ...prevValues });
    }).on("drag", (event) => {
      var _a, _b, _c;
      const { transform: transform2, snapGrid, snapToGrid, nodeOrigin: storeNodeOrigin } = getStoreItems();
      const pointerPosition = getPointerPosition(event.sourceEvent, {
        transform: transform2,
        snapGrid,
        snapToGrid,
        containerBounds
      });
      const childChanges = [];
      if (!node) {
        return;
      }
      const { x: prevX, y: prevY, width: prevWidth, height: prevHeight } = prevValues;
      const change = {};
      const nodeOrigin = (_a = node.origin) != null ? _a : storeNodeOrigin;
      const { width, height, x, y } = getDimensionsAfterResize(startValues, controlDirection, pointerPosition, boundaries, keepAspectRatio, nodeOrigin, parentExtent, childExtent);
      const isWidthChange = width !== prevWidth;
      const isHeightChange = height !== prevHeight;
      const isXPosChange = x !== prevX && isWidthChange;
      const isYPosChange = y !== prevY && isHeightChange;
      if (!isXPosChange && !isYPosChange && !isWidthChange && !isHeightChange) {
        return;
      }
      if (isXPosChange || isYPosChange || nodeOrigin[0] === 1 || nodeOrigin[1] === 1) {
        change.x = isXPosChange ? x : prevValues.x;
        change.y = isYPosChange ? y : prevValues.y;
        prevValues.x = change.x;
        prevValues.y = change.y;
        if (childNodes.length > 0) {
          const xChange = x - prevX;
          const yChange = y - prevY;
          for (const childNode of childNodes) {
            childNode.position = {
              x: childNode.position.x - xChange + nodeOrigin[0] * (width - prevWidth),
              y: childNode.position.y - yChange + nodeOrigin[1] * (height - prevHeight)
            };
            childChanges.push(childNode);
          }
        }
      }
      if (isWidthChange || isHeightChange) {
        change.width = isWidthChange ? width : prevValues.width;
        change.height = isHeightChange ? height : prevValues.height;
        prevValues.width = change.width;
        prevValues.height = change.height;
      }
      if (parentNode && node.expandParent) {
        const xLimit = nodeOrigin[0] * ((_b = change.width) != null ? _b : 0);
        if (change.x && change.x < xLimit) {
          prevValues.x = xLimit;
          startValues.x = startValues.x - (change.x - xLimit);
        }
        const yLimit = nodeOrigin[1] * ((_c = change.height) != null ? _c : 0);
        if (change.y && change.y < yLimit) {
          prevValues.y = yLimit;
          startValues.y = startValues.y - (change.y - yLimit);
        }
      }
      const direction = getResizeDirection({
        width: prevValues.width,
        prevWidth,
        height: prevValues.height,
        prevHeight,
        affectsX: controlDirection.affectsX,
        affectsY: controlDirection.affectsY
      });
      const nextValues = { ...prevValues, direction };
      const callResize = shouldResize == null ? void 0 : shouldResize(event, nextValues);
      if (callResize === false) {
        return;
      }
      onResize == null ? void 0 : onResize(event, nextValues);
      onChange(change, childChanges);
    }).on("end", (event) => {
      onResizeEnd == null ? void 0 : onResizeEnd(event, { ...prevValues });
      onEnd == null ? void 0 : onEnd();
    });
    selection2.call(dragHandler);
  }
  function destroy() {
    selection2.on(".drag", null);
  }
  return {
    update,
    destroy
  };
}

// ../node_modules/.pnpm/@xyflow+react@12.3.5_@types+react@19.0.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@xyflow/react/dist/esm/index.js
var import_react2 = __toESM(require_react());

// ../node_modules/.pnpm/zustand@4.5.4_@types+react@19.0.8_react@19.0.0/node_modules/zustand/esm/traditional.mjs
var import_react = __toESM(require_react(), 1);
var import_with_selector = __toESM(require_with_selector(), 1);

// ../node_modules/.pnpm/zustand@4.5.4_@types+react@19.0.8_react@19.0.0/node_modules/zustand/esm/vanilla.mjs
var createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const getInitialState2 = () => initialState;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => {
    if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production") {
      console.warn(
        "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
      );
    }
    listeners.clear();
  };
  const api = { setState, getState, getInitialState: getInitialState2, subscribe, destroy };
  const initialState = state = createState(setState, getState, api);
  return api;
};
var createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;

// ../node_modules/.pnpm/zustand@4.5.4_@types+react@19.0.8_react@19.0.0/node_modules/zustand/esm/traditional.mjs
var { useDebugValue } = import_react.default;
var { useSyncExternalStoreWithSelector } = import_with_selector.default;
var identity3 = (arg) => arg;
function useStoreWithEqualityFn(api, selector = identity3, equalityFn) {
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getInitialState,
    selector,
    equalityFn
  );
  useDebugValue(slice);
  return slice;
}
var createWithEqualityFnImpl = (createState, defaultEqualityFn) => {
  const api = createStore(createState);
  const useBoundStoreWithEqualityFn = (selector, equalityFn = defaultEqualityFn) => useStoreWithEqualityFn(api, selector, equalityFn);
  Object.assign(useBoundStoreWithEqualityFn, api);
  return useBoundStoreWithEqualityFn;
};
var createWithEqualityFn = (createState, defaultEqualityFn) => createState ? createWithEqualityFnImpl(createState, defaultEqualityFn) : createWithEqualityFnImpl;

// ../node_modules/.pnpm/zustand@4.5.4_@types+react@19.0.8_react@19.0.0/node_modules/zustand/esm/shallow.mjs
function shallow$1(objA, objB) {
  if (Object.is(objA, objB)) {
    return true;
  }
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  if (objA instanceof Map && objB instanceof Map) {
    if (objA.size !== objB.size) return false;
    for (const [key, value] of objA) {
      if (!Object.is(value, objB.get(key))) {
        return false;
      }
    }
    return true;
  }
  if (objA instanceof Set && objB instanceof Set) {
    if (objA.size !== objB.size) return false;
    for (const value of objA) {
      if (!objB.has(value)) {
        return false;
      }
    }
    return true;
  }
  const keysA = Object.keys(objA);
  if (keysA.length !== Object.keys(objB).length) {
    return false;
  }
  for (const keyA of keysA) {
    if (!Object.prototype.hasOwnProperty.call(objB, keyA) || !Object.is(objA[keyA], objB[keyA])) {
      return false;
    }
  }
  return true;
}

// ../node_modules/.pnpm/@xyflow+react@12.3.5_@types+react@19.0.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@xyflow/react/dist/esm/index.js
var import_react_dom = __toESM(require_react_dom());
var StoreContext = (0, import_react2.createContext)(null);
var Provider$1 = StoreContext.Provider;
var zustandErrorMessage = errorMessages["error001"]();
function useStore(selector, equalityFn) {
  const store = (0, import_react2.useContext)(StoreContext);
  if (store === null) {
    throw new Error(zustandErrorMessage);
  }
  return useStoreWithEqualityFn(store, selector, equalityFn);
}
function useStoreApi() {
  const store = (0, import_react2.useContext)(StoreContext);
  if (store === null) {
    throw new Error(zustandErrorMessage);
  }
  return (0, import_react2.useMemo)(() => ({
    getState: store.getState,
    setState: store.setState,
    subscribe: store.subscribe
  }), [store]);
}
var style = { display: "none" };
var ariaLiveStyle = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
};
var ARIA_NODE_DESC_KEY = "react-flow__node-desc";
var ARIA_EDGE_DESC_KEY = "react-flow__edge-desc";
var ARIA_LIVE_MESSAGE = "react-flow__aria-live";
var selector$o = (s) => s.ariaLiveMessage;
function AriaLiveMessage({ rfId }) {
  const ariaLiveMessage = useStore(selector$o);
  return (0, import_jsx_runtime.jsx)("div", { id: `${ARIA_LIVE_MESSAGE}-${rfId}`, "aria-live": "assertive", "aria-atomic": "true", style: ariaLiveStyle, children: ariaLiveMessage });
}
function A11yDescriptions({ rfId, disableKeyboardA11y }) {
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsxs)("div", { id: `${ARIA_NODE_DESC_KEY}-${rfId}`, style, children: ["Press enter or space to select a node.", !disableKeyboardA11y && "You can then use the arrow keys to move the node around.", " Press delete to remove it and escape to cancel.", " "] }), (0, import_jsx_runtime.jsx)("div", { id: `${ARIA_EDGE_DESC_KEY}-${rfId}`, style, children: "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel." }), !disableKeyboardA11y && (0, import_jsx_runtime.jsx)(AriaLiveMessage, { rfId })] });
}
var selector$n = (s) => s.userSelectionActive ? "none" : "all";
function Panel({ position = "top-left", children: children2, className, style: style2, ...rest }) {
  const pointerEvents = useStore(selector$n);
  const positionClasses = `${position}`.split("-");
  return (0, import_jsx_runtime.jsx)("div", { className: cc(["react-flow__panel", className, ...positionClasses]), style: { ...style2, pointerEvents }, ...rest, children: children2 });
}
function Attribution({ proOptions, position = "bottom-right" }) {
  if (proOptions == null ? void 0 : proOptions.hideAttribution) {
    return null;
  }
  return (0, import_jsx_runtime.jsx)(Panel, { position, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev", children: (0, import_jsx_runtime.jsx)("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
var selector$m = (s) => {
  const selectedNodes = [];
  const selectedEdges = [];
  for (const [, node] of s.nodeLookup) {
    if (node.selected) {
      selectedNodes.push(node.internals.userNode);
    }
  }
  for (const [, edge] of s.edgeLookup) {
    if (edge.selected) {
      selectedEdges.push(edge);
    }
  }
  return { selectedNodes, selectedEdges };
};
var selectId = (obj) => obj.id;
function areEqual(a, b) {
  return shallow$1(a.selectedNodes.map(selectId), b.selectedNodes.map(selectId)) && shallow$1(a.selectedEdges.map(selectId), b.selectedEdges.map(selectId));
}
function SelectionListenerInner({ onSelectionChange }) {
  const store = useStoreApi();
  const { selectedNodes, selectedEdges } = useStore(selector$m, areEqual);
  (0, import_react2.useEffect)(() => {
    const params = { nodes: selectedNodes, edges: selectedEdges };
    onSelectionChange == null ? void 0 : onSelectionChange(params);
    store.getState().onSelectionChangeHandlers.forEach((fn) => fn(params));
  }, [selectedNodes, selectedEdges, onSelectionChange]);
  return null;
}
var changeSelector = (s) => !!s.onSelectionChangeHandlers;
function SelectionListener({ onSelectionChange }) {
  const storeHasSelectionChangeHandlers = useStore(changeSelector);
  if (onSelectionChange || storeHasSelectionChangeHandlers) {
    return (0, import_jsx_runtime.jsx)(SelectionListenerInner, { onSelectionChange });
  }
  return null;
}
var defaultNodeOrigin = [0, 0];
var defaultViewport = { x: 0, y: 0, zoom: 1 };
var reactFlowFieldsToTrack = [
  "nodes",
  "edges",
  "defaultNodes",
  "defaultEdges",
  "onConnect",
  "onConnectStart",
  "onConnectEnd",
  "onClickConnectStart",
  "onClickConnectEnd",
  "nodesDraggable",
  "nodesConnectable",
  "nodesFocusable",
  "edgesFocusable",
  "edgesReconnectable",
  "elevateNodesOnSelect",
  "elevateEdgesOnSelect",
  "minZoom",
  "maxZoom",
  "nodeExtent",
  "onNodesChange",
  "onEdgesChange",
  "elementsSelectable",
  "connectionMode",
  "snapGrid",
  "snapToGrid",
  "translateExtent",
  "connectOnClick",
  "defaultEdgeOptions",
  "fitView",
  "fitViewOptions",
  "onNodesDelete",
  "onEdgesDelete",
  "onDelete",
  "onNodeDrag",
  "onNodeDragStart",
  "onNodeDragStop",
  "onSelectionDrag",
  "onSelectionDragStart",
  "onSelectionDragStop",
  "onMoveStart",
  "onMove",
  "onMoveEnd",
  "noPanClassName",
  "nodeOrigin",
  "autoPanOnConnect",
  "autoPanOnNodeDrag",
  "onError",
  "connectionRadius",
  "isValidConnection",
  "selectNodesOnDrag",
  "nodeDragThreshold",
  "onBeforeDelete",
  "debug",
  "autoPanSpeed",
  "paneClickDistance"
];
var fieldsToTrack = [...reactFlowFieldsToTrack, "rfId"];
var selector$l = (s) => ({
  setNodes: s.setNodes,
  setEdges: s.setEdges,
  setMinZoom: s.setMinZoom,
  setMaxZoom: s.setMaxZoom,
  setTranslateExtent: s.setTranslateExtent,
  setNodeExtent: s.setNodeExtent,
  reset: s.reset,
  setDefaultNodesAndEdges: s.setDefaultNodesAndEdges,
  setPaneClickDistance: s.setPaneClickDistance
});
var initPrevValues2 = {
  // these are values that are also passed directly to other components
  // than the StoreUpdater. We can reduce the number of setStore calls
  // by setting the same values here as prev fields.
  translateExtent: infiniteExtent,
  nodeOrigin: defaultNodeOrigin,
  minZoom: 0.5,
  maxZoom: 2,
  elementsSelectable: true,
  noPanClassName: "nopan",
  rfId: "1",
  paneClickDistance: 0
};
function StoreUpdater(props) {
  const { setNodes, setEdges, setMinZoom, setMaxZoom, setTranslateExtent, setNodeExtent, reset, setDefaultNodesAndEdges, setPaneClickDistance } = useStore(selector$l, shallow$1);
  const store = useStoreApi();
  (0, import_react2.useEffect)(() => {
    setDefaultNodesAndEdges(props.defaultNodes, props.defaultEdges);
    return () => {
      previousFields.current = initPrevValues2;
      reset();
    };
  }, []);
  const previousFields = (0, import_react2.useRef)(initPrevValues2);
  (0, import_react2.useEffect)(
    () => {
      for (const fieldName of fieldsToTrack) {
        const fieldValue = props[fieldName];
        const previousFieldValue = previousFields.current[fieldName];
        if (fieldValue === previousFieldValue)
          continue;
        if (typeof props[fieldName] === "undefined")
          continue;
        if (fieldName === "nodes")
          setNodes(fieldValue);
        else if (fieldName === "edges")
          setEdges(fieldValue);
        else if (fieldName === "minZoom")
          setMinZoom(fieldValue);
        else if (fieldName === "maxZoom")
          setMaxZoom(fieldValue);
        else if (fieldName === "translateExtent")
          setTranslateExtent(fieldValue);
        else if (fieldName === "nodeExtent")
          setNodeExtent(fieldValue);
        else if (fieldName === "paneClickDistance")
          setPaneClickDistance(fieldValue);
        else if (fieldName === "fitView")
          store.setState({ fitViewOnInit: fieldValue });
        else if (fieldName === "fitViewOptions")
          store.setState({ fitViewOnInitOptions: fieldValue });
        else
          store.setState({ [fieldName]: fieldValue });
      }
      previousFields.current = props;
    },
    // Only re-run the effect if one of the fields we track changes
    fieldsToTrack.map((fieldName) => props[fieldName])
  );
  return null;
}
function getMediaQuery() {
  if (typeof window === "undefined" || !window.matchMedia) {
    return null;
  }
  return window.matchMedia("(prefers-color-scheme: dark)");
}
function useColorModeClass(colorMode) {
  var _a;
  const [colorModeClass, setColorModeClass] = (0, import_react2.useState)(colorMode === "system" ? null : colorMode);
  (0, import_react2.useEffect)(() => {
    if (colorMode !== "system") {
      setColorModeClass(colorMode);
      return;
    }
    const mediaQuery = getMediaQuery();
    const updateColorModeClass = () => setColorModeClass((mediaQuery == null ? void 0 : mediaQuery.matches) ? "dark" : "light");
    updateColorModeClass();
    mediaQuery == null ? void 0 : mediaQuery.addEventListener("change", updateColorModeClass);
    return () => {
      mediaQuery == null ? void 0 : mediaQuery.removeEventListener("change", updateColorModeClass);
    };
  }, [colorMode]);
  return colorModeClass !== null ? colorModeClass : ((_a = getMediaQuery()) == null ? void 0 : _a.matches) ? "dark" : "light";
}
var defaultDoc = typeof document !== "undefined" ? document : null;
function useKeyPress(keyCode = null, options = { target: defaultDoc, actInsideInputWithModifier: true }) {
  const [keyPressed, setKeyPressed] = (0, import_react2.useState)(false);
  const modifierPressed = (0, import_react2.useRef)(false);
  const pressedKeys = (0, import_react2.useRef)(/* @__PURE__ */ new Set([]));
  const [keyCodes, keysToWatch] = (0, import_react2.useMemo)(() => {
    if (keyCode !== null) {
      const keyCodeArr = Array.isArray(keyCode) ? keyCode : [keyCode];
      const keys = keyCodeArr.filter((kc) => typeof kc === "string").map((kc) => kc.replace("+", "\n").replace("\n\n", "\n+").split("\n"));
      const keysFlat = keys.reduce((res, item) => res.concat(...item), []);
      return [keys, keysFlat];
    }
    return [[], []];
  }, [keyCode]);
  (0, import_react2.useEffect)(() => {
    const target = (options == null ? void 0 : options.target) || defaultDoc;
    if (keyCode !== null) {
      const downHandler = (event) => {
        modifierPressed.current = event.ctrlKey || event.metaKey || event.shiftKey;
        const preventAction = (!modifierPressed.current || modifierPressed.current && !options.actInsideInputWithModifier) && isInputDOMNode(event);
        if (preventAction) {
          return false;
        }
        const keyOrCode = useKeyOrCode(event.code, keysToWatch);
        pressedKeys.current.add(event[keyOrCode]);
        if (isMatchingKey(keyCodes, pressedKeys.current, false)) {
          event.preventDefault();
          setKeyPressed(true);
        }
      };
      const upHandler = (event) => {
        const preventAction = (!modifierPressed.current || modifierPressed.current && !options.actInsideInputWithModifier) && isInputDOMNode(event);
        if (preventAction) {
          return false;
        }
        const keyOrCode = useKeyOrCode(event.code, keysToWatch);
        if (isMatchingKey(keyCodes, pressedKeys.current, true)) {
          setKeyPressed(false);
          pressedKeys.current.clear();
        } else {
          pressedKeys.current.delete(event[keyOrCode]);
        }
        if (event.key === "Meta") {
          pressedKeys.current.clear();
        }
        modifierPressed.current = false;
      };
      const resetHandler = () => {
        pressedKeys.current.clear();
        setKeyPressed(false);
      };
      target == null ? void 0 : target.addEventListener("keydown", downHandler);
      target == null ? void 0 : target.addEventListener("keyup", upHandler);
      window.addEventListener("blur", resetHandler);
      window.addEventListener("contextmenu", resetHandler);
      return () => {
        target == null ? void 0 : target.removeEventListener("keydown", downHandler);
        target == null ? void 0 : target.removeEventListener("keyup", upHandler);
        window.removeEventListener("blur", resetHandler);
        window.removeEventListener("contextmenu", resetHandler);
      };
    }
  }, [keyCode, setKeyPressed]);
  return keyPressed;
}
function isMatchingKey(keyCodes, pressedKeys, isUp) {
  return keyCodes.filter((keys) => isUp || keys.length === pressedKeys.size).some((keys) => keys.every((k) => pressedKeys.has(k)));
}
function useKeyOrCode(eventCode, keysToWatch) {
  return keysToWatch.includes(eventCode) ? "code" : "key";
}
var useViewportHelper = () => {
  const store = useStoreApi();
  return (0, import_react2.useMemo)(() => {
    return {
      zoomIn: (options) => {
        const { panZoom } = store.getState();
        return panZoom ? panZoom.scaleBy(1.2, { duration: options == null ? void 0 : options.duration }) : Promise.resolve(false);
      },
      zoomOut: (options) => {
        const { panZoom } = store.getState();
        return panZoom ? panZoom.scaleBy(1 / 1.2, { duration: options == null ? void 0 : options.duration }) : Promise.resolve(false);
      },
      zoomTo: (zoomLevel, options) => {
        const { panZoom } = store.getState();
        return panZoom ? panZoom.scaleTo(zoomLevel, { duration: options == null ? void 0 : options.duration }) : Promise.resolve(false);
      },
      getZoom: () => store.getState().transform[2],
      setViewport: async (viewport, options) => {
        var _a, _b, _c;
        const { transform: [tX, tY, tZoom], panZoom } = store.getState();
        if (!panZoom) {
          return Promise.resolve(false);
        }
        await panZoom.setViewport({
          x: (_a = viewport.x) != null ? _a : tX,
          y: (_b = viewport.y) != null ? _b : tY,
          zoom: (_c = viewport.zoom) != null ? _c : tZoom
        }, { duration: options == null ? void 0 : options.duration });
        return Promise.resolve(true);
      },
      getViewport: () => {
        const [x, y, zoom] = store.getState().transform;
        return { x, y, zoom };
      },
      fitView: (options) => {
        const { nodeLookup, minZoom, maxZoom, panZoom, domNode } = store.getState();
        if (!panZoom || !domNode) {
          return Promise.resolve(false);
        }
        const fitViewNodes = getFitViewNodes(nodeLookup, options);
        const { width, height } = getDimensions(domNode);
        return fitView({
          nodes: fitViewNodes,
          width,
          height,
          minZoom,
          maxZoom,
          panZoom
        }, options);
      },
      setCenter: async (x, y, options) => {
        const { width, height, maxZoom, panZoom } = store.getState();
        const nextZoom = typeof (options == null ? void 0 : options.zoom) !== "undefined" ? options.zoom : maxZoom;
        const centerX = width / 2 - x * nextZoom;
        const centerY = height / 2 - y * nextZoom;
        if (!panZoom) {
          return Promise.resolve(false);
        }
        await panZoom.setViewport({
          x: centerX,
          y: centerY,
          zoom: nextZoom
        }, { duration: options == null ? void 0 : options.duration });
        return Promise.resolve(true);
      },
      fitBounds: async (bounds, options) => {
        var _a;
        const { width, height, minZoom, maxZoom, panZoom } = store.getState();
        const viewport = getViewportForBounds(bounds, width, height, minZoom, maxZoom, (_a = options == null ? void 0 : options.padding) != null ? _a : 0.1);
        if (!panZoom) {
          return Promise.resolve(false);
        }
        await panZoom.setViewport(viewport, { duration: options == null ? void 0 : options.duration });
        return Promise.resolve(true);
      },
      screenToFlowPosition: (clientPosition, options = { snapToGrid: true }) => {
        const { transform: transform2, snapGrid, domNode } = store.getState();
        if (!domNode) {
          return clientPosition;
        }
        const { x: domX, y: domY } = domNode.getBoundingClientRect();
        const correctedPosition = {
          x: clientPosition.x - domX,
          y: clientPosition.y - domY
        };
        return pointToRendererPoint(correctedPosition, transform2, options.snapToGrid, snapGrid);
      },
      flowToScreenPosition: (flowPosition) => {
        const { transform: transform2, domNode } = store.getState();
        if (!domNode) {
          return flowPosition;
        }
        const { x: domX, y: domY } = domNode.getBoundingClientRect();
        const rendererPosition = rendererPointToPoint(flowPosition, transform2);
        return {
          x: rendererPosition.x + domX,
          y: rendererPosition.y + domY
        };
      }
    };
  }, []);
};
function applyChanges(changes, elements) {
  const updatedElements = [];
  const changesMap = /* @__PURE__ */ new Map();
  const addItemChanges = [];
  for (const change of changes) {
    if (change.type === "add") {
      addItemChanges.push(change);
      continue;
    } else if (change.type === "remove" || change.type === "replace") {
      changesMap.set(change.id, [change]);
    } else {
      const elementChanges = changesMap.get(change.id);
      if (elementChanges) {
        elementChanges.push(change);
      } else {
        changesMap.set(change.id, [change]);
      }
    }
  }
  for (const element of elements) {
    const changes2 = changesMap.get(element.id);
    if (!changes2) {
      updatedElements.push(element);
      continue;
    }
    if (changes2[0].type === "remove") {
      continue;
    }
    if (changes2[0].type === "replace") {
      updatedElements.push({ ...changes2[0].item });
      continue;
    }
    const updatedElement = { ...element };
    for (const change of changes2) {
      applyChange(change, updatedElement);
    }
    updatedElements.push(updatedElement);
  }
  if (addItemChanges.length) {
    addItemChanges.forEach((change) => {
      if (change.index !== void 0) {
        updatedElements.splice(change.index, 0, { ...change.item });
      } else {
        updatedElements.push({ ...change.item });
      }
    });
  }
  return updatedElements;
}
function applyChange(change, element) {
  var _a;
  switch (change.type) {
    case "select": {
      element.selected = change.selected;
      break;
    }
    case "position": {
      if (typeof change.position !== "undefined") {
        element.position = change.position;
      }
      if (typeof change.dragging !== "undefined") {
        element.dragging = change.dragging;
      }
      break;
    }
    case "dimensions": {
      if (typeof change.dimensions !== "undefined") {
        (_a = element.measured) != null ? _a : element.measured = {};
        element.measured.width = change.dimensions.width;
        element.measured.height = change.dimensions.height;
        if (change.setAttributes) {
          element.width = change.dimensions.width;
          element.height = change.dimensions.height;
        }
      }
      if (typeof change.resizing === "boolean") {
        element.resizing = change.resizing;
      }
      break;
    }
  }
}
function applyNodeChanges(changes, nodes) {
  return applyChanges(changes, nodes);
}
function applyEdgeChanges(changes, edges) {
  return applyChanges(changes, edges);
}
function createSelectionChange(id2, selected2) {
  return {
    id: id2,
    type: "select",
    selected: selected2
  };
}
function getSelectionChanges(items, selectedIds = /* @__PURE__ */ new Set(), mutateItem = false) {
  const changes = [];
  for (const [id2, item] of items) {
    const willBeSelected = selectedIds.has(id2);
    if (!(item.selected === void 0 && !willBeSelected) && item.selected !== willBeSelected) {
      if (mutateItem) {
        item.selected = willBeSelected;
      }
      changes.push(createSelectionChange(item.id, willBeSelected));
    }
  }
  return changes;
}
function getElementsDiffChanges({ items = [], lookup }) {
  var _a, _b;
  const changes = [];
  const itemsLookup = new Map(items.map((item) => [item.id, item]));
  for (const [index2, item] of items.entries()) {
    const lookupItem = lookup.get(item.id);
    const storeItem = (_b = (_a = lookupItem == null ? void 0 : lookupItem.internals) == null ? void 0 : _a.userNode) != null ? _b : lookupItem;
    if (storeItem !== void 0 && storeItem !== item) {
      changes.push({ id: item.id, item, type: "replace" });
    }
    if (storeItem === void 0) {
      changes.push({ item, type: "add", index: index2 });
    }
  }
  for (const [id2] of lookup) {
    const nextNode = itemsLookup.get(id2);
    if (nextNode === void 0) {
      changes.push({ id: id2, type: "remove" });
    }
  }
  return changes;
}
function elementToRemoveChange(item) {
  return {
    id: item.id,
    type: "remove"
  };
}
var isNode = (element) => isNodeBase(element);
var isEdge = (element) => isEdgeBase(element);
function fixedForwardRef(render2) {
  return (0, import_react2.forwardRef)(render2);
}
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react2.useLayoutEffect : import_react2.useEffect;
function useQueue(runQueue) {
  const [serial, setSerial] = (0, import_react2.useState)(BigInt(0));
  const [queue] = (0, import_react2.useState)(() => createQueue(() => setSerial((n) => n + BigInt(1))));
  useIsomorphicLayoutEffect(() => {
    const queueItems = queue.get();
    if (queueItems.length) {
      runQueue(queueItems);
      queue.reset();
    }
  }, [serial]);
  return queue;
}
function createQueue(cb) {
  let queue = [];
  return {
    get: () => queue,
    reset: () => {
      queue = [];
    },
    push: (item) => {
      queue.push(item);
      cb();
    }
  };
}
var BatchContext = (0, import_react2.createContext)(null);
function BatchProvider({ children: children2 }) {
  const store = useStoreApi();
  const nodeQueueHandler = (0, import_react2.useCallback)((queueItems) => {
    const { nodes = [], setNodes, hasDefaultNodes, onNodesChange, nodeLookup } = store.getState();
    let next = nodes;
    for (const payload of queueItems) {
      next = typeof payload === "function" ? payload(next) : payload;
    }
    if (hasDefaultNodes) {
      setNodes(next);
    } else if (onNodesChange) {
      onNodesChange(getElementsDiffChanges({
        items: next,
        lookup: nodeLookup
      }));
    }
  }, []);
  const nodeQueue = useQueue(nodeQueueHandler);
  const edgeQueueHandler = (0, import_react2.useCallback)((queueItems) => {
    const { edges = [], setEdges, hasDefaultEdges, onEdgesChange, edgeLookup } = store.getState();
    let next = edges;
    for (const payload of queueItems) {
      next = typeof payload === "function" ? payload(next) : payload;
    }
    if (hasDefaultEdges) {
      setEdges(next);
    } else if (onEdgesChange) {
      onEdgesChange(getElementsDiffChanges({
        items: next,
        lookup: edgeLookup
      }));
    }
  }, []);
  const edgeQueue = useQueue(edgeQueueHandler);
  const value = (0, import_react2.useMemo)(() => ({ nodeQueue, edgeQueue }), []);
  return (0, import_jsx_runtime.jsx)(BatchContext.Provider, { value, children: children2 });
}
function useBatchContext() {
  const batchContext = (0, import_react2.useContext)(BatchContext);
  if (!batchContext) {
    throw new Error("useBatchContext must be used within a BatchProvider");
  }
  return batchContext;
}
var selector$k = (s) => !!s.panZoom;
function useReactFlow() {
  const viewportHelper = useViewportHelper();
  const store = useStoreApi();
  const batchContext = useBatchContext();
  const viewportInitialized = useStore(selector$k);
  const generalHelper = (0, import_react2.useMemo)(() => {
    const getInternalNode = (id2) => store.getState().nodeLookup.get(id2);
    const setNodes = (payload) => {
      batchContext.nodeQueue.push(payload);
    };
    const setEdges = (payload) => {
      batchContext.edgeQueue.push(payload);
    };
    const getNodeRect = (node) => {
      var _a, _b, _c, _d;
      const { nodeLookup, nodeOrigin } = store.getState();
      const nodeToUse = isNode(node) ? node : nodeLookup.get(node.id);
      const position = nodeToUse.parentId ? evaluateAbsolutePosition(nodeToUse.position, nodeToUse.measured, nodeToUse.parentId, nodeLookup, nodeOrigin) : nodeToUse.position;
      const nodeWithPosition = {
        id: nodeToUse.id,
        position,
        width: (_b = (_a = nodeToUse.measured) == null ? void 0 : _a.width) != null ? _b : nodeToUse.width,
        height: (_d = (_c = nodeToUse.measured) == null ? void 0 : _c.height) != null ? _d : nodeToUse.height,
        data: nodeToUse.data
      };
      return nodeToRect(nodeWithPosition);
    };
    const updateNode = (id2, nodeUpdate, options = { replace: false }) => {
      setNodes((prevNodes) => prevNodes.map((node) => {
        if (node.id === id2) {
          const nextNode = typeof nodeUpdate === "function" ? nodeUpdate(node) : nodeUpdate;
          return options.replace && isNode(nextNode) ? nextNode : { ...node, ...nextNode };
        }
        return node;
      }));
    };
    const updateEdge = (id2, edgeUpdate, options = { replace: false }) => {
      setEdges((prevEdges) => prevEdges.map((edge) => {
        if (edge.id === id2) {
          const nextEdge = typeof edgeUpdate === "function" ? edgeUpdate(edge) : edgeUpdate;
          return options.replace && isEdge(nextEdge) ? nextEdge : { ...edge, ...nextEdge };
        }
        return edge;
      }));
    };
    return {
      getNodes: () => store.getState().nodes.map((n) => ({ ...n })),
      getNode: (id2) => {
        var _a;
        return (_a = getInternalNode(id2)) == null ? void 0 : _a.internals.userNode;
      },
      getInternalNode,
      getEdges: () => {
        const { edges = [] } = store.getState();
        return edges.map((e) => ({ ...e }));
      },
      getEdge: (id2) => store.getState().edgeLookup.get(id2),
      setNodes,
      setEdges,
      addNodes: (payload) => {
        const newNodes = Array.isArray(payload) ? payload : [payload];
        batchContext.nodeQueue.push((nodes) => [...nodes, ...newNodes]);
      },
      addEdges: (payload) => {
        const newEdges = Array.isArray(payload) ? payload : [payload];
        batchContext.edgeQueue.push((edges) => [...edges, ...newEdges]);
      },
      toObject: () => {
        const { nodes = [], edges = [], transform: transform2 } = store.getState();
        const [x, y, zoom] = transform2;
        return {
          nodes: nodes.map((n) => ({ ...n })),
          edges: edges.map((e) => ({ ...e })),
          viewport: {
            x,
            y,
            zoom
          }
        };
      },
      deleteElements: async ({ nodes: nodesToRemove = [], edges: edgesToRemove = [] }) => {
        const { nodes, edges, onNodesDelete, onEdgesDelete, triggerNodeChanges, triggerEdgeChanges, onDelete, onBeforeDelete } = store.getState();
        const { nodes: matchingNodes, edges: matchingEdges } = await getElementsToRemove({
          nodesToRemove,
          edgesToRemove,
          nodes,
          edges,
          onBeforeDelete
        });
        const hasMatchingEdges = matchingEdges.length > 0;
        const hasMatchingNodes = matchingNodes.length > 0;
        if (hasMatchingEdges) {
          const edgeChanges = matchingEdges.map(elementToRemoveChange);
          onEdgesDelete == null ? void 0 : onEdgesDelete(matchingEdges);
          triggerEdgeChanges(edgeChanges);
        }
        if (hasMatchingNodes) {
          const nodeChanges = matchingNodes.map(elementToRemoveChange);
          onNodesDelete == null ? void 0 : onNodesDelete(matchingNodes);
          triggerNodeChanges(nodeChanges);
        }
        if (hasMatchingNodes || hasMatchingEdges) {
          onDelete == null ? void 0 : onDelete({ nodes: matchingNodes, edges: matchingEdges });
        }
        return { deletedNodes: matchingNodes, deletedEdges: matchingEdges };
      },
      getIntersectingNodes: (nodeOrRect, partially = true, nodes) => {
        const isRect = isRectObject(nodeOrRect);
        const nodeRect = isRect ? nodeOrRect : getNodeRect(nodeOrRect);
        const hasNodesOption = nodes !== void 0;
        if (!nodeRect) {
          return [];
        }
        return (nodes || store.getState().nodes).filter((n) => {
          const internalNode = store.getState().nodeLookup.get(n.id);
          if (internalNode && !isRect && (n.id === nodeOrRect.id || !internalNode.internals.positionAbsolute)) {
            return false;
          }
          const currNodeRect = nodeToRect(hasNodesOption ? n : internalNode);
          const overlappingArea = getOverlappingArea(currNodeRect, nodeRect);
          const partiallyVisible = partially && overlappingArea > 0;
          return partiallyVisible || overlappingArea >= nodeRect.width * nodeRect.height;
        });
      },
      isNodeIntersecting: (nodeOrRect, area, partially = true) => {
        const isRect = isRectObject(nodeOrRect);
        const nodeRect = isRect ? nodeOrRect : getNodeRect(nodeOrRect);
        if (!nodeRect) {
          return false;
        }
        const overlappingArea = getOverlappingArea(nodeRect, area);
        const partiallyVisible = partially && overlappingArea > 0;
        return partiallyVisible || overlappingArea >= nodeRect.width * nodeRect.height;
      },
      updateNode,
      updateNodeData: (id2, dataUpdate, options = { replace: false }) => {
        updateNode(id2, (node) => {
          const nextData = typeof dataUpdate === "function" ? dataUpdate(node) : dataUpdate;
          return options.replace ? { ...node, data: nextData } : { ...node, data: { ...node.data, ...nextData } };
        }, options);
      },
      updateEdge,
      updateEdgeData: (id2, dataUpdate, options = { replace: false }) => {
        updateEdge(id2, (edge) => {
          const nextData = typeof dataUpdate === "function" ? dataUpdate(edge) : dataUpdate;
          return options.replace ? { ...edge, data: nextData } : { ...edge, data: { ...edge.data, ...nextData } };
        }, options);
      },
      getNodesBounds: (nodes) => {
        const { nodeLookup, nodeOrigin } = store.getState();
        return getNodesBounds(nodes, { nodeLookup, nodeOrigin });
      },
      getHandleConnections: ({ type, id: id2, nodeId }) => {
        var _a, _b;
        return Array.from((_b = (_a = store.getState().connectionLookup.get(`${nodeId}-${type}-${id2 != null ? id2 : null}`)) == null ? void 0 : _a.values()) != null ? _b : []);
      }
    };
  }, []);
  return (0, import_react2.useMemo)(() => {
    return {
      ...generalHelper,
      ...viewportHelper,
      viewportInitialized
    };
  }, [viewportInitialized]);
}
var selected = (item) => item.selected;
var deleteKeyOptions = { actInsideInputWithModifier: false };
var win$1 = typeof window !== "undefined" ? window : void 0;
function useGlobalKeyHandler({ deleteKeyCode, multiSelectionKeyCode }) {
  const store = useStoreApi();
  const { deleteElements } = useReactFlow();
  const deleteKeyPressed = useKeyPress(deleteKeyCode, deleteKeyOptions);
  const multiSelectionKeyPressed = useKeyPress(multiSelectionKeyCode, { target: win$1 });
  (0, import_react2.useEffect)(() => {
    if (deleteKeyPressed) {
      const { edges, nodes } = store.getState();
      deleteElements({ nodes: nodes.filter(selected), edges: edges.filter(selected) });
      store.setState({ nodesSelectionActive: false });
    }
  }, [deleteKeyPressed]);
  (0, import_react2.useEffect)(() => {
    store.setState({ multiSelectionActive: multiSelectionKeyPressed });
  }, [multiSelectionKeyPressed]);
}
function useResizeHandler(domNode) {
  const store = useStoreApi();
  (0, import_react2.useEffect)(() => {
    const updateDimensions = () => {
      var _a, _b;
      if (!domNode.current) {
        return false;
      }
      const size = getDimensions(domNode.current);
      if (size.height === 0 || size.width === 0) {
        (_b = (_a = store.getState()).onError) == null ? void 0 : _b.call(_a, "004", errorMessages["error004"]());
      }
      store.setState({ width: size.width || 500, height: size.height || 500 });
    };
    if (domNode.current) {
      updateDimensions();
      window.addEventListener("resize", updateDimensions);
      const resizeObserver = new ResizeObserver(() => updateDimensions());
      resizeObserver.observe(domNode.current);
      return () => {
        window.removeEventListener("resize", updateDimensions);
        if (resizeObserver && domNode.current) {
          resizeObserver.unobserve(domNode.current);
        }
      };
    }
  }, []);
}
var containerStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
};
var selector$j = (s) => ({
  userSelectionActive: s.userSelectionActive,
  lib: s.lib
});
function ZoomPane({ onPaneContextMenu, zoomOnScroll = true, zoomOnPinch = true, panOnScroll = false, panOnScrollSpeed = 0.5, panOnScrollMode = PanOnScrollMode.Free, zoomOnDoubleClick = true, panOnDrag = true, defaultViewport: defaultViewport2, translateExtent, minZoom, maxZoom, zoomActivationKeyCode, preventScrolling = true, children: children2, noWheelClassName, noPanClassName, onViewportChange, isControlledViewport, paneClickDistance }) {
  const store = useStoreApi();
  const zoomPane = (0, import_react2.useRef)(null);
  const { userSelectionActive, lib } = useStore(selector$j, shallow$1);
  const zoomActivationKeyPressed = useKeyPress(zoomActivationKeyCode);
  const panZoom = (0, import_react2.useRef)();
  useResizeHandler(zoomPane);
  const onTransformChange = (0, import_react2.useCallback)((transform2) => {
    onViewportChange == null ? void 0 : onViewportChange({ x: transform2[0], y: transform2[1], zoom: transform2[2] });
    if (!isControlledViewport) {
      store.setState({ transform: transform2 });
    }
  }, [onViewportChange, isControlledViewport]);
  (0, import_react2.useEffect)(() => {
    if (zoomPane.current) {
      panZoom.current = XYPanZoom({
        domNode: zoomPane.current,
        minZoom,
        maxZoom,
        translateExtent,
        viewport: defaultViewport2,
        paneClickDistance,
        onDraggingChange: (paneDragging) => store.setState({ paneDragging }),
        onPanZoomStart: (event, vp) => {
          const { onViewportChangeStart, onMoveStart } = store.getState();
          onMoveStart == null ? void 0 : onMoveStart(event, vp);
          onViewportChangeStart == null ? void 0 : onViewportChangeStart(vp);
        },
        onPanZoom: (event, vp) => {
          const { onViewportChange: onViewportChange2, onMove } = store.getState();
          onMove == null ? void 0 : onMove(event, vp);
          onViewportChange2 == null ? void 0 : onViewportChange2(vp);
        },
        onPanZoomEnd: (event, vp) => {
          const { onViewportChangeEnd, onMoveEnd } = store.getState();
          onMoveEnd == null ? void 0 : onMoveEnd(event, vp);
          onViewportChangeEnd == null ? void 0 : onViewportChangeEnd(vp);
        }
      });
      const { x, y, zoom } = panZoom.current.getViewport();
      store.setState({
        panZoom: panZoom.current,
        transform: [x, y, zoom],
        domNode: zoomPane.current.closest(".react-flow")
      });
      return () => {
        var _a;
        (_a = panZoom.current) == null ? void 0 : _a.destroy();
      };
    }
  }, []);
  (0, import_react2.useEffect)(() => {
    var _a;
    (_a = panZoom.current) == null ? void 0 : _a.update({
      onPaneContextMenu,
      zoomOnScroll,
      zoomOnPinch,
      panOnScroll,
      panOnScrollSpeed,
      panOnScrollMode,
      zoomOnDoubleClick,
      panOnDrag,
      zoomActivationKeyPressed,
      preventScrolling,
      noPanClassName,
      userSelectionActive,
      noWheelClassName,
      lib,
      onTransformChange
    });
  }, [
    onPaneContextMenu,
    zoomOnScroll,
    zoomOnPinch,
    panOnScroll,
    panOnScrollSpeed,
    panOnScrollMode,
    zoomOnDoubleClick,
    panOnDrag,
    zoomActivationKeyPressed,
    preventScrolling,
    noPanClassName,
    userSelectionActive,
    noWheelClassName,
    lib,
    onTransformChange
  ]);
  return (0, import_jsx_runtime.jsx)("div", { className: "react-flow__renderer", ref: zoomPane, style: containerStyle, children: children2 });
}
var selector$i = (s) => ({
  userSelectionActive: s.userSelectionActive,
  userSelectionRect: s.userSelectionRect
});
function UserSelection() {
  const { userSelectionActive, userSelectionRect } = useStore(selector$i, shallow$1);
  const isActive = userSelectionActive && userSelectionRect;
  if (!isActive) {
    return null;
  }
  return (0, import_jsx_runtime.jsx)("div", { className: "react-flow__selection react-flow__container", style: {
    width: userSelectionRect.width,
    height: userSelectionRect.height,
    transform: `translate(${userSelectionRect.x}px, ${userSelectionRect.y}px)`
  } });
}
var wrapHandler = (handler, containerRef) => {
  return (event) => {
    if (event.target !== containerRef.current) {
      return;
    }
    handler == null ? void 0 : handler(event);
  };
};
var selector$h = (s) => ({
  userSelectionActive: s.userSelectionActive,
  elementsSelectable: s.elementsSelectable,
  dragging: s.paneDragging
});
function Pane({ isSelecting, selectionKeyPressed, selectionMode = SelectionMode.Full, panOnDrag, selectionOnDrag, onSelectionStart, onSelectionEnd, onPaneClick, onPaneContextMenu, onPaneScroll, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, children: children2 }) {
  const container = (0, import_react2.useRef)(null);
  const store = useStoreApi();
  const prevSelectedNodesCount = (0, import_react2.useRef)(0);
  const prevSelectedEdgesCount = (0, import_react2.useRef)(0);
  const containerBounds = (0, import_react2.useRef)();
  const edgeIdLookup = (0, import_react2.useRef)(/* @__PURE__ */ new Map());
  const { userSelectionActive, elementsSelectable, dragging } = useStore(selector$h, shallow$1);
  const hasActiveSelection = elementsSelectable && (isSelecting || userSelectionActive);
  const selectionInProgress = (0, import_react2.useRef)(false);
  const selectionStarted = (0, import_react2.useRef)(false);
  const resetUserSelection = () => {
    store.setState({ userSelectionActive: false, userSelectionRect: null });
    prevSelectedNodesCount.current = 0;
    prevSelectedEdgesCount.current = 0;
  };
  const onClick = (event) => {
    if (selectionInProgress.current) {
      selectionInProgress.current = false;
      return;
    }
    onPaneClick == null ? void 0 : onPaneClick(event);
    store.getState().resetSelectedElements();
    store.setState({ nodesSelectionActive: false });
  };
  const onContextMenu = (event) => {
    if (Array.isArray(panOnDrag) && (panOnDrag == null ? void 0 : panOnDrag.includes(2))) {
      event.preventDefault();
      return;
    }
    onPaneContextMenu == null ? void 0 : onPaneContextMenu(event);
  };
  const onWheel = onPaneScroll ? (event) => onPaneScroll(event) : void 0;
  const onPointerDown2 = (event) => {
    var _a, _b, _c, _d;
    const { resetSelectedElements, domNode, edgeLookup } = store.getState();
    containerBounds.current = domNode == null ? void 0 : domNode.getBoundingClientRect();
    if (!elementsSelectable || !isSelecting || event.button !== 0 || event.target !== container.current || !containerBounds.current) {
      return;
    }
    (_b = (_a = event.target) == null ? void 0 : _a.setPointerCapture) == null ? void 0 : _b.call(_a, event.pointerId);
    selectionStarted.current = true;
    selectionInProgress.current = false;
    edgeIdLookup.current = /* @__PURE__ */ new Map();
    for (const [id2, edge] of edgeLookup) {
      edgeIdLookup.current.set(edge.source, ((_c = edgeIdLookup.current.get(edge.source)) == null ? void 0 : _c.add(id2)) || /* @__PURE__ */ new Set([id2]));
      edgeIdLookup.current.set(edge.target, ((_d = edgeIdLookup.current.get(edge.target)) == null ? void 0 : _d.add(id2)) || /* @__PURE__ */ new Set([id2]));
    }
    const { x, y } = getEventPosition(event.nativeEvent, containerBounds.current);
    resetSelectedElements();
    store.setState({
      userSelectionRect: {
        width: 0,
        height: 0,
        startX: x,
        startY: y,
        x,
        y
      }
    });
    onSelectionStart == null ? void 0 : onSelectionStart(event);
  };
  const onPointerMove = (event) => {
    const { userSelectionRect, edgeLookup, transform: transform2, nodeLookup, triggerNodeChanges, triggerEdgeChanges } = store.getState();
    if (!containerBounds.current || !userSelectionRect) {
      return;
    }
    selectionInProgress.current = true;
    const { x: mouseX, y: mouseY } = getEventPosition(event.nativeEvent, containerBounds.current);
    const { startX, startY } = userSelectionRect;
    const nextUserSelectRect = {
      startX,
      startY,
      x: mouseX < startX ? mouseX : startX,
      y: mouseY < startY ? mouseY : startY,
      width: Math.abs(mouseX - startX),
      height: Math.abs(mouseY - startY)
    };
    const selectedNodes = getNodesInside(nodeLookup, nextUserSelectRect, transform2, selectionMode === SelectionMode.Partial, true);
    const selectedEdgeIds = /* @__PURE__ */ new Set();
    const selectedNodeIds = /* @__PURE__ */ new Set();
    for (const selectedNode of selectedNodes) {
      selectedNodeIds.add(selectedNode.id);
      const edgeIds = edgeIdLookup.current.get(selectedNode.id);
      if (edgeIds) {
        for (const edgeId of edgeIds) {
          selectedEdgeIds.add(edgeId);
        }
      }
    }
    if (prevSelectedNodesCount.current !== selectedNodeIds.size) {
      prevSelectedNodesCount.current = selectedNodeIds.size;
      const changes = getSelectionChanges(nodeLookup, selectedNodeIds, true);
      triggerNodeChanges(changes);
    }
    if (prevSelectedEdgesCount.current !== selectedEdgeIds.size) {
      prevSelectedEdgesCount.current = selectedEdgeIds.size;
      const changes = getSelectionChanges(edgeLookup, selectedEdgeIds);
      triggerEdgeChanges(changes);
    }
    store.setState({
      userSelectionRect: nextUserSelectRect,
      userSelectionActive: true,
      nodesSelectionActive: false
    });
  };
  const onPointerUp = (event) => {
    var _a, _b;
    if (event.button !== 0 || !selectionStarted.current) {
      return;
    }
    (_b = (_a = event.target) == null ? void 0 : _a.releasePointerCapture) == null ? void 0 : _b.call(_a, event.pointerId);
    const { userSelectionRect } = store.getState();
    if (!userSelectionActive && userSelectionRect && event.target === container.current) {
      onClick == null ? void 0 : onClick(event);
    }
    if (prevSelectedNodesCount.current > 0) {
      store.setState({ nodesSelectionActive: true });
    }
    resetUserSelection();
    onSelectionEnd == null ? void 0 : onSelectionEnd(event);
    if (selectionKeyPressed || selectionOnDrag) {
      selectionInProgress.current = false;
    }
    selectionStarted.current = false;
  };
  const draggable = panOnDrag === true || Array.isArray(panOnDrag) && panOnDrag.includes(0);
  return (0, import_jsx_runtime.jsxs)("div", { className: cc(["react-flow__pane", { draggable, dragging, selection: isSelecting }]), onClick: hasActiveSelection ? void 0 : wrapHandler(onClick, container), onContextMenu: wrapHandler(onContextMenu, container), onWheel: wrapHandler(onWheel, container), onPointerEnter: hasActiveSelection ? void 0 : onPaneMouseEnter, onPointerDown: hasActiveSelection ? onPointerDown2 : onPaneMouseMove, onPointerMove: hasActiveSelection ? onPointerMove : onPaneMouseMove, onPointerUp: hasActiveSelection ? onPointerUp : void 0, onPointerLeave: onPaneMouseLeave, ref: container, style: containerStyle, children: [children2, (0, import_jsx_runtime.jsx)(UserSelection, {})] });
}
function handleNodeClick({ id: id2, store, unselect = false, nodeRef }) {
  const { addSelectedNodes, unselectNodesAndEdges, multiSelectionActive, nodeLookup, onError } = store.getState();
  const node = nodeLookup.get(id2);
  if (!node) {
    onError == null ? void 0 : onError("012", errorMessages["error012"](id2));
    return;
  }
  store.setState({ nodesSelectionActive: false });
  if (!node.selected) {
    addSelectedNodes([id2]);
  } else if (unselect || node.selected && multiSelectionActive) {
    unselectNodesAndEdges({ nodes: [node], edges: [] });
    requestAnimationFrame(() => {
      var _a;
      return (_a = nodeRef == null ? void 0 : nodeRef.current) == null ? void 0 : _a.blur();
    });
  }
}
function useDrag({ nodeRef, disabled = false, noDragClassName, handleSelector, nodeId, isSelectable, nodeClickDistance }) {
  const store = useStoreApi();
  const [dragging, setDragging] = (0, import_react2.useState)(false);
  const xyDrag = (0, import_react2.useRef)();
  (0, import_react2.useEffect)(() => {
    xyDrag.current = XYDrag({
      getStoreItems: () => store.getState(),
      onNodeMouseDown: (id2) => {
        handleNodeClick({
          id: id2,
          store,
          nodeRef
        });
      },
      onDragStart: () => {
        setDragging(true);
      },
      onDragStop: () => {
        setDragging(false);
      }
    });
  }, []);
  (0, import_react2.useEffect)(() => {
    var _a, _b;
    if (disabled) {
      (_a = xyDrag.current) == null ? void 0 : _a.destroy();
    } else if (nodeRef.current) {
      (_b = xyDrag.current) == null ? void 0 : _b.update({
        noDragClassName,
        handleSelector,
        domNode: nodeRef.current,
        isSelectable,
        nodeId,
        nodeClickDistance
      });
      return () => {
        var _a2;
        (_a2 = xyDrag.current) == null ? void 0 : _a2.destroy();
      };
    }
  }, [noDragClassName, handleSelector, disabled, isSelectable, nodeRef, nodeId]);
  return dragging;
}
var selectedAndDraggable = (nodesDraggable) => (n) => n.selected && (n.draggable || nodesDraggable && typeof n.draggable === "undefined");
function useMoveSelectedNodes() {
  const store = useStoreApi();
  const moveSelectedNodes = (0, import_react2.useCallback)((params) => {
    const { nodeExtent, snapToGrid, snapGrid, nodesDraggable, onError, updateNodePositions, nodeLookup, nodeOrigin } = store.getState();
    const nodeUpdates = /* @__PURE__ */ new Map();
    const isSelected = selectedAndDraggable(nodesDraggable);
    const xVelo = snapToGrid ? snapGrid[0] : 5;
    const yVelo = snapToGrid ? snapGrid[1] : 5;
    const xDiff = params.direction.x * xVelo * params.factor;
    const yDiff = params.direction.y * yVelo * params.factor;
    for (const [, node] of nodeLookup) {
      if (!isSelected(node)) {
        continue;
      }
      let nextPosition = {
        x: node.internals.positionAbsolute.x + xDiff,
        y: node.internals.positionAbsolute.y + yDiff
      };
      if (snapToGrid) {
        nextPosition = snapPosition(nextPosition, snapGrid);
      }
      const { position, positionAbsolute } = calculateNodePosition({
        nodeId: node.id,
        nextPosition,
        nodeLookup,
        nodeExtent,
        nodeOrigin,
        onError
      });
      node.position = position;
      node.internals.positionAbsolute = positionAbsolute;
      nodeUpdates.set(node.id, node);
    }
    updateNodePositions(nodeUpdates);
  }, []);
  return moveSelectedNodes;
}
var NodeIdContext = (0, import_react2.createContext)(null);
var Provider = NodeIdContext.Provider;
NodeIdContext.Consumer;
var useNodeId = () => {
  const nodeId = (0, import_react2.useContext)(NodeIdContext);
  return nodeId;
};
var selector$g = (s) => ({
  connectOnClick: s.connectOnClick,
  noPanClassName: s.noPanClassName,
  rfId: s.rfId
});
var connectingSelector = (nodeId, handleId, type) => (state) => {
  const { connectionClickStartHandle: clickHandle, connectionMode, connection } = state;
  const { fromHandle, toHandle, isValid } = connection;
  const connectingTo = (toHandle == null ? void 0 : toHandle.nodeId) === nodeId && (toHandle == null ? void 0 : toHandle.id) === handleId && (toHandle == null ? void 0 : toHandle.type) === type;
  return {
    connectingFrom: (fromHandle == null ? void 0 : fromHandle.nodeId) === nodeId && (fromHandle == null ? void 0 : fromHandle.id) === handleId && (fromHandle == null ? void 0 : fromHandle.type) === type,
    connectingTo,
    clickConnecting: (clickHandle == null ? void 0 : clickHandle.nodeId) === nodeId && (clickHandle == null ? void 0 : clickHandle.id) === handleId && (clickHandle == null ? void 0 : clickHandle.type) === type,
    isPossibleEndHandle: connectionMode === ConnectionMode.Strict ? (fromHandle == null ? void 0 : fromHandle.type) !== type : nodeId !== (fromHandle == null ? void 0 : fromHandle.nodeId) || handleId !== (fromHandle == null ? void 0 : fromHandle.id),
    connectionInProcess: !!fromHandle,
    valid: connectingTo && isValid
  };
};
function HandleComponent({ type = "source", position = Position.Top, isValidConnection, isConnectable = true, isConnectableStart = true, isConnectableEnd = true, id: id2, onConnect, children: children2, className, onMouseDown, onTouchStart, ...rest }, ref) {
  var _a, _b;
  const handleId = id2 || null;
  const isTarget = type === "target";
  const store = useStoreApi();
  const nodeId = useNodeId();
  const { connectOnClick, noPanClassName, rfId } = useStore(selector$g, shallow$1);
  const { connectingFrom, connectingTo, clickConnecting, isPossibleEndHandle, connectionInProcess, valid } = useStore(connectingSelector(nodeId, handleId, type), shallow$1);
  if (!nodeId) {
    (_b = (_a = store.getState()).onError) == null ? void 0 : _b.call(_a, "010", errorMessages["error010"]());
  }
  const onConnectExtended = (params) => {
    const { defaultEdgeOptions, onConnect: onConnectAction, hasDefaultEdges } = store.getState();
    const edgeParams = {
      ...defaultEdgeOptions,
      ...params
    };
    if (hasDefaultEdges) {
      const { edges, setEdges } = store.getState();
      setEdges(addEdge(edgeParams, edges));
    }
    onConnectAction == null ? void 0 : onConnectAction(edgeParams);
    onConnect == null ? void 0 : onConnect(edgeParams);
  };
  const onPointerDown2 = (event) => {
    if (!nodeId) {
      return;
    }
    const isMouseTriggered = isMouseEvent(event.nativeEvent);
    if (isConnectableStart && (isMouseTriggered && event.button === 0 || !isMouseTriggered)) {
      const currentStore = store.getState();
      XYHandle.onPointerDown(event.nativeEvent, {
        autoPanOnConnect: currentStore.autoPanOnConnect,
        connectionMode: currentStore.connectionMode,
        connectionRadius: currentStore.connectionRadius,
        domNode: currentStore.domNode,
        nodeLookup: currentStore.nodeLookup,
        lib: currentStore.lib,
        isTarget,
        handleId,
        nodeId,
        flowId: currentStore.rfId,
        panBy: currentStore.panBy,
        cancelConnection: currentStore.cancelConnection,
        onConnectStart: currentStore.onConnectStart,
        onConnectEnd: currentStore.onConnectEnd,
        updateConnection: currentStore.updateConnection,
        onConnect: onConnectExtended,
        isValidConnection: isValidConnection || currentStore.isValidConnection,
        getTransform: () => store.getState().transform,
        getFromHandle: () => store.getState().connection.fromHandle,
        autoPanSpeed: currentStore.autoPanSpeed
      });
    }
    if (isMouseTriggered) {
      onMouseDown == null ? void 0 : onMouseDown(event);
    } else {
      onTouchStart == null ? void 0 : onTouchStart(event);
    }
  };
  const onClick = (event) => {
    const { onClickConnectStart, onClickConnectEnd, connectionClickStartHandle, connectionMode, isValidConnection: isValidConnectionStore, lib, rfId: flowId, nodeLookup, connection: connectionState } = store.getState();
    if (!nodeId || !connectionClickStartHandle && !isConnectableStart) {
      return;
    }
    if (!connectionClickStartHandle) {
      onClickConnectStart == null ? void 0 : onClickConnectStart(event.nativeEvent, { nodeId, handleId, handleType: type });
      store.setState({ connectionClickStartHandle: { nodeId, type, id: handleId } });
      return;
    }
    const doc = getHostForElement(event.target);
    const isValidConnectionHandler = isValidConnection || isValidConnectionStore;
    const { connection, isValid } = XYHandle.isValid(event.nativeEvent, {
      handle: {
        nodeId,
        id: handleId,
        type
      },
      connectionMode,
      fromNodeId: connectionClickStartHandle.nodeId,
      fromHandleId: connectionClickStartHandle.id || null,
      fromType: connectionClickStartHandle.type,
      isValidConnection: isValidConnectionHandler,
      flowId,
      doc,
      lib,
      nodeLookup
    });
    if (isValid && connection) {
      onConnectExtended(connection);
    }
    const connectionClone = structuredClone(connectionState);
    delete connectionClone.inProgress;
    connectionClone.toPosition = connectionClone.toHandle ? connectionClone.toHandle.position : null;
    onClickConnectEnd == null ? void 0 : onClickConnectEnd(event, connectionClone);
    store.setState({ connectionClickStartHandle: null });
  };
  return (0, import_jsx_runtime.jsx)("div", { "data-handleid": handleId, "data-nodeid": nodeId, "data-handlepos": position, "data-id": `${rfId}-${nodeId}-${handleId}-${type}`, className: cc([
    "react-flow__handle",
    `react-flow__handle-${position}`,
    "nodrag",
    noPanClassName,
    className,
    {
      source: !isTarget,
      target: isTarget,
      connectable: isConnectable,
      connectablestart: isConnectableStart,
      connectableend: isConnectableEnd,
      clickconnecting: clickConnecting,
      connectingfrom: connectingFrom,
      connectingto: connectingTo,
      valid,
      // shows where you can start a connection from
      // and where you can end it while connecting
      connectionindicator: isConnectable && (!connectionInProcess || isPossibleEndHandle) && (connectionInProcess ? isConnectableEnd : isConnectableStart)
    }
  ]), onMouseDown: onPointerDown2, onTouchStart: onPointerDown2, onClick: connectOnClick ? onClick : void 0, ref, ...rest, children: children2 });
}
var Handle = (0, import_react2.memo)(fixedForwardRef(HandleComponent));
function InputNode({ data, isConnectable, sourcePosition = Position.Bottom }) {
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [data == null ? void 0 : data.label, (0, import_jsx_runtime.jsx)(Handle, { type: "source", position: sourcePosition, isConnectable })] });
}
function DefaultNode({ data, isConnectable, targetPosition = Position.Top, sourcePosition = Position.Bottom }) {
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)(Handle, { type: "target", position: targetPosition, isConnectable }), data == null ? void 0 : data.label, (0, import_jsx_runtime.jsx)(Handle, { type: "source", position: sourcePosition, isConnectable })] });
}
function GroupNode() {
  return null;
}
function OutputNode({ data, isConnectable, targetPosition = Position.Top }) {
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)(Handle, { type: "target", position: targetPosition, isConnectable }), data == null ? void 0 : data.label] });
}
var arrowKeyDiffs = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var builtinNodeTypes = {
  input: InputNode,
  default: DefaultNode,
  output: OutputNode,
  group: GroupNode
};
function getNodeInlineStyleDimensions(node) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  if (node.internals.handleBounds === void 0) {
    return {
      width: (_c = (_a = node.width) != null ? _a : node.initialWidth) != null ? _c : (_b = node.style) == null ? void 0 : _b.width,
      height: (_f = (_d = node.height) != null ? _d : node.initialHeight) != null ? _f : (_e = node.style) == null ? void 0 : _e.height
    };
  }
  return {
    width: (_h = node.width) != null ? _h : (_g = node.style) == null ? void 0 : _g.width,
    height: (_j = node.height) != null ? _j : (_i = node.style) == null ? void 0 : _i.height
  };
}
var selector$f = (s) => {
  const { width, height, x, y } = getInternalNodesBounds(s.nodeLookup, {
    filter: (node) => !!node.selected
  });
  return {
    width: isNumeric(width) ? width : null,
    height: isNumeric(height) ? height : null,
    userSelectionActive: s.userSelectionActive,
    transformString: `translate(${s.transform[0]}px,${s.transform[1]}px) scale(${s.transform[2]}) translate(${x}px,${y}px)`
  };
};
function NodesSelection({ onSelectionContextMenu, noPanClassName, disableKeyboardA11y }) {
  const store = useStoreApi();
  const { width, height, transformString, userSelectionActive } = useStore(selector$f, shallow$1);
  const moveSelectedNodes = useMoveSelectedNodes();
  const nodeRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    var _a;
    if (!disableKeyboardA11y) {
      (_a = nodeRef.current) == null ? void 0 : _a.focus({
        preventScroll: true
      });
    }
  }, [disableKeyboardA11y]);
  useDrag({
    nodeRef
  });
  if (userSelectionActive || !width || !height) {
    return null;
  }
  const onContextMenu = onSelectionContextMenu ? (event) => {
    const selectedNodes = store.getState().nodes.filter((n) => n.selected);
    onSelectionContextMenu(event, selectedNodes);
  } : void 0;
  const onKeyDown = (event) => {
    if (Object.prototype.hasOwnProperty.call(arrowKeyDiffs, event.key)) {
      moveSelectedNodes({
        direction: arrowKeyDiffs[event.key],
        factor: event.shiftKey ? 4 : 1
      });
    }
  };
  return (0, import_jsx_runtime.jsx)("div", { className: cc(["react-flow__nodesselection", "react-flow__container", noPanClassName]), style: {
    transform: transformString
  }, children: (0, import_jsx_runtime.jsx)("div", { ref: nodeRef, className: "react-flow__nodesselection-rect", onContextMenu, tabIndex: disableKeyboardA11y ? void 0 : -1, onKeyDown: disableKeyboardA11y ? void 0 : onKeyDown, style: {
    width,
    height
  } }) });
}
var win = typeof window !== "undefined" ? window : void 0;
var selector$e = (s) => {
  return { nodesSelectionActive: s.nodesSelectionActive, userSelectionActive: s.userSelectionActive };
};
function FlowRendererComponent({ children: children2, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneContextMenu, onPaneScroll, paneClickDistance, deleteKeyCode, selectionKeyCode, selectionOnDrag, selectionMode, onSelectionStart, onSelectionEnd, multiSelectionKeyCode, panActivationKeyCode, zoomActivationKeyCode, elementsSelectable, zoomOnScroll, zoomOnPinch, panOnScroll: _panOnScroll, panOnScrollSpeed, panOnScrollMode, zoomOnDoubleClick, panOnDrag: _panOnDrag, defaultViewport: defaultViewport2, translateExtent, minZoom, maxZoom, preventScrolling, onSelectionContextMenu, noWheelClassName, noPanClassName, disableKeyboardA11y, onViewportChange, isControlledViewport }) {
  const { nodesSelectionActive, userSelectionActive } = useStore(selector$e);
  const selectionKeyPressed = useKeyPress(selectionKeyCode, { target: win });
  const panActivationKeyPressed = useKeyPress(panActivationKeyCode, { target: win });
  const panOnDrag = panActivationKeyPressed || _panOnDrag;
  const panOnScroll = panActivationKeyPressed || _panOnScroll;
  const _selectionOnDrag = selectionOnDrag && panOnDrag !== true;
  const isSelecting = selectionKeyPressed || userSelectionActive || _selectionOnDrag;
  useGlobalKeyHandler({ deleteKeyCode, multiSelectionKeyCode });
  return (0, import_jsx_runtime.jsx)(ZoomPane, { onPaneContextMenu, elementsSelectable, zoomOnScroll, zoomOnPinch, panOnScroll, panOnScrollSpeed, panOnScrollMode, zoomOnDoubleClick, panOnDrag: !selectionKeyPressed && panOnDrag, defaultViewport: defaultViewport2, translateExtent, minZoom, maxZoom, zoomActivationKeyCode, preventScrolling, noWheelClassName, noPanClassName, onViewportChange, isControlledViewport, paneClickDistance, children: (0, import_jsx_runtime.jsxs)(Pane, { onSelectionStart, onSelectionEnd, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneContextMenu, onPaneScroll, panOnDrag, isSelecting: !!isSelecting, selectionMode, selectionKeyPressed, selectionOnDrag: _selectionOnDrag, children: [children2, nodesSelectionActive && (0, import_jsx_runtime.jsx)(NodesSelection, { onSelectionContextMenu, noPanClassName, disableKeyboardA11y })] }) });
}
FlowRendererComponent.displayName = "FlowRenderer";
var FlowRenderer = (0, import_react2.memo)(FlowRendererComponent);
var selector$d = (onlyRenderVisible) => (s) => {
  return onlyRenderVisible ? getNodesInside(s.nodeLookup, { x: 0, y: 0, width: s.width, height: s.height }, s.transform, true).map((node) => node.id) : Array.from(s.nodeLookup.keys());
};
function useVisibleNodeIds(onlyRenderVisible) {
  const nodeIds = useStore((0, import_react2.useCallback)(selector$d(onlyRenderVisible), [onlyRenderVisible]), shallow$1);
  return nodeIds;
}
var selector$c = (s) => s.updateNodeInternals;
function useResizeObserver() {
  const updateNodeInternals2 = useStore(selector$c);
  const [resizeObserver] = (0, import_react2.useState)(() => {
    if (typeof ResizeObserver === "undefined") {
      return null;
    }
    return new ResizeObserver((entries) => {
      const updates = /* @__PURE__ */ new Map();
      entries.forEach((entry) => {
        const id2 = entry.target.getAttribute("data-id");
        updates.set(id2, {
          id: id2,
          nodeElement: entry.target,
          force: true
        });
      });
      updateNodeInternals2(updates);
    });
  });
  (0, import_react2.useEffect)(() => {
    return () => {
      resizeObserver == null ? void 0 : resizeObserver.disconnect();
    };
  }, [resizeObserver]);
  return resizeObserver;
}
function useNodeObserver({ node, nodeType, hasDimensions, resizeObserver }) {
  const store = useStoreApi();
  const nodeRef = (0, import_react2.useRef)(null);
  const observedNode = (0, import_react2.useRef)(null);
  const prevSourcePosition = (0, import_react2.useRef)(node.sourcePosition);
  const prevTargetPosition = (0, import_react2.useRef)(node.targetPosition);
  const prevType = (0, import_react2.useRef)(nodeType);
  const isInitialized = hasDimensions && !!node.internals.handleBounds;
  (0, import_react2.useEffect)(() => {
    if (nodeRef.current && !node.hidden && (!isInitialized || observedNode.current !== nodeRef.current)) {
      if (observedNode.current) {
        resizeObserver == null ? void 0 : resizeObserver.unobserve(observedNode.current);
      }
      resizeObserver == null ? void 0 : resizeObserver.observe(nodeRef.current);
      observedNode.current = nodeRef.current;
    }
  }, [isInitialized, node.hidden]);
  (0, import_react2.useEffect)(() => {
    return () => {
      if (observedNode.current) {
        resizeObserver == null ? void 0 : resizeObserver.unobserve(observedNode.current);
        observedNode.current = null;
      }
    };
  }, []);
  (0, import_react2.useEffect)(() => {
    if (nodeRef.current) {
      const typeChanged = prevType.current !== nodeType;
      const sourcePosChanged = prevSourcePosition.current !== node.sourcePosition;
      const targetPosChanged = prevTargetPosition.current !== node.targetPosition;
      if (typeChanged || sourcePosChanged || targetPosChanged) {
        prevType.current = nodeType;
        prevSourcePosition.current = node.sourcePosition;
        prevTargetPosition.current = node.targetPosition;
        store.getState().updateNodeInternals(/* @__PURE__ */ new Map([[node.id, { id: node.id, nodeElement: nodeRef.current, force: true }]]));
      }
    }
  }, [node.id, nodeType, node.sourcePosition, node.targetPosition]);
  return nodeRef;
}
function NodeWrapper({ id: id2, onClick, onMouseEnter, onMouseMove, onMouseLeave, onContextMenu, onDoubleClick, nodesDraggable, elementsSelectable, nodesConnectable, nodesFocusable, resizeObserver, noDragClassName, noPanClassName, disableKeyboardA11y, rfId, nodeTypes, nodeExtent, nodeClickDistance, onError }) {
  var _a;
  const { node, internals, isParent } = useStore((s) => {
    const node2 = s.nodeLookup.get(id2);
    const isParent2 = s.parentLookup.has(id2);
    return {
      node: node2,
      internals: node2.internals,
      isParent: isParent2
    };
  }, shallow$1);
  let nodeType = node.type || "default";
  let NodeComponent = (nodeTypes == null ? void 0 : nodeTypes[nodeType]) || builtinNodeTypes[nodeType];
  if (NodeComponent === void 0) {
    onError == null ? void 0 : onError("003", errorMessages["error003"](nodeType));
    nodeType = "default";
    NodeComponent = builtinNodeTypes.default;
  }
  const isDraggable = !!(node.draggable || nodesDraggable && typeof node.draggable === "undefined");
  const isSelectable = !!(node.selectable || elementsSelectable && typeof node.selectable === "undefined");
  const isConnectable = !!(node.connectable || nodesConnectable && typeof node.connectable === "undefined");
  const isFocusable = !!(node.focusable || nodesFocusable && typeof node.focusable === "undefined");
  const store = useStoreApi();
  const hasDimensions = nodeHasDimensions(node);
  const nodeRef = useNodeObserver({ node, nodeType, hasDimensions, resizeObserver });
  const dragging = useDrag({
    nodeRef,
    disabled: node.hidden || !isDraggable,
    noDragClassName,
    handleSelector: node.dragHandle,
    nodeId: id2,
    isSelectable,
    nodeClickDistance
  });
  const moveSelectedNodes = useMoveSelectedNodes();
  if (node.hidden) {
    return null;
  }
  const nodeDimensions = getNodeDimensions(node);
  const inlineDimensions = getNodeInlineStyleDimensions(node);
  const hasPointerEvents = isSelectable || isDraggable || onClick || onMouseEnter || onMouseMove || onMouseLeave;
  const onMouseEnterHandler = onMouseEnter ? (event) => onMouseEnter(event, { ...internals.userNode }) : void 0;
  const onMouseMoveHandler = onMouseMove ? (event) => onMouseMove(event, { ...internals.userNode }) : void 0;
  const onMouseLeaveHandler = onMouseLeave ? (event) => onMouseLeave(event, { ...internals.userNode }) : void 0;
  const onContextMenuHandler = onContextMenu ? (event) => onContextMenu(event, { ...internals.userNode }) : void 0;
  const onDoubleClickHandler = onDoubleClick ? (event) => onDoubleClick(event, { ...internals.userNode }) : void 0;
  const onSelectNodeHandler = (event) => {
    const { selectNodesOnDrag, nodeDragThreshold } = store.getState();
    if (isSelectable && (!selectNodesOnDrag || !isDraggable || nodeDragThreshold > 0)) {
      handleNodeClick({
        id: id2,
        store,
        nodeRef
      });
    }
    if (onClick) {
      onClick(event, { ...internals.userNode });
    }
  };
  const onKeyDown = (event) => {
    if (isInputDOMNode(event.nativeEvent) || disableKeyboardA11y) {
      return;
    }
    if (elementSelectionKeys.includes(event.key) && isSelectable) {
      const unselect = event.key === "Escape";
      handleNodeClick({
        id: id2,
        store,
        unselect,
        nodeRef
      });
    } else if (isDraggable && node.selected && Object.prototype.hasOwnProperty.call(arrowKeyDiffs, event.key)) {
      store.setState({
        ariaLiveMessage: `Moved selected node ${event.key.replace("Arrow", "").toLowerCase()}. New position, x: ${~~internals.positionAbsolute.x}, y: ${~~internals.positionAbsolute.y}`
      });
      moveSelectedNodes({
        direction: arrowKeyDiffs[event.key],
        factor: event.shiftKey ? 4 : 1
      });
    }
  };
  return (0, import_jsx_runtime.jsx)("div", { className: cc([
    "react-flow__node",
    `react-flow__node-${nodeType}`,
    {
      // this is overwritable by passing `nopan` as a class name
      [noPanClassName]: isDraggable
    },
    node.className,
    {
      selected: node.selected,
      selectable: isSelectable,
      parent: isParent,
      draggable: isDraggable,
      dragging
    }
  ]), ref: nodeRef, style: {
    zIndex: internals.z,
    transform: `translate(${internals.positionAbsolute.x}px,${internals.positionAbsolute.y}px)`,
    pointerEvents: hasPointerEvents ? "all" : "none",
    visibility: hasDimensions ? "visible" : "hidden",
    ...node.style,
    ...inlineDimensions
  }, "data-id": id2, "data-testid": `rf__node-${id2}`, onMouseEnter: onMouseEnterHandler, onMouseMove: onMouseMoveHandler, onMouseLeave: onMouseLeaveHandler, onContextMenu: onContextMenuHandler, onClick: onSelectNodeHandler, onDoubleClick: onDoubleClickHandler, onKeyDown: isFocusable ? onKeyDown : void 0, tabIndex: isFocusable ? 0 : void 0, role: isFocusable ? "button" : void 0, "aria-describedby": disableKeyboardA11y ? void 0 : `${ARIA_NODE_DESC_KEY}-${rfId}`, "aria-label": node.ariaLabel, children: (0, import_jsx_runtime.jsx)(Provider, { value: id2, children: (0, import_jsx_runtime.jsx)(NodeComponent, { id: id2, data: node.data, type: nodeType, positionAbsoluteX: internals.positionAbsolute.x, positionAbsoluteY: internals.positionAbsolute.y, selected: node.selected, selectable: isSelectable, draggable: isDraggable, deletable: (_a = node.deletable) != null ? _a : true, isConnectable, sourcePosition: node.sourcePosition, targetPosition: node.targetPosition, dragging, dragHandle: node.dragHandle, zIndex: internals.z, parentId: node.parentId, ...nodeDimensions }) }) });
}
var selector$b = (s) => ({
  nodesDraggable: s.nodesDraggable,
  nodesConnectable: s.nodesConnectable,
  nodesFocusable: s.nodesFocusable,
  elementsSelectable: s.elementsSelectable,
  onError: s.onError
});
function NodeRendererComponent(props) {
  const { nodesDraggable, nodesConnectable, nodesFocusable, elementsSelectable, onError } = useStore(selector$b, shallow$1);
  const nodeIds = useVisibleNodeIds(props.onlyRenderVisibleElements);
  const resizeObserver = useResizeObserver();
  return (0, import_jsx_runtime.jsx)("div", { className: "react-flow__nodes", style: containerStyle, children: nodeIds.map((nodeId) => {
    return (
      // The split of responsibilities between NodeRenderer and
      // NodeComponentWrapper may appear weird. However, it’s designed to
      // minimize the cost of updates when individual nodes change.
      //
      // For example, when you’re dragging a single node, that node gets
      // updated multiple times per second. If `NodeRenderer` were to update
      // every time, it would have to re-run the `nodes.map()` loop every
      // time. This gets pricey with hundreds of nodes, especially if every
      // loop cycle does more than just rendering a JSX element!
      //
      // As a result of this choice, we took the following implementation
      // decisions:
      // - NodeRenderer subscribes *only* to node IDs – and therefore
      //   rerender *only* when visible nodes are added or removed.
      // - NodeRenderer performs all operations the result of which can be
      //   shared between nodes (such as creating the `ResizeObserver`
      //   instance, or subscribing to `selector`). This means extra prop
      //   drilling into `NodeComponentWrapper`, but it means we need to run
      //   these operations only once – instead of once per node.
      // - Any operations that you’d normally write inside `nodes.map` are
      //   moved into `NodeComponentWrapper`. This ensures they are
      //   memorized – so if `NodeRenderer` *has* to rerender, it only
      //   needs to regenerate the list of nodes, nothing else.
      (0, import_jsx_runtime.jsx)(NodeWrapper, { id: nodeId, nodeTypes: props.nodeTypes, nodeExtent: props.nodeExtent, onClick: props.onNodeClick, onMouseEnter: props.onNodeMouseEnter, onMouseMove: props.onNodeMouseMove, onMouseLeave: props.onNodeMouseLeave, onContextMenu: props.onNodeContextMenu, onDoubleClick: props.onNodeDoubleClick, noDragClassName: props.noDragClassName, noPanClassName: props.noPanClassName, rfId: props.rfId, disableKeyboardA11y: props.disableKeyboardA11y, resizeObserver, nodesDraggable, nodesConnectable, nodesFocusable, elementsSelectable, nodeClickDistance: props.nodeClickDistance, onError }, nodeId)
    );
  }) });
}
NodeRendererComponent.displayName = "NodeRenderer";
var NodeRenderer = (0, import_react2.memo)(NodeRendererComponent);
function useVisibleEdgeIds(onlyRenderVisible) {
  const edgeIds = useStore((0, import_react2.useCallback)((s) => {
    if (!onlyRenderVisible) {
      return s.edges.map((edge) => edge.id);
    }
    const visibleEdgeIds = [];
    if (s.width && s.height) {
      for (const edge of s.edges) {
        const sourceNode = s.nodeLookup.get(edge.source);
        const targetNode = s.nodeLookup.get(edge.target);
        if (sourceNode && targetNode && isEdgeVisible({
          sourceNode,
          targetNode,
          width: s.width,
          height: s.height,
          transform: s.transform
        })) {
          visibleEdgeIds.push(edge.id);
        }
      }
    }
    return visibleEdgeIds;
  }, [onlyRenderVisible]), shallow$1);
  return edgeIds;
}
var ArrowSymbol = ({ color: color2 = "none", strokeWidth = 1 }) => {
  return (0, import_jsx_runtime.jsx)("polyline", { style: {
    stroke: color2,
    strokeWidth
  }, strokeLinecap: "round", strokeLinejoin: "round", fill: "none", points: "-5,-4 0,0 -5,4" });
};
var ArrowClosedSymbol = ({ color: color2 = "none", strokeWidth = 1 }) => {
  return (0, import_jsx_runtime.jsx)("polyline", { style: {
    stroke: color2,
    fill: color2,
    strokeWidth
  }, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
};
var MarkerSymbols = {
  [MarkerType.Arrow]: ArrowSymbol,
  [MarkerType.ArrowClosed]: ArrowClosedSymbol
};
function useMarkerSymbol(type) {
  const store = useStoreApi();
  const symbol = (0, import_react2.useMemo)(() => {
    var _a, _b;
    const symbolExists = Object.prototype.hasOwnProperty.call(MarkerSymbols, type);
    if (!symbolExists) {
      (_b = (_a = store.getState()).onError) == null ? void 0 : _b.call(_a, "009", errorMessages["error009"](type));
      return null;
    }
    return MarkerSymbols[type];
  }, [type]);
  return symbol;
}
var Marker = ({ id: id2, type, color: color2, width = 12.5, height = 12.5, markerUnits = "strokeWidth", strokeWidth, orient = "auto-start-reverse" }) => {
  const Symbol2 = useMarkerSymbol(type);
  if (!Symbol2) {
    return null;
  }
  return (0, import_jsx_runtime.jsx)("marker", { className: "react-flow__arrowhead", id: id2, markerWidth: `${width}`, markerHeight: `${height}`, viewBox: "-10 -10 20 20", markerUnits, orient, refX: "0", refY: "0", children: (0, import_jsx_runtime.jsx)(Symbol2, { color: color2, strokeWidth }) });
};
var MarkerDefinitions = ({ defaultColor, rfId }) => {
  const edges = useStore((s) => s.edges);
  const defaultEdgeOptions = useStore((s) => s.defaultEdgeOptions);
  const markers = (0, import_react2.useMemo)(() => {
    const markers2 = createMarkerIds(edges, {
      id: rfId,
      defaultColor,
      defaultMarkerStart: defaultEdgeOptions == null ? void 0 : defaultEdgeOptions.markerStart,
      defaultMarkerEnd: defaultEdgeOptions == null ? void 0 : defaultEdgeOptions.markerEnd
    });
    return markers2;
  }, [edges, defaultEdgeOptions, rfId, defaultColor]);
  if (!markers.length) {
    return null;
  }
  return (0, import_jsx_runtime.jsx)("svg", { className: "react-flow__marker", children: (0, import_jsx_runtime.jsx)("defs", { children: markers.map((marker) => (0, import_jsx_runtime.jsx)(Marker, { id: marker.id, type: marker.type, color: marker.color, width: marker.width, height: marker.height, markerUnits: marker.markerUnits, strokeWidth: marker.strokeWidth, orient: marker.orient }, marker.id)) }) });
};
MarkerDefinitions.displayName = "MarkerDefinitions";
var MarkerDefinitions$1 = (0, import_react2.memo)(MarkerDefinitions);
function EdgeTextComponent({ x, y, label, labelStyle = {}, labelShowBg = true, labelBgStyle = {}, labelBgPadding = [2, 4], labelBgBorderRadius = 2, children: children2, className, ...rest }) {
  const [edgeTextBbox, setEdgeTextBbox] = (0, import_react2.useState)({ x: 1, y: 0, width: 0, height: 0 });
  const edgeTextClasses = cc(["react-flow__edge-textwrapper", className]);
  const edgeTextRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    if (edgeTextRef.current) {
      const textBbox = edgeTextRef.current.getBBox();
      setEdgeTextBbox({
        x: textBbox.x,
        y: textBbox.y,
        width: textBbox.width,
        height: textBbox.height
      });
    }
  }, [label]);
  if (typeof label === "undefined" || !label) {
    return null;
  }
  return (0, import_jsx_runtime.jsxs)("g", { transform: `translate(${x - edgeTextBbox.width / 2} ${y - edgeTextBbox.height / 2})`, className: edgeTextClasses, visibility: edgeTextBbox.width ? "visible" : "hidden", ...rest, children: [labelShowBg && (0, import_jsx_runtime.jsx)("rect", { width: edgeTextBbox.width + 2 * labelBgPadding[0], x: -labelBgPadding[0], y: -labelBgPadding[1], height: edgeTextBbox.height + 2 * labelBgPadding[1], className: "react-flow__edge-textbg", style: labelBgStyle, rx: labelBgBorderRadius, ry: labelBgBorderRadius }), (0, import_jsx_runtime.jsx)("text", { className: "react-flow__edge-text", y: edgeTextBbox.height / 2, dy: "0.3em", ref: edgeTextRef, style: labelStyle, children: label }), children2] });
}
EdgeTextComponent.displayName = "EdgeText";
var EdgeText = (0, import_react2.memo)(EdgeTextComponent);
function BaseEdge({ id: id2, path, labelX, labelY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, className, interactionWidth = 20 }) {
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)("path", { id: id2, style: style2, d: path, fill: "none", className: cc(["react-flow__edge-path", className]), markerEnd, markerStart }), interactionWidth && (0, import_jsx_runtime.jsx)("path", { d: path, fill: "none", strokeOpacity: 0, strokeWidth: interactionWidth, className: "react-flow__edge-interaction" }), label && isNumeric(labelX) && isNumeric(labelY) ? (0, import_jsx_runtime.jsx)(EdgeText, { x: labelX, y: labelY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius }) : null] });
}
function getControl({ pos, x1, y1, x2, y2 }) {
  if (pos === Position.Left || pos === Position.Right) {
    return [0.5 * (x1 + x2), y1];
  }
  return [x1, 0.5 * (y1 + y2)];
}
function getSimpleBezierPath({ sourceX, sourceY, sourcePosition = Position.Bottom, targetX, targetY, targetPosition = Position.Top }) {
  const [sourceControlX, sourceControlY] = getControl({
    pos: sourcePosition,
    x1: sourceX,
    y1: sourceY,
    x2: targetX,
    y2: targetY
  });
  const [targetControlX, targetControlY] = getControl({
    pos: targetPosition,
    x1: targetX,
    y1: targetY,
    x2: sourceX,
    y2: sourceY
  });
  const [labelX, labelY, offsetX, offsetY] = getBezierEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourceControlX,
    sourceControlY,
    targetControlX,
    targetControlY
  });
  return [
    `M${sourceX},${sourceY} C${sourceControlX},${sourceControlY} ${targetControlX},${targetControlY} ${targetX},${targetY}`,
    labelX,
    labelY,
    offsetX,
    offsetY
  ];
}
function createSimpleBezierEdge(params) {
  return (0, import_react2.memo)(({ id: id2, sourceX, sourceY, targetX, targetY, sourcePosition = Position.Bottom, targetPosition = Position.Top, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, interactionWidth }) => {
    const [path, labelX, labelY] = getSimpleBezierPath({
      sourceX,
      sourceY,
      sourcePosition,
      targetX,
      targetY,
      targetPosition
    });
    const _id = params.isInternal ? void 0 : id2;
    return (0, import_jsx_runtime.jsx)(BaseEdge, { id: _id, path, labelX, labelY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, interactionWidth });
  });
}
var SimpleBezierEdge = createSimpleBezierEdge({ isInternal: false });
var SimpleBezierEdgeInternal = createSimpleBezierEdge({ isInternal: true });
SimpleBezierEdge.displayName = "SimpleBezierEdge";
SimpleBezierEdgeInternal.displayName = "SimpleBezierEdgeInternal";
function createSmoothStepEdge(params) {
  return (0, import_react2.memo)(({ id: id2, sourceX, sourceY, targetX, targetY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, sourcePosition = Position.Bottom, targetPosition = Position.Top, markerEnd, markerStart, pathOptions, interactionWidth }) => {
    const [path, labelX, labelY] = getSmoothStepPath({
      sourceX,
      sourceY,
      sourcePosition,
      targetX,
      targetY,
      targetPosition,
      borderRadius: pathOptions == null ? void 0 : pathOptions.borderRadius,
      offset: pathOptions == null ? void 0 : pathOptions.offset
    });
    const _id = params.isInternal ? void 0 : id2;
    return (0, import_jsx_runtime.jsx)(BaseEdge, { id: _id, path, labelX, labelY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, interactionWidth });
  });
}
var SmoothStepEdge = createSmoothStepEdge({ isInternal: false });
var SmoothStepEdgeInternal = createSmoothStepEdge({ isInternal: true });
SmoothStepEdge.displayName = "SmoothStepEdge";
SmoothStepEdgeInternal.displayName = "SmoothStepEdgeInternal";
function createStepEdge(params) {
  return (0, import_react2.memo)(({ id: id2, ...props }) => {
    var _a;
    const _id = params.isInternal ? void 0 : id2;
    return (0, import_jsx_runtime.jsx)(SmoothStepEdge, { ...props, id: _id, pathOptions: (0, import_react2.useMemo)(() => {
      var _a2;
      return { borderRadius: 0, offset: (_a2 = props.pathOptions) == null ? void 0 : _a2.offset };
    }, [(_a = props.pathOptions) == null ? void 0 : _a.offset]) });
  });
}
var StepEdge = createStepEdge({ isInternal: false });
var StepEdgeInternal = createStepEdge({ isInternal: true });
StepEdge.displayName = "StepEdge";
StepEdgeInternal.displayName = "StepEdgeInternal";
function createStraightEdge(params) {
  return (0, import_react2.memo)(({ id: id2, sourceX, sourceY, targetX, targetY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, interactionWidth }) => {
    const [path, labelX, labelY] = getStraightPath({ sourceX, sourceY, targetX, targetY });
    const _id = params.isInternal ? void 0 : id2;
    return (0, import_jsx_runtime.jsx)(BaseEdge, { id: _id, path, labelX, labelY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, interactionWidth });
  });
}
var StraightEdge = createStraightEdge({ isInternal: false });
var StraightEdgeInternal = createStraightEdge({ isInternal: true });
StraightEdge.displayName = "StraightEdge";
StraightEdgeInternal.displayName = "StraightEdgeInternal";
function createBezierEdge(params) {
  return (0, import_react2.memo)(({ id: id2, sourceX, sourceY, targetX, targetY, sourcePosition = Position.Bottom, targetPosition = Position.Top, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, pathOptions, interactionWidth }) => {
    const [path, labelX, labelY] = getBezierPath({
      sourceX,
      sourceY,
      sourcePosition,
      targetX,
      targetY,
      targetPosition,
      curvature: pathOptions == null ? void 0 : pathOptions.curvature
    });
    const _id = params.isInternal ? void 0 : id2;
    return (0, import_jsx_runtime.jsx)(BaseEdge, { id: _id, path, labelX, labelY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, interactionWidth });
  });
}
var BezierEdge = createBezierEdge({ isInternal: false });
var BezierEdgeInternal = createBezierEdge({ isInternal: true });
BezierEdge.displayName = "BezierEdge";
BezierEdgeInternal.displayName = "BezierEdgeInternal";
var builtinEdgeTypes = {
  default: BezierEdgeInternal,
  straight: StraightEdgeInternal,
  step: StepEdgeInternal,
  smoothstep: SmoothStepEdgeInternal,
  simplebezier: SimpleBezierEdgeInternal
};
var nullPosition = {
  sourceX: null,
  sourceY: null,
  targetX: null,
  targetY: null,
  sourcePosition: null,
  targetPosition: null
};
var shiftX = (x, shift2, position) => {
  if (position === Position.Left)
    return x - shift2;
  if (position === Position.Right)
    return x + shift2;
  return x;
};
var shiftY = (y, shift2, position) => {
  if (position === Position.Top)
    return y - shift2;
  if (position === Position.Bottom)
    return y + shift2;
  return y;
};
var EdgeUpdaterClassName = "react-flow__edgeupdater";
function EdgeAnchor({ position, centerX, centerY, radius = 10, onMouseDown, onMouseEnter, onMouseOut, type }) {
  return (0, import_jsx_runtime.jsx)("circle", { onMouseDown, onMouseEnter, onMouseOut, className: cc([EdgeUpdaterClassName, `${EdgeUpdaterClassName}-${type}`]), cx: shiftX(centerX, radius, position), cy: shiftY(centerY, radius, position), r: radius, stroke: "transparent", fill: "transparent" });
}
function EdgeUpdateAnchors({ isReconnectable, reconnectRadius, edge, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, onReconnect, onReconnectStart, onReconnectEnd, setReconnecting, setUpdateHover }) {
  const store = useStoreApi();
  const handleEdgeUpdater = (event, oppositeHandle) => {
    if (event.button !== 0) {
      return;
    }
    const { autoPanOnConnect, domNode, isValidConnection, connectionMode, connectionRadius, lib, onConnectStart, onConnectEnd, cancelConnection, nodeLookup, rfId: flowId, panBy: panBy2, updateConnection } = store.getState();
    const isTarget = oppositeHandle.type === "target";
    setReconnecting(true);
    onReconnectStart == null ? void 0 : onReconnectStart(event, edge, oppositeHandle.type);
    const _onReconnectEnd = (evt, connectionState) => {
      setReconnecting(false);
      onReconnectEnd == null ? void 0 : onReconnectEnd(evt, edge, oppositeHandle.type, connectionState);
    };
    const onConnectEdge = (connection) => onReconnect == null ? void 0 : onReconnect(edge, connection);
    XYHandle.onPointerDown(event.nativeEvent, {
      autoPanOnConnect,
      connectionMode,
      connectionRadius,
      domNode,
      handleId: oppositeHandle.id,
      nodeId: oppositeHandle.nodeId,
      nodeLookup,
      isTarget,
      edgeUpdaterType: oppositeHandle.type,
      lib,
      flowId,
      cancelConnection,
      panBy: panBy2,
      isValidConnection,
      onConnect: onConnectEdge,
      onConnectStart,
      onConnectEnd,
      onReconnectEnd: _onReconnectEnd,
      updateConnection,
      getTransform: () => store.getState().transform,
      getFromHandle: () => store.getState().connection.fromHandle
    });
  };
  const onReconnectSourceMouseDown = (event) => {
    var _a;
    return handleEdgeUpdater(event, { nodeId: edge.target, id: (_a = edge.targetHandle) != null ? _a : null, type: "target" });
  };
  const onReconnectTargetMouseDown = (event) => {
    var _a;
    return handleEdgeUpdater(event, { nodeId: edge.source, id: (_a = edge.sourceHandle) != null ? _a : null, type: "source" });
  };
  const onReconnectMouseEnter = () => setUpdateHover(true);
  const onReconnectMouseOut = () => setUpdateHover(false);
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(isReconnectable === true || isReconnectable === "source") && (0, import_jsx_runtime.jsx)(EdgeAnchor, { position: sourcePosition, centerX: sourceX, centerY: sourceY, radius: reconnectRadius, onMouseDown: onReconnectSourceMouseDown, onMouseEnter: onReconnectMouseEnter, onMouseOut: onReconnectMouseOut, type: "source" }), (isReconnectable === true || isReconnectable === "target") && (0, import_jsx_runtime.jsx)(EdgeAnchor, { position: targetPosition, centerX: targetX, centerY: targetY, radius: reconnectRadius, onMouseDown: onReconnectTargetMouseDown, onMouseEnter: onReconnectMouseEnter, onMouseOut: onReconnectMouseOut, type: "target" })] });
}
function EdgeWrapper({ id: id2, edgesFocusable, edgesReconnectable, elementsSelectable, onClick, onDoubleClick, onContextMenu, onMouseEnter, onMouseMove, onMouseLeave, reconnectRadius, onReconnect, onReconnectStart, onReconnectEnd, rfId, edgeTypes, noPanClassName, onError, disableKeyboardA11y }) {
  var _a;
  let edge = useStore((s) => s.edgeLookup.get(id2));
  const defaultEdgeOptions = useStore((s) => s.defaultEdgeOptions);
  edge = defaultEdgeOptions ? { ...defaultEdgeOptions, ...edge } : edge;
  let edgeType = edge.type || "default";
  let EdgeComponent = (edgeTypes == null ? void 0 : edgeTypes[edgeType]) || builtinEdgeTypes[edgeType];
  if (EdgeComponent === void 0) {
    onError == null ? void 0 : onError("011", errorMessages["error011"](edgeType));
    edgeType = "default";
    EdgeComponent = builtinEdgeTypes.default;
  }
  const isFocusable = !!(edge.focusable || edgesFocusable && typeof edge.focusable === "undefined");
  const isReconnectable = typeof onReconnect !== "undefined" && (edge.reconnectable || edgesReconnectable && typeof edge.reconnectable === "undefined");
  const isSelectable = !!(edge.selectable || elementsSelectable && typeof edge.selectable === "undefined");
  const edgeRef = (0, import_react2.useRef)(null);
  const [updateHover, setUpdateHover] = (0, import_react2.useState)(false);
  const [reconnecting, setReconnecting] = (0, import_react2.useState)(false);
  const store = useStoreApi();
  const { zIndex, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition } = useStore((0, import_react2.useCallback)((store2) => {
    const sourceNode = store2.nodeLookup.get(edge.source);
    const targetNode = store2.nodeLookup.get(edge.target);
    if (!sourceNode || !targetNode) {
      return {
        zIndex: edge.zIndex,
        ...nullPosition
      };
    }
    const edgePosition = getEdgePosition({
      id: id2,
      sourceNode,
      targetNode,
      sourceHandle: edge.sourceHandle || null,
      targetHandle: edge.targetHandle || null,
      connectionMode: store2.connectionMode,
      onError
    });
    const zIndex2 = getElevatedEdgeZIndex({
      selected: edge.selected,
      zIndex: edge.zIndex,
      sourceNode,
      targetNode,
      elevateOnSelect: store2.elevateEdgesOnSelect
    });
    return {
      zIndex: zIndex2,
      ...edgePosition || nullPosition
    };
  }, [edge.source, edge.target, edge.sourceHandle, edge.targetHandle, edge.selected, edge.zIndex]), shallow$1);
  const markerStartUrl = (0, import_react2.useMemo)(() => edge.markerStart ? `url('#${getMarkerId(edge.markerStart, rfId)}')` : void 0, [edge.markerStart, rfId]);
  const markerEndUrl = (0, import_react2.useMemo)(() => edge.markerEnd ? `url('#${getMarkerId(edge.markerEnd, rfId)}')` : void 0, [edge.markerEnd, rfId]);
  if (edge.hidden || sourceX === null || sourceY === null || targetX === null || targetY === null) {
    return null;
  }
  const onEdgeClick = (event) => {
    var _a2;
    const { addSelectedEdges, unselectNodesAndEdges, multiSelectionActive } = store.getState();
    if (isSelectable) {
      store.setState({ nodesSelectionActive: false });
      if (edge.selected && multiSelectionActive) {
        unselectNodesAndEdges({ nodes: [], edges: [edge] });
        (_a2 = edgeRef.current) == null ? void 0 : _a2.blur();
      } else {
        addSelectedEdges([id2]);
      }
    }
    if (onClick) {
      onClick(event, edge);
    }
  };
  const onEdgeDoubleClick = onDoubleClick ? (event) => {
    onDoubleClick(event, { ...edge });
  } : void 0;
  const onEdgeContextMenu = onContextMenu ? (event) => {
    onContextMenu(event, { ...edge });
  } : void 0;
  const onEdgeMouseEnter = onMouseEnter ? (event) => {
    onMouseEnter(event, { ...edge });
  } : void 0;
  const onEdgeMouseMove = onMouseMove ? (event) => {
    onMouseMove(event, { ...edge });
  } : void 0;
  const onEdgeMouseLeave = onMouseLeave ? (event) => {
    onMouseLeave(event, { ...edge });
  } : void 0;
  const onKeyDown = (event) => {
    var _a2;
    if (!disableKeyboardA11y && elementSelectionKeys.includes(event.key) && isSelectable) {
      const { unselectNodesAndEdges, addSelectedEdges } = store.getState();
      const unselect = event.key === "Escape";
      if (unselect) {
        (_a2 = edgeRef.current) == null ? void 0 : _a2.blur();
        unselectNodesAndEdges({ edges: [edge] });
      } else {
        addSelectedEdges([id2]);
      }
    }
  };
  return (0, import_jsx_runtime.jsx)("svg", { style: { zIndex }, children: (0, import_jsx_runtime.jsxs)("g", { className: cc([
    "react-flow__edge",
    `react-flow__edge-${edgeType}`,
    edge.className,
    noPanClassName,
    {
      selected: edge.selected,
      animated: edge.animated,
      inactive: !isSelectable && !onClick,
      updating: updateHover,
      selectable: isSelectable
    }
  ]), onClick: onEdgeClick, onDoubleClick: onEdgeDoubleClick, onContextMenu: onEdgeContextMenu, onMouseEnter: onEdgeMouseEnter, onMouseMove: onEdgeMouseMove, onMouseLeave: onEdgeMouseLeave, onKeyDown: isFocusable ? onKeyDown : void 0, tabIndex: isFocusable ? 0 : void 0, role: isFocusable ? "button" : "img", "data-id": id2, "data-testid": `rf__edge-${id2}`, "aria-label": edge.ariaLabel === null ? void 0 : edge.ariaLabel || `Edge from ${edge.source} to ${edge.target}`, "aria-describedby": isFocusable ? `${ARIA_EDGE_DESC_KEY}-${rfId}` : void 0, ref: edgeRef, children: [!reconnecting && (0, import_jsx_runtime.jsx)(EdgeComponent, { id: id2, source: edge.source, target: edge.target, type: edge.type, selected: edge.selected, animated: edge.animated, selectable: isSelectable, deletable: (_a = edge.deletable) != null ? _a : true, label: edge.label, labelStyle: edge.labelStyle, labelShowBg: edge.labelShowBg, labelBgStyle: edge.labelBgStyle, labelBgPadding: edge.labelBgPadding, labelBgBorderRadius: edge.labelBgBorderRadius, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, data: edge.data, style: edge.style, sourceHandleId: edge.sourceHandle, targetHandleId: edge.targetHandle, markerStart: markerStartUrl, markerEnd: markerEndUrl, pathOptions: "pathOptions" in edge ? edge.pathOptions : void 0, interactionWidth: edge.interactionWidth }), isReconnectable && (0, import_jsx_runtime.jsx)(EdgeUpdateAnchors, { edge, isReconnectable, reconnectRadius, onReconnect, onReconnectStart, onReconnectEnd, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, setUpdateHover, setReconnecting })] }) });
}
var selector$a = (s) => ({
  width: s.width,
  height: s.height,
  edgesFocusable: s.edgesFocusable,
  edgesReconnectable: s.edgesReconnectable,
  elementsSelectable: s.elementsSelectable,
  connectionMode: s.connectionMode,
  onError: s.onError
});
function EdgeRendererComponent({ defaultMarkerColor, onlyRenderVisibleElements, rfId, edgeTypes, noPanClassName, onReconnect, onEdgeContextMenu, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, onEdgeClick, reconnectRadius, onEdgeDoubleClick, onReconnectStart, onReconnectEnd, disableKeyboardA11y }) {
  const { edgesFocusable, edgesReconnectable, elementsSelectable, onError } = useStore(selector$a, shallow$1);
  const edgeIds = useVisibleEdgeIds(onlyRenderVisibleElements);
  return (0, import_jsx_runtime.jsxs)("div", { className: "react-flow__edges", children: [(0, import_jsx_runtime.jsx)(MarkerDefinitions$1, { defaultColor: defaultMarkerColor, rfId }), edgeIds.map((id2) => {
    return (0, import_jsx_runtime.jsx)(EdgeWrapper, { id: id2, edgesFocusable, edgesReconnectable, elementsSelectable, noPanClassName, onReconnect, onContextMenu: onEdgeContextMenu, onMouseEnter: onEdgeMouseEnter, onMouseMove: onEdgeMouseMove, onMouseLeave: onEdgeMouseLeave, onClick: onEdgeClick, reconnectRadius, onDoubleClick: onEdgeDoubleClick, onReconnectStart, onReconnectEnd, rfId, onError, edgeTypes, disableKeyboardA11y }, id2);
  })] });
}
EdgeRendererComponent.displayName = "EdgeRenderer";
var EdgeRenderer = (0, import_react2.memo)(EdgeRendererComponent);
var selector$9 = (s) => `translate(${s.transform[0]}px,${s.transform[1]}px) scale(${s.transform[2]})`;
function Viewport({ children: children2 }) {
  const transform2 = useStore(selector$9);
  return (0, import_jsx_runtime.jsx)("div", { className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: transform2 }, children: children2 });
}
function useOnInitHandler(onInit) {
  const rfInstance = useReactFlow();
  const isInitialized = (0, import_react2.useRef)(false);
  (0, import_react2.useEffect)(() => {
    if (!isInitialized.current && rfInstance.viewportInitialized && onInit) {
      setTimeout(() => onInit(rfInstance), 1);
      isInitialized.current = true;
    }
  }, [onInit, rfInstance.viewportInitialized]);
}
var selector$8 = (state) => {
  var _a;
  return (_a = state.panZoom) == null ? void 0 : _a.syncViewport;
};
function useViewportSync(viewport) {
  const syncViewport = useStore(selector$8);
  const store = useStoreApi();
  (0, import_react2.useEffect)(() => {
    if (viewport) {
      syncViewport == null ? void 0 : syncViewport(viewport);
      store.setState({ transform: [viewport.x, viewport.y, viewport.zoom] });
    }
  }, [viewport, syncViewport]);
  return null;
}
function storeSelector$1(s) {
  return s.connection.inProgress ? { ...s.connection, to: pointToRendererPoint(s.connection.to, s.transform) } : { ...s.connection };
}
function getSelector(connectionSelector) {
  if (connectionSelector) {
    const combinedSelector = (s) => {
      const connection = storeSelector$1(s);
      return connectionSelector(connection);
    };
    return combinedSelector;
  }
  return storeSelector$1;
}
function useConnection(connectionSelector) {
  const combinedSelector = getSelector(connectionSelector);
  return useStore(combinedSelector, shallow$1);
}
var selector$7 = (s) => ({
  nodesConnectable: s.nodesConnectable,
  isValid: s.connection.isValid,
  inProgress: s.connection.inProgress,
  width: s.width,
  height: s.height
});
function ConnectionLineWrapper({ containerStyle: containerStyle2, style: style2, type, component }) {
  const { nodesConnectable, width, height, isValid, inProgress } = useStore(selector$7, shallow$1);
  const renderConnection = !!(width && nodesConnectable && inProgress);
  if (!renderConnection) {
    return null;
  }
  return (0, import_jsx_runtime.jsx)("svg", { style: containerStyle2, width, height, className: "react-flow__connectionline react-flow__container", children: (0, import_jsx_runtime.jsx)("g", { className: cc(["react-flow__connection", getConnectionStatus(isValid)]), children: (0, import_jsx_runtime.jsx)(ConnectionLine, { style: style2, type, CustomComponent: component, isValid }) }) });
}
var ConnectionLine = ({ style: style2, type = ConnectionLineType.Bezier, CustomComponent, isValid }) => {
  const { inProgress, from, fromNode, fromHandle, fromPosition, to, toNode, toHandle, toPosition } = useConnection();
  if (!inProgress) {
    return;
  }
  if (CustomComponent) {
    return (0, import_jsx_runtime.jsx)(CustomComponent, { connectionLineType: type, connectionLineStyle: style2, fromNode, fromHandle, fromX: from.x, fromY: from.y, toX: to.x, toY: to.y, fromPosition, toPosition, connectionStatus: getConnectionStatus(isValid), toNode, toHandle });
  }
  let path = "";
  const pathParams = {
    sourceX: from.x,
    sourceY: from.y,
    sourcePosition: fromPosition,
    targetX: to.x,
    targetY: to.y,
    targetPosition: toPosition
  };
  switch (type) {
    case ConnectionLineType.Bezier:
      [path] = getBezierPath(pathParams);
      break;
    case ConnectionLineType.SimpleBezier:
      [path] = getSimpleBezierPath(pathParams);
      break;
    case ConnectionLineType.Step:
      [path] = getSmoothStepPath({
        ...pathParams,
        borderRadius: 0
      });
      break;
    case ConnectionLineType.SmoothStep:
      [path] = getSmoothStepPath(pathParams);
      break;
    default:
      [path] = getStraightPath(pathParams);
  }
  return (0, import_jsx_runtime.jsx)("path", { d: path, fill: "none", className: "react-flow__connection-path", style: style2 });
};
ConnectionLine.displayName = "ConnectionLine";
var emptyTypes = {};
function useNodeOrEdgeTypesWarning(nodeOrEdgeTypes = emptyTypes) {
  const typesRef = (0, import_react2.useRef)(nodeOrEdgeTypes);
  const store = useStoreApi();
  (0, import_react2.useEffect)(() => {
    var _a, _b;
    if (true) {
      const usedKeys = /* @__PURE__ */ new Set([...Object.keys(typesRef.current), ...Object.keys(nodeOrEdgeTypes)]);
      for (const key of usedKeys) {
        if (typesRef.current[key] !== nodeOrEdgeTypes[key]) {
          (_b = (_a = store.getState()).onError) == null ? void 0 : _b.call(_a, "002", errorMessages["error002"]());
          break;
        }
      }
      typesRef.current = nodeOrEdgeTypes;
    }
  }, [nodeOrEdgeTypes]);
}
function useStylesLoadedWarning() {
  const store = useStoreApi();
  const checked = (0, import_react2.useRef)(false);
  (0, import_react2.useEffect)(() => {
    var _a, _b;
    if (true) {
      if (!checked.current) {
        const pane = document.querySelector(".react-flow__pane");
        if (pane && !(window.getComputedStyle(pane).zIndex === "1")) {
          (_b = (_a = store.getState()).onError) == null ? void 0 : _b.call(_a, "013", errorMessages["error013"]("react"));
        }
        checked.current = true;
      }
    }
  }, []);
}
function GraphViewComponent({ nodeTypes, edgeTypes, onInit, onNodeClick, onEdgeClick, onNodeDoubleClick, onEdgeDoubleClick, onNodeMouseEnter, onNodeMouseMove, onNodeMouseLeave, onNodeContextMenu, onSelectionContextMenu, onSelectionStart, onSelectionEnd, connectionLineType, connectionLineStyle, connectionLineComponent, connectionLineContainerStyle, selectionKeyCode, selectionOnDrag, selectionMode, multiSelectionKeyCode, panActivationKeyCode, zoomActivationKeyCode, deleteKeyCode, onlyRenderVisibleElements, elementsSelectable, defaultViewport: defaultViewport2, translateExtent, minZoom, maxZoom, preventScrolling, defaultMarkerColor, zoomOnScroll, zoomOnPinch, panOnScroll, panOnScrollSpeed, panOnScrollMode, zoomOnDoubleClick, panOnDrag, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneScroll, onPaneContextMenu, paneClickDistance, nodeClickDistance, onEdgeContextMenu, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, reconnectRadius, onReconnect, onReconnectStart, onReconnectEnd, noDragClassName, noWheelClassName, noPanClassName, disableKeyboardA11y, nodeExtent, rfId, viewport, onViewportChange }) {
  useNodeOrEdgeTypesWarning(nodeTypes);
  useNodeOrEdgeTypesWarning(edgeTypes);
  useStylesLoadedWarning();
  useOnInitHandler(onInit);
  useViewportSync(viewport);
  return (0, import_jsx_runtime.jsx)(FlowRenderer, { onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneContextMenu, onPaneScroll, paneClickDistance, deleteKeyCode, selectionKeyCode, selectionOnDrag, selectionMode, onSelectionStart, onSelectionEnd, multiSelectionKeyCode, panActivationKeyCode, zoomActivationKeyCode, elementsSelectable, zoomOnScroll, zoomOnPinch, zoomOnDoubleClick, panOnScroll, panOnScrollSpeed, panOnScrollMode, panOnDrag, defaultViewport: defaultViewport2, translateExtent, minZoom, maxZoom, onSelectionContextMenu, preventScrolling, noDragClassName, noWheelClassName, noPanClassName, disableKeyboardA11y, onViewportChange, isControlledViewport: !!viewport, children: (0, import_jsx_runtime.jsxs)(Viewport, { children: [(0, import_jsx_runtime.jsx)(EdgeRenderer, { edgeTypes, onEdgeClick, onEdgeDoubleClick, onReconnect, onReconnectStart, onReconnectEnd, onlyRenderVisibleElements, onEdgeContextMenu, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, reconnectRadius, defaultMarkerColor, noPanClassName, disableKeyboardA11y, rfId }), (0, import_jsx_runtime.jsx)(ConnectionLineWrapper, { style: connectionLineStyle, type: connectionLineType, component: connectionLineComponent, containerStyle: connectionLineContainerStyle }), (0, import_jsx_runtime.jsx)("div", { className: "react-flow__edgelabel-renderer" }), (0, import_jsx_runtime.jsx)(NodeRenderer, { nodeTypes, onNodeClick, onNodeDoubleClick, onNodeMouseEnter, onNodeMouseMove, onNodeMouseLeave, onNodeContextMenu, nodeClickDistance, onlyRenderVisibleElements, noPanClassName, noDragClassName, disableKeyboardA11y, nodeExtent, rfId }), (0, import_jsx_runtime.jsx)("div", { className: "react-flow__viewport-portal" })] }) });
}
GraphViewComponent.displayName = "GraphView";
var GraphView = (0, import_react2.memo)(GraphViewComponent);
var getInitialState = ({ nodes, edges, defaultNodes, defaultEdges, width, height, fitView: fitView2, nodeOrigin, nodeExtent } = {}) => {
  var _a, _b;
  const nodeLookup = /* @__PURE__ */ new Map();
  const parentLookup = /* @__PURE__ */ new Map();
  const connectionLookup = /* @__PURE__ */ new Map();
  const edgeLookup = /* @__PURE__ */ new Map();
  const storeEdges = (_a = defaultEdges != null ? defaultEdges : edges) != null ? _a : [];
  const storeNodes = (_b = defaultNodes != null ? defaultNodes : nodes) != null ? _b : [];
  const storeNodeOrigin = nodeOrigin != null ? nodeOrigin : [0, 0];
  const storeNodeExtent = nodeExtent != null ? nodeExtent : infiniteExtent;
  updateConnectionLookup(connectionLookup, edgeLookup, storeEdges);
  adoptUserNodes(storeNodes, nodeLookup, parentLookup, {
    nodeOrigin: storeNodeOrigin,
    nodeExtent: storeNodeExtent,
    elevateNodesOnSelect: false
  });
  let transform2 = [0, 0, 1];
  if (fitView2 && width && height) {
    const bounds = getInternalNodesBounds(nodeLookup, {
      filter: (node) => !!((node.width || node.initialWidth) && (node.height || node.initialHeight))
    });
    const { x, y, zoom } = getViewportForBounds(bounds, width, height, 0.5, 2, 0.1);
    transform2 = [x, y, zoom];
  }
  return {
    rfId: "1",
    width: 0,
    height: 0,
    transform: transform2,
    nodes: storeNodes,
    nodeLookup,
    parentLookup,
    edges: storeEdges,
    edgeLookup,
    connectionLookup,
    onNodesChange: null,
    onEdgesChange: null,
    hasDefaultNodes: defaultNodes !== void 0,
    hasDefaultEdges: defaultEdges !== void 0,
    panZoom: null,
    minZoom: 0.5,
    maxZoom: 2,
    translateExtent: infiniteExtent,
    nodeExtent: storeNodeExtent,
    nodesSelectionActive: false,
    userSelectionActive: false,
    userSelectionRect: null,
    connectionMode: ConnectionMode.Strict,
    domNode: null,
    paneDragging: false,
    noPanClassName: "nopan",
    nodeOrigin: storeNodeOrigin,
    nodeDragThreshold: 1,
    snapGrid: [15, 15],
    snapToGrid: false,
    nodesDraggable: true,
    nodesConnectable: true,
    nodesFocusable: true,
    edgesFocusable: true,
    edgesReconnectable: true,
    elementsSelectable: true,
    elevateNodesOnSelect: true,
    elevateEdgesOnSelect: false,
    fitViewOnInit: false,
    fitViewDone: false,
    fitViewOnInitOptions: void 0,
    selectNodesOnDrag: true,
    multiSelectionActive: false,
    connection: { ...initialConnection },
    connectionClickStartHandle: null,
    connectOnClick: true,
    ariaLiveMessage: "",
    autoPanOnConnect: true,
    autoPanOnNodeDrag: true,
    autoPanSpeed: 15,
    connectionRadius: 20,
    onError: devWarn,
    isValidConnection: void 0,
    onSelectionChangeHandlers: [],
    lib: "react",
    debug: false
  };
};
var createStore2 = ({ nodes, edges, defaultNodes, defaultEdges, width, height, fitView: fitView$1, nodeOrigin, nodeExtent }) => createWithEqualityFn((set3, get3) => ({
  ...getInitialState({ nodes, edges, width, height, fitView: fitView$1, nodeOrigin, nodeExtent, defaultNodes, defaultEdges }),
  setNodes: (nodes2) => {
    const { nodeLookup, parentLookup, nodeOrigin: nodeOrigin2, elevateNodesOnSelect } = get3();
    adoptUserNodes(nodes2, nodeLookup, parentLookup, {
      nodeOrigin: nodeOrigin2,
      nodeExtent,
      elevateNodesOnSelect,
      checkEquality: true
    });
    set3({ nodes: nodes2 });
  },
  setEdges: (edges2) => {
    const { connectionLookup, edgeLookup } = get3();
    updateConnectionLookup(connectionLookup, edgeLookup, edges2);
    set3({ edges: edges2 });
  },
  setDefaultNodesAndEdges: (nodes2, edges2) => {
    if (nodes2) {
      const { setNodes } = get3();
      setNodes(nodes2);
      set3({ hasDefaultNodes: true });
    }
    if (edges2) {
      const { setEdges } = get3();
      setEdges(edges2);
      set3({ hasDefaultEdges: true });
    }
  },
  // Every node gets registerd at a ResizeObserver. Whenever a node
  // changes its dimensions, this function is called to measure the
  // new dimensions and update the nodes.
  updateNodeInternals: (updates, params = { triggerFitView: true }) => {
    const { triggerNodeChanges, nodeLookup, parentLookup, fitViewOnInit, fitViewDone, fitViewOnInitOptions, domNode, nodeOrigin: nodeOrigin2, nodeExtent: nodeExtent2, debug, fitViewSync } = get3();
    const { changes, updatedInternals } = updateNodeInternals(updates, nodeLookup, parentLookup, domNode, nodeOrigin2, nodeExtent2);
    if (!updatedInternals) {
      return;
    }
    updateAbsolutePositions(nodeLookup, parentLookup, { nodeOrigin: nodeOrigin2, nodeExtent: nodeExtent2 });
    if (params.triggerFitView) {
      let nextFitViewDone = fitViewDone;
      if (!fitViewDone && fitViewOnInit) {
        nextFitViewDone = fitViewSync({
          ...fitViewOnInitOptions,
          nodes: fitViewOnInitOptions == null ? void 0 : fitViewOnInitOptions.nodes
        });
      }
      set3({ fitViewDone: nextFitViewDone });
    } else {
      set3({});
    }
    if ((changes == null ? void 0 : changes.length) > 0) {
      if (debug) {
        console.log("React Flow: trigger node changes", changes);
      }
      triggerNodeChanges == null ? void 0 : triggerNodeChanges(changes);
    }
  },
  updateNodePositions: (nodeDragItems, dragging = false) => {
    const parentExpandChildren = [];
    const changes = [];
    for (const [id2, dragItem] of nodeDragItems) {
      const change = {
        id: id2,
        type: "position",
        position: dragItem.position,
        dragging
      };
      if ((dragItem == null ? void 0 : dragItem.expandParent) && (dragItem == null ? void 0 : dragItem.parentId) && change.position) {
        parentExpandChildren.push({
          id: id2,
          parentId: dragItem.parentId,
          rect: {
            ...dragItem.internals.positionAbsolute,
            width: dragItem.measured.width,
            height: dragItem.measured.height
          }
        });
        change.position.x = Math.max(0, change.position.x);
        change.position.y = Math.max(0, change.position.y);
      }
      changes.push(change);
    }
    if (parentExpandChildren.length > 0) {
      const { nodeLookup, parentLookup, nodeOrigin: nodeOrigin2 } = get3();
      const parentExpandChanges = handleExpandParent(parentExpandChildren, nodeLookup, parentLookup, nodeOrigin2);
      changes.push(...parentExpandChanges);
    }
    get3().triggerNodeChanges(changes);
  },
  triggerNodeChanges: (changes) => {
    const { onNodesChange, setNodes, nodes: nodes2, hasDefaultNodes, debug } = get3();
    if (changes == null ? void 0 : changes.length) {
      if (hasDefaultNodes) {
        const updatedNodes = applyNodeChanges(changes, nodes2);
        setNodes(updatedNodes);
      }
      if (debug) {
        console.log("React Flow: trigger node changes", changes);
      }
      onNodesChange == null ? void 0 : onNodesChange(changes);
    }
  },
  triggerEdgeChanges: (changes) => {
    const { onEdgesChange, setEdges, edges: edges2, hasDefaultEdges, debug } = get3();
    if (changes == null ? void 0 : changes.length) {
      if (hasDefaultEdges) {
        const updatedEdges = applyEdgeChanges(changes, edges2);
        setEdges(updatedEdges);
      }
      if (debug) {
        console.log("React Flow: trigger edge changes", changes);
      }
      onEdgesChange == null ? void 0 : onEdgesChange(changes);
    }
  },
  addSelectedNodes: (selectedNodeIds) => {
    const { multiSelectionActive, edgeLookup, nodeLookup, triggerNodeChanges, triggerEdgeChanges } = get3();
    if (multiSelectionActive) {
      const nodeChanges = selectedNodeIds.map((nodeId) => createSelectionChange(nodeId, true));
      triggerNodeChanges(nodeChanges);
      return;
    }
    triggerNodeChanges(getSelectionChanges(nodeLookup, /* @__PURE__ */ new Set([...selectedNodeIds]), true));
    triggerEdgeChanges(getSelectionChanges(edgeLookup));
  },
  addSelectedEdges: (selectedEdgeIds) => {
    const { multiSelectionActive, edgeLookup, nodeLookup, triggerNodeChanges, triggerEdgeChanges } = get3();
    if (multiSelectionActive) {
      const changedEdges = selectedEdgeIds.map((edgeId) => createSelectionChange(edgeId, true));
      triggerEdgeChanges(changedEdges);
      return;
    }
    triggerEdgeChanges(getSelectionChanges(edgeLookup, /* @__PURE__ */ new Set([...selectedEdgeIds])));
    triggerNodeChanges(getSelectionChanges(nodeLookup, /* @__PURE__ */ new Set(), true));
  },
  unselectNodesAndEdges: ({ nodes: nodes2, edges: edges2 } = {}) => {
    const { edges: storeEdges, nodes: storeNodes, nodeLookup, triggerNodeChanges, triggerEdgeChanges } = get3();
    const nodesToUnselect = nodes2 ? nodes2 : storeNodes;
    const edgesToUnselect = edges2 ? edges2 : storeEdges;
    const nodeChanges = nodesToUnselect.map((n) => {
      const internalNode = nodeLookup.get(n.id);
      if (internalNode) {
        internalNode.selected = false;
      }
      return createSelectionChange(n.id, false);
    });
    const edgeChanges = edgesToUnselect.map((edge) => createSelectionChange(edge.id, false));
    triggerNodeChanges(nodeChanges);
    triggerEdgeChanges(edgeChanges);
  },
  setMinZoom: (minZoom) => {
    const { panZoom, maxZoom } = get3();
    panZoom == null ? void 0 : panZoom.setScaleExtent([minZoom, maxZoom]);
    set3({ minZoom });
  },
  setMaxZoom: (maxZoom) => {
    const { panZoom, minZoom } = get3();
    panZoom == null ? void 0 : panZoom.setScaleExtent([minZoom, maxZoom]);
    set3({ maxZoom });
  },
  setTranslateExtent: (translateExtent) => {
    var _a;
    (_a = get3().panZoom) == null ? void 0 : _a.setTranslateExtent(translateExtent);
    set3({ translateExtent });
  },
  setPaneClickDistance: (clickDistance) => {
    var _a;
    (_a = get3().panZoom) == null ? void 0 : _a.setClickDistance(clickDistance);
  },
  resetSelectedElements: () => {
    const { edges: edges2, nodes: nodes2, triggerNodeChanges, triggerEdgeChanges } = get3();
    const nodeChanges = nodes2.reduce((res, node) => node.selected ? [...res, createSelectionChange(node.id, false)] : res, []);
    const edgeChanges = edges2.reduce((res, edge) => edge.selected ? [...res, createSelectionChange(edge.id, false)] : res, []);
    triggerNodeChanges(nodeChanges);
    triggerEdgeChanges(edgeChanges);
  },
  setNodeExtent: (nextNodeExtent) => {
    const { nodes: nodes2, nodeLookup, parentLookup, nodeOrigin: nodeOrigin2, elevateNodesOnSelect, nodeExtent: nodeExtent2 } = get3();
    if (nextNodeExtent[0][0] === nodeExtent2[0][0] && nextNodeExtent[0][1] === nodeExtent2[0][1] && nextNodeExtent[1][0] === nodeExtent2[1][0] && nextNodeExtent[1][1] === nodeExtent2[1][1]) {
      return;
    }
    adoptUserNodes(nodes2, nodeLookup, parentLookup, {
      nodeOrigin: nodeOrigin2,
      nodeExtent: nextNodeExtent,
      elevateNodesOnSelect,
      checkEquality: false
    });
    set3({ nodeExtent: nextNodeExtent });
  },
  panBy: (delta) => {
    const { transform: transform2, width: width2, height: height2, panZoom, translateExtent } = get3();
    return panBy({ delta, panZoom, transform: transform2, translateExtent, width: width2, height: height2 });
  },
  fitView: (options) => {
    const { panZoom, width: width2, height: height2, minZoom, maxZoom, nodeLookup } = get3();
    if (!panZoom) {
      return Promise.resolve(false);
    }
    const fitViewNodes = getFitViewNodes(nodeLookup, options);
    return fitView({
      nodes: fitViewNodes,
      width: width2,
      height: height2,
      panZoom,
      minZoom,
      maxZoom
    }, options);
  },
  // we can't call an asnychronous function in updateNodeInternals
  // for that we created this sync version of fitView
  fitViewSync: (options) => {
    const { panZoom, width: width2, height: height2, minZoom, maxZoom, nodeLookup } = get3();
    if (!panZoom) {
      return false;
    }
    const fitViewNodes = getFitViewNodes(nodeLookup, options);
    fitView({
      nodes: fitViewNodes,
      width: width2,
      height: height2,
      panZoom,
      minZoom,
      maxZoom
    }, options);
    return fitViewNodes.size > 0;
  },
  cancelConnection: () => {
    set3({
      connection: { ...initialConnection }
    });
  },
  updateConnection: (connection) => {
    set3({ connection });
  },
  reset: () => set3({ ...getInitialState() })
}), Object.is);
function ReactFlowProvider({ initialNodes: nodes, initialEdges: edges, defaultNodes, defaultEdges, initialWidth: width, initialHeight: height, fitView: fitView2, nodeOrigin, nodeExtent, children: children2 }) {
  const [store] = (0, import_react2.useState)(() => createStore2({
    nodes,
    edges,
    defaultNodes,
    defaultEdges,
    width,
    height,
    fitView: fitView2,
    nodeOrigin,
    nodeExtent
  }));
  return (0, import_jsx_runtime.jsx)(Provider$1, { value: store, children: (0, import_jsx_runtime.jsx)(BatchProvider, { children: children2 }) });
}
function Wrapper({ children: children2, nodes, edges, defaultNodes, defaultEdges, width, height, fitView: fitView2, nodeOrigin, nodeExtent }) {
  const isWrapped = (0, import_react2.useContext)(StoreContext);
  if (isWrapped) {
    return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: children2 });
  }
  return (0, import_jsx_runtime.jsx)(ReactFlowProvider, { initialNodes: nodes, initialEdges: edges, defaultNodes, defaultEdges, initialWidth: width, initialHeight: height, fitView: fitView2, nodeOrigin, nodeExtent, children: children2 });
}
var wrapperStyle = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
function ReactFlow({ nodes, edges, defaultNodes, defaultEdges, className, nodeTypes, edgeTypes, onNodeClick, onEdgeClick, onInit, onMove, onMoveStart, onMoveEnd, onConnect, onConnectStart, onConnectEnd, onClickConnectStart, onClickConnectEnd, onNodeMouseEnter, onNodeMouseMove, onNodeMouseLeave, onNodeContextMenu, onNodeDoubleClick, onNodeDragStart, onNodeDrag, onNodeDragStop, onNodesDelete, onEdgesDelete, onDelete, onSelectionChange, onSelectionDragStart, onSelectionDrag, onSelectionDragStop, onSelectionContextMenu, onSelectionStart, onSelectionEnd, onBeforeDelete, connectionMode, connectionLineType = ConnectionLineType.Bezier, connectionLineStyle, connectionLineComponent, connectionLineContainerStyle, deleteKeyCode = "Backspace", selectionKeyCode = "Shift", selectionOnDrag = false, selectionMode = SelectionMode.Full, panActivationKeyCode = "Space", multiSelectionKeyCode = isMacOs() ? "Meta" : "Control", zoomActivationKeyCode = isMacOs() ? "Meta" : "Control", snapToGrid, snapGrid, onlyRenderVisibleElements = false, selectNodesOnDrag, nodesDraggable, nodesConnectable, nodesFocusable, nodeOrigin = defaultNodeOrigin, edgesFocusable, edgesReconnectable, elementsSelectable = true, defaultViewport: defaultViewport$1 = defaultViewport, minZoom = 0.5, maxZoom = 2, translateExtent = infiniteExtent, preventScrolling = true, nodeExtent, defaultMarkerColor = "#b1b1b7", zoomOnScroll = true, zoomOnPinch = true, panOnScroll = false, panOnScrollSpeed = 0.5, panOnScrollMode = PanOnScrollMode.Free, zoomOnDoubleClick = true, panOnDrag = true, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneScroll, onPaneContextMenu, paneClickDistance = 0, nodeClickDistance = 0, children: children2, onReconnect, onReconnectStart, onReconnectEnd, onEdgeContextMenu, onEdgeDoubleClick, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, reconnectRadius = 10, onNodesChange, onEdgesChange, noDragClassName = "nodrag", noWheelClassName = "nowheel", noPanClassName = "nopan", fitView: fitView2, fitViewOptions, connectOnClick, attributionPosition, proOptions, defaultEdgeOptions, elevateNodesOnSelect, elevateEdgesOnSelect, disableKeyboardA11y = false, autoPanOnConnect, autoPanOnNodeDrag, autoPanSpeed, connectionRadius, isValidConnection, onError, style: style2, id: id2, nodeDragThreshold, viewport, onViewportChange, width, height, colorMode = "light", debug, ...rest }, ref) {
  const rfId = id2 || "1";
  const colorModeClassName = useColorModeClass(colorMode);
  return (0, import_jsx_runtime.jsx)("div", { ...rest, style: { ...style2, ...wrapperStyle }, ref, className: cc(["react-flow", className, colorModeClassName]), "data-testid": "rf__wrapper", id: id2, children: (0, import_jsx_runtime.jsxs)(Wrapper, { nodes, edges, width, height, fitView: fitView2, nodeOrigin, nodeExtent, children: [(0, import_jsx_runtime.jsx)(GraphView, { onInit, onNodeClick, onEdgeClick, onNodeMouseEnter, onNodeMouseMove, onNodeMouseLeave, onNodeContextMenu, onNodeDoubleClick, nodeTypes, edgeTypes, connectionLineType, connectionLineStyle, connectionLineComponent, connectionLineContainerStyle, selectionKeyCode, selectionOnDrag, selectionMode, deleteKeyCode, multiSelectionKeyCode, panActivationKeyCode, zoomActivationKeyCode, onlyRenderVisibleElements, defaultViewport: defaultViewport$1, translateExtent, minZoom, maxZoom, preventScrolling, zoomOnScroll, zoomOnPinch, zoomOnDoubleClick, panOnScroll, panOnScrollSpeed, panOnScrollMode, panOnDrag, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneScroll, onPaneContextMenu, paneClickDistance, nodeClickDistance, onSelectionContextMenu, onSelectionStart, onSelectionEnd, onReconnect, onReconnectStart, onReconnectEnd, onEdgeContextMenu, onEdgeDoubleClick, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, reconnectRadius, defaultMarkerColor, noDragClassName, noWheelClassName, noPanClassName, rfId, disableKeyboardA11y, nodeExtent, viewport, onViewportChange }), (0, import_jsx_runtime.jsx)(StoreUpdater, { nodes, edges, defaultNodes, defaultEdges, onConnect, onConnectStart, onConnectEnd, onClickConnectStart, onClickConnectEnd, nodesDraggable, nodesConnectable, nodesFocusable, edgesFocusable, edgesReconnectable, elementsSelectable, elevateNodesOnSelect, elevateEdgesOnSelect, minZoom, maxZoom, nodeExtent, onNodesChange, onEdgesChange, snapToGrid, snapGrid, connectionMode, translateExtent, connectOnClick, defaultEdgeOptions, fitView: fitView2, fitViewOptions, onNodesDelete, onEdgesDelete, onDelete, onNodeDragStart, onNodeDrag, onNodeDragStop, onSelectionDrag, onSelectionDragStart, onSelectionDragStop, onMove, onMoveStart, onMoveEnd, noPanClassName, nodeOrigin, rfId, autoPanOnConnect, autoPanOnNodeDrag, autoPanSpeed, onError, connectionRadius, isValidConnection, selectNodesOnDrag, nodeDragThreshold, onBeforeDelete, paneClickDistance, debug }), (0, import_jsx_runtime.jsx)(SelectionListener, { onSelectionChange }), children2, (0, import_jsx_runtime.jsx)(Attribution, { proOptions, position: attributionPosition }), (0, import_jsx_runtime.jsx)(A11yDescriptions, { rfId, disableKeyboardA11y })] }) });
}
var index = fixedForwardRef(ReactFlow);
function useNodesState(initialNodes) {
  const [nodes, setNodes] = (0, import_react2.useState)(initialNodes);
  const onNodesChange = (0, import_react2.useCallback)((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), []);
  return [nodes, setNodes, onNodesChange];
}
function LinePattern({ dimensions, lineWidth, variant, className }) {
  return (0, import_jsx_runtime.jsx)("path", { strokeWidth: lineWidth, d: `M${dimensions[0] / 2} 0 V${dimensions[1]} M0 ${dimensions[1] / 2} H${dimensions[0]}`, className: cc(["react-flow__background-pattern", variant, className]) });
}
function DotPattern({ radius, className }) {
  return (0, import_jsx_runtime.jsx)("circle", { cx: radius, cy: radius, r: radius, className: cc(["react-flow__background-pattern", "dots", className]) });
}
var BackgroundVariant;
(function(BackgroundVariant2) {
  BackgroundVariant2["Lines"] = "lines";
  BackgroundVariant2["Dots"] = "dots";
  BackgroundVariant2["Cross"] = "cross";
})(BackgroundVariant || (BackgroundVariant = {}));
var defaultSize = {
  [BackgroundVariant.Dots]: 1,
  [BackgroundVariant.Lines]: 1,
  [BackgroundVariant.Cross]: 6
};
var selector$3 = (s) => ({ transform: s.transform, patternId: `pattern-${s.rfId}` });
function BackgroundComponent({
  id: id2,
  variant = BackgroundVariant.Dots,
  // only used for dots and cross
  gap = 20,
  // only used for lines and cross
  size,
  lineWidth = 1,
  offset: offset2 = 0,
  color: color2,
  bgColor,
  style: style2,
  className,
  patternClassName
}) {
  const ref = (0, import_react2.useRef)(null);
  const { transform: transform2, patternId } = useStore(selector$3, shallow$1);
  const patternSize = size || defaultSize[variant];
  const isDots = variant === BackgroundVariant.Dots;
  const isCross = variant === BackgroundVariant.Cross;
  const gapXY = Array.isArray(gap) ? gap : [gap, gap];
  const scaledGap = [gapXY[0] * transform2[2] || 1, gapXY[1] * transform2[2] || 1];
  const scaledSize = patternSize * transform2[2];
  const offsetXY = Array.isArray(offset2) ? offset2 : [offset2, offset2];
  const patternDimensions = isCross ? [scaledSize, scaledSize] : scaledGap;
  const scaledOffset = [
    offsetXY[0] * transform2[2] || 1 + patternDimensions[0] / 2,
    offsetXY[1] * transform2[2] || 1 + patternDimensions[1] / 2
  ];
  const _patternId = `${patternId}${id2 ? id2 : ""}`;
  return (0, import_jsx_runtime.jsxs)("svg", { className: cc(["react-flow__background", className]), style: {
    ...style2,
    ...containerStyle,
    "--xy-background-color-props": bgColor,
    "--xy-background-pattern-color-props": color2
  }, ref, "data-testid": "rf__background", children: [(0, import_jsx_runtime.jsx)("pattern", { id: _patternId, x: transform2[0] % scaledGap[0], y: transform2[1] % scaledGap[1], width: scaledGap[0], height: scaledGap[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${scaledOffset[0]},-${scaledOffset[1]})`, children: isDots ? (0, import_jsx_runtime.jsx)(DotPattern, { radius: scaledSize / 2, className: patternClassName }) : (0, import_jsx_runtime.jsx)(LinePattern, { dimensions: patternDimensions, lineWidth, variant, className: patternClassName }) }), (0, import_jsx_runtime.jsx)("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${_patternId})` })] });
}
BackgroundComponent.displayName = "Background";
var Background = (0, import_react2.memo)(BackgroundComponent);
function PlusIcon() {
  return (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: (0, import_jsx_runtime.jsx)("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
}
function MinusIcon() {
  return (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: (0, import_jsx_runtime.jsx)("path", { d: "M0 0h32v4.2H0z" }) });
}
function FitViewIcon() {
  return (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: (0, import_jsx_runtime.jsx)("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
}
function LockIcon() {
  return (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: (0, import_jsx_runtime.jsx)("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
}
function UnlockIcon() {
  return (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: (0, import_jsx_runtime.jsx)("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
}
function ControlButton({ children: children2, className, ...rest }) {
  return (0, import_jsx_runtime.jsx)("button", { type: "button", className: cc(["react-flow__controls-button", className]), ...rest, children: children2 });
}
var selector$2 = (s) => ({
  isInteractive: s.nodesDraggable || s.nodesConnectable || s.elementsSelectable,
  minZoomReached: s.transform[2] <= s.minZoom,
  maxZoomReached: s.transform[2] >= s.maxZoom
});
function ControlsComponent({ style: style2, showZoom = true, showFitView = true, showInteractive = true, fitViewOptions, onZoomIn, onZoomOut, onFitView, onInteractiveChange, className, children: children2, position = "bottom-left", orientation = "vertical", "aria-label": ariaLabel = "React Flow controls" }) {
  const store = useStoreApi();
  const { isInteractive, minZoomReached, maxZoomReached } = useStore(selector$2, shallow$1);
  const { zoomIn, zoomOut, fitView: fitView2 } = useReactFlow();
  const onZoomInHandler = () => {
    zoomIn();
    onZoomIn == null ? void 0 : onZoomIn();
  };
  const onZoomOutHandler = () => {
    zoomOut();
    onZoomOut == null ? void 0 : onZoomOut();
  };
  const onFitViewHandler = () => {
    fitView2(fitViewOptions);
    onFitView == null ? void 0 : onFitView();
  };
  const onToggleInteractivity = () => {
    store.setState({
      nodesDraggable: !isInteractive,
      nodesConnectable: !isInteractive,
      elementsSelectable: !isInteractive
    });
    onInteractiveChange == null ? void 0 : onInteractiveChange(!isInteractive);
  };
  const orientationClass = orientation === "horizontal" ? "horizontal" : "vertical";
  return (0, import_jsx_runtime.jsxs)(Panel, { className: cc(["react-flow__controls", orientationClass, className]), position, style: style2, "data-testid": "rf__controls", "aria-label": ariaLabel, children: [showZoom && (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)(ControlButton, { onClick: onZoomInHandler, className: "react-flow__controls-zoomin", title: "zoom in", "aria-label": "zoom in", disabled: maxZoomReached, children: (0, import_jsx_runtime.jsx)(PlusIcon, {}) }), (0, import_jsx_runtime.jsx)(ControlButton, { onClick: onZoomOutHandler, className: "react-flow__controls-zoomout", title: "zoom out", "aria-label": "zoom out", disabled: minZoomReached, children: (0, import_jsx_runtime.jsx)(MinusIcon, {}) })] }), showFitView && (0, import_jsx_runtime.jsx)(ControlButton, { className: "react-flow__controls-fitview", onClick: onFitViewHandler, title: "fit view", "aria-label": "fit view", children: (0, import_jsx_runtime.jsx)(FitViewIcon, {}) }), showInteractive && (0, import_jsx_runtime.jsx)(ControlButton, { className: "react-flow__controls-interactive", onClick: onToggleInteractivity, title: "toggle interactivity", "aria-label": "toggle interactivity", children: isInteractive ? (0, import_jsx_runtime.jsx)(UnlockIcon, {}) : (0, import_jsx_runtime.jsx)(LockIcon, {}) }), children2] });
}
ControlsComponent.displayName = "Controls";
var Controls = (0, import_react2.memo)(ControlsComponent);
function MiniMapNodeComponent({ id: id2, x, y, width, height, style: style2, color: color2, strokeColor, strokeWidth, className, borderRadius, shapeRendering, selected: selected2, onClick }) {
  const { background, backgroundColor } = style2 || {};
  const fill = color2 || background || backgroundColor;
  return (0, import_jsx_runtime.jsx)("rect", { className: cc(["react-flow__minimap-node", { selected: selected2 }, className]), x, y, rx: borderRadius, ry: borderRadius, width, height, style: {
    fill,
    stroke: strokeColor,
    strokeWidth
  }, shapeRendering, onClick: onClick ? (event) => onClick(event, id2) : void 0 });
}
var MiniMapNode = (0, import_react2.memo)(MiniMapNodeComponent);
var selectorNodeIds = (s) => s.nodes.map((node) => node.id);
var getAttrFunction = (func) => func instanceof Function ? func : () => func;
function MiniMapNodes({
  nodeStrokeColor,
  nodeColor,
  nodeClassName = "",
  nodeBorderRadius = 5,
  nodeStrokeWidth,
  // We need to rename the prop to be `CapitalCase` so that JSX will render it as
  // a component properly.
  nodeComponent: NodeComponent = MiniMapNode,
  onClick
}) {
  const nodeIds = useStore(selectorNodeIds, shallow$1);
  const nodeColorFunc = getAttrFunction(nodeColor);
  const nodeStrokeColorFunc = getAttrFunction(nodeStrokeColor);
  const nodeClassNameFunc = getAttrFunction(nodeClassName);
  const shapeRendering = typeof window === "undefined" || !!window.chrome ? "crispEdges" : "geometricPrecision";
  return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: nodeIds.map((nodeId) => (
    // The split of responsibilities between MiniMapNodes and
    // NodeComponentWrapper may appear weird. However, it’s designed to
    // minimize the cost of updates when individual nodes change.
    //
    // For more details, see a similar commit in `NodeRenderer/index.tsx`.
    (0, import_jsx_runtime.jsx)(NodeComponentWrapper, { id: nodeId, nodeColorFunc, nodeStrokeColorFunc, nodeClassNameFunc, nodeBorderRadius, nodeStrokeWidth, NodeComponent, onClick, shapeRendering }, nodeId)
  )) });
}
function NodeComponentWrapperInner({ id: id2, nodeColorFunc, nodeStrokeColorFunc, nodeClassNameFunc, nodeBorderRadius, nodeStrokeWidth, shapeRendering, NodeComponent, onClick }) {
  const { node, x, y, width, height } = useStore((s) => {
    const node2 = s.nodeLookup.get(id2);
    const { x: x2, y: y2 } = node2.internals.positionAbsolute;
    const { width: width2, height: height2 } = getNodeDimensions(node2);
    return {
      node: node2,
      x: x2,
      y: y2,
      width: width2,
      height: height2
    };
  }, shallow$1);
  if (!node || node.hidden || !nodeHasDimensions(node)) {
    return null;
  }
  return (0, import_jsx_runtime.jsx)(NodeComponent, { x, y, width, height, style: node.style, selected: !!node.selected, className: nodeClassNameFunc(node), color: nodeColorFunc(node), borderRadius: nodeBorderRadius, strokeColor: nodeStrokeColorFunc(node), strokeWidth: nodeStrokeWidth, shapeRendering, onClick, id: node.id });
}
var NodeComponentWrapper = (0, import_react2.memo)(NodeComponentWrapperInner);
var MiniMapNodes$1 = (0, import_react2.memo)(MiniMapNodes);
var defaultWidth = 200;
var defaultHeight = 150;
var selector$1 = (s) => {
  const viewBB = {
    x: -s.transform[0] / s.transform[2],
    y: -s.transform[1] / s.transform[2],
    width: s.width / s.transform[2],
    height: s.height / s.transform[2]
  };
  return {
    viewBB,
    boundingRect: s.nodeLookup.size > 0 ? getBoundsOfRects(getInternalNodesBounds(s.nodeLookup), viewBB) : viewBB,
    rfId: s.rfId,
    panZoom: s.panZoom,
    translateExtent: s.translateExtent,
    flowWidth: s.width,
    flowHeight: s.height
  };
};
var ARIA_LABEL_KEY = "react-flow__minimap-desc";
function MiniMapComponent({
  style: style2,
  className,
  nodeStrokeColor,
  nodeColor,
  nodeClassName = "",
  nodeBorderRadius = 5,
  nodeStrokeWidth,
  // We need to rename the prop to be `CapitalCase` so that JSX will render it as
  // a component properly.
  nodeComponent,
  bgColor,
  maskColor,
  maskStrokeColor,
  maskStrokeWidth,
  position = "bottom-right",
  onClick,
  onNodeClick,
  pannable = false,
  zoomable = false,
  ariaLabel = "React Flow mini map",
  inversePan,
  zoomStep = 10,
  offsetScale = 5
}) {
  var _a, _b;
  const store = useStoreApi();
  const svg = (0, import_react2.useRef)(null);
  const { boundingRect, viewBB, rfId, panZoom, translateExtent, flowWidth, flowHeight } = useStore(selector$1, shallow$1);
  const elementWidth = (_a = style2 == null ? void 0 : style2.width) != null ? _a : defaultWidth;
  const elementHeight = (_b = style2 == null ? void 0 : style2.height) != null ? _b : defaultHeight;
  const scaledWidth = boundingRect.width / elementWidth;
  const scaledHeight = boundingRect.height / elementHeight;
  const viewScale = Math.max(scaledWidth, scaledHeight);
  const viewWidth = viewScale * elementWidth;
  const viewHeight = viewScale * elementHeight;
  const offset2 = offsetScale * viewScale;
  const x = boundingRect.x - (viewWidth - boundingRect.width) / 2 - offset2;
  const y = boundingRect.y - (viewHeight - boundingRect.height) / 2 - offset2;
  const width = viewWidth + offset2 * 2;
  const height = viewHeight + offset2 * 2;
  const labelledBy = `${ARIA_LABEL_KEY}-${rfId}`;
  const viewScaleRef = (0, import_react2.useRef)(0);
  const minimapInstance = (0, import_react2.useRef)();
  viewScaleRef.current = viewScale;
  (0, import_react2.useEffect)(() => {
    if (svg.current && panZoom) {
      minimapInstance.current = XYMinimap({
        domNode: svg.current,
        panZoom,
        getTransform: () => store.getState().transform,
        getViewScale: () => viewScaleRef.current
      });
      return () => {
        var _a2;
        (_a2 = minimapInstance.current) == null ? void 0 : _a2.destroy();
      };
    }
  }, [panZoom]);
  (0, import_react2.useEffect)(() => {
    var _a2;
    (_a2 = minimapInstance.current) == null ? void 0 : _a2.update({
      translateExtent,
      width: flowWidth,
      height: flowHeight,
      inversePan,
      pannable,
      zoomStep,
      zoomable
    });
  }, [pannable, zoomable, inversePan, zoomStep, translateExtent, flowWidth, flowHeight]);
  const onSvgClick = onClick ? (event) => {
    var _a2;
    const [x2, y2] = ((_a2 = minimapInstance.current) == null ? void 0 : _a2.pointer(event)) || [0, 0];
    onClick(event, { x: x2, y: y2 });
  } : void 0;
  const onSvgNodeClick = onNodeClick ? (0, import_react2.useCallback)((event, nodeId) => {
    const node = store.getState().nodeLookup.get(nodeId);
    onNodeClick(event, node);
  }, []) : void 0;
  return (0, import_jsx_runtime.jsx)(Panel, { position, style: {
    ...style2,
    "--xy-minimap-background-color-props": typeof bgColor === "string" ? bgColor : void 0,
    "--xy-minimap-mask-background-color-props": typeof maskColor === "string" ? maskColor : void 0,
    "--xy-minimap-mask-stroke-color-props": typeof maskStrokeColor === "string" ? maskStrokeColor : void 0,
    "--xy-minimap-mask-stroke-width-props": typeof maskStrokeWidth === "number" ? maskStrokeWidth * viewScale : void 0,
    "--xy-minimap-node-background-color-props": typeof nodeColor === "string" ? nodeColor : void 0,
    "--xy-minimap-node-stroke-color-props": typeof nodeStrokeColor === "string" ? nodeStrokeColor : void 0,
    "--xy-minimap-node-stroke-width-props": typeof nodeStrokeWidth === "string" ? nodeStrokeWidth : void 0
  }, className: cc(["react-flow__minimap", className]), "data-testid": "rf__minimap", children: (0, import_jsx_runtime.jsxs)("svg", { width: elementWidth, height: elementHeight, viewBox: `${x} ${y} ${width} ${height}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": labelledBy, ref: svg, onClick: onSvgClick, children: [ariaLabel && (0, import_jsx_runtime.jsx)("title", { id: labelledBy, children: ariaLabel }), (0, import_jsx_runtime.jsx)(MiniMapNodes$1, { onClick: onSvgNodeClick, nodeColor, nodeStrokeColor, nodeBorderRadius, nodeClassName, nodeStrokeWidth, nodeComponent }), (0, import_jsx_runtime.jsx)("path", { className: "react-flow__minimap-mask", d: `M${x - offset2},${y - offset2}h${width + offset2 * 2}v${height + offset2 * 2}h${-width - offset2 * 2}z
        M${viewBB.x},${viewBB.y}h${viewBB.width}v${viewBB.height}h${-viewBB.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
}
MiniMapComponent.displayName = "MiniMap";
var MiniMap = (0, import_react2.memo)(MiniMapComponent);
function ResizeControl({ nodeId, position, variant = ResizeControlVariant.Handle, className, style: style2 = {}, children: children2, color: color2, minWidth = 10, minHeight = 10, maxWidth = Number.MAX_VALUE, maxHeight = Number.MAX_VALUE, keepAspectRatio = false, shouldResize, onResizeStart, onResize, onResizeEnd }) {
  const contextNodeId = useNodeId();
  const id2 = typeof nodeId === "string" ? nodeId : contextNodeId;
  const store = useStoreApi();
  const resizeControlRef = (0, import_react2.useRef)(null);
  const defaultPosition = variant === ResizeControlVariant.Line ? "right" : "bottom-right";
  const controlPosition = position != null ? position : defaultPosition;
  const resizer = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    if (!resizeControlRef.current || !id2) {
      return;
    }
    if (!resizer.current) {
      resizer.current = XYResizer({
        domNode: resizeControlRef.current,
        nodeId: id2,
        getStoreItems: () => {
          const { nodeLookup, transform: transform2, snapGrid, snapToGrid, nodeOrigin, domNode } = store.getState();
          return {
            nodeLookup,
            transform: transform2,
            snapGrid,
            snapToGrid,
            nodeOrigin,
            paneDomNode: domNode
          };
        },
        onChange: (change, childChanges) => {
          var _a, _b, _c, _d, _e;
          const { triggerNodeChanges, nodeLookup, parentLookup, nodeOrigin } = store.getState();
          const changes = [];
          const nextPosition = { x: change.x, y: change.y };
          const node = nodeLookup.get(id2);
          if (node && node.expandParent && node.parentId) {
            const origin = (_a = node.origin) != null ? _a : nodeOrigin;
            const width = (_b = change.width) != null ? _b : node.measured.width;
            const height = (_c = change.height) != null ? _c : node.measured.height;
            const child = {
              id: node.id,
              parentId: node.parentId,
              rect: {
                width,
                height,
                ...evaluateAbsolutePosition({
                  x: (_d = change.x) != null ? _d : node.position.x,
                  y: (_e = change.y) != null ? _e : node.position.y
                }, { width, height }, node.parentId, nodeLookup, origin)
              }
            };
            const parentExpandChanges = handleExpandParent([child], nodeLookup, parentLookup, nodeOrigin);
            changes.push(...parentExpandChanges);
            nextPosition.x = change.x ? Math.max(origin[0] * width, change.x) : void 0;
            nextPosition.y = change.y ? Math.max(origin[1] * height, change.y) : void 0;
          }
          if (nextPosition.x !== void 0 && nextPosition.y !== void 0) {
            const positionChange = {
              id: id2,
              type: "position",
              position: { ...nextPosition }
            };
            changes.push(positionChange);
          }
          if (change.width !== void 0 && change.height !== void 0) {
            const dimensionChange = {
              id: id2,
              type: "dimensions",
              resizing: true,
              setAttributes: true,
              dimensions: {
                width: change.width,
                height: change.height
              }
            };
            changes.push(dimensionChange);
          }
          for (const childChange of childChanges) {
            const positionChange = {
              ...childChange,
              type: "position"
            };
            changes.push(positionChange);
          }
          triggerNodeChanges(changes);
        },
        onEnd: () => {
          const dimensionChange = {
            id: id2,
            type: "dimensions",
            resizing: false
          };
          store.getState().triggerNodeChanges([dimensionChange]);
        }
      });
    }
    resizer.current.update({
      controlPosition,
      boundaries: {
        minWidth,
        minHeight,
        maxWidth,
        maxHeight
      },
      keepAspectRatio,
      onResizeStart,
      onResize,
      onResizeEnd,
      shouldResize
    });
    return () => {
      var _a;
      (_a = resizer.current) == null ? void 0 : _a.destroy();
    };
  }, [
    controlPosition,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    keepAspectRatio,
    onResizeStart,
    onResize,
    onResizeEnd,
    shouldResize
  ]);
  const positionClassNames = controlPosition.split("-");
  const colorStyleProp = variant === ResizeControlVariant.Line ? "borderColor" : "backgroundColor";
  const controlStyle = color2 ? { ...style2, [colorStyleProp]: color2 } : style2;
  return (0, import_jsx_runtime.jsx)("div", { className: cc(["react-flow__resize-control", "nodrag", ...positionClassNames, variant, className]), ref: resizeControlRef, style: controlStyle, children: children2 });
}
var NodeResizeControl = (0, import_react2.memo)(ResizeControl);
function NodeResizer({ nodeId, isVisible = true, handleClassName, handleStyle, lineClassName, lineStyle, color: color2, minWidth = 10, minHeight = 10, maxWidth = Number.MAX_VALUE, maxHeight = Number.MAX_VALUE, keepAspectRatio = false, shouldResize, onResizeStart, onResize, onResizeEnd }) {
  if (!isVisible) {
    return null;
  }
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [XY_RESIZER_LINE_POSITIONS.map((position) => (0, import_jsx_runtime.jsx)(NodeResizeControl, { className: lineClassName, style: lineStyle, nodeId, position, variant: ResizeControlVariant.Line, color: color2, minWidth, minHeight, maxWidth, maxHeight, onResizeStart, keepAspectRatio, shouldResize, onResize, onResizeEnd }, position)), XY_RESIZER_HANDLE_POSITIONS.map((position) => (0, import_jsx_runtime.jsx)(NodeResizeControl, { className: handleClassName, style: handleStyle, nodeId, position, color: color2, minWidth, minHeight, maxWidth, maxHeight, onResizeStart, keepAspectRatio, shouldResize, onResize, onResizeEnd }, position))] });
}

// ../packages-experimental/uniui/src/views/workbench/UniWorkbench.tsx
var import_react11 = __toESM(require_react());
var import_react_dom3 = __toESM(require_react_dom());

// ../packages-experimental/uniui/src/commands/operations/uni-focus-unit.operation.ts
var UniFocusUnitOperation = {
  id: "uniui.operation.uni-focus-unit",
  type: 1 /* OPERATION */,
  handler: async (accessor, params) => {
    const { unitId } = params;
    const instanceService = accessor.get(IUniverInstanceService);
    instanceService.focusUnit(unitId);
    return true;
  }
};

// ../packages-experimental/uniui/src/services/flow/flow-manager.service.ts
var FlowManagerService = class extends Disposable {
  constructor() {
    super();
    __publicField(this, "_viewportChanged$", new BehaviorSubject(null));
    __publicField(this, "viewportChanged$", this._viewportChanged$.asObservable());
    __publicField(this, "_flowInstance");
  }
  getViewport() {
    var _a;
    return (_a = this._flowInstance) == null ? void 0 : _a.getViewport();
  }
  setViewport(viewport) {
    var _a;
    (_a = this._flowInstance) == null ? void 0 : _a.setViewport(viewport, {
      duration: 100
    });
  }
  setReactFlowInstance(instance) {
    this._flowInstance = instance;
  }
  fitView() {
    if (this._flowInstance) {
      this._flowInstance.fitView();
    }
  }
  zoomIn() {
    if (this._flowInstance) {
      this._flowInstance.zoomIn();
    }
  }
  zoomOut() {
    if (this._flowInstance) {
      this._flowInstance.zoomOut();
    }
  }
  setViewportChanged(viewport) {
    this._viewportChanged$.next(viewport);
  }
};

// ../packages-experimental/uniui/src/services/unit-grid/unit-grid.service.ts
var IUnitGridService = createIdentifier("uniui.grid.service");
var UnitGridService = class extends Disposable {
  constructor(_renderSrv, _localStorageService, _univerInstanceService) {
    super();
    this._renderSrv = _renderSrv;
    this._localStorageService = _localStorageService;
    this._univerInstanceService = _univerInstanceService;
    // TODO@wzhudev: currently we only support at maximum 2 units rendered side by side.
    // In the future we would introduce a grid system (very much like vscode's) to support more
    // units and more complex layout.
    __publicField(this, "_unitGrid", []);
    __publicField(this, "_unitGrid$", new BehaviorSubject(this._unitGrid));
    __publicField(this, "unitGrid$", this._unitGrid$.asObservable());
    __publicField(this, "_newNode", null);
    __publicField(this, "_newNode$", new BehaviorSubject(null));
    __publicField(this, "newNode$", this._newNode$.asObservable());
    __publicField(this, "_nodeIndex", 0);
    __publicField(this, "_cachedGrid", null);
    this._init();
  }
  get unitGrid() {
    return this._unitGrid;
  }
  get cachedGrid() {
    return this._cachedGrid;
  }
  get newNode() {
    return this._newNode;
  }
  dispose() {
    super.dispose();
    this._unitGrid$.complete();
    this._newNode$.complete();
  }
  setNewNodeObserver() {
    this._newNode$.next(this._newNode);
  }
  setContainerForRender(unitId, element) {
    var _a;
    (_a = this._renderSrv.getRenderById(unitId)) == null ? void 0 : _a.engine.setContainer(element);
  }
  changeDimension(id2, dimension) {
    const node = this._unitGrid.find((item) => item.id === id2);
    if (node) {
      node.style.width = `${dimension.width}px`;
      node.style.height = `${dimension.height}px`;
      this._cacheData();
    }
  }
  changePosition(id2, position) {
    const node = this._unitGrid.find((item) => item.id === id2);
    if (node) {
      node.position.x = position.x;
      node.position.y = position.y;
      this._cacheData();
    }
  }
  async _init() {
    await this._initData();
    this._renderSrv.getRenderAll().forEach((renderer) => this._onRendererCreated(renderer));
    this.disposeWithMe(this._renderSrv.created$.subscribe((render2) => this._onRendererCreated(render2)));
    this.disposeWithMe(this._univerInstanceService.unitDisposed$.subscribe((unitModel) => this._onUnitDisposed(unitModel)));
  }
  async _initData() {
    const raw = await this._localStorageService.getItem(getGridUnitLocalCacheKey("static"));
    if (raw) {
      this._cachedGrid = raw;
    }
  }
  _cacheData() {
    this._localStorageService.setItem(getGridUnitLocalCacheKey("static"), this.unitGrid);
  }
  _onRendererCreated(renderer) {
    const { unitId, type, isThumbNail } = renderer;
    if (isInternalEditorID(unitId) || isThumbNail) {
      return;
    }
    this._insertNewNode(unitId, type);
  }
  _insertNewNode(unitId, type) {
    var _a, _b;
    const index2 = this._nodeIndex;
    this._nodeIndex += 1;
    const MAX_COUNT_IN_ROW = 3;
    const newNode = (_b = (_a = this._cachedGrid) == null ? void 0 : _a.find((item) => item.id === unitId)) != null ? _b : {
      id: unitId,
      data: {
        unitId,
        type
      },
      style: {
        width: type === O.UNIVER_SLIDE ? "1000px" : "940px",
        height: "854px",
        display: "flex",
        borderRadius: "8px",
        border: "1px solid #ccc",
        backgroundColor: type === O.UNIVER_SHEET ? "#fff" : "#f4f6f8"
      },
      position: { x: index2 % MAX_COUNT_IN_ROW * 1050, y: Math.floor(index2 / MAX_COUNT_IN_ROW) * 950 + 40 }
    };
    this._unitGrid.push(newNode);
    this._newNode = newNode;
    this._emitLayoutChange();
  }
  _onUnitDisposed(unitModel) {
    const unitId = unitModel.getUnitId();
    const idx = this._unitGrid.findIndex((item) => item.id === unitId);
    if (idx !== -1) {
      this._unitGrid.splice(idx, 1);
      this._emitLayoutChange();
    }
  }
  _emitLayoutChange() {
    this._unitGrid$.next(this._unitGrid.slice());
    this._cacheData();
  }
};
UnitGridService = __decorateClass([
  __decorateParam(0, IRenderManagerService),
  __decorateParam(1, ILocalStorageService),
  __decorateParam(2, IUniverInstanceService)
], UnitGridService);
function getGridUnitLocalCacheKey(projectId) {
  return `project-cache-${projectId}`;
}

// ../packages-experimental/uniui/src/views/hooks/title.ts
var import_react3 = __toESM(require_react());
function useUnitTitle(unitId) {
  const instanceService = useDependency(IUniverInstanceService);
  const unit = (0, import_react3.useMemo)(() => instanceService.getUnit(unitId), [unitId, instanceService]);
  const title = useObservable(unit == null ? void 0 : unit.name$, "", false, [unit]);
  return title;
}
function useUnitFocused(unitId) {
  const instanceService = useDependency(IUniverInstanceService);
  const focusedUnitId = useObservable(instanceService.focused$);
  return unitId === focusedUnitId;
}

// ../packages-experimental/uniui/src/views/uni-controls/UniControls.tsx
var import_react6 = __toESM(require_react());

// ../packages-experimental/uniui/src/views/uni-toolbar/UniFloatToolbar.tsx
var import_react4 = __toESM(require_react());

// ../packages-experimental/uniui/src/commands/operations/uni.operation.ts
var DisposeUnitOperation = {
  id: "uniui.operation.dispose-unit",
  type: 1 /* OPERATION */,
  handler: async (accessor) => {
    var _a;
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const unitId = (_a = univerInstanceService.getFocusedUnit()) == null ? void 0 : _a.getUnitId();
    if (unitId) {
      univerInstanceService.disposeUnit(unitId);
    }
    return true;
  }
};

// ../packages-experimental/uniui/src/controllers/menu.ts
var DOWNLOAD_MENU_ID = "DOWNLOAD_MENU_ID";
var SHARE_MENU_ID = "SHARE_MENU_ID";
var LOCK_MENU_ID = "LOCK_MENU_ID";
var PRINT_MENU_ID = "PRINT_MENU_ID";
var ZEN_MENU_ID = "ZEN_MENU_ID";
var DELETE_MENU_ID = DisposeUnitOperation.id;
var FONT_GROUP_MENU_ID = "FONT_GROUP_MENU_ID";
var FAKE_FONT_FAMILY_MENU_ID = "FAKE_FONT_FAMILY_MENU_ID";
var FAKE_FONT_SIZE_MENU_ID = "FAKE_FONT_SIZE_MENU_ID";
var FAKE_FONT_COLOR_MENU_ID = "FAKE_FONT_COLOR_MENU_ID";
var FAKE_BG_COLOR_MENU_ID = "FAKE_BG_COLOR_MENU_ID";
var FAKE_IMAGE_MENU_ID = "FAKE_IMAGE_MENU_ID";
var FAKE_FONT_GROUP_MENU_ID = "FAKE_FONT_GROUP_MENU_ID";
var FAKE_TABLE_MENU_ID = "FAKE_TABLE_MENU_ID";
var FAKE_UNORDER_LIST_MENU_ID = "FAKE_UNORDER_LIST_MENU_ID";
var FAKE_ORDER_LIST_MENU_ID = "FAKE_ORDER_LIST_MENU_ID";
function FakeFontFamilySelectorMenuItemFactory(accessor) {
  return {
    id: FAKE_FONT_FAMILY_MENU_ID,
    tooltip: "toolbar.font",
    type: 1 /* SELECTOR */,
    label: "UI_PLUGIN_DOCS_FONT_FAMILY_COMPONENT",
    selections: [],
    disabled$: new Observable((subscriber) => {
      subscriber.next(true);
    })
  };
}
function FakeFontSizeSelectorMenuItemFactory(accessor) {
  return {
    id: FAKE_FONT_SIZE_MENU_ID,
    type: 1 /* SELECTOR */,
    tooltip: "toolbar.fontSize",
    label: {
      name: "UI_PLUGIN_DOCS_FONT_SIZE_COMPONENT",
      props: {
        min: 1,
        max: 400
      }
    },
    selections: [],
    disabled$: new Observable((subscriber) => {
      subscriber.next(true);
    })
  };
}
function FakeTextColorSelectorMenuItemFactory(accessor) {
  return {
    id: FAKE_FONT_COLOR_MENU_ID,
    icon: "FontColor",
    tooltip: "toolbar.textColor.main",
    type: 2 /* BUTTON_SELECTOR */,
    selections: [],
    disabled$: new Observable((subscriber) => {
      subscriber.next(true);
    })
  };
}
function FakeBackgroundColorSelectorMenuItemFactory(accessor) {
  return {
    id: FAKE_BG_COLOR_MENU_ID,
    tooltip: "toolbar.fillColor.main",
    type: 2 /* BUTTON_SELECTOR */,
    icon: "PaintBucket",
    selections: [],
    disabled$: new Observable((subscriber) => {
      subscriber.next(true);
    })
  };
}
function FakeImageMenuFactory(accessor) {
  return {
    id: FAKE_IMAGE_MENU_ID,
    type: 3 /* SUBITEMS */,
    icon: "addition-and-subtraction-single",
    tooltip: "sheetImage.title",
    disabled$: new Observable((subscriber) => {
      subscriber.next(true);
    })
  };
}
function FakeUnorderListMenuItemFactory(accessor) {
  return {
    id: FAKE_UNORDER_LIST_MENU_ID,
    type: 2 /* BUTTON_SELECTOR */,
    icon: "UnorderSingle",
    tooltip: "toolbar.unorder",
    disabled$: new Observable((subscriber) => {
      subscriber.next(true);
    })
  };
}
function FakeOrderListMenuItemFactory(accessor) {
  return {
    id: FAKE_ORDER_LIST_MENU_ID,
    type: 2 /* BUTTON_SELECTOR */,
    icon: "OrderSingle",
    tooltip: "toolbar.order",
    disabled$: new Observable((subscriber) => {
      subscriber.next(true);
    })
  };
}
function FontGroupMenuItemFactory(accessor) {
  const univerInstanceService = accessor.get(IUniverInstanceService);
  return {
    id: FONT_GROUP_MENU_ID,
    type: 3 /* SUBITEMS */,
    tooltip: "Font group",
    icon: "BoldSingle",
    hidden$: new Observable((subscriber) => {
      const subscription = univerInstanceService.focused$.subscribe((unitId) => {
        if (unitId == null) {
          return subscriber.next(true);
        }
        const univerType2 = univerInstanceService.getUnitType(unitId);
        subscriber.next(univerType2 === O.UNIVER_SLIDE);
      });
      const focusedUniverInstance = univerInstanceService.getFocusedUnit();
      if (focusedUniverInstance == null) {
        return subscriber.next(true);
      }
      const univerType = univerInstanceService.getUnitType(focusedUniverInstance.getUnitId());
      subscriber.next(univerType === O.UNIVER_SLIDE);
      return () => subscription.unsubscribe();
    })
  };
}
function FakeFontGroupMenuItemFactory(accessor) {
  return {
    id: FAKE_FONT_GROUP_MENU_ID,
    type: 3 /* SUBITEMS */,
    tooltip: "Font group",
    icon: "BoldSingle",
    disabled$: new Observable((subscriber) => {
      subscriber.next(true);
    })
  };
}
function FakePivotTableMenuItemFactory(accessor) {
  return {
    id: FAKE_TABLE_MENU_ID,
    type: 0 /* BUTTON */,
    icon: "PivotTableSingle",
    tooltip: "PivotTable",
    disabled$: new Observable((subscriber) => {
      subscriber.next(true);
    })
  };
}
function DownloadMenuItemFactory(accessor) {
  return {
    id: DOWNLOAD_MENU_ID,
    type: 0 /* BUTTON */,
    title: "",
    tooltip: "Download",
    icon: "DownloadSingle"
  };
}
function ShareMenuItemFactory(accessor) {
  return {
    id: SHARE_MENU_ID,
    type: 0 /* BUTTON */,
    title: "",
    tooltip: "Share",
    icon: "ShareSingle"
  };
}
function PrintMenuItemFactory(accessor) {
  return {
    id: PRINT_MENU_ID,
    type: 0 /* BUTTON */,
    title: "",
    tooltip: "Print",
    icon: "PrintSingle"
  };
}
function ZenMenuItemFactory(accessor) {
  return {
    id: ZEN_MENU_ID,
    type: 0 /* BUTTON */,
    title: "",
    icon: "ZenSingle",
    tooltip: "Full screen"
  };
}
function DeleteMenuItemFactory(accessor) {
  return {
    id: DELETE_MENU_ID,
    type: 0 /* BUTTON */,
    title: "Delete",
    tooltip: "Delete",
    icon: "DeleteSingle"
  };
}

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages-experimental/uniui/src/views/uni-toolbar/index.module.less
var index_module_default = {
  "headerbar": "univer-headerbar",
  "headerMenu": "univer-header-menu",
  "menubar": "univer-menubar",
  "menubarItem": "univer-menubar-item",
  "menubarItemActive": "univer-menubar-item-active",
  "uniToolbar": "univer-uni-toolbar",
  "uniToolbarContainer": "univer-uni-toolbar-container",
  "uniToolbarMore": "univer-uni-toolbar-more",
  "uniToolbarMoreContainer": "univer-uni-toolbar-more-container",
  "toolbarGroup": "univer-toolbar-group",
  "uniToolbarGroup": "univer-uni-toolbar-group",
  "uniToolbarItemSelectButton": "univer-uni-toolbar-item-select-button",
  "uniToolbarItemSelectButtonDisabled": "univer-uni-toolbar-item-select-button-disabled",
  "toolbarItemSelectButtonActivated": "univer-toolbar-item-select-button-activated",
  "toolbarItemSelectButtonLabel": "univer-toolbar-item-select-button-label",
  "toolbarItemSelectButtonArrow": "univer-toolbar-item-select-button-arrow",
  "uniToolbarItemSelectButtonActivated": "univer-uni-toolbar-item-select-button-activated",
  "uniToolbarItemSelectButtonLabel": "univer-uni-toolbar-item-select-button-label",
  "uniToolbarItemSelectButtonArrow": "univer-uni-toolbar-item-select-button-arrow",
  "uniToolbarItemSelect": "univer-uni-toolbar-item-select",
  "uniToolbarItemSelectDisabled": "univer-uni-toolbar-item-select-disabled",
  "toolbarItemSelectActivated": "univer-toolbar-item-select-activated",
  "uniToolbarItemSelectActivated": "univer-uni-toolbar-item-select-activated",
  "uniToolbarItemSelectArrow": "univer-uni-toolbar-item-select-arrow",
  "uniToolbarItemSelectArrowDisabled": "univer-uni-toolbar-item-select-arrow-disabled",
  "toolbarItemSelectArrowActivated": "univer-toolbar-item-select-arrow-activated",
  "uniToolbarItemSelectArrowActivated": "univer-uni-toolbar-item-select-arrow-activated",
  "uiPluginSheetsFontFamily": "univer-ui-plugin-sheets-font-family",
  "uniFormulaBar": "univer-uni-formula-bar",
  "uniFormulaBarText": "univer-uni-formula-bar-text",
  "uniFormulaBarDisable": "univer-uni-formula-bar-disable",
  "uniFloatingToolbar": "univer-uni-floating-toolbar",
  "unitName": "univer-unit-name",
  "uniDiv": "univer-uni-div",
  "uniFormulaBarFullInput": "univer-uni-formula-bar-full-input",
  "uniFormulaBox": "univer-uni-formula-box",
  "uniFormulaInput": "univer-uni-formula-input",
  "formulaIcon": "univer-formula-icon",
  "formulaIconDisable": "univer-formula-icon-disable",
  "formulaIconWrapper": "univer-formula-icon-wrapper",
  "iconContainer": "univer-icon-container",
  "iconContainerSuccess": "univer-icon-container-success",
  "formulaActive": "univer-formula-active",
  "iconContainerError": "univer-icon-container-error",
  "iconContainerFx": "univer-icon-container-fx"
};

// ../packages-experimental/uniui/src/views/uni-toolbar/UniFloatToolbar.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var UNI_FLOATING_TOOLBAR_SCHEMA = [
  DOWNLOAD_MENU_ID,
  SHARE_MENU_ID,
  LOCK_MENU_ID,
  PRINT_MENU_ID,
  ZEN_MENU_ID,
  DELETE_MENU_ID
];
var UniFloatingToolbar = import_react4.default.forwardRef(({ node }, ref) => {
  const menuManagerService = useDependency(IMenuManagerService);
  const isMenuChange = useObservable(menuManagerService.menuChanged$);
  const [uniVisibleItems, setUniVisibleItems] = (0, import_react4.useState)([]);
  const { x, y, refs, strategy, update } = useFloating({
    placement: "top",
    middleware: [offset(10), flip(), shift({ padding: 5 })]
  });
  const { setReference, setFloating } = refs;
  const toolbarNameComponents = useComponentsOfPart("name" /* NAME */);
  const updateVisibleItems = () => {
    const menus = menuManagerService.getMenuByPositionKey("toolbar_float" /* TOOLBAR_FLOAT */);
    if (menus) {
      const visibleItems = UNI_FLOATING_TOOLBAR_SCHEMA.map((id2) => {
        var _a;
        return (_a = menus.find((item) => item.key === id2)) == null ? void 0 : _a.item;
      }).filter((item) => !!item);
      setUniVisibleItems(visibleItems);
    }
  };
  (0, import_react4.useImperativeHandle)(ref, () => ({
    update: () => update()
  }), [update]);
  (0, import_react4.useEffect)(() => {
    if (node) {
      const ref2 = document.querySelector(`[data-id="${node.unitId}"]`);
      setReference(ref2);
    }
  }, [node, setReference]);
  (0, import_react4.useEffect)(() => {
    updateVisibleItems();
  }, [isMenuChange]);
  if (!node || !refs.reference.current) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      className: index_module_default.uniFloatingToolbar,
      ref: setFloating,
      style: { position: strategy, top: y != null ? y : 0, left: x != null ? x : 0 },
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: index_module_default.uniToolbar, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          ComponentContainer,
          {
            components: toolbarNameComponents,
            fallback: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(UnitName, { unitId: node.unitId })
          },
          "name"
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(UniDiv, {}),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: index_module_default.toolbarGroup, children: uniVisibleItems.map((subItem) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ToolbarItem, { ...subItem }, subItem.id)) })
      ] })
    }
  );
});
function UniDiv() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: index_module_default.uniDiv });
}
function UnitName({ unitId }) {
  const instanceService = useDependency(IUniverInstanceService);
  const unit = instanceService.getUnit(unitId);
  const name = useObservable(unit == null ? void 0 : unit.name$);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: index_module_default.unitName, children: name });
}

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages-experimental/uniui/src/views/uni-controls/index.module.less
var index_module_default2 = {
  "sliderWidth": "116",
  "sliderHandleSize": "12",
  "uniControls": "univer-uni-controls",
  "uniControlButton": "univer-uni-control-button",
  "slider": "univer-slider",
  "sliderDisabled": "univer-slider-disabled",
  "sliderRail": "univer-slider-rail",
  "sliderHandle": "univer-slider-handle",
  "sliderResetPoint": "univer-slider-reset-point",
  "sliderValue": "univer-slider-value",
  "sliderInnerRail": "univer-slider-inner-rail",
  "dropdownOpen": "univer-dropdown-open",
  "sliderShortcuts": "univer-slider-shortcuts",
  "sliderShortcut": "univer-slider-shortcut",
  "sliderShortcutIcon": "univer-slider-shortcut-icon",
  "sliderShortcutActive": "univer-slider-shortcut-active"
};

// ../packages-experimental/uniui/src/views/uni-controls/UniControls.tsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var UniControlButton = (props) => {
  const { children: children2, onClick, style: style2, tooltips } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Tooltip, { title: tooltips, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: index_module_default2.uniControlButton, onClick, style: style2, children: children2 }) });
};
var MAX_ZOOM = 2;
var MIN_ZOOM = 0.1;
var DEFAULT_ZOOM = 1;
var shortcuts = [10, 50, 75, 100, 125, 150, 200, 0];
var UniControls = ({ zoom, onItemClick }) => {
  const unitGridService = useDependency(IUnitGridService);
  const { zoomIn, zoomOut, fitView: fitView2, getNodes, setCenter, getZoom } = useReactFlow();
  const zoomPercent = Math.floor(zoom * 100);
  const rightPadding = useRightSidebarVisible() ? 360 : 12;
  const onZoomInHandler = () => {
    zoomIn();
  };
  const onZoomOutHandler = () => {
    zoomOut();
  };
  const onFullscreenHandler = () => {
    document.body.requestFullscreen();
  };
  const setZoomAtCenter = (0, import_react6.useCallback)((zoom2) => {
    const nodes = getNodes();
    const xLeftPositions = nodes.map((node) => node.position.x);
    const xRightPositions = nodes.map((node) => {
      var _a, _b;
      return node.position.x + ((_b = (_a = node.measured) == null ? void 0 : _a.width) != null ? _b : 0);
    });
    const yTopPositions = nodes.map((node) => node.position.y);
    const yDownPositions = nodes.map((node) => {
      var _a, _b;
      return node.position.y + ((_b = (_a = node.measured) == null ? void 0 : _a.height) != null ? _b : 0);
    });
    const centerX = (Math.min(...xLeftPositions) + Math.max(...xRightPositions)) / 2;
    const centerY = (Math.min(...yTopPositions) + Math.max(...yDownPositions)) / 2;
    setCenter(centerX, centerY, { zoom: zoom2 });
  }, [getNodes, setCenter]);
  const handleFitView = (node) => {
    var _a, _b;
    if (node) {
      const { x, y } = node.position;
      const width = Number.parseInt(`${(_a = node.style) == null ? void 0 : _a.width}`) || 0;
      const height = Number.parseInt(`${(_b = node.style) == null ? void 0 : _b.height}`) || 0;
      setCenter(x + width / 2, y + height / 2, {
        duration: 300,
        zoom: 1
      });
    }
  };
  const onZoomMenuChange = (0, import_react6.useCallback)((value) => {
    if (value === 0) {
      fitView2();
    } else {
      setZoomAtCenter(value / 100);
    }
  }, [setZoomAtCenter, fitView2]);
  (0, import_react6.useLayoutEffect)(() => {
    setTimeout(() => {
      setZoomAtCenter(1);
    }, 1e3);
  }, [setZoomAtCenter]);
  (0, import_react6.useEffect)(() => {
    const newNodeSubscribe = unitGridService.newNode$.subscribe((node) => handleFitView(node));
    return () => {
      newNodeSubscribe.unsubscribe();
    };
  }, [fitView2]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: index_module_default2.uniControls, style: { right: `${rightPadding}px` }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(UniControlButton, { tooltips: "Full screen", onClick: onFullscreenHandler, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(fullscreen_single_default, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(UniControlButton, { tooltips: "Zoom in", onClick: onZoomInHandler, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(increase_single_default, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      Dropdown,
      {
        overlay: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: clsx(index_module_default2.sliderShortcuts, "univer-rounded-lg univer-p-4"), children: shortcuts == null ? void 0 : shortcuts.map((item) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          "a",
          {
            className: clsx(
              index_module_default2.sliderShortcut,
              item === zoomPercent ? index_module_default2.sliderShortcutActive : ""
            ),
            onClick: () => onZoomMenuChange(item),
            children: [
              item === zoomPercent && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: index_module_default2.sliderShortcutIcon, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(check_mark_single_default, {}) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: item === 0 ? "Fit View" : `${item}%` })
            ]
          },
          item
        )) }),
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("a", { className: index_module_default2.sliderValue, children: [
          zoomPercent,
          "%"
        ] })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(UniControlButton, { tooltips: "Zoom out", onClick: onZoomOutHandler, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(zoom_reduce_single_default, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(UniDiv, {}),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(UniControlButton, { tooltips: "AI", onClick: () => onItemClick == null ? void 0 : onItemClick("AI" /* AI */), style: { background: "#274FEE" }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M5.09091 19C4.63904 19 4.27273 18.6337 4.27273 18.1818C4.27273 17.7299 4.63904 17.3636 5.09091 17.3636C5.54278 17.3636 5.90909 17.7299 5.90909 18.1818C5.90909 18.6337 5.54278 19 5.09091 19Z", fill: "white" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M14.9091 2.63636C14.4572 2.63636 14.0909 2.27005 14.0909 1.81818C14.0909 1.36631 14.4572 1 14.9091 1C15.361 1 15.7273 1.36631 15.7273 1.81818C15.7273 2.27005 15.361 2.63636 14.9091 2.63636Z", fill: "white" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M18.1818 5.90909C17.7299 5.90909 17.3636 5.54278 17.3636 5.09091C17.3636 4.63904 17.7299 4.27273 18.1818 4.27273C18.6337 4.27273 19 4.63904 19 5.09091C19 5.54278 18.6337 5.90909 18.1818 5.90909Z", fill: "white" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M8.93208 4.29446C9.20363 3.17457 10.7964 3.17457 11.0679 4.29446L11.8151 7.3759C11.9121 7.77574 12.2243 8.08792 12.6241 8.18487L15.7055 8.93208C16.8254 9.20363 16.8254 10.7964 15.7055 11.0679L12.6241 11.8151C12.2243 11.9121 11.9121 12.2243 11.8151 12.6241L11.0679 15.7055C10.7964 16.8254 9.20363 16.8254 8.93208 15.7055L8.18487 12.6241C8.08792 12.2243 7.77574 11.9121 7.3759 11.8151L4.29446 11.0679C3.17457 10.7964 3.17457 9.20363 4.29446 8.93208L7.3759 8.18487C7.77574 8.08792 8.08792 7.77574 8.18487 7.3759L8.93208 4.29446Z", fill: "white" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.4393 12.4507C18.8203 12.5929 19.0139 13.0171 18.8717 13.3981C17.9506 15.8661 16.0383 17.8485 13.6187 18.8611C13.2435 19.0181 12.8121 18.8412 12.6551 18.4661C12.4981 18.0909 12.675 17.6595 13.0501 17.5025C15.0952 16.6467 16.7134 14.9692 17.4919 12.8831C17.6341 12.5021 18.0583 12.3085 18.4393 12.4507Z", fill: "white" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.56245 1.56016C7.70495 1.94106 7.51169 2.36536 7.1308 2.50786C5.03326 3.29259 3.34878 4.92965 2.49933 6.9978C2.34482 7.37399 1.9146 7.55369 1.53842 7.39918C1.16223 7.24467 0.982523 6.81445 1.13703 6.43827C2.14164 3.99234 4.13199 2.05736 6.61475 1.1285C6.99565 0.986002 7.41995 1.17926 7.56245 1.56016Z", fill: "white" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M1.81818 15.7273C1.36631 15.7273 1 15.361 1 14.9091C1 14.4572 1.36631 14.0909 1.81818 14.0909C2.27005 14.0909 2.63636 14.4572 2.63636 14.9091C2.63636 15.361 2.27005 15.7273 1.81818 15.7273Z", fill: "white" })
    ] }) })
  ] });
};
function useRightSidebarVisible() {
  const sidebarService = useDependency(ISidebarService);
  const [visible, setVisible] = import_react6.default.useState(false);
  (0, import_react6.useEffect)(() => {
    const sidebarSubscription = sidebarService.sidebarOptions$.subscribe((options) => {
      setVisible(!!options.visible);
    });
    return () => {
      sidebarSubscription.unsubscribe();
    };
  }, [sidebarService]);
  return visible;
}

// ../packages-experimental/uniui/src/views/uni-sidebar/UniSidebar.tsx
var import_react7 = __toESM(require_react());

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages-experimental/uniui/src/views/uni-sidebar/index.module.less
var index_module_default3 = {
  "uniSidebar": "univer-uni-sidebar",
  "uniSidebarLeft": "univer-uni-sidebar-left",
  "uniSidebarRight": "univer-uni-sidebar-right",
  "uniSidebarOpen": "univer-uni-sidebar-open",
  "uniSidebarContainer": "univer-uni-sidebar-container",
  "uniSidebarHeader": "univer-uni-sidebar-header",
  "uniSidebarHeaderClose": "univer-uni-sidebar-header-close",
  "uniSidebarBody": "univer-uni-sidebar-body",
  "uniSidebarFooter": "univer-uni-sidebar-footer"
};

// ../packages-experimental/uniui/src/views/uni-sidebar/UniSidebar.tsx
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
function LeftSidebar() {
  const sidebarService = useDependency(ILeftSidebarService);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(UniSidebar, { position: "left", sidebarService, showClose: false });
}
function RightSidebar() {
  const sidebarService = useDependency(ISidebarService);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(UniSidebar, { position: "right", sidebarService });
}
function UniSidebar(props) {
  const { sidebarService, position, showClose = true } = props;
  const sidebarOptions = useObservable(sidebarService.sidebarOptions$);
  const scrollRef = (0, import_react7.useRef)(null);
  const options = (0, import_react7.useMemo)(() => {
    if (!sidebarOptions) {
      return null;
    }
    const copy = { ...sidebarOptions };
    for (const key of ["children", "header", "footer"]) {
      const k = key;
      if (sidebarOptions[k]) {
        const props2 = sidebarOptions[k];
        if (props2) {
          copy[k] = /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CustomLabel, { ...props2 });
        }
      }
    }
    return copy;
  }, [sidebarOptions]);
  (0, import_react7.useEffect)(() => {
    const handleScroll = (e) => {
      sidebarService.scrollEvent$.next(e);
    };
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
    }
    return () => {
      scrollElement == null ? void 0 : scrollElement.removeEventListener("scroll", handleScroll);
    };
  }, [sidebarService]);
  const rootClassName = clsx(index_module_default3.uniSidebar, {
    [index_module_default3.uniSidebarOpen]: options == null ? void 0 : options.visible,
    [index_module_default3.uniSidebarLeft]: position === "left",
    [index_module_default3.uniSidebarRight]: position === "right"
  });
  const width = (0, import_react7.useMemo)(() => {
    if (!(options == null ? void 0 : options.visible)) return 0;
    if (typeof options.width === "number") {
      return `${options.width}px`;
    }
    return options.width;
  }, [options]);
  function handleClose() {
    var _a;
    const options2 = {
      ...sidebarOptions,
      visible: false
    };
    sidebarService.sidebarOptions$.next(options2);
    (_a = options2 == null ? void 0 : options2.onClose) == null ? void 0 : _a.call(options2);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("aside", { className: rootClassName, style: { width }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { className: index_module_default3.uniSidebarContainer, ref: scrollRef, children: [
    showClose && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("header", { className: index_module_default3.uniSidebarHeader, children: [
      options == null ? void 0 : options.header,
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { className: index_module_default3.uniSidebarHeaderClose, onClick: handleClose, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(close_single_default, {}) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("section", { className: index_module_default3.uniSidebarBody, children: options == null ? void 0 : options.children }),
    (options == null ? void 0 : options.footer) && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("footer", { className: index_module_default3.uniSidebarFooter, children: options.footer })
  ] }) });
}

// ../packages-experimental/uniui/src/views/uni-toolbar/UniToolbar.tsx
var import_react9 = __toESM(require_react());

// ../packages-experimental/uniui/src/services/toolbar/uni-toolbar-service.ts
var UniToolbarService = class extends Disposable {
  constructor() {
    super();
    __publicField(this, "_items");
    this._init();
  }
  _init() {
    this._items = [
      {
        id: "undo" /* UNDO */,
        impl: [{ id: UndoCommand.id, type: O.UNIVER_UNKNOWN }]
      },
      {
        id: "redo" /* REDO */,
        impl: [{ id: RedoCommand.id, type: O.UNIVER_UNKNOWN }]
      },
      {
        id: "font-famaily" /* FONT_FAMILY */,
        impl: [{ id: FAKE_FONT_FAMILY_MENU_ID, type: O.UNIVER_UNKNOWN }]
      },
      {
        id: "font-size" /* FONT_SIZE */,
        impl: [{ id: FAKE_FONT_SIZE_MENU_ID, type: O.UNIVER_UNKNOWN }]
      },
      {
        id: "font-group" /* FONT_GROUP */,
        impl: [
          { id: FAKE_FONT_GROUP_MENU_ID, type: O.UNIVER_UNKNOWN },
          { id: FONT_GROUP_MENU_ID, type: O.UNIVER_SHEET },
          { id: FONT_GROUP_MENU_ID, type: O.UNIVER_DOC }
        ]
      },
      {
        id: "color" /* COLOR */,
        impl: [{ id: FAKE_FONT_COLOR_MENU_ID, type: O.UNIVER_UNKNOWN }]
      },
      {
        id: "background" /* BACKGROUND */,
        impl: [{ id: FAKE_BG_COLOR_MENU_ID, type: O.UNIVER_UNKNOWN }]
      },
      {
        id: "image" /* IMAGE */,
        impl: [{ id: FAKE_IMAGE_MENU_ID, type: O.UNIVER_UNKNOWN }]
      },
      {
        id: "unorder-list" /* UNORDER_LIST */,
        impl: [{ id: FAKE_UNORDER_LIST_MENU_ID, type: O.UNIVER_UNKNOWN }]
      },
      {
        id: "order-list" /* ORDER_LIST */,
        impl: [{ id: FAKE_ORDER_LIST_MENU_ID, type: O.UNIVER_UNKNOWN }]
      },
      {
        id: "table" /* TABLE */,
        impl: [{ id: FAKE_TABLE_MENU_ID, type: O.UNIVER_UNKNOWN }]
      }
    ];
  }
  addItem(item) {
    this._items.push(item);
    return toDisposable(() => {
      this._items = this._items.filter((i) => i.id !== item.id);
    });
  }
  getItems() {
    return this._items;
  }
  implementItem(id2, impl) {
    const item = this._items.find((item2) => item2.id === id2);
    if (item) {
      item.impl.push(impl);
      return toDisposable(() => {
        item.impl = item.impl.filter((i) => i.id !== impl.id);
      });
    }
    return toDisposable(() => {
    });
  }
};

// ../packages-experimental/uniui/src/views/uni-toolbar/UniFormulaBar.tsx
var import_react8 = __toESM(require_react());
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var UniFormulaBar = () => {
  const editorBridgeService = useDependency(IEditorBridgeService);
  const univerInstanceService = useDependency(IUniverInstanceService);
  const commandService = useDependency(ICommandService);
  const visibleInfo = useObservable(editorBridgeService.visible$);
  const focusedId = useObservable(univerInstanceService.focused$);
  const visible = (visibleInfo == null ? void 0 : visibleInfo.visible) && focusedId || false;
  const handleOpenWrite = (0, import_react8.useCallback)(() => {
    if (focusedId) {
      commandService.executeCommand(SetCellEditVisibleOperation.id, {
        visible: true,
        eventType: 1 /* PointerDown */,
        unitId: focusedId
      });
    }
  }, [editorBridgeService, focusedId]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      "div",
      {
        className: clsx(index_module_default.uniFormulaBar, {
          [index_module_default.uniFormulaBarDisable]: !focusedId
        }),
        onClick: () => handleOpenWrite(),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(fx_single_default, {}),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: index_module_default.uniFormulaBarText, children: "Write formula" })
        ]
      }
    ),
    visible && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "div",
      {
        className: index_module_default.uniFormulaBarFullInput,
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(FormulaBar, {})
      }
    )
  ] });
};
function FormulaBar() {
  const formulaEditorManagerService = useDependency(IFormulaEditorManagerService);
  const editorBridgeService = useDependency(IEditorBridgeService);
  const themeService = useDependency(ThemeService);
  const progressBarColor = themeService.getCurrentTheme().primaryColor;
  const commandService = useDependency(ICommandService);
  const [disable, setDisable] = (0, import_react8.useState)(false);
  const univerInstanceService = useDependency(IUniverInstanceService);
  const selectionManager = useDependency(SheetsSelectionsService);
  const worksheetProtectionRuleModel = useDependency(WorksheetProtectionRuleModel);
  const rangeProtectionRuleModel = useDependency(RangeProtectionRuleModel);
  const permissionService = useDependency(IPermissionService);
  const currentWorkbook = useActiveWorkbook();
  function getPermissionIds(unitId, subUnitId) {
    return [
      new WorkbookEditablePermission(unitId).id,
      new WorksheetSetCellValuePermission(unitId, subUnitId).id,
      new WorksheetEditPermission(unitId, subUnitId).id
    ];
  }
  (0, import_react8.useLayoutEffect)(() => {
    const workbook = univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET);
    const subscription = merge(
      worksheetProtectionRuleModel.ruleChange$,
      rangeProtectionRuleModel.ruleChange$,
      selectionManager.selectionMoveEnd$,
      selectionManager.selectionSet$,
      workbook.activeSheet$
    ).pipe(
      switchMap(() => {
        var _a, _b;
        const unitId = workbook.getUnitId();
        const worksheet = workbook.getActiveSheet();
        if (!worksheet) return EMPTY;
        const subUnitId = worksheet.getSheetId();
        const range = (_a = selectionManager.getCurrentLastSelection()) == null ? void 0 : _a.range;
        if (!range) return EMPTY;
        const permissionIds = getPermissionIds(unitId, subUnitId);
        const selectionRanges = (_b = selectionManager.getCurrentSelections()) == null ? void 0 : _b.map((selection2) => selection2.range);
        const permissionList = rangeProtectionRuleModel.getSubunitRuleList(unitId, subUnitId).filter((rule) => {
          return rule.ranges.some((r) => selectionRanges == null ? void 0 : selectionRanges.some((selectionRange) => Rectangle.intersects(r, selectionRange)));
        });
        permissionList.forEach((p) => {
          permissionIds.push(new RangeProtectionPermissionEditPoint(unitId, subUnitId, p.permissionId).id);
        });
        return permissionService.composePermission$(permissionIds);
      })
    ).subscribe((permissions) => {
      if (permissions) {
        setDisable(!permissions.every((p) => p.value));
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  const INITIAL_SNAPSHOT = {
    id: DOCS_FORMULA_BAR_EDITOR_UNIT_ID_KEY,
    body: {
      dataStream: `${DEFAULT_EMPTY_DOCUMENT_VALUE}`,
      textRuns: [],
      paragraphs: [
        {
          startIndex: 0
        }
      ]
    },
    documentStyle: {
      pageSize: {
        width: Number.POSITIVE_INFINITY,
        height: Number.POSITIVE_INFINITY
      },
      documentFlavor: 0 /* UNSPECIFIED */,
      marginTop: 5,
      marginBottom: 5,
      marginRight: 0,
      marginLeft: 0,
      paragraphLineGapDefault: 0,
      renderConfig: {
        horizontalAlign: 0 /* UNSPECIFIED */,
        verticalAlign: 1 /* TOP */,
        centerAngle: 0,
        vertexAngle: 0,
        wrapStrategy: 3 /* WRAP */,
        isRenderStyle: 0 /* FALSE */
      }
    }
  };
  function resizeCallBack(editor) {
    if (editor == null) {
      return;
    }
    const editorRect = editor.getBoundingClientRect();
    formulaEditorManagerService.setPosition(editorRect);
  }
  function handleCloseBtnClick() {
    var _a;
    const visibleState = editorBridgeService.isVisible();
    if (visibleState.visible) {
      commandService.executeCommand(SetCellEditVisibleOperation.id, {
        visible: false,
        eventType: 4 /* Keyboard */,
        keycode: 27 /* ESC */,
        unitId: (_a = currentWorkbook == null ? void 0 : currentWorkbook.getUnitId()) != null ? _a : ""
      });
    }
  }
  function handleConfirmBtnClick() {
    var _a;
    const visibleState = editorBridgeService.isVisible();
    if (visibleState.visible) {
      commandService.executeCommand(SetCellEditVisibleOperation.id, {
        visible: false,
        eventType: 1 /* PointerDown */,
        unitId: (_a = currentWorkbook == null ? void 0 : currentWorkbook.getUnitId()) != null ? _a : ""
      });
    }
  }
  function handlerFxBtnClick() {
    formulaEditorManagerService.handleFxBtnClick(true);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: index_module_default.uniFormulaBox, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: clsx(index_module_default.formulaIcon, { [index_module_default.formulaIconDisable]: disable }), children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "span",
      {
        className: clsx(index_module_default.iconContainer, index_module_default.iconContainerError),
        onClick: handleCloseBtnClick,
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(close_single_default, {})
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "span",
      {
        className: clsx(index_module_default.iconContainer, index_module_default.iconContainerSuccess),
        onClick: handleConfirmBtnClick,
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(check_mark_single_default, {})
      }
    )
  ] }) });
}

// ../packages-experimental/uniui/src/views/uni-toolbar/UniToolbar.tsx
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
function UniToolbar() {
  var _a, _b;
  const uniToolbarService = useDependency(UniToolbarService);
  const instanceService = useDependency(IUniverInstanceService);
  const focusedUnit = useObservable(instanceService.focused$);
  const menuManagerService = useDependency(IMenuManagerService);
  const isMenuChange = useObservable(menuManagerService.menuChanged$);
  const [uniVisibleItems, setUniVisibleItems] = (0, import_react9.useState)([]);
  const type = focusedUnit ? (_b = (_a = instanceService.getUnit(focusedUnit)) == null ? void 0 : _a.type) != null ? _b : O.UNIVER_UNKNOWN : O.UNIVER_UNKNOWN;
  const toolbarItems = uniToolbarService.getItems();
  const hasWorkbooks = useWorkbooks().length > 0;
  const updateVisibleItems = () => {
    const menus = menuManagerService.getMenuByPositionKey("toolbar_main" /* TOOLBAR_MAIN */);
    if (menus) {
      const visibleItems = toolbarItems.map((item) => {
        var _a2, _b2;
        const { impl } = item;
        const typeImpl = impl.find((item2) => item2.type === type);
        const visibleItem = (_a2 = menus.find((item2) => item2.key === (typeImpl == null ? void 0 : typeImpl.id))) == null ? void 0 : _a2.item;
        if (visibleItem) {
          return visibleItem;
        }
        const placeHolderImpl = impl.find((item2) => item2.type === O.UNIVER_UNKNOWN);
        const placeHolderItem = (_b2 = menus.find((item2) => item2.key === (placeHolderImpl == null ? void 0 : placeHolderImpl.id))) == null ? void 0 : _b2.item;
        if (placeHolderItem) {
          return placeHolderItem;
        }
        return null;
      }).filter((item) => !!item && !item.id.startsWith("FAKE_"));
      setUniVisibleItems(visibleItems);
    }
  };
  (0, import_react9.useEffect)(() => {
    updateVisibleItems();
  }, [isMenuChange]);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: index_module_default.uniToolbar, children: [
    hasWorkbooks && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(UniFormulaBar, {}),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: index_module_default.toolbarGroup, children: uniVisibleItems.map((subItem) => subItem && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ToolbarItem, { ...subItem }, subItem.id)) })
  ] });
}

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages-experimental/uniui/src/views/workbench/workbench.module.less
var workbench_module_default = {
  "workbenchLayout": "univer-workbench-layout",
  "workbenchToolbarWrapper": "univer-workbench-toolbar-wrapper",
  "workbenchContainer": "univer-workbench-container",
  "workbenchContainerHeader": "univer-workbench-container-header",
  "workbenchContainerWrapper": "univer-workbench-container-wrapper",
  "workbenchContainerContent": "univer-workbench-container-content",
  "workbenchContainerCanvasContainer": "univer-workbench-container-canvas-container",
  "workbenchContainerCanvas": "univer-workbench-container-canvas",
  "workbenchContainerCanvasFocused": "univer-workbench-container-canvas-focused",
  "workbenchContainerLeftSidebar": "univer-workbench-container-left-sidebar",
  "workbenchFooter": "univer-workbench-footer",
  "floatLayer": "univer-float-layer",
  "flowLayer": "univer-flow-layer",
  "uniNodeTitle": "univer-uni-node-title",
  "uniNodeContainer": "univer-uni-node-container",
  "uniNodeDragHandle": "univer-uni-node-drag-handle"
};

// ../packages-experimental/uniui/src/views/workbench/UniWorkbench.tsx
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
function UniWorkbench(props) {
  var _a;
  const {
    header = true,
    contextMenu = true,
    mountContainer,
    onRendered
  } = props;
  const localeService = useDependency(LocaleService);
  const themeService = useDependency(ThemeService);
  const unitGridService = useDependency(IUnitGridService);
  const instanceService = useDependency(IUniverInstanceService);
  const renderManagerService = useDependency(IRenderManagerService);
  const flowManagerService = useDependency(FlowManagerService);
  const commandService = useDependency(ICommandService);
  const contentRef = (0, import_react11.useRef)(null);
  const floatingToolbarRef = (0, import_react11.useRef)(null);
  const reactFlowInstance = (0, import_react11.useRef)(null);
  const headerComponents = useComponentsOfPart("header" /* HEADER */);
  const contentComponents = useComponentsOfPart("content" /* CONTENT */);
  const globalComponents = useComponentsOfPart("global" /* GLOBAL */);
  const focusedUnit = useObservable(instanceService.focused$);
  (0, import_react11.useEffect)(() => {
    if (!themeService.getCurrentTheme()) {
      themeService.setTheme(default_module_default);
    }
  }, []);
  (0, import_react11.useEffect)(() => {
    if (contentRef.current) {
      onRendered == null ? void 0 : onRendered(contentRef.current);
    }
  }, [onRendered]);
  const [locale, setLocale] = (0, import_react11.useState)(localeService.getLocales());
  const [zoom, setZoom] = (0, import_react11.useState)(DEFAULT_ZOOM);
  const onControlItemClick = (0, import_react11.useCallback)((key) => {
    switch (key) {
      case "AI" /* AI */: {
        commandService.executeCommand("project.controls-pro-search.operation");
        break;
      }
    }
  }, [commandService]);
  const resizeUnits = (0, import_react11.useCallback)(debounce_default(() => {
    renderManagerService.getRenderAll().forEach((renderer) => renderer.engine.resize());
  }, 400), [renderManagerService]);
  const portalContainer = (0, import_react11.useMemo)(() => document.createElement("div"), []);
  (0, import_react11.useEffect)(() => {
    document.body.appendChild(portalContainer);
    const subscriptions = [
      localeService.localeChanged$.subscribe(() => {
        setLocale(localeService.getLocales());
      }),
      themeService.currentTheme$.subscribe((theme) => {
        themeInstance.setTheme(mountContainer, theme);
        portalContainer && themeInstance.setTheme(portalContainer, theme);
      })
    ];
    return () => {
      subscriptions.forEach((subscription) => subscription.unsubscribe());
      document.body.removeChild(portalContainer);
    };
  }, [localeService, mountContainer, portalContainer, themeService.currentTheme$]);
  const nodeTypes = {
    customNode: UnitNode
  };
  const unitGrid = useObservable(unitGridService.unitGrid$, void 0, true);
  const gridNodes = (0, import_react11.useMemo)(() => unitGrid.map((item) => ({
    id: item.id,
    type: "customNode",
    dragHandle: ".univer-uni-node-drag-handle",
    style: item.style,
    focusable: true,
    data: {
      unitId: item.data.unitId,
      gridService: unitGridService,
      instanceService
    },
    position: item.position
  })), [unitGrid]);
  const [nodes, setNodes, onNodesChange] = useNodesState(gridNodes);
  (0, import_react11.useEffect)(() => {
    setNodes(gridNodes);
  }, [gridNodes]);
  const onMove = (0, import_react11.useCallback)((event, viewport) => {
    var _a2;
    (_a2 = floatingToolbarRef.current) == null ? void 0 : _a2.update();
    const { zoom: zoom2 } = viewport;
    setZoom(zoom2);
    flowManagerService.setViewportChanged(viewport);
  }, [floatingToolbarRef, setZoom, flowManagerService]);
  const onFlowInit = (0, import_react11.useCallback)((instance) => {
    flowManagerService.setReactFlowInstance(instance);
  }, [flowManagerService]);
  const disableReactFlowBehavior = !!focusedUnit;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ConfigProvider, { locale: locale == null ? void 0 : locale.design, mountContainer: portalContainer, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(ReactFlowProvider, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: workbench_module_default.workbenchLayout, tabIndex: -1, onBlur: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: workbench_module_default.flowLayer, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
        "section",
        {
          className: workbench_module_default.workbenchContainerCanvasContainer,
          ref: contentRef,
          "data-range-selector": true,
          onContextMenu: (e) => e.preventDefault(),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              index,
              {
                ref: reactFlowInstance,
                maxZoom: MAX_ZOOM,
                minZoom: MIN_ZOOM,
                zoomOnDoubleClick: !disableReactFlowBehavior,
                zoomOnPinch: !disableReactFlowBehavior,
                zoomOnScroll: !disableReactFlowBehavior,
                panOnDrag: !disableReactFlowBehavior,
                panOnScroll: !disableReactFlowBehavior,
                nodes,
                nodeTypes,
                onNodesChange: (nodes2) => {
                  nodes2.forEach((node) => {
                    if (node.type === "dimensions" && node.resizing) {
                      unitGridService.changeDimension(node.id, { width: node.dimensions.width, height: node.dimensions.height });
                    } else if (node.type === "position") {
                      unitGridService.changePosition(node.id, { x: node.position.x, y: node.position.y });
                    }
                  });
                  onNodesChange(nodes2);
                },
                onResize: resizeUnits,
                fitView: true,
                defaultViewport: { zoom: MIN_ZOOM, x: 0, y: 0 },
                onPointerDown: (event) => {
                  if (event.target instanceof HTMLElement && (event.target.classList.contains("univer-render-canvas") || event.target.classList.contains("react-flow__resize-control"))) {
                    return;
                  }
                  commandService.executeCommand(UniFocusUnitOperation.id, { unitId: null });
                },
                onMove,
                onInit: onFlowInit,
                children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Background, { bgColor: "#f4f6f8", color: "#d9d9d9" })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ComponentContainer, { components: contentComponents }, "content")
          ]
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: workbench_module_default.floatLayer, children: [
        header && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: workbench_module_default.workbenchContainerHeader, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: workbench_module_default.workbenchToolbarWrapper, children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(UniToolbar, {}),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ComponentContainer, { components: headerComponents }, "header")
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(UniFloatingToolbar, { ref: floatingToolbarRef, node: (_a = nodes.find((n) => n.id === focusedUnit)) == null ? void 0 : _a.data }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(LeftSidebar, {}),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(RightSidebar, {}),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(UniControls, { zoom, onItemClick: onControlItemClick })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ComponentContainer, { components: globalComponents }, "global"),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(GlobalZone, {}),
    contextMenu && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DesktopContextMenu, {}),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(FloatingContainer, {})
  ] }) });
}
function UnitNode({ data }) {
  const { unitId } = data;
  const title = useUnitTitle(unitId);
  const focused = useUnitFocused(unitId);
  const unitComponents = useComponentsOfPart("unit" /* UNIT */);
  const contextService = useDependency(IContextService);
  const commandService = useDependency(ICommandService);
  const disableChangingUnitFocusing = useObservable(
    () => contextService.subscribeContextValue$(UNI_DISABLE_CHANGING_FOCUS_KEY),
    false,
    false,
    []
  );
  const focus = (0, import_react11.useCallback)(() => {
    if (!disableChangingUnitFocusing && !focused) {
      commandService.executeCommand(UniFocusUnitOperation.id, { unitId });
    }
  }, [disableChangingUnitFocusing, focused, unitId, commandService]);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: workbench_module_default.uniNodeContainer, onPointerDownCapture: focus, children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(NodeResizer, { isVisible: focused, minWidth: 180, minHeight: 100 }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      UnitRenderer,
      {
        ...data
      },
      data.unitId
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: workbench_module_default.uniNodeDragHandle, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(menu_single_default, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: workbench_module_default.uniNodeTitle, children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ComponentContainer, { components: unitComponents, sharedProps: { unitId } }, "unit")
  ] });
}
function UnitRenderer(props) {
  const { unitId, gridService } = props;
  const mountRef = (0, import_react11.useRef)(null);
  const instanceService = useDependency(IUniverInstanceService);
  const focusedUnit = useObservable(instanceService.focused$);
  const focused = focusedUnit === unitId;
  (0, import_react11.useEffect)(() => {
    if (mountRef.current) {
      gridService.setContainerForRender(unitId, mountRef.current);
    }
  }, [gridService, unitId]);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    {
      className: clsx(workbench_module_default.workbenchContainerCanvas, {
        [workbench_module_default.workbenchContainerCanvasFocused]: focused
      }),
      ref: mountRef,
      onWheel: (event) => event.stopPropagation()
    }
  );
}
function FloatingContainer() {
  const { mountContainer } = (0, import_react11.useContext)(ConfigContext);
  const floatingComponents = useComponentsOfPart("floating" /* FLOATING */);
  return (0, import_react_dom3.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ComponentContainer, { components: floatingComponents }, "floating"), mountContainer);
}

// ../packages-experimental/uniui/src/controllers/uniui-desktop.controller.tsx
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var STEADY_TIMEOUT = 3e3;
var UniverUniUIController = class extends Disposable {
  constructor(_config, _injector, _lifecycleService, _uiPartsService, _layoutService) {
    super();
    this._config = _config;
    this._injector = _injector;
    this._lifecycleService = _lifecycleService;
    this._uiPartsService = _uiPartsService;
    this._layoutService = _layoutService;
    this._initBuiltinComponents();
    Promise.resolve().then(() => this._bootstrapWorkbench());
  }
  _bootstrapWorkbench() {
    this.disposeWithMe(
      bootstrap(this._injector, this._config, (contentEl, containerEl) => {
        if (this._layoutService) {
          this.disposeWithMe(this._layoutService.registerContentElement(contentEl));
          this.disposeWithMe(this._layoutService.registerContainerElement(containerEl));
        }
        this._lifecycleService.lifecycle$.pipe(
          filter((lifecycle) => lifecycle === 1 /* Ready */),
          delay(300),
          take(1)
        ).subscribe(() => {
          this._lifecycleService.stage = 2 /* Rendered */;
          setTimeout(() => this._lifecycleService.stage = 3 /* Steady */, STEADY_TIMEOUT);
        });
      })
    );
  }
  _initBuiltinComponents() {
    this.disposeWithMe(this._uiPartsService.registerComponent("floating" /* FLOATING */, () => connectInjector(CanvasPopup, this._injector)));
    this.disposeWithMe(this._uiPartsService.registerComponent("unit" /* UNIT */, () => connectInjector(FloatDom, this._injector)));
  }
};
UniverUniUIController = __decorateClass([
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, Inject(LifecycleService)),
  __decorateParam(3, IUIPartsService),
  __decorateParam(4, Optional(ILayoutService))
], UniverUniUIController);
function bootstrap(injector, options, callback) {
  let mountContainer;
  const container = options.container;
  if (typeof container === "string") {
    const containerElement = document.getElementById(container);
    if (!containerElement) {
      mountContainer = createContainer(container);
    } else {
      mountContainer = containerElement;
    }
  } else if (container instanceof HTMLElement) {
    mountContainer = container;
  } else {
    mountContainer = createContainer("univer");
  }
  const ConnectedApp = connectInjector(UniWorkbench, injector);
  function render2() {
    render(
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        ConnectedApp,
        {
          ...options,
          mountContainer,
          onRendered: (contentEl) => callback(contentEl, mountContainer)
        }
      ),
      mountContainer
    );
  }
  render2();
  return toDisposable(() => {
    unmount(mountContainer);
  });
}
function createContainer(id2) {
  const element = document.createElement("div");
  element.id = id2;
  return element;
}

// ../packages-experimental/uniui/src/commands/operations/set-flow-viewport.operation.ts
var SetFlowViewportOperation = {
  id: "uniui.operation.set-flow-viewport",
  type: 1 /* OPERATION */,
  handler: async (accessor, params, options) => {
    const { fromCollab } = options || {};
    if (!fromCollab) {
      return true;
    }
    const flowManagerService = accessor.get(FlowManagerService);
    const oldViewport = flowManagerService.getViewport();
    const { viewport } = params;
    const { zoom, x, y } = viewport;
    if (oldViewport) {
      if (zoom === oldViewport.zoom && x === oldViewport.x && y === oldViewport.y) {
        return false;
      }
    }
    flowManagerService.setViewport(viewport);
    return true;
  }
};

// ../packages-experimental/uniui/src/controllers/uniui-flow.controller.tsx
var UniuiFlowController = class extends Disposable {
  constructor(_commandService, _flowManagerService) {
    super();
    this._commandService = _commandService;
    this._flowManagerService = _flowManagerService;
    this._initCommands();
    this._triggerCommands();
  }
  _initCommands() {
    [
      SetFlowViewportOperation,
      UniFocusUnitOperation
    ].forEach((c) => {
      this.disposeWithMe(this._commandService.registerCommand(c));
    });
  }
  _triggerCommands() {
    this._flowManagerService.viewportChanged$.pipe(
      throttleTime(100, void 0, { leading: true, trailing: true }),
      auditTime(100)
    ).subscribe((viewport) => {
      if (viewport) {
        this._commandService.executeCommand(SetFlowViewportOperation.id, { viewport });
      }
    });
  }
};
UniuiFlowController = __decorateClass([
  __decorateParam(0, ICommandService),
  __decorateParam(1, Inject(FlowManagerService))
], UniuiFlowController);

// ../packages-experimental/uniui/src/views/outline/Outline.tsx
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
function Outline() {
  const outlineComponent = useComponentsOfPart("OUTLINE" /* OUTLINE */);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ComponentContainer, { components: outlineComponent }, "outline") });
}
Outline.componentName = "Outline";

// ../packages-experimental/uniui/src/controllers/uniui-leftsidebar.controller.tsx
var OUTLINE_COMPONENT = "OUTLINE_COMPONENT";
var UniuiLeftSidebarController = class extends Disposable {
  constructor(_componentManager, _univerInstanceService, _leftSidebarService) {
    super();
    this._componentManager = _componentManager;
    this._univerInstanceService = _univerInstanceService;
    this._leftSidebarService = _leftSidebarService;
    this._initComponents();
    this._initShowOutlineListener();
  }
  _initComponents() {
    this.disposeWithMe(this._componentManager.register(OUTLINE_COMPONENT, Outline));
  }
  _initShowOutlineListener() {
    this.disposeWithMe(this._univerInstanceService.focused$.pipe(
      map((unitId) => {
        var _a;
        return !unitId ? false : ((_a = this._univerInstanceService.getUnit(unitId)) == null ? void 0 : _a.type) !== O.UNIVER_DOC;
      }),
      distinctUntilChanged()
    ).subscribe((showOutline) => {
      if (showOutline) {
        this._leftSidebarService.open({
          children: { label: OUTLINE_COMPONENT },
          visible: true,
          width: 185
        });
      } else {
        this._leftSidebarService.close();
      }
    }));
    this.disposeWithMe(this._univerInstanceService.unitDisposed$.pipe(
      distinctUntilChanged()
    ).subscribe(() => {
      this._leftSidebarService.close();
    }));
  }
};
UniuiLeftSidebarController = __decorateClass([
  __decorateParam(0, Inject(ComponentManager)),
  __decorateParam(1, IUniverInstanceService),
  __decorateParam(2, ILeftSidebarService)
], UniuiLeftSidebarController);

// ../packages-experimental/uniui/src/controllers/menu.schema.ts
var menuSchema5 = {
  ["toolbar_main" /* TOOLBAR_MAIN */]: {
    ...menuSchema["ribbon.start.history" /* HISTORY */],
    [FAKE_FONT_FAMILY_MENU_ID]: {
      menuItemFactory: FakeFontFamilySelectorMenuItemFactory
    },
    [FAKE_FONT_SIZE_MENU_ID]: {
      menuItemFactory: FakeFontSizeSelectorMenuItemFactory
    },
    [FAKE_FONT_COLOR_MENU_ID]: {
      menuItemFactory: FakeTextColorSelectorMenuItemFactory
    },
    [FAKE_BG_COLOR_MENU_ID]: {
      menuItemFactory: FakeBackgroundColorSelectorMenuItemFactory
    },
    [FAKE_IMAGE_MENU_ID]: {
      menuItemFactory: FakeImageMenuFactory
    },
    [FAKE_UNORDER_LIST_MENU_ID]: {
      menuItemFactory: FakeUnorderListMenuItemFactory
    },
    [FAKE_ORDER_LIST_MENU_ID]: {
      menuItemFactory: FakeOrderListMenuItemFactory
    },
    [FONT_GROUP_MENU_ID]: {
      menuItemFactory: FontGroupMenuItemFactory
    },
    [FAKE_FONT_GROUP_MENU_ID]: {
      menuItemFactory: FakeFontGroupMenuItemFactory
    },
    [FAKE_TABLE_MENU_ID]: {
      menuItemFactory: FakePivotTableMenuItemFactory
    }
  },
  ["toolbar_float" /* TOOLBAR_FLOAT */]: {
    [DOWNLOAD_MENU_ID]: {
      menuItemFactory: DownloadMenuItemFactory
    },
    [SHARE_MENU_ID]: {
      menuItemFactory: ShareMenuItemFactory
    },
    // [LOCK_MENU_ID]: {
    //     menuItemFactory: LockMenuItemFactory,
    // },
    [PRINT_MENU_ID]: {
      menuItemFactory: PrintMenuItemFactory
    },
    [ZEN_MENU_ID]: {
      menuItemFactory: ZenMenuItemFactory
    },
    [DELETE_MENU_ID]: {
      menuItemFactory: DeleteMenuItemFactory
    }
  }
};

// ../packages-experimental/uniui/src/controllers/uniui-toolbar.controller.tsx
var UniuiToolbarController = class extends Disposable {
  constructor(_menuManagerService, _injector, _componentManager, _commandService, _toolbarService) {
    super();
    this._menuManagerService = _menuManagerService;
    this._injector = _injector;
    this._componentManager = _componentManager;
    this._commandService = _commandService;
    this._toolbarService = _toolbarService;
    this._initComponent();
    this._initMenus();
    this._initCommands();
  }
  _initComponent() {
    const componentManager = this._componentManager;
    const iconList = {
      DownloadSingle: download_single_default,
      ShareSingle: share_single_default,
      LockSingle: lock_single_default,
      PrintSingle: print_single_default,
      ZenSingle: zen_single_default,
      DeleteSingle: delete_single_default,
      PivotTableSingle: pivot_table_single_default
    };
    for (const k in iconList) {
      this.disposeWithMe(componentManager.register(k, iconList[k]));
    }
  }
  _initMenus() {
    this._menuManagerService.appendRootMenu(menuSchema5);
  }
  _initCommands() {
    [
      DisposeUnitOperation
    ].forEach((c) => {
      this.disposeWithMe(this._commandService.registerCommand(c));
    });
  }
};
UniuiToolbarController = __decorateClass([
  __decorateParam(0, IMenuManagerService),
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, Inject(ComponentManager)),
  __decorateParam(3, ICommandService),
  __decorateParam(4, Inject(UniToolbarService))
], UniuiToolbarController);

// ../packages-experimental/uniui/src/plugin.ts
var UniverUniUIPlugin = class extends Plugin {
  constructor(_config = {}, _injector, _contextService, _commandService) {
    super();
    this._config = _config;
    this._injector = _injector;
    this._contextService = _contextService;
    this._commandService = _commandService;
    this._config = merge_default({}, this._config);
    if (this._config.disableAutoFocus) {
      this._contextService.setContextValue(DISABLE_AUTO_FOCUS_KEY, true);
    }
  }
  onStarting() {
    const dependencies = mergeOverrideWithDependencies([
      [ComponentManager],
      [ZIndexManager],
      [ShortcutPanelService],
      [FlowManagerService],
      [UniToolbarService],
      [IUnitGridService, { useClass: UnitGridService }],
      [IUIPartsService, { useClass: UIPartsService }],
      [ILayoutService, { useClass: DesktopLayoutService }],
      [IShortcutService, { useClass: ShortcutService }],
      [IPlatformService, { useClass: PlatformService }],
      [IMenuManagerService, { useClass: MenuManagerService }],
      [IContextMenuService, { useClass: ContextMenuService }],
      [IClipboardInterfaceService, { useClass: BrowserClipboardService, lazy: true }],
      [INotificationService, { useClass: DesktopNotificationService, lazy: true }],
      [IDialogService, { useClass: DesktopDialogService, lazy: true }],
      [IConfirmService, { useClass: DesktopConfirmService, lazy: true }],
      [ISidebarService, { useClass: DesktopSidebarService, lazy: true }],
      [ILeftSidebarService, { useClass: DesktopSidebarService, lazy: true }],
      [IZenZoneService, { useClass: DesktopZenZoneService, lazy: true }],
      [IGlobalZoneService, { useClass: DesktopGlobalZoneService, lazy: true }],
      [IMessageService, { useClass: DesktopMessageService, lazy: true }],
      [ILocalStorageService, { useClass: DesktopLocalStorageService, lazy: true }],
      [IBeforeCloseService, { useClass: DesktopBeforeCloseService }],
      [ILocalFileService, { useClass: DesktopLocalFileService }],
      [ICanvasPopupService, { useClass: CanvasPopupService }],
      [CanvasFloatDomService],
      [IUIController, {
        useFactory: () => this._injector.createInstance(UniverUniUIController, this._config)
      }],
      [SharedController],
      [ErrorController],
      [ShortcutPanelController],
      [UniuiLeftSidebarController],
      [UniuiToolbarController],
      [UniuiFlowController]
    ], this._config.override);
    dependencies.forEach((dependency) => this._injector.add(dependency));
  }
  onReady() {
    this._injector.get(IUIController);
    this._injector.get(UniuiFlowController);
    this._injector.get(UniuiLeftSidebarController);
    this._injector.get(UniuiToolbarController);
  }
};
__publicField(UniverUniUIPlugin, "pluginName", UNIVER_UI_PLUGIN_NAME);
UniverUniUIPlugin = __decorateClass([
  DependentOn(UniverRenderEnginePlugin),
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IContextService),
  __decorateParam(3, ICommandService)
], UniverUniUIPlugin);

// ../packages-experimental/uniui/src/controllers/utils.ts
var generateCloneMutation = (cloneId, sourceMutation) => {
  return {
    ...Tools.deepClone(sourceMutation),
    id: cloneId
  };
};

// ../packages-experimental/uni-docs-ui/src/controllers/menu.ts
var DOC_ITALIC_MUTATION_ID = "doc.command.uni-italic";
var DOC_BOLD_MUTATION_ID = "doc.command.uni-bold";
var DOC_UNDERLINE_MUTATION_ID = "doc.command.uni-underline";
var DOC_STRIKE_MUTATION_ID = "doc.command.uni-strike";
var DOC_TABLE_MUTATION_ID = "doc.command.uni-table";
function DocBoldMenuItemFactory(accessor) {
  const commandService = accessor.get(ICommandService);
  return {
    id: DOC_BOLD_MUTATION_ID,
    type: 0 /* BUTTON */,
    icon: "BoldSingle",
    title: "Set bold",
    tooltip: "toolbar.bold",
    activated$: new Observable((subscriber) => {
      const disposable = commandService.onCommandExecuted((c) => {
        var _a;
        const id2 = c.id;
        if (id2 === SetTextSelectionsOperation.id || id2 === SetInlineFormatCommand.id) {
          const textRun = getFontStyleAtCursor(accessor);
          if (textRun == null) {
            return;
          }
          const bl = (_a = textRun.ts) == null ? void 0 : _a.bl;
          subscriber.next(bl === 1 /* TRUE */);
        }
      });
      subscriber.next(false);
      return disposable.dispose;
    }),
    hidden$: getMenuHiddenObservable(accessor, O.UNIVER_DOC)
  };
}
function DocItalicMenuItemFactory(accessor) {
  const commandService = accessor.get(ICommandService);
  return {
    id: DOC_ITALIC_MUTATION_ID,
    type: 0 /* BUTTON */,
    icon: "ItalicSingle",
    title: "Set italic",
    tooltip: "toolbar.italic",
    activated$: new Observable((subscriber) => {
      const disposable = commandService.onCommandExecuted((c) => {
        var _a;
        const id2 = c.id;
        if (id2 === SetTextSelectionsOperation.id || id2 === SetInlineFormatCommand.id) {
          const textRun = getFontStyleAtCursor(accessor);
          if (textRun == null) {
            return;
          }
          const it = (_a = textRun.ts) == null ? void 0 : _a.it;
          subscriber.next(it === 1 /* TRUE */);
        }
      });
      subscriber.next(false);
      return disposable.dispose;
    }),
    hidden$: getMenuHiddenObservable(accessor, O.UNIVER_DOC)
  };
}
function DocUnderlineMenuItemFactory(accessor) {
  const commandService = accessor.get(ICommandService);
  return {
    id: DOC_UNDERLINE_MUTATION_ID,
    type: 0 /* BUTTON */,
    icon: "UnderlineSingle",
    title: "Set underline",
    tooltip: "toolbar.underline",
    activated$: new Observable((subscriber) => {
      const disposable = commandService.onCommandExecuted((c) => {
        var _a;
        const id2 = c.id;
        if (id2 === SetTextSelectionsOperation.id || id2 === SetInlineFormatCommand.id) {
          const textRun = getFontStyleAtCursor(accessor);
          if (textRun == null) {
            return;
          }
          const ul = (_a = textRun.ts) == null ? void 0 : _a.ul;
          subscriber.next((ul == null ? void 0 : ul.s) === 1 /* TRUE */);
        }
      });
      subscriber.next(false);
      return disposable.dispose;
    }),
    hidden$: getMenuHiddenObservable(accessor, O.UNIVER_DOC)
  };
}
function DocStrikeThroughMenuItemFactory(accessor) {
  const commandService = accessor.get(ICommandService);
  return {
    id: DOC_STRIKE_MUTATION_ID,
    type: 0 /* BUTTON */,
    icon: "StrikethroughSingle",
    title: "Set strike through",
    tooltip: "toolbar.strikethrough",
    activated$: new Observable((subscriber) => {
      const disposable = commandService.onCommandExecuted((c) => {
        var _a;
        const id2 = c.id;
        if (id2 === SetTextSelectionsOperation.id || id2 === SetInlineFormatCommand.id) {
          const textRun = getFontStyleAtCursor(accessor);
          if (textRun == null) {
            return;
          }
          const st = (_a = textRun.ts) == null ? void 0 : _a.st;
          subscriber.next((st == null ? void 0 : st.s) === 1 /* TRUE */);
        }
      });
      subscriber.next(false);
      return disposable.dispose;
    }),
    hidden$: getMenuHiddenObservable(accessor, O.UNIVER_DOC)
  };
}
function getFontStyleAtCursor(accessor) {
  var _a;
  const univerInstanceService = accessor.get(IUniverInstanceService);
  const textSelectionService = accessor.get(DocSelectionManagerService);
  const editorDataModel = univerInstanceService.getUniverDocInstance(DOCS_NORMAL_EDITOR_UNIT_ID_KEY);
  const activeTextRange = textSelectionService.getActiveTextRange();
  if (editorDataModel == null || activeTextRange == null) return null;
  const textRuns = (_a = editorDataModel.getBody()) == null ? void 0 : _a.textRuns;
  if (textRuns == null) return;
  const { startOffset } = activeTextRange;
  const textRun = textRuns.find(({ st, ed }) => startOffset >= st && startOffset <= ed);
  return textRun;
}

// ../packages-experimental/uni-docs-ui/src/controllers/menu.schema.ts
var menuSchema6 = {
  ["toolbar_main" /* TOOLBAR_MAIN */]: menuSchema2["ribbon.start.format" /* FORMAT */],
  [FONT_GROUP_MENU_ID]: {
    [DOC_BOLD_MUTATION_ID]: {
      order: 0,
      menuItemFactory: DocBoldMenuItemFactory
    },
    [DOC_ITALIC_MUTATION_ID]: {
      order: 1,
      menuItemFactory: DocItalicMenuItemFactory
    },
    [DOC_UNDERLINE_MUTATION_ID]: {
      order: 2,
      menuItemFactory: DocUnderlineMenuItemFactory
    },
    [DOC_STRIKE_MUTATION_ID]: {
      order: 3,
      menuItemFactory: DocStrikeThroughMenuItemFactory
    }
  }
};

// ../packages-experimental/uni-docs-ui/src/controllers/uni-docs-ui.controller.tsx
var UniDocsUIController = class extends DocUIController {
  constructor(injector, componentManager, commandService, layoutService, menuManagerService, uiPartsService, univerInstanceService, shortcutService, configService, _toolbarService) {
    super(
      injector,
      componentManager,
      commandService,
      layoutService,
      menuManagerService,
      uiPartsService,
      univerInstanceService,
      shortcutService,
      configService
    );
    this._toolbarService = _toolbarService;
    this._initUniMenus();
    this._initMutations();
  }
  _initUniMenus() {
    this._menuManagerService.appendRootMenu(menuSchema6);
    [
      ["font-famaily" /* FONT_FAMILY */, SetInlineFormatFontFamilyCommand.id],
      ["font-size" /* FONT_SIZE */, SetInlineFormatFontSizeCommand.id],
      ["color" /* COLOR */, SetInlineFormatTextColorCommand.id],
      ["background" /* BACKGROUND */, SetInlineFormatTextBackgroundColorCommand.id],
      ["image" /* IMAGE */, DOCS_IMAGE_MENU_ID],
      ["table" /* TABLE */, DOC_TABLE_MUTATION_ID],
      ["order-list" /* ORDER_LIST */, OrderListCommand.id],
      ["unorder-list" /* UNORDER_LIST */, BulletListCommand.id]
    ].forEach(([id2, menuId]) => {
      this.disposeWithMe(this._toolbarService.implementItem(id2, { id: menuId, type: O.UNIVER_DOC }));
    });
  }
  _initMutations() {
    [
      generateCloneMutation(DOC_BOLD_MUTATION_ID, SetInlineFormatBoldCommand),
      generateCloneMutation(DOC_ITALIC_MUTATION_ID, SetInlineFormatItalicCommand),
      generateCloneMutation(DOC_UNDERLINE_MUTATION_ID, SetInlineFormatUnderlineCommand),
      generateCloneMutation(DOC_STRIKE_MUTATION_ID, SetInlineFormatStrikethroughCommand),
      generateCloneMutation(DOC_TABLE_MUTATION_ID, DocCreateTableOperation)
    ].forEach((mutation) => {
      this.disposeWithMe(this._commandService.registerCommand(mutation));
    });
  }
};
UniDocsUIController = __decorateClass([
  __decorateParam(0, Inject(Injector)),
  __decorateParam(1, Inject(ComponentManager)),
  __decorateParam(2, ICommandService),
  __decorateParam(3, ILayoutService),
  __decorateParam(4, IMenuManagerService),
  __decorateParam(5, IUIPartsService),
  __decorateParam(6, IUniverInstanceService),
  __decorateParam(7, IShortcutService),
  __decorateParam(8, IConfigService),
  __decorateParam(9, Inject(UniToolbarService))
], UniDocsUIController);

// ../packages-experimental/uni-sheets-ui/src/views/uni-sheet-bar/UniSheetBar.tsx
var import_react12 = __toESM(require_react());

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages-experimental/uni-sheets-ui/src/views/uni-sheet-bar/index.module.less
var index_module_default4 = {
  "uniSheetBar": "univer-uni-sheet-bar",
  "sheetTab": "univer-sheet-tab",
  "sheetItems": "univer-sheet-items",
  "sheetItem": "univer-sheet-item",
  "active": "univer-active",
  "newSheetButton": "univer-new-sheet-button",
  "newSheetButtonIcon": "univer-new-sheet-button-icon"
};

// ../packages-experimental/uni-sheets-ui/src/views/uni-sheet-bar/UniSheetBar.tsx
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
function UniSheetBar() {
  const [sheetList, setSheetList] = (0, import_react12.useState)([]);
  const [activeKey, setActiveKey] = (0, import_react12.useState)("");
  const [barHeight, setBarHeight] = (0, import_react12.useState)(0);
  const workbook = useActiveWorkbook();
  const commandService = useDependency(ICommandService);
  const sheetBarRef = (0, import_react12.useRef)(null);
  (0, import_react12.useEffect)(() => {
    const sheetBar = sheetBarRef.current;
    if (sheetBar) {
      setBarHeight(sheetBar.clientHeight - 38);
    }
  }, []);
  const updateSheetItems = (0, import_react12.useCallback)(() => {
    var _a;
    const currentSubUnitId = ((_a = workbook.getActiveSheet()) == null ? void 0 : _a.getSheetId()) || "";
    setActiveKey(currentSubUnitId);
    const sheets = workbook.getSheets();
    const activeSheet = workbook.getActiveSheet();
    const sheetListItems = sheets.filter((sheet) => !sheet.isSheetHidden()).map((sheet, index2) => {
      var _a2;
      return {
        sheetId: sheet.getSheetId(),
        label: sheet.getName(),
        index: index2,
        selected: activeSheet === sheet,
        color: (_a2 = sheet.getTabColor()) != null ? _a2 : void 0
      };
    });
    setSheetList(sheetListItems);
    setActiveKey(currentSubUnitId);
  }, [workbook]);
  (0, import_react12.useEffect)(() => {
    updateSheetItems();
    const disposable = setupStatusUpdate();
    return () => {
      disposable.dispose();
    };
  }, [workbook]);
  const handleSheetActiveChange = (subUnitId) => {
    if (!subUnitId) return;
    commandService.executeCommand(SetWorksheetActiveOperation.id, {
      subUnitId,
      unitId: workbook.getUnitId()
    });
  };
  const handleSheetAdd = () => {
    commandService.executeCommand(InsertSheetCommand.id);
  };
  const setupStatusUpdate = () => commandService.onCommandExecuted((commandInfo) => {
    switch (commandInfo.id) {
      case SetTabColorMutation.id:
      case SetWorksheetHideMutation.id:
      case RemoveSheetMutation.id:
      case SetWorksheetNameMutation.id:
      case InsertSheetMutation.id:
      case SetWorksheetOrderMutation.id:
      case SetWorksheetActiveOperation.id:
        updateSheetItems();
        break;
      default:
        break;
    }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: index_module_default4.uniSheetBar, ref: sheetBarRef, children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: index_module_default4.sheetTab, style: { height: `${barHeight}px` }, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: index_module_default4.sheetItems, children: sheetList.map((item, index2) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "div",
      {
        className: `
                              ${index_module_default4.sheetItem}
                              ${activeKey === item.sheetId ? index_module_default4.active : ""}
                            `,
        onClick: () => handleSheetActiveChange(item.sheetId),
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Tooltip, { showIfEllipsis: true, title: item.label, placement: "right", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { children: [
          " ",
          item.label,
          " "
        ] }) })
      },
      index2
    )) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("button", { className: index_module_default4.newSheetButton, onClick: handleSheetAdd, children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(increase_single_default, { className: index_module_default4.newSheetButtonIcon }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: "New sheet" })
    ] })
  ] });
}

// ../packages-experimental/uni-sheets-ui/src/controllers/menu.ts
var SHEET_BOLD_MUTATION_ID = "sheet.command.uni-bold";
var SHEET_ITALIC_MUTATION_ID = "sheet.command.uni-italic";
var SHEET_UNDERLINE_MUTATION_ID = "sheet.command.uni-underline";
var SHEET_STRIKE_MUTATION_ID = "sheet.command.uni-strike";
function SheetBoldMenuItemFactory(accessor) {
  const commandService = accessor.get(ICommandService);
  const univerInstanceService = accessor.get(IUniverInstanceService);
  const contextService = accessor.get(IContextService);
  const selectionManagerService = accessor.get(SheetsSelectionsService);
  return {
    id: SHEET_BOLD_MUTATION_ID,
    type: 0 /* BUTTON */,
    icon: "BoldSingle",
    title: "Set bold",
    tooltip: "toolbar.bold",
    disabled$: getCurrentRangeDisable$(accessor, { workbookTypes: [WorkbookEditablePermission], worksheetTypes: [WorksheetEditPermission, WorksheetSetCellStylePermission], rangeTypes: [RangeProtectionPermissionEditPoint] }),
    activated$: deriveStateFromActiveSheet$(univerInstanceService, false, ({ worksheet }) => new Observable((subscriber) => {
      var _a;
      const disposable = commandService.onCommandExecuted((c) => {
        var _a2, _b;
        const id2 = c.id;
        if (id2 === SetRangeValuesMutation.id || id2 === SetSelectionsOperation.id || id2 === SetWorksheetActiveOperation.id) {
          const primary2 = (_a2 = selectionManagerService.getCurrentLastSelection()) == null ? void 0 : _a2.primary;
          let isBold2 = 0 /* NORMAL */;
          if (primary2 != null) {
            const range = worksheet.getRange(primary2.startRow, primary2.startColumn);
            isBold2 = range == null ? void 0 : range.getFontWeight();
          }
          subscriber.next(isBold2 === 1 /* BOLD */);
        }
        if ((id2 === SetTextSelectionsOperation.id || id2 === SetInlineFormatCommand.id) && contextService.getContextValue(EDITOR_ACTIVATED) && contextService.getContextValue(FOCUSING_SHEET)) {
          const textRun = getFontStyleAtCursor2(accessor);
          if (textRun == null) {
            return;
          }
          const bl = (_b = textRun.ts) == null ? void 0 : _b.bl;
          subscriber.next(bl === 1 /* TRUE */);
        }
      });
      const primary = (_a = selectionManagerService.getCurrentLastSelection()) == null ? void 0 : _a.primary;
      if (!worksheet) {
        subscriber.next(false);
        return;
      }
      let isBold = 0 /* NORMAL */;
      if (primary != null) {
        const range = worksheet.getRange(primary.startRow, primary.startColumn);
        isBold = range == null ? void 0 : range.getFontWeight();
      }
      subscriber.next(isBold === 1 /* BOLD */);
      return disposable.dispose;
    })),
    hidden$: getMenuHiddenObservable(accessor, O.UNIVER_SHEET)
  };
}
function SheetItalicMenuItemFactory(accessor) {
  const commandService = accessor.get(ICommandService);
  const univerInstanceService = accessor.get(IUniverInstanceService);
  const selectionManagerService = accessor.get(SheetsSelectionsService);
  const contextService = accessor.get(IContextService);
  return {
    id: SHEET_ITALIC_MUTATION_ID,
    type: 0 /* BUTTON */,
    icon: "ItalicSingle",
    title: "Set italic",
    tooltip: "toolbar.italic",
    disabled$: getCurrentRangeDisable$(accessor, { workbookTypes: [WorkbookEditablePermission], worksheetTypes: [WorksheetEditPermission, WorksheetSetCellStylePermission], rangeTypes: [RangeProtectionPermissionEditPoint] }),
    activated$: deriveStateFromActiveSheet$(univerInstanceService, false, ({ worksheet }) => new Observable((subscriber) => {
      var _a;
      const disposable = commandService.onCommandExecuted((c) => {
        var _a2, _b;
        const id2 = c.id;
        if (id2 === SetRangeValuesMutation.id || id2 === SetSelectionsOperation.id || id2 === SetWorksheetActiveOperation.id) {
          const primary2 = (_a2 = selectionManagerService.getCurrentLastSelection()) == null ? void 0 : _a2.primary;
          let isItalic2 = 0 /* NORMAL */;
          if (primary2 != null) {
            const range = worksheet.getRange(primary2.startRow, primary2.startColumn);
            isItalic2 = range == null ? void 0 : range.getFontStyle();
          }
          subscriber.next(isItalic2 === 1 /* ITALIC */);
        }
        if ((id2 === SetTextSelectionsOperation.id || id2 === SetInlineFormatCommand.id) && contextService.getContextValue(EDITOR_ACTIVATED) && contextService.getContextValue(FOCUSING_SHEET)) {
          const textRun = getFontStyleAtCursor2(accessor);
          if (textRun == null) return;
          const it = (_b = textRun.ts) == null ? void 0 : _b.it;
          subscriber.next(it === 1 /* TRUE */);
        }
      });
      const primary = (_a = selectionManagerService.getCurrentLastSelection()) == null ? void 0 : _a.primary;
      let isItalic = 0 /* NORMAL */;
      if (primary != null) {
        const range = worksheet.getRange(primary.startRow, primary.startColumn);
        isItalic = range == null ? void 0 : range.getFontStyle();
      }
      subscriber.next(isItalic === 1 /* ITALIC */);
      return disposable.dispose;
    })),
    hidden$: getMenuHiddenObservable(accessor, O.UNIVER_SHEET)
  };
}
function SheetUnderlineMenuItemFactory(accessor) {
  const commandService = accessor.get(ICommandService);
  const univerInstanceService = accessor.get(IUniverInstanceService);
  const selectionManagerService = accessor.get(SheetsSelectionsService);
  const contextService = accessor.get(IContextService);
  return {
    id: SHEET_UNDERLINE_MUTATION_ID,
    type: 0 /* BUTTON */,
    icon: "UnderlineSingle",
    title: "Set underline",
    tooltip: "toolbar.underline",
    activated$: deriveStateFromActiveSheet$(univerInstanceService, false, ({ worksheet }) => new Observable((subscriber) => {
      var _a;
      const disposable = commandService.onCommandExecuted((c) => {
        var _a2, _b;
        const id2 = c.id;
        if (id2 === SetRangeValuesMutation.id || id2 === SetSelectionsOperation.id || id2 === SetWorksheetActiveOperation.id) {
          const primary2 = (_a2 = selectionManagerService.getCurrentLastSelection()) == null ? void 0 : _a2.primary;
          let isUnderline2;
          if (primary2 != null) {
            const range = worksheet.getRange(primary2.startRow, primary2.startColumn);
            isUnderline2 = range == null ? void 0 : range.getUnderline();
          }
          subscriber.next(!!(isUnderline2 && isUnderline2.s));
        }
        if ((id2 === SetTextSelectionsOperation.id || id2 === SetInlineFormatCommand.id) && contextService.getContextValue(EDITOR_ACTIVATED) && contextService.getContextValue(FOCUSING_SHEET)) {
          const textRun = getFontStyleAtCursor2(accessor);
          if (textRun == null) return;
          const ul = (_b = textRun.ts) == null ? void 0 : _b.ul;
          subscriber.next((ul == null ? void 0 : ul.s) === 1 /* TRUE */);
        }
      });
      const primary = (_a = selectionManagerService.getCurrentLastSelection()) == null ? void 0 : _a.primary;
      let isUnderline;
      if (primary != null) {
        const range = worksheet.getRange(primary.startRow, primary.startColumn);
        isUnderline = range == null ? void 0 : range.getUnderline();
      }
      subscriber.next(!!(isUnderline && isUnderline.s));
      return disposable.dispose;
    })),
    disabled$: getCurrentRangeDisable$(accessor, { workbookTypes: [WorkbookEditablePermission], worksheetTypes: [WorksheetEditPermission, WorksheetSetCellStylePermission], rangeTypes: [RangeProtectionPermissionEditPoint] }),
    hidden$: getMenuHiddenObservable(accessor, O.UNIVER_SHEET)
  };
}
function SheetStrikeThroughMenuItemFactory(accessor) {
  const commandService = accessor.get(ICommandService);
  const univerInstanceService = accessor.get(IUniverInstanceService);
  const selectionManagerService = accessor.get(SheetsSelectionsService);
  const contextService = accessor.get(IContextService);
  return {
    id: SHEET_STRIKE_MUTATION_ID,
    type: 0 /* BUTTON */,
    icon: "StrikethroughSingle",
    title: "Set strike through",
    tooltip: "toolbar.strikethrough",
    disabled$: getCurrentRangeDisable$(accessor, { workbookTypes: [WorkbookEditablePermission], worksheetTypes: [WorksheetEditPermission, WorksheetSetCellStylePermission], rangeTypes: [RangeProtectionPermissionEditPoint] }),
    activated$: deriveStateFromActiveSheet$(univerInstanceService, false, ({ worksheet }) => new Observable((subscriber) => {
      var _a;
      const disposable = commandService.onCommandExecuted((c) => {
        var _a2, _b;
        const id2 = c.id;
        if (id2 === SetRangeValuesMutation.id || id2 === SetSelectionsOperation.id || id2 === SetWorksheetActiveOperation.id) {
          const primary2 = (_a2 = selectionManagerService.getCurrentLastSelection()) == null ? void 0 : _a2.primary;
          let st2;
          if (primary2 != null) {
            const range = worksheet.getRange(primary2.startRow, primary2.startColumn);
            st2 = range == null ? void 0 : range.getStrikeThrough();
          }
          subscriber.next(!!(st2 && st2.s));
        }
        if ((id2 === SetTextSelectionsOperation.id || id2 === SetInlineFormatCommand.id) && contextService.getContextValue(EDITOR_ACTIVATED) && contextService.getContextValue(FOCUSING_SHEET)) {
          const textRun = getFontStyleAtCursor2(accessor);
          if (textRun == null) {
            return;
          }
          const st2 = (_b = textRun.ts) == null ? void 0 : _b.st;
          subscriber.next((st2 == null ? void 0 : st2.s) === 1 /* TRUE */);
        }
      });
      const primary = (_a = selectionManagerService.getCurrentLastSelection()) == null ? void 0 : _a.primary;
      let st;
      if (primary != null) {
        const range = worksheet.getRange(primary.startRow, primary.startColumn);
        st = range == null ? void 0 : range.getStrikeThrough();
      }
      subscriber.next(!!(st && st.s));
      return disposable.dispose;
    })),
    hidden$: getMenuHiddenObservable(accessor, O.UNIVER_SHEET)
  };
}
function getFontStyleAtCursor2(accessor) {
  var _a;
  const univerInstanceService = accessor.get(IUniverInstanceService);
  const textSelectionService = accessor.get(DocSelectionManagerService);
  const editorDataModel = univerInstanceService.getUniverDocInstance(DOCS_NORMAL_EDITOR_UNIT_ID_KEY);
  const activeTextRange = textSelectionService.getActiveRectRange();
  if (editorDataModel == null || activeTextRange == null) return null;
  const textRuns = (_a = editorDataModel.getBody()) == null ? void 0 : _a.textRuns;
  if (textRuns == null) return;
  const { startOffset } = activeTextRange;
  const textRun = textRuns.find(({ st, ed }) => startOffset >= st && startOffset <= ed);
  return textRun;
}

// ../packages-experimental/uni-sheets-ui/src/controllers/menu.schema.ts
var menuSchema7 = {
  ["toolbar_main" /* TOOLBAR_MAIN */]: menuSchema3["ribbon.start.format" /* FORMAT */],
  [FONT_GROUP_MENU_ID]: {
    [SHEET_BOLD_MUTATION_ID]: {
      order: 0,
      menuItemFactory: SheetBoldMenuItemFactory
    },
    [SHEET_ITALIC_MUTATION_ID]: {
      order: 1,
      menuItemFactory: SheetItalicMenuItemFactory
    },
    [SHEET_UNDERLINE_MUTATION_ID]: {
      order: 2,
      menuItemFactory: SheetUnderlineMenuItemFactory
    },
    [SHEET_STRIKE_MUTATION_ID]: {
      order: 3,
      menuItemFactory: SheetStrikeThroughMenuItemFactory
    }
  }
};

// ../packages-experimental/uni-sheets-ui/src/controllers/uni-sheets-ui.controller.tsx
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var UniSheetsUIController = class extends SheetUIController {
  constructor(injector, componentManager, layoutService, commandService, shortcutService, menuManagerService, uiPartsService, configService, _toolbarService) {
    super(
      injector,
      componentManager,
      layoutService,
      commandService,
      shortcutService,
      menuManagerService,
      uiPartsService,
      configService
    );
    this._toolbarService = _toolbarService;
    this._initUniMenus();
    this._initMutations();
  }
  _initWorkbenchParts() {
    const uiController = this._uiPartsService;
    const injector = this._injector;
    this.disposeWithMe(uiController.registerComponent("OUTLINE" /* OUTLINE */, () => connectInjector(RenderOutline, injector)));
    this.disposeWithMe(uiController.registerComponent("content" /* CONTENT */, () => connectInjector(RenderSheetContent, injector)));
  }
  _initUniMenus() {
    this._menuManagerService.appendRootMenu(menuSchema7);
    [
      ["font-famaily" /* FONT_FAMILY */, SetRangeFontFamilyCommand.id],
      ["font-size" /* FONT_SIZE */, SetRangeFontSizeCommand.id],
      ["color" /* COLOR */, SetRangeTextColorCommand.id],
      ["background" /* BACKGROUND */, SetBackgroundColorCommand.id],
      ["image" /* IMAGE */, SHEETS_IMAGE_MENU_ID]
    ].forEach(([id2, menuId]) => {
      this._toolbarService.implementItem(id2, { id: menuId, type: O.UNIVER_SHEET });
    });
  }
  _initMutations() {
    [
      generateCloneMutation(SHEET_BOLD_MUTATION_ID, SetRangeBoldCommand),
      generateCloneMutation(SHEET_ITALIC_MUTATION_ID, SetRangeItalicCommand),
      generateCloneMutation(SHEET_UNDERLINE_MUTATION_ID, SetRangeUnderlineCommand),
      generateCloneMutation(SHEET_STRIKE_MUTATION_ID, SetRangeStrickThroughCommand)
    ].forEach((mutation) => {
      this.disposeWithMe(this._commandService.registerCommand(mutation));
    });
  }
};
UniSheetsUIController = __decorateClass([
  __decorateParam(0, Inject(Injector)),
  __decorateParam(1, Inject(ComponentManager)),
  __decorateParam(2, ILayoutService),
  __decorateParam(3, ICommandService),
  __decorateParam(4, IShortcutService),
  __decorateParam(5, IMenuManagerService),
  __decorateParam(6, IUIPartsService),
  __decorateParam(7, IConfigService),
  __decorateParam(8, Inject(UniToolbarService))
], UniSheetsUIController);
function RenderOutline() {
  const univerInstanceService = useDependency(IUniverInstanceService);
  const focused = useObservable(univerInstanceService.focused$);
  const workbook = useObservable(() => univerInstanceService.getCurrentTypeOfUnit$(O.UNIVER_SHEET), null, false, []);
  if (!workbook || focused !== (workbook == null ? void 0 : workbook.getUnitId())) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(UniSheetBar, {});
}

// ../packages-experimental/uni-slides-ui/src/views/UniSlideSideBar.tsx
var import_react13 = __toESM(require_react());

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages-experimental/uni-slides-ui/src/views/index.module.less
var index_module_default5 = {
  "uniSlideBar": "univer-uni-slide-bar",
  "uniSlideBarContent": "univer-uni-slide-bar-content",
  "uniSlideBarItem": "univer-uni-slide-bar-item",
  "uniSlideBarBox": "univer-uni-slide-bar-box",
  "uniSlideBarItemActive": "univer-uni-slide-bar-item-active",
  "uniSlideBarContentHeader": "univer-uni-slide-bar-content-header",
  "newSlideButton": "univer-new-slide-button",
  "newSlideButtonIcon": "univer-new-slide-button-icon"
};

// ../packages-experimental/uni-slides-ui/src/views/UniSlideSideBar.tsx
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
function UniSlideSideBar() {
  const univerInstanceService = useDependency(IUniverInstanceService);
  const commandService = useDependency(ICommandService);
  const renderManagerService = useDependency(IRenderManagerService);
  const localeService = useDependency(LocaleService);
  const slideBarRef = (0, import_react13.useRef)(null);
  const currentSlide = useObservable(
    () => univerInstanceService.getCurrentTypeOfUnit$(O.UNIVER_SLIDE),
    void 0,
    void 0,
    []
  );
  const pages = currentSlide == null ? void 0 : currentSlide.getPages();
  const pageOrder = currentSlide == null ? void 0 : currentSlide.getPageOrder();
  if (!pages || !pageOrder) {
    return null;
  }
  const slideList = pageOrder.map((id2) => pages[id2]);
  const [activatePageId, setActivatePageId] = (0, import_react13.useState)(pageOrder[0]);
  const [barHeight, setBarHeight] = (0, import_react13.useState)(0);
  const divRefs = (0, import_react13.useMemo)(() => slideList.map(() => import_react13.default.createRef()), [slideList]);
  (0, import_react13.useEffect)(() => {
    const subscriber = currentSlide == null ? void 0 : currentSlide.activePage$.subscribe((page) => {
      var _a;
      const id2 = (_a = page == null ? void 0 : page.id) != null ? _a : null;
      id2 && setActivatePageId(id2);
    });
    return () => {
      subscriber == null ? void 0 : subscriber.unsubscribe();
    };
  }, []);
  (0, import_react13.useEffect)(() => {
    divRefs.forEach((ref, index2) => {
      var _a;
      if (ref.current) {
        const slide = slideList[index2];
        (_a = renderManagerService.getRenderById(slide.id)) == null ? void 0 : _a.engine.setContainer(ref.current);
      }
    });
    if (divRefs.length > 0) {
      commandService.syncExecuteCommand(SetSlidePageThumbOperation.id, {
        unitId: currentSlide == null ? void 0 : currentSlide.getUnitId()
      });
    }
  }, [divRefs, commandService, renderManagerService, slideList, currentSlide]);
  (0, import_react13.useEffect)(() => {
    const slideBar = slideBarRef.current;
    if (slideBar) {
      setBarHeight(slideBar.clientHeight - 38);
    }
  }, []);
  const activatePage = (0, import_react13.useCallback)((page) => {
    commandService.syncExecuteCommand(ActivateSlidePageOperation.id, { id: page, unitId: currentSlide == null ? void 0 : currentSlide.getUnitId() });
  }, [commandService, currentSlide]);
  const handleAppendSlide = (0, import_react13.useCallback)(() => {
    commandService.syncExecuteCommand(AppendSlideOperation.id, { unitId: currentSlide == null ? void 0 : currentSlide.getUnitId() });
  }, [commandService, currentSlide]);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: index_module_default5.uniSlideBar, ref: slideBarRef, children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: index_module_default5.uniSlideBarContent, style: { height: `${barHeight}px` }, children: slideList.map((item, index2) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
      "div",
      {
        className: clsx(index_module_default5.uniSlideBarItem, {
          [index_module_default5.uniSlideBarItemActive]: item.id === activatePageId
        }),
        onClick: () => activatePage(item.id),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { children: index2 + 1 }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { ref: divRefs[index2], className: index_module_default5.uniSlideBarBox })
        ]
      },
      item.id
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("button", { type: "button", className: index_module_default5.newSlideButton, onClick: handleAppendSlide, children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(increase_single_default, { className: index_module_default5.newSlideButtonIcon }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { children: localeService.t("slide.append") })
    ] })
  ] });
}

// ../packages-experimental/uni-slides-ui/src/controllers/menu.schema.ts
var menuSchema8 = {
  ["toolbar_main" /* TOOLBAR_MAIN */]: menuSchema4["ribbon.start.format" /* FORMAT */]
};

// ../packages-experimental/uni-slides-ui/src/controllers/uni-slides-ui.controller.tsx
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var UniSlidesUIController = class extends SlidesUIController {
  constructor(_injector, _menuManagerService, _componentManager, _uiPartsService, _commandService, _shortcutService, _toolbarService) {
    super(_injector, _menuManagerService, _componentManager, _uiPartsService, _commandService, _shortcutService);
    this._toolbarService = _toolbarService;
    this._initUniMenus();
  }
  _initUIComponents() {
    this.disposeWithMe(this._uiPartsService.registerComponent("OUTLINE" /* OUTLINE */, () => connectInjector(RenderOutline2, this._injector)));
    this.disposeWithMe(
      this._uiPartsService.registerComponent("content" /* CONTENT */, () => connectInjector(SlideEditorContainer, this._injector))
    );
  }
  _initUniMenus() {
    this._menuManagerService.appendRootMenu(menuSchema8);
    [
      ["image" /* IMAGE */, SLIDES_IMAGE_MENU_ID],
      ["font-group" /* FONT_GROUP */, SHAPE_MENU_ID],
      ["table" /* TABLE */, SlideAddTextCommand.id]
    ].forEach(([id2, menuId]) => {
      this._toolbarService.implementItem(id2, { id: menuId, type: O.UNIVER_SLIDE });
    });
  }
};
UniSlidesUIController = __decorateClass([
  __decorateParam(0, Inject(Injector)),
  __decorateParam(1, IMenuManagerService),
  __decorateParam(2, Inject(ComponentManager)),
  __decorateParam(3, IUIPartsService),
  __decorateParam(4, ICommandService),
  __decorateParam(5, IShortcutService),
  __decorateParam(6, Inject(UniToolbarService))
], UniSlidesUIController);
function RenderOutline2() {
  const univerInstanceService = useDependency(IUniverInstanceService);
  const focused = useObservable(univerInstanceService.focused$);
  const slide = useObservable(() => univerInstanceService.getCurrentTypeOfUnit$(O.UNIVER_SLIDE), null, false, []);
  if (!slide || focused !== slide.getUnitId()) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(UniSlideSideBar, {});
}

// src/uni/main.ts
var LOAD_LAZY_PLUGINS_TIMEOUT = 4e3;
var univer = new Univer({
  theme: default_module_default,
  locale: "enUS" /* EN_US */,
  locales: {
    ["enUS" /* EN_US */]: enUS,
    ["faIR" /* FA_IR */]: faIR
  },
  logLevel: 4 /* VERBOSE */
});
registerBasicPlugins(univer);
registerSheetPlugins(univer);
registerSlidePlugins(univer);
registerUniPlugins(univer);
univer.createUnit(O.UNIVER_SHEET, DEFAULT_WORKBOOK_DATA_DEMO);
univer.createUnit(O.UNIVER_DOC, DEFAULT_DOCUMENT_DATA_EN);
univer.createUnit(O.UNIVER_SHEET, DEFAULT_WORKBOOK_DATA_DEMO1);
univer.registerPlugin(UniverDebuggerPlugin);
setTimeout(() => {
  import("./lazy.js").then((lazy) => {
    const plugins = lazy.default();
    plugins.forEach((p) => univer.registerPlugin(p[0], p[1]));
    univer.createUnit(O.UNIVER_DOC, DEFAULT_DOCUMENT_DATA_CN);
    univer.createUnit(O.UNIVER_SLIDE, DEFAULT_SLIDE_DATA);
  });
}, LOAD_LAZY_PLUGINS_TIMEOUT);
window.univer = univer;
window.univerAPI = FUniver.newAPI(univer);
function registerBasicPlugins(univer2) {
  univer2.registerPlugin(UniverDocsPlugin);
  univer2.registerPlugin(UniverFormulaEnginePlugin, {
    notExecuteFormula: true
  });
  univer2.registerPlugin(UniverRenderEnginePlugin);
  univer2.registerPlugin(UniverUniUIPlugin, {
    container: "app"
  });
  univer2.registerPlugin(UniverDocsUIPlugin, {
    override: [
      [DocUIController, {
        useFactory: (injector) => {
          injector.createInstance(UniDocsUIController, {});
        },
        deps: [Injector]
      }]
    ]
  });
  const worker = new Worker(new URL("./worker.js", import.meta.url), { type: "module" });
  univer2.registerPlugin(UniverRPCMainThreadPlugin, { workerURL: worker });
  univer2.onDispose(() => worker.terminate());
  univer2.registerPlugin(UniverThreadCommentUIPlugin);
  univer2.registerPlugin(UniverDocsDrawingUIPlugin);
}
function registerSheetPlugins(univer2) {
  univer2.registerPlugin(UniverSheetsPlugin);
  univer2.registerPlugin(UniverSheetsUIPlugin, {
    override: [
      [SheetUIController, {
        useFactory: (injector) => {
          injector.createInstance(UniSheetsUIController, {});
        },
        deps: [Injector]
      }]
    ]
  });
  univer2.registerPlugin(UniverSheetsNumfmtPlugin);
  univer2.registerPlugin(UniverSheetsNumfmtUIPlugin);
  univer2.registerPlugin(UniverSheetsFormulaPlugin);
  univer2.registerPlugin(UniverSheetsFormulaUIPlugin);
  univer2.registerPlugin(UniverSheetsFindReplacePlugin);
  univer2.registerPlugin(UniverSheetsHyperLinkUIPlugin);
  univer2.registerPlugin(UniverSheetsSortUIPlugin);
  univer2.registerPlugin(UniverSheetsThreadCommentPlugin);
  univer2.registerPlugin(UniverSheetsConditionalFormattingUIPlugin);
  univer2.registerPlugin(UniverSheetsDrawingUIPlugin);
}
function registerSlidePlugins(univer2) {
  univer2.registerPlugin(UniverSlidesPlugin);
  univer2.registerPlugin(UniverSlidesUIPlugin, {
    override: [
      [SlidesUIController, {
        useClass: UniSlidesUIController
      }]
    ]
  });
}
function registerUniPlugins(univer2) {
  univer2.registerPlugin(UniverDocUniFormulaPlugin);
}
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=main.js.map
