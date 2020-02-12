const net = require("net");

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: "192.168.88.177",
    port: 50541
  });
  conn.on("connect", () => {
    console.log("Successful connection to game server");
    conn.write("Name: NRP");
  });
  conn.on("timeout", () => {
    console.log("you ded cuz you idled");
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", data => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };
