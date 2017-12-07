import { expect } from 'chai';

import spotify from '../src/Spotify';

describe('Spotify', () => {
  it('should be an object', () => {
    expect(spotify).to.be.an('object');
  });

  it('should have a search methods', () => {
    expect(spotify.search).to.be.exist;
  });

  it('should have a album methods', () => {
    expect(spotify.album).to.be.exist;
  });
});
