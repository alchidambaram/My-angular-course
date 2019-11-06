import { Component, OnInit } from '@angular/core';
import { ALBUMS } from "../albums.data";

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  constructor() { }
  albumsArray: any;
  numbers = [1, 2, 3];
  interval: any;
  titleCounter = 0;
  albumLastClicked: string;
  albumId: number;
  ngOnInit(): void {
    this.albumsArray = ALBUMS;
    this.numbers = [1, 2, 3];
    this.interval = setInterval(() => this.titleCounter++, 2000);
    this.numbers.push(4);
    console.log(this.numbers);
    setTimeout(() => clearInterval(this.interval), 6000);
  }

  parentFunctionHandler(album) {
    this.albumLastClicked = album.albumName;
    this.albumId = album.id;
    alert('Album ' + album.albumName + ' was sent from the album card component');
}

}
