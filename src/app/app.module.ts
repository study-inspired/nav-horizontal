import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {Route, RouterModule, Routes} from '@angular/router';

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
        ContactComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoute, {})

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
