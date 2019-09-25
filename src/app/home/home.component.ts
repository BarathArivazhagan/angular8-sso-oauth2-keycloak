import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import { SSOService } from '../oauth2/sso/sso.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  providers: [AppService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public isLoggedIn = false;
    public userName: string;

    constructor(private ssoService: SSOService, private spinner: NgxSpinnerService) {}

    ngOnInit() {

        this.spinner.show();
        this.isLoggedIn = this.ssoService.isLoggedIn();
        if(!this.isLoggedIn) {
           this.login();
        }
        this.userName = this.ssoService.getUserName();
        this.spinner.hide();
    }

    login() {
        this.ssoService.obtainAccessToken();
    }

    logout() {
        this.ssoService.logout();
    }

}
