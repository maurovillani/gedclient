import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Prodotto } from './prodotto';
import { Observable } from "rxjs";

@Injectable( {
    providedIn: 'root'
} )
export class ProdottoService {

    private prodottiUrl = 'http://localhost:8000/api/v1/prodotti/';

    constructor( private http: HttpClient ) { }
    
    getProdotti(): Observable<Prodotto[]> {
        return this.http.get<Prodotto[]>(this.prodottiUrl)
        .pipe(catchError(this.handleError<Prodotto[]>('getHeroes', [])));
    }
    
    getProdotto(id: number): Observable<Prodotto[]> {
        
        return this.http.get<Prodotto[]>(this.prodottiUrl + id)
        .pipe(catchError(this.handleError<Prodotto[]>('getHeroes', [])));
    }
    
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead

          // TODO: better job of transforming error for user consumption
          this.log(`${operation} failed: ${error.message}`);

          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
    
}
