import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { APP_ROUTES } from "./app-routes";
import { SubjectModule } from "./subject/subject.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shell/header/header.component";
import { PageNotFoundComponent } from "./shared/error/page-not-found/page-not-found.component";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NotificationService } from "./shared/service/notification.service";

@NgModule({
  declarations: [AppComponent, HeaderComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES),
    SubjectModule
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
