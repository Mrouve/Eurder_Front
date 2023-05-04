import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../service/item.service";
import {ItemOverview} from "../../../../models/ItemOverview";

@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html',
  styleUrls: ['../../app.component.css']
    // ['./item-overview.component.css']
})
export class ItemOverviewComponent implements OnInit {

  itemsOverview: ItemOverview[] = [];
  itemNameToFind: string;
  constructor(private itemService:ItemService){
    this.itemNameToFind = '';
  }

  getItems(): void{
    this.itemService.getItems()
      .subscribe(items => this.itemsOverview = items);
  }

  ngOnInit() {
    this.getItems();
  }

}


