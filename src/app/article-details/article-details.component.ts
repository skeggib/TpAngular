import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../Article';
import { ActionSequence } from 'protractor';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  private article: Article;

  constructor(private route: ActivatedRoute, private articleService: ArticleService) {
    this.route.params.subscribe(params =>
      articleService.getArticle(params.id).subscribe(article =>
        this.article = article));
  }

  ngOnInit() {
  }

}
