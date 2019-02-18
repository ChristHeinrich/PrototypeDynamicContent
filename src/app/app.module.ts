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
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";
import { MessagesComponent } from "./components/messages/messages.component";
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';
import { AppLoadModule} from './modules/app-load-module.module';
import { DynamicComponentComponent } from './components/dynamic-component/dynamic-component.component';
import { SmartdesignBaseFieldGroupComponent } from './components/componentLib/smartdesign-base-field-group/smartdesign-base-field-group.component';
import { SmartdesignBaseFieldComponent } from './components/componentLib/smartdesign-base-field/smartdesign-base-field.component';

import {smartdesignBaseVerticalLayout} from './components/componentLib/smartdesign-base-verticalLayout/smartdesign-base-verticalLayout.component'
import {smartdesignBaseHorizontalLayout} from './components/componentLib/smartdesign-base-horizontalLayout/smartdesign-base-horizontalLayout.component';
import { EntryPointDirective } from './entry-point.directive';
import { SmartdesignBaseMessageComponent } from './components/componentLib/smartdesign-base-message/smartdesign-base-message.component';
import { SmartdesignBaseEmbeddedListComponent } from './components/componentLib/smartdesign-base-embedded-list/smartdesign-base-embedded-list.component';
import { SmartdesignBaseZLayoutComponent } from './components/componentLib/smartdesign-base-zlayout/smartdesign-base-zlayout.component';
import { SmartdesignBaseLinkfieldComponent } from './components/componentLib/smartdesign-base-linkfield/smartdesign-base-linkfield.component';

@NgModule({
  declarations: [
    EntryPointDirective,
    AppComponent,
    DynamicFormComponent,
    MessagesComponent,
    DynamicComponentComponent,
    SmartdesignBaseFieldGroupComponent,
    SmartdesignBaseFieldComponent,
    smartdesignBaseVerticalLayout,
    smartdesignBaseHorizontalLayout,
    SmartdesignBaseMessageComponent,
    SmartdesignBaseEmbeddedListComponent,
    SmartdesignBaseZLayoutComponent,
    SmartdesignBaseLinkfieldComponent
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
    SmartdesignBaseFieldGroupComponent,
    SmartdesignBaseFieldComponent,
    smartdesignBaseVerticalLayout,
    smartdesignBaseHorizontalLayout,
    SmartdesignBaseEmbeddedListComponent

  ]
})
export class AppModule {}
