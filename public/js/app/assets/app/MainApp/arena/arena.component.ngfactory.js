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
import * as import3 from './arena.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../../auth/auth.service';
import * as import9 from '../game-list/game-list.services';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '@angular/common/src/directives/ng_if';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from '../opponent-find/opponent-find.component';
import * as import15 from '../game-list/game-list.component';
import * as import16 from '../opponent-find/opponent-find.component.ngfactory';
import * as import17 from '../opponent-find/opponent-find.sevices';
import * as import18 from '../socketHanding/socket.service';
import * as import19 from '../game-list/game-list.component.ngfactory';
import * as import20 from '../../questions/arena-playing.component';
import * as import21 from '../../questions/arena-playing.component.ngfactory';
import * as import22 from '../../questions/questionServices/questionAnswer.service';
import * as import23 from '../../questions/questionServices/arena.service';
var renderType_ArenaComponent_Host = null;
var _View_ArenaComponent_Host0 = (function (_super) {
    __extends(_View_ArenaComponent_Host0, _super);
    function _View_ArenaComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ArenaComponent_Host0, renderType_ArenaComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ArenaComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('my-arena', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ArenaComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ArenaComponent_0_4 = new import3.ArenaComponent(this.parentInjector.get(import8.AuthService), this.parentInjector.get(import9.GameListServices));
        this._appEl_0.initComponent(this._ArenaComponent_0_4, [], compView_0);
        compView_0.create(this._ArenaComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ArenaComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ArenaComponent) && (0 === requestNodeIndex))) {
            return this._ArenaComponent_0_4;
        }
        return notFoundResult;
    };
    _View_ArenaComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._ArenaComponent_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ArenaComponent_Host0;
}(import1.AppView));
function viewFactory_ArenaComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ArenaComponent_Host === null)) {
        (renderType_ArenaComponent_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_ArenaComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var ArenaComponentNgFactory = new import11.ComponentFactory('my-arena', viewFactory_ArenaComponent_Host0, import3.ArenaComponent);
var styles_ArenaComponent = [];
var renderType_ArenaComponent = null;
var _View_ArenaComponent0 = (function (_super) {
    __extends(_View_ArenaComponent0, _super);
    function _View_ArenaComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ArenaComponent0, renderType_ArenaComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ArenaComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._anchor_0);
        this._TemplateRef_0_5 = new import13.TemplateRef_(this._appEl_0, viewFactory_ArenaComponent1);
        this._NgIf_0_6 = new import12.NgIf(this._appEl_0.vcRef, this._TemplateRef_0_5);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n   ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_2 = new import2.AppElement(2, null, this, this._anchor_2);
        this._TemplateRef_2_5 = new import13.TemplateRef_(this._appEl_2, viewFactory_ArenaComponent2);
        this._NgIf_2_6 = new import12.NgIf(this._appEl_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this.init([], [
            this._anchor_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ], [], []);
        return null;
    };
    _View_ArenaComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (0 === requestNodeIndex))) {
            return this._TemplateRef_0_5;
        }
        if (((token === import12.NgIf) && (0 === requestNodeIndex))) {
            return this._NgIf_0_6;
        }
        if (((token === import13.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import12.NgIf) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6;
        }
        return notFoundResult;
    };
    _View_ArenaComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = (this.context.isUserPlaying == false);
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgIf_0_6.ngIf = currVal_0;
            this._expr_0 = currVal_0;
        }
        var currVal_1 = (this.context.isUserPlaying == true);
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgIf_2_6.ngIf = currVal_1;
            this._expr_1 = currVal_1;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ArenaComponent0;
}(import1.AppView));
export function viewFactory_ArenaComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ArenaComponent === null)) {
        (renderType_ArenaComponent = viewUtils.createRenderComponentType('C:/Users/alex/WebstormProjects/footbalQuiz/assets/app/MainApp/arena/arena.component.ts class ArenaComponent - inline template', 0, import10.ViewEncapsulation.None, styles_ArenaComponent, {}));
    }
    return new _View_ArenaComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_ArenaComponent1 = (function (_super) {
    __extends(_View_ArenaComponent1, _super);
    function _View_ArenaComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ArenaComponent1, renderType_ArenaComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ArenaComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'row');
        this._text_1 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'col-md-5');
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'h1', null);
        this._text_5 = this.renderer.createText(this._el_4, '', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_7 = this.renderer.createElement(this._el_2, 'opponent-find', null);
        this._appEl_7 = new import2.AppElement(7, 2, this, this._el_7);
        var compView_7 = import16.viewFactory_OpponentComponentFind0(this.viewUtils, this.injector(7), this._appEl_7);
        this._OpponentComponentFind_7_4 = new import14.OpponentComponentFind(this.parentInjector.get(import17.OpponentFindService), this.parentInjector.get(import18.SocketService));
        this._appEl_7.initComponent(this._OpponentComponentFind_7_4, [], compView_7);
        compView_7.create(this._OpponentComponentFind_7_4, [], null);
        this._text_8 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_9 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_10 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_10, 'class', 'col-md-7');
        this._text_11 = this.renderer.createText(this._el_10, '\n        ', null);
        this._el_12 = this.renderer.createElement(this._el_10, 'game-list', null);
        this._appEl_12 = new import2.AppElement(12, 10, this, this._el_12);
        var compView_12 = import19.viewFactory_GameListcomponent0(this.viewUtils, this.injector(12), this._appEl_12);
        this._GameListcomponent_12_4 = new import15.GameListcomponent(this.parentInjector.get(import18.SocketService), this.parentInjector.get(import8.AuthService));
        this._appEl_12.initComponent(this._GameListcomponent_12_4, [], compView_12);
        compView_12.create(this._GameListcomponent_12_4, [], null);
        this._text_13 = this.renderer.createText(this._el_10, '\n    ', null);
        this._text_14 = this.renderer.createText(this._el_0, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14
        ], [], []);
        return null;
    };
    _View_ArenaComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.OpponentComponentFind) && (7 === requestNodeIndex))) {
            return this._OpponentComponentFind_7_4;
        }
        if (((token === import15.GameListcomponent) && (12 === requestNodeIndex))) {
            return this._GameListcomponent_12_4;
        }
        return notFoundResult;
    };
    _View_ArenaComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._OpponentComponentFind_7_4.ngOnInit();
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._GameListcomponent_12_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(1, '', this.parent.context.userName, '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_5, currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ArenaComponent1.prototype.destroyInternal = function () {
        this._GameListcomponent_12_4.ngOnDestroy();
    };
    return _View_ArenaComponent1;
}(import1.AppView));
function viewFactory_ArenaComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_ArenaComponent1(viewUtils, parentInjector, declarationEl);
}
var _View_ArenaComponent2 = (function (_super) {
    __extends(_View_ArenaComponent2, _super);
    function _View_ArenaComponent2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ArenaComponent2, renderType_ArenaComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ArenaComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'row');
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'col-md-5');
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'arena-playing', null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import21.viewFactory_ArenaPlayingComponent0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ArenaPlayingComponent_4_4 = new import20.ArenaPlayingComponent(this.parentInjector.get(import22.QuestionAnswerServices), this.parentInjector.get(import8.AuthService), this.parentInjector.get(import23.ArenaServices), this.parentInjector.get(import18.SocketService), this.parentInjector.get(import9.GameListServices));
        this._appEl_4.initComponent(this._ArenaPlayingComponent_4_4, [], compView_4);
        compView_4.create(this._ArenaPlayingComponent_4_4, [], null);
        this._text_5 = this.renderer.createText(this._el_2, '\n        ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n    ', null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6
        ], [], []);
        return null;
    };
    _View_ArenaComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import20.ArenaPlayingComponent) && (4 === requestNodeIndex))) {
            return this._ArenaPlayingComponent_4_4;
        }
        return notFoundResult;
    };
    _View_ArenaComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.parent.context.arenas;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._ArenaPlayingComponent_4_4.arenas = currVal_0;
            this._expr_0 = currVal_0;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._ArenaPlayingComponent_4_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ArenaComponent2.prototype.destroyInternal = function () {
        this._ArenaPlayingComponent_4_4.ngOnDestroy();
    };
    return _View_ArenaComponent2;
}(import1.AppView));
function viewFactory_ArenaComponent2(viewUtils, parentInjector, declarationEl) {
    return new _View_ArenaComponent2(viewUtils, parentInjector, declarationEl);
}