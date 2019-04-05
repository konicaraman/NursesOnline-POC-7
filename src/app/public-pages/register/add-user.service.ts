import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {

  constructor(private http: HttpClient) { }
  
  //http post request for registering  
  addUser(userData){
    return this.http.post('http://localhost:3000/users',userData);
  }
  
}
