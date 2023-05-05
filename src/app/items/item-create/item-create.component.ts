import { Component } from '@angular/core';
import {ItemService} from "../../service/item.service";
import {FormBuilder, Validators} from "@angular/forms";
//import {NewItemForm} from "../../../../models/NewItemForm";

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['../../app.component.css']
})
export class ItemCreateComponent {

  newItemForm = this.formBuilder.group({
    id: '',
    name:['', Validators.required],
    description:['', Validators.required],
    price:['', Validators.required],
    amountOfStock:['', Validators.required],
  })


  constructor(private itemService:ItemService, private formBuilder:FormBuilder){
    this.newItemForm.reset();
  }

  onSubmit():void{

    this.itemService.addItem(this.newItemForm.value).subscribe(content => {
      this.newItemForm.reset();
    });
  }

}
