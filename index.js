const includes = require('lodash').includes

const RE = /([0-9]{1,4},? )?((bis|ter|a|b|c),? )?(ch(emin)?|av(enue)?|rue|pl(ace)?|boulevard|bv?d|c(ou)?rs|all[eé]e|quai|secteur|proche|proximit[eé])( [^.,;:() ]*){1,4}(( [^.,;:() ]*){0,3}[.,;:()])?/gi
const FAKES = [ 'parking', 'stationnement', 'calme', 'comprenant' ]

function pure (address) {
  return address
    .replace(/[.,;:()]/g, '') // "6, rue foo" => "6 rue foo"
    .replace(/^ | $/g, '') // "6 rue foo " => "6 rue foo"
    .replace(/ +/g, ' ') // "6   rue  foo" => "6 rue foo"
    .replace(/ à .*$/, '') // "6 rue foo à bar" => "6 rue foo"
}

function checkFakes (address) {
  for (fake of FAKES) {
    if (includes(address, fake)) return false
  }

  return true
}

module.exports = function (text) {
  const addresses = []
  let matches

  do {
    matches = RE.exec(text)
    if (matches && checkFakes(matches[0])) {
      addresses.push(pure(matches[0]))
    }
  } while (matches)

  return addresses
}
