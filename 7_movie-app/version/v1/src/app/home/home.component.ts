import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public movieService:MovieService, private router:Router) { }

  ngOnInit(): void {
    this.movieService.getDiscoveredMovies().then((res:any)=>{
      console.log(res);
      this.movieService.movies = res.results;
    }).catch((err)=>{
      console.error(err);
    });
  }

  viewMovie(movieid:any){
    this.router.navigate(['/movie', movieid]);
  }

}
