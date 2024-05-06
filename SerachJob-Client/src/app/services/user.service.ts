import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { JobField } from '../models/JobField';
import { HttpClient } from '@angular/common/http'
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getUserFromServer(user: User) {
    const url=`https://localhost:5001/api/User?Name=${user.Name}&Password=${user.Password}`;
    return this.http.get(url);
  }

 
  





}

