import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MzSidenavModule, MzCollapsibleModule, MzCardModule } from 'ngx-materialize';


@NgModule({
  imports: [
    CommonModule,
    MzSidenavModule,
    MzCollapsibleModule,
    MzCardModule
  ],
  exports: [MzSidenavModule, MzCollapsibleModule, MzCardModule],
  declarations: []
})
export class MaterializeModule { }
