import { Injectable } from '@angular/core';
import { Layout } from '../types/layout';
import { SIMPLELAYOUT } from '../samples/layouts/simple-layout';
import { FieldConfig } from "../types/field.interface";
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private layoutUrl = 'api/layout';
  constructor(private messageService: MessageService, private http: HttpClient) { }

  getLayout(): Observable<FieldConfig[]> {
    this.messageService.add('LayoutService: layout fetchted');
     return of(SIMPLELAYOUT);
    //return this.http.get<FieldConfig[]>(this.layoutUrl)
  }
  private log(message: string) {
    this.messageService.add(`LayoutService: ${message}`);
  }
}
