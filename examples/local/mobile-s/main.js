import {
  UniverSheetsDataValidationMobileUIPlugin
} from "../chunk-OZXU6N4W.js";
import {
  UniverSheetsConditionalFormattingMobileUIPlugin
} from "../chunk-KZFTO66A.js";
import {
  UniverSheetsFilterMobileUIPlugin
} from "../chunk-LVPBHJE6.js";
import "../chunk-WXS7WCGQ.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-3QA6BMH3.js";
import "../chunk-6EX6BLVI.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-YZCWNVH6.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-R36TW3RS.js";
import {
  UniverSheetsDataValidationPlugin
} from "../chunk-PJAWFGFR.js";
import {
  UniverSheetsMobileUIPlugin
} from "../chunk-NW7E7FBW.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin,
  UniverMobileUIPlugin,
  UniverRenderEnginePlugin
} from "../chunk-DOZPYWOG.js";
import "../chunk-OJWCZZ56.js";
import "../chunk-222VPS6G.js";
import {
  default_module_default
} from "../chunk-22LKBS37.js";
import {
  enUS,
  faIR
} from "../chunk-NNLNWQYK.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-5UD457XA.js";
import {
  O,
  Univer,
  UniverFormulaEnginePlugin,
  UniverRPCMainThreadPlugin,
  UniverSheetsPlugin,
  UserManagerService
} from "../chunk-33NDYU5R.js";
import "../chunk-WKXT4HLI.js";
import "../chunk-TI7IKOEF.js";
import "../chunk-NSSCU2QI.js";

// src/mobile-s/main.ts
var univer = new Univer({
  theme: default_module_default,
  locale: "enUS" /* EN_US */,
  locales: {
    ["enUS" /* EN_US */]: enUS,
    ["faIR" /* FA_IR */]: faIR
  },
  logLevel: 4 /* VERBOSE */
});
univer.registerPlugin(UniverFormulaEnginePlugin);
univer.registerPlugin(UniverDocsPlugin);
univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverMobileUIPlugin, {
  container: "app",
  contextMenu: true
});
var worker = new Worker(new URL("./worker.js", import.meta.url), { type: "module" });
univer.registerPlugin(UniverRPCMainThreadPlugin, { workerURL: worker });
univer.onDispose(() => worker.terminate());
univer.registerPlugin(UniverDocsUIPlugin);
univer.registerPlugin(UniverSheetsPlugin);
univer.registerPlugin(UniverSheetsMobileUIPlugin);
univer.registerPlugin(UniverSheetsFilterPlugin);
univer.registerPlugin(UniverSheetsFilterMobileUIPlugin);
univer.registerPlugin(UniverSheetsNumfmtPlugin);
univer.registerPlugin(UniverSheetsFormulaPlugin);
univer.registerPlugin(UniverSheetsConditionalFormattingMobileUIPlugin);
univer.registerPlugin(UniverSheetsDataValidationPlugin);
univer.registerPlugin(UniverSheetsDataValidationMobileUIPlugin);
var mockUser = {
  userID: "Owner_qxVnhPbQ",
  name: "Owner",
  avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAInSURBVHgBtZU9TxtBEIbfWRzFSIdkikhBSqRQkJqkCKTCFkqVInSUSaT0wC8w/gXxD4gU2nRJkXQWhAZowDUUWKIwEgWWbEEB3mVmx3dn4DA2nB/ppNuPeWd29mMIPXDr+RxwtgRHeW6+guNPRxogqnL7Dwz9psJ27S4NShaeZTH3kwXy6I81dlRKcmRui88swdq9AcSFL7Buz1Vmlns64MiLsCjzwnIYHLH57tbfFbs7KRaXyEU8FVZofqccOfA5l7Q8LPIkGrwnb2RPNEXWFVMUF3L+kDCk0btDDAMzOm5YfAHDwp4tG74wnzAsiOYMnJ3GoDybA7IT98/jm5+JNnfiIzAS6LlqHQBN/i6b2t/cV1Hh6BfwYlHnHP4AXi5q/8kmMMpOs8+BixZw/Fd6xUEHEbnkgclvQP2fGp7uShRKnQ3G32rkjV1th8JhIGG7tR/JyjGteSOZELwGMmNqIIigRCLRh2OZIE6BjItdd7pCW6Uhm1zzkUtungSxwEUzNpQ+GQumtH1ej1MqgmNT6vwmhCq5yuwq56EYTbgeQUz3yvrpV1b4ok3nYJ+eYhgYmjRUqErx2EDq0Fr8FhG++iqVGqxlUJI/70Ar0UgJaWHj6hYVHJrfKssAHot1JfqwE9WVWzXZVd5z2Ws/4PnmtEjkXeKJDvxUecLbWOXH/DP6QQ4J72NS0adedp1aseBfXP8odlZFfPvBF7SN/8hky1TYuPOAXAEipMx15u5ToAAAAABJRU5ErkJggg==",
  anonymous: false,
  canBindAnonymous: false
};
var injector = univer.__getInjector();
var userManagerService = injector.get(UserManagerService);
userManagerService.setCurrentUser(mockUser);
univer.createUnit(O.UNIVER_SHEET, DEFAULT_WORKBOOK_DATA_DEMO);
//# sourceMappingURL=main.js.map
