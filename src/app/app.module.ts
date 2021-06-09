import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RippleModule} from 'primeng/ripple';
import {ConfirmationService, MessageService, PrimeNGConfig} from 'primeng/api';
import {SidebarModule} from 'primeng/sidebar';
import {ToolbarModule} from 'primeng/toolbar';
import {ScrollDispatcher, ViewportRuler} from '@angular/cdk/scrolling';
import {Platform} from '@angular/cdk/platform';
import {ButtonModule} from 'primeng/button';
import {registerLocaleData} from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToolbarComponent} from './common/components/toolbar/toolbar.component';
import {HttpClientModule} from '@angular/common/http';
import {ErrorService} from "./funcionario/service/error.service";

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RippleModule,
    SidebarModule,
    ToolbarModule,
    ButtonModule,
    ToastModule,
    ConfirmDialogModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
  exports: [ToolbarComponent],
  providers: [
    PrimeNGConfig,
    ScrollDispatcher,
    Platform,
    ViewportRuler,
    MessageService,
    ConfirmationService,
    ErrorService,
    {provide: LOCALE_ID, useValue: 'pt-BR'}],
})
export class AppModule {
}
