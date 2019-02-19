import { Component, ViewChild } from "@angular/core";
//TODO: check validation stuff
// import { Validators } from "@angular/forms";
//import {Validators} from '@angular/forms';
import {DslDescription, LayoutComponent} from './types/dsl.interface';
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";
import { LayoutService} from "./services/layout.service";
import { DataService} from "./services/data.service";
import {ComponentTypeService} from './services/componentType.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  dslDescription: DslDescription[];
  data: any; //TODO: implement data-binding
  state: string;
  formConfig: any; //TODO: should be app
  app: string;
  formIdx: number = 0;
  form: any;

  constructor(private layoutService: LayoutService, private dataService: DataService, private componentService : ComponentTypeService) { }

  getDsl(): void {
    this.layoutService.getDsl()
      .subscribe(async dslDescription => {
        this.dslDescription = dslDescription;
        this.formConfig = this.getFormInformation(this.dslDescription[0].apps[0].id); //take the first app
        console.log(this.formConfig);
        this.dslDescription[0].apps.forEach(app => {
          app.types.forEach(types => this.componentService.setMetaData(types.fields));
        })
      });
  }

  getFormInformation(id: string): LayoutComponent {
    return this.dslDescription[0].apps.find(app => app.id === id);
  }

  getData(): void{
    this.dataService.getData()
      .subscribe(async data => this.data = data);
  }

  ngOnInit() {
    this.getDsl();
    this.getData();
    this.state = "read";
    this.form = "dtb.annualstamp.Record"
  }

  public setFormConfig() {
    this.layoutService.fetchLayout()
    .subscribe(async layout => {
      this.layoutService.setCachedLayout(layout);
      this.state = "read";
      for (let i = 0; i < this.dslDescription[0].apps.length; i++) {
        let app = this.dslDescription[0].apps[i];
        for (let j = 0; j < app.forms.length; j++) {
          if (app.forms[j].id === this.form) {
            this.formIdx = j;
            this.formConfig = app;
          }
        }
      }
    });
  }

}
