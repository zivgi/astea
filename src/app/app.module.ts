import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SongContainer } from './song-container/song-container';
import { SongListComponent } from './song-list/song-list.component';
import { UserContainerWithModel } from './user-container-with-model/user-container-with-model';

@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    SongContainer,
    UserContainerWithModel
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
