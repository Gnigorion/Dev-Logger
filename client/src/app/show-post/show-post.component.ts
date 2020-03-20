import { Component, OnInit, OnDestroy } from '@angular/core';
import { EnrollService } from '../enroll.service';
import { PostsService } from '../post.service';
import { Post } from '../post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(private enrollService: EnrollService, public postService: PostsService) { }

  onDelete(postId: string) {
    this.postService.deletePost(postId);
  }

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

    // this.enrollService.getPosts().subscribe(data => {
    //   this.posts = data;
    // });

    this.postService.getPosts();
    this.postsSub = this.postService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
