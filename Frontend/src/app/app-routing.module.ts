import { NgModule } from '@angular/core';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CarComponent } from "./components/car/car.component"
import { PendingComponent } from './components/pending/pending.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { AddcarsComponent } from './components/addcars/addcars.component';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [
  { 
    path: 'pending', 
    canActivateChild : [RouteGuardService],
    component: PendingComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'reservation',
    canActivateChild : [RouteGuardService],
    component: ReservationComponent,
  },
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'car',
    canActivateChild : [RouteGuardService],
    component: CarComponent,
  },
  {
    path: 'addcars',
    canActivate : [RouteGuardService],
    component: AddcarsComponent,
  },
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
