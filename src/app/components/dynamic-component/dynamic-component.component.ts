
import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  ViewContainerRef
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
  "smartdesign.base.Message": VerticalLayoutComponent,
  "smartdesign.base.ZLayout": VerticalLayoutComponent,
  "smartdesign.base.LinkField":VerticalLayoutComponent ,
  //TODO: continue
};
@Directive({
  selector: "[dynamicComponent]"
})

export class DynamicComponentComponent implements OnInit {
  @Input() component;
  @Input() parent: any;
  // @Input() group: FormGroup;

  componentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef,
    private componentService : ComponentTypeService
  ) {}

  ngOnInit() {
    if (componentMapper[this.component.type]) { //layouts don't have a type and are ignored
      const factory = this.resolver.resolveComponentFactory(
        componentMapper[this.component.type]
      );
      this.componentService.addTypes(this.component);
      this.componentRef = this.container.createComponent(factory);
      this.componentRef.instance.field = this.component;
      // this.componentRef.instance.group = this.group;
    }
  }

}
