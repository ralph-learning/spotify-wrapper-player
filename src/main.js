import spotify from './Spotify';
import renderAlbums from './AlbumList';

const albums = spotify.search.albums('metallica');
const albumsListElement = document.getElementById('albums-list');


albums
  .then(response => response.json())
  .then(dataJson => renderAlbums(dataJson.albums.items, albumsListElement));
