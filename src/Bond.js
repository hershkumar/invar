// class that represents a constraint that fixes the distance between two particles.
class Bond {
  constructor(particle1, particle2, bondLength) {
    this.p1 = particle1;
    this.p2 = particle2;
    // if we don't specify a bond length
    if (!bondLength) {
      // set the bond length to be the current distance
      this.dist = particle1.position.dist(particle2.position);
    } else {
      this.dist = bondLength;
    }

    this.color = "#b62b0b";
    this.width = 5;
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

  animate(ctx) {
    this.render(ctx);
  }
}

export default Bond;
