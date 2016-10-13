import { NgModule }                     from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser';
import { LocationStrategy,
    HashLocationStrategy
} from '@angular/common';

import { UniversalModule } from 'angular2-universal';

import { AppComponent }                 from './app.component';
import { Ng2BootstrapModule }           from 'ng2-bootstrap/ng2-bootstrap';
import { NAV_DROPDOWN_DIRECTIVES }      from './shared/nav-dropdown.directive';

import { ChartsModule }                 from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES }    from './shared/sidebar.directive';
import { AsideToggleDirective }         from './shared/aside.directive';
import { BreadcrumbsComponent }         from './shared/breadcrumb.component';
import { routing }                      from './app.routing';

//Layouts
import { FullLayoutComponent }          from './layouts/full-layout.component';
import { SimpleLayoutComponent }        from './layouts/simple-layout.component';

//Main view
import { DashboardComponent }           from './dashboard/dashboard.component';

//Components
import { ButtonsComponent }             from './components/buttons.component';
import { CardsComponent }               from './components/cards.component';
import { FormsComponent }               from './components/forms.component';
import { SocialButtonsComponent }       from './components/social-buttons.component';
import { SwitchesComponent }            from './components/switches.component';
import { TablesComponent }              from './components/tables.component';

//Icons
import { FontAwesomeComponent }         from './icons/font-awesome.component';
import { SimpleLineIconsComponent }     from './icons/simple-line-icons.component';

//Widgets
import { WidgetsComponent }             from './widgets/widgets.component';

//Charts
import { ChartsComponent }              from './charts/charts.component';

//Pages
import { p404Component }                from './pages/404.component';
import { p500Component }                from './pages/500.component';
import { LoginComponent }               from './pages/login.component';
import { RegisterComponent } from './pages/register.component';

//DotNet Samples
import { HomeComponent } from './dotnet/home.component';
import { CounterComponent } from './dotnet/counter.component';
import { FetchDataComponent } from './dotnet/fetchdata.component';

@NgModule({
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        BrowserModule,
        routing,
        Ng2BootstrapModule,
        ChartsModule
    ],
    declarations: [
        AppComponent,
        FullLayoutComponent,
        SimpleLayoutComponent,
        DashboardComponent,
        ButtonsComponent,
        CardsComponent,
        FormsComponent,
        SocialButtonsComponent,
        SwitchesComponent,
        TablesComponent,
        FontAwesomeComponent,
        SimpleLineIconsComponent,
        WidgetsComponent,
        ChartsComponent,
        p404Component,
        p500Component,
        LoginComponent,
        RegisterComponent,
        NAV_DROPDOWN_DIRECTIVES,
        BreadcrumbsComponent,
        SIDEBAR_TOGGLE_DIRECTIVES,
        AsideToggleDirective,
        HomeComponent,
        CounterComponent,
        FetchDataComponent
    ],
    providers: [{
        provide: LocationStrategy,
        useClass: HashLocationStrategy
    }],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
