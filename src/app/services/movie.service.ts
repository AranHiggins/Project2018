import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {movie} from '../movie.model';
//import { Stream } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class movieService {

  constructor(private http: HttpClient) { }
  
    getmovieData(): Observable<any> {
      return this.http.get("http://localhost:8081/api/movie");
    }

  addmovie(title: string, content: string, slider: string): Observable<any> {
    const movie: movie = {title: title, content: content, slider: slider};
    return this.http.post("http://localhost:8081/api/movie",movie);
  }

  deletemovie(id: String): Observable<any> {
    return this.http.delete("http://localhost:8081/api/movie/"+id);
  }

  getmovie(id:String): Observable<any> {
    return this.http.get("http://localhost:8081/api/movie/"+id);
  }

  updatemovie(id:String, title: string, content: string, slider: string): Observable<any> {
    const movie: movie = {title: title, content: content, slider:slider};
  return this.http.put("http://localhost:8081/api/movie/"+id, movie);
  }
}
