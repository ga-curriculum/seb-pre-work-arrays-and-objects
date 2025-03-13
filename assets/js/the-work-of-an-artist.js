describe('The artist object', () => {
  it('has a name property', () => {
    expect(typeof artist.name).toEqual('string');
  });
  it('has a talents array property', () => {
    expect(Array.isArray(artist.talents)).toBe(true);
  });
  it('has an albumsRecorded property', () => {
    expect(typeof artist.albumsRecorded).toBe('number');
  });
});
