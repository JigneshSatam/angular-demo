import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { MembersComponent } from './members/members.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    MembersComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'products',
        component: ProductsComponent

      },
      {
        path: 'members',
        component: MembersComponent

      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
