// eslint-disable-next-line import/no-extraneous-dependencies
require("dotenv").config();
const { DBClient } = require("./Utils/DB/DBConnection");

function wakeupDB() {
  let counter = 0;
  DBClient.query("SHOW TABLES;")
    .then(() => console.log("DB is awake and running!"))
    .catch(err => {
      console.log(`DB is still asleep!: ${err}`);
      if (counter < 3) {
        counter += 1;
        console.log(`Waking the DB again ${counter}`);
        setTimeout(wakeupDB, 35000);
      }
    });
}

console.log("Checking if DB is awake");
wakeupDB();
