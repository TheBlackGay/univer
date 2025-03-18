import "./chunk-222VPS6G.js";
import {
  render,
  require_jsx_runtime
} from "./chunk-22LKBS37.js";
import "./chunk-WKXT4HLI.js";
import "./chunk-TI7IKOEF.js";
import {
  __toESM
} from "./chunk-NSSCU2QI.js";

// ../package.json
var package_default = {
  name: "univer",
  type: "module",
  version: "0.6.6",
  private: true,
  packageManager: "pnpm@10.6.1",
  author: "DreamNum Co., Ltd. <developer@univer.ai>",
  license: "Apache-2.0",
  funding: {
    type: "opencollective",
    url: "https://opencollective.com/univer"
  },
  homepage: "https://univer.ai",
  repository: {
    type: "git",
    url: "https://github.com/dream-num/univer"
  },
  bugs: {
    url: "https://github.com/dream-num/univer/issues"
  },
  engines: {
    node: ">=20 || <=22",
    pnpm: ">=10"
  },
  scripts: {
    prepare: "husky",
    "pre-commit": "lint-staged",
    dev: "turbo dev:demo  -- --host 0.0.0.0",
    "dev:libs": "pnpm --filter univer-examples dev:demo-libs",
    "dev:e2e": "pnpm --filter univer-examples dev:e2e",
    "use:react16": "tsx ./scripts/react-version-manager.ts --react=16",
    "use:react19": "tsx ./scripts/react-version-manager.ts --react=19",
    "lint:types": "turbo lint:types",
    test: "turbo test -- --passWithNoTests",
    coverage: "turbo coverage -- --passWithNoTests",
    build: "turbo build --concurrency=30% --filter=!./common/*",
    "build:ci": "turbo build --concurrency=100% --filter=!./common/*",
    "build:demo": "pnpm --filter univer-examples build:demo",
    "build:e2e": "pnpm --filter univer-examples build:e2e",
    "serve:e2e": "serve ./examples/local",
    "test:e2e": "playwright test",
    lint: "eslint .",
    "lint:fix": "eslint . --fix",
    "storybook:dev": "pnpm --filter @univerjs/storybook dev:storybook",
    "storybook:build": "pnpm --filter @univerjs/storybook build:storybook",
    release: "release-it"
  },
  devDependencies: {
    "@antfu/eslint-config": "4.10.0",
    "@commitlint/cli": "^19.8.0",
    "@commitlint/config-conventional": "^19.8.0",
    "@eslint-react/eslint-plugin": "^1.32.0",
    "@playwright/test": "^1.51.0",
    "@release-it-plugins/workspaces": "^4.2.0",
    "@release-it/conventional-changelog": "^9.0.4",
    "@storybook/react": "8.6.4",
    "@types/fs-extra": "^11.0.4",
    "@types/node": "^22.13.10",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@univerjs-infra/shared": "workspace:*",
    "@univerjs/design": "workspace:*",
    "@vitejs/plugin-react": "^4.3.4",
    eslint: "9.22.0",
    "eslint-plugin-format": "^1.0.1",
    "eslint-plugin-header": "^3.1.1",
    "eslint-plugin-jsdoc": "^50.6.6",
    "eslint-plugin-no-barrel-import": "^0.0.2",
    "eslint-plugin-no-penetrating-import": "^0.0.1",
    "eslint-plugin-react": "^7.37.4",
    "eslint-plugin-react-hooks": "5.2.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "fs-extra": "^11.3.0",
    husky: "^9.1.7",
    "lint-staged": "^15.4.3",
    "posthog-node": "^4.10.1",
    react: "19.0.0",
    "react-dom": "19.0.0",
    "release-it": "^17.11.0",
    serve: "^14.2.4",
    tsx: "^4.19.3",
    turbo: "^2.4.4",
    typescript: "^5.8.2",
    vitest: "^3.0.8"
  },
  pnpm: {
    onlyBuiltDependencies: [
      "esbuild"
    ]
  },
  resolutions: {
    "@types/react": "19",
    "@types/react-dom": "19",
    react: "19",
    "react-dom": "19"
  },
  "lint-staged": {
    "*": "eslint --fix"
  }
};

// src/main.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
if (false) {
  console.table({
    // eslint-disable-next-line node/prefer-global/process
    NODE_ENV: "development",
    // eslint-disable-next-line node/prefer-global/process
    GIT_COMMIT_HASH: process.env.GIT_COMMIT_HASH,
    // eslint-disable-next-line node/prefer-global/process
    GIT_REF_NAME: process.env.GIT_REF_NAME,
    // eslint-disable-next-line node/prefer-global/process
    BUILD_TIME: process.env.BUILD_TIME
  });
}
function Examples() {
  const demos = [{
    title: "\u{1F4CA} Sheets",
    href: "./sheets/"
  }, {
    title: "\u{1F4DD} Docs",
    href: "./docs/"
  }, {
    title: "\u{1F4FD}\uFE0F Slides",
    href: "./slides/"
  }, {
    title: "\u{1F5C2}\uFE0F Sheets Multi Instance",
    href: "./sheets-multi/"
  }, {
    title: "\u{1F3E1} Sheets Multi Units",
    href: "./sheets-multi-units/"
  }, {
    title: "\u{1F4C4} Sheets Uniscript",
    href: "./sheets-uniscript/"
  }, {
    title: "\u{1F4DA} Docs Uniscript",
    href: "./docs-uniscript/"
  }, {
    title: "\u{1F30C} Uni Mode",
    href: "./uni/"
  }, {
    title: "\u{1F4F1} Mobile",
    href: "./mobile-s/"
  }];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "section",
    {
      className: "univer-flex univer-h-full univer-flex-col univer-items-center univer-justify-center univer-gap-6",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { className: "univer-flex univer-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { className: "univer-w-24", src: "/favicon.svg", alt: "Univer", draggable: false }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { className: "univer-text-slate-700", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "span",
              {
                className: `
                          univer-bg-[linear-gradient(121deg,#0048ff_18.89%,#0c81ed_39.58%,#029dce_59.87%,#00bbb0_74.37%,#00c5a8_79.64%)]
                          univer-bg-clip-text univer-text-4xl univer-text-transparent
                        `,
                children: "Univer"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "sup",
              {
                className: `
                          univer-relative -univer-top-1 univer-left-2 univer-rounded-xl univer-border
                          univer-border-solid univer-border-current univer-px-2 univer-py-0.5 univer-text-xs
                        `,
                children: package_default.version
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { className: "univer-flex univer-flex-wrap univer-justify-center univer-gap-6", children: demos.map((demo) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "a",
          {
            className: `
                          univer-rounded-lg univer-bg-blue-500 univer-px-6 univer-py-2.5 univer-font-medium
                          univer-text-white univer-no-underline univer-shadow-sm univer-transition-all
                          univer-duration-300 univer-ease-in-out
                          hover:univer-scale-105 hover:univer-bg-emerald-500
                        `,
            href: demo.href,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: demo.title })
          },
          demo.title
        )) })
      ]
    }
  );
}
render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Examples, {}), document.getElementById("app"));
//# sourceMappingURL=main.js.map
