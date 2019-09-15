import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../prodotto';
import { ProdottoService } from '../prodotto.service';

@Component( {
    selector: 'app-prodotti',
    templateUrl: './prodotti.component.html',
    styleUrls: ['./prodotti.component.css']
} )
export class ProdottiComponent implements OnInit {

    prodotti: Prodotto[];

    constructor( private prodottoService: ProdottoService ) { }

    ngOnInit() {
        this.getProdotti();
    }

    getProdotti(): void {
        this.prodottoService.getProdotti()
            .subscribe( prodotti => this.prodotti = prodotti.data );
    }

}
