import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { movieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class movieCreateComponent implements OnInit {

  constructor(private service: movieService) { }
date : Date;
  onAddmovie(form: NgForm) {
    if (!form.valid)
      return;
      console.log(form.value.date);

      this.date = new Date(form.value.date);
      console.log(this.date.toDateString());
    
      this.service.addmovie(form.value.title, form.value.content, form.value.slider).subscribe();

    console.log(form.value);
    form.resetForm();
  }


  ngOnInit() {



  }

}
