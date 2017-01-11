/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './opponent-find.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from './opponent-find.sevices';
import * as import9 from '../socketHanding/socket.service';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '@angular/forms/src/directives/reactive_directives/form_group_directive';
import * as import13 from '@angular/forms/src/directives/ng_control_status';
import * as import14 from '@angular/forms/src/directives/default_value_accessor';
import * as import15 from '@angular/forms/src/directives/reactive_directives/form_control_name';
import * as import16 from '@angular/common/src/directives/ng_if';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from '@angular/core/src/linker/template_ref';
import * as import19 from '@angular/forms/src/directives/control_value_accessor';
import * as import20 from '@angular/forms/src/directives/ng_control';
import * as import21 from '@angular/forms/src/directives/control_container';
var renderType_OpponentComponentFind_Host = null;
var _View_OpponentComponentFind_Host0 = (function (_super) {
    __extends(_View_OpponentComponentFind_Host0, _super);
    function _View_OpponentComponentFind_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_OpponentComponentFind_Host0, renderType_OpponentComponentFind_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_OpponentComponentFind_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('opponent-find', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_OpponentComponentFind0(this.viewUtils, this.injector(0), this._appEl_0);
        this._OpponentComponentFind_0_4 = new import3.OpponentComponentFind(this.parentInjector.get(import8.OpponentFindService), this.parentInjector.get(import9.SocketService));
        this._appEl_0.initComponent(this._OpponentComponentFind_0_4, [], compView_0);
        compView_0.create(this._OpponentComponentFind_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_OpponentComponentFind_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.OpponentComponentFind) && (0 === requestNodeIndex))) {
            return this._OpponentComponentFind_0_4;
        }
        return notFoundResult;
    };
    _View_OpponentComponentFind_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._OpponentComponentFind_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_OpponentComponentFind_Host0;
}(import1.AppView));
function viewFactory_OpponentComponentFind_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_OpponentComponentFind_Host === null)) {
        (renderType_OpponentComponentFind_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_OpponentComponentFind_Host0(viewUtils, parentInjector, declarationEl);
}
export var OpponentComponentFindNgFactory = new import11.ComponentFactory('opponent-find', viewFactory_OpponentComponentFind_Host0, import3.OpponentComponentFind);
var styles_OpponentComponentFind = [];
var renderType_OpponentComponentFind = null;
var _View_OpponentComponentFind0 = (function (_super) {
    __extends(_View_OpponentComponentFind0, _super);
    function _View_OpponentComponentFind0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_OpponentComponentFind0, renderType_OpponentComponentFind, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_OpponentComponentFind0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'col-md-8 col-lg-offset-2');
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'form', null);
        this._FormGroupDirective_2_3 = new import12.FormGroupDirective(null, null);
        this._ControlContainer_2_4 = this._FormGroupDirective_2_3;
        this._NgControlStatusGroup_2_5 = new import13.NgControlStatusGroup(this._ControlContainer_2_4);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'div', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'form-group');
        this._text_5 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_7 = this.renderer.createElement(this._el_2, 'div', null);
        this.renderer.setElementAttribute(this._el_7, 'class', 'form-group');
        this._text_8 = this.renderer.createText(this._el_7, '\n            ', null);
        this._el_9 = this.renderer.createElement(this._el_7, 'label', null);
        this.renderer.setElementAttribute(this._el_9, 'for', 'userName');
        this._text_10 = this.renderer.createText(this._el_9, 'Search for user : ', null);
        this._text_11 = this.renderer.createText(this._el_7, '\n            ', null);
        this._el_12 = this.renderer.createElement(this._el_7, 'input', null);
        this.renderer.setElementAttribute(this._el_12, 'class', 'form-control');
        this.renderer.setElementAttribute(this._el_12, 'formControlName', 'userName');
        this.renderer.setElementAttribute(this._el_12, 'id', 'userName');
        this.renderer.setElementAttribute(this._el_12, 'type', 'text');
        this._DefaultValueAccessor_12_3 = new import14.DefaultValueAccessor(this.renderer, new import17.ElementRef(this._el_12));
        this._NG_VALUE_ACCESSOR_12_4 = [this._DefaultValueAccessor_12_3];
        this._FormControlName_12_5 = new import15.FormControlName(this._ControlContainer_2_4, null, null, this._NG_VALUE_ACCESSOR_12_4);
        this._NgControl_12_6 = this._FormControlName_12_5;
        this._NgControlStatus_12_7 = new import13.NgControlStatus(this._NgControl_12_6);
        this._text_13 = this.renderer.createText(this._el_7, '\n        ', null);
        this._text_14 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_15 = this.renderer.createElement(this._el_2, 'button', null);
        this.renderer.setElementAttribute(this._el_15, 'class', 'btn btn-primary');
        this.renderer.setElementAttribute(this._el_15, 'type', 'submit');
        this._text_16 = this.renderer.createText(this._el_15, 'Find', null);
        this._text_17 = this.renderer.createText(this._el_2, '\n\n\n\n        ', null);
        this._anchor_18 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._appEl_18 = new import2.AppElement(18, 2, this, this._anchor_18);
        this._TemplateRef_18_5 = new import18.TemplateRef_(this._appEl_18, viewFactory_OpponentComponentFind1);
        this._NgIf_18_6 = new import16.NgIf(this._appEl_18.vcRef, this._TemplateRef_18_5);
        this._text_19 = this.renderer.createText(this._el_2, '\n        ', null);
        this._anchor_20 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._appEl_20 = new import2.AppElement(20, 2, this, this._anchor_20);
        this._TemplateRef_20_5 = new import18.TemplateRef_(this._appEl_20, viewFactory_OpponentComponentFind2);
        this._NgIf_20_6 = new import16.NgIf(this._appEl_20.vcRef, this._TemplateRef_20_5);
        this._text_21 = this.renderer.createText(this._el_2, '\n\n\n\n    ', null);
        this._text_22 = this.renderer.createText(this._el_0, '\n\n', null);
        this._text_23 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        var disposable_0 = this.renderer.listen(this._el_2, 'ngSubmit', this.eventHandler(this._handle_ngSubmit_2_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_2, 'submit', this.eventHandler(this._handle_submit_2_1.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_2, 'reset', this.eventHandler(this._handle_reset_2_2.bind(this)));
        this._expr_3 = import7.UNINITIALIZED;
        var subscription_0 = this._FormGroupDirective_2_3.ngSubmit.subscribe(this.eventHandler(this._handle_ngSubmit_2_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        var disposable_3 = this.renderer.listen(this._el_12, 'input', this.eventHandler(this._handle_input_12_0.bind(this)));
        var disposable_4 = this.renderer.listen(this._el_12, 'blur', this.eventHandler(this._handle_blur_12_1.bind(this)));
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        this._expr_15 = import7.UNINITIALIZED;
        this._expr_16 = import7.UNINITIALIZED;
        this._expr_17 = import7.UNINITIALIZED;
        this._expr_18 = import7.UNINITIALIZED;
        this._expr_19 = import7.UNINITIALIZED;
        this._expr_20 = import7.UNINITIALIZED;
        this._expr_21 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._anchor_18,
            this._text_19,
            this._anchor_20,
            this._text_21,
            this._text_22,
            this._text_23
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4
        ], [subscription_0]);
        return null;
    };
    _View_OpponentComponentFind0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.DefaultValueAccessor) && (12 === requestNodeIndex))) {
            return this._DefaultValueAccessor_12_3;
        }
        if (((token === import19.NG_VALUE_ACCESSOR) && (12 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_12_4;
        }
        if (((token === import15.FormControlName) && (12 === requestNodeIndex))) {
            return this._FormControlName_12_5;
        }
        if (((token === import20.NgControl) && (12 === requestNodeIndex))) {
            return this._NgControl_12_6;
        }
        if (((token === import13.NgControlStatus) && (12 === requestNodeIndex))) {
            return this._NgControlStatus_12_7;
        }
        if (((token === import18.TemplateRef) && (18 === requestNodeIndex))) {
            return this._TemplateRef_18_5;
        }
        if (((token === import16.NgIf) && (18 === requestNodeIndex))) {
            return this._NgIf_18_6;
        }
        if (((token === import18.TemplateRef) && (20 === requestNodeIndex))) {
            return this._TemplateRef_20_5;
        }
        if (((token === import16.NgIf) && (20 === requestNodeIndex))) {
            return this._NgIf_20_6;
        }
        if (((token === import12.FormGroupDirective) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._FormGroupDirective_2_3;
        }
        if (((token === import21.ControlContainer) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._ControlContainer_2_4;
        }
        if (((token === import13.NgControlStatusGroup) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._NgControlStatusGroup_2_5;
        }
        return notFoundResult;
    };
    _View_OpponentComponentFind0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_3 = this.context.myForm;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._FormGroupDirective_2_3.form = currVal_3;
            if ((changes === null)) {
                (changes = {});
            }
            changes['form'] = new import7.SimpleChange(this._expr_3, currVal_3);
            this._expr_3 = currVal_3;
        }
        if ((changes !== null)) {
            this._FormGroupDirective_2_3.ngOnChanges(changes);
        }
        changes = null;
        var currVal_12 = 'userName';
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this._FormControlName_12_5.name = currVal_12;
            if ((changes === null)) {
                (changes = {});
            }
            changes['name'] = new import7.SimpleChange(this._expr_12, currVal_12);
            this._expr_12 = currVal_12;
        }
        if ((changes !== null)) {
            this._FormControlName_12_5.ngOnChanges(changes);
        }
        var currVal_20 = (this.context.userName && this.context.searched);
        if (import4.checkBinding(throwOnChange, this._expr_20, currVal_20)) {
            this._NgIf_18_6.ngIf = currVal_20;
            this._expr_20 = currVal_20;
        }
        var currVal_21 = (!this.context.userName && this.context.searched);
        if (import4.checkBinding(throwOnChange, this._expr_21, currVal_21)) {
            this._NgIf_20_6.ngIf = currVal_21;
            this._expr_21 = currVal_21;
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_4 = this._NgControlStatusGroup_2_5.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_2, 'ng-untouched', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this._NgControlStatusGroup_2_5.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_2, 'ng-touched', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this._NgControlStatusGroup_2_5.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_2, 'ng-pristine', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._NgControlStatusGroup_2_5.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_2, 'ng-dirty', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = this._NgControlStatusGroup_2_5.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_2, 'ng-valid', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this._NgControlStatusGroup_2_5.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_2, 'ng-invalid', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_13 = this._NgControlStatus_12_7.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setElementClass(this._el_12, 'ng-untouched', currVal_13);
            this._expr_13 = currVal_13;
        }
        var currVal_14 = this._NgControlStatus_12_7.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementClass(this._el_12, 'ng-touched', currVal_14);
            this._expr_14 = currVal_14;
        }
        var currVal_15 = this._NgControlStatus_12_7.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setElementClass(this._el_12, 'ng-pristine', currVal_15);
            this._expr_15 = currVal_15;
        }
        var currVal_16 = this._NgControlStatus_12_7.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setElementClass(this._el_12, 'ng-dirty', currVal_16);
            this._expr_16 = currVal_16;
        }
        var currVal_17 = this._NgControlStatus_12_7.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this.renderer.setElementClass(this._el_12, 'ng-valid', currVal_17);
            this._expr_17 = currVal_17;
        }
        var currVal_18 = this._NgControlStatus_12_7.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setElementClass(this._el_12, 'ng-invalid', currVal_18);
            this._expr_18 = currVal_18;
        }
        var currVal_19 = !this.context.myForm.valid;
        if (import4.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this.renderer.setElementProperty(this._el_15, 'disabled', currVal_19);
            this._expr_19 = currVal_19;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_OpponentComponentFind0.prototype.destroyInternal = function () {
        this._FormControlName_12_5.ngOnDestroy();
    };
    _View_OpponentComponentFind0.prototype._handle_ngSubmit_2_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.onSubmit() !== false);
        return (true && pd_0);
    };
    _View_OpponentComponentFind0.prototype._handle_submit_2_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._FormGroupDirective_2_3.onSubmit() !== false);
        return (true && pd_0);
    };
    _View_OpponentComponentFind0.prototype._handle_reset_2_2 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._FormGroupDirective_2_3.onReset() !== false);
        return (true && pd_0);
    };
    _View_OpponentComponentFind0.prototype._handle_input_12_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._DefaultValueAccessor_12_3.onChange($event.target.value) !== false);
        return (true && pd_0);
    };
    _View_OpponentComponentFind0.prototype._handle_blur_12_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._DefaultValueAccessor_12_3.onTouched() !== false);
        return (true && pd_0);
    };
    return _View_OpponentComponentFind0;
}(import1.AppView));
export function viewFactory_OpponentComponentFind0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_OpponentComponentFind === null)) {
        (renderType_OpponentComponentFind = viewUtils.createRenderComponentType('C:/Users/alex/WebstormProjects/footbalQuiz/assets/app/MainApp/opponent-find/opponent-find.component.html', 0, import10.ViewEncapsulation.None, styles_OpponentComponentFind, {}));
    }
    return new _View_OpponentComponentFind0(viewUtils, parentInjector, declarationEl);
}
var _View_OpponentComponentFind1 = (function (_super) {
    __extends(_View_OpponentComponentFind1, _super);
    function _View_OpponentComponentFind1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_OpponentComponentFind1, renderType_OpponentComponentFind, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_OpponentComponentFind1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'p', null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n               ', null);
        this._el_5 = this.renderer.createElement(this._el_0, 'button', null);
        this.renderer.setElementAttribute(this._el_5, 'class', 'btn btn-primary');
        this.renderer.setElementAttribute(this._el_5, 'type', 'button');
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n        ', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_5, 'click', this.eventHandler(this._handle_click_5_0.bind(this)));
        this._expr_3 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7
        ], [disposable_0], []);
        return null;
    };
    _View_OpponentComponentFind1.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(1, '\n            ', this.parent.context.inviteId, '\n              ');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_1, currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = import4.interpolate(1, 'User Found : ', this.parent.context.userName, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_3, currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_3 = import4.interpolate(1, 'Play with : ', this.parent.context.userName, '');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_6, currVal_3);
            this._expr_3 = currVal_3;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_OpponentComponentFind1.prototype._handle_click_5_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.playWith(this.parent.context.inviteId) !== false);
        return (true && pd_0);
    };
    return _View_OpponentComponentFind1;
}(import1.AppView));
function viewFactory_OpponentComponentFind1(viewUtils, parentInjector, declarationEl) {
    return new _View_OpponentComponentFind1(viewUtils, parentInjector, declarationEl);
}
var _View_OpponentComponentFind2 = (function (_super) {
    __extends(_View_OpponentComponentFind2, _super);
    function _View_OpponentComponentFind2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_OpponentComponentFind2, renderType_OpponentComponentFind, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_OpponentComponentFind2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, 'User Not Found', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    return _View_OpponentComponentFind2;
}(import1.AppView));
function viewFactory_OpponentComponentFind2(viewUtils, parentInjector, declarationEl) {
    return new _View_OpponentComponentFind2(viewUtils, parentInjector, declarationEl);
}
