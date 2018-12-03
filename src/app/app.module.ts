import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { movieDetailsComponent } from './movie-details/movie-details.component';
import {movieService} from './services/movie.service';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from "@angular/forms";
import {MatChipsModule} from '@angular/material/chips';
import {MatSliderModule} from '@angular/material/slider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';







import { MatInputModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatNativeDateModule} from '@angular/material';
import { movieCreateComponent } from './movie-create/movie-create.component';
import { movieEditComponent } from './movie-edit/movie-edit.component';
import { movieComponent } from './movie/movie.component';

const appRoutes: Routes = [
  {
    path: 'list',
    component: movieDetailsComponent
  },
  {
    path: 'home',
    component: movieCreateComponent
  },
  {
    path: 'movie',
    component: movieComponent
  },
  {
    path: 'edit/:id',
    component: movieEditComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    movieDetailsComponent,
    movieCreateComponent,
    movieEditComponent,
    movieComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSliderModule,
    MatBadgeModule,
    BrowserAnimationsModule,
    MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatMenuModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatGridListModule
  ],
  providers: [movieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
