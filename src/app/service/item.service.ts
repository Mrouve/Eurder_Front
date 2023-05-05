import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {map, Observable} from "rxjs";
import {ItemOverview} from "../../../models/ItemOverview";
import {ɵElement, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";
//import {NewItemForm} from "../../../models/NewItemForm";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private varUrl: string;
  constructor(private http:HttpClient) {
    this.varUrl = `${environment.backendUrl}/items`;
  }

  getItems(): Observable<any>{
    return this.http.get<ItemOverview[]>(this.varUrl)
      .pipe(
        map(i=>i.sort((a:ItemOverview, b:ItemOverview) => a.name.localeCompare(b.name)))
      );
  }

  addItem(newItem: ɵTypedOrUntyped<{ [K in keyof { price: string; name: string; description: string; id: string; amountInStock: string }]: ɵElement<{ price: string; name: string; description: string; id: string; amountInStock: string }[K], null> }, ɵFormGroupValue<{ [K in keyof { price: string; name: string; description: string; id: string; amountInStock: string }]: ɵElement<{ price: string; name: string; description: string; id: string; amountInStock: string }[K], null> }>, any>):Observable<any>{
    return this.http.post(this.varUrl, newItem);
  }



}
