import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComponentTypeService {
  types: any[] = [];
  metaData : any[] = [];

  addTypes(types: any) {
    this.types.push(types);
  }

  clearTypes() {
    this.types = [];
  }

  setMetaData(newMetaData: any) {
    this.metaData = newMetaData;
  }

  clearMetaData() {
    this.metaData = [];
  }
}
