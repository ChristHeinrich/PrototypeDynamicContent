import { Component, ViewChild } from "@angular/core";
// import { Validators } from "@angular/forms";
// import { FieldConfig } from "./types/field.interface";
import { App } from "./types/layout.interface";
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";
import { LayoutService} from "./services/layout.service"
import { DataService} from "./services/data.service"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  appsDescription: App[];
  // regConfig: Layout[];
  data: any;
  // appsDescription: Layout;

  constructor(private layoutService: LayoutService, private dataService: DataService) { }
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  getDsl(): void {
    this.layoutService.getDsl()
      // .subscribe(async appsDescription => this.regConfig = appsDescription);
      .subscribe(async appsDescription => this.appsDescription = appsDescription);
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
