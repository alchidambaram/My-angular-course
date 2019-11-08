import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumListComponent } from './albums/album-list/album-list.component';
import { HelloUserComponent } from './hello-user/hello-user.component';
import { AlbumCardComponent } from './albums/album-card/album-card.component';
import { ReverseStrPipe } from './reverse-str.pipe';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { AlbumsModule } from './albums/albums.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HelloUserComponent,
    ReverseStrPipe,
    WelcomeComponent,
    NavbarComponent,
    NotfoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
