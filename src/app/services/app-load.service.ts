import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs';
import { APP_SETTINGS } from '../settings';
import { LayoutService} from "./layout.service"

@Injectable()
export class AppLoadService {

  constructor(private httpClient: HttpClient, private layoutService: LayoutService) { }

  initializeApp(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }
//TODO: rename
  getSettings(): void {
    this.layoutService.fetchLayout()
      .subscribe(async layout => {
        this.layoutService.setCachedLayout(layout);
        console.log(layout)
      });
  }
}
