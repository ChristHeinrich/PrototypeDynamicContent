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
  mode: number;
  state: string;
  formConfig: any; //TODO: should be app
  modes: any[] = [
    {value: 0, viewValue: 'Read'},
    {value: 1, viewValue: 'Write'}
  ];

  apps: any[] = [
    {id: "first"},
    {id: "seccound"}

  ]

  app: string;
  // apps: any[];
  constructor(private layoutService: LayoutService, private dataService: DataService, private componentService : ComponentTypeService) { }
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

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
    this.mode = 0;
  }


  submit(value: any) {}

}
