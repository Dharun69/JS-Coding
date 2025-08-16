//factory function : it produce objects
//it use to produce object

function createCircle(radius) {
    const circle = {
        radius: radius,
        draw() {
            console.log("draw");
        },
    };
    return circle;
}
const c1 = createCircle(1);
console.log(c1.radius);
c1.draw();

//constructor function : also used to create objects

function circle(radius) {
    this.radius = radius; // this is pointing to the current obj
    this.draw = function () {
        console.log("draw", radius);
    };
}

//how to call constructor function: use new keyword
const a = new circle(3);
console.log(a);
