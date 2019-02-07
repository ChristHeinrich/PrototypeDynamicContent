import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { FieldConfig } from "../types/field.interface";
import { Injectable } from '@angular/core';
import { DSL } from '../samples/layouts/simple-dsl-layout';
// import { SIMPLELAYOUT } from '../samples/layouts/simple-appsDescription';



@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  createDb() {
    const dsl = DSL;
    return {dsl};
  }

  // genId(appsDescription): number {
  //   return appsDescription.length > 0 ? Math.max(...appsDescription.map(appsDescription => appsDescription.id)) + 1 : 11;
  // }

}
