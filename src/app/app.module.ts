import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {DataService} from './data.service';
import {Configuration} from './constants';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [DataService, Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
