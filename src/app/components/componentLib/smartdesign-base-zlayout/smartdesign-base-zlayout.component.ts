import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-smartdesign-base-zlayout',
  templateUrl: './smartdesign-base-zlayout.component.html',
  styleUrls: ['./smartdesign-base-zlayout.component.css']
})
export class SmartdesignBaseZLayoutComponent implements OnInit {
  @Input() embeddedComponents: any;
  constructor() { }

  ngOnInit() {
  }

}
