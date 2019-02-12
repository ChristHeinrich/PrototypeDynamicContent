import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FieldConfig} from '../../../types/field.interface';
import {FormGroup} from '@angular/forms';
import {DynamicFormComponent} from '../../dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-vertical-layout',
  template: `<div class="vertical">
    <!--<dynamic-form [fields]="fields">  </dynamic-form>-->
  </div>`,
  styles: [`
    .vertical {
      display: flex;
      flex-direction: row;
    }
    .border {border: 1px solid green}
  :host {
    display: block;
    padding: 32px;
    border: 1px solid black;
    border-radius: 8px;
  }
  `]
})
export class VerticalLayoutComponent implements OnInit {
  @Input() fields: FieldConfig[] = [];
  @Input() layout: String;
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
