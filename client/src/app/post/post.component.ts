import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../enroll.service';
import { NgForm, FormControl, FormsModule } from '@angular/forms';
import { PostsService } from '../post.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from '../post.model';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  users: any;
  enteredTitle = '';
  enteredContent = '';
  posts: Post[] = [];
  post: Post;
  private mode = 'post';
  private postId: string;
  isloading = false;
  myControl = new FormControl();
  p_name: any = [];


  onSavePost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isloading = true;
    if (this.mode === 'post') {
      this.postService.addPost(form.value.title, form.value.content, form.value.p_name);
      console.log(form.value);
    } else {
      this.postService.updatePost(
        this.postId,
        form.value.title,
        form.value.content,
        form.value.p_name
      );
    }
    form.resetForm();
  }

  constructor(private enrollService: EnrollService, public postService: PostsService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.postService.getProjectDetails()
    .subscribe(data => {
        this.p_name = data;
        console.log(this.p_name);
    });
    this.route.paramMap.subscribe((paramsMap: ParamMap) => {
        if (paramsMap.has('postId')) {
          this.mode = 'edit';
          this.postId = paramsMap.get('postId');
          this.isloading = true;
          this.postService.getPost(this.postId).subscribe(postData => {
            this.isloading = false;
            this.post = { id: postData._id, title: postData.title, content: postData.content, p_name: postData.p_name};
            console.log(postData);
          });
        } else {
          this.mode = 'post';
          this.postId = null;
        }
      });
  }
}
