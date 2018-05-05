const express = require('express');
const taskController = require("../../controllers/taskController");

const router = new express.Router();

// router.get('/getUser', (req, res) => {
//   console.log("REQ");
//   return res.status(200).json({
//     message: "You're authorized to see this secret message.",
//     // user values passed through from auth middleware
//     user: "things"
    
//   });
// });

// Matches with "/api/task"
router.route("/getUser")
  // .get((req, res) => res.json(
  //   {things:"hello"}
    .get(taskController.getUser)
  ;

module.exports = router;
