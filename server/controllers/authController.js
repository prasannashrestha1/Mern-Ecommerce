import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    //validation
    if (!name) res.send({ error: "Name is Required" });
    if (!email) res.send({ error: "Email is Required" });
    if (!password) res.send({ error: "Password is Required" });
    if (!phone) res.send({ error: "Phone is Required" });
    if (!address) res.send({ error: "Address is Required" });

    //checking user
    const existingUser = await userModel.findOne({ email });

    //if there is existing user
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "User already exists",
      });
    }

    // register the user
    const hashedPassword = await hashPassword(password);

    //save the user
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();

    res.status(200).send({
      success: true,
      message: "User Created Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};

export const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    // validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid Email or password",
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) return res.status(404).send({ message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    const token = JWT.sign({ _id: user._id }, `${process.env.JWT_SECRET}`, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "Login Successful",
      user: {
        name: user.name,
        email: user.email,
        address: user.address,
        phone: user.phone,
      },
      token,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      success: false,
      message: "Error while login",
      error,
    });
  }
};

export const testController = (req, res) => {
  res.send("protecetd route");
};
