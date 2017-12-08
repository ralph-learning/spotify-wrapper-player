import 'jsdom-global/register';
import { expect } from 'chai';
import renderAlbumTracks from '../src/AlbumTracks';

describe('AlbumTracks', () => {
  it('should exist renderAlbumTracks method', () => {
    expect(renderAlbumTracks).to.be.exist;
  });

  const data = {
    tracks: {
      href: 'https://api.spotify.com/v1/albums/6peEdPVO73WtgGah5sEhX4/tracks?offset=0&limit=50',
      items: [{
        artists: [{
          external_urls: {
            spotify: 'https://open.spotify.com/artist/3YcBF2ttyueytpXtEzn1Za'
          },
          href: 'https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za',
          id: '3YcBF2ttyueytpXtEzn1Za',
          name: 'Incubus',
          type: 'artist',
          uri: 'spotify:artist:3YcBF2ttyueytpXtEzn1Za',
        }],
        disc_number: 1,
        duration_ms: 214946,
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/track/2hHYNUiI2gWSkcXdKHLX6c'
        },
        href: 'https://api.spotify.com/v1/tracks/2hHYNUiI2gWSkcXdKHLX6c',
        id: '2hHYNUiI2gWSkcXdKHLX6c',
        name: 'Version',
        preview_url: 'https://p.scdn.co/mp3-preview/c1949d93cb9ea4970da80f827ea6e9f4c33ebc4a?cid=8897482848704f2a8f8d7c79726a70d4',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:2hHYNUiI2gWSkcXdKHLX6c',
      }],
    },
  };

  const data2 = {
    tracks: {
      href: 'https://api.spotify.com/v1/albums/6peEdPVO73WtgGah5sEhX4/tracks?offset=0&limit=50',
      items: [{
        artists: [{
          external_urls: {
            spotify: 'https://open.spotify.com/artist/3YcBF2ttyueytpXtEzn1Za'
          },
          href: 'https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za',
          id: '3YcBF2ttyueytpXtEzn1Za',
          name: 'Incubus 1',
          type: 'artist',
          uri: 'spotify:artist:3YcBF2ttyueytpXtEzn1Za',
        }],
        disc_number: 1,
        duration_ms: 214946,
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/track/2hHYNUiI2gWSkcXdKHLX6c'
        },
        href: 'https://api.spotify.com/v1/tracks/2hHYNUiI2gWSkcXdKHLX6c',
        id: '2hHYNUiI2gWSkcXdKHLX6c',
        name: 'Version 1',
        preview_url: 'https://p.scdn.co/mp3-preview/c1949d93cb9ea4970da80f827ea6e9f4c33ebc4a?cid=8897482848704f2a8f8d7c79726a70d4',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:2hHYNUiI2gWSkcXdKHLX6c',
      },
      {
        artists: [{
          external_urls: {
            spotify: 'https://open.spotify.com/artist/3YcBF2ttyueytpXtEzn1Za'
          },
          href: 'https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za',
          id: '3YcBF2ttyueytpXtEzn1Za',
          name: 'Incubus 2',
          type: 'artist',
          uri: 'spotify:artist:3YcBF2ttyueytpXtEzn1Za',
        }],
        disc_number: 1,
        duration_ms: 214946,
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/track/2hHYNUiI2gWSkcXdKHLX6c'
        },
        href: 'https://api.spotify.com/v1/tracks/2hHYNUiI2gWSkcXdKHLX6c',
        id: '2hHYNUiI2gWSkcXdKHLX6c',
        name: 'Version 2',
        preview_url: 'https://p.scdn.co/mp3-preview/c1949d93cb9ea4970da80f827ea6e9f4c33ebc4a?cid=8897482848704f2a8f8d7c79726a70d4',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:2hHYNUiI2gWSkcXdKHLX6c',
      }],
    },
  };

  const markup = `
    <div class="music" data-track-preview="${data.tracks.items[0].preview_url}">
      <p class="music-number">${data.tracks.items[0].track_number}</p>
      <p class="music-title">${data.tracks.items[0].name}</p>
      <p class="music-duration">${data.tracks.items[0].duration_ms}</p>
    </div>`;

  const markup2 = `
    <div class="music" data-track-preview="${data2.tracks.items[0].preview_url}">
      <p class="music-number">${data2.tracks.items[0].track_number}</p>
      <p class="music-title">${data2.tracks.items[0].name}</p>
      <p class="music-duration">${data2.tracks.items[0].duration_ms}</p>
    </div>
    <div class="music" data-track-preview="${data2.tracks.items[1].preview_url}">
      <p class="music-number">${data2.tracks.items[1].track_number}</p>
      <p class="music-title">${data2.tracks.items[1].name}</p>
      <p class="music-duration">${data2.tracks.items[1].duration_ms}</p>
    </div>`;

  it('should create and append makup given a correct data', () => {
    const element = document.createElement('div');
    renderAlbumTracks(data.tracks.items, element);
    expect(element.innerHTML).to.be.eql(markup);
  });

  it('should create and append  when more than 1 album', () => {
    const element2 = document.createElement('div');
    renderAlbumTracks(data2.tracks.items, element2);
    expect(element2.innerHTML).to.be.eql(markup2);
  });
});
