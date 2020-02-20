/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-spinner.enum.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var LOADERS = {
    'ball-8bits': 16,
    'ball-atom': 4,
    'ball-beat': 3,
    'ball-circus': 5,
    'ball-climbing-dot': 4,
    'ball-clip-rotate': 1,
    'ball-clip-rotate-multiple': 2,
    'ball-clip-rotate-pulse': 2,
    'ball-elastic-dots': 5,
    'ball-fall': 3,
    'ball-fussion': 4,
    'ball-grid-beat': 9,
    'ball-grid-pulse': 9,
    'ball-newton-cradle': 4,
    'ball-pulse': 3,
    'ball-pulse-rise': 5,
    'ball-pulse-sync': 3,
    'ball-rotate': 1,
    'ball-running-dots': 5,
    'ball-scale': 1,
    'ball-scale-multiple': 3,
    'ball-scale-pulse': 2,
    'ball-scale-ripple': 1,
    'ball-scale-ripple-multiple': 3,
    'ball-spin': 8,
    'ball-spin-clockwise': 8,
    'ball-spin-clockwise-fade': 8,
    'ball-spin-clockwise-fade-rotating': 8,
    'ball-spin-fade': 8,
    'ball-spin-fade-rotating': 8,
    'ball-spin-rotate': 2,
    'ball-square-clockwise-spin': 8,
    'ball-square-spin': 8,
    'ball-triangle-path': 3,
    'ball-zig-zag': 2,
    'ball-zig-zag-deflect': 2,
    'cog': 1,
    'cube-transition': 2,
    'fire': 3,
    'line-scale': 5,
    'line-scale-party': 5,
    'line-scale-pulse-out': 5,
    'line-scale-pulse-out-rapid': 5,
    'line-spin-clockwise-fade': 8,
    'line-spin-clockwise-fade-rotating': 8,
    'line-spin-fade': 8,
    'line-spin-fade-rotating': 8,
    'pacman': 6,
    'square-jelly-box': 2,
    'square-loader': 1,
    'square-spin': 1,
    'timer': 1,
    'triangle-skew-spin': 1
};
/** @type {?} */
export var DEFAULTS = {
    BD_COLOR: 'rgba(51,51,51,0.8)',
    SPINNER_COLOR: '#fff',
    SPINNER_TYPE: 'ball-scale-multiple',
    Z_INDEX: 99999,
};
/** @type {?} */
export var PRIMARY_SPINNER = 'primary';
/**
 * @record
 */
export function Spinner() { }
if (false) {
    /** @type {?|undefined} */
    Spinner.prototype.bdColor;
    /** @type {?|undefined} */
    Spinner.prototype.size;
    /** @type {?|undefined} */
    Spinner.prototype.color;
    /** @type {?|undefined} */
    Spinner.prototype.type;
    /** @type {?|undefined} */
    Spinner.prototype.fullScreen;
    /** @type {?|undefined} */
    Spinner.prototype.zIndex;
}
var NgxSpinner = /** @class */ (function () {
    function NgxSpinner(init) {
        Object.assign(this, init);
    }
    return NgxSpinner;
}());
export { NgxSpinner };
if (false) {
    /** @type {?} */
    NgxSpinner.prototype.name;
    /** @type {?} */
    NgxSpinner.prototype.bdColor;
    /** @type {?} */
    NgxSpinner.prototype.size;
    /** @type {?} */
    NgxSpinner.prototype.color;
    /** @type {?} */
    NgxSpinner.prototype.type;
    /** @type {?} */
    NgxSpinner.prototype.class;
    /** @type {?} */
    NgxSpinner.prototype.divCount;
    /** @type {?} */
    NgxSpinner.prototype.divArray;
    /** @type {?} */
    NgxSpinner.prototype.fullScreen;
    /** @type {?} */
    NgxSpinner.prototype.show;
    /** @type {?} */
    NgxSpinner.prototype.zIndex;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNwaW5uZXIuZW51bS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zcGlubmVyLyIsInNvdXJjZXMiOlsibGliL25neC1zcGlubmVyLmVudW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsTUFBTSxLQUFPLE9BQU8sR0FBRztJQUNyQixZQUFZLEVBQUUsRUFBRTtJQUNoQixXQUFXLEVBQUUsQ0FBQztJQUNkLFdBQVcsRUFBRSxDQUFDO0lBQ2QsYUFBYSxFQUFFLENBQUM7SUFDaEIsbUJBQW1CLEVBQUUsQ0FBQztJQUN0QixrQkFBa0IsRUFBRSxDQUFDO0lBQ3JCLDJCQUEyQixFQUFFLENBQUM7SUFDOUIsd0JBQXdCLEVBQUUsQ0FBQztJQUMzQixtQkFBbUIsRUFBRSxDQUFDO0lBQ3RCLFdBQVcsRUFBRSxDQUFDO0lBQ2QsY0FBYyxFQUFFLENBQUM7SUFDakIsZ0JBQWdCLEVBQUUsQ0FBQztJQUNuQixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLG9CQUFvQixFQUFFLENBQUM7SUFDdkIsWUFBWSxFQUFFLENBQUM7SUFDZixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsYUFBYSxFQUFFLENBQUM7SUFDaEIsbUJBQW1CLEVBQUUsQ0FBQztJQUN0QixZQUFZLEVBQUUsQ0FBQztJQUNmLHFCQUFxQixFQUFFLENBQUM7SUFDeEIsa0JBQWtCLEVBQUUsQ0FBQztJQUNyQixtQkFBbUIsRUFBRSxDQUFDO0lBQ3RCLDRCQUE0QixFQUFFLENBQUM7SUFDL0IsV0FBVyxFQUFFLENBQUM7SUFDZCxxQkFBcUIsRUFBRSxDQUFDO0lBQ3hCLDBCQUEwQixFQUFFLENBQUM7SUFDN0IsbUNBQW1DLEVBQUUsQ0FBQztJQUN0QyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ25CLHlCQUF5QixFQUFFLENBQUM7SUFDNUIsa0JBQWtCLEVBQUUsQ0FBQztJQUNyQiw0QkFBNEIsRUFBRSxDQUFDO0lBQy9CLGtCQUFrQixFQUFFLENBQUM7SUFDckIsb0JBQW9CLEVBQUUsQ0FBQztJQUN2QixjQUFjLEVBQUUsQ0FBQztJQUNqQixzQkFBc0IsRUFBRSxDQUFDO0lBQ3pCLEtBQUssRUFBRSxDQUFDO0lBQ1IsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixNQUFNLEVBQUUsQ0FBQztJQUNULFlBQVksRUFBRSxDQUFDO0lBQ2Ysa0JBQWtCLEVBQUUsQ0FBQztJQUNyQixzQkFBc0IsRUFBRSxDQUFDO0lBQ3pCLDRCQUE0QixFQUFFLENBQUM7SUFDL0IsMEJBQTBCLEVBQUUsQ0FBQztJQUM3QixtQ0FBbUMsRUFBRSxDQUFDO0lBQ3RDLGdCQUFnQixFQUFFLENBQUM7SUFDbkIseUJBQXlCLEVBQUUsQ0FBQztJQUM1QixRQUFRLEVBQUUsQ0FBQztJQUNYLGtCQUFrQixFQUFFLENBQUM7SUFDckIsZUFBZSxFQUFFLENBQUM7SUFDbEIsYUFBYSxFQUFFLENBQUM7SUFDaEIsT0FBTyxFQUFFLENBQUM7SUFDVixvQkFBb0IsRUFBRSxDQUFDO0NBQ3hCOztBQUVELE1BQU0sS0FBTyxRQUFRLEdBQUc7SUFDdEIsUUFBUSxFQUFFLG9CQUFvQjtJQUM5QixhQUFhLEVBQUUsTUFBTTtJQUNyQixZQUFZLEVBQUUscUJBQXFCO0lBQ25DLE9BQU8sRUFBRSxLQUFLO0NBQ2Y7O0FBRUQsTUFBTSxLQUFPLGVBQWUsR0FBRyxTQUFTOzs7O0FBSXhDLDZCQU9DOzs7SUFOQywwQkFBaUI7O0lBQ2pCLHVCQUFZOztJQUNaLHdCQUFlOztJQUNmLHVCQUFjOztJQUNkLDZCQUFxQjs7SUFDckIseUJBQWdCOztBQUdsQjtJQWFFLG9CQUFZLElBQTBCO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7Ozs7SUFmQywwQkFBYTs7SUFDYiw2QkFBZ0I7O0lBQ2hCLDBCQUFXOztJQUNYLDJCQUFjOztJQUNkLDBCQUFhOztJQUNiLDJCQUFjOztJQUNkLDhCQUFpQjs7SUFDakIsOEJBQXdCOztJQUN4QixnQ0FBb0I7O0lBQ3BCLDBCQUFjOztJQUNkLDRCQUFlIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IExPQURFUlMgPSB7XG4gICdiYWxsLThiaXRzJzogMTYsXG4gICdiYWxsLWF0b20nOiA0LFxuICAnYmFsbC1iZWF0JzogMyxcbiAgJ2JhbGwtY2lyY3VzJzogNSxcbiAgJ2JhbGwtY2xpbWJpbmctZG90JzogNCxcbiAgJ2JhbGwtY2xpcC1yb3RhdGUnOiAxLFxuICAnYmFsbC1jbGlwLXJvdGF0ZS1tdWx0aXBsZSc6IDIsXG4gICdiYWxsLWNsaXAtcm90YXRlLXB1bHNlJzogMixcbiAgJ2JhbGwtZWxhc3RpYy1kb3RzJzogNSxcbiAgJ2JhbGwtZmFsbCc6IDMsXG4gICdiYWxsLWZ1c3Npb24nOiA0LFxuICAnYmFsbC1ncmlkLWJlYXQnOiA5LFxuICAnYmFsbC1ncmlkLXB1bHNlJzogOSxcbiAgJ2JhbGwtbmV3dG9uLWNyYWRsZSc6IDQsXG4gICdiYWxsLXB1bHNlJzogMyxcbiAgJ2JhbGwtcHVsc2UtcmlzZSc6IDUsXG4gICdiYWxsLXB1bHNlLXN5bmMnOiAzLFxuICAnYmFsbC1yb3RhdGUnOiAxLFxuICAnYmFsbC1ydW5uaW5nLWRvdHMnOiA1LFxuICAnYmFsbC1zY2FsZSc6IDEsXG4gICdiYWxsLXNjYWxlLW11bHRpcGxlJzogMyxcbiAgJ2JhbGwtc2NhbGUtcHVsc2UnOiAyLFxuICAnYmFsbC1zY2FsZS1yaXBwbGUnOiAxLFxuICAnYmFsbC1zY2FsZS1yaXBwbGUtbXVsdGlwbGUnOiAzLFxuICAnYmFsbC1zcGluJzogOCxcbiAgJ2JhbGwtc3Bpbi1jbG9ja3dpc2UnOiA4LFxuICAnYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlJzogOCxcbiAgJ2JhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZyc6IDgsXG4gICdiYWxsLXNwaW4tZmFkZSc6IDgsXG4gICdiYWxsLXNwaW4tZmFkZS1yb3RhdGluZyc6IDgsXG4gICdiYWxsLXNwaW4tcm90YXRlJzogMixcbiAgJ2JhbGwtc3F1YXJlLWNsb2Nrd2lzZS1zcGluJzogOCxcbiAgJ2JhbGwtc3F1YXJlLXNwaW4nOiA4LFxuICAnYmFsbC10cmlhbmdsZS1wYXRoJzogMyxcbiAgJ2JhbGwtemlnLXphZyc6IDIsXG4gICdiYWxsLXppZy16YWctZGVmbGVjdCc6IDIsXG4gICdjb2cnOiAxLFxuICAnY3ViZS10cmFuc2l0aW9uJzogMixcbiAgJ2ZpcmUnOiAzLFxuICAnbGluZS1zY2FsZSc6IDUsXG4gICdsaW5lLXNjYWxlLXBhcnR5JzogNSxcbiAgJ2xpbmUtc2NhbGUtcHVsc2Utb3V0JzogNSxcbiAgJ2xpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkJzogNSxcbiAgJ2xpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZSc6IDgsXG4gICdsaW5lLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmcnOiA4LFxuICAnbGluZS1zcGluLWZhZGUnOiA4LFxuICAnbGluZS1zcGluLWZhZGUtcm90YXRpbmcnOiA4LFxuICAncGFjbWFuJzogNixcbiAgJ3NxdWFyZS1qZWxseS1ib3gnOiAyLFxuICAnc3F1YXJlLWxvYWRlcic6IDEsXG4gICdzcXVhcmUtc3Bpbic6IDEsXG4gICd0aW1lcic6IDEsXG4gICd0cmlhbmdsZS1za2V3LXNwaW4nOiAxXG59O1xuXG5leHBvcnQgY29uc3QgREVGQVVMVFMgPSB7XG4gIEJEX0NPTE9SOiAncmdiYSg1MSw1MSw1MSwwLjgpJyxcbiAgU1BJTk5FUl9DT0xPUjogJyNmZmYnLFxuICBTUElOTkVSX1RZUEU6ICdiYWxsLXNjYWxlLW11bHRpcGxlJyxcbiAgWl9JTkRFWDogOTk5OTksXG59O1xuXG5leHBvcnQgY29uc3QgUFJJTUFSWV9TUElOTkVSID0gJ3ByaW1hcnknO1xuXG5leHBvcnQgdHlwZSBTaXplID0gJ2RlZmF1bHQnIHwgJ3NtYWxsJyB8ICdtZWRpdW0nIHwgJ2xhcmdlJztcblxuZXhwb3J0IGludGVyZmFjZSBTcGlubmVyIHtcbiAgYmRDb2xvcj86IHN0cmluZztcbiAgc2l6ZT86IFNpemU7XG4gIGNvbG9yPzogc3RyaW5nO1xuICB0eXBlPzogc3RyaW5nO1xuICBmdWxsU2NyZWVuPzogYm9vbGVhbjtcbiAgekluZGV4PzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTmd4U3Bpbm5lciB7XG4gIG5hbWU6IHN0cmluZztcbiAgYmRDb2xvcjogc3RyaW5nO1xuICBzaXplOiBTaXplO1xuICBjb2xvcjogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIGNsYXNzOiBzdHJpbmc7XG4gIGRpdkNvdW50OiBudW1iZXI7XG4gIGRpdkFycmF5OiBBcnJheTxudW1iZXI+O1xuICBmdWxsU2NyZWVuOiBib29sZWFuO1xuICBzaG93OiBib29sZWFuO1xuICB6SW5kZXg6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxOZ3hTcGlubmVyPikge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XG4gIH1cbn1cbiJdfQ==