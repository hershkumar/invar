import Vector from "./Vector.js";

// class that represents a constraint that fixes the distance between two particles.
class Bond {
  constructor(particle1, particle2, bondLength, k) {
    this.p1 = particle1;
    this.p2 = particle2;
    // if we don't specify a bond length
    if (!bondLength) {
      // set the bond length to be the current distance
      this.dist = particle1.position.dist(particle2.position);
    } else {
      this.dist = bondLength;
    }

    if (!k) {
      this.k = 2;
    } else {
      this.k = k;
    }

    this.color = "#b62b0b";
    this.width = 5;

    // whether the bond is shown or not
    this.hidden = false;
  }

  update() {
    // compute the current distance between the particles
    let displacement = Vector.subtract(this.p2.position, this.p1.position);

    let distance = this.p1.position.dist(this.p2.position);
    let diff = (this.dist - distance)/distance * this.k;
    let offX = displacement.x * diff * .5;
    let offY = displacement.y * diff * .5;
    let totalMass = this.p1.mass + this.p2.mass;

    let p1FractionalMass = this.p1.mass / totalMass;
    let p2FractionalMass = this.p2.mass / totalMass;

    if (!this.p1.static) {
      this.p1.position.x -= offX * p2FractionalMass;
      this.p1.position.y -= offY * p2FractionalMass;
    }
    if (!this.p2.static) {
      this.p2.position.x += offX * p1FractionalMass;
      this.p2.position.y += offY * p1FractionalMass;
    }
  }


  render(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.lineWidth = this.width;
    // draw the line between p1 and p2
    ctx.moveTo(this.p1.position.x, this.p1.position.y);
    ctx.lineTo(this.p2.position.x, this.p2.position.y);
    ctx.stroke();
  }

}

export default Bond;
