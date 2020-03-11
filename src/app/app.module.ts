import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SubjectModule } from './subject/subject.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shell/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SubjectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
