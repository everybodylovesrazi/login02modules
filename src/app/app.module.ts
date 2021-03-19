import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { EmailpwComponent } from './emailpw/emailpw.component'

@NgModule({
  declarations: [AppComponent, EmailpwComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}