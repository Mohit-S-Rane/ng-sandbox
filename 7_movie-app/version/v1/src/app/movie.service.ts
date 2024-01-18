import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  public movies:Array<any> = [];

  public getDiscoveredMovies(){
    return new Promise((resolve, reject)=>{
      this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=5c06fed2cdf4dfcdab132d9e67c1c2e7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate').subscribe(
        (res)=>{
          resolve(res);
        },
        (err)=>{
          reject(err);
        }
      );
    });
  }

  public searchMovies(searchText:string){
    return new Promise((resolve, reject)=>{
      this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=5c06fed2cdf4dfcdab132d9e67c1c2e7&language=en-US&query=${searchText}&page=1&include_adult=false`).subscribe(
        (res)=>{
          resolve(res);
        },
        (err)=>{
          reject(err);
        }
      );
    });
  }

  public getMovieDetails(movieid:number){
    return new Promise((resolve, reject)=>{
      this.http.get(`https://api.themoviedb.org/3/movie/${movieid}?api_key=5c06fed2cdf4dfcdab132d9e67c1c2e7&language=en-US`).subscribe(
        (res)=>{
          resolve(res);
        },
        (err)=>{
          reject(err);
        }
      );
    });
  }
}
