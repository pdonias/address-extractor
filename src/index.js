import * as _ from './constants'
import {
  forEach
} from 'lodash'

function removeUselessSpaces (text) {
  return text
    .replace(/ +/g, ' ')
    .replace(/^ | $/, '')
}

module.exports = function (text) {
  const addresses = []
  const arr = text.split(_.SPLIT_RE)

  forEach(arr, piece => {
    if (_.FAKES_RE.exec(piece)) {
      return
    }

    const matches = new RegExp(`([0-9]{1,4} *)?(${_.STREET_TYPES_PATTERN})(.*)`).exec(piece)

    if (matches) {
      addresses.push(removeUselessSpaces(
        (matches[1] || '') + matches[2] + matches[3] // 6 + rue + Denfert Rochereau
      ))
    }
  })

  return addresses
}
