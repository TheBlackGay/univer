import {
  UniverUniscriptPlugin
} from "../chunk-BKZV46G3.js";
import "../chunk-ZCWTXZV3.js";
import "../chunk-L7PSIZPJ.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-R36TW3RS.js";
import "../chunk-IM7MDYQK.js";
import "../chunk-PJAWFGFR.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-NW7E7FBW.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin,
  UniverRenderEnginePlugin,
  UniverUIPlugin
} from "../chunk-DOZPYWOG.js";
import "../chunk-OJWCZZ56.js";
import "../chunk-222VPS6G.js";
import {
  default_module_default
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
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-33NDYU5R.js";
import "../chunk-WKXT4HLI.js";
import "../chunk-TI7IKOEF.js";
import "../chunk-NSSCU2QI.js";

// src/docs-uniscript/main.ts
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
univer.registerPlugin(UniverUIPlugin, {
  container: "app",
  footer: false
});
univer.registerPlugin(UniverDocsPlugin);
univer.registerPlugin(UniverDocsUIPlugin);
univer.registerPlugin(UniverSheetsPlugin);
univer.registerPlugin(UniverSheetsUIPlugin);
univer.registerPlugin(UniverUniscriptPlugin, {
  getWorkerUrl(moduleID, label) {
    if (label === "typescript" || label === "javascript") {
      return "/vs/language/typescript/ts.worker.js";
    }
    return "/vs/editor/editor.worker.js";
  }
});
univer.createUnit(O.UNIVER_DOC, DEFAULT_DOCUMENT_DATA_CN);
window.univer = univer;
//# sourceMappingURL=main.js.map
