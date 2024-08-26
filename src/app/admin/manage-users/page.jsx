'use client';

import React, { useState } from 'react';
import Header from "../component/Header";
import SidebarAdmin from "../component/Sidebar";

const ManageUsers = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', plan: 'Premium - Yearly', approved: false },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', plan: 'Standard - Monthly', approved: false },
  ]);

  const handleApprove = (userId) => {
    setUsers(users.map(user =>
      user.id === userId ? { ...user, approved: true } : user
    ));
  };

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <SidebarAdmin isOpen={isSidebarOpen} onToggle={handleSidebarToggle} />

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        {/* Header */}
        <Header onSidebarToggle={handleSidebarToggle} />

        <main className="p-8 flex-1 bg-gray-900">
          <h1 className="text-3xl font-bold mb-6 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Manage Users</h1>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-4 text-left text-black">Name</th>
                  <th className="p-4 text-left text-black">Email</th>
                  <th className="p-4 text-left text-black">Subscription Plan</th>
                  <th className="p-4 text-left text-black">Status</th>
                  <th className="p-4 text-left text-black">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b">
                    <td className="p-4 text-black">{user.name}</td>
                    <td className="p-4 text-black">{user.email}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-white ${
                        user.plan.includes('Premium')
                          ? 'bg-purple-500'
                          : 'bg-blue-500'
                      }`}>
                        {user.plan}
                      </span>
                    </td>
                    <td className="p-4">
                      {user.approved ? (
                        <span className="text-green-500 font-semibold">Approved</span>
                      ) : (
                        <span className="text-red-500 font-semibold">Pending</span>
                      )}
                    </td>
                    <td className="p-4">
                      {!user.approved && (
                        <button
                          onClick={() => handleApprove(user.id)}
                          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                          Approve
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ManageUsers;
