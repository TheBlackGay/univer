import {
  UniverSlidesPlugin,
  UniverSlidesUIPlugin
} from "../chunk-US47PHMK.js";
import {
  DEFAULT_SLIDE_DATA
} from "../chunk-R36TW3RS.js";
import "../chunk-PJAWFGFR.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin,
  UniverDrawingPlugin,
  UniverRenderEnginePlugin,
  UniverUIPlugin
} from "../chunk-DOZPYWOG.js";
import "../chunk-OJWCZZ56.js";
import "../chunk-222VPS6G.js";
import {
  green_module_default
} from "../chunk-22LKBS37.js";
import {
  enUS,
  faIR,
  ruRU,
  zhCN
} from "../chunk-NNLNWQYK.js";
import "../chunk-5UD457XA.js";
import {
  O,
  Univer,
  UniverFormulaEnginePlugin
} from "../chunk-33NDYU5R.js";
import "../chunk-WKXT4HLI.js";
import "../chunk-TI7IKOEF.js";
import "../chunk-NSSCU2QI.js";

// src/slides/main.ts
var univer = new Univer({
  theme: green_module_default,
  locale: "zhCN" /* ZH_CN */,
  locales: {
    ["zhCN" /* ZH_CN */]: zhCN,
    ["enUS" /* EN_US */]: enUS,
    ["ruRU" /* RU_RU */]: ruRU,
    ["faIR" /* FA_IR */]: faIR
  }
});
univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverUIPlugin, { container: "app" });
univer.registerPlugin(UniverDocsPlugin);
univer.registerPlugin(UniverDocsUIPlugin);
univer.registerPlugin(UniverFormulaEnginePlugin);
univer.registerPlugin(UniverDrawingPlugin);
univer.registerPlugin(UniverSlidesPlugin);
univer.registerPlugin(UniverSlidesUIPlugin);
univer.createUnit(O.UNIVER_SLIDE, DEFAULT_SLIDE_DATA);
window.univer = univer;
//# sourceMappingURL=main.js.map
