import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {Route, RouterModule, Routes} from '@angular/router';
import { NavVerticalDirective } from './nav-vertical.directive';
import {NgZorroAntdModule, NZ_I18N, en_US, NzButtonModule} from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

const appRoute: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: HomeComponent},
    {path: 'contact', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        NavVerticalDirective
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoute, {}),
        NzButtonModule,
        FormsModule,
        HttpClientModule

    ],
    providers: [{ provide: NZ_I18N, useValue: en_US }],
    bootstrap: [AppComponent]
})
export class AppModule {}
