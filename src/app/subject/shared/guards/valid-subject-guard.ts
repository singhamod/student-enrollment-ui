import { SubjectService } from "./../service/subject.service";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { NotificationService } from "src/app/shared/service/notification.service";

@Injectable({ providedIn: "root" })
export class ValidSubjectGuard implements CanActivate {
  constructor(
    private service: SubjectService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.service.getSubject(next.params.id).pipe(
      map(res => {
        if (!res.subject_code) {
          this.notificationService.showError("Invalid Subject");
          this.router.navigate(['/subject/list']);
        }
        return !!res;
      })
    );
  }
}
