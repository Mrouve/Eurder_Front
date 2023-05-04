import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemOverviewComponent } from './item-overview/item-overview.component';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';



@NgModule({
  declarations: [
    ItemOverviewComponent,
    ItemCreateComponent,
    ItemDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ItemsModule { }
