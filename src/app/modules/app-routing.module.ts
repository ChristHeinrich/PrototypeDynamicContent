import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MessagesComponent} from '../components/messages/messages.component';
import {ButtonComponent} from '../components/componentLib/button/button.component';
const routes: Routes = [
  { path: 'messages', component: MessagesComponent },
  { path: 'button', component: ButtonComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
