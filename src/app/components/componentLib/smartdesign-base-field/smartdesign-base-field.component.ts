import {Component, OnInit, Directive, Input} from '@angular/core';
import {ComponentTypeService} from '../../../services/componentType.service';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'smartdesign-base-field',
  templateUrl: './smartdesign-base-field.component.html',
  styleUrls: ['./smartdesign-base-field.component.css']
})
export class SmartdesignBaseFieldComponent implements OnInit {
  inputType : string;
  actualTypeInfo: any;


  constructor(public componentService : ComponentTypeService) {
    this.inputType  = this.findCorrespondingType(componentService.types);
    this.componentService.clearTypes();
  }

  private findCorrespondingType(actualTypes : any){
    let actualType = actualTypes[actualTypes.length-1];
    this.setActualType(actualType);
    for(let index = 0; index < this.componentService.metaData.length; index++){
        for(let innerIndex = 0; innerIndex < this.componentService.metaData[index].fields.length; innerIndex++){
          if(this.componentService.metaData[index].fields[innerIndex].name === actualType.ref){
            this.setActualType(this.componentService.metaData[index].fields[innerIndex]);
            return this.componentService.metaData[index].fields[innerIndex].type;
          }
        }
      }
      return "DUMMY"
  }

  private setActualType(actualType: any) {
    this.actualTypeInfo = actualType.type.toLowerCase() + ": " + actualType.name;
  }

  ngOnInit() {

  }

}

