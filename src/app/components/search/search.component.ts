import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  term = '';

  constructor(public spotifyService: SpotifyService) {
   }

   searchArtist() {
     if (this.term.length === 0 ) {
       return;
     }

    this.spotifyService.getArtists(this.term)
    .subscribe(artists => {});
   }

}
