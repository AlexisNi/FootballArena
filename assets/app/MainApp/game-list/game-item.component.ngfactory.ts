/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './game-item.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../../auth/auth.service';
import * as import9 from './game-list.services';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '@angular/core/src/linker/query_list';
import * as import13 from '@angular/common/src/directives/ng_if';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/router/src/directives/router_link';
import * as import16 from '@angular/router/src/directives/router_link_active';
import * as import17 from '@angular/common/src/directives/ng_style';
import * as import18 from '@angular/router/src/router';
import * as import19 from '@angular/router/src/router_state';
import * as import20 from '@angular/common/src/location/location_strategy';
import * as import21 from '@angular/core/src/linker/element_ref';
import * as import22 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import23 from '@angular/core/src/security';
var renderType_GameItemComponent_Host:import0.RenderComponentType = (null as any);
class _View_GameItemComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _GameItemComponent_0_4:import3.GameItemComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_GameItemComponent_Host0,renderType_GameItemComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('game-item',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_GameItemComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._GameItemComponent_0_4 = new import3.GameItemComponent(this.parentInjector.get(import8.AuthService),this.parentInjector.get(import9.GameListServices));
    this._appEl_0.initComponent(this._GameItemComponent_0_4,[],compView_0);
    compView_0.create(this._GameItemComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.GameItemComponent) && (0 === requestNodeIndex))) { return this._GameItemComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._GameItemComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_GameItemComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_GameItemComponent_Host === (null as any))) { (renderType_GameItemComponent_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,[],{})); }
  return new _View_GameItemComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const GameItemComponentNgFactory:import11.ComponentFactory<import3.GameItemComponent> = new import11.ComponentFactory<import3.GameItemComponent>('game-item',viewFactory_GameItemComponent_Host0,import3.GameItemComponent);
const styles_GameItemComponent:any[] = ['.author[_ngcontent-%COMP%]{\n        display:inline-block;\n        font-style: italic;\n        font-size: 12px;\n        width: 80%;\n        }\n        .config[_ngcontent-%COMP%]{\n        display: inline-block;\n        text-align: right;\n        font-size: 12px;\n        width: 19%;\n        }\n        a.disabled[_ngcontent-%COMP%]{\n            pointer-events: none;\n            cursor: default;\n        }'];
var renderType_GameItemComponent:import0.RenderComponentType = (null as any);
class _View_GameItemComponent0 extends import1.AppView<import3.GameItemComponent> {
  _viewQuery_myModal_0:import12.QueryList<any>;
  _text_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _TemplateRef_2_5:any;
  _NgIf_2_6:import13.NgIf;
  _text_3:any;
  _anchor_4:any;
  /*private*/ _appEl_4:import2.AppElement;
  _TemplateRef_4_5:any;
  _NgIf_4_6:import13.NgIf;
  _text_5:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_GameItemComponent0,renderType_GameItemComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._viewQuery_myModal_0 = new import12.QueryList<any>();
    this._text_0 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._text_1 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._appEl_2 = new import2.AppElement(2,(null as any),this,this._anchor_2);
    this._TemplateRef_2_5 = new import14.TemplateRef_(this._appEl_2,viewFactory_GameItemComponent1);
    this._NgIf_2_6 = new import13.NgIf(this._appEl_2.vcRef,this._TemplateRef_2_5);
    this._text_3 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._anchor_4 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._appEl_4 = new import2.AppElement(4,(null as any),this,this._anchor_4);
    this._TemplateRef_4_5 = new import14.TemplateRef_(this._appEl_4,viewFactory_GameItemComponent4);
    this._NgIf_4_6 = new import13.NgIf(this._appEl_4.vcRef,this._TemplateRef_4_5);
    this._text_5 = this.renderer.createText(parentRenderNode,'\n\n\n \n\n\n\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._viewQuery_myModal_0.reset([]);
    this.context.arena = this._viewQuery_myModal_0.first;
    this.init([],[
      this._text_0,
      this._text_1,
      this._anchor_2,
      this._text_3,
      this._anchor_4,
      this._text_5
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import13.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6; }
    if (((token === import14.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import13.NgIf) && (4 === requestNodeIndex))) { return this._NgIf_4_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = (((this.context.arena.userId == this.context.userId) && (this.context.arena.user_played == false)) || ((this.context.arena.inviteId == this.context.userId) && (this.context.arena.invite_played == false)));
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgIf_2_6.ngIf = currVal_0;
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = (((this.context.arena.userId == this.context.userId) && (this.context.arena.user_played == true)) || ((this.context.arena.inviteId == this.context.userId) && (this.context.arena.invite_played == true)));
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgIf_4_6.ngIf = currVal_1;
      this._expr_1 = currVal_1;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_GameItemComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.GameItemComponent> {
  if ((renderType_GameItemComponent === (null as any))) { (renderType_GameItemComponent = viewUtils.createRenderComponentType('C:/Users/alex/WebstormProjects/footbalQuiz/assets/app/MainApp/game-list/game-item.component.ts class GameItemComponent - inline template',0,import10.ViewEncapsulation.Emulated,styles_GameItemComponent,{})); }
  return new _View_GameItemComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_GameItemComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _TemplateRef_2_5:any;
  _NgIf_2_6:import13.NgIf;
  _text_3:any;
  _anchor_4:any;
  /*private*/ _appEl_4:import2.AppElement;
  _TemplateRef_4_5:any;
  _NgIf_4_6:import13.NgIf;
  _text_5:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_GameItemComponent1,renderType_GameItemComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','row');
    this._text_1 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_2 = new import2.AppElement(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import14.TemplateRef_(this._appEl_2,viewFactory_GameItemComponent2);
    this._NgIf_2_6 = new import13.NgIf(this._appEl_2.vcRef,this._TemplateRef_2_5);
    this._text_3 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._anchor_4 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_4 = new import2.AppElement(4,0,this,this._anchor_4);
    this._TemplateRef_4_5 = new import14.TemplateRef_(this._appEl_4,viewFactory_GameItemComponent3);
    this._NgIf_4_6 = new import13.NgIf(this._appEl_4.vcRef,this._TemplateRef_4_5);
    this._text_5 = this.renderer.createText(this._el_0,'\n\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3,
      this._anchor_4,
      this._text_5
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import13.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6; }
    if (((token === import14.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import13.NgIf) && (4 === requestNodeIndex))) { return this._NgIf_4_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = (this.parent.context.arena.userId == this.parent.context.userId);
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgIf_2_6.ngIf = currVal_0;
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = (this.parent.context.arena.inviteId == this.parent.context.userId);
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgIf_4_6.ngIf = currVal_1;
      this._expr_1 = currVal_1;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_GameItemComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_GameItemComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_GameItemComponent2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _RouterLinkWithHref_2_3:import15.RouterLinkWithHref;
  _RouterLinkActive_2_4:import16.RouterLinkActive;
  _query_RouterLink_2_0:import12.QueryList<any>;
  _query_RouterLinkWithHref_2_1:import12.QueryList<any>;
  _text_3:any;
  _el_4:any;
  _NgStyle_4_3:import17.NgStyle;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  _map_0:any;
  _arr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  _map_1:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_GameItemComponent2,renderType_GameItemComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'a',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','list-group-item clearfix');
    this.renderer.setElementAttribute(this._el_2,'routerLinkActive','active');
    this._RouterLinkWithHref_2_3 = new import15.RouterLinkWithHref(this.parent.parentInjector.get(import18.Router),this.parent.parentInjector.get(import19.ActivatedRoute),this.parent.parentInjector.get(import20.LocationStrategy));
    this._RouterLinkActive_2_4 = new import16.RouterLinkActive(this.parent.parentInjector.get(import18.Router),new import21.ElementRef(this._el_2),this.renderer);
    this._query_RouterLink_2_0 = new import12.QueryList<any>();
    this._query_RouterLinkWithHref_2_1 = new import12.QueryList<any>();
    this._text_3 = this.renderer.createText(this._el_2,' \n    ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'article',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','panel panel-default');
    this._NgStyle_4_3 = new import17.NgStyle(this.parent.parentInjector.get(import22.KeyValueDiffers),new import21.ElementRef(this._el_4),this.renderer);
    this._text_5 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_4,'div',(null as any));
    this.renderer.setElementAttribute(this._el_6,'class','panel-body');
    this._text_7 = this.renderer.createText(this._el_6,'',(null as any));
    this._text_8 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._el_9 = this.renderer.createElement(this._el_4,'footer',(null as any));
    this.renderer.setElementAttribute(this._el_9,'class','panel-footer');
    this._text_10 = this.renderer.createText(this._el_9,'\n        ',(null as any));
    this._el_11 = this.renderer.createElement(this._el_9,'div',(null as any));
    this.renderer.setElementAttribute(this._el_11,'class','author');
    this._text_12 = this.renderer.createText(this._el_11,'',(null as any));
    this._text_13 = this.renderer.createText(this._el_9,'\n    ',(null as any));
    this._text_14 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._text_15 = this.renderer.createText(this._el_2,'\n',(null as any));
    this._text_16 = this.renderer.createText(this._el_0,'\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_0.bind(this)));
    this._map_0 = import4.pureProxy1((p0:any):{[key: string]:any} => {
      return {UserId: p0};
    });
    this._arr_0 = import4.pureProxy2((p0:any,p1:any):any[] => {
      return [
        p0,
        p1
      ]
      ;
    });
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._map_1 = import4.pureProxy1((p0:any):{[key: string]:any} => {
      return {backgroundColor: p0};
    });
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._text_14,
      this._text_15,
      this._text_16
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.NgStyle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._NgStyle_4_3; }
    if (((token === import15.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._RouterLinkWithHref_2_3; }
    if (((token === import16.RouterLinkActive) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._RouterLinkActive_2_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_1:any = this._arr_0(this.parent.parent.context.arena.arenaId,this._map_0(this.parent.parent.context.arena.inviteId));
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._RouterLinkWithHref_2_3.routerLink = currVal_1;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import7.SimpleChange(this._expr_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_2_3.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_3:any = 'active';
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._RouterLinkActive_2_4.routerLinkActive = currVal_3;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLinkActive'] = new import7.SimpleChange(this._expr_3,currVal_3);
      this._expr_3 = currVal_3;
    }
    if ((changes !== (null as any))) { this._RouterLinkActive_2_4.ngOnChanges(changes); }
    const currVal_4:any = this._map_1(this.parent.parent.context.color);
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._NgStyle_4_3.ngStyle = currVal_4;
      this._expr_4 = currVal_4;
    }
    if (!throwOnChange) { this._NgStyle_4_3.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_RouterLink_2_0.dirty) {
        this._query_RouterLink_2_0.reset([]);
        this._RouterLinkActive_2_4.links = this._query_RouterLink_2_0;
        this._query_RouterLink_2_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_2_1.dirty) {
        this._query_RouterLinkWithHref_2_1.reset([this._RouterLinkWithHref_2_3]);
        this._RouterLinkActive_2_4.linksWithHrefs = this._query_RouterLinkWithHref_2_1;
        this._query_RouterLinkWithHref_2_1.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_2_4.ngAfterContentInit(); }
    }
    const currVal_2:any = this._RouterLinkWithHref_2_3.href;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_2,'href',this.viewUtils.sanitizer.sanitize(import23.SecurityContext.URL,currVal_2));
      this._expr_2 = currVal_2;
    }
    const currVal_5:any = import4.interpolate(1,'\n        ',((this.parent.parent.context.arena == (null as any))? (null as any): this.parent.parent.context.arena.lastName),' \n    ');
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setText(this._text_7,currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = import4.interpolate(1,'\n            ',((this.parent.parent.context.arena == (null as any))? (null as any): this.parent.parent.context.arena.status_accept),'\n        ');
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setText(this._text_12,currVal_6);
      this._expr_6 = currVal_6;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_2_3.ngOnDestroy();
    this._RouterLinkActive_2_4.ngOnDestroy();
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_2_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_GameItemComponent2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_GameItemComponent2(viewUtils,parentInjector,declarationEl);
}
class _View_GameItemComponent3 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _RouterLinkWithHref_2_3:import15.RouterLinkWithHref;
  _RouterLinkActive_2_4:import16.RouterLinkActive;
  _query_RouterLink_2_0:import12.QueryList<any>;
  _query_RouterLinkWithHref_2_1:import12.QueryList<any>;
  _text_3:any;
  _el_4:any;
  _NgStyle_4_3:import17.NgStyle;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  _map_0:any;
  _arr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  _map_1:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_GameItemComponent3,renderType_GameItemComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'a',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','list-group-item clearfix');
    this.renderer.setElementAttribute(this._el_2,'routerLinkActive','active');
    this._RouterLinkWithHref_2_3 = new import15.RouterLinkWithHref(this.parent.parentInjector.get(import18.Router),this.parent.parentInjector.get(import19.ActivatedRoute),this.parent.parentInjector.get(import20.LocationStrategy));
    this._RouterLinkActive_2_4 = new import16.RouterLinkActive(this.parent.parentInjector.get(import18.Router),new import21.ElementRef(this._el_2),this.renderer);
    this._query_RouterLink_2_0 = new import12.QueryList<any>();
    this._query_RouterLinkWithHref_2_1 = new import12.QueryList<any>();
    this._text_3 = this.renderer.createText(this._el_2,' \n    ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'article',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','panel panel-default');
    this._NgStyle_4_3 = new import17.NgStyle(this.parent.parentInjector.get(import22.KeyValueDiffers),new import21.ElementRef(this._el_4),this.renderer);
    this._text_5 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_4,'div',(null as any));
    this.renderer.setElementAttribute(this._el_6,'class','panel-body');
    this._text_7 = this.renderer.createText(this._el_6,'',(null as any));
    this._text_8 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._el_9 = this.renderer.createElement(this._el_4,'footer',(null as any));
    this.renderer.setElementAttribute(this._el_9,'class','panel-footer');
    this._text_10 = this.renderer.createText(this._el_9,'\n        ',(null as any));
    this._el_11 = this.renderer.createElement(this._el_9,'div',(null as any));
    this.renderer.setElementAttribute(this._el_11,'class','author');
    this._text_12 = this.renderer.createText(this._el_11,'',(null as any));
    this._text_13 = this.renderer.createText(this._el_9,'\n    ',(null as any));
    this._text_14 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._text_15 = this.renderer.createText(this._el_2,'\n',(null as any));
    this._text_16 = this.renderer.createText(this._el_0,'\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_0.bind(this)));
    this._map_0 = import4.pureProxy1((p0:any):{[key: string]:any} => {
      return {UserId: p0};
    });
    this._arr_0 = import4.pureProxy2((p0:any,p1:any):any[] => {
      return [
        p0,
        p1
      ]
      ;
    });
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._map_1 = import4.pureProxy1((p0:any):{[key: string]:any} => {
      return {backgroundColor: p0};
    });
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._text_14,
      this._text_15,
      this._text_16
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.NgStyle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._NgStyle_4_3; }
    if (((token === import15.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._RouterLinkWithHref_2_3; }
    if (((token === import16.RouterLinkActive) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._RouterLinkActive_2_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_1:any = this._arr_0(this.parent.parent.context.arena.arenaId,this._map_0(this.parent.parent.context.arena.userId));
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._RouterLinkWithHref_2_3.routerLink = currVal_1;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import7.SimpleChange(this._expr_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_2_3.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_3:any = 'active';
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._RouterLinkActive_2_4.routerLinkActive = currVal_3;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLinkActive'] = new import7.SimpleChange(this._expr_3,currVal_3);
      this._expr_3 = currVal_3;
    }
    if ((changes !== (null as any))) { this._RouterLinkActive_2_4.ngOnChanges(changes); }
    const currVal_4:any = this._map_1(this.parent.parent.context.color);
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._NgStyle_4_3.ngStyle = currVal_4;
      this._expr_4 = currVal_4;
    }
    if (!throwOnChange) { this._NgStyle_4_3.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_RouterLink_2_0.dirty) {
        this._query_RouterLink_2_0.reset([]);
        this._RouterLinkActive_2_4.links = this._query_RouterLink_2_0;
        this._query_RouterLink_2_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_2_1.dirty) {
        this._query_RouterLinkWithHref_2_1.reset([this._RouterLinkWithHref_2_3]);
        this._RouterLinkActive_2_4.linksWithHrefs = this._query_RouterLinkWithHref_2_1;
        this._query_RouterLinkWithHref_2_1.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_2_4.ngAfterContentInit(); }
    }
    const currVal_2:any = this._RouterLinkWithHref_2_3.href;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_2,'href',this.viewUtils.sanitizer.sanitize(import23.SecurityContext.URL,currVal_2));
      this._expr_2 = currVal_2;
    }
    const currVal_5:any = import4.interpolate(1,'\n        ',((this.parent.parent.context.arena == (null as any))? (null as any): this.parent.parent.context.arena.lastName),' \n    ');
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setText(this._text_7,currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = import4.interpolate(1,'\n            ',((this.parent.parent.context.arena == (null as any))? (null as any): this.parent.parent.context.arena.status_accept),'\n        ');
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setText(this._text_12,currVal_6);
      this._expr_6 = currVal_6;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_2_3.ngOnDestroy();
    this._RouterLinkActive_2_4.ngOnDestroy();
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_2_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_GameItemComponent3(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_GameItemComponent3(viewUtils,parentInjector,declarationEl);
}
class _View_GameItemComponent4 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _RouterLinkWithHref_2_3:import15.RouterLinkWithHref;
  _RouterLinkActive_2_4:import16.RouterLinkActive;
  _query_RouterLink_2_0:import12.QueryList<any>;
  _query_RouterLinkWithHref_2_1:import12.QueryList<any>;
  _text_3:any;
  _el_4:any;
  _NgStyle_4_3:import17.NgStyle;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  _map_0:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_GameItemComponent4,renderType_GameItemComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','row');
    this._text_1 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'a',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','list-group-item clearfix');
    this.renderer.setElementAttribute(this._el_2,'routerLinkActive','active');
    this._RouterLinkWithHref_2_3 = new import15.RouterLinkWithHref(this.parentInjector.get(import18.Router),this.parentInjector.get(import19.ActivatedRoute),this.parentInjector.get(import20.LocationStrategy));
    this._RouterLinkActive_2_4 = new import16.RouterLinkActive(this.parentInjector.get(import18.Router),new import21.ElementRef(this._el_2),this.renderer);
    this._query_RouterLink_2_0 = new import12.QueryList<any>();
    this._query_RouterLinkWithHref_2_1 = new import12.QueryList<any>();
    this._text_3 = this.renderer.createText(this._el_2,' \n    ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'article',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','panel panel-default');
    this._NgStyle_4_3 = new import17.NgStyle(this.parentInjector.get(import22.KeyValueDiffers),new import21.ElementRef(this._el_4),this.renderer);
    this._text_5 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_4,'div',(null as any));
    this.renderer.setElementAttribute(this._el_6,'class','panel-body');
    this._text_7 = this.renderer.createText(this._el_6,'',(null as any));
    this._text_8 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._el_9 = this.renderer.createElement(this._el_4,'footer',(null as any));
    this.renderer.setElementAttribute(this._el_9,'class','panel-footer');
    this._text_10 = this.renderer.createText(this._el_9,'\n        ',(null as any));
    this._el_11 = this.renderer.createElement(this._el_9,'div',(null as any));
    this.renderer.setElementAttribute(this._el_11,'class','author');
    this._text_12 = this.renderer.createText(this._el_11,'',(null as any));
    this._text_13 = this.renderer.createText(this._el_9,'\n    ',(null as any));
    this._text_14 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._text_15 = this.renderer.createText(this._el_2,'\n',(null as any));
    this._text_16 = this.renderer.createText(this._el_0,'\n\n',(null as any));
    this._text_17 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._expr_1 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_0.bind(this)));
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._map_0 = import4.pureProxy1((p0:any):{[key: string]:any} => {
      return {backgroundColor: p0};
    });
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._text_14,
      this._text_15,
      this._text_16,
      this._text_17
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.NgStyle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._NgStyle_4_3; }
    if (((token === import15.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._RouterLinkWithHref_2_3; }
    if (((token === import16.RouterLinkActive) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._RouterLinkActive_2_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_2:any = this.parent.context.arena.arenaId;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._RouterLinkWithHref_2_3.routerLink = currVal_2;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import7.SimpleChange(this._expr_2,currVal_2);
      this._expr_2 = currVal_2;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_2_3.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_4:any = 'active';
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._RouterLinkActive_2_4.routerLinkActive = currVal_4;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLinkActive'] = new import7.SimpleChange(this._expr_4,currVal_4);
      this._expr_4 = currVal_4;
    }
    if ((changes !== (null as any))) { this._RouterLinkActive_2_4.ngOnChanges(changes); }
    const currVal_5:any = this._map_0(this.parent.context.color);
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._NgStyle_4_3.ngStyle = currVal_5;
      this._expr_5 = currVal_5;
    }
    if (!throwOnChange) { this._NgStyle_4_3.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_RouterLink_2_0.dirty) {
        this._query_RouterLink_2_0.reset([]);
        this._RouterLinkActive_2_4.links = this._query_RouterLink_2_0;
        this._query_RouterLink_2_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_2_1.dirty) {
        this._query_RouterLinkWithHref_2_1.reset([this._RouterLinkWithHref_2_3]);
        this._RouterLinkActive_2_4.linksWithHrefs = this._query_RouterLinkWithHref_2_1;
        this._query_RouterLinkWithHref_2_1.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_2_4.ngAfterContentInit(); }
    }
    const currVal_1:any = true;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_2,'disabled',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_3:any = this._RouterLinkWithHref_2_3.href;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementProperty(this._el_2,'href',this.viewUtils.sanitizer.sanitize(import23.SecurityContext.URL,currVal_3));
      this._expr_3 = currVal_3;
    }
    const currVal_6:any = import4.interpolate(1,'\n        ',((this.parent.context.arena == (null as any))? (null as any): this.parent.context.arena.lastName),' \n    ');
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setText(this._text_7,currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = import4.interpolate(1,'\n            ',((this.parent.context.arena == (null as any))? (null as any): this.parent.context.arena.status_accept),'\n        ');
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setText(this._text_12,currVal_7);
      this._expr_7 = currVal_7;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_2_3.ngOnDestroy();
    this._RouterLinkActive_2_4.ngOnDestroy();
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_2_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_GameItemComponent4(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_GameItemComponent4(viewUtils,parentInjector,declarationEl);
}