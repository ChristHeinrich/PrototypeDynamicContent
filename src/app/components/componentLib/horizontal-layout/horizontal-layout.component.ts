import {Component, Input, OnInit} from '@angular/core';
import {FieldConfig} from '../../../types/field.interface';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-horizontal-layout',
  template: `<div class="horizontal">
    <!--<form>-->
      <!--<input type="text" name="id" maxlength="30" value="" />-->
      <!--<input type="text" name="pw" maxlength="30" value="" />-->
    <!--</form>-->

    <!--<dynamic-form [fields]="fields">  </dynamic-form>-->
    <!--<dynamic-form [fields]="fields">  </dynamic-form>-->
  </div>`,
  styles: [`
    /*input {display: inline}*/
    .horizontal {
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
export class HorizontalLayoutComponent implements OnInit {
  @Input() fields: FieldConfig[] = [];
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
