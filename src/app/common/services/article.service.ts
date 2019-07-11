import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../interfaces/article';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  list(): Observable<Article[]> {
    return this.http.get(environment.apiBaseUrl + 'articles').pipe(
      map((articles: Article[]) => {
        return articles
      })
    )
  }

  show(slug: string): Observable<Article> {
    return this.http.get(environment.apiBaseUrl + 'article/' + slug).pipe(
      map((article: Article) => {
        return article
      })
    )
  }
}
