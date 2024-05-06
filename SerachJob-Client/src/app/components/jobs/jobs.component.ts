import { Component, Input } from '@angular/core';
import { JobServices } from '../../services/job.services';
import { Area } from '../../models/Area';
import { JobField } from '../../models/JobField';
import { Job } from '../../models/Job';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})

export class JobsComponent {

  public allJobs: Job[] = [];
  public jobs: Job[] = [];

  public flag = false
  constructor(private jobsSvc: JobServices, private router: Router, private activeRouter: ActivatedRoute) {
  }
  ngOnInit(): void {
    if (!(localStorage.getItem('userData'))) {
      alert('please login for get jobs list');
      this.router.navigate(['/login']);
    }

    this.jobsSvc.getJobsFromServer().subscribe(jobs => {
      this.allJobs = jobs;
    })
    this.activeRouter.paramMap.subscribe(params => {
      let jobfield = params.get('jobField');
      if (jobfield != null)
        this.change(jobfield, "")



    })
  }







  getFields() {
    return Object.keys(JobField).filter((v) => isNaN(Number(v)));
  }
  getAreas() {
    return Object.keys(Area).filter((v) => isNaN(Number(v)));
  }

  change(jobField: string, jobArea: string) {
      this.jobsSvc.filterJobs(jobField, jobArea).subscribe(jobs => {
          this.allJobs = jobs;

  
      });
  
  
  
     
  
  
}

}
