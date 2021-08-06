import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { environment } from '@env/environment';
import { map, pluck } from 'rxjs';

@Component({
  selector: 'md-post',
  template: ` <ngx-md *ngIf="path$ | async as path" [path]="path"></ngx-md> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent implements OnInit {
  path$ = this.activatedRoute.params.pipe(
    pluck('id'),
    map((id) => `${environment.assetsUrl}/md/${id}.md`),
  );

  constructor(
    private readonly meta: Meta,
    private readonly title: Title,
    private readonly activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.title.setTitle(window.history.state.title);
    this.meta.addTags([
      { property: 'og:description', content: window.history.state.description },
      { property: 'og:image', content: window.history.state.img },
      { property: 'og:title', content: window.history.state.title },
    ]);
  }
}
