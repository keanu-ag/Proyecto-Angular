import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostresFormComponent } from './component/postres-form/postres-form.component';
import { PostresListComponent } from './component/postres-list/postres-list.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/postres',
  pathMatch: 'full'
},
{
  path: 'postres',
  component: PostresListComponent
},
{
  path: 'postres/add',
  component: PostresFormComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
