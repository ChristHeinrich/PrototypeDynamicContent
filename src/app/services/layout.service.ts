import { Injectable } from '@angular/core';
import { Layout } from '../types/layout';
import { SIMPLELAYOUT } from '../samples/layouts/simple-layout';
import { FieldConfig } from "../types/field.interface";
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private layoutUrl = 'api/layout';
  private cachedLayout: FieldConfig[] = [];
  constructor(private messageService: MessageService, private http: HttpClient) { }
  getLayout(): Observable<FieldConfig[]> {
    return of(this.cachedLayout);
  }

  setCachedLayout(layout: FieldConfig[]): void {
    this.cachedLayout = layout;

  }

  fetchLayout(): Observable<FieldConfig[]> {
    this.messageService.add('LayoutService: fetchted layout from ' + this.layoutUrl);
    //return of(SIMPLELAYOUT);


    return this.http.get<any[]>(this.layoutUrl)
      .pipe(
        tap(_ => this.log('fetched layout')),
        catchError(this.handleError('getHeroes', []))
      );


  }
  private log(message: string) {
    this.messageService.add(`LayoutService: ${message}`);
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
