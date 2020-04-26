# ip-range

Check if the given IP address is in the provided range.

## Install

```
npm i @ofarukcaki/ip-range
```

## Usage

```javascript
const Iprange = require('@ofarukcaki/ip-range').default;

const initialRanges = [
  ['0.0.0.1', '0.0.0.255'],
  ['123.123.0.0', '123.123.124.255'],
  ['66.0.0.0', '66.1.0.0'],
];

/* Initialize a new range by providing an array of string arrays
 * consists of start-end addresses of an IP.
 * Don't pass a parameter if you don't want to initialize on creation
 */
const range = new Iprange(initialRanges);

// add a new range
const newRange = ['192.0.0.1', '192.0.0.5'];
range.addRange(newRange);

console.log(range.checkIP('123.123.1.0')); // true

console.log(range.checkIP('66.0.1.255')); // true

console.log(range.checkIP('192.0.0.0')); // false

```