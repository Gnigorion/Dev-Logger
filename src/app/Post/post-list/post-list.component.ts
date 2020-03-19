import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../post.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  // posts = [
  //   { title: 'This is First ' , content: 'This is my first Content' },
  //   { title: 'This is Second' , content: 'This is my second Content' },
  //   { title: 'This is Third' , content: 'This is my third Content' }
  // ];
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postService: PostsService) {
  }
  onDelete(postId: string) {
    this.postService.deletePost(postId);
  }
  ngOnInit() {
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
