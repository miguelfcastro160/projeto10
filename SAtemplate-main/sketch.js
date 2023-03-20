var background = createSprite(200, 200);
background.setAnimation("vestroia");

var hero = createSprite(200, 345, 200, 345);
hero.shapeColor = "red";

var enemy1 = createSprite(200, 250, 10, 10);
enemy1.shapeColor = "black";

var enemy2 = createSprite(200, 150, 10, 10);
enemy2.shapeColor = "black";

var enemy3 = createSprite(200, 50, 10, 10);
enemy3.shapeColor = "black";

var trofhy = createSprite(200, 5, 200, 20);
trofhy.shapeColor = "black";

var goal = 0;
var death = 0;

hero.setAnimation("rpgcharacter_24_1");
hero.scale = 0.2;

enemy1.setAnimation("rpgcharacter_07_1");
enemy1.scale = 0.2;

enemy2.setAnimation("rpgcharacter_06_1");
enemy2.scale = 0.2;

enemy3.setAnimation("rpgcharacter_05_2");
enemy3.scale = 0.2;

trofhy.setAnimation("award_trophy1_1");
trofhy.scale = 0.1;

enemy1.velocityX = 8;
enemy2.velocityX = -8;
enemy3.velocityX = 8;

function draw() {
    createEdgeSprites();

    enemy1.bounceOff(edges);
    enemy2.bounceOff(edges);
    enemy3.bounceOff(edges);
    hero.bounceOff(edges);

    if (keyDown("w")) {
        hero.y = hero.y - 3;
    }

    if (keyDown("s")) {
        hero.y = hero.y + 3;
    }

    if (keyDown("a")) {
        hero.x = hero.x - 3;
    }

    if (keyDown("d")) {
        hero.x = hero.x + 3;
    }
    if (keyDown("UP_ARROW")) {
        hero.y = hero.y - 3;
    }

    if (keyDown("DOWN_ARROW")) {
        hero.y = hero.y + 3;
    }

    if (keyDown("LEFT_ARROW")) {
        hero.x = hero.x - 3;
    }

    if (keyDown("RIGHT_ARROW")) {
        hero.x = hero.x + 3;
    }
    if (hero.isTouching(enemy1) || hero.isTouching(enemy2) || hero.isTouching(enemy3)) {
        playSound("sound://category_achievements/bubbly_game_achievement_sound.mp3");
        hero.x = 200;
        hero.y = 350;
        death = death + 1;
    }

    if (hero.isTouching(trofhy)) {
        playSound("sound://category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
        hero.x = 200;
        hero.y = 345;
        goal = goal + 1;
    }

    textSize(20);
    fill("blue");
    text("Objetivos:" + goal, 320, 350);


    textSize(20);
    fill("blue");
    text("mortes:" + death, 20, 350);

    drawSprites();
}

