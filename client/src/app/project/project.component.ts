import { Component, OnInit } from '@angular/core';
import { PostsService } from '../post.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project: any;

  constructor(public postService: PostsService) { }

  ngOnInit() {
    this.postService.getProject()
    .subscribe(data => {

        this.project = data;
        console.log(this.project);
      });
  }

}
