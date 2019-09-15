import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Prodotto } from '../prodotto';
import { ProdottoService } from '../prodotto.service';

@Component( {
    selector: 'app-prodotto-dettaglio',
    templateUrl: './prodotto-dettaglio.component.html',
    styleUrls: ['./prodotto-dettaglio.component.css']
} )
export class ProdottoDettaglioComponent implements OnInit {

    prodotto: Prodotto;
    constructor( private route: ActivatedRoute, private prodottoService: ProdottoService ) { }

    ngOnInit() {
        this.getProdotto();
    }

    getProdotto(): void {
        const id = +this.route.snapshot.paramMap.get( 'id' );
        this.prodottoService.getProdotto( id )
            .subscribe( prodotto => this.prodotto = prodotto.data );
    }
}
