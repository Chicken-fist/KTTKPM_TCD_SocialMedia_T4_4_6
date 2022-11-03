const express = require("express");
const {
  accessChat,
  fetchChat,
  createGroupChat,
  renameGroup,
  removeFromGroup,
  addFromGroup,
} = require("../controller/chatController");
const router = express.Router();
const { project } = require("../middleware/authenMiddleware");

router.route("/").post(project, accessChat);
router.route("/").get(project, fetchChat);
router.route("/group").post(project, createGroupChat);
router.route("/rename").put(project, renameGroup);
router.route("/groupremove").put(project, removeFromGroup);
router.route("/groupadd").put(project, addFromGroup);

module.exports = router;
