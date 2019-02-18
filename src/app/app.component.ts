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
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  dslDescription: DslDescription[];
  data: any; //TODO: implement data-binding
  formConfig: any; //TODO: should be app

  constructor(private layoutService: LayoutService, private dataService: DataService, private componentService : ComponentTypeService) { }
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  getDsl(): void {
    this.layoutService.getDsl()
      .subscribe(async dslDescription => {
        this.dslDescription = dslDescription;
        this.formConfig = this.getFormInformation("dtb.annualstamp.Record");
        console.log(this.formConfig);
        this.dslDescription[0].apps.forEach(app => {
          app.types.forEach(types => this.componentService.setMetaData(types.fields));
        })
        //this.componentService.setMetaData(this.dslDescription[0].apps[9].types); //TODO hardcoded metadata replaced by a dynamic search
      });
  }

  getFormInformation(id: string): LayoutComponent {
    //TODO: refactor
    // return this.dslDescription[0].apps[0].forms[1].states[0].content;
    return this.dslDescription[0].apps[0]
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
