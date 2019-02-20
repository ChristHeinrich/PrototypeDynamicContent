import { Component, ViewChild } from "@angular/core";
//TODO: check validation stuff
// import { Validators } from "@angular/forms";
//import {Validators} from '@angular/forms';
import {DslDescription, App} from './types/dsl.interface';
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
  app: App;
  state: string;
  form: string;
  formIdx: number = 0;
  data: any; //TODO: implement data-binding

  constructor(private layoutService: LayoutService, private dataService: DataService, private componentService : ComponentTypeService) { }

  getDsl(): void {
    this.layoutService.getDsl()
      .subscribe(async dslDescription => {
        this.dslDescription = dslDescription;
        //take the first app
        this.app = this.getFormInformation(this.dslDescription[0].apps[0].id);
        this.form = this.app.forms[0].id;
        console.log(this.app);
        this.dslDescription[0].apps.forEach(app => {
          app.types.forEach(types => this.componentService.setMetaData(types.fields));
        })
      });
  }

  getFormInformation(id: string): App {
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
    // this.form = "dtb.annualstamp.Record"
  }

  public setApp() {
    this.layoutService.fetchLayout()
    .subscribe(async layout => {
      this.layoutService.setCachedLayout(layout);
      this.state = "read";
      for (let i = 0; i < this.dslDescription[0].apps.length; i++) {
        let app = this.dslDescription[0].apps[i];
        for (let j = 0; j < app.forms.length; j++) {
          if (app.forms[j].id === this.form) {
            this.formIdx = j;
            this.app = app;
          }
        }
      }
    });
  }

}
