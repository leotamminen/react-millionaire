const { MongoClient } = require("mongodb");
require("dotenv").config();

// MongoDB Connection URI
const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}/questionsDB?retryWrites=true&w=majority`;

async function getQuestions(req, res) {
  let client;
  try {
    // Connect to MongoDB
    client = new MongoClient(uri);
    await client.connect();
    console.log("Connected to MongoDB");

    // Access the questions collection
    const database = client.db("questionsDB");
    const collection = database.collection("questionsCollection");

    // Query MongoDB to fetch questions
    const questions = await collection
      .find({}, { projection: { _id: 0 } })
      .toArray();

    console.log("Fetched questions:", questions);

    // Format the questions data before sending it to the frontend
    const formattedQuestions = questions.map((question) => ({
      id: question.id,
      question: question.question,
      answers: question.answers.map((answer) => ({
        text: answer.text,
        correct: answer.correct,
      })),
    }));

    // Return the formatted questions as a response
    res.status(200).json(formattedQuestions);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  } finally {
    // Close the MongoDB connection
    if (client) {
      await client.close();
      console.log("MongoDB connection closed");
    }
  }
}

module.exports = { getQuestions };
