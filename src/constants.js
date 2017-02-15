import {
  filter,
  map
} from 'lodash'

export const COMP = [
  'a',
  'b',
  'bis',
  'c',
  'ter'
]

export const TRIGGERS = [
  'près',
  'proche',
  'proximité',
  'secteur'
]

export const STREET_TYPES = [
  'allée',
  'avenue',
  'boulevard',
  'chemin',
  'cours',
  'place',
  'quai',
  'rue'
]

export const ALIASES = {
  'allée': [ 'allee' ],
  avenue: [ 'av' ],
  boulevard: [ 'bvd', 'blvd' ],
  chemin: [ 'ch' ],
  cours: [ 'crs' ],
  place: [ 'pl' ],
  'près': [ 'pres', 'prés' ],
  'proximité': [ 'proximite' ]
}

export const FAKES = [
  'calme',
  'comprenant',
  'parking',
  'stationnement'
]

export const LINKERS = [
  'de la',
  'de',
  'des',
  'du'
]

export const STOPS = [
  ' à ',
  ',',
  ';',
  ':',
  '\\.',
  '\\(',
  '\\)',
  '\n',
  '\r'
]

export const SPLIT_RE = new RegExp(STOPS.join('|'), 'g')
export const FAKES_RE = new RegExp(FAKES.join('|'), 'g')
export const STREET_TYPES_PATTERN = STREET_TYPES.join('|')

const _getAliases = words =>
  map(filter(words, type => ALIASES[type]), type => ALIASES[type])

const ALL_TRIGGERS = TRIGGERS
  .concat(_getAliases(TRIGGERS))
  .concat(STREET_TYPES)
  .concat(_getAliases(STREET_TYPES))

export const TRIGGER_RE = new RegExp(ALL_TRIGGERS.join('|'), 'g')
