function collision() {
    if(block1.isTouching(box)) {
        box.shapeColor = "blue";
    }
    if(block2.isTouching(box)) {
        box.shapeColor = "red";
    }
    if(block3.isTouching(box)) {
        box.shapeColor = "green";
    }
    if(block4.isTouching(box)) {
        box.shapeColor = "pink";
    }
}