import { Component } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MustMatch } from 'src/app/emailpw/mustmatch.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login01';
  colourControl = new FormControl('');
  

  onSubmit () {
    console.log ("Hello form");
  }
}
