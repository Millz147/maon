import {createClient} from "redis";
import util from "util";

const client = createClient()
client.on("error", (err)=> {
  console.log("Redis Connections failed");
});

import questionModel from "../models/questions.js";

//client.get = util.promisify(client.get);
class redisClass {
  static auth = async (req, res, next) => {
    const { userName } = req.params;
    await client.connect();

    const user = await client.get(userName);
    if(!user){
      return res.status(500).json('Please Visit the login Page')
    }
    console.log(user);
    return next();
  };
}
export default redisClass;
