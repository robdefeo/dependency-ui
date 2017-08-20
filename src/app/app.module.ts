import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router'
import { routing } from './app.routes'

import { AppComponent } from './app.component';
// public
import { PublicIndexComponent } from './public/root'

@NgModule({
  declarations: [
    AppComponent,
    PublicIndexComponent
  ],
  imports: [
    BrowserModule,
    routing,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
