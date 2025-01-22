// components/UsersList/UsersList.jsx
import React, { useEffect, useState } from 'react';
import ConfirmationModal from '../ConfirmationModal';
import { deleteUser, getUsers } from '../../services/axios';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response);
      
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDeleteClick = (_id) => {
    setSelectedUserId(users._id);
    setShowModal(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteUser(selectedUserId);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    } finally {
      setShowModal(false);
    }
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    setSelectedUserId(null);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">User List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded border">
          <thead>
            <tr className="bg-gray-200">
              <th className="text-left p-4 font-medium text-gray-600">ID</th>
              <th className="text-left p-4 font-medium text-gray-600">Name</th>
              <th className="text-left p-4 font-medium text-gray-600">Email</th>
              <th className="text-left p-4 font-medium text-gray-600">Role</th>
              <th className="text-left p-4 font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="border-b hover:bg-gray-100">
                <td className="p-4 text-gray-700">{index + 1}</td>
                <td className="p-4 text-gray-700">{user.name}</td>
                <td className="p-4 text-gray-700">{user.email}</td>
                <td className="p-4 text-gray-700">{user.role}</td>
                <td className="p-4 text-gray-700">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteClick(user.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ConfirmationModal
        show={showModal}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        message="Are you sure you want to delete this user?"
      />
    </div>
  );
};

export default UsersList;
