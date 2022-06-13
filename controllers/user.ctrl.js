import userModel from "../models/user.js";
import { createClient } from "redis";
import util from "util";
const client = createClient();
client.on("error", (err) => {
  console.log("Redis Connections failed");
});

//client.set = util.promisify(client.set);
class userCtrl {
  static signup = async (req, res) => {
    try {
      let { dName, userName, password } = req.body;

      const findUser = await userModel.find({ userName });

      if (findUser) {
        return res.status(500).json("Username Already Exist");
      }

      let newUser = await new userModel({
        dName,
        userName,
        password,
      });
      newUser = newUser.save();
      res.status(200).json("User Successfully register");
    } catch (error) {
      console.error(error);
    }
  };

  static login = async (req, res) => {
    try {
      let { userName, password } = req.body;
      const findUser = await userModel.findOne({ userName });
      if (!findUser) {
        return res.status(500).json("Username Not Exist");
      }
      if (password !== findUser.password) {
        return res.status(500).json("Incorrect Password!!!");
      }

      await client.connect();

      await client.set(userName, userName);
      res.status(200).json("Welcome");
    } catch (error) {
      console.error(error);
    }
  };
}

export default userCtrl;
