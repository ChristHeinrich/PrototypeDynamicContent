import { Component, Input } from '@angular/core';
import {WidgetComponent} from '../../../types/WidgetComponent';

@Component({
  selector: 'app-smartdesign-base-message',
  templateUrl: './smartdesign-base-message.component.html',
  styleUrls: ['./smartdesign-base-message.component.css']
})
export class SmartdesignBaseMessageComponent   {
  @Input() formConfig: WidgetComponent;
  constructor() {}
}
