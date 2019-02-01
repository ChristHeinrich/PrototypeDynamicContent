import { Injectable } from '@angular/core';
import {MessageService} from './message.service';
import {Observable, of} from 'rxjs';
import {SIMPLEDATA} from '../samples/data/simple-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private messageService: MessageService) { }

  getData(): Observable<any[]> {
    this.messageService.add('DataService: data fetchted');
    return of(SIMPLEDATA);
  }
}
