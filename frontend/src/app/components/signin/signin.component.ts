import { Component, OnInit, Injectable } from '@angular/core';
import { AuthService, GoogleLoginProvider, LinkedinLoginProvider, SocialUser } from 'angular5-social-auth';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) {}

  signInWithLinkedIn(): void {
    this.authService.signIn(LinkedinLoginProvider.PROVIDER_ID).then(
      res => {
        console.log('LinkedIn sign in data : ' , res);
      }
    );
  }


  /*
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      res => {
        console.log('Google sign in data : ' , res);
      }
    );
   }
*/
  signOut(): void {
    this.authService.signOut();
  }

  ngOnInit() {}

}
