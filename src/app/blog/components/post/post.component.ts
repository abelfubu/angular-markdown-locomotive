import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '@env/environment';
import { map, pluck } from 'rxjs';

@Component({
  selector: 'md-post',
  template: ` <ngx-md *ngIf="path$ | async as path" [path]="path"></ngx-md> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent {
  path$ = this.activatedRoute.params.pipe(
    pluck('id'),
    map((id) => `${environment.assetsUrl}/md/${id}.md`),
  );

  constructor(private readonly activatedRoute: ActivatedRoute) {}
}
