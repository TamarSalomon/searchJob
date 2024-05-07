import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Job } from '../../models/Job';
import { Area } from '../../models/Area';
import { JobField } from '../../models/JobField';
import { cvService } from '../../services/cv.services';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})

export class JobComponent implements OnInit {
  jobField = JobField;
  jobArea = Area;
  jobsList: string[] = [];
  IfSend:boolean=false;

  constructor(private CvService: cvService) {}
  ngOnInit(): void {
    this.jobsList = this.CvService.JobsList;

  }

  @Input() job: Job | null = null;
 

  sendCV() {
    this.CvService.addJobToList(this.job?.jobName!);
  }

  ifSend() {
    return this.job && this.job.jobName && this.jobsList.includes(this.job.jobName);
}

  
}

