import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { AuthModule, AuthComponents } from './auth/auth.module';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponents
  ],
  imports: [
    BrowserModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
