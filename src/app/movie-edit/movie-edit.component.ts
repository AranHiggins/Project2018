import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router/src/router';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes, Router } from '@angular/router';
import {movieService} from '../services/movie.service';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class movieEditComponent implements OnInit {
  movie : any = [];
  myTitle : String; 
  myContent : String; 
  mySlider : Int8Array;
  constructor(private router:Router, private route: ActivatedRoute, private service:movieService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.service.getmovie(this.route.snapshot.params['id']).subscribe(data =>
    {
      this.movie = data;
      console.log(this.movie);
      this.myTitle = this.movie.title;
      console.log("message" +this.myTitle);

    });
  }
  onEditmovie(form: NgForm) {
    this.service.updatemovie(this.movie._id, form.value.title,form.value.content, form.value.slider).subscribe(() =>
    {
      this.router.navigate(['/list']);
    });
  }

}
