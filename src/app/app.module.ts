import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { RepoComponent } from './repo/repo.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepoComponent
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
