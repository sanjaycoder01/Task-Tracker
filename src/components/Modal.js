// import React, { useState } from "react";

// const Modal = ({ closeModal }) => {
//   const [formData, setFormData] = useState({
//     text1: "",
//     text2: "",
//     text3: "",
//     text4: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log(formData);

//     closeModal();
//   };

//   return (
//     <div className="fixed top-0 left-0 z-40 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-70 ">
//       <div className="relative w-[400px] mx-auto p-6 bg-gradient-to-r from-pink-200 to-violet-200 rounded-md shadow-md">
//         <div className="flex flex-cols-2 gap-56">
//           <h2 className="text-lg font-semibold mb-4">Edit Task</h2>
//           <img
//             className="h-10 w-10 bg-gradient-to-r from-pink-200 to-violet-200 cursor-pointer "
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMDhIvC0hvolz9sIHtUkM2cbE-g1QAGvAHHkLzjvLAHQ&s"
//             onClick={handleSubmit}
//           />
//         </div>
//         <form
//           onSubmit={handleSubmit}
//           className="bg-gradient-to-r from-pink-200 to-violet-200"
//         >
//           <div className="mb-4">
//             <label htmlFor="firstName" className="block text-gray-700">
//               Title
//             </label>
//             <input
//               type="text"
//               id="text1"
//               name="text1"
//               value={formData.text1}
//               onChange={handleChange}
//               className="mt-1 px-4 py-2 block w-full bg-gray-300 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="lastName" className="block text-gray-700">
//               Description
//             </label>
//             <textarea
//               id="text2"
//               name="text2"
//               rows="4"
//               value={formData.text2}
//               onChange={handleChange}
//               className="mt-1 px-4 py-2 block w-full rounded-md bg-gray-300 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
//             ></textarea>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700">
//               Team
//             </label>
//             <input
//               type="text"
//               id="text3"
//               name="text3"
//               value={formData.text3}
//               onChange={handleChange}
//               className="mt-1 px-4 py-2 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-blue-500 bg-gray-300"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="message" className="block text-gray-700">
//               Assignee
//             </label>
//             <input
//               type="text"
//               id="text4"
//               name="text4"
//               value={formData.text4}
//               onChange={handleChange}
//               className="mt-1 px-4 py-2 block w-full bg-gray-300 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
//             />
//           </div>
//           <div className="flex flex=cols-2 gap-24 ">
//             <div>
//               Priority :
//               <select className="bg-gray-100">
//                 <option>P0</option>
//                 <option>P1</option>
//                 <option>p2</option>
//               </select>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Modal;

import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../utils/taskSlice";

const Modal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    team: "",
    assignee: "",
    priority: "",
    status: " ",
  });
  const modalRef = useRef(null);

  useEffect(() => {
    // Function to close modal when clicking outside the form
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);
    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString();
    console.log(currentDate); // Get current date in ISO format
    const taskData = { ...formData, creationDate: currentDate };
    dispatch(addTask(taskData));
    closeModal();
  };

  return (
    <div className="fixed top-0 left-0 z-40 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-70 ">
      <div
        ref={modalRef}
        className="relative w-[400px] mx-auto p-6 bg-gradient-to-r from-pink-200 to-violet-200 rounded-md shadow-md"
      >
        <div className="flex flex-cols-2 gap-56">
          <h2 className="text-lg font-semibold mb-2">CreateTask</h2>
          <img
            className="h-10 w-10 bg-gradient-to-r from-pink-200 to-violet-200 cursor-pointer "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMDhIvC0hvolz9sIHtUkM2cbE-g1QAGvAHHkLzjvLAHQ&s"
            onClick={handleSubmit}
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-r from-pink-200 to-violet-200"
        >
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
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
              value={formData.description}
              onChange={handleChange}
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
              value={formData.team}
              onChange={handleChange}
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
              value={formData.assignee}
              onChange={handleChange}
              className="mt-1 px-4 py-2 block w-full bg-gray-300 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="priority" className="block text-gray-700">
              Priority
            </label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="mt-1 px-4 py-2 block w-full bg-gray-300 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            >
              <option value="">select</option>
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
            </select>
          </div>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="mt-1 px-4 py-2 block w-full bg-gray-300 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          >
            <option value="">select</option>
            <option value="Assign">Assign</option>

            <option value="Pending">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Deployed">Deployed</option>
            <option value="Deffered">Deffered</option>
          </select>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
