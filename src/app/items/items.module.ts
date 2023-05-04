import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemOverviewComponent } from './item-overview/item-overview.component';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import {FormsModule} from "@angular/forms";
import {AppModule} from "../app.module";
import {ItemOverviewFilterPipe} from "../pipes/item-overview-filter.pipe";



@NgModule({
  declarations: [
    ItemOverviewComponent,
    ItemCreateComponent,
    ItemDetailComponent,
    ItemOverviewFilterPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppModule,
  ]
})
export class ItemsModule { }
