import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../Article';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit, OnDestroy {

  private articles: Article[];
  private articleSubscription: Subscription;
  private searchText: string;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.updateArticles();
    this.articleService.articleCreated.subscribe((_: Article) => this.updateArticles());
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();
  }

  updateArticles() {
    if (this.articleSubscription !== undefined) {
      this.articleSubscription.unsubscribe();
    }

    if (this.searchText === undefined || this.searchText.length <= 0) {
      this.articleSubscription = this.articleService.getAllArticles().subscribe(articles => {
        this.articles = articles;
      });
    } else {
      this.articleSubscription = this.articleService.searchArticles(this.searchText).subscribe(articles => {
        this.articles = articles;
      });
    }
  }

  delete(article: Article) {
    this.articleService.deleteArticle(article).subscribe(_ => this.updateArticles());
  }

  onSearchChange(value: string) {
    this.searchText = value;
    this.updateArticles();
  }

}
