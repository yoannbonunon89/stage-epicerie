import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticleDetailComponent } from './ressources/articles/article-detail/article-detail.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { ArticlesListComponent } from './ressources/articles/articles-list/articles-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ArticleDetailComponent,
    ArticlesListComponent,
    MyNewComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
