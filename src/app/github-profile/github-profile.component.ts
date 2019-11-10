import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // this is use to collect id
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    // this.route.paramMap.subscribe(p => {
    //   const id = + p.get('id');
    //   console.log(id);
    // });
  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1 , order: 'newest'}});
  }

}
