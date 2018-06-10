import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RavenModule } from 'raven';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RavenModule.forRoot('dsn')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
