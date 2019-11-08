import { BadInput } from './../common/bad-input';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { error } from 'util';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;
  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getAll().subscribe(posts => {this.posts = posts;
    });
  }

  createPost(input: HTMLInputElement) {
    const post: any = {
      title: input.value
    };
    this.posts.splice(0, 0, post);
    input.value = '';
    this.service.create(input).subscribe(
      newPost => {
       // post.id = newPost.id;
        console.log(newPost);
    },
    // tslint:disable-next-line:no-shadowed-variable
    (error: AppError) => {
      this.posts.splice(0, 1);

      if (error instanceof BadInput) {
        // alert('This post is already deleted');
        // this.form.setErrors(error.orginalError);
      } else {
        throw error;
      }
    });
  }
  upDatePost(post) {
    this.service.update(post).subscribe( updatePost => {
      console.log(updatePost);
    });
  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    this.service.delete(post.id).subscribe(
      () => {
          console.log();
    },
    // tslint:disable-next-line: no-shadowed-variable
    (error: AppError) => {
      this.posts.splice(index, 0, post );

      if (error instanceof NotFoundError) {
        alert('This post is already deleted');
      } else {
        throw error;
      }
    });
  }

}
