import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Job } from '../../models/Job';
import { Area } from '../../models/Area';
import { JobField } from '../../models/JobField';
import { cvService } from '../../services/cv.services';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent {

  constructor(private cvservice: cvService ) {
    
  }
  @Input()  job: Job | null = null;
  ifClick:boolean=false;
  jobField = JobField;
  jobArea = Area;
  ifSend: boolean = false;
  showDetails = false;

  

  sendCV() 
  {
    this.cvservice.sendCV(this.job?.jobName!);

    
   
  }
  toggleDetails() {
    console.log('WorkingFromHome value:', this.job?.workingFromHome!);
    this.showDetails = !this.showDetails;
  }

  
 
}
