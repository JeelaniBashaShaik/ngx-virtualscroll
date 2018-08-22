import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxVirtualScrollModule } from './ngx-virtualscroll/virtual-scroll.module';

import { MaterializeModule } from './materialize.module';
import { DocsComponent } from './docs/docs.component';
import { BasicExampleComponent } from './basic-example/basic-example.component';
import { HowToUseComponent } from './how-to-use/how-to-use.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    DocsComponent,
    BasicExampleComponent,
    HowToUseComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule, RoutingModule,
    NgxVirtualScrollModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
