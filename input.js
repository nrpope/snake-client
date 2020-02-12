let connection;
const {
  MoveDown,
  MoveRight,
  MoveLeft,
  MoveUp,
  SpecialChar1,
  SpecialChar2
} = require("./constants");

const handleUserInput = function(data) {
  if (data === "\u0003") {
    connection.write("Say: Later!");
    console.log("disconnected");
    setTimeout(() => {
      process.exit();
    }, 800);
  }
  if (data === MoveUp) {
    connection.write("Move: up");
  }
  if (data === MoveDown) {
    connection.write("Move: down");
  }
  if (data === MoveLeft) {
    connection.write("Move: left");
  }
  if (data === MoveRight) {
    connection.write("Move: right");
  }
  if (data === SpecialChar1) {
    connection.write("Say: Get dunked on");
  }
  if (data === SpecialChar2) {
    connection.write("Say: Issss a sssssnake");
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };
