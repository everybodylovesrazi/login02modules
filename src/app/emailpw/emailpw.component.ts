import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/emailpw/mustmatch.validator';

@Component({
  selector: 'app-emailpw',
  templateUrl: './emailpw.component.html',
  styleUrls: ['./emailpw.component.css']
})
export class EmailpwComponent implements OnInit {
   emailPWSection : FormGroup; 
   submitted = false;
   title:string;

   constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.emailPWSection = this.formBuilder.group ({
        'email':new FormControl(null, [Validators.required, Validators.email]),
        'verifyemail' : new FormControl (null, [Validators.required, Validators.email]),
        'password' : new FormControl ('', Validators.required),
        'verifypassword' : new FormControl ('', Validators.required)
    }, {
        validator: MustMatch('password', 'verifypassword')
    } )
  }
  
  onSubmit () {
    this.submitted = true;
    
    if (this.emailPWSection.invalid) {
        return
    }
  }
  
  get email () {
    console.log ("Got the email value");
    return this.emailPWSection.get('email');
  }
  
  get f() { return this.emailPWSection.controls; }
  
  validateEmail (control:FormControl) : {[s:string]:boolean} {
    return {'emailIsBad':true};
  }
  
  onReset() {
    this.submitted = false;
    this.emailPWSection.reset();
  }


}
