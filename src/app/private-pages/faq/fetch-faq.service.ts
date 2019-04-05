
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchFAQService {

  constructor(private http:HttpClient) { }
 
  //Get method to fetch FAQ data from db.json

  fetchFAQ(){
    return this.http.get('http://localhost:3000/FAQ') 
}
}
