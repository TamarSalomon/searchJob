import { Component } from '@angular/core';
import { cvService } from '../../services/cv.services';
import { JobField } from "../../models/JobField";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  JobsSelect: string[] = [];
  
  constructor(private cvservice: cvService ) {
    this.JobsSelect = this.cvservice.jobSelect;
  }
 
  nameUser: string | null = null;
  jobField = JobField;
  ngOnInit(): void {
    const userData = localStorage.getItem("userData");
    if (userData) {
        const data = JSON.parse(userData);
        this.nameUser = data.name;
    }
  }

  getCount() {
    return this.cvservice.countCV()
  } 

  getUser(){
    return JSON.parse(localStorage.getItem("userData")!);
  }
}
