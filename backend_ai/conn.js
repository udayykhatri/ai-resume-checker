const mongoose = require("mongoose");

mongoose.connect(
    "add your own mongo uri", // 🔑 Paste your MongoDB connection string here
)
    .then(() => {
        console.log("Database Connected Successfully");
    })
    .catch((err) => {
        console.error("FULL ERROR:");
        console.error(err);
    });
