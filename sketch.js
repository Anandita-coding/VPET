var dog , happyDog
var foodS,foodStock


function preload()
{
  //load images here
  
  dogI = loadImage("images/dogImg.png")
  dogH = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(900, 500);
  database = firebase.database();

  foodStock = database.ref('food')
  foodStock.on("value",readStock)
  
  var dog = createSprite(650,250,10,10)
  dog.addImage(dogI)
  dog.scale =0.3
}


function draw() {  
background(47,80,139)
  drawSprites();
  //add styles here
  
  textSize(20)
  
  text("Food Remaining:"+ writeStock ,100,100)

}
function readStock(data){
   foodS = data.val();
}
function writeStock(){

if(x<=0){
  x=0 
}else{
  x=x-1
}



  database.ref('/').update({
    food:x
  })
}
if(keyCode === 38){

writeStock(foodS)
dog.addImage(dogH)


}
