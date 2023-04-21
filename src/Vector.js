// defines a 2D vector object, along with the usual linear algebra vector manipulation tools
class Vector {
	constructor(x, y) {
		this.x = x || 0;
		this.y = y || 0;
	}

	// clones a vector and returns the copy
	clone() {
		return new Vector(this.x, this.y);
	}
	// sets the x and y coordinates
	set(x, y) {
		this.x = x;
		this.y = y;
		return this;
	}
	// sets just the x coordinate
	setX(x) {
		this.x = x;
		return this;
	}
	// sets just the y coordinate
	setY(y) {
		this.y = y;
		return this;
	}
	// computes the magnitude of a vector
	mag() {
		return Math.sqrt(this.x ** 2 + this.y ** 2);
	}
	// multiplies a vector by a scalar
	scale(scalar) {
		this.x *= scalar;
		this.y *= scalar;
		return this;
	}
    // scale that clones,scales, and then returns the scaled vector
	scaleClone(scalar) {
        return this.clone().scale(scalar);
    }
	// computes dot product
	dot(vec) {
		return (this.x * vec.x) + (this.y * vec.y);
	}
	// projects the current vector in the direction of the argument vector
	project(vec) {
		return vec.scale(this.dot(vec) / vec.dot(vec));
	}
    //TODO: function that rotates a vector by a given amount

    // function that computes the distance between the vector and a given vector
	dist(vec) {
        return Math.sqrt((this.x - vec.x)**2 + (this.y - vec.y)**2);
    }
}


export default Vector;
