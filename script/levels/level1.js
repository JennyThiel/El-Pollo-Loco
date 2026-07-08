const level1 = new Level (
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicks_small(),
        new Chicks_small(),
        new Chicks_small(),
        new Chicks_small(),
        new Chicks_small(),
        new Endboss()
    ],
    [
        new Cloud('img/5_background/layers/4_clouds/1.png'),
        new Cloud('img/5_background/layers/4_clouds/2.png'),
        new Cloud('img/5_background/layers/4_clouds/1.png'),
        new Cloud('img/5_background/layers/4_clouds/2.png'),
    ],
    [
        new BackgroundObject('img/5_background/layers/air.png', -720),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -720),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -720),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -720),

        new BackgroundObject('img/5_background/layers/air.png', 0),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/air.png', 720),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 720),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 720),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 720),

        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 1440),
        new BackgroundObject('img/5_background/layers/air.png', 1440),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 1440),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 1440),

        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 2160),
        new BackgroundObject('img/5_background/layers/air.png', 2160),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 2160),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 2160),
    ],
    // [
    //     new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
    //     new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
    //     new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
    //     new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
    //     new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
    // ],
    // [
    //     new Coin ('img/8_coin/coin_1.png'),
    //     new Coin ('img/8_coin/coin_2.png'),
    //     new Coin ('img/8_coin/coin_1.png'),
    //     new Coin ('img/8_coin/coin_1.png'),
    // ],
    // [
        //  
        // new Statusbar_Health('img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png', 40),
        // new Statusbar_Bottle('img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',80),
    // ],
   


);


