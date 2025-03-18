import {
  UniverSheetsFilterPlugin
} from "../chunk-3QA6BMH3.js";
import {
  enUS,
  faIR,
  ruRU,
  viVN,
  zhCN,
  zhTW
} from "../chunk-NNLNWQYK.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-5UD457XA.js";
import {
  Univer,
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-33NDYU5R.js";
import "../chunk-WKXT4HLI.js";
import "../chunk-TI7IKOEF.js";
import "../chunk-NSSCU2QI.js";

// src/sheets/worker.ts
var univer = new Univer({
  locale: "zhCN" /* ZH_CN */,
  logLevel: 4 /* VERBOSE */,
  locales: {
    ["zhCN" /* ZH_CN */]: zhCN,
    ["enUS" /* EN_US */]: enUS,
    ["ruRU" /* RU_RU */]: ruRU,
    ["zhTW" /* ZH_TW */]: zhTW,
    ["viVN" /* VI_VN */]: viVN,
    ["faIR" /* FA_IR */]: faIR
  }
});
univer.registerPlugin(UniverSheetsPlugin, { onlyRegisterFormulaRelatedMutations: true });
univer.registerPlugin(UniverFormulaEnginePlugin);
univer.registerPlugin(UniverRPCWorkerThreadPlugin);
univer.registerPlugin(UniverRemoteSheetsFormulaPlugin);
univer.registerPlugin(UniverSheetsFilterPlugin);
self.univer = univer;
//# sourceMappingURL=worker.js.map
