import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RepoFile } from '@models/repo-file';
import { environment } from '@env/environment';
import { GithubRepo } from '@models/repos';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  repoFiles$ = this.http.get<RepoFile[]>(environment.repoUrl);
  repos$ = this.http.get<GithubRepo[]>(environment.githubUrl);

  constructor(private readonly http: HttpClient) {}
}
