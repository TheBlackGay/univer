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
  GlobalRangeSelectorService,
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
  UniverDebuggerPlugin
} from "../chunk-6RL4G227.js";
import "../chunk-OZCZVRL3.js";
import {
  UniverDocsDrawingUIPlugin
} from "../chunk-IEN5A4MA.js";
import "../chunk-6KKG4LFT.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-R36TW3RS.js";
import {
  FBase,
  FUniver
} from "../chunk-IM7MDYQK.js";
import {
  UniverSheetsDataValidationPlugin
} from "../chunk-PJAWFGFR.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-NW7E7FBW.js";
import {
  ComponentManager,
  IMenuManagerService,
  UniverDocsPlugin,
  UniverDocsUIPlugin,
  UniverRenderEnginePlugin,
  UniverUIPlugin
} from "../chunk-DOZPYWOG.js";
import "../chunk-OJWCZZ56.js";
import "../chunk-222VPS6G.js";
import {
  Button,
  default_module_default,
  require_jsx_runtime,
  require_react,
  require_react_dom
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
  Disposable,
  DisposableCollection,
  ICommandService,
  ILogService,
  Inject,
  Injector,
  LocaleService,
  LookUp,
  O,
  Observable,
  Plugin,
  Quantity,
  Univer,
  UniverFormulaEnginePlugin,
  UniverRPCMainThreadPlugin,
  UniverSheetsPlugin,
  UserManagerService,
  concatMap,
  createIdentifier,
  firstValueFrom,
  mergeOverrideWithDependencies,
  of,
  registerDependencies,
  remove,
  share,
  toDisposable,
  touchDependencies
} from "../chunk-33NDYU5R.js";
import "../chunk-WKXT4HLI.js";
import "../chunk-TI7IKOEF.js";
import {
  __decorateClass,
  __decorateParam,
  __publicField,
  __toESM
} from "../chunk-NSSCU2QI.js";

// ../packages/network/src/services/http/headers.ts
var ApplicationJSONType = "application/json";
var HTTPHeaders = class {
  constructor(headers) {
    __publicField(this, "_headers", /* @__PURE__ */ new Map());
    if (typeof headers === "string") {
      this._handleHeadersString(headers);
    } else if (headers instanceof Headers) {
      this._handleHeaders(headers);
    } else if (headers) {
      this._handleHeadersConstructorProps(headers);
    }
  }
  forEach(callback) {
    this._headers.forEach((v, key) => callback(key, v));
  }
  has(key) {
    return !!this._headers.has(key.toLowerCase());
  }
  get(key) {
    const k = key.toLowerCase();
    return this._headers.has(k) ? this._headers.get(k) : null;
  }
  set(key, value) {
    this._setHeader(key, value);
  }
  toHeadersInit() {
    var _a, _b;
    const headers = {};
    this._headers.forEach((values, key) => {
      headers[key] = values.join(",");
    });
    (_a = headers.accept) != null ? _a : headers.accept = "application/json, text/plain, */*";
    (_b = headers["content-type"]) != null ? _b : headers["content-type"] = "application/json;charset=UTF-8";
    return headers;
  }
  _setHeader(name, value) {
    const lowerCase = name.toLowerCase();
    if (this._headers.has(lowerCase)) {
      this._headers.get(lowerCase).push(value.toString());
    } else {
      this._headers.set(lowerCase, [value.toString()]);
    }
  }
  _handleHeadersString(headers) {
    headers.split("\n").forEach((header) => {
      const [name, value] = header.split(":");
      if (name && value) {
        this._setHeader(name, value);
      }
    });
  }
  _handleHeadersConstructorProps(headers) {
    Object.entries(headers).forEach(([name, value]) => this._setHeader(name, value));
  }
  _handleHeaders(headers) {
    headers.forEach((value, name) => this._setHeader(name, value));
  }
};

// ../packages/network/src/services/http/implementations/implementation.ts
var IHTTPImplementation = createIdentifier("network.http-implementation");

// ../packages/network/src/services/http/params.ts
var HTTPParams = class {
  constructor(params) {
    this.params = params;
  }
  toString() {
    if (!this.params) {
      return "";
    }
    return Object.keys(this.params).map((key) => {
      const value = this.params[key];
      if (Array.isArray(value)) {
        return value.map((v) => `${key}=${v}`).join("&");
      }
      return `${key}=${value}`;
    }).join("&");
  }
};

// ../packages/network/src/services/http/request.ts
var HTTPRequestUID = 0;
var HTTPRequest = class {
  constructor(method, url, requestParams) {
    this.method = method;
    this.url = url;
    this.requestParams = requestParams;
    __publicField(this, "uid", HTTPRequestUID++);
  }
  get headers() {
    return this.requestParams.headers;
  }
  get withCredentials() {
    return this.requestParams.withCredentials;
  }
  get responseType() {
    return this.requestParams.responseType;
  }
  getUrlWithParams() {
    var _a, _b;
    const params = (_b = (_a = this.requestParams) == null ? void 0 : _a.params) == null ? void 0 : _b.toString();
    if (!params) {
      return this.url;
    }
    return `${this.url}${this.url.includes("?") ? "&" : "?"}${params}`;
  }
  getBody() {
    var _a, _b;
    const contentType = (_a = this.headers.get("Content-Type")) != null ? _a : ApplicationJSONType;
    const body = (_b = this.requestParams) == null ? void 0 : _b.body;
    if (contentType === ApplicationJSONType && body && typeof body === "object") {
      return JSON.stringify(body);
    }
    return body ? `${body}` : null;
  }
  getHeadersInit() {
    const headersInit = this.headers.toHeadersInit();
    return headersInit;
  }
};

// ../packages/network/src/services/http/http.service.ts
var HTTPService = class extends Disposable {
  constructor(_http) {
    super();
    this._http = _http;
    __publicField(this, "_interceptors", []);
    // eslint-disable-next-line ts/no-explicit-any
    __publicField(this, "_pipe");
  }
  /**
   * Register an HTTP interceptor.
   *
   * @param interceptor the http interceptor
   * @returns a disposable handler to remove the interceptor
   */
  registerHTTPInterceptor(interceptor) {
    if (this._interceptors.indexOf(interceptor) !== -1) {
      throw new Error("[HTTPService]: The interceptor has already been registered!");
    }
    this._interceptors.push(interceptor);
    this._interceptors = this._interceptors.sort((a, b) => {
      var _a, _b;
      return ((_a = a.priority) != null ? _a : 0) - ((_b = b.priority) != null ? _b : 0);
    });
    this._pipe = null;
    return toDisposable(() => remove(this._interceptors, interceptor));
  }
  get(url, params) {
    return this._request("GET", url, params);
  }
  post(url, params) {
    return this._request("POST", url, params);
  }
  put(url, params) {
    return this._request("PUT", url, params);
  }
  delete(url, params) {
    return this._request("DELETE", url, params);
  }
  patch(url, params) {
    return this._request("PATCH", url, params);
  }
  getSSE(method, url, _params) {
    var _a, _b;
    const headers = new HTTPHeaders(_params == null ? void 0 : _params.headers);
    const params = new HTTPParams(_params == null ? void 0 : _params.params);
    const request = new HTTPRequest(method, url, {
      headers,
      params,
      withCredentials: (_a = _params == null ? void 0 : _params.withCredentials) != null ? _a : false,
      reportProgress: true,
      responseType: (_b = _params == null ? void 0 : _params.responseType) != null ? _b : "json",
      body: ["GET", "DELETE"].includes(method) ? void 0 : _params == null ? void 0 : _params.body
    });
    return of(request).pipe(concatMap((request2) => this._runInterceptorsAndImplementation(request2)));
  }
  /** The HTTP request implementations */
  async _request(method, url, options) {
    var _a, _b;
    const headers = new HTTPHeaders(options == null ? void 0 : options.headers);
    const params = new HTTPParams(options == null ? void 0 : options.params);
    const request = new HTTPRequest(method, url, {
      headers,
      params,
      withCredentials: (_a = options == null ? void 0 : options.withCredentials) != null ? _a : false,
      // default value for withCredentials is false by MDN
      responseType: (_b = options == null ? void 0 : options.responseType) != null ? _b : "json",
      body: ["GET", "DELETE"].includes(method) ? void 0 : options == null ? void 0 : options.body
    });
    const events$ = of(request).pipe(
      concatMap((request2) => this._runInterceptorsAndImplementation(request2))
    );
    const result = await firstValueFrom(events$);
    return result;
  }
  // eslint-disable-next-line ts/no-explicit-any
  _runInterceptorsAndImplementation(request) {
    if (!this._pipe) {
      this._pipe = this._interceptors.map((handler) => handler.interceptor).reduceRight(
        (nextHandlerFunction, interceptorFunction) => chainInterceptorFn(nextHandlerFunction, interceptorFunction),
        (requestFromPrevInterceptor, finalHandler) => finalHandler(requestFromPrevInterceptor)
      );
    }
    return this._pipe(
      request,
      (requestToNext) => this._http.send(requestToNext)
      /* final handler */
    );
  }
};
HTTPService = __decorateClass([
  __decorateParam(0, IHTTPImplementation)
], HTTPService);
function chainInterceptorFn(afterInterceptorChain, currentInterceptorFn) {
  return (prevRequest, nextHandlerFn) => currentInterceptorFn(prevRequest, (nextRequest) => afterInterceptorChain(nextRequest, nextHandlerFn));
}

// ../packages/network/src/services/http/http.ts
var SuccessStatusCodeLowerBound = 200;
var ErrorStatusCodeLowerBound = 300;

// ../packages/network/src/services/http/response.ts
var HTTPResponse = class {
  constructor({
    body,
    headers,
    status,
    statusText
  }) {
    __publicField(this, "type", 1 /* Response */);
    __publicField(this, "body");
    __publicField(this, "headers");
    __publicField(this, "status");
    __publicField(this, "statusText");
    this.body = body;
    this.headers = headers;
    this.status = status;
    this.statusText = statusText;
  }
};
var HTTPProgress = class {
  constructor(total, loaded, partialText) {
    this.total = total;
    this.loaded = loaded;
    this.partialText = partialText;
    __publicField(this, "type", 0 /* DownloadProgress */);
  }
};
var ResponseHeader = class {
  constructor(headers, status, statusText) {
    this.headers = headers;
    this.status = status;
    this.statusText = statusText;
  }
};
var HTTPResponseError = class {
  constructor({
    request,
    headers,
    status,
    statusText,
    error
  }) {
    __publicField(this, "request");
    __publicField(this, "headers");
    __publicField(this, "status");
    __publicField(this, "statusText");
    __publicField(this, "error");
    this.request = request;
    this.headers = headers;
    this.status = status;
    this.statusText = statusText;
    this.error = error;
  }
};

// ../packages/network/src/services/http/implementations/util.ts
function parseFetchParamsFromRequest(request) {
  const fetchParams = {
    method: request.method,
    headers: request.getHeadersInit(),
    body: request.getBody(),
    credentials: request.withCredentials ? "include" : void 0
  };
  return fetchParams;
}

// ../packages/network/src/services/http/implementations/fetch.ts
var FetchHTTPImplementation = class {
  constructor(_logService) {
    this._logService = _logService;
  }
  send(request) {
    return new Observable((subscriber) => {
      const abortController = new AbortController();
      this._send(request, subscriber, abortController).catch((error) => {
        subscriber.error(new HTTPResponseError({
          error,
          request
        }));
      });
      return () => abortController.abort();
    });
  }
  async _send(request, subscriber, abortController) {
    var _a, _b;
    let response;
    try {
      const fetchParams = parseFetchParamsFromRequest(request);
      const urlWithParams = request.getUrlWithParams();
      const fetchPromise = fetch(urlWithParams, {
        signal: abortController.signal,
        ...fetchParams
      });
      this._logService.debug(`[FetchHTTPImplementation]: sending request to url ${urlWithParams} with params ${fetchParams}`);
      response = await fetchPromise;
    } catch (error) {
      const e = new HTTPResponseError({
        request,
        error,
        status: (_a = error.status) != null ? _a : 0,
        statusText: (_b = error.statusText) != null ? _b : "Unknown Error",
        headers: error.headers
      });
      this._logService.error("[FetchHTTPImplementation]: network error", e);
      subscriber.error(e);
      return;
    }
    const responseHeaders = new HTTPHeaders(response.headers);
    const status = response.status;
    const statusText = response.statusText;
    let body = null;
    if (response.body) {
      body = await this._readBody(request, response, subscriber);
    }
    const ok = status >= 200 /* Ok */ && status < 300 /* MultipleChoices */;
    if (ok) {
      subscriber.next(new HTTPResponse({
        body,
        headers: responseHeaders,
        status,
        statusText
      }));
    } else {
      const e = new HTTPResponseError({
        request,
        error: body,
        status,
        statusText,
        headers: responseHeaders
      });
      this._logService.error("[FetchHTTPImplementation]: network error", e);
      subscriber.error(e);
    }
    subscriber.complete();
  }
  async _readBody(request, response, subscriber) {
    var _a, _b;
    const chunks = [];
    const reader = response.body.getReader();
    const contentLength = response.headers.get("content-length");
    let receivedLength = 0;
    const reportProgress = (_a = request.requestParams) == null ? void 0 : _a.reportProgress;
    const responseType = request.responseType;
    let partialText;
    let decoder;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
      receivedLength += value.length;
      if (reportProgress && responseType === "text") {
        partialText = (partialText != null ? partialText : "") + (decoder != null ? decoder : decoder = new TextDecoder()).decode(value, { stream: true });
        subscriber.next(new HTTPProgress(
          contentLength ? Number.parseInt(contentLength, 10) : void 0,
          receivedLength,
          partialText
        ));
      }
    }
    const all = mergeChunks(chunks, receivedLength);
    try {
      const contentType = (_b = response.headers.get("content-type")) != null ? _b : "";
      const body = deserialize(request, all, contentType);
      return body;
    } catch (error) {
      const e = new HTTPResponseError({
        request,
        error,
        status: response.status,
        statusText: response.statusText,
        headers: new HTTPHeaders(response.headers)
      });
      this._logService.error("[FetchHTTPImplementation]: network error", e);
      subscriber.error(e);
      return null;
    }
  }
};
FetchHTTPImplementation = __decorateClass([
  __decorateParam(0, ILogService)
], FetchHTTPImplementation);
function mergeChunks(chunks, totalLength) {
  const all = new Uint8Array(totalLength);
  let position = 0;
  for (const chunk of chunks) {
    all.set(chunk, position);
    position += chunk.length;
  }
  return all;
}
var XSSI_PREFIX = /^\)\]\}',?\n/;
function deserialize(request, bin, contentType) {
  switch (request.responseType) {
    case "json":
      const text = new TextDecoder().decode(bin).replace(XSSI_PREFIX, "");
      return text === "" ? null : JSON.parse(text);
    case "text":
      return new TextDecoder().decode(bin);
    case "blob":
      return new Blob([bin], { type: contentType });
    case "arraybuffer":
      return bin.buffer;
    default:
      throw new Error(`[FetchHTTPImplementation]: unknown response type: ${request.responseType}.`);
  }
}

// ../packages/network/src/services/http/implementations/xhr.ts
var XHRHTTPImplementation = class {
  constructor(_logService) {
    this._logService = _logService;
  }
  send(request) {
    return new Observable((observer) => {
      const xhr = new XMLHttpRequest();
      const urlWithParams = request.getUrlWithParams();
      const fetchParams = parseFetchParamsFromRequest(request);
      xhr.open(request.method, urlWithParams);
      if (request.withCredentials) {
        xhr.withCredentials = true;
      }
      if (fetchParams.headers) {
        Object.entries(fetchParams.headers).forEach(([key, value]) => xhr.setRequestHeader(key, value));
      }
      let responseHeader;
      const buildResponseHeader = () => {
        if (responseHeader) {
          return responseHeader;
        }
        const statusText = xhr.statusText || "OK";
        const headers = new HTTPHeaders(xhr.getAllResponseHeaders());
        return new ResponseHeader(headers, xhr.status, statusText);
      };
      const onLoadHandler = () => {
        const { headers, statusText, status } = buildResponseHeader();
        const { responseType } = request;
        let body2 = null;
        let error = null;
        if (status !== 204 /* NoContent */) {
          body2 = typeof xhr.response === "undefined" ? xhr.responseText : xhr.response;
        }
        let success = status >= SuccessStatusCodeLowerBound && status < ErrorStatusCodeLowerBound;
        if (responseType === "json" && typeof body2 === "string") {
          const originalBody = body2;
          try {
            body2 = body2 ? JSON.parse(body2) : null;
          } catch (e) {
            success = false;
            body2 = originalBody;
            error = e;
          }
        }
        if (success) {
          observer.next(
            new HTTPResponse({
              body: body2,
              headers,
              status,
              statusText
            })
          );
        } else {
          const e = new HTTPResponseError({
            request,
            error,
            headers,
            status,
            statusText
          });
          this._logService.error("[XHRHTTPImplementation]: network error", e);
          observer.error(e);
        }
      };
      const onErrorHandler = (error) => {
        const e = new HTTPResponseError({
          request,
          error,
          status: xhr.status || 0,
          statusText: xhr.statusText || "Unknown Error",
          headers: buildResponseHeader().headers
        });
        this._logService.error("[XHRHTTPImplementation]: network error", e);
        observer.error(e);
      };
      xhr.addEventListener("load", onLoadHandler);
      xhr.addEventListener("error", onErrorHandler);
      xhr.addEventListener("abort", onErrorHandler);
      xhr.addEventListener("timeout", onErrorHandler);
      const body = request.getBody();
      xhr.send(body);
      this._logService.debug("[XHRHTTPImplementation]", `sending request to url ${urlWithParams} with params ${fetchParams}`);
      return () => {
        if (xhr.readyState !== xhr.DONE) {
          xhr.abort();
        }
        xhr.removeEventListener("load", onLoadHandler);
        xhr.removeEventListener("error", onErrorHandler);
        xhr.removeEventListener("abort", onErrorHandler);
        xhr.removeEventListener("timeout", onErrorHandler);
      };
    });
  }
};
XHRHTTPImplementation = __decorateClass([
  __decorateParam(0, ILogService)
], XHRHTTPImplementation);

// ../packages/network/src/plugin.ts
var UniverNetworkPlugin = class extends Plugin {
  constructor(_config = void 0, _logger, _injector) {
    super();
    this._config = _config;
    this._logger = _logger;
    this._injector = _injector;
  }
  onStarting() {
    var _a, _b, _c;
    const parent = this._injector.get(HTTPService, Quantity.OPTIONAL, LookUp.SKIP_SELF);
    if (parent && !((_a = this._config) == null ? void 0 : _a.forceUseNewInstance)) {
      this._logger.warn(
        "[UniverNetworkPlugin]",
        'HTTPService is already registered in an ancestor interceptor. Skipping registration. If you want to force a new instance, set "forceUseNewInstance" to true in the plugin configuration.'
      );
      return;
    }
    const impl = ((_b = this._config) == null ? void 0 : _b.useFetchImpl) ? FetchHTTPImplementation : typeof window !== "undefined" ? XHRHTTPImplementation : FetchHTTPImplementation;
    registerDependencies(this._injector, mergeOverrideWithDependencies([
      [HTTPService],
      [IHTTPImplementation, { useClass: impl }]
    ], (_c = this._config) == null ? void 0 : _c.override));
  }
};
__publicField(UniverNetworkPlugin, "pluginName", "UNIVER_NETWORK_PLUGIN");
UniverNetworkPlugin = __decorateClass([
  __decorateParam(1, ILogService),
  __decorateParam(2, Inject(Injector))
], UniverNetworkPlugin);

// ../packages/network/src/services/web-socket/web-socket.service.ts
var ISocketService = createIdentifier("univer.network.socket.service");
var WebSocketService = class extends Disposable {
  createSocket(URL2) {
    try {
      const connection = new WebSocket(URL2);
      const disposables = new DisposableCollection();
      const webSocket = {
        URL: URL2,
        close: (code, reason) => {
          connection.close(code, reason);
          disposables.dispose();
        },
        send: (data) => {
          connection.send(data);
        },
        open$: new Observable((subscriber) => {
          const callback = (event) => subscriber.next(event);
          connection.addEventListener("open", callback);
          disposables.add(toDisposable(() => connection.removeEventListener("open", callback)));
        }).pipe(share()),
        close$: new Observable((subscriber) => {
          const callback = (event) => subscriber.next(event);
          connection.addEventListener("close", callback);
          disposables.add(toDisposable(() => connection.removeEventListener("close", callback)));
        }).pipe(share()),
        error$: new Observable((subscriber) => {
          const callback = (event) => subscriber.next(event);
          connection.addEventListener("error", callback);
          disposables.add(toDisposable(() => connection.removeEventListener("error", callback)));
        }).pipe(share()),
        message$: new Observable((subscriber) => {
          const callback = (event) => subscriber.next(event);
          connection.addEventListener("message", callback);
          disposables.add(toDisposable(() => connection.removeEventListener("message", callback)));
        }).pipe(share())
      };
      return webSocket;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
};

// src/sheets/button.tsx
var import_react = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());

// ../node_modules/.pnpm/@univerjs+icons@0.2.20_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@univerjs/icons/esm/icon.js
var import_react2 = __toESM(require_react());
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var IconBase = (0, import_react2.forwardRef)(function(props, ref) {
  var icon = props.icon, id = props.id, className = props.className, extend = props.extend, restProps = __rest(props, ["icon", "id", "className", "extend"]);
  var cls = "univerjs-icon univerjs-icon-".concat(id, " ").concat(className || "").trim();
  var idSuffix = (0, import_react2.useRef)("_".concat(generateShortUuid()));
  return render(icon, "".concat(id), { defIds: icon.defIds, idSuffix: idSuffix.current }, __assign({ ref, className: cls }, restProps), extend);
});
function render(node, id, runtimeProps, rootProps, extend) {
  return (0, import_react2.createElement)(node.tag, __assign(__assign({ key: id }, replaceRuntimeIdsAndExtInAttrs(node, runtimeProps, extend)), rootProps), (replaceRuntimeIdsInDefs(node, runtimeProps).children || []).map(function(child, index) {
    return render(child, "".concat(id, "-").concat(node.tag, "-").concat(index), runtimeProps, void 0, extend);
  }));
}
function replaceRuntimeIdsAndExtInAttrs(node, runtimeProps, extend) {
  var attrs = __assign({}, node.attrs);
  if ((extend === null || extend === void 0 ? void 0 : extend.colorChannel1) && attrs["fill"] === "colorChannel1") {
    attrs["fill"] = extend.colorChannel1;
  }
  if (node.tag === "mask" && attrs["id"]) {
    attrs["id"] = attrs["id"] + runtimeProps.idSuffix;
  }
  Object.entries(attrs).forEach(function(_a) {
    var key = _a[0], value = _a[1];
    if (key === "mask" && typeof value === "string") {
      attrs[key] = value.replace(/url\(#(.*)\)/, "url(#$1".concat(runtimeProps.idSuffix, ")"));
    }
  });
  var defIds = runtimeProps.defIds;
  if (!defIds || defIds.length === 0) {
    return attrs;
  }
  if (node.tag === "use" && attrs["xlink:href"]) {
    attrs["xlink:href"] = attrs["xlink:href"] + runtimeProps.idSuffix;
  }
  Object.entries(attrs).forEach(function(_a) {
    var key = _a[0], value = _a[1];
    if (typeof value === "string") {
      attrs[key] = value.replace(/url\(#(.*)\)/, "url(#$1".concat(runtimeProps.idSuffix, ")"));
    }
  });
  return attrs;
}
function replaceRuntimeIdsInDefs(node, runtimeProps) {
  var _a;
  var defIds = runtimeProps.defIds;
  if (!defIds || defIds.length === 0) {
    return node;
  }
  if (node.tag === "defs" && ((_a = node.children) === null || _a === void 0 ? void 0 : _a.length)) {
    return __assign(__assign({}, node), { children: node.children.map(function(child) {
      if (typeof child.attrs.id === "string") {
        if (defIds && defIds.indexOf(child.attrs.id) > -1) {
          return __assign(__assign({}, child), { attrs: __assign(__assign({}, child.attrs), { id: child.attrs.id + runtimeProps.idSuffix }) });
        }
      }
      return child;
    }) });
  }
  return node;
}
function generateShortUuid() {
  return Math.random().toString(36).substring(2, 8);
}
IconBase.displayName = "UniverIcon";

// ../node_modules/.pnpm/@univerjs+icons@0.2.20_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@univerjs/icons/esm/components/ai-single.js
var import_react3 = __toESM(require_react());
var element = { "tag": "svg", "attrs": { "fill": "none", "viewBox": "0 0 16 16", "width": "1em", "height": "1em" }, "children": [{ "tag": "path", "attrs": { "fill": "currentColor", "d": "M4.07253 15.1998C3.71104 15.1998 3.41799 14.9068 3.41799 14.5453 3.41799 14.1838 3.71104 13.8907 4.07253 13.8907 4.43403 13.8907 4.72708 14.1838 4.72708 14.5453 4.72708 14.9068 4.43403 15.1998 4.07253 15.1998zM11.9271 2.1089C11.5656 2.1089 11.2725 1.81585 11.2725 1.45435 11.2725 1.09285 11.5656.799805 11.9271.799805 12.2886.799805 12.5816 1.09285 12.5816 1.45435 12.5816 1.81585 12.2886 2.1089 11.9271 2.1089zM14.5453 4.72708C14.1838 4.72708 13.8907 4.43403 13.8907 4.07253 13.8907 3.71104 14.1838 3.41799 14.5453 3.41799 14.9068 3.41799 15.1998 3.71104 15.1998 4.07253 15.1998 4.43403 14.9068 4.72708 14.5453 4.72708zM7.14546 3.43537C7.36271 2.53946 8.6369 2.53946 8.85414 3.43537L9.45191 5.90053C9.52947 6.22039 9.77921 6.47014 10.0991 6.5477L12.5642 7.14546C13.4601 7.36271 13.4601 8.6369 12.5642 8.85414L10.0991 9.45191C9.77921 9.52947 9.52947 9.77921 9.45191 10.0991L8.85414 12.5642C8.6369 13.4601 7.36271 13.4601 7.14546 12.5642L6.5477 10.0991C6.47014 9.77921 6.22039 9.52947 5.90053 9.45191L3.43537 8.85414C2.53946 8.6369 2.53946 7.36271 3.43537 7.14546L5.90053 6.5477C6.22039 6.47014 6.47014 6.22039 6.5477 5.90053L7.14546 3.43537z" } }, { "tag": "path", "attrs": { "fill": "currentColor", "d": "M14.7512 9.96039C15.0561 10.0742 15.2109 10.4135 15.0972 10.7183 14.3602 12.6927 12.8304 14.2786 10.8948 15.0887 10.5946 15.2143 10.2495 15.0728 10.1239 14.7727 9.99832 14.4726 10.1398 14.1274 10.4399 14.0018 12.076 13.3172 13.3705 11.9751 13.9934 10.3063 14.1071 10.0015 14.4464 9.84663 14.7512 9.96039zM6.04977 1.24793C6.16377 1.55265 6.00916 1.89209 5.70444 2.00609 4.02642 2.63388 2.67882 3.94352 1.99927 5.59804 1.87566 5.89899 1.53149 6.04276 1.23054 5.91915.929587 5.79554.785823 5.45137.909432 5.15042 1.71312 3.19367 3.30539 1.64569 5.2916.902608 5.59632.788606 5.93576.943212 6.04977 1.24793z", "fillRule": "evenodd", "clipRule": "evenodd" } }, { "tag": "path", "attrs": { "fill": "currentColor", "d": "M1.45435 12.5816C1.09285 12.5816 0.799805 12.2886 0.799805 11.9271C0.799805 11.5656 1.09285 11.2725 1.45435 11.2725C1.81585 11.2725 2.1089 11.5656 2.1089 11.9271C2.1089 12.2886 1.81585 12.5816 1.45435 12.5816Z" } }] };
var AiSingle = (0, import_react3.forwardRef)(function(props, ref) {
  return (0, import_react3.createElement)(IconBase, Object.assign({}, props, {
    id: "ai-single",
    ref,
    icon: element
  }));
});
AiSingle.displayName = "AiSingle";
var ai_single_default = AiSingle;

// ../node_modules/.pnpm/@univerjs+icons@0.2.20_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@univerjs/icons/esm/components/bar-chart-single.js
var import_react4 = __toESM(require_react());
var element2 = { "tag": "svg", "attrs": { "fill": "none", "viewBox": "0 0 16 16", "width": "1em", "height": "1em" }, "children": [{ "tag": "path", "attrs": { "fill": "currentColor", "d": "M2.33874 9.71431C2.34798 9.71452 2.35724 9.71463 2.36653 9.71463L11.4614 9.71463C12.2346 9.71463 12.8614 9.08783 12.8614 8.31463L12.8614 7.68516C12.8614 6.91196 12.2347 6.28516 11.4615 6.28516L2.36653 6.28516C2.35724 6.28516 2.34798 6.28526 2.33874 6.28547L2.33874 5.51607C2.34797 5.51628 2.35722 5.51639 2.3665 5.51639L13.5531 5.51639C14.3263 5.51639 14.9531 4.88959 14.9531 4.11639L14.9531 3.48691C14.9531 2.71372 14.3263 2.08691 13.5531 2.08691L2.3665 2.08691C2.35722 2.08691 2.34797 2.08702 2.33875 2.08723L2.33875 1.3334C2.33875 1.00203 2.07012 0.733398 1.73874 0.733398C1.40737 0.733398 1.13875 1.00203 1.13875 1.3334L1.13874 14.6667C1.13874 14.9981 1.40737 15.2667 1.73874 15.2667C2.07012 15.2667 2.33874 14.9981 2.33874 14.6667L2.33874 13.9126C2.34547 13.9127 2.3522 13.9128 2.35895 13.9128C2.36146 13.9129 2.36398 13.9129 2.3665 13.9129L8.55312 13.9129C9.32632 13.9129 9.95312 13.2861 9.95312 12.5129L9.95312 11.8834C9.95312 11.1102 9.32633 10.4834 8.55312 10.4834L2.3665 10.4834C2.35722 10.4834 2.34797 10.4835 2.33874 10.4837L2.33874 9.71431ZM11.6614 7.68516C11.6614 7.5747 11.5719 7.48516 11.4614 7.48516L2.36653 7.48516L2.36653 8.51463L11.4614 8.51463C11.5719 8.51463 11.6614 8.42508 11.6614 8.31463L11.6614 7.68516ZM13.7531 3.48691C13.7531 3.37646 13.6636 3.28691 13.5531 3.28691L2.3665 3.28691L2.3665 4.31639L13.5531 4.31639C13.6636 4.31639 13.7531 4.22684 13.7531 4.11639L13.7531 3.48691ZM8.55312 11.6834C8.66358 11.6834 8.75312 11.7729 8.75312 11.8834L8.75312 12.5129C8.75312 12.6233 8.66358 12.7129 8.55312 12.7129L2.3665 12.7129L2.3665 11.6834L8.55312 11.6834Z", "fillRule": "evenodd", "clipRule": "evenodd" } }] };
var BarChartSingle = (0, import_react4.forwardRef)(function(props, ref) {
  return (0, import_react4.createElement)(IconBase, Object.assign({}, props, {
    id: "bar-chart-single",
    ref,
    icon: element2
  }));
});
BarChartSingle.displayName = "BarChartSingle";
var bar_chart_single_default = BarChartSingle;

// ../node_modules/.pnpm/@univerjs+icons@0.2.20_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@univerjs/icons/esm/components/comment-single.js
var import_react5 = __toESM(require_react());
var element3 = { "tag": "svg", "attrs": { "fill": "none", "viewBox": "0 0 17 17", "width": "1em", "height": "1em" }, "children": [{ "tag": "path", "attrs": { "fill": "currentColor", "d": "M5.83725 6.78345C6.22188 6.78345 6.53368 7.10742 6.53368 7.50706V8.41159C6.53368 8.81123 6.22188 9.13521 5.83725 9.13521C5.45263 9.13521 5.14082 8.81123 5.14082 8.41159V7.50706C5.14082 7.10742 5.45263 6.78345 5.83725 6.78345ZM8.73904 6.78345C9.12366 6.78345 9.43546 7.10742 9.43546 7.50706V8.41159C9.43546 8.81123 9.12366 9.13521 8.73904 9.13521C8.35441 9.13521 8.04261 8.81123 8.04261 8.41159V7.50706C8.04261 7.10742 8.35441 6.78345 8.73904 6.78345ZM11.6408 6.78345C12.0254 6.78345 12.3372 7.10742 12.3372 7.50706V8.41159C12.3372 8.81123 12.0254 9.13521 11.6408 9.13521C11.2562 9.13521 10.9444 8.81123 10.9444 8.41159V7.50706C10.9444 7.10742 11.2562 6.78345 11.6408 6.78345Z", "fillRule": "evenodd", "clipRule": "evenodd" } }, { "tag": "path", "attrs": { "fill": "currentColor", "d": "M5.83725 6.78345C6.22188 6.78345 6.53368 7.10742 6.53368 7.50706V8.41159C6.53368 8.81123 6.22188 9.13521 5.83725 9.13521 5.45263 9.13521 5.14082 8.81123 5.14082 8.41159V7.50706C5.14082 7.10742 5.45263 6.78345 5.83725 6.78345zM8.73904 6.78345C9.12366 6.78345 9.43546 7.10742 9.43546 7.50706V8.41159C9.43546 8.81123 9.12366 9.13521 8.73904 9.13521 8.35441 9.13521 8.04261 8.81123 8.04261 8.41159V7.50706C8.04261 7.10742 8.35441 6.78345 8.73904 6.78345zM11.6408 6.78345C12.0254 6.78345 12.3372 7.10742 12.3372 7.50706V8.41159C12.3372 8.81123 12.0254 9.13521 11.6408 9.13521 11.2562 9.13521 10.9444 8.81123 10.9444 8.41159V7.50706C10.9444 7.10742 11.2562 6.78345 11.6408 6.78345z" } }, { "tag": "path", "attrs": { "fill": "currentColor", "d": "M1.84351 3.41861C1.84351 3.01861 2.15531 2.69434 2.53993 2.69434H14.9381C15.3228 2.69434 15.6346 3.01861 15.6346 3.41861V12.4611C15.6346 12.8612 15.3228 13.1854 14.9381 13.1854H8.82117L6.06643 14.6179C5.85054 14.7301 5.59416 14.7181 5.38884 14.5862C5.18352 14.4542 5.05855 14.2211 5.05855 13.9701V13.1854H2.53993C2.15531 13.1854 1.84351 12.8612 1.84351 12.4611L1.84351 3.41861ZM6.45141 12.7982L8.34531 12.0135C8.44201 11.9632 8.54864 11.9371 8.65676 11.9371H14.2417C14.3522 11.9371 14.4417 11.8475 14.4417 11.7371V4.14271C14.4417 4.03225 14.3522 3.94271 14.2417 3.94271H3.23636C3.12591 3.94271 3.03636 4.03225 3.03636 4.14271L3.03636 11.7371C3.03636 11.8475 3.12591 11.9371 3.23636 11.9371L5.75498 11.9371C6.1396 11.9371 6.45141 12.0611 6.45141 12.4611V12.7982Z", "fillRule": "evenodd", "clipRule": "evenodd" } }] };
var CommentSingle = (0, import_react5.forwardRef)(function(props, ref) {
  return (0, import_react5.createElement)(IconBase, Object.assign({}, props, {
    id: "comment-single",
    ref,
    icon: element3
  }));
});
CommentSingle.displayName = "CommentSingle";
var comment_single_default = CommentSingle;

// src/sheets/custom-menu/commands/operations/dropdown-list.operation.ts
var DropdownListFirstItemOperation = {
  id: "custom-menu.operation.dropdown-list-first-item",
  type: 1 /* OPERATION */,
  handler: async (_accessor) => {
    return true;
  }
};
var DropdownListSecondItemOperation = {
  id: "custom-menu.operation.dropdown-list-second-item",
  type: 1 /* OPERATION */,
  handler: async (_accessor) => {
    return true;
  }
};

// src/sheets/custom-menu/commands/operations/single-button.operation.ts
var SingleButtonOperation = {
  id: "custom-menu.operation.single-button",
  type: 1 /* OPERATION */,
  handler: async (_accessor) => {
    return true;
  }
};

// src/sheets/custom-menu/controllers/menu/dropdown-list.menu.ts
var CUSTOM_MENU_DROPDOWN_LIST_OPERATION_ID = "custom-menu.operation.dropdown-list";
function CustomMenuItemDropdownListMainButtonFactory() {
  return {
    // When type is MenuItemType.SUBITEMS, this factory serves as a container for the drop-down list, and you can set any unique id
    id: CUSTOM_MENU_DROPDOWN_LIST_OPERATION_ID,
    // The type of the menu item, in this case, it is a subitems
    type: 3 /* SUBITEMS */,
    icon: "MainButtonIcon",
    tooltip: "customMenu.dropdownList",
    title: "customMenu.dropdown"
  };
}
function CustomMenuItemDropdownListFirstItemFactory() {
  return {
    id: DropdownListFirstItemOperation.id,
    type: 0 /* BUTTON */,
    title: "customMenu.itemOne",
    icon: "ItemIcon"
  };
}
function CustomMenuItemDropdownListSecondItemFactory() {
  return {
    id: DropdownListSecondItemOperation.id,
    type: 0 /* BUTTON */,
    title: "customMenu.itemTwo",
    icon: "ItemIcon"
  };
}

// src/sheets/custom-menu/controllers/menu/single-button.menu.ts
function CustomMenuItemSingleButtonFactory() {
  return {
    // Bind the command id, clicking the button will trigger this command
    id: SingleButtonOperation.id,
    // The type of the menu item, in this case, it is a button
    type: 0 /* BUTTON */,
    // The icon of the button, which needs to be registered in ComponentManager
    icon: "ButtonIcon",
    // The tooltip of the button. Prioritize matching internationalization. If no match is found, the original string will be displayed
    tooltip: "customMenu.singleButton",
    // The title of the button. Prioritize matching internationalization. If no match is found, the original string will be displayed
    title: "customMenu.button"
  };
}

// src/sheets/custom-menu/controllers/custom-menu.controller.ts
var CustomMenuController = class extends Disposable {
  constructor(_injector, _commandService, _menuManagerService, _componentManager) {
    super();
    this._injector = _injector;
    this._commandService = _commandService;
    this._menuManagerService = _menuManagerService;
    this._componentManager = _componentManager;
    this._initCommands();
    this._registerComponents();
    this._initMenus();
  }
  /**
   * register commands
   */
  _initCommands() {
    [
      SingleButtonOperation,
      DropdownListFirstItemOperation,
      DropdownListSecondItemOperation
    ].forEach((c) => {
      this.disposeWithMe(this._commandService.registerCommand(c));
    });
  }
  /**
   * register icon components
   */
  _registerComponents() {
    this.disposeWithMe(this._componentManager.register("ButtonIcon", ai_single_default));
    this.disposeWithMe(this._componentManager.register("ItemIcon", bar_chart_single_default));
    this.disposeWithMe(this._componentManager.register("MainButtonIcon", comment_single_default));
  }
  /**
   * register menu items
   */
  _initMenus() {
    const largeDropdownList = Array.from({ length: 15 }, (_, i) => ({
      order: 20 + i,
      menuItemFactory: () => {
        return {
          id: `${DropdownListSecondItemOperation.id}-${i}`,
          type: 0 /* BUTTON */,
          title: "customMenu.itemTwo",
          icon: "ItemIcon"
        };
      }
    }));
    this._menuManagerService.mergeMenu({
      ["ribbon.start.others" /* OTHERS */]: {
        [SingleButtonOperation.id]: {
          order: 10,
          menuItemFactory: CustomMenuItemSingleButtonFactory
        },
        [CUSTOM_MENU_DROPDOWN_LIST_OPERATION_ID]: {
          order: 11,
          menuItemFactory: CustomMenuItemDropdownListMainButtonFactory,
          [DropdownListFirstItemOperation.id]: {
            order: 0,
            menuItemFactory: CustomMenuItemDropdownListFirstItemFactory
          },
          [DropdownListSecondItemOperation.id]: {
            order: 1,
            menuItemFactory: CustomMenuItemDropdownListSecondItemFactory
          },
          ...largeDropdownList
        }
      },
      ["contextMenu.mainArea" /* MAIN_AREA */]: {
        ["contextMenu.others" /* OTHERS */]: {
          [SingleButtonOperation.id]: {
            order: 12,
            menuItemFactory: CustomMenuItemSingleButtonFactory
          },
          [CUSTOM_MENU_DROPDOWN_LIST_OPERATION_ID]: {
            order: 9,
            menuItemFactory: CustomMenuItemDropdownListMainButtonFactory,
            [DropdownListFirstItemOperation.id]: {
              order: 0,
              menuItemFactory: CustomMenuItemDropdownListFirstItemFactory
            },
            [DropdownListSecondItemOperation.id]: {
              order: 1,
              menuItemFactory: CustomMenuItemDropdownListSecondItemFactory
            }
          }
        }
      }
    });
  }
};
CustomMenuController = __decorateClass([
  __decorateParam(0, Inject(Injector)),
  __decorateParam(1, ICommandService),
  __decorateParam(2, IMenuManagerService),
  __decorateParam(3, Inject(ComponentManager))
], CustomMenuController);

// src/sheets/custom-menu/locale/en-US.ts
var en_US_default = {
  customMenu: {
    button: "Button",
    singleButton: "Single button",
    dropdown: "Dropdown",
    dropdownList: "Dropdown list",
    itemOne: "Item 1",
    itemTwo: "Item 2"
  }
};

// src/sheets/custom-menu/locale/zh-CN.ts
var zh_CN_default = {
  customMenu: {
    button: "\u6309\u94AE",
    singleButton: "\u5355\u4E2A\u6309\u94AE",
    dropdown: "\u4E0B\u62C9",
    dropdownList: "\u4E0B\u62C9\u5217\u8868",
    itemOne: "\u9879\u76EE\u4E00",
    itemTwo: "\u9879\u76EE\u4E8C"
  }
};

// src/sheets/custom-menu/plugin.ts
var SHEET_CUSTOM_MENU_PLUGIN = "SHEET_CUSTOM_MENU_PLUGIN";
var UniverSheetsCustomMenuPlugin = class extends Plugin {
  constructor(_injector, _localeService) {
    super();
    this._injector = _injector;
    this._localeService = _localeService;
    this._localeService.load({
      enUS: en_US_default,
      zhCN: zh_CN_default
    });
  }
  onStarting() {
    [
      [CustomMenuController]
    ].forEach((d) => this._injector.add(d));
  }
  onRendered() {
    touchDependencies(this._injector, [
      [CustomMenuController]
    ]);
  }
};
__publicField(UniverSheetsCustomMenuPlugin, "type", O.UNIVER_SHEET);
__publicField(UniverSheetsCustomMenuPlugin, "pluginName", SHEET_CUSTOM_MENU_PLUGIN);
UniverSheetsCustomMenuPlugin = __decorateClass([
  __decorateParam(0, Inject(Injector)),
  __decorateParam(1, Inject(LocaleService))
], UniverSheetsCustomMenuPlugin);

// src/sheets/save-toolbar.tsx
var import_react6 = __toESM(require_react());

// src/services/save-service.ts
var API_BASE_URL = "http://localhost:5001/api";
var ISaveService = createIdentifier("univer.services.save-service");
var SaveService = class extends Disposable {
  constructor(_injector, _logService, _httpService) {
    super();
    this._injector = _injector;
    this._logService = _logService;
    this._httpService = _httpService;
  }
  /**
   * 保存当前工作簿数据到后端
   * @param name 工作簿名称
   * @returns 保存后的工作簿ID
   */
  async saveWorkbook(name) {
    try {
      const univerAPI = FUniver.newAPI();
      const workbook = univerAPI.getActiveWorkbook();
      if (!workbook) {
        throw new Error("\u6CA1\u6709\u6D3B\u52A8\u7684\u5DE5\u4F5C\u7C3F");
      }
      const snapshot = workbook.save();
      const response = await fetch(`${API_BASE_URL}/workbooks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          data: snapshot
        })
      });
      const result = await response.json();
      if (!result.success) {
        throw new Error(result.message || "\u4FDD\u5B58\u5931\u8D25");
      }
      return result.id;
    } catch (error) {
      this._logService.error("[SaveService]", "Failed to save workbook", error);
      throw error;
    }
  }
  /**
   * 向指定工作簿的指定工作表追加数据
   * @param workbookId 工作簿ID
   * @param sheetId 工作表ID
   * @param data 要追加的数据
   * @returns 是否追加成功
   */
  async appendData(workbookId, sheetId, data) {
    try {
      const response = await fetch(`${API_BASE_URL}/workbooks/${workbookId}/sheets/${sheetId}/append`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ data })
      });
      const result = await response.json();
      if (!result.success) {
        throw new Error(result.message || "\u8FFD\u52A0\u6570\u636E\u5931\u8D25");
      }
      this._logService.info("[SaveService]", `\u8FFD\u52A0\u4E86${result.rowsAdded}\u884C\u6570\u636E\uFF0C\u5F53\u524D\u884C\u6570: ${result.newRowCount}`);
      return true;
    } catch (error) {
      this._logService.error("[SaveService]", "Failed to append data", error);
      throw error;
    }
  }
};
SaveService = __decorateClass([
  __decorateParam(0, Inject(Injector)),
  __decorateParam(1, ILogService)
], SaveService);

// src/sheets/save-toolbar.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
function SaveButton(props) {
  const injector = Injector.getInstance();
  const saveService = injector.get(ISaveService);
  const [isSaving, setIsSaving] = (0, import_react6.useState)(false);
  const handleSave = (0, import_react6.useCallback)(async () => {
    try {
      setIsSaving(true);
      const workbookName = prompt("\u8BF7\u8F93\u5165\u5DE5\u4F5C\u7C3F\u540D\u79F0:");
      if (!workbookName) {
        setIsSaving(false);
        return;
      }
      const workbookId = await saveService.saveWorkbook(workbookName);
      alert(`\u5DE5\u4F5C\u7C3F\u5DF2\u4FDD\u5B58\uFF0CID: ${workbookId}`);
    } catch (error) {
      console.error("\u4FDD\u5B58\u5931\u8D25:", error);
      alert("\u4FDD\u5B58\u5931\u8D25: " + (error instanceof Error ? error.message : String(error)));
    } finally {
      setIsSaving(false);
    }
  }, [saveService]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    Button,
    {
      ...props,
      disabled: isSaving,
      onClick: handleSave,
      children: isSaving ? "\u4FDD\u5B58\u4E2D..." : "\u4FDD\u5B58\u5230\u670D\u52A1\u5668"
    }
  );
}
function AppendDataButton(props) {
  const injector = Injector.getInstance();
  const saveService = injector.get(ISaveService);
  const [isAppending, setIsAppending] = (0, import_react6.useState)(false);
  const handleAppendData = (0, import_react6.useCallback)(async () => {
    try {
      setIsAppending(true);
      const workbookId = prompt("\u8BF7\u8F93\u5165\u5DE5\u4F5C\u7C3FID:");
      if (!workbookId) {
        setIsAppending(false);
        return;
      }
      const sheetId = prompt("\u8BF7\u8F93\u5165\u5DE5\u4F5C\u8868ID:");
      if (!sheetId) {
        setIsAppending(false);
        return;
      }
      const dataStr = prompt('\u8BF7\u8F93\u5165\u8981\u8FFD\u52A0\u7684\u6570\u636E (JSON\u683C\u5F0F\u7684\u4E8C\u7EF4\u6570\u7EC4\uFF0C\u4F8B\u5982: [["A1", "B1"], ["A2", "B2"]]):');
      if (!dataStr) {
        setIsAppending(false);
        return;
      }
      let data;
      try {
        data = JSON.parse(dataStr);
        if (!Array.isArray(data) || !data.every((row) => Array.isArray(row))) {
          throw new Error("\u6570\u636E\u683C\u5F0F\u4E0D\u6B63\u786E\uFF0C\u5E94\u4E3A\u4E8C\u7EF4\u6570\u7EC4");
        }
      } catch (e) {
        alert("\u6570\u636E\u683C\u5F0F\u4E0D\u6B63\u786E: " + (e instanceof Error ? e.message : String(e)));
        setIsAppending(false);
        return;
      }
      const success = await saveService.appendData(workbookId, sheetId, data);
      if (success) {
        alert("\u6570\u636E\u8FFD\u52A0\u6210\u529F");
      } else {
        alert("\u6570\u636E\u8FFD\u52A0\u5931\u8D25");
      }
    } catch (error) {
      console.error("\u8FFD\u52A0\u6570\u636E\u5931\u8D25:", error);
      alert("\u8FFD\u52A0\u6570\u636E\u5931\u8D25: " + (error instanceof Error ? error.message : String(error)));
    } finally {
      setIsAppending(false);
    }
  }, [saveService]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    Button,
    {
      ...props,
      disabled: isAppending,
      onClick: handleAppendData,
      children: isAppending ? "\u8FFD\u52A0\u4E2D..." : "\u8FFD\u52A0\u6570\u636E"
    }
  );
}

// src/sheets/save-toolbar-plugin.ts
var UniverSaveToolbarPlugin = class extends Plugin {
  constructor(_logService, _injector) {
    super();
    this._logService = _logService;
    this._injector = _injector;
  }
  onStarting() {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.right = "10px";
    container.style.zIndex = "1000";
    const saveButtonContainer = document.createElement("div");
    const appendButtonContainer = document.createElement("div");
    container.appendChild(saveButtonContainer);
    container.appendChild(appendButtonContainer);
    document.body.appendChild(container);
    const saveProps = { style: { margin: "0 5px" } };
    const appendProps = { style: { margin: "0 5px" } };
    const ReactDOM = require_react_dom();
    const React2 = require_react();
    ReactDOM.render(React2.createElement(SaveButton, saveProps), saveButtonContainer);
    ReactDOM.render(React2.createElement(AppendDataButton, appendProps), appendButtonContainer);
    console.log("[UniverSaveToolbarPlugin]", "SaveToolbar initialized successfully");
  }
};
__publicField(UniverSaveToolbarPlugin, "pluginName", "UNIVER_SAVE_TOOLBAR_PLUGIN");
UniverSaveToolbarPlugin = __decorateClass([
  __decorateParam(0, ILogService),
  __decorateParam(1, Inject(Injector))
], UniverSaveToolbarPlugin);

// src/services/save-plugin.ts
var UniverSavePlugin = class extends Plugin {
  constructor(_config = void 0, _logService, _injector) {
    super();
    this._config = _config;
    this._logService = _logService;
    this._injector = _injector;
  }
  onStarting() {
    registerDependencies(this._injector, [
      [ISaveService, { useClass: SaveService }]
    ]);
    this._logService.info("[UniverSavePlugin]", "SaveService registered successfully");
  }
};
__publicField(UniverSavePlugin, "pluginName", "UNIVER_SAVE_PLUGIN");
UniverSavePlugin = __decorateClass([
  __decorateParam(1, ILogService),
  __decorateParam(2, Inject(Injector))
], UniverSavePlugin);

// ../packages/sheets-formula-ui/src/facade/f-univer.ts
var FSheetsFormulaUIUniver = class extends FUniver {
  showRangeSelectorDialog(opts) {
    const globalRangeSelectorService = this._injector.get(GlobalRangeSelectorService);
    return globalRangeSelectorService.showRangeSelectorDialog(opts);
  }
};
FUniver.extend(FSheetsFormulaUIUniver);

// ../packages/network/src/facade/f-network.ts
var FNetwork = class extends FBase {
  constructor(_injector, _httpService) {
    super();
    this._injector = _injector;
    this._httpService = _httpService;
  }
  /**
   * Send a GET request to the server.
   * @param {string} url - The requested URL.
   * @param {IRequestParams} [params] - Query parameters.
   * @returns {Promise<HTTPResponse>} Network response.
   */
  get(url, params) {
    return this._httpService.get(url, params);
    ;
  }
  /**
   * Send a POST request to the server.
   * @param {string} url - The requested URL.
   * @param {IPostRequestParams} [params] - Query parameters.
   * @returns {Promise<HTTPResponse>} Network response.
   */
  post(url, params) {
    return this._httpService.post(url, params);
    ;
  }
  /**
   * Send a PUT request to the server.
   * @param {string} url - The requested URL
   * @param {IPostRequestParams} [params] - Query parameters
   * @returns {Promise<HTTPResponse>} Network response
   */
  put(url, params) {
    return this._httpService.put(url, params);
    ;
  }
  /**
   * Send DELETE request to the server.
   * @param {string} url - The requested URL
   * @param {IRequestParams} [params] - Query parameters
   * @returns {Promise<HTTPResponse>} Network response
   */
  delete(url, params) {
    return this._httpService.delete(url, params);
    ;
  }
  /**
   * Send PATCH request to the server.
   * @param {string} url - The requested URL
   * @param {IPostRequestParams} [params] - Query parameters
   * @returns {Promise<HTTPResponse>} Network response
   */
  patch(url, params) {
    return this._httpService.patch(url, params);
  }
  /**
   * Request for a stream of server-sent events. Instead of a single response, the server sends a stream of responses,
   * Univer wraps the stream in an [`Observable`](https://rxjs.dev/guide/observable) which you can call `subscribe` on.
   * @param {HTTPRequestMethod} method - HTTP request method
   * @param {string} url - The requested URL
   * @param {IPostRequestParams} [params] - params Query parameters
   * @returns {Observable<HTTPEvent>} An observable that emits the network response.
   */
  getSSE(method, url, params) {
    return this._httpService.getSSE(method, url, params);
  }
};
FNetwork = __decorateClass([
  __decorateParam(0, Inject(Injector)),
  __decorateParam(1, Inject(HTTPService))
], FNetwork);

// ../packages/network/src/facade/f-univer.ts
var FUniverNetworkMixin = class extends FUniver {
  getNetwork() {
    return this._injector.createInstance(FNetwork);
  }
  createSocket(url) {
    const wsService = this._injector.createInstance(WebSocketService);
    const ws = wsService.createSocket(url);
    if (!ws) {
      throw new Error("[WebSocketService]: failed to create socket!");
    }
    return ws;
  }
};
FUniver.extend(FUniverNetworkMixin);

// src/sheets/main.ts
var IS_E2E = false;
var LOAD_LAZY_PLUGINS_TIMEOUT = 100;
var LOAD_VERY_LAZY_PLUGINS_TIMEOUT = 1e3;
var mockUser = {
  userID: "Owner_qxVnhPbQ",
  name: "Owner",
  avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAInSURBVHgBtZU9TxtBEIbfWRzFSIdkikhBSqRQkJqkCKTCFkqVInSUSaT0wC8w/gXxD4gU2nRJkXQWhAZowDUUWKIwEgWWbEEB3mVmx3dn4DA2nB/ppNuPeWd29mMIPXDr+RxwtgRHeW6+guNPRxogqnL7Dwz9psJ27S4NShaeZTH3kwXy6I81dlRKcmRui88swdq9AcSFL7Buz1Vmlns64MiLsCjzwnIYHLH57tbfFbs7KRaXyEU8FVZofqccOfA5l7Q8LPIkGrwnb2RPNEXWFVMUF3L+kDCk0btDDAMzOm5YfAHDwp4tG74wnzAsiOYMnJ3GoDybA7IT98/jm5+JNnfiIzAS6LlqHQBN/i6b2t/cV1Hh6BfwYlHnHP4AXi5q/8kmMMpOs8+BixZw/Fd6xUEHEbnkgclvQP2fGp7uShRKnQ3G32rkjV1th8JhIGG7tR/JyjGteSOZELwGMmNqIIigRCLRh2OZIE6BjItdd7pCW6Uhm1zzkUtungSxwEUzNpQ+GQumtH1ej1MqgmNT6vwmhCq5yuwq56EYTbgeQUz3yvrpV1b4ok3nYJ+eYhgYmjRUqErx2EDq0Fr8FhG++iqVGqxlUJI/70Ar0UgJaWHj6hYVHJrfKssAHot1JfqwE9WVWzXZVd5z2Ws/4PnmtEjkXeKJDvxUecLbWOXH/DP6QQ4J72NS0adedp1aseBfXP8odlZFfPvBF7SN/8hky1TYuPOAXAEipMx15u5ToAAAAABJRU5ErkJggg==",
  anonymous: false,
  canBindAnonymous: false
};
function createNewInstance() {
  const univer = new Univer({
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
  const worker = new Worker(new URL("./worker.js", import.meta.url), { type: "module" });
  univer.registerPlugin(UniverRPCMainThreadPlugin, { workerURL: worker });
  univer.registerPlugin(UniverDocsPlugin);
  univer.registerPlugin(UniverRenderEnginePlugin);
  univer.registerPlugin(UniverUIPlugin, { container: "app" });
  univer.registerPlugin(UniverDocsUIPlugin);
  univer.registerPlugin(UniverDocsDrawingUIPlugin);
  univer.registerPlugin(UniverDocsMentionUIPlugin);
  univer.registerPlugin(UniverSheetsPlugin, { notExecuteFormula: true });
  univer.registerPlugin(UniverSheetsUIPlugin);
  univer.registerPlugin(UniverSheetsNumfmtPlugin);
  univer.registerPlugin(UniverSheetsZenEditorPlugin);
  univer.registerPlugin(UniverFormulaEnginePlugin, { notExecuteFormula: true });
  univer.registerPlugin(UniverSheetsNumfmtUIPlugin);
  univer.registerPlugin(UniverSheetsFormulaPlugin, { notExecuteFormula: true });
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
  univer.registerPlugin(UniverSheetsCustomMenuPlugin);
  univer.registerPlugin(UniverNetworkPlugin);
  univer.registerPlugin(UniverSavePlugin);
  univer.registerPlugin(UniverSaveToolbarPlugin);
  if (IS_E2E) {
    univer.registerPlugin(UniverDebuggerPlugin);
  }
  const injector = univer.__getInjector();
  const userManagerService = injector.get(UserManagerService);
  userManagerService.setCurrentUser(mockUser);
  if (!IS_E2E) {
    univer.createUnit(O.UNIVER_SHEET, DEFAULT_WORKBOOK_DATA_DEMO);
  }
  const saveService = injector.get(ISaveService);
  window.univerSaveAPI = {
    /**
     * 保存当前工作簿到后端
     * @param {string} name 工作簿名称 
     * @returns {Promise<string>} 工作簿ID
     */
    async saveWorkbook(name) {
      try {
        return await saveService.saveWorkbook(name);
      } catch (error) {
        console.error("\u4FDD\u5B58\u5DE5\u4F5C\u7C3F\u5931\u8D25:", error);
        throw error;
      }
    },
    /**
     * 向工作表追加数据
     * @param {string} workbookId 工作簿ID
     * @param {string} sheetId 工作表ID
     * @param {Array<Array<any>>} data 二维数组数据
     * @returns {Promise<boolean>} 是否成功
     */
    async appendData(workbookId, sheetId, data) {
      try {
        return await saveService.appendData(workbookId, sheetId, data);
      } catch (error) {
        console.error("\u8FFD\u52A0\u6570\u636E\u5931\u8D25:", error);
        throw error;
      }
    }
  };
  console.log("===== \u4FDD\u5B58API\u5DF2\u521D\u59CB\u5316\uFF0C\u53EF\u901A\u8FC7window.univerSaveAPI\u4F7F\u7528 =====");
  console.log('\u4F8B\u5982: await window.univerSaveAPI.saveWorkbook("\u6211\u7684\u5DE5\u4F5C\u7C3F")');
  setTimeout(() => {
    import("../lazy-CGWTZ446.js").then((lazy) => {
      const plugins = lazy.default();
      plugins.forEach((p) => univer.registerPlugin(p[0], p[1]));
    });
  }, LOAD_LAZY_PLUGINS_TIMEOUT);
  setTimeout(() => {
    import("../very-lazy-DCHGPTRK.js").then((lazy) => {
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
  window.univerAPI = FUniver.newAPI(univer);
}
createNewInstance();
window.createNewInstance = createNewInstance;
export {
  mockUser
};
//# sourceMappingURL=main.js.map
