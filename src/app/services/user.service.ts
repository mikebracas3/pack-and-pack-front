import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/User';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrlSearch = '/user/search';
  private userUrlCreate = '/user/create';
  private userUrlDelete = '/user/delete';
  
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  getUsers(query): Observable<any> {
    return this.http.get<any>(this.userUrlSearch, {params: this.getParams(query)})
  }

  getParams(query){
    return new HttpParams({ fromObject: query });
  }
  addUser(user){
    return this.http.post<any>(this.userUrlCreate, user);
  }

  deleteUser(_id){
    return this.http.post<any>(this.userUrlDelete, {"_id": _id});
  }

}
