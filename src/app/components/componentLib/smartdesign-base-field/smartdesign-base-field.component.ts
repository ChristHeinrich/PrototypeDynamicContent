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

  constructor(public componentService : ComponentTypeService) {
    this.inputType = this.findCorrespondingType(componentService.types);
    console.log(this.inputType);
    this.componentService.clearTypes();
  }

  private findCorrespondingType(actualTypes : any){
    if(actualTypes.length===1 && actualTypes[0].ref){
      for(let index = 0;index<this.componentService.metaData.length;index++){
          for(let innerIndex = 0; innerIndex<this.componentService.metaData[index].fields.length; innerIndex++){
            if(this.componentService.metaData[index].fields[innerIndex].name === actualTypes[0].ref){
              return this.componentService.metaData[index].fields[innerIndex].type;
            }
          }
        }
    }
    else{
      return "DUMMY"
    }
  }

  ngOnInit() {

  }

}

