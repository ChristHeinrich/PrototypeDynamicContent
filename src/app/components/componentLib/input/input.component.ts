import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../../types/field.interface";
@Component({
  selector: "app-input",
  template: `
    <mat-form-field class="demo-full-width" [formGroup]="group">
      <input class="form-inline" matInput [formControlName]="field.name" [placeholder]="field.label" [type]="field.inputType">
      <ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
        <mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
      </ng-container>
    </mat-form-field> `,

  styles: [ `
    .form-inline {
      display: flex!important;
      flex-flow: row wrap;
      align-items: center;
    }
  `]
})
export class InputComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
