import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { PostsService } from '../post.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  post: Post;
  private mode = 'create';
  private postId: string;


  constructor(public postService: PostsService, public route: ActivatedRoute) { }

  onSavePost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (this.mode === "create") {
      this.postService.addPost(form.value.title, form.value.content);
    } else {
      this.postService.updatePost(
        this.postId,
        form.value.title,
        form.value.content
      );
    }
    form.resetForm();
  }

  ngOnInit() {
  this.route.paramMap.subscribe((paramsMap: ParamMap) => {
    if(paramsMap.has('postId')){
      this.mode = 'edit';
      this.postId = paramsMap.get('postId');
      this.postService.getPost(this.postId).subscribe(postData => {
        this.post = { id: postData._id, title: postData.title, content: postData.content};
      });
    } else {
      this.mode = 'create';
      this.postId = null;
    }
  });
  }

}
