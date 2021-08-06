import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiModule } from '@ui/ui.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [UiModule, BrowserModule, AppRoutingModule, HttpClientModule, ScullyLibModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
