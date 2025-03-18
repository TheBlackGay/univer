import {
  UniverActionRecorderPlugin
} from "./chunk-LPARNHM5.js";
import {
  UniverSheetsFindReplacePlugin,
  UniverSheetsSortUIPlugin
} from "./chunk-FQXQOQ76.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-UQRYPMBX.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-XDFV2ZEI.js";
import "./chunk-3QA6BMH3.js";
import "./chunk-6EX6BLVI.js";
import {
  UniverDebuggerPlugin,
  UniverWatermarkPlugin
} from "./chunk-6RL4G227.js";
import "./chunk-OZCZVRL3.js";
import "./chunk-IEN5A4MA.js";
import "./chunk-6KKG4LFT.js";
import {
  UniverUniscriptPlugin
} from "./chunk-BKZV46G3.js";
import "./chunk-ZCWTXZV3.js";
import "./chunk-L7PSIZPJ.js";
import "./chunk-R36TW3RS.js";
import "./chunk-IM7MDYQK.js";
import "./chunk-PJAWFGFR.js";
import "./chunk-NW7E7FBW.js";
import "./chunk-DOZPYWOG.js";
import "./chunk-OJWCZZ56.js";
import "./chunk-22LKBS37.js";
import "./chunk-5UD457XA.js";
import "./chunk-33NDYU5R.js";
import "./chunk-WKXT4HLI.js";
import "./chunk-TI7IKOEF.js";
import "./chunk-NSSCU2QI.js";

// src/sheets-multi-units/very-lazy.ts
var IS_E2E = false;
function getVeryLazyPlugins() {
  const plugins = [
    [UniverActionRecorderPlugin],
    [UniverSheetsHyperLinkUIPlugin],
    [UniverSheetsSortUIPlugin],
    [UniverSheetsCrosshairHighlightPlugin],
    [UniverSheetsFindReplacePlugin],
    [UniverWatermarkPlugin]
  ];
  if (!IS_E2E) {
    plugins.push([UniverDebuggerPlugin]);
    plugins.push([UniverUniscriptPlugin, {
      getWorkerUrl(_, label) {
        if (label === "json") {
          return "/vs/language/json/json.worker.js";
        }
        if (label === "css" || label === "scss" || label === "less") {
          return "/vs/language/css/css.worker.js";
        }
        if (label === "html" || label === "handlebars" || label === "razor") {
          return "/vs/language/html/html.worker.js";
        }
        if (label === "typescript" || label === "javascript") {
          return "/vs/language/typescript/ts.worker.js";
        }
        return "/vs/editor/editor.worker.js";
      }
    }]);
  }
  return plugins;
}
export {
  getVeryLazyPlugins as default
};
//# sourceMappingURL=very-lazy-73PAF4CL.js.map
