var engine,world;
const Engine= Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Body=Matter.Body;
const Constraint = Matter.Constraint;

var Bob1,Bob2;
var stand;
var string1;
var string2;



function setup(){
    var canvas = createCanvas(900,700);
    engine = Engine.create();
    world = engine.world;
    
    stand = new Stand(470, 100,500,30);

    Bob1= new BOB(470,500);
    Bob2= new BOB(500,500);
    
    string1 = new String(Bob1.body,stand.body,Bob1.Diameter*2,0); 
    string2 = new String(Bob2.body,stand.body,100,0);

   


 


 

}
function draw(){
    background("black");
    Engine.update(engine);
    stand.display();

    Bob1.display();
    Bob2.display();
    
    string1.display();
    string2.display();
   


}
