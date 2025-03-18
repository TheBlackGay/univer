/**
 * Copyright 2023-present DreamNum Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Tools } from '@univerjs/core';

import actionrecorderenUS from '@univerjs/action-recorder/locale/en-US';
import actionrecorderfrFR from '@univerjs/action-recorder/locale/fr-FR';
import actionrecorderruRU from '@univerjs/action-recorder/locale/ru-RU';
import actionrecorderzhCN from '@univerjs/action-recorder/locale/zh-CN';
import actionrecorderzhTW from '@univerjs/action-recorder/locale/zh-TW';
import actionrecorderviVN from '@univerjs/action-recorder/locale/vi-VN';
import actionrecorderfaIR from '@univerjs/action-recorder/locale/fa-IR';
import debuggerenUS from '@univerjs/debugger/locale/en-US';
import debuggerfrFR from '@univerjs/debugger/locale/fr-FR';
import debuggerruRU from '@univerjs/debugger/locale/ru-RU';
import debuggerzhCN from '@univerjs/debugger/locale/zh-CN';
import debuggerzhTW from '@univerjs/debugger/locale/zh-TW';
import debuggerviVN from '@univerjs/debugger/locale/vi-VN';
import debuggerfaIR from '@univerjs/debugger/locale/fa-IR';
import designenUS from '@univerjs/design/locale/en-US';
import designfrFR from '@univerjs/design/locale/fr-FR';
import designruRU from '@univerjs/design/locale/ru-RU';
import designzhCN from '@univerjs/design/locale/zh-CN';
import designzhTW from '@univerjs/design/locale/zh-TW';
import designviVN from '@univerjs/design/locale/vi-VN';
import designfaIR from '@univerjs/design/locale/fa-IR';
import docsdrawinguienUS from '@univerjs/docs-drawing-ui/locale/en-US';
import docsdrawinguifrFR from '@univerjs/docs-drawing-ui/locale/fr-FR';
import docsdrawinguiruRU from '@univerjs/docs-drawing-ui/locale/ru-RU';
import docsdrawinguizhCN from '@univerjs/docs-drawing-ui/locale/zh-CN';
import docsdrawinguizhTW from '@univerjs/docs-drawing-ui/locale/zh-TW';
import docsdrawinguiviVN from '@univerjs/docs-drawing-ui/locale/vi-VN';
import docsdrawinguifaIR from '@univerjs/docs-drawing-ui/locale/fa-IR';
import docshyperlinkuienUS from '@univerjs/docs-hyper-link-ui/locale/en-US';
import docshyperlinkuifrFR from '@univerjs/docs-hyper-link-ui/locale/fr-FR';
import docshyperlinkuiruRU from '@univerjs/docs-hyper-link-ui/locale/ru-RU';
import docshyperlinkuizhCN from '@univerjs/docs-hyper-link-ui/locale/zh-CN';
import docshyperlinkuizhTW from '@univerjs/docs-hyper-link-ui/locale/zh-TW';
import docshyperlinkuiviVN from '@univerjs/docs-hyper-link-ui/locale/vi-VN';
import docshyperlinkuifaIR from '@univerjs/docs-hyper-link-ui/locale/fa-IR';
import docsquickinsertuienUS from '@univerjs/docs-quick-insert-ui/locale/en-US';
import docsquickinsertuifrFR from '@univerjs/docs-quick-insert-ui/locale/fr-FR';
import docsquickinsertuiruRU from '@univerjs/docs-quick-insert-ui/locale/ru-RU';
import docsquickinsertuizhCN from '@univerjs/docs-quick-insert-ui/locale/zh-CN';
import docsquickinsertuizhTW from '@univerjs/docs-quick-insert-ui/locale/zh-TW';
import docsquickinsertuiviVN from '@univerjs/docs-quick-insert-ui/locale/vi-VN';
import docsquickinsertuifaIR from '@univerjs/docs-quick-insert-ui/locale/fa-IR';
import docsuienUS from '@univerjs/docs-ui/locale/en-US';
import docsuifrFR from '@univerjs/docs-ui/locale/fr-FR';
import docsuiruRU from '@univerjs/docs-ui/locale/ru-RU';
import docsuizhCN from '@univerjs/docs-ui/locale/zh-CN';
import docsuizhTW from '@univerjs/docs-ui/locale/zh-TW';
import docsuiviVN from '@univerjs/docs-ui/locale/vi-VN';
import docsuifaIR from '@univerjs/docs-ui/locale/fa-IR';
import drawinguienUS from '@univerjs/drawing-ui/locale/en-US';
import drawinguifrFR from '@univerjs/drawing-ui/locale/fr-FR';
import drawinguiruRU from '@univerjs/drawing-ui/locale/ru-RU';
import drawinguizhCN from '@univerjs/drawing-ui/locale/zh-CN';
import drawinguizhTW from '@univerjs/drawing-ui/locale/zh-TW';
import drawinguiviVN from '@univerjs/drawing-ui/locale/vi-VN';
import drawinguifaIR from '@univerjs/drawing-ui/locale/fa-IR';
import findreplaceenUS from '@univerjs/find-replace/locale/en-US';
import findreplacefrFR from '@univerjs/find-replace/locale/fr-FR';
import findreplaceruRU from '@univerjs/find-replace/locale/ru-RU';
import findreplacezhCN from '@univerjs/find-replace/locale/zh-CN';
import findreplacezhTW from '@univerjs/find-replace/locale/zh-TW';
import findreplaceviVN from '@univerjs/find-replace/locale/vi-VN';
import findreplacefaIR from '@univerjs/find-replace/locale/fa-IR';
import sheetsenUS from '@univerjs/sheets/locale/en-US';
import sheetsfrFR from '@univerjs/sheets/locale/fr-FR';
import sheetsruRU from '@univerjs/sheets/locale/ru-RU';
import sheetszhCN from '@univerjs/sheets/locale/zh-CN';
import sheetszhTW from '@univerjs/sheets/locale/zh-TW';
import sheetsviVN from '@univerjs/sheets/locale/vi-VN';
import sheetsfaIR from '@univerjs/sheets/locale/fa-IR';
import sheetsconditionalformattinguienUS from '@univerjs/sheets-conditional-formatting-ui/locale/en-US';
import sheetsconditionalformattinguifrFR from '@univerjs/sheets-conditional-formatting-ui/locale/fr-FR';
import sheetsconditionalformattinguiruRU from '@univerjs/sheets-conditional-formatting-ui/locale/ru-RU';
import sheetsconditionalformattinguizhCN from '@univerjs/sheets-conditional-formatting-ui/locale/zh-CN';
import sheetsconditionalformattinguizhTW from '@univerjs/sheets-conditional-formatting-ui/locale/zh-TW';
import sheetsconditionalformattinguiviVN from '@univerjs/sheets-conditional-formatting-ui/locale/vi-VN';
import sheetsconditionalformattinguifaIR from '@univerjs/sheets-conditional-formatting-ui/locale/fa-IR';
import sheetscrosshairhighlightenUS from '@univerjs/sheets-crosshair-highlight/locale/en-US';
import sheetscrosshairhighlightfrFR from '@univerjs/sheets-crosshair-highlight/locale/fr-FR';
import sheetscrosshairhighlightruRU from '@univerjs/sheets-crosshair-highlight/locale/ru-RU';
import sheetscrosshairhighlightzhCN from '@univerjs/sheets-crosshair-highlight/locale/zh-CN';
import sheetscrosshairhighlightzhTW from '@univerjs/sheets-crosshair-highlight/locale/zh-TW';
import sheetscrosshairhighlightviVN from '@univerjs/sheets-crosshair-highlight/locale/vi-VN';
import sheetscrosshairhighlightfaIR from '@univerjs/sheets-crosshair-highlight/locale/fa-IR';
import sheetsdatavalidationuienUS from '@univerjs/sheets-data-validation-ui/locale/en-US';
import sheetsdatavalidationuifrFR from '@univerjs/sheets-data-validation-ui/locale/fr-FR';
import sheetsdatavalidationuiruRU from '@univerjs/sheets-data-validation-ui/locale/ru-RU';
import sheetsdatavalidationuizhCN from '@univerjs/sheets-data-validation-ui/locale/zh-CN';
import sheetsdatavalidationuizhTW from '@univerjs/sheets-data-validation-ui/locale/zh-TW';
import sheetsdatavalidationuiviVN from '@univerjs/sheets-data-validation-ui/locale/vi-VN';
import sheetsdatavalidationuifaIR from '@univerjs/sheets-data-validation-ui/locale/fa-IR';
import sheetsdrawinguienUS from '@univerjs/sheets-drawing-ui/locale/en-US';
import sheetsdrawinguifrFR from '@univerjs/sheets-drawing-ui/locale/fr-FR';
import sheetsdrawinguiruRU from '@univerjs/sheets-drawing-ui/locale/ru-RU';
import sheetsdrawinguizhCN from '@univerjs/sheets-drawing-ui/locale/zh-CN';
import sheetsdrawinguizhTW from '@univerjs/sheets-drawing-ui/locale/zh-TW';
import sheetsdrawinguiviVN from '@univerjs/sheets-drawing-ui/locale/vi-VN';
import sheetsdrawinguifaIR from '@univerjs/sheets-drawing-ui/locale/fa-IR';
import sheetsfilteruienUS from '@univerjs/sheets-filter-ui/locale/en-US';
import sheetsfilteruifrFR from '@univerjs/sheets-filter-ui/locale/fr-FR';
import sheetsfilteruiruRU from '@univerjs/sheets-filter-ui/locale/ru-RU';
import sheetsfilteruizhCN from '@univerjs/sheets-filter-ui/locale/zh-CN';
import sheetsfilteruizhTW from '@univerjs/sheets-filter-ui/locale/zh-TW';
import sheetsfilteruiviVN from '@univerjs/sheets-filter-ui/locale/vi-VN';
import sheetsfilteruifaIR from '@univerjs/sheets-filter-ui/locale/fa-IR';
import sheetsfindreplaceenUS from '@univerjs/sheets-find-replace/locale/en-US';
import sheetsfindreplacefrFR from '@univerjs/sheets-find-replace/locale/fr-FR';
import sheetsfindreplaceruRU from '@univerjs/sheets-find-replace/locale/ru-RU';
import sheetsfindreplacezhCN from '@univerjs/sheets-find-replace/locale/zh-CN';
import sheetsfindreplacezhTW from '@univerjs/sheets-find-replace/locale/zh-TW';
import sheetsfindreplaceviVN from '@univerjs/sheets-find-replace/locale/vi-VN';
import sheetsfindreplacefaIR from '@univerjs/sheets-find-replace/locale/fa-IR';
import sheetsformulaenUS from '@univerjs/sheets-formula/locale/en-US';
import sheetsformulafrFR from '@univerjs/sheets-formula/locale/fr-FR';
import sheetsformularuRU from '@univerjs/sheets-formula/locale/ru-RU';
import sheetsformulazhCN from '@univerjs/sheets-formula/locale/zh-CN';
import sheetsformulazhTW from '@univerjs/sheets-formula/locale/zh-TW';
import sheetsformulaviVN from '@univerjs/sheets-formula/locale/vi-VN';
import sheetsformulafaIR from '@univerjs/sheets-formula/locale/fa-IR';
import sheetsformulauienUS from '@univerjs/sheets-formula-ui/locale/en-US';
import sheetsformulauifrFR from '@univerjs/sheets-formula-ui/locale/fr-FR';
import sheetsformulauiruRU from '@univerjs/sheets-formula-ui/locale/ru-RU';
import sheetsformulauizhCN from '@univerjs/sheets-formula-ui/locale/zh-CN';
import sheetsformulauizhTW from '@univerjs/sheets-formula-ui/locale/zh-TW';
import sheetsformulauiviVN from '@univerjs/sheets-formula-ui/locale/vi-VN';
import sheetsformulauifaIR from '@univerjs/sheets-formula-ui/locale/fa-IR';
import sheetshyperlinkuienUS from '@univerjs/sheets-hyper-link-ui/locale/en-US';
import sheetshyperlinkuifrFR from '@univerjs/sheets-hyper-link-ui/locale/fr-FR';
import sheetshyperlinkuiruRU from '@univerjs/sheets-hyper-link-ui/locale/ru-RU';
import sheetshyperlinkuizhCN from '@univerjs/sheets-hyper-link-ui/locale/zh-CN';
import sheetshyperlinkuizhTW from '@univerjs/sheets-hyper-link-ui/locale/zh-TW';
import sheetshyperlinkuiviVN from '@univerjs/sheets-hyper-link-ui/locale/vi-VN';
import sheetshyperlinkuifaIR from '@univerjs/sheets-hyper-link-ui/locale/fa-IR';
import sheetsnumfmtuienUS from '@univerjs/sheets-numfmt-ui/locale/en-US';
import sheetsnumfmtuifrFR from '@univerjs/sheets-numfmt-ui/locale/fr-FR';
import sheetsnumfmtuiruRU from '@univerjs/sheets-numfmt-ui/locale/ru-RU';
import sheetsnumfmtuizhCN from '@univerjs/sheets-numfmt-ui/locale/zh-CN';
import sheetsnumfmtuizhTW from '@univerjs/sheets-numfmt-ui/locale/zh-TW';
import sheetsnumfmtuiviVN from '@univerjs/sheets-numfmt-ui/locale/vi-VN';
import sheetsnumfmtuifaIR from '@univerjs/sheets-numfmt-ui/locale/fa-IR';
import sheetssortenUS from '@univerjs/sheets-sort/locale/en-US';
import sheetssortfrFR from '@univerjs/sheets-sort/locale/fr-FR';
import sheetssortruRU from '@univerjs/sheets-sort/locale/ru-RU';
import sheetssortzhCN from '@univerjs/sheets-sort/locale/zh-CN';
import sheetssortzhTW from '@univerjs/sheets-sort/locale/zh-TW';
import sheetssortviVN from '@univerjs/sheets-sort/locale/vi-VN';
import sheetssortfaIR from '@univerjs/sheets-sort/locale/fa-IR';
import sheetssortuienUS from '@univerjs/sheets-sort-ui/locale/en-US';
import sheetssortuifrFR from '@univerjs/sheets-sort-ui/locale/fr-FR';
import sheetssortuiruRU from '@univerjs/sheets-sort-ui/locale/ru-RU';
import sheetssortuizhCN from '@univerjs/sheets-sort-ui/locale/zh-CN';
import sheetssortuizhTW from '@univerjs/sheets-sort-ui/locale/zh-TW';
import sheetssortuiviVN from '@univerjs/sheets-sort-ui/locale/vi-VN';
import sheetssortuifaIR from '@univerjs/sheets-sort-ui/locale/fa-IR';
import sheetsthreadcommentuienUS from '@univerjs/sheets-thread-comment-ui/locale/en-US';
import sheetsthreadcommentuifrFR from '@univerjs/sheets-thread-comment-ui/locale/fr-FR';
import sheetsthreadcommentuiruRU from '@univerjs/sheets-thread-comment-ui/locale/ru-RU';
import sheetsthreadcommentuizhCN from '@univerjs/sheets-thread-comment-ui/locale/zh-CN';
import sheetsthreadcommentuizhTW from '@univerjs/sheets-thread-comment-ui/locale/zh-TW';
import sheetsthreadcommentuiviVN from '@univerjs/sheets-thread-comment-ui/locale/vi-VN';
import sheetsthreadcommentuifaIR from '@univerjs/sheets-thread-comment-ui/locale/fa-IR';
import sheetsuienUS from '@univerjs/sheets-ui/locale/en-US';
import sheetsuifrFR from '@univerjs/sheets-ui/locale/fr-FR';
import sheetsuiruRU from '@univerjs/sheets-ui/locale/ru-RU';
import sheetsuizhCN from '@univerjs/sheets-ui/locale/zh-CN';
import sheetsuizhTW from '@univerjs/sheets-ui/locale/zh-TW';
import sheetsuiviVN from '@univerjs/sheets-ui/locale/vi-VN';
import sheetsuifaIR from '@univerjs/sheets-ui/locale/fa-IR';
import sheetszeneditorenUS from '@univerjs/sheets-zen-editor/locale/en-US';
import sheetszeneditorfrFR from '@univerjs/sheets-zen-editor/locale/fr-FR';
import sheetszeneditorruRU from '@univerjs/sheets-zen-editor/locale/ru-RU';
import sheetszeneditorzhCN from '@univerjs/sheets-zen-editor/locale/zh-CN';
import sheetszeneditorzhTW from '@univerjs/sheets-zen-editor/locale/zh-TW';
import sheetszeneditorviVN from '@univerjs/sheets-zen-editor/locale/vi-VN';
import sheetszeneditorfaIR from '@univerjs/sheets-zen-editor/locale/fa-IR';
import slidesuienUS from '@univerjs/slides-ui/locale/en-US';
import slidesuifrFR from '@univerjs/slides-ui/locale/fr-FR';
import slidesuiruRU from '@univerjs/slides-ui/locale/ru-RU';
import slidesuizhCN from '@univerjs/slides-ui/locale/zh-CN';
import slidesuizhTW from '@univerjs/slides-ui/locale/zh-TW';
import slidesuiviVN from '@univerjs/slides-ui/locale/vi-VN';
import slidesuifaIR from '@univerjs/slides-ui/locale/fa-IR';
import threadcommentuienUS from '@univerjs/thread-comment-ui/locale/en-US';
import threadcommentuifrFR from '@univerjs/thread-comment-ui/locale/fr-FR';
import threadcommentuiruRU from '@univerjs/thread-comment-ui/locale/ru-RU';
import threadcommentuizhCN from '@univerjs/thread-comment-ui/locale/zh-CN';
import threadcommentuizhTW from '@univerjs/thread-comment-ui/locale/zh-TW';
import threadcommentuiviVN from '@univerjs/thread-comment-ui/locale/vi-VN';
import threadcommentuifaIR from '@univerjs/thread-comment-ui/locale/fa-IR';
import uienUS from '@univerjs/ui/locale/en-US';
import uifrFR from '@univerjs/ui/locale/fr-FR';
import uiruRU from '@univerjs/ui/locale/ru-RU';
import uizhCN from '@univerjs/ui/locale/zh-CN';
import uizhTW from '@univerjs/ui/locale/zh-TW';
import uiviVN from '@univerjs/ui/locale/vi-VN';
import uifaIR from '@univerjs/ui/locale/fa-IR';
import uniformulauienUS from '@univerjs/uni-formula-ui/locale/en-US';
import uniformulauifrFR from '@univerjs/uni-formula-ui/locale/fr-FR';
import uniformulauiruRU from '@univerjs/uni-formula-ui/locale/ru-RU';
import uniformulauizhCN from '@univerjs/uni-formula-ui/locale/zh-CN';
import uniformulauizhTW from '@univerjs/uni-formula-ui/locale/zh-TW';
import uniformulauiviVN from '@univerjs/uni-formula-ui/locale/vi-VN';
import uniformulauifaIR from '@univerjs/uni-formula-ui/locale/fa-IR';
import uniscriptenUS from '@univerjs/uniscript/locale/en-US';
import uniscriptfrFR from '@univerjs/uniscript/locale/fr-FR';
import uniscriptruRU from '@univerjs/uniscript/locale/ru-RU';
import uniscriptzhCN from '@univerjs/uniscript/locale/zh-CN';
import uniscriptzhTW from '@univerjs/uniscript/locale/zh-TW';
import uniscriptviVN from '@univerjs/uniscript/locale/vi-VN';
import uniscriptfaIR from '@univerjs/uniscript/locale/fa-IR';

export const enUS = Tools.deepMerge(
    {},
    actionrecorderenUS,
    debuggerenUS,
    designenUS,
    docsdrawinguienUS,
    docshyperlinkuienUS,
    docsquickinsertuienUS,
    docsuienUS,
    drawinguienUS,
    findreplaceenUS,
    sheetsenUS,
    sheetsconditionalformattinguienUS,
    sheetscrosshairhighlightenUS,
    sheetsdatavalidationuienUS,
    sheetsdrawinguienUS,
    sheetsfilteruienUS,
    sheetsfindreplaceenUS,
    sheetsformulaenUS,
    sheetsformulauienUS,
    sheetshyperlinkuienUS,
    sheetsnumfmtuienUS,
    sheetssortenUS,
    sheetssortuienUS,
    sheetsthreadcommentuienUS,
    sheetsuienUS,
    sheetszeneditorenUS,
    slidesuienUS,
    threadcommentuienUS,
    uienUS,
    uniformulauienUS,
    uniscriptenUS
);
export const frFR = Tools.deepMerge(
    {},
    actionrecorderfrFR,
    debuggerfrFR,
    designfrFR,
    docsdrawinguifrFR,
    docshyperlinkuifrFR,
    docsquickinsertuifrFR,
    docsuifrFR,
    drawinguifrFR,
    findreplacefrFR,
    sheetsfrFR,
    sheetsconditionalformattinguifrFR,
    sheetscrosshairhighlightfrFR,
    sheetsdatavalidationuifrFR,
    sheetsdrawinguifrFR,
    sheetsfilteruifrFR,
    sheetsfindreplacefrFR,
    sheetsformulafrFR,
    sheetsformulauifrFR,
    sheetshyperlinkuifrFR,
    sheetsnumfmtuifrFR,
    sheetssortfrFR,
    sheetssortuifrFR,
    sheetsthreadcommentuifrFR,
    sheetsuifrFR,
    sheetszeneditorfrFR,
    slidesuifrFR,
    threadcommentuifrFR,
    uifrFR,
    uniformulauifrFR,
    uniscriptfrFR
);
export const ruRU = Tools.deepMerge(
    {},
    actionrecorderruRU,
    debuggerruRU,
    designruRU,
    docsdrawinguiruRU,
    docshyperlinkuiruRU,
    docsquickinsertuiruRU,
    docsuiruRU,
    drawinguiruRU,
    findreplaceruRU,
    sheetsruRU,
    sheetsconditionalformattinguiruRU,
    sheetscrosshairhighlightruRU,
    sheetsdatavalidationuiruRU,
    sheetsdrawinguiruRU,
    sheetsfilteruiruRU,
    sheetsfindreplaceruRU,
    sheetsformularuRU,
    sheetsformulauiruRU,
    sheetshyperlinkuiruRU,
    sheetsnumfmtuiruRU,
    sheetssortruRU,
    sheetssortuiruRU,
    sheetsthreadcommentuiruRU,
    sheetsuiruRU,
    sheetszeneditorruRU,
    slidesuiruRU,
    threadcommentuiruRU,
    uiruRU,
    uniformulauiruRU,
    uniscriptruRU
);
export const zhCN = Tools.deepMerge(
    {},
    actionrecorderzhCN,
    debuggerzhCN,
    designzhCN,
    docsdrawinguizhCN,
    docshyperlinkuizhCN,
    docsquickinsertuizhCN,
    docsuizhCN,
    drawinguizhCN,
    findreplacezhCN,
    sheetszhCN,
    sheetsconditionalformattinguizhCN,
    sheetscrosshairhighlightzhCN,
    sheetsdatavalidationuizhCN,
    sheetsdrawinguizhCN,
    sheetsfilteruizhCN,
    sheetsfindreplacezhCN,
    sheetsformulazhCN,
    sheetsformulauizhCN,
    sheetshyperlinkuizhCN,
    sheetsnumfmtuizhCN,
    sheetssortzhCN,
    sheetssortuizhCN,
    sheetsthreadcommentuizhCN,
    sheetsuizhCN,
    sheetszeneditorzhCN,
    slidesuizhCN,
    threadcommentuizhCN,
    uizhCN,
    uniformulauizhCN,
    uniscriptzhCN
);
export const zhTW = Tools.deepMerge(
    {},
    actionrecorderzhTW,
    debuggerzhTW,
    designzhTW,
    docsdrawinguizhTW,
    docshyperlinkuizhTW,
    docsquickinsertuizhTW,
    docsuizhTW,
    drawinguizhTW,
    findreplacezhTW,
    sheetszhTW,
    sheetsconditionalformattinguizhTW,
    sheetscrosshairhighlightzhTW,
    sheetsdatavalidationuizhTW,
    sheetsdrawinguizhTW,
    sheetsfilteruizhTW,
    sheetsfindreplacezhTW,
    sheetsformulazhTW,
    sheetsformulauizhTW,
    sheetshyperlinkuizhTW,
    sheetsnumfmtuizhTW,
    sheetssortzhTW,
    sheetssortuizhTW,
    sheetsthreadcommentuizhTW,
    sheetsuizhTW,
    sheetszeneditorzhTW,
    slidesuizhTW,
    threadcommentuizhTW,
    uizhTW,
    uniformulauizhTW,
    uniscriptzhTW
);
export const viVN = Tools.deepMerge(
    {},
    actionrecorderviVN,
    debuggerviVN,
    designviVN,
    docsdrawinguiviVN,
    docshyperlinkuiviVN,
    docsquickinsertuiviVN,
    docsuiviVN,
    drawinguiviVN,
    findreplaceviVN,
    sheetsviVN,
    sheetsconditionalformattinguiviVN,
    sheetscrosshairhighlightviVN,
    sheetsdatavalidationuiviVN,
    sheetsdrawinguiviVN,
    sheetsfilteruiviVN,
    sheetsfindreplaceviVN,
    sheetsformulaviVN,
    sheetsformulauiviVN,
    sheetshyperlinkuiviVN,
    sheetsnumfmtuiviVN,
    sheetssortviVN,
    sheetssortuiviVN,
    sheetsthreadcommentuiviVN,
    sheetsuiviVN,
    sheetszeneditorviVN,
    slidesuiviVN,
    threadcommentuiviVN,
    uiviVN,
    uniformulauiviVN,
    uniscriptviVN
);
export const faIR = Tools.deepMerge(
    {},
    actionrecorderfaIR,
    debuggerfaIR,
    designfaIR,
    docsdrawinguifaIR,
    docshyperlinkuifaIR,
    docsquickinsertuifaIR,
    docsuifaIR,
    drawinguifaIR,
    findreplacefaIR,
    sheetsfaIR,
    sheetsconditionalformattinguifaIR,
    sheetscrosshairhighlightfaIR,
    sheetsdatavalidationuifaIR,
    sheetsdrawinguifaIR,
    sheetsfilteruifaIR,
    sheetsfindreplacefaIR,
    sheetsformulafaIR,
    sheetsformulauifaIR,
    sheetshyperlinkuifaIR,
    sheetsnumfmtuifaIR,
    sheetssortfaIR,
    sheetssortuifaIR,
    sheetsthreadcommentuifaIR,
    sheetsuifaIR,
    sheetszeneditorfaIR,
    slidesuifaIR,
    threadcommentuifaIR,
    uifaIR,
    uniformulauifaIR,
    uniscriptfaIR
);
