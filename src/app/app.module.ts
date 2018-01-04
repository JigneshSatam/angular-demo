import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'



import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { MembersComponent } from './members/members.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from "./auth-guard.service";
import { AuthService } from './auth.service';
import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    MembersComponent,
    HeroesComponent,
    HeroDetailComponent,
    // MessagesComponent,
    // DashboardComponent,
    // CoreComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    LoginModule,
    CoreModule,
    RouterModule.forRoot([
      {
        path: 'products',
        component: ProductsComponent

      },
      {
        path: 'members',
        component: MembersComponent

      }
    ]),
    AppRoutingModule
  ],
  providers: [HeroService, MessageService, AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
