import { SubjectListComponent } from './subject/subject-list/subject-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectDetailsComponent } from './subject/subject-details/subject-details.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: SubjectListComponent },
  { path: 'subject', component: SubjectListComponent },
  { path: 'subject/:id/details', component: SubjectDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
