const express = require("express");
const router = express.Router();
const data = require("../items.json")


router.get("/", (req, res) => {
  res.json(data);
  //Get all items
});

router.post("/", (req, res) => {
  // Create new item
})

router
  .route("/:id")
  .get((req, res) => {
    const selectedItem = data.find((item) => item.id === req.params.id)
    res.json(selectedItem);
  })
  .put((req, res) => {
    res.send("Change a specific item");
  })
  .delete((req, res) => {
    const selectedItem = data.find((item) => item.id === req.params.id)
    delete data[selectedItem]
    res.send(data[selectedItem])
  });

module.exports = router;
