import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInFormComponent } from './models/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './models/sign-up-form/sign-up-form.component';

const routes: Routes = [
  { path: 'signin', component: SignInFormComponent},
  { path: 'signup', component: SignUpFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
