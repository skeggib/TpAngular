import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Article } from '../Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  private article: Article;

  @Output()
  deletedArticle: EventEmitter<Article> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  delete() {
    this.deletedArticle.emit(this.article);
  }

}
