# Address extractor - ! FRENCH ONLY !

## Installation

```sh
$ npm install address-extractor --save
```

## Usage

```js
const extract = require('address-extractor')
const TEXT = `
foo bar 6 rue Charles De Gaulle, foo bar\n
foo bar 7, bvd Henri IV, foo bar
`

extract(TEXT)
// => [ '6 rue Charles De Gaulle', '7 bvd Henri IV' ]
```
