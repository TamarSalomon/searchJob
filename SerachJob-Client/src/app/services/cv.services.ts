import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class cvService{
  jobSelect:string[]=[];

  sendCV(nameCompany:string){
        this.jobSelect.push(nameCompany);
     
  }
  countCV(){
      return this.jobSelect.length|0;
  }
}
