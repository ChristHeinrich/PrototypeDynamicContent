import { Component, ViewChild } from "@angular/core";
import { Validators } from "@angular/forms";
import { FieldConfig } from "./types/field.interface";
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";
import { LayoutService} from "./services/layout.service"
import { DataService} from "./services/data.service"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  layout: FieldConfig[];
  regConfig: FieldConfig[];
  data: any;
  // layout: Layout;

  constructor(private layoutService: LayoutService, private dataService: DataService) { }
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  getLayout(): void {
    this.layoutService.getLayout()
      .subscribe(layout => this.regConfig = layout)
  }

  getData(): void {
    this.dataService.getData()
      .subscribe(data => this.data = data)
  }

  ngOnInit() {
    this.getLayout();
    this.getData();
  }


  submit(value: any) {}
}
