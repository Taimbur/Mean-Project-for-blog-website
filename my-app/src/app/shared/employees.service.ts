import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { Employee } from './employee.modal';



@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  fetchEmployeeList() {
    throw new Error('Method not implemented.');
  }
  postEmployee() {
    throw new Error('Method not implemented.');
  }

  readonly baseUrl = 'http://localhost:3000/api/employees/'
  EmployeesService: any;
  list: Employee[] = []

  constructor(private fb: FormBuilder, private http: HttpClient) { }


  empoyeeForm = this.fb.group({
    _id: [''],
    FullName: ['', Validators.required],
    // Position: ['', Validators.required],
    // Location: ['', Validators.required],
    // Salary: ['', Validators.required],
    Email:['', Validators.required],  
    Phone: ['', Validators.required],
    Feedback:['', Validators.required] 
  })

  postemployees() {

    return this.http.post(this.baseUrl, this.empoyeeForm.value)
      .pipe(
        catchError(this.handleError)
      );

  }

  // update
  putemployees() {
    return this.http.put(this.baseUrl + this.empoyeeForm.get('_id')?.value, this.empoyeeForm.value)
      .pipe(catchError(this.handleError))
  }

  // delete
  deleteemployees(_id: string) {

    return this.http.delete(this.baseUrl + _id)
      .pipe(
        catchError(this.handleError)
      );
  }







  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  fecthData() {
    return this.http.get(this.baseUrl)
      .pipe(
        catchError(this.handleError)
      ).subscribe(data => {
        this.list = data as Employee[]
        console.warn(this.list)
      })
  }




}
