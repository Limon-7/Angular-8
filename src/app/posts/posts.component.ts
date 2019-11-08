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
    this.service.getPost().subscribe(response => {
      // console.log(response);
      this.posts = response;
    });
  }

  createPost(input: HTMLInputElement) {
    const post: any = {
      title: input.value

    };
    input.value = '';
    this.service.createPost(input).subscribe(response => {
      // post.id = response.id;
      this.posts.splice(0, 0, post);
      console.log(response);
    },
    // tslint:disable-next-line:no-shadowed-variable
    (error: AppError) => {
      if (error instanceof BadInput) {
        // alert('This post is already deleted');
        // this.form.setErrors(error.orginalError);
      } else {
        throw error;
      }
    });
  }
  upDatePost(post) {
    this.service.upDatePost(post).subscribe( response => {
      console.log(response);
    });
  }

  deletePost(post) {
    this.service.deletePost(post.id).subscribe(response => {
      const index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
      console.log(response);
    },
    // tslint:disable-next-line: no-shadowed-variable
    (error: AppError) => {
      if (error instanceof NotFoundError) {
        alert('This post is already deleted');
      } else {
        throw error;
      }
    });
  }

}
