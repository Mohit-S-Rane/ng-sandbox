import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBlogComponent } from './pages/create-blog/create-blog.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewBlogComponent } from './pages/view-blog/view-blog.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'home', component:HomeComponent},
  {path:'create', component: CreateBlogComponent},
  {path:'view/:blogindex', component:ViewBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
