import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./modules/material.module";
import { MatCardModule,
         MatIconModule,
         MatToolbarModule,
         MatButtonModule,
         MatFormFieldModule,
         MatInputModule } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputComponent } from "./components/componentLib/input/input.component";
import { ButtonComponent } from "./components/componentLib/button/button.component";
import { SelectComponent } from "./components/componentLib/select/select.component";
import { DateComponent } from "./components/componentLib/date/date.component";
import { RadiobuttonComponent } from "./components/componentLib/radiobutton/radiobutton.component";
import { CheckboxComponent } from "./components/componentLib/checkbox/checkbox.component";
import { DynamicFieldDirective } from "./components/dynamic-field/dynamic-field.directive";
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";
import { MessagesComponent } from "./components/messages/messages.component";
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppLoadModule} from './modules/app-load-module.module';
import { VerticalLayoutComponent } from './components/componentLib/vertical-layout/vertical-layout.component';
import { HorizontalLayoutComponent } from './components/componentLib/horizontal-layout/horizontal-layout.component';
import { DynamicComponentComponent } from './components/dynamic-component/dynamic-component.component';
import { SmartdesignBaseFieldGroupComponent } from './components/componentLib/smartdesign-base-field-group/smartdesign-base-field-group.component';
import { SmartdesignBaseFieldComponent } from './components/componentLib/smartdesign-base-field/smartdesign-base-field.component';

import {smartdesignBaseVerticalLayout} from './components/componentLib/smartdesign-base-verticalLayout/smartdesign-base-verticalLayout.component'
import {smartdesignBaseHorizontalLayout} from './components/componentLib/smartdesign-base-horizontalLayout/smartdesign-base-horizontalLayout.component';
import { EntryPointDirective } from './entry-point.directive'

@NgModule({
  declarations: [
    EntryPointDirective,
    AppComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    MessagesComponent,
    VerticalLayoutComponent,
    HorizontalLayoutComponent,
    DynamicComponentComponent,
    SmartdesignBaseFieldGroupComponent,
    SmartdesignBaseFieldComponent,
    smartdesignBaseVerticalLayout,
    smartdesignBaseHorizontalLayout
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule,
    AppLoadModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    VerticalLayoutComponent,
    SmartdesignBaseFieldGroupComponent,
    SmartdesignBaseFieldComponent,
    smartdesignBaseVerticalLayout,
    smartdesignBaseHorizontalLayout

  ]
})
export class AppModule {}
