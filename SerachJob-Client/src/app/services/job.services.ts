import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Job } from '../models/Job';
import { JobField } from '../models/JobField';
import { Area } from '../models/Area';

@Injectable({
  providedIn: 'root'
})
export class JobServices {
  jobs: Job[] = [];

  constructor(private http: HttpClient) {
    this.getJobsFromServer().subscribe(jobs => {
      this.jobs = jobs;
    });
  }

  getJobsFromServer(): Observable<Job[]> {
    return this.http.get<Job[]>("https://localhost:5001/api/Job/GetAllJobs");
  }

  filterJobs(jobfield: string, jobarea: string): Observable<Job[]> {
    return this.getJobsFromServer().pipe(
      map((res: any) => res.filter((job: any) => {
        return (!jobfield || JobField[job.jobfield] === jobfield) &&
          (!jobarea || Area[job.area] === jobarea);
      }))
    );
  }



}

