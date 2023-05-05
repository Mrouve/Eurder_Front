import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemOverviewComponent} from "./items/item-overview/item-overview.component";
import {ItemCreateComponent} from "./items/item-create/item-create.component";

const routes: Routes = [
  { path: '', redirectTo: '/item-overview', pathMatch: 'full' },
  { path: 'item-overview', component: ItemOverviewComponent },
  { path: 'item-creation', component: ItemCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
