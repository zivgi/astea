import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditor } from './user-editor';
import { UserItem } from './user-item';
import { UserListComponent } from './user-list.component';



@NgModule({
  declarations: [
    UserListComponent,
    UserEditor,
    UserItem,
  ],
  imports: [
    CommonModule
  ]
})
export class UserModuleModule { }
