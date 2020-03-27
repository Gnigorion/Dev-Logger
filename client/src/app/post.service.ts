import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [];
  private postUpdated = new Subject<{ posts: Post[], postCount: number }>();
  constructor(private http: HttpClient, private router: Router) { }

  getPosts(postsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`;
    this.http.get<{ message: string, posts: any, maxPosts: number }>('dashboard' + queryParams)
      .pipe(map((postData) => {
        return {
          posts: postData.posts.map(post => {
            return {
              title: post.title,
              content: post.content,
              id: post._id,
              p_name: post.p_name
            };
          }), maxPosts: postData.maxPosts
        };
      }))
      .subscribe((transformedPostsData) => {
        this.posts = transformedPostsData.posts,
        this.postUpdated.next({ posts: [...this.posts], postCount: transformedPostsData.maxPosts});
      });
  }
  getPostUpdateListener() {
    return this.postUpdated.asObservable();
  }
  getPost(id: string) {
    return this.http.get<{ _id: string, title: string, content: string, p_name: string }>('dashboard/' + id);
  }

  // tslint:disable-next-line: variable-name
  addPost(title: string, content: string, p_name: string) {
    const post: Post = { id: null, title, content, p_name };
    this.http.post<{ message: string, postId: string }>('dashboard/post', post)
      .subscribe(responseData => {
        this.router.navigate(['/dashboard']);
        console.log(post);
      });
  }

  // tslint:disable-next-line: variable-name
  updatePost(id: string, title: string, content: string, p_name: string) {
    const post: Post = { id, title, content, p_name };
    this.http
      .put('dashboard/edit/' + id, post)
      .subscribe(response => {
        this.router.navigate(['/dashboard']);
      });
  }
  deletePost(postId: string) {
    return this.http.delete('dashboard/' + postId);
  }
  getProject() {
    return this.http.get('dashboard/project');
  }
  getProjectDetails() {
    return this.http.get('dashboard/post');
  }
}
