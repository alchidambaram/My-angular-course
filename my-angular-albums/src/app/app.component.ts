import { Component, OnInit } from "@angular/core";
import { Album } from "./albums/album.model";
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "My Angular Albums";
}

