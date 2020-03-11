import { Subject } from './../models/subject.model';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { SubjectService } from '../subject.service';
import { FormControl } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
  pageSize: number;
  subjects: Subject[];
  filter = new FormControl('');
  selectedSubject: Subject;

  constructor(private subjectService: SubjectService, private router: Router) {
  }

  getSubjects() {
    return this.subjectService
      .getSubjects()
      .subscribe((data: Subject[]) => (this.subjects = data));
  }

  onRowSelect(event: any) {
    this.router.navigate(['/subject', event.data.subject_code, 'details']);
  }

  ngOnInit(): void {
    this.pageSize = 5;
    this.getSubjects();
  }

}


