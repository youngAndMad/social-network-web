import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  loginToKc() {}
}
