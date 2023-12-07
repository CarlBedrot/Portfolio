const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.getUserProfile = async (req, res) => {
    try {
        // The user ID is extracted from the JWT token in the verifyToken middleware
        const userId = req.user.userId;

        // Fetch user data from the database
        const user = await User.findById(userId).select('-password'); // Exclude the password from the result

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

exports.createUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create a new user with the hashed password
        user = new User({
            email,
            password // This will be hashed automatically due to the pre-save hook in the User model
        });

        await user.save();
        res.status(201).json({ message: 'User created successfully', user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.deleteUser = async (req, res) => {
    const result = await User.findByIdAndDelete(req.params.id);
    res.json(result);
}

exports.updateUser = async (req, res) => {
    const { email, password } = req.body;
    const updatedUser = await User.findByIdAndUpdate(req.params.id, { email, password }, { new: true });
    res.json(updatedUser);
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Authentication failed' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Authentication failed' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};