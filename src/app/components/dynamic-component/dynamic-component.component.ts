import {Component, OnInit, Directive, Input} from '@angular/core';

@Component({
  selector: 'dynamicComponent',
  templateUrl: './dynamic-component.component.html'
})
export class DynamicComponentComponent implements OnInit {
  @Input() formConfig;
  // @Input() children;
  actualTypeInfo: string = "dummy"
  constructor() {

  }

  ngOnInit() {

  }

}

