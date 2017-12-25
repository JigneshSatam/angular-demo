import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { HeroesComponent } from './heroes/heroes.component'
// import { DashboardComponent } from './dashboard/dashboard.component'
// import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
// import { AuthGuardService } from './auth-guard.service'

const routes: Routes = [
  // {path: '', redirectTo: '/dashboard', pathMatch: "full"},
  // {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
  // {path: 'heroes', component: HeroesComponent, canActivate: [AuthGuardService]},
  // {path: 'heroes/:id', component: HeroDetailComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
