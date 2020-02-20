/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-spinner.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { NgxSpinner, PRIMARY_SPINNER } from './ngx-spinner.enum';
import * as i0 from "@angular/core";
var NgxSpinnerService = /** @class */ (function () {
    /**
     * Creates an instance of NgxSpinnerService.
     * @memberof NgxSpinnerService
     */
    function NgxSpinnerService() {
        /**
         * Spinner observable
         *
         * \@memberof NgxSpinnerService
         */
        this.spinnerObservable = new ReplaySubject(1);
    }
    /**
    * Get subscription of desired spinner
    * @memberof NgxSpinnerService
    **/
    /**
     * Get subscription of desired spinner
     * \@memberof NgxSpinnerService
     *
     * @param {?} name
     * @return {?}
     */
    NgxSpinnerService.prototype.getSpinner = /**
     * Get subscription of desired spinner
     * \@memberof NgxSpinnerService
     *
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.spinnerObservable.asObservable().pipe(filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x && x.name === name; })));
    };
    /**
     * To show spinner
     *
     * @memberof NgxSpinnerService
     */
    /**
     * To show spinner
     *
     * \@memberof NgxSpinnerService
     * @param {?=} name
     * @param {?=} spinner
     * @return {?}
     */
    NgxSpinnerService.prototype.show = /**
     * To show spinner
     *
     * \@memberof NgxSpinnerService
     * @param {?=} name
     * @param {?=} spinner
     * @return {?}
     */
    function (name, spinner) {
        var _this = this;
        if (name === void 0) { name = PRIMARY_SPINNER; }
        /** @type {?} */
        var showPromise = new Promise((/**
         * @param {?} resolve
         * @param {?} _reject
         * @return {?}
         */
        function (resolve, _reject) {
            if (spinner && Object.keys(spinner).length) {
                spinner['name'] = name;
                _this.spinnerObservable.next(new NgxSpinner(tslib_1.__assign({}, spinner, { show: true })));
                resolve(true);
            }
            else {
                _this.spinnerObservable.next(new NgxSpinner({ name: name, show: true }));
                resolve(true);
            }
        }));
        return showPromise;
    };
    /**
    * To hide spinner
    *
    * @memberof NgxSpinnerService
    */
    /**
     * To hide spinner
     *
     * \@memberof NgxSpinnerService
     * @param {?=} name
     * @param {?=} debounce
     * @return {?}
     */
    NgxSpinnerService.prototype.hide = /**
     * To hide spinner
     *
     * \@memberof NgxSpinnerService
     * @param {?=} name
     * @param {?=} debounce
     * @return {?}
     */
    function (name, debounce) {
        var _this = this;
        if (name === void 0) { name = PRIMARY_SPINNER; }
        if (debounce === void 0) { debounce = 0; }
        /** @type {?} */
        var hidePromise = new Promise((/**
         * @param {?} resolve
         * @param {?} _reject
         * @return {?}
         */
        function (resolve, _reject) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.spinnerObservable.next(new NgxSpinner({ name: name, show: false }));
                resolve(true);
            }), debounce);
        }));
        return hidePromise;
    };
    NgxSpinnerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxSpinnerService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxSpinnerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgxSpinnerService_Factory() { return new NgxSpinnerService(); }, token: NgxSpinnerService, providedIn: "root" });
    return NgxSpinnerService;
}());
export { NgxSpinnerService };
if (false) {
    /**
     * Spinner observable
     *
     * \@memberof NgxSpinnerService
     * @type {?}
     * @private
     */
    NgxSpinnerService.prototype.spinnerObservable;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNwaW5uZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zcGlubmVyLyIsInNvdXJjZXMiOlsibGliL25neC1zcGlubmVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBVyxNQUFNLG9CQUFvQixDQUFDOztBQUUxRTtJQVVFOzs7T0FHRztJQUNIOzs7Ozs7UUFMUSxzQkFBaUIsR0FBRyxJQUFJLGFBQWEsQ0FBYSxDQUFDLENBQUMsQ0FBQztJQUs3QyxDQUFDO0lBQ2pCOzs7T0FHRzs7Ozs7Ozs7SUFDSCxzQ0FBVTs7Ozs7OztJQUFWLFVBQVcsSUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTTs7OztRQUFDLFVBQUMsQ0FBYSxJQUFLLE9BQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFwQixDQUFvQixFQUFDLENBQUMsQ0FBQztJQUNyRyxDQUFDO0lBQ0Q7Ozs7T0FJRzs7Ozs7Ozs7O0lBQ0gsZ0NBQUk7Ozs7Ozs7O0lBQUosVUFBSyxJQUE4QixFQUFFLE9BQWlCO1FBQXRELGlCQVlDO1FBWkkscUJBQUEsRUFBQSxzQkFBOEI7O1lBQzNCLFdBQVcsR0FBRyxJQUFJLE9BQU87Ozs7O1FBQUMsVUFBQyxPQUFPLEVBQUUsT0FBTztZQUMvQyxJQUFJLE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFDMUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDdkIsS0FBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLFVBQVUsc0JBQU0sT0FBTyxJQUFFLElBQUksRUFBRSxJQUFJLElBQUcsQ0FBQyxDQUFDO2dCQUN4RSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDZjtpQkFBTTtnQkFDTCxLQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksVUFBVSxDQUFDLEVBQUUsSUFBSSxNQUFBLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDbEUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2Y7UUFDSCxDQUFDLEVBQUM7UUFDRixPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBQ0Q7Ozs7TUFJRTs7Ozs7Ozs7O0lBQ0YsZ0NBQUk7Ozs7Ozs7O0lBQUosVUFBSyxJQUE4QixFQUFFLFFBQW9CO1FBQXpELGlCQVFDO1FBUkkscUJBQUEsRUFBQSxzQkFBOEI7UUFBRSx5QkFBQSxFQUFBLFlBQW9COztZQUNqRCxXQUFXLEdBQUcsSUFBSSxPQUFPOzs7OztRQUFDLFVBQUMsT0FBTyxFQUFFLE9BQU87WUFDL0MsVUFBVTs7O1lBQUM7Z0JBQ1QsS0FBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLFVBQVUsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ25FLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQixDQUFDLEdBQUUsUUFBUSxDQUFDLENBQUM7UUFDZixDQUFDLEVBQUM7UUFDRixPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDOztnQkFyREYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7NEJBUEQ7Q0EyREMsQUF0REQsSUFzREM7U0FuRFksaUJBQWlCOzs7Ozs7Ozs7SUFNNUIsOENBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTmd4U3Bpbm5lciwgUFJJTUFSWV9TUElOTkVSLCBTcGlubmVyIH0gZnJvbSAnLi9uZ3gtc3Bpbm5lci5lbnVtJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4U3Bpbm5lclNlcnZpY2Uge1xuICAvKipcbiAgICogU3Bpbm5lciBvYnNlcnZhYmxlXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyU2VydmljZVxuICAgKi9cbiAgcHJpdmF0ZSBzcGlubmVyT2JzZXJ2YWJsZSA9IG5ldyBSZXBsYXlTdWJqZWN0PE5neFNwaW5uZXI+KDEpO1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBOZ3hTcGlubmVyU2VydmljZS5cbiAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJTZXJ2aWNlXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuICAvKipcbiAgKiBHZXQgc3Vic2NyaXB0aW9uIG9mIGRlc2lyZWQgc3Bpbm5lclxuICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyU2VydmljZVxuICAqKi9cbiAgZ2V0U3Bpbm5lcihuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE5neFNwaW5uZXI+IHtcbiAgICByZXR1cm4gdGhpcy5zcGlubmVyT2JzZXJ2YWJsZS5hc09ic2VydmFibGUoKS5waXBlKGZpbHRlcigoeDogTmd4U3Bpbm5lcikgPT4geCAmJiB4Lm5hbWUgPT09IG5hbWUpKTtcbiAgfVxuICAvKipcbiAgICogVG8gc2hvdyBzcGlubmVyXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyU2VydmljZVxuICAgKi9cbiAgc2hvdyhuYW1lOiBzdHJpbmcgPSBQUklNQVJZX1NQSU5ORVIsIHNwaW5uZXI/OiBTcGlubmVyKSB7XG4gICAgY29uc3Qgc2hvd1Byb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgX3JlamVjdCkgPT4ge1xuICAgICAgaWYgKHNwaW5uZXIgJiYgT2JqZWN0LmtleXMoc3Bpbm5lcikubGVuZ3RoKSB7XG4gICAgICAgIHNwaW5uZXJbJ25hbWUnXSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc3Bpbm5lck9ic2VydmFibGUubmV4dChuZXcgTmd4U3Bpbm5lcih7IC4uLnNwaW5uZXIsIHNob3c6IHRydWUgfSkpO1xuICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zcGlubmVyT2JzZXJ2YWJsZS5uZXh0KG5ldyBOZ3hTcGlubmVyKHsgbmFtZSwgc2hvdzogdHJ1ZSB9KSk7XG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNob3dQcm9taXNlO1xuICB9XG4gIC8qKlxuICAqIFRvIGhpZGUgc3Bpbm5lclxuICAqXG4gICogQG1lbWJlcm9mIE5neFNwaW5uZXJTZXJ2aWNlXG4gICovXG4gIGhpZGUobmFtZTogc3RyaW5nID0gUFJJTUFSWV9TUElOTkVSLCBkZWJvdW5jZTogbnVtYmVyID0gMCkge1xuICAgIGNvbnN0IGhpZGVQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIF9yZWplY3QpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNwaW5uZXJPYnNlcnZhYmxlLm5leHQobmV3IE5neFNwaW5uZXIoeyBuYW1lLCBzaG93OiBmYWxzZSB9KSk7XG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICB9LCBkZWJvdW5jZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGhpZGVQcm9taXNlO1xuICB9XG59XG4iXX0=