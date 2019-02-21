import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-smartdesign-base-linkfield',
  templateUrl: './smartdesign-base-linkfield.component.html',
  styleUrls: ['./smartdesign-base-linkfield.component.css']
})
export class SmartdesignBaseLinkfieldComponent implements OnInit {
 @Input() formConfig;
  constructor() { }

  ngOnInit() {
  }

}
