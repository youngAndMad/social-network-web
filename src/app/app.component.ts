import { Component, OnInit } from '@angular/core';
import { EnvService } from './common/service/env.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    private readonly _envService: EnvService
  ) { }


  ngOnInit(): void {
  }

}