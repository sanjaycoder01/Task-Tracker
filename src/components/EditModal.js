import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { updateTaskStatus } from "../utils/taskSlice";

const EditModal = ({ closeModal, sendtask }) => {
  const dispatch = useDispatch();
  const selectedTaskStatus = useMemo(() => {
    return sendtask.status;
  }, [sendtask.status]);
  const selectedPriority = useMemo(() => {
    return sendtask.priority;
  }, [sendtask.priority]);

  const handleStatusChange = (e) => {
    e.preventDefault();
    const newStatus = e.target.value;
    dispatch(
      updateTaskStatus({
        taskTitle: sendtask.title,
        newStatus,
        newPriority: sendtask.priority,
      })
    );
    closeModal();
  };

  const handlePriorityChange = (e) => {
    e.preventDefault();
    const newPriority = e.target.value;
    dispatch(
      updateTaskStatus({
        taskTitle: sendtask.title,
        newPriority,
        newStatus: sendtask.status,
      })
    );
    closeModal();
  };
  return (
    <div className="fixed top-0 left-0 z-40 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-70 ">
      <div className="relative w-[400px] mx-auto p-6 bg-gradient-to-r from-pink-200 to-violet-200 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-4">Edit Task</h2>
        <form className="bg-gradient-to-r from-pink-200 to-violet-200">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={sendtask.title}
              readOnly
              className="mt-1 px-4 py-2 block w-full bg-gray-300 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={sendtask.description}
              readOnly
              className="mt-1 px-4 py-2 block w-full rounded-md bg-gray-300 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="team" className="block text-gray-700">
              Team
            </label>
            <input
              type="text"
              id="team"
              name="team"
              value={sendtask.team}
              readOnly
              className="mt-1 px-4 py-2 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-blue-500 bg-gray-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="assignee" className="block text-gray-700">
              Assignee
            </label>
            <input
              type="text"
              id="assignee"
              name="assignee"
              value={sendtask.assignee}
              readOnly
              className="mt-1 px-4 py-2 block w-full bg-gray-300 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 flex flex-row items-center">
            <label htmlFor="priority" className="block text-gray-700 mr-2">
              Priority
            </label>
            {/* Render select element only for priority field */}

            <select
              className="mt-1 px-2 py-2 block w-20 bg-white rounded-md border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              onChange={handlePriorityChange}
              value={selectedPriority}
            >
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
            </select>

            <div className="ml-20 flex flex-row items-start">
              <h3 className="mr-2">Status:</h3>
              <select
                className="mt-1 px-2 py-2 block w-24 bg-white rounded-md border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                onChange={handleStatusChange}
                value={selectedTaskStatus}
              >
                <option value="Pending">Assign</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Deployed">Deployed</option>
                <option value="Deffered">Deffered</option>
              </select>
            </div>
          </div>

          <button
            type="button" // Change to type="button" to prevent form submission
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={closeModal} // Close modal without updating status
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
