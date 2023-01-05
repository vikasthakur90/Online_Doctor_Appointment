import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivePatientsComponent } from './active-patients/active-patients.component';

const routes: Routes = [
  {path:"activepatient",component:ActivePatientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
