import { Injectable } from '@angular/core';
// import { Layout } from '../types/dslDescription';
import { DslDescription } from '../types/dsl.interface';
// import { FieldConfig } from "../types/field.interface";
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, delay, map, takeWhile, tap} from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  // private dslUrl = 'api/layout';
  private dslUrl = 'api/dsl';
  private appsDescription: DslDescription[] = [];
  constructor(private messageService: MessageService, private http: HttpClient) { }

  getDsl(): Observable<DslDescription[]> {
    return of(this.appsDescription);
  }

  setCachedLayout(apps: DslDescription[]): void {
    this.appsDescription = apps;
  }

  fetchLayout(): Observable<DslDescription[]> {
    this.messageService.add('LayoutService: fetchted dslDescription from ' + this.dslUrl);
    return this.http.get<any[]>(this.dslUrl)
      .pipe(
        delay(100),
        tap(_ => this.log('fetched dslDescription'))
        // catchError(this.handleError('getDsl', []))
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
