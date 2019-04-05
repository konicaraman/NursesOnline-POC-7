import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { FaqComponent } from './faq/faq.component';
import { PastBookingsComponent } from './my-bookings/past-bookings/past-bookings.component';
import { UpcomingBookingsComponent } from './my-bookings/upcoming-bookings/upcoming-bookings.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'mypage',
    component: HeaderComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'bookings',
        component: MyBookingsComponent,
        children: [
          {
            path: 'upcoming',
            component: UpcomingBookingsComponent
          },
          {
            path: 'past',
            component: PastBookingsComponent
          }
        ]
      },
      {
        path: 'faq',
        component: FaqComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivatePagesRoutingModule { }
