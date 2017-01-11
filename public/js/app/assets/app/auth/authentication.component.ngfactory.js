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
import * as import3 from './authentication.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from './auth.service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '../header.component';
import * as import12 from '@angular/common/src/directives/ng_if';
import * as import13 from '@angular/router/src/directives/router_outlet';
import * as import14 from '../header.component.ngfactory';
import * as import15 from '@angular/core/src/linker/template_ref';
import * as import16 from '@angular/router/src/router_outlet_map';
import * as import17 from '@angular/core/src/linker/component_factory_resolver';
import * as import18 from '@angular/router/src/directives/router_link_active';
import * as import19 from '@angular/core/src/linker/query_list';
import * as import20 from '@angular/router/src/directives/router_link';
import * as import21 from '@angular/router/src/router';
import * as import22 from '@angular/core/src/linker/element_ref';
import * as import23 from '@angular/router/src/router_state';
import * as import24 from '@angular/common/src/location/location_strategy';
import * as import25 from '@angular/core/src/security';
var renderType_AuthenticationComponent_Host = null;
var _View_AuthenticationComponent_Host0 = (function (_super) {
    __extends(_View_AuthenticationComponent_Host0, _super);
    function _View_AuthenticationComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AuthenticationComponent_Host0, renderType_AuthenticationComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AuthenticationComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('app-authenticatiom', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_AuthenticationComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._AuthenticationComponent_0_4 = new import3.AuthenticationComponent(this.parentInjector.get(import8.AuthService));
        this._appEl_0.initComponent(this._AuthenticationComponent_0_4, [], compView_0);
        compView_0.create(this._AuthenticationComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_AuthenticationComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.AuthenticationComponent) && (0 === requestNodeIndex))) {
            return this._AuthenticationComponent_0_4;
        }
        return notFoundResult;
    };
    return _View_AuthenticationComponent_Host0;
}(import1.AppView));
function viewFactory_AuthenticationComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AuthenticationComponent_Host === null)) {
        (renderType_AuthenticationComponent_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_AuthenticationComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var AuthenticationComponentNgFactory = new import10.ComponentFactory('app-authenticatiom', viewFactory_AuthenticationComponent_Host0, import3.AuthenticationComponent);
var styles_AuthenticationComponent = [];
var renderType_AuthenticationComponent = null;
var _View_AuthenticationComponent0 = (function (_super) {
    __extends(_View_AuthenticationComponent0, _super);
    function _View_AuthenticationComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AuthenticationComponent0, renderType_AuthenticationComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AuthenticationComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n        ', null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'app-header', null);
        this._appEl_1 = new import2.AppElement(1, null, this, this._el_1);
        var compView_1 = import14.viewFactory_HeaderComponent0(this.viewUtils, this.injector(1), this._appEl_1);
        this._HeaderComponent_1_4 = new import11.HeaderComponent(this.parentInjector.get(import8.AuthService));
        this._appEl_1.initComponent(this._HeaderComponent_1_4, [], compView_1);
        compView_1.create(this._HeaderComponent_1_4, [], null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n\n        ', null);
        this._el_3 = this.renderer.createElement(parentRenderNode, 'header', null);
        this.renderer.setElementAttribute(this._el_3, 'class', 'row spacing');
        this._text_4 = this.renderer.createText(this._el_3, '\n	                ', null);
        this._el_5 = this.renderer.createElement(this._el_3, 'nav', null);
        this.renderer.setElementAttribute(this._el_5, 'class', 'col-md-8 col-md-offset-2');
        this._text_6 = this.renderer.createText(this._el_5, '\n	                    ', null);
        this._el_7 = this.renderer.createElement(this._el_5, 'ul', null);
        this.renderer.setElementAttribute(this._el_7, 'class', 'nav nav-tabs');
        this._text_8 = this.renderer.createText(this._el_7, '\n	                        ', null);
        this._anchor_9 = this.renderer.createTemplateAnchor(this._el_7, null);
        this._appEl_9 = new import2.AppElement(9, 7, this, this._anchor_9);
        this._TemplateRef_9_5 = new import15.TemplateRef_(this._appEl_9, viewFactory_AuthenticationComponent1);
        this._NgIf_9_6 = new import12.NgIf(this._appEl_9.vcRef, this._TemplateRef_9_5);
        this._text_10 = this.renderer.createText(this._el_7, '\n	                        ', null);
        this._anchor_11 = this.renderer.createTemplateAnchor(this._el_7, null);
        this._appEl_11 = new import2.AppElement(11, 7, this, this._anchor_11);
        this._TemplateRef_11_5 = new import15.TemplateRef_(this._appEl_11, viewFactory_AuthenticationComponent2);
        this._NgIf_11_6 = new import12.NgIf(this._appEl_11.vcRef, this._TemplateRef_11_5);
        this._text_12 = this.renderer.createText(this._el_7, '\n		                    ', null);
        this._anchor_13 = this.renderer.createTemplateAnchor(this._el_7, null);
        this._appEl_13 = new import2.AppElement(13, 7, this, this._anchor_13);
        this._TemplateRef_13_5 = new import15.TemplateRef_(this._appEl_13, viewFactory_AuthenticationComponent3);
        this._NgIf_13_6 = new import12.NgIf(this._appEl_13.vcRef, this._TemplateRef_13_5);
        this._text_14 = this.renderer.createText(this._el_7, '\n                        \n                         ', null);
        this._text_15 = this.renderer.createText(this._el_5, '\n                    ', null);
        this._text_16 = this.renderer.createText(this._el_3, '\n              ', null);
        this._text_17 = this.renderer.createText(parentRenderNode, '\n              ', null);
        this._el_18 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_18, 'class', 'row spacing');
        this._text_19 = this.renderer.createText(this._el_18, '\n                ', null);
        this._el_20 = this.renderer.createElement(this._el_18, 'router-outlet', null);
        this._appEl_20 = new import2.AppElement(20, 18, this, this._el_20);
        this._RouterOutlet_20_5 = new import13.RouterOutlet(this.parentInjector.get(import16.RouterOutletMap), this._appEl_20.vcRef, this.parentInjector.get(import17.ComponentFactoryResolver), null);
        this._text_21 = this.renderer.createText(this._el_18, '\n              ', null);
        this._text_22 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._anchor_9,
            this._text_10,
            this._anchor_11,
            this._text_12,
            this._anchor_13,
            this._text_14,
            this._text_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22
        ], [], []);
        return null;
    };
    _View_AuthenticationComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import11.HeaderComponent) && (1 === requestNodeIndex))) {
            return this._HeaderComponent_1_4;
        }
        if (((token === import15.TemplateRef) && (9 === requestNodeIndex))) {
            return this._TemplateRef_9_5;
        }
        if (((token === import12.NgIf) && (9 === requestNodeIndex))) {
            return this._NgIf_9_6;
        }
        if (((token === import15.TemplateRef) && (11 === requestNodeIndex))) {
            return this._TemplateRef_11_5;
        }
        if (((token === import12.NgIf) && (11 === requestNodeIndex))) {
            return this._NgIf_11_6;
        }
        if (((token === import15.TemplateRef) && (13 === requestNodeIndex))) {
            return this._TemplateRef_13_5;
        }
        if (((token === import12.NgIf) && (13 === requestNodeIndex))) {
            return this._NgIf_13_6;
        }
        if (((token === import13.RouterOutlet) && (20 === requestNodeIndex))) {
            return this._RouterOutlet_20_5;
        }
        return notFoundResult;
    };
    _View_AuthenticationComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._HeaderComponent_1_4.ngOnInit();
        }
        var currVal_0 = !this.context.isLoggedIn();
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgIf_9_6.ngIf = currVal_0;
            this._expr_0 = currVal_0;
        }
        var currVal_1 = !this.context.isLoggedIn();
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgIf_11_6.ngIf = currVal_1;
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this.context.isLoggedIn();
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._NgIf_13_6.ngIf = currVal_2;
            this._expr_2 = currVal_2;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_AuthenticationComponent0.prototype.destroyInternal = function () {
        this._RouterOutlet_20_5.ngOnDestroy();
    };
    return _View_AuthenticationComponent0;
}(import1.AppView));
export function viewFactory_AuthenticationComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AuthenticationComponent === null)) {
        (renderType_AuthenticationComponent = viewUtils.createRenderComponentType('C:/Users/alex/WebstormProjects/footbalQuiz/assets/app/auth/authentication.component.ts class AuthenticationComponent - inline template', 0, import9.ViewEncapsulation.None, styles_AuthenticationComponent, {}));
    }
    return new _View_AuthenticationComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_AuthenticationComponent1 = (function (_super) {
    __extends(_View_AuthenticationComponent1, _super);
    function _View_AuthenticationComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AuthenticationComponent1, renderType_AuthenticationComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AuthenticationComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'li', null);
        this.renderer.setElementAttribute(this._el_0, 'routerLinkActive', 'active');
        this._RouterLinkActive_0_3 = new import18.RouterLinkActive(this.parent.parentInjector.get(import21.Router), new import22.ElementRef(this._el_0), this.renderer);
        this._query_RouterLink_0_0 = new import19.QueryList();
        this._query_RouterLinkWithHref_0_1 = new import19.QueryList();
        this._text_1 = this.renderer.createText(this._el_0, ' ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'a', null);
        this._RouterLinkWithHref_2_3 = new import20.RouterLinkWithHref(this.parent.parentInjector.get(import21.Router), this.parent.parentInjector.get(import23.ActivatedRoute), this.parent.parentInjector.get(import24.LocationStrategy));
        this._text_3 = this.renderer.createText(this._el_2, 'SignUp', null);
        this._expr_0 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_2, 'click', this.eventHandler(this._handle_click_2_0.bind(this)));
        this._arr_0 = import4.pureProxy1(function (p0) {
            return [p0];
        });
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ], [disposable_0], []);
        return null;
    };
    _View_AuthenticationComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import20.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._RouterLinkWithHref_2_3;
        }
        if (((token === import18.RouterLinkActive) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._RouterLinkActive_0_3;
        }
        return notFoundResult;
    };
    _View_AuthenticationComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_0 = 'active';
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._RouterLinkActive_0_3.routerLinkActive = currVal_0;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLinkActive'] = new import7.SimpleChange(this._expr_0, currVal_0);
            this._expr_0 = currVal_0;
        }
        if ((changes !== null)) {
            this._RouterLinkActive_0_3.ngOnChanges(changes);
        }
        changes = null;
        var currVal_2 = this._arr_0('signup');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._RouterLinkWithHref_2_3.routerLink = currVal_2;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_2, currVal_2);
            this._expr_2 = currVal_2;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_2_3.ngOnChanges(changes);
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_RouterLink_0_0.dirty) {
                this._query_RouterLink_0_0.reset([]);
                this._RouterLinkActive_0_3.links = this._query_RouterLink_0_0;
                this._query_RouterLink_0_0.notifyOnChanges();
            }
            if (this._query_RouterLinkWithHref_0_1.dirty) {
                this._query_RouterLinkWithHref_0_1.reset([this._RouterLinkWithHref_2_3]);
                this._RouterLinkActive_0_3.linksWithHrefs = this._query_RouterLinkWithHref_0_1;
                this._query_RouterLinkWithHref_0_1.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._RouterLinkActive_0_3.ngAfterContentInit();
            }
        }
        var currVal_3 = this._RouterLinkWithHref_2_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementProperty(this._el_2, 'href', this.viewUtils.sanitizer.sanitize(import25.SecurityContext.URL, currVal_3));
            this._expr_3 = currVal_3;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_AuthenticationComponent1.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_2_3.ngOnDestroy();
        this._RouterLinkActive_0_3.ngOnDestroy();
    };
    _View_AuthenticationComponent1.prototype._handle_click_2_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._RouterLinkWithHref_2_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    };
    return _View_AuthenticationComponent1;
}(import1.AppView));
function viewFactory_AuthenticationComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_AuthenticationComponent1(viewUtils, parentInjector, declarationEl);
}
var _View_AuthenticationComponent2 = (function (_super) {
    __extends(_View_AuthenticationComponent2, _super);
    function _View_AuthenticationComponent2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AuthenticationComponent2, renderType_AuthenticationComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AuthenticationComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'li', null);
        this.renderer.setElementAttribute(this._el_0, 'routerLinkActive', 'active');
        this._RouterLinkActive_0_3 = new import18.RouterLinkActive(this.parent.parentInjector.get(import21.Router), new import22.ElementRef(this._el_0), this.renderer);
        this._query_RouterLink_0_0 = new import19.QueryList();
        this._query_RouterLinkWithHref_0_1 = new import19.QueryList();
        this._text_1 = this.renderer.createText(this._el_0, ' ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'a', null);
        this._RouterLinkWithHref_2_3 = new import20.RouterLinkWithHref(this.parent.parentInjector.get(import21.Router), this.parent.parentInjector.get(import23.ActivatedRoute), this.parent.parentInjector.get(import24.LocationStrategy));
        this._text_3 = this.renderer.createText(this._el_2, 'SignIn', null);
        this._expr_0 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_2, 'click', this.eventHandler(this._handle_click_2_0.bind(this)));
        this._arr_0 = import4.pureProxy1(function (p0) {
            return [p0];
        });
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ], [disposable_0], []);
        return null;
    };
    _View_AuthenticationComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import20.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._RouterLinkWithHref_2_3;
        }
        if (((token === import18.RouterLinkActive) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._RouterLinkActive_0_3;
        }
        return notFoundResult;
    };
    _View_AuthenticationComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_0 = 'active';
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._RouterLinkActive_0_3.routerLinkActive = currVal_0;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLinkActive'] = new import7.SimpleChange(this._expr_0, currVal_0);
            this._expr_0 = currVal_0;
        }
        if ((changes !== null)) {
            this._RouterLinkActive_0_3.ngOnChanges(changes);
        }
        changes = null;
        var currVal_2 = this._arr_0('signin');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._RouterLinkWithHref_2_3.routerLink = currVal_2;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_2, currVal_2);
            this._expr_2 = currVal_2;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_2_3.ngOnChanges(changes);
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_RouterLink_0_0.dirty) {
                this._query_RouterLink_0_0.reset([]);
                this._RouterLinkActive_0_3.links = this._query_RouterLink_0_0;
                this._query_RouterLink_0_0.notifyOnChanges();
            }
            if (this._query_RouterLinkWithHref_0_1.dirty) {
                this._query_RouterLinkWithHref_0_1.reset([this._RouterLinkWithHref_2_3]);
                this._RouterLinkActive_0_3.linksWithHrefs = this._query_RouterLinkWithHref_0_1;
                this._query_RouterLinkWithHref_0_1.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._RouterLinkActive_0_3.ngAfterContentInit();
            }
        }
        var currVal_3 = this._RouterLinkWithHref_2_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementProperty(this._el_2, 'href', this.viewUtils.sanitizer.sanitize(import25.SecurityContext.URL, currVal_3));
            this._expr_3 = currVal_3;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_AuthenticationComponent2.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_2_3.ngOnDestroy();
        this._RouterLinkActive_0_3.ngOnDestroy();
    };
    _View_AuthenticationComponent2.prototype._handle_click_2_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._RouterLinkWithHref_2_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    };
    return _View_AuthenticationComponent2;
}(import1.AppView));
function viewFactory_AuthenticationComponent2(viewUtils, parentInjector, declarationEl) {
    return new _View_AuthenticationComponent2(viewUtils, parentInjector, declarationEl);
}
var _View_AuthenticationComponent3 = (function (_super) {
    __extends(_View_AuthenticationComponent3, _super);
    function _View_AuthenticationComponent3(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AuthenticationComponent3, renderType_AuthenticationComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AuthenticationComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'li', null);
        this.renderer.setElementAttribute(this._el_0, 'routerLinkActive', 'active');
        this._RouterLinkActive_0_3 = new import18.RouterLinkActive(this.parent.parentInjector.get(import21.Router), new import22.ElementRef(this._el_0), this.renderer);
        this._query_RouterLink_0_0 = new import19.QueryList();
        this._query_RouterLinkWithHref_0_1 = new import19.QueryList();
        this._text_1 = this.renderer.createText(this._el_0, ' ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'a', null);
        this._RouterLinkWithHref_2_3 = new import20.RouterLinkWithHref(this.parent.parentInjector.get(import21.Router), this.parent.parentInjector.get(import23.ActivatedRoute), this.parent.parentInjector.get(import24.LocationStrategy));
        this._text_3 = this.renderer.createText(this._el_2, 'Logout', null);
        this._expr_0 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_2, 'click', this.eventHandler(this._handle_click_2_0.bind(this)));
        this._arr_0 = import4.pureProxy1(function (p0) {
            return [p0];
        });
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ], [disposable_0], []);
        return null;
    };
    _View_AuthenticationComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import20.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._RouterLinkWithHref_2_3;
        }
        if (((token === import18.RouterLinkActive) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._RouterLinkActive_0_3;
        }
        return notFoundResult;
    };
    _View_AuthenticationComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_0 = 'active';
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._RouterLinkActive_0_3.routerLinkActive = currVal_0;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLinkActive'] = new import7.SimpleChange(this._expr_0, currVal_0);
            this._expr_0 = currVal_0;
        }
        if ((changes !== null)) {
            this._RouterLinkActive_0_3.ngOnChanges(changes);
        }
        changes = null;
        var currVal_2 = this._arr_0('logout');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._RouterLinkWithHref_2_3.routerLink = currVal_2;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_2, currVal_2);
            this._expr_2 = currVal_2;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_2_3.ngOnChanges(changes);
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_RouterLink_0_0.dirty) {
                this._query_RouterLink_0_0.reset([]);
                this._RouterLinkActive_0_3.links = this._query_RouterLink_0_0;
                this._query_RouterLink_0_0.notifyOnChanges();
            }
            if (this._query_RouterLinkWithHref_0_1.dirty) {
                this._query_RouterLinkWithHref_0_1.reset([this._RouterLinkWithHref_2_3]);
                this._RouterLinkActive_0_3.linksWithHrefs = this._query_RouterLinkWithHref_0_1;
                this._query_RouterLinkWithHref_0_1.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._RouterLinkActive_0_3.ngAfterContentInit();
            }
        }
        var currVal_3 = this._RouterLinkWithHref_2_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementProperty(this._el_2, 'href', this.viewUtils.sanitizer.sanitize(import25.SecurityContext.URL, currVal_3));
            this._expr_3 = currVal_3;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_AuthenticationComponent3.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_2_3.ngOnDestroy();
        this._RouterLinkActive_0_3.ngOnDestroy();
    };
    _View_AuthenticationComponent3.prototype._handle_click_2_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._RouterLinkWithHref_2_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    };
    return _View_AuthenticationComponent3;
}(import1.AppView));
function viewFactory_AuthenticationComponent3(viewUtils, parentInjector, declarationEl) {
    return new _View_AuthenticationComponent3(viewUtils, parentInjector, declarationEl);
}
