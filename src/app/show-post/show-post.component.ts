import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../enroll.service';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {
  quotes: any = {};
  posts: any;
  // posts = [
  //   {title: 'Sample Post - 1', content: 'Hello.. '},
  //   {title: 'Sample Post - 2', content: 'Hi..'}
  // ];



  // quotes = {
  //   name: this.quotes.name,
  //   password: this.quotes.password
  // }

  constructor(private enrollService: EnrollService) { }

  ngOnInit() {
    // this.enrollService.getUsers()
    // .subscribe(data => {

    //     this.quotes = data;
    //     console.log(this.quotes);
    //     // this.quotes = {
    //     //   name: data.name,
    //     //   password: data.password
    //     // };
    //     // console.log(this.quotes);
    //   });

    this.enrollService.getPosts().subscribe(data => {
      this.posts = data;
    });

  }

}
