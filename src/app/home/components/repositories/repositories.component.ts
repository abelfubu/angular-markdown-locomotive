import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'md-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
})
export class RepositoriesComponent {
  repos$ = this.dataService.repos$;

  constructor(private readonly dataService: DataService) {}
}
