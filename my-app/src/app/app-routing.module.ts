import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticlesDetailsComponent } from './articles-details/articles-details.component';
import { EmpolyeesFormComponent } from './employees/empolyees-form/empolyees-form.component';
import { LatestArticleComponent } from './latest-article/latest-article.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
 

const routes: Routes = [
  {path:'about-us',component:AboutUsComponent},
  {path:'article',component:ArticleListComponent},
  {path:'article/:id',component:ArticlesDetailsComponent},
  {path:'',component:LatestArticleComponent},
  {path:'contact-us',component:EmpolyeesFormComponent},
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
