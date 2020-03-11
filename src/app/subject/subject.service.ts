import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Subject } from './models/subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private baseUrl = 'http://localhost:8080';
  private url = this.baseUrl + '/subject';

  constructor(private http: HttpClient) {
  }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.url).pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  getSubject(subjectCode: string): Observable<Subject> {
    return this.http.get<Subject>(this.url + '/' + subjectCode).pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  // Error handling
  errorHandl(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
