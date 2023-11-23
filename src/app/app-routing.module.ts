import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: 'contactus', component: ContactusComponent },
  // { path: 'products/gundam', component: GundamComponent },
  // { path: 'products/action-figure', component: ActionFigureComponent },
  // {
  //   path: 'products/action-figure/:hashedId',
  //   component: DetailsActionFigureComponent,
  // },
  // { path: 'products/gundam/:id', component: DetailsGundamComponent },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
