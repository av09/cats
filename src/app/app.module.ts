import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { CatInfoComponent } from './cat-info/cat-info.component';
import { CatRatingPipe } from './cat-rating.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CatListComponent,
    CatInfoComponent,
    CatRatingPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
