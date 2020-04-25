import { expect } from 'chai';
import 'mocha';
import Iprange from '../src/index';

describe('Iprange class methods', () => {
  it('should return true', () => {
    const range = new Iprange([['64.18.0.0', '64.18.0.255']]);
    const result = range.checkIP('64.18.0.1');
    expect(result).to.equal(true);
  });
  it('should return true', () => {
    const range = new Iprange([['64.18.0.5', '64.20.0.255']]);
    const result = range.checkIP('64.18.2.0');
    expect(result).to.equal(true);
  });
  it('should return true', () => {
    const range = new Iprange([['64.18.0.5', '64.20.0.255']]);
    const result = range.checkIP('64.19.0.0');
    expect(result).to.equal(true);
  });
  it('should return false', () => {
    const range = new Iprange([['64.18.0.5', '64.18.0.255']]);
    const result = range.checkIP('64.19.0.0');
    expect(result).to.equal(false);
  });
  it('should return false', () => {
    const range = new Iprange([['64.18.0.5', '64.18.0.255']]);
    const result = range.checkIP('65.19.0.0');
    expect(result).to.equal(false);
  });
  it('should return false', () => {
    const range = new Iprange([['216.239.32.1', '216.239.63.255']]);
    const result = range.checkIP('216.238.62.0');
    expect(result).to.equal(false);
  });
  it('should return false', () => {
    const range = new Iprange([['216.239.32.1', '216.239.63.255']]);
    const result = range.checkIP('217.238.62.0');
    expect(result).to.equal(false);
  });
  it('should return true', () => {
    const range = new Iprange([['0.0.0.0', '1.0.0.0']]);
    const result = range.checkIP('0.0.0.0');
    expect(result).to.equal(true);
  });
});
