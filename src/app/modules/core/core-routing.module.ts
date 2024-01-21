import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{path: '', redirectTo: 'comingsoon',pathMatch:'full'},
  {path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
