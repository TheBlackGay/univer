import {
  ComponentManager,
  DeleteLeftCommand,
  DocCanvasPopManagerService,
  DocSelectionManagerService,
  IEditorService,
  InsertCommand,
  MoveCursorOperation,
  deleteCustomRangeFactory,
  replaceSelectionFactory,
  useDependency,
  useObservable
} from "./chunk-DOZPYWOG.js";
import {
  clsx,
  require_jsx_runtime,
  require_react
} from "./chunk-22LKBS37.js";
import {
  BehaviorSubject,
  Disposable,
  ICommandService,
  IConfigService,
  IMentionIOService,
  IUniverInstanceService,
  Inject,
  Injector,
  O,
  Plugin,
  Tools,
  filter,
  merge_default
} from "./chunk-33NDYU5R.js";
import {
  __decorateClass,
  __decorateParam,
  __publicField,
  __toESM
} from "./chunk-NSSCU2QI.js";

// ../packages/docs-mention-ui/src/controllers/config.schema.ts
var DOCS_MENTION_UI_PLUGIN_CONFIG_KEY = "docs-mention-ui.config";
var configSymbol = Symbol(DOCS_MENTION_UI_PLUGIN_CONFIG_KEY);
var defaultPluginConfig = {};

// ../packages/docs-mention-ui/src/services/doc-mention.service.ts
var DocMentionService = class extends Disposable {
  constructor() {
    super();
    __publicField(this, "_editing$", new BehaviorSubject(void 0));
    __publicField(this, "editing$", this._editing$.asObservable());
    this.disposeWithMe(() => {
      this._editing$.complete();
    });
  }
  get editing() {
    return this._editing$.value;
  }
  startEditing(item) {
    this._editing$.next(item);
  }
  endEditing() {
    this._editing$.next(void 0);
  }
};

// ../packages/docs-mention-ui/src/commands/operations/mention-popup.operation.ts
var ShowMentionInfoPopupOperation = {
  type: 1 /* OPERATION */,
  id: "doc.operation.show-mention-info-popup",
  handler(accessor, params) {
    return false;
  }
};
var CloseMentionInfoPopupOperation = {
  type: 1 /* OPERATION */,
  id: "doc.operation.close-mention-info-popup",
  handler(accessor) {
    return false;
  }
};
var ShowMentionEditPopupOperation = {
  type: 1 /* OPERATION */,
  id: "doc.operation.show-mention-edit-popup",
  handler(accessor, params) {
    if (!params) {
      return false;
    }
    const docMentionService = accessor.get(DocMentionService);
    docMentionService.startEditing({ unitId: params.unitId, index: params.startIndex });
    return true;
  }
};
var CloseMentionEditPopupOperation = {
  type: 1 /* OPERATION */,
  id: "doc.operation.close-mention-edit-popup",
  handler(accessor) {
    const docMentionService = accessor.get(DocMentionService);
    docMentionService.endEditing();
    return true;
  }
};

// ../packages/docs-mention-ui/src/views/mention-edit-popup/index.tsx
var import_react2 = __toESM(require_react());

// ../packages/docs-mention-ui/src/commands/commands/doc-mention.command.ts
var AddDocMentionCommand = {
  type: 0 /* COMMAND */,
  id: "docs.command.add-doc-mention",
  handler: async (accessor, params) => {
    if (!params) {
      return false;
    }
    const { mention, unitId, startIndex } = params;
    const commandService = accessor.get(ICommandService);
    const docSelectionManagerService = accessor.get(DocSelectionManagerService);
    const activeRange = docSelectionManagerService.getActiveTextRange();
    if (!activeRange) {
      return false;
    }
    const { metadata, ...mentionConfig } = mention;
    const dataStream = `@${mention.label}`;
    const body = {
      dataStream,
      customRanges: [{
        startIndex: 0,
        endIndex: dataStream.length - 1,
        rangeId: mention.id,
        rangeType: 6 /* MENTION */,
        wholeEntity: true,
        properties: {
          ...mentionConfig,
          ...metadata
        }
      }]
    };
    const doMutation = replaceSelectionFactory(
      accessor,
      {
        unitId,
        body,
        selection: {
          startOffset: startIndex,
          endOffset: activeRange.endOffset,
          collapsed: startIndex === activeRange.endOffset
        }
      }
    );
    if (doMutation) {
      return commandService.syncExecuteCommand(doMutation.id, doMutation.params);
    }
    return false;
  }
};
var DeleteDocMentionCommand = {
  type: 0 /* COMMAND */,
  id: "docs.command.delete-doc-mention",
  async handler(accessor, params) {
    if (!params) {
      return false;
    }
    const { unitId, mentionId } = params;
    const commandService = accessor.get(ICommandService);
    const doMutation = deleteCustomRangeFactory(accessor, { unitId, rangeId: mentionId });
    if (!doMutation) {
      return false;
    }
    return await commandService.syncExecuteCommand(doMutation.id, doMutation.params);
  }
};

// ../packages/docs-mention-ui/src/views/mention-list/index.tsx
var import_react = __toESM(require_react());

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages/docs-mention-ui/src/views/mention-list/index.module.less
var index_module_default = {
  "docMentionPanel": "univer-doc-mention-panel",
  "docMention": "univer-doc-mention",
  "docMentionIcon": "univer-doc-mention-icon",
  "docMentionActive": "univer-doc-mention-active",
  "docMentionLabel": "univer-doc-mention-label"
};

// ../packages/docs-mention-ui/src/views/mention-list/index.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var MentionList = (props) => {
  var _a, _b;
  const { mentions, active, onSelect, onClick, editorId } = props;
  const ref = (0, import_react.useRef)(null);
  const [activeId, setActiveId] = (0, import_react.useState)(active != null ? active : (_b = (_a = mentions[0]) == null ? void 0 : _a.mentions[0]) == null ? void 0 : _b.objectId);
  const handleSelect = (item) => {
    onSelect == null ? void 0 : onSelect(item);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref, "data-editorid": editorId, tabIndex: 0, className: index_module_default.docMentionPanel, onClick, children: mentions.map((typeMentions) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: index_module_default.docMentionType, children: typeMentions.title }),
    typeMentions.mentions.map((mention) => {
      var _a2;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "div",
        {
          "data-editorid": editorId,
          className: clsx(index_module_default.docMention, { [index_module_default.docMentionActive]: activeId === mention.objectId }),
          onClick: () => handleSelect(mention),
          onMouseEnter: () => setActiveId(mention.objectId),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { className: index_module_default.docMentionIcon, src: (_a2 = mention.metadata) == null ? void 0 : _a2.icon }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: index_module_default.docMentionLabel, children: mention.label })
          ]
        },
        mention.objectId
      );
    })
  ] }, typeMentions.type)) });
};

// ../packages/docs-mention-ui/src/views/mention-edit-popup/index.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var MentionEditPopup = () => {
  var _a;
  const popupService = useDependency(DocMentionPopupService);
  const commandService = useDependency(ICommandService);
  const univerInstanceService = useDependency(IUniverInstanceService);
  const editPopup = useObservable(popupService.editPopup$);
  const mentionIOService = useDependency(IMentionIOService);
  const editorService = useDependency(IEditorService);
  const documentDataModel = editPopup ? univerInstanceService.getUnit(editPopup.unitId) : null;
  const textSelectionService = useDependency(DocSelectionManagerService);
  const [mentions, setMentions] = (0, import_react2.useState)([]);
  const textSelection$ = (0, import_react2.useMemo)(() => textSelectionService.textSelection$.pipe(
    filter((selection) => selection.unitId === (editPopup == null ? void 0 : editPopup.unitId))
  ), [textSelectionService.textSelection$, editPopup]);
  const textSelection = useObservable(textSelection$);
  const search = editPopup ? (_a = documentDataModel == null ? void 0 : documentDataModel.getBody()) == null ? void 0 : _a.dataStream.slice(editPopup.anchor, textSelection == null ? void 0 : textSelection.textRanges[0].startOffset) : "";
  (0, import_react2.useEffect)(() => {
    (async () => {
      if (editPopup) {
        const res = await mentionIOService.list({ unitId: editPopup.unitId, search });
        setMentions(res.list);
      }
    })();
  }, [mentionIOService, editPopup, search]);
  if (!editPopup) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    MentionList,
    {
      editorId: editPopup.unitId,
      onClick: () => {
        popupService.closeEditPopup();
        editorService.focus(editPopup.unitId);
      },
      mentions,
      onSelect: async (mention) => {
        await commandService.executeCommand(AddDocMentionCommand.id, {
          unitId: univerInstanceService.getCurrentUnitForType(O.UNIVER_DOC).getUnitId(),
          mention: {
            ...mention,
            id: Tools.generateRandomId()
          },
          startIndex: editPopup.anchor
        });
        editorService.focus(editPopup.unitId);
      }
    }
  );
};
MentionEditPopup.componentKey = "univer.popup.doc-mention-edit";

// ../packages/docs-mention-ui/src/services/doc-mention-popup.service.ts
var DocMentionPopupService = class extends Disposable {
  constructor(_docCanvasPopupManagerService, _docMentionService) {
    super();
    this._docCanvasPopupManagerService = _docCanvasPopupManagerService;
    this._docMentionService = _docMentionService;
    __publicField(this, "_infoPopup$", new BehaviorSubject(void 0));
    __publicField(this, "infoPopup$", this._infoPopup$.asObservable());
    __publicField(this, "_editPopup$", new BehaviorSubject(void 0));
    __publicField(this, "editPopup$", this._editPopup$.asObservable());
    this.disposeWithMe(this._docMentionService.editing$.subscribe((editing) => {
      if (editing !== void 0 && editing !== null) {
        this.showEditPopup(editing.unitId, editing.index);
      } else {
        this.closeEditPopup();
      }
    }));
  }
  get infoPopup() {
    return this._infoPopup$.value;
  }
  get editPopup() {
    return this._editPopup$.value;
  }
  showInfoPopup() {
  }
  closeInfoPopup() {
  }
  showEditPopup(unitId, index) {
    this.closeEditPopup();
    const dispose = this._docCanvasPopupManagerService.attachPopupToRange(
      { startOffset: index, endOffset: index, collapsed: true },
      {
        componentKey: MentionEditPopup.componentKey,
        onClickOutside: () => {
          this.closeEditPopup();
        },
        direction: "bottom"
      },
      unitId
    );
    this._editPopup$.next({ popup: dispose, anchor: index, unitId });
  }
  closeEditPopup() {
    if (!(this._docMentionService.editing == null)) {
      this._docMentionService.endEditing();
    }
    if (this.editPopup) {
      this.editPopup.popup.dispose();
      this._editPopup$.next(null);
    }
  }
};
DocMentionPopupService = __decorateClass([
  __decorateParam(0, Inject(DocCanvasPopManagerService)),
  __decorateParam(1, Inject(DocMentionService))
], DocMentionPopupService);

// ../packages/docs-mention-ui/src/controllers/doc-mention-trigger.controller.ts
var DocMentionTriggerController = class extends Disposable {
  constructor(_commandService, _docMentionService, _textSelectionManagerService, _docMentionPopupService) {
    super();
    this._commandService = _commandService;
    this._docMentionService = _docMentionService;
    this._textSelectionManagerService = _textSelectionManagerService;
    this._docMentionPopupService = _docMentionPopupService;
    this._initTrigger();
  }
  _initTrigger() {
    this.disposeWithMe(
      this._commandService.onCommandExecuted((commandInfo) => {
        if (commandInfo.id === InsertCommand.id) {
          const params = commandInfo.params;
          const activeRange = this._textSelectionManagerService.getActiveTextRange();
          if (params.body.dataStream === "@" && activeRange && !Tools.isDefine(this._docMentionService.editing)) {
            setTimeout(() => {
              this._commandService.executeCommand(ShowMentionEditPopupOperation.id, {
                startIndex: activeRange.startOffset - 1,
                unitId: params.unitId
              });
            }, 100);
          }
        }
        if (commandInfo.id === MoveCursorOperation.id) {
          this._commandService.executeCommand(CloseMentionEditPopupOperation.id);
        }
        if (commandInfo.id === DeleteLeftCommand.id) {
          if (this._docMentionPopupService.editPopup == null) {
            return;
          }
          const activeRange = this._textSelectionManagerService.getActiveTextRange();
          if (activeRange && activeRange.endOffset <= this._docMentionPopupService.editPopup.anchor) {
            this._commandService.executeCommand(CloseMentionEditPopupOperation.id);
          }
        }
      })
    );
  }
};
DocMentionTriggerController = __decorateClass([
  __decorateParam(0, ICommandService),
  __decorateParam(1, Inject(DocMentionService)),
  __decorateParam(2, Inject(DocSelectionManagerService)),
  __decorateParam(3, Inject(DocMentionPopupService))
], DocMentionTriggerController);

// ../packages/docs-mention-ui/src/controllers/doc-mention-ui.controller.ts
var DocMentionUIController = class extends Disposable {
  constructor(_commandService, _componentManager) {
    super();
    this._commandService = _commandService;
    this._componentManager = _componentManager;
    this._initCommands();
    this._initComponents();
  }
  _initCommands() {
    [
      ShowMentionInfoPopupOperation,
      CloseMentionInfoPopupOperation,
      ShowMentionEditPopupOperation,
      CloseMentionEditPopupOperation,
      AddDocMentionCommand,
      DeleteDocMentionCommand
    ].forEach((operation) => {
      this.disposeWithMe(this._commandService.registerCommand(operation));
    });
  }
  _initComponents() {
    const components = [[MentionEditPopup.componentKey, MentionEditPopup]];
    components.forEach(([key, comp]) => {
      this.disposeWithMe(this._componentManager.register(key, comp));
    });
  }
};
DocMentionUIController = __decorateClass([
  __decorateParam(0, ICommandService),
  __decorateParam(1, Inject(ComponentManager))
], DocMentionUIController);

// ../packages/docs-mention-ui/src/types/const/const.ts
var DOC_MENTION_UI_PLUGIN = "DOC_MENTION_UI_PLUGIN";

// ../packages/docs-mention-ui/src/plugin.ts
var UniverDocsMentionUIPlugin = class extends Plugin {
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
    this._configService.setConfig(DOCS_MENTION_UI_PLUGIN_CONFIG_KEY, rest);
  }
  onStarting() {
    [
      [DocMentionService],
      [DocMentionPopupService],
      [DocMentionUIController],
      [DocMentionTriggerController]
    ].forEach((dep) => {
      this._injector.add(dep);
    });
    this._injector.get(DocMentionUIController);
  }
  onRendered() {
    this._injector.get(DocMentionTriggerController);
    this._injector.get(DocMentionPopupService);
  }
};
__publicField(UniverDocsMentionUIPlugin, "pluginName", DOC_MENTION_UI_PLUGIN);
__publicField(UniverDocsMentionUIPlugin, "type", O.UNIVER_DOC);
UniverDocsMentionUIPlugin = __decorateClass([
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IConfigService)
], UniverDocsMentionUIPlugin);

export {
  UniverDocsMentionUIPlugin
};
//# sourceMappingURL=chunk-KH5JJXHV.js.map
