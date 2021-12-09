import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './components';

import { WebPagesRoutingModule } from './web-pages-routing.module';
import {PageContainerComponent} from "./page-container/page-container.component";


@NgModule({
  declarations: [
    ...fromComponents.components,
    PageContainerComponent
  ],
  imports: [
    CommonModule,
    WebPagesRoutingModule
  ]
})
export class WebPagesModule { }
