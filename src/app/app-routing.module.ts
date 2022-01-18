import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListUsingServiceComponent } from './user-list-using-service/user-list-using-service.component';

const routes: Routes = [
  {path: 'users', component: UserListUsingServiceComponent},
  {path: 'users/:id', component: UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
