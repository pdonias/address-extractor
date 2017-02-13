const RE = /([0-9]{1,4},? )?((bis|ter|a|b|c),? )?(ch(emin)?|av(enue)?|rue|pl(ace)?|boulevard|bv?d|c(ou)?rs|all[ée]e)( [^\.,;: ]*){1,4}(( [^\.,;: ]*){0,3}[\.,;:])?/gi

module.exports = function (text) {
  const matches = RE.exec(text)

  return matches[0]
}
