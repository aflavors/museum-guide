const router = require("express").Router();
const objectRoutes = require("./objects");
const userRoutes = require("./users");
const passport = require("../../passport/setup");

// Object routes
router.use("/objects", objectRoutes);

//Users routes
router.use("/users", userRoutes);

//Passport routes
router.post("/api/users", passport.authenticate("local"), (req, res) => {
    res.json({
        email: req.user.email,
        name: req.user.name,
        id: req.user.id
      });
});

module.exports = router;
