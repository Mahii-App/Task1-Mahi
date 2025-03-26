// controllers/userController.js
const userModel = require('../models/userModels');

// Get all users
const getAllUsers = async (request, h) => {
    try {
        const users = await userModel.getAllUsers();
        return h.response(users).code(200);
    } catch (error) {
        return h.response({ error: error.message }).code(500);
    }
};

// Get user by ID
const getUserById = async (request, h) => {
    try {
        const user = await userModel.getUserById(request.params.id);
        if (!user) {
            return h.response({ error: 'User not found' }).code(404);
        }
        return h.response(user).code(200);
    } catch (error) {
        return h.response({ error: error.message }).code(500);
    }
};

// Create a new user
const createUser = async (request, h) => {
    try {
        const { name, email } = request.payload;
        const newUser = await userModel.createUser(name, email);
        return h.response(newUser).code(201);
    } catch (error) {
        return h.response({ error: error.message }).code(500);
    }
};

// Update a user
const updateUser = async (request, h) => {
    try {
        const { name, email } = request.payload;
        const updatedUser = await userModel.updateUser(request.params.id, name, email);
        if (!updatedUser) {
            return h.response({ error: 'User not found' }).code(404);
        }
        return h.response(updatedUser).code(200);
    } catch (error) {
        return h.response({ error: error.message }).code(500);
    }
};

// Delete a user
const deleteUser = async (request, h) => {
    try {
        const deletedUser = await userModel.deleteUser(request.params.id);
        if (!deletedUser) {
            return h.response({ error: 'User not found' }).code(404);
        }
        return h.response({ message: 'User deleted' }).code(200);
    } catch (error) {
        return h.response({ error: error.message }).code(500);
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};

