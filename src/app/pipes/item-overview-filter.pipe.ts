import { Pipe, PipeTransform } from '@angular/core';
import {ItemOverview} from "../../../models/ItemOverview";

@Pipe({
  name: 'itemOverviewFilter'
})
export class ItemOverviewFilterPipe implements PipeTransform {

  transform(value: ItemOverview[], nameToFind:string): any[] {
    let nameLC = nameToFind.toLocaleLowerCase();
    return value.filter(v=>v.name.toLocaleLowerCase().includes(nameLC));
  }

}
