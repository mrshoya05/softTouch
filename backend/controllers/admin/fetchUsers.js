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


// delete user 

const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await user.remove();
        res.json({ message: 'User removed' });
    } catch (error) {
        console.error('Error deleting user:', error.message);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

module.exports = { fetchUsers, deleteUser };