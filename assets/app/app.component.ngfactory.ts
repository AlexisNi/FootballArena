/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './app.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './app.component.css.shim';
var renderType_AppComponent_Host:import0.RenderComponentType = (null as any);
class _View_AppComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _AppComponent_0_4:import3.AppComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_AppComponent_Host0,renderType_AppComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('my-app',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_AppComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._AppComponent_0_4 = new import3.AppComponent();
    this._appEl_0.initComponent(this._AppComponent_0_4,[],compView_0);
    compView_0.create(this._AppComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.AppComponent) && (0 === requestNodeIndex))) { return this._AppComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_AppComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_AppComponent_Host === (null as any))) { (renderType_AppComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_AppComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const AppComponentNgFactory:import9.ComponentFactory<import3.AppComponent> = new import9.ComponentFactory<import3.AppComponent>('my-app',viewFactory_AppComponent_Host0,import3.AppComponent);
const styles_AppComponent:any[] = [import10.styles];
var renderType_AppComponent:import0.RenderComponentType = (null as any);
class _View_AppComponent0 extends import1.AppView<import3.AppComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_AppComponent0,renderType_AppComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'html',(null as any));
    this.renderer.setElementAttribute(this._el_1,'lang','en');
    this._text_2 = this.renderer.createText(this._el_1,'\n',(null as any));
    this._el_3 = this.renderer.createElement(this._el_1,'head',(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n    ',(null as any));
    this._el_5 = this.renderer.createElement(this._el_3,'meta',(null as any));
    this.renderer.setElementAttribute(this._el_5,'charset','UTF-8');
    this._text_6 = this.renderer.createText(this._el_3,'\n    ',(null as any));
    this._el_7 = this.renderer.createElement(this._el_3,'title',(null as any));
    this._text_8 = this.renderer.createText(this._el_7,'Title',(null as any));
    this._text_9 = this.renderer.createText(this._el_3,'\n',(null as any));
    this._text_10 = this.renderer.createText(this._el_1,'\n',(null as any));
    this._el_11 = this.renderer.createElement(this._el_1,'body',(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'\n\n',(null as any));
    this._el_13 = this.renderer.createElement(this._el_11,'p',(null as any));
    this._text_14 = this.renderer.createText(this._el_13,'Hello world!',(null as any));
    this._text_15 = this.renderer.createText(this._el_11,'\n\n',(null as any));
    this._text_16 = this.renderer.createText(this._el_1,'\n',(null as any));
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._text_15,
      this._text_16
    ]
    ,[],[]);
    return (null as any);
  }
}
export function viewFactory_AppComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.AppComponent> {
  if ((renderType_AppComponent === (null as any))) { (renderType_AppComponent = viewUtils.createRenderComponentType('C:/Users/alex/WebstormProjects/footbalQuiz/assets/app/app.component.html',0,import8.ViewEncapsulation.Emulated,styles_AppComponent,{})); }
  return new _View_AppComponent0(viewUtils,parentInjector,declarationEl);
}