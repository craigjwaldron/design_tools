import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { TypographyComponent } from './typography/typography.component';
import { ColorsComponent } from './colors/colors.component';
import { PhotosComponent } from './photos/photos.component';

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'colors', component: ColorsComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class AppRoutingModule {}
