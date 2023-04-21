import Vector from "./src/Vector.js";
import Particle from "./src/Particle.js";
import Bond from "./src/Bond.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


// set up main graphics loop
let particles = [];
let bonds = [];

for (let i = 0; i < 10; i++) {
  particles.push(new Particle(new Vector(Math.random()*canvas.width, Math.random()*canvas.height),6));
}

/**
*for (let i = 0; i < 9; i++) {
*  bonds.push(new Bond(particles[i], particles[i+1]));
*}
**/

function animate() {
  // first clear the screen
  ctx.clearRect(0,0,canvas.width, canvas.height);

  for (let b of bonds) {
    b.animate(ctx);
  }

  for (let p of particles){
    p.animate(ctx);
  }


  requestAnimationFrame(animate);
}

animate();
