import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
import { EventEmitter, Output } from '@angular/core';
import { JobField } from '../../models/JobField';
import { Router } from '@angular/router';
import { cvService } from '../../services/cv.services';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {
   
    loginForm: FormGroup | null = null;
    constructor(private userSvc: UserService,private router:Router,private cvservice: cvService) { 
        
    }

    ngOnInit(): void {
     
        this.loginForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                Validators.pattern(/^\S+$/)
            ])
        });
    }

    checkPassword() {
        if (!this.loginForm?.controls['password'].valid) {
            alert("The password is not valid");
        }
    }

    loginClick() {
        if (this.loginForm?.valid) 
        {
            this.userSvc.getUserFromServer(this.loginForm.controls['name'].value ,this.loginForm.controls['password'].value).subscribe((res: any) => {
                if (res) {
                   localStorage.setItem("userData", JSON.stringify(res));
                    this.router.navigate(['jobs'])
                    this.cvservice.JobsList=[];
                  
                }
                else {

                    alert('User not found');
                  }
                });
             
        }
        else 
        {
            alert("Invalid form");
            
        }
    }
}
