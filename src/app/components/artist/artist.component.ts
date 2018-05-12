import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist: any;
  tracks: any[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
       const id = params['id'];
       this.spotifyService.getArtist(id)
       .subscribe(artist => {
          this.artist = artist;
       });

       this.spotifyService.getTopTracks(id)
       .subscribe(tracks => {
          this.tracks = tracks;
          console.log(tracks);
       });
    });
  }
  constructor(private activatedRoute: ActivatedRoute,
    public spotifyService: SpotifyService
  ) { }


}
