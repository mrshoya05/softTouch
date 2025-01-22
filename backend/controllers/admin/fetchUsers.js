// here fetch all uaeers from database.

const User = require('../../models/User');

const fetchUsers = async (req, res) => {
    try {
        const users = await User.find( ).select('-password');
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error.message);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

module.exports = fetchUsers;