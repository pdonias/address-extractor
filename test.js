/* eslint-env jest */

const extract = require('./dist')

it('finds a lone address', () => {
  expect(
    extract('6 rue Denfert Rochereau')
  ).toEqual([ '6 rue Denfert Rochereau' ])
})

it('ignores address-less text', () => {
  expect(
    extract('Petit appartement très bien situé')
  ).toEqual([])
})

it('can find multiple addresses', () => {
  expect(
    extract('6 rue Denfert Rochereau, 41 rue du Drac')
  ).toEqual([ '6 rue Denfert Rochereau', '41 rue du Drac' ])
})

it('finds address inside parenthesis', () => {
  expect(
    extract('Petit appartement situé au (6 rue Denfert Rochereau). Faibles charges.')
  ).toEqual([ '6 rue Denfert Rochereau' ])
})

it('ignores fake addresses', () => {
  expect(
    extract('Petit appartement situé dans une rue calme. Place de parking disponible.')
  ).toEqual([])
})

it('ignores any text after an "à"', () => {
  expect(
    extract('Situé au 6 rue àbà à Grenoble')
  ).toEqual([ '6 rue àbà' ])
})

it('ignores any text after a "("', () => {
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
