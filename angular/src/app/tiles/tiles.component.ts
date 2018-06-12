import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {

  menuItems =  [];

  constructor(private httpclient: HttpClient) { }

  ngOnInit() {
    this.httpclient.get('http://localhost:4000/tiles').subscribe((r: any) => {
      this.menuItems = r.tiles;
    })
  }

}
