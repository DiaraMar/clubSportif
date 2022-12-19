import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl : string ="http://localhost:8080/";


  constructor(private http : HttpClient) { }

//Calling back-end api
signUp(accountObject : any){
  return this.http.post<any>(`${this.baseUrl}register`, accountObject)
}

signIn(credentialObject : any){
  console.log("on signcompoent");
  console.log(this.http.post<any>(`${this.baseUrl}login`, credentialObject))
  return this.http.post<any>(`${this.baseUrl}login`, credentialObject)
}
  
}
