const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function errorHandler(err, req, res, next) {
  if (err.name === "SequelizeValidationError") {
    res.status(400).json({ message: err.errors[0].message });
  } else if (err.name === "NotFound") {
    res.status(404).json({ message: "Resource not found" });
  } else if (
    err.name === "SequelizeValidationError" ||
    err.name === "SequelizeUniqueConstraintError"
  ) {
    res.status(400).json({
      message: err.errors[0].message,
    });
  } else if (err.name === "emptyInput") {
    res.status(400).json({ message: "Please fill e-mail or password" });
  } else if (err.name === "InvalidCredential") {
    res.status(401).json({ message: "Wrong e-mail or password" });
  } else if (err.name === "JsonWebTokenError") {
    res.status(401).json({ message: err.message });
  } else if (err.name === "InvalidToken") {
    res.status(401).json({ message: "Invalid token" });
  } else if (err.name === "userNotFound" || err.name === 'UserNotFound') {
    res.status(404).json({ message: "User does not exist" });
  } else if (err.name === "forbidden") {
    res.status(403).json({ message: "Not authorized" })
  } else if (err.name === "incompleteInput") {
    res.status(403).json({ message: "Please fill the form completely" })
  } else if(err.name === 'EmptyUserId') {
    res.status(400).json({ message: "User ID is required"})
  } else if(err.name === 'EmptyFoodId') {
    res.status(400).json({ message: "Food ID is required"})
  } else if(err.name === 'DuplicateRecord') {
    res.status(400).json({ message: "Food already added to favorites"})
  } else {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = errorHandler;
