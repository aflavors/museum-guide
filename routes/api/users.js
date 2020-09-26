const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("../../passport/setup");

// Matches with "/api/signup"
router.route("/signup")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/signup/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

//Passport routes
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({
      email: req.user.email,
      name: req.user.name,
      id: req.user.id
    });
});

module.exports = router;