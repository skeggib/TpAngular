import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArticleService } from '../article.service';
import { Article } from '../Article';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {

  articleForm: FormGroup;

  constructor(private fb: FormBuilder, private articleService: ArticleService) {
    this.articleForm = this.fb.group({
      title: ['', Validators.required ],
      content : ['', Validators.required ],
      authors : ['', Validators.required ],
    });
  }

  ngOnInit() {
  }

  createArticle() {
    const formModel = this.articleForm.value;
    const newArticle: Article = {
      title: formModel.title,
      content: formModel.content,
      author: formModel.author
    };
    this.articleService.addArticle(newArticle);
  }

}
