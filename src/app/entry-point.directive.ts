import {  Directive,  ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appEntryPoint]'
})
export class EntryPointDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
    //console.log( viewContainerRef._view.)
  }

}
