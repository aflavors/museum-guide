const router = require("express").Router();
const objectsController = require("../../controllers/objectsController");

// Matches with "/api/objects"
router.route("/")
  .get(objectsController.findAll)
  .post(objectsController.create);

// Matches with "/api/objects/:id"
router
  .route("/:id")
  .get(objectsController.findById)
  .put(objectsController.update)
  .delete(objectsController.remove);

module.exports = router;
