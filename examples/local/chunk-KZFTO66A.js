import {
  AddCfCommand,
  AddConditionalRuleMutation,
  AddConditionalRuleMutationUndoFactory,
  CONDITIONAL_FORMATTING_VIEWPORT_CACHE_LENGTH,
  ClearRangeCfCommand,
  ClearWorksheetCfCommand,
  ConditionalFormattingRuleModel,
  ConditionalFormattingService,
  ConditionalFormattingViewModel,
  DEFAULT_BG_COLOR,
  DEFAULT_FONT_COLOR,
  DEFAULT_PADDING,
  DEFAULT_WIDTH,
  DeleteCfCommand,
  DeleteConditionalRuleMutation,
  DeleteConditionalRuleMutationUndoFactory,
  EMPTY_ICON_TYPE,
  MoveCfCommand,
  MoveConditionalRuleMutation,
  SHEET_CONDITIONAL_FORMATTING_PLUGIN,
  SetCfCommand,
  SetConditionalRuleMutation,
  UniverSheetsConditionalFormattingPlugin,
  compareWithNumber,
  createDefaultRule,
  createDefaultValue,
  createDefaultValueByValueType,
  defaultDataBarNativeColor,
  defaultDataBarPositiveColor,
  getColorScaleFromValue,
  getOppositeOperator,
  iconGroup,
  iconMap,
  removeUndefinedAttr,
  setConditionalRuleMutationUndoFactory
} from "./chunk-WXS7WCGQ.js";
import {
  FormulaEditor,
  RangeSelector
} from "./chunk-6EX6BLVI.js";
import {
  IAutoFillService,
  IFormatPainterService,
  ISheetClipboardService,
  PREDEFINED_HOOK_NAME,
  SheetSkeletonManagerService,
  getAutoFillRepeatRange,
  getCurrentRangeDisable$,
  getRepeatRange,
  useHighlightRange,
  virtualizeDiscreteRanges
} from "./chunk-NW7E7FBW.js";
import {
  ComponentManager,
  ILayoutService,
  IMenuManagerService,
  IRenderManagerService,
  ISidebarService,
  getMenuHiddenObservable,
  useDependency,
  useObservable,
  useScrollYOverContainer,
  useSidebarClick
} from "./chunk-DOZPYWOG.js";
import {
  Button,
  Checkbox,
  ColorPicker,
  Dropdown,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  Select,
  Tooltip,
  clsx,
  delete_single_default,
  increase_single_default,
  more_down_single_default,
  require_ResizeObserver,
  require_cjs,
  require_clsx,
  require_fast_equals,
  require_jsx_runtime,
  require_prop_types,
  require_react,
  require_react_resizable,
  sequence_single_default,
  slash_single_default
} from "./chunk-22LKBS37.js";
import {
  AFTER_CELL_EDIT,
  ClearSelectionAllCommand,
  ClearSelectionFormatCommand,
  ColorKit,
  DependentOn,
  Disposable,
  ICommandService,
  IConfigService,
  INTERCEPTOR_POINT,
  IUniverInstanceService,
  Inject,
  Injector,
  InterceptorManager,
  LocaleService,
  O,
  ObjectMatrix,
  Observable,
  Plugin,
  Range,
  RangeMergeUtil,
  RangeProtectionPermissionEditPoint,
  Rectangle,
  RefRangeService,
  RemoveSheetMutation,
  SetSelectionsOperation,
  SetWorksheetActiveOperation,
  SheetInterceptorService,
  SheetPermissionCheckController,
  SheetsSelectionsService,
  Tools,
  WorkbookEditablePermission,
  WorksheetEditPermission,
  WorksheetSetCellStylePermission,
  bufferTime,
  checkRangesEditablePermission,
  createInterceptorKey,
  createTopMatrixFromMatrix,
  debounceTime,
  deserializeRangeWithSheet,
  filter,
  findAllRectangle,
  generateRandomId,
  getSheetCommandTarget,
  get_default,
  handleDefaultRangeChangeWithEffectRefCommands,
  isRangesEqual,
  merge,
  merge_default,
  rangeToDiscreteRange,
  registerDependencies,
  serializeRange,
  setEndForRange,
  set_default,
  toDisposable,
  touchDependencies
} from "./chunk-33NDYU5R.js";
import {
  __commonJS,
  __decorateClass,
  __decorateParam,
  __publicField,
  __toESM
} from "./chunk-NSSCU2QI.js";

// ../node_modules/.pnpm/react-grid-layout@1.4.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-grid-layout/build/fastRGLPropsEqual.js
var require_fastRGLPropsEqual = __commonJS({
  "../node_modules/.pnpm/react-grid-layout@1.4.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-grid-layout/build/fastRGLPropsEqual.js"(exports, module) {
    module.exports = function fastRGLPropsEqual(a, b, isEqualImpl) {
      if (a === b) return true;
      return a.className === b.className && isEqualImpl(a.style, b.style) && a.width === b.width && a.autoSize === b.autoSize && a.cols === b.cols && a.draggableCancel === b.draggableCancel && a.draggableHandle === b.draggableHandle && isEqualImpl(a.verticalCompact, b.verticalCompact) && isEqualImpl(a.compactType, b.compactType) && isEqualImpl(a.layout, b.layout) && isEqualImpl(a.margin, b.margin) && isEqualImpl(a.containerPadding, b.containerPadding) && a.rowHeight === b.rowHeight && a.maxRows === b.maxRows && a.isBounded === b.isBounded && a.isDraggable === b.isDraggable && a.isResizable === b.isResizable && a.allowOverlap === b.allowOverlap && a.preventCollision === b.preventCollision && a.useCSSTransforms === b.useCSSTransforms && a.transformScale === b.transformScale && a.isDroppable === b.isDroppable && isEqualImpl(a.resizeHandles, b.resizeHandles) && isEqualImpl(a.resizeHandle, b.resizeHandle) && a.onLayoutChange === b.onLayoutChange && a.onDragStart === b.onDragStart && a.onDrag === b.onDrag && a.onDragStop === b.onDragStop && a.onResizeStart === b.onResizeStart && a.onResize === b.onResize && a.onResizeStop === b.onResizeStop && a.onDrop === b.onDrop && isEqualImpl(a.droppingItem, b.droppingItem) && isEqualImpl(a.innerRef, b.innerRef);
    };
  }
});

// ../node_modules/.pnpm/react-grid-layout@1.4.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-grid-layout/build/utils.js
var require_utils = __commonJS({
  "../node_modules/.pnpm/react-grid-layout@1.4.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-grid-layout/build/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.bottom = bottom;
    exports.childrenEqual = childrenEqual;
    exports.cloneLayout = cloneLayout;
    exports.cloneLayoutItem = cloneLayoutItem;
    exports.collides = collides;
    exports.compact = compact;
    exports.compactItem = compactItem;
    exports.compactType = compactType;
    exports.correctBounds = correctBounds;
    exports.fastPositionEqual = fastPositionEqual;
    exports.fastRGLPropsEqual = void 0;
    exports.getAllCollisions = getAllCollisions;
    exports.getFirstCollision = getFirstCollision;
    exports.getLayoutItem = getLayoutItem;
    exports.getStatics = getStatics;
    exports.modifyLayout = modifyLayout;
    exports.moveElement = moveElement;
    exports.moveElementAwayFromCollision = moveElementAwayFromCollision;
    exports.noop = void 0;
    exports.perc = perc;
    exports.resizeItemInDirection = resizeItemInDirection;
    exports.setTopLeft = setTopLeft;
    exports.setTransform = setTransform;
    exports.sortLayoutItems = sortLayoutItems;
    exports.sortLayoutItemsByColRow = sortLayoutItemsByColRow;
    exports.sortLayoutItemsByRowCol = sortLayoutItemsByRowCol;
    exports.synchronizeLayoutWithChildren = synchronizeLayoutWithChildren;
    exports.validateLayout = validateLayout;
    exports.withLayoutItem = withLayoutItem;
    var _fastEquals = require_fast_equals();
    var _react = _interopRequireDefault(require_react());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var isProduction = false;
    var DEBUG = false;
    function bottom(layout) {
      let max = 0, bottomY;
      for (let i = 0, len = layout.length; i < len; i++) {
        bottomY = layout[i].y + layout[i].h;
        if (bottomY > max) max = bottomY;
      }
      return max;
    }
    function cloneLayout(layout) {
      const newLayout = Array(layout.length);
      for (let i = 0, len = layout.length; i < len; i++) {
        newLayout[i] = cloneLayoutItem(layout[i]);
      }
      return newLayout;
    }
    function modifyLayout(layout, layoutItem) {
      const newLayout = Array(layout.length);
      for (let i = 0, len = layout.length; i < len; i++) {
        if (layoutItem.i === layout[i].i) {
          newLayout[i] = layoutItem;
        } else {
          newLayout[i] = layout[i];
        }
      }
      return newLayout;
    }
    function withLayoutItem(layout, itemKey, cb) {
      let item = getLayoutItem(layout, itemKey);
      if (!item) return [layout, null];
      item = cb(cloneLayoutItem(item));
      layout = modifyLayout(layout, item);
      return [layout, item];
    }
    function cloneLayoutItem(layoutItem) {
      return {
        w: layoutItem.w,
        h: layoutItem.h,
        x: layoutItem.x,
        y: layoutItem.y,
        i: layoutItem.i,
        minW: layoutItem.minW,
        maxW: layoutItem.maxW,
        minH: layoutItem.minH,
        maxH: layoutItem.maxH,
        moved: Boolean(layoutItem.moved),
        static: Boolean(layoutItem.static),
        // These can be null/undefined
        isDraggable: layoutItem.isDraggable,
        isResizable: layoutItem.isResizable,
        resizeHandles: layoutItem.resizeHandles,
        isBounded: layoutItem.isBounded
      };
    }
    function childrenEqual(a, b) {
      return (0, _fastEquals.deepEqual)(_react.default.Children.map(a, (c) => c == null ? void 0 : c.key), _react.default.Children.map(b, (c) => c == null ? void 0 : c.key)) && (0, _fastEquals.deepEqual)(_react.default.Children.map(a, (c) => c == null ? void 0 : c.props["data-grid"]), _react.default.Children.map(b, (c) => c == null ? void 0 : c.props["data-grid"]));
    }
    var fastRGLPropsEqual = exports.fastRGLPropsEqual = require_fastRGLPropsEqual();
    function fastPositionEqual(a, b) {
      return a.left === b.left && a.top === b.top && a.width === b.width && a.height === b.height;
    }
    function collides(l1, l2) {
      if (l1.i === l2.i) return false;
      if (l1.x + l1.w <= l2.x) return false;
      if (l1.x >= l2.x + l2.w) return false;
      if (l1.y + l1.h <= l2.y) return false;
      if (l1.y >= l2.y + l2.h) return false;
      return true;
    }
    function compact(layout, compactType2, cols, allowOverlap) {
      const compareWith = getStatics(layout);
      const sorted = sortLayoutItems(layout, compactType2);
      const out = Array(layout.length);
      for (let i = 0, len = sorted.length; i < len; i++) {
        let l = cloneLayoutItem(sorted[i]);
        if (!l.static) {
          l = compactItem(compareWith, l, compactType2, cols, sorted, allowOverlap);
          compareWith.push(l);
        }
        out[layout.indexOf(sorted[i])] = l;
        l.moved = false;
      }
      return out;
    }
    var heightWidth = {
      x: "w",
      y: "h"
    };
    function resolveCompactionCollision(layout, item, moveToCoord, axis) {
      const sizeProp = heightWidth[axis];
      item[axis] += 1;
      const itemIndex = layout.map((layoutItem) => {
        return layoutItem.i;
      }).indexOf(item.i);
      for (let i = itemIndex + 1; i < layout.length; i++) {
        const otherItem = layout[i];
        if (otherItem.static) continue;
        if (otherItem.y > item.y + item.h) break;
        if (collides(item, otherItem)) {
          resolveCompactionCollision(layout, otherItem, moveToCoord + item[sizeProp], axis);
        }
      }
      item[axis] = moveToCoord;
    }
    function compactItem(compareWith, l, compactType2, cols, fullLayout, allowOverlap) {
      const compactV = compactType2 === "vertical";
      const compactH = compactType2 === "horizontal";
      if (compactV) {
        l.y = Math.min(bottom(compareWith), l.y);
        while (l.y > 0 && !getFirstCollision(compareWith, l)) {
          l.y--;
        }
      } else if (compactH) {
        while (l.x > 0 && !getFirstCollision(compareWith, l)) {
          l.x--;
        }
      }
      let collides2;
      while ((collides2 = getFirstCollision(compareWith, l)) && !(compactType2 === null && allowOverlap)) {
        if (compactH) {
          resolveCompactionCollision(fullLayout, l, collides2.x + collides2.w, "x");
        } else {
          resolveCompactionCollision(fullLayout, l, collides2.y + collides2.h, "y");
        }
        if (compactH && l.x + l.w > cols) {
          l.x = cols - l.w;
          l.y++;
          while (l.x > 0 && !getFirstCollision(compareWith, l)) {
            l.x--;
          }
        }
      }
      l.y = Math.max(l.y, 0);
      l.x = Math.max(l.x, 0);
      return l;
    }
    function correctBounds(layout, bounds) {
      const collidesWith = getStatics(layout);
      for (let i = 0, len = layout.length; i < len; i++) {
        const l = layout[i];
        if (l.x + l.w > bounds.cols) l.x = bounds.cols - l.w;
        if (l.x < 0) {
          l.x = 0;
          l.w = bounds.cols;
        }
        if (!l.static) collidesWith.push(l);
        else {
          while (getFirstCollision(collidesWith, l)) {
            l.y++;
          }
        }
      }
      return layout;
    }
    function getLayoutItem(layout, id) {
      for (let i = 0, len = layout.length; i < len; i++) {
        if (layout[i].i === id) return layout[i];
      }
    }
    function getFirstCollision(layout, layoutItem) {
      for (let i = 0, len = layout.length; i < len; i++) {
        if (collides(layout[i], layoutItem)) return layout[i];
      }
    }
    function getAllCollisions(layout, layoutItem) {
      return layout.filter((l) => collides(l, layoutItem));
    }
    function getStatics(layout) {
      return layout.filter((l) => l.static);
    }
    function moveElement(layout, l, x, y, isUserAction, preventCollision, compactType2, cols, allowOverlap) {
      if (l.static && l.isDraggable !== true) return layout;
      if (l.y === y && l.x === x) return layout;
      log(`Moving element ${l.i} to [${String(x)},${String(y)}] from [${l.x},${l.y}]`);
      const oldX = l.x;
      const oldY = l.y;
      if (typeof x === "number") l.x = x;
      if (typeof y === "number") l.y = y;
      l.moved = true;
      let sorted = sortLayoutItems(layout, compactType2);
      const movingUp = compactType2 === "vertical" && typeof y === "number" ? oldY >= y : compactType2 === "horizontal" && typeof x === "number" ? oldX >= x : false;
      if (movingUp) sorted = sorted.reverse();
      const collisions = getAllCollisions(sorted, l);
      const hasCollisions = collisions.length > 0;
      if (hasCollisions && allowOverlap) {
        return cloneLayout(layout);
      } else if (hasCollisions && preventCollision) {
        log(`Collision prevented on ${l.i}, reverting.`);
        l.x = oldX;
        l.y = oldY;
        l.moved = false;
        return layout;
      }
      for (let i = 0, len = collisions.length; i < len; i++) {
        const collision = collisions[i];
        log(`Resolving collision between ${l.i} at [${l.x},${l.y}] and ${collision.i} at [${collision.x},${collision.y}]`);
        if (collision.moved) continue;
        if (collision.static) {
          layout = moveElementAwayFromCollision(layout, collision, l, isUserAction, compactType2, cols);
        } else {
          layout = moveElementAwayFromCollision(layout, l, collision, isUserAction, compactType2, cols);
        }
      }
      return layout;
    }
    function moveElementAwayFromCollision(layout, collidesWith, itemToMove, isUserAction, compactType2, cols) {
      const compactH = compactType2 === "horizontal";
      const compactV = compactType2 === "vertical";
      const preventCollision = collidesWith.static;
      if (isUserAction) {
        isUserAction = false;
        const fakeItem = {
          x: compactH ? Math.max(collidesWith.x - itemToMove.w, 0) : itemToMove.x,
          y: compactV ? Math.max(collidesWith.y - itemToMove.h, 0) : itemToMove.y,
          w: itemToMove.w,
          h: itemToMove.h,
          i: "-1"
        };
        const firstCollision = getFirstCollision(layout, fakeItem);
        const collisionNorth = firstCollision && firstCollision.y + firstCollision.h > collidesWith.y;
        const collisionWest = firstCollision && collidesWith.x + collidesWith.w > firstCollision.x;
        if (!firstCollision) {
          log(`Doing reverse collision on ${itemToMove.i} up to [${fakeItem.x},${fakeItem.y}].`);
          return moveElement(layout, itemToMove, compactH ? fakeItem.x : void 0, compactV ? fakeItem.y : void 0, isUserAction, preventCollision, compactType2, cols);
        } else if (collisionNorth && compactV) {
          return moveElement(layout, itemToMove, void 0, collidesWith.y + 1, isUserAction, preventCollision, compactType2, cols);
        } else if (collisionNorth && compactType2 == null) {
          collidesWith.y = itemToMove.y;
          itemToMove.y = itemToMove.y + itemToMove.h;
          return layout;
        } else if (collisionWest && compactH) {
          return moveElement(layout, collidesWith, itemToMove.x, void 0, isUserAction, preventCollision, compactType2, cols);
        }
      }
      const newX = compactH ? itemToMove.x + 1 : void 0;
      const newY = compactV ? itemToMove.y + 1 : void 0;
      if (newX == null && newY == null) {
        return layout;
      }
      return moveElement(layout, itemToMove, compactH ? itemToMove.x + 1 : void 0, compactV ? itemToMove.y + 1 : void 0, isUserAction, preventCollision, compactType2, cols);
    }
    function perc(num) {
      return num * 100 + "%";
    }
    var constrainWidth = (left, currentWidth, newWidth, containerWidth) => {
      return left + newWidth > containerWidth ? currentWidth : newWidth;
    };
    var constrainHeight = (top, currentHeight, newHeight) => {
      return top < 0 ? currentHeight : newHeight;
    };
    var constrainLeft = (left) => Math.max(0, left);
    var constrainTop = (top) => Math.max(0, top);
    var resizeNorth = (currentSize, _ref, _containerWidth) => {
      let {
        left,
        height,
        width
      } = _ref;
      const top = currentSize.top - (height - currentSize.height);
      return {
        left,
        width,
        height: constrainHeight(top, currentSize.height, height),
        top: constrainTop(top)
      };
    };
    var resizeEast = (currentSize, _ref2, containerWidth) => {
      let {
        top,
        left,
        height,
        width
      } = _ref2;
      return {
        top,
        height,
        width: constrainWidth(currentSize.left, currentSize.width, width, containerWidth),
        left: constrainLeft(left)
      };
    };
    var resizeWest = (currentSize, _ref3, containerWidth) => {
      let {
        top,
        height,
        width
      } = _ref3;
      const left = currentSize.left - (width - currentSize.width);
      return {
        height,
        width: left < 0 ? currentSize.width : constrainWidth(currentSize.left, currentSize.width, width, containerWidth),
        top: constrainTop(top),
        left: constrainLeft(left)
      };
    };
    var resizeSouth = (currentSize, _ref4, containerWidth) => {
      let {
        top,
        left,
        height,
        width
      } = _ref4;
      return {
        width,
        left,
        height: constrainHeight(top, currentSize.height, height),
        top: constrainTop(top)
      };
    };
    var resizeNorthEast = function() {
      return resizeNorth(arguments.length <= 0 ? void 0 : arguments[0], resizeEast(...arguments), arguments.length <= 2 ? void 0 : arguments[2]);
    };
    var resizeNorthWest = function() {
      return resizeNorth(arguments.length <= 0 ? void 0 : arguments[0], resizeWest(...arguments), arguments.length <= 2 ? void 0 : arguments[2]);
    };
    var resizeSouthEast = function() {
      return resizeSouth(arguments.length <= 0 ? void 0 : arguments[0], resizeEast(...arguments), arguments.length <= 2 ? void 0 : arguments[2]);
    };
    var resizeSouthWest = function() {
      return resizeSouth(arguments.length <= 0 ? void 0 : arguments[0], resizeWest(...arguments), arguments.length <= 2 ? void 0 : arguments[2]);
    };
    var ordinalResizeHandlerMap = {
      n: resizeNorth,
      ne: resizeNorthEast,
      e: resizeEast,
      se: resizeSouthEast,
      s: resizeSouth,
      sw: resizeSouthWest,
      w: resizeWest,
      nw: resizeNorthWest
    };
    function resizeItemInDirection(direction, currentSize, newSize, containerWidth) {
      const ordinalHandler = ordinalResizeHandlerMap[direction];
      if (!ordinalHandler) return newSize;
      return ordinalHandler(currentSize, {
        ...currentSize,
        ...newSize
      }, containerWidth);
    }
    function setTransform(_ref5) {
      let {
        top,
        left,
        width,
        height
      } = _ref5;
      const translate = `translate(${left}px,${top}px)`;
      return {
        transform: translate,
        WebkitTransform: translate,
        MozTransform: translate,
        msTransform: translate,
        OTransform: translate,
        width: `${width}px`,
        height: `${height}px`,
        position: "absolute"
      };
    }
    function setTopLeft(_ref6) {
      let {
        top,
        left,
        width,
        height
      } = _ref6;
      return {
        top: `${top}px`,
        left: `${left}px`,
        width: `${width}px`,
        height: `${height}px`,
        position: "absolute"
      };
    }
    function sortLayoutItems(layout, compactType2) {
      if (compactType2 === "horizontal") return sortLayoutItemsByColRow(layout);
      if (compactType2 === "vertical") return sortLayoutItemsByRowCol(layout);
      else return layout;
    }
    function sortLayoutItemsByRowCol(layout) {
      return layout.slice(0).sort(function(a, b) {
        if (a.y > b.y || a.y === b.y && a.x > b.x) {
          return 1;
        } else if (a.y === b.y && a.x === b.x) {
          return 0;
        }
        return -1;
      });
    }
    function sortLayoutItemsByColRow(layout) {
      return layout.slice(0).sort(function(a, b) {
        if (a.x > b.x || a.x === b.x && a.y > b.y) {
          return 1;
        }
        return -1;
      });
    }
    function synchronizeLayoutWithChildren(initialLayout, children, cols, compactType2, allowOverlap) {
      initialLayout = initialLayout || [];
      const layout = [];
      _react.default.Children.forEach(children, (child) => {
        if ((child == null ? void 0 : child.key) == null) return;
        const exists = getLayoutItem(initialLayout, String(child.key));
        const g = child.props["data-grid"];
        if (exists && g == null) {
          layout.push(cloneLayoutItem(exists));
        } else {
          if (g) {
            if (!isProduction) {
              validateLayout([g], "ReactGridLayout.children");
            }
            layout.push(cloneLayoutItem({
              ...g,
              i: child.key
            }));
          } else {
            layout.push(cloneLayoutItem({
              w: 1,
              h: 1,
              x: 0,
              y: bottom(layout),
              i: String(child.key)
            }));
          }
        }
      });
      const correctedLayout = correctBounds(layout, {
        cols
      });
      return allowOverlap ? correctedLayout : compact(correctedLayout, compactType2, cols);
    }
    function validateLayout(layout) {
      let contextName = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Layout";
      const subProps = ["x", "y", "w", "h"];
      if (!Array.isArray(layout)) throw new Error(contextName + " must be an array!");
      for (let i = 0, len = layout.length; i < len; i++) {
        const item = layout[i];
        for (let j = 0; j < subProps.length; j++) {
          if (typeof item[subProps[j]] !== "number") {
            throw new Error("ReactGridLayout: " + contextName + "[" + i + "]." + subProps[j] + " must be a number!");
          }
        }
      }
    }
    function compactType(props) {
      const {
        verticalCompact,
        compactType: compactType2
      } = props || {};
      return verticalCompact === false ? null : compactType2;
    }
    function log() {
      if (!DEBUG) return;
      console.log(...arguments);
    }
    var noop = () => {
    };
    exports.noop = noop;
  }
});

// ../node_modules/.pnpm/react-grid-layout@1.4.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-grid-layout/build/calculateUtils.js
var require_calculateUtils = __commonJS({
  "../node_modules/.pnpm/react-grid-layout@1.4.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-grid-layout/build/calculateUtils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.calcGridColWidth = calcGridColWidth;
    exports.calcGridItemPosition = calcGridItemPosition;
    exports.calcGridItemWHPx = calcGridItemWHPx;
    exports.calcWH = calcWH;
    exports.calcXY = calcXY;
    exports.clamp = clamp;
    function calcGridColWidth(positionParams) {
      const {
        margin,
        containerPadding,
        containerWidth,
        cols
      } = positionParams;
      return (containerWidth - margin[0] * (cols - 1) - containerPadding[0] * 2) / cols;
    }
    function calcGridItemWHPx(gridUnits, colOrRowSize, marginPx) {
      if (!Number.isFinite(gridUnits)) return gridUnits;
      return Math.round(colOrRowSize * gridUnits + Math.max(0, gridUnits - 1) * marginPx);
    }
    function calcGridItemPosition(positionParams, x, y, w, h, state) {
      const {
        margin,
        containerPadding,
        rowHeight
      } = positionParams;
      const colWidth = calcGridColWidth(positionParams);
      const out = {};
      if (state && state.resizing) {
        out.width = Math.round(state.resizing.width);
        out.height = Math.round(state.resizing.height);
      } else {
        out.width = calcGridItemWHPx(w, colWidth, margin[0]);
        out.height = calcGridItemWHPx(h, rowHeight, margin[1]);
      }
      if (state && state.dragging) {
        out.top = Math.round(state.dragging.top);
        out.left = Math.round(state.dragging.left);
      } else if (state && state.resizing && typeof state.resizing.top === "number" && typeof state.resizing.left === "number") {
        out.top = Math.round(state.resizing.top);
        out.left = Math.round(state.resizing.left);
      } else {
        out.top = Math.round((rowHeight + margin[1]) * y + containerPadding[1]);
        out.left = Math.round((colWidth + margin[0]) * x + containerPadding[0]);
      }
      return out;
    }
    function calcXY(positionParams, top, left, w, h) {
      const {
        margin,
        cols,
        rowHeight,
        maxRows
      } = positionParams;
      const colWidth = calcGridColWidth(positionParams);
      let x = Math.round((left - margin[0]) / (colWidth + margin[0]));
      let y = Math.round((top - margin[1]) / (rowHeight + margin[1]));
      x = clamp(x, 0, cols - w);
      y = clamp(y, 0, maxRows - h);
      return {
        x,
        y
      };
    }
    function calcWH(positionParams, width, height, x, y, handle) {
      const {
        margin,
        maxRows,
        cols,
        rowHeight
      } = positionParams;
      const colWidth = calcGridColWidth(positionParams);
      let w = Math.round((width + margin[0]) / (colWidth + margin[0]));
      let h = Math.round((height + margin[1]) / (rowHeight + margin[1]));
      let _w = clamp(w, 0, cols - x);
      let _h = clamp(h, 0, maxRows - y);
      if (["sw", "w", "nw"].indexOf(handle) !== -1) {
        _w = clamp(w, 0, cols);
      }
      if (["nw", "n", "ne"].indexOf(handle) !== -1) {
        _h = clamp(h, 0, maxRows);
      }
      return {
        w: _w,
        h: _h
      };
    }
    function clamp(num, lowerBound, upperBound) {
      return Math.max(Math.min(num, upperBound), lowerBound);
    }
  }
});

// ../node_modules/.pnpm/react-grid-layout@1.4.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-grid-layout/build/ReactGridLayoutPropTypes.js
var require_ReactGridLayoutPropTypes = __commonJS({
  "../node_modules/.pnpm/react-grid-layout@1.4.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-grid-layout/build/ReactGridLayoutPropTypes.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.resizeHandleType = exports.resizeHandleAxesType = exports.default = void 0;
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireDefault(require_react());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var resizeHandleAxesType = exports.resizeHandleAxesType = _propTypes.default.arrayOf(_propTypes.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"]));
    var resizeHandleType = exports.resizeHandleType = _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]);
    var _default = exports.default = {
      //
      // Basic props
      //
      className: _propTypes.default.string,
      style: _propTypes.default.object,
      // This can be set explicitly. If it is not set, it will automatically
      // be set to the container width. Note that resizes will *not* cause this to adjust.
      // If you need that behavior, use WidthProvider.
      width: _propTypes.default.number,
      // If true, the container height swells and contracts to fit contents
      autoSize: _propTypes.default.bool,
      // # of cols.
      cols: _propTypes.default.number,
      // A selector that will not be draggable.
      draggableCancel: _propTypes.default.string,
      // A selector for the draggable handler
      draggableHandle: _propTypes.default.string,
      // Deprecated
      verticalCompact: function(props) {
        if (props.verticalCompact === false && true) {
          console.warn(
            // eslint-disable-line no-console
            '`verticalCompact` on <ReactGridLayout> is deprecated and will be removed soon. Use `compactType`: "horizontal" | "vertical" | null.'
          );
        }
      },
      // Choose vertical or hotizontal compaction
      compactType: _propTypes.default.oneOf(["vertical", "horizontal"]),
      // layout is an array of object with the format:
      // {x: Number, y: Number, w: Number, h: Number, i: String}
      layout: function(props) {
        var layout = props.layout;
        if (layout === void 0) return;
        require_utils().validateLayout(layout, "layout");
      },
      //
      // Grid Dimensions
      //
      // Margin between items [x, y] in px
      margin: _propTypes.default.arrayOf(_propTypes.default.number),
      // Padding inside the container [x, y] in px
      containerPadding: _propTypes.default.arrayOf(_propTypes.default.number),
      // Rows have a static height, but you can change this based on breakpoints if you like
      rowHeight: _propTypes.default.number,
      // Default Infinity, but you can specify a max here if you like.
      // Note that this isn't fully fleshed out and won't error if you specify a layout that
      // extends beyond the row capacity. It will, however, not allow users to drag/resize
      // an item past the barrier. They can push items beyond the barrier, though.
      // Intentionally not documented for this reason.
      maxRows: _propTypes.default.number,
      //
      // Flags
      //
      isBounded: _propTypes.default.bool,
      isDraggable: _propTypes.default.bool,
      isResizable: _propTypes.default.bool,
      // If true, grid can be placed one over the other.
      allowOverlap: _propTypes.default.bool,
      // If true, grid items won't change position when being dragged over.
      preventCollision: _propTypes.default.bool,
      // Use CSS transforms instead of top/left
      useCSSTransforms: _propTypes.default.bool,
      // parent layout transform scale
      transformScale: _propTypes.default.number,
      // If true, an external element can trigger onDrop callback with a specific grid position as a parameter
      isDroppable: _propTypes.default.bool,
      // Resize handle options
      resizeHandles: resizeHandleAxesType,
      resizeHandle: resizeHandleType,
      //
      // Callbacks
      //
      // Callback so you can save the layout. Calls after each drag & resize stops.
      onLayoutChange: _propTypes.default.func,
      // Calls when drag starts. Callback is of the signature (layout, oldItem, newItem, placeholder, e, ?node).
      // All callbacks below have the same signature. 'start' and 'stop' callbacks omit the 'placeholder'.
      onDragStart: _propTypes.default.func,
      // Calls on each drag movement.
      onDrag: _propTypes.default.func,
      // Calls when drag is complete.
      onDragStop: _propTypes.default.func,
      //Calls when resize starts.
      onResizeStart: _propTypes.default.func,
      // Calls when resize movement happens.
      onResize: _propTypes.default.func,
      // Calls when resize is complete.
      onResizeStop: _propTypes.default.func,
      // Calls when some element is dropped.
      onDrop: _propTypes.default.func,
      //
      // Other validations
      //
      droppingItem: _propTypes.default.shape({
        i: _propTypes.default.string.isRequired,
        w: _propTypes.default.number.isRequired,
        h: _propTypes.default.number.isRequired
      }),
      // Children must not have duplicate keys.
      children: function(props, propName) {
        const children = props[propName];
        const keys = {};
        _react.default.Children.forEach(children, function(child) {
          if ((child == null ? void 0 : child.key) == null) return;
          if (keys[child.key]) {
            throw new Error('Duplicate child key "' + child.key + '" found! This will cause problems in ReactGridLayout.');
          }
          keys[child.key] = true;
        });
      },
      // Optional ref for getting a reference for the wrapping div.
      innerRef: _propTypes.default.any
    };
  }
});

// ../node_modules/.pnpm/react-grid-layout@1.4.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-grid-layout/build/GridItem.js
var require_GridItem = __commonJS({
  "../node_modules/.pnpm/react-grid-layout@1.4.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-grid-layout/build/GridItem.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _reactDraggable = require_cjs();
    var _reactResizable = require_react_resizable();
    var _utils = require_utils();
    var _calculateUtils = require_calculateUtils();
    var _ReactGridLayoutPropTypes = require_ReactGridLayoutPropTypes();
    var _clsx = _interopRequireDefault(require_clsx());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null) return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    var GridItem = class extends _react.default.Component {
      constructor() {
        super(...arguments);
        _defineProperty(this, "state", {
          resizing: null,
          dragging: null,
          className: ""
        });
        _defineProperty(this, "elementRef", /* @__PURE__ */ _react.default.createRef());
        _defineProperty(this, "onDragStart", (e, _ref) => {
          let {
            node
          } = _ref;
          const {
            onDragStart,
            transformScale
          } = this.props;
          if (!onDragStart) return;
          const newPosition = {
            top: 0,
            left: 0
          };
          const {
            offsetParent
          } = node;
          if (!offsetParent) return;
          const parentRect = offsetParent.getBoundingClientRect();
          const clientRect = node.getBoundingClientRect();
          const cLeft = clientRect.left / transformScale;
          const pLeft = parentRect.left / transformScale;
          const cTop = clientRect.top / transformScale;
          const pTop = parentRect.top / transformScale;
          newPosition.left = cLeft - pLeft + offsetParent.scrollLeft;
          newPosition.top = cTop - pTop + offsetParent.scrollTop;
          this.setState({
            dragging: newPosition
          });
          const {
            x,
            y
          } = (0, _calculateUtils.calcXY)(this.getPositionParams(), newPosition.top, newPosition.left, this.props.w, this.props.h);
          return onDragStart.call(this, this.props.i, x, y, {
            e,
            node,
            newPosition
          });
        });
        _defineProperty(this, "onDrag", (e, _ref2) => {
          let {
            node,
            deltaX,
            deltaY
          } = _ref2;
          const {
            onDrag
          } = this.props;
          if (!onDrag) return;
          if (!this.state.dragging) {
            throw new Error("onDrag called before onDragStart.");
          }
          let top = this.state.dragging.top + deltaY;
          let left = this.state.dragging.left + deltaX;
          const {
            isBounded,
            i,
            w,
            h,
            containerWidth
          } = this.props;
          const positionParams = this.getPositionParams();
          if (isBounded) {
            const {
              offsetParent
            } = node;
            if (offsetParent) {
              const {
                margin,
                rowHeight,
                containerPadding: containerPadding2
              } = this.props;
              const bottomBoundary = offsetParent.clientHeight - (0, _calculateUtils.calcGridItemWHPx)(h, rowHeight, margin[1]);
              top = (0, _calculateUtils.clamp)(top - containerPadding2[1], 0, bottomBoundary);
              const colWidth = (0, _calculateUtils.calcGridColWidth)(positionParams);
              const rightBoundary = containerWidth - (0, _calculateUtils.calcGridItemWHPx)(w, colWidth, margin[0]);
              left = (0, _calculateUtils.clamp)(left - containerPadding2[0], 0, rightBoundary);
            }
          }
          const newPosition = {
            top,
            left
          };
          this.setState({
            dragging: newPosition
          });
          const {
            containerPadding
          } = this.props;
          const {
            x,
            y
          } = (0, _calculateUtils.calcXY)(positionParams, top - containerPadding[1], left - containerPadding[0], w, h);
          return onDrag.call(this, i, x, y, {
            e,
            node,
            newPosition
          });
        });
        _defineProperty(this, "onDragStop", (e, _ref3) => {
          let {
            node
          } = _ref3;
          const {
            onDragStop
          } = this.props;
          if (!onDragStop) return;
          if (!this.state.dragging) {
            throw new Error("onDragEnd called before onDragStart.");
          }
          const {
            w,
            h,
            i,
            containerPadding
          } = this.props;
          const {
            left,
            top
          } = this.state.dragging;
          const newPosition = {
            top,
            left
          };
          this.setState({
            dragging: null
          });
          const {
            x,
            y
          } = (0, _calculateUtils.calcXY)(this.getPositionParams(), top - containerPadding[1], left - containerPadding[0], w, h);
          return onDragStop.call(this, i, x, y, {
            e,
            node,
            newPosition
          });
        });
        _defineProperty(this, "onResizeStop", (e, callbackData, position) => this.onResizeHandler(e, callbackData, position, "onResizeStop"));
        _defineProperty(this, "onResizeStart", (e, callbackData, position) => this.onResizeHandler(e, callbackData, position, "onResizeStart"));
        _defineProperty(this, "onResize", (e, callbackData, position) => this.onResizeHandler(e, callbackData, position, "onResize"));
      }
      shouldComponentUpdate(nextProps, nextState) {
        if (this.props.children !== nextProps.children) return true;
        if (this.props.droppingPosition !== nextProps.droppingPosition) return true;
        const oldPosition = (0, _calculateUtils.calcGridItemPosition)(this.getPositionParams(this.props), this.props.x, this.props.y, this.props.w, this.props.h, this.state);
        const newPosition = (0, _calculateUtils.calcGridItemPosition)(this.getPositionParams(nextProps), nextProps.x, nextProps.y, nextProps.w, nextProps.h, nextState);
        return !(0, _utils.fastPositionEqual)(oldPosition, newPosition) || this.props.useCSSTransforms !== nextProps.useCSSTransforms;
      }
      componentDidMount() {
        this.moveDroppingItem({});
      }
      componentDidUpdate(prevProps) {
        this.moveDroppingItem(prevProps);
      }
      // When a droppingPosition is present, this means we should fire a move event, as if we had moved
      // this element by `x, y` pixels.
      moveDroppingItem(prevProps) {
        const {
          droppingPosition
        } = this.props;
        if (!droppingPosition) return;
        const node = this.elementRef.current;
        if (!node) return;
        const prevDroppingPosition = prevProps.droppingPosition || {
          left: 0,
          top: 0
        };
        const {
          dragging
        } = this.state;
        const shouldDrag = dragging && droppingPosition.left !== prevDroppingPosition.left || droppingPosition.top !== prevDroppingPosition.top;
        if (!dragging) {
          this.onDragStart(droppingPosition.e, {
            node,
            deltaX: droppingPosition.left,
            deltaY: droppingPosition.top
          });
        } else if (shouldDrag) {
          const deltaX = droppingPosition.left - dragging.left;
          const deltaY = droppingPosition.top - dragging.top;
          this.onDrag(droppingPosition.e, {
            node,
            deltaX,
            deltaY
          });
        }
      }
      getPositionParams() {
        let props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props;
        return {
          cols: props.cols,
          containerPadding: props.containerPadding,
          containerWidth: props.containerWidth,
          margin: props.margin,
          maxRows: props.maxRows,
          rowHeight: props.rowHeight
        };
      }
      /**
       * This is where we set the grid item's absolute placement. It gets a little tricky because we want to do it
       * well when server rendering, and the only way to do that properly is to use percentage width/left because
       * we don't know exactly what the browser viewport is.
       * Unfortunately, CSS Transforms, which are great for performance, break in this instance because a percentage
       * left is relative to the item itself, not its container! So we cannot use them on the server rendering pass.
       *
       * @param  {Object} pos Position object with width, height, left, top.
       * @return {Object}     Style object.
       */
      createStyle(pos) {
        const {
          usePercentages,
          containerWidth,
          useCSSTransforms
        } = this.props;
        let style;
        if (useCSSTransforms) {
          style = (0, _utils.setTransform)(pos);
        } else {
          style = (0, _utils.setTopLeft)(pos);
          if (usePercentages) {
            style.left = (0, _utils.perc)(pos.left / containerWidth);
            style.width = (0, _utils.perc)(pos.width / containerWidth);
          }
        }
        return style;
      }
      /**
       * Mix a Draggable instance into a child.
       * @param  {Element} child    Child element.
       * @return {Element}          Child wrapped in Draggable.
       */
      mixinDraggable(child, isDraggable) {
        return /* @__PURE__ */ _react.default.createElement(_reactDraggable.DraggableCore, {
          disabled: !isDraggable,
          onStart: this.onDragStart,
          onDrag: this.onDrag,
          onStop: this.onDragStop,
          handle: this.props.handle,
          cancel: ".react-resizable-handle" + (this.props.cancel ? "," + this.props.cancel : ""),
          scale: this.props.transformScale,
          nodeRef: this.elementRef
        }, child);
      }
      /**
       * Utility function to setup callback handler definitions for
       * similarily structured resize events.
       */
      curryResizeHandler(position, handler) {
        return (e, data) => (
          /*: Function*/
          handler(e, data, position)
        );
      }
      /**
       * Mix a Resizable instance into a child.
       * @param  {Element} child    Child element.
       * @param  {Object} position  Position object (pixel values)
       * @return {Element}          Child wrapped in Resizable.
       */
      mixinResizable(child, position, isResizable) {
        const {
          cols,
          minW,
          minH,
          maxW,
          maxH,
          transformScale,
          resizeHandles,
          resizeHandle
        } = this.props;
        const positionParams = this.getPositionParams();
        const maxWidth = (0, _calculateUtils.calcGridItemPosition)(positionParams, 0, 0, cols, 0).width;
        const mins = (0, _calculateUtils.calcGridItemPosition)(positionParams, 0, 0, minW, minH);
        const maxes = (0, _calculateUtils.calcGridItemPosition)(positionParams, 0, 0, maxW, maxH);
        const minConstraints = [mins.width, mins.height];
        const maxConstraints = [Math.min(maxes.width, maxWidth), Math.min(maxes.height, Infinity)];
        return /* @__PURE__ */ _react.default.createElement(
          _reactResizable.Resizable,
          {
            draggableOpts: {
              disabled: !isResizable
            },
            className: isResizable ? void 0 : "react-resizable-hide",
            width: position.width,
            height: position.height,
            minConstraints,
            maxConstraints,
            onResizeStop: this.curryResizeHandler(position, this.onResizeStop),
            onResizeStart: this.curryResizeHandler(position, this.onResizeStart),
            onResize: this.curryResizeHandler(position, this.onResize),
            transformScale,
            resizeHandles,
            handle: resizeHandle
          },
          child
        );
      }
      /**
       * Wrapper around resize events to provide more useful data.
       */
      onResizeHandler(e, _ref4, position, handlerName) {
        let {
          node,
          size,
          handle
        } = _ref4;
        const handler = this.props[handlerName];
        if (!handler) return;
        const {
          x,
          y,
          i,
          maxH,
          minH,
          containerWidth
        } = this.props;
        const {
          minW,
          maxW
        } = this.props;
        let updatedSize = size;
        if (node) {
          updatedSize = (0, _utils.resizeItemInDirection)(handle, position, size, containerWidth);
          this.setState({
            resizing: handlerName === "onResizeStop" ? null : updatedSize
          });
        }
        let {
          w,
          h
        } = (0, _calculateUtils.calcWH)(this.getPositionParams(), updatedSize.width, updatedSize.height, x, y, handle);
        w = (0, _calculateUtils.clamp)(w, Math.max(minW, 1), maxW);
        h = (0, _calculateUtils.clamp)(h, minH, maxH);
        handler.call(this, i, w, h, {
          e,
          node,
          size: updatedSize,
          handle
        });
      }
      render() {
        const {
          x,
          y,
          w,
          h,
          isDraggable,
          isResizable,
          droppingPosition,
          useCSSTransforms
        } = this.props;
        const pos = (0, _calculateUtils.calcGridItemPosition)(this.getPositionParams(), x, y, w, h, this.state);
        const child = _react.default.Children.only(this.props.children);
        let newChild = /* @__PURE__ */ _react.default.cloneElement(child, {
          ref: this.elementRef,
          className: (0, _clsx.default)("react-grid-item", child.props.className, this.props.className, {
            static: this.props.static,
            resizing: Boolean(this.state.resizing),
            "react-draggable": isDraggable,
            "react-draggable-dragging": Boolean(this.state.dragging),
            dropping: Boolean(droppingPosition),
            cssTransforms: useCSSTransforms
          }),
          // We can set the width and height on the child, but unfortunately we can't set the position.
          style: {
            ...this.props.style,
            ...child.props.style,
            ...this.createStyle(pos)
          }
        });
        newChild = this.mixinResizable(newChild, pos, isResizable);
        newChild = this.mixinDraggable(newChild, isDraggable);
        return newChild;
      }
    };
    exports.default = GridItem;
    _defineProperty(GridItem, "propTypes", {
      // Children must be only a single element
      children: _propTypes.default.element,
      // General grid attributes
      cols: _propTypes.default.number.isRequired,
      containerWidth: _propTypes.default.number.isRequired,
      rowHeight: _propTypes.default.number.isRequired,
      margin: _propTypes.default.array.isRequired,
      maxRows: _propTypes.default.number.isRequired,
      containerPadding: _propTypes.default.array.isRequired,
      // These are all in grid units
      x: _propTypes.default.number.isRequired,
      y: _propTypes.default.number.isRequired,
      w: _propTypes.default.number.isRequired,
      h: _propTypes.default.number.isRequired,
      // All optional
      minW: function(props, propName) {
        const value = props[propName];
        if (typeof value !== "number") return new Error("minWidth not Number");
        if (value > props.w || value > props.maxW) return new Error("minWidth larger than item width/maxWidth");
      },
      maxW: function(props, propName) {
        const value = props[propName];
        if (typeof value !== "number") return new Error("maxWidth not Number");
        if (value < props.w || value < props.minW) return new Error("maxWidth smaller than item width/minWidth");
      },
      minH: function(props, propName) {
        const value = props[propName];
        if (typeof value !== "number") return new Error("minHeight not Number");
        if (value > props.h || value > props.maxH) return new Error("minHeight larger than item height/maxHeight");
      },
      maxH: function(props, propName) {
        const value = props[propName];
        if (typeof value !== "number") return new Error("maxHeight not Number");
        if (value < props.h || value < props.minH) return new Error("maxHeight smaller than item height/minHeight");
      },
      // ID is nice to have for callbacks
      i: _propTypes.default.string.isRequired,
      // Resize handle options
      resizeHandles: _ReactGridLayoutPropTypes.resizeHandleAxesType,
      resizeHandle: _ReactGridLayoutPropTypes.resizeHandleType,
      // Functions
      onDragStop: _propTypes.default.func,
      onDragStart: _propTypes.default.func,
      onDrag: _propTypes.default.func,
      onResizeStop: _propTypes.default.func,
      onResizeStart: _propTypes.default.func,
      onResize: _propTypes.default.func,
      // Flags
      isDraggable: _propTypes.default.bool.isRequired,
      isResizable: _propTypes.default.bool.isRequired,
      isBounded: _propTypes.default.bool.isRequired,
      static: _propTypes.default.bool,
      // Use CSS transforms instead of top/left
      useCSSTransforms: _propTypes.default.bool.isRequired,
      transformScale: _propTypes.default.number,
      // Others
      className: _propTypes.default.string,
      // Selector for draggable handle
      handle: _propTypes.default.string,
      // Selector for draggable cancel (see react-draggable)
      cancel: _propTypes.default.string,
      // Current position of a dropping element
      droppingPosition: _propTypes.default.shape({
        e: _propTypes.default.object.isRequired,
        left: _propTypes.default.number.isRequired,
        top: _propTypes.default.number.isRequired
      })
    });
    _defineProperty(GridItem, "defaultProps", {
      className: "",
      cancel: "",
      handle: "",
      minH: 1,
      minW: 1,
      maxH: Infinity,
      maxW: Infinity,
      transformScale: 1
    });
  }
});

// ../node_modules/.pnpm/react-grid-layout@1.4.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-grid-layout/build/ReactGridLayout.js
var require_ReactGridLayout = __commonJS({
  "../node_modules/.pnpm/react-grid-layout@1.4.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-grid-layout/build/ReactGridLayout.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React11 = _interopRequireWildcard(require_react());
    var _fastEquals = require_fast_equals();
    var _clsx = _interopRequireDefault(require_clsx());
    var _utils = require_utils();
    var _calculateUtils = require_calculateUtils();
    var _GridItem = _interopRequireDefault(require_GridItem());
    var _ReactGridLayoutPropTypes = _interopRequireDefault(require_ReactGridLayoutPropTypes());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _getRequireWildcardCache(e) {
      if ("function" != typeof WeakMap) return null;
      var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(e2) {
        return e2 ? t : r;
      })(e);
    }
    function _interopRequireWildcard(e, r) {
      if (!r && e && e.__esModule) return e;
      if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
      var t = _getRequireWildcardCache(r);
      if (t && t.has(e)) return t.get(e);
      var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
        var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
        i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
      }
      return n.default = e, t && t.set(e, n), n;
    }
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null) return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    var layoutClassName = "react-grid-layout";
    var isFirefox = false;
    try {
      isFirefox = /firefox/i.test(navigator.userAgent);
    } catch (e) {
    }
    var ReactGridLayout = class extends React11.Component {
      constructor() {
        super(...arguments);
        _defineProperty(this, "state", {
          activeDrag: null,
          layout: (0, _utils.synchronizeLayoutWithChildren)(
            this.props.layout,
            this.props.children,
            this.props.cols,
            // Legacy support for verticalCompact: false
            (0, _utils.compactType)(this.props),
            this.props.allowOverlap
          ),
          mounted: false,
          oldDragItem: null,
          oldLayout: null,
          oldResizeItem: null,
          resizing: false,
          droppingDOMNode: null,
          children: []
        });
        _defineProperty(this, "dragEnterCounter", 0);
        _defineProperty(this, "onDragStart", (i, x, y, _ref) => {
          let {
            e,
            node
          } = _ref;
          const {
            layout
          } = this.state;
          const l = (0, _utils.getLayoutItem)(layout, i);
          if (!l) return;
          const placeholder = {
            w: l.w,
            h: l.h,
            x: l.x,
            y: l.y,
            placeholder: true,
            i
          };
          this.setState({
            oldDragItem: (0, _utils.cloneLayoutItem)(l),
            oldLayout: layout,
            activeDrag: placeholder
          });
          return this.props.onDragStart(layout, l, l, null, e, node);
        });
        _defineProperty(this, "onDrag", (i, x, y, _ref2) => {
          let {
            e,
            node
          } = _ref2;
          const {
            oldDragItem
          } = this.state;
          let {
            layout
          } = this.state;
          const {
            cols,
            allowOverlap,
            preventCollision
          } = this.props;
          const l = (0, _utils.getLayoutItem)(layout, i);
          if (!l) return;
          const placeholder = {
            w: l.w,
            h: l.h,
            x: l.x,
            y: l.y,
            placeholder: true,
            i
          };
          const isUserAction = true;
          layout = (0, _utils.moveElement)(layout, l, x, y, isUserAction, preventCollision, (0, _utils.compactType)(this.props), cols, allowOverlap);
          this.props.onDrag(layout, oldDragItem, l, placeholder, e, node);
          this.setState({
            layout: allowOverlap ? layout : (0, _utils.compact)(layout, (0, _utils.compactType)(this.props), cols),
            activeDrag: placeholder
          });
        });
        _defineProperty(this, "onDragStop", (i, x, y, _ref3) => {
          let {
            e,
            node
          } = _ref3;
          if (!this.state.activeDrag) return;
          const {
            oldDragItem
          } = this.state;
          let {
            layout
          } = this.state;
          const {
            cols,
            preventCollision,
            allowOverlap
          } = this.props;
          const l = (0, _utils.getLayoutItem)(layout, i);
          if (!l) return;
          const isUserAction = true;
          layout = (0, _utils.moveElement)(layout, l, x, y, isUserAction, preventCollision, (0, _utils.compactType)(this.props), cols, allowOverlap);
          const newLayout = allowOverlap ? layout : (0, _utils.compact)(layout, (0, _utils.compactType)(this.props), cols);
          this.props.onDragStop(newLayout, oldDragItem, l, null, e, node);
          const {
            oldLayout
          } = this.state;
          this.setState({
            activeDrag: null,
            layout: newLayout,
            oldDragItem: null,
            oldLayout: null
          });
          this.onLayoutMaybeChanged(newLayout, oldLayout);
        });
        _defineProperty(this, "onResizeStart", (i, w, h, _ref4) => {
          let {
            e,
            node
          } = _ref4;
          const {
            layout
          } = this.state;
          const l = (0, _utils.getLayoutItem)(layout, i);
          if (!l) return;
          this.setState({
            oldResizeItem: (0, _utils.cloneLayoutItem)(l),
            oldLayout: this.state.layout,
            resizing: true
          });
          this.props.onResizeStart(layout, l, l, null, e, node);
        });
        _defineProperty(this, "onResize", (i, w, h, _ref5) => {
          let {
            e,
            node,
            size,
            handle
          } = _ref5;
          const {
            oldResizeItem
          } = this.state;
          const {
            layout
          } = this.state;
          const {
            cols,
            preventCollision,
            allowOverlap
          } = this.props;
          let shouldMoveItem = false;
          let finalLayout;
          let x;
          let y;
          const [newLayout, l] = (0, _utils.withLayoutItem)(layout, i, (l2) => {
            let hasCollisions;
            x = l2.x;
            y = l2.y;
            if (["sw", "w", "nw", "n", "ne"].indexOf(handle) !== -1) {
              if (["sw", "nw", "w"].indexOf(handle) !== -1) {
                x = l2.x + (l2.w - w);
                w = l2.x !== x && x < 0 ? l2.w : w;
                x = x < 0 ? 0 : x;
              }
              if (["ne", "n", "nw"].indexOf(handle) !== -1) {
                y = l2.y + (l2.h - h);
                h = l2.y !== y && y < 0 ? l2.h : h;
                y = y < 0 ? 0 : y;
              }
              shouldMoveItem = true;
            }
            if (preventCollision && !allowOverlap) {
              const collisions = (0, _utils.getAllCollisions)(layout, {
                ...l2,
                w,
                h,
                x,
                y
              }).filter((layoutItem) => layoutItem.i !== l2.i);
              hasCollisions = collisions.length > 0;
              if (hasCollisions) {
                y = l2.y;
                h = l2.h;
                x = l2.x;
                w = l2.w;
                shouldMoveItem = false;
              }
            }
            l2.w = w;
            l2.h = h;
            return l2;
          });
          if (!l) return;
          finalLayout = newLayout;
          if (shouldMoveItem) {
            const isUserAction = true;
            finalLayout = (0, _utils.moveElement)(newLayout, l, x, y, isUserAction, this.props.preventCollision, (0, _utils.compactType)(this.props), cols, allowOverlap);
          }
          const placeholder = {
            w: l.w,
            h: l.h,
            x: l.x,
            y: l.y,
            static: true,
            i
          };
          this.props.onResize(finalLayout, oldResizeItem, l, placeholder, e, node);
          this.setState({
            layout: allowOverlap ? finalLayout : (0, _utils.compact)(finalLayout, (0, _utils.compactType)(this.props), cols),
            activeDrag: placeholder
          });
        });
        _defineProperty(this, "onResizeStop", (i, w, h, _ref6) => {
          let {
            e,
            node
          } = _ref6;
          const {
            layout,
            oldResizeItem
          } = this.state;
          const {
            cols,
            allowOverlap
          } = this.props;
          const l = (0, _utils.getLayoutItem)(layout, i);
          const newLayout = allowOverlap ? layout : (0, _utils.compact)(layout, (0, _utils.compactType)(this.props), cols);
          this.props.onResizeStop(newLayout, oldResizeItem, l, null, e, node);
          const {
            oldLayout
          } = this.state;
          this.setState({
            activeDrag: null,
            layout: newLayout,
            oldResizeItem: null,
            oldLayout: null,
            resizing: false
          });
          this.onLayoutMaybeChanged(newLayout, oldLayout);
        });
        _defineProperty(this, "onDragOver", (e) => {
          var _a;
          e.preventDefault();
          e.stopPropagation();
          if (isFirefox && // $FlowIgnore can't figure this out
          !((_a = e.nativeEvent.target) == null ? void 0 : _a.classList.contains(layoutClassName))) {
            return false;
          }
          const {
            droppingItem,
            onDropDragOver,
            margin,
            cols,
            rowHeight,
            maxRows,
            width,
            containerPadding,
            transformScale
          } = this.props;
          const onDragOverResult = onDropDragOver == null ? void 0 : onDropDragOver(e);
          if (onDragOverResult === false) {
            if (this.state.droppingDOMNode) {
              this.removeDroppingPlaceholder();
            }
            return false;
          }
          const finalDroppingItem = {
            ...droppingItem,
            ...onDragOverResult
          };
          const {
            layout
          } = this.state;
          const gridRect = e.currentTarget.getBoundingClientRect();
          const layerX = e.clientX - gridRect.left;
          const layerY = e.clientY - gridRect.top;
          const droppingPosition = {
            left: layerX / transformScale,
            top: layerY / transformScale,
            e
          };
          if (!this.state.droppingDOMNode) {
            const positionParams = {
              cols,
              margin,
              maxRows,
              rowHeight,
              containerWidth: width,
              containerPadding: containerPadding || margin
            };
            const calculatedPosition = (0, _calculateUtils.calcXY)(positionParams, layerY, layerX, finalDroppingItem.w, finalDroppingItem.h);
            this.setState({
              droppingDOMNode: /* @__PURE__ */ React11.createElement("div", {
                key: finalDroppingItem.i
              }),
              droppingPosition,
              layout: [...layout, {
                ...finalDroppingItem,
                x: calculatedPosition.x,
                y: calculatedPosition.y,
                static: false,
                isDraggable: true
              }]
            });
          } else if (this.state.droppingPosition) {
            const {
              left,
              top
            } = this.state.droppingPosition;
            const shouldUpdatePosition = left != layerX || top != layerY;
            if (shouldUpdatePosition) {
              this.setState({
                droppingPosition
              });
            }
          }
        });
        _defineProperty(this, "removeDroppingPlaceholder", () => {
          const {
            droppingItem,
            cols
          } = this.props;
          const {
            layout
          } = this.state;
          const newLayout = (0, _utils.compact)(layout.filter((l) => l.i !== droppingItem.i), (0, _utils.compactType)(this.props), cols, this.props.allowOverlap);
          this.setState({
            layout: newLayout,
            droppingDOMNode: null,
            activeDrag: null,
            droppingPosition: void 0
          });
        });
        _defineProperty(this, "onDragLeave", (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.dragEnterCounter--;
          if (this.dragEnterCounter === 0) {
            this.removeDroppingPlaceholder();
          }
        });
        _defineProperty(this, "onDragEnter", (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.dragEnterCounter++;
        });
        _defineProperty(this, "onDrop", (e) => {
          e.preventDefault();
          e.stopPropagation();
          const {
            droppingItem
          } = this.props;
          const {
            layout
          } = this.state;
          const item = layout.find((l) => l.i === droppingItem.i);
          this.dragEnterCounter = 0;
          this.removeDroppingPlaceholder();
          this.props.onDrop(layout, item, e);
        });
      }
      componentDidMount() {
        this.setState({
          mounted: true
        });
        this.onLayoutMaybeChanged(this.state.layout, this.props.layout);
      }
      static getDerivedStateFromProps(nextProps, prevState) {
        let newLayoutBase;
        if (prevState.activeDrag) {
          return null;
        }
        if (!(0, _fastEquals.deepEqual)(nextProps.layout, prevState.propsLayout) || nextProps.compactType !== prevState.compactType) {
          newLayoutBase = nextProps.layout;
        } else if (!(0, _utils.childrenEqual)(nextProps.children, prevState.children)) {
          newLayoutBase = prevState.layout;
        }
        if (newLayoutBase) {
          const newLayout = (0, _utils.synchronizeLayoutWithChildren)(newLayoutBase, nextProps.children, nextProps.cols, (0, _utils.compactType)(nextProps), nextProps.allowOverlap);
          return {
            layout: newLayout,
            // We need to save these props to state for using
            // getDerivedStateFromProps instead of componentDidMount (in which we would get extra rerender)
            compactType: nextProps.compactType,
            children: nextProps.children,
            propsLayout: nextProps.layout
          };
        }
        return null;
      }
      shouldComponentUpdate(nextProps, nextState) {
        return (
          // NOTE: this is almost always unequal. Therefore the only way to get better performance
          // from SCU is if the user intentionally memoizes children. If they do, and they can
          // handle changes properly, performance will increase.
          this.props.children !== nextProps.children || !(0, _utils.fastRGLPropsEqual)(this.props, nextProps, _fastEquals.deepEqual) || this.state.activeDrag !== nextState.activeDrag || this.state.mounted !== nextState.mounted || this.state.droppingPosition !== nextState.droppingPosition
        );
      }
      componentDidUpdate(prevProps, prevState) {
        if (!this.state.activeDrag) {
          const newLayout = this.state.layout;
          const oldLayout = prevState.layout;
          this.onLayoutMaybeChanged(newLayout, oldLayout);
        }
      }
      /**
       * Calculates a pixel value for the container.
       * @return {String} Container height in pixels.
       */
      containerHeight() {
        if (!this.props.autoSize) return;
        const nbRow = (0, _utils.bottom)(this.state.layout);
        const containerPaddingY = this.props.containerPadding ? this.props.containerPadding[1] : this.props.margin[1];
        return nbRow * this.props.rowHeight + (nbRow - 1) * this.props.margin[1] + containerPaddingY * 2 + "px";
      }
      onLayoutMaybeChanged(newLayout, oldLayout) {
        if (!oldLayout) oldLayout = this.state.layout;
        if (!(0, _fastEquals.deepEqual)(oldLayout, newLayout)) {
          this.props.onLayoutChange(newLayout);
        }
      }
      /**
       * Create a placeholder object.
       * @return {Element} Placeholder div.
       */
      placeholder() {
        const {
          activeDrag
        } = this.state;
        if (!activeDrag) return null;
        const {
          width,
          cols,
          margin,
          containerPadding,
          rowHeight,
          maxRows,
          useCSSTransforms,
          transformScale
        } = this.props;
        return /* @__PURE__ */ React11.createElement(_GridItem.default, {
          w: activeDrag.w,
          h: activeDrag.h,
          x: activeDrag.x,
          y: activeDrag.y,
          i: activeDrag.i,
          className: `react-grid-placeholder ${this.state.resizing ? "placeholder-resizing" : ""}`,
          containerWidth: width,
          cols,
          margin,
          containerPadding: containerPadding || margin,
          maxRows,
          rowHeight,
          isDraggable: false,
          isResizable: false,
          isBounded: false,
          useCSSTransforms,
          transformScale
        }, /* @__PURE__ */ React11.createElement("div", null));
      }
      /**
       * Given a grid item, set its style attributes & surround in a <Draggable>.
       * @param  {Element} child React element.
       * @return {Element}       Element wrapped in draggable and properly placed.
       */
      processGridItem(child, isDroppingItem) {
        if (!child || !child.key) return;
        const l = (0, _utils.getLayoutItem)(this.state.layout, String(child.key));
        if (!l) return null;
        const {
          width,
          cols,
          margin,
          containerPadding,
          rowHeight,
          maxRows,
          isDraggable,
          isResizable,
          isBounded,
          useCSSTransforms,
          transformScale,
          draggableCancel,
          draggableHandle,
          resizeHandles,
          resizeHandle
        } = this.props;
        const {
          mounted,
          droppingPosition
        } = this.state;
        const draggable = typeof l.isDraggable === "boolean" ? l.isDraggable : !l.static && isDraggable;
        const resizable = typeof l.isResizable === "boolean" ? l.isResizable : !l.static && isResizable;
        const resizeHandlesOptions = l.resizeHandles || resizeHandles;
        const bounded = draggable && isBounded && l.isBounded !== false;
        return /* @__PURE__ */ React11.createElement(_GridItem.default, {
          containerWidth: width,
          cols,
          margin,
          containerPadding: containerPadding || margin,
          maxRows,
          rowHeight,
          cancel: draggableCancel,
          handle: draggableHandle,
          onDragStop: this.onDragStop,
          onDragStart: this.onDragStart,
          onDrag: this.onDrag,
          onResizeStart: this.onResizeStart,
          onResize: this.onResize,
          onResizeStop: this.onResizeStop,
          isDraggable: draggable,
          isResizable: resizable,
          isBounded: bounded,
          useCSSTransforms: useCSSTransforms && mounted,
          usePercentages: !mounted,
          transformScale,
          w: l.w,
          h: l.h,
          x: l.x,
          y: l.y,
          i: l.i,
          minH: l.minH,
          minW: l.minW,
          maxH: l.maxH,
          maxW: l.maxW,
          static: l.static,
          droppingPosition: isDroppingItem ? droppingPosition : void 0,
          resizeHandles: resizeHandlesOptions,
          resizeHandle
        }, child);
      }
      render() {
        const {
          className,
          style,
          isDroppable,
          innerRef
        } = this.props;
        const mergedClassName = (0, _clsx.default)(layoutClassName, className);
        const mergedStyle = {
          height: this.containerHeight(),
          ...style
        };
        return /* @__PURE__ */ React11.createElement("div", {
          ref: innerRef,
          className: mergedClassName,
          style: mergedStyle,
          onDrop: isDroppable ? this.onDrop : _utils.noop,
          onDragLeave: isDroppable ? this.onDragLeave : _utils.noop,
          onDragEnter: isDroppable ? this.onDragEnter : _utils.noop,
          onDragOver: isDroppable ? this.onDragOver : _utils.noop
        }, React11.Children.map(this.props.children, (child) => this.processGridItem(child)), isDroppable && this.state.droppingDOMNode && this.processGridItem(this.state.droppingDOMNode, true), this.placeholder());
      }
    };
    exports.default = ReactGridLayout;
    _defineProperty(ReactGridLayout, "displayName", "ReactGridLayout");
    _defineProperty(ReactGridLayout, "propTypes", _ReactGridLayoutPropTypes.default);
    _defineProperty(ReactGridLayout, "defaultProps", {
      autoSize: true,
      cols: 12,
      className: "",
      style: {},
      draggableHandle: "",
      draggableCancel: "",
      containerPadding: null,
      rowHeight: 150,
      maxRows: Infinity,
      // infinite vertical growth
      layout: [],
      margin: [10, 10],
      isBounded: false,
      isDraggable: true,
      isResizable: true,
      allowOverlap: false,
      isDroppable: false,
      useCSSTransforms: true,
      transformScale: 1,
      verticalCompact: true,
      compactType: "vertical",
      preventCollision: false,
      droppingItem: {
        i: "__dropping-elem__",
        h: 1,
        w: 1
      },
      resizeHandles: ["se"],
      onLayoutChange: _utils.noop,
      onDragStart: _utils.noop,
      onDrag: _utils.noop,
      onDragStop: _utils.noop,
      onResizeStart: _utils.noop,
      onResize: _utils.noop,
      onResizeStop: _utils.noop,
      onDrop: _utils.noop,
      onDropDragOver: _utils.noop
    });
  }
});

// ../node_modules/.pnpm/react-grid-layout@1.4.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-grid-layout/build/responsiveUtils.js
var require_responsiveUtils = __commonJS({
  "../node_modules/.pnpm/react-grid-layout@1.4.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-grid-layout/build/responsiveUtils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.findOrGenerateResponsiveLayout = findOrGenerateResponsiveLayout;
    exports.getBreakpointFromWidth = getBreakpointFromWidth;
    exports.getColsFromBreakpoint = getColsFromBreakpoint;
    exports.sortBreakpoints = sortBreakpoints;
    var _utils = require_utils();
    function getBreakpointFromWidth(breakpoints, width) {
      const sorted = sortBreakpoints(breakpoints);
      let matching = sorted[0];
      for (let i = 1, len = sorted.length; i < len; i++) {
        const breakpointName = sorted[i];
        if (width > breakpoints[breakpointName]) matching = breakpointName;
      }
      return matching;
    }
    function getColsFromBreakpoint(breakpoint, cols) {
      if (!cols[breakpoint]) {
        throw new Error("ResponsiveReactGridLayout: `cols` entry for breakpoint " + breakpoint + " is missing!");
      }
      return cols[breakpoint];
    }
    function findOrGenerateResponsiveLayout(layouts, breakpoints, breakpoint, lastBreakpoint, cols, compactType) {
      if (layouts[breakpoint]) return (0, _utils.cloneLayout)(layouts[breakpoint]);
      let layout = layouts[lastBreakpoint];
      const breakpointsSorted = sortBreakpoints(breakpoints);
      const breakpointsAbove = breakpointsSorted.slice(breakpointsSorted.indexOf(breakpoint));
      for (let i = 0, len = breakpointsAbove.length; i < len; i++) {
        const b = breakpointsAbove[i];
        if (layouts[b]) {
          layout = layouts[b];
          break;
        }
      }
      layout = (0, _utils.cloneLayout)(layout || []);
      return (0, _utils.compact)((0, _utils.correctBounds)(layout, {
        cols
      }), compactType, cols);
    }
    function sortBreakpoints(breakpoints) {
      const keys = Object.keys(breakpoints);
      return keys.sort(function(a, b) {
        return breakpoints[a] - breakpoints[b];
      });
    }
  }
});

// ../node_modules/.pnpm/react-grid-layout@1.4.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-grid-layout/build/ResponsiveReactGridLayout.js
var require_ResponsiveReactGridLayout = __commonJS({
  "../node_modules/.pnpm/react-grid-layout@1.4.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-grid-layout/build/ResponsiveReactGridLayout.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React11 = _interopRequireWildcard(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _fastEquals = require_fast_equals();
    var _utils = require_utils();
    var _responsiveUtils = require_responsiveUtils();
    var _ReactGridLayout = _interopRequireDefault(require_ReactGridLayout());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _getRequireWildcardCache(e) {
      if ("function" != typeof WeakMap) return null;
      var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(e2) {
        return e2 ? t : r;
      })(e);
    }
    function _interopRequireWildcard(e, r) {
      if (!r && e && e.__esModule) return e;
      if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
      var t = _getRequireWildcardCache(r);
      if (t && t.has(e)) return t.get(e);
      var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
        var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
        i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
      }
      return n.default = e, t && t.set(e, n), n;
    }
    function _extends() {
      _extends = Object.assign ? Object.assign.bind() : function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null) return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    var type = (obj) => Object.prototype.toString.call(obj);
    function getIndentationValue(param, breakpoint) {
      if (param == null) return null;
      return Array.isArray(param) ? param : param[breakpoint];
    }
    var ResponsiveReactGridLayout = class extends React11.Component {
      constructor() {
        super(...arguments);
        _defineProperty(this, "state", this.generateInitialState());
        _defineProperty(this, "onLayoutChange", (layout) => {
          this.props.onLayoutChange(layout, {
            ...this.props.layouts,
            [this.state.breakpoint]: layout
          });
        });
      }
      generateInitialState() {
        const {
          width,
          breakpoints,
          layouts,
          cols
        } = this.props;
        const breakpoint = (0, _responsiveUtils.getBreakpointFromWidth)(breakpoints, width);
        const colNo = (0, _responsiveUtils.getColsFromBreakpoint)(breakpoint, cols);
        const compactType = this.props.verticalCompact === false ? null : this.props.compactType;
        const initialLayout = (0, _responsiveUtils.findOrGenerateResponsiveLayout)(layouts, breakpoints, breakpoint, breakpoint, colNo, compactType);
        return {
          layout: initialLayout,
          breakpoint,
          cols: colNo
        };
      }
      static getDerivedStateFromProps(nextProps, prevState) {
        if (!(0, _fastEquals.deepEqual)(nextProps.layouts, prevState.layouts)) {
          const {
            breakpoint,
            cols
          } = prevState;
          const newLayout = (0, _responsiveUtils.findOrGenerateResponsiveLayout)(nextProps.layouts, nextProps.breakpoints, breakpoint, breakpoint, cols, nextProps.compactType);
          return {
            layout: newLayout,
            layouts: nextProps.layouts
          };
        }
        return null;
      }
      componentDidUpdate(prevProps) {
        if (this.props.width != prevProps.width || this.props.breakpoint !== prevProps.breakpoint || !(0, _fastEquals.deepEqual)(this.props.breakpoints, prevProps.breakpoints) || !(0, _fastEquals.deepEqual)(this.props.cols, prevProps.cols)) {
          this.onWidthChange(prevProps);
        }
      }
      /**
       * When the width changes work through breakpoints and reset state with the new width & breakpoint.
       * Width changes are necessary to figure out the widget widths.
       */
      onWidthChange(prevProps) {
        const {
          breakpoints,
          cols,
          layouts,
          compactType
        } = this.props;
        const newBreakpoint = this.props.breakpoint || (0, _responsiveUtils.getBreakpointFromWidth)(this.props.breakpoints, this.props.width);
        const lastBreakpoint = this.state.breakpoint;
        const newCols = (0, _responsiveUtils.getColsFromBreakpoint)(newBreakpoint, cols);
        const newLayouts = {
          ...layouts
        };
        if (lastBreakpoint !== newBreakpoint || prevProps.breakpoints !== breakpoints || prevProps.cols !== cols) {
          if (!(lastBreakpoint in newLayouts)) newLayouts[lastBreakpoint] = (0, _utils.cloneLayout)(this.state.layout);
          let layout = (0, _responsiveUtils.findOrGenerateResponsiveLayout)(newLayouts, breakpoints, newBreakpoint, lastBreakpoint, newCols, compactType);
          layout = (0, _utils.synchronizeLayoutWithChildren)(layout, this.props.children, newCols, compactType, this.props.allowOverlap);
          newLayouts[newBreakpoint] = layout;
          this.props.onLayoutChange(layout, newLayouts);
          this.props.onBreakpointChange(newBreakpoint, newCols);
          this.setState({
            breakpoint: newBreakpoint,
            layout,
            cols: newCols
          });
        }
        const margin = getIndentationValue(this.props.margin, newBreakpoint);
        const containerPadding = getIndentationValue(this.props.containerPadding, newBreakpoint);
        this.props.onWidthChange(this.props.width, margin, newCols, containerPadding);
      }
      render() {
        const {
          breakpoint,
          breakpoints,
          cols,
          layouts,
          margin,
          containerPadding,
          onBreakpointChange,
          onLayoutChange,
          onWidthChange,
          ...other
        } = this.props;
        return /* @__PURE__ */ React11.createElement(_ReactGridLayout.default, _extends({}, other, {
          // $FlowIgnore should allow nullable here due to DefaultProps
          margin: getIndentationValue(margin, this.state.breakpoint),
          containerPadding: getIndentationValue(containerPadding, this.state.breakpoint),
          onLayoutChange: this.onLayoutChange,
          layout: this.state.layout,
          cols: this.state.cols
        }));
      }
    };
    exports.default = ResponsiveReactGridLayout;
    _defineProperty(ResponsiveReactGridLayout, "propTypes", {
      //
      // Basic props
      //
      // Optional, but if you are managing width yourself you may want to set the breakpoint
      // yourself as well.
      breakpoint: _propTypes.default.string,
      // {name: pxVal}, e.g. {lg: 1200, md: 996, sm: 768, xs: 480}
      breakpoints: _propTypes.default.object,
      allowOverlap: _propTypes.default.bool,
      // # of cols. This is a breakpoint -> cols map
      cols: _propTypes.default.object,
      // # of margin. This is a breakpoint -> margin map
      // e.g. { lg: [5, 5], md: [10, 10], sm: [15, 15] }
      // Margin between items [x, y] in px
      // e.g. [10, 10]
      margin: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object]),
      // # of containerPadding. This is a breakpoint -> containerPadding map
      // e.g. { lg: [5, 5], md: [10, 10], sm: [15, 15] }
      // Padding inside the container [x, y] in px
      // e.g. [10, 10]
      containerPadding: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object]),
      // layouts is an object mapping breakpoints to layouts.
      // e.g. {lg: Layout, md: Layout, ...}
      layouts(props, propName) {
        if (type(props[propName]) !== "[object Object]") {
          throw new Error("Layout property must be an object. Received: " + type(props[propName]));
        }
        Object.keys(props[propName]).forEach((key) => {
          if (!(key in props.breakpoints)) {
            throw new Error("Each key in layouts must align with a key in breakpoints.");
          }
          (0, _utils.validateLayout)(props.layouts[key], "layouts." + key);
        });
      },
      // The width of this component.
      // Required in this propTypes stanza because generateInitialState() will fail without it.
      width: _propTypes.default.number.isRequired,
      //
      // Callbacks
      //
      // Calls back with breakpoint and new # cols
      onBreakpointChange: _propTypes.default.func,
      // Callback so you can save the layout.
      // Calls back with (currentLayout, allLayouts). allLayouts are keyed by breakpoint.
      onLayoutChange: _propTypes.default.func,
      // Calls back with (containerWidth, margin, cols, containerPadding)
      onWidthChange: _propTypes.default.func
    });
    _defineProperty(ResponsiveReactGridLayout, "defaultProps", {
      breakpoints: {
        lg: 1200,
        md: 996,
        sm: 768,
        xs: 480,
        xxs: 0
      },
      cols: {
        lg: 12,
        md: 10,
        sm: 6,
        xs: 4,
        xxs: 2
      },
      containerPadding: {
        lg: null,
        md: null,
        sm: null,
        xs: null,
        xxs: null
      },
      layouts: {},
      margin: [10, 10],
      allowOverlap: false,
      onBreakpointChange: _utils.noop,
      onLayoutChange: _utils.noop,
      onWidthChange: _utils.noop
    });
  }
});

// ../node_modules/.pnpm/react-grid-layout@1.4.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-grid-layout/build/components/WidthProvider.js
var require_WidthProvider = __commonJS({
  "../node_modules/.pnpm/react-grid-layout@1.4.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-grid-layout/build/components/WidthProvider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = WidthProvideRGL;
    var React11 = _interopRequireWildcard(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _resizeObserverPolyfill = _interopRequireDefault(require_ResizeObserver());
    var _clsx = _interopRequireDefault(require_clsx());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _getRequireWildcardCache(e) {
      if ("function" != typeof WeakMap) return null;
      var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(e2) {
        return e2 ? t : r;
      })(e);
    }
    function _interopRequireWildcard(e, r) {
      if (!r && e && e.__esModule) return e;
      if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
      var t = _getRequireWildcardCache(r);
      if (t && t.has(e)) return t.get(e);
      var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
        var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
        i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
      }
      return n.default = e, t && t.set(e, n), n;
    }
    function _extends() {
      _extends = Object.assign ? Object.assign.bind() : function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null) return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    var layoutClassName = "react-grid-layout";
    function WidthProvideRGL(ComposedComponent) {
      var _class;
      return _class = class WidthProvider extends React11.Component {
        constructor() {
          super(...arguments);
          _defineProperty(this, "state", {
            width: 1280
          });
          _defineProperty(this, "elementRef", /* @__PURE__ */ React11.createRef());
          _defineProperty(this, "mounted", false);
          _defineProperty(this, "resizeObserver", void 0);
        }
        componentDidMount() {
          this.mounted = true;
          this.resizeObserver = new _resizeObserverPolyfill.default((entries) => {
            const node2 = this.elementRef.current;
            if (node2 instanceof HTMLElement) {
              const width = entries[0].contentRect.width;
              this.setState({
                width
              });
            }
          });
          const node = this.elementRef.current;
          if (node instanceof HTMLElement) {
            this.resizeObserver.observe(node);
          }
        }
        componentWillUnmount() {
          this.mounted = false;
          const node = this.elementRef.current;
          if (node instanceof HTMLElement) {
            this.resizeObserver.unobserve(node);
          }
          this.resizeObserver.disconnect();
        }
        render() {
          const {
            measureBeforeMount,
            ...rest
          } = this.props;
          if (measureBeforeMount && !this.mounted) {
            return /* @__PURE__ */ React11.createElement("div", {
              className: (0, _clsx.default)(this.props.className, layoutClassName),
              style: this.props.style,
              ref: this.elementRef
            });
          }
          return /* @__PURE__ */ React11.createElement(ComposedComponent, _extends({
            innerRef: this.elementRef
          }, rest, this.state));
        }
      }, _defineProperty(_class, "defaultProps", {
        measureBeforeMount: false
      }), _defineProperty(_class, "propTypes", {
        // If true, will not render children until mounted. Useful for getting the exact width before
        // rendering, to prevent any unsightly resizing.
        measureBeforeMount: _propTypes.default.bool
      }), _class;
    }
  }
});

// ../node_modules/.pnpm/react-grid-layout@1.4.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-grid-layout/index.js
var require_react_grid_layout = __commonJS({
  "../node_modules/.pnpm/react-grid-layout@1.4.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-grid-layout/index.js"(exports, module) {
    module.exports = require_ReactGridLayout().default;
    module.exports.utils = require_utils();
    module.exports.calculateUtils = require_calculateUtils();
    module.exports.Responsive = require_ResponsiveReactGridLayout().default;
    module.exports.Responsive.utils = require_responsiveUtils();
    module.exports.WidthProvider = require_WidthProvider().default;
  }
});

// ../packages/sheets-conditional-formatting-ui/src/commands/commands/add-average-cf.command.ts
var AddAverageCfCommand = {
  type: 0 /* COMMAND */,
  id: "sheet.command.add-average-conditional-rule",
  handler(accessor, params) {
    if (!params) {
      return false;
    }
    const { ranges, style, stopIfTrue, operator } = params;
    const conditionalFormattingRuleModel = accessor.get(ConditionalFormattingRuleModel);
    const commandService = accessor.get(ICommandService);
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const target = getSheetCommandTarget(univerInstanceService);
    if (!target) return false;
    const { unitId, subUnitId } = target;
    const cfId = conditionalFormattingRuleModel.createCfId(unitId, subUnitId);
    const rule = {
      ranges,
      cfId,
      stopIfTrue: !!stopIfTrue,
      rule: {
        type: "highlightCell" /* highlightCell */,
        subType: "average" /* average */,
        operator,
        style
      }
    };
    const result = commandService.executeCommand(AddConditionalRuleMutation.id, { unitId, subUnitId, rule });
    return result;
  }
};

// ../packages/sheets-conditional-formatting-ui/src/commands/commands/add-color-scale-cf.command.ts
var AddColorScaleConditionalRuleCommand = {
  type: 0 /* COMMAND */,
  id: "sheet.command.add-color-scale-conditional-rule",
  handler(accessor, params) {
    if (!params) {
      return false;
    }
    const { ranges, config, stopIfTrue } = params;
    const conditionalFormattingRuleModel = accessor.get(ConditionalFormattingRuleModel);
    const commandService = accessor.get(ICommandService);
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const target = getSheetCommandTarget(univerInstanceService);
    if (!target) return false;
    const { unitId, subUnitId } = target;
    const cfId = conditionalFormattingRuleModel.createCfId(unitId, subUnitId);
    const rule = {
      ranges,
      cfId,
      stopIfTrue: !!stopIfTrue,
      rule: {
        type: "colorScale" /* colorScale */,
        config
      }
    };
    return commandService.executeCommand(AddConditionalRuleMutation.id, { unitId, subUnitId, rule });
  }
};

// ../packages/sheets-conditional-formatting-ui/src/commands/commands/add-data-bar-cf.command.ts
var AddDataBarConditionalRuleCommand = {
  type: 0 /* COMMAND */,
  id: "sheet.command.add-data-bar-conditional-rule",
  handler(accessor, params) {
    if (!params) {
      return false;
    }
    const { ranges, min, max, nativeColor, positiveColor, isGradient, stopIfTrue, isShowValue } = params;
    const conditionalFormattingRuleModel = accessor.get(ConditionalFormattingRuleModel);
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const target = getSheetCommandTarget(univerInstanceService);
    if (!target) return false;
    const { unitId, subUnitId } = target;
    const commandService = accessor.get(ICommandService);
    const cfId = conditionalFormattingRuleModel.createCfId(unitId, subUnitId);
    const rule = {
      ranges,
      cfId,
      stopIfTrue: !!stopIfTrue,
      rule: {
        type: "dataBar" /* dataBar */,
        isShowValue,
        config: {
          min,
          max,
          nativeColor,
          positiveColor,
          isGradient
        }
      }
    };
    return commandService.executeCommand(AddConditionalRuleMutation.id, { unitId, subUnitId, rule });
  }
};

// ../packages/sheets-conditional-formatting-ui/src/commands/commands/add-duplicate-values-cf.command.ts
var AddDuplicateValuesCfCommand = {
  type: 0 /* COMMAND */,
  id: "sheet.command.add-duplicate-values-conditional-rule",
  handler(accessor, params) {
    if (!params) {
      return false;
    }
    const { ranges, style, stopIfTrue } = params;
    const conditionalFormattingRuleModel = accessor.get(ConditionalFormattingRuleModel);
    const commandService = accessor.get(ICommandService);
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const target = getSheetCommandTarget(univerInstanceService);
    if (!target) return false;
    const { unitId, subUnitId } = target;
    const cfId = conditionalFormattingRuleModel.createCfId(unitId, subUnitId);
    const rule = {
      ranges,
      cfId,
      stopIfTrue: !!stopIfTrue,
      rule: {
        type: "highlightCell" /* highlightCell */,
        subType: "duplicateValues" /* duplicateValues */,
        style
      }
    };
    return commandService.executeCommand(AddConditionalRuleMutation.id, { unitId, subUnitId, rule });
  }
};

// ../packages/sheets-conditional-formatting-ui/src/commands/commands/add-number-cf.command.ts
var AddNumberCfCommand = {
  type: 0 /* COMMAND */,
  id: "sheet.command.add-number-conditional-rule",
  handler(accessor, params) {
    if (!params) {
      return false;
    }
    const { ranges, style, stopIfTrue, operator, value } = params;
    const conditionalFormattingRuleModel = accessor.get(ConditionalFormattingRuleModel);
    const commandService = accessor.get(ICommandService);
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const target = getSheetCommandTarget(univerInstanceService);
    if (!target) return false;
    const { unitId, subUnitId } = target;
    const cfId = conditionalFormattingRuleModel.createCfId(unitId, subUnitId);
    let rule;
    if (["between" /* between */, "notBetween" /* notBetween */].includes(operator)) {
      const _value = value;
      if (_value.length !== 2 || !Array.isArray(_value)) {
        return false;
      }
      rule = {
        ranges,
        cfId,
        stopIfTrue: !!stopIfTrue,
        rule: {
          type: "highlightCell" /* highlightCell */,
          subType: "number" /* number */,
          operator,
          style,
          value: _value
        }
      };
    } else {
      const _value = value;
      if (typeof _value !== "number") {
        return false;
      }
      rule = {
        ranges,
        cfId,
        stopIfTrue: !!stopIfTrue,
        rule: {
          type: "highlightCell" /* highlightCell */,
          subType: "number" /* number */,
          operator,
          style,
          value: _value
        }
      };
    }
    return commandService.executeCommand(AddConditionalRuleMutation.id, { unitId, subUnitId, rule });
  }
};

// ../packages/sheets-conditional-formatting-ui/src/commands/commands/add-rank-cf.command.ts
var AddRankCfCommand = {
  type: 0 /* COMMAND */,
  id: "sheet.command.add-rank-conditional-rule",
  handler(accessor, params) {
    if (!params) {
      return false;
    }
    const { ranges, style, stopIfTrue, isPercent, isBottom, value } = params;
    const conditionalFormattingRuleModel = accessor.get(ConditionalFormattingRuleModel);
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const commandService = accessor.get(ICommandService);
    const target = getSheetCommandTarget(univerInstanceService);
    if (!target) return false;
    const { unitId, subUnitId } = target;
    const cfId = conditionalFormattingRuleModel.createCfId(unitId, subUnitId);
    const rule = {
      ranges,
      cfId,
      stopIfTrue: !!stopIfTrue,
      rule: {
        type: "highlightCell" /* highlightCell */,
        subType: "rank" /* rank */,
        isPercent,
        isBottom,
        style,
        value
      }
    };
    return commandService.executeCommand(AddConditionalRuleMutation.id, { unitId, subUnitId, rule });
  }
};

// ../packages/sheets-conditional-formatting-ui/src/commands/commands/add-text-cf.command.ts
var AddTextCfCommand = {
  type: 0 /* COMMAND */,
  id: "sheet.command.add-text-conditional-rule",
  handler(accessor, params) {
    if (!params) {
      return false;
    }
    const { ranges, style, stopIfTrue, operator, value } = params;
    const conditionalFormattingRuleModel = accessor.get(ConditionalFormattingRuleModel);
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const target = getSheetCommandTarget(univerInstanceService);
    if (!target) return false;
    const { unitId, subUnitId } = target;
    const commandService = accessor.get(ICommandService);
    const cfId = conditionalFormattingRuleModel.createCfId(unitId, subUnitId);
    const rule = {
      ranges,
      cfId,
      stopIfTrue: !!stopIfTrue,
      rule: {
        type: "highlightCell" /* highlightCell */,
        subType: "text" /* text */,
        operator,
        style,
        value
      }
    };
    return commandService.executeCommand(AddConditionalRuleMutation.id, { unitId, subUnitId, rule });
  }
};

// ../packages/sheets-conditional-formatting-ui/src/commands/commands/add-time-period-cf.command.ts
var AddTimePeriodCfCommand = {
  type: 0 /* COMMAND */,
  id: "sheet.command.add-time-period-conditional-rule",
  handler(accessor, params) {
    if (!params) {
      return false;
    }
    const { ranges, style, stopIfTrue, operator } = params;
    const conditionalFormattingRuleModel = accessor.get(ConditionalFormattingRuleModel);
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const commandService = accessor.get(ICommandService);
    const target = getSheetCommandTarget(univerInstanceService);
    if (!target) return false;
    const { unitId, subUnitId } = target;
    const cfId = conditionalFormattingRuleModel.createCfId(unitId, subUnitId);
    const rule = {
      ranges,
      cfId,
      stopIfTrue: !!stopIfTrue,
      rule: {
        type: "highlightCell" /* highlightCell */,
        subType: "timePeriod" /* timePeriod */,
        operator,
        style
      }
    };
    return commandService.executeCommand(AddConditionalRuleMutation.id, { unitId, subUnitId, rule });
  }
};

// ../packages/sheets-conditional-formatting-ui/src/commands/commands/add-unique-values-cf.command.ts
var AddUniqueValuesCfCommand = {
  type: 0 /* COMMAND */,
  id: "sheet.command.add-uniqueValues-conditional-rule",
  handler(accessor, params) {
    if (!params) {
      return false;
    }
    const { ranges, style, stopIfTrue } = params;
    const conditionalFormattingRuleModel = accessor.get(ConditionalFormattingRuleModel);
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const commandService = accessor.get(ICommandService);
    const target = getSheetCommandTarget(univerInstanceService);
    if (!target) return false;
    const { unitId, subUnitId } = target;
    const cfId = conditionalFormattingRuleModel.createCfId(unitId, subUnitId);
    const rule = {
      ranges,
      cfId,
      stopIfTrue: !!stopIfTrue,
      rule: {
        type: "highlightCell" /* highlightCell */,
        subType: "uniqueValues" /* uniqueValues */,
        style
      }
    };
    return commandService.executeCommand(AddConditionalRuleMutation.id, { unitId, subUnitId, rule });
  }
};

// ../packages/sheets-conditional-formatting-ui/src/components/panel/index.tsx
var import_react12 = __toESM(require_react());

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages/sheets-conditional-formatting-ui/src/components/panel/index.module.less
var index_module_default = {
  "conditionalFormattingWrap": "univer-conditional-formatting-wrap",
  "cfRuleItem": "univer-cf-rule-item",
  "preview": "univer-preview",
  "createRule": "univer-create-rule",
  "button": "univer-button",
  "title": "univer-title",
  "label": "univer-label",
  "labelContainer": "univer-label-container",
  "inputWidth": "univer-input-width",
  "mTBase": "univer-m-t-base",
  "mTSm": "univer-m-t-sm",
  "mTXl": "univer-m-t-xl",
  "mLSm": "univer-m-l-sm",
  "mLXl": "univer-m-l-xl",
  "mLXxs": "univer-m-l-xxs",
  "mL0": "univer-m-l-0",
  "mR0": "univer-m-r-0"
};

// ../packages/sheets-conditional-formatting-ui/src/components/panel/rule-list/index.tsx
var import_react2 = __toESM(require_react());
var import_react_grid_layout = __toESM(require_react_grid_layout());

// ../packages/sheets-conditional-formatting-ui/src/controllers/cf.i18n.controller.ts
var ConditionalFormattingI18nController = class extends Disposable {
  constructor(_localeService) {
    super();
    this._localeService = _localeService;
    __publicField(this, "_initLocal", () => {
    });
    __publicField(this, "_findReplaceIndex", (text) => {
      const reg = /\{([^}]+)?\}/g;
      const result = [];
      let currentValue = reg.exec(text);
      while (currentValue) {
        result.push({
          startIndex: currentValue.index,
          key: Number(currentValue[1]),
          endIndex: currentValue.index + currentValue[0].length - 1
        });
        currentValue = reg.exec(text);
      }
      return result;
    });
    this._initLocal();
  }
  tWithReactNode(key, ...args) {
    const locale = this._localeService.getLocales();
    const keys = key.split(".");
    const resolvedValue = locale && this._localeService.resolveKeyPath(locale, keys);
    if (typeof resolvedValue === "string") {
      const result = [];
      this._findReplaceIndex(resolvedValue).forEach((item, index, list) => {
        const preItem = list[index - 1] || { startIndex: 0, endIndex: -1 };
        if (preItem.endIndex + 1 < item.startIndex) {
          const text = resolvedValue.slice(preItem.endIndex + 1, item.startIndex);
          text && result.push(text);
        }
        args[item.key] && result.push(args[item.key]);
        if (index === list.length - 1) {
          const text = resolvedValue.slice(item.endIndex + 1);
          text && result.push(text);
        }
      });
      return result;
    }
    return [];
  }
};
ConditionalFormattingI18nController = __decorateClass([
  __decorateParam(0, Inject(LocaleService))
], ConditionalFormattingI18nController);

// ../packages/sheets-conditional-formatting-ui/src/components/preview/index.tsx
var import_react = __toESM(require_react());

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages/sheets-conditional-formatting-ui/src/components/preview/index.module.less
var index_module_default2 = {
  "cfPreview": "univer-cf-preview"
};

// ../packages/sheets-conditional-formatting-ui/src/components/preview/index.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var Preview = (props) => {
  var _a, _b;
  const rule = props.rule;
  if (!rule) {
    return null;
  }
  const colorList = (0, import_react.useMemo)(() => {
    if (rule.type === "colorScale" /* colorScale */) {
      const config = rule.config.map((c, index) => ({ color: new ColorKit(c.color), value: index }));
      const maxValue = config.length - 1;
      const valueList = new Array(5).fill("").map((_v, index, arr) => index * maxValue / (arr.length - 1));
      return valueList.map((value) => getColorScaleFromValue(config, value));
    }
    return null;
  }, [rule]);
  const iconSet = (0, import_react.useMemo)(() => {
    if (rule.type === "iconSet" /* iconSet */) {
      return rule.config.map((item) => {
        const iconList = iconMap[item.iconType];
        return iconList && iconList[Number(item.iconId)];
      });
    }
  }, [rule]);
  switch (rule.type) {
    case "dataBar" /* dataBar */: {
      const { isGradient } = rule.config;
      const commonStyle = { width: "50%", height: "100%" };
      const positiveColor = isGradient ? `linear-gradient(to right, ${rule.config.positiveColor || defaultDataBarPositiveColor}, rgb(255 255 255))` : rule.config.positiveColor;
      const nativeColor = isGradient ? `linear-gradient(to right,  rgb(255 255 255),${rule.config.nativeColor || defaultDataBarNativeColor})` : rule.config.nativeColor;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: index_module_default2.cfPreview, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { ...commonStyle, background: nativeColor, border: `1px solid ${rule.config.nativeColor || defaultDataBarNativeColor}` } }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { ...commonStyle, background: positiveColor, border: `1px solid ${rule.config.positiveColor || defaultDataBarPositiveColor}` } })
      ] });
    }
    case "colorScale" /* colorScale */: {
      return colorList && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: index_module_default2.cfPreview, children: colorList.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: `${100 / colorList.length}%`, height: "100%", background: item } }, index)) });
    }
    case "iconSet" /* iconSet */: {
      return iconSet && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: index_module_default2.cfPreview, children: iconSet.map((base64, index) => base64 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { style: { height: "100%" }, src: base64 }, index) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slash_single_default, {}, index)) });
    }
    case "highlightCell" /* highlightCell */: {
      const { ul, st, it, bl, bg, cl } = rule.style;
      const isUnderline = (ul == null ? void 0 : ul.s) === 1 /* TRUE */;
      const isStrikethrough = (st == null ? void 0 : st.s) === 1 /* TRUE */;
      const isItalic = it === 1 /* TRUE */;
      const isBold = bl === 1 /* TRUE */;
      const bgColor = (_a = bg == null ? void 0 : bg.rgb) != null ? _a : DEFAULT_BG_COLOR;
      const fontColor = (_b = cl == null ? void 0 : cl.rgb) != null ? _b : DEFAULT_FONT_COLOR;
      const style = {
        fontWeight: isBold ? "bold" : void 0,
        fontStyle: isItalic ? "italic" : void 0,
        textDecoration: `${isUnderline ? "underline" : ""} ${isStrikethrough ? "line-through" : ""}`.replace(/^ /, "") || void 0,
        backgroundColor: bgColor,
        color: fontColor
      };
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style, className: index_module_default2.cfPreview, children: "123" });
    }
  }
  return null;
};

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages/sheets-conditional-formatting-ui/src/components/panel/rule-list/index.module.less
var index_module_default3 = {
  "cfRuleList": "univer-cf-rule-list",
  "ruleSelector": "univer-rule-selector",
  "select": "univer-select",
  "selectSelector": "univer-select-selector",
  "selectSelectionItem": "univer-select-selection-item",
  "selectSelectionSearchInput": "univer-select-selection-search-input",
  "btnList": "univer-btn-list",
  "gap": "univer-gap",
  "icon": "univer-icon",
  "disabled": "univer-disabled",
  "ruleItem": "univer-rule-item",
  "ruleDescribe": "univer-rule-describe",
  "ruleType": "univer-rule-type",
  "ruleRange": "univer-rule-range",
  "active": "univer-active",
  "draggableHandle": "univer-draggableHandle",
  "deleteItem": "univer-delete-item",
  "gridLayoutWrap": "univer-grid-layout-wrap",
  "reactGridItem": "univer-react-grid-item"
};

// ../packages/sheets-conditional-formatting-ui/src/components/panel/rule-list/index.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var getRuleDescribe = (rule, localeService) => {
  const ruleConfig = rule.rule;
  switch (ruleConfig.type) {
    case "colorScale" /* colorScale */: {
      return localeService.t("sheet.cf.ruleType.colorScale");
    }
    case "dataBar" /* dataBar */: {
      return localeService.t("sheet.cf.ruleType.dataBar");
    }
    case "iconSet" /* iconSet */: {
      return localeService.t("sheet.cf.ruleType.iconSet");
    }
    case "highlightCell" /* highlightCell */: {
      switch (ruleConfig.subType) {
        case "average" /* average */: {
          const operator = ruleConfig.operator;
          return localeService.t(`sheet.cf.preview.describe.${operator}`, localeService.t("sheet.cf.subRuleType.average"));
        }
        case "duplicateValues" /* duplicateValues */: {
          return localeService.t("sheet.cf.subRuleType.duplicateValues");
        }
        case "uniqueValues" /* uniqueValues */: {
          return localeService.t("sheet.cf.subRuleType.uniqueValues");
        }
        case "number" /* number */: {
          const operator = ruleConfig.operator;
          return localeService.t(`sheet.cf.preview.describe.${operator}`, ...Array.isArray(ruleConfig.value) ? ruleConfig.value.map((e) => String(e)) : [String(ruleConfig.value || "")]);
        }
        case "text" /* text */: {
          const operator = ruleConfig.operator;
          return localeService.t(`sheet.cf.preview.describe.${operator}`, ruleConfig.value || "");
        }
        case "timePeriod" /* timePeriod */: {
          const operator = ruleConfig.operator;
          return localeService.t(`sheet.cf.preview.describe.${operator}`);
        }
        case "rank" /* rank */: {
          if (ruleConfig.isPercent) {
            if (ruleConfig.isBottom) {
              return localeService.t("sheet.cf.preview.describe.bottomNPercent", String(ruleConfig.value));
            } else {
              return localeService.t("sheet.cf.preview.describe.topNPercent", String(ruleConfig.value));
            }
          } else {
            if (ruleConfig.isBottom) {
              return localeService.t("sheet.cf.preview.describe.bottomN", String(ruleConfig.value));
            } else {
              return localeService.t("sheet.cf.preview.describe.topN", String(ruleConfig.value));
            }
          }
        }
        case "formula" /* formula */: {
          return localeService.t("sheet.cf.ruleType.formula");
        }
      }
    }
  }
};
var defaultWidth = 0;
var RuleList = (props) => {
  const { onClick } = props;
  const conditionalFormattingRuleModel = useDependency(ConditionalFormattingRuleModel);
  const univerInstanceService = useDependency(IUniverInstanceService);
  const selectionManagerService = useDependency(SheetsSelectionsService);
  const commandService = useDependency(ICommandService);
  const localeService = useDependency(LocaleService);
  const injector = useDependency(Injector);
  const sidebarService = useDependency(ISidebarService);
  const conditionalFormattingI18nController = useDependency(ConditionalFormattingI18nController);
  const workbook = useObservable(() => univerInstanceService.getCurrentTypeOfUnit$(O.UNIVER_SHEET), void 0, void 0, []);
  const unitId = workbook.getUnitId();
  const worksheet = workbook.getActiveSheet();
  if (!worksheet) {
    throw new Error("No active sheet found");
  }
  const subUnitId = worksheet.getSheetId();
  const [currentRuleRanges, currentRuleRangesSet] = (0, import_react2.useState)([]);
  const [selectValue, setSelectValue] = (0, import_react2.useState)("2");
  const [fetchRuleListId, setFetchRuleListId] = (0, import_react2.useState)(0);
  const [draggingId, setDraggingId] = (0, import_react2.useState)(-1);
  const [layoutWidth, setLayoutWidth] = (0, import_react2.useState)(defaultWidth);
  const layoutContainerRef = (0, import_react2.useRef)(null);
  const selectOption = [
    { label: localeService.t("sheet.cf.panel.workSheet"), value: "2" },
    { label: localeService.t("sheet.cf.panel.selectedRange"), value: "1" }
  ];
  const getRuleList = () => {
    const ruleList2 = conditionalFormattingRuleModel.getSubunitRules(unitId, subUnitId);
    if (!ruleList2 || !ruleList2.length) {
      return [];
    }
    if (selectValue === "1") {
      const selection = selectionManagerService.getCurrentLastSelection();
      if (!selection) {
        return [];
      }
      const range = selection.range;
      const _ruleList = ruleList2.filter((rule) => {
        return rule.ranges.some((ruleRange) => Rectangle.intersects(ruleRange, range));
      });
      return _ruleList;
    } else if (selectValue === "2") {
      return [...ruleList2];
    }
    return [];
  };
  const [ruleList, ruleListSet] = (0, import_react2.useState)(getRuleList);
  useHighlightRange(currentRuleRanges);
  (0, import_react2.useEffect)(() => {
    const disposable = commandService.onCommandExecuted((commandInfo) => {
      if (commandInfo.id === SetWorksheetActiveOperation.id) {
        setFetchRuleListId(Math.random());
      }
    });
    return () => disposable.dispose();
  });
  (0, import_react2.useEffect)(() => {
    ruleListSet(getRuleList);
  }, [selectValue, fetchRuleListId, unitId, subUnitId]);
  (0, import_react2.useEffect)(() => {
    if (selectValue === "2") {
      return;
    }
    const subscription = new Observable((commandSubscribe) => {
      const commandList2 = [SetSelectionsOperation.id, AddConditionalRuleMutation.id, SetConditionalRuleMutation.id, DeleteConditionalRuleMutation.id, MoveConditionalRuleMutation.id];
      const disposable = commandService.onCommandExecuted((commandInfo) => {
        const { id, params } = commandInfo;
        const unitId2 = univerInstanceService.getCurrentUnitOfType(O.UNIVER_SHEET).getUnitId();
        if (commandList2.includes(id) && params.unitId === unitId2) {
          commandSubscribe.next(null);
        }
      });
      return () => disposable.dispose();
    }).pipe(debounceTime(16)).subscribe(() => {
      ruleListSet(getRuleList);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [univerInstanceService, selectValue, unitId, subUnitId]);
  (0, import_react2.useEffect)(() => {
    const dispose = conditionalFormattingRuleModel.$ruleChange.subscribe(() => {
      setFetchRuleListId(Math.random());
    });
    return () => dispose.unsubscribe();
  }, [conditionalFormattingRuleModel]);
  (0, import_react2.useEffect)(() => {
    const getWidth = () => {
      var _a, _b;
      const width = Math.max(0, ((_b = (_a = layoutContainerRef.current) == null ? void 0 : _a.getBoundingClientRect().width) != null ? _b : 0) - 8);
      defaultWidth = width;
      return width;
    };
    const observer = new Observable((subscribe) => {
      const targetElement = sidebarService.getContainer();
      if (targetElement) {
        let time = setTimeout(() => {
          subscribe.next();
        }, 150);
        const clearTime = () => {
          time && clearTimeout(time);
          time = null;
        };
        const handle = (e) => {
          if (e.propertyName === "width") {
            clearTime();
            subscribe.next();
          }
        };
        targetElement.addEventListener("transitionend", handle);
        return () => {
          clearTime();
          targetElement.removeEventListener("transitionend", handle);
        };
      }
    });
    const subscription = observer.pipe(debounceTime(16)).subscribe(() => {
      setLayoutWidth(getWidth());
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  const handleDelete = (rule) => {
    var _a;
    const unitId2 = univerInstanceService.getCurrentUnitOfType(O.UNIVER_SHEET).getUnitId();
    const subUnitId2 = (_a = univerInstanceService.getCurrentUnitOfType(O.UNIVER_SHEET).getActiveSheet()) == null ? void 0 : _a.getSheetId();
    if (!unitId2 || !subUnitId2) {
      throw new Error("No active sheet found");
    }
    commandService.executeCommand(DeleteCfCommand.id, { unitId: unitId2, subUnitId: subUnitId2, cfId: rule.cfId });
  };
  const handleDragStart = (_layout, from) => {
    setDraggingId(from.y);
  };
  const handleDragStop = (_layout, from, to) => {
    var _a;
    setDraggingId(-1);
    const unitId2 = univerInstanceService.getCurrentUnitOfType(O.UNIVER_SHEET).getUnitId();
    const subUnitId2 = (_a = univerInstanceService.getCurrentUnitOfType(O.UNIVER_SHEET).getActiveSheet()) == null ? void 0 : _a.getSheetId();
    if (!unitId2 || !subUnitId2) {
      throw new Error("No active sheet found");
    }
    const getSaveIndex = (index) => {
      const length = ruleList.length;
      return Math.min(length - 1, Math.max(0, index));
    };
    const cfId = ruleList[getSaveIndex(from.y)].cfId;
    const targetCfId = ruleList[getSaveIndex(to.y)].cfId;
    if (cfId !== targetCfId) {
      commandService.executeCommand(MoveCfCommand.id, { unitId: unitId2, subUnitId: subUnitId2, start: { id: cfId, type: "self" }, end: { id: targetCfId, type: to.y > from.y ? "after" : "before" } });
    }
  };
  const handleCreate = () => {
    props.onCreate();
  };
  const handleClear = () => {
    if (selectValue === "2") {
      commandService.executeCommand(ClearWorksheetCfCommand.id);
    } else if (selectValue === "1") {
      const list = ruleList.map((rule) => ({ unitId, subUnitId, cfId: rule.cfId }));
      list.forEach((config) => {
        commandService.executeCommand(DeleteCfCommand.id, config);
      });
    }
  };
  const ruleListByPermissionCheck = (0, import_react2.useMemo)(() => {
    const workbook2 = univerInstanceService.getCurrentUnitOfType(O.UNIVER_SHEET);
    const worksheet2 = workbook2.getActiveSheet();
    return ruleList.filter((rule) => {
      const ranges = rule.ranges;
      const hasPermission = checkRangesEditablePermission(injector, workbook2.getUnitId(), worksheet2.getSheetId(), ranges);
      return hasPermission;
    });
  }, [ruleList]);
  const layout = ruleListByPermissionCheck.map((rule, index) => ({ i: rule.cfId, x: 0, w: 12, y: index, h: 1, isResizable: false }));
  const isHasAllRuleEditPermission = (0, import_react2.useMemo)(() => {
    const workbook2 = univerInstanceService.getCurrentUnitOfType(O.UNIVER_SHEET);
    const worksheet2 = workbook2.getActiveSheet();
    return ruleList.every((rule) => {
      const ranges = rule.ranges;
      const hasPermission = checkRangesEditablePermission(injector, workbook2.getUnitId(), worksheet2.getSheetId(), ranges);
      return hasPermission;
    });
  }, [ruleList]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: index_module_default3.cfRuleList, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: index_module_default3.ruleSelector, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { children: conditionalFormattingI18nController.tWithReactNode(
        "sheet.cf.panel.managerRuleSelect",
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          Select,
          {
            className: index_module_default3.select,
            options: selectOption,
            value: selectValue,
            onChange: (v) => {
              setSelectValue(v);
            }
          }
        )
      ).map((ele, index) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: ele }, index)) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: index_module_default3.btnList, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tooltip, { title: localeService.t("sheet.cf.panel.createRule"), placement: "bottom", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "div",
          {
            className: index_module_default3.icon,
            onClick: handleCreate,
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(increase_single_default, {})
          }
        ) }),
        ruleList.length && isHasAllRuleEditPermission ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tooltip, { title: localeService.t("sheet.cf.panel.clear"), placement: "bottom", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "div",
          {
            className: clsx(index_module_default3.gap, index_module_default3.icon),
            onClick: handleClear,
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(delete_single_default, {})
          }
        ) }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: clsx(index_module_default3.gap, index_module_default3.disabled), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(delete_single_default, {}) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ref: layoutContainerRef, className: index_module_default3.gridLayoutWrap, children: layoutWidth ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_react_grid_layout.default,
      {
        draggableHandle: ".draggableHandle",
        layout,
        cols: 12,
        rowHeight: 60,
        width: layoutWidth,
        margin: [0, 10],
        onDragStop: handleDragStop,
        onDragStart: handleDragStart,
        children: ruleListByPermissionCheck == null ? void 0 : ruleListByPermissionCheck.map((rule, index) => {
          return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
            "div",
            {
              className: clsx(index_module_default3.ruleItem, {
                [index_module_default3.active]: draggingId === index
              }),
              onMouseMove: () => {
                rule.ranges !== currentRuleRanges && currentRuleRangesSet(rule.ranges);
              },
              onMouseLeave: () => currentRuleRangesSet([]),
              onClick: () => {
                onClick(rule);
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                  "div",
                  {
                    className: clsx(index_module_default3.draggableHandle, "draggableHandle"),
                    onClick: (e) => e.stopPropagation(),
                    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(sequence_single_default, {})
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: index_module_default3.ruleDescribe, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: index_module_default3.ruleType, children: getRuleDescribe(rule, localeService) }),
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: index_module_default3.ruleRange, children: rule.ranges.map((range) => serializeRange(range)).join(",") })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: index_module_default3.preview, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Preview, { rule: rule.rule }) }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                  "div",
                  {
                    className: clsx(index_module_default3.deleteItem, {
                      [index_module_default3.active]: draggingId === index
                    }),
                    onClick: (e) => {
                      e.stopPropagation();
                      handleDelete(rule);
                      currentRuleRangesSet([]);
                    },
                    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(delete_single_default, {})
                  }
                )
              ]
            }
          ) }, `${rule.cfId}`);
        })
      }
    ) : null })
  ] });
};

// ../packages/sheets-conditional-formatting-ui/src/components/panel/rule-edit/index.tsx
var import_react11 = __toESM(require_react());

// ../packages/sheets-conditional-formatting-ui/src/components/panel/rule-edit/ColorScale.tsx
var import_react4 = __toESM(require_react());

// ../packages/sheets-conditional-formatting-ui/src/components/color-picker/index.tsx
var import_react3 = __toESM(require_react());

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages/sheets-conditional-formatting-ui/src/components/color-picker/index.module.less
var index_module_default4 = {
  "cfColorPicker": "univer-cf-color-picker",
  "cfColorPickerIcon": "univer-cf-color-picker-icon",
  "iconDropdown": "univer-icon-dropdown"
};

// ../packages/sheets-conditional-formatting-ui/src/components/color-picker/index.tsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var ColorPicker2 = (props) => {
  const { color, onChange, disable = false, iconId = "PaintBucket", className, isNeedDropdownIcon = true } = props;
  const componentManager = useDependency(ComponentManager);
  const colorKit = (0, import_react3.useMemo)(() => new ColorKit(color), [color]);
  const Icon = componentManager.get(iconId);
  return Icon && (!disable ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    Dropdown,
    {
      overlay: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "univer-rounded-lg univer-p-4", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ColorPicker, { value: color, onChange }) }),
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        "span",
        {
          className: `
                      ${index_module_default4.cfColorPickerIcon}
                      ${className}
                    `,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { extend: { colorChannel1: colorKit.isValid ? color : "rgb(var(--primary-color))" } }),
            isNeedDropdownIcon && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(more_down_single_default, { className: index_module_default4.iconDropdown })
          ]
        }
      )
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { className, extend: { colorChannel1: colorKit.isValid ? color : "rgb(var(--primary-color))" } }));
};

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages/sheets-conditional-formatting-ui/src/components/panel/rule-edit/index.module.less
var index_module_default5 = {
  "cfRuleStyleEditor": "univer-cf-rule-style-editor",
  "cfErrorText": "univer-cf-error-text",
  "cfPreviewWrap": "univer-cf-preview-wrap",
  "text": "univer-text",
  "positionRelative": "univer-position-relative",
  "btnList": "univer-btn-list",
  "utilItem": "univer-util-item",
  "iconSet": "univer-icon-set",
  "renderConfig": "univer-render-config",
  "flex": "univer-flex",
  "width45": "univer-width45",
  "iconWrap": "univer-icon-wrap",
  "icon": "univer-icon",
  "dropdownIcon": "univer-dropdown-icon",
  "errorInput": "univer-error-input",
  "errorText": "univer-error-text",
  "iconGroupList": "univer-icon-group-list",
  "title": "univer-title",
  "group": "univer-group",
  "itemContent": "univer-item-content",
  "itemWrap": "univer-item-wrap",
  "item": "univer-item",
  "iconItemListWrap": "univer-icon-item-list-wrap",
  "none": "univer-none",
  "iconItemList": "univer-icon-item-list",
  "width100": "univer-width100",
  "stress": "univer-stress"
};

// ../packages/sheets-conditional-formatting-ui/src/components/panel/rule-edit/ColorScale.tsx
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var createOptionItem = (text, localeService) => ({ label: localeService.t(`sheet.cf.valueType.${text}`), value: text });
var TextInput = (props) => {
  var _a;
  const { type, className, onChange, id, value } = props;
  const univerInstanceService = useDependency(IUniverInstanceService);
  const unitId = univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET).getUnitId();
  const subUnitId = (_a = univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET).getActiveSheet()) == null ? void 0 : _a.getSheetId();
  const formulaInitValue = (0, import_react4.useMemo)(() => {
    return String(value).startsWith("=") ? String(value) : "=";
  }, [value]);
  const config = (0, import_react4.useMemo)(() => {
    if (["max" /* max */, "min" /* min */, "none"].includes(type)) {
      return { disabled: true };
    }
    if (["percent" /* percent */, "percentile" /* percentile */].includes(type)) {
      return {
        min: 0,
        max: 100
      };
    }
    return {
      min: Number.MIN_SAFE_INTEGER,
      max: Number.MAX_SAFE_INTEGER
    };
  }, [type]);
  const formulaEditorActionsRef = (0, import_react4.useRef)({});
  const [isFocusFormulaEditor, isFocusFormulaEditorSet] = (0, import_react4.useState)(false);
  useSidebarClick((e) => {
    var _a2;
    const handleOutClick = (_a2 = formulaEditorActionsRef.current) == null ? void 0 : _a2.handleOutClick;
    handleOutClick && handleOutClick(e, () => isFocusFormulaEditorSet(false));
  });
  if (type === "formula" /* formula */) {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: { width: "100%", marginLeft: 4 }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      FormulaEditor,
      {
        initValue: formulaInitValue,
        unitId,
        subUnitId,
        isFocus: isFocusFormulaEditor,
        onChange: (v = "") => {
          const formula = v || "";
          onChange(formula);
        },
        onFocus: () => isFocusFormulaEditorSet(true),
        actions: formulaEditorActionsRef.current
      }
    ) });
  } else {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(InputNumber, { className, value: Number(props.value) || 0, onChange: (v) => props.onChange(v || 0), ...config });
  }
};
var ColorScaleStyleEditor = (props) => {
  var _a;
  const { interceptorManager } = props;
  const localeService = useDependency(LocaleService);
  const rule = ((_a = props.rule) == null ? void 0 : _a.type) === "colorScale" /* colorScale */ ? props.rule : void 0;
  const commonOptions = [createOptionItem("num" /* num */, localeService), createOptionItem("percent" /* percent */, localeService), createOptionItem("percentile" /* percentile */, localeService), createOptionItem("formula" /* formula */, localeService)];
  const minOptions = [createOptionItem("min" /* min */, localeService), ...commonOptions];
  const medianOptions = [createOptionItem("none", localeService), ...commonOptions];
  const maxOptions = [createOptionItem("max" /* max */, localeService), ...commonOptions];
  const [minType, minTypeSet] = (0, import_react4.useState)(() => {
    var _a2;
    const defaultV = "min" /* min */;
    if (!rule) {
      return defaultV;
    }
    return ((_a2 = rule.config[0]) == null ? void 0 : _a2.value.type) || defaultV;
  });
  const [medianType, medianTypeSet] = (0, import_react4.useState)(() => {
    var _a2;
    const defaultV = "none";
    if (!rule) {
      return defaultV;
    }
    if (rule.config.length !== 3) {
      return defaultV;
    }
    return ((_a2 = rule.config[1]) == null ? void 0 : _a2.value.type) || defaultV;
  });
  const [maxType, maxTypeSet] = (0, import_react4.useState)(() => {
    var _a2;
    const defaultV = "max" /* max */;
    if (!rule) {
      return defaultV;
    }
    return ((_a2 = rule.config[rule.config.length - 1]) == null ? void 0 : _a2.value.type) || defaultV;
  });
  const [minValue, minValueSet] = (0, import_react4.useState)(() => {
    const defaultV = 10;
    if (!rule) {
      return defaultV;
    }
    const valueConfig = rule.config[0];
    return (valueConfig == null ? void 0 : valueConfig.value.value) === void 0 ? defaultV : valueConfig == null ? void 0 : valueConfig.value.value;
  });
  const [medianValue, medianValueSet] = (0, import_react4.useState)(() => {
    var _a2;
    const defaultV = 50;
    if (!rule) {
      return defaultV;
    }
    if (rule.config.length !== 3) {
      return defaultV;
    }
    const v = (_a2 = rule.config[1]) == null ? void 0 : _a2.value.value;
    return v === void 0 ? defaultV : v;
  });
  const [maxValue, maxValueSet] = (0, import_react4.useState)(() => {
    var _a2;
    const defaultV = 90;
    if (!rule) {
      return defaultV;
    }
    const v = (_a2 = rule.config[rule.config.length - 1]) == null ? void 0 : _a2.value.value;
    return v === void 0 ? defaultV : v;
  });
  const [minColor, minColorSet] = (0, import_react4.useState)(() => {
    var _a2;
    const defaultV = "#d0d9fb";
    if (!rule) {
      return defaultV;
    }
    return ((_a2 = rule.config[0]) == null ? void 0 : _a2.color) || defaultV;
  });
  const [medianColor, medianColorSet] = (0, import_react4.useState)(() => {
    var _a2;
    const defaultV = "#7790f3";
    if (!rule) {
      return defaultV;
    }
    if (rule.config.length !== 3) {
      return defaultV;
    }
    return ((_a2 = rule.config[1]) == null ? void 0 : _a2.color) || defaultV;
  });
  const [maxColor, maxColorSet] = (0, import_react4.useState)(() => {
    var _a2;
    const defaultV = "#2e55ef";
    if (!rule) {
      return defaultV;
    }
    return ((_a2 = rule.config[rule.config.length - 1]) == null ? void 0 : _a2.color) || defaultV;
  });
  const getResult = (0, import_react4.useMemo)(() => (option) => {
    const { minType: minType2, medianType: medianType2, maxType: maxType2, minValue: minValue2, medianValue: medianValue2, maxValue: maxValue2, minColor: minColor2, medianColor: medianColor2, maxColor: maxColor2 } = option;
    const list = [];
    list.push({ color: minColor2, value: { type: minType2, value: minValue2 } });
    medianType2 !== "none" && list.push({ color: medianColor2, value: { type: medianType2, value: medianValue2 } });
    list.push({ color: maxColor2, value: { type: maxType2, value: maxValue2 } });
    const config = list.map((item, index) => ({ ...item, index }));
    return { config, type: "colorScale" /* colorScale */ };
  }, []);
  (0, import_react4.useEffect)(() => {
    const dispose = interceptorManager.intercept(interceptorManager.getInterceptPoints().submit, {
      handler() {
        return getResult({ minType, medianType, maxType, minValue, medianValue, maxValue, minColor, medianColor, maxColor });
      }
    });
    return dispose;
  }, [getResult, minType, medianType, maxType, minValue, medianValue, maxValue, minColor, medianColor, maxColor, interceptorManager]);
  const handleChange = (option) => {
    props.onChange(getResult(option));
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: index_module_default.title, children: localeService.t("sheet.cf.panel.styleRule") }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "div",
      {
        className: `
                  ${index_module_default5.cfPreviewWrap}
                `,
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Preview, { rule: getResult({ minType, medianType, maxType, minValue, medianValue, maxValue, minColor, medianColor, maxColor }) })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: index_module_default.label, children: localeService.t("sheet.cf.valueType.min") }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      "div",
      {
        className: clsx(`
                  ${index_module_default.labelContainer}
                  ${index_module_default.mTSm}
                `, "univer-box-border univer-h-7"),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            Select,
            {
              style: { flexShrink: 0 },
              options: minOptions,
              value: minType,
              onChange: (v) => {
                minTypeSet(v);
                const value = createDefaultValueByValueType(v, 10);
                minValueSet(value);
                handleChange({ minType: v, medianType, maxType, minValue: value, medianValue, maxValue, minColor, medianColor, maxColor });
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            TextInput,
            {
              id: "min",
              className: `
                      ${index_module_default.mLXxs}
                    `,
              value: minValue,
              type: minType,
              onChange: (v) => {
                minValueSet(v);
                handleChange({ minType, medianType, maxType, minValue: v, medianValue, maxValue, minColor, medianColor, maxColor });
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            ColorPicker2,
            {
              className: index_module_default.mLXxs,
              color: minColor,
              onChange: (v) => {
                minColorSet(v);
                handleChange({ minType, medianType, maxType, minValue, medianValue, maxValue, minColor: v, medianColor, maxColor });
              }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: index_module_default.label, children: localeService.t("sheet.cf.panel.medianValue") }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      "div",
      {
        className: clsx(`
                  ${index_module_default.labelContainer}
                  ${index_module_default.mTSm}
                `, "univer-box-border univer-h-7"),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            Select,
            {
              style: { flexShrink: 0 },
              options: medianOptions,
              value: medianType,
              onChange: (v) => {
                medianTypeSet(v);
                const value = createDefaultValueByValueType(v, 50);
                medianValueSet(value);
                handleChange({ minType, medianType: v, maxType, minValue, medianValue: value, maxValue, minColor, medianColor, maxColor });
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            TextInput,
            {
              id: "median",
              className: `
                      ${index_module_default.mLXxs}
                    `,
              value: medianValue,
              type: medianType,
              onChange: (v) => {
                medianValueSet(v);
                handleChange({ minType, medianType, maxType, minValue, medianValue: v, maxValue, minColor, medianColor, maxColor });
              }
            }
          ),
          medianType !== "none" && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            ColorPicker2,
            {
              className: index_module_default.mLXxs,
              color: medianColor,
              onChange: (v) => {
                medianColorSet(v);
                handleChange({ minType, medianType, maxType, minValue, medianValue, maxValue, minColor, medianColor: v, maxColor });
              }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: index_module_default.label, children: localeService.t("sheet.cf.valueType.max") }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      "div",
      {
        className: clsx(`
                  ${index_module_default.labelContainer}
                  ${index_module_default.mTSm}
                `, "univer-box-border univer-h-7"),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            Select,
            {
              style: { flexShrink: 0 },
              options: maxOptions,
              value: maxType,
              onChange: (v) => {
                maxTypeSet(v);
                const value = createDefaultValueByValueType(v, 90);
                maxValueSet(value);
                handleChange({ minType, medianType, maxType: v, minValue, medianValue, maxValue: value, minColor, medianColor, maxColor });
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            TextInput,
            {
              id: "max",
              className: `
                      ${index_module_default.mLXxs}
                    `,
              value: maxValue,
              type: maxType,
              onChange: (v) => {
                maxValueSet(v);
                handleChange({ minType, medianType, maxType, minValue, medianValue, maxValue: v, minColor, medianColor, maxColor });
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            ColorPicker2,
            {
              className: index_module_default.mLXxs,
              color: maxColor,
              onChange: (v) => {
                maxColorSet(v);
                handleChange({ minType, medianType, maxType, minValue, medianValue, maxValue, minColor, medianColor, maxColor: v });
              }
            }
          )
        ]
      }
    )
  ] });
};

// ../packages/sheets-conditional-formatting-ui/src/components/panel/rule-edit/DataBar.tsx
var import_react5 = __toESM(require_react());
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var createOptionItem2 = (text, localeService) => ({ label: localeService.t(`sheet.cf.valueType.${text}`), value: text });
var InputText = (props) => {
  var _a;
  const { onChange, className, value, type, id, disabled = false } = props;
  const univerInstanceService = useDependency(IUniverInstanceService);
  const unitId = univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET).getUnitId();
  const subUnitId = (_a = univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET).getActiveSheet()) == null ? void 0 : _a.getSheetId();
  const formulaEditorActionsRef = (0, import_react5.useRef)({});
  const [isFocusFormulaEditor, isFocusFormulaEditorSet] = (0, import_react5.useState)(false);
  useSidebarClick((e) => {
    var _a2;
    const handleOutClick = (_a2 = formulaEditorActionsRef.current) == null ? void 0 : _a2.handleOutClick;
    handleOutClick && handleOutClick(e, () => isFocusFormulaEditorSet(false));
  });
  const _value = (0, import_react5.useRef)(value);
  const config = (0, import_react5.useMemo)(() => {
    if (["percentile" /* percentile */, "percent" /* percent */].includes(type)) {
      return {
        max: 100,
        min: 0
      };
    }
    return {
      min: Number.MIN_SAFE_INTEGER,
      max: Number.MAX_SAFE_INTEGER
    };
  }, [type]);
  if (type === "formula" /* formula */) {
    const v = String(_value.current).startsWith("=") ? String(_value.current) || "" : "=";
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: { width: "100%", marginLeft: 12 }, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      FormulaEditor,
      {
        initValue: v,
        unitId,
        subUnitId,
        isFocus: isFocusFormulaEditor,
        onChange: (v2 = "") => {
          const formula = v2 || "";
          onChange(formula);
        },
        onFocus: () => isFocusFormulaEditorSet(true),
        actions: formulaEditorActionsRef.current
      }
    ) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    InputNumber,
    {
      className,
      value: Number(value) || 0,
      disabled,
      onChange: (v) => {
        onChange(v || 0);
      },
      ...config
    }
  );
};
var DataBarStyleEditor = (props) => {
  var _a;
  const { interceptorManager } = props;
  const localeService = useDependency(LocaleService);
  const rule = ((_a = props.rule) == null ? void 0 : _a.type) === "dataBar" /* dataBar */ ? props.rule : void 0;
  const [isGradient, isGradientSet] = (0, import_react5.useState)(() => {
    var _a2;
    const defaultV = "0";
    if (!rule) {
      return defaultV;
    }
    return ((_a2 = rule.config) == null ? void 0 : _a2.isGradient) ? "1" : "0";
  });
  const [positiveColor, positiveColorSet] = (0, import_react5.useState)(() => {
    var _a2;
    if (!rule) {
      return defaultDataBarPositiveColor;
    }
    return ((_a2 = rule.config) == null ? void 0 : _a2.positiveColor) || defaultDataBarPositiveColor;
  });
  const [nativeColor, nativeColorSet] = (0, import_react5.useState)(() => {
    var _a2;
    if (!rule) {
      return defaultDataBarNativeColor;
    }
    return ((_a2 = rule.config) == null ? void 0 : _a2.nativeColor) || defaultDataBarNativeColor;
  });
  const commonOptions = [createOptionItem2("num" /* num */, localeService), createOptionItem2("percent" /* percent */, localeService), createOptionItem2("percentile" /* percentile */, localeService), createOptionItem2("formula" /* formula */, localeService)];
  const minOptions = [createOptionItem2("min" /* min */, localeService), ...commonOptions];
  const maxOptions = [createOptionItem2("max" /* max */, localeService), ...commonOptions];
  const [minValueType, minValueTypeSet] = (0, import_react5.useState)(() => {
    var _a2;
    const defaultV = minOptions[0].value;
    if (!rule) {
      return defaultV;
    }
    return ((_a2 = rule.config) == null ? void 0 : _a2.min.type) || defaultV;
  });
  const [maxValueType, maxValueTypeSet] = (0, import_react5.useState)(() => {
    var _a2;
    const defaultV = maxOptions[0].value;
    if (!rule) {
      return defaultV;
    }
    return ((_a2 = rule.config) == null ? void 0 : _a2.max.type) || defaultV;
  });
  const [minValue, minValueSet] = (0, import_react5.useState)(() => {
    var _a2;
    const defaultV = 0;
    if (!rule) {
      return defaultV;
    }
    const value = ((_a2 = rule.config) == null ? void 0 : _a2.min) || {};
    if (value.type === "formula" /* formula */) {
      return value.value || "=";
    }
    return value.value || defaultV;
  });
  const [maxValue, maxValueSet] = (0, import_react5.useState)(() => {
    var _a2;
    const defaultV = 100;
    if (!rule) {
      return defaultV;
    }
    const value = ((_a2 = rule.config) == null ? void 0 : _a2.max) || {};
    if (value.type === "formula" /* formula */) {
      return value.value || "=";
    }
    return value.value === void 0 ? defaultV : value.value;
  });
  const [isShowValue, isShowValueSet] = (0, import_react5.useState)(() => {
    const defaultV = true;
    if (!rule) {
      return defaultV;
    }
    return rule.isShowValue === void 0 ? defaultV : !!rule.isShowValue;
  });
  const getResult = (option) => {
    const config = {
      min: { type: option.minValueType, value: option.minValue },
      max: { type: option.maxValueType, value: option.maxValue },
      isGradient: option.isGradient === "1",
      positiveColor: option.positiveColor || defaultDataBarPositiveColor,
      nativeColor: option.nativeColor || defaultDataBarNativeColor
    };
    return { config, type: "dataBar" /* dataBar */, isShowValue: option.isShowValue };
  };
  (0, import_react5.useEffect)(() => {
    const dispose = interceptorManager.intercept(interceptorManager.getInterceptPoints().submit, {
      handler() {
        return getResult({ isGradient, minValue, minValueType, maxValue, maxValueType, positiveColor, nativeColor, isShowValue });
      }
    });
    return dispose;
  }, [isGradient, minValue, minValueType, maxValue, maxValueType, positiveColor, nativeColor, interceptorManager, isShowValue]);
  const _handleChange = (option) => {
    props.onChange(getResult(option));
  };
  const handlePositiveColorChange = (color) => {
    positiveColorSet(color);
    _handleChange({ isGradient, minValue, minValueType, maxValue, maxValueType, positiveColor: color, nativeColor, isShowValue });
  };
  const handleNativeColorChange = (color) => {
    nativeColorSet(color);
    _handleChange({ isGradient, minValue, minValueType, maxValue, maxValueType, positiveColor, nativeColor: color, isShowValue });
  };
  const isShowInput = (type) => {
    return commonOptions.map((item) => item.value).includes(type);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: index_module_default.title, children: localeService.t("sheet.cf.panel.styleRule") }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "div",
      {
        className: `
                  ${index_module_default5.cfPreviewWrap}
                `,
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Preview, { rule: getResult({ isGradient, minValue, minValueType, maxValue, maxValueType, positiveColor, nativeColor, isShowValue }) })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: index_module_default.label, children: localeService.t("sheet.cf.panel.fillType") }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
        "div",
        {
          className: `
                      ${index_module_default.mTSm}
                      ${index_module_default.mLXxs}
                      ${index_module_default.labelContainer}
                    `,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
              RadioGroup,
              {
                value: isGradient,
                onChange: (v) => {
                  isGradientSet(v);
                  _handleChange({ isGradient: v, minValue, minValueType, maxValue, maxValueType, positiveColor, nativeColor, isShowValue });
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Radio, { value: "0", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: index_module_default5.text, children: localeService.t("sheet.cf.panel.pureColor") }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Radio, { value: "1", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: index_module_default5.text, children: localeService.t("sheet.cf.panel.gradient") }) })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
              "div",
              {
                className: `
                          ${index_module_default5.utilItem}
                          ${index_module_default.mLXl}
                        `,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                    Checkbox,
                    {
                      checked: !isShowValue,
                      onChange: (v) => {
                        isShowValueSet(!v);
                        _handleChange({ isGradient: v, minValue, minValueType, maxValue, maxValueType, positiveColor, nativeColor, isShowValue: !v });
                      }
                    }
                  ),
                  localeService.t("sheet.cf.panel.onlyShowDataBar")
                ]
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: index_module_default.label, children: localeService.t("sheet.cf.panel.colorSet") }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
        "div",
        {
          className: `
                      ${index_module_default.labelContainer}
                      ${index_module_default.mTSm}
                      ${index_module_default.mLXxs}
                    `,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
              "div",
              {
                className: `
                          ${index_module_default.labelContainer}
                        `,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                    "div",
                    {
                      className: `
                              ${index_module_default5.text}
                            `,
                      children: localeService.t("sheet.cf.panel.native")
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                    ColorPicker2,
                    {
                      color: nativeColor,
                      onChange: handleNativeColorChange
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
              "div",
              {
                className: `
                          ${index_module_default.labelContainer}
                          ${index_module_default.mLSm}
                        `,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                    "div",
                    {
                      className: `
                              ${index_module_default5.text}
                            `,
                      children: localeService.t("sheet.cf.panel.positive")
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                    ColorPicker2,
                    {
                      color: positiveColor,
                      onChange: handlePositiveColorChange
                    }
                  )
                ]
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: index_module_default.label, children: localeService.t("sheet.cf.valueType.min") }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
        "div",
        {
          className: `
                      ${index_module_default.mTSm}
                      ${index_module_default.labelContainer}
                    `,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              Select,
              {
                style: { width: "50%", flexShrink: 0 },
                options: minOptions,
                value: minValueType,
                onChange: (v) => {
                  minValueTypeSet(v);
                  const value = createDefaultValueByValueType(v, 10);
                  minValueSet(value);
                  _handleChange({ isGradient, minValue: value, minValueType: v, maxValue, maxValueType, positiveColor, nativeColor, isShowValue });
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              InputText,
              {
                disabled: !isShowInput(minValueType),
                id: "min",
                type: minValueType,
                className: index_module_default.mLSm,
                value: minValue,
                onChange: (v) => {
                  minValueSet(v || 0);
                  _handleChange({ isGradient, minValue: v || 0, minValueType, maxValue, maxValueType, positiveColor, nativeColor, isShowValue });
                }
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: index_module_default.label, children: localeService.t("sheet.cf.valueType.max") }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
        "div",
        {
          className: `
                      ${index_module_default.mTSm}
                      ${index_module_default.labelContainer}
                    `,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              Select,
              {
                style: { width: "50%", flexShrink: 0 },
                options: maxOptions,
                value: maxValueType,
                onChange: (v) => {
                  maxValueTypeSet(v);
                  const value = createDefaultValueByValueType(v, 90);
                  maxValueSet(value);
                  _handleChange({ isGradient, minValue, minValueType, maxValue: value, maxValueType: v, positiveColor, nativeColor, isShowValue });
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              InputText,
              {
                disabled: !isShowInput(maxValueType),
                id: "max",
                type: maxValueType,
                className: index_module_default.mLSm,
                value: maxValue,
                onChange: (v) => {
                  maxValueSet(v || 0);
                  _handleChange({ isGradient, minValue, minValueType, maxValue: v || 0, maxValueType, positiveColor, nativeColor, isShowValue });
                }
              }
            )
          ]
        }
      )
    ] })
  ] });
};

// ../packages/sheets-conditional-formatting-ui/src/components/panel/rule-edit/Formula.tsx
var import_react7 = __toESM(require_react());

// ../packages/sheets-conditional-formatting-ui/src/components/conditional-style-editor/index.tsx
var import_react6 = __toESM(require_react());

// stylePlugin:/Users/zhongjiafeng/Desktop/5000_Project/github/univer/packages/sheets-conditional-formatting-ui/src/components/conditional-style-editor/index.module.less
var index_module_default6 = {
  "cfStyleEdit": "univer-cf-style-edit",
  "buttonItem": "univer-button-item",
  "isActive": "univer-isActive"
};

// ../packages/sheets-conditional-formatting-ui/src/components/conditional-style-editor/index.tsx
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var getAnotherBooleanNumber = (v) => {
  return [0 /* FALSE */, void 0].includes(v) ? 1 /* TRUE */ : 0 /* FALSE */;
};
var getBooleanFromNumber = (v) => v !== 0 /* FALSE */;
var ConditionalStyleEditor = (props) => {
  const { style, onChange, className } = props;
  const componentManager = useDependency(ComponentManager);
  const [isBold, isBoldSet] = (0, import_react6.useState)(() => {
    const defaultV = void 0;
    if (!(style == null ? void 0 : style.bl)) {
      return defaultV;
    }
    return style.bl;
  });
  const [isItalic, isItalicSet] = (0, import_react6.useState)(() => {
    const defaultV = void 0;
    if (!(style == null ? void 0 : style.it)) {
      return defaultV;
    }
    return style.it;
  });
  const [isUnderline, isUnderlineSet] = (0, import_react6.useState)(() => {
    const defaultV = void 0;
    if (!(style == null ? void 0 : style.ul)) {
      return defaultV;
    }
    return style.ul.s;
  });
  const [isStrikethrough, isStrikethroughSet] = (0, import_react6.useState)(() => {
    const defaultV = void 0;
    if (!(style == null ? void 0 : style.st)) {
      return defaultV;
    }
    return style.st.s;
  });
  const [fontColor, fontColorSet] = (0, import_react6.useState)(() => {
    var _a;
    const defaultV = "#2f56ef";
    if (!((_a = style == null ? void 0 : style.cl) == null ? void 0 : _a.rgb)) {
      return defaultV;
    }
    return style.cl.rgb;
  });
  const [bgColor, bgColorSet] = (0, import_react6.useState)(() => {
    var _a;
    const defaultV = "#e8ecfc";
    if (!((_a = style == null ? void 0 : style.bg) == null ? void 0 : _a.rgb)) {
      return defaultV;
    }
    return style.bg.rgb;
  });
  const BoldSingleIcon = componentManager.get("BoldSingle");
  const ItalicSingleIcon = componentManager.get("ItalicSingle");
  const UnderlineSingleIcon = componentManager.get("UnderlineSingle");
  const StrikethroughSingle = componentManager.get("StrikethroughSingle");
  (0, import_react6.useEffect)(() => {
    const resultStyle = {
      bl: isBold,
      it: isItalic
    };
    if (fontColor !== void 0) {
      resultStyle.cl = { rgb: fontColor };
    }
    if (bgColor !== void 0) {
      resultStyle.bg = { rgb: bgColor };
    }
    if (isStrikethrough !== void 0) {
      resultStyle.st = { s: isStrikethrough };
    }
    if (isUnderline !== void 0) {
      resultStyle.ul = { s: isUnderline };
    }
    onChange(removeUndefinedAttr(resultStyle));
  }, [isBold, isItalic, isUnderline, isStrikethrough, fontColor, bgColor]);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    "div",
    {
      className: clsx(index_module_default6.cfStyleEdit, className),
      children: [
        BoldSingleIcon && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "div",
          {
            className: clsx({ [index_module_default6.isActive]: getBooleanFromNumber(isBold || 0 /* FALSE */) }, index_module_default6.buttonItem),
            onClick: () => isBoldSet(getAnotherBooleanNumber(isBold)),
            children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(BoldSingleIcon, {})
          }
        ),
        ItalicSingleIcon && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "div",
          {
            className: clsx({ [index_module_default6.isActive]: getBooleanFromNumber(isItalic || 0 /* FALSE */) }, index_module_default6.buttonItem),
            onClick: () => isItalicSet(getAnotherBooleanNumber(isItalic)),
            children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ItalicSingleIcon, {})
          }
        ),
        UnderlineSingleIcon && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "div",
          {
            className: clsx({ [index_module_default6.isActive]: getBooleanFromNumber(isUnderline || 0 /* FALSE */) }, index_module_default6.buttonItem),
            onClick: () => isUnderlineSet(getAnotherBooleanNumber(isUnderline)),
            children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(UnderlineSingleIcon, {})
          }
        ),
        StrikethroughSingle && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "div",
          {
            className: clsx({ [index_module_default6.isActive]: getBooleanFromNumber(isStrikethrough || 0 /* FALSE */) }, index_module_default6.buttonItem),
            onClick: () => isStrikethroughSet(getAnotherBooleanNumber(isStrikethrough)),
            children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(StrikethroughSingle, {})
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ColorPicker2, { color: fontColor, onChange: fontColorSet, iconId: "FontColor" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ColorPicker2, { color: bgColor, onChange: bgColorSet, iconId: "PaintBucket" })
      ]
    }
  );
};

// ../packages/sheets-conditional-formatting-ui/src/components/panel/rule-edit/Formula.tsx
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var FormulaStyleEditor = (props) => {
  var _a;
  const { onChange, interceptorManager } = props;
  const localeService = useDependency(LocaleService);
  const univerInstanceService = useDependency(IUniverInstanceService);
  const workbook = univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET);
  const worksheet = workbook.getActiveSheet();
  const rule = ((_a = props.rule) == null ? void 0 : _a.type) === "highlightCell" /* highlightCell */ ? props.rule : void 0;
  const divEleRef = (0, import_react7.useRef)(null);
  const [isFocusFormulaEditor, isFocusFormulaEditorSet] = (0, import_react7.useState)(false);
  const formulaEditorActionsRef = (0, import_react7.useRef)({});
  const [style, styleSet] = (0, import_react7.useState)({});
  const [formula, formulaSet] = (0, import_react7.useState)(() => {
    if ((rule == null ? void 0 : rule.subType) === "formula" /* formula */) {
      return rule.value;
    }
    return "=";
  });
  const [formulaError, formulaErrorSet] = (0, import_react7.useState)(void 0);
  const getResult = (config) => {
    return {
      style: config.style,
      value: formula,
      type: "highlightCell" /* highlightCell */,
      subType: "formula" /* formula */
    };
  };
  (0, import_react7.useEffect)(() => {
    const dispose = interceptorManager.intercept(interceptorManager.getInterceptPoints().submit, {
      handler() {
        return getResult({ style, formula });
      }
    });
    return dispose;
  }, [style, formula, interceptorManager]);
  (0, import_react7.useEffect)(() => {
    const dispose = interceptorManager.intercept(interceptorManager.getInterceptPoints().beforeSubmit, {
      handler: (v, _c, next) => {
        if (formulaError || formula.length === 1 || !formula.startsWith("=")) {
          formulaErrorSet(localeService.t("sheet.cf.errorMessage.formulaError"));
          return false;
        }
        return next(v);
      }
    });
    return dispose;
  }, [formulaError, formula]);
  const _onChange = (config) => {
    onChange(getResult(config));
  };
  useSidebarClick((e) => {
    var _a2;
    const handleOutClick = (_a2 = formulaEditorActionsRef.current) == null ? void 0 : _a2.handleOutClick;
    handleOutClick && handleOutClick(e, () => isFocusFormulaEditorSet(false));
  });
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { ref: divEleRef, children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "div",
      {
        className: `
                  ${index_module_default.title}
                  ${index_module_default.mTBase}
                `,
        children: localeService.t("sheet.cf.panel.styleRule")
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "div",
      {
        className: `
                  ${index_module_default.mTSm}
                `,
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          FormulaEditor,
          {
            onChange: (formula2) => {
              formulaSet(formula2);
              _onChange({ style, formula: formula2 });
            },
            onVerify: (result, formula2) => {
              if (!result || formula2.length === 1) {
                formulaErrorSet(localeService.t("sheet.cf.errorMessage.formulaError"));
              } else {
                formulaErrorSet(void 0);
              }
            },
            errorText: formulaError,
            onFocus: () => {
              isFocusFormulaEditorSet(true);
            },
            actions: formulaEditorActionsRef.current,
            isFocus: isFocusFormulaEditor,
            initValue: formula,
            unitId: workbook.getUnitId(),
            subUnitId: worksheet == null ? void 0 : worksheet.getSheetId()
          }
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "div",
      {
        className: `
                  ${index_module_default5.cfPreviewWrap}
                `,
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Preview, { rule: getResult({ style, formula }) })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      ConditionalStyleEditor,
      {
        style: rule == null ? void 0 : rule.style,
        className: `
                  ${index_module_default.mTSm}
                `,
        onChange: (v) => {
          styleSet(v);
          _onChange({ style: v, formula });
        }
      }
    )
  ] });
};

// ../packages/sheets-conditional-formatting-ui/src/components/panel/rule-edit/HighlightCell.tsx
var import_react8 = __toESM(require_react());

// ../packages/sheets-conditional-formatting-ui/src/components/wrapper-error/WrapperError.tsx
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var WrapperError = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { style: { position: "relative" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          zIndex: 999,
          bottom: "-13px",
          fontSize: "10px",
          color: "red"
        },
        children: props.errorText
      }
    ),
    props.children
  ] });
};

// ../packages/sheets-conditional-formatting-ui/src/components/panel/rule-edit/HighlightCell.tsx
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var createOptionItem3 = (text, localeService) => ({ label: localeService.t(`sheet.cf.operator.${text}`), value: text });
var HighlightCellInput = (props) => {
  const { type, operator, onChange, value, interceptorManager } = props;
  const localeService = useDependency(LocaleService);
  const [inputNumberValue, inputNumberValueSet] = (0, import_react8.useState)(() => typeof value === "number" ? value : 0);
  const [numberError, numberErrorSet] = (0, import_react8.useState)("");
  const [inputTextValue, inputTextValueSet] = (0, import_react8.useState)(() => typeof value === "string" ? value : "");
  const [textError, textErrorSet] = (0, import_react8.useState)("");
  const [inputNumberMin, inputNumberMinSet] = (0, import_react8.useState)(() => Array.isArray(value) ? value[0] === void 0 ? 0 : value[0] : 0);
  const [numberMinError, numberMinErrorSet] = (0, import_react8.useState)("");
  const [inputNumberMax, inputNumberMaxSet] = (0, import_react8.useState)(() => Array.isArray(value) ? value[1] === void 0 ? 100 : value[1] : 100);
  const [numberMaxError, numberMaxErrorSet] = (0, import_react8.useState)("");
  (0, import_react8.useEffect)(() => {
    switch (type) {
      case "text" /* text */: {
        if (["beginsWith" /* beginsWith */, "endsWith" /* endsWith */, "containsText" /* containsText */, "notContainsText" /* notContainsText */, "equal" /* equal */, "notEqual" /* notEqual */].includes(operator)) {
          onChange(inputTextValue);
        }
        break;
      }
      case "number" /* number */: {
        if (["equal" /* equal */, "notEqual" /* notEqual */, "greaterThan" /* greaterThan */, "greaterThanOrEqual" /* greaterThanOrEqual */, "lessThan" /* lessThan */, "lessThanOrEqual" /* lessThanOrEqual */].includes(operator)) {
          onChange(inputNumberValue);
        }
        if (["between" /* between */, "notBetween" /* notBetween */].includes(operator)) {
          onChange([inputNumberMin, inputNumberMax]);
        }
        break;
      }
    }
  }, [type]);
  (0, import_react8.useEffect)(() => {
    const dispose = interceptorManager.intercept(interceptorManager.getInterceptPoints().beforeSubmit, {
      handler: (v, _c, next) => {
        switch (type) {
          case "text" /* text */: {
            if (["beginsWith" /* beginsWith */, "containsText" /* containsText */, "endsWith" /* endsWith */, "notEqual" /* notEqual */, "notContainsText" /* notContainsText */, "equal" /* equal */].includes(operator)) {
              if (!inputTextValue) {
                textErrorSet(localeService.t("sheet.cf.errorMessage.notBlank"));
                return false;
              }
              return next(v);
            }
          }
        }
        return next(v);
      }
    });
    return () => {
      dispose();
    };
  }, [type, inputNumberValue, inputTextValue, operator]);
  switch (type) {
    case "text" /* text */: {
      if (["beginsWith" /* beginsWith */, "endsWith" /* endsWith */, "containsText" /* containsText */, "notContainsText" /* notContainsText */, "equal" /* equal */, "notEqual" /* notEqual */].includes(operator)) {
        const _onChange = (value2) => {
          inputTextValueSet(value2);
          onChange(value2);
        };
        return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "div",
          {
            className: `
                          ${index_module_default.mTSm}
                        `,
            children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(WrapperError, { errorText: textError, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
              Input,
              {
                className: index_module_default5.width100,
                value: inputTextValue,
                onChange: (v) => {
                  textErrorSet("");
                  _onChange(v);
                }
              }
            ) })
          }
        );
      }
      break;
    }
    case "number" /* number */: {
      if (["equal" /* equal */, "notEqual" /* notEqual */, "greaterThan" /* greaterThan */, "greaterThanOrEqual" /* greaterThanOrEqual */, "lessThan" /* lessThan */, "lessThanOrEqual" /* lessThanOrEqual */].includes(operator)) {
        const _onChange = (value2) => {
          inputNumberValueSet(value2 || 0);
          onChange(value2 || 0);
          numberErrorSet("");
        };
        return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "div",
          {
            className: `
                          ${index_module_default.mTSm}
                        `,
            children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(WrapperError, { errorText: numberError, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(InputNumber, { min: Number.MIN_SAFE_INTEGER, max: Number.MAX_SAFE_INTEGER, className: index_module_default5.width100, value: inputNumberValue, onChange: _onChange }) })
          }
        );
      }
      if (["between" /* between */, "notBetween" /* notBetween */].includes(operator)) {
        const onChangeMin = (_value) => {
          inputNumberMinSet(_value || 0);
          const value2 = [_value || 0, inputNumberMax];
          onChange(value2);
          numberMinErrorSet("");
        };
        const onChangeMax = (_value) => {
          inputNumberMaxSet(_value || 0);
          const value2 = [inputNumberMin, _value || 0];
          onChange(value2);
          numberMaxErrorSet("");
        };
        return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
          "div",
          {
            className: `
                          ${index_module_default.mTSm}
                          ${index_module_default.labelContainer}
                        `,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(WrapperError, { errorText: numberMinError, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(InputNumber, { min: Number.MIN_SAFE_INTEGER, max: Number.MAX_SAFE_INTEGER, value: inputNumberMin, onChange: onChangeMin }) }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(WrapperError, { errorText: numberMaxError, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                InputNumber,
                {
                  min: Number.MIN_SAFE_INTEGER,
                  max: Number.MAX_SAFE_INTEGER,
                  className: `
                                  ${index_module_default.mLSm}
                                `,
                  value: inputNumberMax,
                  onChange: onChangeMax
                }
              ) })
            ]
          }
        );
      }
    }
  }
  return null;
};
var getOperatorOptions = (type, localeService) => {
  switch (type) {
    case "text" /* text */: {
      return [
        createOptionItem3("containsText" /* containsText */, localeService),
        createOptionItem3("notContainsText" /* notContainsText */, localeService),
        createOptionItem3("beginsWith" /* beginsWith */, localeService),
        createOptionItem3("endsWith" /* endsWith */, localeService),
        createOptionItem3("equal" /* equal */, localeService),
        createOptionItem3("notEqual" /* notEqual */, localeService),
        createOptionItem3("containsBlanks" /* containsBlanks */, localeService),
        createOptionItem3("notContainsBlanks" /* notContainsBlanks */, localeService),
        createOptionItem3("containsErrors" /* containsErrors */, localeService),
        createOptionItem3("notContainsErrors" /* notContainsErrors */, localeService)
      ];
    }
    case "number" /* number */: {
      return [
        createOptionItem3("between" /* between */, localeService),
        createOptionItem3("notBetween" /* notBetween */, localeService),
        createOptionItem3("equal" /* equal */, localeService),
        createOptionItem3("notEqual" /* notEqual */, localeService),
        createOptionItem3("greaterThan" /* greaterThan */, localeService),
        createOptionItem3("greaterThanOrEqual" /* greaterThanOrEqual */, localeService),
        createOptionItem3("lessThan" /* lessThan */, localeService),
        createOptionItem3("lessThanOrEqual" /* lessThanOrEqual */, localeService)
      ];
    }
    case "timePeriod" /* timePeriod */: {
      return [
        createOptionItem3("yesterday" /* yesterday */, localeService),
        createOptionItem3("today" /* today */, localeService),
        createOptionItem3("tomorrow" /* tomorrow */, localeService),
        createOptionItem3("last7Days" /* last7Days */, localeService),
        createOptionItem3("lastWeek" /* lastWeek */, localeService),
        createOptionItem3("thisWeek" /* thisWeek */, localeService),
        createOptionItem3("nextWeek" /* nextWeek */, localeService),
        createOptionItem3("lastMonth" /* lastMonth */, localeService),
        createOptionItem3("thisMonth" /* thisMonth */, localeService),
        createOptionItem3("nextMonth" /* nextMonth */, localeService)
      ];
    }
  }
};
var HighlightCellStyleEditor = (props) => {
  var _a;
  const { interceptorManager, onChange } = props;
  const localeService = useDependency(LocaleService);
  const rule = ((_a = props.rule) == null ? void 0 : _a.type) === "highlightCell" /* highlightCell */ ? props.rule : void 0;
  const [subType, subTypeSet] = (0, import_react8.useState)(() => {
    const defaultV = "text" /* text */;
    if (!rule) {
      return defaultV;
    }
    return rule.subType || defaultV;
  });
  const typeOptions = [{
    value: "text" /* text */,
    label: localeService.t("sheet.cf.subRuleType.text")
  }, {
    value: "number" /* number */,
    label: localeService.t("sheet.cf.subRuleType.number")
  }, {
    value: "timePeriod" /* timePeriod */,
    label: localeService.t("sheet.cf.subRuleType.timePeriod")
  }, {
    value: "duplicateValues" /* duplicateValues */,
    label: localeService.t("sheet.cf.subRuleType.duplicateValues")
  }, {
    value: "uniqueValues" /* uniqueValues */,
    label: localeService.t("sheet.cf.subRuleType.uniqueValues")
  }];
  const operatorOptions = (0, import_react8.useMemo)(() => getOperatorOptions(subType, localeService), [subType]);
  const [operator, operatorSet] = (0, import_react8.useState)(() => {
    const defaultV = operatorOptions ? operatorOptions[0].value : void 0;
    if (!rule) {
      return defaultV;
    }
    return rule.operator || defaultV;
  });
  const [value, valueSet] = (0, import_react8.useState)(() => {
    var _a2;
    const defaultV = "";
    if (!rule) {
      return defaultV;
    }
    const v = (_a2 = rule.value) != null ? _a2 : createDefaultValue(rule.subType, rule.operator);
    return v;
  });
  const [style, styleSet] = (0, import_react8.useState)({});
  const getResult = (0, import_react8.useMemo)(() => (option) => {
    var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
    switch (option.subType || subType) {
      case "text" /* text */: {
        if (["beginsWith" /* beginsWith */, "endsWith" /* endsWith */, "containsText" /* containsText */, "notContainsText" /* notContainsText */, "equal" /* equal */, "notEqual" /* notEqual */].includes(operator)) {
          return {
            type: "highlightCell" /* highlightCell */,
            subType: (_a2 = option.subType) != null ? _a2 : subType,
            operator: (_b = option.operator) != null ? _b : operator,
            style: (_c = option.style) != null ? _c : style,
            value: (_d = option.value) != null ? _d : value
          };
        }
        break;
      }
      case "number" /* number */: {
        if (["equal" /* equal */, "notEqual" /* notEqual */, "greaterThan" /* greaterThan */, "greaterThanOrEqual" /* greaterThanOrEqual */, "lessThan" /* lessThan */, "lessThanOrEqual" /* lessThanOrEqual */].includes(operator)) {
          return {
            type: "highlightCell" /* highlightCell */,
            subType: (_e = option.subType) != null ? _e : subType,
            operator: (_f = option.operator) != null ? _f : operator,
            style: (_g = option.style) != null ? _g : style,
            value: (_h = option.value) != null ? _h : value
          };
        }
        if (["between" /* between */, "notBetween" /* notBetween */].includes(operator)) {
          return {
            type: "highlightCell" /* highlightCell */,
            subType: (_i = option.subType) != null ? _i : subType,
            operator: (_j = option.operator) != null ? _j : operator,
            style: (_k = option.style) != null ? _k : style,
            value: (_l = option.value) != null ? _l : value
          };
        }
        break;
      }
    }
    return {
      type: "highlightCell" /* highlightCell */,
      subType: (_m = option.subType) != null ? _m : subType,
      operator: (_n = option.operator) != null ? _n : operator,
      style: (_o = option.style) != null ? _o : style
    };
  }, [subType, operator, value, style]);
  (0, import_react8.useEffect)(() => {
    const dispose = interceptorManager.intercept(interceptorManager.getInterceptPoints().submit, {
      handler() {
        return getResult({});
      }
    });
    return dispose;
  }, [getResult, interceptorManager]);
  (0, import_react8.useEffect)(() => {
    if (!typeOptions.some((item) => item.value === subType)) {
      subTypeSet(typeOptions[0].value);
    }
  }, [typeOptions]);
  const onTypeChange = (v) => {
    const _subType = v;
    const operatorList = getOperatorOptions(_subType, localeService);
    const _operator = operatorList && operatorList[0].value;
    subTypeSet(_subType);
    operatorSet(_operator);
    _operator && valueSet(createDefaultValue(_subType, _operator));
    onChange(getResult({ subType: _subType, operator: _operator }));
  };
  const onOperatorChange = (v) => {
    const _operator = v;
    operatorSet(_operator);
    onChange(getResult({ operator: _operator }));
  };
  const onInputChange = (value2) => {
    valueSet(value2);
    onChange(getResult({ value: value2 }));
  };
  const inputRenderKey = (0, import_react8.useMemo)(() => {
    return `${subType}_${operator}_${Math.random()}`;
  }, [subType, operator]);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "div",
      {
        className: `
                  ${index_module_default.title}
                  ${index_module_default.mTBase}
                `,
        children: localeService.t("sheet.cf.panel.styleRule")
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      Select,
      {
        className: `
                  ${index_module_default.mTSm}
                  ${index_module_default5.width100}
                `,
        onChange: onTypeChange,
        value: subType,
        options: typeOptions
      }
    ),
    (operatorOptions == null ? void 0 : operatorOptions.length) && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      Select,
      {
        className: `
                      ${index_module_default.mTSm}
                      ${index_module_default5.width100}
                    `,
        onChange: onOperatorChange,
        value: operator || "",
        options: operatorOptions
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(HighlightCellInput, { value, interceptorManager, type: subType, operator, rule, onChange: onInputChange }, inputRenderKey),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "div",
      {
        className: `
                  ${index_module_default5.cfPreviewWrap}
                `,
        children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Preview, { rule: getResult({}) })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      ConditionalStyleEditor,
      {
        style: rule == null ? void 0 : rule.style,
        className: `
                  ${index_module_default.mLXxs}
                `,
        onChange: (v) => {
          styleSet(v);
          onChange(getResult({ style: v }));
        }
      }
    )
  ] });
};

// ../packages/sheets-conditional-formatting-ui/src/components/panel/rule-edit/IconSet.tsx
var import_react9 = __toESM(require_react());
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var getIcon = (iconType, iconId) => {
  const arr = iconMap[iconType] || [];
  return arr[Number(iconId)] || "";
};
var TextInput2 = (props) => {
  var _a;
  const univerInstanceService = useDependency(IUniverInstanceService);
  const unitId = univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET).getUnitId();
  const subUnitId = (_a = univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET).getActiveSheet()) == null ? void 0 : _a.getSheetId();
  const className = (0, import_react9.useMemo)(() => {
    if (props.error) {
      return index_module_default5.errorInput;
    }
    return "";
  }, [props.error]);
  const formulaEditorActionsRef = (0, import_react9.useRef)({});
  const [isFocusFormulaEditor, isFocusFormulaEditorSet] = (0, import_react9.useState)(false);
  useSidebarClick((e) => {
    var _a2;
    const handleOutClick = (_a2 = formulaEditorActionsRef.current) == null ? void 0 : _a2.handleOutClick;
    handleOutClick && handleOutClick(e, () => isFocusFormulaEditorSet(false));
  });
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: index_module_default5.positionRelative, children: props.type !== "formula" /* formula */ ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(InputNumber, { className, value: Number(props.value) || 0, onChange: (v) => props.onChange(v != null ? v : 0) }),
    props.error && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: index_module_default5.errorText, children: props.error })
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { style: { width: "100%" }, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    FormulaEditor,
    {
      initValue: String(props.value),
      unitId,
      subUnitId,
      isFocus: isFocusFormulaEditor,
      onChange: (v = "") => {
        const formula = v || "";
        props.onChange(formula);
      },
      onFocus: () => isFocusFormulaEditorSet(true),
      actions: formulaEditorActionsRef.current
    }
  ) }) });
};
var createDefaultConfigItem = (iconType, index, list) => ({
  operator: "greaterThan" /* greaterThan */,
  value: { type: "num" /* num */, value: (list.length - 1 - index) * 10 },
  iconType,
  iconId: String(index)
});
var IconGroupList = (0, import_react9.forwardRef)((props, ref) => {
  const localeService = useDependency(LocaleService);
  const handleClick = (iconType) => {
    props.onClick(iconType);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { ref, className: index_module_default5.iconGroupList, children: iconGroup.map((group, index) => {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: index_module_default5.group, children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: index_module_default5.title, children: localeService.t(group.title) }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: index_module_default5.itemContent, children: group.group.map((groupItem) => {
        return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: index_module_default5.itemWrap, onClick: () => {
          handleClick(groupItem.name);
        }, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: index_module_default5.item, children: groupItem.list.map((base64, index2) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("img", { className: index_module_default5.icon, src: base64 }, index2)) }) }, groupItem.name);
      }) })
    ] }, index);
  }) });
});
var IconItemList = (props) => {
  const list = (0, import_react9.useMemo)(() => {
    const result = [];
    for (const key in iconMap) {
      const list2 = iconMap[key];
      const iconType = key;
      list2.forEach((base64, index) => {
        result.push({
          iconType,
          base64,
          iconId: String(index)
        });
      });
    }
    return result;
  }, []);
  const handleClick = (item) => {
    props.onClick(item.iconType, item.iconId);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: index_module_default5.iconItemListWrap, children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: index_module_default5.none, onClick: () => handleClick({ iconType: EMPTY_ICON_TYPE, iconId: "", base64: "" }), children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(slash_single_default, { className: index_module_default5.icon }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: "\u65E0\u5355\u5143\u683C\u56FE\u6807" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: index_module_default5.iconItemList, children: list.map((item) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: index_module_default5.item, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "img",
      {
        onClick: () => handleClick(item),
        className: `
                              ${index_module_default5.icon}
                            `,
        src: item.base64
      }
    ) }, `${item.iconType}_${item.iconId}`)) })
  ] });
};
var IconSetRuleEdit = (props) => {
  const { onChange, configList, errorMap = {} } = props;
  const localeService = useDependency(LocaleService);
  const options = [{ label: localeService.t(`sheet.cf.symbol.${"greaterThan" /* greaterThan */}`), value: "greaterThan" /* greaterThan */ }, { label: localeService.t(`sheet.cf.symbol.${"greaterThanOrEqual" /* greaterThanOrEqual */}`), value: "greaterThanOrEqual" /* greaterThanOrEqual */ }];
  const valueTypeOptions = [
    { label: localeService.t(`sheet.cf.valueType.${"num" /* num */}`), value: "num" /* num */ },
    { label: localeService.t(`sheet.cf.valueType.${"percent" /* percent */}`), value: "percent" /* percent */ },
    { label: localeService.t(`sheet.cf.valueType.${"percentile" /* percentile */}`), value: "percentile" /* percentile */ },
    { label: localeService.t(`sheet.cf.valueType.${"formula" /* formula */}`), value: "formula" /* formula */ }
  ];
  const handleValueValueChange = (v, index) => {
    onChange([String(index), "value", "value"], v);
  };
  const handleOperatorChange = (operator, index) => {
    onChange([String(index), "operator"], operator);
    const defaultValue = createDefaultValue("number" /* number */, operator);
    handleValueValueChange(defaultValue, index);
  };
  const handleValueTypeChange = (v, index) => {
    onChange([String(index), "value", "type"], v);
    const item = configList[index];
    const defaultValue = createDefaultValue("number" /* number */, item.operator);
    handleValueValueChange(defaultValue, index);
  };
  const render = (0, import_react9.useMemo)(() => {
    return configList.map((item, index) => {
      const error = errorMap[index];
      const icon = getIcon(item.iconType, item.iconId);
      const isEnd = index === configList.length - 1;
      const isFirst = index === 0;
      const preItem = configList[index - 1];
      const lessThanText = (preItem == null ? void 0 : preItem.value.type) === "formula" /* formula */ ? localeService.t("sheet.cf.valueType.formula") : preItem == null ? void 0 : preItem.value.value;
      const handleIconClick = (iconType, iconId) => {
        const value = { ...item, iconId, iconType };
        onChange([String(index)], value);
      };
      return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
        "div",
        {
          className: `
                      ${index ? index_module_default.mTXl : index_module_default.mTSm}
                    `,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
              "div",
              {
                className: `
                          ${index_module_default.label}
                          ${index_module_default5.flex}
                        `,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                    "div",
                    {
                      className: `
                              ${index_module_default5.width45}
                            `,
                      children: [
                        localeService.t("sheet.cf.iconSet.icon"),
                        index + 1
                      ]
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                    "div",
                    {
                      className: `
                              ${index_module_default5.width45}
                            `,
                      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
                        !isFirst && !isEnd && localeService.t("sheet.cf.iconSet.rule"),
                        !isFirst && !isEnd && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { className: index_module_default5.stress, children: [
                          "(",
                          localeService.t("sheet.cf.iconSet.when"),
                          localeService.t(`sheet.cf.symbol.${getOppositeOperator(preItem.operator)}`),
                          lessThanText,
                          isEnd ? "" : ` ${localeService.t("sheet.cf.iconSet.and")} `,
                          ")"
                        ] })
                      ] })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
              "div",
              {
                className: `
                          ${index_module_default5.flex}
                          ${index_module_default.mTSm}
                        `,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                    "div",
                    {
                      className: `
                              ${index_module_default5.iconWrap}
                              ${index_module_default5.width45}
                            `,
                      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                        Dropdown,
                        {
                          overlay: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "univer-rounded-lg univer-p-4", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(IconItemList, { onClick: handleIconClick, iconId: item.iconId, iconType: item.iconType }) }),
                          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: clsx(index_module_default5.dropdownIcon, "univer-box-border univer-h-7"), children: [
                            icon ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("img", { src: icon, className: index_module_default5.icon }) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(slash_single_default, { className: index_module_default5.icon }),
                            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(more_down_single_default, {})
                          ] })
                        }
                      )
                    }
                  ),
                  !isEnd ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                    Select,
                    {
                      className: `
                                      ${index_module_default.mL0}
                                      ${index_module_default5.width45}
                                      ${index_module_default.mR0}
                                    `,
                      options,
                      value: item.operator,
                      onChange: (v) => {
                        handleOperatorChange(v, index);
                      }
                    }
                  ) : /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                    "div",
                    {
                      className: `
                                      ${index_module_default5.width45}
                                      ${index_module_default.label}
                                    `,
                      style: { marginTop: 0 },
                      children: [
                        localeService.t("sheet.cf.iconSet.rule"),
                        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { className: index_module_default5.stress, children: [
                          "(",
                          localeService.t("sheet.cf.iconSet.when"),
                          localeService.t(`sheet.cf.symbol.${getOppositeOperator(preItem.operator)}`),
                          lessThanText,
                          isEnd ? "" : ` ${localeService.t("sheet.cf.iconSet.and")} `,
                          ")"
                        ] })
                      ]
                    }
                  )
                ]
              }
            ),
            !isEnd ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                "div",
                {
                  className: `
                                      ${index_module_default.mTSm}
                                      ${index_module_default.label}
                                      ${index_module_default5.flex}
                                    `,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                      "div",
                      {
                        className: `
                                          ${index_module_default5.width45}
                                        `,
                        children: localeService.t("sheet.cf.iconSet.type")
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                      "div",
                      {
                        className: `
                                          ${index_module_default5.width45}
                                        `,
                        children: localeService.t("sheet.cf.iconSet.value")
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                "div",
                {
                  className: `
                                      ${index_module_default.mTSm}
                                      ${index_module_default5.flex}
                                    `,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                      Select,
                      {
                        style: { flexShrink: 0 },
                        className: `
                                          ${index_module_default5.width45}
                                          ${index_module_default.mL0}
                                        `,
                        options: valueTypeOptions,
                        value: item.value.type,
                        onChange: (v) => {
                          handleValueTypeChange(v, index);
                        }
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                      "div",
                      {
                        className: `
                                          ${index_module_default.mL0}
                                          ${index_module_default5.width45}
                                        `,
                        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                          TextInput2,
                          {
                            id: index,
                            type: item.value.type,
                            error,
                            value: item.value.value || "",
                            onChange: (v) => handleValueValueChange(v, index)
                          }
                        )
                      }
                    )
                  ]
                }
              )
            ] }) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {})
          ]
        },
        index
      );
    });
  }, [configList, errorMap]);
  return render;
};
var IconSet = (props) => {
  var _a;
  const { interceptorManager } = props;
  const rule = ((_a = props.rule) == null ? void 0 : _a.type) === "iconSet" /* iconSet */ ? props.rule : void 0;
  const localeService = useDependency(LocaleService);
  const [errorMap, errorMapSet] = (0, import_react9.useState)({});
  const [currentIconType, currentIconTypeSet] = (0, import_react9.useState)(() => {
    const defaultV = Object.keys(iconMap)[0];
    if (rule && rule.config.length) {
      const type = rule.config[0].iconType;
      const isNotSame = rule.config.some((item) => item.iconType !== type);
      if (!isNotSame) {
        return type;
      }
    }
    return defaultV;
  });
  const [configList, configListSet] = (0, import_react9.useState)(() => {
    if (rule && rule.config.length) {
      return Tools.deepClone(rule == null ? void 0 : rule.config);
    }
    const list = iconMap[currentIconType] || [];
    return new Array(list.length).fill("").map((_e, index, list2) => {
      if (index === list2.length - 1) {
        return {
          operator: "lessThanOrEqual" /* lessThanOrEqual */,
          value: { type: "num" /* num */, value: Number.MAX_SAFE_INTEGER },
          iconType: currentIconType,
          iconId: String(index)
        };
      }
      return createDefaultConfigItem(currentIconType, index, list2);
    });
  });
  const [isShowValue, isShowValueSet] = (0, import_react9.useState)(() => {
    if (!rule) {
      return true;
    }
    return !!rule.isShowValue;
  });
  const previewIcon = (0, import_react9.useMemo)(() => {
    const list = configList.map((item) => {
      return getIcon(item.iconType, item.iconId);
    });
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: index_module_default5.iconWrap, children: list.map((icon, index) => icon ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "img",
      {
        className: index_module_default5.icon,
        src: icon
      },
      index
    ) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(slash_single_default, { className: index_module_default5.icon }, index)) });
  }, [configList]);
  const checkResult = (_configList) => {
    const isTypeSame = _configList.reduce((pre, cur, index) => {
      if (pre.preType && !pre.result || _configList.length - 1 === index) {
        return pre;
      }
      if (cur.value.type === "formula" /* formula */) {
        return {
          preType: "formula" /* formula */,
          result: false
        };
      }
      if (pre.preType) {
        return {
          result: pre.preType === cur.value.type,
          preType: cur.value.type
        };
      } else {
        return {
          result: true,
          preType: cur.value.type
        };
      }
    }, { result: true, preType: "" }).result;
    if (isTypeSame && ["num" /* num */, "percent" /* percent */, "percentile" /* percentile */].includes(_configList[0].value.type)) {
      const result = {};
      _configList.forEach((item, index, arr) => {
        const preIndex = index - 1;
        if (preIndex < 0 || index === arr.length - 1) {
          return;
        }
        const preItem = _configList[index - 1];
        const preOperator = getOppositeOperator(preItem.operator);
        if (!compareWithNumber({ operator: preOperator, value: preItem.value.value }, item.value.value)) {
          result[index] = `${localeService.t(`sheet.cf.form.${preOperator}`, String(preItem.value.value))} `;
        }
      });
      return result;
    }
    return {};
  };
  const handleChange = (keys, v) => {
    const oldV = get_default(configList, keys);
    if (oldV !== v) {
      set_default(configList, keys, v);
      configListSet([...configList]);
      errorMapSet(checkResult(configList));
    }
  };
  const handleClickIconList = (iconType) => {
    currentIconTypeSet(iconType);
    const list = iconMap[iconType] || [];
    const config = new Array(list.length).fill("").map((_e, index, list2) => createDefaultConfigItem(iconType, index, list2));
    configListSet(config);
    errorMapSet(checkResult(config));
  };
  (0, import_react9.useEffect)(() => {
    const dispose = interceptorManager.intercept(interceptorManager.getInterceptPoints().submit, {
      handler() {
        const result = { type: "iconSet" /* iconSet */, isShowValue, config: configList };
        return result;
      }
    });
    return () => {
      dispose();
    };
  }, [isShowValue, configList, interceptorManager]);
  (0, import_react9.useEffect)(() => {
    const dispose = interceptorManager.intercept(interceptorManager.getInterceptPoints().beforeSubmit, {
      handler() {
        const keys = Object.keys(errorMap);
        return keys.length === 0;
      }
    });
    return () => {
      dispose();
    };
  }, [isShowValue, configList, interceptorManager, errorMap]);
  const reverseIcon = () => {
    const iconList = configList.map((item) => ({ ...item }));
    configList.forEach((item, index) => {
      const mirrorIndex = configList.length - 1 - index;
      const newIcon = iconList[mirrorIndex];
      item.iconId = newIcon.iconId;
      item.iconType = newIcon.iconType;
    });
    configListSet([...configList]);
  };
  const layoutService = useDependency(ILayoutService);
  const [iconGroupListEl, setIconGroupListEl] = (0, import_react9.useState)();
  useScrollYOverContainer(iconGroupListEl, layoutService.rootContainerElement);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: index_module_default5.iconSet, children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: index_module_default.title, children: localeService.t("sheet.cf.panel.styleRule") }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "div",
      {
        className: `
                  ${index_module_default.mTSm}
                `,
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          Dropdown,
          {
            overlay: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "univer-rounded-lg univer-p-4", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
              IconGroupList,
              {
                ref: (el) => {
                  !iconGroupListEl && el && setIconGroupListEl(el);
                },
                iconType: currentIconType,
                onClick: handleClickIconList
              }
            ) }),
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: clsx(index_module_default5.dropdownIcon, "univer-box-border univer-h-7 univer-w-auto"), children: [
              previewIcon,
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(more_down_single_default, {})
            ] })
          }
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
      "div",
      {
        className: `
                  ${index_module_default.mTSm}
                  ${index_module_default5.renderConfig}
                `,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: index_module_default5.utilItem, children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Checkbox, { onChange: reverseIcon }),
            localeService.t("sheet.cf.iconSet.reverseIconOrder")
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
            "div",
            {
              className: `
                      ${index_module_default5.utilItem}
                      ${index_module_default.mLXl}
                    `,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Checkbox, { checked: !isShowValue, onChange: (v) => {
                  isShowValueSet(!v);
                } }),
                localeService.t("sheet.cf.iconSet.onlyShowIcon")
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(IconSetRuleEdit, { errorMap, onChange: handleChange, configList })
  ] });
};

// ../packages/sheets-conditional-formatting-ui/src/components/panel/rule-edit/Rank.tsx
var import_react10 = __toESM(require_react());
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var RankStyleEditor = (props) => {
  var _a;
  const { onChange, interceptorManager } = props;
  const localeService = useDependency(LocaleService);
  const rule = ((_a = props.rule) == null ? void 0 : _a.type) === "highlightCell" /* highlightCell */ ? props.rule : void 0;
  const options = [{ label: localeService.t("sheet.cf.panel.isNotBottom"), value: "isNotBottom" }, { label: localeService.t("sheet.cf.panel.isBottom"), value: "isBottom" }, { label: localeService.t("sheet.cf.panel.greaterThanAverage"), value: "greaterThanAverage" }, { label: localeService.t("sheet.cf.panel.lessThanAverage"), value: "lessThanAverage" }];
  const [type, typeSet] = (0, import_react10.useState)(() => {
    const defaultV = options[0].value;
    const type2 = rule == null ? void 0 : rule.type;
    if (!rule) {
      return defaultV;
    }
    switch (type2) {
      case "highlightCell" /* highlightCell */: {
        const subType = rule.subType;
        switch (subType) {
          case "average" /* average */: {
            if (["greaterThan" /* greaterThan */, "greaterThanOrEqual" /* greaterThanOrEqual */].includes(rule.operator)) {
              return "greaterThanAverage";
            }
            if (["lessThan" /* lessThan */, "lessThanOrEqual" /* lessThanOrEqual */].includes(rule.operator)) {
              return "lessThanAverage";
            }
            return defaultV;
          }
          case "rank" /* rank */: {
            if (rule.isBottom) {
              return "isBottom";
            } else {
              return "isNotBottom";
            }
          }
        }
      }
    }
    return defaultV;
  });
  const [value, valueSet] = (0, import_react10.useState)(() => {
    const defaultV = 10;
    const type2 = rule == null ? void 0 : rule.type;
    if (!rule) {
      return defaultV;
    }
    switch (type2) {
      case "highlightCell" /* highlightCell */: {
        const subType = rule.subType;
        switch (subType) {
          case "rank" /* rank */: {
            return rule.value || defaultV;
          }
        }
      }
    }
    return defaultV;
  });
  const [isPercent, isPercentSet] = (0, import_react10.useState)(() => {
    const defaultV = false;
    const type2 = rule == null ? void 0 : rule.type;
    if (!rule) {
      return defaultV;
    }
    switch (type2) {
      case "highlightCell" /* highlightCell */: {
        const subType = rule.subType;
        switch (subType) {
          case "rank" /* rank */: {
            return rule.isPercent || defaultV;
          }
        }
      }
    }
    return defaultV;
  });
  const [style, styleSet] = (0, import_react10.useState)({});
  const getResult = (config) => {
    const { type: type2, isPercent: isPercent2, value: value2, style: style2 } = config;
    if (type2 === "isNotBottom") {
      return { type: "highlightCell" /* highlightCell */, subType: "rank" /* rank */, isPercent: isPercent2, isBottom: false, value: value2, style: style2 };
    }
    if (type2 === "isBottom") {
      return { type: "highlightCell" /* highlightCell */, subType: "rank" /* rank */, isPercent: isPercent2, isBottom: true, value: value2, style: style2 };
    }
    if (type2 === "greaterThanAverage") {
      return { type: "highlightCell" /* highlightCell */, subType: "average" /* average */, operator: "greaterThan" /* greaterThan */, style: style2 };
    }
    if (type2 === "lessThanAverage") {
      return { type: "highlightCell" /* highlightCell */, subType: "average" /* average */, operator: "lessThan" /* lessThan */, style: style2 };
    }
  };
  (0, import_react10.useEffect)(() => {
    const dispose = interceptorManager.intercept(interceptorManager.getInterceptPoints().submit, {
      handler() {
        return getResult({ type, isPercent, value, style });
      }
    });
    return dispose;
  }, [type, isPercent, value, style, interceptorManager]);
  const _onChange = (config) => {
    onChange(getResult(config));
  };
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      "div",
      {
        className: `
                  ${index_module_default.title}
                  ${index_module_default.mTBase}
                `,
        children: localeService.t("sheet.cf.panel.styleRule")
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      Select,
      {
        className: `
                  ${index_module_default5.width100}
                  ${index_module_default.mTSm}
                `,
        value: type,
        options,
        onChange: (v) => {
          typeSet(v);
          _onChange({ type: v, isPercent, value, style });
        }
      }
    ),
    ["isNotBottom", "isBottom"].includes(type) && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
      "div",
      {
        className: `
                      ${index_module_default.labelContainer}
                      ${index_module_default.mTSm}
                    `,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            InputNumber,
            {
              min: 1,
              max: 1e3,
              value,
              onChange: (v) => {
                const value2 = v || 0;
                valueSet(value2);
                _onChange({ type, isPercent, value: value2, style });
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
            "div",
            {
              className: `
                          ${index_module_default.mLSm}
                          ${index_module_default.labelContainer}
                          ${index_module_default5.text}
                        `,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                  Checkbox,
                  {
                    checked: isPercent,
                    onChange: (v) => {
                      isPercentSet(!!v);
                      _onChange({ type, isPercent: !!v, value, style });
                    }
                  }
                ),
                localeService.t("sheet.cf.valueType.percent")
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      "div",
      {
        className: `
                  ${index_module_default5.cfPreviewWrap}
                `,
        children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Preview, { rule: getResult({ type, isPercent, value, style }) })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      ConditionalStyleEditor,
      {
        style: rule == null ? void 0 : rule.style,
        className: `
                  ${index_module_default.mTSm}
                `,
        onChange: (v) => {
          styleSet(v);
          _onChange({ type, isPercent, value, style: v });
        }
      }
    )
  ] });
};

// ../packages/sheets-conditional-formatting-ui/src/components/panel/rule-edit/type.ts
var beforeSubmit = createInterceptorKey("beforeSubmit");
var submit = createInterceptorKey("submit");

// ../packages/sheets-conditional-formatting-ui/src/components/panel/rule-edit/index.tsx
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var getUnitId = (univerInstanceService) => univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET).getUnitId();
var getSubUnitId = (univerInstanceService) => {
  var _a;
  return (_a = univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET).getActiveSheet()) == null ? void 0 : _a.getSheetId();
};
var RuleEdit = (props) => {
  var _a, _b, _c;
  const localeService = useDependency(LocaleService);
  const commandService = useDependency(ICommandService);
  const univerInstanceService = useDependency(IUniverInstanceService);
  const conditionalFormattingRuleModel = useDependency(ConditionalFormattingRuleModel);
  const selectionManagerService = useDependency(SheetsSelectionsService);
  const unitId = getUnitId(univerInstanceService);
  const subUnitId = getSubUnitId(univerInstanceService);
  const [errorText, errorTextSet] = (0, import_react11.useState)(void 0);
  const rangeResult = (0, import_react11.useRef)((_b = (_a = props.rule) == null ? void 0 : _a.ranges) != null ? _b : []);
  const rangeString = (0, import_react11.useMemo)(() => {
    var _a2, _b2, _c2;
    let ranges = (_a2 = props.rule) == null ? void 0 : _a2.ranges;
    if (!(ranges == null ? void 0 : ranges.length)) {
      ranges = (_c2 = (_b2 = selectionManagerService.getCurrentSelections()) == null ? void 0 : _b2.map((s) => s.range)) != null ? _c2 : [];
    }
    rangeResult.current = ranges;
    if (!(ranges == null ? void 0 : ranges.length)) {
      return "";
    }
    return ranges.map((range) => {
      const v = serializeRange(range);
      return v === "NaN" ? "" : v;
    }).filter((r) => !!r).join(",");
  }, [props.rule]);
  const options = [
    { label: localeService.t("sheet.cf.ruleType.highlightCell"), value: "1" },
    { label: localeService.t("sheet.cf.panel.rankAndAverage"), value: "2" },
    { label: localeService.t("sheet.cf.ruleType.dataBar"), value: "3" },
    { label: localeService.t("sheet.cf.ruleType.colorScale"), value: "4" },
    { label: localeService.t("sheet.cf.ruleType.formula"), value: "5" },
    { label: localeService.t("sheet.cf.ruleType.iconSet"), value: "6" }
  ];
  const [ruleType, ruleTypeSet] = (0, import_react11.useState)(() => {
    var _a2, _b2;
    const type = (_a2 = props.rule) == null ? void 0 : _a2.rule.type;
    const defaultType = options[0].value;
    if (!type) {
      return defaultType;
    }
    switch (type) {
      case "highlightCell" /* highlightCell */: {
        const subType = (_b2 = props.rule) == null ? void 0 : _b2.rule.subType;
        switch (subType) {
          case "number" /* number */:
          case "text" /* text */:
          case "duplicateValues" /* duplicateValues */:
          case "uniqueValues" /* uniqueValues */:
          case "timePeriod" /* timePeriod */: {
            return "1";
          }
          case "average" /* average */:
          case "rank" /* rank */: {
            return "2";
          }
          case "formula" /* formula */: {
            return "5";
          }
        }
        break;
      }
      case "dataBar" /* dataBar */: {
        return "3";
      }
      case "colorScale" /* colorScale */: {
        return "4";
      }
      case "iconSet" /* iconSet */: {
        return "6";
      }
    }
    return defaultType;
  });
  const result = (0, import_react11.useRef)(void 0);
  const interceptorManager = (0, import_react11.useMemo)(() => {
    const _interceptorManager = new InterceptorManager({ beforeSubmit, submit });
    return _interceptorManager;
  }, []);
  const StyleEditor = (0, import_react11.useMemo)(() => {
    switch (ruleType) {
      case "1": {
        return HighlightCellStyleEditor;
      }
      case "2": {
        return RankStyleEditor;
      }
      case "3": {
        return DataBarStyleEditor;
      }
      case "4": {
        return ColorScaleStyleEditor;
      }
      case "5": {
        return FormulaStyleEditor;
      }
      case "6": {
        return IconSet;
      }
      default: {
        return HighlightCellStyleEditor;
      }
    }
  }, [ruleType]);
  (0, import_react11.useEffect)(() => {
    const disposable = commandService.onCommandExecuted((commandInfo) => {
      if (commandInfo.id === RemoveSheetMutation.id) {
        const params = commandInfo.params;
        if (params.subUnitId === subUnitId && params.unitId === unitId) {
          props.onCancel();
        }
      }
      if (commandInfo.id === SetWorksheetActiveOperation.id) {
        props.onCancel();
      }
    });
    return () => disposable.dispose();
  }, []);
  const onStyleChange = (config) => {
    result.current = config;
  };
  const onRangeSelectorChange = (rangeString2) => {
    const result2 = rangeString2.split(",").filter((e) => !!e).map(deserializeRangeWithSheet).map((item) => item.range);
    rangeResult.current = result2;
  };
  const handleSubmit = () => {
    if (errorText) {
      return;
    }
    const getRanges = () => {
      const worksheet = univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET).getActiveSheet();
      if (!worksheet) {
        throw new Error("No active sheet found");
      }
      const ranges2 = rangeResult.current.map((range) => setEndForRange(range, worksheet.getRowCount(), worksheet.getColumnCount()));
      const result2 = ranges2.filter((range) => !(Number.isNaN(range.startRow) || Number.isNaN(range.startColumn)));
      return result2;
    };
    const ranges = getRanges();
    const beforeSubmitResult = interceptorManager.fetchThroughInterceptors(interceptorManager.getInterceptPoints().beforeSubmit)(true, null);
    if (beforeSubmitResult) {
      const result2 = interceptorManager.fetchThroughInterceptors(interceptorManager.getInterceptPoints().submit)(null, null);
      if (result2) {
        const unitId2 = getUnitId(univerInstanceService);
        const subUnitId2 = getSubUnitId(univerInstanceService);
        if (!unitId2 || !subUnitId2) {
          throw new Error("No active sheet found");
        }
        let rule = {};
        if (props.rule && props.rule.cfId) {
          rule = { ...props.rule, ranges, rule: result2 };
          commandService.executeCommand(SetCfCommand.id, { unitId: unitId2, subUnitId: subUnitId2, rule });
          props.onCancel();
        } else {
          const cfId = conditionalFormattingRuleModel.createCfId(unitId2, subUnitId2);
          rule = { cfId, ranges, rule: result2, stopIfTrue: false };
          commandService.executeCommand(AddCfCommand.id, { unitId: unitId2, subUnitId: subUnitId2, rule });
          props.onCancel();
        }
      }
    }
  };
  const handleCancel = () => {
    props.onCancel();
  };
  const handleVerify = (v, rangeText) => {
    if (v) {
      if (rangeText.length < 1) {
        errorTextSet(localeService.t("sheet.cf.errorMessage.rangeError"));
      } else {
        errorTextSet(void 0);
      }
    } else {
      errorTextSet(localeService.t("sheet.cf.errorMessage.rangeError"));
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: index_module_default5.cfRuleStyleEditor, children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: index_module_default.title, children: localeService.t("sheet.cf.panel.range") }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
      "div",
      {
        className: `
                  ${index_module_default.mTBase}
                `,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            RangeSelector,
            {
              unitId,
              subUnitId,
              initialValue: rangeString,
              onChange: (_, text) => onRangeSelectorChange(text),
              onVerify: handleVerify
            }
          ),
          errorText && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: index_module_default5.cfErrorText, children: errorText })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: index_module_default.title, children: localeService.t("sheet.cf.panel.styleType") }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: index_module_default.mTBase, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Select, { className: index_module_default5.width100, value: ruleType, options, onChange: (e) => ruleTypeSet(e) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(StyleEditor, { interceptorManager, rule: (_c = props.rule) == null ? void 0 : _c.rule, onChange: onStyleChange }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
      "div",
      {
        className: `
                  ${index_module_default.mTBase}
                  ${index_module_default5.btnList}
                `,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Button, { size: "small", onClick: handleCancel, children: localeService.t("sheet.cf.panel.cancel") }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Button, { className: index_module_default.mLSm, size: "small", type: "primary", onClick: handleSubmit, children: localeService.t("sheet.cf.panel.submit") })
        ]
      }
    )
  ] });
};

// ../packages/sheets-conditional-formatting-ui/src/components/panel/index.tsx
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var ConditionFormattingPanel = (props) => {
  const [currentEditRule, currentEditRuleSet] = (0, import_react12.useState)(props.rule);
  const [isShowRuleEditor, isShowRuleEditorSet] = (0, import_react12.useState)(!!props.rule);
  const createCfRule = () => {
    isShowRuleEditorSet(true);
  };
  const handleCancel = () => {
    isShowRuleEditorSet(false);
    currentEditRuleSet(void 0);
  };
  const handleRuleClick = (rule) => {
    currentEditRuleSet(rule);
    isShowRuleEditorSet(true);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: index_module_default.conditionalFormattingWrap, children: isShowRuleEditor ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(RuleEdit, { onCancel: handleCancel, rule: currentEditRule }) : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(RuleList, { onClick: handleRuleClick, onCreate: createCfRule }) });
};

// ../packages/sheets-conditional-formatting-ui/src/controllers/cf.panel.controller.ts
var CF_PANEL_KEY = "sheet.conditional.formatting.panel";
var ConditionalFormattingPanelController = class extends Disposable {
  constructor(_univerInstanceService, _injector, _componentManager, _sidebarService, _localeService) {
    super();
    this._univerInstanceService = _univerInstanceService;
    this._injector = _injector;
    this._componentManager = _componentManager;
    this._sidebarService = _sidebarService;
    this._localeService = _localeService;
    __publicField(this, "_sidebarDisposable", null);
    this._initPanel();
    this.disposeWithMe(
      this._univerInstanceService.getCurrentTypeOfUnit$(O.UNIVER_SHEET).subscribe((sheet) => {
        var _a;
        if (!sheet) (_a = this._sidebarDisposable) == null ? void 0 : _a.dispose();
      })
    );
    this.disposeWithMe(this._sidebarService.sidebarOptions$.subscribe((info) => {
      if (info.id === CF_PANEL_KEY) {
        if (!info.visible) {
          setTimeout(() => {
            this._sidebarService.sidebarOptions$.next({ visible: false });
          });
        }
      }
    }));
  }
  openPanel(rule) {
    const props = {
      id: CF_PANEL_KEY,
      header: { title: this._localeService.t("sheet.cf.title") },
      children: {
        label: CF_PANEL_KEY,
        rule,
        key: generateRandomId(4)
      },
      onClose: () => this._sidebarDisposable = null
    };
    this._sidebarDisposable = this._sidebarService.open(props);
  }
  _initPanel() {
    this._componentManager.register(CF_PANEL_KEY, ConditionFormattingPanel);
  }
};
ConditionalFormattingPanelController = __decorateClass([
  __decorateParam(0, IUniverInstanceService),
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, Inject(ComponentManager)),
  __decorateParam(3, Inject(ISidebarService)),
  __decorateParam(4, Inject(LocaleService))
], ConditionalFormattingPanelController);

// ../packages/sheets-conditional-formatting-ui/src/commands/operations/open-conditional-formatting-panel.ts
var OpenConditionalFormattingOperator = {
  id: "sheet.operation.open.conditional.formatting.panel",
  type: 1 /* OPERATION */,
  handler: (accessor, params) => {
    var _a;
    const conditionalFormattingMenuController = accessor.get(ConditionalFormattingPanelController);
    const selectionManagerService = accessor.get(SheetsSelectionsService);
    const commandService = accessor.get(ICommandService);
    const ranges = ((_a = selectionManagerService.getCurrentSelections()) == null ? void 0 : _a.map((s) => s.range)) || [];
    const type = params.value;
    switch (type) {
      case 3 /* highlightCell */: {
        conditionalFormattingMenuController.openPanel({ ...createDefaultRule(), ranges });
        break;
      }
      case 4 /* rank */: {
        const rule = {
          ...createDefaultRule,
          ranges,
          rule: {
            type: "highlightCell" /* highlightCell */,
            subType: "rank" /* rank */
          }
        };
        conditionalFormattingMenuController.openPanel(rule);
        break;
      }
      case 5 /* formula */: {
        const rule = {
          ...createDefaultRule,
          ranges,
          rule: {
            type: "highlightCell" /* highlightCell */,
            subType: "formula" /* formula */,
            value: "="
          }
        };
        conditionalFormattingMenuController.openPanel(rule);
        break;
      }
      case 6 /* colorScale */: {
        const rule = {
          ...createDefaultRule,
          ranges,
          rule: {
            type: "colorScale" /* colorScale */,
            config: []
          }
        };
        conditionalFormattingMenuController.openPanel(rule);
        break;
      }
      case 7 /* dataBar */: {
        const rule = {
          ...createDefaultRule,
          ranges,
          rule: {
            type: "dataBar" /* dataBar */,
            isShowValue: true
          }
        };
        conditionalFormattingMenuController.openPanel(rule);
        break;
      }
      case 8 /* icon */: {
        const rule = {
          ...createDefaultRule,
          ranges,
          rule: {
            type: "iconSet" /* iconSet */,
            config: [],
            isShowValue: true
          }
        };
        conditionalFormattingMenuController.openPanel(rule);
        break;
      }
      case 2 /* viewRule */: {
        conditionalFormattingMenuController.openPanel();
        break;
      }
      case 1 /* createRule */: {
        conditionalFormattingMenuController.openPanel({ ...createDefaultRule(), ranges });
        break;
      }
      case 9 /* clearRangeRules */: {
        commandService.executeCommand(ClearRangeCfCommand.id, { ranges });
        break;
      }
      case 10 /* clearWorkSheetRules */: {
        commandService.executeCommand(ClearWorksheetCfCommand.id);
        break;
      }
    }
    return true;
  }
};

// ../packages/sheets-conditional-formatting-ui/src/controllers/cf.copy-paste.controller.ts
var ConditionalFormattingCopyPasteController = class extends Disposable {
  constructor(_sheetClipboardService, _conditionalFormattingRuleModel, _injector, _conditionalFormattingViewModel, _univerInstanceService) {
    super();
    this._sheetClipboardService = _sheetClipboardService;
    this._conditionalFormattingRuleModel = _conditionalFormattingRuleModel;
    this._injector = _injector;
    this._conditionalFormattingViewModel = _conditionalFormattingViewModel;
    this._univerInstanceService = _univerInstanceService;
    __publicField(this, "_copyInfo");
    this._initClipboardHook();
  }
  _initClipboardHook() {
    this.disposeWithMe(
      this._sheetClipboardService.addClipboardHook({
        id: SHEET_CONDITIONAL_FORMATTING_PLUGIN,
        onBeforeCopy: (unitId, subUnitId, range) => this._collectConditionalRule(unitId, subUnitId, range),
        onPasteCells: (pasteFrom, pasteTo, data, payload) => {
          const { copyType = "COPY" /* COPY */, pasteType } = payload;
          const { range: copyRange } = pasteFrom || {};
          const { range: pastedRange } = pasteTo;
          return this._generateConditionalFormattingMutations(pastedRange, { copyType, pasteType, copyRange });
        }
      })
    );
  }
  _collectConditionalRule(unitId, subUnitId, range) {
    const matrix = new ObjectMatrix();
    const cfMap = {};
    this._copyInfo = {
      matrix,
      info: {
        unitId,
        subUnitId,
        cfMap
      }
    };
    const discreteRange = this._injector.invoke((accessor) => {
      return rangeToDiscreteRange(range, accessor, unitId, subUnitId);
    });
    if (!discreteRange) {
      return;
    }
    const { rows, cols } = discreteRange;
    const cfIdSet = /* @__PURE__ */ new Set();
    rows.forEach((row, rowIndex) => {
      cols.forEach((col, colIndex) => {
        const cellCfList = this._conditionalFormattingViewModel.getCellCfs(unitId, subUnitId, row, col);
        if (!cellCfList) {
          return;
        }
        cellCfList.forEach((item) => cfIdSet.add(item.cfId));
        matrix.setValue(rowIndex, colIndex, cellCfList.map((item) => item.cfId));
      });
    });
    cfIdSet.forEach((cfId) => {
      const rule = this._conditionalFormattingRuleModel.getRule(unitId, subUnitId, cfId);
      if (rule) {
        cfMap[cfId] = rule.rule;
      }
    });
  }
  // eslint-disable-next-line max-lines-per-function
  _generateConditionalFormattingMutations(pastedRange, copyInfo) {
    const workbook = this._univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET);
    const sheet = workbook.getActiveSheet();
    const unitId = workbook.getUnitId();
    if (!sheet) return { redos: [], undos: [] };
    const subUnitId = sheet.getSheetId();
    if (copyInfo.copyType === "CUT" /* CUT */) {
      this._copyInfo = null;
      return { redos: [], undos: [] };
    }
    if (!this._copyInfo || !copyInfo.copyRange) {
      return { redos: [], undos: [] };
    }
    const specialPastes = [
      PREDEFINED_HOOK_NAME.SPECIAL_PASTE_FORMAT,
      PREDEFINED_HOOK_NAME.DEFAULT_PASTE,
      PREDEFINED_HOOK_NAME.SPECIAL_PASTE_BESIDES_BORDER
    ];
    if (!specialPastes.includes(
      copyInfo.pasteType
    )) {
      return { redos: [], undos: [] };
    }
    const { ranges: [vCopyRange, vPastedRange], mapFunc } = virtualizeDiscreteRanges([copyInfo.copyRange, pastedRange]);
    const repeatRange = getRepeatRange(vCopyRange, vPastedRange, true);
    const effectedConditionalFormattingRuleMatrix = {};
    Range.foreach(vPastedRange, (row, col) => {
      const { row: realRow, col: realCol } = mapFunc(row, col);
      const cellCfList = this._conditionalFormattingViewModel.getCellCfs(unitId, subUnitId, realRow, realCol);
      if (cellCfList) {
        cellCfList.forEach((item) => {
          if (!effectedConditionalFormattingRuleMatrix[item.cfId]) {
            const ruleMatrix = new ObjectMatrix();
            effectedConditionalFormattingRuleMatrix[item.cfId] = ruleMatrix;
            const rule = this._conditionalFormattingRuleModel.getRule(unitId, subUnitId, item.cfId);
            rule == null ? void 0 : rule.ranges.forEach((range) => {
              Range.foreach(range, (row2, col2) => {
                ruleMatrix.setValue(row2, col2, 1);
              });
            });
          }
          effectedConditionalFormattingRuleMatrix[item.cfId].realDeleteValue(realRow, realCol);
        });
      }
    });
    const { matrix, info } = this._copyInfo;
    const waitAddRule = [];
    let nextCfId = this._conditionalFormattingRuleModel.createCfId(unitId, subUnitId);
    const cacheCfIdMap = {};
    const getCurrentSheetCfRule = (copyRangeCfId) => {
      if (cacheCfIdMap[copyRangeCfId]) {
        return cacheCfIdMap[copyRangeCfId];
      }
      const oldRule = info == null ? void 0 : info.cfMap[copyRangeCfId];
      const targetRule = [...this._conditionalFormattingRuleModel.getSubunitRules(unitId, subUnitId) || [], ...waitAddRule].find((rule) => {
        return Tools.diffValue(rule.rule, oldRule);
      });
      if (targetRule) {
        cacheCfIdMap[copyRangeCfId] = targetRule;
        return targetRule;
      } else {
        const rule = {
          rule: oldRule,
          cfId: nextCfId,
          ranges: [],
          stopIfTrue: false
        };
        cacheCfIdMap[copyRangeCfId] = rule;
        waitAddRule.push(rule);
        nextCfId = `${Number(nextCfId) + 1}`;
        return rule;
      }
    };
    repeatRange.forEach((item) => {
      matrix && matrix.forValue((row, col, copyRangeCfIdList) => {
        const range = Rectangle.getPositionRange(
          {
            startRow: row,
            endRow: row,
            startColumn: col,
            endColumn: col
          },
          item.startRange
        );
        const { row: _row, col: _col } = mapFunc(range.startRow, range.startColumn);
        copyRangeCfIdList.forEach((cfId) => {
          if (!effectedConditionalFormattingRuleMatrix[cfId]) {
            const rule = getCurrentSheetCfRule(cfId);
            const ruleMatrix = new ObjectMatrix();
            effectedConditionalFormattingRuleMatrix[cfId] = ruleMatrix;
            rule.ranges.forEach((range2) => {
              Range.foreach(range2, (row2, col2) => {
                ruleMatrix.setValue(row2, col2, 1);
              });
            });
          }
          effectedConditionalFormattingRuleMatrix[cfId].setValue(_row, _col, 1);
        });
      });
    });
    const redos = [];
    const undos = [];
    for (const cfId in effectedConditionalFormattingRuleMatrix) {
      const matrix2 = effectedConditionalFormattingRuleMatrix[cfId];
      const ranges = findAllRectangle(createTopMatrixFromMatrix(matrix2));
      if (!ranges.length) {
        const deleteParams = {
          unitId,
          subUnitId,
          cfId
        };
        redos.push({ id: DeleteConditionalRuleMutation.id, params: deleteParams });
        undos.push(...DeleteConditionalRuleMutationUndoFactory(this._injector, deleteParams));
      }
      if (waitAddRule.some((rule) => rule.cfId === cfId)) {
        const rule = getCurrentSheetCfRule(cfId);
        const addParams = {
          unitId,
          subUnitId,
          rule: { ...rule, ranges }
        };
        redos.push({ id: AddConditionalRuleMutation.id, params: addParams });
        undos.push(AddConditionalRuleMutationUndoFactory(this._injector, addParams));
      } else {
        const rule = this._conditionalFormattingRuleModel.getRule(unitId, subUnitId, cfId);
        if (!rule) {
          continue;
        }
        const setParams = {
          unitId,
          subUnitId,
          rule: { ...rule, ranges }
        };
        redos.push({ id: SetConditionalRuleMutation.id, params: setParams });
        undos.push(...setConditionalRuleMutationUndoFactory(this._injector, setParams));
      }
    }
    return {
      redos,
      undos
    };
  }
};
ConditionalFormattingCopyPasteController = __decorateClass([
  __decorateParam(0, Inject(ISheetClipboardService)),
  __decorateParam(1, Inject(ConditionalFormattingRuleModel)),
  __decorateParam(2, Inject(Injector)),
  __decorateParam(3, Inject(ConditionalFormattingViewModel)),
  __decorateParam(4, Inject(IUniverInstanceService))
], ConditionalFormattingCopyPasteController);

// ../packages/sheets-conditional-formatting-ui/src/controllers/cf.permission.controller.ts
var ConditionalFormattingPermissionController = class extends Disposable {
  constructor(_localeService, _commandService, _sheetPermissionCheckController) {
    super();
    this._localeService = _localeService;
    this._commandService = _commandService;
    this._sheetPermissionCheckController = _sheetPermissionCheckController;
    this._commandExecutedListener();
  }
  _commandExecutedListener() {
    this.disposeWithMe(
      this._commandService.beforeCommandExecuted((command) => {
        if (command.id === AddCfCommand.id) {
          const permission = this._sheetPermissionCheckController.permissionCheckWithRanges({
            workbookTypes: [WorkbookEditablePermission],
            rangeTypes: [RangeProtectionPermissionEditPoint],
            worksheetTypes: [WorksheetEditPermission, WorksheetSetCellStylePermission]
          }, command.params.rule.ranges);
          if (!permission) {
            this._sheetPermissionCheckController.blockExecuteWithoutPermission(this._localeService.t("permission.dialog.setStyleErr"));
          }
        }
      })
    );
  }
};
ConditionalFormattingPermissionController = __decorateClass([
  __decorateParam(0, Inject(LocaleService)),
  __decorateParam(1, ICommandService),
  __decorateParam(2, Inject(SheetPermissionCheckController))
], ConditionalFormattingPermissionController);

// ../packages/sheets-conditional-formatting-ui/src/controllers/cf.ref-range.controller.ts
var SheetsCfRefRangeController = class extends Disposable {
  constructor(_conditionalFormattingRuleModel, _univerInstanceService, _injector, _refRangeService) {
    super();
    this._conditionalFormattingRuleModel = _conditionalFormattingRuleModel;
    this._univerInstanceService = _univerInstanceService;
    this._injector = _injector;
    this._refRangeService = _refRangeService;
    this._initRefRange();
  }
  _initRefRange() {
    const disposableMap = /* @__PURE__ */ new Map();
    const getCfIdWithUnitId = (unitID, subUnitId, cfId) => `${unitID}_${subUnitId}_${cfId}`;
    const register = (unitId, subUnitId, rule) => {
      const handleRangeChange = (commandInfo) => {
        const oldRanges = [...rule.ranges];
        const resultRanges = oldRanges.map((range) => {
          return handleDefaultRangeChangeWithEffectRefCommands(range, commandInfo);
        }).filter((range) => !!range);
        const isEqual = isRangesEqual(resultRanges, oldRanges);
        if (isEqual) {
          return { redos: [], undos: [] };
        }
        if (resultRanges.length) {
          const redoParams = { unitId, subUnitId, rule: { ...rule, ranges: resultRanges } };
          const redos = [{ id: SetConditionalRuleMutation.id, params: redoParams }];
          const undos = setConditionalRuleMutationUndoFactory(this._injector, redoParams);
          return { redos, undos };
        } else {
          const redoParams = { unitId, subUnitId, cfId: rule.cfId };
          const redos = [{ id: DeleteConditionalRuleMutation.id, params: redoParams }];
          const undos = DeleteConditionalRuleMutationUndoFactory(this._injector, redoParams);
          return { redos, undos };
        }
      };
      const disposeList = [];
      rule.ranges.forEach((range) => {
        const disposable = this._refRangeService.registerRefRange(range, handleRangeChange);
        disposeList.push(() => disposable.dispose());
      });
      disposableMap.set(getCfIdWithUnitId(unitId, subUnitId, rule.cfId), () => disposeList.forEach((dispose) => dispose()));
    };
    this.disposeWithMe(this._conditionalFormattingRuleModel.$ruleChange.subscribe((option) => {
      const { unitId, subUnitId, rule } = option;
      const workbook = this._univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET);
      const worksheet = workbook.getActiveSheet();
      if (option.unitId !== workbook.getUnitId() || option.subUnitId !== (worksheet == null ? void 0 : worksheet.getSheetId())) {
        return;
      }
      switch (option.type) {
        case "add": {
          register(option.unitId, option.subUnitId, option.rule);
          break;
        }
        case "delete": {
          const dispose = disposableMap.get(getCfIdWithUnitId(unitId, subUnitId, rule.cfId));
          dispose && dispose();
          break;
        }
        case "set": {
          const dispose = disposableMap.get(getCfIdWithUnitId(unitId, subUnitId, rule.cfId));
          dispose && dispose();
          register(option.unitId, option.subUnitId, option.rule);
        }
      }
    }));
    this.disposeWithMe(toDisposable(() => {
      disposableMap.forEach((item) => {
        item();
      });
      disposableMap.clear();
    }));
  }
};
SheetsCfRefRangeController = __decorateClass([
  __decorateParam(0, Inject(ConditionalFormattingRuleModel)),
  __decorateParam(1, Inject(IUniverInstanceService)),
  __decorateParam(2, Inject(Injector)),
  __decorateParam(3, Inject(RefRangeService))
], SheetsCfRefRangeController);

// ../packages/sheets-conditional-formatting-ui/src/controllers/cf.render.controller.ts
var SheetsCfRenderController = class extends Disposable {
  constructor(_sheetInterceptorService, _conditionalFormattingService, _univerInstanceService, _renderManagerService, _conditionalFormattingViewModel, _conditionalFormattingRuleModel) {
    super();
    this._sheetInterceptorService = _sheetInterceptorService;
    this._conditionalFormattingService = _conditionalFormattingService;
    this._univerInstanceService = _univerInstanceService;
    this._renderManagerService = _renderManagerService;
    this._conditionalFormattingViewModel = _conditionalFormattingViewModel;
    this._conditionalFormattingRuleModel = _conditionalFormattingRuleModel;
    /**
     * When a set operation is triggered multiple times over a short period of time, it may result in some callbacks not being disposed,and caused a render cache exception.
     * The solution here is to store all the asynchronous tasks and focus on processing after the last callback
     */
    __publicField(this, "_ruleChangeCacheMap", /* @__PURE__ */ new Map());
    this._initViewModelInterceptor();
    this._initSkeleton();
    this.disposeWithMe(() => {
      this._ruleChangeCacheMap.clear();
    });
  }
  _markDirtySkeleton() {
    var _a, _b, _c;
    const unitId = this._univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET).getUnitId();
    (_a = this._renderManagerService.getRenderById(unitId)) == null ? void 0 : _a.with(SheetSkeletonManagerService).reCalculate();
    (_c = (_b = this._renderManagerService.getRenderById(unitId)) == null ? void 0 : _b.mainComponent) == null ? void 0 : _c.makeDirty();
  }
  _initSkeleton() {
    this.disposeWithMe(merge(this._conditionalFormattingRuleModel.$ruleChange, this._conditionalFormattingViewModel.markDirty$).pipe(
      bufferTime(16),
      filter((v) => !!v.length),
      filter((v) => {
        const workbook = this._univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET);
        if (!workbook) return false;
        const worksheet = workbook.getActiveSheet();
        if (!worksheet) return false;
        return v.filter((item) => item.unitId === workbook.getUnitId() && item.subUnitId === worksheet.getSheetId()).length > 0;
      })
    ).subscribe(() => this._markDirtySkeleton()));
  }
  _initViewModelInterceptor() {
    this.disposeWithMe(this._sheetInterceptorService.intercept(INTERCEPTOR_POINT.CELL_CONTENT, {
      effect: 1 /* Style */,
      handler: (cell, context, next) => {
        const result = this._conditionalFormattingService.composeStyle(context.unitId, context.subUnitId, context.row, context.col);
        if (!result) {
          return next(cell);
        }
        const styleMap = context.workbook.getStyles();
        const defaultStyle = (typeof (cell == null ? void 0 : cell.s) === "string" ? styleMap.get(cell == null ? void 0 : cell.s) : cell == null ? void 0 : cell.s) || {};
        const s = { ...defaultStyle };
        const cloneCell = { ...cell, s };
        if (result.style) {
          Object.assign(s, result.style);
        }
        if (!cloneCell.fontRenderExtension) {
          cloneCell.fontRenderExtension = {};
          if (result.isShowValue !== void 0) {
            cloneCell.fontRenderExtension.isSkip = !result.isShowValue;
          }
        }
        if (result.dataBar) {
          cloneCell.dataBar = result.dataBar;
        }
        if (result.iconSet) {
          cloneCell.iconSet = result.iconSet;
          cloneCell.fontRenderExtension.leftOffset = DEFAULT_PADDING + DEFAULT_WIDTH;
        }
        return next(cloneCell);
      },
      priority: 10
    }));
  }
};
SheetsCfRenderController = __decorateClass([
  __decorateParam(0, Inject(SheetInterceptorService)),
  __decorateParam(1, Inject(ConditionalFormattingService)),
  __decorateParam(2, Inject(IUniverInstanceService)),
  __decorateParam(3, Inject(IRenderManagerService)),
  __decorateParam(4, Inject(ConditionalFormattingViewModel)),
  __decorateParam(5, Inject(ConditionalFormattingRuleModel))
], SheetsCfRenderController);

// ../packages/sheets-conditional-formatting-ui/src/controllers/config.schema.ts
var SHEETS_CONDITIONAL_FORMATTING_UI_PLUGIN_CONFIG_KEY = "sheets-conditional-formatting-ui.config";
var configSymbol = Symbol(SHEETS_CONDITIONAL_FORMATTING_UI_PLUGIN_CONFIG_KEY);
var defaultPluginConfig = {};

// ../packages/sheets-conditional-formatting-ui/src/mobile-plugin.ts
var UniverSheetsConditionalFormattingMobileUIPlugin = class extends Plugin {
  constructor(_config = defaultPluginConfig, _injector, _commandService, _configService) {
    super();
    this._config = _config;
    this._injector = _injector;
    this._commandService = _commandService;
    this._configService = _configService;
    const { menu, ...rest } = merge_default(
      {},
      defaultPluginConfig,
      this._config
    );
    if (menu) {
      this._configService.setConfig("menu", menu, { merge: true });
    }
    this._configService.setConfig(SHEETS_CONDITIONAL_FORMATTING_UI_PLUGIN_CONFIG_KEY, rest);
    this._initCommand();
    this._injector.add([SheetsCfRenderController]);
    this._injector.add([SheetsCfRefRangeController]);
    this._injector.add([ConditionalFormattingCopyPasteController]);
    this._injector.add([ConditionalFormattingPermissionController]);
    this._injector.add([ConditionalFormattingI18nController]);
  }
  _initCommand() {
    [
      AddAverageCfCommand,
      AddColorScaleConditionalRuleCommand,
      AddDataBarConditionalRuleCommand,
      AddDuplicateValuesCfCommand,
      AddNumberCfCommand,
      AddRankCfCommand,
      AddTextCfCommand,
      AddTimePeriodCfCommand,
      AddUniqueValuesCfCommand,
      OpenConditionalFormattingOperator
    ].forEach((m) => {
      this._commandService.registerCommand(m);
    });
  }
};
__publicField(UniverSheetsConditionalFormattingMobileUIPlugin, "pluginName", `${SHEET_CONDITIONAL_FORMATTING_PLUGIN}_MOBILE_UI_PLUGIN`);
__publicField(UniverSheetsConditionalFormattingMobileUIPlugin, "type", O.UNIVER_SHEET);
UniverSheetsConditionalFormattingMobileUIPlugin = __decorateClass([
  DependentOn(UniverSheetsConditionalFormattingPlugin),
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, Inject(ICommandService)),
  __decorateParam(3, IConfigService)
], UniverSheetsConditionalFormattingMobileUIPlugin);

// ../packages/sheets-conditional-formatting-ui/src/controllers/cf.auto-fill.controller.ts
var ConditionalFormattingAutoFillController = class extends Disposable {
  constructor(_injector, _univerInstanceService, _autoFillService, _conditionalFormattingRuleModel, _conditionalFormattingViewModel) {
    super();
    this._injector = _injector;
    this._univerInstanceService = _univerInstanceService;
    this._autoFillService = _autoFillService;
    this._conditionalFormattingRuleModel = _conditionalFormattingRuleModel;
    this._conditionalFormattingViewModel = _conditionalFormattingViewModel;
    this._initAutoFill();
  }
  // eslint-disable-next-line max-lines-per-function
  _initAutoFill() {
    const noopReturnFunc = () => ({ redos: [], undos: [] });
    const loopFunc = (sourceStartCell, targetStartCell, relativeRange, matrixMap, mapFunc) => {
      var _a;
      const unitId = this._univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET).getUnitId();
      const subUnitId = (_a = this._univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET).getActiveSheet()) == null ? void 0 : _a.getSheetId();
      if (!unitId || !subUnitId) {
        return;
      }
      const sourceRange = {
        startRow: sourceStartCell.row,
        startColumn: sourceStartCell.col,
        endColumn: sourceStartCell.col,
        endRow: sourceStartCell.row
      };
      const targetRange = {
        startRow: targetStartCell.row,
        startColumn: targetStartCell.col,
        endColumn: targetStartCell.col,
        endRow: targetStartCell.row
      };
      Range.foreach(relativeRange, (row, col) => {
        const sourcePositionRange = Rectangle.getPositionRange(
          {
            startRow: row,
            startColumn: col,
            endColumn: col,
            endRow: row
          },
          sourceRange
        );
        const targetPositionRange = Rectangle.getPositionRange(
          {
            startRow: row,
            startColumn: col,
            endColumn: col,
            endRow: row
          },
          targetRange
        );
        const { row: sourceRow, col: sourceCol } = mapFunc(sourcePositionRange.startRow, sourcePositionRange.startColumn);
        const sourceCellCf = this._conditionalFormattingViewModel.getCellCfs(
          unitId,
          subUnitId,
          sourceRow,
          sourceCol
        );
        const { row: targetRow, col: targetCol } = mapFunc(targetPositionRange.startRow, targetPositionRange.startColumn);
        const targetCellCf = this._conditionalFormattingViewModel.getCellCfs(
          unitId,
          subUnitId,
          targetRow,
          targetCol
        );
        if (targetCellCf) {
          targetCellCf.forEach((cf) => {
            let matrix = matrixMap.get(cf.cfId);
            if (!matrixMap.get(cf.cfId)) {
              const rule = this._conditionalFormattingRuleModel.getRule(unitId, subUnitId, cf.cfId);
              if (!rule) {
                return;
              }
              matrix = new ObjectMatrix();
              rule.ranges.forEach((range) => {
                Range.foreach(range, (row2, col2) => {
                  matrix.setValue(row2, col2, 1);
                });
              });
              matrixMap.set(cf.cfId, matrix);
            }
            matrix.realDeleteValue(targetRow, targetCol);
          });
        }
        if (sourceCellCf) {
          sourceCellCf.forEach((cf) => {
            let matrix = matrixMap.get(cf.cfId);
            if (!matrixMap.get(cf.cfId)) {
              const rule = this._conditionalFormattingRuleModel.getRule(unitId, subUnitId, cf.cfId);
              if (!rule) {
                return;
              }
              matrix = new ObjectMatrix();
              rule.ranges.forEach((range) => {
                Range.foreach(range, (row2, col2) => {
                  matrix.setValue(row2, col2, 1);
                });
              });
              matrixMap.set(cf.cfId, matrix);
            }
            matrix.setValue(targetRow, targetCol, 1);
          });
        }
      });
    };
    const generalApplyFunc = (sourceRange, targetRange) => {
      var _a, _b, _c;
      const unitId = (_a = this._univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET)) == null ? void 0 : _a.getUnitId();
      const subUnitId = (_c = (_b = this._univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET)) == null ? void 0 : _b.getActiveSheet()) == null ? void 0 : _c.getSheetId();
      const matrixMap = /* @__PURE__ */ new Map();
      const redos = [];
      const undos = [];
      if (!unitId || !subUnitId) {
        return noopReturnFunc();
      }
      const virtualRange = virtualizeDiscreteRanges([sourceRange, targetRange]);
      const [vSourceRange, vTargetRange] = virtualRange.ranges;
      const { mapFunc } = virtualRange;
      const sourceStartCell = {
        row: vSourceRange.startRow,
        col: vSourceRange.startColumn
      };
      const repeats = getAutoFillRepeatRange(vSourceRange, vTargetRange);
      repeats.forEach((repeat) => {
        loopFunc(sourceStartCell, repeat.repeatStartCell, repeat.relativeRange, matrixMap, mapFunc);
      });
      matrixMap.forEach((item, cfId) => {
        const rule = this._conditionalFormattingRuleModel.getRule(unitId, subUnitId, cfId);
        if (!rule) {
          return;
        }
        const ranges = findAllRectangle(createTopMatrixFromMatrix(item));
        if (ranges.length) {
          const params = {
            unitId,
            subUnitId,
            rule: { ...rule, ranges }
          };
          redos.push({ id: SetConditionalRuleMutation.id, params });
          undos.push(...setConditionalRuleMutationUndoFactory(this._injector, params));
        } else {
          const params = {
            unitId,
            subUnitId,
            cfId: rule.cfId
          };
          redos.push({ id: DeleteConditionalRuleMutation.id, params });
          undos.push(...DeleteConditionalRuleMutationUndoFactory(this._injector, params));
        }
      });
      return {
        undos,
        redos
      };
    };
    const hook = {
      id: SHEET_CONDITIONAL_FORMATTING_PLUGIN,
      onFillData: (location, direction, applyType) => {
        if (applyType === "COPY" /* COPY */ || applyType === "ONLY_FORMAT" /* ONLY_FORMAT */ || applyType === "SERIES" /* SERIES */) {
          const { source, target } = location;
          return generalApplyFunc(source, target);
        }
        return noopReturnFunc();
      }
    };
    this.disposeWithMe(this._autoFillService.addHook(hook));
  }
};
ConditionalFormattingAutoFillController = __decorateClass([
  __decorateParam(0, Inject(Injector)),
  __decorateParam(1, Inject(IUniverInstanceService)),
  __decorateParam(2, Inject(IAutoFillService)),
  __decorateParam(3, Inject(ConditionalFormattingRuleModel)),
  __decorateParam(4, Inject(ConditionalFormattingViewModel))
], ConditionalFormattingAutoFillController);

// ../packages/sheets-conditional-formatting-ui/src/controllers/cf.clear.controller.ts
var ConditionalFormattingClearController = class extends Disposable {
  constructor(_injector, _univerInstanceService, _sheetInterceptorService, _selectionManagerService, _conditionalFormattingRuleModel) {
    super();
    this._injector = _injector;
    this._univerInstanceService = _univerInstanceService;
    this._sheetInterceptorService = _sheetInterceptorService;
    this._selectionManagerService = _selectionManagerService;
    this._conditionalFormattingRuleModel = _conditionalFormattingRuleModel;
    this._init();
  }
  _init() {
    this.disposeWithMe(this._sheetInterceptorService.interceptCommand({
      getMutations: (commandInfo) => {
        var _a;
        const redos = [];
        const undos = [];
        const defaultV = { redos, undos };
        if ([ClearSelectionFormatCommand.id, ClearSelectionAllCommand.id].includes(commandInfo.id)) {
          const ranges = (_a = this._selectionManagerService.getCurrentSelections()) == null ? void 0 : _a.map((s) => s.range);
          if (!ranges) {
            return defaultV;
          }
          const workbook = this._univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET);
          const worksheet = workbook.getActiveSheet();
          if (!worksheet) {
            return defaultV;
          }
          const unitId = workbook.getUnitId();
          const subUnitId = worksheet.getSheetId();
          const allRules = this._conditionalFormattingRuleModel.getSubunitRules(unitId, subUnitId);
          if (!allRules || !allRules.length) {
            return defaultV;
          }
          const { redos: interceptRedos, undos: interceptUndos } = generateClearCfMutations(this._injector, allRules, ranges, unitId, subUnitId);
          redos.push(...interceptRedos);
          undos.push(...interceptUndos);
        }
        return defaultV;
      }
    }));
    this.disposeWithMe(this._sheetInterceptorService.interceptRanges({
      getMutations: ({ unitId, subUnitId, ranges }) => {
        const redos = [];
        const undos = [];
        const emptyInterceptorArr = { redos, undos };
        if (!ranges || !ranges.length) {
          return emptyInterceptorArr;
        }
        const allRules = this._conditionalFormattingRuleModel.getSubunitRules(unitId, subUnitId);
        if (!allRules || !allRules.length) {
          return emptyInterceptorArr;
        }
        const { redos: interceptRedos, undos: interceptUndos } = generateClearCfMutations(this._injector, allRules, ranges, unitId, subUnitId);
        redos.push(...interceptRedos);
        undos.push(...interceptUndos);
        return emptyInterceptorArr;
      }
    }));
  }
};
ConditionalFormattingClearController = __decorateClass([
  __decorateParam(0, Inject(Injector)),
  __decorateParam(1, Inject(IUniverInstanceService)),
  __decorateParam(2, Inject(SheetInterceptorService)),
  __decorateParam(3, Inject(SheetsSelectionsService)),
  __decorateParam(4, Inject(ConditionalFormattingRuleModel))
], ConditionalFormattingClearController);
function generateClearCfMutations(injector, allRules, ranges, unitId, subUnitId) {
  const redos = [];
  const undos = [];
  allRules.filter((rule) => {
    return ranges.some((range) => rule.ranges.some((ruleRange) => Rectangle.getIntersects(ruleRange, range)));
  }).forEach((rule) => {
    const mergeUtil = new RangeMergeUtil();
    const mergeRanges = mergeUtil.add(...rule.ranges).subtract(...ranges).merge();
    if (mergeRanges.length) {
      const redo = {
        id: SetConditionalRuleMutation.id,
        params: {
          unitId,
          subUnitId,
          rule: { ...rule, ranges: mergeRanges }
        }
      };
      const undo = setConditionalRuleMutationUndoFactory(injector, redo.params);
      redos.push(redo);
      undos.push(...undo);
    } else {
      const redo = {
        id: DeleteConditionalRuleMutation.id,
        params: {
          unitId,
          subUnitId,
          cfId: rule.cfId
        }
      };
      const undo = DeleteConditionalRuleMutationUndoFactory(injector, redo.params);
      redos.push(redo);
      undos.push(...undo);
    }
  });
  return { redos, undos };
}

// ../packages/sheets-conditional-formatting-ui/src/controllers/cf.editor.controller.ts
var ConditionalFormattingEditorController = class extends Disposable {
  constructor(_sheetInterceptorService, _conditionalFormattingService) {
    super();
    this._sheetInterceptorService = _sheetInterceptorService;
    this._conditionalFormattingService = _conditionalFormattingService;
    this._initInterceptorEditorEnd();
  }
  /**
   * Process the  values after  edit
   * @private
   * @memberof NumfmtService
   */
  _initInterceptorEditorEnd() {
    this.disposeWithMe(
      toDisposable(
        this._sheetInterceptorService.writeCellInterceptor.intercept(
          AFTER_CELL_EDIT,
          {
            handler: (value, context, next) => {
              var _a, _b, _c;
              if (!value) {
                next(value);
              }
              const result = this._conditionalFormattingService.composeStyle(context.unitId, context.subUnitId, context.row, context.col);
              const cfStyle = (_a = result == null ? void 0 : result.style) != null ? _a : {};
              const keys = Object.keys(cfStyle);
              if (value == null ? void 0 : value.p) {
                (_c = (_b = value.p.body) == null ? void 0 : _b.textRuns) == null ? void 0 : _c.forEach((item) => {
                  if (item.ts) {
                    keys.forEach((key) => {
                      var _a2;
                      (_a2 = item.ts) == null ? true : delete _a2[key];
                    });
                  }
                });
                return next(value);
              } else {
                const s = { ...(typeof (value == null ? void 0 : value.s) === "string" ? context.workbook.getStyles().get(value.s) : value == null ? void 0 : value.s) || {} };
                keys.forEach((key) => {
                  delete s[key];
                });
                const cellData = { ...value, s: { ...s } };
                return next(cellData);
              }
            }
          }
        )
      )
    );
  }
};
ConditionalFormattingEditorController = __decorateClass([
  __decorateParam(0, Inject(SheetInterceptorService)),
  __decorateParam(1, Inject(ConditionalFormattingService))
], ConditionalFormattingEditorController);

// ../packages/sheets-conditional-formatting-ui/src/menu/manage-rule.ts
var commandList = [
  SetWorksheetActiveOperation.id,
  AddConditionalRuleMutation.id,
  SetConditionalRuleMutation.id,
  DeleteConditionalRuleMutation.id,
  MoveConditionalRuleMutation.id
];
var commonSelections = [
  {
    label: {
      name: "sheet.cf.ruleType.highlightCell",
      selectable: false
    },
    value: 3 /* highlightCell */
  },
  {
    label: {
      name: "sheet.cf.panel.rankAndAverage",
      selectable: false
    },
    value: 4 /* rank */
  },
  {
    label: {
      name: "sheet.cf.ruleType.formula",
      selectable: false
    },
    value: 5 /* formula */
  },
  {
    label: {
      name: "sheet.cf.ruleType.colorScale",
      selectable: false
    },
    value: 6 /* colorScale */
  },
  {
    label: {
      name: "sheet.cf.ruleType.dataBar",
      selectable: false
    },
    value: 7 /* dataBar */
  },
  {
    label: {
      name: "sheet.cf.ruleType.iconSet",
      selectable: false
    },
    value: 8 /* icon */
  },
  {
    label: {
      name: "sheet.cf.menu.manageConditionalFormatting",
      selectable: false
    },
    value: 2 /* viewRule */
  },
  {
    label: {
      name: "sheet.cf.menu.createConditionalFormatting",
      selectable: false
    },
    value: 1 /* createRule */
  },
  {
    label: {
      name: "sheet.cf.menu.clearRangeRules",
      selectable: false
    },
    value: 9 /* clearRangeRules */,
    disabled: false
  },
  {
    label: {
      name: "sheet.cf.menu.clearWorkSheetRules",
      selectable: false
    },
    value: 10 /* clearWorkSheetRules */
  }
];
var FactoryManageConditionalFormattingRule = (accessor) => {
  const selectionManagerService = accessor.get(SheetsSelectionsService);
  const commandService = accessor.get(ICommandService);
  const univerInstanceService = accessor.get(IUniverInstanceService);
  const conditionalFormattingRuleModel = accessor.get(ConditionalFormattingRuleModel);
  const clearRangeEnable$ = new Observable((subscriber) => merge(
    selectionManagerService.selectionMoveEnd$,
    selectionManagerService.selectionSet$,
    new Observable((commandSubscribe) => {
      const disposable = commandService.onCommandExecuted((commandInfo) => {
        var _a;
        const { id, params } = commandInfo;
        const unitId = (_a = univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET)) == null ? void 0 : _a.getUnitId();
        if (commandList.includes(id) && params.unitId === unitId) {
          commandSubscribe.next(null);
        }
      });
      return () => disposable.dispose();
    })
  ).pipe(debounceTime(16)).subscribe(() => {
    var _a;
    const ranges = ((_a = selectionManagerService.getCurrentSelections()) == null ? void 0 : _a.map((selection) => selection.range)) || [];
    const workbook = univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET);
    if (!workbook) return;
    const worksheet = workbook.getActiveSheet();
    if (!worksheet) return;
    const allRule = conditionalFormattingRuleModel.getSubunitRules(workbook.getUnitId(), worksheet.getSheetId()) || [];
    const ruleList = allRule.filter((rule) => rule.ranges.some((ruleRange) => ranges.some((range) => Rectangle.intersects(range, ruleRange))));
    const hasPermission = ruleList.map((rule) => rule.ranges).every((ranges2) => {
      return checkRangesEditablePermission(accessor, workbook.getUnitId(), worksheet.getSheetId(), ranges2);
    });
    subscriber.next(hasPermission);
  }));
  const clearSheetEnable$ = new Observable(
    (subscriber) => new Observable((commandSubscribe) => {
      const disposable = commandService.onCommandExecuted((commandInfo) => {
        var _a;
        const { id, params } = commandInfo;
        const unitId = (_a = univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET)) == null ? void 0 : _a.getUnitId();
        if (commandList.includes(id) && params.unitId === unitId) {
          commandSubscribe.next(null);
        }
      });
      return () => disposable.dispose();
    }).pipe(debounceTime(16)).subscribe(() => {
      const workbook = univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET);
      if (!workbook) return;
      const worksheet = workbook.getActiveSheet();
      if (!worksheet) return;
      const allRule = conditionalFormattingRuleModel.getSubunitRules(workbook.getUnitId(), worksheet.getSheetId()) || [];
      if (!allRule.length) {
        subscriber.next(false);
        return false;
      }
      const hasPermission = allRule.map((rule) => rule.ranges).every((ranges) => {
        return checkRangesEditablePermission(accessor, workbook.getUnitId(), worksheet.getSheetId(), ranges);
      });
      subscriber.next(hasPermission);
    })
  );
  const selections$ = new Observable((subscriber) => {
    clearRangeEnable$.subscribe((v) => {
      const item = commonSelections.find((item2) => item2.value === 9 /* clearRangeRules */);
      if (item) {
        item.disabled = !v;
        subscriber.next(commonSelections);
      }
    });
    clearSheetEnable$.subscribe((v) => {
      const item = commonSelections.find((item2) => item2.value === 10 /* clearWorkSheetRules */);
      if (item) {
        item.disabled = !v;
        subscriber.next(commonSelections);
      }
    });
    subscriber.next(commonSelections);
  });
  return {
    id: OpenConditionalFormattingOperator.id,
    type: 1 /* SELECTOR */,
    icon: "Conditions",
    tooltip: "sheet.cf.title",
    selections: selections$,
    hidden$: getMenuHiddenObservable(accessor, O.UNIVER_SHEET),
    disabled$: getCurrentRangeDisable$(accessor, { workbookTypes: [WorkbookEditablePermission], worksheetTypes: [WorksheetSetCellStylePermission, WorksheetEditPermission], rangeTypes: [RangeProtectionPermissionEditPoint] })
  };
};

// ../packages/sheets-conditional-formatting-ui/src/controllers/menu.schema.ts
var menuSchema = {
  ["ribbon.start.insert" /* FORMULAS_INSERT */]: {
    [OpenConditionalFormattingOperator.id]: {
      order: 0,
      menuItemFactory: FactoryManageConditionalFormattingRule
    }
  }
};

// ../packages/sheets-conditional-formatting-ui/src/controllers/cf.menu.controller.ts
var ConditionalFormattingMenuController = class extends Disposable {
  constructor(_injector, _menuManagerService) {
    super();
    this._injector = _injector;
    this._menuManagerService = _menuManagerService;
    __publicField(this, "_sidebarDisposable", null);
    this._menuManagerService.mergeMenu(menuSchema);
  }
};
ConditionalFormattingMenuController = __decorateClass([
  __decorateParam(0, Inject(Injector)),
  __decorateParam(1, IMenuManagerService)
], ConditionalFormattingMenuController);

// ../packages/sheets-conditional-formatting-ui/src/controllers/cf.painter.controller.ts
var repeatByRange = (sourceRange, targetRange) => {
  const getRowLength = (range) => range.endRow - range.startRow + 1;
  const getColLength = (range) => range.endColumn - range.startColumn + 1;
  const rowMod = getRowLength(targetRange) % getRowLength(sourceRange);
  const colMod = getColLength(targetRange) % getColLength(sourceRange);
  const repeatRow = Math.floor(getRowLength(targetRange) / getRowLength(sourceRange));
  const repeatCol = Math.floor(getColLength(targetRange) / getColLength(sourceRange));
  const repeatList = [];
  const repeatRelativeRange = {
    startRow: 0,
    endRow: getRowLength(sourceRange) - 1,
    startColumn: 0,
    endColumn: getColLength(sourceRange) - 1
  };
  if (getRowLength(targetRange) === 1 && getColLength(targetRange) === 1) {
    const startRange = {
      startRow: targetRange.startRow,
      endRow: targetRange.startRow,
      startColumn: targetRange.startColumn,
      endColumn: targetRange.startColumn
    };
    repeatList.push({ repeatRelativeRange, startRange });
    return repeatList;
  }
  for (let countRow = 0; countRow < repeatRow + (rowMod ? 0.1 : 0); countRow++) {
    for (let countCol = 0; countCol < repeatCol + (colMod ? 0.1 : 0); countCol++) {
      const row = getRowLength(sourceRange) * countRow;
      const col = getColLength(sourceRange) * countCol;
      const startRange = {
        startRow: row + targetRange.startRow,
        endRow: row + targetRange.startRow,
        startColumn: col + targetRange.startColumn,
        endColumn: col + targetRange.startColumn
      };
      let _repeatRelativeRange = repeatRelativeRange;
      if (countRow === repeatRow && rowMod) {
        _repeatRelativeRange = { ..._repeatRelativeRange };
        _repeatRelativeRange.endRow = _repeatRelativeRange.endRow - (getRowLength(sourceRange) - rowMod);
      }
      if (countCol === repeatCol && colMod) {
        _repeatRelativeRange = { ..._repeatRelativeRange };
        _repeatRelativeRange.endColumn = _repeatRelativeRange.endColumn - (getColLength(sourceRange) - colMod);
      }
      repeatList.push({ repeatRelativeRange: _repeatRelativeRange, startRange });
    }
  }
  return repeatList;
};
var ConditionalFormattingPainterController = class extends Disposable {
  constructor(_injector, _univerInstanceService, _formatPainterService, _sheetsSelectionsService, _conditionalFormattingRuleModel, _conditionalFormattingViewModel) {
    super();
    this._injector = _injector;
    this._univerInstanceService = _univerInstanceService;
    this._formatPainterService = _formatPainterService;
    this._sheetsSelectionsService = _sheetsSelectionsService;
    this._conditionalFormattingRuleModel = _conditionalFormattingRuleModel;
    this._conditionalFormattingViewModel = _conditionalFormattingViewModel;
    __publicField(this, "_painterConfig", null);
    this._initFormattingPainter();
  }
  // eslint-disable-next-line max-lines-per-function
  _initFormattingPainter() {
    const noopReturnFunc = () => ({ redos: [], undos: [] });
    const loopFunc = (sourceStartCell, targetStartCell, relativeRange, matrixMap, config) => {
      const { unitId: sourceUnitId, subUnitId: sourceSubUnitId } = this._painterConfig;
      const { targetUnitId, targetSubUnitId } = config;
      const sourceRange = {
        startRow: sourceStartCell.row,
        startColumn: sourceStartCell.col,
        endColumn: sourceStartCell.col,
        endRow: sourceStartCell.row
      };
      const targetRange = {
        startRow: targetStartCell.row,
        startColumn: targetStartCell.col,
        endColumn: targetStartCell.col,
        endRow: targetStartCell.row
      };
      Range.foreach(relativeRange, (row, col) => {
        const sourcePositionRange = Rectangle.getPositionRange(
          {
            startRow: row,
            startColumn: col,
            endColumn: col,
            endRow: row
          },
          sourceRange
        );
        const targetPositionRange = Rectangle.getPositionRange(
          {
            startRow: row,
            startColumn: col,
            endColumn: col,
            endRow: row
          },
          targetRange
        );
        const sourceCellCf = this._conditionalFormattingViewModel.getCellCfs(
          sourceUnitId,
          sourceSubUnitId,
          sourcePositionRange.startRow,
          sourcePositionRange.startColumn
        );
        const targetCellCf = this._conditionalFormattingViewModel.getCellCfs(
          targetUnitId,
          targetSubUnitId,
          targetPositionRange.startRow,
          targetPositionRange.startColumn
        );
        if (targetCellCf) {
          targetCellCf.forEach((cf) => {
            let matrix = matrixMap.get(cf.cfId);
            if (!matrixMap.get(cf.cfId)) {
              const rule = this._conditionalFormattingRuleModel.getRule(targetUnitId, targetSubUnitId, cf.cfId);
              if (!rule) {
                return;
              }
              matrix = new ObjectMatrix();
              rule.ranges.forEach((range) => {
                Range.foreach(range, (row2, col2) => {
                  matrix.setValue(row2, col2, 1);
                });
              });
              matrixMap.set(cf.cfId, matrix);
            }
            matrix.realDeleteValue(targetPositionRange.startRow, targetPositionRange.startColumn);
          });
        }
        if (sourceCellCf) {
          sourceCellCf.forEach((cf) => {
            const matrix = matrixMap.get(cf.cfId);
            matrix && matrix.setValue(targetPositionRange.startRow, targetPositionRange.startColumn, 1);
          });
        }
      });
    };
    const generalApplyFunc = (targetUnitId, targetSubUnitId, targetRange) => {
      var _a;
      const { range: sourceRange, unitId: sourceUnitId, subUnitId: sourceSubUnitId } = this._painterConfig;
      const isSkipSheet = targetUnitId !== sourceUnitId || sourceSubUnitId !== targetSubUnitId;
      const matrixMap = /* @__PURE__ */ new Map();
      const redos = [];
      const undos = [];
      if (!targetUnitId || !targetSubUnitId || !sourceUnitId || !sourceSubUnitId) {
        return noopReturnFunc();
      }
      const ruleList = (_a = this._conditionalFormattingRuleModel.getSubunitRules(sourceUnitId, sourceSubUnitId)) != null ? _a : [];
      ruleList == null ? void 0 : ruleList.forEach((rule) => {
        const { ranges, cfId } = rule;
        if (ranges.some((range) => Rectangle.intersects(sourceRange, range))) {
          const matrix = new ObjectMatrix();
          if (!isSkipSheet) {
            ranges.forEach((range) => {
              Range.foreach(range, (row, col) => {
                matrix.setValue(row, col, 1);
              });
            });
          }
          matrixMap.set(cfId, matrix);
        }
      });
      const sourceStartCell = {
        row: sourceRange.startRow,
        col: sourceRange.startColumn
      };
      const repeats = repeatByRange(sourceRange, targetRange);
      repeats.forEach((repeat) => {
        loopFunc(sourceStartCell, { row: repeat.startRange.startRow, col: repeat.startRange.startColumn }, repeat.repeatRelativeRange, matrixMap, { targetUnitId, targetSubUnitId });
      });
      matrixMap.forEach((item, cfId) => {
        if (!isSkipSheet) {
          const rule = this._conditionalFormattingRuleModel.getRule(sourceUnitId, sourceSubUnitId, cfId);
          if (!rule) {
            return;
          }
          const ranges = findAllRectangle(createTopMatrixFromMatrix(item));
          if (ranges.length) {
            const params = {
              unitId: sourceUnitId,
              subUnitId: sourceSubUnitId,
              rule: { ...rule, ranges }
            };
            redos.push({ id: SetConditionalRuleMutation.id, params });
            undos.push(...setConditionalRuleMutationUndoFactory(this._injector, params));
          } else {
            const params = {
              unitId: sourceUnitId,
              subUnitId: sourceSubUnitId,
              cfId: rule.cfId
            };
            redos.push({ id: DeleteConditionalRuleMutation.id, params });
            undos.push(...DeleteConditionalRuleMutationUndoFactory(this._injector, params));
          }
        } else {
          const rule = this._conditionalFormattingRuleModel.getRule(targetUnitId, targetSubUnitId, cfId);
          const ranges = findAllRectangle(createTopMatrixFromMatrix(item));
          if (!rule) {
            if (ranges.length) {
              const sourceRule = this._conditionalFormattingRuleModel.getRule(sourceUnitId, sourceSubUnitId, cfId);
              if (sourceRule) {
                const params = {
                  unitId: targetUnitId,
                  subUnitId: targetSubUnitId,
                  rule: {
                    ...Tools.deepClone(sourceRule),
                    cfId: this._conditionalFormattingRuleModel.createCfId(targetUnitId, targetSubUnitId),
                    ranges
                  }
                };
                redos.push({ id: AddConditionalRuleMutation.id, params });
                undos.push(AddConditionalRuleMutationUndoFactory(this._injector, params));
              }
            }
          } else {
            if (ranges.length) {
              const params = {
                unitId: targetUnitId,
                subUnitId: targetSubUnitId,
                rule: { ...rule, ranges }
              };
              redos.push({ id: SetConditionalRuleMutation.id, params });
              undos.push(...setConditionalRuleMutationUndoFactory(this._injector, params));
            } else {
              const params = {
                unitId: targetUnitId,
                subUnitId: targetSubUnitId,
                cfId: rule.cfId
              };
              redos.push({ id: DeleteConditionalRuleMutation.id, params });
              undos.push(...DeleteConditionalRuleMutationUndoFactory(this._injector, params));
            }
          }
        }
      });
      return {
        undos,
        redos
      };
    };
    const hook = {
      id: SHEET_CONDITIONAL_FORMATTING_PLUGIN,
      onStatusChange: (status) => {
        var _a, _b, _c;
        switch (status) {
          case 2 /* INFINITE */:
          case 1 /* ONCE */: {
            const unitId = (_a = this._univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET)) == null ? void 0 : _a.getUnitId();
            const subUnitId = (_c = (_b = this._univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET)) == null ? void 0 : _b.getActiveSheet()) == null ? void 0 : _c.getSheetId();
            const selection = this._sheetsSelectionsService.getCurrentLastSelection();
            const range = selection == null ? void 0 : selection.range;
            if (unitId && subUnitId && range) {
              this._painterConfig = { unitId, subUnitId, range };
            }
            break;
          }
          case 0 /* OFF */: {
            this._painterConfig = null;
            break;
          }
        }
      },
      onApply: (unitId, subUnitId, targetRange) => {
        if (this._painterConfig) {
          return generalApplyFunc(unitId, subUnitId, targetRange);
        }
        return {
          redos: [],
          undos: []
        };
      }
    };
    this._formatPainterService.addHook(hook);
  }
};
ConditionalFormattingPainterController = __decorateClass([
  __decorateParam(0, Inject(Injector)),
  __decorateParam(1, Inject(IUniverInstanceService)),
  __decorateParam(2, Inject(IFormatPainterService)),
  __decorateParam(3, Inject(SheetsSelectionsService)),
  __decorateParam(4, Inject(ConditionalFormattingRuleModel)),
  __decorateParam(5, Inject(ConditionalFormattingViewModel))
], ConditionalFormattingPainterController);

// ../packages/sheets-conditional-formatting-ui/src/controllers/cf.viewport.controller.ts
var ConditionalFormattingViewportController = class extends Disposable {
  constructor(_conditionalFormattingViewModel, _univerInstanceService, _renderManagerService) {
    super();
    this._conditionalFormattingViewModel = _conditionalFormattingViewModel;
    this._univerInstanceService = _univerInstanceService;
    this._renderManagerService = _renderManagerService;
    this._init();
  }
  _init() {
    const unit = this._univerInstanceService.getCurrentUnitForType(O.UNIVER_SHEET);
    const bindUnit = (unit2) => {
      const unitId = unit2.getUnitId();
      const render = this._renderManagerService.getRenderById(unitId);
      if (!render) {
        return;
      }
      const sheetSkeletonManagerService = render.with(SheetSkeletonManagerService);
      this.disposeWithMe(sheetSkeletonManagerService.currentSkeleton$.subscribe((s) => {
        if (s) {
          const range = s.skeleton.rowColumnSegment;
          const col = range.endColumn - range.startColumn + 1;
          const row = range.endRow - range.startRow + 1;
          const length = row * col * 9;
          const result = Math.max(CONDITIONAL_FORMATTING_VIEWPORT_CACHE_LENGTH, length);
          this._conditionalFormattingViewModel.setCacheLength(result);
        }
      }));
    };
    if (unit) {
      bindUnit(unit);
    }
    this._univerInstanceService.getCurrentTypeOfUnit$(O.UNIVER_SHEET).subscribe((unit2) => {
      if (!unit2) {
        return;
      }
      bindUnit(unit2);
    });
  }
};
ConditionalFormattingViewportController = __decorateClass([
  __decorateParam(0, Inject(ConditionalFormattingViewModel)),
  __decorateParam(1, IUniverInstanceService),
  __decorateParam(2, IRenderManagerService)
], ConditionalFormattingViewportController);

// ../packages/sheets-conditional-formatting-ui/src/plugin.ts
var UniverSheetsConditionalFormattingUIPlugin = class extends Plugin {
  constructor(_config = defaultPluginConfig, _injector, _commandService, _configService) {
    super();
    this._config = _config;
    this._injector = _injector;
    this._commandService = _commandService;
    this._configService = _configService;
    const { menu, ...rest } = merge_default(
      {},
      defaultPluginConfig,
      this._config
    );
    if (menu) {
      this._configService.setConfig("menu", menu, { merge: true });
    }
    this._configService.setConfig(SHEETS_CONDITIONAL_FORMATTING_UI_PLUGIN_CONFIG_KEY, rest);
    this._initCommand();
  }
  onStarting() {
    registerDependencies(this._injector, [
      [SheetsCfRenderController],
      [SheetsCfRefRangeController],
      [ConditionalFormattingCopyPasteController],
      [ConditionalFormattingAutoFillController],
      [ConditionalFormattingPermissionController],
      [ConditionalFormattingPanelController],
      [ConditionalFormattingMenuController],
      [ConditionalFormattingI18nController],
      [ConditionalFormattingEditorController],
      [ConditionalFormattingClearController],
      [ConditionalFormattingPainterController],
      [ConditionalFormattingViewportController]
    ]);
    touchDependencies(this._injector, [
      [SheetsCfRenderController]
    ]);
  }
  onReady() {
    touchDependencies(this._injector, [
      [ConditionalFormattingMenuController],
      [ConditionalFormattingPanelController]
    ]);
  }
  onRendered() {
    touchDependencies(this._injector, [
      [ConditionalFormattingAutoFillController],
      [ConditionalFormattingClearController],
      [ConditionalFormattingCopyPasteController],
      [ConditionalFormattingEditorController],
      [ConditionalFormattingI18nController],
      [ConditionalFormattingPainterController],
      [ConditionalFormattingPermissionController],
      [SheetsCfRefRangeController],
      [ConditionalFormattingViewportController]
    ]);
  }
  _initCommand() {
    [
      AddAverageCfCommand,
      AddColorScaleConditionalRuleCommand,
      AddDataBarConditionalRuleCommand,
      AddDuplicateValuesCfCommand,
      AddNumberCfCommand,
      AddRankCfCommand,
      AddTextCfCommand,
      AddTimePeriodCfCommand,
      AddUniqueValuesCfCommand,
      OpenConditionalFormattingOperator
    ].forEach((m) => {
      this._commandService.registerCommand(m);
    });
  }
};
__publicField(UniverSheetsConditionalFormattingUIPlugin, "pluginName", `${SHEET_CONDITIONAL_FORMATTING_PLUGIN}_UI_PLUGIN`);
__publicField(UniverSheetsConditionalFormattingUIPlugin, "type", O.UNIVER_SHEET);
UniverSheetsConditionalFormattingUIPlugin = __decorateClass([
  DependentOn(UniverSheetsConditionalFormattingPlugin),
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, Inject(ICommandService)),
  __decorateParam(3, IConfigService)
], UniverSheetsConditionalFormattingUIPlugin);

export {
  UniverSheetsConditionalFormattingMobileUIPlugin,
  UniverSheetsConditionalFormattingUIPlugin
};
//# sourceMappingURL=chunk-KZFTO66A.js.map
