const router = require("express").Router();
const objectRoutes = require("./objects");

// Book routes
router.use("/objects", objectRoutes);

module.exports = router;
