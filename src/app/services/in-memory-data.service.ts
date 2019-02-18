import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { FieldConfig } from "../types/field.interface";
import { Injectable } from '@angular/core';
// import { DSL } from '../samples/layouts/short-simple-dsl-layout';
import { DSL } from '../samples/layouts/dtb-layout';
import {DslDescription} from '../types/dsl.interface';
// import { SIMPLELAYOUT } from '../samples/layouts/simple-dslDescription';



@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  createDb() {
    const dsl = DSL;
    return {dsl};
  }
}
