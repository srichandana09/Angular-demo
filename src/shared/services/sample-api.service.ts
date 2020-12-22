import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Employee, Employees } from '../models/employees.model'
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SampleApiService {

  constructor(private http: HttpClient) { }

/* I used open source url instead of  "http://someaddress.com/api" */

  getEmployees(): Observable<Employees> {
    return this.http.get<Employees>('http://dummy.restapiexample.com/api/v1/employees');
  }

  getEmployee(): Observable<Employee> {
    return this.http.get<Employee>('http://dummy.restapiexample.com/api/v1/employee/1');
  }
}
