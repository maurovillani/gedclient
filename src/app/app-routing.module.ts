import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { ProdottoDettaglioComponent } from './prodotto-dettaglio/prodotto-dettaglio.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'prodotti', component: ProdottiComponent },
    { path: 'prodotti/:id', component: ProdottoDettaglioComponent }
];


@NgModule( {
    imports: [RouterModule.forRoot( routes )],
    exports: [RouterModule]
} )
export class AppRoutingModule { }
