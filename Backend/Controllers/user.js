const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../Model/user');
async function HandleUserSignUp(req, res) {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ msg: "All fields are required" });
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            msg: "User sign up successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        console.error(error);  // Log error details
        res.status(500).json({ msg: "Error creating user", error });
    }
}

async function HandleUserLogin(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ msg: "Email and password are required" });
    }
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }
        res.status(200).json({
            msg: "User login successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        console.error(error);  // Log error details
        res.status(500).json({ msg: "Error logging in user", error });
    }
}

module.exports = {
    HandleUserSignUp,
    HandleUserLogin,
};
