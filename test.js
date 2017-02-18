const extract = require('./')

test('simple', () => {
  expect(
    extract('6 rue Denfert Rochereau')
  ).toEqual([ '6 rue Denfert Rochereau' ])
})

test('none', () => {
  expect(
    extract('Petit appartement très bien situé')
  ).toEqual([])
})

test('double', () => {
  expect(
    extract('6 rue Denfert Rochereau, 41 rue du Drac')
  ).toEqual([ '6 rue Denfert Rochereau', '41 rue du Drac' ])
})

test('real', () => {
  expect(
    extract('Petit appartement situé au (6, rue Denfert Rochereau), à proximité du bvd Clémenceau. Faibles charges.')
  ).toEqual([ '6 rue Denfert Rochereau', 'proximité du bvd Clémenceau' ])
})

test('fake', () => {
  expect(
    extract('Petit appartement situé dans une rue calme, proche du bvd Clémenceau. Place de parking disponible.')
  ).toEqual([ 'proche du bvd Clémenceau' ])
})

test('stop before à', () => {
  expect(
    extract('Situé au 6 rue àbà à Grenoble')
  ).toEqual([ '6 rue àbà' ])
})

test('parenthesis', () => {
  expect(
    extract('Situé au 6 rue  Denfert Rochereau (Grenoble)')
  ).toEqual([ '6 rue Denfert Rochereau' ])
})

test('carriage return', () => {
  expect(
    extract(`6 rue Denfert Rochereau
dans immeuble ancien`)
  ).toEqual([ '6 rue Denfert Rochereau' ])
})
