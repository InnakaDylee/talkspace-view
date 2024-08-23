"use client";

import React, { useState } from "react";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import Footer from "../../component/Footer";
import { FaPlus, FaEdit, FaTrash, FaSearch, FaCalendarAlt } from "react-icons/fa";

const TaskManagement = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTask, setSelectedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false); // State untuk menambah tugas baru
  const [taskDetails, setTaskDetails] = useState({
    id: null,
    title: "",
    dueDate: "",
    status: "",
    description: "",
  });

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleTaskClick = (task) => {
    setTaskDetails(task);
    setSelectedTask(task);
    setIsEditing(false);
    setIsAdding(false);
  };

  const closeTaskDetails = () => {
    setSelectedTask(null);
    setIsEditing(false);
    setIsAdding(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setIsAdding(false);
  };

  const handleAddClick = () => {
    setIsAdding(true);
    setIsEditing(false);
    setTaskDetails({
      id: null,
      title: "",
      dueDate: "",
      status: "Pending",
      description: "",
    });
  };

  const handleDeleteClick = () => {
    // Handle delete task logic
    alert(`Task ${taskDetails.title} deleted`);
    closeTaskDetails(); // Close popup after delete
  };

  const handleSaveClick = () => {
    // Handle save edited task logic
    alert(`Task ${taskDetails.title} updated`);
    setIsEditing(false);
    setIsAdding(false);
  };

  const handleAddNewTask = () => {
    // Handle add new task logic
    alert(`New task ${taskDetails.title} added`);
    setIsAdding(false);
  };

  const handleChange = (e) => {
    setTaskDetails({ ...taskDetails, [e.target.name]: e.target.value });
  };

  // Sample data for tasks
  const tasks = [
    {
      id: 1,
      title: "Follow Up with Patient A",
      dueDate: "2024-08-20",
      status: "Pending",
      description: "Schedule a follow-up appointment with Patient A to discuss their progress.",
    },
    {
      id: 2,
      title: "Review Patient B's Report",
      dueDate: "2024-08-22",
      status: "In Progress",
      description: "Review and analyze the report submitted by Patient B.",
    },
    {
      id: 3,
      title: "Update Treatment Plan for Patient C",
      dueDate: "2024-08-25",
      status: "Completed",
      description: "Update the treatment plan based on the latest consultation with Patient C.",
    },
    // Additional tasks for testing scrolling
    {
      id: 4,
      title: "New Task Example 1",
      dueDate: "2024-08-26",
      status: "Pending",
      description: "This is an additional task to test scrolling.",
    },
    {
      id: 5,
      title: "New Task Example 2",
      dueDate: "2024-08-27",
      status: "In Progress",
      description: "This is an additional task to test scrolling.",
    },
  ];

  // Filter tasks based on search query
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen">
      <Sidebar onToggle={handleSidebarToggle} isOpen={isSidebarOpen} />

      {/* Main content area */}
      <div
        className={`flex flex-col flex-grow transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <Header onSidebarToggle={handleSidebarToggle} />

        {/* Main Task Management content */}
        <main className="flex-grow bg-gray-100 p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Task Management</h1>

          {/* Search and Filter Bar */}
          <div className="mb-6 flex items-center border border-gray-300 rounded-lg bg-white">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search tasks..."
              className="flex-grow p-2 border-none rounded-l-lg focus:outline-none"
            />
            <button className="p-2 text-gray-500 hover:text-gray-800">
              <FaSearch />
            </button>
          </div>

          {/* Add New Task Button */}
          <div className="mb-6">
            <button
              onClick={handleAddClick}
              className="flex items-center text-white bg-blue-500 hover:bg-blue-600 rounded-lg px-4 py-2"
            >
              <FaPlus className="mr-2" />
              Add New Task
            </button>
          </div>

          {/* Task List */}
          <div className="max-h-96 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTasks.length > 0 ? (
                filteredTasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => handleTaskClick(task)}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 relative cursor-pointer hover:bg-blue-50"
                  >
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      {task.title}
                    </h2>
                    <p className="text-gray-600 mb-2">
                      <FaCalendarAlt className="inline mr-2 text-green-500" />
                      Due Date: {task.dueDate}
                    </p>
                    <p className="text-gray-600 mb-2">
                      Status: <span className={task.status === "Completed" ? "text-green-600" : task.status === "In Progress" ? "text-yellow-600" : "text-red-600"}>{task.status}</span>
                    </p>
                    <p className="text-gray-600">
                      {task.description}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No tasks found.</p>
              )}
            </div>
          </div>
        </main>

        <Footer />
      </div>

      {/* Popup for task details */}
      {selectedTask && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              onClick={closeTaskDetails}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>
            {!isEditing && !isAdding ? (
              <>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  {taskDetails.title}
                </h2>
                <p className="mb-2 text-gray-700">
                  <FaCalendarAlt className="inline mr-2 text-green-500" />
                  Due Date: {taskDetails.dueDate}
                </p>
                <p className="mb-2 text-gray-700">
                  Status: <span className={taskDetails.status === "Completed" ? "text-green-600" : taskDetails.status === "In Progress" ? "text-yellow-600" : "text-red-600"}>{taskDetails.status}</span>
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Description: </strong>{taskDetails.description}
                </p>
                <div className="flex space-x-4 mt-4">
                  <button
                    onClick={handleEditClick}
                    className="flex items-center text-white bg-yellow-500 hover:bg-yellow-600 rounded-lg px-4 py-2"
                  >
                    <FaEdit className="mr-2" />
                    Edit Task
                  </button>
                  <button
                    onClick={handleDeleteClick}
                    className="flex items-center text-white bg-red-500 hover:bg-red-600 rounded-lg px-4 py-2"
                  >
                    <FaTrash className="mr-2" />
                    Delete Task
                  </button>
                </div>
              </>
            ) : isEditing || isAdding ? (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  {isAdding ? "Add New Task" : "Edit Task"}
                </h2>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Title</label>
                    <input
                      type="text"
                      name="title"
                      value={taskDetails.title}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Due Date</label>
                    <input
                      type="date"
                      name="dueDate"
                      value={taskDetails.dueDate}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Status</label>
                    <select
                      name="status"
                      value={taskDetails.status}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      required
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Description</label>
                    <textarea
                      name="description"
                      value={taskDetails.description}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      rows="4"
                      required
                    />
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={isAdding ? handleAddNewTask : handleSaveClick}
                      className="flex items-center text-white bg-blue-500 hover:bg-blue-600 rounded-lg px-4 py-2"
                      type="button"
                    >
                      {isAdding ? "Add Task" : "Save Changes"}
                    </button>
                    <button
                      onClick={closeTaskDetails}
                      className="flex items-center text-white bg-gray-500 hover:bg-gray-600 rounded-lg px-4 py-2"
                      type="button"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskManagement;
