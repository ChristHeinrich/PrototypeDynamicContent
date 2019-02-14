
import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  ViewContainerRef,
  ElementRef,
  ViewChild
} from "@angular/core";
import { InputComponent } from "../componentLib/input/input.component";
import { VerticalLayoutComponent } from "../componentLib/vertical-layout/vertical-layout.component";
import {HorizontalLayoutComponent} from '../componentLib/horizontal-layout/horizontal-layout.component';
import {SmartdesignBaseFieldComponent} from '../componentLib/smartdesign-base-field/smartdesign-base-field.component'
import {SmartdesignBaseFieldGroupComponent} from '../componentLib/smartdesign-base-field-group/smartdesign-base-field-group.component'
import {FieldConfig} from '../../types/field.interface';
import {FormGroup} from '@angular/forms';
import {ComponentTypeService} from '../../services/componentType.service';

const componentMapper = {
  "smartdesign.base.Field":SmartdesignBaseFieldComponent,
  "smartdesign.base.FieldGroup":SmartdesignBaseFieldGroupComponent ,
  "smartdesign.base.VerticalLayout": VerticalLayoutComponent,
  "smartdesign.base.HorizontalLayout": HorizontalLayoutComponent,
  "smartdesign.base.Message": SmartdesignBaseFieldComponent,
  "smartdesign.base.ZLayout": VerticalLayoutComponent,
  "smartdesign.base.LinkField":SmartdesignBaseFieldComponent ,
  //TODO: continue
};
@Directive({
  selector: "[dynamicComponent]"
})

export class DynamicComponentComponent implements OnInit {
  @Input() component;
  @Input() parent: ViewContainerRef;
  // @ViewChild(el.nativeElement.parentElement, {read: ViewContainerRef}) parent2;
  // @Input() group: FormGroup;

  componentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef,
    private componentService : ComponentTypeService
  ) {}

  ngOnInit() {
    // console.log(this.parent);
    if (!this.parent) this.parent = this.container;
    if (componentMapper[this.component.type]) { //layouts don't have a type and are ignored
      const factory = this.resolver.resolveComponentFactory(
        componentMapper[this.component.type]
      );
      this.componentService.addTypes(this.component);
      // this.componentRef = this.parent.createComponent(factory);
      this.componentRef = this.container.createComponent(factory);
      // this.componentRef = this.container.injector.view.viewContainerParent.createComponent(factory);
      // this.componentRef = this.container["_view"].viewContainerParent.createComponent(factory);
      // console.log(this.container.element.nativeElement.parentElement);
      // console.log(this.container.element.nativeElement);
      // console.log(factory.selector);

      // this.componentRef.instance.field = this.component;
      // this.componentRef.instance.group = this.parent;
      // this.componentRef.instance.parent = parent;
    }
  }

}
