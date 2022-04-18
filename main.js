var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

 fabric.Image.fromURL(get_image, function(Img){})
function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg",function(Img)
    {
        block_Image_object=Img;
        block_Image_object.scaleToWidth(700);
        block_Image_object.scaleToHeight(500);
        block_Image_object.set({
            top:0,
            left:0
        });
    canvas.add(block_Image_object)
    })
};

function playSound(){
	x.play();
}
