class Particle {
  constructor(position, radius) {
    this.position = position;
    this.oldPosition = position;
    this.radius = radius;
    // TODO: figure out what variables the particle class will store
    // mass,
    this.color = "#2cb42c";
   }



  // function that renders the particle to the canvas
  render(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    // now draw the actual circle
    ctx.arc(this.position.x, this.position.y, this.radius, 0, 2*Math.PI)
    ctx.fill();
    ctx.closePath();
  }

  // function that fully updates, constrains, and renders a particle on screen
  //TODO: introduce constraints, updates, bonds, etc
  animate(ctx) {
    this.render(ctx);
  }
}

export default Particle;
