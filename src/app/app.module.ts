import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router'
import { routing } from './app.routes'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
// public
import { PublicIndexComponent, RegisterComponent } from './public/root'

@NgModule({
  declarations: [
    AppComponent,
    PublicIndexComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    routing,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
