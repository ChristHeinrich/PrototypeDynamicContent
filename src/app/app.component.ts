import { Component, ViewChild } from "@angular/core";
// import { Validators } from "@angular/forms";
import {DslDescription, LayoutComponent} from './types/dsl.interface';
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";
import { LayoutService} from "./services/layout.service"
import { DataService} from "./services/data.service"
import {FieldConfig} from './types/field.interface';
import {Layout} from './types/layout';
import {Validators} from '@angular/forms';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  dslDescription: DslDescription[];
  data: any; //TODO: implement data-binding
  formConfig: LayoutComponent;

  constructor(private layoutService: LayoutService, private dataService: DataService) { }
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  getDsl(): void {
    this.layoutService.getDsl()
      .subscribe(async dslDescription => {
        this.dslDescription = dslDescription;
        this.formConfig = this.getFormInformation("dtb.annualstamp.Record");
        console.log(this.formConfig);
      });
  }

  // getFormInformation(id: string): FieldConfig[] {
  getFormInformation(id: string): LayoutComponent {
    //TODO: refactor
    return this.dslDescription[0].apps[0].forms[1].states[0].content;
    // return this.dslDescription[0].apps[0].forms[0].states[0].content;
  }

  getData(): void{
    this.dataService.getData()
      .subscribe(async data => this.data = data);
  }

  ngOnInit() {
    this.getDsl();
    this.getData();
  }


  submit(value: any) {}

}
