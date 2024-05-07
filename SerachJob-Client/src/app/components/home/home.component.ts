import { Component, OnInit } from '@angular/core';
import { cvService } from '../../services/cv.services';
import { JobField } from "../../models/JobField";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {
  jobsList: string[] = [];
  nameUser: string | null = null;
  jobField = JobField;

  constructor(private CvService: cvService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.jobsList = this.CvService.JobsList;
    const userData = localStorage.getItem("userData");
    if (userData) {
        const user = JSON.parse(userData);
        this.nameUser = user.name;
    }
  }

  getCount() {
    return this.CvService.countCV();
  } 

  getUser() {
    return JSON.parse(localStorage.getItem("userData")!);
  }
}
