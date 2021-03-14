const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon, a, b, c, d, e, f, g, h, i, j, k, l;
function preload(){
    polygonImage = loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

a = new Ground(330, 240, 120, 10)
b = new Ground(750, 120, 90, 10);


c = new BaseClass(330, 235, 30, 40);
d = new BaseClass(360, 235, 30, 40);
e = new BaseClass(390, 235, 30, 40);
f = new BaseClass(420, 235, 30, 40);
g = new BaseClass(450, 235, 30, 40);
h = new BaseClass(360, 195, 30, 40);

j = new BaseClass(390, 195, 30, 40);
k = new BaseClass(320, 195, 30, 40);
l = new BaseClass(390, 155, 30, 40);


}
function draw(){
    background("white");
    a.display();
    b.display();
    c.display();
    d.display();
    e.display();
    f.display();
    g.display();
    h.display();
    k.display();
    j.display();
    l.display();
    
}
