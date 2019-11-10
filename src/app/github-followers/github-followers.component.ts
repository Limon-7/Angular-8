import { map, switchMap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any;
  constructor(private route: ActivatedRoute, private service: GithubFollowersService) { }

  ngOnInit() {
    let obs = combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).pipe(switchMap(combine => {
        let id = combine[0].get('id');
        let page = combine[1].get('page');
        return this.service.getAll();
      }))
    .subscribe(combine => {
      this.followers = combine;
    });

    // this.service.getAll().subscribe(follwers => { this.followers = follwers; });
    // this.http.get('https://api.github.com/users/mosh-hamedani/followers')
    // .subscribe(res => {
    //   this.followers = res;
    // });
  }

}
