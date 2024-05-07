import { Injectable } from '@angular/core';
import { JobField } from '../models/JobField';
import { HttpClient } from '@angular/common/http'
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getUserFromServer(name: string, password: string) {
    const url = `https://localhost:5001/api/User?Name=${name}&Password=${password}`;
    return this.http.get(url);
  }








}

