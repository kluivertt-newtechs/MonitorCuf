import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { MonitoresComponent } from './main/monitores/monitores/monitores.component';
import { MainComponent } from './main/main/main.component';

@NgModule({
  declarations: [AppComponent, MonitoresComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
