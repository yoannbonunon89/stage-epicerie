import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/common/services/article.service';
import { Article } from 'src/app/common/interfaces/article';
import { butterService } from '../../../common/services/butter-cms.service';
@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
  providers: [ArticleService]
})
export class ArticlesListComponent implements OnInit {
  articles: Article[]
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.list().subscribe((res: Article[]) => {
      this.articles = res
    })

  }

}


