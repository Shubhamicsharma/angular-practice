import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http:HttpClient) { }

  getLoginData(){
     const url = "https://my.api.mockaroo.com/credential.json?key=d125d520";
     return this.http.get(url);
  }

  getUserData(){
    const url = "https://my.api.mockaroo.com/user_db.json?key=d125d520";
    return this.http.get(url);
  }

  getCountriesData(){
    const url = "https://my.api.mockaroo.com/countries.json?key=d125d520";
    return this.http.get(url);
  }
}
