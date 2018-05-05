const express = require('express');
const taskController = require("../../controllers/taskController");

const router = new express.Router();

// Matches with "/api/task"
router.route("/subscriptions")
  .get(taskController.findAll)
  .post(taskController.create);

  router
  .route("/subscriptions/:id")
  .get(taskController.findById)
  .put(taskController.update)
  .delete(taskController.remove);

// Matches with "/api/task"
router.route("/getUser")
  // .get((req, res) => res.json(
  //   {things:"hello"}
    .get(taskController.getUser)
  ;

module.exports = router;
