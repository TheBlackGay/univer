import {
  UniverDocsMentionUIPlugin
} from "../chunk-KH5JJXHV.js";
import {
  AddCommentMutation,
  IThreadCommentDataSourceService,
  SetActiveCommentOperation,
  ThreadCommentModel,
  ThreadCommentPanel,
  ThreadCommentPanelService,
  UniverThreadCommentUIPlugin,
  getDT
} from "../chunk-AGG5SFHL.js";
import {
  UniverDebuggerPlugin
} from "../chunk-6RL4G227.js";
import "../chunk-OZCZVRL3.js";
import {
  UniverDocsDrawingUIPlugin
} from "../chunk-IEN5A4MA.js";
import {
  UniverDocsDrawingPlugin,
  UniverDrawingUIPlugin
} from "../chunk-6KKG4LFT.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-R36TW3RS.js";
import {
  FUniver
} from "../chunk-IM7MDYQK.js";
import "../chunk-PJAWFGFR.js";
import "../chunk-NW7E7FBW.js";
import {
  BulletListCommand,
  ComponentManager,
  CutContentCommand,
  DOC_INTERCEPTOR_POINT,
  DeleteCommand,
  DeleteLeftCommand,
  DocBackScrollRenderController,
  DocCanvasPopManagerService,
  DocEventManagerService,
  DocInterceptorService,
  DocRenderController,
  DocSelectionManagerService,
  DocSelectionRenderService,
  DocSkeletonManagerService,
  HorizontalLineCommand,
  IMenuManagerService,
  IMessageService,
  IRenderManagerService,
  IShortcutService,
  ISidebarService,
  InsertCommand,
  MoveCursorOperation,
  OrderListCommand,
  RichTextEditingMutation,
  SetTextSelectionsOperation,
  UniverDocsPlugin,
  UniverDocsUIPlugin,
  UniverDrawingPlugin,
  UniverRenderEnginePlugin,
  UniverUIPlugin,
  addCustomDecorationBySelectionFactory,
  addCustomRangeBySelectionFactory,
  deleteCustomDecorationFactory,
  deleteCustomRangeFactory,
  getMenuHiddenObservable,
  replaceSelectionFactory,
  useDependency,
  useObservable,
  whenDocAndEditorFocused,
  withCurrentTypeOfRenderer
} from "../chunk-DOZPYWOG.js";
import "../chunk-OJWCZZ56.js";
import "../chunk-222VPS6G.js";
import {
  Button,
  FormLayout,
  Input,
  Menu,
  MenuItem,
  MenuItemGroup,
  Tooltip,
  clsx,
  comment_single_default,
  copy_single_default,
  default_module_default,
  divider_single_default,
  link_single_default,
  require_jsx_runtime,
  require_react,
  text_single_default,
  unlink_single_default,
  write_single_default
} from "../chunk-22LKBS37.js";
import {
  enUS,
  faIR,
  ruRU,
  zhCN
} from "../chunk-NNLNWQYK.js";
import "../chunk-5UD457XA.js";
import {
  BehaviorSubject,
  BuildTextUtils,
  DOCS_NORMAL_EDITOR_UNIT_ID_KEY,
  DOCS_ZEN_EDITOR_UNIT_ID_KEY,
  DependentOn,
  Disposable,
  DisposableCollection,
  ICommandService,
  IConfigService,
  IResourceManagerService,
  IUniverInstanceService,
  Inject,
  Injector,
  LocaleService,
  O,
  Observable,
  Plugin,
  SHEET_EDITOR_UNITS,
  Tools,
  Univer,
  UniverFormulaEnginePlugin,
  UserManagerService,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  filter,
  generateRandomId,
  getBodySlice,
  isInternalEditorID,
  map,
  merge_default,
  of,
  pairwise,
  sequenceExecute,
  tap,
  toDisposable
} from "../chunk-33NDYU5R.js";
import "../chunk-WKXT4HLI.js";
import "../chunk-TI7IKOEF.js";
import {
  __decorateClass,
  __decorateParam,
  __publicField,
  __toESM
} from "../chunk-NSSCU2QI.js";

// ../packages/docs-hyper-link/src/commands/mutations/hyper-link.mutation.ts
var AddHyperLinkMuatation = {
  id: "docs.mutation.add-hyper-link",
  type: 2 /* MUTATION */,
  handler: () => {
    return true;
  }
};
var UpdateHyperLinkMuatation = {
  id: "docs.mutation.update-hyper-link",
  type: 2 /* MUTATION */,
  handler: () => {
    return true;
  }
};
var DeleteHyperLinkMuatation = {
  id: "docs.mutation.delete-hyper-link",
  type: 2 /* MUTATION */,
  handler: () => {
    return true;
  }
};

// ../packages/docs-hyper-link/src/controllers/config.schema.ts
var DOCS_HYPER_LINK_PLUGIN_CONFIG_KEY = "docs-hyper-link.config";
var configSymbol = Symbol(DOCS_HYPER_LINK_PLUGIN_CONFIG_KEY);
var defaultPluginConfig = {};

// ../packages/docs-hyper-link/src/controllers/resource.controller.ts
var DOC_HYPER_LINK_PLUGIN = "DOC_HYPER_LINK_PLUGIN";
var DocHyperLinkResourceController = class extends Disposable {
  constructor(_resourceManagerService, _univerInstanceService) {
    super();
    this._resourceManagerService = _resourceManagerService;
    this._univerInstanceService = _univerInstanceService;
    this._init();
  }
  _init() {
    this._resourceManagerService.registerPluginResource({
      pluginName: DOC_HYPER_LINK_PLUGIN,
      businesses: [O.UNIVER_DOC],
      onLoad: (unitID, resource) => {
        const doc = this._univerInstanceService.getUnit(unitID, O.UNIVER_DOC);
        if (!doc) {
          return;
        }
        const customRangeMap = /* @__PURE__ */ new Map();
        const handleDoc = (model) => {
          var _a, _b;
          (_b = (_a = model.getBody()) == null ? void 0 : _a.customRanges) == null ? void 0 : _b.forEach((customRange) => {
            if (customRange.rangeType === 0 /* HYPERLINK */) {
              customRangeMap.set(customRange.rangeId, customRange);
            }
          });
          return customRangeMap;
        };
        doc.headerModelMap.forEach((headerModel) => {
          handleDoc(headerModel);
        });
        doc.footerModelMap.forEach((footerModel) => {
          handleDoc(footerModel);
        });
        handleDoc(doc);
        resource.links.forEach((link) => {
          const customRange = customRangeMap.get(link.id);
          if (customRange) {
            customRange.properties = {
              ...customRange.properties,
              url: link.payload
            };
          }
        });
      },
      onUnLoad: (unitID) => {
      },
      toJson: (unitID) => {
        const doc = this._univerInstanceService.getUnit(unitID, O.UNIVER_DOC);
        const links = [];
        if (doc) {
          const handleDoc = (model) => {
            var _a, _b;
            (_b = (_a = model.getBody()) == null ? void 0 : _a.customRanges) == null ? void 0 : _b.forEach((customRange) => {
              var _a2;
              if (customRange.rangeType === 0 /* HYPERLINK */) {
                links.push({
                  id: customRange.rangeId,
                  payload: ((_a2 = customRange.properties) == null ? void 0 : _a2.url) || ""
                });
              }
            });
          };
          doc.headerModelMap.forEach((headerModel) => {
            handleDoc(headerModel);
          });
          doc.footerModelMap.forEach((footerModel) => {
            handleDoc(footerModel);
          });
          handleDoc(doc);
        }
        return JSON.stringify({ links });
      },
      parseJson(bytes) {
        return JSON.parse(bytes);
      }
    });
  }
};
DocHyperLinkResourceController = __decorateClass([
  __decorateParam(0, Inject(IResourceManagerService)),
  __decorateParam(1, IUniverInstanceService)
], DocHyperLinkResourceController);

// ../packages/docs-hyper-link/src/plugin.ts
var UniverDocsHyperLinkPlugin = class extends Plugin {
  constructor(_config = defaultPluginConfig, _injector, _configService, _commandService) {
    super();
    this._config = _config;
    this._injector = _injector;
    this._configService = _configService;
    this._commandService = _commandService;
    const { ...rest } = merge_default(
      {},
      defaultPluginConfig,
      this._config
    );
    this._configService.setConfig(DOCS_HYPER_LINK_PLUGIN_CONFIG_KEY, rest);
  }
  onStarting() {
    const deps = [[DocHyperLinkResourceController]];
    deps.forEach((dep) => this._injector.add(dep));
    [AddHyperLinkMuatation, DeleteHyperLinkMuatation, UpdateHyperLinkMuatation].forEach((mutation) => {
      this.disposeWithMe(this._commandService.registerCommand(mutation));
    });
    this._injector.get(DocHyperLinkResourceController);
  }
};
__publicField(UniverDocsHyperLinkPlugin, "pluginName", DOC_HYPER_LINK_PLUGIN);
__publicField(UniverDocsHyperLinkPlugin, "type", O.UNIVER_DOC);
UniverDocsHyperLinkPlugin = __decorateClass([
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IConfigService),
  __decorateParam(3, ICommandService)
], UniverDocsHyperLinkPlugin);

// ../packages/docs-hyper-link-ui/src/controllers/config.schema.ts
var DOCS_HYPER_LINK_UI_PLUGIN_CONFIG_KEY = "docs-hyper-link-ui.config";
var configSymbol2 = Symbol(DOCS_HYPER_LINK_UI_PLUGIN_CONFIG_KEY);
var defaultPluginConfig2 = {};

// ../packages/docs-hyper-link-ui/src/views/hyper-link-edit/index.tsx
var import_react = __toESM(require_react());

// ../packages/docs-hyper-link-ui/src/commands/commands/add-link.command.ts
var AddDocHyperLinkCommand = {
  type: 0 /* COMMAND */,
  id: "docs.command.add-hyper-link",
  async handler(accessor, params) {
    if (!params) {
      return false;
    }
    const { payload, unitId, selections } = params;
    const commandService = accessor.get(ICommandService);
    const id = generateRandomId();
    const doMutation = addCustomRangeBySelectionFactory(
      accessor,
      {
        rangeId: id,
        rangeType: 0 /* HYPERLINK */,
        properties: {
          url: payload
        },
        unitId,
        selections
      }
    );
    if (doMutation) {
      return commandService.syncExecuteCommand(doMutation.id, doMutation.params);
    }
    return false;
  }
};

// ../packages/docs-hyper-link-ui/src/commands/commands/update-link.command.ts
var UpdateDocHyperLinkCommand = {
  id: "docs.command.update-hyper-link",
  type: 0 /* COMMAND */,
  handler(accessor, params) {
    var _a;
    if (!params) {
      return false;
    }
    const { unitId, payload, segmentId, linkId } = params;
    const commandService = accessor.get(ICommandService);
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const docSelectionManagerService = accessor.get(DocSelectionManagerService);
    const currentSelection = docSelectionManagerService.getActiveTextRange();
    const doc = univerInstanceService.getUnit(unitId, O.UNIVER_DOC);
    if (!currentSelection || !doc) {
      return false;
    }
    const oldBody = getBodySlice(doc.getSelfOrHeaderFooterModel(segmentId).getBody(), currentSelection.startOffset, currentSelection.endOffset);
    const textRun = (_a = oldBody.textRuns) == null ? void 0 : _a[0];
    if (textRun) {
      textRun.ed = params.label.length + 1;
    }
    const replaceSelection = replaceSelectionFactory(accessor, {
      unitId,
      body: {
        dataStream: `${params.label}`,
        customRanges: [{
          rangeId: linkId,
          rangeType: 0 /* HYPERLINK */,
          startIndex: 0,
          endIndex: params.label.length + 1,
          properties: {
            url: payload
          }
        }],
        textRuns: textRun ? [textRun] : void 0
      },
      selection: {
        startOffset: currentSelection.startOffset,
        endOffset: currentSelection.endOffset,
        collapsed: false,
        segmentId
      }
    });
    if (!replaceSelection) {
      return false;
    }
    return commandService.syncExecuteCommand(replaceSelection.id, replaceSelection.params);
  }
};

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages/docs-hyper-link-ui/src/views/hyper-link-edit/index.module.less
var index_module_default = {
  "docsLinkEdit": "univer-docs-link-edit",
  "docsLinkEditTitle": "univer-docs-link-edit-title",
  "docsLinkEditClose": "univer-docs-link-edit-close",
  "docsLinkEditButtons": "univer-docs-link-edit-buttons",
  "docsLinkEditButton": "univer-docs-link-edit-button"
};

// ../packages/docs-hyper-link-ui/src/views/hyper-link-edit/index.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
function hasProtocol(urlString) {
  const pattern = /^[a-zA-Z]+:\/\//;
  return pattern.test(urlString);
}
function isEmail(url) {
  const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return pattern.test(url);
}
function transformUrl(urlStr) {
  return hasProtocol(urlStr) ? urlStr : isEmail(urlStr) ? `mailto://${urlStr}` : `https://${urlStr}`;
}
var DocHyperLinkEdit = () => {
  const hyperLinkService = useDependency(DocHyperLinkPopupService);
  const localeService = useDependency(LocaleService);
  const editing = useObservable(hyperLinkService.editingLink$);
  const commandService = useDependency(ICommandService);
  const univerInstanceService = useDependency(IUniverInstanceService);
  const docSelectionManagerService = useDependency(DocSelectionManagerService);
  const [link, setLink] = (0, import_react.useState)("");
  const [label, setLabel] = (0, import_react.useState)("");
  const [showError, setShowError] = (0, import_react.useState)(false);
  const isLegal = Tools.isLegalUrl(link);
  const doc = editing ? univerInstanceService.getUnit(editing.unitId, O.UNIVER_DOC) : univerInstanceService.getCurrentUnitForType(O.UNIVER_DOC);
  (0, import_react.useEffect)(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    const activeRange = docSelectionManagerService.getActiveTextRange();
    if (!activeRange) {
      return;
    }
    if (editing) {
      const body2 = (_a = doc == null ? void 0 : doc.getSelfOrHeaderFooterModel(editing.segmentId)) == null ? void 0 : _a.getBody();
      const matchedRange2 = (_b = body2 == null ? void 0 : body2.customRanges) == null ? void 0 : _b.find((i) => (editing == null ? void 0 : editing.linkId) === i.rangeId && i.startIndex === editing.startIndex && i.endIndex === editing.endIndex);
      if (doc && matchedRange2) {
        setLink((_d = (_c = matchedRange2.properties) == null ? void 0 : _c.url) != null ? _d : "");
        setLabel(BuildTextUtils.transform.getPlainText(getBodySlice(body2, matchedRange2.startIndex, matchedRange2.endIndex + 1).dataStream));
      }
      return;
    }
    const body = (_e = doc == null ? void 0 : doc.getSelfOrHeaderFooterModel(activeRange.segmentId)) == null ? void 0 : _e.getBody();
    const selection = body ? activeRange : null;
    const matchedRange = selection && ((_g = BuildTextUtils.customRange.getCustomRangesInterestsWithSelection(selection, (_f = body == null ? void 0 : body.customRanges) != null ? _f : [])) == null ? void 0 : _g[0]);
    if (doc && matchedRange) {
      setLink((_i = (_h = matchedRange == null ? void 0 : matchedRange.properties) == null ? void 0 : _h.url) != null ? _i : "");
    }
  }, [doc, editing, docSelectionManagerService, univerInstanceService]);
  const handleCancel = () => {
    hyperLinkService.hideEditPopup();
  };
  const handleConfirm = () => {
    setShowError(true);
    if (!isLegal || !doc) {
      return;
    }
    const linkFinal = transformUrl(link);
    if (!editing) {
      commandService.executeCommand(AddDocHyperLinkCommand.id, {
        unitId: doc.getUnitId(),
        payload: linkFinal
      });
    } else {
      if (!label) {
        return;
      }
      commandService.executeCommand(UpdateDocHyperLinkCommand.id, {
        unitId: doc.getUnitId(),
        payload: linkFinal,
        linkId: editing.linkId,
        label,
        segmentId: editing.segmentId
      });
    }
    hyperLinkService.hideEditPopup();
  };
  if (!doc) {
    return;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: index_module_default.docsLinkEdit, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
      editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        FormLayout,
        {
          label: localeService.t("docLink.edit.label"),
          error: showError && !label ? localeService.t("docLink.edit.labelError") : "",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            Input,
            {
              value: label,
              onChange: setLabel,
              autoFocus: true,
              onKeyDown: (evt) => {
                if (evt.keyCode === 13 /* ENTER */) {
                  handleConfirm();
                }
              }
            }
          )
        }
      ) : null,
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        FormLayout,
        {
          label: localeService.t("docLink.edit.address"),
          error: showError && !isLegal ? localeService.t("docLink.edit.addressError") : "",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            Input,
            {
              value: link,
              onChange: setLink,
              autoFocus: true,
              onKeyDown: (evt) => {
                if (evt.keyCode === 13 /* ENTER */) {
                  handleConfirm();
                }
              }
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: index_module_default.docsLinkEditButtons, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        Button,
        {
          className: index_module_default.docsLinkEditButton,
          onClick: handleCancel,
          children: localeService.t("docLink.edit.cancel")
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        Button,
        {
          disabled: !link,
          className: index_module_default.docsLinkEditButton,
          type: "primary",
          onClick: handleConfirm,
          children: localeService.t("docLink.edit.confirm")
        }
      )
    ] })
  ] });
};
DocHyperLinkEdit.componentKey = "docs-hyper-link-edit";

// ../packages/docs-hyper-link-ui/src/commands/commands/delete-link.command.ts
var DeleteDocHyperLinkCommand = {
  type: 0 /* COMMAND */,
  id: "docs.command.delete-hyper-link",
  async handler(accessor, params) {
    if (!params) {
      return false;
    }
    const { unitId, linkId, segmentId } = params;
    const commandService = accessor.get(ICommandService);
    const doMutation = deleteCustomRangeFactory(accessor, { unitId, rangeId: linkId, segmentId });
    if (!doMutation) {
      return false;
    }
    return await commandService.syncExecuteCommand(doMutation.id, doMutation.params);
  }
};

// ../packages/docs-hyper-link-ui/src/commands/operations/popup.operation.ts
var shouldDisableAddLink = (accessor) => {
  const textSelectionService = accessor.get(DocSelectionManagerService);
  const univerInstanceService = accessor.get(IUniverInstanceService);
  const textRanges = textSelectionService.getTextRanges();
  if (!(textRanges == null ? void 0 : textRanges.length)) {
    return true;
  }
  const activeRange = textRanges[0];
  const doc = univerInstanceService.getCurrentUnitForType(O.UNIVER_DOC);
  if (!doc || !activeRange || activeRange.collapsed) {
    return true;
  }
  return false;
};
var ShowDocHyperLinkEditPopupOperation = {
  type: 1 /* OPERATION */,
  id: "doc.operation.show-hyper-link-edit-popup",
  handler(accessor, params) {
    var _a;
    const linkInfo = params == null ? void 0 : params.link;
    const univerInstanceService = accessor.get(IUniverInstanceService);
    if (shouldDisableAddLink(accessor) && !linkInfo) {
      return false;
    }
    const hyperLinkService = accessor.get(DocHyperLinkPopupService);
    const unitId = (linkInfo == null ? void 0 : linkInfo.unitId) || ((_a = univerInstanceService.getCurrentUnitForType(O.UNIVER_DOC)) == null ? void 0 : _a.getUnitId());
    if (!unitId) {
      return false;
    }
    hyperLinkService.showEditPopup(unitId, linkInfo);
    return true;
  }
};
var ToggleDocHyperLinkInfoPopupOperation = {
  type: 1 /* OPERATION */,
  id: "doc.operation.toggle-hyper-link-info-popup",
  handler(accessor, params) {
    const hyperLinkService = accessor.get(DocHyperLinkPopupService);
    if (!params) {
      hyperLinkService.hideInfoPopup();
      return true;
    }
    hyperLinkService.showInfoPopup(params);
    return true;
  }
};
var ClickDocHyperLinkOperation = {
  type: 1 /* OPERATION */,
  id: "doc.operation.click-hyper-link",
  handler(accessor, params) {
    var _a, _b, _c;
    if (!params) {
      return false;
    }
    const { unitId, linkId, segmentId } = params;
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const doc = univerInstanceService.getUnit(unitId, O.UNIVER_DOC);
    const body = doc == null ? void 0 : doc.getSelfOrHeaderFooterModel(segmentId).getBody();
    const link = (_c = (_b = (_a = body == null ? void 0 : body.customRanges) == null ? void 0 : _a.find((range) => range.rangeId === linkId && range.rangeType === 0 /* HYPERLINK */)) == null ? void 0 : _b.properties) == null ? void 0 : _c.url;
    if (link) {
      window.open(link, "_blank", "noopener noreferrer");
    }
    return true;
  }
};

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages/docs-hyper-link-ui/src/views/hyper-link-popup/index.module.less
var index_module_default2 = {
  "docLink": "univer-doc-link",
  "docLinkType": "univer-doc-link-type",
  "docLinkContent": "univer-doc-link-content",
  "docLinkContentError": "univer-doc-link-content-error",
  "docLinkUrl": "univer-doc-link-url",
  "docLinkOperations": "univer-doc-link-operations",
  "docLinkOperation": "univer-doc-link-operation",
  "docLinkOperationError": "univer-doc-link-operation-error"
};

// ../packages/docs-hyper-link-ui/src/views/hyper-link-popup/index.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var DocLinkPopup = () => {
  var _a, _b;
  const hyperLinkService = useDependency(DocHyperLinkPopupService);
  const commandService = useDependency(ICommandService);
  const messageService = useDependency(IMessageService);
  const localeService = useDependency(LocaleService);
  const currentPopup = useObservable(hyperLinkService.showingLink$);
  const univerInstanceService = useDependency(IUniverInstanceService);
  if (!currentPopup) {
    return null;
  }
  const { unitId, linkId, segmentId, startIndex, endIndex } = currentPopup;
  const doc = univerInstanceService.getUnit(unitId, O.UNIVER_DOC);
  const body = doc == null ? void 0 : doc.getSelfOrHeaderFooterModel(segmentId).getBody();
  const link = (_a = body == null ? void 0 : body.customRanges) == null ? void 0 : _a.find((range) => range.rangeId === linkId && range.rangeType === 0 /* HYPERLINK */ && range.startIndex === startIndex && range.endIndex === endIndex);
  if (!link) {
    return null;
  }
  const url = (_b = link.properties) == null ? void 0 : _b.url;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      className: index_module_default2.docLink,
      onClick: () => {
        hyperLinkService.hideInfoPopup();
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: clsx(index_module_default2.docLinkContent), onClick: () => window.open(url), children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: index_module_default2.docLinkType, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(link_single_default, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tooltip, { showIfEllipsis: true, title: url, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: index_module_default2.docLinkUrl, children: url }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: index_module_default2.docLinkOperations, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "div",
            {
              className: clsx(index_module_default2.docLinkOperation),
              onClick: () => {
                navigator.clipboard.writeText(url);
                messageService.show({
                  content: localeService.t("docLink.info.coped"),
                  type: "info" /* Info */
                });
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tooltip, { placement: "bottom", title: localeService.t("docLink.info.copy"), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(copy_single_default, {}) })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "div",
            {
              className: index_module_default2.docLinkOperation,
              onClick: () => {
                commandService.executeCommand(ShowDocHyperLinkEditPopupOperation.id, {
                  link: currentPopup
                });
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tooltip, { placement: "bottom", title: localeService.t("docLink.info.edit"), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(write_single_default, {}) })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "div",
            {
              className: index_module_default2.docLinkOperation,
              onClick: () => {
                commandService.executeCommand(DeleteDocHyperLinkCommand.id, {
                  unitId,
                  linkId: link.rangeId,
                  segmentId
                });
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tooltip, { placement: "bottom", title: localeService.t("docLink.info.cancel"), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(unlink_single_default, {}) })
            }
          )
        ] })
      ]
    }
  );
};
DocLinkPopup.componentKey = "univer.doc.link-info-popup";

// ../packages/docs-hyper-link-ui/src/services/hyper-link-popup.service.ts
var DocHyperLinkPopupService = class extends Disposable {
  constructor(_docCanvasPopupManagerService, _textSelectionManagerService, _univerInstanceService) {
    super();
    this._docCanvasPopupManagerService = _docCanvasPopupManagerService;
    this._textSelectionManagerService = _textSelectionManagerService;
    this._univerInstanceService = _univerInstanceService;
    __publicField(this, "_editingLink$", new BehaviorSubject(null));
    __publicField(this, "_showingLink$", new BehaviorSubject(null));
    __publicField(this, "editingLink$", this._editingLink$.asObservable());
    __publicField(this, "showingLink$", this._showingLink$.asObservable());
    __publicField(this, "_editPopup", null);
    __publicField(this, "_infoPopup", null);
    this.disposeWithMe(() => {
      this._editingLink$.complete();
      this._showingLink$.complete();
    });
  }
  get editing() {
    return this._editingLink$.value;
  }
  get showing() {
    return this._showingLink$.value;
  }
  showEditPopup(unitId, linkInfo) {
    if (this._editPopup) {
      this._editPopup.dispose();
    }
    this._editingLink$.next(linkInfo);
    const textRanges = this._textSelectionManagerService.getTextRanges({ unitId, subUnitId: unitId });
    let activeRange = textRanges == null ? void 0 : textRanges[textRanges.length - 1];
    if (linkInfo) {
      const { segmentId, segmentPage, startIndex, endIndex } = linkInfo;
      activeRange = {
        collapsed: false,
        startOffset: startIndex,
        endOffset: endIndex + 1,
        segmentId,
        segmentPage
      };
      this._textSelectionManagerService.replaceDocRanges([{
        startOffset: startIndex,
        endOffset: endIndex + 1
      }]);
    }
    if (activeRange) {
      this._editPopup = this._docCanvasPopupManagerService.attachPopupToRange(
        activeRange,
        {
          componentKey: DocHyperLinkEdit.componentKey,
          direction: "bottom"
        },
        unitId
      );
      return this._editPopup;
    }
    return null;
  }
  hideEditPopup() {
    var _a;
    this._editingLink$.next(null);
    (_a = this._editPopup) == null ? void 0 : _a.dispose();
  }
  showInfoPopup(info) {
    var _a, _b, _c, _d, _e, _f;
    const { linkId, unitId, segmentId, segmentPage, startIndex, endIndex } = info;
    if (((_a = this.showing) == null ? void 0 : _a.linkId) === linkId && ((_b = this.showing) == null ? void 0 : _b.unitId) === unitId && ((_c = this.showing) == null ? void 0 : _c.segmentId) === segmentId && ((_d = this.showing) == null ? void 0 : _d.segmentPage) === segmentPage && ((_e = this.showing) == null ? void 0 : _e.startIndex) === startIndex && ((_f = this.showing) == null ? void 0 : _f.endIndex) === endIndex) {
      return;
    }
    if (this._infoPopup) {
      this._infoPopup.dispose();
    }
    const doc = this._univerInstanceService.getUnit(unitId, O.UNIVER_DOC);
    if (!doc) {
      return;
    }
    this._showingLink$.next({ unitId, linkId, segmentId, segmentPage, startIndex, endIndex });
    this._infoPopup = this._docCanvasPopupManagerService.attachPopupToRange(
      {
        collapsed: false,
        startOffset: startIndex,
        endOffset: endIndex + 1,
        segmentId,
        segmentPage
      },
      {
        componentKey: DocLinkPopup.componentKey,
        direction: "top-center",
        multipleDirection: "top",
        onClickOutside: () => {
          this.hideInfoPopup();
        }
      },
      unitId
    );
    return this._infoPopup;
  }
  hideInfoPopup() {
    var _a;
    this._showingLink$.next(null);
    (_a = this._infoPopup) == null ? void 0 : _a.dispose();
  }
};
DocHyperLinkPopupService = __decorateClass([
  __decorateParam(0, Inject(DocCanvasPopManagerService)),
  __decorateParam(1, Inject(DocSelectionManagerService)),
  __decorateParam(2, IUniverInstanceService)
], DocHyperLinkPopupService);

// ../packages/docs-hyper-link-ui/src/controllers/doc-hyper-link-selection.controller.ts
var DocHyperLinkSelectionController = class extends Disposable {
  constructor(_commandService, _univerInstanceService, _docHyperLinkService) {
    super();
    this._commandService = _commandService;
    this._univerInstanceService = _univerInstanceService;
    this._docHyperLinkService = _docHyperLinkService;
    this._initSelectionChange();
  }
  _initSelectionChange() {
    this.disposeWithMe(
      this._commandService.onCommandExecuted((commandInfo) => {
        var _a, _b, _c;
        if (commandInfo.id === SetTextSelectionsOperation.id) {
          const params = commandInfo.params;
          const { unitId, ranges, segmentId } = params;
          const doc = this._univerInstanceService.getUnit(unitId, O.UNIVER_DOC);
          const primary = ranges[0];
          if (primary && doc) {
            const { startOffset, endOffset, collapsed, segmentPage } = primary;
            const customRanges = (_b = (_a = doc.getSelfOrHeaderFooterModel(segmentId)) == null ? void 0 : _a.getBody()) == null ? void 0 : _b.customRanges;
            if (collapsed) {
              const index = (_c = customRanges == null ? void 0 : customRanges.findIndex((value) => value.startIndex < startOffset && value.endIndex > endOffset - 1)) != null ? _c : -1;
              if (index > -1) {
                const customRange = customRanges[index];
                this._docHyperLinkService.showInfoPopup({ unitId, linkId: customRange.rangeId, segmentId, segmentPage, startIndex: customRange.startIndex, endIndex: customRange.endIndex });
                return;
              }
            } else {
              const range = customRanges == null ? void 0 : customRanges.find((value) => value.startIndex <= startOffset && value.endIndex >= endOffset - 1);
              if (range) {
                return;
              }
            }
          }
          this._docHyperLinkService.hideInfoPopup();
          this._docHyperLinkService.hideEditPopup();
        }
      })
    );
  }
};
DocHyperLinkSelectionController = __decorateClass([
  __decorateParam(0, ICommandService),
  __decorateParam(1, IUniverInstanceService),
  __decorateParam(2, Inject(DocHyperLinkPopupService))
], DocHyperLinkSelectionController);

// ../packages/docs-hyper-link-ui/src/controllers/render-controllers/hyper-link-event.render-controller.ts
var DocHyperLinkEventRenderController = class extends Disposable {
  constructor(_context, _docEventManagerService, _commandService, _hyperLinkPopupService, _docSkeletonManagerService, _docSelectionManagerService) {
    super();
    this._context = _context;
    this._docEventManagerService = _docEventManagerService;
    this._commandService = _commandService;
    this._hyperLinkPopupService = _hyperLinkPopupService;
    this._docSkeletonManagerService = _docSkeletonManagerService;
    this._docSelectionManagerService = _docSelectionManagerService;
    if (this._context.unitId === DOCS_ZEN_EDITOR_UNIT_ID_KEY || this._context.unitId === DOCS_NORMAL_EDITOR_UNIT_ID_KEY) {
      return;
    }
    this._initHover();
    this._initClick();
  }
  get _skeleton() {
    return this._docSkeletonManagerService.getSkeleton();
  }
  _hideInfoPopup() {
    if (this._hyperLinkPopupService.showing) {
      this._commandService.executeCommand(
        ToggleDocHyperLinkInfoPopupOperation.id
      );
    }
  }
  _initHover() {
    this.disposeWithMe(
      this._docEventManagerService.hoverCustomRanges$.subscribe((ranges) => {
        var _a;
        const link = ranges.find((range) => range.range.rangeType === 0 /* HYPERLINK */);
        const activeRanges = this._docSelectionManagerService.getTextRanges();
        const currentSegmentId = activeRanges == null ? void 0 : activeRanges[0].segmentId;
        if (((_a = link == null ? void 0 : link.segmentId) != null ? _a : "") !== currentSegmentId) {
          this._hideInfoPopup();
          return;
        }
        if (link) {
          this._commandService.executeCommand(
            ToggleDocHyperLinkInfoPopupOperation.id,
            {
              unitId: this._context.unitId,
              linkId: link.range.rangeId,
              segmentId: link.segmentId,
              segmentPage: link.segmentPageIndex,
              rangeId: link.range.rangeId,
              startIndex: link.range.startIndex,
              endIndex: link.range.endIndex
            }
          );
        } else {
          this._hideInfoPopup();
        }
      })
    );
  }
  _initClick() {
    this.disposeWithMe(
      this._docEventManagerService.clickCustomRanges$.subscribe((range) => {
        const link = range.range;
        if (link) {
          this._commandService.executeCommand(
            ClickDocHyperLinkOperation.id,
            {
              unitId: this._context.unitId,
              linkId: link.rangeId,
              segmentId: range.segmentId
            }
          );
        }
      })
    );
  }
};
DocHyperLinkEventRenderController = __decorateClass([
  __decorateParam(1, Inject(DocEventManagerService)),
  __decorateParam(2, ICommandService),
  __decorateParam(3, Inject(DocHyperLinkPopupService)),
  __decorateParam(4, Inject(DocSkeletonManagerService)),
  __decorateParam(5, Inject(DocSelectionManagerService))
], DocHyperLinkEventRenderController);

// ../packages/docs-hyper-link-ui/src/controllers/render-controllers/render.controller.ts
var DocHyperLinkRenderController = class extends Disposable {
  constructor(_context, _docInterceptorService, _hyperLinkService, _docRenderController) {
    super();
    this._context = _context;
    this._docInterceptorService = _docInterceptorService;
    this._hyperLinkService = _hyperLinkService;
    this._docRenderController = _docRenderController;
    this._init();
    this._initReRender();
  }
  _init() {
    this._docInterceptorService.intercept(DOC_INTERCEPTOR_POINT.CUSTOM_RANGE, {
      handler: (data, pos, next) => {
        if (!data) {
          return next(data);
        }
        const { unitId, index } = pos;
        const activeLink = this._hyperLinkService.showing;
        if (!activeLink) {
          return next({
            ...data,
            active: false
          });
        }
        const { linkId, unitId: linkUnitId, startIndex, endIndex } = activeLink;
        const isActive = linkUnitId === unitId && data.rangeId === linkId && index >= startIndex && index <= endIndex;
        return next({
          ...data,
          active: isActive
        });
      }
    });
  }
  _initReRender() {
    this.disposeWithMe(this._hyperLinkService.showingLink$.pipe(
      distinctUntilChanged((prev, aft) => (prev == null ? void 0 : prev.linkId) === (aft == null ? void 0 : aft.linkId) && (prev == null ? void 0 : prev.unitId) === (aft == null ? void 0 : aft.unitId) && (prev == null ? void 0 : prev.startIndex) === (aft == null ? void 0 : aft.startIndex)),
      pairwise()
    ).subscribe(([preLink, link]) => {
      if (link) {
        if (link.unitId === this._context.unitId) {
          this._docRenderController.reRender(link.unitId);
        }
      } else {
        if (preLink && preLink.unitId === this._context.unitId) {
          this._docRenderController.reRender(preLink.unitId);
        }
      }
    }));
  }
};
DocHyperLinkRenderController = __decorateClass([
  __decorateParam(1, Inject(DocInterceptorService)),
  __decorateParam(2, Inject(DocHyperLinkPopupService)),
  __decorateParam(3, Inject(DocRenderController))
], DocHyperLinkRenderController);

// ../packages/docs-hyper-link-ui/src/controllers/menu.ts
var DOC_LINK_ICON = "doc-hyper-link-icon";
function AddHyperLinkMenuItemFactory(accessor) {
  return {
    id: ShowDocHyperLinkEditPopupOperation.id,
    type: 0 /* BUTTON */,
    icon: DOC_LINK_ICON,
    title: "docLink.menu.tooltip",
    tooltip: "docLink.menu.tooltip",
    hidden$: getMenuHiddenObservable(accessor, O.UNIVER_DOC),
    disabled$: new Observable(function(subscribe) {
      const textSelectionService = accessor.get(DocSelectionManagerService);
      const observer = textSelectionService.textSelection$.pipe(debounceTime(16)).subscribe(() => {
        subscribe.next(shouldDisableAddLink(accessor));
      });
      return () => {
        observer.unsubscribe();
      };
    })
  };
}
var addLinkShortcut = {
  id: ShowDocHyperLinkEditPopupOperation.id,
  binding: 4096 /* CTRL_COMMAND */ | 75 /* K */,
  description: "docLink.menu.tooltip",
  preconditions: whenDocAndEditorFocused
};

// ../packages/docs-hyper-link-ui/src/controllers/menu.schema.ts
var menuSchema = {
  ["ribbon.start.others" /* OTHERS */]: {
    [ShowDocHyperLinkEditPopupOperation.id]: {
      order: 0,
      menuItemFactory: AddHyperLinkMenuItemFactory
    }
  },
  ["contextMenu.mainArea" /* MAIN_AREA */]: {
    ["contextMenu.data" /* DATA */]: {
      [ShowDocHyperLinkEditPopupOperation.id]: {
        order: 0,
        menuItemFactory: AddHyperLinkMenuItemFactory
      }
    }
  }
};

// ../packages/docs-hyper-link-ui/src/controllers/ui.controller.ts
var DocHyperLinkUIController = class extends Disposable {
  constructor(_componentManager, _commandService, _menuManagerService, _shortcutService) {
    super();
    this._componentManager = _componentManager;
    this._commandService = _commandService;
    this._menuManagerService = _menuManagerService;
    this._shortcutService = _shortcutService;
    this._initComponents();
    this._initCommands();
    this._initMenus();
    this._initShortcut();
  }
  _initComponents() {
    [
      [DocHyperLinkEdit, DocHyperLinkEdit.componentKey],
      [DocLinkPopup, DocLinkPopup.componentKey],
      [link_single_default, DOC_LINK_ICON]
    ].forEach(([comp, key]) => {
      this._componentManager.register(key, comp);
    });
  }
  _initCommands() {
    [
      AddDocHyperLinkCommand,
      UpdateDocHyperLinkCommand,
      DeleteDocHyperLinkCommand,
      ShowDocHyperLinkEditPopupOperation,
      ToggleDocHyperLinkInfoPopupOperation,
      ClickDocHyperLinkOperation
    ].forEach((command) => {
      this._commandService.registerCommand(command);
    });
  }
  _initShortcut() {
    [addLinkShortcut].forEach((shortcut) => {
      this._shortcutService.registerShortcut(shortcut);
    });
  }
  _initMenus() {
    this._menuManagerService.mergeMenu(menuSchema);
  }
};
DocHyperLinkUIController = __decorateClass([
  __decorateParam(0, Inject(ComponentManager)),
  __decorateParam(1, ICommandService),
  __decorateParam(2, IMenuManagerService),
  __decorateParam(3, IShortcutService)
], DocHyperLinkUIController);

// ../packages/docs-hyper-link-ui/src/types/const/index.ts
var DOC_HYPER_LINK_UI_PLUGIN = "DOC_HYPER_LINK_UI_PLUGIN";

// ../packages/docs-hyper-link-ui/src/plugin.ts
var UniverDocsHyperLinkUIPlugin = class extends Plugin {
  constructor(_config = defaultPluginConfig2, _injector, _renderManagerSrv, _configService) {
    super();
    this._config = _config;
    this._injector = _injector;
    this._renderManagerSrv = _renderManagerSrv;
    this._configService = _configService;
    const { menu, ...rest } = merge_default(
      {},
      defaultPluginConfig2,
      this._config
    );
    if (menu) {
      this._configService.setConfig("menu", menu, { merge: true });
    }
    this._configService.setConfig(DOCS_HYPER_LINK_UI_PLUGIN_CONFIG_KEY, rest);
  }
  onStarting() {
    const deps = [
      [DocHyperLinkPopupService],
      [DocHyperLinkUIController],
      [DocHyperLinkSelectionController]
    ];
    deps.forEach((dep) => {
      this._injector.add(dep);
    });
    this._injector.get(DocHyperLinkUIController);
  }
  onReady() {
    this._injector.get(DocHyperLinkSelectionController);
  }
  onRendered() {
    this._initRenderModule();
  }
  _initRenderModule() {
    [
      [DocHyperLinkRenderController],
      [DocHyperLinkEventRenderController]
    ].forEach((dep) => {
      this._renderManagerSrv.registerRenderModule(O.UNIVER_DOC, dep);
    });
  }
};
__publicField(UniverDocsHyperLinkUIPlugin, "pluginName", DOC_HYPER_LINK_UI_PLUGIN);
__publicField(UniverDocsHyperLinkUIPlugin, "type", O.UNIVER_DOC);
UniverDocsHyperLinkUIPlugin = __decorateClass([
  DependentOn(UniverDocsHyperLinkPlugin),
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IRenderManagerService),
  __decorateParam(3, IConfigService)
], UniverDocsHyperLinkUIPlugin);

// ../packages/docs-quick-insert-ui/src/commands/commands/doc-quick-insert.command.ts
var DeleteSearchKeyCommand = {
  id: "doc.command.delete-search-key",
  type: 0 /* COMMAND */,
  handler: (accessor, params) => {
    const commandService = accessor.get(ICommandService);
    const { start, end } = params;
    return commandService.syncExecuteCommand(CutContentCommand.id, {
      segmentId: "",
      textRanges: [{
        startOffset: start,
        endOffset: start,
        collapsed: true
      }],
      selections: [{
        startOffset: start,
        endOffset: end,
        collapsed: false,
        direction: "forward" /* FORWARD */
      }]
    });
  }
};

// ../packages/docs-quick-insert-ui/src/views/KeywordInputPlaceholder.tsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var KeywordInputPlaceholderComponentKey = "docs.quick.insert.keyword-input-placeholder";
var KeywordInputPlaceholder = () => {
  const localeService = useDependency(LocaleService);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "univer-translate-y-1.5 univer-text-sm univer-text-gray-500", children: localeService.t("docQuickInsert.keywordInputPlaceholder") });
};
KeywordInputPlaceholder.componentKey = KeywordInputPlaceholderComponentKey;

// ../packages/docs-quick-insert-ui/src/views/QuickInsertPopup.tsx
var import_react2 = __toESM(require_react());

// ../packages/docs-quick-insert-ui/src/views/QuickInsertPlaceholder.tsx
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var QuickInsertPlaceholderComponentKey = "docs.quick.insert.placeholder";
var QuickInsertPlaceholder = () => {
  const localeService = useDependency(LocaleService);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "div",
    {
      className: `
              univer-flex univer-h-full univer-items-center univer-justify-center univer-rounded-lg univer-bg-white
              univer-px-12 univer-py-6 univer-text-gray-400
            `,
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: localeService.t("docQuickInsert.placeholder") })
    }
  );
};
QuickInsertPlaceholder.componentKey = QuickInsertPlaceholderComponentKey;

// ../packages/docs-quick-insert-ui/src/views/QuickInsertPopup.tsx
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
function filterMenusByKeyword(menus, keyword) {
  return menus.map((menu) => ({ ...menu })).filter((menu) => {
    if ("children" in menu) {
      menu.children = filterMenusByKeyword(menu.children, keyword);
      return menu.children.length > 0;
    }
    const keywords = menu.keywords;
    if (keywords) {
      return keywords.some((word) => word.includes(keyword));
    }
    return menu.title.toLowerCase().includes(keyword);
  });
}
function translateMenus(menus, localeService) {
  return menus.map((_menu) => {
    const menu = { ..._menu };
    if ("children" in menu) {
      menu.children = translateMenus(menu.children, localeService);
    }
    menu.title = localeService.t(menu.title);
    if ("keywords" in menu) {
      menu.keywords = menu.keywords.concat(menu.title).map((word) => word.toLowerCase());
    }
    return menu;
  });
}
var interceptKeys = [38 /* ARROW_UP */, 40 /* ARROW_DOWN */, 13 /* ENTER */];
var QuickInsertPopup = () => {
  const localeService = useDependency(LocaleService);
  const docQuickInsertPopupService = useDependency(DocQuickInsertPopupService);
  const componentManager = useDependency(ComponentManager);
  const shortcutService = useDependency(IShortcutService);
  const commandService = useDependency(ICommandService);
  const id = (0, import_react2.useMemo)(() => generateRandomId(), []);
  const [focusedMenuIndex, setFocusedMenuIndex] = (0, import_react2.useState)(0);
  const focusedMenuRef = (0, import_react2.useRef)(null);
  const menuIndexAccumulator = (0, import_react2.useRef)(0);
  menuIndexAccumulator.current = 0;
  const filterKeyword = useObservable(docQuickInsertPopupService.filterKeyword$, "");
  const currentPopup = useObservable(docQuickInsertPopupService.editPopup$);
  const menus = useObservable(currentPopup == null ? void 0 : currentPopup.popup.menus$, []);
  const translatedMenus = (0, import_react2.useMemo)(() => {
    return translateMenus(menus, localeService);
  }, [menus]);
  const [filteredMenus, setFilteredMenus] = (0, import_react2.useState)(() => {
    return filterMenusByKeyword(translatedMenus, filterKeyword.toLowerCase());
  });
  (0, import_react2.useEffect)(() => {
    const id2 = requestIdleCallback(() => {
      setFilteredMenus(filterMenusByKeyword(translatedMenus, filterKeyword.toLowerCase()));
    });
    return () => {
      cancelIdleCallback(id2);
    };
  }, [translatedMenus, filterKeyword]);
  const handleMenuSelect = (menu) => {
    docQuickInsertPopupService.emitMenuSelected(menu);
    commandService.executeCommand(CloseQuickInsertPopupOperation.id);
  };
  (0, import_react2.useEffect)(() => {
    const disposableCollection = new DisposableCollection();
    const shortcutItems = shortcutService.getAllShortcuts();
    const interceptedShortcutItems = shortcutItems.filter((item) => item.binding && interceptKeys.includes(item.binding));
    interceptedShortcutItems.forEach((item) => {
      const rawPreconditions = item.preconditions;
      item.preconditions = () => false;
      disposableCollection.add(toDisposable(() => {
        item.preconditions = rawPreconditions;
      }));
    });
    const enterCommand = {
      id: `quick.insert.popup.enter.${id}`,
      type: 1 /* OPERATION */,
      handler: () => {
        const menu = focusedMenuRef.current;
        if (menu) {
          handleMenuSelect(menu);
        }
      }
    };
    const moveCursorUpCommand = {
      id: `quick.insert.popup.move.cursor.up.${id}`,
      type: 1 /* OPERATION */,
      handler: () => {
        setFocusedMenuIndex((index) => {
          const nextIndex = index - 1;
          return nextIndex >= 0 ? nextIndex : menuIndexAccumulator.current - 1;
        });
      }
    };
    const moveCursorDownCommand = {
      id: `quick.insert.popup.move.cursor.down.${id}`,
      type: 1 /* OPERATION */,
      handler: () => {
        setFocusedMenuIndex((index) => {
          const nextIndex = index + 1;
          return nextIndex <= menuIndexAccumulator.current - 1 ? nextIndex : 0;
        });
      }
    };
    disposableCollection.add(commandService.registerCommand(moveCursorUpCommand));
    disposableCollection.add(commandService.registerCommand(moveCursorDownCommand));
    disposableCollection.add(commandService.registerCommand(enterCommand));
    disposableCollection.add(shortcutService.registerShortcut({
      priority: 1e3,
      id: moveCursorUpCommand.id,
      binding: 38 /* ARROW_UP */,
      preconditions: () => true,
      staticParameters: {
        direction: 0 /* UP */
      }
    }));
    disposableCollection.add(shortcutService.registerShortcut({
      priority: 1e3,
      id: moveCursorDownCommand.id,
      binding: 40 /* ARROW_DOWN */,
      preconditions: () => true,
      staticParameters: {
        direction: 2 /* DOWN */
      }
    }));
    disposableCollection.add(shortcutService.registerShortcut({
      priority: 1e3,
      id: enterCommand.id,
      binding: 13 /* ENTER */,
      preconditions: () => true
    }));
    return () => {
      disposableCollection.dispose();
    };
  }, []);
  (0, import_react2.useEffect)(() => {
    setFocusedMenuIndex(0);
  }, [filteredMenus]);
  function renderMenus(menus2) {
    return menus2.map((menu) => {
      const iconKey = menu.icon;
      const Icon = iconKey ? componentManager.get(iconKey) : null;
      if ("children" in menu) {
        return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          MenuItemGroup,
          {
            title: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
              "div",
              {
                className: `
                                  univer-mb-2 univer-flex univer-items-center univer-text-xs univer-text-gray-400
                                `,
                children: [
                  Icon && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "univer-mr-2 univer-inline-flex univer-text-base", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Icon, {}) }),
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: menu.title })
                ]
              }
            ),
            children: renderMenus(menu.children)
          },
          menu.id
        );
      }
      const currentMenuIndex = menuIndexAccumulator.current;
      const isFocused = focusedMenuIndex === currentMenuIndex;
      if (isFocused) {
        focusedMenuRef.current = menu;
      }
      menuIndexAccumulator.current++;
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        MenuItem,
        {
          onMouseEnter: () => setFocusedMenuIndex(currentMenuIndex),
          onMouseLeave: () => setFocusedMenuIndex(Number.NaN),
          className: clsx("univer-text-sm", {
            "hover:univer-bg-transparent": !isFocused,
            "univer-bg-gray-100": isFocused
          }),
          onClick: () => {
            handleMenuSelect(menu);
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "univer-flex univer-items-center univer-px-1", children: [
            Icon && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "univer-mr-2 univer-inline-flex univer-text-base", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Icon, {}) }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: menu.title })
          ] })
        },
        menu.id
      );
    });
  }
  const hasMenus = filteredMenus.length > 0;
  const Placeholder = (currentPopup == null ? void 0 : currentPopup.popup.Placeholder) || componentManager.get(QuickInsertPlaceholder.componentKey);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "div",
    {
      className: clsx(`
              univer-rounded-lg univer-border univer-border-solid univer-border-gray-100
              univer-shadow-[0_0_10px_0_rgba(0,0,0,0.1)]
            `),
      children: hasMenus ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "univer-max-h-[360px] univer-w-[220px] univer-overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Menu, { children: renderMenus(filteredMenus) }) }) : Placeholder && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Placeholder, {})
    }
  );
};
QuickInsertPopup.componentKey = "docs.quick.insert.popup";

// ../packages/docs-quick-insert-ui/src/services/doc-quick-insert-popup.service.ts
var DocQuickInsertPopupService = class extends Disposable {
  constructor(_docCanvasPopupManagerService, _univerInstanceService, _commandService) {
    super();
    this._docCanvasPopupManagerService = _docCanvasPopupManagerService;
    this._univerInstanceService = _univerInstanceService;
    this._commandService = _commandService;
    __publicField(this, "_popups", /* @__PURE__ */ new Set());
    __publicField(this, "_editPopup$", new BehaviorSubject(void 0));
    __publicField(this, "editPopup$", this._editPopup$.asObservable());
    __publicField(this, "_inputOffset$", new BehaviorSubject({ start: 0, end: 0 }));
    __publicField(this, "inputOffset$", this._inputOffset$.asObservable());
    __publicField(this, "filterKeyword$");
    __publicField(this, "_menuSelectedCallbacks", /* @__PURE__ */ new Set());
    __publicField(this, "_inputPlaceholderRenderRoot", null);
    this.disposeWithMe(this._editPopup$);
    const getBodySlice2 = (start, end) => {
      var _a, _b;
      return (_b = (_a = this._univerInstanceService.getCurrentUnitOfType(O.UNIVER_DOC)) == null ? void 0 : _a.getBody()) == null ? void 0 : _b.dataStream.slice(start, end);
    };
    this.filterKeyword$ = this._inputOffset$.pipe(
      map((offset) => {
        var _a;
        const slice = getBodySlice2(offset.start, offset.end);
        return (_a = slice == null ? void 0 : slice.slice(1)) != null ? _a : "";
      }),
      distinctUntilChanged()
    );
    this.disposeWithMe(combineLatest([
      this.filterKeyword$.pipe(tap((filterKeyword) => {
        var _a, _b, _c;
        if (filterKeyword.length > 0) {
          (_b = (_a = this._inputPlaceholderRenderRoot) == null ? void 0 : _a.unmount) == null ? void 0 : _b.dispose();
        } else {
          (_c = this._inputPlaceholderRenderRoot) == null ? void 0 : _c.mount();
        }
      })),
      this.editPopup$.pipe(tap((popup) => {
        var _a, _b;
        if (!popup) {
          (_b = (_a = this._inputPlaceholderRenderRoot) == null ? void 0 : _a.unmount) == null ? void 0 : _b.dispose();
        }
      }))
    ]).subscribe());
  }
  get editPopup() {
    return this._editPopup$.value;
  }
  get inputOffset() {
    return this._inputOffset$.value;
  }
  setInputOffset(offset) {
    this._inputOffset$.next(offset);
  }
  resolvePopup(keyword) {
    return Array.from(this._popups).find((popup) => popup.keyword === keyword);
  }
  registerPopup(popup) {
    this._popups.add(popup);
    return () => {
      this._popups.delete(popup);
    };
  }
  _createInputPlaceholderRenderRoot(mount) {
    const renderRoot = {
      mount() {
        this.unmount = mount();
      }
    };
    return renderRoot;
  }
  showPopup(options) {
    const { popup, index, unitId } = options;
    this.closePopup();
    const disposable = this._docCanvasPopupManagerService.attachPopupToRange(
      { startOffset: index, endOffset: index, collapsed: true },
      {
        componentKey: QuickInsertPopup.componentKey,
        onClickOutside: () => {
          this.closePopup();
        },
        direction: "bottom"
      },
      unitId
    );
    this._inputPlaceholderRenderRoot = this._createInputPlaceholderRenderRoot(() => {
      const disposable2 = this._docCanvasPopupManagerService.attachPopupToRange(
        { startOffset: index + 1, endOffset: index + 1, collapsed: false },
        {
          componentKey: KeywordInputPlaceholder.componentKey,
          onClickOutside: () => {
            disposable2.dispose();
          },
          direction: "horizontal"
        },
        unitId
      );
      return disposable2;
    });
    this._inputPlaceholderRenderRoot.mount();
    this._editPopup$.next({ disposable, popup, anchor: index, unitId });
  }
  closePopup() {
    if (this.editPopup) {
      this.editPopup.disposable.dispose();
      this._editPopup$.next(null);
    }
  }
  onMenuSelected(callback) {
    this._menuSelectedCallbacks.add(callback);
    return () => {
      this._menuSelectedCallbacks.delete(callback);
    };
  }
  emitMenuSelected(menu) {
    const { start, end } = this.inputOffset;
    this._commandService.syncExecuteCommand(DeleteSearchKeyCommand.id, {
      start,
      end
    });
    setTimeout(() => {
      this._menuSelectedCallbacks.forEach((callback) => callback(menu));
    }, 0);
  }
};
DocQuickInsertPopupService = __decorateClass([
  __decorateParam(0, Inject(DocCanvasPopManagerService)),
  __decorateParam(1, Inject(IUniverInstanceService)),
  __decorateParam(2, Inject(ICommandService))
], DocQuickInsertPopupService);

// ../packages/docs-quick-insert-ui/src/commands/operations/quick-insert-popup.operation.ts
var ShowQuickInsertPopupOperation = {
  type: 1 /* OPERATION */,
  id: "doc.operation.show-quick-insert-popup",
  handler(accessor, params) {
    const docQuickInsertPopupService = accessor.get(DocQuickInsertPopupService);
    if (!params) {
      return false;
    }
    docQuickInsertPopupService.showPopup(params);
    return true;
  }
};
var CloseQuickInsertPopupOperation = {
  type: 1 /* OPERATION */,
  id: "doc.operation.close-quick-insert-popup",
  handler(accessor) {
    const docQuickInsertPopupService = accessor.get(DocQuickInsertPopupService);
    docQuickInsertPopupService.closePopup();
    return true;
  }
};

// ../packages/docs-quick-insert-ui/src/controllers/built-in-menus.ts
var textMenu = {
  id: "quick-insert.text.menu",
  title: "docQuickInsert.menu.text",
  icon: "TextSingle",
  keywords: ["text"]
};
var numberedListMenu = {
  id: OrderListCommand.id,
  title: "docQuickInsert.menu.numberedList",
  icon: "OrderSingle",
  keywords: ["numbered", "list", "ordered"]
};
var bulletedListMenu = {
  id: BulletListCommand.id,
  title: "docQuickInsert.menu.bulletedList",
  icon: "UnorderSingle",
  keywords: ["bulleted", "list", "unordered"]
};
var dividerMenu = {
  id: HorizontalLineCommand.id,
  title: "docQuickInsert.menu.divider",
  icon: "DividerSingle",
  keywords: ["divider", "line", "separate"]
};
var builtInMenus = [
  {
    title: "docQuickInsert.group.basics",
    id: "quick.insert.group.basic" /* Basic */,
    children: [
      textMenu,
      numberedListMenu,
      bulletedListMenu,
      dividerMenu
    ]
  }
];
var builtInMenuCommandIds = /* @__PURE__ */ new Set([
  numberedListMenu.id,
  bulletedListMenu.id,
  dividerMenu.id
]);

// ../packages/docs-quick-insert-ui/src/controllers/doc-quick-insert-trigger.controller.ts
var DocQuickInsertTriggerController = class extends Disposable {
  constructor(_commandService, _textSelectionManagerService, _docQuickInsertPopupService, _shortcutService) {
    super();
    this._commandService = _commandService;
    this._textSelectionManagerService = _textSelectionManagerService;
    this._docQuickInsertPopupService = _docQuickInsertPopupService;
    this._shortcutService = _shortcutService;
    this.disposeWithMe(this._shortcutService.registerShortcut({
      id: CloseQuickInsertPopupOperation.id,
      binding: 27 /* ESC */,
      preconditions: () => Boolean(this._docQuickInsertPopupService.editPopup),
      priority: 1e3
    }));
    this._initTrigger();
    this._initMenuHandler();
  }
  _initTrigger() {
    this.disposeWithMe(
      // eslint-disable-next-line complexity
      this._commandService.onCommandExecuted((commandInfo) => {
        var _a, _b, _c;
        const { _docQuickInsertPopupService, _textSelectionManagerService, _commandService } = this;
        if (commandInfo.id === InsertCommand.id) {
          const params = commandInfo.params;
          if (_docQuickInsertPopupService.editPopup) {
            _docQuickInsertPopupService.setInputOffset({
              start: _docQuickInsertPopupService.inputOffset.start,
              end: params.range.endOffset + 1
            });
            return;
          }
          const activeRange = _textSelectionManagerService.getActiveTextRange();
          if (!activeRange) {
            return;
          }
          const popup = _docQuickInsertPopupService.resolvePopup(params.body.dataStream);
          if (!popup) {
            return;
          }
          const available = popup.preconditions ? popup.preconditions(params) : true;
          if (!available) {
            return;
          }
          _docQuickInsertPopupService.setInputOffset({ start: activeRange.startOffset - 1, end: activeRange.startOffset });
          setTimeout(() => {
            _commandService.executeCommand(ShowQuickInsertPopupOperation.id, {
              index: activeRange.startOffset - 1,
              unitId: params.unitId,
              popup
            });
          }, 100);
        }
        if (commandInfo.id === RichTextEditingMutation.id) {
          const params = commandInfo.params;
          if (params.isCompositionEnd) {
            const endOffset = (_b = (_a = params.textRanges) == null ? void 0 : _a[0]) == null ? void 0 : _b.endOffset;
            if (endOffset) {
              _docQuickInsertPopupService.setInputOffset({ start: _docQuickInsertPopupService.inputOffset.start, end: endOffset });
            }
          }
        }
        if (commandInfo.id === DeleteCommand.id) {
          const params = commandInfo.params;
          if (_docQuickInsertPopupService.editPopup && params.direction === 0 /* LEFT */) {
            const len = (_c = params.len) != null ? _c : 0;
            _docQuickInsertPopupService.setInputOffset({ start: _docQuickInsertPopupService.inputOffset.start, end: params.range.endOffset - len });
          }
        }
        if (commandInfo.id === MoveCursorOperation.id) {
          const params = commandInfo.params;
          if (params.direction === 3 /* LEFT */ || params.direction === 1 /* RIGHT */) {
            _docQuickInsertPopupService.editPopup && _commandService.executeCommand(CloseQuickInsertPopupOperation.id);
          }
        }
        if (commandInfo.id === DeleteLeftCommand.id) {
          const activeRange = _textSelectionManagerService.getActiveTextRange();
          if (!_docQuickInsertPopupService.editPopup || !activeRange) {
            return;
          }
          if (activeRange.endOffset <= _docQuickInsertPopupService.editPopup.anchor) {
            _commandService.executeCommand(CloseQuickInsertPopupOperation.id);
          }
        }
      })
    );
  }
  _initMenuHandler() {
    this.disposeWithMe(this._docQuickInsertPopupService.onMenuSelected((menu) => {
      if (menu.id === textMenu.id) {
        return;
      }
      if (builtInMenuCommandIds.has(menu.id)) {
        this._commandService.executeCommand(menu.id);
      }
    }));
  }
};
DocQuickInsertTriggerController = __decorateClass([
  __decorateParam(0, ICommandService),
  __decorateParam(1, Inject(DocSelectionManagerService)),
  __decorateParam(2, Inject(DocQuickInsertPopupService)),
  __decorateParam(3, Inject(IShortcutService))
], DocQuickInsertTriggerController);

// ../packages/docs-quick-insert-ui/src/controllers/doc-quick-insert-ui.controller.ts
var DocQuickInsertUIController = class extends Disposable {
  constructor(_commandService, _docQuickInsertPopupService, _componentManager) {
    super();
    this._commandService = _commandService;
    this._docQuickInsertPopupService = _docQuickInsertPopupService;
    this._componentManager = _componentManager;
    this._initCommands();
    this._initComponents();
    this._initMenus();
  }
  _initCommands() {
    [
      DeleteSearchKeyCommand,
      ShowQuickInsertPopupOperation,
      CloseQuickInsertPopupOperation
    ].forEach((operation) => {
      this.disposeWithMe(this._commandService.registerCommand(operation));
    });
  }
  _initComponents() {
    [
      [QuickInsertPopup.componentKey, QuickInsertPopup],
      [KeywordInputPlaceholder.componentKey, KeywordInputPlaceholder],
      [QuickInsertPlaceholder.componentKey, QuickInsertPlaceholder],
      [divider_single_default.displayName, divider_single_default],
      [text_single_default.displayName, text_single_default]
    ].forEach(([name, component]) => {
      if (name) {
        this.disposeWithMe(this._componentManager.register(name, component));
      }
    });
    const popups = [
      {
        keyword: "/",
        menus$: of(builtInMenus),
        // only show when the cursor is at the beginning of a line
        preconditions: (params) => {
          var _a;
          return ((_a = params.range.startNodePosition) == null ? void 0 : _a.glyph) === 0;
        }
      }
    ];
    popups.forEach((popup) => {
      this.disposeWithMe(this._docQuickInsertPopupService.registerPopup(popup));
    });
  }
  _initMenus() {
  }
};
DocQuickInsertUIController = __decorateClass([
  __decorateParam(0, ICommandService),
  __decorateParam(1, Inject(DocQuickInsertPopupService)),
  __decorateParam(2, Inject(ComponentManager))
], DocQuickInsertUIController);

// ../packages/docs-quick-insert-ui/src/plugin.ts
var PLUGIN_NAME = "DOC_QUICK_INSERT_UI_PLUGIN";
var UniverDocsQuickInsertUIPlugin = class extends Plugin {
  constructor(_injector) {
    super();
    this._injector = _injector;
  }
  onStarting() {
    const dependencies = [
      [DocQuickInsertUIController],
      [DocQuickInsertTriggerController],
      [DocQuickInsertPopupService]
    ];
    dependencies.forEach((dependency) => this._injector.add(dependency));
    this._injector.get(DocQuickInsertUIController);
  }
  onRendered() {
    this._injector.get(DocQuickInsertTriggerController);
    this._injector.get(DocQuickInsertPopupService);
  }
};
__publicField(UniverDocsQuickInsertUIPlugin, "type", O.UNIVER_DOC);
__publicField(UniverDocsQuickInsertUIPlugin, "pluginName", PLUGIN_NAME);
UniverDocsQuickInsertUIPlugin = __decorateClass([
  DependentOn(UniverDrawingUIPlugin, UniverDrawingPlugin, UniverDocsDrawingPlugin, UniverUIPlugin),
  __decorateParam(0, Inject(Injector))
], UniverDocsQuickInsertUIPlugin);

// ../packages/docs-thread-comment-ui/src/common/const.ts
var PLUGIN_NAME2 = "DOC_THREAD_COMMENT_UI_PLUGIN";
var DEFAULT_DOC_SUBUNIT_ID = "default_doc";

// ../packages/docs-thread-comment-ui/src/controllers/config.schema.ts
var DOCS_THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY = "docs-thread-comment-ui.config";
var configSymbol3 = Symbol(DOCS_THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY);
var defaultPluginConfig3 = {};

// ../packages/docs-thread-comment-ui/src/services/doc-thread-comment.service.ts
var DocThreadCommentService = class extends Disposable {
  constructor(_sidebarService, _threadCommentPanelService) {
    super();
    this._sidebarService = _sidebarService;
    this._threadCommentPanelService = _threadCommentPanelService;
    __publicField(this, "_addingComment$", new BehaviorSubject(void 0));
    __publicField(this, "addingComment$", this._addingComment$.asObservable());
    this.disposeWithMe(() => {
      this._addingComment$.complete();
    });
  }
  get addingComment() {
    return this._addingComment$.getValue();
  }
  startAdd(comment) {
    this._addingComment$.next(comment);
  }
  endAdd() {
    this._addingComment$.next(void 0);
  }
};
DocThreadCommentService = __decorateClass([
  __decorateParam(0, ISidebarService),
  __decorateParam(1, Inject(ThreadCommentPanelService))
], DocThreadCommentService);

// ../packages/docs-thread-comment-ui/src/views/doc-thread-comment-panel/index.tsx
var import_react3 = __toESM(require_react());

// ../packages/docs-thread-comment-ui/src/commands/commands/add-doc-comment.command.ts
var AddDocCommentComment = {
  id: "docs.command.add-comment",
  type: 0 /* COMMAND */,
  async handler(accessor, params) {
    if (!params) {
      return false;
    }
    const { comment: originComment, unitId } = params;
    const dataSourceService = accessor.get(IThreadCommentDataSourceService);
    const comment = await dataSourceService.addComment(originComment);
    const commandService = accessor.get(ICommandService);
    const doMutation = addCustomDecorationBySelectionFactory(
      accessor,
      {
        id: comment.threadId,
        type: 0 /* COMMENT */,
        unitId
      }
    );
    if (doMutation) {
      const addComment = {
        id: AddCommentMutation.id,
        params: {
          unitId,
          subUnitId: DEFAULT_DOC_SUBUNIT_ID,
          comment
        }
      };
      const activeOperation = {
        id: SetActiveCommentOperation.id,
        params: {
          unitId,
          subUnitId: DEFAULT_DOC_SUBUNIT_ID,
          commentId: comment.id
        }
      };
      return (await sequenceExecute([addComment, doMutation, activeOperation], commandService)).result;
    }
    return false;
  }
};

// ../packages/docs-thread-comment-ui/src/commands/commands/delete-doc-comment.command.ts
var DeleteDocCommentComment = {
  id: "docs.command.delete-comment",
  type: 0 /* COMMAND */,
  async handler(accessor, params) {
    if (!params) {
      return false;
    }
    const { commentId, unitId } = params;
    const commandService = accessor.get(ICommandService);
    const doMutation = deleteCustomDecorationFactory(accessor, {
      id: commentId,
      unitId
    });
    if (doMutation) {
      return (await sequenceExecute([doMutation], commandService)).result;
    }
    return false;
  }
};

// ../packages/docs-thread-comment-ui/src/controllers/menu.ts
var shouldDisableAddComment = (accessor) => {
  var _a;
  const renderManagerService = accessor.get(IRenderManagerService);
  const docSelectionManagerService = accessor.get(DocSelectionManagerService);
  const skeleton = (_a = withCurrentTypeOfRenderer(
    O.UNIVER_DOC,
    DocSkeletonManagerService,
    accessor.get(IUniverInstanceService),
    renderManagerService
  )) == null ? void 0 : _a.getSkeleton();
  const editArea = skeleton == null ? void 0 : skeleton.getViewModel().getEditArea();
  if (editArea === "FOOTER" /* FOOTER */ || editArea === "HEADER" /* HEADER */) {
    return true;
  }
  const range = docSelectionManagerService.getActiveTextRange();
  if (range == null || range.collapsed) {
    return true;
  }
  return false;
};
function AddDocCommentMenuItemFactory(accessor) {
  return {
    id: StartAddCommentOperation.id,
    type: 0 /* BUTTON */,
    icon: "CommentSingle",
    title: "threadCommentUI.panel.addComment",
    tooltip: "threadCommentUI.panel.addComment",
    hidden$: getMenuHiddenObservable(accessor, O.UNIVER_DOC, void 0, SHEET_EDITOR_UNITS),
    disabled$: new Observable(function(subscribe) {
      const textSelectionService = accessor.get(DocSelectionManagerService);
      const observer = textSelectionService.textSelection$.pipe(debounceTime(16)).subscribe(() => {
        subscribe.next(shouldDisableAddComment(accessor));
      });
      return () => {
        observer.unsubscribe();
      };
    })
  };
}
function ToolbarDocCommentMenuItemFactory(accessor) {
  return {
    id: ToggleCommentPanelOperation.id,
    type: 0 /* BUTTON */,
    icon: "CommentSingle",
    title: "threadCommentUI.panel.addComment",
    tooltip: "threadCommentUI.panel.addComment",
    hidden$: getMenuHiddenObservable(accessor, O.UNIVER_DOC)
  };
}

// ../packages/docs-thread-comment-ui/src/views/doc-thread-comment-panel/index.tsx
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var DocThreadCommentPanel = () => {
  const univerInstanceService = useDependency(IUniverInstanceService);
  const injector2 = useDependency(Injector);
  const doc$ = (0, import_react3.useMemo)(() => univerInstanceService.getCurrentTypeOfUnit$(O.UNIVER_DOC).pipe(filter((doc2) => !!doc2 && !isInternalEditorID(doc2.getUnitId()))), [univerInstanceService]);
  const doc = useObservable(doc$);
  const subUnitId$ = (0, import_react3.useMemo)(() => new Observable((sub) => sub.next(DEFAULT_DOC_SUBUNIT_ID)), []);
  const docSelectionManagerService = useDependency(DocSelectionManagerService);
  const selectionChange$ = (0, import_react3.useMemo)(
    () => docSelectionManagerService.textSelection$.pipe(debounceTime(16)),
    [docSelectionManagerService.textSelection$]
  );
  useObservable(selectionChange$);
  const commandService = useDependency(ICommandService);
  const docCommentService = useDependency(DocThreadCommentService);
  const tempComment = useObservable(docCommentService.addingComment$);
  const [commentIds, setCommentIds] = (0, import_react3.useState)([]);
  (0, import_react3.useEffect)(() => {
    var _a;
    const set = /* @__PURE__ */ new Set();
    const customRanges = doc == null ? void 0 : doc.getCustomDecorations();
    setCommentIds((_a = customRanges == null ? void 0 : customRanges.map((r) => r.id).filter((i) => {
      const hasRepeat = set.has(i);
      set.add(i);
      return !hasRepeat;
    })) != null ? _a : []);
    const dispose = commandService.onCommandExecuted((command) => {
      var _a2;
      if (command.id === RichTextEditingMutation.id) {
        const set2 = /* @__PURE__ */ new Set();
        const customRanges2 = doc == null ? void 0 : doc.getCustomDecorations();
        setCommentIds((_a2 = customRanges2 == null ? void 0 : customRanges2.map((r) => r.id).filter((i) => {
          const hasRepeat = set2.has(i);
          set2.add(i);
          return !hasRepeat;
        })) != null ? _a2 : []);
      }
    });
    return () => {
      dispose.dispose();
    };
  }, [commandService, doc]);
  if (!doc) {
    return null;
  }
  const isInValidSelection = shouldDisableAddComment(injector2);
  const unitId = doc.getUnitId();
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    ThreadCommentPanel,
    {
      unitId,
      subUnitId$,
      type: O.UNIVER_DOC,
      onAdd: () => {
        commandService.executeCommand(StartAddCommentOperation.id);
      },
      getSubUnitName: () => "",
      disableAdd: isInValidSelection,
      tempComment,
      onAddComment: (comment) => {
        if (!comment.parentId) {
          const params = {
            unitId,
            range: tempComment,
            comment
          };
          commandService.executeCommand(AddDocCommentComment.id, params);
          docCommentService.endAdd();
          return false;
        }
        return true;
      },
      onDeleteComment: (comment) => {
        if (!comment.parentId) {
          const params = {
            unitId,
            commentId: comment.id
          };
          commandService.executeCommand(DeleteDocCommentComment.id, params);
          return false;
        }
        return true;
      },
      showComments: commentIds
    }
  );
};
DocThreadCommentPanel.componentKey = "univer.doc.thread-comment-panel";

// ../packages/docs-thread-comment-ui/src/commands/operations/show-comment-panel.operation.ts
var ShowCommentPanelOperation = {
  id: "docs.operation.show-comment-panel",
  type: 1 /* OPERATION */,
  handler(accessor, params) {
    var _a;
    const panelService = accessor.get(ThreadCommentPanelService);
    const sidebarService = accessor.get(ISidebarService);
    if (!panelService.panelVisible || ((_a = sidebarService.options.children) == null ? void 0 : _a.label) !== DocThreadCommentPanel.componentKey) {
      sidebarService.open({
        header: { title: "threadCommentUI.panel.title" },
        children: { label: DocThreadCommentPanel.componentKey },
        width: 320,
        onClose: () => panelService.setPanelVisible(false)
      });
      panelService.setPanelVisible(true);
    }
    if (params) {
      panelService.setActiveComment(params == null ? void 0 : params.activeComment);
    }
    return true;
  }
};
var ToggleCommentPanelOperation = {
  id: "docs.operation.toggle-comment-panel",
  type: 1 /* OPERATION */,
  handler(accessor) {
    var _a;
    const panelService = accessor.get(ThreadCommentPanelService);
    const sidebarService = accessor.get(ISidebarService);
    if (!panelService.panelVisible || ((_a = sidebarService.options.children) == null ? void 0 : _a.label) !== DocThreadCommentPanel.componentKey) {
      sidebarService.open({
        header: { title: "threadCommentUI.panel.title" },
        children: { label: DocThreadCommentPanel.componentKey },
        width: 320,
        onClose: () => panelService.setPanelVisible(false)
      });
      panelService.setPanelVisible(true);
    } else {
      sidebarService.close();
      panelService.setPanelVisible(false);
      panelService.setActiveComment(null);
    }
    return true;
  }
};
var StartAddCommentOperation = {
  id: "docs.operation.start-add-comment",
  type: 1 /* OPERATION */,
  handler(accessor) {
    var _a, _b, _c;
    const panelService = accessor.get(ThreadCommentPanelService);
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const doc = univerInstanceService.getCurrentUnitForType(O.UNIVER_DOC);
    const docSelectionManagerService = accessor.get(DocSelectionManagerService);
    const renderManagerService = accessor.get(IRenderManagerService);
    const userManagerService2 = accessor.get(UserManagerService);
    const docCommentService = accessor.get(DocThreadCommentService);
    const commandService = accessor.get(ICommandService);
    const sidebarService = accessor.get(ISidebarService);
    const textRange = docSelectionManagerService.getActiveTextRange();
    if (!doc || !textRange) {
      return false;
    }
    const docSelectionRenderManager = (_a = renderManagerService.getRenderById(doc.getUnitId())) == null ? void 0 : _a.with(DocSelectionRenderService);
    docSelectionRenderManager == null ? void 0 : docSelectionRenderManager.setReserveRangesStatus(true);
    if (textRange.collapsed) {
      if (panelService.panelVisible) {
        panelService.setPanelVisible(false);
        sidebarService.close();
      } else {
        commandService.executeCommand(ShowCommentPanelOperation.id);
      }
      return true;
    }
    commandService.executeCommand(ShowCommentPanelOperation.id);
    const unitId = doc.getUnitId();
    const dataStream = ((_c = (_b = doc.getBody()) == null ? void 0 : _b.dataStream) != null ? _c : "").slice(textRange.startOffset, textRange.endOffset);
    const text = BuildTextUtils.transform.getPlainText(dataStream);
    const subUnitId = DEFAULT_DOC_SUBUNIT_ID;
    const commentId = "";
    const comment = {
      unitId,
      subUnitId,
      id: commentId,
      ref: text,
      dT: getDT(),
      personId: userManagerService2.getCurrentUser().userID,
      text: {
        dataStream: "\r\n"
      },
      startOffset: textRange.startOffset,
      endOffset: textRange.endOffset,
      collapsed: true,
      threadId: commentId
    };
    docSelectionRenderManager == null ? void 0 : docSelectionRenderManager.blur();
    docCommentService.startAdd(comment);
    panelService.setActiveComment({
      unitId,
      subUnitId,
      commentId
    });
    return true;
  }
};

// ../packages/docs-thread-comment-ui/src/controllers/doc-thread-comment-selection.controller.ts
var DocThreadCommentSelectionController = class extends Disposable {
  constructor(_threadCommentPanelService, _univerInstanceService, _commandService, _docThreadCommentService, _renderManagerService, _threadCommentModel) {
    super();
    this._threadCommentPanelService = _threadCommentPanelService;
    this._univerInstanceService = _univerInstanceService;
    this._commandService = _commandService;
    this._docThreadCommentService = _docThreadCommentService;
    this._renderManagerService = _renderManagerService;
    this._threadCommentModel = _threadCommentModel;
    this._initSelectionChange();
    this._initActiveCommandChange();
  }
  _initSelectionChange() {
    let lastSelection;
    this.disposeWithMe(
      this._commandService.onCommandExecuted((commandInfo) => {
        var _a, _b, _c, _d;
        if (commandInfo.id === SetTextSelectionsOperation.id) {
          const params = commandInfo.params;
          const { unitId, ranges } = params;
          if (isInternalEditorID(unitId)) return;
          const doc = this._univerInstanceService.getUnit(unitId, O.UNIVER_DOC);
          const primary = ranges[0];
          if ((lastSelection == null ? void 0 : lastSelection.startOffset) === (primary == null ? void 0 : primary.startOffset) && (lastSelection == null ? void 0 : lastSelection.endOffset) === (primary == null ? void 0 : primary.endOffset)) {
            return;
          }
          lastSelection = primary;
          if (primary && doc) {
            const { startOffset, endOffset, collapsed } = primary;
            let customRange;
            if (collapsed) {
              customRange = (_b = (_a = doc.getBody()) == null ? void 0 : _a.customDecorations) == null ? void 0 : _b.find((value) => value.startIndex <= startOffset && value.endIndex >= endOffset - 1);
            } else {
              customRange = (_d = (_c = doc.getBody()) == null ? void 0 : _c.customDecorations) == null ? void 0 : _d.find((value) => value.startIndex <= startOffset && value.endIndex >= endOffset - 1);
            }
            if (customRange) {
              const comment = this._threadCommentModel.getComment(unitId, DEFAULT_DOC_SUBUNIT_ID, customRange.id);
              if (comment && !comment.resolved) {
                this._commandService.executeCommand(ShowCommentPanelOperation.id, {
                  activeComment: {
                    unitId,
                    subUnitId: DEFAULT_DOC_SUBUNIT_ID,
                    commentId: customRange.id
                  }
                });
              }
              return;
            }
          }
          if (!this._threadCommentPanelService.activeCommentId) {
            return;
          }
          this._commandService.executeCommand(SetActiveCommentOperation.id);
        }
      })
    );
  }
  _initActiveCommandChange() {
    this.disposeWithMe(this._threadCommentPanelService.activeCommentId$.subscribe((activeComment) => {
      var _a, _b, _c, _d;
      if (activeComment) {
        const doc = this._univerInstanceService.getUnit(activeComment.unitId);
        if (doc) {
          const backScrollController = (_a = this._renderManagerService.getRenderById(activeComment.unitId)) == null ? void 0 : _a.with(DocBackScrollRenderController);
          const customRange = (_c = (_b = doc.getBody()) == null ? void 0 : _b.customDecorations) == null ? void 0 : _c.find((range) => range.id === activeComment.commentId);
          if (customRange && backScrollController) {
            backScrollController.scrollToRange({
              startOffset: customRange.startIndex,
              endOffset: customRange.endIndex,
              collapsed: false
            });
          }
        }
      }
      if (!activeComment || activeComment.commentId !== ((_d = this._docThreadCommentService.addingComment) == null ? void 0 : _d.id)) {
        this._docThreadCommentService.endAdd();
      }
    }));
  }
};
DocThreadCommentSelectionController = __decorateClass([
  __decorateParam(0, Inject(ThreadCommentPanelService)),
  __decorateParam(1, IUniverInstanceService),
  __decorateParam(2, ICommandService),
  __decorateParam(3, Inject(DocThreadCommentService)),
  __decorateParam(4, IRenderManagerService),
  __decorateParam(5, Inject(ThreadCommentModel))
], DocThreadCommentSelectionController);

// ../packages/docs-thread-comment-ui/src/controllers/menu.schema.ts
var menuSchema2 = {
  ["ribbon.start.others" /* OTHERS */]: {
    [ToggleCommentPanelOperation.id]: {
      order: 1,
      menuItemFactory: ToolbarDocCommentMenuItemFactory
    }
  },
  ["contextMenu.mainArea" /* MAIN_AREA */]: {
    ["contextMenu.data" /* DATA */]: {
      [StartAddCommentOperation.id]: {
        order: 1,
        menuItemFactory: AddDocCommentMenuItemFactory
      }
    }
  }
};

// ../packages/docs-thread-comment-ui/src/controllers/doc-thread-comment-ui.controller.ts
var DocThreadCommentUIController = class extends Disposable {
  constructor(_commandService, _menuManagerService, _componentManager) {
    super();
    this._commandService = _commandService;
    this._menuManagerService = _menuManagerService;
    this._componentManager = _componentManager;
    this._initCommands();
    this._initMenus();
    this._initComponents();
  }
  _initCommands() {
    [
      AddDocCommentComment,
      DeleteDocCommentComment,
      ShowCommentPanelOperation,
      StartAddCommentOperation,
      ToggleCommentPanelOperation
    ].forEach((command) => {
      this.disposeWithMe(this._commandService.registerCommand(command));
    });
  }
  _initMenus() {
    this._menuManagerService.mergeMenu(menuSchema2);
  }
  _initComponents() {
    [DocThreadCommentPanel].forEach((comp) => {
      this.disposeWithMe(this._componentManager.register(comp.componentKey, comp));
    });
    this.disposeWithMe(this._componentManager.register("CommentSingle", comment_single_default));
  }
};
DocThreadCommentUIController = __decorateClass([
  __decorateParam(0, ICommandService),
  __decorateParam(1, IMenuManagerService),
  __decorateParam(2, Inject(ComponentManager))
], DocThreadCommentUIController);

// ../packages/docs-thread-comment-ui/src/controllers/render-controllers/render.controller.ts
var DocThreadCommentRenderController = class extends Disposable {
  constructor(_context, _docInterceptorService, _threadCommentPanelService, _docRenderController, _univerInstanceService, _threadCommentModel, _commandService) {
    super();
    this._context = _context;
    this._docInterceptorService = _docInterceptorService;
    this._threadCommentPanelService = _threadCommentPanelService;
    this._docRenderController = _docRenderController;
    this._univerInstanceService = _univerInstanceService;
    this._threadCommentModel = _threadCommentModel;
    this._commandService = _commandService;
    this._interceptorViewModel();
    this._initReRender();
    this._initSyncComments();
  }
  _initReRender() {
    this.disposeWithMe(this._threadCommentPanelService.activeCommentId$.subscribe((activeComment) => {
      var _a;
      if (activeComment) {
        this._docRenderController.reRender(activeComment.unitId);
        return;
      }
      const unitId = (_a = this._univerInstanceService.getCurrentUnitForType(O.UNIVER_DOC)) == null ? void 0 : _a.getUnitId();
      if (unitId) {
        this._docRenderController.reRender(unitId);
      }
    }));
    this.disposeWithMe(this._threadCommentModel.commentUpdate$.subscribe((update) => {
      if (update.type === "resolve") {
        this._docRenderController.reRender(update.unitId);
      }
    }));
  }
  _interceptorViewModel() {
    this._docInterceptorService.intercept(DOC_INTERCEPTOR_POINT.CUSTOM_DECORATION, {
      handler: (data, pos, next) => {
        if (!data) {
          return next(data);
        }
        const { unitId, index, customDecorations } = pos;
        const activeComment = this._threadCommentPanelService.activeCommentId;
        const { commentId, unitId: commentUnitID } = activeComment || {};
        const activeCustomDecoration = customDecorations.find((i) => i.id === commentId);
        const comment = this._threadCommentModel.getComment(unitId, DEFAULT_DOC_SUBUNIT_ID, data.id);
        if (!comment) {
          return next({
            ...data,
            show: false
          });
        }
        const isActiveIndex = activeCustomDecoration && index >= activeCustomDecoration.startIndex && index <= activeCustomDecoration.endIndex;
        const isActive = commentUnitID === unitId && data.id === commentId;
        return next({
          ...data,
          active: isActive || isActiveIndex,
          show: !comment.resolved
        });
      }
    });
  }
  _initSyncComments() {
    var _a, _b, _c;
    const unitId = this._context.unit.getUnitId();
    const subUnitId = DEFAULT_DOC_SUBUNIT_ID;
    const threadIds = (_c = (_b = (_a = this._context.unit.getBody()) == null ? void 0 : _a.customDecorations) == null ? void 0 : _b.filter((i) => i.type === 0 /* COMMENT */).map((i) => i.id)) != null ? _c : [];
    threadIds.forEach((id) => {
      const comment = this._threadCommentModel.getComment(unitId, subUnitId, id);
      if (!comment) {
        this._threadCommentModel.addComment(unitId, subUnitId, { id, threadId: id, ref: "", dT: "", personId: "", text: { dataStream: "" }, unitId, subUnitId });
      }
    });
    threadIds.length && this._threadCommentModel.syncThreadComments(this._context.unit.getUnitId(), DEFAULT_DOC_SUBUNIT_ID, threadIds);
    let prevThreadIds = threadIds.sort();
    this.disposeWithMe(this._commandService.onCommandExecuted((commandInfo) => {
      var _a2, _b2, _c2;
      if (commandInfo.id === RichTextEditingMutation.id) {
        const params = commandInfo.params;
        if (params.unitId !== this._context.unit.getUnitId()) {
          return;
        }
        const currentThreadIds = (_c2 = (_b2 = (_a2 = this._context.unit.getBody()) == null ? void 0 : _a2.customDecorations) == null ? void 0 : _b2.filter((i) => i.type === 0 /* COMMENT */).map((i) => i.id)) != null ? _c2 : [];
        const currentThreadIdsSorted = currentThreadIds.sort();
        if (JSON.stringify(prevThreadIds) !== JSON.stringify(currentThreadIdsSorted)) {
          const preIds = new Set(prevThreadIds);
          const currentIds = new Set(currentThreadIdsSorted);
          const addIds = /* @__PURE__ */ new Set();
          const deleteIds = /* @__PURE__ */ new Set();
          currentThreadIds.forEach((id) => {
            if (!preIds.has(id)) {
              addIds.add(id);
            }
          });
          prevThreadIds.forEach((id) => {
            if (!currentIds.has(id)) {
              deleteIds.add(id);
            }
          });
          prevThreadIds = currentThreadIdsSorted;
          addIds.forEach((id) => {
            const comment = this._threadCommentModel.getComment(unitId, subUnitId, id);
            if (!comment) {
              this._threadCommentModel.addComment(unitId, subUnitId, { id, threadId: id, ref: "", dT: "", personId: "", text: { dataStream: "" }, unitId, subUnitId });
            }
          });
          this._threadCommentModel.syncThreadComments(unitId, subUnitId, [...addIds]);
        }
      }
    }));
  }
};
DocThreadCommentRenderController = __decorateClass([
  __decorateParam(1, Inject(DocInterceptorService)),
  __decorateParam(2, Inject(ThreadCommentPanelService)),
  __decorateParam(3, Inject(DocRenderController)),
  __decorateParam(4, IUniverInstanceService),
  __decorateParam(5, Inject(ThreadCommentModel)),
  __decorateParam(6, ICommandService)
], DocThreadCommentRenderController);

// ../packages/docs-thread-comment-ui/src/plugin.ts
var UniverDocsThreadCommentUIPlugin = class extends Plugin {
  constructor(_config = defaultPluginConfig3, _injector, _renderManagerSrv, _configService) {
    super();
    this._config = _config;
    this._injector = _injector;
    this._renderManagerSrv = _renderManagerSrv;
    this._configService = _configService;
    const { menu, ...rest } = merge_default(
      {},
      defaultPluginConfig3,
      this._config
    );
    if (menu) {
      this._configService.setConfig("menu", menu, { merge: true });
    }
    this._configService.setConfig(DOCS_THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY, rest);
  }
  onStarting() {
    [
      [DocThreadCommentUIController],
      [DocThreadCommentSelectionController],
      [DocThreadCommentService]
    ].forEach((dep) => {
      this._injector.add(dep);
    });
  }
  onRendered() {
    this._initRenderModule();
    this._injector.get(DocThreadCommentSelectionController);
    this._injector.get(DocThreadCommentUIController);
  }
  _initRenderModule() {
    [DocThreadCommentRenderController].forEach((dep) => {
      this._renderManagerSrv.registerRenderModule(O.UNIVER_DOC, dep);
    });
  }
};
__publicField(UniverDocsThreadCommentUIPlugin, "pluginName", PLUGIN_NAME2);
__publicField(UniverDocsThreadCommentUIPlugin, "type", O.UNIVER_DOC);
UniverDocsThreadCommentUIPlugin = __decorateClass([
  DependentOn(UniverThreadCommentUIPlugin),
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IRenderManagerService),
  __decorateParam(3, IConfigService)
], UniverDocsThreadCommentUIPlugin);

// src/docs/main.ts
var IS_E2E = false;
var univer = new Univer({
  theme: default_module_default,
  locale: "zhCN" /* ZH_CN */,
  locales: {
    ["zhCN" /* ZH_CN */]: zhCN,
    ["enUS" /* EN_US */]: enUS,
    ["ruRU" /* RU_RU */]: ruRU,
    ["faIR" /* FA_IR */]: faIR
  },
  logLevel: 4 /* VERBOSE */
});
univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverFormulaEnginePlugin);
univer.registerPlugin(UniverDebuggerPlugin);
univer.registerPlugin(UniverUIPlugin, {
  container: "app"
});
univer.registerPlugin(UniverDocsPlugin);
univer.registerPlugin(UniverDocsUIPlugin, {
  container: "univerdoc",
  layout: {
    docContainerConfig: {
      innerLeft: false
    }
  }
});
univer.registerPlugin(UniverDocsDrawingUIPlugin);
univer.registerPlugin(UniverDocsThreadCommentUIPlugin);
univer.registerPlugin(UniverDocsHyperLinkUIPlugin);
univer.registerPlugin(UniverDocsMentionUIPlugin);
univer.registerPlugin(UniverDocsQuickInsertUIPlugin);
if (!IS_E2E) {
  univer.createUnit(O.UNIVER_DOC, DEFAULT_DOCUMENT_DATA_CN);
}
window.univer = univer;
var injector = univer.__getInjector();
var userManagerService = injector.get(UserManagerService);
var mockUser = {
  userID: "Owner_qxVnhPbQ",
  name: "Owner",
  avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAInSURBVHgBtZU9TxtBEIbfWRzFSIdkikhBSqRQkJqkCKTCFkqVInSUSaT0wC8w/gXxD4gU2nRJkXQWhAZowDUUWKIwEgWWbEEB3mVmx3dn4DA2nB/ppNuPeWd29mMIPXDr+RxwtgRHeW6+guNPRxogqnL7Dwz9psJ27S4NShaeZTH3kwXy6I81dlRKcmRui88swdq9AcSFL7Buz1Vmlns64MiLsCjzwnIYHLH57tbfFbs7KRaXyEU8FVZofqccOfA5l7Q8LPIkGrwnb2RPNEXWFVMUF3L+kDCk0btDDAMzOm5YfAHDwp4tG74wnzAsiOYMnJ3GoDybA7IT98/jm5+JNnfiIzAS6LlqHQBN/i6b2t/cV1Hh6BfwYlHnHP4AXi5q/8kmMMpOs8+BixZw/Fd6xUEHEbnkgclvQP2fGp7uShRKnQ3G32rkjV1th8JhIGG7tR/JyjGteSOZELwGMmNqIIigRCLRh2OZIE6BjItdd7pCW6Uhm1zzkUtungSxwEUzNpQ+GQumtH1ej1MqgmNT6vwmhCq5yuwq56EYTbgeQUz3yvrpV1b4ok3nYJ+eYhgYmjRUqErx2EDq0Fr8FhG++iqVGqxlUJI/70Ar0UgJaWHj6hYVHJrfKssAHot1JfqwE9WVWzXZVd5z2Ws/4PnmtEjkXeKJDvxUecLbWOXH/DP6QQ4J72NS0adedp1aseBfXP8odlZFfPvBF7SN/8hky1TYuPOAXAEipMx15u5ToAAAAABJRU5ErkJggg==",
  anonymous: false,
  canBindAnonymous: false
};
userManagerService.setCurrentUser(mockUser);
window.univerAPI = FUniver.newAPI(univer);
//# sourceMappingURL=main.js.map
