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
  styles: [`
    .type {
      padding: 5px;
      font-family: Roboto;
      font-size: 12px;
      color: darkgreen;
    }
    .name {
      padding: 5px;
      font-family: Roboto;
      font-size: 12px;
      color: darkblue;
    }
    .nesting {
      border: 1px solid black
    }
    
  
  `]
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

  // get value() {
  //   return this.form.value;
  // }
  constructor(private fb: FormBuilder, private viewContainerRef: ViewContainerRef) {
    this.container = viewContainerRef;
    console.log(this.container)
  }

  ngOnInit() {
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
}
