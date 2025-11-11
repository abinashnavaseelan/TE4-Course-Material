console.log("Hello TS");
// ! Strings
var firstName = "Sarah";
firstName = "Anna";
var age = 35;
var greeting = "Hello "
  .concat(firstName, " you are ")
  .concat(age, " years old.");
console.log(greeting);
//! Numbers
var priceFromDB = "289";
var personsAge = 28;
var price = 49.5;
var hexValue = 0xf00d;
var itemQuantity = 5;
var totalCost = itemQuantity * Number(priceFromDB);
console.log(totalCost);
// !Booleans
var isLoggedIn = true;
var isError = false;
var isLoading = true;
// ! Arrays
var users = ["Frank", "Ingela", "Alex", "Panes"];
var points = [1, 2, 3, 4, 5, 6, 7];
users.map(function (u) {
  console.log(u);
});
var p1 = {
  x: 100,
  y: 200,
  label: "something else",
};
var p2 = {
  x: 10,
  y: 20,
  label: "Something",
};
console.log(p1);
var primaryColor = [255, 0, 255];
// ! Enums
var Direction;
(function (Direction) {
  Direction[(Direction["Up"] = 0)] = "Up";
  Direction[(Direction["Down"] = 1)] = "Down";
  Direction[(Direction["Left"] = 2)] = "Left";
  Direction[(Direction["Right"] = 3)] = "Right";
})(Direction || (Direction = {}));
var playerDirection = Direction.Up;
if (playerDirection === Direction.Up) {
  console.log("Moving ".concat(playerDirection));
}
// ! Null
var studentName = null;
studentName = "Manhal";
studentName = null;
// ! Functions
var logMessage = function (name) {
  var message = "Heeeellllooo my name is ".concat(name);
  console.log(message);
};
logMessage("Michel");
var calculateArea = function (length, width) {
  return length * width;
};
console.log(calculateArea(3, 100));
// ! Unknown
var data = 25;
// console.log(data.toUpperCase()); // TS doesnt know the type of data!
if (typeof data === "string") console.log(data.toUpperCase());
if (typeof data === "number") console.log(data + 50);
// ! union - types
var userId = null;
// userId = "userid-temp";
userId = 85957;
// userId = false
var showUserId = function (id) {
  if (typeof id === "number") {
    console.log(id.toFixed());
  } else {
    console.log(id.toUpperCase());
  }
};
showUserId(userId);
var userName = "abinashnavaseelan";
var highScore = 1000;
var IsLoggedIn = false;
var countdown = 10;
countdown = null;
var gameTags = ["action", "multiplayer", "strategy"];
var currentScore = {
  points: 850,
  isFinal: false,
};
var userSetting;
function logError(message) {
  // Ensure any value can be safely logged
  if (message instanceof Error) {
    console.error(message.message);
    if (message.stack) {
      console.error(message.stack);
    }
    return;
  }
  console.error(String(message));
}
function calculatePercentage(part, total) {
  if (total === 0) {
    logError("Total cannot be zero when calculating percentage.");
    return 0;
  }
  return (part / total) * 100;
}
var finalPercentage = calculatePercentage(850, 1000);
