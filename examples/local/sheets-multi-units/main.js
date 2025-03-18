import {
  UniverSheetsBindingSourcePlugin,
  UniverSheetsThreadCommentUIPlugin,
  UniverSheetsZenEditorPlugin
} from "../chunk-LC74W6VU.js";
import "../chunk-UQRYPMBX.js";
import {
  UniverSheetsThreadCommentPlugin
} from "../chunk-5E7O4A6V.js";
import {
  UniverSheetsHyperLinkPlugin,
  UniverSheetsSortPlugin
} from "../chunk-XDFV2ZEI.js";
import {
  UniverSheetsConditionalFormattingPlugin
} from "../chunk-WXS7WCGQ.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-3QA6BMH3.js";
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
  UniverDocsMentionUIPlugin
} from "../chunk-KH5JJXHV.js";
import {
  UniverThreadCommentUIPlugin
} from "../chunk-AGG5SFHL.js";
import {
  UniverDocsDrawingUIPlugin
} from "../chunk-IEN5A4MA.js";
import "../chunk-6KKG4LFT.js";
import {
  FUniver
} from "../chunk-IM7MDYQK.js";
import {
  UniverSheetsDataValidationPlugin
} from "../chunk-PJAWFGFR.js";
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
  frFR,
  ruRU,
  viVN,
  zhCN,
  zhTW
} from "../chunk-NNLNWQYK.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-5UD457XA.js";
import {
  Univer,
  UniverFormulaEnginePlugin,
  UniverRPCMainThreadPlugin,
  UniverSheetsPlugin,
  UserManagerService
} from "../chunk-33NDYU5R.js";
import "../chunk-WKXT4HLI.js";
import "../chunk-TI7IKOEF.js";
import "../chunk-NSSCU2QI.js";

// src/sheets-multi-units/main.ts
var LOAD_LAZY_PLUGINS_TIMEOUT = 100;
var LOAD_VERY_LAZY_PLUGINS_TIMEOUT = 1e3;
var mockUser = {
  userID: "Owner_qxVnhPbQ",
  name: "Owner",
  avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAInSURBVHgBtZU9TxtBEIbfWRzFSIdkikhBSqRQkJqkCKTCFkqVInSUSaT0wC8w/gXxD4gU2nRJkXQWhAZowDUUWKIwEgWWbEEB3mVmx3dn4DA2nB/ppNuPeWd29mMIPXDr+RxwtgRHeW6+guNPRxogqnL7Dwz9psJ27S4NShaeZTH3kwXy6I81dlRKcmRui88swdq9AcSFL7Buz1Vmlns64MiLsCjzwnIYHLH57tbfFbs7KRaXyEU8FVZofqccOfA5l7Q8LPIkGrwnb2RPNEXWFVMUF3L+kDCk0btDDAMzOm5YfAHDwp4tG74wnzAsiOYMnJ3GoDybA7IT98/jm5+JNnfiIzAS6LlqHQBN/i6b2t/cV1Hh6BfwYlHnHP4AXi5q/8kmMMpOs8+BixZw/Fd6xUEHEbnkgclvQP2fGp7uShRKnQ3G32rkjV1th8JhIGG7tR/JyjGteSOZELwGMmNqIIigRCLRh2OZIE6BjItdd7pCW6Uhm1zzkUtungSxwEUzNpQ+GQumtH1ej1MqgmNT6vwmhCq5yuwq56EYTbgeQUz3yvrpV1b4ok3nYJ+eYhgYmjRUqErx2EDq0Fr8FhG++iqVGqxlUJI/70Ar0UgJaWHj6hYVHJrfKssAHot1JfqwE9WVWzXZVd5z2Ws/4PnmtEjkXeKJDvxUecLbWOXH/DP6QQ4J72NS0adedp1aseBfXP8odlZFfPvBF7SN/8hky1TYuPOAXAEipMx15u5ToAAAAABJRU5ErkJggg==",
  anonymous: false,
  canBindAnonymous: false
};
var univer = new Univer({
  theme: default_module_default,
  locale: "zhCN" /* ZH_CN */,
  locales: {
    ["zhCN" /* ZH_CN */]: zhCN,
    ["enUS" /* EN_US */]: enUS,
    ["frFR" /* FR_FR */]: frFR,
    ["ruRU" /* RU_RU */]: ruRU,
    ["zhTW" /* ZH_TW */]: zhTW,
    ["viVN" /* VI_VN */]: viVN,
    ["faIR" /* FA_IR */]: faIR
  },
  logLevel: 4 /* VERBOSE */
});
var worker = new Worker(new URL("./worker.js", import.meta.url), { type: "module" });
univer.registerPlugin(UniverRPCMainThreadPlugin, { workerURL: worker });
univer.registerPlugin(UniverDocsPlugin);
univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverUIPlugin, { container: "app" });
univer.registerPlugin(UniverDocsUIPlugin);
univer.registerPlugin(UniverDocsDrawingUIPlugin);
univer.registerPlugin(UniverDocsMentionUIPlugin);
univer.registerPlugin(UniverSheetsPlugin, { notExecuteFormula: false });
univer.registerPlugin(UniverSheetsUIPlugin);
univer.registerPlugin(UniverSheetsNumfmtPlugin);
univer.registerPlugin(UniverSheetsZenEditorPlugin);
univer.registerPlugin(UniverFormulaEnginePlugin, { notExecuteFormula: false });
univer.registerPlugin(UniverSheetsNumfmtUIPlugin);
univer.registerPlugin(UniverSheetsFormulaPlugin, { notExecuteFormula: false });
univer.registerPlugin(UniverSheetsFormulaUIPlugin);
univer.registerPlugin(UniverSheetsDataValidationPlugin);
univer.registerPlugin(UniverSheetsConditionalFormattingPlugin);
univer.registerPlugin(UniverSheetsFilterPlugin);
univer.registerPlugin(UniverSheetsSortPlugin);
univer.registerPlugin(UniverSheetsHyperLinkPlugin);
univer.registerPlugin(UniverThreadCommentUIPlugin);
univer.registerPlugin(UniverSheetsThreadCommentPlugin);
univer.registerPlugin(UniverSheetsThreadCommentUIPlugin);
univer.registerPlugin(UniverSheetsBindingSourcePlugin);
var injector = univer.__getInjector();
var userManagerService = injector.get(UserManagerService);
userManagerService.setCurrentUser(mockUser);
setTimeout(() => {
  import("../lazy-L5AGE625.js").then((lazy) => {
    const plugins = lazy.default();
    plugins.forEach((p) => univer.registerPlugin(p[0], p[1]));
  });
}, LOAD_LAZY_PLUGINS_TIMEOUT);
setTimeout(() => {
  import("../very-lazy-73PAF4CL.js").then((lazy) => {
    const plugins = lazy.default();
    plugins.forEach((p) => univer.registerPlugin(p[0], p[1]));
  });
}, LOAD_VERY_LAZY_PLUGINS_TIMEOUT);
univer.onDispose(() => {
  worker.terminate();
  window.univer = void 0;
  window.univerAPI = void 0;
});
window.univer = univer;
var univerAPI = window.univerAPI = FUniver.newAPI(univer);
univerAPI.createWorkbook({
  id: "workbook1",
  sheetOrder: ["sheet-01"],
  sheets: {
    "sheet-01": {
      id: "sheet-01",
      name: "Sheet 01",
      rowCount: 10,
      columnCount: 5,
      cellData: { 0: { 0: { f: "=SUM('[workbook2]Sheet 01'!A1:B2)" } } }
    }
  }
});
univerAPI.createWorkbook(
  {
    id: "workbook2",
    sheetOrder: ["sheet-01"],
    sheets: {
      "sheet-01": {
        id: "sheet-01",
        name: "Sheet 01",
        rowCount: 10,
        columnCount: 5,
        cellData: {
          0: {
            0: { v: 1 },
            1: { v: 2 }
          },
          1: {
            0: { v: 3 },
            1: { v: 1 }
          }
        }
      }
    }
  },
  {
    makeCurrent: false
  }
);
export {
  mockUser
};
//# sourceMappingURL=main.js.map
