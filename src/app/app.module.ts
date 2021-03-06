import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SongContainer } from './song-container/song-container';
import { SongListComponent } from './song-list-with-fetch/song-list.component';
import { UserContainerWithModel } from './user-container-with-model/user-container-with-model';
import { DirectiveExample1Directive } from './directiveExample/directive-example1.directive';
import { UserListComponent } from './userList/user-list.component';
import { UserEditor } from './userList/user-editor';
import { UserItem } from './userList/user-item';
import { DragAndDropDirective } from './dragAndDrop/drag-and-drop.directive';
import { UserModuleModule } from './userList/user.module';
import { SongsWithSearch } from './song-list-with-fetch/songs-with-search';
import { SongSearchComponent } from './song-list-with-fetch/song-search';
import { UserListUsingServiceComponent } from './user-list-using-service/user-list-using-service.component';
import { NoopInterceptor, UsersServiceService } from './service/users-service.service';
import { TimingInterceptor } from './service/timingInterceptor';
import { AppRoutingModule } from './app-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';

let config = {
  port: 3000
}

let SERVER_USR = "Local Host"

@NgModule({
  declarations: [
    AppComponent,
    SongContainer,
    UserContainerWithModel,
    DirectiveExample1Directive,
    DragAndDropDirective,

    SongsWithSearch,
    SongSearchComponent,
    SongListComponent,
    UserListUsingServiceComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule, FormsModule, UserModuleModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
providers:[]