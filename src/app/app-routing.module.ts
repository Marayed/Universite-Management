import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversiteListComponent } from './components/universite-list/universite-list.component';
import { UniversiteAddComponent } from './components/universite-add/universite-add.component';
import { UniversiteUpdateComponent } from './components/universite-update/universite-update.component';

const routes: Routes = [
  { path: 'universites', component: UniversiteListComponent },
  { path: 'universite-add', component: UniversiteAddComponent },
  { path: 'universites/update/:id', component: UniversiteUpdateComponent },
  { path: '', redirectTo: '/universites', pathMatch: 'full' },
];
//webhook test
//another one
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
