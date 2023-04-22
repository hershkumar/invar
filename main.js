import Vector from "./src/Vector.js";
import Particle from "./src/Particle.js";
import Bond from "./src/Bond.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


let gravForce = new Vector(0,1);

// set up main graphics loop
let particles = [];
let bonds = [];

particles.push(new Particle(new Vector(100,100),new Vector(50,0), 5));
particles.push(new Particle(new Vector(200,100),5));
particles.push(new Particle(new Vector(200,200),5));
particles.push(new Particle(new Vector(100,200),5));

bonds.push(new Bond(particles[0], particles[1]));
bonds.push(new Bond(particles[1], particles[2]));
bonds.push(new Bond(particles[2], particles[3]));
bonds.push(new Bond(particles[3], particles[0]));
bonds.push(new Bond(particles[0], particles[2]));
bonds.push(new Bond(particles[1], particles[3]));

for (let p of particles) {
  p.addConstForce(gravForce);
}


function animate() {
  // first clear the screen
  ctx.clearRect(0,0,canvas.width, canvas.height);
  // update loop for the bonds
  for (let i = 0; i < 100; i++) {
    for (let p of particles) {
      p.boundaryConstraint(canvas.width, canvas.height);
    }
    for (let b of bonds) {
      b.update();
    }
  }
  for (let b of bonds) {
    b.update();
    b.render(ctx);
  }
  for (let p of particles){
    p.update();
    p.render(ctx);
  }


  requestAnimationFrame(animate);
}

animate();
