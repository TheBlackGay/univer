import {
  createElementBlock,
  openBlock
} from "./chunk-OZCZVRL3.js";
import {
  DocFloatDomController
} from "./chunk-IEN5A4MA.js";
import {
  SheetCanvasFloatDomManagerService
} from "./chunk-6KKG4LFT.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO,
  DEFAULT_WORKBOOK_DATA_DEMO_DEFAULT_STYLE
} from "./chunk-R36TW3RS.js";
import {
  ComponentManager,
  IClipboardInterfaceService,
  IConfirmService,
  IDialogService,
  IEditorService,
  ILocalFileService,
  IMenuManagerService,
  IMessageService,
  INotificationService,
  IRenderManagerService,
  ISidebarService,
  UNIVER_WATERMARK_LAYER_INDEX,
  UNIVER_WATERMARK_STORAGE_KEY,
  WatermarkLayer,
  ptToPixel,
  useDependency,
  useObservable
} from "./chunk-DOZPYWOG.js";
import {
  Button,
  Checkbox,
  ColorPicker,
  Dropdown,
  Input,
  InputNumber,
  Select,
  bold_single_default,
  clsx,
  default_module_default,
  font_color_default,
  green_module_default,
  italic_single_default,
  require_jsx_runtime,
  require_react,
  watermark_single_default
} from "./chunk-22LKBS37.js";
import {
  Disposable,
  ICommandService,
  IConfigService,
  ILocalStorageService,
  ILogService,
  IPermissionService,
  IResourceLoaderService,
  IUniverInstanceService,
  Inject,
  Injector,
  LifecycleService,
  LocaleService,
  O,
  ObjectMatrix,
  Observable,
  Plugin,
  Range,
  RxDisposable,
  SheetsSelectionsService,
  Subject,
  ThemeService,
  UserManagerService,
  WorkbookEditablePermission,
  WorkbookManageCollaboratorPermission,
  WorksheetEditPermission,
  awaitTime,
  createDefaultUser,
  distinctUntilChanged,
  filter,
  getSheetCommandTarget,
  merge_default,
  take,
  takeUntil
} from "./chunk-33NDYU5R.js";
import {
  __decorateClass,
  __decorateParam,
  __publicField,
  __toESM
} from "./chunk-NSSCU2QI.js";

// ../packages/watermark/src/common/const.ts
var WATERMARK_IMAGE_ALLOW_IMAGE_LIST = ["image/png", "image/jpeg", "image/jpg", "image/bmp"];
var WatermarkTextBaseConfig = {
  content: "",
  fontSize: 16,
  color: "rgb(0,0,0)",
  bold: false,
  italic: false,
  direction: "ltr",
  x: 60,
  y: 36,
  repeat: true,
  spacingX: 200,
  spacingY: 100,
  rotate: 0,
  opacity: 0.15
};
var WatermarkImageBaseConfig = {
  url: "",
  width: 100,
  height: 100,
  maintainAspectRatio: true,
  originRatio: 1,
  x: 60,
  y: 36,
  repeat: true,
  spacingX: 200,
  spacingY: 100,
  rotate: 0,
  opacity: 0.15
};
var WatermarkUserInfoBaseConfig = {
  name: true,
  email: false,
  phone: false,
  uid: false,
  fontSize: 16,
  color: "rgb(0,0,0)",
  bold: false,
  italic: false,
  direction: "ltr",
  x: 60,
  y: 60,
  repeat: true,
  spacingX: 200,
  spacingY: 100,
  rotate: -30,
  opacity: 0.15
};

// ../packages/watermark/src/controllers/config.schema.ts
var WATERMARK_PLUGIN_CONFIG_KEY = "watermark.config";
var configSymbol = Symbol(WATERMARK_PLUGIN_CONFIG_KEY);
var defaultPluginConfig = {};

// ../packages/watermark/src/services/watermark.service.ts
var WatermarkService = class extends Disposable {
  constructor(_localStorageService) {
    super();
    this._localStorageService = _localStorageService;
    __publicField(this, "_updateConfig$", new Subject());
    __publicField(this, "updateConfig$", this._updateConfig$.asObservable());
    __publicField(this, "_refresh$", new Subject());
    __publicField(this, "refresh$", this._refresh$.asObservable());
  }
  async getWatermarkConfig() {
    const res = await this._localStorageService.getItem(UNIVER_WATERMARK_STORAGE_KEY);
    return res;
  }
  updateWatermarkConfig(config) {
    this._localStorageService.setItem(UNIVER_WATERMARK_STORAGE_KEY, config);
    this._updateConfig$.next(config);
  }
  deleteWatermarkConfig() {
    this._localStorageService.removeItem(UNIVER_WATERMARK_STORAGE_KEY);
    this._updateConfig$.next(null);
  }
  refresh() {
    this._refresh$.next(Math.random());
  }
  dispose() {
    this._refresh$.complete();
    this._updateConfig$.complete();
  }
};
WatermarkService = __decorateClass([
  __decorateParam(0, Inject(ILocalStorageService))
], WatermarkService);

// ../packages/watermark/src/controllers/watermark.render.controller.ts
var WatermarkRenderController = class extends RxDisposable {
  constructor(_context, _watermarkService, _localStorageService, _userManagerService) {
    super();
    this._context = _context;
    this._watermarkService = _watermarkService;
    this._localStorageService = _localStorageService;
    this._userManagerService = _userManagerService;
    __publicField(this, "_watermarkLayer");
    this._watermarkLayer = new WatermarkLayer(_context.scene, [], UNIVER_WATERMARK_LAYER_INDEX);
    this._initAddRender();
    this._initWatermarkUpdate();
    this._initWatermarkConfig();
  }
  _initAddRender() {
    const { scene } = this._context;
    scene.addLayer(this._watermarkLayer);
  }
  async _initWatermarkConfig() {
    var _a;
    const config = await this._localStorageService.getItem(UNIVER_WATERMARK_STORAGE_KEY);
    if (config) {
      this._watermarkService.updateWatermarkConfig(config);
      (_a = this._context.mainComponent) == null ? void 0 : _a.makeDirty();
    }
  }
  _initWatermarkUpdate() {
    this.disposeWithMe(
      this._watermarkService.updateConfig$.subscribe((_config) => {
        var _a, _b;
        if (!_config) {
          this._watermarkLayer.updateConfig();
          (_a = this._context.mainComponent) == null ? void 0 : _a.makeDirty();
          return;
        }
        if (_config.type === "userInfo" /* UserInfo */) {
          this._watermarkLayer.updateConfig(_config, this._userManagerService.getCurrentUser());
        } else {
          this._watermarkLayer.updateConfig(_config);
        }
        (_b = this._context.mainComponent) == null ? void 0 : _b.makeDirty();
      })
    );
  }
};
WatermarkRenderController = __decorateClass([
  __decorateParam(1, Inject(WatermarkService)),
  __decorateParam(2, Inject(ILocalStorageService)),
  __decorateParam(3, Inject(UserManagerService))
], WatermarkRenderController);

// ../packages/watermark/src/plugin.ts
var PLUGIN_NAME = "UNIVER_WATERMARK_PLUGIN";
var UniverWatermarkPlugin = class extends Plugin {
  constructor(_config = defaultPluginConfig, _injector, _configService, _renderManagerSrv, _localStorageService) {
    super();
    this._config = _config;
    this._injector = _injector;
    this._configService = _configService;
    this._renderManagerSrv = _renderManagerSrv;
    this._localStorageService = _localStorageService;
    const { ...rest } = merge_default(
      {},
      defaultPluginConfig,
      this._config
    );
    this._configService.setConfig(WATERMARK_PLUGIN_CONFIG_KEY, rest);
    this._initWatermarkStorage();
    this._initDependencies();
  }
  async _initWatermarkStorage() {
    const config = this._configService.getConfig(WATERMARK_PLUGIN_CONFIG_KEY);
    if (!config) {
      return;
    }
    const { userWatermarkSettings, textWatermarkSettings, imageWatermarkSettings } = config;
    if (userWatermarkSettings) {
      this._localStorageService.setItem(UNIVER_WATERMARK_STORAGE_KEY, {
        type: "userInfo" /* UserInfo */,
        config: {
          userInfo: merge_default({}, WatermarkUserInfoBaseConfig, userWatermarkSettings)
        }
      });
    } else if (textWatermarkSettings) {
      this._localStorageService.setItem(UNIVER_WATERMARK_STORAGE_KEY, {
        type: "text" /* Text */,
        config: {
          text: merge_default({}, WatermarkTextBaseConfig, textWatermarkSettings)
        }
      });
    } else if (imageWatermarkSettings) {
      this._localStorageService.setItem(UNIVER_WATERMARK_STORAGE_KEY, {
        type: "image" /* Image */,
        config: {
          image: merge_default({}, WatermarkImageBaseConfig, imageWatermarkSettings)
        }
      });
    } else {
      const config2 = await this._localStorageService.getItem(UNIVER_WATERMARK_STORAGE_KEY);
      if ((config2 == null ? void 0 : config2.type) === "userInfo" /* UserInfo */) {
        this._localStorageService.removeItem(UNIVER_WATERMARK_STORAGE_KEY);
      }
    }
  }
  _initDependencies() {
    [[WatermarkService]].forEach((d) => {
      this._injector.add(d);
    });
  }
  onRendered() {
    const injector = this._injector;
    injector.get(WatermarkService);
    this._initRenderDependencies();
  }
  _initRenderDependencies() {
    [
      [WatermarkRenderController]
    ].forEach((d) => {
      this._renderManagerSrv.registerRenderModule(O.UNIVER_SHEET, d);
      this._renderManagerSrv.registerRenderModule(O.UNIVER_DOC, d);
    });
  }
};
__publicField(UniverWatermarkPlugin, "pluginName", PLUGIN_NAME);
UniverWatermarkPlugin = __decorateClass([
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IConfigService),
  __decorateParam(3, IRenderManagerService),
  __decorateParam(4, Inject(ILocalStorageService))
], UniverWatermarkPlugin);

// ../packages-experimental/debugger/src/controllers/config.schema.ts
var DEBUGGER_PLUGIN_CONFIG_KEY = "debugger.config";
var configSymbol2 = Symbol(DEBUGGER_PLUGIN_CONFIG_KEY);
var defaultPluginConfig2 = {};

// ../packages-experimental/debugger/src/controllers/dark-mode.controller.ts
var DarkModeController = class extends RxDisposable {
  constructor(_localStorageService) {
    super();
    this._localStorageService = _localStorageService;
    this._localStorageService.getItem("local.darkMode").then((darkMode) => {
      if (darkMode === "dark") {
        document.documentElement.classList.add("univer-dark");
      }
      if (darkMode === "system") {
        const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        darkModeMediaQuery.addEventListener("change", (e) => {
          if (e.matches) {
            document.documentElement.classList.add("univer-dark");
          } else {
            document.documentElement.classList.remove("univer-dark");
          }
        });
      }
    });
  }
};
DarkModeController = __decorateClass([
  __decorateParam(0, Inject(ILocalStorageService))
], DarkModeController);

// ../packages-experimental/debugger/src/commands/commands/float-dom.command.ts
var CreateFloatDomCommand = {
  id: "debugger.command.create-float-dom",
  type: 0 /* COMMAND */,
  handler: (accessor) => {
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const currentSheet = univerInstanceService.getCurrentUnitOfType(O.UNIVER_SHEET);
    if (currentSheet) {
      const floatDomService = accessor.get(SheetCanvasFloatDomManagerService);
      floatDomService.addFloatDomToPosition({
        allowTransform: true,
        initPosition: {
          startX: 200,
          endX: 400,
          startY: 200,
          endY: 400
        },
        componentKey: "ImageDemo",
        data: {
          aa: "128"
        }
      });
    } else {
      const floatDomController = accessor.get(DocFloatDomController);
      floatDomController.insertFloatDom({
        allowTransform: true,
        componentKey: "ImageDemo",
        data: {
          aa: "128"
        }
      }, {
        height: 300
      });
    }
    return true;
  }
};

// ../packages-experimental/debugger/src/commands/commands/unit.command.ts
var DisposeUniverCommand = {
  id: "debugger.command.dispose-unit",
  type: 0 /* COMMAND */,
  handler: () => {
    var _a;
    (_a = window.univer) == null ? void 0 : _a.dispose();
    window.univer = void 0;
    window.univerAPI = void 0;
    return true;
  }
};
var DisposeCurrentUnitCommand = {
  id: "debugger.command.dispose-current-unit",
  type: 0 /* COMMAND */,
  handler: async (accessor) => {
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const focused = univerInstanceService.getFocusedUnit();
    if (!focused) return false;
    return univerInstanceService.disposeUnit(focused.getUnitId());
  }
};
var CreateEmptySheetCommand = {
  id: "debugger.command.create-empty-sheet",
  type: 0 /* COMMAND */,
  handler: async (accessor) => {
    const univerInstanceService = accessor.get(IUniverInstanceService);
    univerInstanceService.createUnit(O.UNIVER_SHEET, {});
    return true;
  }
};
var LoadSheetSnapshotCommand = {
  id: "debugger.command.load-sheet-snapshot",
  type: 0 /* COMMAND */,
  handler: async (accessor) => {
    const fileOpenerService = accessor.get(ILocalFileService);
    const snapshotFile = await fileOpenerService.openFile({ multiple: false, accept: ".json" });
    if (snapshotFile.length !== 1) return false;
    const text = await snapshotFile[0].text();
    const instanceService = accessor.get(IUniverInstanceService);
    instanceService.createUnit(O.UNIVER_SHEET, JSON.parse(text));
    return true;
  }
};

// ../packages-experimental/debugger/src/commands/operations/cell.operation.ts
var ShowCellContentOperation = {
  id: "debugger.operation.show-cell-content",
  type: 1 /* OPERATION */,
  handler(accessor) {
    const logService = accessor.get(ILogService);
    const selectionManagerService = accessor.get(SheetsSelectionsService);
    const selections = selectionManagerService.getCurrentSelections();
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const target = getSheetCommandTarget(univerInstanceService);
    const matrix = new ObjectMatrix();
    selections.forEach((selection) => {
      Range.foreach(selection.range, (row, col) => {
        matrix.setValue(row, col, target == null ? void 0 : target.worksheet.getCell(row, col));
      });
    });
    logService.debug("cell-content", matrix);
    return true;
  }
};

// ../packages-experimental/debugger/src/commands/operations/change-user.operation.ts
var ChangeUserCommand = {
  id: "debugger.operation.changeUser",
  type: 1 /* OPERATION */,
  handler: async (accessor, params) => {
    const userManagerService = accessor.get(UserManagerService);
    const univerInstanceService = accessor.get(IUniverInstanceService);
    userManagerService.setCurrentUser(createDefaultUser(params.value));
    const workbook = univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET);
    const permissionService = accessor.get(IPermissionService);
    const unitId = workbook.getUnitId();
    if (params.value === 2 /* Owner */) {
      permissionService.updatePermissionPoint(new WorkbookManageCollaboratorPermission(unitId).id, true);
    } else {
      permissionService.updatePermissionPoint(new WorkbookManageCollaboratorPermission(unitId).id, false);
    }
    return true;
  }
};

// ../packages-experimental/debugger/src/commands/operations/confirm.operation.ts
var ConfirmOperation = {
  id: "debugger.operation.confirm",
  type: 0 /* COMMAND */,
  handler: async (accessor, params) => {
    const confirmService = accessor.get(IConfirmService);
    confirmService.open({
      id: "confirm1",
      children: { title: "Confirm Content" },
      title: { title: "Confirm Title" },
      confirmText: "hello",
      cancelText: "world",
      onClose() {
        confirmService.close("confirm1");
      }
    });
    confirmService.open({
      id: "confirm2",
      children: { title: "Confirm2 Content" },
      title: { title: "Confirm2 Title" },
      onClose() {
        confirmService.close("confirm2");
      }
    });
    return true;
  }
};

// ../packages-experimental/debugger/src/commands/operations/dark-mode.operation.ts
var DarkModeOperation = {
  id: "debugger.operation.dark-mode",
  type: 0 /* COMMAND */,
  handler: async (accessor, params) => {
    const localStorageService = accessor.get(ILocalStorageService);
    localStorageService.setItem("local.darkMode", params.value);
    window.location.reload();
    return true;
  }
};

// ../packages-experimental/debugger/src/commands/operations/dialog.operation.ts
var DialogOperation = {
  id: "debugger.operation.dialog",
  type: 0 /* COMMAND */,
  handler: async (accessor, params) => {
    const dialogService = accessor.get(IDialogService);
    const { value } = params;
    if (value === "draggable") {
      dialogService.open({
        id: "draggable",
        children: { title: "Draggable Dialog Content" },
        title: { title: "Draggable Dialog" },
        draggable: true,
        destroyOnClose: true,
        preservePositionOnDestroy: true,
        width: 350,
        onClose() {
          dialogService.close("draggable");
        }
      });
    } else {
      dialogService.open({
        id: "dialog1",
        children: { title: "Dialog Content" },
        footer: { title: "Dialog Footer" },
        title: { title: "Dialog Title" },
        draggable: false,
        onClose() {
          dialogService.close("dialog1");
        }
      });
    }
    return true;
  }
};

// ../packages-experimental/debugger/src/commands/operations/locale.operation.ts
var LocaleOperation = {
  id: "debugger.operation.locale",
  type: 0 /* COMMAND */,
  handler: async (accessor, params) => {
    const localeService = accessor.get(LocaleService);
    localeService.setLocale(params.value);
    return true;
  }
};

// ../packages-experimental/debugger/src/commands/operations/message.operation.ts
var MessageOperation = {
  id: "debugger.operation.message",
  type: 1 /* OPERATION */,
  handler: async (accessor) => {
    const messageService = accessor.get(IMessageService);
    messageService.show({
      type: "success" /* Success */,
      content: "Demo message",
      duration: 1500
    });
    return true;
  }
};

// ../packages-experimental/debugger/src/commands/operations/notification.operation.ts
var NotificationOperation = {
  id: "debugger.operation.notification",
  type: 0 /* COMMAND */,
  handler: async (accessor, params) => {
    const notificationService = accessor.get(INotificationService);
    const { value = "" } = params;
    const type = value.indexOf("Success") > -1 ? "success" : value.indexOf("Info") > -1 ? "info" : value.indexOf("Warning") > -1 ? "warning" : "error";
    notificationService.show({
      type,
      content: value || "Notification Content",
      title: "Notification Title"
    });
    return true;
  }
};

// ../packages-experimental/debugger/src/views/watermark/WatermarkPanel.tsx
var import_react = __toESM(require_react());

// ../packages-experimental/debugger/src/views/watermark/WatermarkImageSetting.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
function WatermarkImageSetting({ config, onChange }) {
  const fileOpenService = useDependency(ILocalFileService);
  const localeService = useDependency(LocaleService);
  if (!config) return null;
  const handleUpdateImageUrl = async () => {
    const files = await fileOpenService.openFile({
      multiple: false,
      accept: WATERMARK_IMAGE_ALLOW_IMAGE_LIST.map((image2) => `.${image2.replace("image/", "")}`).join(",")
    });
    const fileLength = files.length;
    if (fileLength === 0) {
      return false;
    }
    const file = files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
      var _a;
      if ((_a = event.target) == null ? void 0 : _a.result) {
        const base64String = event.target.result;
        const img = new Image();
        img.onload = function() {
          onChange({ ...config, url: base64String, width: Math.max(20, img.width), height: Math.max(img.height, 20), originRatio: img.width / img.height });
        };
        img.src = base64String;
      }
    };
    reader.readAsDataURL(file);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "univer-grid univer-gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "univer-text-gray-400", children: localeService.t("univer-watermark.image") }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "univer-mb-4 univer-grid univer-gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        Button,
        {
          className: "univer-mb-2",
          onClick: handleUpdateImageUrl,
          children: config.url ? localeService.t("univer-watermark.replaceImage") : localeService.t("univer-watermark.uploadImage")
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "univer-flex univer-gap-2 univer-text-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "univer-grid univer-flex-1 univer-gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: localeService.t("univer-watermark.opacity") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            InputNumber,
            {
              className: "univer-box-border univer-h-7",
              value: config.opacity,
              max: 1,
              min: 0,
              step: 0.05,
              onChange: (val) => {
                if (val != null) {
                  onChange({ ...config, opacity: Number.parseFloat(val.toString()) });
                }
              }
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "univer-grid univer-flex-1 univer-gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: localeService.t("univer-watermark.keepRatio") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            Checkbox,
            {
              className: "univer-justify-center univer-self-baseline",
              checked: config.maintainAspectRatio,
              onChange: (val) => {
                if (val === true) {
                  onChange({ ...config, maintainAspectRatio: val, height: Math.round(config.width / config.originRatio) });
                } else {
                  onChange({ ...config, maintainAspectRatio: val });
                }
              }
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "univer-grid univer-gap-2 univer-text-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "univer-flex univer-gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "univer-grid univer-flex-1 univer-gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: localeService.t("univer-watermark.width") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          InputNumber,
          {
            className: "univer-box-border univer-h-7",
            value: config.width,
            min: 20,
            onChange: (val) => {
              if (val != null) {
                const newWidth = Math.max(20, Number.parseInt(val.toString()));
                if (config.maintainAspectRatio) {
                  onChange({ ...config, width: newWidth, height: Math.round(newWidth / config.originRatio) });
                } else {
                  onChange({ ...config, width: newWidth });
                }
              }
            }
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "univer-grid univer-flex-1 univer-gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: localeService.t("univer-watermark.height") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          InputNumber,
          {
            className: "univer-box-border univer-h-7",
            value: config.height,
            min: 20,
            onChange: (val) => {
              if (val != null) {
                const newHeight = Math.max(20, Number.parseInt(val.toString()));
                if (config.maintainAspectRatio) {
                  onChange({ ...config, height: newHeight, width: Math.round(newHeight * config.originRatio) });
                } else {
                  onChange({ ...config, height: Number.parseInt(val.toString()) });
                }
              }
            }
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "univer-text-gray-400", children: localeService.t("univer-watermark.layout") }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "univer-grid univer-gap-2 univer-text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "univer-flex univer-gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "univer-grid univer-flex-1 univer-gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: localeService.t("univer-watermark.rotate") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            InputNumber,
            {
              className: "univer-box-border univer-h-7",
              value: config.rotate,
              max: 360,
              min: -360,
              onChange: (val) => {
                if (val != null) {
                  onChange({ ...config, rotate: Number.parseInt(val.toString()) });
                }
              }
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "univer-grid univer-flex-1 univer-gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: localeService.t("univer-watermark.repeat") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            Checkbox,
            {
              className: "univer-justify-center univer-self-baseline",
              checked: config.repeat,
              onChange: (val) => onChange({ ...config, repeat: val })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "univer-flex univer-gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "univer-grid univer-flex-1 univer-gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: localeService.t("univer-watermark.spacingX") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            InputNumber,
            {
              className: "univer-box-border univer-h-7",
              value: config.spacingX,
              min: 0,
              onChange: (val) => {
                if (val != null) {
                  onChange({ ...config, spacingX: Number.parseInt(val.toString()) });
                }
              }
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "univer-grid univer-flex-1 univer-gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: localeService.t("univer-watermark.spacingY") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            InputNumber,
            {
              className: "univer-box-border univer-h-7",
              value: config.spacingY,
              min: 0,
              onChange: (val) => {
                if (val != null) {
                  onChange({ ...config, spacingY: Number.parseInt(val.toString()) });
                }
              }
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "univer-flex univer-gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "univer-grid univer-flex-1 univer-gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: localeService.t("univer-watermark.startX") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            InputNumber,
            {
              className: "univer-box-border univer-h-7",
              value: config.x,
              min: 0,
              onChange: (val) => {
                if (val != null) {
                  onChange({ ...config, x: Number.parseInt(val.toString()) });
                }
              }
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "univer-grid univer-flex-1 univer-gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: localeService.t("univer-watermark.startY") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            InputNumber,
            {
              className: "univer-box-border univer-h-7",
              value: config.y,
              min: 0,
              onChange: (val) => {
                if (val != null) {
                  onChange({ ...config, y: Number.parseInt(val.toString()) });
                }
              }
            }
          )
        ] })
      ] })
    ] })
  ] });
}

// ../packages-experimental/debugger/src/views/watermark/WatermarkTextSetting.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
function WatermarkTextSetting(props) {
  var _a;
  const { config, onChange } = props;
  const localeService = useDependency(LocaleService);
  if (!config) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "univer-grid univer-gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "univer-text-gray-400", children: localeService.t("univer-watermark.style") }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "univer-mb-4 univer-grid univer-gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { children: localeService.t("univer-watermark.content") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        Input,
        {
          value: config.content,
          onChange: (val) => onChange({ ...config, content: val }),
          placeholder: localeService.t("univer-watermark.textPlaceholder")
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "univer-grid univer-gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "univer-flex univer-gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "univer-grid univer-gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { children: localeService.t("univer-watermark.fontSize") }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            InputNumber,
            {
              className: "univer-box-border univer-h-7",
              value: config.fontSize,
              max: 72,
              min: 12,
              onChange: (val) => {
                if (val != null) {
                  onChange({ ...config, fontSize: Number.parseInt(val.toString()) });
                }
              }
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "univer-grid univer-gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { children: localeService.t("univer-watermark.direction") }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            Select,
            {
              className: "univer-box-border univer-h-7",
              value: config.direction,
              options: [
                { label: localeService.t("univer-watermark.ltr"), value: "ltr" },
                { label: localeService.t("univer-watermark.rtl"), value: "rtl" }
              ],
              onChange: (v) => onChange({ ...config, direction: v })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "univer-grid univer-gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { children: localeService.t("univer-watermark.opacity") }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            InputNumber,
            {
              className: "univer-box-border univer-h-7",
              max: 1,
              min: 0,
              step: 0.05,
              value: config.opacity,
              onChange: (val) => {
                if (val != null) {
                  onChange({ ...config, opacity: Number.parseFloat(val.toString()) });
                }
              }
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "div",
        {
          className: `
                      univer-flex univer-justify-around univer-gap-4
                      [&_a]:univer-flex [&_a]:univer-size-6 [&_a]:univer-items-center [&_a]:univer-justify-center
                      [&_a]:univer-rounded
                    `,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              Dropdown,
              {
                overlay: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "univer-rounded-lg univer-p-4", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ColorPicker, { value: config.color, onChange: (val) => onChange({ ...config, color: val }) }) }),
                children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { className: "hover:univer-bg-gray-100", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(font_color_default, { extend: { colorChannel1: (_a = config.color) != null ? _a : "#2c53f1" } }) })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "a",
              {
                className: clsx("hover:univer-bg-gray-100", {
                  "univer-bg-gray-200": config.bold
                }),
                onClick: () => {
                  onChange({ ...config, bold: !config.bold });
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(bold_single_default, {})
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "a",
              {
                className: clsx("hover:univer-bg-gray-100", {
                  "univer-bg-gray-200": config.italic
                }),
                onClick: () => {
                  onChange({ ...config, italic: !config.italic });
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(italic_single_default, {})
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "univer-text-gray-400", children: localeService.t("univer-watermark.layout") }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "univer-grid univer-gap-2 univer-text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "univer-flex univer-gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "univer-grid univer-flex-1 univer-gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { children: localeService.t("univer-watermark.rotate") }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            InputNumber,
            {
              className: "univer-box-border univer-h-7",
              value: config.rotate,
              max: 360,
              min: -360,
              onChange: (val) => {
                if (val != null) {
                  onChange({ ...config, rotate: Number.parseInt(val.toString()) });
                }
              }
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "univer-grid univer-flex-1 univer-gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { children: localeService.t("univer-watermark.repeat") }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            Checkbox,
            {
              className: "univer-justify-center univer-self-baseline",
              checked: config.repeat,
              onChange: (val) => onChange({ ...config, repeat: val })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "univer-flex univer-gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "univer-grid univer-gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { children: localeService.t("univer-watermark.spacingX") }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            InputNumber,
            {
              className: "univer-box-border univer-h-7",
              value: config.spacingX,
              min: 0,
              onChange: (val) => {
                if (val != null) {
                  onChange({ ...config, spacingX: Number.parseInt(val.toString()) });
                }
              }
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "univer-grid univer-gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { children: localeService.t("univer-watermark.spacingY") }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            InputNumber,
            {
              className: "univer-box-border univer-h-7",
              value: config.spacingY,
              min: 0,
              onChange: (val) => {
                if (val != null) {
                  onChange({ ...config, spacingY: Number.parseInt(val.toString()) });
                }
              }
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "univer-flex univer-gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "univer-grid univer-gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { children: localeService.t("univer-watermark.startX") }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            InputNumber,
            {
              className: "univer-box-border univer-h-7",
              value: config.x,
              min: 0,
              onChange: (val) => {
                if (val != null) {
                  onChange({ ...config, x: Number.parseInt(val.toString()) });
                }
              }
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "univer-grid univer-gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { children: localeService.t("univer-watermark.startY") }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            InputNumber,
            {
              className: "univer-box-border univer-h-7",
              value: config.y,
              min: 0,
              onChange: (val) => {
                if (val != null) {
                  onChange({ ...config, y: Number.parseInt(val.toString()) });
                }
              }
            }
          )
        ] })
      ] })
    ] })
  ] });
}

// ../packages-experimental/debugger/src/views/watermark/WatermarkPanel.tsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var WatermarkPanel = () => {
  const [watermarkType, setWatermarkType] = (0, import_react.useState)("text" /* Text */);
  const [config, setConfig] = (0, import_react.useState)();
  const watermarkService = useDependency(WatermarkService);
  const localStorageService = useDependency(ILocalStorageService);
  const _refresh = useObservable(watermarkService.refresh$);
  const localeService = useDependency(LocaleService);
  function handleConfigChange(config2, type) {
    setConfig(config2);
    watermarkService.updateWatermarkConfig({ type: type != null ? type : watermarkType, config: config2 });
  }
  const getWatermarkConfig = (0, import_react.useCallback)(async () => {
    const watermarkConfig = await localStorageService.getItem(UNIVER_WATERMARK_STORAGE_KEY);
    if (watermarkConfig) {
      setWatermarkType(watermarkConfig.type);
      setConfig(watermarkConfig.config);
    } else {
      setConfig({ text: WatermarkTextBaseConfig });
    }
  }, []);
  (0, import_react.useEffect)(() => {
    getWatermarkConfig();
  }, [_refresh, getWatermarkConfig]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "univer-grid univer-gap-3 univer-text-sm", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "univer-grid univer-gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "univer-text-gray-400", children: localeService.t("univer-watermark.type") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        Select,
        {
          value: watermarkType,
          options: [
            { label: localeService.t("univer-watermark.text"), value: "text" /* Text */ },
            { label: localeService.t("univer-watermark.image"), value: "image" /* Image */ }
          ],
          onChange: (v) => {
            setWatermarkType(v);
            if (v === "text" /* Text */) {
              handleConfigChange({ text: WatermarkTextBaseConfig }, "text" /* Text */);
            } else if (v === "image" /* Image */) {
              handleConfigChange({ image: WatermarkImageBaseConfig }, "image" /* Image */);
            }
          }
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "univer-grid univer-gap-2", children: [
      watermarkType === "text" /* Text */ && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(WatermarkTextSetting, { config: config == null ? void 0 : config.text, onChange: (v) => handleConfigChange({ text: v }) }),
      watermarkType === "image" /* Image */ && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(WatermarkImageSetting, { config: config == null ? void 0 : config.image, onChange: (v) => handleConfigChange({ image: v }) })
    ] })
  ] });
};

// ../packages-experimental/debugger/src/views/watermark/WatermarkPanelFooter.tsx
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
function WatermarkPanelFooter() {
  const sidebarService = useDependency(ISidebarService);
  const watermarkService = useDependency(WatermarkService);
  const localeService = useDependency(LocaleService);
  const clipboardService = useDependency(IClipboardInterfaceService);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "univer-flex univer-items-center univer-justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "a",
      {
        className: "univer-text-sm univer-text-primary-600 univer-underline",
        onClick: () => {
          watermarkService.updateWatermarkConfig({
            type: "text" /* Text */,
            config: { text: WatermarkTextBaseConfig }
          });
          watermarkService.refresh();
        },
        children: localeService.t("univer-watermark.cancel")
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "univer-flex univer-items-center univer-gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        Button,
        {
          onClick: async () => {
            const watermarkConfig = await watermarkService.getWatermarkConfig();
            let config;
            if ((watermarkConfig == null ? void 0 : watermarkConfig.type) === "text" /* Text */) {
              config = watermarkConfig.config.text;
            } else if ((watermarkConfig == null ? void 0 : watermarkConfig.type) === "image" /* Image */) {
              config = watermarkConfig.config.image;
            }
            clipboardService.writeText(JSON.stringify(config));
          },
          children: localeService.t("univer-watermark.copy")
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        Button,
        {
          onClick: async () => {
            var _a, _b;
            const watermarkConfig = await watermarkService.getWatermarkConfig();
            if ((watermarkConfig == null ? void 0 : watermarkConfig.type) === "text" /* Text */ && !((_a = watermarkConfig.config.text) == null ? void 0 : _a.content)) {
              watermarkService.deleteWatermarkConfig();
            } else if ((watermarkConfig == null ? void 0 : watermarkConfig.type) === "image" /* Image */ && !((_b = watermarkConfig.config.image) == null ? void 0 : _b.url)) {
              watermarkService.deleteWatermarkConfig();
            }
            sidebarService.close();
          },
          children: localeService.t("univer-watermark.close")
        }
      )
    ] })
  ] });
}

// ../packages-experimental/debugger/src/controllers/watermark.menu.controller.ts
var UNIVER_WATERMARK_MENU = "UNIVER_WATERMARK_MENU";
var WATERMARK_PANEL = "WATERMARK_PANEL";
var WATERMARK_PANEL_FOOTER = "WATERMARK_PANEL_FOOTER";
var UniverWatermarkMenuController = class extends Disposable {
  constructor(_menuManagerService, _componentManager) {
    super();
    this._menuManagerService = _menuManagerService;
    this._componentManager = _componentManager;
    this._initComponents();
  }
  _initComponents() {
    [
      [UNIVER_WATERMARK_MENU, watermark_single_default],
      [WATERMARK_PANEL, WatermarkPanel],
      [WATERMARK_PANEL_FOOTER, WatermarkPanelFooter]
    ].forEach(([key, component]) => {
      this.disposeWithMe(this._componentManager.register(key, component));
    });
  }
};
UniverWatermarkMenuController = __decorateClass([
  __decorateParam(0, IMenuManagerService),
  __decorateParam(1, Inject(ComponentManager))
], UniverWatermarkMenuController);

// ../packages-experimental/debugger/src/commands/operations/open-watermark-panel.operation.ts
var OpenWatermarkPanelOperation = {
  type: 1 /* OPERATION */,
  id: "univer.operation.open-watermark-panel",
  handler(accessor) {
    const sidebarService = accessor.get(ISidebarService);
    const localeService = accessor.get(LocaleService);
    sidebarService.open({
      header: { title: localeService.t("univer-watermark.title") },
      children: { label: WATERMARK_PANEL },
      footer: { label: WATERMARK_PANEL_FOOTER },
      onClose: () => {
      },
      width: 330
    });
    return true;
  }
};

// ../packages-experimental/debugger/src/controllers/local-save/record.controller.ts
var RecordController = class {
  constructor(_commandService) {
    this._commandService = _commandService;
  }
  record() {
    return new Observable((subscribe) => {
      navigator.mediaDevices.getDisplayMedia({ video: true }).then((stream) => {
        subscribe.next({ type: "start" });
        const mime = MediaRecorder.isTypeSupported("video/webm; codecs=vp9") ? "video/webm; codecs=vp9" : "video/webm";
        const mediaRecorder = new MediaRecorder(stream, { mimeType: mime });
        const chunks = [];
        mediaRecorder.addEventListener("dataavailable", function(e) {
          chunks.push(e.data);
        });
        mediaRecorder.addEventListener("stop", function() {
          const blob = new Blob(chunks, { type: chunks[0].type });
          subscribe.next({ type: "finish", data: blob });
          subscribe.complete();
        });
        mediaRecorder.start();
      });
    });
  }
  startSaveCommands() {
    const result = [];
    const startTime = performance.now();
    const disposable = this._commandService.beforeCommandExecuted((commandInfo) => {
      try {
        result.push([
          String((performance.now() - startTime) / 1e3),
          commandInfo.id,
          String(commandInfo.type || 0 /* COMMAND */),
          JSON.stringify(commandInfo.params || "")
        ]);
      } catch (err) {
        console.error(`${commandInfo.id}  unable to serialize`);
        console.error(err);
      }
    });
    return () => {
      disposable.dispose();
      return result;
    };
  }
};
RecordController = __decorateClass([
  __decorateParam(0, Inject(ICommandService))
], RecordController);

// ../packages-experimental/debugger/src/commands/operations/save-snapshot.operations.ts
var filterStyle = (workbookData) => {
  const sheets = workbookData.sheets;
  const cacheStyle = {};
  Object.keys(sheets).forEach((sheetId) => {
    const sheet = sheets[sheetId];
    new ObjectMatrix(sheet.cellData).forValue((_r, _c, value) => {
      const s = value == null ? void 0 : value.s;
      if (s && typeof s === "string") {
        const style = workbookData.styles[s];
        if (style) {
          cacheStyle[s] = style;
        }
      }
    });
  });
  workbookData.styles = cacheStyle;
  return workbookData;
};
var SaveSnapshotOptions = {
  id: "debugger.operation.saveSnapshot",
  type: 1 /* OPERATION */,
  handler: async (accessor, params) => {
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const resourceLoaderService = accessor.get(IResourceLoaderService);
    const localFileService = accessor.get(ILocalFileService);
    const recordController = accessor.get(RecordController);
    const preName = (/* @__PURE__ */ new Date()).toLocaleString();
    const workbook = univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET);
    if (!workbook) {
      const doc = univerInstanceService.getCurrentUnitForType(O.UNIVER_DOC);
      const snapshot2 = resourceLoaderService.saveUnit(doc.getUnitId());
      if (false) {
        const gitHash = process.env.GIT_COMMIT_HASH;
        const gitBranch = process.env.GIT_REF_NAME;
        const buildTime = process.env.BUILD_TIME;
        snapshot2.__env__ = { gitHash, gitBranch, buildTime };
      }
      const text = JSON.stringify(snapshot2, null, 2);
      localFileService.downloadFile(new Blob([text]), `${preName} snapshot.json`);
      return true;
    }
    const worksheet = workbook.getActiveSheet();
    if (!worksheet) {
      return false;
    }
    const snapshot = resourceLoaderService.saveUnit(workbook.getUnitId());
    if (false) {
      const gitHash = process.env.GIT_COMMIT_HASH;
      const gitBranch = process.env.GIT_REF_NAME;
      const buildTime = process.env.BUILD_TIME;
      snapshot.__env__ = { gitHash, gitBranch, buildTime };
    }
    switch (params.value) {
      case "sheet": {
        const sheetId = worksheet.getSheetId();
        const sheet = snapshot.sheets[sheetId];
        snapshot.sheets = { [sheetId]: sheet };
        snapshot.sheetOrder = [sheetId];
        const text = JSON.stringify(filterStyle(snapshot), null, 2);
        localFileService.downloadFile(new Blob([text]), `${preName} snapshot.json`);
        break;
      }
      case "workbook": {
        const text = JSON.stringify(filterStyle(snapshot), null, 2);
        localFileService.downloadFile(new Blob([text]), `${preName} snapshot.json`);
        break;
      }
      case "record": {
        let endCommands = () => [];
        recordController.record().subscribe((v) => {
          if (v.type === "start") {
            endCommands = recordController.startSaveCommands();
          }
          if (v.type === "finish") {
            const commands = endCommands();
            localFileService.downloadFile(v.data, `${preName} video.webm`);
            localFileService.downloadFile(new Blob([JSON.stringify(commands, null, 2)]), `${preName} commands.json`);
          }
        });
      }
    }
    return true;
  }
};

// ../packages-experimental/debugger/src/commands/operations/set.editable.operation.ts
var SetEditable = {
  id: "debugger.operation.set.editable",
  type: 1 /* OPERATION */,
  handler: (accessor, params) => {
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const target = getSheetCommandTarget(univerInstanceService);
    if (!target) {
      return false;
    }
    const { workbook, worksheet, unitId, subUnitId } = target;
    const permissionService = accessor.get(IPermissionService);
    if (!workbook || !worksheet) {
      return false;
    }
    if (params.value === "sheet") {
      const editable = permissionService.getPermissionPoint(new WorksheetEditPermission(unitId, subUnitId).id);
      permissionService.updatePermissionPoint(new WorksheetEditPermission(unitId, subUnitId).id, !editable);
    } else {
      const unitId2 = workbook.getUnitId();
      const editable = permissionService.getPermissionPoint(new WorkbookEditablePermission(unitId2).id);
      permissionService.updatePermissionPoint(new WorkbookEditablePermission(unitId2).id, !editable);
    }
    return true;
  }
};

// ../packages-experimental/debugger/src/views/test-editor/component-name.ts
var TEST_EDITOR_CONTAINER_COMPONENT = "TestEditorContainer";

// ../packages-experimental/debugger/src/commands/operations/sidebar.operation.ts
var SidebarOperation = {
  id: "debugger.operation.sidebar",
  type: 0 /* COMMAND */,
  handler: async (accessor, params) => {
    const sidebarService = accessor.get(ISidebarService);
    const editorService = accessor.get(IEditorService);
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const unit = univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET);
    switch (params.value) {
      case "open":
        sidebarService.open({
          header: { title: "Sidebar title" },
          children: { label: TEST_EDITOR_CONTAINER_COMPONENT },
          footer: { title: "Sidebar Footer" },
          onClose: () => {
          }
        });
        break;
      case "close":
      default:
        sidebarService.close();
        break;
    }
    return true;
  }
};

// ../packages-experimental/debugger/src/commands/operations/theme.operation.ts
var ThemeOperation = {
  id: "debugger.operation.theme",
  type: 0 /* COMMAND */,
  handler: async (accessor, params) => {
    const themeService = accessor.get(ThemeService);
    params.value && themeService.setTheme(params.value);
    return true;
  }
};

// ../packages-experimental/debugger/src/components/float-button.tsx
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var FloatButton = () => {
  const divStyle = {
    width: "100px",
    height: "30px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  };
  const clickHandler = () => {
    console.warn("click");
  };
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: divStyle, onClick: clickHandler, children: "FloatButton" });
};
var AIButton = () => {
  const divStyle = {
    width: "80px",
    height: "50px",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: "25px",
    border: "none",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    background: "linear-gradient(90deg, #00C9FF 0%, #92FE9D 50%, #00C9FF 100%)",
    backgroundSize: "200% auto",
    animation: "gradient 3s linear infinite",
    ":hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 10px 20px rgba(0, 201, 255, 0.3)"
    }
  };
  const clickHandler = () => {
    console.warn("click");
  };
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("button", { type: "button", style: divStyle, onClick: clickHandler, children: [
    "AI",
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("style", { children: `
                    @keyframes gradient {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }

                    button:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 10px 20px rgba(0, 201, 255, 0.3);
                    }
                ` })
  ] });
};

// ../packages-experimental/debugger/src/components/Image.tsx
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var image = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEBUSExMWFhIVFhIXEhYYFRUWGBYYFRUWFhUWGBUYHyghGB4lGxYVJDEhJSktLi4uGh8zODMsNyktLisBCgoKDg0OGxAQGysgHSYrLS03Ky4tKzctKy8tNysvLS83LS0tLS0rLS0rLS0tLS0vLTItLTc1LS0tLS0tNS0tLf/AABEIASsAqAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xAA8EAACAQIEAggEAgoCAwEAAAAAAQIDEQQFEiExQQYTIjJRYXGRB4GhwUKxFCMzUmJygpLR4UPwFlPCFf/EABkBAQADAQEAAAAAAAAAAAAAAAABAwQFAv/EADERAQACAgEDAQQIBwEAAAAAAAABAgMRBBIhMQUTIjJRQWFxgZGxwdEUJDNSoeHwI//aAAwDAQACEQMRAD8A7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQ+n3TupgMRTpRpRlF0+slqbTktbi4wtwasvHvIm+nU8asI5YG7rKUW0lFycN9Shq2vw89nY4Zm/SbFYpwoY2Fq1GU3GpOm6VWMZLS6bWyalZPh+FEwiX6DwudUZ4WOL1qNCUFPVLbSmuD809reJ9ybOsPioOdCoqkYvTK100+Nmmk1sfmfE59Wjhlg6c5dU5a+rW61KV9lx4q9vHfidw+FPRCeAw0pVp6q+IcZ1Eu7Cy7MF4tXd34+gnW9QRteAeKk7f9+pS+kXTejRm6VNSr1ucYq9vXkvmNEzpcq2IjFXk0jSnnMOSk/kl+bKDHpRiZbywclH+GS1L8vzJDC5vGotUbu3ei1acfW/H5+5m5Fc+t4ph6pfHv3lr/8A2o/uS+hlp5xTfG8fVf4uV/D1FOyju3yPmOxNOku3JX8Lo5mDkc3JMxWN6+cNN64qx3W2lWjJXi0/RmQ59h8+pN9iSv4xnv8AcsmV5/GTUZvd8G9vf/J1aXyR/Urr648M09M/DKdABcgAILPel2DwlSFOvVUZz02Vm9Kk7Jyt3Vfx8wJ0AAAAAAAAgulnRTD4+l1dZNSX7OpGynB+Ta3XinsToA/Lue5K8LXr4aEnUq0aqSmovXJaYyi7Ju20l7H6C6B4+vWy+jUxEHCrps7uLc0tlPZu11ye9zPn2Ag0p6VqTabsr9rz+SMHRis4wqUrX6uTlBeUt7f3avcxfxcxyfYWjtrcSu9lHs+uPKO6fZ1PDYKpOO9ScnGn6ylpgiP6CdFYQpqc+1J7yb4zlzbZpdO6kquBjUa7VKpTnUXgozvL2T+hduj9WLw9Nx4OKfub/oZfMsWcZvhcIoqrJRv3UoSk/aKdjQrUsPiKaxFBxls7SjztxjJfZ8DnfxL/AEn9MnSlU0QlUVSlrk4wlFwhG8ZcLxas1x9y19AMLKFCrJ/s6k46G7rXpgozqpPgm1bz03Kq5N26Xua9tsOY508JQm0u03ZW4tvZRXqzRyPohUxT63Eycm97Pux8ox5+prZ/aeIw6fddacvmovT+Zv8AxAzd0ofo0YyShTpTTjOUb6taepR7y2RbM9MPFK9Up2p0Bwum2l35NWTXpsRtfKJ4d2cnOn+GT70fJvn6mP4YZrWm3Sm24Ok6kYybbg4zUNm99Mk728UW3N6acWmRW3U9ZMfT2fejWaa49XJ9pLbztxX3JDPHW/Rq36Pbr+rqdTf9/S9P1scozLNpYacMTvppapTinZy3p7W57X9zrmCx9OrRhXhJOlOEakZctMo6k/LY8xXp7Ji3VDhHQf4m4nD16sMX1lSnZpwm/wBZTqx5drgnwa5EDUxSx+ZRqYuqqdGc3Vry7VlCHdpwSTd2kor3MPxOz2hjMxqYjDx0wSjDWn+2cLrrbW28Fxuopm50F+HuKzGUZy1UcLZXqtbzXJUovvfzcF58D39HdGnbejvT/BYzEfo1GU+s0SnHVDSpRja9vDitnYtZWeiXQXBZfeVCDdVrTKrOWqbWzaT4RV0tklwLMeXoAAAAAAABgx1PVTkvLb1W6Kth8T1VfVylCUfna8fqrfMuBS86tTqb8FJ+3FfQ43qlLxemTHHfx/3+WvjWr3rbwx4mg2nspXVpRfCS8Nzz0YxaoQ6m94RfYT2lBfuu/G3jxNuLTV1wZG5hSXC0W+Slxt5NNMp4PqcY6+zy7+1GXjTa3VRZ62OpuPas1x3St67lczvPU4yjTa2T1zbtCEebcnwIWtflSjf+KdVr+3UvzIbMcvq1lpqSvBbqnFKMF56Vxfm7s6F/VOPWPdnauvDy2nv2bE5xxFGM6VRTtPVSnZxWuHGLT3js3x5NMulfKsNmFKnOpqjVgrKUXpnG/ei+Kkr8ndcyi5Tlc6EnoV4yt1kH3ZW4ejV3ZonqGIcO7UcP4aie3pOKafzse8PPw546ZnU/KXnJxsmGd18LflOU0cLGWjU5StrnOWqUrcFfgkt9kkt2+ZG5/majFpO8ntFLjvsQ2Jzidt61L+mTm/7Yps0YycndXbfGctnvxUI/h9Xv4WLsmfDgruZj7IVxTJlt9P2q1n+Fq1OuhsrRhGN77yc9dTdK1laMf6WdM6KY6WFyTDyqpKcKahFJ31NScKe/mkm/Dcrjw6saGLzd1Y0cNF9jDp6/Oo27+0Wl6tnLj1O94tOtduzbHErXUfi163w3pZhWlKEnQm1KdWcYpxcpX/Bsrtt8Lczs+Dw8adOFOO0YRjGPpFJL8iM6K5f1WHV1259qX/yvb82TJ0eHW9cMRedyz5pibzoABpVAAAAAAAABVemWG2cl4J+2z+li1ERny7vz+xm5V/Z09p/bMS9Vr1e781UyPGXWh/0/dEJ8RsRiMLBY3DQpycYypVtcNemE2mprdWtJcfM3cVT6mrtwlvF8k+X+Ccw9aNWm4ySaacZxdnx4prmjlcnHGDNXk4u9Ld/3hdhvN6zjt8Udv9uOYf4o1NCjUwtOU0ra4TnTv5uLUlf0sSOD+JmH0rrKNWM7drTonG/k9Sdvkb2dfCWm6jnh6mmD36qT7v8ALLw8n7lXx/w0xke5By+cX9zXFuFmjc6/KVla5o+GVny74lYOd+sUqVn2dUJSuuT7F7Py+pvf+cZfOWnr4ra+pwqKPpdx4nPqfw5zB/8ADb1lFfcnsm+FFRyUsVWjGPOFK8pPyc2ko/JMz5MXp1O8zH3TP7vXVyfH7LZlObUsTKfVdqENK6xd2Td20vNbe6JOVkZsLl9KhSjSpQUKcVsl9W3zb8SAz/HveEHZ23l4ehzMeGeVn6MFdR+TRbJGHH1ZJfcZnCjLRCzkuPgvLzfkbXQrKutxTuuy5uc/Rbv3e3zK/kWVSnPVLaC935f7OrdCMAoRqTS7zsvRbv6v6HbtxcGO9cFO9ondp/Rhpmy2iclu0T4j9VmR9AOmzgAAAAAAAAAAETnv4fn9iWIzPV2Ivz/Nf6MnOjeCyzF8cKzmtBSpu/FJtHP8rx9dv9cmql7LbTslvez3SeyfP8uh5i/1U/Qp0qNm342+duC8vQeg7thtE+Iln9RmK3jXmYe1mE4LvterPlbOavFVHa37zf3MVu007cFtf15H1YGm76kk/OP3sducGK3msT90OdGS8eLSVM+rWvqu/cxrO621n67X28DXrYOG9or2X0NOMktfBdrZXSXdjtZedzx/AcW3nHX8Ie45GWPFpZM66T1acYt76tW2ytbi2/G3BcXc9ZVhnUtJ91re/maFeipxatHezV1smn3lfnbYtOU0VGnFeC8b/U5/qMxwcMzgrFeqddobuL/M3j2kzOm9hoJJJHQuj9O2Hh5pv3bZz+B0nAU9NKEfCEV9Ecf0qJm9rS6PK8RDYAB22IAAAAAAAAAAArXTmc40aco3sqkVKztZST7T8bfcspq5nglWpSpvhJbPwa3T97ExET8UbhFt67eXMq+aSkpQvx2+SNTS7b2b/wC8TzmGFlQnKM7qor7Phbxj438TQeM8eBtwYceOP/OIiJ+TmZb3tPvztmrztulvdqz5mvPGS4aJP0advqJ4uDVtzzFxve/yu7mhXDFLESttB78G2kvzZ6oU2lZq7d22vO/I8SqxfFvnzMUqsbbP6cD1A91HpV3ZLwe7fyNiGZzjddnZpbJrkn4+Zp06sGrS3e139jXxMNUnPU4u1pbak7cOzdblOfj4s0RXJG4XYcl8czNZ1Kcp4+bmopyu1eNrcbpJcOLudnwGvqqfWftNEOstw1aVqt87nNvh1kEqs44morUob09ra5rml4L87eZ1E598WLHPTjjTdjte0bvOwAHlYAAAAAAAAAAAAAI3Osko4mOmpHdd2S2lH0f2OeZz8PMTC8qEo1VyTahP69l+51W55cj3TJavh4tjrby/NucYqeHn1WIpTpy8JRav5p815o0qedUV+PnzX+jonxn6SZbUoSwrqasXTkpQ0QctD/FCU+Cur7XdttjhVSqvBmqOR7vdT7Gu1yedULbSV/mYqmfQ4atvmVTaKg731xcrW4ducLcd+7f5k50Ljh542mq8koKSajJNqcl3YtrZK9nvs7W5k15HYnDC15DkeMxaUqGHqOD4VJWp0/VSnbUv5UzovR34bRi1PGTVSX/qhdQ/qk7OXpsvU3aeZS/eNmnjW+f1K75b2+pNa1haqajFJKySSSSskkuCS5HrWvErcMV5meGIM/St6k7rXiNa8SIjWM0apGk9SS1C5oxqGSMhpO22DFBsEJZQAAAAAAAeJxNLGYWrKLUZpX8USACNOLZh8GcTVnKTxsNLlJpdQ7rU2+OsUfgRH8eLk3/DCMV9ztIJ2acZr/Aqnb9XiZRkuDcVJfNNmrH4KYtNacXR2d0+pkmvPaR3ADZpTsH0PqRilKtdpK9o8fqb8OjNv+R+xYgT1SjohC08gS/G/Y2KeUQXFtkkCNynphrQwMFyMypR8EewQnTzoXgfbH0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2Q==";
var ImageDemo = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("img", { draggable: "false", src: image, style: { width: "100%", height: "100%" } });
};

// ../packages-experimental/debugger/src/components/range-loading.tsx
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var RangeLoading = () => {
  const divStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    transformOrigin: "top left"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { style: divStyle, children: "Loading..." });
};

// sfc-template:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages-experimental/debugger/src/components/VueI18nIcon.vue?type=template
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("section", null, " \u{1F30D} ");
}

// ../packages-experimental/debugger/src/components/VueI18nIcon.vue
var script = {};
script.render = render;
script.__file = "../packages-experimental/debugger/src/components/VueI18nIcon.vue";
var VueI18nIcon_default = script;

// ../packages-experimental/debugger/src/controllers/menu.ts
function LocaleMenuItemFactory(accessor) {
  return {
    id: LocaleOperation.id,
    icon: "VueI18nIcon",
    tooltip: "i18n",
    type: 1 /* SELECTOR */,
    selections: [
      {
        label: "English",
        value: "enUS" /* EN_US */
      },
      {
        label: "Fran\xE7ais",
        value: "frFR" /* FR_FR */
      },
      {
        label: "\u7B80\u4F53\u4E2D\u6587",
        value: "zhCN" /* ZH_CN */
      },
      {
        label: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
        value: "ruRU" /* RU_RU */
      },
      {
        label: "\u7E41\u9AD4\u4E2D\u6587",
        value: "zhTW" /* ZH_TW */
      },
      {
        label: "Ti\u1EBFng Vi\u1EC7t",
        value: "viVN" /* VI_VN */
      }
    ]
  };
}
function DarkModeMenuItemFactory(accessor) {
  return {
    id: DarkModeOperation.id,
    title: "\u{1F313}",
    tooltip: "Dark Mode",
    type: 1 /* SELECTOR */,
    selections: [
      {
        label: "System",
        value: "auto"
      },
      {
        label: "Light",
        value: "light"
      },
      {
        label: "Dark",
        value: "dark"
      }
    ]
  };
}
function ThemeMenuItemFactory(accessor) {
  return {
    id: ThemeOperation.id,
    title: "Theme",
    tooltip: "Theme",
    type: 1 /* SELECTOR */,
    selections: [
      {
        label: "green",
        value: green_module_default
      },
      {
        label: "default",
        value: default_module_default
      }
    ]
  };
}
function NotificationMenuItemFactory(accessor) {
  return {
    id: NotificationOperation.id,
    title: "Notification",
    tooltip: "Notification",
    type: 1 /* SELECTOR */,
    selections: [
      {
        label: "Notification Success",
        value: "Notification Success random string to test Notification Success random string to test Notification Success random string to test Notification Success random string to test Notification Success random string to test"
      },
      {
        label: "Notification Info",
        value: "Notification Info"
      },
      {
        label: "Notification Warning",
        value: "Notification Warning"
      },
      {
        label: "Notification Error",
        value: "Notification Error"
      }
    ]
  };
}
function DialogMenuItemFactory(accessor) {
  return {
    id: DialogOperation.id,
    title: "Dialog",
    tooltip: "Dialog",
    type: 1 /* SELECTOR */,
    selections: [
      {
        label: "Open Dialog",
        value: "dialog"
      },
      {
        label: "Draggable Dialog",
        value: "draggable"
      }
    ]
  };
}
function ConfirmMenuItemFactory(accessor) {
  return {
    id: ConfirmOperation.id,
    title: "Confirm",
    tooltip: "Confirm",
    type: 1 /* SELECTOR */,
    selections: [
      {
        label: "Open confirm",
        value: "confirm"
      }
    ]
  };
}
function MessageMenuItemFactory(accessor) {
  return {
    id: MessageOperation.id,
    title: "Message",
    tooltip: "Message",
    type: 1 /* SELECTOR */,
    selections: [
      {
        label: "Open message",
        value: ""
      }
    ]
  };
}
function SidebarMenuItemFactory(accessor) {
  return {
    id: SidebarOperation.id,
    title: "Sidebar",
    tooltip: "Sidebar",
    type: 1 /* SELECTOR */,
    selections: [
      {
        label: "Open sidebar",
        value: "open"
      },
      {
        label: "Close sidebar",
        value: "close"
      }
    ]
  };
}
function SetEditableMenuItemFactory(accessor) {
  return {
    id: SetEditable.id,
    title: "Editable",
    tooltip: "Editable",
    type: 1 /* SELECTOR */,
    selections: [
      {
        label: "changeUniverEditable",
        value: "univer"
      },
      {
        label: "changeSheetEditable",
        value: "sheet"
      }
    ]
  };
}
function SaveSnapshotSetEditableMenuItemFactory(accessor) {
  return {
    id: SaveSnapshotOptions.id,
    type: 1 /* SELECTOR */,
    title: "Snapshot",
    selections: [
      {
        label: "saveWorkbook",
        value: "workbook"
      },
      {
        label: "saveSheet",
        value: "sheet"
      },
      {
        label: "record",
        value: "record"
      }
    ]
  };
}
var UNIT_ITEM_MENU_ID = "debugger.unit-menu-item";
function UnitMenuItemFactory() {
  return {
    id: UNIT_ITEM_MENU_ID,
    title: "Dispose",
    tooltip: "Lifecycle Related Commands",
    type: 3 /* SUBITEMS */
  };
}
function DisposeUniverItemFactory() {
  return {
    id: DisposeUniverCommand.id,
    title: "Dispose Univer",
    tooltip: "Dispose the Univer instance",
    icon: "DS",
    type: 0 /* BUTTON */
  };
}
function DisposeCurrentUnitMenuItemFactory() {
  return {
    id: DisposeCurrentUnitCommand.id,
    title: "Dispose Current Unit",
    tooltip: "Dispose Current Unit",
    icon: "DS",
    type: 0 /* BUTTON */
  };
}
function CreateEmptySheetMenuItemFactory() {
  return {
    id: CreateEmptySheetCommand.id,
    title: "Create Another Sheet",
    tooltip: "Create Another Sheet",
    icon: "CR",
    type: 0 /* BUTTON */
  };
}
function LoadSheetSnapshotMenuItemFactory() {
  return {
    id: LoadSheetSnapshotCommand.id,
    title: "Load Snapshot",
    tooltip: "Load Snapshot",
    icon: "CR",
    type: 0 /* BUTTON */
  };
}
var FLOAT_DOM_ITEM_MENU_ID = "debugger.float-dom-menu-item";
function FloatDomMenuItemFactory() {
  return {
    id: FLOAT_DOM_ITEM_MENU_ID,
    title: "FloatDom",
    tooltip: "Float Dom Commands",
    type: 3 /* SUBITEMS */
  };
}
function CreateFloatDOMMenuItemFactory() {
  return {
    id: CreateFloatDomCommand.id,
    title: "Create Float Dom",
    tooltip: "Create Float Dom",
    icon: "DS",
    type: 0 /* BUTTON */
  };
}
function ShowCellContentMenuItemFactory(accessor) {
  return {
    id: ShowCellContentOperation.id,
    type: 0 /* BUTTON */,
    title: "Cell",
    icon: "DS"
  };
}
function ChangeUserMenuItemFactory() {
  return {
    id: ChangeUserCommand.id,
    type: 1 /* SELECTOR */,
    title: "Change User",
    selections: [
      {
        label: "Owner",
        value: 2 /* Owner */
      },
      {
        label: "Editor",
        value: 1 /* Editor */
      },
      {
        label: "Reader",
        value: 0 /* Reader */
      }
    ]
  };
}
function WatermarkMenuItemFactory(accessor) {
  return {
    id: OpenWatermarkPanelOperation.id,
    title: "univer-watermark.title",
    tooltip: "univer-watermark.title",
    icon: UNIVER_WATERMARK_MENU,
    type: 0 /* BUTTON */
  };
}

// ../packages-experimental/debugger/src/controllers/menu.schema.ts
var menuSchema = {
  ["ribbon.others.others" /* OTHERS */]: {
    [LocaleOperation.id]: {
      order: 0,
      menuItemFactory: LocaleMenuItemFactory
    },
    [DarkModeOperation.id]: {
      order: 0.9,
      menuItemFactory: DarkModeMenuItemFactory
    },
    [ThemeOperation.id]: {
      order: 1,
      menuItemFactory: ThemeMenuItemFactory
    },
    [NotificationOperation.id]: {
      order: 2,
      menuItemFactory: NotificationMenuItemFactory
    },
    [DialogOperation.id]: {
      order: 3,
      menuItemFactory: DialogMenuItemFactory
    },
    [ConfirmOperation.id]: {
      order: 4,
      menuItemFactory: ConfirmMenuItemFactory
    },
    [MessageOperation.id]: {
      order: 5,
      menuItemFactory: MessageMenuItemFactory
    },
    [SidebarOperation.id]: {
      order: 6,
      menuItemFactory: SidebarMenuItemFactory
    },
    [SetEditable.id]: {
      order: 7,
      menuItemFactory: SetEditableMenuItemFactory
    },
    [SaveSnapshotOptions.id]: {
      order: 8,
      menuItemFactory: SaveSnapshotSetEditableMenuItemFactory,
      [LoadSheetSnapshotCommand.id]: {
        order: 3,
        menuItemFactory: LoadSheetSnapshotMenuItemFactory
      }
    },
    [UNIT_ITEM_MENU_ID]: {
      order: 9,
      menuItemFactory: UnitMenuItemFactory,
      [DisposeUniverCommand.id]: {
        order: 0,
        menuItemFactory: DisposeUniverItemFactory
      },
      [DisposeCurrentUnitCommand.id]: {
        order: 1,
        menuItemFactory: DisposeCurrentUnitMenuItemFactory
      },
      [CreateEmptySheetCommand.id]: {
        order: 2,
        menuItemFactory: CreateEmptySheetMenuItemFactory
      }
    },
    [FLOAT_DOM_ITEM_MENU_ID]: {
      order: 10,
      menuItemFactory: FloatDomMenuItemFactory,
      [CreateFloatDomCommand.id]: {
        order: 0,
        menuItemFactory: CreateFloatDOMMenuItemFactory
      },
      [ShowCellContentOperation.id]: {
        order: 1,
        menuItemFactory: ShowCellContentMenuItemFactory
      }
    },
    [ChangeUserCommand.id]: {
      order: 11,
      menuItemFactory: ChangeUserMenuItemFactory
    },
    [OpenWatermarkPanelOperation.id]: {
      order: 12,
      menuItemFactory: WatermarkMenuItemFactory
    }
  }
};

// ../packages-experimental/debugger/src/controllers/debugger.controller.ts
var DebuggerController = class extends Disposable {
  constructor(_injector, _menuManagerService, _commandService, _componentManager) {
    super();
    this._injector = _injector;
    this._menuManagerService = _menuManagerService;
    this._commandService = _commandService;
    this._componentManager = _componentManager;
    this._initializeMenu();
    this._initCustomComponents();
    [
      LocaleOperation,
      DarkModeOperation,
      ThemeOperation,
      NotificationOperation,
      DialogOperation,
      ConfirmOperation,
      MessageOperation,
      SidebarOperation,
      SetEditable,
      SaveSnapshotOptions,
      DisposeUniverCommand,
      DisposeCurrentUnitCommand,
      CreateEmptySheetCommand,
      LoadSheetSnapshotCommand,
      CreateFloatDomCommand,
      ChangeUserCommand,
      ShowCellContentOperation,
      OpenWatermarkPanelOperation
    ].forEach((command) => this.disposeWithMe(this._commandService.registerCommand(command)));
    this._injector.add([RecordController]);
  }
  _initializeMenu() {
    this._menuManagerService.mergeMenu(menuSchema);
  }
  _initCustomComponents() {
    const componentManager = this._componentManager;
    this.disposeWithMe(componentManager.register("VueI18nIcon", VueI18nIcon_default, {
      framework: "vue3"
    }));
    this.disposeWithMe(componentManager.register("ImageDemo", ImageDemo));
    this.disposeWithMe(componentManager.register("RangeLoading", RangeLoading));
    this.disposeWithMe(componentManager.register("FloatButton", FloatButton));
    this.disposeWithMe(componentManager.register("AIButton", AIButton));
  }
};
DebuggerController = __decorateClass([
  __decorateParam(0, Inject(Injector)),
  __decorateParam(1, IMenuManagerService),
  __decorateParam(2, ICommandService),
  __decorateParam(3, Inject(ComponentManager))
], DebuggerController);

// ../packages-experimental/debugger/src/controllers/e2e/data/default-doc.ts
function getDefaultDocData() {
  const DEFAULT_DOCUMENT_DATA_CN = {
    id: "d",
    tableSource: {},
    drawings: {},
    drawingsOrder: [],
    headers: {},
    footers: {},
    body: {
      dataStream: "\u8377\u5858\u6708\u8272\r\r\u4F5C\u8005\uFF1A\u6731\u81EA\u6E05\r\r\u8FD9\u51E0\u5929\u5FC3\u91CC\u9887\u4E0D\u5B81\u9759\u3002\u4ECA\u665A\u5728\u9662\u5B50\u91CC\u5750\u7740\u4E58\u51C9\uFF0C\u5FFD\u7136\u60F3\u8D77\u65E5\u65E5\u8D70\u8FC7\u7684\u8377\u5858\uFF0C\u5728\u8FD9\u6EE1\u6708\u7684\u5149\u91CC\uFF0C\u603B\u8BE5\u53E6\u6709\u4E00\u756A\u6837\u5B50\u5427\u3002\u6708\u4EAE\u6E10\u6E10\u5730\u5347\u9AD8\u4E86\uFF0C\u5899\u5916\u9A6C\u8DEF\u4E0A\u5B69\u5B50\u4EEC\u7684\u6B22\u7B11\uFF0C\u5DF2\u7ECF\u542C\u4E0D\u89C1\u4E86\uFF1B\u59BB\u5728\u5C4B\u91CC\u62CD\u7740\u95F0\u513F\uFF0C\u8FF7\u8FF7\u7CCA\u7CCA\u5730\u54FC\u7740\u7720\u6B4C\u3002\u6211\u6084\u6084\u5730\u62AB\u4E86\u5927\u886B\uFF0C\u5E26\u4E0A\u95E8\u51FA\u53BB\u3002\r\r\u6CBF\u7740\u8377\u5858\uFF0C\u662F\u4E00\u6761\u66F2\u6298\u7684\u5C0F\u7164\u5C51\u8DEF\u3002\u8FD9\u662F\u4E00\u6761\u5E7D\u50FB\u7684\u8DEF\uFF1B\u767D\u5929\u4E5F\u5C11\u4EBA\u8D70\uFF0C\u591C\u665A\u66F4\u52A0\u5BC2\u5BDE\u3002\u8377\u5858\u56DB\u9762\uFF0C\u957F\u7740\u8BB8\u591A\u6811\uFF0C\u84CA\u84CA\u90C1\u90C1\u7684\u3002\u8DEF\u56FE\u7247\u4E00\u7247\u662F\u4E9B\u6768\u67F3\uFF0C\u548C\u4E00\u4E9B\u4E0D\u77E5\u9053\u540D\u5B57\u7684\u6811\u3002\u6CA1\u6709\u6708\u5149\u7684\u665A\u4E0A\uFF0C\u8FD9\u8DEF\u4E0A\u9634\u68EE\u68EE\u7684\uFF0C\u6709\u4E9B\u6015\u4EBA\u3002\u4ECA\u665A\u5374\u5F88\u597D\uFF0C\u867D\u7136\u6708\u5149\u4E5F\u8FD8\u662F\u6DE1\u6DE1\u7684\u3002\r\r\u8DEF\u4E0A\u53EA\u6211\u4E00\u4E2A\u4EBA\uFF0C\u80CC\u7740\u624B\u8E31\u7740\u3002\u8FD9\u4E00\u7247\u5929\u5730\u597D\u50CF\u662F\u6211\u7684\uFF1B\u6211\u4E5F\u50CF\u8D85\u51FA\u4E86\u5E73\u5E38\u7684\u81EA\u5DF1\uFF0C\u5230\u4E86\u53E6\u4E00\u4E2A\u4E16\u754C\u91CC\u3002\u6211\u7231\u70ED\u95F9\uFF0C\u4E5F\u7231\u51B7\u9759\uFF1B\u7231\u7FA4\u5C45\uFF0C\u4E5F\u7231\u72EC\u5904\u3002\u50CF\u4ECA\u665A\u4E0A\uFF0C\u4E00\u4E2A\u4EBA\u5728\u8FD9\u82CD\u832B\u7684\u6708\u4E0B\uFF0C\u4EC0\u4E48\u90FD\u53EF\u4EE5\u60F3\uFF0C\u4EC0\u4E48\u90FD\u53EF\u4EE5\u4E0D\u60F3\uFF0C\u4FBF\u89C9\u662F\u4E2A\u81EA\u7531\u7684\u4EBA\u3002\u767D\u5929\u91CC\u4E00\u5B9A\u8981\u505A\u7684\u4E8B\uFF0C\u4E00\u5B9A\u8981\u8BF4\u7684\u8BDD\u662F\u73B0\u5728\u90FD\u53EF\u4E0D\u7406\u3002\u8FD9\u662F\u72EC\u5904\u7684\u5999\u5904\uFF0C\u6211\u4E14\u53D7\u7528\u8FD9\u65E0\u8FB9\u7684\u8377\u9999\u6708\u8272\u597D\u4E86\u3002\r\r\u66F2\u66F2\u6298\u6298\u7684\u8377\u5858\u4E0A\u9762\uFF0C\u5F25\u671B\u7684\u662F\u7530\u7530\u7684\u53F6\u5B50\u3002\u53F6\u5B50\u51FA\u6C34\u5F88\u9AD8\uFF0C\u50CF\u4EAD\u4EAD\u7684\u821E\u5973\u7684\u88D9\u3002\u5C42\u5C42\u7684\u53F6\u5B50\u4E2D\u95F4\uFF0C\u96F6\u661F\u5730\u70B9\u7F00\u7740\u4E9B\u767D\u82B1\uFF0C\u6709\u8885\u5A1C\u5730\u5F00\u7740\u7684\uFF0C\u6709\u7F9E\u6DA9\u5730\u6253\u7740\u6735\u513F\u7684\uFF1B\u6B63\u5982\u4E00\u7C92\u7C92\u7684\u660E\u73E0\uFF0C\u53C8\u5982\u78A7\u5929\u91CC\u7684\u661F\u661F\uFF0C\u53C8\u5982\u521A\u51FA\u6D74\u7684\u7F8E\u4EBA\u3002\u5FAE\u98CE\u8FC7\u5904\uFF0C\u9001\u6765\u7F15\u7F15\u6E05\u9999\uFF0C\u4EFF\u4F5B\u8FDC\u5904\u9AD8\u697C\u4E0A\u6E3A\u832B\u7684\u6B4C\u58F0\u4F3C\u7684\u3002\u8FD9\u65F6\u5019\u53F6\u5B50\u4E0E\u82B1\u4E5F\u6709\u4E00\u4E1D\u7684\u98A4\u52A8\uFF0C\u50CF\u95EA\u7535\u822C\uFF0C\u970E\u65F6\u4F20\u8FC7\u8377\u5858\u7684\u90A3\u8FB9\u53BB\u4E86\u3002\u53F6\u5B50\u672C\u662F\u80A9\u5E76\u80A9\u5BC6\u5BC6\u5730\u6328\u7740\uFF0C\u8FD9\u4FBF\u5B9B\u7136\u6709\u4E86\u4E00\u9053\u51DD\u78A7\u7684\u6CE2\u75D5\u3002\u53F6\u5B50\u5E95\u4E0B\u662F\u8109\u8109\u7684\u6D41\u6C34\uFF0C\u906E\u4F4F\u4E86\uFF0C\u4E0D\u80FD\u89C1\u4E00\u4E9B\u989C\u8272\uFF1B\u800C\u53F6\u5B50\u5374\u66F4\u89C1\u98CE\u81F4\u4E86\u3002\r\r\u6708\u5149\u5982\u6D41\u6C34\u4E00\u822C\uFF0C\u9759\u9759\u5730\u6CFB\u5728\u8FD9\u4E00\u7247\u53F6\u5B50\u548C\u82B1\u4E0A\u3002\u8584\u8584\u7684\u9752\u96FE\u6D6E\u8D77\u5728\u8377\u5858\u91CC\u3002\u53F6\u5B50\u548C\u82B1\u4EFF\u4F5B\u5728\u725B\u4E73\u4E2D\u6D17\u8FC7\u4E00\u6837\uFF0C\u53C8\u50CF\u7B3C\u7740\u8F7B\u7EB1\u7684\u68A6\u3002\u867D\u7136\u662F\u6EE1\u6708\uFF0C\u5929\u4E0A\u5374\u6709\u4E00\u5C42\u6DE1\u6DE1\u7684\u4E91\uFF0C\u6240\u4EE5\u4E0D\u80FD\u6717\u7167\uFF1B\u4F46\u6211\u4EE5\u4E3A\u8FD9\u6070\u662F\u5230\u4E86\u597D\u5904\u2014\u2014\u9163\u7720\u56FA\u4E0D\u53EF\u5C11\uFF0C\u5C0F\u7761\u4E5F\u522B\u6709\u98CE\u5473\u7684\u3002\u6708\u5149\u662F\u9694\u4E86\u6811\u7167\u8FC7\u6765\u7684\uFF0C\u9AD8\u5904\u4E1B\u751F\u7684\u704C\u6728\uFF0C\u843D\u4E0B\u53C2\u5DEE\u7684\u6591\u9A73\u7684\u9ED1\u5F71\uFF0C\u5CED\u695E\u695E\u5982\u9B3C\u4E00\u822C\uFF1B\u5F2F\u5F2F\u7684\u6768\u67F3\u7684\u7A00\u758F\u7684\u5029\u5F71\uFF0C\u5374\u53C8\u50CF\u662F\u753B\u5728\u8377\u53F6\u4E0A\u3002\u5858\u4E2D\u7684\u6708\u8272\u5E76\u4E0D\u5747\u5300\uFF1B\u4F46\u5149\u4E0E\u5F71\u6709\u7740\u548C\u8C10\u7684\u65CB\u5F8B\uFF0C\u5982\u68B5\u5A40\u73B2\u4E0A\u594F\u7740\u7684\u540D\u66F2\u3002\r\r\u8377\u5858\u7684\u56DB\u9762\uFF0C\u8FDC\u8FDC\u8FD1\u8FD1\uFF0C\u9AD8\u9AD8\u4F4E\u4F4E\u90FD\u662F\u6811\uFF0C\u800C\u6768\u67F3\u6700\u591A\u3002\u8FD9\u4E9B\u6811\u5C06\u4E00\u7247\u8377\u5858\u91CD\u91CD\u56F4\u4F4F\uFF1B\u53EA\u5728\u5C0F\u8DEF\u4E00\u65C1\uFF0C\u6F0F\u7740\u51E0\u6BB5\u7A7A\u9699\uFF0C\u50CF\u662F\u7279\u4E3A\u6708\u5149\u7559\u4E0B\u7684\u3002\u6811\u8272\u4E00\u4F8B\u662F\u9634\u9634\u7684\uFF0C\u4E4D\u770B\u50CF\u4E00\u56E2\u70DF\u96FE\uFF1B\u4F46\u6768\u67F3\u7684\u4E30\u59FF\uFF0C\u4FBF\u5728\u70DF\u96FE\u91CC\u4E5F\u8FA8\u5F97\u51FA\u3002\u6811\u68A2\u4E0A\u9690\u9690\u7EA6\u7EA6\u7684\u662F\u4E00\u5E26\u8FDC\u5C71\uFF0C\u53EA\u6709\u4E9B\u5927\u610F\u7F62\u4E86\u3002\u6811\u7F1D\u91CC\u4E5F\u6F0F\u7740\u4E00\u4E24\u70B9\u8DEF\u706F\u5149\uFF0C\u6CA1\u7CBE\u6253\u91C7\u7684\uFF0C\u662F\u6E34\u7761\u4EBA\u7684\u773C\u3002\u8FD9\u65F6\u5019\u6700\u70ED\u95F9\u7684\uFF0C\u8981\u6570\u6811\u4E0A\u7684\u8749\u58F0\u4E0E\u6C34\u91CC\u7684\u86D9\u58F0\uFF1B\u4F46\u70ED\u95F9\u662F\u5B83\u4EEC\u7684\uFF0C\u6211\u4EC0\u4E48\u4E5F\u6CA1\u6709\u3002\r\r\u5FFD\u7136\u60F3\u8D77\u91C7\u83B2\u7684\u4E8B\u60C5\u6765\u4E86\u3002\u91C7\u83B2\u662F\u6C5F\u5357\u7684\u65E7\u4FD7\uFF0C\u4F3C\u4E4E\u5F88\u65E9\u5C31\u6709\uFF0C\u800C\u516D\u671D\u65F6\u4E3A\u76DB\uFF1B\u4ECE\u8BD7\u6B4C\u91CC\u53EF\u4EE5\u7EA6\u7565\u77E5\u9053\u3002\u91C7\u83B2\u7684\u662F\u5C11\u5E74\u7684\u5973\u5B50\uFF0C\u5979\u4EEC\u662F\u8361\u7740\u5C0F\u8239\uFF0C\u5531\u7740\u8273\u6B4C\u53BB\u7684\u3002\u91C7\u83B2\u4EBA\u4E0D\u7528\u8BF4\u5F88\u591A\uFF0C\u8FD8\u6709\u770B\u91C7\u83B2\u7684\u4EBA\u3002\u90A3\u662F\u4E00\u4E2A\u70ED\u95F9\u7684\u5B63\u8282\uFF0C\u4E5F\u662F\u4E00\u4E2A\u98CE\u6D41\u7684\u5B63\u8282\u3002\u6881\u5143\u5E1D\u300A\u91C7\u83B2\u8D4B\u300B\u91CC\u8BF4\u5F97\u597D\uFF1A\r\r\u4E8E\u662F\u5996\u7AE5\u5973\uFF0C\u8361\u821F\u5FC3\u8BB8\uFF1B\u9DC1\u9996\u5F90\u56DE\uFF0C\u517C\u4F20\u7FBD\u676F\uFF1B\u6AC2\u5C06\u79FB\u800C\u85FB\u6302\uFF0C\u8239\u6B32\u52A8\u800C\u840D\u5F00\u3002\u5C14\u5176\u7EA4\u8170\u675F\u7D20\uFF0C\u8FC1\u5EF6\u987E\u6B65\uFF1B\u590F\u59CB\u6625\u4F59\uFF0C\u53F6\u5AE9\u82B1\u521D\uFF0C\u6050\u6CBE\u88F3\u800C\u6D45\u7B11\uFF0C\u754F\u503E\u8239\u800C\u655B\u88FE\u3002\r\r\u53EF\u89C1\u5F53\u65F6\u5B09\u6E38\u7684\u5149\u666F\u4E86\u3002\u8FD9\u771F\u662F\u6709\u8DA3\u7684\u4E8B\uFF0C\u53EF\u60DC\u6211\u4EEC\u73B0\u5728\u65E9\u5DF2\u65E0\u798F\u6D88\u53D7\u4E86\u3002\r\r\u4E8E\u662F\u53C8\u8BB0\u8D77\uFF0C\u300A\u897F\u6D32\u66F2\u300B\u91CC\u7684\u53E5\u5B50\uFF1A\r\r\u91C7\u83B2\u5357\u5858\u79CB\uFF0C\u83B2\u82B1\u8FC7\u4EBA\u5934\uFF1B\u4F4E\u5934\u5F04\u83B2\u5B50\uFF0C\u83B2\u5B50\u6E05\u5982\u6C34\u3002\r\r\u4ECA\u665A\u82E5\u6709\u91C7\u83B2\u4EBA\uFF0C\u8FD9\u513F\u7684\u83B2\u82B1\u4E5F\u7B97\u5F97\u201C\u8FC7\u4EBA\u5934\u201D\u4E86\uFF1B\u53EA\u4E0D\u89C1\u4E00\u4E9B\u6D41\u6C34\u7684\u5F71\u5B50\uFF0C\u662F\u4E0D\u884C\u7684\u3002\u8FD9\u4EE4\u6211\u5230\u5E95\u60E6\u7740\u6C5F\u5357\u4E86\u3002\u2014\u2014\u8FD9\u6837\u60F3\u7740\uFF0C\u731B\u4E00\u62AC\u5934\uFF0C\u4E0D\u89C9\u5DF2\u662F\u81EA\u5DF1\u7684\u95E8\u524D\uFF1B\u8F7B\u8F7B\u5730\u63A8\u95E8\u8FDB\u53BB\uFF0C\u4EC0\u4E48\u58F0\u606F\u4E5F\u6CA1\u6709\uFF0C\u59BB\u5DF2\u7761\u719F\u597D\u4E45\u4E86\u3002\r\r\u4E00\u4E5D\u4E8C\u4E03\u5E74\u4E03\u6708\uFF0C\u5317\u4EAC\u6E05\u534E\u56ED\u3002\r\r\r\r\u300A\u8377\u5858\u6708\u8272\u300B\u8BED\u8A00\u6734\u7D20\u5178\u96C5\uFF0C\u51C6\u786E\u751F\u52A8\uFF0C\u8D2E\u6EE1\u8BD7\u610F\uFF0C\u6EE1\u6EA2\u7740\u6731\u81EA\u6E05\u7684\u6563\u6587\u8BED\u8A00\u4E00\u8D2F\u6709\u6734\u7D20\u7684\u7F8E\uFF0C\u4E0D\u7528\u6D53\u58A8\u91CD\u5F69\uFF0C\u753B\u7684\u662F\u6DE1\u58A8\u6C34\u5F69\u3002\r\r\u6731\u81EA\u6E05\u5148\u751F\u4E00\u7B14\u5199\u666F\u4E00\u7B14\u8BF4\u60C5\uFF0C\u770B\u8D77\u6765\u677E\u6563\u4E0D\u77E5\u6240\u4E91\uFF0C\u53EF\u4ED4\u7EC6\u4F53\u4F1A\u4E0B\uFF0C\u5C31\u80FD\u611F\u53D7\u5230\u5148\u751F\u5728\u5B57\u91CC\u884C\u95F4\u8868\u8FF0\u51FA\u7684\u82E6\u95F7\uFF0C\u800C\u968F\u4E4B\u8BFB\u8005\u4E5F\u88AB\u5148\u751F\u7684\u6587\u5B57\u6240\u611F\u67D3\uFF0C\u88AB\u5E26\u8FDB\u4E86\u4ED6\u5F53\u65F6\u90A3\u82E6\u95F7\u800C\u65E0\u6CD5\u660E\u55BB\u7684\u5FC3\u60C5\u3002\u8FD9\u5C31\u662F\u4F18\u5F02\u6563\u6587\u7684\u5FC5\u987B\u54C1\u8D28\u4E4B\u4E00\u3002\r\r\u6269\u5C55\u8D44\u6599\uFF1A\r\u4E00\u9996\u957F\u8BD7\u300A\u6BC1\u706D\u300B\u5960\u5B9A\u4E86\u6731\u81EA\u6E05\u5728\u6587\u575B\u65B0\u8BD7\u4EBA\u7684\u5730\u4F4D\uFF0C\u800C\u300A\u6868\u58F0\u706F\u5F71\u91CC\u7684\u79E6\u6DEE\u6CB3\u300B\u5219\u88AB\u516C\u8BA4\u4E3A\u767D\u8BDD\u7F8E\u6587\u7684\u5178\u8303\u3002\u6731\u81EA\u6E05\u7528\u767D\u8BDD\u7F8E\u6587\u5411\u590D\u53E4\u6D3E\u5BA3\u6218\uFF0C\u6709\u529B\u5730\u56DE\u51FB\u4E86\u590D\u53E4\u6D3E\u201C\u767D\u8BDD\u4E0D\u80FD\u4F5C\u7F8E\u6587\u201D\u4E4B\u8BF4\uFF0C\u4ED6\u662F\u201C\u4E94\u56DB\u201D\u65B0\u6587\u5B66\u8FD0\u52A8\u7684\u5F00\u62D3\u8005\u4E4B\u4E00\u3002\r\r\u6731\u81EA\u6E05\u7684\u7F8E\u6587\u5F71\u54CD\u4E86\u4E00\u4EE3\u53C8\u4E00\u4EE3\u4EBA\u3002\u4F5C\u5BB6\u8D3E\u5E73\u51F9\u8BF4\uFF1A\u6765\u5230\u626C\u5DDE\uFF0C\u7B2C\u4E00\u4E2A\u60F3\u5230\u7684\u4EBA\u662F\u6731\u81EA\u6E05\uFF0C\u4ED6\u662F\u77E5\u8BC6\u5206\u5B50\u4E2D\u6700\u6700\u4E86\u4E0D\u8D77\u7684\u4EBA\u7269\u3002\r\r\u5B9E\u9645\u4E0A\uFF0C\u6731\u81EA\u6E05\u7684\u5199\u4F5C\u8DEF\u7A0B\u662F\u975E\u5E38\u66F2\u6298\u7684\uFF0C\u4ED6\u65E9\u671F\u7684\u65F6\u5019\u5927\u591A\u6570\u4F5C\u54C1\u90FD\u662F\u8BD7\u6B4C\uFF0C\u4F46\u662F\u4ED6\u7684\u8BD7\u6B4C\u548C\u6211\u56FD\u53E4\u4EE3\u8BD7\u4EBA\u7684\u8BD7\u6709\u5F88\u5927\u533A\u522B\uFF0C\u4ED6\u7684\u8BD7\u662F\u7528\u767D\u8BDD\u6587\u5199\u7684\uFF0C\u8FD9\u5176\u5B9E\u4E5F\u662F\u4ED6\u5199\u4F5C\u7684\u60EF\u7528\u98CE\u683C\u3002\r\r\u540E\u6765\uFF0C\u6731\u81EA\u6E05\u5F00\u59CB\u5199\u4E00\u4E9B\u5173\u4E8E\u793E\u4F1A\u7684\u6587\u7AE0\uFF0C\u56E0\u4E3A\u90A3\u4E2A\u65F6\u5019\u793E\u4F1A\u6BD4\u8F83\u6DF7\u4E71\uFF0C\u8FD9\u65F6\u5019\u7684\u4F5C\u54C1\u5927\u591A\u62A8\u51FB\u793E\u4F1A\u7684\u9ED1\u6697\u9762\uFF0C\u6587\u4F53\u98CE\u683C\u5927\u591A\u786C\u6717\uFF0C\u57FA\u8C03\u4F09\u4FEA\u3002\u5230\u4E86\u540E\u671F\uFF0C\u5927\u591A\u662F\u5199\u5173\u4E8E\u5C71\u6C34\u7684\u6587\u7AE0\uFF0C\u8FD9\u7C7B\u6587\u7AE0\u7684\u5199\u4F5C\u683C\u8C03\u5927\u591A\u4EE5\u6E05\u4E3D\u96C5\u81F4\u4E3A\u4E3B\u3002\r\r\u6731\u81EA\u6E05\u7684\u5199\u4F5C\u98CE\u683C\u867D\u7136\u5728\u4E0D\u540C\u7684\u65F6\u671F\u968F\u7740\u4ED6\u7684\u4EBA\u751F\u9605\u5386\u548C\u793E\u4F1A\u5F62\u6001\u7684\u4E0D\u540C\u800C\u53D1\u751F\u7740\u53D8\u5316\uFF0C\u4F46\u662F\u4ED6\u6587\u7AE0\u7684\u4E3B\u57FA\u8C03\u662F\u6CA1\u6709\u53D8\u7684\uFF0C\u4ED6\u8FD9\u4E00\u751F\uFF0C\u6240\u5199\u7684\u6240\u6709\u6587\u7AE0\u98CE\u683C\u4E0A\u90FD\u6709\u4E00\u4E2A\u975E\u5E38\u663E\u8457\u7684\u7279\u70B9\uFF0C\u90A3\u5C31\u662F\u7B80\u7EA6\u5E73\u6DE1\uFF0C\u4ED6\u4E0D\u662F\u7C7B\u4F3C\u53E4\u4EE3\u82B1\u95F4\u8BCD\u6D3E\u7684\u8BD7\u4EBA\u4EEC\uFF0C\u4E0D\u7BA1\u662F\u4ED6\u7684\u8BD7\u8BCD\u8FD8\u662F\u4ED6\u7684\u6587\u7AE0\u4ECE\u6765\u90FD\u4E0D\u7528\u8FC7\u4E8E\u534E\u4E3D\u7684\u8F9E\u85FB\uFF0C\u4ED6\u5D07\u5C1A\u7684\u662F\u5E73\u6DE1\u3002\r\r\u82F1\u56FD\u53CB\u4EBA\u6234\u7ACB\u514B\u8BD5\u8FC7\u82F1\u8BD1\u6731\u81EA\u6E05\u51E0\u7BC7\u6563\u6587\uFF0C\u8BD1\u5B8C\u4E00\u8BFB\u663E\u5F97\u5355\u8584\uFF0C\u8FDC\u8FDC\u4E0D\u5982\u539F\u6587\u6D41\u5229\u3002\u4ED6\u4E0D\u670D\u6C14\uFF0C\u6539\u7528\u7A0D\u5FAE\u53E4\u5965\u7684\u82F1\u6587\u91CD\u8BD1\uFF0C\u597D\u591A\u4E86\uFF1A\u201C\u90A3\u662F\u8BF4\uFF0C\u6731\u5148\u751F\u5916\u5706\u5185\u65B9\uFF0C\u6587\u5B57\u5C3D\u7BA1\u6D45\u767D\uFF0C\u5FC3\u601D\u5374\u5F88\u6DF1\u6C89\uFF0C\u8BD1\u7B14\u53EA\u597D\u671D\u6DF1\u5904\u7ECF\u8425\u3002\u201D\u6731\u81EA\u6E05\u7684\u5F88\u591A\u6587\u7AE0\uFF0C\u8B6C\u5982\u300A\u80CC\u5F71\u300B\u300A\u796D\u4EA1\u5987\u300B\uFF0C\u8BFB\u6765\u81EA\u6709\u4E00\u756A\u53EA\u53EF\u610F\u4F1A\u4E0D\u53EF\u8A00\u4F20\u7684\u4E1C\u897F\u3002\r\r\u5E73\u6DE1\u5C31\u662F\u6731\u81EA\u6E05\u7684\u5199\u4F5C\u98CE\u683C\u3002\u4ED6\u4E0D\u662F\u8C6A\u653E\u6D3E\u7684\u4F5C\u5BB6\uFF0C\u4ED6\u5728\u521B\u4F5C\u7684\u65F6\u5019\u949F\u60C5\u4E8E\u6E05\u65B0\u7684\u98CE\u683C\uFF0C\u7ED9\u4EBA\u8033\u76EE\u4E00\u65B0\u7684\u611F\u89C9\u3002\u5728\u4ED6\u7684\u6587\u7AE0\u4E2D\u5305\u542B\u4E86\u4ED6\u5BF9\u751F\u6D3B\u7684\u5411\u5F80\uFF0C\u7531\u6B64\u53EF\u89C1\u4ED6\u7684\u5199\u4F5C\u98CE\u683C\u548C\u4ED6\u5F85\u4EBA\u5904\u4E8B\u7684\u6001\u5EA6\u4E5F\u662F\u6709\u51E0\u5206\u76F8\u4F3C\u7684\u3002\u4ED6\u7684\u6587\u7AE0\u975E\u5E38\u4F18\u7F8E\uFF0C\u4F46\u53C8\u4E0D\u4F1A\u8BA9\u4EBA\u89C9\u5F97\u72ED\u9698\uFF0C\u7ED9\u4EBA\u4E00\u79CD\u8C41\u8FBE\u6E0A\u535A\u7684\u611F\u89C9\uFF0C\u8FD9\u5C31\u662F\u6731\u81EA\u6E05\u7684\u5199\u4F5C\u98CE\u683C\uFF0C\u66F4\u662F\u6731\u81EA\u6E05\u7684\u4E3A\u4EBA\u54C1\u8D28\u3002\r\r\u5199\u6709\u300A\u8377\u5858\u6708\u8272\u300B\u300A\u80CC\u5F71\u300B\u7B49\u540D\u7BC7\u7684\u8457\u540D\u6563\u6587\u5BB6\u6731\u81EA\u6E05\u5148\u751F\uFF0C\u4E0D\u4EC5\u81EA\u5DF1\u4E00\u751F\u98CE\u9AA8\u6B63\u6C14\uFF0C\u8FD8\u7528\u65E0\u5F62\u7684\u5BB6\u98CE\u6DB5\u517B\u5B50\u5B59\u3002\u826F\u597D\u7684\u5BB6\u98CE\u5BB6\u89C4\u610F\u8574\u6DF1\u8FDC\uFF0C\u50AC\u4EBA\u5411\u5584\uFF0C\u662F\u51DD\u805A\u60C5\u611F\u3001\u6DB5\u517B\u5FB7\u884C\u3001\u7825\u783A\u6210\u624D\u7684\u4EBA\u751F\u4FE1\u6761\u3002\u201C\u5317\u6709\u6731\u81EA\u6E05\uFF0C\u5357\u6709\u6731\u7269\u534E\uFF0C\u4E00\u6587\u4E00\u6B66\uFF0C\u4E00\u5357\u4E00\u5317\uFF0C\u53CC\u661F\u95EA\u8000\u201D\uFF0C\u8FD9\u662F\u4E2D\u56FD\u77E5\u8BC6\u754C\u3001\u6559\u80B2\u754C\u5BF9\u6731\u5BB6\u4E24\u5144\u5F1F\u7684\u8D5E\u8A89\u3002\r\r\u6731\u81EA\u6E05\u6027\u683C\u6E29\u548C\uFF0C\u4E3A\u4EBA\u548C\u5584\uFF0C\u5BF9\u5F85\u5E74\u8F7B\u4EBA\u5E73\u6613\u8FD1\u4EBA\uFF0C\u662F\u4E2A\u5E73\u548C\u7684\u4EBA\u3002\u4ED6\u53D6\u5B57\u201C\u4F69\u5F26\u201D\uFF0C\u610F\u601D\u8981\u50CF\u5F13\u5F26\u90A3\u6837\u5C06\u81EA\u5DF1\u7EF7\u7D27\uFF0C\u7ED9\u4EBA\u7684\u611F\u89C9\u662F\u81EA\u6211\u8981\u6C42\u9AD8\uFF0C\u5076\u5C14\u6709\u5446\u6C14\u3002\u6731\u81EA\u6E05\u6559\u5B66\u8D1F\u8D23\uFF0C\u5BF9\u5B66\u751F\u8981\u6C42\u4E25\u683C\uFF0C\u4FEE\u4ED6\u7684\u8BFE\u7684\u5B66\u751F\u90FD\u53D7\u76CA\u4E0D\u5C11\u3002\r\r1948 \u5E74 6 \u6708\uFF0C\u60A3\u80C3\u75C5\u591A\u5E74\u7684\u6731\u81EA\u6E05\uFF0C\u5728\u300A\u6297\u8BAE\u7F8E\u56FD\u6276\u65E5\u653F\u7B56\u5E76\u62D2\u7EDD\u9886\u53D6\u7F8E\u63F4\u9762\u7C89\u5BA3\u8A00\u300B\u4E0A\uFF0C\u4E00\u4E1D\u4E0D\u82DF\u5730\u7B7E\u4E0B\u4E86\u81EA\u5DF1\u7684\u540D\u5B57\u3002\u968F\u540E\uFF0C\u6731\u81EA\u6E05\u8FD8\u5C06\u9762\u7C89\u914D\u8D2D\u8BC1\u4EE5\u53CA\u9762\u7C89\u7968\u9000\u4E86\u56DE\u53BB\u30021948 \u5E74 8 \u6708 12 \u65E5\uFF0C\u6731\u81EA\u6E05\u56E0\u4E0D\u582A\u80C3\u75C5\u6298\u78E8\uFF0C\u79BB\u5F00\u4EBA\u4E16\u3002\u5728\u65B0\u7684\u65F6\u4EE3\u5373\u5C06\u5230\u6765\u65F6\uFF0C\u6731\u81EA\u6E05\u5374\u5306\u5306\u5730\u79BB\u4EBA\u4EEC\u8FDC\u53BB\u3002\u4ED6\u4E3A\u4EBA\u4EEC\u7559\u4E0B\u4E86\u65E0\u6570\u7ECF\u5178\u7684\u8BD7\u6B4C\u548C\u6587\u5B57\uFF0C\u8FD8\u6709\u6C38\u4E0D\u5C48\u670D\u7684\u7CBE\u795E\u3002\r\r\u6731\u81EA\u6E05\u6CA1\u6709\u8C6A\u8A00\u58EE\u8BED\uFF0C\u4ED6\u53EA\u662F\u7528\u575A\u5B9A\u7684\u884C\u52A8\u3001\u6734\u5B9E\u7684\u8BED\u8A00\uFF0C\u5411\u4E16\u4EBA\u5C55\u793A\u4E86\u4E2D\u56FD\u77E5\u8BC6\u5206\u5B50\u5728\u7956\u56FD\u5371\u96BE\u4E4B\u9645\u575A\u5B9A\u7684\u9769\u547D\u6027\uFF0C\u4F53\u73B0\u4E86\u4E2D\u56FD\u4EBA\u7684\u9AA8\u6C14\uFF0C\u8868\u73B0\u4E86\u65E0\u6BD4\u9AD8\u8D35\u7684\u6C11\u65CF\u6C14\u8282\uFF0C\u5448\u73B0\u4E86\u4EBA\u751F\u6700\u6709\u4EF7\u503C\u7684\u4E00\u9762\uFF0C\u8C31\u5C31\u4E86\u751F\u547D\u4E2D\u6700\u534E\u4E3D\u7684\u4E50\u7AE0\u3002\r\r\u4ED6\u4EE5\u201C\u81EA\u6E05\u201D\u4E3A\u540D\uFF0C\u81EA\u52C9\u5728\u56F0\u5883\u4E2D\u4E0D\u4E27\u5FD7\uFF1B\u4ED6\u8EAB\u60A3\u91CD\u75C5\uFF0C\u81F3\u6B7B\u62D2\u9886\u7F8E\u63F4\u9762\u7C89\uFF0C\u5176\u6C14\u8282\u4EE4\u4E16\u4EBA\u611F\u4F69\uFF1B\u4ED6\u7684\u300A\u80CC\u5F71\u300B\u300A\u8377\u5858\u6708\u8272\u300B\u300A\u5306\u5306\u300B\u810D\u7099\u4EBA\u53E3\uFF1B\u4ED6\u7684\u6587\u5B57\u8FFD\u6C42\u201C\u771F\u201D\uFF0C\u6CA1\u6709\u534A\u70B9\u77EB\u9970\uFF0C\u5374\u8574\u85CF\u7740\u52A8\u4EBA\u5FC3\u5F26\u7684\u529B\u91CF\u3002\r\r\u6731\u81EA\u6E05\u4E0D\u4F46\u5728\u6587\u5B66\u521B\u4F5C\u65B9\u9762\u6709\u5F88\u9AD8\u7684\u9020\u8BE3\uFF0C\u4E5F\u662F\u4E00\u540D\u9769\u547D\u6C11\u4E3B\u4E3B\u4E49\u6218\u58EB\uFF0C\u5728\u53CD\u9965\u997F\u3001\u53CD\u5185\u6218\u7684\u6597\u4E89\u4E2D\uFF0C\u4ED6\u59CB\u7EC8\u4FDD\u6301\u7740\u4E00\u4E2A\u6B63\u76F4\u7684\u7231\u56FD\u77E5\u8BC6\u5206\u5B50\u7684\u6C14\u8282\u548C\u60C5\u64CD\u3002\u6BDB\u6CFD\u4E1C\u5BF9\u6731\u81EA\u6E05\u5B81\u80AF\u997F\u6B7B\u4E0D\u9886\u7F8E\u56FD\u201C\u6551\u6D4E\u7C89\u201D\u7684\u7CBE\u795E\u7ED9\u4E88\u79F0\u8D5E\uFF0C\u8D5E\u626C\u4ED6\u201C\u8868\u73B0\u4E86\u6211\u4EEC\u6C11\u65CF\u7684\u82F1\u96C4\u6C14\u6982\u201D\u3002\r\n",
      textRuns: [
        {
          st: 0,
          ed: 4,
          ts: {
            fs: 20,
            ff: "Microsoft YaHei",
            cl: {
              rgb: "rgb(255, 255, 255)"
            },
            bl: 1 /* TRUE */,
            bg: {
              rgb: "#FF6670"
            },
            it: 1 /* TRUE */
          }
        },
        {
          st: 6,
          ed: 9,
          ts: {
            fs: 16,
            ff: "Microsoft YaHei",
            cl: {
              rgb: "rgb(30, 30, 30)"
            },
            bl: 0 /* FALSE */
          }
        },
        {
          st: 9,
          ed: 12,
          ts: {
            fs: 16,
            ff: "Microsoft YaHei",
            cl: {
              rgb: "rgb(30, 30, 30)"
            },
            bl: 1 /* TRUE */
          }
        },
        {
          st: 14,
          ed: 3064,
          ts: {
            fs: 12,
            ff: "Microsoft YaHei",
            cl: {
              rgb: "rgb(30, 30, 30)"
            },
            bl: 0 /* FALSE */
          }
        }
      ],
      paragraphs: [
        {
          startIndex: 4,
          paragraphStyle: {
            spaceAbove: { v: 0 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 5,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 12,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 13,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 127,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
            // hanging: 20,
            // indentStart: 50,
            // indentEnd: 50,
            // indentFirstLine: 50,
          }
        },
        {
          startIndex: 128,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 244,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 245,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 398,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 399,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 618,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 619,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 824,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 825,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 1007,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 1008,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 1130,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 1131,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 1203,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 1204,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 1238,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 1239,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 1256,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 1257,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 1282,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 1283,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 1380,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 1381,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 1396,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 1397,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 1398,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 1399,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 1457,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 1458,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 1559,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 1560,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 1566,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 1670,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 1671,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 1728,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 1729,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 1811,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 1812,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 1912,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 1913,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 2053,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 2054,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 2190,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 2191,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 2341,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 2342,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 2481,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 2482,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 2582,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 2583,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 2750,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 2751,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 2853,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 2854,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 2948,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 2949,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        },
        {
          startIndex: 3065,
          paragraphStyle: {
            spaceAbove: { v: 10 },
            lineSpacing: 2,
            spaceBelow: { v: 0 }
          }
        }
      ],
      sectionBreaks: [
        {
          startIndex: 3066
          // columnProperties: [
          //     {
          //         width: ptToPixel(240),
          //         paddingEnd: ptToPixel(15),
          //     },
          // ],
          // columnSeparatorType: ColumnSeparatorType.NONE,
          // sectionType: SectionType.SECTION_TYPE_UNSPECIFIED,
          // textDirection: textDirectionDocument,
          // contentDirection: textDirection!,
        }
      ],
      customBlocks: [],
      tables: []
    },
    documentStyle: {
      pageSize: {
        width: ptToPixel(595),
        height: ptToPixel(842)
      },
      documentFlavor: 1 /* TRADITIONAL */,
      marginTop: ptToPixel(50),
      marginBottom: ptToPixel(50),
      marginRight: ptToPixel(50),
      marginLeft: ptToPixel(50),
      renderConfig: {
        vertexAngle: 0,
        centerAngle: 0
      },
      defaultHeaderId: "",
      defaultFooterId: "",
      evenPageHeaderId: "",
      evenPageFooterId: "",
      firstPageHeaderId: "",
      firstPageFooterId: "",
      evenAndOddHeaders: 0 /* FALSE */,
      useFirstPageHeaderFooter: 0 /* FALSE */,
      marginHeader: 30,
      marginFooter: 30
    }
  };
  return DEFAULT_DOCUMENT_DATA_CN;
}

// ../packages-experimental/debugger/src/controllers/e2e/data/default-sheet.ts
function getDefaultWorkbookData() {
  const DEFAULT_WORKBOOK_DATA_DEMO2 = {
    id: "test",
    appVersion: "3.0.0-alpha",
    sheets: {
      sheet1: {
        id: "sheet1",
        name: "sheet1",
        cellData: {
          0: {
            3: {
              f: "=SUM(A1)",
              si: "3e4r5t"
            }
          },
          1: {
            3: {
              f: "=SUM(A2)",
              si: "OSPtzm"
            }
          },
          2: {
            3: {
              si: "OSPtzm"
            }
          },
          3: {
            3: {
              si: "OSPtzm"
            }
          }
        },
        rowCount: 100,
        columnCount: 100
      }
    },
    locale: "zhCN" /* ZH_CN */,
    name: "",
    sheetOrder: [],
    styles: {},
    resources: []
  };
  return DEFAULT_WORKBOOK_DATA_DEMO2;
}

// ../packages-experimental/debugger/src/controllers/e2e/e2e.controller.ts
var AWAIT_LOADING_TIMEOUT = 5e3;
var AWAIT_DISPOSING_TIMEOUT = 5e3;
var E2EController = class extends Disposable {
  constructor(_univerInstanceService, _commandService) {
    super();
    this._univerInstanceService = _univerInstanceService;
    this._commandService = _commandService;
    this._initPlugin();
  }
  dispose() {
    window.E2EControllerAPI = void 0;
  }
  _initPlugin() {
    window.E2EControllerAPI = {
      loadAndRelease: (id, loadTimeout, disposeTimeout) => this._loadAndRelease(id, loadTimeout, disposeTimeout),
      loadDefaultSheet: (loadTimeout) => this._loadDefaultSheet(loadTimeout),
      loadDemoSheet: () => this._loadDemoSheet(),
      loadMergeCellSheet: () => this._loadMergeCellSheet(2e3),
      loadDefaultStyleSheet: (loadTimeout) => this._loadDefaultStyleSheet(loadTimeout),
      disposeCurrSheetUnit: (disposeTimeout) => this._disposeDefaultSheetUnit(disposeTimeout),
      loadDefaultDoc: (loadTimeout) => this._loadDefaultDoc(loadTimeout),
      disposeUniver: () => this._disposeUniver()
    };
  }
  async _loadAndRelease(releaseId, loadingTimeout = AWAIT_LOADING_TIMEOUT, disposingTimeout = AWAIT_DISPOSING_TIMEOUT) {
    const unitId = `e2e${releaseId}`;
    const snapshot = getDefaultWorkbookData();
    snapshot.id = unitId;
    this._univerInstanceService.createUnit(O.UNIVER_SHEET, snapshot);
    await awaitTime(loadingTimeout);
    this._univerInstanceService.disposeUnit(unitId);
    await awaitTime(disposingTimeout);
  }
  async _loadDefaultSheet(loadingTimeout = AWAIT_LOADING_TIMEOUT) {
    this._univerInstanceService.createUnit(O.UNIVER_SHEET, getDefaultWorkbookData());
    await awaitTime(loadingTimeout);
  }
  async _loadDemoSheet() {
    this._univerInstanceService.createUnit(O.UNIVER_SHEET, DEFAULT_WORKBOOK_DATA_DEMO);
    await awaitTime(AWAIT_LOADING_TIMEOUT);
  }
  /**
   * sheet-003 in default data
   */
  async _loadMergeCellSheet(loadingTimeout = AWAIT_LOADING_TIMEOUT) {
    const data = { ...DEFAULT_WORKBOOK_DATA_DEMO };
    data.sheetOrder = ["sheet-0003"];
    this._univerInstanceService.createUnit(O.UNIVER_SHEET, data);
    await awaitTime(loadingTimeout);
  }
  async _loadDefaultStyleSheet(loadingTimeout = AWAIT_LOADING_TIMEOUT) {
    const data = { ...DEFAULT_WORKBOOK_DATA_DEMO_DEFAULT_STYLE };
    this._univerInstanceService.createUnit(O.UNIVER_SHEET, data);
    await awaitTime(loadingTimeout);
  }
  async _loadDefaultDoc(loadingTimeout = AWAIT_LOADING_TIMEOUT) {
    this._univerInstanceService.createUnit(O.UNIVER_DOC, getDefaultDocData());
    await awaitTime(loadingTimeout);
  }
  async _disposeUniver() {
    await this._commandService.executeCommand(DisposeUniverCommand.id);
  }
  async _disposeDefaultSheetUnit(disposingTimeout = AWAIT_DISPOSING_TIMEOUT) {
    const unit = this._univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET);
    const unitId = unit == null ? void 0 : unit.getUnitId();
    await this._univerInstanceService.disposeUnit(unitId || "");
    await awaitTime(disposingTimeout);
  }
};
E2EController = __decorateClass([
  __decorateParam(0, IUniverInstanceService),
  __decorateParam(1, ICommandService)
], E2EController);

// ../packages-experimental/debugger/src/controllers/performance-monitor.controller.ts
var PerformanceMonitorController = class extends RxDisposable {
  constructor(lifecycleService, _instanceService, _renderManagerService) {
    super();
    this._instanceService = _instanceService;
    this._renderManagerService = _renderManagerService;
    __publicField(this, "_initListener", false);
    __publicField(this, "_containerElement");
    __publicField(this, "_styleElement");
    __publicField(this, "_currentUnitSub");
    lifecycleService.subscribeWithPrevious().pipe(
      filter((stage) => stage === 2 /* Rendered */),
      take(1)
    ).subscribe(() => this._listenDocumentTypeChange());
  }
  dispose() {
    super.dispose();
    document.body.removeChild(this._containerElement);
    document.head.removeChild(this._styleElement);
    this._disposeCurrentObserver();
  }
  _disposeCurrentObserver() {
    var _a;
    (_a = this._currentUnitSub) == null ? void 0 : _a.unsubscribe();
    this._currentUnitSub = null;
  }
  _listenDocumentTypeChange() {
    this._instanceService.focused$.pipe(takeUntil(this.dispose$), distinctUntilChanged()).subscribe((unitId) => {
      this._disposeCurrentObserver();
      if (unitId) {
        this._listenToRenderer(unitId);
      }
    });
  }
  _listenToRenderer(unitId) {
    this._tryInit();
    const renderer = this._renderManagerService.getRenderById(unitId);
    if (renderer) {
      const { engine } = renderer;
      this._currentUnitSub = engine.endFrame$.subscribe(() => {
        this._containerElement.textContent = `FPS: ${Math.round(engine.getFps()).toString()}`;
      });
    }
  }
  _tryInit() {
    if (this._initListener) {
      return;
    }
    this._initListener = true;
    const container = this._containerElement = document.createElement("div");
    this._containerElement = container;
    container.classList.add("fps-monitor");
    document.body.appendChild(container);
    const style = `
            .fps-monitor {
                position: absolute;
                top: 0;
                left: 10px;
                width: 100px;
                height: 32px;
                line-height: 32px;
                color: rgba(32, 32, 32, .8);
                font-size: 14px;
                font-family: sans-serif;
                z-index: 1000;
                pointer-events: none;
            }
        `;
    this._styleElement = document.createElement("style");
    document.head.appendChild(this._styleElement).textContent = style;
  }
};
PerformanceMonitorController = __decorateClass([
  __decorateParam(0, Inject(LifecycleService)),
  __decorateParam(1, IUniverInstanceService),
  __decorateParam(2, IRenderManagerService)
], PerformanceMonitorController);

// ../packages-experimental/debugger/src/plugin.ts
var UniverDebuggerPlugin = class extends Plugin {
  constructor(_config = defaultPluginConfig2, _injector, _configService) {
    super();
    this._config = _config;
    this._injector = _injector;
    this._configService = _configService;
    __publicField(this, "_debuggerController");
    const { menu, ...rest } = merge_default(
      {},
      defaultPluginConfig2,
      this._config
    );
    if (menu) {
      this._configService.setConfig("menu", menu, { merge: true });
    }
    this._configService.setConfig(DEBUGGER_PLUGIN_CONFIG_KEY, rest);
  }
  onStarting() {
    [
      [PerformanceMonitorController],
      [DarkModeController],
      [DebuggerController],
      [E2EController],
      [UniverWatermarkMenuController]
    ].forEach((d) => this._injector.add(d));
    this._injector.get(E2EController);
  }
  onReady() {
    this._injector.get(DebuggerController);
  }
  onRendered() {
    this._injector.get(DarkModeController);
    this._injector.get(PerformanceMonitorController);
    this._injector.get(UniverWatermarkMenuController);
  }
  getDebuggerController() {
    this._debuggerController = this._injector.get(DebuggerController);
    return this._debuggerController;
  }
};
__publicField(UniverDebuggerPlugin, "pluginName", "UNIVER_DEBUGGER_PLUGIN");
UniverDebuggerPlugin = __decorateClass([
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IConfigService)
], UniverDebuggerPlugin);

export {
  UniverWatermarkPlugin,
  UniverDebuggerPlugin
};
//# sourceMappingURL=chunk-6RL4G227.js.map
