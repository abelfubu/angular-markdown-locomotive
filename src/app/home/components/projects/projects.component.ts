import { Component } from '@angular/core';
import { DataService } from 'app/home/services/data.service';

@Component({
  selector: 'md-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects$ = this.data.projects$;

  constructor(private readonly data: DataService) {}
}
