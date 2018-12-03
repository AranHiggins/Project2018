import { Component, OnInit } from '@angular/core';
import {movieService} from '../services/movie.service';
import { Observable } from 'rxjs';
import {movie} from '../movie.model';
import {Router, ActivatedRoute} from '@angular/router';
// the html and css pages
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class movieDetailsComponent implements OnInit {

  
  movie: any = [];

  constructor(private ps:movieService){}

  ngOnInit(){
   
    this.ps.getmovieData().subscribe(data => {
        this.movie = data;
    });
   }

   onDelete(id:String){
     console.log("Delete called "+ id);
     this.ps.deletemovie(id).subscribe(() =>
     {
        this.ngOnInit();
     })
   }
}
