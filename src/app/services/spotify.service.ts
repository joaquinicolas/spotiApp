import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists: any[] = [];
  urlSpotify = 'https://api.spotify.com/v1/';
  token = 'BQAm3NhGrqWZKdBri-eKPwyDvDalcNyPDgsw4HKkpSf1FwWYOVikyyVaOGXiSa3x7cvVq8yYszYXQv0OUVE';

  constructor(public http: HttpClient) {
    console.log('Spotify service started...');
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    });
  }

  getTopTracks(id: string) {
    const url = `${this.urlSpotify}artists/${id}/top-tracks?country=AR`;
    const headers = this.getHeaders();
    return this.http.get(url, { headers: headers })
      .map((resp: any) => {
        return resp.tracks;
      });
  }
  getArtist(id: string) {
    const url = `${this.urlSpotify}artists/${id}`;
    const headers = this.getHeaders();
    return this.http.get(url, { headers: headers });
  }

  getArtists(term: string) {
    const url = `${this.urlSpotify}search?q=${term}&type=artist&limit=20`;
    const headers = this.getHeaders();
    return this.http.get(url, { headers: headers })
      .map(((resp: any) => {
        this.artists = resp.artists.items;
        return this.artists;
      }));
  }
}
