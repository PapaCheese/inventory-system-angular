import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators'
import { ItemInterface } from './ItemInterface';

@Injectable()
export class ItemService {
    private url = 'http://localhost:8080/inventory/'
    constructor(private http: HttpClient) { }

    getItems(): Observable<ItemInterface[]> {
        return this.http.get<ItemInterface[]>(this.url + 'get-all-items').pipe(
            catchError(
                (error: HttpErrorResponse) => {
                    console.log(error)
                    return throwError(error);
                }
            )
        )
    }

    getItemById(id: number): Observable<ItemInterface> {
        return this.getItems().pipe(
            map((items: ItemInterface[]) => items.find(p => p.id === id))
        )
    }

    withdrawItemAmount(id: number, quantity: number) {
        return this.http.get(this.url + 'withdraw-amount/' + id + '/' + quantity);
    }

    depositItemAmount(id: number, quantity: number) {
        return this.http.get(this.url + 'deposit-amount/' + id + '/' + quantity);
    }

    createItem(item: ItemInterface) {
        return this.http.post<number>(this.url + 'create-item', item, { withCredentials: true });
    }

    deleteItem(item: ItemInterface) {
        return this.http.post(this.url + 'delete-item', item, { withCredentials: true });
    }

    deleteItemById(id: number) {
        return this.http.delete(this.url + 'delete-item-by-id/' + id, { withCredentials: true });
    }
}
