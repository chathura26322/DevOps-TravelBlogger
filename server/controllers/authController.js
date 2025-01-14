import User from "../models/userModel.js";

// POST /login
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Validate and authenticate user
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(400).send("Invalid credentials");
    }

    res.send(`Logged in as ${user.email}`);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

export const registerUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = new User({
      email,
      password, // Store the password as is (no hashing)
    });
    await newUser.save();

    res
      .status(201)
      .json({ message: "User created successfully", email: newUser.email });
  } catch (e) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
