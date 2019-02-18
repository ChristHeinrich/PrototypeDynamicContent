import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'smartdesign-base-horizontalLayout',
  styleUrls: ['smartdesign-base-horizontalLayout.component.css'],
  templateUrl: './smartdesign-base-horizontalLayout.component.html',
})
export class smartdesignBaseHorizontalLayout implements OnInit{
  @Input() embeddedComponents: any;

  ngOnInit() {

  }

}

