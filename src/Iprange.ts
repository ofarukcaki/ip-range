export default class Iprange {
  // root array which consist of ip range arrays
  ranges: string[];

  // empty array as default cosntruction parameter
  constructor(ranges: string[] = []) {
    this.ranges = ranges;
  }

  // add new ip range [IP_start, IP_end]
  addRange(range: string[]): void {}

  // check given IP if its in the range
  checkIP(ip: string) {}
}