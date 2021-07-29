import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { PostresFormComponent } from './component/postres-form/postres-form.component';
import { PostresListComponent } from './component/postres-list/postres-list.component';

import { PostresService } from './services/postres.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PostresFormComponent,
    PostresListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PostresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
