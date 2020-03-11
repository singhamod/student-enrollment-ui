import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';
import { OrderListModule } from 'primeng/orderlist';

import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';
import { SubjectService } from './subject.service';


const modules = [SubjectListComponent, SubjectDetailsComponent];

@NgModule({
  declarations: [SubjectDetailsComponent, SubjectListComponent],
  imports: [CommonModule, BrowserAnimationsModule, TableModule, HttpClientModule, OrderListModule],
  providers: [SubjectService],
  exports: [SubjectListComponent]
})
export class SubjectModule { }
