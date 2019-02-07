import { Component, ViewChild } from "@angular/core";
// import { Validators } from "@angular/forms";
import {DslDescription, LayoutComponent} from './types/dsl.interface';
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";
import { LayoutService} from "./services/layout.service"
import { DataService} from "./services/data.service"
import {FieldConfig} from './types/field.interface';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  dslDescription: DslDescription[];
  data: any; //TODO: implement data-binding
  // formConfig: LayoutComponent;
  formConfig: FieldConfig;

  constructor(private layoutService: LayoutService, private dataService: DataService) { }
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  getDsl(): void {
    this.layoutService.getDsl()
      .subscribe(async dslDescription => {
        this.dslDescription = dslDescription;
        // this.formConfig = this.getFormInformation("dtb.annualstamp.Record");
      });
  }

  // getFormInformation(id: string): FieldConfig {
  //
  // }

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
