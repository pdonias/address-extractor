const includes = require('lodash').includes

const RE = /([0-9]{1,4},? )?((bis|ter|a|b|c),? )?(ch(emin)?|av(enue)?|rue|pl(ace)?|boulevard|bv?d|c(ou)?rs|all[ée]e)( [^\.,;: ]*){1,4}(( [^\.,;: ]*){0,3}[\.,;:])?/gi
const FAKES = [ 'parking', 'calme', 'comprenant' ]

function pure (address) {
  return address.replace(/[.,]+/g, '').replace(/ +/g, ' ')
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
