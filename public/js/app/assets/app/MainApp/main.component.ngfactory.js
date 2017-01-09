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
import * as import3 from './main.component';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from './socketHanding/socket.service';
import * as import9 from '../auth/auth.service';
import * as import10 from '@angular/router/src/router';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from '@angular/router/src/directives/router_outlet';
import * as import14 from '@angular/router/src/router_outlet_map';
import * as import15 from '@angular/core/src/linker/component_factory_resolver';
var renderType_MainComponent_Host = null;
var _View_MainComponent_Host0 = (function (_super) {
    __extends(_View_MainComponent_Host0, _super);
    function _View_MainComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MainComponent_Host0, renderType_MainComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_MainComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('my-app', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_MainComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._MainComponent_0_4 = new import3.MainComponent(this.parentInjector.get(import8.SocketService), this.parentInjector.get(import9.AuthService), this.parentInjector.get(import10.Router));
        this._appEl_0.initComponent(this._MainComponent_0_4, [], compView_0);
        compView_0.create(this._MainComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_MainComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.MainComponent) && (0 === requestNodeIndex))) {
            return this._MainComponent_0_4;
        }
        return notFoundResult;
    };
    _View_MainComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._MainComponent_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_MainComponent_Host0.prototype.destroyInternal = function () {
        this._MainComponent_0_4.ngOnDestroy();
    };
    return _View_MainComponent_Host0;
}(import1.AppView));
function viewFactory_MainComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_MainComponent_Host === null)) {
        (renderType_MainComponent_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_MainComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var MainComponentNgFactory = new import12.ComponentFactory('my-app', viewFactory_MainComponent_Host0, import3.MainComponent);
var styles_MainComponent = [];
var renderType_MainComponent = null;
var _View_MainComponent0 = (function (_super) {
    __extends(_View_MainComponent0, _super);
    function _View_MainComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MainComponent0, renderType_MainComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_MainComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'router-outlet', null);
        this._appEl_1 = new import2.AppElement(1, null, this, this._el_1);
        this._RouterOutlet_1_5 = new import13.RouterOutlet(this.parentInjector.get(import14.RouterOutletMap), this._appEl_1.vcRef, this.parentInjector.get(import15.ComponentFactoryResolver), null);
        this.init([], [
            this._text_0,
            this._el_1
        ], [], []);
        return null;
    };
    _View_MainComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.RouterOutlet) && (1 === requestNodeIndex))) {
            return this._RouterOutlet_1_5;
        }
        return notFoundResult;
    };
    _View_MainComponent0.prototype.destroyInternal = function () {
        this._RouterOutlet_1_5.ngOnDestroy();
    };
    return _View_MainComponent0;
}(import1.AppView));
export function viewFactory_MainComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_MainComponent === null)) {
        (renderType_MainComponent = viewUtils.createRenderComponentType('C:/Users/alex/WebstormProjects/footbalQuiz/assets/app/MainApp/main.component.html', 0, import11.ViewEncapsulation.None, styles_MainComponent, {}));
    }
    return new _View_MainComponent0(viewUtils, parentInjector, declarationEl);
}