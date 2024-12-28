import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayContadorComponent } from './display-contador/display-contador.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.state';

@NgModule({
  declarations: [
    AppComponent,
    DisplayContadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ app: appReducer }) //, app2:appReducer2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
