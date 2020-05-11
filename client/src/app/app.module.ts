import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http' 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { PageLayoutComponent } from './shared/layouts/page-layout/page-layout.component';
import { TopNavComponent } from './shared/layouts/top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    PageLayoutComponent,
    TopNavComponent
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
