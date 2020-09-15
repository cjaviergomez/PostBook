(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-private-private-module"],{

/***/ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js ***!
  \*************************************************************************/
/*! exports provided: InfiniteScrollDirective, InfiniteScrollModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteScrollDirective", function() { return InfiniteScrollDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteScrollModule", function() { return InfiniteScrollModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} selector
 * @param {?} scrollWindow
 * @param {?} defaultElement
 * @param {?} fromRoot
 * @return {?}
 */
function resolveContainerElement(selector, scrollWindow, defaultElement, fromRoot) {
    /** @type {?} */
    const hasWindow = window && !!window.document && window.document.documentElement;
    /** @type {?} */
    let container = hasWindow && scrollWindow ? window : defaultElement;
    if (selector) {
        /** @type {?} */
        const containerIsString = selector && hasWindow && typeof selector === 'string';
        container = containerIsString
            ? findElement(selector, defaultElement.nativeElement, fromRoot)
            : selector;
        if (!container) {
            throw new Error('ngx-infinite-scroll {resolveContainerElement()}: selector for');
        }
    }
    return container;
}
/**
 * @param {?} selector
 * @param {?} customRoot
 * @param {?} fromRoot
 * @return {?}
 */
function findElement(selector, customRoot, fromRoot) {
    /** @type {?} */
    const rootEl = fromRoot ? window.document : customRoot;
    return rootEl.querySelector(selector);
}
/**
 * @param {?} prop
 * @return {?}
 */
function inputPropChanged(prop) {
    return prop && !prop.firstChange;
}
/**
 * @return {?}
 */
function hasWindowDefined() {
    return typeof window !== 'undefined';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const VerticalProps = {
    clientHeight: "clientHeight",
    offsetHeight: "offsetHeight",
    scrollHeight: "scrollHeight",
    pageYOffset: "pageYOffset",
    offsetTop: "offsetTop",
    scrollTop: "scrollTop",
    top: "top"
};
/** @type {?} */
const HorizontalProps = {
    clientHeight: "clientWidth",
    offsetHeight: "offsetWidth",
    scrollHeight: "scrollWidth",
    pageYOffset: "pageXOffset",
    offsetTop: "offsetLeft",
    scrollTop: "scrollLeft",
    top: "left"
};
class AxisResolver {
    /**
     * @param {?=} vertical
     */
    constructor(vertical = true) {
        this.vertical = vertical;
        this.propsMap = vertical ? VerticalProps : HorizontalProps;
    }
    /**
     * @return {?}
     */
    clientHeightKey() {
        return this.propsMap.clientHeight;
    }
    /**
     * @return {?}
     */
    offsetHeightKey() {
        return this.propsMap.offsetHeight;
    }
    /**
     * @return {?}
     */
    scrollHeightKey() {
        return this.propsMap.scrollHeight;
    }
    /**
     * @return {?}
     */
    pageYOffsetKey() {
        return this.propsMap.pageYOffset;
    }
    /**
     * @return {?}
     */
    offsetTopKey() {
        return this.propsMap.offsetTop;
    }
    /**
     * @return {?}
     */
    scrollTopKey() {
        return this.propsMap.scrollTop;
    }
    /**
     * @return {?}
     */
    topKey() {
        return this.propsMap.top;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @param {?} alwaysCallback
 * @param {?} shouldFireScrollEvent
 * @param {?} isTriggeredCurrentTotal
 * @return {?}
 */
function shouldTriggerEvents(alwaysCallback, shouldFireScrollEvent, isTriggeredCurrentTotal) {
    if (alwaysCallback && shouldFireScrollEvent) {
        return true;
    }
    if (!isTriggeredCurrentTotal && shouldFireScrollEvent) {
        return true;
    }
    return false;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} __0
 * @return {?}
 */
function createResolver({ windowElement, axis }) {
    return createResolverWithContainer({ axis, isWindow: isElementWindow(windowElement) }, windowElement);
}
/**
 * @param {?} resolver
 * @param {?} windowElement
 * @return {?}
 */
function createResolverWithContainer(resolver, windowElement) {
    /** @type {?} */
    const container = resolver.isWindow || (windowElement && !windowElement.nativeElement)
        ? windowElement
        : windowElement.nativeElement;
    return Object.assign(Object.assign({}, resolver), { container });
}
/**
 * @param {?} windowElement
 * @return {?}
 */
function isElementWindow(windowElement) {
    /** @type {?} */
    const isWindow = ['Window', 'global'].some((/**
     * @param {?} obj
     * @return {?}
     */
    (obj) => Object.prototype.toString.call(windowElement).includes(obj)));
    return isWindow;
}
/**
 * @param {?} isContainerWindow
 * @param {?} windowElement
 * @return {?}
 */
function getDocumentElement(isContainerWindow, windowElement) {
    return isContainerWindow ? windowElement.document.documentElement : null;
}
/**
 * @param {?} element
 * @param {?} resolver
 * @return {?}
 */
function calculatePoints(element, resolver) {
    /** @type {?} */
    const height = extractHeightForElement(resolver);
    return resolver.isWindow
        ? calculatePointsForWindow(height, element, resolver)
        : calculatePointsForElement(height, element, resolver);
}
/**
 * @param {?} height
 * @param {?} element
 * @param {?} resolver
 * @return {?}
 */
function calculatePointsForWindow(height, element, resolver) {
    const { axis, container, isWindow } = resolver;
    const { offsetHeightKey, clientHeightKey } = extractHeightPropKeys(axis);
    // scrolled until now / current y point
    /** @type {?} */
    const scrolled = height +
        getElementPageYOffset(getDocumentElement(isWindow, container), axis, isWindow);
    // total height / most bottom y point
    /** @type {?} */
    const nativeElementHeight = getElementHeight(element.nativeElement, isWindow, offsetHeightKey, clientHeightKey);
    /** @type {?} */
    const totalToScroll = getElementOffsetTop(element.nativeElement, axis, isWindow) +
        nativeElementHeight;
    return { height, scrolled, totalToScroll, isWindow };
}
/**
 * @param {?} height
 * @param {?} element
 * @param {?} resolver
 * @return {?}
 */
function calculatePointsForElement(height, element, resolver) {
    const { axis, container } = resolver;
    // perhaps use container.offsetTop instead of 'scrollTop'
    /** @type {?} */
    const scrolled = container[axis.scrollTopKey()];
    /** @type {?} */
    const totalToScroll = container[axis.scrollHeightKey()];
    return { height, scrolled, totalToScroll, isWindow: false };
}
/**
 * @param {?} axis
 * @return {?}
 */
function extractHeightPropKeys(axis) {
    return {
        offsetHeightKey: axis.offsetHeightKey(),
        clientHeightKey: axis.clientHeightKey()
    };
}
/**
 * @param {?} __0
 * @return {?}
 */
function extractHeightForElement({ container, isWindow, axis }) {
    const { offsetHeightKey, clientHeightKey } = extractHeightPropKeys(axis);
    return getElementHeight(container, isWindow, offsetHeightKey, clientHeightKey);
}
/**
 * @param {?} elem
 * @param {?} isWindow
 * @param {?} offsetHeightKey
 * @param {?} clientHeightKey
 * @return {?}
 */
function getElementHeight(elem, isWindow, offsetHeightKey, clientHeightKey) {
    if (isNaN(elem[offsetHeightKey])) {
        /** @type {?} */
        const docElem = getDocumentElement(isWindow, elem);
        return docElem ? docElem[clientHeightKey] : 0;
    }
    else {
        return elem[offsetHeightKey];
    }
}
/**
 * @param {?} elem
 * @param {?} axis
 * @param {?} isWindow
 * @return {?}
 */
function getElementOffsetTop(elem, axis, isWindow) {
    /** @type {?} */
    const topKey = axis.topKey();
    // elem = elem.nativeElement;
    if (!elem.getBoundingClientRect) {
        // || elem.css('none')) {
        return;
    }
    return (elem.getBoundingClientRect()[topKey] +
        getElementPageYOffset(elem, axis, isWindow));
}
/**
 * @param {?} elem
 * @param {?} axis
 * @param {?} isWindow
 * @return {?}
 */
function getElementPageYOffset(elem, axis, isWindow) {
    /** @type {?} */
    const pageYOffset = axis.pageYOffsetKey();
    /** @type {?} */
    const scrollTop = axis.scrollTopKey();
    /** @type {?} */
    const offsetTop = axis.offsetTopKey();
    if (isNaN(window.pageYOffset)) {
        return getDocumentElement(isWindow, elem)[scrollTop];
    }
    else if (elem.ownerDocument) {
        return elem.ownerDocument.defaultView[pageYOffset];
    }
    else {
        return elem[offsetTop];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} container
 * @param {?} distance
 * @param {?} scrollingDown
 * @return {?}
 */
function shouldFireScrollEvent(container, distance, scrollingDown) {
    /** @type {?} */
    let remaining;
    /** @type {?} */
    let containerBreakpoint;
    if (container.totalToScroll <= 0) {
        return false;
    }
    /** @type {?} */
    const scrolledUntilNow = container.isWindow ? container.scrolled : container.height + container.scrolled;
    if (scrollingDown) {
        remaining =
            (container.totalToScroll - scrolledUntilNow) / container.totalToScroll;
        containerBreakpoint = distance.down / 10;
    }
    else {
        /** @type {?} */
        const totalHiddenContentHeight = container.scrolled + (container.totalToScroll - scrolledUntilNow);
        remaining = container.scrolled / totalHiddenContentHeight;
        containerBreakpoint = distance.up / 10;
    }
    /** @type {?} */
    const shouldFireEvent = remaining <= containerBreakpoint;
    return shouldFireEvent;
}
/**
 * @param {?} lastScrollPosition
 * @param {?} container
 * @return {?}
 */
function isScrollingDownwards(lastScrollPosition, container) {
    return lastScrollPosition < container.scrolled;
}
/**
 * @param {?} lastScrollPosition
 * @param {?} container
 * @param {?} distance
 * @return {?}
 */
function getScrollStats(lastScrollPosition, container, distance) {
    /** @type {?} */
    const scrollDown = isScrollingDownwards(lastScrollPosition, container);
    return {
        fire: shouldFireScrollEvent(container, distance, scrollDown),
        scrollDown
    };
}
/**
 * @param {?} position
 * @param {?} scrollState
 * @return {?}
 */

/**
 * @param {?} totalToScroll
 * @param {?} scrollState
 * @return {?}
 */

/**
 * @param {?} scrollState
 * @return {?}
 */

/**
 * @param {?} scroll
 * @param {?} scrollState
 * @param {?} triggered
 * @param {?} isScrollingDown
 * @return {?}
 */

/**
 * @param {?} totalToScroll
 * @param {?} scrollState
 * @param {?} isScrollingDown
 * @return {?}
 */

/**
 * @param {?} scrollState
 * @param {?} scrolledUntilNow
 * @param {?} totalToScroll
 * @return {?}
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ScrollState {
    /**
     * @param {?} __0
     */
    constructor({ totalToScroll }) {
        this.lastScrollPosition = 0;
        this.lastTotalToScroll = 0;
        this.totalToScroll = 0;
        this.triggered = {
            down: 0,
            up: 0
        };
        this.totalToScroll = totalToScroll;
    }
    /**
     * @param {?} position
     * @return {?}
     */
    updateScrollPosition(position) {
        return (this.lastScrollPosition = position);
    }
    /**
     * @param {?} totalToScroll
     * @return {?}
     */
    updateTotalToScroll(totalToScroll) {
        if (this.lastTotalToScroll !== totalToScroll) {
            this.lastTotalToScroll = this.totalToScroll;
            this.totalToScroll = totalToScroll;
        }
    }
    /**
     * @param {?} scrolledUntilNow
     * @param {?} totalToScroll
     * @return {?}
     */
    updateScroll(scrolledUntilNow, totalToScroll) {
        this.updateScrollPosition(scrolledUntilNow);
        this.updateTotalToScroll(totalToScroll);
    }
    /**
     * @param {?} scroll
     * @param {?} isScrollingDown
     * @return {?}
     */
    updateTriggeredFlag(scroll, isScrollingDown) {
        if (isScrollingDown) {
            this.triggered.down = scroll;
        }
        else {
            this.triggered.up = scroll;
        }
    }
    /**
     * @param {?} totalToScroll
     * @param {?} isScrollingDown
     * @return {?}
     */
    isTriggeredScroll(totalToScroll, isScrollingDown) {
        return isScrollingDown
            ? this.triggered.down === totalToScroll
            : this.triggered.up === totalToScroll;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} config
 * @return {?}
 */
function createScroller(config) {
    const { scrollContainer, scrollWindow, element, fromRoot } = config;
    /** @type {?} */
    const resolver = createResolver({
        axis: new AxisResolver(!config.horizontal),
        windowElement: resolveContainerElement(scrollContainer, scrollWindow, element, fromRoot)
    });
    /** @type {?} */
    const scrollState = new ScrollState({
        totalToScroll: calculatePoints(element, resolver)
    });
    /** @type {?} */
    const options = {
        container: resolver.container,
        throttle: config.throttle
    };
    /** @type {?} */
    const distance = {
        up: config.upDistance,
        down: config.downDistance
    };
    return attachScrollEvent(options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((/**
     * @return {?}
     */
    () => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(calculatePoints(element, resolver)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
     * @param {?} positionStats
     * @return {?}
     */
    (positionStats) => toInfiniteScrollParams(scrollState.lastScrollPosition, positionStats, distance))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((/**
     * @param {?} __0
     * @return {?}
     */
    ({ stats }) => scrollState.updateScroll(stats.scrolled, stats.totalToScroll))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
     * @param {?} __0
     * @return {?}
     */
    ({ fire, scrollDown, stats: { totalToScroll } }) => shouldTriggerEvents(config.alwaysCallback, fire, scrollState.isTriggeredScroll(totalToScroll, scrollDown)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((/**
     * @param {?} __0
     * @return {?}
     */
    ({ scrollDown, stats: { totalToScroll } }) => {
        scrollState.updateTriggeredFlag(totalToScroll, scrollDown);
    })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(toInfiniteScrollAction));
}
/**
 * @param {?} options
 * @return {?}
 */
function attachScrollEvent(options) {
    /** @type {?} */
    let obs = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(options.container, 'scroll');
    // For an unknown reason calling `sampleTime()` causes trouble for many users, even with `options.throttle = 0`.
    // Let's avoid calling the function unless needed.
    // See https://github.com/orizens/ngx-infinite-scroll/issues/198
    if (options.throttle) {
        obs = obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["sampleTime"])(options.throttle));
    }
    return obs;
}
/**
 * @param {?} lastScrollPosition
 * @param {?} stats
 * @param {?} distance
 * @return {?}
 */
function toInfiniteScrollParams(lastScrollPosition, stats, distance) {
    const { scrollDown, fire } = getScrollStats(lastScrollPosition, stats, distance);
    return {
        scrollDown,
        fire,
        stats
    };
}
/** @type {?} */
const InfiniteScrollActions = {
    DOWN: '[NGX_ISE] DOWN',
    UP: '[NGX_ISE] UP'
};
/**
 * @param {?} response
 * @return {?}
 */
function toInfiniteScrollAction(response) {
    const { scrollDown, stats: { scrolled: currentScrollPosition } } = response;
    return {
        type: scrollDown ? InfiniteScrollActions.DOWN : InfiniteScrollActions.UP,
        payload: {
            currentScrollPosition
        }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InfiniteScrollDirective {
    /**
     * @param {?} element
     * @param {?} zone
     */
    constructor(element, zone) {
        this.element = element;
        this.zone = zone;
        this.scrolled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrolledUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.infiniteScrollDistance = 2;
        this.infiniteScrollUpDistance = 1.5;
        this.infiniteScrollThrottle = 150;
        this.infiniteScrollDisabled = false;
        this.infiniteScrollContainer = null;
        this.scrollWindow = true;
        this.immediateCheck = false;
        this.horizontal = false;
        this.alwaysCallback = false;
        this.fromRoot = false;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this.infiniteScrollDisabled) {
            this.setup();
        }
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    ngOnChanges({ infiniteScrollContainer, infiniteScrollDisabled, infiniteScrollDistance }) {
        /** @type {?} */
        const containerChanged = inputPropChanged(infiniteScrollContainer);
        /** @type {?} */
        const disabledChanged = inputPropChanged(infiniteScrollDisabled);
        /** @type {?} */
        const distanceChanged = inputPropChanged(infiniteScrollDistance);
        /** @type {?} */
        const shouldSetup = (!disabledChanged && !this.infiniteScrollDisabled) ||
            (disabledChanged && !infiniteScrollDisabled.currentValue) || distanceChanged;
        if (containerChanged || disabledChanged || distanceChanged) {
            this.destroyScroller();
            if (shouldSetup) {
                this.setup();
            }
        }
    }
    /**
     * @return {?}
     */
    setup() {
        if (hasWindowDefined()) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.disposeScroller = createScroller({
                    fromRoot: this.fromRoot,
                    alwaysCallback: this.alwaysCallback,
                    disable: this.infiniteScrollDisabled,
                    downDistance: this.infiniteScrollDistance,
                    element: this.element,
                    horizontal: this.horizontal,
                    scrollContainer: this.infiniteScrollContainer,
                    scrollWindow: this.scrollWindow,
                    throttle: this.infiniteScrollThrottle,
                    upDistance: this.infiniteScrollUpDistance
                }).subscribe((/**
                 * @param {?} payload
                 * @return {?}
                 */
                (payload) => this.zone.run((/**
                 * @return {?}
                 */
                () => this.handleOnScroll(payload)))));
            }));
        }
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    handleOnScroll({ type, payload }) {
        switch (type) {
            case InfiniteScrollActions.DOWN:
                return this.scrolled.emit(payload);
            case InfiniteScrollActions.UP:
                return this.scrolledUp.emit(payload);
            default:
                return;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyScroller();
    }
    /**
     * @return {?}
     */
    destroyScroller() {
        if (this.disposeScroller) {
            this.disposeScroller.unsubscribe();
        }
    }
}
InfiniteScrollDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[infiniteScroll], [infinite-scroll], [data-infinite-scroll]'
            },] },
];
/** @nocollapse */
InfiniteScrollDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
InfiniteScrollDirective.propDecorators = {
    scrolled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    scrolledUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    infiniteScrollDistance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    infiniteScrollUpDistance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    infiniteScrollThrottle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    infiniteScrollDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    infiniteScrollContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollWindow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    immediateCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    horizontal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    alwaysCallback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    fromRoot: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InfiniteScrollModule {
}
InfiniteScrollModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [InfiniteScrollDirective],
                exports: [InfiniteScrollDirective],
                imports: [],
                providers: []
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Angular library starter.
 * Build an Angular library compatible with AoT compilation & Tree shaking.
 * Written by Roberto Simonetti.
 * MIT license.
 * https://github.com/robisim74/angular-library-starter
 */
/**
 * Entry point for all public APIs of the package.
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-infinite-scroll.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/private/components/posts/posts.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/private/components/posts/posts.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" *ngIf=\"!cargando\" infiniteScroll [infiniteScrollDistance]=\"2\" (scrolled)=\"onScroll()\">\n\t<div class=\"row\">\n\t\t<div class=\"col-3\">\n\t\t\t<div class=\"card text-center m-1\">\n\t\t\t\t<div class=\"mt-2\">\n\t\t\t\t\t<img\n\t\t\t\t\t\tsrc=\"../../../../../assets/img/profile.png\"\n\t\t\t\t\t\tclass=\"rounded-circle img-fluid\"\n\t\t\t\t\t\talt=\"profile\"\n\t\t\t\t\t\tstyle=\"max-width: 40%; max-height: 300px;\"\n\t\t\t\t\t\t*ngIf=\"!usuario.foto; else usuarioConFoto\"\n\t\t\t\t\t/>\n\t\t\t\t\t<ng-template #usuarioConFoto>\n\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t[src]=\"usuario.foto\"\n\t\t\t\t\t\t\tclass=\"rounded-circle img-fluid\"\n\t\t\t\t\t\t\talt=\"profile\"\n\t\t\t\t\t\t\tstyle=\"max-width: 40%; max-height: 300px;\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</div>\n\t\t\t\t<span class=\"mt-3\" *ngIf=\"usuario.nombre\">{{ usuario.nombre }}</span>\n\t\t\t\t<span class=\"mb-3\">{{ usuario.correo }}</span>\n\t\t\t\t<button\n\t\t\t\t\ttype=\"button\"\n\t\t\t\t\tclass=\"btn btn-primary\"\n\t\t\t\t\tdata-toggle=\"modal\"\n\t\t\t\t\tdata-target=\"#publicacionModal\"\n\t\t\t\t\tdata-whatever=\"@getbootstrap\"\n\t\t\t\t>\n\t\t\t\t\t<fa-icon [icon]=\"faPlus\" title=\"Publicar\"></fa-icon>\n\t\t\t\t\tPublicar\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-9\">\n\t\t\t<div *ngIf=\"publicacionesLocal.length > 0\">\n\t\t\t\t<div class=\"card m-1\" *ngFor=\"let publicacion of publicacionesLocal\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<h5 class=\"card-title\">{{ publicacion.name }}</h5>\n\t\t\t\t\t\t<p class=\"card-text\">{{ publicacion.description }}</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<img *ngIf=\"publicacion.image\" [src]=\"publicacion.image\" class=\"img-fluid\" alt=\"...\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"card m-1\" *ngFor=\"let publicacion of publicaciones\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<h5 class=\"card-title\">{{ publicacion.name }}</h5>\n\t\t\t\t\t<p class=\"card-text\">{{ publicacion.description }}</p>\n\t\t\t\t</div>\n\t\t\t\t<img *ngIf=\"publicacion.image\" [src]=\"publicacion.image\" class=\"img-fluid\" alt=\"...\" />\n\t\t\t</div>\n\t\t\t<div *ngIf=\"finalDatos\" class=\"alert alert-info text-center mt-3 mr-1 ml-1 mb-3 animated fadeIn faster\">\n\t\t\t\t<h4 class=\"alert-heading\">No hay más publicaciones</h4>\n\t\t\t\t<p>\n\t\t\t\t\t<fa-icon [icon]=\"faExclamation\" size=\"2x\"></fa-icon>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div *ngIf=\"cargando\" class=\"alert alert-info text-center mt-3 animated fadeIn faster container\">\n\t<h4 class=\"alert-heading\">Cargando</h4>\n\t<p>\n\t\t<fa-icon [icon]=\"faSyncAlt\" [spin]=\"true\" size=\"2x\"></fa-icon>\n\t</p>\n\t<p class=\"mb-0\">\n\t\tEspere por favor\n\t</p>\n</div>\n\n<!--Modal publicación-->\n<div\n\tclass=\"modal fade\"\n\tid=\"publicacionModal\"\n\ttabindex=\"-1\"\n\trole=\"dialog\"\n\taria-labelledby=\"exampleModalLabel\"\n\taria-hidden=\"true\"\n>\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel1\">Publicar</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<form\n\t\t\t\t\t#formRegistro=\"ngForm\"\n\t\t\t\t\t(ngSubmit)=\"guardarPublicacion(formRegistro)\"\n\t\t\t\t\tnovalidate=\"\"\n\t\t\t\t\tclass=\"form-signin\"\n\t\t\t\t>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t#titulo=\"ngModel\"\n\t\t\t\t\t\t\t[(ngModel)]=\"publicacion.name\"\n\t\t\t\t\t\t\tid=\"titulo\"\n\t\t\t\t\t\t\tminlength=\"1\"\n\t\t\t\t\t\t\tmaxlength=\"40\"\n\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\tplaceholder=\"Titulo\"\n\t\t\t\t\t\t\tname=\"titulo\"\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': formRegistro.submitted && formRegistro.controls['titulo'].errors }\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tclass=\"invalid-feedback animated fadeIn\"\n\t\t\t\t\t\t\t*ngIf=\"formRegistro.submitted && formRegistro.controls['titulo'].errors\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tIntroduce un nombre válido.\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<textarea\n\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t[(ngModel)]=\"publicacion.description\"\n\t\t\t\t\t\t\t#descripcion=\"ngModel\"\n\t\t\t\t\t\t\tid=\"descripcion\"\n\t\t\t\t\t\t\tminlength=\"10\"\n\t\t\t\t\t\t\tmaxlength=\"100\"\n\t\t\t\t\t\t\tid=\"validationTextarea\"\n\t\t\t\t\t\t\tname=\"descripcion\"\n\t\t\t\t\t\t\tplaceholder=\"Descripción\"\n\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t\t\t\t'is-invalid': formRegistro.submitted && formRegistro.controls['descripcion'].errors\n\t\t\t\t\t\t\t}\"\n\t\t\t\t\t\t></textarea>\n\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tclass=\"invalid-feedback animated fadeIn\"\n\t\t\t\t\t\t\t*ngIf=\"formRegistro.submitted && formRegistro.controls['descripcion'].errors\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tIntroduce una descripción válida.\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"input-group mt-3\">\n\t\t\t\t\t\t<div class=\"custom-file\">\n\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\ttype=\"file\"\n\t\t\t\t\t\t\t\tid=\"imagen\"\n\t\t\t\t\t\t\t\tclass=\"custom-file-input\"\n\t\t\t\t\t\t\t\tid=\"inputGroupFile04\"\n\t\t\t\t\t\t\t\taccept=\".png, .jpg\"\n\t\t\t\t\t\t\t\t(change)=\"onUpload($event)\"\n\t\t\t\t\t\t\t\taria-describedby=\"inputGroupFileAddon04\"\n\t\t\t\t\t\t\t\tname=\"imagen\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t<label\n\t\t\t\t\t\t\t\t*ngIf=\"nameImageUp\"\n\t\t\t\t\t\t\t\tclass=\"custom-file-label\"\n\t\t\t\t\t\t\t\tfor=\"inputGroupFile04\"\n\t\t\t\t\t\t\t\tdata-browse=\"Elegir\"\n\t\t\t\t\t\t\t\t>{{ nameImageUp }}</label\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<label\n\t\t\t\t\t\t\t\t*ngIf=\"!nameImageUp\"\n\t\t\t\t\t\t\t\tclass=\"custom-file-label\"\n\t\t\t\t\t\t\t\tfor=\"inputGroupFile04\"\n\t\t\t\t\t\t\t\tdata-browse=\"Elegir\"\n\t\t\t\t\t\t\t\t>Elija una imagen</label\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"nameImageUp\" class=\"progress\">\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tclass=\"progress-bar progress-bar-striped bg-primary\"\n\t\t\t\t\t\t\trole=\"progressbar\"\n\t\t\t\t\t\t\t[style.width]=\"(uploadPercent | async) + '%'\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t{{ uploadPercent | async | number: '1.0-0' }}%\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" (click)=\"cerrarModal(formRegistro)\">\n\t\t\t\t\t\t\tCerrar\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">\n\t\t\t\t\t\t\tPublicar\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./src/app/configs/AppSettings.ts":
/*!****************************************!*\
  !*** ./src/app/configs/AppSettings.ts ***!
  \****************************************/
/*! exports provided: GLOBAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL", function() { return GLOBAL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const GLOBAL = {
    url: 'https://gorest.co.in/public-api/'
};


/***/ }),

/***/ "./src/app/core/models/publicacion.ts":
/*!********************************************!*\
  !*** ./src/app/core/models/publicacion.ts ***!
  \********************************************/
/*! exports provided: Publicacion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Publicacion", function() { return Publicacion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Publicacion {
    constructor() { }
}


/***/ }),

/***/ "./src/app/modules/private/components/posts/posts.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/modules/private/components/posts/posts.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJpdmF0ZS9jb21wb25lbnRzL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/private/components/posts/posts.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/private/components/posts/posts.component.ts ***!
  \*********************************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_publicacion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/publicacion.service */ "./src/app/modules/private/services/publicacion.service.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _core_models_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/models/user */ "./src/app/core/models/user.ts");
/* harmony import */ var _core_models_publicacion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/models/publicacion */ "./src/app/core/models/publicacion.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");






// Iconos

// Modelos



let PostsComponent = class PostsComponent {
    constructor(publicacionService, auth, storage) {
        this.publicacionService = publicacionService;
        this.auth = auth;
        this.storage = storage;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.usuario = new _core_models_user__WEBPACK_IMPORTED_MODULE_7__["User"]();
        this.publicaciones = [];
        this.publicacionesLocal = [];
        this.publicacion = new _core_models_publicacion__WEBPACK_IMPORTED_MODULE_8__["Publicacion"]();
        this.cargando = false;
        this.paginaFinal = 1;
        this.paginaActual = 1;
        this.finalDatos = false;
        this.faSyncAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSyncAlt"];
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faPlus"];
        this.faSync = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSync"];
        this.faExclamation = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faExclamation"];
    }
    ngOnInit() {
        this.getCurrentUser();
        this.obtenerPublicacionesLocal();
        this.obtenerPublicaciones();
    }
    // Metodo para saber si hay un usuario logeado actualmente.
    getCurrentUser() {
        this.auth
            .estaAutenticado()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngUnsubscribe))
            .subscribe((user) => {
            if (user) {
                console.log(user);
                this.usuario.correo = user.email;
                if (user.displayName) {
                    this.usuario.nombre = user.displayName;
                }
                if (user.photoURL) {
                    this.usuario.foto = user.photoURL;
                }
            }
        });
    }
    obtenerPublicaciones() {
        this.cargando = true;
        this.publicacionService.obtenerProductos(this.paginaActual).subscribe((data) => {
            this.paginaFinal = data.meta.pagination.pages;
            data.data.forEach((publicacion) => {
                this.publicaciones.push(publicacion);
            });
            this.cargando = false;
        });
    }
    /**
     * Método para guardar una agregar una nueva publicación.
     * @param form Formulario con la información de la nueva publicación.
     */
    guardarPublicacion(form) {
        console.log(this.publicacion);
        if (form.invalid) {
            return;
        }
        else {
            this.publicacionesLocal.unshift(this.publicacion);
            this.guardarEnLocal();
            this.cerrarModal(form);
        }
    }
    /**
     * Método para cerrar el modal de crear una nueva unidad.
     * @param form formulario a resetear.
     */
    cerrarModal(form) {
        form.resetForm();
        this.nameImageUp = null;
        this.publicacion.image = null;
        $('#publicacionModal').modal('hide');
    }
    /**
     * Método para obtener toda la información de la imagen a cargar a Firestore
     * @param e evento que se activa al seleccion una imagen
     */
    onUpload(e) {
        const id = Math.random().toString(36).substring(2);
        const file = e.target.files[0];
        if (file) {
            this.nameImageUp = file.name;
        }
        const filePath = `img/picture_${id}`;
        const ref = this.storage.ref(filePath);
        const task = this.storage.upload(filePath, file);
        this.uploadPercent = task.percentageChanges();
        task
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => (this.urlImage = ref
            .getDownloadURL()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngUnsubscribe))
            .subscribe((url) => {
            this.publicacion.image = url;
        }))))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngUnsubscribe))
            .subscribe();
    }
    guardarEnLocal() {
        localStorage.setItem('publicaciones', JSON.stringify(this.publicacionesLocal));
        this.obtenerPublicacionesLocal();
    }
    obtenerPublicacionesLocal() {
        const data = JSON.parse(localStorage.getItem('publicaciones'));
        if (data) {
            this.publicacionesLocal = data;
        }
        else {
            this.publicacionesLocal = [];
        }
    }
    onScroll() {
        if (this.paginaActual < this.paginaFinal) {
            this.siguientePagina();
        }
        else {
            this.finalDatos = true;
        }
    }
    siguientePagina() {
        this.paginaActual++;
        this.publicacionService.obtenerProductos(this.paginaActual).subscribe((data) => {
            data.data.forEach((publicacion) => {
                this.publicaciones.push(publicacion);
            });
        });
    }
    /**
     * Este metodo se ejecuta cuando el componente se destruye
     * Usamos este método para cancelar todos los observables.
     */
    ngOnDestroy() {
        // End all subscriptions listening to ngUnsubscribe
        // to avoid memory leaks.
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
};
PostsComponent.ctorParameters = () => [
    { type: _services_publicacion_service__WEBPACK_IMPORTED_MODULE_2__["PublicacionService"] },
    { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorage"] }
];
PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./posts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/private/components/posts/posts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./posts.component.css */ "./src/app/modules/private/components/posts/posts.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_publicacion_service__WEBPACK_IMPORTED_MODULE_2__["PublicacionService"],
        _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorage"]])
], PostsComponent);



/***/ }),

/***/ "./src/app/modules/private/guards/auth.guard.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/private/guards/auth.guard.ts ***!
  \******************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AuthGuard = class AuthGuard {
    constructor(afsAuth, router) {
        this.afsAuth = afsAuth;
        this.router = router;
    }
    canActivate(next, state) {
        return this.afsAuth.authState
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((authState) => !!authState))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((auth) => {
            if (!auth) {
                this.router.navigate(['/modOut/login']);
            }
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/modules/private/private-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/private/private-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PrivateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateRoutingModule", function() { return PrivateRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/posts/posts.component */ "./src/app/modules/private/components/posts/posts.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/modules/private/guards/auth.guard.ts");



// Componentes


const routes = [{ path: 'posts', component: _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_3__["PostsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] }];
let PrivateRoutingModule = class PrivateRoutingModule {
};
PrivateRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PrivateRoutingModule);



/***/ }),

/***/ "./src/app/modules/private/private.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/private/private.module.ts ***!
  \***************************************************/
/*! exports provided: PrivateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateModule", function() { return PrivateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _private_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./private-routing.module */ "./src/app/modules/private/private-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/posts/posts.component */ "./src/app/modules/private/components/posts/posts.component.ts");







// FontAwesome


let PrivateModule = class PrivateModule {
};
PrivateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_posts_posts_component__WEBPACK_IMPORTED_MODULE_8__["PostsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _private_routing_module__WEBPACK_IMPORTED_MODULE_3__["PrivateRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__["InfiniteScrollModule"]
        ],
        exports: []
    })
], PrivateModule);



/***/ }),

/***/ "./src/app/modules/private/services/publicacion.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/private/services/publicacion.service.ts ***!
  \*****************************************************************/
/*! exports provided: PublicacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicacionService", function() { return PublicacionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _configs_AppSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../configs/AppSettings */ "./src/app/configs/AppSettings.ts");




let PublicacionService = class PublicacionService {
    constructor(http) {
        this.http = http;
        this.url_productos = _configs_AppSettings__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url + 'products';
    }
    /**
     * Método para obtener todos los productos almacenados en la base de datos
     */
    obtenerProductos(pagina) {
        return this.http.get(this.url_productos + `?page=${pagina}`);
    }
};
PublicacionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PublicacionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], PublicacionService);



/***/ })

}]);
//# sourceMappingURL=modules-private-private-module-es2015.js.map