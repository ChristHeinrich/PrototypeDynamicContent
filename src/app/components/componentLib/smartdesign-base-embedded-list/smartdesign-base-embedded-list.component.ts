import {Component, Input, OnInit} from '@angular/core';
import {WidgetComponent} from '../../../types/WidgetComponent';

@Component({
  selector: 'app-smartdesign-base-embedded-list',
  templateUrl: './smartdesign-base-embedded-list.component.html',
  styleUrls: ['./smartdesign-base-embedded-list.component.css']
})
export class SmartdesignBaseEmbeddedListComponent implements OnInit {
  @Input() formConfig: WidgetComponent;
  constructor() { }

  ngOnInit() {

  }

}
