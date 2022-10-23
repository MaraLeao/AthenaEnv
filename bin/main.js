console.log(System.getFreeMemory() + "\n");

var osdsys_font = new Font();
osdsys_font.color = Color.new(255, 0, 0);

var dejavu_font = new Font("dejavu.bmp");
dejavu_font.color = Color.new(0, 255, 0);
dejavu_font.scale = 2.0;

var antihero_font = new Font("minecraft.ttf");
antihero_font.color = Color.new(0, 0, 255);
antihero_font.scale = 3.0;

var p1 = new Point(0.0, 400.0, Color.new(255, 0, 0));

var l1 = new Line(20.0, 20.0, 150.0, 448.0, Color.new(64, 0, 128));

console.log(System.getFreeMemory() + "\n");

//var img_list = new ImageList();

var wallpaper = new Image("owl.png", RAM); //TODO: ASYNC LOADING IS COMPLETELY FUCKED

//img_list.process();

wallpaper.filter = LINEAR;

console.log("Free VRAM: " + Display.getFreeVRAM() + "\n");

for(var i = 0; i < 10000; i++){
    Display.clear();

    for(var j = 0.0; j < 640.0; j++){
        p1.x = j;
        p1.draw();
    }

    for(var j = 0.0, k = 0.0; j < 448.0 && k < 640.0; j++, k++){
        new Point(k, j).draw();
    }

    if(wallpaper.ready()) {
        wallpaper.width = 512.0;
        wallpaper.height = 256.0;
        wallpaper.draw(0.0, 0.0);
        dejavu_font.print(10, 10, "Counter: " + i);
        osdsys_font.print(10, 50, "Free memory: " + System.getFreeMemory());
        antihero_font.print(10, 120, "Counter: " + i);
    }

    l1.draw();
    
    Display.flip();
}

wallpaper = null;
//img_list = null;
osdsys_font = null;
dejavu_font = null;
antihero_font = null;
Duktape.gc();

console.log("Finished!\n");

while(true){
    continue;
}

