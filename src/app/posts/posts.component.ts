
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';


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
    });
  }
  upDatePost(post) {
    this.service.upDatePost(post).subscribe( response => {
      console.log(response);
    });
  }

  deletePost(post) {
    this.service.deletePost(post).subscribe(response => {
      const index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }

}
