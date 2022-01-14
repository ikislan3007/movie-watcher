import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'watcher',
        loadChildren: () => import('./watcher/watcher.module').then(m => m.MovieWatcherWatcherModule),
      },
      {
        path: 'movie',
        loadChildren: () => import('./movie/movie.module').then(m => m.MovieWatcherMovieModule),
      },
      {
        path: 'rating',
        loadChildren: () => import('./rating/rating.module').then(m => m.MovieWatcherRatingModule),
      },
      {
        path: 'playlist',
        loadChildren: () => import('./playlist/playlist.module').then(m => m.MovieWatcherPlaylistModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class MovieWatcherEntityModule {}
