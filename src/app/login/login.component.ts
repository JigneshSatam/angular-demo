import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { trigger, transition, style, animate, state, keyframes } from "@angular/animations";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger("someCoolAnimation", [
      state("fadeIn", style({ opacity: 1, transform: 'scale(1.0)'})),
      state("fadeOut", style({ opacity: 0, transform: 'scale(0.0)'})),
      transition("* => fadeIn", [
        // fade in Animation
        animate(1000)
      ]),
      transition("* => fadeOut", [
        // fade out Animation
        // ---- 1 ----
        // animate(1000)

        // ---- 2 ----
        // animate('2000ms ease-in', keyframes([
        //   style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
        //   style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
        //   style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
        // ]))

        // ---- 3 ----
        animate(2000, keyframes([
          style({opacity: 1, offset: 0}),
          style({opacity: 0, offset: 0.20}),
          style({opacity: 1, offset: 0.40}),
          style({opacity: 0, offset: 0.60}),
          style({opacity: 1, offset: 0.80}),
          style({opacity: 0, transform: 'scale(0.0)', offset: 1.0}),
        ]))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  message: string;

  constructor(private router: Router, private authService: AuthService) {
    this.setMessage();
  }

  ngOnInit() {
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.fadeOut();
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/core';

        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
    // this.fadeIn();
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

  bindingVar = '';

  fadeIn(){
    this.bindingVar = 'fadeIn';
  }

  fadeOut(){
    this.bindingVar = 'fadeOut';
  }

  toggle() {
    this.bindingVar == 'fadeOut' ? this.fadeIn() : this.fadeOut();
  }
}
