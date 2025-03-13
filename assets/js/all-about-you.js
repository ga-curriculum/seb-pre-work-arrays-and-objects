describe('The aboutMe object', () => {
  it('contains at least four properties', () => {
    expect(Object.keys(aboutMe).length > 3).toBe(true);
  });
  it('contains at least one array', () => {
    let hasArray = false;
    for (key in aboutMe) {
      if (Array.isArray(aboutMe[key])) {
        hasArray = true;
      }
    }
    expect(hasArray).toBe(true);
  });
});
