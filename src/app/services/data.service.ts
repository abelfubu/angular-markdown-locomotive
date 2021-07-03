import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { RepoFile } from '@models/repo-file'
import { environment } from '@env/environment'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  repoFiles$ = this.http.get<RepoFile[]>(environment.url)

  constructor(private readonly http: HttpClient) {}
}
