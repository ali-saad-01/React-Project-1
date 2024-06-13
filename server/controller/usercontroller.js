

const User=require( "../models/user");
// Example controller methods
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


 const createUser = async (req, res) => {
  try {
    console.log("the body is",req.body.body)
    const { username, email, password } = req.body;

    // Validate input
    if (!username || !email || !password) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }

    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create new user
    const newUser = new User({
      username,
      email,
      password,
    });

    // Save user to database
    await newUser.save();

    res.status(201).json({ msg: 'User created successfully', user: newUser });
  } catch (error) {
    console.log('the error is:', error);
    res.status(500).json({ msg: 'Server error' });
  }
}

const forgetPass = async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    // Update user's password
    const result = await User.updateOne({ email }, { $set: { password: newPassword } });
    console.log(result)
    // Check if any document was modified
    if (result.modifiedCount === 0) {
      return res.status(404).json({ msg: 'User not found or password already set to the same value' });
    }

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error('Error in forgetPass:', error);
    res.status(500).json({ msg: 'Server error' });
  }
};



module.exports={createUser,getAllUsers,forgetPass};

// Add more controller methods as needed
