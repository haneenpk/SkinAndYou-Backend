const doctorModel = require("../../models/doctorModel")
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const doctorData = await doctorModel.findOne()


    if (email === doctorData.email) {

      if (password === doctorData.password) {

        function generateAccessToken(id) {
          const KEY = process.env.JWT_SECRET_KEY
          if (KEY !== undefined) {
            const exp = Math.floor(Date.now() / 1000) + 10 * 24 * 60 * 60;
            return jwt.sign({ id, exp, iat: Date.now() / 1000 }, KEY)
          } else {
            return res.status(400).json({ message: "JWT Key is not defined" });
          }
        }

        const jwtToken = generateAccessToken(doctorData._id)

        let resData = {
          status: 200,
          message: 'Success',
          data: doctorData,
          jwtToken,
        }

        res.status(200).json(resData)

      } else {
        return res.status(400).json({ message: "Password is incorrect" });
      }
    } else {
      return res.status(400).json({ message: "Invalid Email" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  login,
}