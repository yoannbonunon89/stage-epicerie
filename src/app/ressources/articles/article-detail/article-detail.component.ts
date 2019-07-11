import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/common/services/article.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/common/interfaces/article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
  providers: [ArticleService]
})
export class ArticleDetailComponent implements OnInit {


  article: Article

  constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const slug = this.activatedRoute.snapshot.params.slug
    this.articleService.show(slug).subscribe((article: Article) => {
      this.article = article
    });
  }

}
