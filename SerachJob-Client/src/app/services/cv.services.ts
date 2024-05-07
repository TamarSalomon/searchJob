import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class cvService{
  JobsList:string[]=[];

  addJobToList(nameCompany:string){
        this.JobsList.push(nameCompany);
     
  }
  countCV(){
      return this.JobsList.length|0;
  }
}
