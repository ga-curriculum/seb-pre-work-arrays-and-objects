describe('aboutMe object greeting challenge', () => {
  it('includes the correct properties and types', () => {
    expect(typeof aboutMe.name).toEqual('string');
    expect(typeof aboutMe.age).toEqual('number');
  });
});
