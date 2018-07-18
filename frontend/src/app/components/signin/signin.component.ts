import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angular5-social-login';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public share: SharedService;

  constructor( private socialAuthService: AuthService ) {
    this.share = SharedService.getInstance();
  }

  public socialSignIn(socialPlatform: string) {

      this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
        (userData) => {
          console.log(socialPlatform + ' sign in data : ' , userData);
          this.share.email = userData.email;
        }
      );

  }

  ngOnInit() {
  }

}
