describe('Ingredients Array', function () {
  it('should contain "Chemical X"', function () {
    expect(ingredients.includes('Chemical X')).toBe(
      true,
      'The ingredients array should include "Chemical X".'
    );
  });
});
