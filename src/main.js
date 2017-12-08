import spotify from './Spotify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

const albums = spotify.search.albums('Green Day');
const albumsList = document.getElementById('albums-list');
albums
  .then(response => response.json())
  .then(dataJson => renderAlbums(dataJson.albums.items, albumsList));

const idAlbum = '6peEdPVO73WtgGah5sEhX4';
const album = spotify.album.getAlbum(idAlbum);
const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');

album
  .then(response => response.json())
  .then(dataJson => renderAlbumInfo(dataJson, albumInfo))
  .then(dataTracks => renderAlbumTracks(dataTracks.tracks.items, albumTracks));

