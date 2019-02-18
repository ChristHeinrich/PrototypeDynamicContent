import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output, TemplateRef, ViewChild, ViewContainerRef
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { FieldConfig, Validator } from "../../types/field.interface";
import {LayoutComponent} from '../../types/dsl.interface';

@Component({
  exportAs: "dynamicForm",
  selector: "dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() formConfig: LayoutComponent;
  @Input() layoutOfParent : string;
  @Input() parent: ViewContainerRef;
  // form: FormGroup;

  public container: ViewContainerRef;

  isLayoutVertical : boolean;
  baseType : string;
  actualLayout: string = "smartdesign.base.VerticalLayout";

  constructor(private fb: FormBuilder, private viewContainerRef: ViewContainerRef) {
    this.container = viewContainerRef;
  }

  ngOnInit() {
  }

  public getLayoutClass(componentType: string) {
    console.log(componentType)
    return componentType === "smartdesign.base.VerticalLayout"
      ? "verticalLayout"
      : "horizontalLayout"
  }

  createControl() {
    const group = this.fb.group({});
   /* this.fields.forEach(field => {
      if (field.type === "button") return;
      const control = this.fb.control(
        field.value,
        this.bindValidations(field.validations || [])
      );
      group.addControl(field.name, control);
    });*/
    return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  getDirective() {
    return "smartdesign-base-verticalLayout"
  }
}
