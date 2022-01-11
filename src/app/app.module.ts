import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SongContainer } from './song-container/song-container';
import { SongListComponent } from './song-list/song-list.component';
import { UserContainerWithModel } from './user-container-with-model/user-container-with-model';
import { DirectiveExample1Directive } from './directiveExample/directive-example1.directive';

@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    SongContainer,
    UserContainerWithModel,
    DirectiveExample1Directive
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
