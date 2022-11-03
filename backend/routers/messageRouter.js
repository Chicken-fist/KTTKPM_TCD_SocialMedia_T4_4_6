const express = require("express");
const { project } = require("../middleware/authenMiddleware");
const {
  sendMessage,
  getAllMessages,
} = require("../controller/messageController");

const router = express.Router();
router.route("/").post(project, sendMessage);
router.route("/:chatId").get(project, getAllMessages);

module.exports = router;
