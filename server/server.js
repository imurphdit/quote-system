const express = require("express");
const app = express();
const port = 8080;

// React Setup
const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:5173"],
};
app.use(cors(corsOptions));

// Setup Images dir
app.use(express.static('public'));

app.use(express.json());

// Routes 
const itemsRouter = require("./routes/items.js");
const ordersRouter = require("./routes/orders.js")

app.use("/api/items", itemsRouter);
app.use("/api/orders", ordersRouter)


app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
