import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CatListComponent} from './cat-list/cat-list.component';
import {CatInfoComponent} from './cat-info/cat-info.component';

const routes: Routes = [
  { path: '', component: CatListComponent },
  { path: 'breed/:breedId', component: CatInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
