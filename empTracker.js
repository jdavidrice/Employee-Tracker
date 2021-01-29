const mysql = import("empTracker.sql");
// Connect to the ice_creamDB database using a localhost connection
const connection = mysql.createConnection({
  host: "localhost",

  // Your port, if not 3306
  port: 3306,

  // Your MySQL username
  user: "root",

  // Your MySQL password (leave blank for class demonstration purposes; fill in later)
  password: "root",

  // Name of database
  database: "empTracker_db",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});
