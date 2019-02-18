import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'smartdesign-base-verticalLayout',
  styleUrls: ['smartdesign-base-verticalLayout.component.css'],
  templateUrl: './smartdesign-base-verticalLayout.component.html',
})
export class smartdesignBaseVerticalLayout implements OnInit {
  @Input() embeddedComponents: any;

  constructor() {


  }
 ngOnInit() {
   console.log(this.embeddedComponents)
 }
}

