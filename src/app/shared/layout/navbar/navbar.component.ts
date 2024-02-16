import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'sp-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean = false;

  constructor(private readonly _keycloakService: KeycloakService) {}

  ngOnInit(): void {
    this.loggedIn = this._keycloakService.isLoggedIn();
  }

  loginToKc(){
    this._keycloakService.login()
  }
}
