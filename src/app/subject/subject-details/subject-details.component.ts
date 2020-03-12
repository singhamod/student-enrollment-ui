import { Subject } from '../shared/models/subject.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from '../shared/service/subject.service';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.css']
})
export class SubjectDetailsComponent implements OnInit {

  subject: Subject;

  constructor(private subjectService: SubjectService, private route: ActivatedRoute, private router: Router) {
  }

  getSubject(code: string) {
    return this.subjectService
      .getSubject(code)
      .subscribe(resp => {
        this.subject = resp;
        console.log(resp);
      });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.getSubject(paramMap.get('id'));
    });
  }

  onBackButtonClick(): void {
    this.router.navigate(['/subject/list']);
  }

}
