import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '@models/project';

@Injectable({ providedIn: 'root' })
export class DataService {
  projects$ = this.httpClient.get<Project[]>('assets/data/projects.json');

  constructor(private readonly httpClient: HttpClient) {}
}
