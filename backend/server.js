const cors = require("cors");
const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from frontend server
  })
);
const port = process.env.PORT || 4000; // Use port 4000 if PORT environment variable is not set

// MongoDB Connection URI
const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}/questionsDB?retryWrites=true&w=majority`;

app.get("/api/questions", async (req, res) => {
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

    console.log("Fetched questions:", questions); // Add this line to log the fetched questions

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
    res.json(formattedQuestions);
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
});

// Define a route handler for the root URL
app.get("/", (req, res) => {
  res.send("Hello! Welcome to the Quiz API");
});

// Start the Express.js server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
