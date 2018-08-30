import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DocsComponent } from './docs/docs.component';
import { HowToUseComponent } from './how-to-use/how-to-use.component';
import { BasicExampleComponent } from './basic-example/basic-example.component';
import { StyledComponent } from './styled/styled.component';

const routes: Routes = [
        { path: '', component: HowToUseComponent },
        { path: 'doc', component: DocsComponent },
        { path: 'basic', component: BasicExampleComponent },
        { path: 'usage', component: HowToUseComponent },
        { path: 'styled', component: StyledComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true}) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
