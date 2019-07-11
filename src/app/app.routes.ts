import { Routes } from '@angular/router';
import { ArticleDetailComponent } from './ressources/articles/article-detail/article-detail.component';
import { ArticlesListComponent } from './ressources/articles/articles-list/articles-list.component';

export const appRoutes: Routes = [
	{
		path: '',
		component: ArticlesListComponent
	},
	{
		path: 'articles/:slug',
		component: ArticleDetailComponent
	}
]