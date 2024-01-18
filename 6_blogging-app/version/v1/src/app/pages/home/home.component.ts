import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public blogService:BlogService) { }

  ngOnInit(): void {
    this.blogService.fetchBlogs().then((res)=>{
      console.log(res);
      this.blogService.blogsData = res;
    }).catch((err)=>{
      console.log(err);
    });
  }

}
