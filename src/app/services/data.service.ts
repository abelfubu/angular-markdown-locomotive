import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { PostMeta } from '@models/post-meta';
import { GithubRepo } from '@models/repos';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  repoFiles$ = this.http.get<PostMeta[]>(`${environment.assetsUrl}/data/posts.json`);
  repos$ = this.http.get<GithubRepo[]>(environment.githubUrl);

  constructor(private readonly http: HttpClient) {}
}
