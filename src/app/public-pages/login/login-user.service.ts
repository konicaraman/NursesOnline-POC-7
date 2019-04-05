import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  //get http request for login credentials
  constructor(private http: HttpClient) { }

  loginUser(userData){
    return this.http.get('http://localhost:3000/users',{
      params:userData
    });
  }
}
