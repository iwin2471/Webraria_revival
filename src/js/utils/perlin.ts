export default class Perlin {
  psng: PSNG;
  x = 0;
  amp: number;
  wl: number;
  fq: number;
  pos = [];
  a: number;
  b: number;

  constructor(amp, wl, width) {
    this.amp = amp;
    this.wl = wl;
    this.fq = 1 / wl;
    this.psng = new PSNG();
    this.a = this.psng.next();
    this.b = this.psng.next();
    this.pos = [];

    while (this.x < width) {
      if (this.x % this.wl === 0) {
        this.a = this.b;
        this.b = this.psng.next();
        this.pos.push(this.a * this.amp);
      } else {
        this.pos.push(
          this.interpolate(this.a, this.b, (this.x % this.wl) / this.wl) *
            this.amp
        );
      }
      this.x++;
    }
  }

  //cosine interpolation
  interpolate(pa, pb, px) {
    let ft = px * Math.PI;
    let f = (1 - Math.cos(ft)) * 0.5;
    return pa * (1 - f) + pb * f;
  }

  //octave generator
  generateNoise(amp, wl, octaves, divisor, width) {
    const result = [];
    for (let i = 0; i < octaves; i++) {
      result.push(new Perlin(amp, wl, width));
      amp /= divisor;
      wl /= divisor;
    }
    return result;
  }

  //combines octaves together
  combineNoise(pl) {
    const pos = [];
    for (let i = 0, total = 0, j = 0; i < pl[0].pos.length; i++) {
      total = 0;
      for (j = 0; j < pl.length; j++) {
        total += pl[j].pos[i];
      }
      pos.push(total);
    }
    return pos;
  }
}

class PSNG {
  Z = 0;
  //linear congruential generator parameters
  M = 4294967296;
  A = 1664525;
  C = 1;

  constructor() {
    this.Z = Math.floor(Math.random() * this.M);
  }

  next() {
    this.Z = (this.A * this.Z + this.C) % this.M;
    return this.Z / this.M - 0.5;
  }
}
