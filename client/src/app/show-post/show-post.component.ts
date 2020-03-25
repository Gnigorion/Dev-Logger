import { Component, OnInit, OnDestroy } from '@angular/core';
import { EnrollService } from '../enroll.service';
import { PostsService } from '../post.service';
import { Post } from '../post.model';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  private postsSub: Subscription;
  isLoading = false;
  totalPosts = 0;
  currentPage = 1;
  postsPerPage = 2;
  pageSizeOptions = [1, 2, 5, 10];
  constructor(private enrollService: EnrollService, public postService: PostsService) { }

  onDelete(postId: string) {
    this.isLoading = true;
    this.postService.deletePost(postId).subscribe(() => {
      this.postService.getPosts(this.postsPerPage, this.currentPage);
    });
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
    this.isLoading = true;
    this.postService.getPosts(this.postsPerPage, this.currentPage);
    this.postsSub = this.postService.getPostUpdateListener()
      .subscribe((postData: {posts: Post[], postCount: number}) => {
        this.isLoading = false;
        this.totalPosts = postData.postCount;
        this.posts = postData.posts;
      });
  }
  onChangePage(pageData: PageEvent) {
    this.isLoading = true;
    this.currentPage = pageData.pageIndex + 1;
    this.postsPerPage = pageData.pageSize;
    this.postService.getPosts(this.postsPerPage, this.currentPage);
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
