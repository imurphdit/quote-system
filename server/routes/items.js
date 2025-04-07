const express = require("express");
const router = express.Router();
const bp = require("body-parser");
const { Sequelize, Model, DataTypes } = require("sequelize")

// Create sequelize instance
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
})

// Set up model

class Items extends Model {}

Items.init({
  title: DataTypes.STRING,
  img: DataTypes.STRING,
  category: DataTypes.STRING,
}, { sequelize, modelName: "items"});

sequelize.sync();

// Middleware ??
router.use(bp.urlencoded({ extended: false }));
router.use(bp.json());

router.get("/", async (req, res) => {
  //Get all items
  const items = await Items.findAll();
  res.json(items);
});

router.post("/", async (req, res) => {
  // Create new item
  const item = await Items.create(req.body);
  res.json(item);
})

router
  .route("/:id")
  .get( async (req, res) => {
    // Get specific item
    const item = await Items.findByPk(req.params.id);
    res.json(item);
  })
  .put( async (req, res) => {
    // Change specific item
    const item = await Items.findByPk(req.params.id);
    if (item) {
      await item.update(req.body);
      res.json(item);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  })
  .delete( async (req, res) => {
    // Delete specific item
    const item = await Items.findByPk(req.params.id);
  if (item) {
    await item.destroy();
    res.json({ message: 'Item deleted' });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
  });

module.exports = router;
