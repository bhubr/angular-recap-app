// On a ajouté Input aux imports depuis @angular/core
import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../types';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  // Déclaration de l'attribut `postData` défini comme une entrée
  // (Input) pour ce composant 
  @Input() post!: Post;

  constructor() { }

  ngOnInit(): void {
  }

}
