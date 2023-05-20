const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares")

const router = Router();

router.get("/", controllers.getCharacters);

router.post("/",middlewares.characterValidation, controllers.postCharacters)

router.get("/:id", controllers.getCharacterById);

module.exports = router;
