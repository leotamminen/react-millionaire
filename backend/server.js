const { questions } = require("../frontend/src/questions");
const { MongoClient } = require("mongodb");
require("dotenv").config();

// Connection URI
const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}/questionsDB?retryWrites=true&w=majority`;

// Create a new MongoClient
const client = new MongoClient(uri);

async function main() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();

    console.log("Connected to the database");

    // Use the client to perform operations
    const database = client.db("questionsDB");
    const collection = database.collection("questionsCollection");

    // Insert each question into the collection
    await Promise.all(
      questions.map(async (question) => {
        await collection.insertOne(question);
        console.log(`Inserted question with ID ${question.id}`);
      })
    );
  } finally {
    // Close the connection
    await client.close();
  }
}

// Call the main function to establish the connection
main().catch(console.error);
