import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnInit,
  ViewContainerRef
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../types/field.interface";
import { InputComponent } from "../componentLib/input/input.component";
import { ButtonComponent } from "../componentLib/button/button.component";
import { SelectComponent } from "../componentLib/select/select.component";
import { DateComponent } from "../componentLib/date/date.component";
import { RadiobuttonComponent } from "../componentLib/radiobutton/radiobutton.component";
import { CheckboxComponent } from "../componentLib/checkbox/checkbox.component";
import { VerticalLayoutComponent } from "../componentLib/vertical-layout/vertical-layout.component";

const componentMapper = {
  input: InputComponent,
  button: ButtonComponent,
  select: SelectComponent,
  date: DateComponent,
  radiobutton: RadiobuttonComponent,
  checkbox: VerticalLayoutComponent
};
@Directive({
  selector: "[dynamicField]"
})
export class DynamicFieldDirective implements OnInit {
  @Input() field: FieldConfig;
  @Input() group: FormGroup;
  @Input() layout: string;
  componentRef: any;
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}
  ngOnInit() {
    if (componentMapper[this.field.type]) { //layouts don't have a type and are ignored
      const factory = this.resolver.resolveComponentFactory(
        componentMapper[this.field.type]
      );
      this.componentRef = this.container.createComponent(factory);
      this.componentRef.instance.field = this.field;
      this.componentRef.instance.group = this.group;
    }
  }
}
