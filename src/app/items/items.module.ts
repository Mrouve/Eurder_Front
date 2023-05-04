import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemOverviewComponent } from './item-overview/item-overview.component';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppModule} from "../app.module";
import {ItemOverviewFilterPipe} from "../pipes/item-overview-filter.pipe";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    ItemOverviewComponent,
    ItemCreateComponent,
    ItemDetailComponent,
    ItemOverviewFilterPipe,
  ],
  // exports: [
  //   ItemOverviewFilterPipe,
  // ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    // AppModule,
    ReactiveFormsModule,
  ]
})
export class ItemsModule { }
