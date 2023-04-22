import Vector from "./Vector.js";

class Particle {
  constructor(position, velocity, radius) {
    this.position = position;
    this.oldPosition = new Vector(position.x + (velocity.x || 0), position.y + (velocity.y || 0));
    this.radius = radius || 5;
    this.color = "#2cb42c";
    this.mass = 1;
    this.static = false;
    this.hidden = false;
    this.constForces = [];
    this.varForces = [];
    this.friction = .90;
   }

  // add a force that acts every single frame
  addConstForce(vec) {
    this.constForces.push(vec);
  }
  // add a force that varies every frame
  addVarForce(vec) {
    this.varForces.push(vec);
  }

  boundaryConstraint(canvasWidth, canvasHeight) {
    if (this.position.x > canvasWidth - this.radius) {
      this.position.x = canvasWidth - this.radius;
    }
    if (this.position.x < this.radius) {
      this.position.x = this.radius;
    }
    if (this.position.y > canvasHeight - this.radius) {
      this.position.y = canvasHeight - this.radius;
    }
    if (this.position.y < this.radius) {
      this.position.y = this.radius;
    }
  }

  constrain() {

  }
  // function that updates the position of the particle
  update() {
    // if its pinned in place, the update doesn't change the position
    if (this.static) { return; }
    // v = (x - x_o) * decay_factor
    let velocity = Vector.subtract(this.position, this.oldPosition).scale(this.friction);
    this.oldPosition.set(this.position.x, this.position.y);
    this.position.add(velocity);
    // apply all the forces acting on the particle
    for (let f of this.constForces) {
      this.position.add(f);
    }
    // do the same for the variable forces, but clear the array afterwards
    for (let f of this.varForces) {
      this.position.add(f);
    }
    this.varForces = [];
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

}

export default Particle;
