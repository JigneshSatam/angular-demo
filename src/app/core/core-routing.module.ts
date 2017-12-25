import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreComponent } from "./core.component"
import { HeroesComponent } from '../heroes/heroes.component'
import { DashboardComponent } from '../dashboard/dashboard.component'
import { HeroDetailComponent }  from '../hero-detail/hero-detail.component';
import { AuthGuardService } from '../auth-guard.service'

const routes: Routes = [
  {path: '', redirectTo: 'core', pathMatch: "full"},
  {
    path: "core",
    component: CoreComponent,
    canActivate: [AuthGuardService],
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: "full"},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'heroes', component: HeroesComponent},
      {path: 'heroes/:id', component: HeroDetailComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
