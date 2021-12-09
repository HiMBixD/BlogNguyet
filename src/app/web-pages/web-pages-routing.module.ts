import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageContainerComponent} from "./page-container/page-container.component";

const routes: Routes = [
  {
    path: '',
    component: PageContainerComponent,
    children: [
      {
        path: '',
        canActivate: [],
        loadChildren: () => import('./child-modules/home-page/home-page.module').then(m => m.HomePageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebPagesRoutingModule { }
