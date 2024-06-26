var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY },
          { type: "sawblade", x: 600, y: groundY },
          { type: "sawblade", x: 900, y: groundY },
          { type: "reward", x: 1900, y: groundY - 60},
          { type: "reward", x: 1500, y: groundY - 60},
          { type: "reward", x: 1100, y: groundY - 60},
          { type: "reward", x: 700, y: groundY - 60},
          { type: "enemy", x: 1300, y: groundY - 60},
          { type: "marker", x: 2200, y: groundY - 80},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY },
          { type: "sawblade", x: 600, y: groundY },
          { type: "sawblade", x: 900, y: groundY },
          { type: "reward", x: 2000, y: groundY - 60},
          { type: "reward", x: 1600, y: groundY - 60},
          { type: "reward", x: 1200, y: groundY - 60},
          { type: "reward", x: 800, y: groundY - 60},
          { type: "enemy", x: 1400, y: groundY - 60},
          { type: "marker", x: 2300, y: groundY - 80},
        ],
      },
      {
        name: "Robot Stomp",
        number: 3,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 500, y: groundY },
          { type: "sawblade", x: 700, y: groundY },
          { type: "sawblade", x: 1000, y: groundY },
          { type: "reward", x: 2000, y: groundY - 60},
          { type: "reward", x: 1600, y: groundY - 60},
          { type: "reward", x: 1200, y: groundY - 60},
          { type: "reward", x: 800, y: groundY - 60},
          { type: "enemy", x: 1400, y: groundY - 60},
          { type: "marker", x: 2300, y: groundY - 80},
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
