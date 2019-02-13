import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output, TemplateRef, ViewChild
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { FieldConfig, Validator } from "../../types/field.interface";

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
  @Input() type: string;
  @Input() children: any[];
  @Input()  layoutOfParent : string;

  // @Output() submit: EventEmitter<any> = new EventEmitter<any>();


  form: FormGroup;
  isLayoutVertical : boolean;
  baseType : string;
  actualLayout: string = "smartdesign.base.VerticalLayout";

  get value() {
    return this.form.value;
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.createControl();
    switch (this.type){
      case "smartdesign.base.ZLayout":
      case "smartdesign.base.VerticalLayout":
      case "smartdesign.base.HorizontalLayout":{
        this.baseType ="layout";
        break;
      }
      case "smartdesign.base.FieldGroup":{
        this.baseType ="group";
        break;
      }
      case "smartdesign.base.Message":
      case "smartdesign.base.Field":
      case "smartdesign.base.EmbeddedList":
      case "smartdesign.base.LinkField":{
        this.baseType ="component";
        break;
      }
      default:{
        console.log("unknown type: " + this.type);
        break;
      }
    }
    if (this.baseType==="layout"){
      this.actualLayout = this.type;
    }
      else{
        this.actualLayout = this.layoutOfParent;
    }
    this.isLayoutVertical = this.actualLayout === "smartdesign.base.VerticalLayout";
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
