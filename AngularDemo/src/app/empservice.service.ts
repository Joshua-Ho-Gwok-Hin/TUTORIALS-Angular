import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewEmployee } from './new-employee';

@Injectable({
  providedIn: 'root'
})

export class EmpserviceService {
  private url: string="/assets/data/employee.json";
 constructor(private http:HttpClient){}

  getNewEmployees():Observable<NewEmployee []>{
    return this.http.get<NewEmployee[]>(this.url);
  }

  getEmployees(){
    return [
      {"id":1, "name":"James Bond", "age":35},
      {"id":2, "name":"Peter Parker", "age":35},
      {"id":3, "name":"Harry Potter", "age":35},
      {"id":4, "name":"Stephen Strange", "age":35},
      {"id":5, "name":"Clark", "age":35}
    ]
  }

}
