import express from "express";
const router = express.Router();

import userCtrl from "../controllers/user.ctrl.js";
import questionCtrl from "../controllers/question.ctrl.js";
import redisClass from "../middleware/redis.js";

router.route("/login").post(userCtrl.login);

router.route("/signup").post(userCtrl.signup);

router.route("/:userName/ask").post(redisClass.auth, questionCtrl.ask);

router.route("/home").get(questionCtrl.home);

export default router;
