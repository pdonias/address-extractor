const extract = require('./')

test('test', () => {
  expect(extract('6 rue Denfert Rochereau')).toBe('6 rue Denfert Rochereau')
})
