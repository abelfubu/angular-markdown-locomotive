import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'md-blog',
  template: `
    <h1>WORK IN PROGRESS</h1>
    <main *ngIf="files$ | async as files">
      <md-card *ngFor="let file of files">
        <pre>{{ file | json }}</pre>
      </md-card>
      <ngx-md [path]="files[1].download_url"></ngx-md>
    </main>
  `,
  styles: [],
})
export class BlogComponent {
  files$ = this.dataService.repoFiles$;

  constructor(private readonly dataService: DataService) {}
}
