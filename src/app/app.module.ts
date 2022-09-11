import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './header/toolbar/toolbar.component';
import { HeroComponent } from './header/hero/hero.component';
import { StaticComponent } from './content/static/static.component';
import { FooterComponent } from './footer/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './content/card/card.component';
import { Static2Component } from './content/static2/static2.component';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HeroComponent,
    StaticComponent,
    FooterComponent,
    CardComponent,
    Static2Component
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
