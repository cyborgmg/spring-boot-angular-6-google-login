import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, LinkedinLoginProvider } from 'angular5-social-auth';
import { SigninComponent } from './components/signin/signin.component';
import { SharedService } from './services/shared.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
      [
        /*{
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('718205503735-ai0taaon8vj3qm04940fuk9o8h65afqe.apps.googleusercontent.com')
        },*/
        {
          id: LinkedinLoginProvider.PROVIDER_ID,
          provider: new LinkedinLoginProvider('77y0yvt3ze5g5d')
        }
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [
    SharedService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
