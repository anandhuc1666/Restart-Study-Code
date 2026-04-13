import User from "../schema/registerSchema.js";
import { getUserToken } from "../utils/jwt.js";

export const register = async (req, res) => {
  const { name, last_name, email, password, number } = req.body;
  try {
    if (!name || !email || !password || !number) {
      return res.status(404).json({ message: "user data is missing!.." });
    }
    const newUser = await User.findOne({ email });
    if (newUser) {
      return res
        .status(404)
        .json({ message: "user email id already exsisted" });
    }

    const user = await User({
      name: name,
      last_name: last_name,
      email: email,
      password: password,
      number: number,
    });
    if (user) {
      await user.save();
      return res
        .status(200)
        .json({ message: "user is registered successfully...." });
    }
  } catch (error) {
    return res.status(404).json({ message: "internel server error 404" });
  }
};

// ......................................................user clint_login..........................................................................

export const clint_login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "please try to login...." });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "user email doesn't existing" });
    }
    if (user.password !== password) {
      return res.status(400).json({ message: "your password incurrect" });
    }
    console.log(user._id)
    const token = getUserToken(user._id);
    res.cookie("userToken", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
    return res
      .status(200)
      .json({ message: "user login successfully", token, user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internel server issue" });
  }
};
