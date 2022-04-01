var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
fabric.Image.fromURL('Birthdayimage.jpg', function (Img){
    block=Img;
    block.scaleToWidth(700);
    block.scaleToHeight(500);
    block.set({
        top:0,
        left:0
    });
    canvas.add(block);
})
	
}

function playSound(){
	x.play();
}

