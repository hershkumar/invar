import Vector from "./Vector.js";
import Particle from "./Particle.js";
import Bond from "./Bond.js";

class Object {
  constructor() {
    this.particles = [];
    this.bonds = [];

  }


  addParticleObj(particle) {
    this.particles.push(particle);
  }

  addParticle(pos, vel0, radius) {
    this.particles.push(new Particle(pos, vel0, radius));
  }
}
