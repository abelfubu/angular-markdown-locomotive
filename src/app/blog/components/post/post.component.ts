import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { environment } from '@env/environment';
import { PostMeta } from '@models/post-meta';
import { map, pluck, switchMap, tap } from 'rxjs';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'md-post',
  template: ` <ngx-md *ngIf="path$ | async as path" [path]="path"></ngx-md> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent {
  path$ = this.activatedRoute.params.pipe(
    pluck('id'),
    map((id) => Number(id)),
    switchMap((id) =>
      this.dataService.repoFiles$.pipe(
        map((posts) => posts.find((post) => post.id === id) ?? ({} as PostMeta)),
      ),
    ),
    tap((post) => this.createMeta(post)),
    map((post) => `${environment.assetsUrl}/md/${post?.id}.md`),
  );

  constructor(
    private readonly meta: Meta,
    private readonly title: Title,
    private readonly dataService: DataService,
    private readonly activatedRoute: ActivatedRoute,
  ) {}

  createMeta(post: PostMeta): void {
    this.title.setTitle(post.title);
    this.meta.addTags([
      { property: 'og:description', content: post.description },
      { property: 'og:image', content: post.img },
      { property: 'og:title', content: post.title },
    ]);
  }
}
