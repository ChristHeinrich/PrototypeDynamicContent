import { Component, OnInit } from '@angular/core';
import {FieldConfig} from '../../../types/field.interface';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-vertical-layout',
  template: `<div class="vertical">

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
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
