import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NgxMdModule } from 'ngx-md'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { UiModule } from './shared/ui/ui.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgxMdModule, UiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
