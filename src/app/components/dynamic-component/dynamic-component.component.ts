import {Component, OnInit, Directive, Input} from '@angular/core';

@Component({
  selector: 'dynamicComponent',
  templateUrl: './dynamic-component.component.html',
  styleUrls: [ './dynamic-component.component.css']
})
export class DynamicComponentComponent implements OnInit {
  @Input() formConfig;
  actualTypeInfo: string = "dummy"
  constructor() {

  }

  ngOnInit() {

  }

}

