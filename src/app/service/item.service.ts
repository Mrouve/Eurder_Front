import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {map, Observable} from "rxjs";
import {ItemOverview} from "../../../models/ItemOverview";

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
}
