import {
  ComponentManager,
  DISABLE_AUTO_FOCUS_KEY,
  DOCS_COMPONENT_MAIN_LAYER_INDEX,
  DRAWING_IMAGE_ALLOW_IMAGE_LIST,
  DeleteLeftCommand,
  DocSelectionManagerService,
  DocSelectionRenderService,
  DocSkeletonManagerService,
  DocumentSkeleton,
  DocumentViewModel,
  Documents,
  FIX_ONE_PIXEL_BLUR_OFFSET,
  ICanvasPopupService,
  IEditorService,
  ILayoutService,
  ILocalFileService,
  IMenuManagerService,
  IRenderManagerService,
  IRenderingEngine,
  IShortcutService,
  ISidebarService,
  IUIPartsService,
  Image,
  Liquid,
  MoveCursorOperation,
  MoveSelectionOperation,
  Rect,
  RichText,
  RichTextEditingMutation,
  Scene,
  SceneViewer,
  ScrollBar,
  Slide,
  Spreadsheet,
  SpreadsheetColumnHeader,
  SpreadsheetRowHeader,
  SpreadsheetSkeleton,
  Viewport,
  connectInjector,
  convertTextRotation,
  fixLineWidthByScale,
  getColor,
  getCurrentTypeOfRenderer,
  getImageSize,
  getMenuHiddenObservable,
  pxToNum,
  useDependency,
  useObservable
} from "./chunk-DOZPYWOG.js";
import {
  Button,
  ColorPicker,
  Dropdown,
  InputNumber,
  Scrollbar,
  add_image_single_default,
  autofill_default,
  bottom_single_default,
  clsx,
  graph_single_default,
  more_down_single_default,
  move_down_single_default,
  move_up_single_default,
  paint_bucket_default,
  require_jsx_runtime,
  require_react,
  text_single_default,
  topmost_single_default
} from "./chunk-22LKBS37.js";
import {
  BehaviorSubject,
  DEFAULT_EMPTY_DOCUMENT_VALUE,
  Disposable,
  DisposableCollection,
  DocumentDataModel,
  EDITOR_ACTIVATED,
  FOCUSING_COMMON_DRAWINGS,
  FOCUSING_EDITOR_BUT_HIDDEN,
  FOCUSING_EDITOR_STANDALONE,
  FOCUSING_UNIVER_EDITOR,
  FOCUSING_UNIVER_EDITOR_STANDALONE_SINGLE_MODE,
  FORMULA_EDITOR_ACTIVATED,
  ICommandService,
  IConfigService,
  IContextService,
  IImageIoService,
  IUndoRedoService,
  IUniverInstanceService,
  Inject,
  Injector,
  LocaleService,
  O,
  Plugin,
  Registry,
  RxDisposable,
  SlideDataModel,
  Styles,
  Subject,
  Tools,
  Worksheet,
  createIdentifier,
  createInternalEditorID,
  debounce_default,
  filter,
  generateRandomId,
  getColorStyle,
  mergeOverrideWithDependencies,
  merge_default,
  sortRules,
  takeUntil,
  toDisposable
} from "./chunk-33NDYU5R.js";
import {
  __decorateClass,
  __decorateParam,
  __publicField,
  __toESM
} from "./chunk-NSSCU2QI.js";

// ../packages/slides/src/controllers/config.schema.ts
var SLIDES_PLUGIN_CONFIG_KEY = "slides.config";
var configSymbol = Symbol(SLIDES_PLUGIN_CONFIG_KEY);
var defaultPluginConfig = {};

// ../packages/slides/src/slides-plugin.ts
var PLUGIN_NAME = "slides";
var UniverSlidesPlugin = class extends Plugin {
  // private _canvasView: CanvasView | null = null;
  constructor(_config = defaultPluginConfig, _injector, _renderManagerService, _configService) {
    super();
    this._config = _config;
    this._injector = _injector;
    this._renderManagerService = _renderManagerService;
    this._configService = _configService;
    __publicField(this, "_canvasEngine", null);
    const { ...rest } = merge_default(
      {},
      defaultPluginConfig,
      this._config
    );
    this._configService.setConfig(SLIDES_PLUGIN_CONFIG_KEY, rest);
    this._initializeDependencies(this._injector);
  }
  initialize() {
    this.initCanvasEngine();
  }
  onReady() {
  }
  getConfig() {
    return this._config;
  }
  initCanvasEngine() {
    this._canvasEngine = this._injector.get(IRenderingEngine);
  }
  onRendered() {
    this.initialize();
  }
  getCanvasEngine() {
    return this._canvasEngine;
  }
  _initializeDependencies(slideInjector) {
    const dependencies = [
      // [CanvasView],
      // [DocSelectionManagerService],
    ];
    dependencies.forEach((d) => {
      slideInjector.add(d);
    });
  }
};
__publicField(UniverSlidesPlugin, "pluginName", PLUGIN_NAME);
__publicField(UniverSlidesPlugin, "type", O.UNIVER_SLIDE);
UniverSlidesPlugin = __decorateClass([
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IRenderManagerService),
  __decorateParam(3, IConfigService)
], UniverSlidesPlugin);

// ../packages/slides/src/views/render/adaptor.ts
var ObjectAdaptor = class {
  constructor() {
    __publicField(this, "zIndex", 0);
    __publicField(this, "viewKey", null);
  }
  check(type) {
    if (type !== this.viewKey) {
      return;
    }
    return this;
  }
  create(injector) {
  }
};
var CanvasObjectProviderRegistry = Registry.create();

// ../packages/slides/src/views/render/adaptors/docs-adaptor.ts
var DocsAdaptor = class extends ObjectAdaptor {
  constructor(_localeService) {
    super();
    this._localeService = _localeService;
    __publicField(this, "zIndex", 5);
    __publicField(this, "viewKey", 4 /* DOCUMENT */);
    __publicField(this, "_liquid", new Liquid());
  }
  check(type) {
    if (type !== this.viewKey) {
      return;
    }
    return this;
  }
  // eslint-disable-next-line max-lines-per-function
  convert(pageElement, mainScene) {
    var _a, _b;
    const {
      id,
      zIndex,
      left = 0,
      top = 0,
      width,
      height,
      angle,
      scaleX,
      scaleY,
      skewX,
      skewY,
      flipX,
      flipY,
      title,
      description,
      document: documentData
    } = pageElement;
    if (documentData == null) {
      return;
    }
    const docDataModel = new DocumentDataModel(documentData);
    const docViewModel = new DocumentViewModel(docDataModel);
    const documentSkeleton = DocumentSkeleton.create(docViewModel, this._localeService);
    const documents = new Documents("__DocsRender__" /* MAIN */, documentSkeleton);
    documentSkeleton.calculate();
    const sv = new SceneViewer("__DocsViewer__" /* SCENE_VIEWER */ + id, {
      top,
      left,
      width,
      height,
      zIndex,
      angle,
      scaleX,
      scaleY,
      skewX,
      skewY,
      flipX,
      flipY
    });
    const scene = new Scene("__DocsScene__" /* SCENE */ + id, sv);
    const viewMain = new Viewport("__DocsViewPort_" /* VIEWPORT */ + id, scene, {
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
      explicitViewportWidthSet: false,
      explicitViewportHeightSet: false,
      isWheelPreventDefaultX: true
    });
    scene.attachControl();
    scene.onMouseWheel$.subscribeEvent((evt, state) => {
      const e = evt;
      if (e.ctrlKey) {
        const deltaFactor = Math.abs(e.deltaX);
        let scrollNum = deltaFactor < 40 ? 0.2 : deltaFactor < 80 ? 0.4 : 0.2;
        scrollNum *= e.deltaY > 0 ? -1 : 1;
        if (scene.scaleX < 1) {
          scrollNum /= 2;
        }
        if (scene.scaleX + scrollNum > 4) {
          scene.scale(4, 4);
        } else if (scene.scaleX + scrollNum < 0.1) {
          scene.scale(0.1, 0.1);
        } else {
          const value = e.deltaY > 0 ? 0.1 : -0.1;
          e.preventDefault();
        }
      } else {
        viewMain.onMouseWheel(e, state);
      }
    });
    const scrollbar = new ScrollBar(viewMain, {
      mainScene
    });
    scene.addObject(documents);
    const size = documentSkeleton.getActualSize();
    documents.resize(size.actualWidth, size.actualHeight);
    scene.resize(size.actualWidth, size.actualHeight + 200);
    const pageSize = (_a = documents.getSkeleton()) == null ? void 0 : _a.getPageSize();
    documents.pageRender$.subscribe((config) => {
      const { page, pageLeft, pageTop, ctx } = config;
      const { width: width2, height: height2, marginBottom, marginLeft, marginRight, marginTop } = page;
      ctx.save();
      ctx.translate(pageLeft - 0.5, pageTop - 0.5);
      ctx.restore();
    });
    const { left: docsLeft, top: docsTop } = documents;
    const skeletonData = documentSkeleton.getSkeletonData();
    if (skeletonData == null) {
      return;
    }
    const { pages } = skeletonData;
    const objectList = [];
    const pageMarginCache = /* @__PURE__ */ new Map();
    this._recalculateSizeBySkeleton(documents, scene, documentSkeleton);
    for (let i = 0, len = pages.length; i < len; i++) {
      const page = pages[i];
      const { skeDrawings, marginLeft, marginTop, pageWidth, pageHeight } = page;
      this._liquid.translatePagePadding(page);
      skeDrawings.forEach((drawing) => {
        const { aLeft, aTop, height: height2, width: width2, drawingOrigin } = drawing;
        const { docTransform } = drawingOrigin;
        const rect = new Image(drawing.drawingId, {
          // url: docTransform.imageProperties?.contentUrl || '',
          left: aLeft + docsLeft + this._liquid.x,
          top: aTop + docsTop + this._liquid.y,
          width: width2,
          height: height2,
          zIndex: 11
        });
        pageMarginCache.set(drawing.drawingId, {
          marginLeft: this._liquid.x,
          marginTop: this._liquid.y
        });
        objectList.push(rect);
      });
      this._liquid.translatePage(
        page,
        documents.pageLayoutType,
        documents.pageMarginLeft,
        documents.pageMarginTop
      );
    }
    scene.addObjects(objectList);
    objectList.forEach((object) => {
      scene.attachTransformerTo(object);
    });
    (_b = scene.getTransformer()) == null ? void 0 : _b.changing$.subscribe((state) => {
      const { objects } = state;
      objects.forEach((object) => {
        const { oKey, left: left2, top: top2, height: height2, width: width2 } = object;
        const cache = pageMarginCache.get(oKey);
        const marginLeft = (cache == null ? void 0 : cache.marginLeft) || 0;
        const marginTop = (cache == null ? void 0 : cache.marginTop) || 0;
        documentSkeleton == null ? void 0 : documentSkeleton.getViewModel().getDataModel().updateDrawing(oKey, {
          left: left2 - docsLeft - marginLeft,
          top: top2 - docsTop - marginTop,
          height: height2,
          width: width2
        });
      });
      documentSkeleton == null ? void 0 : documentSkeleton.calculate();
    });
    this._calculatePagePosition(documents, scene, viewMain);
    return sv;
  }
  _recalculateSizeBySkeleton(docsComponent, scene, skeleton) {
    var _a;
    const pages = (_a = skeleton.getSkeletonData()) == null ? void 0 : _a.pages;
    if (pages == null) {
      return;
    }
    let width = 0;
    let height = 0;
    for (let i = 0, len = pages.length; i < len; i++) {
      const page = pages[i];
      const { pageWidth, pageHeight } = page;
      if (docsComponent.pageLayoutType === 0 /* VERTICAL */) {
        height += pageHeight;
        height += docsComponent.pageMarginTop;
        if (i === len - 1) {
          height += docsComponent.pageMarginTop;
        }
        width = Math.max(width, pageWidth);
      } else if (docsComponent.pageLayoutType === 1 /* HORIZONTAL */) {
        width += pageWidth;
        if (i !== len - 1) {
          width += docsComponent.pageMarginLeft;
        }
        height = Math.max(height, pageHeight);
      }
    }
    docsComponent.resize(width, height);
    scene.resize(width, height);
  }
  _calculatePagePosition(docsComponent, scene, viewport, zoomRatio = 1) {
    const parent = scene == null ? void 0 : scene.getParent();
    const { width: docsWidth, height: docsHeight, pageMarginLeft, pageMarginTop } = docsComponent;
    if (parent == null || docsWidth === Number.POSITIVE_INFINITY || docsHeight === Number.POSITIVE_INFINITY) {
      return;
    }
    const { width: engineWidth, height: engineHeight } = parent;
    let docsLeft = 0;
    let docsTop = 0;
    let sceneWidth = 0;
    let sceneHeight = 0;
    let scrollToX = Number.POSITIVE_INFINITY;
    if (engineWidth > (docsWidth + pageMarginLeft * 2) * zoomRatio) {
      docsLeft = engineWidth / 2 - docsWidth * zoomRatio / 2;
      docsLeft /= zoomRatio;
      sceneWidth = (engineWidth - pageMarginLeft * 2) / zoomRatio;
      scrollToX = 0;
    } else {
      docsLeft = pageMarginLeft;
      sceneWidth = docsWidth + pageMarginLeft * 2;
      scrollToX = (sceneWidth - engineWidth / zoomRatio) / 2;
    }
    if (engineHeight > docsHeight) {
      docsTop = engineHeight / 2 - docsHeight / 2;
      sceneHeight = (engineHeight - pageMarginTop * 2) / zoomRatio;
    } else {
      docsTop = pageMarginTop;
      sceneHeight = docsHeight + pageMarginTop * 2;
    }
    scene.resize(sceneWidth, sceneHeight + 200);
    docsComponent.translate(docsLeft, docsTop);
    if (scrollToX !== Number.POSITIVE_INFINITY && viewport != null) {
      const actualX = viewport.transScroll2ViewportScrollValue(scrollToX, 0).x;
      viewport.scrollToBarPos({
        x: actualX
      });
    }
    return this;
  }
};
DocsAdaptor = __decorateClass([
  __decorateParam(0, Inject(LocaleService))
], DocsAdaptor);
var DocsAdaptorFactory = class {
  constructor() {
    __publicField(this, "zIndex", 5);
  }
  create(injector) {
    const docsAdaptor = injector.createInstance(DocsAdaptor);
    return docsAdaptor;
  }
};
CanvasObjectProviderRegistry.add(new DocsAdaptorFactory());

// ../packages/slides/src/views/render/adaptors/image-adaptor.ts
var ImageAdaptor = class extends ObjectAdaptor {
  constructor() {
    super(...arguments);
    __publicField(this, "zIndex", 1);
    __publicField(this, "viewKey", 1 /* IMAGE */);
  }
  check(type) {
    if (type !== this.viewKey) {
      return;
    }
    return this;
  }
  convert(pageElement) {
    const {
      id,
      zIndex,
      left = 0,
      top = 0,
      width,
      height,
      angle,
      scaleX,
      scaleY,
      skewX,
      skewY,
      flipX,
      flipY,
      title,
      description,
      image = {}
    } = pageElement;
    const { imageProperties, placeholder, link } = image;
    const contentUrl = (imageProperties == null ? void 0 : imageProperties.contentUrl) || "";
    return new Image(id, {
      url: contentUrl,
      top,
      left,
      width,
      height,
      zIndex,
      angle,
      scaleX,
      scaleY,
      skewX,
      skewY,
      flipX,
      flipY,
      forceRender: true
    });
  }
};
var ImageAdaptorFactory = class {
  constructor() {
    __publicField(this, "zIndex", 4);
  }
  create(injector) {
    const imageAdaptor = injector.createInstance(ImageAdaptor);
    return imageAdaptor;
  }
};
CanvasObjectProviderRegistry.add(new ImageAdaptorFactory());

// ../packages/slides/src/views/render/adaptors/rich-text-adaptor.ts
var RichTextAdaptor = class extends ObjectAdaptor {
  constructor(_localeService) {
    super();
    this._localeService = _localeService;
    __publicField(this, "zIndex", 2);
    __publicField(this, "viewKey", 2 /* TEXT */);
  }
  check(type) {
    if (type !== this.viewKey) {
      return;
    }
    return this;
  }
  convert(pageElement, _mainScene) {
    const {
      id,
      zIndex,
      left = 0,
      top = 0,
      width,
      height,
      angle,
      scaleX,
      scaleY,
      skewX,
      skewY,
      flipX,
      flipY,
      title,
      description,
      richText = {}
    } = pageElement;
    const { text, ff, fs, it, bl, ul, st, ol, bg, bd, cl, rich } = richText;
    let config = {
      top,
      left,
      width,
      height,
      zIndex,
      angle,
      scaleX,
      scaleY,
      skewX,
      skewY,
      flipX,
      flipY,
      forceRender: true
    };
    let isNotNull = false;
    if (text != null) {
      config = { ...config, text, ff, fs, it, bl, ul, st, ol, bg, bd, cl };
      isNotNull = true;
    } else if (rich != null) {
      config = { ...config, richText: rich };
      isNotNull = true;
    }
    if (isNotNull === false) {
      return;
    }
    return new RichText(this._localeService, id, config);
  }
};
RichTextAdaptor = __decorateClass([
  __decorateParam(0, Inject(LocaleService))
], RichTextAdaptor);
var RichTextAdaptorFactory = class {
  constructor() {
    __publicField(this, "zIndex", 0);
  }
  create(injector) {
    const richTextAdaptor = injector.createInstance(RichTextAdaptor);
    return richTextAdaptor;
  }
};
CanvasObjectProviderRegistry.add(new RichTextAdaptorFactory());

// ../packages/slides/src/views/render/adaptors/shape-adaptor.ts
var ShapeAdaptor = class extends ObjectAdaptor {
  constructor() {
    super(...arguments);
    __publicField(this, "zIndex", 2);
    __publicField(this, "viewKey", 0 /* SHAPE */);
  }
  check(type) {
    if (type !== this.viewKey) {
      return;
    }
    return this;
  }
  convert(pageElement) {
    const {
      id,
      zIndex,
      left = 0,
      top = 0,
      width,
      height,
      angle,
      scaleX,
      scaleY,
      skewX,
      skewY,
      flipX,
      flipY,
      title,
      description
    } = pageElement;
    const { shapeType, text, shapeProperties, placeholder, link } = pageElement.shape || {};
    const fill = shapeProperties == null ? "" : getColorStyle(shapeProperties.shapeBackgroundFill) || "rgba(255,255,255,1)";
    const outline = shapeProperties == null ? void 0 : shapeProperties.outline;
    const strokeStyle = {};
    if (outline) {
      const { outlineFill, weight } = outline;
      strokeStyle.strokeWidth = weight;
      strokeStyle.stroke = getColorStyle(outlineFill) || "rgba(0,0,0,1)";
    }
    if (shapeType === "rect" /* Rect */) {
      return new Rect(id, {
        fill,
        top,
        left,
        width,
        height,
        zIndex,
        angle,
        scaleX,
        scaleY,
        skewX,
        skewY,
        flipX,
        flipY,
        forceRender: true,
        ...strokeStyle
      });
    }
    if (shapeType === "roundRect" /* RoundRect */) {
      const radius = (shapeProperties == null ? void 0 : shapeProperties.radius) || 0;
      return new Rect(id, {
        fill,
        top,
        left,
        width,
        height,
        zIndex,
        angle,
        scaleX,
        scaleY,
        skewX,
        skewY,
        flipX,
        flipY,
        forceRender: true,
        radius,
        ...strokeStyle
      });
    }
  }
};
var ShapeAdaptorFactory = class {
  constructor() {
    __publicField(this, "zIndex", 2);
  }
  create(injector) {
    const shapeAdaptor = injector.createInstance(ShapeAdaptor);
    return shapeAdaptor;
  }
};
CanvasObjectProviderRegistry.add(new ShapeAdaptorFactory());

// ../packages/slides/src/views/render/object-provider.ts
var ObjectProvider = class {
  constructor(_injector) {
    this._injector = _injector;
    __publicField(this, "_adaptors", []);
    this._adaptorLoader();
  }
  convertToRenderObjects(pageElements, mainScene) {
    const pageKeys = Object.keys(pageElements);
    const objects = [];
    pageKeys.forEach((key) => {
      const pageElement = pageElements[key];
      const o = this._executor(pageElement, mainScene);
      if (o != null) {
        objects.push(o);
      }
    });
    return objects;
  }
  convertToRenderObject(pageElement, mainScene) {
    return this._executor(pageElement, mainScene);
  }
  _executor(pageElement, mainScene) {
    var _a;
    const { id: pageElementId, type } = pageElement;
    for (const adaptor of this._adaptors) {
      const o = (_a = adaptor.check(type)) == null ? void 0 : _a.convert(pageElement, mainScene);
      if (o != null) {
        return o;
      }
    }
  }
  _adaptorLoader() {
    CanvasObjectProviderRegistry.getData().sort(sortRules).forEach((adaptorFactory) => {
      this._adaptors.push(adaptorFactory.create(this._injector));
    });
  }
};
ObjectProvider = __decorateClass([
  __decorateParam(0, Inject(Injector))
], ObjectProvider);

// ../packages/slides/src/views/render/adaptors/slide-adaptor.ts
var SlideAdaptor = class extends ObjectAdaptor {
  constructor(_injector) {
    super();
    this._injector = _injector;
    __publicField(this, "zIndex", 6);
    __publicField(this, "viewKey", 5 /* SLIDE */);
    __publicField(this, "_ObjectProvider", null);
  }
  check(type) {
    if (type !== this.viewKey) {
      return;
    }
    return this;
  }
  convert(pageElement, mainScene) {
    const {
      id,
      zIndex,
      left = 0,
      top = 0,
      width,
      height,
      angle,
      scaleX,
      scaleY,
      skewX,
      skewY,
      flipX,
      flipY,
      title,
      description,
      slide: slideData
    } = pageElement;
    if (slideData == null) {
      return;
    }
    const model = new SlideDataModel(slideData);
    const slideComponent = new Slide("__SLIDERender__" /* MAIN */ + id, {
      top,
      left,
      width,
      height,
      zIndex,
      angle,
      scaleX,
      scaleY,
      skewX,
      skewY,
      flipX,
      flipY,
      forceRender: true
    });
    slideComponent.enableNav();
    slideComponent.enableSelectedClipElement();
    const pageOrder = model.getPageOrder();
    const pages = model.getPages();
    if (!pageOrder || !pages) {
      return slideComponent;
    }
    this._ObjectProvider = new ObjectProvider(this._injector);
    for (let i = 0, len = pageOrder.length; i < len; i++) {
      const page = pages[pageOrder[i]];
      const { id: id2 } = page;
      slideComponent.addPageScene(this._createScene(id2, slideComponent, page, mainScene, model));
    }
    slideComponent.activeFirstPage();
    return slideComponent;
  }
  _createScene(pageId, parent, page, mainScene, model) {
    var _a;
    const { width, height } = parent;
    const scene = new Scene(pageId, parent, {
      width,
      height
    });
    const viewMain = new Viewport(`PageViewer_${pageId}`, scene, {
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
      explicitViewportWidthSet: false,
      explicitViewportHeightSet: false
    });
    viewMain.closeClip();
    const { pageElements, pageBackgroundFill } = page;
    const objects = (_a = this._ObjectProvider) == null ? void 0 : _a.convertToRenderObjects(pageElements, mainScene);
    this._addBackgroundRect(scene, pageBackgroundFill, model);
    scene.addObjects(objects);
    objects == null ? void 0 : objects.forEach((object) => {
      scene.attachTransformerTo(object);
    });
    return scene;
  }
  _addBackgroundRect(scene, fill, model) {
    const pageSize = model.getPageSize();
    const { width: pageWidth = 0, height: pageHeight = 0 } = pageSize;
    const page = new Rect("canvas", {
      left: 0,
      top: 0,
      width: pageWidth,
      height: pageHeight,
      strokeWidth: 1,
      stroke: "rgba(198,198,198, 1)",
      fill: getColorStyle(fill) || "rgba(255,255,255, 1)",
      zIndex: 0,
      evented: false
    });
    scene.addObject(page, 0);
  }
};
SlideAdaptor = __decorateClass([
  __decorateParam(0, Inject(Injector))
], SlideAdaptor);
var SlideAdaptorFactory = class {
  constructor() {
    __publicField(this, "zIndex", 6);
  }
  create(injector) {
    const slideAdaptor = injector.createInstance(SlideAdaptor);
    return slideAdaptor;
  }
};
CanvasObjectProviderRegistry.add(new SlideAdaptorFactory());

// ../packages/slides/src/views/render/adaptors/spreadsheet-adaptor.ts
var SpreadsheetAdaptor = class extends ObjectAdaptor {
  constructor(_localeService, _contextService, _configService, _injector) {
    super();
    this._localeService = _localeService;
    this._contextService = _contextService;
    this._configService = _configService;
    this._injector = _injector;
    __publicField(this, "zIndex", 4);
    __publicField(this, "viewKey", 3 /* SPREADSHEET */);
  }
  check(type) {
    if (type !== this.viewKey) {
      return;
    }
    return this;
  }
  convert(pageElement, mainScene) {
    const {
      id,
      zIndex,
      left = 0,
      top = 0,
      width,
      height,
      angle,
      scaleX,
      scaleY,
      skewX,
      skewY,
      flipX,
      flipY,
      spreadsheet: spreadsheetModel
    } = pageElement;
    if (spreadsheetModel == null) {
      return;
    }
    const { worksheet, styles } = spreadsheetModel;
    const styleModel = new Styles(styles);
    const spreadsheetSkeleton = new SpreadsheetSkeleton(
      new Worksheet(id, worksheet, styleModel),
      // FIXME: worksheet in slide doesn't has a Worksheet object
      styleModel,
      this._localeService,
      this._contextService,
      this._configService,
      this._injector
    );
    const { rowTotalHeight, columnTotalWidth, rowHeaderWidth, columnHeaderHeight } = spreadsheetSkeleton;
    const allWidth = columnTotalWidth + worksheet.rowHeader.width || 0;
    const allHeight = rowTotalHeight + worksheet.columnHeader.height || 0;
    const sv = new SceneViewer("spreadInSlideSceneViewer" /* SCENE_VIEWER */ + id, {
      top,
      left,
      width,
      height,
      zIndex,
      angle,
      scaleX,
      scaleY,
      skewX,
      skewY,
      flipX,
      flipY,
      forceRender: true
    });
    const scene = new Scene("spreadInSlideScene" /* SCENE */ + id, sv, {
      width: allWidth,
      height: allHeight
    });
    this._updateViewport(id, rowHeaderWidth, columnHeaderHeight, scene, mainScene);
    const spreadsheet = new Spreadsheet("testSheetViewer", spreadsheetSkeleton, false);
    const spreadsheetRowHeader = new SpreadsheetRowHeader("spreadInSlideRow" /* ROW */, spreadsheetSkeleton);
    const spreadsheetColumnHeader = new SpreadsheetColumnHeader("spreadInSlideColumn" /* COLUMN */, spreadsheetSkeleton);
    const SpreadsheetLeftTopPlaceholder = new Rect("spreadInSlideLeftTop" /* LEFT_TOP */, {
      zIndex: 2,
      left: -1,
      top: -1,
      width: rowHeaderWidth,
      height: columnHeaderHeight,
      fill: getColor([248, 249, 250]),
      stroke: getColor([217, 217, 217]),
      strokeWidth: 1
    });
    spreadsheet.zIndex = 10;
    scene.addObjects([spreadsheet], 1);
    scene.addObjects([spreadsheetRowHeader, spreadsheetColumnHeader, SpreadsheetLeftTopPlaceholder], 2);
    return sv;
  }
  // eslint-disable-next-line max-lines-per-function
  _updateViewport(id, rowHeaderWidth, columnHeaderHeight, scene, mainScene) {
    if (mainScene == null) {
      return;
    }
    const rowHeaderWidthScale = rowHeaderWidth * scene.scaleX;
    const columnHeaderHeightScale = columnHeaderHeight * scene.scaleY;
    const viewMain = new Viewport("spreadInSlideViewMain" /* VIEW_MAIN */ + id, scene, {
      left: rowHeaderWidthScale,
      top: columnHeaderHeightScale,
      bottom: 0,
      right: 0,
      explicitViewportWidthSet: false,
      explicitViewportHeightSet: false,
      isWheelPreventDefaultX: true
    });
    const viewTop = new Viewport("spreadInSlideViewTop" /* VIEW_TOP */ + id, scene, {
      left: rowHeaderWidthScale,
      height: columnHeaderHeightScale,
      top: 0,
      right: 0,
      explicitViewportWidthSet: false,
      isWheelPreventDefaultX: true
    });
    const viewLeft = new Viewport("spreadInSlideViewLeft" /* VIEW_LEFT */ + id, scene, {
      left: 0,
      bottom: 0,
      top: columnHeaderHeightScale,
      width: rowHeaderWidthScale,
      explicitViewportHeightSet: false,
      isWheelPreventDefaultX: true
    });
    const VIEW_LEFT_TOP = new Viewport("spreadInSlideViewLeftTop" /* VIEW_LEFT_TOP */ + id, scene, {
      left: 0,
      top: 0,
      width: rowHeaderWidthScale,
      height: columnHeaderHeightScale,
      isWheelPreventDefaultX: true
    });
    viewMain.onScrollAfter$.subscribeEvent((param) => {
      const { scrollX, scrollY, viewportScrollX, viewportScrollY } = param;
      viewTop.updateScrollVal({
        scrollX,
        viewportScrollX
      });
      viewLeft.updateScrollVal({
        scrollY,
        viewportScrollY
      });
    });
    scene.attachControl();
    const scrollbar = new ScrollBar(viewMain, {
      mainScene
    });
    scene.onMouseWheel$.subscribeEvent((evt, state) => {
      const e = evt;
      if (e.ctrlKey) {
        const deltaFactor = Math.abs(e.deltaX);
        let scrollNum = deltaFactor < 40 ? 0.05 : deltaFactor < 80 ? 0.02 : 0.01;
        scrollNum *= e.deltaY > 0 ? -1 : 1;
        if (scene.scaleX < 1) {
          scrollNum /= 2;
        }
        if (scene.scaleX + scrollNum > 4) {
          scene.scale(4, 4);
        } else if (scene.scaleX + scrollNum < 0.1) {
          scene.scale(0.1, 0.1);
        } else {
          scene.scaleBy(scrollNum, scrollNum);
          e.preventDefault();
        }
      } else {
        viewMain.onMouseWheel(e, state);
      }
    });
  }
};
SpreadsheetAdaptor = __decorateClass([
  __decorateParam(0, Inject(LocaleService)),
  __decorateParam(1, IContextService),
  __decorateParam(2, IConfigService),
  __decorateParam(3, Inject(Injector))
], SpreadsheetAdaptor);
var SpreadsheetAdaptorFactory = class {
  constructor() {
    __publicField(this, "zIndex", 4);
  }
  create(injector) {
    const spreadsheetAdaptor = injector.createInstance(SpreadsheetAdaptor);
    return spreadsheetAdaptor;
  }
};
CanvasObjectProviderRegistry.add(new SpreadsheetAdaptorFactory());

// ../packages/slides-ui/src/controllers/slide.render-controller.ts
var SlideRenderController = class extends RxDisposable {
  constructor(_renderContext, _injector, _univerInstanceService, _renderManagerService) {
    super();
    this._renderContext = _renderContext;
    this._injector = _injector;
    this._univerInstanceService = _univerInstanceService;
    this._renderManagerService = _renderManagerService;
    __publicField(this, "_objectProvider", null);
    __publicField(this, "_refreshThumb", debounce_default(() => {
      this.createThumbs();
    }, 300));
    this._objectProvider = this._injector.createInstance(ObjectProvider);
    this._addNewRender();
  }
  _addNewRender() {
    const { unitId, engine, scene } = this._renderContext;
    const slideDataModel = this._getCurrUnitModel();
    if (!slideDataModel) return;
    const observer = engine.onTransformChange$.subscribeEvent(() => {
      this._scrollToCenter();
      observer == null ? void 0 : observer.unsubscribe();
    });
    engine.onTransformChange$.subscribeEvent(() => {
      setTimeout(() => {
        this.createThumbs();
      }, 300);
    });
    const viewMain = new Viewport("__mainView__" /* VIEW */, scene, {
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
      explicitViewportWidthSet: false,
      explicitViewportHeightSet: false,
      isWheelPreventDefaultX: true
    });
    scene.attachControl();
    scene.onMouseWheel$.subscribeEvent((evt, state) => {
      const e = evt;
      if (e.ctrlKey) {
        const deltaFactor = Math.abs(e.deltaX);
        let scrollNum = deltaFactor < 40 ? 0.2 : deltaFactor < 80 ? 0.4 : 0.2;
        scrollNum *= e.deltaY > 0 ? -1 : 1;
        if (scene.scaleX < 1) {
          scrollNum /= 2;
        }
        if (scene.scaleX + scrollNum > 4) {
          scene.scale(4, 4);
        } else if (scene.scaleX + scrollNum < 0.1) {
          scene.scale(0.1, 0.1);
        } else {
          const value = e.deltaY > 0 ? 0.1 : -0.1;
          e.preventDefault();
        }
      } else {
        viewMain.onMouseWheel(e, state);
      }
    });
    scene.onFileLoaded$.subscribeEvent(() => {
      this._refreshThumb();
    });
    ScrollBar.attachTo(viewMain);
    const slide = this._createSlide(scene);
    this._renderContext.mainComponent = slide;
    this._createSlidePages(slideDataModel, slide);
    this.createThumbs();
    engine.runRenderLoop(() => {
      scene.render();
    });
  }
  _scrollToCenter() {
    var _a;
    const mainScene = (_a = this._currentRender()) == null ? void 0 : _a.scene;
    const viewMain = mainScene == null ? void 0 : mainScene.getViewport("__mainView__" /* VIEW */);
    const getCenterPositionViewPort = this._getCenterPositionViewPort(mainScene);
    if (!viewMain || !getCenterPositionViewPort) return;
    const { left: viewPortLeft, top: viewPortTop } = getCenterPositionViewPort;
    const { x, y } = viewMain.transViewportScroll2ScrollValue(viewPortLeft, viewPortTop);
    viewMain.scrollToBarPos({
      x,
      y
    });
  }
  _currentRender() {
    return getCurrentTypeOfRenderer(O.UNIVER_SLIDE, this._univerInstanceService, this._renderManagerService);
  }
  /**
   * @param mainScene
   */
  _createSlide(mainScene) {
    const model = this._univerInstanceService.getCurrentUnitForType(O.UNIVER_SLIDE);
    const { width: sceneWidth, height: sceneHeight } = mainScene;
    const pageSize = model.getPageSize();
    const { width = 100, height = 100 } = pageSize;
    const slideComponent = new Slide("__slideRender__" /* COMPONENT */, {
      left: (sceneWidth - width) / 2,
      top: (sceneHeight - height) / 2,
      width,
      height,
      zIndex: 10
    });
    slideComponent.enableSelectedClipElement();
    mainScene.addObject(slideComponent);
    return slideComponent;
  }
  _addBackgroundRect(scene, fill) {
    const model = this._univerInstanceService.getCurrentUnitForType(O.UNIVER_SLIDE);
    const pageSize = model.getPageSize();
    const { width: pageWidth = 0, height: pageHeight = 0 } = pageSize;
    const page = new Rect("canvas", {
      left: 0,
      top: 0,
      width: pageWidth,
      height: pageHeight,
      strokeWidth: 1,
      stroke: "rgba(198,198,198,1)",
      fill: getColorStyle(fill) || "rgba(255,255,255,1)",
      zIndex: 0,
      evented: false
    });
    scene.addObject(page, 0);
  }
  _getCenterPositionViewPort(mainScene) {
    if (!mainScene) return { left: 0, top: 0 };
    const { width, height } = mainScene;
    const engine = mainScene.getEngine();
    const canvasWidth = (engine == null ? void 0 : engine.width) || 0;
    const canvasHeight = (engine == null ? void 0 : engine.height) || 0;
    return {
      left: (width - canvasWidth) / 2,
      top: (height - canvasHeight) / 2
    };
  }
  _thumbSceneRender(pageId, slide) {
    const render = this._renderManagerService.getRenderById(pageId);
    if (render == null) {
      return;
    }
    const { engine: thumbEngine } = render;
    if (thumbEngine == null) {
      return;
    }
    const { width, height } = slide;
    const { width: pageWidth = width, height: pageHeight = height } = thumbEngine;
    const thumbContext = thumbEngine.getCanvas().getContext();
    slide.renderToThumb(thumbContext, pageId, pageWidth / width, pageHeight / height);
  }
  /**
   * CreateScene by pages, and activate first one.
   * @param slideDataModel
   * @param slide
   */
  _createSlidePages(slideDataModel, slide) {
    const pages = slideDataModel.getPages();
    const pageOrder = slideDataModel.getPageOrder();
    if (!pages || !pageOrder) {
      return;
    }
    if (pageOrder.length === 0) {
      return;
    }
    for (let i = 0, len = pageOrder.length; i < len; i++) {
      const pageId = pageOrder[i];
      this.createPageScene(pageId, pages[pageId]);
      this._createThumb(pageId);
    }
    slide.activeFirstPage();
  }
  _createThumb(pageId) {
    this._renderManagerService.createRender(pageId);
  }
  /**
   * SlideDataModel is UnitModel
   */
  _getCurrUnitModel() {
    return this._renderContext.unit;
  }
  activePage(_pageId) {
    let pageId = _pageId;
    const model = this._getCurrUnitModel();
    let page;
    if (pageId) {
      page = model.getPage(pageId);
    } else {
      const pageElements = model.getPages();
      const pageOrder = model.getPageOrder();
      if (pageOrder == null || pageElements == null) {
        return;
      }
      page = pageElements[pageOrder[0]];
      pageId = page.id;
    }
    const render = this._currentRender();
    if (page == null || render == null || render.mainComponent == null) {
      return;
    }
    const { id } = page;
    const slide = render.mainComponent;
    model.setActivePage(page);
    if (slide == null ? void 0 : slide.hasPage(id)) {
      slide.changePage(id);
      return;
    }
    this.createPageScene(id, page);
  }
  createThumbs() {
    const slideDataModel = this._getCurrUnitModel();
    const pageOrder = slideDataModel.getPageOrder();
    const render = this._currentRender();
    if (!pageOrder || !render) {
      return;
    }
    if (pageOrder.length === 0) {
      return;
    }
    for (let i = 0, len = pageOrder.length; i < len; i++) {
      const pageId = pageOrder[i];
      this._thumbSceneRender(pageId, render.mainComponent);
    }
  }
  /**
   * Create scene by page and set to _sceneMap.
   * @param pageId
   * @param page
   */
  createPageScene(pageId, page) {
    const render = this._renderContext;
    if (!render || !this._objectProvider) {
      return;
    }
    const { scene: mainScene, mainComponent } = render;
    const slide = mainComponent;
    const { width, height } = slide;
    const pageScene = new Scene(pageId, slide, {
      width,
      height
    });
    const viewMain = new Viewport(`PageViewer_${pageId}`, pageScene, {
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
      explicitViewportWidthSet: false,
      explicitViewportHeightSet: false
    });
    viewMain.closeClip();
    const { pageElements, pageBackgroundFill } = page;
    const objects = this._objectProvider.convertToRenderObjects(pageElements, mainScene);
    if (!objects || !slide) return;
    this._addBackgroundRect(pageScene, pageBackgroundFill);
    pageScene.addObjects(objects);
    pageScene.initTransformer();
    objects.forEach((object) => {
      pageScene.attachTransformerTo(object);
    });
    const transformer = pageScene.getTransformer();
    transformer == null ? void 0 : transformer.changeEnd$.subscribe(() => {
      this._thumbSceneRender(pageId, slide);
    });
    transformer == null ? void 0 : transformer.clearControl$.subscribe(() => {
      this._thumbSceneRender(pageId, slide);
    });
    slide.addPageScene(pageScene);
    return pageScene;
  }
  /**
   * Get pageScene from Slide.
   * @param pageId
   * @returns {Scene, Engine, UnitModel} scene & engine & unit from renderContext
   */
  getPageRenderUnit(pageId) {
    const subsceneMap = this._renderContext.mainComponent.getSubScenes();
    const pageScene = subsceneMap.get(pageId);
    const { engine, unit } = this._renderContext;
    return {
      scene: pageScene,
      engine,
      unit
    };
  }
  createObjectToPage(element, pageID) {
    const { scene } = this.getPageRenderUnit(pageID);
    if (!scene || !this._objectProvider) {
      return;
    }
    const object = this._objectProvider.convertToRenderObject(element, scene);
    if (object) {
      scene.addObject(object);
      scene.attachTransformerTo(object);
      scene.getLayer().makeDirty();
      return object;
    }
  }
  setObjectActiveByPage(obj, pageID) {
    const { scene } = this.getPageRenderUnit(pageID);
    if (!scene) return;
    const transformer = scene.getTransformer();
    transformer == null ? void 0 : transformer.activeAnObject(obj);
  }
  removeObjectById(id, pageID) {
    const { scene } = this.getPageRenderUnit(pageID);
    if (!scene) return;
    scene.removeObject(id);
    const transformer = scene.getTransformer();
    transformer == null ? void 0 : transformer.clearControls();
  }
  appendPage() {
    const model = this._getCurrUnitModel();
    const page = model.getBlankPage();
    const render = this._currentRender();
    if (page == null || render == null || render.mainComponent == null) {
      return;
    }
    const { id: pageId } = page;
    const slide = render.mainComponent;
    const scene = this.createPageScene(pageId, page);
    if (slide && scene) {
      slide.addPageScene(scene);
    }
    model.appendPage(page);
    model.setActivePage(page);
  }
};
SlideRenderController = __decorateClass([
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IUniverInstanceService),
  __decorateParam(3, IRenderManagerService)
], SlideRenderController);

// ../packages/slides-ui/src/controllers/canvas-view.ts
var CanvasView = class extends RxDisposable {
  constructor(_renderManagerService) {
    super();
    this._renderManagerService = _renderManagerService;
  }
  _getSlideRenderControllerFromRenderUnit(unitId) {
    const renderUnit = this._renderManagerService.getRenderById(unitId);
    const slideRC = renderUnit.with(SlideRenderController);
    return slideRC;
  }
  createThumbs(unitId) {
    const slideRC = this._getSlideRenderControllerFromRenderUnit(unitId);
    slideRC.createThumbs();
  }
  activePage(pageId, unitId) {
    const slideRC = this._getSlideRenderControllerFromRenderUnit(unitId);
    slideRC.activePage(pageId);
  }
  getRenderUnitByPageId(pageId, unitId) {
    const slideRC = this._getSlideRenderControllerFromRenderUnit(unitId);
    return slideRC.getPageRenderUnit(pageId);
  }
  createObjectToPage(element, pageID, unitId) {
    const slideRC = this._getSlideRenderControllerFromRenderUnit(unitId);
    return slideRC.createObjectToPage(element, pageID);
  }
  setObjectActiveByPage(obj, pageID, unitId) {
    const slideRC = this._getSlideRenderControllerFromRenderUnit(unitId);
    return slideRC.setObjectActiveByPage(obj, pageID);
  }
  removeObjectById(id, pageID, unitId) {
    const slideRC = this._getSlideRenderControllerFromRenderUnit(unitId);
    slideRC.removeObjectById(id, pageID);
  }
  /**
   * append blank page
   */
  appendPage(unitId) {
    const slideRC = this._getSlideRenderControllerFromRenderUnit(unitId);
    slideRC.appendPage();
  }
};
CanvasView = __decorateClass([
  __decorateParam(0, IRenderManagerService)
], CanvasView);

// ../packages/slides-ui/src/commands/operations/activate.operation.ts
var ActivateSlidePageOperation = {
  id: "slide.operation.activate-slide",
  type: 1 /* OPERATION */,
  handler: (accessor, params) => {
    var _a, _b;
    const unitId = params.unitId;
    const canvasView = accessor.get(CanvasView);
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const model = univerInstanceService.getUnit(unitId);
    const pageId = (_a = model == null ? void 0 : model.getActivePage()) == null ? void 0 : _a.id;
    if (!pageId) return false;
    const page = canvasView.getRenderUnitByPageId(pageId, unitId);
    if (!page) return false;
    const transformer = (_b = page.scene) == null ? void 0 : _b.getTransformer();
    if (transformer) {
      transformer.clearControls();
    }
    canvasView.activePage(params.id, unitId);
    return true;
  }
};

// ../packages/slides-ui/src/commands/operations/append-slide.operation.ts
var AppendSlideOperation = {
  id: "slide.operation.append-slide",
  type: 1 /* OPERATION */,
  handler: (accessor, params) => {
    const unitId = params.unitId;
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const slideData = univerInstanceService.getUnit(unitId);
    if (!slideData) return false;
    const canvasView = accessor.get(CanvasView);
    canvasView.appendPage(unitId);
    return true;
  }
};

// ../packages/slides-ui/src/commands/operations/delete-element.operation.ts
var DeleteSlideElementOperation = {
  id: "slide.operation.delete-element",
  type: 1 /* OPERATION */,
  handler: (accessor, params) => {
    if (!(params == null ? void 0 : params.id)) return false;
    const unitId = params.unitId;
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const slideData = univerInstanceService.getUnit(unitId);
    if (!slideData) return false;
    const activePage = slideData.getActivePage();
    delete activePage.pageElements[params.id];
    slideData.updatePage(activePage.id, activePage);
    const canvasview = accessor.get(CanvasView);
    canvasview.removeObjectById(params.id, activePage.id, unitId);
    return true;
  }
};

// ../packages/slides-ui/src/commands/operations/insert-image.operation.ts
var InsertSlideFloatImageCommand = {
  id: "slide.command.insert-float-image",
  type: 0 /* COMMAND */,
  handler: async (accessor, params) => {
    var _a;
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const unitId = (_a = univerInstanceService.getCurrentUnitForType(O.UNIVER_SLIDE)) == null ? void 0 : _a.getUnitId();
    if (!unitId) return false;
    const fileOpenerService = accessor.get(ILocalFileService);
    const files = await fileOpenerService.openFile({
      multiple: true,
      accept: DRAWING_IMAGE_ALLOW_IMAGE_LIST.map((image2) => `.${image2.replace("image/", "")}`).join(",")
    });
    if (files.length !== 1) return false;
    const imageIoService = accessor.get(IImageIoService);
    const imageParam = await imageIoService.saveImage(files[0]);
    if (!imageParam) return false;
    const { imageId, imageSourceType, source, base64Cache } = imageParam;
    const { width, height, image } = await getImageSize(base64Cache || "");
    const slideData = univerInstanceService.getUnit(unitId);
    if (!slideData) return false;
    const activePage = slideData.getActivePage();
    const elements = Object.values(activePage.pageElements);
    const maxIndex = (elements == null ? void 0 : elements.length) ? Math.max(...elements.map((element) => element.zIndex)) : 20;
    const data = {
      id: imageId,
      zIndex: maxIndex + 1,
      left: 0,
      top: 0,
      width,
      height,
      title: "",
      description: "",
      type: 1 /* IMAGE */,
      image: {
        imageProperties: {
          contentUrl: base64Cache,
          imageSourceType,
          source,
          base64Cache,
          image
        }
      }
    };
    activePage.pageElements[imageId] = data;
    slideData.updatePage(activePage.id, activePage);
    const canvasView = accessor.get(CanvasView);
    const sceneObject = canvasView.createObjectToPage(data, activePage.id, unitId);
    if (sceneObject) {
      canvasView.setObjectActiveByPage(sceneObject, activePage.id, unitId);
    }
    return true;
  }
};

// ../packages/slides-ui/src/commands/operations/update-element.operation.ts
var UpdateSlideElementOperation = {
  id: "slide.operation.update-element",
  type: 1 /* OPERATION */,
  handler: (accessor, params) => {
    const { oKey, props } = params;
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const unitId = params == null ? void 0 : params.unitId;
    const slideData = univerInstanceService.getUnit(unitId);
    if (!slideData) return false;
    const activePage = slideData.getActivePage();
    activePage.pageElements[oKey] = Tools.deepMerge(activePage.pageElements[oKey], props);
    slideData.updatePage(activePage.id, activePage);
    return true;
  }
};

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages/slides-ui/src/components/panels/index.module.less
var index_module_default = {
  "imageCommonPanel": "univer-image-common-panel",
  "imageCommonPanelGrid": "univer-image-common-panel-grid",
  "imageCommonPanelBorder": "univer-image-common-panel-border",
  "imageCommonPanelTitle": "univer-image-common-panel-title",
  "imageCommonPanelSubtitle": "univer-image-common-panel-subtitle",
  "imageCommonPanelRow": "univer-image-common-panel-row",
  "imageCommonPanelRowVertical": "univer-image-common-panel-row-vertical",
  "imageCommonPanelColumn": "univer-image-common-panel-column",
  "imageCommonPanelColumnCenter": "univer-image-common-panel-column-center",
  "imageCommonPanelInline": "univer-image-common-panel-inline",
  "imageCommonPanelSpan2": "univer-image-common-panel-span2",
  "imageCommonPanelSpan3": "univer-image-common-panel-span3",
  "imageCommonPanelInput": "univer-image-common-panel-input",
  "slidePanelColorPicker": "univer-slide-panel-color-picker"
};

// ../packages/slides-ui/src/components/panels/ArrangePanel.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
function ArrangePanel(props) {
  const { pageId, unitId } = props;
  const localeService = useDependency(LocaleService);
  const canvasView = useDependency(CanvasView);
  const commandService = useDependency(ICommandService);
  const page = canvasView.getRenderUnitByPageId(pageId, unitId);
  const scene = page == null ? void 0 : page.scene;
  if (!scene) return null;
  const transformer = scene.getTransformer();
  if (!transformer) return null;
  const selectedObjects = transformer.getSelectedObjectMap();
  const object = selectedObjects.values().next().value;
  if (!object) return null;
  const onArrangeBtnClick = (arrangeType) => {
    const allObjects = scene.getAllObjects();
    const [minZIndex, maxZIndex] = allObjects.reduce(([min, max], obj) => {
      const zIndex2 = obj.zIndex;
      const minZIndex2 = zIndex2 < min ? zIndex2 : min;
      const maxZIndex2 = zIndex2 > max ? zIndex2 : max;
      return [minZIndex2, maxZIndex2];
    }, [0, 0]);
    let zIndex = object.zIndex;
    if (arrangeType === 3 /* back */) {
      zIndex = minZIndex - 1;
    } else if (arrangeType === 2 /* front */) {
      zIndex = maxZIndex + 1;
    } else if (arrangeType === 0 /* forward */) {
      zIndex = object.zIndex + 1;
    } else if (arrangeType === 1 /* backward */) {
      zIndex = object.zIndex - 1;
    }
    object.setProps({
      zIndex
    });
    commandService.executeCommand(UpdateSlideElementOperation.id, {
      unitId,
      oKey: object == null ? void 0 : object.oKey,
      props: {
        zIndex
      }
    });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: index_module_default.imageCommonPanelGrid, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: index_module_default.imageCommonPanelRow, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: clsx(index_module_default.imageCommonPanelColumn, index_module_default.imageCommonPanelTitle), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: localeService.t("image-panel.arrange.title") }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: index_module_default.imageCommonPanelRow, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: clsx(index_module_default.imageCommonPanelColumn, index_module_default.imageCommonPanelSpan2), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { size: "small", onClick: () => {
        onArrangeBtnClick(0 /* forward */);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: index_module_default.imageCommonPanelInline, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(move_up_single_default, {}),
        localeService.t("image-panel.arrange.forward")
      ] }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: clsx(index_module_default.imageCommonPanelColumn, index_module_default.imageCommonPanelSpan2), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { size: "small", onClick: () => {
        onArrangeBtnClick(1 /* backward */);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: index_module_default.imageCommonPanelInline, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(move_down_single_default, {}),
        localeService.t("image-panel.arrange.backward")
      ] }) }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: index_module_default.imageCommonPanelRow, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: clsx(index_module_default.imageCommonPanelColumn, index_module_default.imageCommonPanelSpan2), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { size: "small", onClick: () => {
        onArrangeBtnClick(2 /* front */);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: index_module_default.imageCommonPanelInline, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(topmost_single_default, {}),
        localeService.t("image-panel.arrange.front")
      ] }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: clsx(index_module_default.imageCommonPanelColumn, index_module_default.imageCommonPanelSpan2), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { size: "small", onClick: () => {
        onArrangeBtnClick(3 /* back */);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: index_module_default.imageCommonPanelInline, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(bottom_single_default, {}),
        localeService.t("image-panel.arrange.back")
      ] }) }) })
    ] })
  ] });
}

// ../packages/slides-ui/src/components/panels/FillPanel.tsx
var import_react = __toESM(require_react());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
function ArrangePanel2(props) {
  var _a, _b;
  const { pageId, unitId } = props;
  const localeService = useDependency(LocaleService);
  const canvasView = useDependency(CanvasView);
  const commandService = useDependency(ICommandService);
  const page = canvasView.getRenderUnitByPageId(pageId, unitId);
  const scene = page == null ? void 0 : page.scene;
  if (!scene) return null;
  const transformer = scene.getTransformer();
  if (!transformer) return null;
  const selectedObjects = transformer.getSelectedObjectMap();
  const object = selectedObjects.values().next().value;
  if (!object) return null;
  const [color, setColor] = import_react.default.useState((_b = (_a = object.fill) == null ? void 0 : _a.toString()) != null ? _b : "");
  function handleChangeColor(color2) {
    object == null ? void 0 : object.setProps({
      fill: color2
    });
    commandService.executeCommand(UpdateSlideElementOperation.id, {
      unitId,
      oKey: object == null ? void 0 : object.oKey,
      props: {
        shape: {
          shapeProperties: {
            shapeBackgroundFill: {
              rgb: color2
            }
          }
        }
      }
    });
    setColor(color2);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      className: clsx(index_module_default.imageCommonPanelGrid, index_module_default.imageCommonPanelBorder),
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: index_module_default.imageCommonPanelGrid, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: index_module_default.imageCommonPanelRow, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: clsx(index_module_default.imageCommonPanelColumn, index_module_default.imageCommonPanelTitle), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { children: localeService.t("slide.panel.fill.title") }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: index_module_default.imageCommonPanelRow, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: clsx(index_module_default.imageCommonPanelColumn, index_module_default.imageCommonPanelSpan2), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          Dropdown,
          {
            overlay: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "univer-rounded-lg univer-p-4", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              ColorPicker,
              {
                value: "#fff",
                onChange: handleChangeColor
              }
            ) }),
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("a", { className: index_module_default.uiPluginSheetsBorderPanelButton, children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(paint_bucket_default, { extend: { colorChannel1: color != null ? color : "rgb(var(--primary-color))" } }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: index_module_default.uiPluginSheetsBorderPanelMoreIcon, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(more_down_single_default, {}) })
            ] })
          }
        ) }) })
      ] })
    }
  );
}

// ../packages/slides-ui/src/components/panels/TransformPanel.tsx
var import_react2 = __toESM(require_react());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
function TransformPanel(props) {
  const { pageId, unitId } = props;
  const localeService = useDependency(LocaleService);
  const canvasView = useDependency(CanvasView);
  const commandService = useDependency(ICommandService);
  const page = canvasView.getRenderUnitByPageId(pageId, unitId);
  const scene = page == null ? void 0 : page.scene;
  if (!scene) return null;
  const transformer = scene.getTransformer();
  if (!transformer) return null;
  const selectedObjects = transformer.getSelectedObjectMap();
  const object = selectedObjects.values().next().value;
  if (!object) return null;
  const {
    width: originWidth = 0,
    height: originHeight = 0,
    left: originX = 0,
    top: originY = 0,
    angle: originRotation = 0
  } = object;
  const [width, setWidth] = (0, import_react2.useState)(originWidth);
  const [height, setHeight] = (0, import_react2.useState)(originHeight);
  const [xPosition, setXPosition] = (0, import_react2.useState)(originX);
  const [yPosition, setYPosition] = (0, import_react2.useState)(originY);
  const [rotation, setRotation] = (0, import_react2.useState)(originRotation);
  const changeObs = (state) => {
    const { objects } = state;
    const object2 = objects.values().next().value;
    const {
      width: originWidth2 = 0,
      height: originHeight2 = 0,
      left: originX2 = 0,
      top: originY2 = 0,
      angle: originRotation2 = 0
    } = object2;
    setWidth(originWidth2);
    setHeight(originHeight2);
    setXPosition(originX2);
    setYPosition(originY2);
    setRotation(originRotation2);
  };
  (0, import_react2.useEffect)(() => {
    const changeStartSub = transformer.changeStart$.subscribe((state) => {
      changeObs(state);
    });
    const changingSub = transformer.changing$.subscribe((state) => {
      changeObs(state);
    });
    return () => {
      changingSub.unsubscribe();
      changeStartSub.unsubscribe();
    };
  }, []);
  function handleWidthChange(val) {
    if (!val || !object) return;
    commandService.executeCommand(UpdateSlideElementOperation.id, {
      pageId,
      oKey: object.oKey,
      props: {
        width: val
      }
    });
    object == null ? void 0 : object.resize(val, object.height);
    setWidth(val);
    transformer == null ? void 0 : transformer.refreshControls();
  }
  function handleHeightChange(val) {
    if (!val || !object) return;
    commandService.executeCommand(UpdateSlideElementOperation.id, {
      pageId,
      oKey: object.oKey,
      props: {
        height: val
      }
    });
    object == null ? void 0 : object.resize(object.width, val);
    setHeight(val);
    transformer == null ? void 0 : transformer.refreshControls();
  }
  function handleXChange(val) {
    if (!val || !object) return;
    commandService.executeCommand(UpdateSlideElementOperation.id, {
      pageId,
      oKey: object.oKey,
      props: {
        left: val
      }
    });
    object == null ? void 0 : object.translate(val, object.top);
    setXPosition(val);
    transformer == null ? void 0 : transformer.refreshControls();
  }
  function handleYChange(val) {
    if (!val || !object) return;
    commandService.executeCommand(UpdateSlideElementOperation.id, {
      pageId,
      oKey: object.oKey,
      props: {
        right: val
      }
    });
    object == null ? void 0 : object.translate(object.left, val);
    setYPosition(val);
    transformer == null ? void 0 : transformer.refreshControls();
  }
  function handleChangeRotation(val) {
    if (!val || !object) return;
    commandService.executeCommand(UpdateSlideElementOperation.id, {
      pageId,
      oKey: object.oKey,
      props: {
        angle: val
      }
    });
    object == null ? void 0 : object.transformByState({
      angle: val
    });
    setRotation(val);
    transformer == null ? void 0 : transformer.refreshControls();
  }
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "div",
    {
      className: clsx(index_module_default.imageCommonPanelGrid, index_module_default.imageCommonPanelBorder),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: index_module_default.imageCommonPanelRow, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: clsx(index_module_default.imageCommonPanelColumn, index_module_default.imageCommonPanelTitle), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { children: localeService.t("image-panel.transform.title") }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: index_module_default.imageCommonPanelRow, children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: clsx(index_module_default.imageCommonPanelColumn, index_module_default.imageCommonPanelSpan3), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("label", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: index_module_default.imageCommonPanelRow, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: index_module_default.imageCommonPanelColumn, children: localeService.t("image-panel.transform.width") }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: index_module_default.imageCommonPanelRow, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: index_module_default.imageCommonPanelColumn, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              InputNumber,
              {
                className: index_module_default.imageCommonPanelInput,
                min: 1,
                value: width,
                onChange: (val) => {
                  handleWidthChange(val);
                }
              }
            ) }) })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: clsx(index_module_default.imageCommonPanelColumn, index_module_default.imageCommonPanelSpan3), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("label", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: index_module_default.imageCommonPanelRow, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: index_module_default.imageCommonPanelColumn, children: localeService.t("image-panel.transform.height") }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: index_module_default.imageCommonPanelRow, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: index_module_default.imageCommonPanelColumn, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              InputNumber,
              {
                className: index_module_default.imageCommonPanelInput,
                min: 1,
                value: height,
                onChange: (val) => {
                  handleHeightChange(val);
                }
              }
            ) }) })
          ] }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: index_module_default.imageCommonPanelRow, children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: clsx(index_module_default.imageCommonPanelColumn, index_module_default.imageCommonPanelSpan3), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("label", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: index_module_default.imageCommonPanelRow, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: index_module_default.imageCommonPanelColumn, children: localeService.t("image-panel.transform.x") }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: index_module_default.imageCommonPanelRow, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: index_module_default.imageCommonPanelColumn, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              InputNumber,
              {
                className: index_module_default.imageCommonPanelInput,
                precision: 1,
                min: 0,
                value: xPosition,
                onChange: (val) => {
                  handleXChange(val);
                }
              }
            ) }) })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: clsx(index_module_default.imageCommonPanelColumn, index_module_default.imageCommonPanelSpan3), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("label", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: index_module_default.imageCommonPanelRow, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: index_module_default.imageCommonPanelColumn, children: localeService.t("image-panel.transform.y") }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: index_module_default.imageCommonPanelRow, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: index_module_default.imageCommonPanelColumn, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              InputNumber,
              {
                className: index_module_default.imageCommonPanelInput,
                precision: 1,
                min: 0,
                value: yPosition,
                onChange: (val) => {
                  handleYChange(val);
                }
              }
            ) }) })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: clsx(index_module_default.imageCommonPanelColumn, index_module_default.imageCommonPanelSpan3), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("label", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: index_module_default.imageCommonPanelRow, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: index_module_default.imageCommonPanelColumn, children: localeService.t("image-panel.transform.rotate") }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: index_module_default.imageCommonPanelRow, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: index_module_default.imageCommonPanelColumn, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              InputNumber,
              {
                className: index_module_default.imageCommonPanelInput,
                precision: 1,
                value: rotation,
                onChange: handleChangeRotation
              }
            ) }) })
          ] }) })
        ] })
      ]
    }
  );
}

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages/slides-ui/src/components/sidebar/index.module.less
var index_module_default2 = {
  "imageCommonPanel": "univer-image-common-panel",
  "imageCommonPanelGrid": "univer-image-common-panel-grid",
  "imageCommonPanelBorder": "univer-image-common-panel-border",
  "imageCommonPanelTitle": "univer-image-common-panel-title",
  "imageCommonPanelSubtitle": "univer-image-common-panel-subtitle",
  "imageCommonPanelRow": "univer-image-common-panel-row",
  "imageCommonPanelRowVertical": "univer-image-common-panel-row-vertical",
  "imageCommonPanelColumn": "univer-image-common-panel-column",
  "imageCommonPanelColumnCenter": "univer-image-common-panel-column-center",
  "imageCommonPanelInline": "univer-image-common-panel-inline",
  "imageCommonPanelSpan2": "univer-image-common-panel-span2",
  "imageCommonPanelSpan3": "univer-image-common-panel-span3",
  "imageCommonPanelInput": "univer-image-common-panel-input"
};

// ../packages/slides-ui/src/components/sidebar/Sidebar.tsx
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var COMPONENT_SLIDE_SIDEBAR = "COMPONENT_SLIDE_SIDEBAR";
function RectSidebar() {
  var _a, _b, _c;
  const univerInstanceService = useDependency(IUniverInstanceService);
  const canvasView = useDependency(CanvasView);
  const currentSlide = univerInstanceService.getCurrentUnitForType(O.UNIVER_SLIDE);
  const pageId = (_a = currentSlide == null ? void 0 : currentSlide.getActivePage()) == null ? void 0 : _a.id;
  if (!pageId) return null;
  const page = canvasView.getRenderUnitByPageId(pageId, pageId);
  const transformer = (_b = page.scene) == null ? void 0 : _b.getTransformer();
  if (!transformer) return null;
  const selectedObjects = transformer.getSelectedObjectMap();
  const object = selectedObjects.values().next().value;
  if (!object) {
    return null;
  }
  const unitId = ((_c = univerInstanceService.getFocusedUnit()) == null ? void 0 : _c.getUnitId()) || "";
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { className: index_module_default2.imageCommonPanel, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ArrangePanel, { pageId, unitId }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TransformPanel, { pageId, unitId }),
    object.objectType === 4 /* RECT */ && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ArrangePanel2, { pageId, unitId })
  ] });
}

// ../packages/slides-ui/src/commands/operations/insert-shape.operation.ts
var InsertSlideShapeRectangleCommand = {
  id: "slide.command.insert-float-shape",
  type: 0 /* COMMAND */,
  handler: async (accessor) => {
    var _a;
    const commandService = accessor.get(ICommandService);
    const instanceService = accessor.get(IUniverInstanceService);
    const unitId = (_a = instanceService.getFocusedUnit()) == null ? void 0 : _a.getUnitId();
    return commandService.executeCommand(InsertSlideShapeRectangleOperation.id, { unitId });
  }
};
var InsertSlideShapeRectangleOperation = {
  id: "slide.operation.insert-float-shape",
  type: 1 /* OPERATION */,
  handler: async (accessor, params) => {
    const id = generateRandomId(6);
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const unitId = params.unitId;
    const slideData = univerInstanceService.getUnit(unitId);
    if (!slideData) return false;
    const activePage = slideData.getActivePage();
    const elements = Object.values(activePage.pageElements);
    const maxIndex = (elements == null ? void 0 : elements.length) ? Math.max(...elements.map((element) => element.zIndex)) : 20;
    const data = {
      id,
      zIndex: maxIndex + 1,
      left: 378,
      top: 142,
      width: 250,
      height: 250,
      title: id,
      description: "",
      type: 0 /* SHAPE */,
      shape: {
        shapeType: "rect" /* Rect */,
        text: "",
        shapeProperties: {
          shapeBackgroundFill: {
            rgb: "rgb(0,0,255)"
          }
        }
      }
    };
    activePage.pageElements[id] = data;
    slideData.updatePage(activePage.id, activePage);
    const canvasview = accessor.get(CanvasView);
    const sceneObject = canvasview.createObjectToPage(data, activePage.id, unitId);
    if (sceneObject) {
      canvasview.setObjectActiveByPage(sceneObject, activePage.id, unitId);
    }
    return true;
  }
};
var ToggleSlideEditSidebarOperation = {
  id: "sidebar.operation.slide-shape",
  type: 0 /* COMMAND */,
  handler: async (accessor, params) => {
    const { visible, objectType } = params;
    const sidebarService = accessor.get(ISidebarService);
    const localeService = accessor.get(LocaleService);
    let title = "";
    let children = "";
    if (objectType === 4 /* RECT */) {
      title = "slide.sidebar.shape";
      children = COMPONENT_SLIDE_SIDEBAR;
    } else if (objectType === 3 /* IMAGE */) {
      title = "slide.sidebar.image";
      children = COMPONENT_SLIDE_SIDEBAR;
    } else if (objectType === 1 /* RICH_TEXT */) {
      title = "slide.sidebar.text";
      children = COMPONENT_SLIDE_SIDEBAR;
    }
    if (visible) {
      sidebarService.open({
        header: { title: localeService.t(title) },
        children: { label: children },
        onClose: () => {
        },
        width: 360
      });
    } else {
      sidebarService.close();
    }
    return true;
  }
};

// ../packages/slides-ui/src/commands/operations/insert-text.operation.ts
var SlideAddTextCommand = {
  id: "slide.command.add-text",
  type: 0 /* COMMAND */,
  handler: async (accessor) => {
    var _a;
    const commandService = accessor.get(ICommandService);
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const unitId = (_a = univerInstanceService.getFocusedUnit()) == null ? void 0 : _a.getUnitId();
    return await commandService.executeCommand(SlideAddTextOperation.id, { unitId });
  }
};
var SlideAddTextOperation = {
  id: "slide.operation.add-text",
  type: 1 /* OPERATION */,
  handler: async (accessor, params) => {
    const unitId = params.unitId;
    const elementId = generateRandomId(6);
    const defaultWidth = 220;
    const defaultheight = 40;
    const left = 230;
    const top = 142;
    const textContent = (params == null ? void 0 : params.text) || "A New Text";
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const slideData = univerInstanceService.getUnit(unitId);
    if (!slideData) return false;
    const activePage = slideData.getActivePage();
    const elements = Object.values(activePage.pageElements);
    const maxIndex = (elements == null ? void 0 : elements.length) ? Math.max(...elements.map((element) => element.zIndex)) : 21;
    const elementData = {
      id: elementId,
      zIndex: maxIndex + 1,
      left,
      top,
      width: defaultWidth,
      height: defaultheight,
      title: "text",
      description: "",
      type: 2 /* TEXT */,
      richText: {
        text: textContent,
        fs: 30,
        cl: {
          rgb: "rgb(51, 51, 51)"
        },
        bl: 1
      }
    };
    activePage.pageElements[elementId] = elementData;
    slideData.updatePage(activePage.id, activePage);
    const canvasview = accessor.get(CanvasView);
    const sceneObject = canvasview.createObjectToPage(elementData, activePage.id, unitId);
    if (sceneObject) {
      canvasview.setObjectActiveByPage(sceneObject, activePage.id, unitId);
    }
    return true;
  }
};

// ../packages/slides-ui/src/commands/operations/set-thumb.operation.ts
var SetSlidePageThumbOperation = {
  id: "slide.operation.set-slide-page-thumb",
  type: 1 /* OPERATION */,
  handler: (accessor, params) => {
    const canvasView = accessor.get(CanvasView);
    canvasView.createThumbs(params.unitId);
    return true;
  }
};

// ../packages/slides-ui/src/commands/operations/text-edit.operation.ts
var SetTextEditArrowOperation = {
  id: "slide.operation.edit-arrow",
  type: 1 /* OPERATION */,
  handler: () => true
};

// ../packages/slides-ui/src/components/image-popup-menu/component-name.ts
var COMPONENT_SLIDE_IMAGE_POPUP_MENU = "COMPONENT_SLIDE_IMAGE_POPUP_MENU";

// ../packages/slides-ui/src/components/image-popup-menu/ImagePopupMenu.tsx
var import_react3 = __toESM(require_react());

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages/slides-ui/src/components/image-popup-menu/index.module.less
var index_module_default3 = {
  "imagePopupMenu": "univer-image-popup-menu",
  "imagePopupMenuItem": "univer-image-popup-menu-item",
  "imagePopupMenuItemIcon": "univer-image-popup-menu-item-icon",
  "imagePopupMenuItemTitle": "univer-image-popup-menu-item-title",
  "imagePopupMenuItemHide": "univer-image-popup-menu-item-hide",
  "btnContainer": "univer-btn-container",
  "btnContainerExpand": "univer-btn-container-expand"
};

// ../packages/slides-ui/src/components/image-popup-menu/ImagePopupMenu.tsx
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
function SlideImagePopupMenu(props) {
  var _a, _b;
  const menuItems = (_b = (_a = props.popup) == null ? void 0 : _a.extraProps) == null ? void 0 : _b.menuItems;
  if (!menuItems) {
    return null;
  }
  const commandService = useDependency(ICommandService);
  const localeService = useDependency(LocaleService);
  const [visible, setVisible] = (0, import_react3.useState)(false);
  const [isHovered, setHovered] = (0, import_react3.useState)(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  const onVisibleChange = (visible2) => {
    setVisible(visible2);
  };
  const handleClick = (item) => {
    commandService.executeCommand(item.commandId, item.commandParams);
    setVisible(false);
  };
  const showMore = visible || isHovered;
  const availableMenu = menuItems.filter((item) => !item.disable);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "div",
    {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        Dropdown,
        {
          align: "start",
          overlay: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "ul",
            {
              className: clsx(index_module_default3.imagePopupMenu, `
                          univer-box-border univer-p-2 univer-text-sm univer-theme
                        `),
              children: availableMenu.map((item) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                "li",
                {
                  onClick: () => handleClick(item),
                  className: index_module_default3.imagePopupMenuItem,
                  children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: index_module_default3.imagePopupMenuItemTitle, children: localeService.t(item.label) })
                },
                item.index
              ))
            }
          ),
          open: visible,
          onOpenChange: onVisibleChange,
          children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
            "div",
            {
              className: clsx(index_module_default3.btnContainer, {
                [index_module_default3.btnContainerExpand]: visible
              }),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                  autofill_default,
                  {
                    style: { color: "#35322B" },
                    extend: { colorChannel1: "rgb(var(--green-700, #409f11))" }
                  }
                ),
                showMore && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(more_down_single_default, { style: { color: "#CCCCCC", fontSize: "8px", marginLeft: "8px" } })
              ]
            }
          )
        }
      )
    }
  );
}

// ../packages/slides-ui/src/components/slide-bar/SlideBar.tsx
var import_react4 = __toESM(require_react());

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages/slides-ui/src/components/slide-bar/index.module.less
var index_module_default4 = {
  "slideBar": "univer-slide-bar",
  "slideBarContent": "univer-slide-bar-content",
  "slideBarContentHeader": "univer-slide-bar-content-header",
  "slideBarItem": "univer-slide-bar-item",
  "slideBarBox": "univer-slide-bar-box",
  "slideBarItemActive": "univer-slide-bar-item-active",
  "slideAddButton": "univer-slide-add-button"
};

// ../packages/slides-ui/src/components/slide-bar/SlideBar.tsx
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
function SlideSideBar() {
  var _a, _b;
  const univerInstanceService = useDependency(IUniverInstanceService);
  const commandService = useDependency(ICommandService);
  const renderManagerService = useDependency(IRenderManagerService);
  const localeService = useDependency(LocaleService);
  const slideBarRef = (0, import_react4.useRef)(null);
  const currentSlide = univerInstanceService.getCurrentUnitForType(O.UNIVER_SLIDE);
  const pages = currentSlide == null ? void 0 : currentSlide.getPages();
  const pageOrder = currentSlide == null ? void 0 : currentSlide.getPageOrder();
  if (!pages || !pageOrder) {
    return null;
  }
  const slideList = pageOrder.map((id) => pages[id]);
  const [activatePageId, setActivatePageId] = (0, import_react4.useState)((_b = (_a = currentSlide == null ? void 0 : currentSlide.getActivePage()) == null ? void 0 : _a.id) != null ? _b : null);
  const divRefs = (0, import_react4.useMemo)(() => slideList.map(() => import_react4.default.createRef()), [slideList]);
  (0, import_react4.useEffect)(() => {
    const subscriber = currentSlide == null ? void 0 : currentSlide.activePage$.subscribe((page) => {
      var _a2;
      const id = (_a2 = page == null ? void 0 : page.id) != null ? _a2 : null;
      id && setActivatePageId(id);
    });
    return () => {
      subscriber == null ? void 0 : subscriber.unsubscribe();
    };
  }, []);
  (0, import_react4.useEffect)(() => {
    divRefs.forEach((ref, index) => {
      var _a2;
      if (ref.current) {
        const slide = slideList[index];
        (_a2 = renderManagerService.getRenderById(slide.id)) == null ? void 0 : _a2.engine.setContainer(ref.current);
      }
    });
    if (divRefs.length > 0) {
      commandService.syncExecuteCommand(SetSlidePageThumbOperation.id, { unitId: currentSlide == null ? void 0 : currentSlide.getUnitId() });
    }
  }, [divRefs, slideList, renderManagerService, commandService, currentSlide]);
  const activatePage = (0, import_react4.useCallback)((page) => {
    commandService.syncExecuteCommand(ActivateSlidePageOperation.id, { id: page, unitId: currentSlide == null ? void 0 : currentSlide.getUnitId() });
  }, [commandService, currentSlide]);
  const handleAppendSlide = (0, import_react4.useCallback)(() => {
    commandService.syncExecuteCommand(AppendSlideOperation.id, { unitId: currentSlide == null ? void 0 : currentSlide.getUnitId() });
  }, [commandService, currentSlide]);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("aside", { className: index_module_default4.slideBar, ref: slideBarRef, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Scrollbar, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: index_module_default4.slideBarContent, children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("header", { className: index_module_default4.slideBarContentHeader, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", { onClick: handleAppendSlide, children: localeService.t("slide.append") }) }),
    slideList.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      "div",
      {
        className: clsx(index_module_default4.slideBarItem, {
          [index_module_default4.slideBarItemActive]: item.id === activatePageId
        }),
        onClick: () => activatePage(item.id),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: index + 1 }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { ref: divRefs[index], className: index_module_default4.slideBarBox })
        ]
      },
      item.id
    ))
  ] }) }) });
}

// ../packages/slides-ui/src/views/editor-container/EditorContainer.tsx
var import_react5 = __toESM(require_react());

// ../packages/slides-ui/src/const.ts
var SLIDE_EDITOR_ID = createInternalEditorID("SLIDE_EDITOR");

// ../packages/slides-ui/src/services/slide-editor-manager.service.ts
var SlideEditorManagerService = class {
  constructor() {
    __publicField(this, "_state", null);
    __publicField(this, "_rect", null);
    __publicField(this, "_state$", new BehaviorSubject(null));
    __publicField(this, "state$", this._state$.asObservable());
    __publicField(this, "_rect$", new BehaviorSubject(null));
    __publicField(this, "rect$", this._rect$.asObservable());
    __publicField(this, "_focus", false);
    __publicField(this, "_focus$", new BehaviorSubject(this._focus));
    __publicField(this, "focus$", this._focus$.asObservable());
  }
  dispose() {
    this._state$.complete();
    this._state = null;
    this._rect$.complete();
    this._rect = null;
  }
  setState(param) {
    this._state = param;
    this._refresh(param);
  }
  getRect() {
    return this._rect;
  }
  setRect(param) {
    this._rect = param;
    this._rect$.next(param);
  }
  getState() {
    return this._state;
  }
  setFocus(param = false) {
    this._focus = param;
    this._focus$.next(param);
  }
  _refresh(param) {
    this._state$.next(param);
  }
};
var ISlideEditorManagerService = createIdentifier(
  "univer.slide-editor-manager.service"
);

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages/slides-ui/src/views/editor-container/index.module.less
var index_module_default5 = {
  "slideEditorContainer": "univer-slide-editor-container",
  "editorInput": "univer-editor-input"
};

// ../packages/slides-ui/src/views/editor-container/EditorContainer.tsx
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var HIDDEN_EDITOR_POSITION = -1e3;
var EDITOR_DEFAULT_POSITION = {
  width: 0,
  height: 0,
  top: HIDDEN_EDITOR_POSITION,
  left: HIDDEN_EDITOR_POSITION
};
var SlideEditorContainer = () => {
  const [state, setState] = (0, import_react5.useState)({
    ...EDITOR_DEFAULT_POSITION
  });
  const slideEditorManagerService = useDependency(ISlideEditorManagerService);
  const editorService = useDependency(IEditorService);
  const contextService = useDependency(IContextService);
  const disableAutoFocus = useObservable(
    () => contextService.subscribeContextValue$(DISABLE_AUTO_FOCUS_KEY),
    false,
    void 0,
    [contextService, DISABLE_AUTO_FOCUS_KEY]
  );
  const snapshot = {
    id: SLIDE_EDITOR_ID,
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
      documentFlavor: 0 /* UNSPECIFIED */
    }
  };
  (0, import_react5.useEffect)(() => {
    slideEditorManagerService.state$.subscribe((param) => {
      if (param == null) {
        return;
      }
      const {
        startX = HIDDEN_EDITOR_POSITION,
        startY = HIDDEN_EDITOR_POSITION,
        endX = 0,
        endY = 0,
        show = false
      } = param;
      if (!show) {
        setState({
          ...EDITOR_DEFAULT_POSITION
        });
      } else {
        setState({
          width: endX - startX - FIX_ONE_PIXEL_BLUR_OFFSET + 2,
          height: endY - startY - FIX_ONE_PIXEL_BLUR_OFFSET + 2,
          left: startX + FIX_ONE_PIXEL_BLUR_OFFSET,
          top: startY + FIX_ONE_PIXEL_BLUR_OFFSET
        });
        const editor = editorService.getEditor(SLIDE_EDITOR_ID);
        if (editor == null) {
          return;
        }
        const { left, top, width, height } = editor.getBoundingClientRect();
        slideEditorManagerService.setRect({ left, top, width, height });
      }
    });
  }, []);
  (0, import_react5.useEffect)(() => {
    if (!disableAutoFocus) {
      slideEditorManagerService.setFocus(true);
    }
  }, [disableAutoFocus, state]);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    {
      className: index_module_default5.slideEditorContainer,
      style: {
        left: state.left,
        top: state.top,
        width: state.width,
        height: state.height
      }
    }
  );
};

// ../packages/slides-ui/src/controllers/image.menu.ts
var IMAGE_UPLOAD_ICON = "addition-and-subtraction-single";
var SLIDES_IMAGE_MENU_ID = "slide.menu.image";
function SlideImageMenuFactory(accessor) {
  return {
    id: SLIDES_IMAGE_MENU_ID,
    type: 3 /* SUBITEMS */,
    icon: IMAGE_UPLOAD_ICON,
    tooltip: "slide.image.insert.title",
    hidden$: getMenuHiddenObservable(accessor, O.UNIVER_SLIDE)
  };
}
function UploadSlideFloatImageMenuFactory(_accessor) {
  return {
    id: InsertSlideFloatImageCommand.id,
    title: "slide.image.insert.float",
    type: 0 /* BUTTON */,
    hidden$: getMenuHiddenObservable(_accessor, O.UNIVER_SLIDE)
  };
}

// ../packages/slides-ui/src/controllers/shape.menu.ts
var GRAPH_SINGLE_ICON = "graph-single";
var SHAPE_MENU_ID = "slide.menu.shape";
function SlideShapeMenuFactory(accessor) {
  return {
    id: SHAPE_MENU_ID,
    type: 3 /* SUBITEMS */,
    icon: GRAPH_SINGLE_ICON,
    tooltip: "slide.shape.insert.title",
    hidden$: getMenuHiddenObservable(accessor, O.UNIVER_SLIDE)
    // disabled$: getCurrentRangeDisable$(accessor, { workbookTypes: [WorkbookEditablePermission], worksheetTypes: [WorksheetEditPermission], rangeTypes: [RangeProtectionPermissionEditPoint] }),
  };
}
function UploadSlideFloatShapeMenuFactory(_accessor) {
  return {
    id: InsertSlideShapeRectangleCommand.id,
    title: "slide.shape.insert.rectangle",
    type: 0 /* BUTTON */,
    hidden$: getMenuHiddenObservable(_accessor, O.UNIVER_SLIDE)
  };
}

// ../packages/slides-ui/src/controllers/text.menu.ts
var TEXT_ICON_ID = "text-single";
function SlideAddTextMenuItemFactory(_accessor) {
  return {
    id: SlideAddTextCommand.id,
    type: 0 /* BUTTON */,
    icon: TEXT_ICON_ID,
    tooltip: "slide.text.insert.title",
    hidden$: getMenuHiddenObservable(_accessor, O.UNIVER_SLIDE)
  };
}

// ../packages/slides-ui/src/controllers/menu.schema.ts
var menuSchema = {
  ["ribbon.start.format" /* FORMAT */]: {
    [SlideAddTextCommand.id]: {
      order: 0,
      menuItemFactory: SlideAddTextMenuItemFactory
    },
    [SLIDES_IMAGE_MENU_ID]: {
      order: 0,
      menuItemFactory: SlideImageMenuFactory,
      [InsertSlideFloatImageCommand.id]: {
        order: 0,
        menuItemFactory: UploadSlideFloatImageMenuFactory
      }
    },
    [SHAPE_MENU_ID]: {
      order: 0,
      menuItemFactory: SlideShapeMenuFactory,
      [InsertSlideShapeRectangleCommand.id]: {
        order: 0,
        menuItemFactory: UploadSlideFloatShapeMenuFactory
      }
    }
  }
};

// ../packages/slides-ui/src/controllers/shortcuts/utils.ts
function whenEditorActivated(contextService) {
  return contextService.getContextValue(FOCUSING_UNIVER_EDITOR) && contextService.getContextValue(EDITOR_ACTIVATED);
}
function whenFormulaEditorFocused(contextService) {
  return contextService.getContextValue(FORMULA_EDITOR_ACTIVATED) && contextService.getContextValue(FOCUSING_UNIVER_EDITOR);
}

// ../packages/slides-ui/src/controllers/shortcuts/editor.shortcuts.ts
var ARROW_SELECTION_KEYCODE_LIST = [
  40 /* ARROW_DOWN */,
  38 /* ARROW_UP */,
  37 /* ARROW_LEFT */,
  39 /* ARROW_RIGHT */
];
var MOVE_SELECTION_KEYCODE_LIST = [13 /* ENTER */, 9 /* TAB */, ...ARROW_SELECTION_KEYCODE_LIST];
function generateArrowSelectionShortCutItem() {
  const shortcutList = [];
  for (const keycode of ARROW_SELECTION_KEYCODE_LIST) {
    shortcutList.push({
      id: SetTextEditArrowOperation.id,
      binding: keycode,
      preconditions: (contextService) => whenEditorActivated(contextService),
      staticParameters: {
        visible: false,
        eventType: 4 /* Keyboard */,
        keycode,
        isShift: false
      }
    });
    shortcutList.push({
      id: SetTextEditArrowOperation.id,
      binding: keycode | 1024 /* SHIFT */,
      preconditions: (contextService) => whenEditorActivated(contextService),
      staticParameters: {
        visible: false,
        eventType: 4 /* Keyboard */,
        keycode,
        isShift: true
      }
    });
  }
  return shortcutList;
}
var EditorDeleteLeftShortcut = {
  id: DeleteLeftCommand.id,
  preconditions: (contextService) => {
    return whenEditorActivated(contextService) || whenFormulaEditorFocused(contextService);
  },
  binding: 8 /* BACKSPACE */
};

// ../packages/slides-ui/src/controllers/slide-ui.controller.ts
var SlidesUIController = class extends Disposable {
  constructor(_injector, _menuManagerService, _componentManager, _uiPartsService, _commandService, _shortcutService) {
    super();
    this._injector = _injector;
    this._menuManagerService = _menuManagerService;
    this._componentManager = _componentManager;
    this._uiPartsService = _uiPartsService;
    this._commandService = _commandService;
    this._shortcutService = _shortcutService;
    this._initCommands();
    this._initCustomComponents();
    this._initUIComponents();
    this._initMenus();
    this._initShortcuts();
  }
  _initMenus() {
    this._menuManagerService.mergeMenu(menuSchema);
  }
  _initCustomComponents() {
    const componentManager = this._componentManager;
    this.disposeWithMe(componentManager.register(IMAGE_UPLOAD_ICON, add_image_single_default));
    this.disposeWithMe(componentManager.register(TEXT_ICON_ID, text_single_default));
    this.disposeWithMe(componentManager.register(GRAPH_SINGLE_ICON, graph_single_default));
    this.disposeWithMe(componentManager.register(COMPONENT_SLIDE_IMAGE_POPUP_MENU, SlideImagePopupMenu));
    this.disposeWithMe(componentManager.register(COMPONENT_SLIDE_SIDEBAR, RectSidebar));
  }
  _initCommands() {
    [
      AppendSlideOperation,
      ActivateSlidePageOperation,
      SetSlidePageThumbOperation,
      InsertSlideFloatImageCommand,
      SlideAddTextOperation,
      SlideAddTextCommand,
      InsertSlideShapeRectangleOperation,
      InsertSlideShapeRectangleCommand,
      ToggleSlideEditSidebarOperation,
      DeleteSlideElementOperation,
      UpdateSlideElementOperation,
      // commands for editor
      SetTextEditArrowOperation
    ].forEach((command) => this.disposeWithMe(this._commandService.registerCommand(command)));
  }
  _initUIComponents() {
    this.disposeWithMe(
      this._uiPartsService.registerComponent("left-sidebar" /* LEFT_SIDEBAR */, () => connectInjector(SlideSideBar, this._injector))
    );
    this.disposeWithMe(
      this._uiPartsService.registerComponent("content" /* CONTENT */, () => connectInjector(SlideEditorContainer, this._injector))
    );
  }
  _initShortcuts() {
    [
      EditorDeleteLeftShortcut,
      ...generateArrowSelectionShortCutItem()
    ].forEach((item) => {
      this.disposeWithMe(this._shortcutService.registerShortcut(item));
    });
  }
};
SlidesUIController = __decorateClass([
  __decorateParam(0, Inject(Injector)),
  __decorateParam(1, IMenuManagerService),
  __decorateParam(2, Inject(ComponentManager)),
  __decorateParam(3, IUIPartsService),
  __decorateParam(4, ICommandService),
  __decorateParam(5, IShortcutService)
], SlidesUIController);

// ../packages/slides-ui/src/controllers/config.schema.ts
var SLIDES_UI_PLUGIN_CONFIG_KEY = "slides-ui.config";
var configSymbol2 = Symbol(SLIDES_UI_PLUGIN_CONFIG_KEY);
var defaultPluginConfig2 = {};

// ../packages/slides-ui/src/services/slide-popup-manager.service.ts
function transformBound2OffsetBound(originBound, scene) {
  const topLeft = transformPosition2Offset(originBound.left, originBound.top, scene);
  const bottomRight = transformPosition2Offset(originBound.right, originBound.bottom, scene);
  return {
    left: topLeft.x,
    top: topLeft.y,
    right: bottomRight.x,
    bottom: bottomRight.y
  };
}
function transformPosition2Offset(x, y, scene) {
  const { scaleX, scaleY } = scene.getAncestorScale();
  const viewMain = scene.getViewport("__mainView__" /* VIEW */);
  if (!viewMain) {
    return {
      x,
      y
    };
  }
  const { viewportScrollX: actualScrollX, viewportScrollY: actualScrollY } = viewMain;
  const offsetX = (x - actualScrollX) * scaleX;
  const offsetY = (y - actualScrollY) * scaleY;
  return {
    x: offsetX,
    y: offsetY
  };
}
var SlideCanvasPopMangerService = class extends Disposable {
  constructor(_globalPopupManagerService, _renderManagerService, _univerInstanceService, _commandService) {
    super();
    this._globalPopupManagerService = _globalPopupManagerService;
    this._renderManagerService = _renderManagerService;
    this._univerInstanceService = _univerInstanceService;
    this._commandService = _commandService;
  }
  _createObjectPositionObserver(targetObject, currentRender) {
    const calc = () => {
      var _a, _b, _c, _d;
      const { scene, engine } = currentRender;
      const { left, top, width, height } = targetObject;
      const horizontalOffset = (scene.width - ((_b = (_a = currentRender.mainComponent) == null ? void 0 : _a.width) != null ? _b : 0)) / 2;
      const verticalOffset = (scene.height - ((_d = (_c = currentRender.mainComponent) == null ? void 0 : _c.height) != null ? _d : 0)) / 2;
      const bound = {
        left,
        right: left + width,
        top,
        bottom: top + height
      };
      const canvasElement = engine.getCanvasElement();
      const canvasClientRect = canvasElement.getBoundingClientRect();
      const widthOfCanvas = pxToNum(canvasElement.style.width);
      const { scaleX, scaleY } = scene.getAncestorScale();
      const offsetBound = transformBound2OffsetBound(bound, scene);
      const { top: topOffset, left: leftOffset, width: domWidth } = canvasClientRect;
      const scaleAdjust = domWidth / widthOfCanvas;
      const position2 = {
        left: offsetBound.left * scaleAdjust * scaleX + leftOffset + horizontalOffset,
        right: offsetBound.right * scaleAdjust * scaleX + leftOffset + horizontalOffset,
        top: offsetBound.top * scaleAdjust * scaleY + topOffset + verticalOffset,
        bottom: offsetBound.bottom * scaleAdjust * scaleY + topOffset + verticalOffset
      };
      return position2;
    };
    const position = calc();
    const position$ = new BehaviorSubject(position);
    const disposable = new DisposableCollection();
    return {
      position,
      position$,
      disposable
    };
  }
  attachPopupToObject(targetObject, popup) {
    const workbook = this._univerInstanceService.getCurrentUnitForType(O.UNIVER_SLIDE);
    const unitId = workbook.getUnitId();
    const currentRender = this._renderManagerService.getRenderById(unitId);
    if (!currentRender) {
      return {
        dispose: () => {
        }
      };
    }
    const { position, position$, disposable } = this._createObjectPositionObserver(targetObject, currentRender);
    const id = this._globalPopupManagerService.addPopup({
      ...popup,
      unitId,
      subUnitId: "default",
      anchorRect: position,
      anchorRect$: position$,
      canvasElement: currentRender.engine.getCanvasElement()
    });
    return {
      dispose: () => {
        this._globalPopupManagerService.removePopup(id);
        position$.complete();
        disposable.dispose();
      }
    };
  }
};
SlideCanvasPopMangerService = __decorateClass([
  __decorateParam(0, Inject(ICanvasPopupService)),
  __decorateParam(1, IRenderManagerService),
  __decorateParam(2, IUniverInstanceService),
  __decorateParam(3, ICommandService)
], SlideCanvasPopMangerService);

// ../packages/slides-ui/src/controllers/popup-menu.controller.ts
var SlidePopupMenuController = class extends RxDisposable {
  constructor(_canvasPopManagerService, _renderManagerService, _univerInstanceService, _contextService, _canvasView, _sidebarService, _commandService) {
    super();
    this._canvasPopManagerService = _canvasPopManagerService;
    this._renderManagerService = _renderManagerService;
    this._univerInstanceService = _univerInstanceService;
    this._contextService = _contextService;
    this._canvasView = _canvasView;
    this._sidebarService = _sidebarService;
    this._commandService = _commandService;
    __publicField(this, "_initImagePopupMenu", /* @__PURE__ */ new Set());
    this._init();
  }
  _init() {
    this._univerInstanceService.getAllUnitsForType(O.UNIVER_SLIDE).forEach((slide) => this._create(slide));
  }
  _create(slide) {
    if (!slide) {
      return;
    }
    const unitId = slide.getUnitId();
    if (this._renderManagerService.has(unitId) && !this._initImagePopupMenu.has(unitId)) {
      this._popupMenuListener(unitId);
      this._initImagePopupMenu.add(unitId);
    }
  }
  _hasCropObject(scene) {
  }
  // eslint-disable-next-line max-lines-per-function
  _popupMenuListener(unitId) {
    var _a;
    const model = this._univerInstanceService.getCurrentUnitForType(O.UNIVER_SLIDE);
    const pages = (_a = model == null ? void 0 : model.getPages()) != null ? _a : {};
    Object.keys(pages).forEach((pageId) => {
      var _a2;
      const page = this._canvasView.getRenderUnitByPageId(pageId, unitId);
      const transformer = (_a2 = page.scene) == null ? void 0 : _a2.getTransformer();
      if (!transformer) return;
      let singletonPopupDisposer;
      this.disposeWithMe(
        toDisposable(
          transformer.createControl$.subscribe(() => {
            const selectedObjects = transformer.getSelectedObjectMap();
            if (selectedObjects.size > 1) {
              singletonPopupDisposer == null ? void 0 : singletonPopupDisposer.dispose();
              return;
            }
            const object = selectedObjects.values().next().value;
            if (!object) {
              return;
            }
            const oKey = object.oKey;
            singletonPopupDisposer == null ? void 0 : singletonPopupDisposer.dispose();
            singletonPopupDisposer = this.disposeWithMe(this._canvasPopManagerService.attachPopupToObject(object, {
              componentKey: COMPONENT_SLIDE_IMAGE_POPUP_MENU,
              direction: "horizontal",
              offset: [2, 0],
              extraProps: {
                menuItems: this._getMenuItemsByObjectType(object.objectType, oKey, unitId)
              }
            }));
            if (this._sidebarService.visible) {
              this._commandService.executeCommand(ToggleSlideEditSidebarOperation.id, {
                visible: true,
                objectType: object.objectType
              });
            }
          })
        )
      );
      this.disposeWithMe(
        transformer.clearControl$.subscribe(() => {
          singletonPopupDisposer == null ? void 0 : singletonPopupDisposer.dispose();
          this._contextService.setContextValue(FOCUSING_COMMON_DRAWINGS, false);
        })
      );
      this.disposeWithMe(
        transformer.changing$.subscribe(() => {
          singletonPopupDisposer == null ? void 0 : singletonPopupDisposer.dispose();
          const selectedObjects = transformer.getSelectedObjectMap();
          if (selectedObjects.size > 1) {
            singletonPopupDisposer == null ? void 0 : singletonPopupDisposer.dispose();
            return;
          }
          const object = selectedObjects.values().next().value;
          if (!object) {
            return;
          }
          this._commandService.executeCommand(UpdateSlideElementOperation.id, {
            unitId,
            oKey: object.oKey,
            props: {
              width: object.width,
              height: object.height,
              left: object.left,
              top: object.top
            }
          });
        })
      );
    });
  }
  _getMenuItemsByObjectType(objectType, oKey, unitId) {
    const menuItems = [{
      label: "slide.popup.edit",
      index: 0,
      commandId: ToggleSlideEditSidebarOperation.id,
      commandParams: {
        visible: true,
        objectType
      },
      disable: false
    }, {
      label: "slide.popup.delete",
      index: 5,
      commandId: DeleteSlideElementOperation.id,
      commandParams: {
        id: oKey,
        unitId
      },
      disable: false
    }];
    return menuItems;
  }
};
SlidePopupMenuController = __decorateClass([
  __decorateParam(0, Inject(SlideCanvasPopMangerService)),
  __decorateParam(1, IRenderManagerService),
  __decorateParam(2, IUniverInstanceService),
  __decorateParam(3, IContextService),
  __decorateParam(4, Inject(CanvasView)),
  __decorateParam(5, ISidebarService),
  __decorateParam(6, ICommandService)
], SlidePopupMenuController);

// ../packages/slides-ui/src/services/slide-editor-bridge.service.ts
var ISlideEditorBridgeService = createIdentifier("univer.slide-editor-bridge.service");
var SlideEditorBridgeService = class extends Disposable {
  constructor(_editorService, _contextService, _renderManagerService) {
    super();
    this._editorService = _editorService;
    this._contextService = _contextService;
    this._renderManagerService = _renderManagerService;
    __publicField(this, "_editorUnitId", SLIDE_EDITOR_ID);
    __publicField(this, "_isForceKeepVisible", false);
    __publicField(this, "_editorIsDirty", false);
    __publicField(this, "_currentEditRectState", null);
    __publicField(this, "_currentEditRectState$", new BehaviorSubject(null));
    __publicField(this, "currentEditRectState$", this._currentEditRectState$.asObservable());
    __publicField(this, "_visibleParam", {
      visible: false,
      eventType: 3 /* Dblclick */,
      unitId: ""
    });
    __publicField(this, "_visible$", new BehaviorSubject(this._visibleParam));
    __publicField(this, "visible$", this._visible$.asObservable());
    __publicField(this, "_afterVisible$", new BehaviorSubject(this._visibleParam));
    __publicField(this, "afterVisible$", this._afterVisible$.asObservable());
    __publicField(this, "endEditing$", new Subject());
    __publicField(this, "_currentEditRectInfo");
  }
  dispose() {
    super.dispose();
  }
  getEditorRect() {
    return this._currentEditRectInfo;
  }
  /**
   * 1st part of startEditing.
   * @editorInfo editorInfo
   */
  setEditorRect(editorInfo) {
    this._currentEditRectInfo = editorInfo;
    if (!this._editorService.getFocusEditor()) {
      this._editorService.focus(SLIDE_EDITOR_ID);
      this._contextService.setContextValue(EDITOR_ACTIVATED, false);
      this._contextService.setContextValue(FOCUSING_EDITOR_STANDALONE, false);
      this._contextService.setContextValue(FOCUSING_UNIVER_EDITOR_STANDALONE_SINGLE_MODE, false);
    }
    const editRectState = this.getEditRectState();
    this._currentEditRectState = editRectState;
    this._currentEditRectState$.next(editRectState);
  }
  changeVisible(param) {
    this._visibleParam = param;
    if (param.visible) {
      this._editorIsDirty = false;
    }
    this._visible$.next(this._visibleParam);
    this._afterVisible$.next(this._visibleParam);
  }
  /**
   * get info from _currentEditRectInfo
   *
   * invoked by slide-editing.render-controller.ts@_handleEditorVisible
   * && this@setEditorRect
   */
  getEditRectState() {
    const editorUnitId = SLIDE_EDITOR_ID;
    const editorRectInfo = this._currentEditRectInfo;
    const unitId = editorRectInfo.unitId;
    const docData = editorRectInfo.richTextObj.documentData;
    docData.id = editorUnitId;
    docData.documentStyle = {
      ...docData.documentStyle,
      ...{
        pageSize: { width: editorRectInfo.richTextObj.width, height: Infinity }
      }
    };
    const docDataModel = new DocumentDataModel(docData);
    const documentLayoutObject = {
      documentModel: docDataModel,
      fontString: "document",
      textRotation: { a: 0, v: 0 },
      wrapStrategy: 0,
      verticalAlign: 1 /* TOP */,
      horizontalAlign: 1 /* LEFT */,
      paddingData: { t: 0, b: 1, l: 2, r: 2 }
    };
    const editorWidth = editorRectInfo.richTextObj.width;
    const editorHeight = editorRectInfo.richTextObj.height;
    const left = editorRectInfo.richTextObj.left;
    const top = editorRectInfo.richTextObj.top;
    const canvasOffset = {
      left: 0,
      top: 0
    };
    const renderUnit = this._renderManagerService.getRenderById(unitId);
    const mainScene = renderUnit == null ? void 0 : renderUnit.scene;
    const mainViewport = mainScene == null ? void 0 : mainScene.getViewport("__mainView__" /* VIEW */);
    const slideMainRect = mainScene == null ? void 0 : mainScene.getObject("__slideRender__" /* COMPONENT */);
    const slidePos = {
      x: (slideMainRect == null ? void 0 : slideMainRect.left) || 0,
      y: (slideMainRect == null ? void 0 : slideMainRect.top) || 0
    };
    const scrollX = (mainViewport == null ? void 0 : mainViewport.viewportScrollX) || 0;
    const scrollY = (mainViewport == null ? void 0 : mainViewport.viewportScrollY) || 0;
    canvasOffset.left = slidePos.x - scrollX;
    canvasOffset.top = slidePos.y - scrollY;
    return {
      position: {
        startX: left,
        startY: top,
        endX: left + editorWidth,
        endY: top + editorHeight
      },
      scaleX: 1,
      scaleY: 1,
      slideCardOffset: canvasOffset,
      unitId,
      editorUnitId,
      documentLayoutObject
    };
  }
  changeEditorDirty(dirtyStatus) {
    this._editorIsDirty = dirtyStatus;
  }
  isVisible() {
    return this._visibleParam.visible;
  }
  getEditorDirty() {
    return this._editorIsDirty;
  }
  getCurrentEditorId() {
    return this._editorUnitId;
  }
  /**
   * @deprecated
   */
  genDocData(target) {
    const editorUnitId = this.getCurrentEditorId();
    const content = target.text;
    const fontSize = target.fs;
    const docData = {
      id: editorUnitId,
      body: {
        dataStream: `${content}\r
`,
        textRuns: [{ st: 0, ed: content.length }],
        paragraphs: [{
          paragraphStyle: {
            // no use
            // textStyle: { fs: 30 },
            // horizontalAlign: HorizontalAlign.CENTER,
            // verticalAlign: VerticalAlign.MIDDLE,
          },
          startIndex: content.length + 1
        }],
        sectionBreaks: [{ startIndex: content.length + 2 }]
      },
      documentStyle: {
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        pageSize: { width: Infinity, height: Infinity },
        textStyle: { fs: fontSize },
        renderConfig: {
          // horizontalAlign: HorizontalAlign.CENTER,
          verticalAlign: 2 /* MIDDLE */,
          centerAngle: 0,
          vertexAngle: 0,
          wrapStrategy: 0
        }
      },
      drawings: {},
      drawingsOrder: [],
      settings: { zoomRatio: 1 }
    };
    return docData;
  }
};
SlideEditorBridgeService = __decorateClass([
  __decorateParam(0, IEditorService),
  __decorateParam(1, IContextService),
  __decorateParam(2, IRenderManagerService)
], SlideEditorBridgeService);

// ../packages/slides-ui/src/controllers/slide-editing.render-controller.ts
var HIDDEN_EDITOR_POSITION2 = -1e3;
var EDITOR_INPUT_SELF_EXTEND_GAP = 5;
var EDITOR_BORDER_SIZE = 2;
var SlideEditingRenderController = class extends Disposable {
  constructor(_renderContext, _layoutService, _undoRedoService, _contextService, _instanceSrv, _renderManagerService, _editorBridgeService, _cellEditorManagerService, _textSelectionManagerService, _commandService, _localService, _editorService) {
    super();
    this._renderContext = _renderContext;
    this._layoutService = _layoutService;
    this._undoRedoService = _undoRedoService;
    this._contextService = _contextService;
    this._instanceSrv = _instanceSrv;
    this._renderManagerService = _renderManagerService;
    this._editorBridgeService = _editorBridgeService;
    this._cellEditorManagerService = _cellEditorManagerService;
    this._textSelectionManagerService = _textSelectionManagerService;
    this._commandService = _commandService;
    this._localService = _localService;
    this._editorService = _editorService;
    /**
     * It is used to distinguish whether the user has actively moved the cursor in the editor, mainly through mouse clicks.
     */
    __publicField(this, "_cursorChange", 0 /* InitialState */);
    /** If the corresponding unit is active and prepared for editing. */
    __publicField(this, "_isUnitEditing", false);
    __publicField(this, "_d");
    this.disposeWithMe(this._instanceSrv.getCurrentTypeOfUnit$(O.UNIVER_SLIDE).subscribe((slideDataModel) => {
      if (slideDataModel && slideDataModel.getUnitId() === this._renderContext.unitId) {
        this._d = this._init();
      } else {
        this._disposeCurrent();
        if (this._isUnitEditing) {
          this._handleEditorInvisible({
            visible: false,
            eventType: 4 /* Keyboard */,
            keycode: 27 /* ESC */,
            unitId: this._renderContext.unitId
          });
          this._isUnitEditing = false;
        }
      }
    }));
    this._initEditorVisibilityListener();
  }
  dispose() {
    super.dispose();
    this._disposeCurrent();
  }
  _disposeCurrent() {
    var _a;
    (_a = this._d) == null ? void 0 : _a.dispose();
    this._d = null;
  }
  _init() {
    const d = new DisposableCollection();
    this._subscribeToCurrentCell(d);
    this._initialKeyboardListener(d);
    this._initialCursorSync(d);
    this._listenEditorFocus(d);
    this._commandExecutedListener(d);
    setTimeout(() => {
      this._cursorStateListener(d);
    }, 1e3);
    return d;
  }
  _initEditorVisibilityListener() {
    this.disposeWithMe(this._editorBridgeService.visible$.subscribe((param) => {
      if (param.visible) {
        this._isUnitEditing = true;
        this._handleEditorVisible(param);
      } else if (this._isUnitEditing) {
        this._handleEditorInvisible(param);
        this._isUnitEditing = false;
      }
    }));
  }
  _listenEditorFocus(d) {
    const renderConfig = this._getEditorObject();
    if (!renderConfig) return;
    d.add(renderConfig.document.onPointerDown$.subscribeEvent(() => {
    }));
  }
  _getEditorSkeleton(editorId) {
    var _a;
    return (_a = this._renderManagerService.getRenderById(editorId)) == null ? void 0 : _a.with(DocSkeletonManagerService).getSkeleton();
  }
  _getEditorViewModel(editorId) {
    var _a;
    return (_a = this._renderManagerService.getRenderById(editorId)) == null ? void 0 : _a.with(DocSkeletonManagerService).getViewModel();
  }
  _initialCursorSync(d) {
    d.add(this._cellEditorManagerService.focus$.pipe(filter((f) => !!f)).subscribe(() => {
      var _a;
      (_a = getCurrentTypeOfRenderer(O.UNIVER_DOC, this._instanceSrv, this._renderManagerService)) == null ? void 0 : _a.with(DocSelectionRenderService).sync();
    }));
  }
  /**
   * Set editorUnitId to curr doc.
   * @param d DisposableCollection
   */
  _subscribeToCurrentCell(d) {
    d.add(this._editorBridgeService.currentEditRectState$.subscribe((editCellState) => {
      var _a;
      if (editCellState == null) {
        return;
      }
      if (this._contextService.getContextValue(FOCUSING_EDITOR_STANDALONE) || this._contextService.getContextValue(FOCUSING_UNIVER_EDITOR_STANDALONE_SINGLE_MODE)) {
        return;
      }
      const {
        position: { startX, endX },
        documentLayoutObject: { textRotation, wrapStrategy, documentModel },
        scaleX,
        editorUnitId
      } = editCellState;
      const { vertexAngle: angle } = convertTextRotation(textRotation);
      documentModel.updateDocumentId(editorUnitId);
      if (wrapStrategy === 3 /* WRAP */ && angle === 0) {
        documentModel.updateDocumentDataPageSize((endX - startX) / scaleX);
      }
      this._instanceSrv.changeDoc(editorUnitId, documentModel);
      this._contextService.setContextValue(FOCUSING_EDITOR_BUT_HIDDEN, true);
      this._textSelectionManagerService.replaceTextRanges([{
        startOffset: 0,
        endOffset: 0
      }]);
      (_a = getCurrentTypeOfRenderer(O.UNIVER_DOC, this._instanceSrv, this._renderManagerService)) == null ? void 0 : _a.with(DocSelectionRenderService).activate(HIDDEN_EDITOR_POSITION2, HIDDEN_EDITOR_POSITION2);
    }));
  }
  /**
   * Set size and pos of editing area.
   * @param positionFromEditRectState
   * @param canvasOffset
   * @param documentSkeleton
   * @param documentLayoutObject
   * @param scaleX
   * @param scaleY
   */
  _fitTextSize(positionFromEditRectState, canvasOffset, documentSkeleton, documentLayoutObject, scaleX = 1, scaleY = 1) {
    const { startX, startY, endX, endY } = positionFromEditRectState;
    const documentDataModel = documentLayoutObject.documentModel;
    if (documentDataModel == null) {
      return;
    }
    const { actualWidth, actualHeight } = this._predictingSize(
      positionFromEditRectState,
      canvasOffset,
      documentSkeleton,
      documentLayoutObject,
      scaleX,
      scaleY
    );
    const { verticalAlign, paddingData, fill } = documentLayoutObject;
    let editorWidth = endX - startX;
    let editorHeight = endY - startY;
    if (editorWidth < actualWidth) {
      editorWidth = actualWidth;
    }
    if (editorHeight < actualHeight) {
      editorHeight = actualHeight;
      documentDataModel.updateDocumentDataMargin(paddingData);
    } else {
      let offsetTop = 0;
      if (verticalAlign === 2 /* MIDDLE */) {
        offsetTop = (editorHeight - actualHeight) / 2 / scaleY;
      } else if (verticalAlign === 1 /* TOP */) {
        offsetTop = paddingData.t || 0;
      } else {
        offsetTop = (editorHeight - actualHeight) / scaleY - (paddingData.b || 0);
      }
      offsetTop = offsetTop < (paddingData.t || 0) ? paddingData.t || 0 : offsetTop;
      documentDataModel.updateDocumentDataMargin({
        t: offsetTop
      });
    }
    documentSkeleton.calculate();
    this._editAreaProcessing(editorWidth, editorHeight, positionFromEditRectState, canvasOffset, fill, scaleX, scaleY);
  }
  /**
   * Mainly used to pre-calculate the width of the editor,
   * to determine whether it needs to be automatically widened.
   */
  _predictingSize(actualRangeWithCoord, canvasOffset, documentSkeleton, documentLayoutObject, scaleX = 1, scaleY = 1) {
    const { startX, endX } = actualRangeWithCoord;
    const { textRotation, wrapStrategy } = documentLayoutObject;
    const documentDataModel = documentLayoutObject.documentModel;
    const { vertexAngle: angle } = convertTextRotation(textRotation);
    const clientWidth = document.body.clientWidth;
    if (wrapStrategy === 3 /* WRAP */ && angle === 0) {
      const { actualWidth, actualHeight } = documentSkeleton.getActualSize();
      return {
        actualWidth: actualWidth * scaleX,
        actualHeight: actualHeight * scaleY
      };
    }
    documentDataModel == null ? void 0 : documentDataModel.updateDocumentDataPageSize((clientWidth - startX - canvasOffset.left) / scaleX);
    documentSkeleton.calculate();
    const size = documentSkeleton.getActualSize();
    let editorWidth = endX - startX;
    if (editorWidth < size.actualWidth * scaleX + EDITOR_INPUT_SELF_EXTEND_GAP * scaleX) {
      editorWidth = size.actualWidth * scaleX + EDITOR_INPUT_SELF_EXTEND_GAP * scaleX;
    }
    documentDataModel == null ? void 0 : documentDataModel.updateDocumentDataPageSize(editorWidth / scaleX);
    documentDataModel == null ? void 0 : documentDataModel.updateDocumentRenderConfig({
      horizontalAlign: 0 /* UNSPECIFIED */,
      cellValueType: void 0
    });
    return {
      actualWidth: editorWidth,
      actualHeight: size.actualHeight * scaleY
    };
  }
  /**
   * control the size of editing area
   */
  // eslint-disable-next-line max-lines-per-function
  _editAreaProcessing(editorWidth, editorHeight, positionFromEditRectState, canvasOffset, fill, scaleX = 1, scaleY = 1) {
    var _a;
    const editorObject = this._getEditorObject();
    if (editorObject == null) {
      return;
    }
    function pxToNum2(width2) {
      return Number.parseInt(width2.replace("px", ""));
    }
    const engine = this._renderContext.engine;
    const canvasElement = engine.getCanvasElement();
    const canvasClientRect = canvasElement.getBoundingClientRect();
    const widthOfCanvas = pxToNum2(canvasElement.style.width);
    const { top, left, width } = canvasClientRect;
    const scaleAdjust = width / widthOfCanvas;
    let { startX, startY } = positionFromEditRectState;
    startX += canvasOffset.left;
    startY += canvasOffset.top;
    const { document: documentComponent, scene: editorScene, engine: docEngine } = editorObject;
    const viewportMain = editorScene.getViewport("viewMain" /* VIEW_MAIN */);
    const clientHeight = document.body.clientHeight - startY - canvasOffset.top - EDITOR_BORDER_SIZE * 2;
    const clientWidth = document.body.clientWidth - startX - canvasOffset.left;
    let physicHeight = editorHeight;
    let scrollBar = viewportMain == null ? void 0 : viewportMain.getScrollBar();
    if (physicHeight > clientHeight) {
      physicHeight = clientHeight;
      if (scrollBar == null) {
        if (viewportMain) {
          const sb = new ScrollBar(viewportMain, { enableHorizontal: false, barSize: 8 });
        }
      } else {
        viewportMain == null ? void 0 : viewportMain.resetCanvasSizeAndUpdateScroll();
      }
    } else {
      scrollBar = null;
      (_a = viewportMain == null ? void 0 : viewportMain.getScrollBar()) == null ? void 0 : _a.dispose();
    }
    editorWidth += (scrollBar == null ? void 0 : scrollBar.barSize) || 0;
    editorWidth = Math.min(editorWidth, clientWidth);
    startX -= FIX_ONE_PIXEL_BLUR_OFFSET;
    startY -= FIX_ONE_PIXEL_BLUR_OFFSET;
    this._addBackground(editorScene, editorWidth / scaleX, editorHeight / scaleY, fill);
    const { scaleX: precisionScaleX, scaleY: precisionScaleY } = editorScene.getPrecisionScale();
    editorScene.transformByState({
      width: editorWidth * scaleAdjust / scaleX,
      height: editorHeight * scaleAdjust / scaleY,
      scaleX: scaleX * scaleAdjust,
      scaleY: scaleY * scaleAdjust
    });
    documentComponent.resize(editorWidth / scaleX, editorHeight / scaleY);
    setTimeout(() => {
      docEngine.resizeBySize(
        fixLineWidthByScale(editorWidth, precisionScaleX),
        fixLineWidthByScale(physicHeight, precisionScaleY)
      );
    }, 0);
    const contentBoundingRect = this._layoutService.getContentElement().getBoundingClientRect();
    const canvasBoundingRect = canvasElement.getBoundingClientRect();
    startX = startX * scaleAdjust + (canvasBoundingRect.left - contentBoundingRect.left);
    startY = startY * scaleAdjust + (canvasBoundingRect.top - contentBoundingRect.top);
    this._cellEditorManagerService.setState({
      startX,
      startY,
      endX: editorWidth * scaleAdjust + startX,
      endY: physicHeight * scaleAdjust + startY,
      show: true
    });
  }
  /**
   * Since the document does not support cell background color, an additional rect needs to be added.
   */
  _addBackground(scene, editorWidth, editorHeight, fill) {
    const fillRectKey = "_backgroundRectHelperColor_";
    const rect = scene.getObject(fillRectKey);
    if (rect == null && fill == null) {
      return;
    }
    if (rect == null) {
      scene.addObjects(
        [
          new Rect(fillRectKey, {
            width: editorWidth,
            height: editorHeight,
            fill,
            evented: false
          })
        ],
        DOCS_COMPONENT_MAIN_LAYER_INDEX
      );
    } else if (fill == null) {
      rect.dispose();
    } else {
      rect.setProps({
        fill
      });
      rect.transformByState({
        width: editorWidth,
        height: editorHeight
      });
    }
  }
  /**
   * Show input area, resize input area and then place input to right place.
   * @TODO why do resize in show input area?
   * @param param
   */
  // handleVisible is the 2nd part of editing.
  // first part: startEditing --> _updateEditor
  // 2nd part: startEditing --> changeVisible --> slide-editor-bridge.render-controller.ts@changeVisible --> _editorBridgeService.changeVisible
  _handleEditorVisible(param) {
    var _a, _b;
    const { eventType } = param;
    this._cursorChange = [1 /* PointerDown */, 3 /* Dblclick */].includes(eventType) ? 2 /* CursorChange */ : 1 /* StartEditor */;
    const editCellState = this._editorBridgeService.getEditRectState();
    if (editCellState == null) {
      return;
    }
    const {
      position,
      documentLayoutObject,
      slideCardOffset: canvasOffset,
      scaleX,
      scaleY,
      editorUnitId,
      unitId
    } = editCellState;
    const editorObject = this._getEditorObject();
    if (editorObject == null) {
      return;
    }
    const { scene } = editorObject;
    this._contextService.setContextValue(EDITOR_ACTIVATED, true);
    const { documentModel: documentDataModel } = documentLayoutObject;
    const skeleton = this._getEditorSkeleton(editorUnitId);
    if (!skeleton || !documentDataModel) {
      return;
    }
    this._fitTextSize(position, canvasOffset, skeleton, documentLayoutObject, scaleX, scaleY);
    const cursor = documentDataModel.getBody().dataStream.length - 2 || 0;
    (_a = scene.getViewport("viewMain" /* VIEW_MAIN */)) == null ? void 0 : _a.scrollToViewportPos({
      viewportScrollX: Number.POSITIVE_INFINITY
    });
    this._textSelectionManagerService.replaceTextRanges([
      {
        startOffset: cursor,
        endOffset: cursor
      }
    ]);
    (_b = this._renderManagerService.getRenderById(unitId)) == null ? void 0 : _b.scene.resetCursor();
  }
  _resetBodyStyle(body, removeStyle = false) {
    body.dataStream = DEFAULT_EMPTY_DOCUMENT_VALUE;
    if (body.textRuns != null) {
      if (body.textRuns.length === 1 && !removeStyle) {
        body.textRuns[0].st = 0;
        body.textRuns[0].ed = 1;
      } else {
        body.textRuns = void 0;
      }
    }
    if (body.paragraphs != null) {
      if (body.paragraphs.length === 1) {
        body.paragraphs[0].startIndex = 0;
      } else {
        body.paragraphs = [
          {
            startIndex: 0
          }
        ];
      }
    }
    if (body.sectionBreaks != null) {
      body.sectionBreaks = void 0;
    }
    if (body.tables != null) {
      body.tables = void 0;
    }
    if (body.customRanges != null) {
      body.customRanges = void 0;
    }
    if (body.customBlocks != null) {
      body.customBlocks = void 0;
    }
  }
  /**
   * Should activate the editor when the user inputs text.
   * @param d DisposableCollection
   */
  _initialKeyboardListener(d) {
  }
  _showEditorByKeyboard(config) {
    if (config == null) {
    }
  }
  _commandExecutedListener(d) {
    const moveCursorOP = [SetTextEditArrowOperation.id];
    const editedMutations = [RichTextEditingMutation.id];
    d.add(this._commandService.onCommandExecuted((command) => {
      if (this._editorService.getFocusId() !== SLIDE_EDITOR_ID) {
        return;
      }
      if (moveCursorOP.includes(command.id)) {
        this._moveCursorCmdHandler(command);
      }
      if (editedMutations.includes(command.id)) {
        if (this._editorBridgeService.isVisible()) {
          this._editingChangedHandler();
        }
      }
    }));
  }
  _moveCursorCmdHandler(command) {
    const params = command.params;
    const { keycode, isShift } = params;
    if (keycode != null && this._cursorChange === 2 /* CursorChange */) {
      this._moveInEditor(keycode, isShift);
    } else {
      this._editorBridgeService.changeVisible(params);
    }
  }
  _editingChangedHandler() {
    const editRect = this._editorBridgeService.getEditorRect();
    if (!editRect) {
      return;
    }
    const editingRichText = editRect.richTextObj;
    editingRichText.refreshDocumentByDocData();
    editingRichText.resizeToContentSize();
    const { unitId } = this._renderContext;
    this._handleEditorVisible({ visible: true, eventType: 3, unitId });
  }
  _getEditorObject() {
    return getEditorObject(this._editorBridgeService.getCurrentEditorId(), this._renderManagerService);
  }
  async _handleEditorInvisible(param) {
    const { keycode } = param;
    this._cursorChange = 0 /* InitialState */;
    this._exitInput(param);
    const editCellState = this._editorBridgeService.getEditRectState();
    if (editCellState == null) {
      return;
    }
    const editorIsDirty = this._editorBridgeService.getEditorDirty();
    if (editorIsDirty === false) {
      this._moveCursor(keycode);
      return;
    }
    this._moveCursor(keycode);
  }
  _exitInput(param) {
    this._contextService.setContextValue(EDITOR_ACTIVATED, false);
    this._cellEditorManagerService.setState({
      show: param.visible
    });
    const editorUnitId = this._editorBridgeService.getCurrentEditorId();
    if (editorUnitId == null) {
      return;
    }
    this._undoRedoService.clearUndoRedo(editorUnitId);
  }
  _moveCursor(keycode) {
    if (keycode == null) {
      return;
    }
    let direction = 3 /* LEFT */;
    switch (keycode) {
      case 13 /* ENTER */:
        direction = 2 /* DOWN */;
        break;
      case 9 /* TAB */:
        direction = 1 /* RIGHT */;
        break;
      case 40 /* ARROW_DOWN */:
        direction = 2 /* DOWN */;
        break;
      case 38 /* ARROW_UP */:
        direction = 0 /* UP */;
        break;
      case 37 /* ARROW_LEFT */:
        direction = 3 /* LEFT */;
        break;
      case 39 /* ARROW_RIGHT */:
        direction = 1 /* RIGHT */;
        break;
    }
  }
  /**
   * The user's operations follow the sequence of opening the editor and then moving the cursor.
   * The logic here predicts the user's first cursor movement behavior based on this rule
   */
  _cursorStateListener(d) {
    const editorObject = this._getEditorObject();
    if (!editorObject) {
      return;
    }
    const { document: documentComponent } = editorObject;
    d.add(toDisposable(documentComponent.onPointerDown$.subscribeEvent(() => {
      if (this._cursorChange === 1 /* StartEditor */) {
        this._cursorChange = 2 /* CursorChange */;
      }
    })));
  }
  // TODO: @JOCS, is it necessary to move these commands MoveSelectionOperation\MoveCursorOperation to shortcut? and use multi-commands?
  _moveInEditor(keycode, isShift) {
    let direction = 3 /* LEFT */;
    if (keycode === 40 /* ARROW_DOWN */) {
      direction = 2 /* DOWN */;
    } else if (keycode === 38 /* ARROW_UP */) {
      direction = 0 /* UP */;
    } else if (keycode === 39 /* ARROW_RIGHT */) {
      direction = 1 /* RIGHT */;
    }
    if (isShift) {
      this._commandService.executeCommand(MoveSelectionOperation.id, {
        direction
      });
    } else {
      this._commandService.executeCommand(MoveCursorOperation.id, {
        direction
      });
    }
  }
};
SlideEditingRenderController = __decorateClass([
  __decorateParam(1, ILayoutService),
  __decorateParam(2, IUndoRedoService),
  __decorateParam(3, IContextService),
  __decorateParam(4, IUniverInstanceService),
  __decorateParam(5, IRenderManagerService),
  __decorateParam(6, ISlideEditorBridgeService),
  __decorateParam(7, ISlideEditorManagerService),
  __decorateParam(8, Inject(DocSelectionManagerService)),
  __decorateParam(9, ICommandService),
  __decorateParam(10, Inject(LocaleService)),
  __decorateParam(11, IEditorService)
], SlideEditingRenderController);
function getEditorObject(unitId, renderManagerService) {
  if (unitId == null) {
    return;
  }
  const currentRender = renderManagerService.getRenderById(unitId);
  if (currentRender == null) {
    return;
  }
  const { mainComponent, scene, engine, components } = currentRender;
  const document2 = mainComponent;
  const docBackground = components.get("__Document_Render_Background__" /* BACKGROUND */);
  return {
    document: document2,
    docBackground,
    scene,
    engine
  };
}

// ../packages/slides-ui/src/controllers/slide-editor-bridge.render-controller.ts
var SlideEditorBridgeRenderController = class extends RxDisposable {
  constructor(_renderContext, _instanceSrv, _commandService, _editorBridgeService) {
    super();
    this._renderContext = _renderContext;
    this._instanceSrv = _instanceSrv;
    this._commandService = _commandService;
    this._editorBridgeService = _editorBridgeService;
    /**
     * It is used to distinguish whether the user has actively moved the cursor in the editor, mainly through mouse clicks.
     */
    // private _cursorChange: CursorChange = CursorChange.InitialState;
    /** If the corresponding unit is active and prepared for editing. */
    // private _isUnitEditing = false;
    __publicField(this, "setSlideTextEditor$", new Subject());
    __publicField(this, "_curRichText", null);
    __publicField(this, "_d");
    this.disposeWithMe(this._instanceSrv.getCurrentTypeOfUnit$(O.UNIVER_SLIDE).subscribe((slideDataModel) => {
      if (slideDataModel && slideDataModel.getUnitId() === this._renderContext.unitId) {
        this._d = this._init();
      } else {
        this._disposeCurrent();
      }
    }));
  }
  _init() {
    const d = new DisposableCollection();
    this._initEventListener(d);
    return d;
  }
  _disposeCurrent() {
    var _a;
    (_a = this._d) == null ? void 0 : _a.dispose();
    this._d = null;
  }
  _setEditorRect(pageId, targetObject) {
    this._curRichText = targetObject;
    const { scene, engine } = this._renderContext;
    const unitId = this._renderContext.unitId;
    const setEditorRect = {
      scene,
      engine,
      unitId,
      pageId,
      richTextObj: targetObject
    };
    this._editorBridgeService.setEditorRect(setEditorRect);
  }
  _initEventListener(d) {
    const listenersForPageScene = (scene) => {
      const transformer = scene.getTransformer();
      if (!transformer) return;
      d.add(transformer.clearControl$.subscribe(() => {
        this.setEditorVisible(false);
        this.pickOtherObjects();
      }));
      d.add(transformer.createControl$.subscribe(() => {
        this.setEditorVisible(false);
      }));
      d.add(scene.onDblclick$.subscribeEvent(() => {
        transformer.clearControls();
        const selectedObjects = transformer.getSelectedObjectMap();
        const object = selectedObjects.values().next().value;
        if (!object) return;
        if (object.objectType !== 1 /* RICH_TEXT */) {
          this.pickOtherObjects();
        } else {
          this.startEditing(scene.sceneKey, object);
        }
      }));
      d.add(this._instanceSrv.focused$.subscribe((fc) => {
        this.endEditing();
      }));
    };
    const { mainComponent } = this._renderContext;
    const slide = mainComponent;
    slide.subSceneChanged$.subscribeEvent((pageScene) => {
      listenersForPageScene(pageScene);
    });
    const pageSceneList = Array.from(mainComponent.getSubScenes().values());
    for (let i = 0; i < pageSceneList.length; i++) {
      const pageScene = pageSceneList[i];
      listenersForPageScene(pageScene);
    }
  }
  pickOtherObjects() {
    this.endEditing();
  }
  /**
   * invoked when picking other object.
   *
   * save editing state to curr richText.
   */
  endEditing() {
    var _a;
    if (!this._curRichText) return;
    this.setEditorVisible(false);
    const curRichText = this._curRichText;
    const slideData = this._instanceSrv.getCurrentUnitForType(O.UNIVER_SLIDE);
    if (!slideData) return false;
    curRichText.refreshDocumentByDocData();
    curRichText.resizeToContentSize();
    this._editorBridgeService.endEditing$.next(curRichText);
    const richText = {
      bl: 1,
      fs: curRichText.fs,
      text: curRichText.text
    };
    const textRuns = (_a = curRichText.documentData.body) == null ? void 0 : _a.textRuns;
    if (textRuns && textRuns.length) {
      const textRun = textRuns[0];
      const ts = textRun.ts;
      richText.cl = ts == null ? void 0 : ts.cl;
    }
    this._commandService.executeCommand(UpdateSlideElementOperation.id, {
      unitId: this._renderContext.unitId,
      oKey: curRichText == null ? void 0 : curRichText.oKey,
      props: {
        richText
      }
    });
    this._curRichText = null;
  }
  /**
   * TODO calling twice ？？？？
   * editingParam derives from RichText object.
   *
   * TODO @lumixraku need scale param
   * @param target
   */
  startEditing(pageId, target) {
    this._setEditorRect(pageId, target);
    this.setEditorVisible(true);
  }
  setEditorVisible(visible) {
    var _a, _b;
    if (visible) {
      (_a = this._curRichText) == null ? void 0 : _a.hide();
    } else {
      (_b = this._curRichText) == null ? void 0 : _b.show();
    }
    const { unitId } = this._renderContext;
    this._editorBridgeService.changeVisible({ visible, eventType: 1 /* PointerDown */, unitId });
  }
};
SlideEditorBridgeRenderController = __decorateClass([
  __decorateParam(1, IUniverInstanceService),
  __decorateParam(2, ICommandService),
  __decorateParam(3, ISlideEditorBridgeService)
], SlideEditorBridgeRenderController);

// ../packages/slides-ui/src/services/slide-render.service.ts
var SlideRenderService = class extends RxDisposable {
  // private _skeletonChangeMutations = new Set<string>();
  constructor(_contextService, _instanceSrv, _renderManagerService) {
    super();
    this._contextService = _contextService;
    this._instanceSrv = _instanceSrv;
    this._renderManagerService = _renderManagerService;
    Promise.resolve().then(() => this._init());
  }
  _init() {
    this._initSlideDataListener();
    this._initContextListener();
  }
  _initSlideDataListener() {
    this._instanceSrv.getTypeOfUnitAdded$(O.UNIVER_SLIDE).pipe(takeUntil(this.dispose$)).subscribe((slideModel) => {
      this._createRenderer(slideModel == null ? void 0 : slideModel.getUnitId());
    });
    this._instanceSrv.getAllUnitsForType(O.UNIVER_SLIDE).forEach((slideModel) => {
      this._createRenderer(slideModel.getUnitId());
    });
    this._instanceSrv.getTypeOfUnitDisposed$(O.UNIVER_SLIDE).pipe(takeUntil(this.dispose$)).subscribe((workbook) => this._disposeRenderer(workbook));
  }
  _createRenderer(unitId) {
    if (unitId == null) {
      return;
    }
    const model = this._instanceSrv.getUnit(unitId, O.UNIVER_SLIDE);
    if (model == null) {
      return;
    }
    this._renderManagerService.createRender(unitId);
  }
  _disposeRenderer(workbook) {
    const unitId = workbook.getUnitId();
    this._renderManagerService.removeRender(unitId);
  }
  _initContextListener() {
  }
};
SlideRenderService = __decorateClass([
  __decorateParam(0, IContextService),
  __decorateParam(1, IUniverInstanceService),
  __decorateParam(2, IRenderManagerService)
], SlideRenderService);

// ../packages/slides-ui/src/slides-ui-plugin.ts
var SLIDE_UI_PLUGIN_NAME = "SLIDE_UI";
var UniverSlidesUIPlugin = class extends Plugin {
  constructor(_config = defaultPluginConfig2, _injector, _renderManagerService, _univerInstanceService, _configService) {
    super();
    this._config = _config;
    this._injector = _injector;
    this._renderManagerService = _renderManagerService;
    this._univerInstanceService = _univerInstanceService;
    this._configService = _configService;
    const { menu, ...rest } = merge_default(
      {},
      defaultPluginConfig2,
      this._config
    );
    if (menu) {
      this._configService.setConfig("menu", menu, { merge: true });
    }
    this._configService.setConfig(SLIDES_UI_PLUGIN_CONFIG_KEY, rest);
  }
  onStarting() {
    mergeOverrideWithDependencies([
      [SlideRenderService],
      [ISlideEditorBridgeService, { useClass: SlideEditorBridgeService }],
      // used by SlideUIController --> EditorContainer
      [ISlideEditorManagerService, { useClass: SlideEditorManagerService }],
      [SlideCanvasPopMangerService]
    ], this._config.override).forEach((d) => this._injector.add(d));
  }
  onReady() {
    [
      // SlideRenderService will be init in ready stage, and then calling RenderManagerService@createRender --> init all deps in this rendering register block.
      [SlideRenderController]
    ].forEach((m) => {
      this.disposeWithMe(this._renderManagerService.registerRenderModule(O.UNIVER_SLIDE, m));
    });
    mergeOverrideWithDependencies([
      [CanvasView],
      // cannot register in _renderManagerService now.
      // [ISlideEditorBridgeService, { useClass: SlideEditorBridgeService }],
      // // used by SlideUIController --> EditorContainer
      // [ISlideEditorManagerService, { useClass: SlideEditorManagerService }],
      // SlidesUIController controller should be registered in Ready stage.
      // SlidesUIController controller would add a new RenderUnit (__INTERNAL_EDITOR__DOCS_NORMAL)
      [SlidesUIController],
      // editor service was create in renderManagerService
      [SlideRenderController],
      [SlidePopupMenuController]
    ], this._config.override).forEach((m) => {
      this._injector.add(m);
    });
    this._injector.get(CanvasView);
    this._injector.get(SlideRenderService);
  }
  onRendered() {
    [
      // need slideEditorBridgeService
      // need TextSelectionRenderService which init by EditorContainer
      [SlideEditorBridgeRenderController],
      [SlideEditingRenderController]
    ].forEach((m) => {
      this.disposeWithMe(this._renderManagerService.registerRenderModule(O.UNIVER_SLIDE, m));
    });
    this._markSlideAsFocused();
    this._injector.get(SlidesUIController);
  }
  onSteady() {
    this._injector.get(SlidePopupMenuController);
  }
  _markSlideAsFocused() {
    const currentService = this._univerInstanceService;
    try {
      const slideDataModel = currentService.getCurrentUnitForType(O.UNIVER_SLIDE);
      currentService.focusUnit(slideDataModel.getUnitId());
    } catch (e) {
    }
  }
};
__publicField(UniverSlidesUIPlugin, "pluginName", SLIDE_UI_PLUGIN_NAME);
__publicField(UniverSlidesUIPlugin, "type", O.UNIVER_SLIDE);
UniverSlidesUIPlugin = __decorateClass([
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IRenderManagerService),
  __decorateParam(3, IUniverInstanceService),
  __decorateParam(4, IConfigService)
], UniverSlidesUIPlugin);

export {
  UniverSlidesPlugin,
  CanvasView,
  SLIDE_EDITOR_ID,
  ISlideEditorBridgeService,
  ActivateSlidePageOperation,
  AppendSlideOperation,
  SlideAddTextCommand,
  SetSlidePageThumbOperation,
  SlideEditorContainer,
  SLIDES_IMAGE_MENU_ID,
  SHAPE_MENU_ID,
  menuSchema,
  SlidesUIController,
  UniverSlidesUIPlugin
};
//# sourceMappingURL=chunk-US47PHMK.js.map
