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
import * as import3 from './arena-playing.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from './questionServices/questionAnswer.service';
import * as import9 from '../auth/auth.service';
import * as import10 from './questionServices/arena.service';
import * as import11 from '../MainApp/socketHanding/socket.service';
import * as import12 from '../MainApp/game-list/game-list.services';
import * as import13 from '@angular/core/src/metadata/view';
import * as import14 from '@angular/core/src/linker/component_factory';
import * as import15 from '@angular/core/src/linker/query_list';
import * as import16 from '@angular/common/src/directives/ng_if';
import * as import17 from 'ng2-bs3-modal/components/modal';
import * as import18 from 'ng2-bs3-modal/components/modal-header';
import * as import19 from 'ng2-bs3-modal/components/modal-body';
import * as import20 from 'ng2-bs3-modal/components/modal-footer';
import * as import21 from '@angular/core/src/linker/template_ref';
import * as import22 from '../../../node_modules/ng2-bs3-modal/components/modal.ngfactory';
import * as import23 from '@angular/core/src/linker/element_ref';
import * as import24 from '../../../node_modules/ng2-bs3-modal/components/modal-header.ngfactory';
import * as import25 from '../../../node_modules/ng2-bs3-modal/components/modal-body.ngfactory';
import * as import26 from '../../../node_modules/ng2-bs3-modal/components/modal-footer.ngfactory';
import * as import27 from '@angular/common/src/directives/ng_for';
import * as import28 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import29 from '@angular/core/src/security';
var renderType_ArenaPlayingComponent_Host = null;
var _View_ArenaPlayingComponent_Host0 = (function (_super) {
    __extends(_View_ArenaPlayingComponent_Host0, _super);
    function _View_ArenaPlayingComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ArenaPlayingComponent_Host0, renderType_ArenaPlayingComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ArenaPlayingComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('arena-playing', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ArenaPlayingComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ArenaPlayingComponent_0_4 = new import3.ArenaPlayingComponent(this.parentInjector.get(import8.QuestionAnswerServices), this.parentInjector.get(import9.AuthService), this.parentInjector.get(import10.ArenaServices), this.parentInjector.get(import11.SocketService), this.parentInjector.get(import12.GameListServices), this.renderer);
        this._appEl_0.initComponent(this._ArenaPlayingComponent_0_4, [], compView_0);
        compView_0.create(this._ArenaPlayingComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ArenaPlayingComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ArenaPlayingComponent) && (0 === requestNodeIndex))) {
            return this._ArenaPlayingComponent_0_4;
        }
        return notFoundResult;
    };
    _View_ArenaPlayingComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._ArenaPlayingComponent_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._ArenaPlayingComponent_0_4.ngAfterViewInit();
            }
        }
    };
    _View_ArenaPlayingComponent_Host0.prototype.destroyInternal = function () {
        this._ArenaPlayingComponent_0_4.ngOnDestroy();
    };
    return _View_ArenaPlayingComponent_Host0;
}(import1.AppView));
function viewFactory_ArenaPlayingComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ArenaPlayingComponent_Host === null)) {
        (renderType_ArenaPlayingComponent_Host = viewUtils.createRenderComponentType('', 0, import13.ViewEncapsulation.None, [], {}));
    }
    return new _View_ArenaPlayingComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var ArenaPlayingComponentNgFactory = new import14.ComponentFactory('arena-playing', viewFactory_ArenaPlayingComponent_Host0, import3.ArenaPlayingComponent);
var styles_ArenaPlayingComponent = [];
var renderType_ArenaPlayingComponent = null;
var _View_ArenaPlayingComponent0 = (function (_super) {
    __extends(_View_ArenaPlayingComponent0, _super);
    function _View_ArenaPlayingComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ArenaPlayingComponent0, renderType_ArenaPlayingComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ArenaPlayingComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._viewQuery_myModal_0 = new import15.QueryList();
        this._viewQuery_button1_1 = new import15.QueryList();
        this._viewQuery_button2_2 = new import15.QueryList();
        this._viewQuery_button3_3 = new import15.QueryList();
        this._viewQuery_button4_4 = new import15.QueryList();
        this._el_0 = this.renderer.createElement(parentRenderNode, 'h3', null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_3 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_3 = new import2.AppElement(3, null, this, this._anchor_3);
        this._TemplateRef_3_5 = new import21.TemplateRef_(this._appEl_3, viewFactory_ArenaPlayingComponent1);
        this._NgIf_3_6 = new import16.NgIf(this._appEl_3.vcRef, this._TemplateRef_3_5);
        this._text_4 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_5 = this.renderer.createElement(parentRenderNode, 'modal', null);
        this.renderer.setElementAttribute(this._el_5, 'class', 'modal');
        this.renderer.setElementAttribute(this._el_5, 'role', 'dialog');
        this.renderer.setElementAttribute(this._el_5, 'tabindex', '-1');
        this._appEl_5 = new import2.AppElement(5, null, this, this._el_5);
        var compView_5 = import22.viewFactory_ModalComponent0(this.viewUtils, this.injector(5), this._appEl_5);
        this._ModalComponent_5_4 = new import17.ModalComponent(new import23.ElementRef(this._el_5));
        this._appEl_5.initComponent(this._ModalComponent_5_4, [], compView_5);
        this._text_6 = this.renderer.createText(null, '\n    ', null);
        this._el_7 = this.renderer.createElement(null, 'modal-header', null);
        this._appEl_7 = new import2.AppElement(7, 5, this, this._el_7);
        var compView_7 = import24.viewFactory_ModalHeaderComponent0(this.viewUtils, this.injector(7), this._appEl_7);
        this._ModalHeaderComponent_7_4 = new import18.ModalHeaderComponent(this._ModalComponent_5_4);
        this._appEl_7.initComponent(this._ModalHeaderComponent_7_4, [], compView_7);
        this._text_8 = this.renderer.createText(null, '\n        ', null);
        this._el_9 = this.renderer.createElement(null, 'h4', null);
        this.renderer.setElementAttribute(this._el_9, 'class', 'modal-title');
        this._text_10 = this.renderer.createText(this._el_9, 'I\'m a modal!', null);
        this._text_11 = this.renderer.createText(null, '\n    ', null);
        compView_7.create(this._ModalHeaderComponent_7_4, [[].concat([
                this._text_8,
                this._el_9,
                this._text_11
            ])], null);
        this._text_12 = this.renderer.createText(null, '\n    ', null);
        this._el_13 = this.renderer.createElement(null, 'modal-body', null);
        this._appEl_13 = new import2.AppElement(13, 5, this, this._el_13);
        var compView_13 = import25.viewFactory_ModalBodyComponent0(this.viewUtils, this.injector(13), this._appEl_13);
        this._ModalBodyComponent_13_4 = new import19.ModalBodyComponent();
        this._appEl_13.initComponent(this._ModalBodyComponent_13_4, [], compView_13);
        this._text_14 = this.renderer.createText(null, '\n        Sorry,you lost! You answered correct :\n    ', null);
        compView_13.create(this._ModalBodyComponent_13_4, [[].concat([this._text_14])], null);
        this._text_15 = this.renderer.createText(null, '\n    ', null);
        this._el_16 = this.renderer.createElement(null, 'modal-footer', null);
        this._appEl_16 = new import2.AppElement(16, 5, this, this._el_16);
        var compView_16 = import26.viewFactory_ModalFooterComponent0(this.viewUtils, this.injector(16), this._appEl_16);
        this._ModalFooterComponent_16_4 = new import20.ModalFooterComponent(this._ModalComponent_5_4);
        this._appEl_16.initComponent(this._ModalFooterComponent_16_4, [], compView_16);
        this._text_17 = this.renderer.createText(null, '\n        ', null);
        this._el_18 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_18, 'class', 'btn btn-primary');
        this.renderer.setElementAttribute(this._el_18, 'type', 'button');
        this._text_19 = this.renderer.createText(this._el_18, 'Ok', null);
        this._text_20 = this.renderer.createText(null, '\n    ', null);
        compView_16.create(this._ModalFooterComponent_16_4, [[].concat([
                this._text_17,
                this._el_18,
                this._text_20
            ])], null);
        compView_5.create(this._ModalComponent_5_4, [[].concat([
                this._text_6,
                this._el_7,
                this._text_12,
                this._el_13,
                this._text_15,
                this._el_16
            ])], null);
        this._text_21 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_18, 'click', this.eventHandler(this._handle_click_18_0.bind(this)));
        this._viewQuery_myModal_0.reset([this._ModalComponent_5_4]);
        this.context.modal = this._viewQuery_myModal_0.first;
        this.init([], [
            this._el_0,
            this._text_1,
            this._text_2,
            this._anchor_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._text_21
        ], [disposable_0], []);
        return null;
    };
    _View_ArenaPlayingComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import21.TemplateRef) && (3 === requestNodeIndex))) {
            return this._TemplateRef_3_5;
        }
        if (((token === import16.NgIf) && (3 === requestNodeIndex))) {
            return this._NgIf_3_6;
        }
        if (((token === import18.ModalHeaderComponent) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._ModalHeaderComponent_7_4;
        }
        if (((token === import19.ModalBodyComponent) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._ModalBodyComponent_13_4;
        }
        if (((token === import20.ModalFooterComponent) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._ModalFooterComponent_16_4;
        }
        if (((token === import17.ModalComponent) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._ModalComponent_5_4;
        }
        return notFoundResult;
    };
    _View_ArenaPlayingComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = !this.context.isLost;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgIf_3_6.ngIf = currVal_1;
            this._expr_1 = currVal_1;
        }
        var currVal_2 = 'static';
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._ModalComponent_5_4.backdrop = currVal_2;
            this._expr_2 = currVal_2;
        }
        var currVal_3 = false;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._ModalComponent_5_4.keyboard = currVal_3;
            this._expr_3 = currVal_3;
        }
        var currVal_7 = false;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this._ModalHeaderComponent_7_4.showClose = currVal_7;
            this._expr_7 = currVal_7;
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(1, '', this.context.userName, ' you are playing....');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_1, currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_4 = this._ModalComponent_5_4.fadeClass;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_5, 'fade', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this._ModalComponent_5_4.dataKeyboardAttr;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementAttribute(this._el_5, 'data-keyboard', ((currVal_5 == null) ? null : currVal_5.toString()));
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this._ModalComponent_5_4.dataBackdropAttr;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementAttribute(this._el_5, 'data-backdrop', ((currVal_6 == null) ? null : currVal_6.toString()));
            this._expr_6 = currVal_6;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._viewQuery_button1_1.dirty) {
                this._viewQuery_button1_1.reset([this._appEl_3.mapNestedViews(_View_ArenaPlayingComponent1, function (nestedView) {
                        return [nestedView._appEl_11.mapNestedViews(_View_ArenaPlayingComponent2, function (nestedView) {
                                return [nestedView._appEl_2.mapNestedViews(_View_ArenaPlayingComponent3, function (nestedView) {
                                        return [new import23.ElementRef(nestedView._el_18)];
                                    })];
                            })];
                    })]);
                this.context.el = this._viewQuery_button1_1.first;
            }
            if (this._viewQuery_button2_2.dirty) {
                this._viewQuery_button2_2.reset([this._appEl_3.mapNestedViews(_View_ArenaPlayingComponent1, function (nestedView) {
                        return [nestedView._appEl_11.mapNestedViews(_View_ArenaPlayingComponent2, function (nestedView) {
                                return [nestedView._appEl_2.mapNestedViews(_View_ArenaPlayingComponent3, function (nestedView) {
                                        return [new import23.ElementRef(nestedView._el_24)];
                                    })];
                            })];
                    })]);
                this.context.el1 = this._viewQuery_button2_2.first;
            }
            if (this._viewQuery_button3_3.dirty) {
                this._viewQuery_button3_3.reset([this._appEl_3.mapNestedViews(_View_ArenaPlayingComponent1, function (nestedView) {
                        return [nestedView._appEl_11.mapNestedViews(_View_ArenaPlayingComponent2, function (nestedView) {
                                return [nestedView._appEl_2.mapNestedViews(_View_ArenaPlayingComponent3, function (nestedView) {
                                        return [new import23.ElementRef(nestedView._el_37)];
                                    })];
                            })];
                    })]);
                this.context.el2 = this._viewQuery_button3_3.first;
            }
            if (this._viewQuery_button4_4.dirty) {
                this._viewQuery_button4_4.reset([this._appEl_3.mapNestedViews(_View_ArenaPlayingComponent1, function (nestedView) {
                        return [nestedView._appEl_11.mapNestedViews(_View_ArenaPlayingComponent2, function (nestedView) {
                                return [nestedView._appEl_2.mapNestedViews(_View_ArenaPlayingComponent3, function (nestedView) {
                                        return [new import23.ElementRef(nestedView._el_43)];
                                    })];
                            })];
                    })]);
                this.context.el3 = this._viewQuery_button4_4.first;
            }
        }
    };
    _View_ArenaPlayingComponent0.prototype.destroyInternal = function () {
        this._ModalComponent_5_4.ngOnDestroy();
    };
    _View_ArenaPlayingComponent0.prototype._handle_click_18_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.close() !== false);
        return (true && pd_0);
    };
    return _View_ArenaPlayingComponent0;
}(import1.AppView));
export function viewFactory_ArenaPlayingComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ArenaPlayingComponent === null)) {
        (renderType_ArenaPlayingComponent = viewUtils.createRenderComponentType('C:/Users/alex/WebstormProjects/footbalQuiz/assets/app/questions/arena-playing.component.html', 0, import13.ViewEncapsulation.None, styles_ArenaPlayingComponent, {}));
    }
    return new _View_ArenaPlayingComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_ArenaPlayingComponent1 = (function (_super) {
    __extends(_View_ArenaPlayingComponent1, _super);
    function _View_ArenaPlayingComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ArenaPlayingComponent1, renderType_ArenaPlayingComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ArenaPlayingComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'container');
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'div', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'progress');
        this._text_5 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_6 = this.renderer.createElement(this._el_4, 'div', null);
        this.renderer.setElementAttribute(this._el_6, 'aria-valuemax', '30');
        this.renderer.setElementAttribute(this._el_6, 'aria-valuemin', '0');
        this.renderer.setElementAttribute(this._el_6, 'class', 'progress-bar');
        this.renderer.setElementAttribute(this._el_6, 'role', 'progressbar');
        this._text_7 = this.renderer.createText(this._el_6, '\n            ', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_9 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._anchor_11 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_11 = new import2.AppElement(11, 0, this, this._anchor_11);
        this._TemplateRef_11_5 = new import21.TemplateRef_(this._appEl_11, viewFactory_ArenaPlayingComponent2);
        this._NgFor_11_6 = new import27.NgFor(this._appEl_11.vcRef, this._TemplateRef_11_5, this.parentInjector.get(import28.IterableDiffers), this.parent.ref);
        this._text_12 = this.renderer.createText(this._el_0, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._text_9,
            this._text_10,
            this._anchor_11,
            this._text_12
        ], [], []);
        return null;
    };
    _View_ArenaPlayingComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import21.TemplateRef) && (11 === requestNodeIndex))) {
            return this._TemplateRef_11_5;
        }
        if (((token === import27.NgFor) && (11 === requestNodeIndex))) {
            return this._NgFor_11_6;
        }
        return notFoundResult;
    };
    _View_ArenaPlayingComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_2 = this.parent.context.arenaQuestions;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._NgFor_11_6.ngForOf = currVal_2;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_2, currVal_2);
            this._expr_2 = currVal_2;
        }
        if ((changes !== null)) {
            this._NgFor_11_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_11_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = this.parent.context.ticks;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementAttribute(this._el_6, 'aria-valuenow', ((currVal_0 == null) ? null : currVal_0.toString()));
            this._expr_0 = currVal_0;
        }
        var currVal_1 = (this.parent.context.ticks * 3.4);
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementStyle(this._el_6, 'width', ((this.viewUtils.sanitizer.sanitize(import29.SecurityContext.STYLE, currVal_1) == null) ? null : (this.viewUtils.sanitizer.sanitize(import29.SecurityContext.STYLE, currVal_1).toString() + '%')));
            this._expr_1 = currVal_1;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ArenaPlayingComponent1;
}(import1.AppView));
function viewFactory_ArenaPlayingComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_ArenaPlayingComponent1(viewUtils, parentInjector, declarationEl);
}
var _View_ArenaPlayingComponent2 = (function (_super) {
    __extends(_View_ArenaPlayingComponent2, _super);
    function _View_ArenaPlayingComponent2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ArenaPlayingComponent2, renderType_ArenaPlayingComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ArenaPlayingComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'row');
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_2 = new import2.AppElement(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import21.TemplateRef_(this._appEl_2, viewFactory_ArenaPlayingComponent3);
        this._NgIf_2_6 = new import16.NgIf(this._appEl_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ], [], []);
        return null;
    };
    _View_ArenaPlayingComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import21.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import16.NgIf) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6;
        }
        return notFoundResult;
    };
    _View_ArenaPlayingComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = (this.context.index == this.parent.parent.context.index);
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgIf_2_6.ngIf = currVal_0;
            this._expr_0 = currVal_0;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ArenaPlayingComponent2;
}(import1.AppView));
function viewFactory_ArenaPlayingComponent2(viewUtils, parentInjector, declarationEl) {
    return new _View_ArenaPlayingComponent2(viewUtils, parentInjector, declarationEl);
}
var _View_ArenaPlayingComponent3 = (function (_super) {
    __extends(_View_ArenaPlayingComponent3, _super);
    function _View_ArenaPlayingComponent3(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ArenaPlayingComponent3, renderType_ArenaPlayingComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ArenaPlayingComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'col-xs-12');
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'row');
        this._text_3 = this.renderer.createText(this._el_2, '\n                ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'div', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'col-xs-12 ');
        this._text_5 = this.renderer.createText(this._el_4, '\n                    ', null);
        this._el_6 = this.renderer.createElement(this._el_4, 'h1', null);
        this.renderer.setElementAttribute(this._el_6, 'onload', '');
        this._text_7 = this.renderer.createText(this._el_6, '', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n                ', null);
        this._text_9 = this.renderer.createText(this._el_2, '\n            ', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_11 = this.renderer.createElement(this._el_0, 'br', null);
        this._el_12 = this.renderer.createElement(this._el_0, 'br', null);
        this._text_13 = this.renderer.createText(this._el_0, '\n\n            ', null);
        this._el_14 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_14, 'class', 'row');
        this._text_15 = this.renderer.createText(this._el_14, '\n                ', null);
        this._el_16 = this.renderer.createElement(this._el_14, 'div', null);
        this.renderer.setElementAttribute(this._el_16, 'class', 'col-xs-1 col-sm-offset-4');
        this._text_17 = this.renderer.createText(this._el_16, '\n                    ', null);
        this._el_18 = this.renderer.createElement(this._el_16, 'button', null);
        this.renderer.setElementAttribute(this._el_18, 'class', 'btn btn-success');
        this.renderer.setElementAttribute(this._el_18, 'type', 'submit');
        this._text_19 = this.renderer.createText(this._el_18, '', null);
        this._text_20 = this.renderer.createText(this._el_16, '\n                ', null);
        this._text_21 = this.renderer.createText(this._el_14, '\n                ', null);
        this._el_22 = this.renderer.createElement(this._el_14, 'div', null);
        this.renderer.setElementAttribute(this._el_22, 'class', 'col-xs-1 col-sm-offset-1');
        this._text_23 = this.renderer.createText(this._el_22, '\n                    ', null);
        this._el_24 = this.renderer.createElement(this._el_22, 'button', null);
        this.renderer.setElementAttribute(this._el_24, 'class', 'btn btn-success');
        this.renderer.setElementAttribute(this._el_24, 'type', 'submit');
        this._text_25 = this.renderer.createText(this._el_24, '', null);
        this._text_26 = this.renderer.createText(this._el_22, '\n                ', null);
        this._text_27 = this.renderer.createText(this._el_14, '\n            ', null);
        this._text_28 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_29 = this.renderer.createElement(this._el_0, 'br', null);
        this._text_30 = this.renderer.createText(this._el_0, ' ', null);
        this._el_31 = this.renderer.createElement(this._el_0, 'br', null);
        this._text_32 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_33 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_33, 'class', 'row');
        this._text_34 = this.renderer.createText(this._el_33, '\n                ', null);
        this._el_35 = this.renderer.createElement(this._el_33, 'div', null);
        this.renderer.setElementAttribute(this._el_35, 'class', 'col-xs-1 col-sm-offset-4');
        this._text_36 = this.renderer.createText(this._el_35, '\n                    ', null);
        this._el_37 = this.renderer.createElement(this._el_35, 'button', null);
        this.renderer.setElementAttribute(this._el_37, 'class', 'btn btn-success');
        this.renderer.setElementAttribute(this._el_37, 'type', 'submit');
        this._text_38 = this.renderer.createText(this._el_37, '', null);
        this._text_39 = this.renderer.createText(this._el_35, '\n                ', null);
        this._text_40 = this.renderer.createText(this._el_33, '\n                ', null);
        this._el_41 = this.renderer.createElement(this._el_33, 'div', null);
        this.renderer.setElementAttribute(this._el_41, 'class', 'col-xs-1 col-sm-offset-1');
        this._text_42 = this.renderer.createText(this._el_41, '\n                    ', null);
        this._el_43 = this.renderer.createElement(this._el_41, 'button', null);
        this.renderer.setElementAttribute(this._el_43, 'class', 'btn btn-success');
        this.renderer.setElementAttribute(this._el_43, 'type', 'submit');
        this._text_44 = this.renderer.createText(this._el_43, '', null);
        this._text_45 = this.renderer.createText(this._el_41, '\n                ', null);
        this._text_46 = this.renderer.createText(this._el_33, '\n            ', null);
        this._text_47 = this.renderer.createText(this._el_0, '\n        ', null);
        this._expr_0 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_18, 'click', this.eventHandler(this._handle_click_18_0.bind(this)));
        this._expr_2 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_24, 'click', this.eventHandler(this._handle_click_24_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        var disposable_2 = this.renderer.listen(this._el_37, 'click', this.eventHandler(this._handle_click_37_0.bind(this)));
        this._expr_6 = import7.UNINITIALIZED;
        var disposable_3 = this.renderer.listen(this._el_43, 'click', this.eventHandler(this._handle_click_43_0.bind(this)));
        this._expr_8 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._text_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._text_39,
            this._text_40,
            this._el_41,
            this._text_42,
            this._el_43,
            this._text_44,
            this._text_45,
            this._text_46,
            this._text_47
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ], []);
        return null;
    };
    _View_ArenaPlayingComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(2, '\n                        ', this.parent.context.$implicit.question, '  #', this.parent.parent.parent.context.index, '\n                    ');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_7, currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_2 = import4.interpolate(1, '', this.parent.context.$implicit.optiona, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_19, currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_4 = import4.interpolate(1, '', this.parent.context.$implicit.optionb, '');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_25, currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_6 = import4.interpolate(1, '', this.parent.context.$implicit.optionc, '');
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setText(this._text_38, currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_8 = import4.interpolate(1, '', this.parent.context.$implicit.optiond, '');
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setText(this._text_44, currVal_8);
            this._expr_8 = currVal_8;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ArenaPlayingComponent3.prototype.dirtyParentQueriesInternal = function () {
        this.parent.parent.parent._viewQuery_button1_1.setDirty();
        this.parent.parent.parent._viewQuery_button2_2.setDirty();
        this.parent.parent.parent._viewQuery_button3_3.setDirty();
        this.parent.parent.parent._viewQuery_button4_4.setDirty();
    };
    _View_ArenaPlayingComponent3.prototype._handle_click_18_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.parent.parent.context.onChooseQuestion(this.parent.context.$implicit, this.parent.context.$implicit.optiona, 1) !== false);
        return (true && pd_0);
    };
    _View_ArenaPlayingComponent3.prototype._handle_click_24_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.parent.parent.context.onChooseQuestion(this.parent.context.$implicit, this.parent.context.$implicit.optionb, 2) !== false);
        return (true && pd_0);
    };
    _View_ArenaPlayingComponent3.prototype._handle_click_37_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.parent.parent.context.onChooseQuestion(this.parent.context.$implicit, this.parent.context.$implicit.optionc, 3) !== false);
        return (true && pd_0);
    };
    _View_ArenaPlayingComponent3.prototype._handle_click_43_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.parent.parent.context.onChooseQuestion(this.parent.context.$implicit, this.parent.context.$implicit.optiond, 4) !== false);
        return (true && pd_0);
    };
    return _View_ArenaPlayingComponent3;
}(import1.AppView));
function viewFactory_ArenaPlayingComponent3(viewUtils, parentInjector, declarationEl) {
    return new _View_ArenaPlayingComponent3(viewUtils, parentInjector, declarationEl);
}
