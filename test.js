const extract = require('./')

test('simple', () => {
  expect(
    extract('6 rue Denfert Rochereau')
  ).toEqual([ '6 rue Denfert Rochereau' ])
})

test('double', () => {
  expect(
    extract('6 rue Denfert Rochereau, 41 rue du Drac')
  ).toEqual([ '6 rue Denfert Rochereau', '41 rue du Drac' ])
})

test('real', () => {
  expect(
    extract('Petit appartement situé au 6, rue Denfert Rochereau, proche du bvd Clémenceau. Faibles charges.')
  ).toEqual([ '6 rue Denfert Rochereau', 'bvd Clémenceau' ])
})

test('fake', () => {
  expect(
    extract('Petit appartement situé dans une rue calme, proche du bvd Clémenceau. Place de parking disponible.')
  ).toEqual([ 'bvd Clémenceau' ])
})
