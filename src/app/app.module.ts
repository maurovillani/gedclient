import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { ProdottoDettaglioComponent } from './prodotto-dettaglio/prodotto-dettaglio.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProdottiComponent,
    ProdottoDettaglioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
