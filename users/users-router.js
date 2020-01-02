const router = require("express").Router();

const User = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");

router.get("/", restricted, (req, res) => {
  User.find()
    .then(users => {
      res.json(users);
    })
    .catch(error => res.send(error));
});
module.exports = router;
