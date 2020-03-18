import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../enroll.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  users: any;

  constructor(private enrollService: EnrollService) { }

  ngOnInit() {
    this.enrollService.getUsers()
    .subscribe(data => {

        this.users = data;
        console.log(this.users);
        // this.quotes = {
        //   name: data.name,
        //   password: data.password
        // };
        // console.log(this.quotes);
      });
  }

}
