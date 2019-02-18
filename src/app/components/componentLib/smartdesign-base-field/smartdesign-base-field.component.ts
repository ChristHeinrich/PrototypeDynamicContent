import {Component, OnInit, Directive, Input} from '@angular/core';
import {ComponentTypeService} from '../../../services/componentType.service';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {FieldComponent} from '../../../types/FieldComponent';

@Component({
  selector: 'smartdesign-base-field',
  templateUrl: './smartdesign-base-field.component.html',
  styleUrls: ['./smartdesign-base-field.component.css']
})
export class SmartdesignBaseFieldComponent implements OnInit {
  inputType : string;
  @Input() formConfig: FieldComponent;

  constructor(public componentService : ComponentTypeService) {}

  private findCorrespondingType(){
    return this.componentService.metaData.filter(elem  => this.formConfig.ref === elem.name )[0].type;
  }

  ngOnInit() {
    this.inputType = this.componentService.metaData.filter(elem  => this.formConfig.ref === elem.name )[0].type;
  }
}

