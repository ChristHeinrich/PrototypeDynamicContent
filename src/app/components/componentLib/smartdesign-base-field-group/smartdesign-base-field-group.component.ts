import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-smartdesign-base-field-group',
  templateUrl: './smartdesign-base-field-group.component.html',
  styleUrls: ['./smartdesign-base-field-group.component.css']
})
export class SmartdesignBaseFieldGroupComponent implements OnInit {
  @Input()embeddedComponents: any;
  constructor() { }

  ngOnInit() {
  }

}
