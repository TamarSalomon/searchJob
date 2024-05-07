import { Component, Input, OnInit } from '@angular/core';
import { JobServices } from '../../services/job.services';
import { Area } from '../../models/Area';
import { JobField } from '../../models/JobField';
import { Job } from '../../models/Job';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-jobs',
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.scss'
})

export class JobsComponent implements OnInit {

 allJobs: Job[] = [];
  flag = false
  constructor(private jobsSvc: JobServices, private router: Router,  private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    if (!(localStorage.getItem('userData'))) {
      alert('please login for get jobs list');
      this.router.navigate(['/login']);
    }

    this.jobsSvc.getJobsFromServer().subscribe(jobs => {
      this.allJobs = jobs;
    })
    this.route.paramMap.subscribe(params => {
      let jobfield = params.get('jobField');
      if (jobfield != null)
        this.filter(jobfield, "")



    })
  }







  getFields() {
    return Object.keys(JobField).filter((v) => isNaN(Number(v)));
  }
  getAreas() {
    return Object.keys(Area).filter((v) => isNaN(Number(v)));
  }

  filter(jobField: string, jobArea: string) {
      this.jobsSvc.filterJobs(jobField, jobArea).subscribe(jobs => {
          this.allJobs = jobs;

  
      });
  
  
  
     
  
  
}

}
