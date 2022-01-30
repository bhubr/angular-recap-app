import { Component, OnInit } from '@angular/core';

interface Post {
  id: number;
  title: string;
  body: string
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  title = 'My personal blog';
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  isLoading = true;
  posts: Post[] = [
    {
      id: 1,
      title: 'sunt aut facere repellat',
      body: 'quia et suscipit\nsuscipit recusandae',
    },
    {
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae\nsequi sint nihil',
    },
  ];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => { this.isLoading = false; }, 2000);
  }

}
