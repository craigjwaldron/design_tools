import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypographyComponent } from './typography/typography.component';
import { ColorsComponent } from './colors/colors.component';
import { PhotosComponent } from './photos/photos.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ColorsComponent,
    PhotosComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
    ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
