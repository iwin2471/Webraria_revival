var Context = new HTML("mainCanvas");

for(var i = 0; i < Context.canvas.height; i+=52){
    for(var j = 0; j < Context.canvas.width; j+=52){
        Context.context.beginPath();
        Context.context.fillStyle = "black";
        Context.context.fillRect(j, i, 50, 50);
    }
}
