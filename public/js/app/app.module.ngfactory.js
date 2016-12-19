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
import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/forms/src/directives';
import * as import6 from '@angular/forms/src/form_providers';
import * as import7 from '@angular/router/src/router_module';
import * as import8 from '@angular/http/src/http_module';
import * as import9 from '@angular/common/src/localization';
import * as import10 from '@angular/core/src/application_init';
import * as import11 from '@angular/core/src/testability/testability';
import * as import12 from '@angular/core/src/application_ref';
import * as import13 from '@angular/core/src/linker/compiler';
import * as import14 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import15 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import16 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import17 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import18 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import19 from '@angular/core/src/linker/view_utils';
import * as import20 from '@angular/platform-browser/src/browser/title';
import * as import21 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import22 from '@angular/forms/src/form_builder';
import * as import23 from '@angular/http/src/backends/browser_xhr';
import * as import24 from '@angular/http/src/base_response_options';
import * as import25 from '@angular/http/src/backends/xhr_backend';
import * as import26 from '@angular/http/src/base_request_options';
import * as import27 from '@angular/common/src/location/location';
import * as import28 from '@angular/router/src/url_tree';
import * as import29 from '@angular/router/src/router_outlet_map';
import * as import30 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import31 from './auth/auth.service';
import * as import32 from './MainApp/game-list/game-list.services';
import * as import33 from './MainApp/opponent-find/opponent-find.sevices';
import * as import34 from './MainApp/socketHanding/socket.service';
import * as import35 from './questions/questionServices/arena.service';
import * as import36 from './questions/questionServices/question.service';
import * as import37 from './questions/questionServices/questionAnswer.service';
import * as import39 from './MainApp/main.component.ngfactory';
import * as import40 from './MainApp/arena/arena.component.ngfactory';
import * as import41 from './auth/authentication.component.ngfactory';
import * as import42 from './auth/signup.component.ngfactory';
import * as import43 from './auth/login.component.ngfactory';
import * as import44 from './auth/logout.component.ngfactory';
import * as import45 from './app.component.ngfactory';
import * as import46 from '@angular/core/src/application_tokens';
import * as import47 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import48 from '@angular/platform-browser/src/dom/events/key_events';
import * as import49 from '@angular/core/src/zone/ng_zone';
import * as import50 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import51 from '@angular/common/src/location/platform_location';
import * as import52 from '@angular/common/src/location/location_strategy';
import * as import53 from './MainApp/main.component';
import * as import54 from './MainApp/arena/arena.component';
import * as import55 from './auth/authentication.component';
import * as import56 from './auth/signup.component';
import * as import57 from './auth/login.component';
import * as import58 from './auth/logout.component';
import * as import59 from '@angular/router/src/router';
import * as import60 from '@angular/core/src/console';
import * as import61 from '@angular/core/src/i18n/tokens';
import * as import62 from '@angular/core/src/error_handler';
import * as import63 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import64 from '@angular/platform-browser/src/dom/animation_driver';
import * as import65 from '@angular/core/src/render/api';
import * as import66 from '@angular/core/src/security';
import * as import67 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import68 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import69 from '@angular/http/src/interfaces';
import * as import70 from '@angular/http/src/http';
import * as import71 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import72 from '@angular/router/src/router_config_loader';
import * as import73 from '@angular/router/src/router_state';
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        _super.call(this, parent, [
            import39.MainComponentNgFactory,
            import40.ArenaComponentNgFactory,
            import41.AuthenticationComponentNgFactory,
            import42.SignUpComponentNgFactory,
            import43.LoginComponentNgFactory,
            import44.LogoutComponentNgFactory,
            import45.AppComponentNgFactory
        ], [import45.AppComponentNgFactory]);
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_10", {
        get: function () {
            if ((this.__LOCALE_ID_10 == null)) {
                (this.__LOCALE_ID_10 = 'en-US');
            }
            return this.__LOCALE_ID_10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_11", {
        get: function () {
            if ((this.__NgLocalization_11 == null)) {
                (this.__NgLocalization_11 = new import9.NgLocaleLocalization(this._LOCALE_ID_10));
            }
            return this.__NgLocalization_11;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_16", {
        get: function () {
            if ((this.__ApplicationRef_16 == null)) {
                (this.__ApplicationRef_16 = this._ApplicationRef__15);
            }
            return this.__ApplicationRef_16;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_17", {
        get: function () {
            if ((this.__Compiler_17 == null)) {
                (this.__Compiler_17 = new import13.Compiler());
            }
            return this.__Compiler_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_18", {
        get: function () {
            if ((this.__APP_ID_18 == null)) {
                (this.__APP_ID_18 = import46._appIdRandomProviderFactory());
            }
            return this.__APP_ID_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_19", {
        get: function () {
            if ((this.__DOCUMENT_19 == null)) {
                (this.__DOCUMENT_19 = import4._document());
            }
            return this.__DOCUMENT_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_20", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_20 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_20 = new import14.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_21", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_21 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_21 = [
                    new import47.DomEventsPlugin(),
                    new import48.KeyEventsPlugin(),
                    new import14.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_20)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_22", {
        get: function () {
            if ((this.__EventManager_22 == null)) {
                (this.__EventManager_22 = new import15.EventManager(this._EVENT_MANAGER_PLUGINS_21, this.parent.get(import49.NgZone)));
            }
            return this.__EventManager_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSharedStylesHost_23", {
        get: function () {
            if ((this.__DomSharedStylesHost_23 == null)) {
                (this.__DomSharedStylesHost_23 = new import16.DomSharedStylesHost(this._DOCUMENT_19));
            }
            return this.__DomSharedStylesHost_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_24", {
        get: function () {
            if ((this.__AnimationDriver_24 == null)) {
                (this.__AnimationDriver_24 = import4._resolveDefaultAnimationDriver());
            }
            return this.__AnimationDriver_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_25", {
        get: function () {
            if ((this.__DomRootRenderer_25 == null)) {
                (this.__DomRootRenderer_25 = new import17.DomRootRenderer_(this._DOCUMENT_19, this._EventManager_22, this._DomSharedStylesHost_23, this._AnimationDriver_24));
            }
            return this.__DomRootRenderer_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_26", {
        get: function () {
            if ((this.__RootRenderer_26 == null)) {
                (this.__RootRenderer_26 = import50._createConditionalRootRenderer(this._DomRootRenderer_25, this.parent.get(import50.NgProbeToken, null)));
            }
            return this.__RootRenderer_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_27", {
        get: function () {
            if ((this.__DomSanitizer_27 == null)) {
                (this.__DomSanitizer_27 = new import18.DomSanitizerImpl());
            }
            return this.__DomSanitizer_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_28", {
        get: function () {
            if ((this.__Sanitizer_28 == null)) {
                (this.__Sanitizer_28 = this._DomSanitizer_27);
            }
            return this.__Sanitizer_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_29", {
        get: function () {
            if ((this.__ViewUtils_29 == null)) {
                (this.__ViewUtils_29 = new import19.ViewUtils(this._RootRenderer_26, this._APP_ID_18, this._Sanitizer_28));
            }
            return this.__ViewUtils_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_30", {
        get: function () {
            if ((this.__IterableDiffers_30 == null)) {
                (this.__IterableDiffers_30 = import3._iterableDiffersFactory());
            }
            return this.__IterableDiffers_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_31", {
        get: function () {
            if ((this.__KeyValueDiffers_31 == null)) {
                (this.__KeyValueDiffers_31 = import3._keyValueDiffersFactory());
            }
            return this.__KeyValueDiffers_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_32", {
        get: function () {
            if ((this.__SharedStylesHost_32 == null)) {
                (this.__SharedStylesHost_32 = this._DomSharedStylesHost_23);
            }
            return this.__SharedStylesHost_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_33", {
        get: function () {
            if ((this.__Title_33 == null)) {
                (this.__Title_33 = new import20.Title());
            }
            return this.__Title_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RadioControlRegistry_34", {
        get: function () {
            if ((this.__RadioControlRegistry_34 == null)) {
                (this.__RadioControlRegistry_34 = new import21.RadioControlRegistry());
            }
            return this.__RadioControlRegistry_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_FormBuilder_35", {
        get: function () {
            if ((this.__FormBuilder_35 == null)) {
                (this.__FormBuilder_35 = new import22.FormBuilder());
            }
            return this.__FormBuilder_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_36", {
        get: function () {
            if ((this.__BrowserXhr_36 == null)) {
                (this.__BrowserXhr_36 = new import23.BrowserXhr());
            }
            return this.__BrowserXhr_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_37", {
        get: function () {
            if ((this.__ResponseOptions_37 == null)) {
                (this.__ResponseOptions_37 = new import24.BaseResponseOptions());
            }
            return this.__ResponseOptions_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_38", {
        get: function () {
            if ((this.__XSRFStrategy_38 == null)) {
                (this.__XSRFStrategy_38 = import8._createDefaultCookieXSRFStrategy());
            }
            return this.__XSRFStrategy_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_39", {
        get: function () {
            if ((this.__XHRBackend_39 == null)) {
                (this.__XHRBackend_39 = new import25.XHRBackend(this._BrowserXhr_36, this._ResponseOptions_37, this._XSRFStrategy_38));
            }
            return this.__XHRBackend_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_40", {
        get: function () {
            if ((this.__RequestOptions_40 == null)) {
                (this.__RequestOptions_40 = new import26.BaseRequestOptions());
            }
            return this.__RequestOptions_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_41", {
        get: function () {
            if ((this.__Http_41 == null)) {
                (this.__Http_41 = import8.httpFactory(this._XHRBackend_39, this._RequestOptions_40));
            }
            return this.__Http_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_CONFIGURATION_42", {
        get: function () {
            if ((this.__ROUTER_CONFIGURATION_42 == null)) {
                (this.__ROUTER_CONFIGURATION_42 = {});
            }
            return this.__ROUTER_CONFIGURATION_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LocationStrategy_43", {
        get: function () {
            if ((this.__LocationStrategy_43 == null)) {
                (this.__LocationStrategy_43 = import7.provideLocationStrategy(this.parent.get(import51.PlatformLocation), this.parent.get(import52.APP_BASE_HREF, null), this._ROUTER_CONFIGURATION_42));
            }
            return this.__LocationStrategy_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Location_44", {
        get: function () {
            if ((this.__Location_44 == null)) {
                (this.__Location_44 = new import27.Location(this._LocationStrategy_43));
            }
            return this.__Location_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_UrlSerializer_45", {
        get: function () {
            if ((this.__UrlSerializer_45 == null)) {
                (this.__UrlSerializer_45 = new import28.DefaultUrlSerializer());
            }
            return this.__UrlSerializer_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RouterOutletMap_46", {
        get: function () {
            if ((this.__RouterOutletMap_46 == null)) {
                (this.__RouterOutletMap_46 = new import29.RouterOutletMap());
            }
            return this.__RouterOutletMap_46;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgModuleFactoryLoader_47", {
        get: function () {
            if ((this.__NgModuleFactoryLoader_47 == null)) {
                (this.__NgModuleFactoryLoader_47 = new import30.SystemJsNgModuleLoader(this._Compiler_17, this.parent.get(import30.SystemJsNgModuleLoaderConfig, null)));
            }
            return this.__NgModuleFactoryLoader_47;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTES_48", {
        get: function () {
            if ((this.__ROUTES_48 == null)) {
                (this.__ROUTES_48 = [[
                        {
                            path: '',
                            redirectTo: 'auth',
                            pathMatch: 'full'
                        },
                        {
                            path: 'mainApp',
                            component: import53.MainComponent,
                            children: [
                                {
                                    path: '',
                                    redirectTo: 'arena',
                                    pathMatch: 'full'
                                },
                                {
                                    path: 'arena',
                                    component: import54.ArenaComponent
                                }
                            ]
                        },
                        {
                            path: 'auth',
                            component: import55.AuthenticationComponent,
                            children: [
                                {
                                    path: '',
                                    redirectTo: 'signup',
                                    pathMatch: 'full'
                                },
                                {
                                    path: 'signup',
                                    component: import56.SignUpComponent
                                },
                                {
                                    path: 'signin',
                                    component: import57.LoginComponent
                                },
                                {
                                    path: 'logout',
                                    component: import58.LogoutComponent
                                }
                            ]
                        }
                    ]
                ]);
            }
            return this.__ROUTES_48;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Router_49", {
        get: function () {
            if ((this.__Router_49 == null)) {
                (this.__Router_49 = import7.setupRouter(this._ApplicationRef_16, this._UrlSerializer_45, this._RouterOutletMap_46, this._Location_44, this, this._NgModuleFactoryLoader_47, this._Compiler_17, this._ROUTES_48, this._ROUTER_CONFIGURATION_42));
            }
            return this.__Router_49;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ActivatedRoute_50", {
        get: function () {
            if ((this.__ActivatedRoute_50 == null)) {
                (this.__ActivatedRoute_50 = import7.rootRoute(this._Router_49));
            }
            return this.__ActivatedRoute_50;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_51", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_51 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_51 = [import7.initialRouterNavigation(this._Router_49, this._ROUTER_CONFIGURATION_42)]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_51;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AuthService_52", {
        get: function () {
            if ((this.__AuthService_52 == null)) {
                (this.__AuthService_52 = new import31.AuthService(this._Http_41));
            }
            return this.__AuthService_52;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_GameListServices_53", {
        get: function () {
            if ((this.__GameListServices_53 == null)) {
                (this.__GameListServices_53 = new import32.GameListServices(this._Http_41));
            }
            return this.__GameListServices_53;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_OpponentFindService_54", {
        get: function () {
            if ((this.__OpponentFindService_54 == null)) {
                (this.__OpponentFindService_54 = new import33.OpponentFindService(this._Http_41, this._GameListServices_53));
            }
            return this.__OpponentFindService_54;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SocketService_55", {
        get: function () {
            if ((this.__SocketService_55 == null)) {
                (this.__SocketService_55 = new import34.SocketService(this._GameListServices_53));
            }
            return this.__SocketService_55;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ArenaServices_56", {
        get: function () {
            if ((this.__ArenaServices_56 == null)) {
                (this.__ArenaServices_56 = new import35.ArenaServices(this._Http_41));
            }
            return this.__ArenaServices_56;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_QuestionServices_57", {
        get: function () {
            if ((this.__QuestionServices_57 == null)) {
                (this.__QuestionServices_57 = new import36.QuestionServices(this._Http_41));
            }
            return this.__QuestionServices_57;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_QuestionAnswerServices_58", {
        get: function () {
            if ((this.__QuestionAnswerServices_58 == null)) {
                (this.__QuestionAnswerServices_58 = new import37.QuestionAnswerServices(this._Http_41));
            }
            return this.__QuestionAnswerServices_58;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import3.ApplicationModule();
        this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._InternalFormsSharedModule_3 = new import5.InternalFormsSharedModule();
        this._FormsModule_4 = new import6.FormsModule();
        this._ROUTER_FORROOT_GUARD_5 = import7.provideForRootGuard(this.parent.get(import59.Router, null));
        this._RouterModule_6 = new import7.RouterModule(this._ROUTER_FORROOT_GUARD_5);
        this._ReactiveFormsModule_7 = new import6.ReactiveFormsModule();
        this._HttpModule_8 = new import8.HttpModule();
        this._AppModule_9 = new import1.AppModule();
        this._ErrorHandler_12 = import4.errorHandler();
        this._ApplicationInitStatus_13 = new import10.ApplicationInitStatus(this.parent.get(import10.APP_INITIALIZER, null));
        this._Testability_14 = new import11.Testability(this.parent.get(import49.NgZone));
        this._ApplicationRef__15 = new import12.ApplicationRef_(this.parent.get(import49.NgZone), this.parent.get(import60.Console), this, this._ErrorHandler_12, this, this._ApplicationInitStatus_13, this.parent.get(import11.TestabilityRegistry, null), this._Testability_14);
        return this._AppModule_9;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import5.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_3;
        }
        if ((token === import6.FormsModule)) {
            return this._FormsModule_4;
        }
        if ((token === import7.ROUTER_FORROOT_GUARD)) {
            return this._ROUTER_FORROOT_GUARD_5;
        }
        if ((token === import7.RouterModule)) {
            return this._RouterModule_6;
        }
        if ((token === import6.ReactiveFormsModule)) {
            return this._ReactiveFormsModule_7;
        }
        if ((token === import8.HttpModule)) {
            return this._HttpModule_8;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_9;
        }
        if ((token === import61.LOCALE_ID)) {
            return this._LOCALE_ID_10;
        }
        if ((token === import9.NgLocalization)) {
            return this._NgLocalization_11;
        }
        if ((token === import62.ErrorHandler)) {
            return this._ErrorHandler_12;
        }
        if ((token === import10.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_13;
        }
        if ((token === import11.Testability)) {
            return this._Testability_14;
        }
        if ((token === import12.ApplicationRef_)) {
            return this._ApplicationRef__15;
        }
        if ((token === import12.ApplicationRef)) {
            return this._ApplicationRef_16;
        }
        if ((token === import13.Compiler)) {
            return this._Compiler_17;
        }
        if ((token === import46.APP_ID)) {
            return this._APP_ID_18;
        }
        if ((token === import63.DOCUMENT)) {
            return this._DOCUMENT_19;
        }
        if ((token === import14.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_20;
        }
        if ((token === import15.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_21;
        }
        if ((token === import15.EventManager)) {
            return this._EventManager_22;
        }
        if ((token === import16.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_23;
        }
        if ((token === import64.AnimationDriver)) {
            return this._AnimationDriver_24;
        }
        if ((token === import17.DomRootRenderer)) {
            return this._DomRootRenderer_25;
        }
        if ((token === import65.RootRenderer)) {
            return this._RootRenderer_26;
        }
        if ((token === import18.DomSanitizer)) {
            return this._DomSanitizer_27;
        }
        if ((token === import66.Sanitizer)) {
            return this._Sanitizer_28;
        }
        if ((token === import19.ViewUtils)) {
            return this._ViewUtils_29;
        }
        if ((token === import67.IterableDiffers)) {
            return this._IterableDiffers_30;
        }
        if ((token === import68.KeyValueDiffers)) {
            return this._KeyValueDiffers_31;
        }
        if ((token === import16.SharedStylesHost)) {
            return this._SharedStylesHost_32;
        }
        if ((token === import20.Title)) {
            return this._Title_33;
        }
        if ((token === import21.RadioControlRegistry)) {
            return this._RadioControlRegistry_34;
        }
        if ((token === import22.FormBuilder)) {
            return this._FormBuilder_35;
        }
        if ((token === import23.BrowserXhr)) {
            return this._BrowserXhr_36;
        }
        if ((token === import24.ResponseOptions)) {
            return this._ResponseOptions_37;
        }
        if ((token === import69.XSRFStrategy)) {
            return this._XSRFStrategy_38;
        }
        if ((token === import25.XHRBackend)) {
            return this._XHRBackend_39;
        }
        if ((token === import26.RequestOptions)) {
            return this._RequestOptions_40;
        }
        if ((token === import70.Http)) {
            return this._Http_41;
        }
        if ((token === import7.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_42;
        }
        if ((token === import52.LocationStrategy)) {
            return this._LocationStrategy_43;
        }
        if ((token === import27.Location)) {
            return this._Location_44;
        }
        if ((token === import28.UrlSerializer)) {
            return this._UrlSerializer_45;
        }
        if ((token === import29.RouterOutletMap)) {
            return this._RouterOutletMap_46;
        }
        if ((token === import71.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_47;
        }
        if ((token === import72.ROUTES)) {
            return this._ROUTES_48;
        }
        if ((token === import59.Router)) {
            return this._Router_49;
        }
        if ((token === import73.ActivatedRoute)) {
            return this._ActivatedRoute_50;
        }
        if ((token === import46.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_51;
        }
        if ((token === import31.AuthService)) {
            return this._AuthService_52;
        }
        if ((token === import32.GameListServices)) {
            return this._GameListServices_53;
        }
        if ((token === import33.OpponentFindService)) {
            return this._OpponentFindService_54;
        }
        if ((token === import34.SocketService)) {
            return this._SocketService_55;
        }
        if ((token === import35.ArenaServices)) {
            return this._ArenaServices_56;
        }
        if ((token === import36.QuestionServices)) {
            return this._QuestionServices_57;
        }
        if ((token === import37.QuestionAnswerServices)) {
            return this._QuestionAnswerServices_58;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__15.ngOnDestroy();
    };
    return AppModuleInjector;
}(import0.NgModuleInjector));
export var AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
