export default class Iprange {
  // root array which consist of ip range arrays
  ranges: string[][];

  // empty array as default cosntruction parameter
  constructor(ranges: [][] = []) {
    this.ranges = ranges;
  }

  // add new ip range [IP_start, IP_end]
  addRange(range: string[]): void {
    this.ranges.push(range);
  }

  // finds and returns the first different part
  getFirstDifference(start: number[], end: number[]): number {
    for (let i = 0; i < 3; i++) {
      if (start[i] != end[i]) return i;
    }
    return 3;
  }

  // check given IP if its in the range
  checkIP(ip: string): boolean {
    // split ip address
    let inRange = false;

    const _ip: number[] = ip.split('.').map(Number);
    // loop all ranges
    this.ranges.forEach((range) => {
      const [start, end] = range;

      const _start = start.split('.').map(Number);
      const _end = end.split('.').map(Number);

      const differentPart = this.getFirstDifference(_start, _end);

      // all parts until the different one must be equal with the current range
      for (let i = 0; i < differentPart; i++) {
        if (_start[i] != _ip[i]) break;
      }
      // check difference part
      if (
        _ip[differentPart] >= _start[differentPart] &&
        _ip[differentPart] <= _end[differentPart]
      ) {
        inRange = true;
      }
    });
    return inRange;
  }
}
