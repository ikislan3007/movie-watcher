import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { MovieWatcherSharedModule } from 'app/shared/shared.module';
import { MovieWatcherCoreModule } from 'app/core/core.module';
import { MovieWatcherAppRoutingModule } from './app-routing.module';
import { MovieWatcherHomeModule } from './home/home.module';
import { MovieWatcherEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    MovieWatcherSharedModule,
    MovieWatcherCoreModule,
    MovieWatcherHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    MovieWatcherEntityModule,
    MovieWatcherAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class MovieWatcherAppModule {}
