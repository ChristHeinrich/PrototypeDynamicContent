import { Component, OnInit } from '@angular/core';
import {FieldConfig} from '../../../types/field.interface';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-horizontal-layout',
  template: `<div class="horizontal">
  
    <app-select class="border"></app-select>
    <app-select class="border"></app-select>
  </div>`,
  styles: [`
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
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
