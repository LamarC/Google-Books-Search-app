const router = require("express").Router();
const bookRoutes = require(".books");

//Book route
router.use("/books", bookRoutes);

module.exports = router;
