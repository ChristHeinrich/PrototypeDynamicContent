import { InMemoryDbService } from 'angular-in-memory-web-api';
import { FieldConfig } from "../types/field.interface";
import { Injectable } from '@angular/core';
import { SIMPLELAYOUT } from '../samples/layouts/simple-layout';



@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  createDb() {
    const layout = SIMPLELAYOUT;
    return {layout};
  }

  genId(layout): number {
    return layout.length > 0 ? Math.max(...layout.map(hero => hero.id)) + 1 : 11;
  }

}
