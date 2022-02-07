const { MongoClient } = require("mongodb");

const uri =  "mongodb://127.0.0.1:27017/shop";

const client = new MongoClient(uri);

let connect;

async function run() {
    try {
      // Connect the client to the server
      await client.connect();
      // Establish and verify connection
      await client.db().command({ ping: 1 });
      connect = client;
      console.log("Connected successfully to server");
    } finally {
      // Ensures that the client will close when you finish/error
      // await client.close();
    }
  }

  function getConnect() {
      if(!connect) {
          throw new Error("Database not connected");
      } else {
        return connect; 
      }
  }



  module.exports = {run, getConnect};