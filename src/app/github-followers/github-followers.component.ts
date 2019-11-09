import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';


@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any;
  constructor(private service: GithubFollowersService) { }

  ngOnInit() {
    this.service.getAll().subscribe(follwers => { this.followers = follwers; });
    // this.http.get('https://api.github.com/users/mosh-hamedani/followers')
    // .subscribe(res => {
    //   this.followers = res;
    // });
  }

}
