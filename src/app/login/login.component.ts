import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { EnrollService } from '../enroll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;

  userModel = new User('', '', '');

  onSubmit() {
    this.submitted = true;
    console.log(this.userModel);
    if (this.userModel.password !== this.userModel.cpassword) {
      console.log('wrong password');
    } else {
      this.enrollService.enroll(this.userModel)
      .subscribe(
        data => {
          console.log('Helo world');
          this.router.navigate(['/dashboard']);
          if (data.success) {
            console.log('success');
            this.router.navigate(['/dashboard']);
        }
      });
    }
  }

  constructor(private enrollService: EnrollService, private router: Router) { }

  ngOnInit() {
  }
}
