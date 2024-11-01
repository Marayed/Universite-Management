import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UniversiteListComponent } from './components/universite-list/universite-list.component';
import { UniversiteAddComponent } from './components/universite-add/universite-add.component';
import { AppRoutingModule } from './app-routing.module';
import { UniversiteUpdateComponent } from './components/universite-update/universite-update.component';

@NgModule({
  declarations: [
    AppComponent,
    UniversiteListComponent,
    UniversiteAddComponent,
    UniversiteUpdateComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    FormsModule, 
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
