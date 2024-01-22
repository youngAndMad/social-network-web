import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get('http://localhost:9393/user/me')
    .subscribe(console.log
    )
  }
}
