import { ValidSubjectGuard } from './shared/guards/valid-subject-guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';
import { OrderListModule } from 'primeng/orderlist';

import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';
import { SubjectService } from './shared/service/subject.service';
import { RouterModule } from '@angular/router';
import { SUBJECT_ROUTES } from './subject.routes';
import { SubjectComponent } from './subject.component';


const modules = [SubjectListComponent, SubjectDetailsComponent];

@NgModule({
  declarations: [SubjectDetailsComponent, SubjectListComponent, SubjectComponent],
  imports: [CommonModule, BrowserAnimationsModule, TableModule, HttpClientModule, OrderListModule, RouterModule.forChild(SUBJECT_ROUTES)],
  providers: [SubjectService, ValidSubjectGuard],
  exports: [SubjectListComponent]
})
export class SubjectModule { }
