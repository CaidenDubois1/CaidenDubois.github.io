var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
      var tree;
      var tree2;
      var buildings = [];
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth,1000,'LightBlack');
            background.addChild(backgroundFill);
            
            // TODO 2: - Add a moon and starfield
            var moon = draw.bitmap("img/moon.png");
                    moon.x = 1300;
                     moon.y = 25;
                    moon.scaleX = 0.5;
                     moon.scaleY = 0.5;
                    background.addChild(moon);

                    for(var i2 = 0; i2 < 357; i2++) {
                    var circle = draw.circle(10, "white", "LightGray", 2);
                    circle.x = canvasWidth * Math.random();
                    circle.y = groundY * Math.random();
                    background.addChild(circle);
                    }

            
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < 33; ++i) {
                var buildingHeight = Math.random() * 400 + 100;
                var building = draw.rect(75, buildingHeight, "Gray", "Yelllow", 1);
                building.x = 150 * i;
                building.y = groundY - buildingHeight;
                background.addChild(building);
                buildings.push(building);
              }
            
            // TODO 3: Part 1 - Add a tree
            tree = draw.bitmap("img/tree.png");
            tree.x = 950;
            tree.y = 250;
            background.addChild(tree);
            
            tree2 = draw.bitmap("img/tree.png");
            tree2.x = 650;
            tree2.y = 250;
            background.addChild(tree2);
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            tree.x = tree.x - 2;

            if (tree.x < -200) {
            tree.x = 1900;
                };
                tree2.x = tree2.x - 2;

                if (tree2.x < -200) {
             tree2.x = 1900;
             
            };
            
            // TODO 4: Part 2 - Parallax
            for(var i = 0; i < buildings.length; i++){
                buildings[i].x = buildings[i].x - .3
            }
              

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
