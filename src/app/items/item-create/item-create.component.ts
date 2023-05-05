import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
    description:['', Validators.required, Validators.maxLength(255)],
    price:['', Validators.required],
    amountOfStock:['', Validators.required],
  })

  maxlength:number = 255;
  counter:string = ``;
  textAreaValue:string = '';
  characterCount:number = 0;

  constructor(private itemService:ItemService, private formBuilder:FormBuilder){
    this.newItemForm.reset();
  }

  onSubmit():void{
    this.itemService.addItem(this.newItemForm.value).subscribe(content => {
      this.newItemForm.reset();
    });
  }

  public ngOnInit(): void {
    this.onValueChange();
  }

  public onValueChange(): void{
    this.characterCount =  255-(this.newItemForm.get('description')?.value?.length || 0);
    this.checkIfNegative(this.characterCount);
    this.counter = `${this.characterCount}/${this.maxlength}`;


  }

  public checkIfNegative(remainingCharacters:number): void{
    if(remainingCharacters <0){
      this.characterCount = 0;
    }
  }



}
