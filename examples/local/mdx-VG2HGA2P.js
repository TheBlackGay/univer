import {
  editor_api_exports
} from "./chunk-L7PSIZPJ.js";
import "./chunk-NSSCU2QI.js";

// ../node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/basic-languages/mdx/mdx.js
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var monaco_editor_core_exports = {};
__reExport(monaco_editor_core_exports, editor_api_exports);
var conf = {
  comments: {
    blockComment: ["{/*", "*/}"]
  },
  brackets: [["{", "}"]],
  autoClosingPairs: [
    { open: '"', close: '"' },
    { open: "'", close: "'" },
    { open: "\u201C", close: "\u201D" },
    { open: "\u2018", close: "\u2019" },
    { open: "`", close: "`" },
    { open: "{", close: "}" },
    { open: "(", close: ")" },
    { open: "_", close: "_" },
    { open: "**", close: "**" },
    { open: "<", close: ">" }
  ],
  onEnterRules: [
    {
      beforeText: /^\s*- .+/,
      action: { indentAction: monaco_editor_core_exports.languages.IndentAction.None, appendText: "- " }
    },
    {
      beforeText: /^\s*\+ .+/,
      action: { indentAction: monaco_editor_core_exports.languages.IndentAction.None, appendText: "+ " }
    },
    {
      beforeText: /^\s*\* .+/,
      action: { indentAction: monaco_editor_core_exports.languages.IndentAction.None, appendText: "* " }
    },
    {
      beforeText: /^> /,
      action: { indentAction: monaco_editor_core_exports.languages.IndentAction.None, appendText: "> " }
    },
    {
      beforeText: /<\w+/,
      action: { indentAction: monaco_editor_core_exports.languages.IndentAction.Indent }
    },
    {
      beforeText: /\s+>\s*$/,
      action: { indentAction: monaco_editor_core_exports.languages.IndentAction.Indent }
    },
    {
      beforeText: /<\/\w+>/,
      action: { indentAction: monaco_editor_core_exports.languages.IndentAction.Outdent }
    },
    ...Array.from({ length: 100 }, (_, index) => ({
      beforeText: new RegExp(`^${index}\\. .+`),
      action: { indentAction: monaco_editor_core_exports.languages.IndentAction.None, appendText: `${index + 1}. ` }
    }))
  ]
};
var language = {
  defaultToken: "",
  tokenPostfix: ".mdx",
  control: /[!#()*+.[\\\]_`{}\-]/,
  escapes: /\\@control/,
  tokenizer: {
    root: [
      [/^---$/, { token: "meta.content", next: "@frontmatter", nextEmbedded: "yaml" }],
      [/^\s*import/, { token: "keyword", next: "@import", nextEmbedded: "js" }],
      [/^\s*export/, { token: "keyword", next: "@export", nextEmbedded: "js" }],
      [/<\w+/, { token: "type.identifier", next: "@jsx" }],
      [/<\/?\w+>/, "type.identifier"],
      [
        /^(\s*)(>*\s*)(#{1,6}\s)/,
        [{ token: "white" }, { token: "comment" }, { token: "keyword", next: "@header" }]
      ],
      [/^(\s*)(>*\s*)([*+-])(\s+)/, ["white", "comment", "keyword", "white"]],
      [/^(\s*)(>*\s*)(\d{1,9}\.)(\s+)/, ["white", "comment", "number", "white"]],
      [/^(\s*)(>*\s*)(\d{1,9}\.)(\s+)/, ["white", "comment", "number", "white"]],
      [/^(\s*)(>*\s*)(-{3,}|\*{3,}|_{3,})$/, ["white", "comment", "keyword"]],
      [/`{3,}(\s.*)?$/, { token: "string", next: "@codeblock_backtick" }],
      [/~{3,}(\s.*)?$/, { token: "string", next: "@codeblock_tilde" }],
      [
        /`{3,}(\S+).*$/,
        { token: "string", next: "@codeblock_highlight_backtick", nextEmbedded: "$1" }
      ],
      [
        /~{3,}(\S+).*$/,
        { token: "string", next: "@codeblock_highlight_tilde", nextEmbedded: "$1" }
      ],
      [/^(\s*)(-{4,})$/, ["white", "comment"]],
      [/^(\s*)(>+)/, ["white", "comment"]],
      { include: "content" }
    ],
    content: [
      [
        /(\[)(.+)(]\()(.+)(\s+".*")(\))/,
        ["", "string.link", "", "type.identifier", "string.link", ""]
      ],
      [/(\[)(.+)(]\()(.+)(\))/, ["", "type.identifier", "", "string.link", ""]],
      [/(\[)(.+)(]\[)(.+)(])/, ["", "type.identifier", "", "type.identifier", ""]],
      [/(\[)(.+)(]:\s+)(\S*)/, ["", "type.identifier", "", "string.link"]],
      [/(\[)(.+)(])/, ["", "type.identifier", ""]],
      [/`.*`/, "variable.source"],
      [/_/, { token: "emphasis", next: "@emphasis_underscore" }],
      [/\*(?!\*)/, { token: "emphasis", next: "@emphasis_asterisk" }],
      [/\*\*/, { token: "strong", next: "@strong" }],
      [/{/, { token: "delimiter.bracket", next: "@expression", nextEmbedded: "js" }]
    ],
    import: [[/'\s*(;|$)/, { token: "string", next: "@pop", nextEmbedded: "@pop" }]],
    expression: [
      [/{/, { token: "delimiter.bracket", next: "@expression" }],
      [/}/, { token: "delimiter.bracket", next: "@pop", nextEmbedded: "@pop" }]
    ],
    export: [[/^\s*$/, { token: "delimiter.bracket", next: "@pop", nextEmbedded: "@pop" }]],
    jsx: [
      [/\s+/, ""],
      [/(\w+)(=)("(?:[^"\\]|\\.)*")/, ["attribute.name", "operator", "string"]],
      [/(\w+)(=)('(?:[^'\\]|\\.)*')/, ["attribute.name", "operator", "string"]],
      [/(\w+(?=\s|>|={|$))/, ["attribute.name"]],
      [/={/, { token: "delimiter.bracket", next: "@expression", nextEmbedded: "js" }],
      [/>/, { token: "type.identifier", next: "@pop" }]
    ],
    header: [
      [/.$/, { token: "keyword", next: "@pop" }],
      { include: "content" },
      [/./, { token: "keyword" }]
    ],
    strong: [
      [/\*\*/, { token: "strong", next: "@pop" }],
      { include: "content" },
      [/./, { token: "strong" }]
    ],
    emphasis_underscore: [
      [/_/, { token: "emphasis", next: "@pop" }],
      { include: "content" },
      [/./, { token: "emphasis" }]
    ],
    emphasis_asterisk: [
      [/\*(?!\*)/, { token: "emphasis", next: "@pop" }],
      { include: "content" },
      [/./, { token: "emphasis" }]
    ],
    frontmatter: [[/^---$/, { token: "meta.content", nextEmbedded: "@pop", next: "@pop" }]],
    codeblock_highlight_backtick: [
      [/\s*`{3,}\s*$/, { token: "string", next: "@pop", nextEmbedded: "@pop" }],
      [/.*$/, "variable.source"]
    ],
    codeblock_highlight_tilde: [
      [/\s*~{3,}\s*$/, { token: "string", next: "@pop", nextEmbedded: "@pop" }],
      [/.*$/, "variable.source"]
    ],
    codeblock_backtick: [
      [/\s*`{3,}\s*$/, { token: "string", next: "@pop" }],
      [/.*$/, "variable.source"]
    ],
    codeblock_tilde: [
      [/\s*~{3,}\s*$/, { token: "string", next: "@pop" }],
      [/.*$/, "variable.source"]
    ]
  }
};
export {
  conf,
  language
};
/*! Bundled license information:

monaco-editor/esm/vs/basic-languages/mdx/mdx.js:
  (*!-----------------------------------------------------------------------------
   * Copyright (c) Microsoft Corporation. All rights reserved.
   * Version: 0.52.2(404545bded1df6ffa41ea0af4e8ddb219018c6c1)
   * Released under the MIT license
   * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
   *-----------------------------------------------------------------------------*)
*/
//# sourceMappingURL=mdx-VG2HGA2P.js.map
