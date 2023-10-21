import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/Header.component';
import { TittleComponent } from './shared/tittle/tittle.component';
import { HomeComponent } from './pages/home/home.component';
import { BigCardComponent } from './pages/home/components/big-card/big-card.component';
import { SmallCardComponent } from './pages/home/components/small-card/small-card.component';
import { ContentComponent } from './pages/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TittleComponent,
    HomeComponent,
    BigCardComponent,
    SmallCardComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
