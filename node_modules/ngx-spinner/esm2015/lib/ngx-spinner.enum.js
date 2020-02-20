/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-spinner.enum.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const LOADERS = {
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
export const DEFAULTS = {
    BD_COLOR: 'rgba(51,51,51,0.8)',
    SPINNER_COLOR: '#fff',
    SPINNER_TYPE: 'ball-scale-multiple',
    Z_INDEX: 99999,
};
/** @type {?} */
export const PRIMARY_SPINNER = 'primary';
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
export class NgxSpinner {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNwaW5uZXIuZW51bS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zcGlubmVyLyIsInNvdXJjZXMiOlsibGliL25neC1zcGlubmVyLmVudW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsTUFBTSxPQUFPLE9BQU8sR0FBRztJQUNyQixZQUFZLEVBQUUsRUFBRTtJQUNoQixXQUFXLEVBQUUsQ0FBQztJQUNkLFdBQVcsRUFBRSxDQUFDO0lBQ2QsYUFBYSxFQUFFLENBQUM7SUFDaEIsbUJBQW1CLEVBQUUsQ0FBQztJQUN0QixrQkFBa0IsRUFBRSxDQUFDO0lBQ3JCLDJCQUEyQixFQUFFLENBQUM7SUFDOUIsd0JBQXdCLEVBQUUsQ0FBQztJQUMzQixtQkFBbUIsRUFBRSxDQUFDO0lBQ3RCLFdBQVcsRUFBRSxDQUFDO0lBQ2QsY0FBYyxFQUFFLENBQUM7SUFDakIsZ0JBQWdCLEVBQUUsQ0FBQztJQUNuQixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLG9CQUFvQixFQUFFLENBQUM7SUFDdkIsWUFBWSxFQUFFLENBQUM7SUFDZixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsYUFBYSxFQUFFLENBQUM7SUFDaEIsbUJBQW1CLEVBQUUsQ0FBQztJQUN0QixZQUFZLEVBQUUsQ0FBQztJQUNmLHFCQUFxQixFQUFFLENBQUM7SUFDeEIsa0JBQWtCLEVBQUUsQ0FBQztJQUNyQixtQkFBbUIsRUFBRSxDQUFDO0lBQ3RCLDRCQUE0QixFQUFFLENBQUM7SUFDL0IsV0FBVyxFQUFFLENBQUM7SUFDZCxxQkFBcUIsRUFBRSxDQUFDO0lBQ3hCLDBCQUEwQixFQUFFLENBQUM7SUFDN0IsbUNBQW1DLEVBQUUsQ0FBQztJQUN0QyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ25CLHlCQUF5QixFQUFFLENBQUM7SUFDNUIsa0JBQWtCLEVBQUUsQ0FBQztJQUNyQiw0QkFBNEIsRUFBRSxDQUFDO0lBQy9CLGtCQUFrQixFQUFFLENBQUM7SUFDckIsb0JBQW9CLEVBQUUsQ0FBQztJQUN2QixjQUFjLEVBQUUsQ0FBQztJQUNqQixzQkFBc0IsRUFBRSxDQUFDO0lBQ3pCLEtBQUssRUFBRSxDQUFDO0lBQ1IsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixNQUFNLEVBQUUsQ0FBQztJQUNULFlBQVksRUFBRSxDQUFDO0lBQ2Ysa0JBQWtCLEVBQUUsQ0FBQztJQUNyQixzQkFBc0IsRUFBRSxDQUFDO0lBQ3pCLDRCQUE0QixFQUFFLENBQUM7SUFDL0IsMEJBQTBCLEVBQUUsQ0FBQztJQUM3QixtQ0FBbUMsRUFBRSxDQUFDO0lBQ3RDLGdCQUFnQixFQUFFLENBQUM7SUFDbkIseUJBQXlCLEVBQUUsQ0FBQztJQUM1QixRQUFRLEVBQUUsQ0FBQztJQUNYLGtCQUFrQixFQUFFLENBQUM7SUFDckIsZUFBZSxFQUFFLENBQUM7SUFDbEIsYUFBYSxFQUFFLENBQUM7SUFDaEIsT0FBTyxFQUFFLENBQUM7SUFDVixvQkFBb0IsRUFBRSxDQUFDO0NBQ3hCOztBQUVELE1BQU0sT0FBTyxRQUFRLEdBQUc7SUFDdEIsUUFBUSxFQUFFLG9CQUFvQjtJQUM5QixhQUFhLEVBQUUsTUFBTTtJQUNyQixZQUFZLEVBQUUscUJBQXFCO0lBQ25DLE9BQU8sRUFBRSxLQUFLO0NBQ2Y7O0FBRUQsTUFBTSxPQUFPLGVBQWUsR0FBRyxTQUFTOzs7O0FBSXhDLDZCQU9DOzs7SUFOQywwQkFBaUI7O0lBQ2pCLHVCQUFZOztJQUNaLHdCQUFlOztJQUNmLHVCQUFjOztJQUNkLDZCQUFxQjs7SUFDckIseUJBQWdCOztBQUdsQixNQUFNLE9BQU8sVUFBVTs7OztJQWFyQixZQUFZLElBQTBCO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRjs7O0lBZkMsMEJBQWE7O0lBQ2IsNkJBQWdCOztJQUNoQiwwQkFBVzs7SUFDWCwyQkFBYzs7SUFDZCwwQkFBYTs7SUFDYiwyQkFBYzs7SUFDZCw4QkFBaUI7O0lBQ2pCLDhCQUF3Qjs7SUFDeEIsZ0NBQW9COztJQUNwQiwwQkFBYzs7SUFDZCw0QkFBZSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBMT0FERVJTID0ge1xuICAnYmFsbC04Yml0cyc6IDE2LFxuICAnYmFsbC1hdG9tJzogNCxcbiAgJ2JhbGwtYmVhdCc6IDMsXG4gICdiYWxsLWNpcmN1cyc6IDUsXG4gICdiYWxsLWNsaW1iaW5nLWRvdCc6IDQsXG4gICdiYWxsLWNsaXAtcm90YXRlJzogMSxcbiAgJ2JhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUnOiAyLFxuICAnYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSc6IDIsXG4gICdiYWxsLWVsYXN0aWMtZG90cyc6IDUsXG4gICdiYWxsLWZhbGwnOiAzLFxuICAnYmFsbC1mdXNzaW9uJzogNCxcbiAgJ2JhbGwtZ3JpZC1iZWF0JzogOSxcbiAgJ2JhbGwtZ3JpZC1wdWxzZSc6IDksXG4gICdiYWxsLW5ld3Rvbi1jcmFkbGUnOiA0LFxuICAnYmFsbC1wdWxzZSc6IDMsXG4gICdiYWxsLXB1bHNlLXJpc2UnOiA1LFxuICAnYmFsbC1wdWxzZS1zeW5jJzogMyxcbiAgJ2JhbGwtcm90YXRlJzogMSxcbiAgJ2JhbGwtcnVubmluZy1kb3RzJzogNSxcbiAgJ2JhbGwtc2NhbGUnOiAxLFxuICAnYmFsbC1zY2FsZS1tdWx0aXBsZSc6IDMsXG4gICdiYWxsLXNjYWxlLXB1bHNlJzogMixcbiAgJ2JhbGwtc2NhbGUtcmlwcGxlJzogMSxcbiAgJ2JhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlJzogMyxcbiAgJ2JhbGwtc3Bpbic6IDgsXG4gICdiYWxsLXNwaW4tY2xvY2t3aXNlJzogOCxcbiAgJ2JhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZSc6IDgsXG4gICdiYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmcnOiA4LFxuICAnYmFsbC1zcGluLWZhZGUnOiA4LFxuICAnYmFsbC1zcGluLWZhZGUtcm90YXRpbmcnOiA4LFxuICAnYmFsbC1zcGluLXJvdGF0ZSc6IDIsXG4gICdiYWxsLXNxdWFyZS1jbG9ja3dpc2Utc3Bpbic6IDgsXG4gICdiYWxsLXNxdWFyZS1zcGluJzogOCxcbiAgJ2JhbGwtdHJpYW5nbGUtcGF0aCc6IDMsXG4gICdiYWxsLXppZy16YWcnOiAyLFxuICAnYmFsbC16aWctemFnLWRlZmxlY3QnOiAyLFxuICAnY29nJzogMSxcbiAgJ2N1YmUtdHJhbnNpdGlvbic6IDIsXG4gICdmaXJlJzogMyxcbiAgJ2xpbmUtc2NhbGUnOiA1LFxuICAnbGluZS1zY2FsZS1wYXJ0eSc6IDUsXG4gICdsaW5lLXNjYWxlLXB1bHNlLW91dCc6IDUsXG4gICdsaW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZCc6IDUsXG4gICdsaW5lLXNwaW4tY2xvY2t3aXNlLWZhZGUnOiA4LFxuICAnbGluZS1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nJzogOCxcbiAgJ2xpbmUtc3Bpbi1mYWRlJzogOCxcbiAgJ2xpbmUtc3Bpbi1mYWRlLXJvdGF0aW5nJzogOCxcbiAgJ3BhY21hbic6IDYsXG4gICdzcXVhcmUtamVsbHktYm94JzogMixcbiAgJ3NxdWFyZS1sb2FkZXInOiAxLFxuICAnc3F1YXJlLXNwaW4nOiAxLFxuICAndGltZXInOiAxLFxuICAndHJpYW5nbGUtc2tldy1zcGluJzogMVxufTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRTID0ge1xuICBCRF9DT0xPUjogJ3JnYmEoNTEsNTEsNTEsMC44KScsXG4gIFNQSU5ORVJfQ09MT1I6ICcjZmZmJyxcbiAgU1BJTk5FUl9UWVBFOiAnYmFsbC1zY2FsZS1tdWx0aXBsZScsXG4gIFpfSU5ERVg6IDk5OTk5LFxufTtcblxuZXhwb3J0IGNvbnN0IFBSSU1BUllfU1BJTk5FUiA9ICdwcmltYXJ5JztcblxuZXhwb3J0IHR5cGUgU2l6ZSA9ICdkZWZhdWx0JyB8ICdzbWFsbCcgfCAnbWVkaXVtJyB8ICdsYXJnZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3Bpbm5lciB7XG4gIGJkQ29sb3I/OiBzdHJpbmc7XG4gIHNpemU/OiBTaXplO1xuICBjb2xvcj86IHN0cmluZztcbiAgdHlwZT86IHN0cmluZztcbiAgZnVsbFNjcmVlbj86IGJvb2xlYW47XG4gIHpJbmRleD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE5neFNwaW5uZXIge1xuICBuYW1lOiBzdHJpbmc7XG4gIGJkQ29sb3I6IHN0cmluZztcbiAgc2l6ZTogU2l6ZTtcbiAgY29sb3I6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xuICBjbGFzczogc3RyaW5nO1xuICBkaXZDb3VudDogbnVtYmVyO1xuICBkaXZBcnJheTogQXJyYXk8bnVtYmVyPjtcbiAgZnVsbFNjcmVlbjogYm9vbGVhbjtcbiAgc2hvdzogYm9vbGVhbjtcbiAgekluZGV4OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8Tmd4U3Bpbm5lcj4pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xuICB9XG59XG4iXX0=