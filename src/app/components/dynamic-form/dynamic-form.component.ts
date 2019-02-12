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
    .form-inline {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
    }
  
  `]
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: FieldConfig[] = [];
  @Input() type: string;
  @Input() children: any;
  @Input()  layoutOfParent : string;

  @Output() submit: EventEmitter<any> = new EventEmitter<any>();


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
      case "smartdesign.base.ZLayout":{
        this.baseType ="layout";
        break;
      }
      case "smartdesign.base.VerticalLayout":{
        this.baseType ="layout";
        break;
      }
      case "smartdesign.base.HorizontalLayout":{
        this.baseType ="layout";
        break;
      }
      case "smartdesign.base.Message":{
        this.baseType ="component";
        break;
      }
      case "smartdesign.base.FieldGroup":{
        this.baseType ="group";
        break;
      }
      case "smartdesign.base.Field":{
        this.baseType ="component";
        break;
      }
      case "smartdesign.base.EmbeddedList":{
        this.baseType ="component";
        break;
      }
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
    console.log(this.children);
    console.log(this.actualLayout);
    console.log(this.type);
    console.log(this.baseType);
  }


  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
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
