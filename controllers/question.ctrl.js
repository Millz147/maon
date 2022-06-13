import questionModel from "../models/questions.js";
class questionCtrl {
  static home = async (req, res) => {
    try {
      const questions = await questionModel.find();

      res
        .status(200)
        .json(
          `Welcome, <br> Check all Available Questions Below <br> ${questions}`
        );
    } catch (error) {
      console.error(error);
    }
  };

  static ask = async (req, res) => {
    try {
      let { qTitle, qBody } = req.body;

      let newQuestion = await new questionModel({
        qTitle,
        qBody,
        qPoster: user,
      });

      newQuestion = newQuestion.save();

      res.status(200).json("Question Successfully Posted");
    } catch (error) {
      console.error(error);
    }
  };
}

export default questionCtrl;
