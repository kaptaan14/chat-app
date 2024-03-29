import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenandSetCookie from "../utils/tokenGenerate.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password must be same." });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const boyProfilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilepic : girlProfilepic,
    });

    if (newUser) {
      generateTokenandSetCookie(newUser._id, res);

      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid User data" });
    }
  } catch (error) {
    console.log("Error in signup");
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if(!user){
      return res.status(400).json({error:"Username not found"});
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );


    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    generateTokenandSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ msg: "Logout Successfuly" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
