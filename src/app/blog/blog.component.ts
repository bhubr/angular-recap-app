import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  title = 'My personal blog';
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
