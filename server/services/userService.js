import User from "../models/userModel";

export const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};
