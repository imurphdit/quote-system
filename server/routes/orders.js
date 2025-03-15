const express = require("express");
const router = express.Router();
const data = require("../items.json")



router.get("/", (req, res) => {
  // GET ALL ORDERS
});

router.post("/", (req, res) => {
  // ADD NEW ORDER
})

router
  .route("/:id")
  .get((req, res) => {
    // GET SPECIFIC ORDER
  })
  .put((req, res) => {
    // CHANGE SPECIFIC ORDER
  })
  .delete((req, res) => {
    // DELETE SPECIFIC ORDER
  });

module.exports = router;
