import { Injectable, Output, EventEmitter } from '@angular/core';
import { Article } from './Article';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { filterByTerm } from './articleFilter';

@Injectable()
export class ArticleService {

  @Output()
  articleCreated: EventEmitter<Article> = new EventEmitter();

  constructor(private http: HttpClient) { }

  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:3000/articles');
  }

  deleteArticle(article: Article): Observable<void> {
    return this.http.delete<void>('http://localhost:3000/articles/' + article.id);
  }

  addArticle(article: Article) {
    this.http.post<void>('http://localhost:3000/articles', article).subscribe(_ => this.articleCreated.emit(article));
  }

  getArticle(id: number): Observable<Article> {
    return this.http.get<Article>('http://localhost:3000/articles/' + id);
  }

  searchArticles(term: string): Observable<Article[]> {
    return this.getAllArticles().map(articles =>
      articles.filter(article => filterByTerm(article, term)));
  }

}