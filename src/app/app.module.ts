import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsListItemComponent } from './posts-list-item/posts-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsListComponent,
    PostsListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
