import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmplyoeesComponent } from './emplyoees/emplyoees.component';
import { EmpolyeesFormComponent } from './employees/empolyees-form/empolyees-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { ToastrModule} from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import { AboutUsComponent } from './about-us/about-us.component';
import { ArticlesDetailsComponent } from './articles-details/articles-details.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { CategoryComponent } from './category/category.component';
import { ArticleFeatureComponent } from './article-feature/article-feature.component';
import { LatestArticleComponent } from './latest-article/latest-article.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmplyoeesComponent,
    EmpolyeesFormComponent,
    AboutUsComponent,
    ArticlesDetailsComponent,
    ArticleListComponent,
    CategoryComponent,
    ArticleFeatureComponent,
    LatestArticleComponent,
    BannerComponent,
    FooterComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  BrowserModule,
    ToastrModule.forRoot(),
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
