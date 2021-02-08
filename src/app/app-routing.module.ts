import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersFormComponent } from './components/users-form/users-form.component';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
  { path: 'userform', component: UsersFormComponent },
  { path: 'users', component: UsersComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
