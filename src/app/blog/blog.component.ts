import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostMeta } from '@models/post-meta';
import { map } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'md-blog',
  template: `
    <h1>Blog</h1>
    <main *ngIf="posts$ | async as posts">
      <md-card *ngFor="let post of posts" [bgImage]="post.img">
        <h5>{{ post.title }}</h5>
        <p>{{ post.description | substring: 300 }}</p>
        <md-button (click)="navigateToPost(post)" type="outline" text="VER MÁS"></md-button>
      </md-card>
    </main>
  `,
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  posts$ = this.dataService.repoFiles$.pipe(map((posts) => posts.reverse()));

  constructor(private readonly dataService: DataService, private readonly router: Router) {}

  navigateToPost(post: PostMeta): void {
    this.router.navigate(['/blog', post.id], { state: post });
  }
}
