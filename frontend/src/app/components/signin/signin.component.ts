import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angular5-social-login';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor( private socialAuthService: AuthService ) {}

  public socialSignIn(socialPlatform: string) {

      this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
        (userData) => {
          console.log(socialPlatform + ' sign in data : ' , userData);
        }
      );

  }

  ngOnInit() {
  }

}
