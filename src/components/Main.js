// import React, { useState } from "react";
// import Modal from "./Modal";
// import { useSelector } from "react-redux";

// const Main = () => {
//   const [showModal, setShowModal] = useState(false);
//   const tasks = useSelector((state) => state.tasks);
//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   return (
//     <div className=" relative mt-8 ml-20 border rounded-lg border-white h-[81%]">
//       {showModal && <Modal closeModal={toggleModal} />}
//       <div className="flex flex-cols-2 gap-[300px]">
//         <form>
//           <div className="flex flex-col-3 gap-6 mt-4 ml-4">
//             <label
//               for="fname"
//               className="block text-gray-700 text-xl font-bold mb-2"
//             >
//               Filter By:
//             </label>
//             <input
//               type="text"
//               id="fname"
//               name="fname"
//               placeholder="Assigne Name"
//               className=" w-[240px] px-2 rounded focus:outline-none focus:shadow-outline"
//             />
//             <select
//               id="priority"
//               name="priority"
//               class="w-[240px] px-2 py-2 border border-gray-400 rounded focus:outline-none focus:shadow-outline"
//             >
//               <option value="">Priority</option>
//               <option value="high">High</option>
//               <option value="medium">Medium</option>
//               <option value="low">Low</option>
//             </select>
//             <input
//               type="date"
//               id="birthday"
//               name="birthday"
//               placeholder="DD/MM/YYY - DD/MM/YYY"
//               class="w-[240px] rounded focus:outline-none focus:shadow-outline px-2"
//             />
//           </div>
//         </form>
//       </div>
//       <h1
//         onClick={toggleModal}
//         className="border border-black mt-3 w-[180px] p-3 px-7 text-white bg-blue-800 cursor-pointer"
//       >
//         Add New Task
//       </h1>
//       <div className="mt-6 ml-10 flex flex-cols-6 gap-6 ">
//         <div className="border border-black h-[420px] w-[240px] bg-white">
//           <h1 className="bg-slate-200 ">Pending</h1>
//           <div className="border rounded-lg  border-white h-[180px] w-[200px] mt-2 ml-4 bg-slate-100">
//             <div>
//               {tasks.map((task, index) => (
//                 <div key={index}>
//                   <div className="flex space-x-32">
//                     <div className="ml-1 mt-1">{task.title}</div>
//                     <div className="ml-1 mt-1">{task.priority}</div>
//                   </div>
//                   <div class="border-b border-black my-2 ml-2 w-44"></div>
//                   <h4>{task.description}</h4>
//                   <div className="flex flex-cols-2 gap-14">
//                     <h5>{task.assignee}</h5>

//                     <button
//                       id="dropdownMenuIconButton"
//                       data-dropdown-toggle="dropdownDots"
//                       class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//                       type="button"
//                     >
//                       <svg
//                         class="w-5 h-5"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 4 15"
//                       >
//                         <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
//                       </svg>
//                     </button>
//                     <div
//                       id="dropdownDots"
//                       class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
//                     >
//                       <ul
//                         class="py-2 text-sm text-gray-700 dark:text-gray-200"
//                         aria-labelledby="dropdownMenuIconButton"
//                       >
//                         <li>
//                           <a
//                             href="#"
//                             class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                           >
//                             Dashboard
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="border border-white bg-blue-500 ml-4 w-28">
//               <h4 className="px-8">Assign</h4>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;
import React, { useState } from "react";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import EditModal from "./EditModal";
import { deleteTask } from "../utils/taskSlice";

const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [filters, setFilters] = useState({
    assignee: "",
    priority: "",
    date: "",
  });
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    team: "",
    assignee: "",
    priority: "",
    status: " ",
  });
  const [selectedPriority, setSelectedPriority] = useState("");

  const dispatch = useDispatch();
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const toggleModal1 = (task) => {
    setShowModal1(!showModal1);
    setNewTask(task);
  };
  const handleTaskAction = (action, task) => {
    if (action === "edit") {
      toggleModal1(task);
    } else if (action === "delete") {
      // Check if task is in "Pending" or "In Progress" state before deleting
      if (task.status === "Assign" || task.status === "In Progress") {
        dispatch(deleteTask(task.title)); // Dispatch deleteTask action
      } else {
        // Handle case where task is not in "Pending" or "In Progress" state
        console.log(
          "Cannot delete task in non-pending or non-in-progress state."
        );
      }
    }
  };

  const InProgressTasks = useSelector((state) =>
    state.tasks.tasks.filter((task) => task.status === "In Progress")
  );
  const assignTasks = useSelector((state) =>
    state.tasks.tasks.filter((task) => task.status === "Assign")
  );
  const completedTasks = useSelector((state) =>
    state.tasks.tasks.filter((task) => task.status === "Completed")
  );
  const deployedTasks = useSelector((state) =>
    state.tasks.tasks.filter((task) => task.status === "Deployed")
  );
  const defferedTasks = useSelector((state) =>
    state.tasks.tasks.filter((task) => task.status === "Deffered")
  );
  const handleDeleteTask = (taskTitle) => {
    // Dispatch action to delete task
  };
  const tasks = useSelector((state) => state.tasks.tasks);
  const filteredTasks = tasks.filter((task) => {
    const assigneeMatch = task.assignee
      .toLowerCase()
      .includes(filters.assignee.toLowerCase());
    const priorityMatch =
      task.priority === filters.priority || filters.priority === "";
    // Assuming date filtering logic
    const dateMatch = task.date === filters.date || filters.date === "";

    return assigneeMatch && priorityMatch && dateMatch;
  });
  const updatedStatus = useSelector((state) => state.tasks.tasks);
  return (
    <div className="relative mt-8 ml-20 border rounded-lg border-white h-[81%] overflow-hidden">
      {showModal && <Modal closeModal={toggleModal} />}
      {showModal1 && <EditModal closeModal={toggleModal1} sendtask={newTask} />}
      <div className="flex flex-cols-2 gap-[300px]">
        <form>
          <div className="flex flex-col-3 gap-6 mt-4 ml-4">
            <label
              htmlFor="fname"
              className="block text-gray-700 text-xl font-bold mb-2"
            >
              Filter By:
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Assigne Name"
              className="w-[240px] px-2 rounded focus:outline-none focus:shadow-outline"
            />
            <select
              id="priority"
              name="priority"
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
              className="w-[240px] px-2 py-2 border border-gray-400 rounded focus:outline-none focus:shadow-outline"
            >
              <option value="">Priority</option>
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
            </select>
            <input
              type="date"
              id="birthday"
              name="birthday"
              placeholder="DD/MM/YYY - DD/MM/YYY"
              className="w-[240px] rounded focus:outline-none focus:shadow-outline px-2"
            />
          </div>
        </form>
        {/* <form>
          <div className="flex flex-col-3 gap-6 mt-4 ml-4">
            <label
              htmlFor="assignee"
              className="block text-gray-700 text-xl font-bold mb-2"
            >
              Filter By Assignee:
            </label>
            <input
              type="text"
              id="assignee"
              name="assignee"
              value={filters.assignee}
              onChange={handleFilterChange}
              placeholder="Assignee Name"
              className="w-[240px] px-2 rounded focus:outline-none focus:shadow-outline"
            />

            <select
              id="priority"
              name="priority"
              value={filters.priority}
              onChange={handleFilterChange}
              className="w-[240px] px-2 py-2 border border-gray-400 rounded focus:outline-none focus:shadow-outline"
            >
              <option value="">Priority</option>
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
            </select>

            <input
              type="date"
              id="date"
              name="date"
              value={filters.date}
              onChange={handleFilterChange}
              placeholder="DD/MM/YYY - DD/MM/YYY"
              className="w-[240px] rounded focus:outline-none focus:shadow-outline px-2"
            />
          </div>
        </form> */}
        <h1
          onClick={toggleModal}
          className="border border-black mt-3 w-[180px] p-3 px-7 text-white bg-blue-800 cursor-pointer"
        >
          Add New Task
        </h1>
      </div>
      <div className="flex flex-cols-2 gap-6 mt-4 ml-4">
        <h1 className="block text-gray-700 text-xl font-bold mb-2">Sort By:</h1>
        <select
          id="priority"
          name="priority"
          className="w-[240px] px-2 py-2 border border-gray-400 rounded focus:outline-none focus:shadow-outline"
        >
          <option value="">Priority</option>
          <option value="P0">P0</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
        </select>
      </div>

      <div className="mt-6 ml-8 flex flex-cols-6 gap-6">
        <div className="border rounded-xl border-white h-[420px] w-[260px] bg-white ">
          <h1 className="bg-slate-400 px-20 text-xl text-white">Pending</h1>
          <div className="mt-2 ml-2 overflow-y-scroll scrollbar-none max-h-[360px]">
            {assignTasks.map((task, index) => (
              <div
                key={index}
                className="border rounded-lg border-white p-4 bg-gray-300 mb-4"
              >
                <div className="mb-2" style={{ marginBottom: "14px" }}>
                  <div className="flex flex-cols-2 gap-[130px]">
                    <div className="ml-1">{task.title}</div>
                    <div>{task.priority}</div>
                  </div>
                  <div className="border-b border-black my-1 ml-1 w-50"></div>
                  <div className="  h-10 w-50">
                    <h4 className="ml-1 break-words">{task.description}</h4>
                  </div>
                  <div className="flex flex-cols-2 gap-16 mt-4">
                    <h5>{task.assignee}</h5>

                    <select
                      className="bg-fixed mt-1"
                      onChange={(e) => handleTaskAction(e.target.value, task)}
                    >
                      <option>Select</option>
                      <option
                        value="edit"
                        onClick={() => handleTaskAction("edit", task)}
                      >
                        Edit Task:
                      </option>
                      <option
                        value="delete"
                        onClick={() => handleTaskAction("delete", task)}
                      >
                        Delete Task
                      </option>
                    </select>
                  </div>

                  <div className="border border-white bg-blue-500  mt-4 w-28">
                    <h4 className="p-1 px-2 text-white ">{task.status}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border rounded-lg border-white h-[420px] w-[260px] bg-white ">
          <h1 className="bg-orange-400 px-16 text-xl text-white">
            In Progress
          </h1>
          <div className="mt-2 ml-2 overflow-y-scroll scrollbar-none max-h-[360px]">
            {InProgressTasks.map((task, index) => (
              <div
                key={index}
                className="border rounded-lg border-white p-4 bg-gray-300 mb-4"
              >
                <div className="mb-2" style={{ marginBottom: "14px" }}>
                  <div className="flex flex-cols-2 gap-[130px]">
                    <div>{task.title}</div>
                    <div>{task.priority}</div>
                  </div>
                  <div className="border-b border-black my-2 ml-2 w-50"></div>
                  <div className="border border-slate-500 h-10 w-50">
                    <h4 className="ml-1 break-words">{task.description}</h4>
                  </div>
                  <div className="flex flex-cols-2 gap-16">
                    <h5>{task.assignee}</h5>

                    <select
                      className="bg-fixed mt-1"
                      onChange={(e) => handleTaskAction(e.target.value, task)}
                    >
                      <option>Select</option>
                      <option
                        value="edit"
                        onClick={() => handleTaskAction("edit", task)}
                      >
                        Edit Task:
                      </option>
                      <option
                        value="delete"
                        onClick={() => handleTaskAction("delete", task)}
                      >
                        Delete Task
                      </option>
                    </select>
                  </div>
                  {/* Move "Assign" button outside the flex container */}
                  <div className="border border-white bg-blue-500  mt-6 w-28">
                    <h4 className="p-1 text-white">{task.status}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border rounded-lg border-white h-[420px] w-[260px] bg-white ">
          <h1 className="bg-green-400 px-20 text-xl text-white">Completed</h1>
          <div className="mt-2 ml-2 overflow-y-scroll scrollbar-none max-h-[360px]">
            {completedTasks.map((task, index) => (
              <div
                key={index}
                className="border rounded-lg border-white p-4 bg-gray-300 mb-4"
              >
                <div className="mb-2" style={{ marginBottom: "14px" }}>
                  <div className="flex flex-cols-2 gap-[130px]">
                    <div>{task.title}</div>
                    <div>{task.priority}</div>
                  </div>
                  <div className="border-b border-black my-2 ml-2 w-50"></div>
                  <div className="border border-slate-500 h-10 w-50">
                    <h4 className="ml-1 break-words">{task.description}</h4>
                  </div>
                  <div className="flex flex-cols-2 gap-16">
                    <h5>{task.assignee}</h5>

                    <select
                      className="bg-fixed mt-1"
                      onChange={(e) => handleTaskAction(e.target.value, task)}
                    >
                      <option>Select</option>
                      <option
                        value="edit"
                        onClick={() => handleTaskAction("edit", task)}
                      >
                        Edit Task:
                      </option>
                      <option
                        value="delete"
                        onClick={() => handleTaskAction("delete", task)}
                      >
                        Delete Task
                      </option>
                    </select>
                  </div>
                  {/* Move "Assign" button outside the flex container */}
                  <div className="border border-white bg-blue-500  mt-6 w-28">
                    <h4 className="p-1 px-2 text-white ">{task.status}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border rounded-lg border-white h-[420px] w-[260px] bg-white ">
          <h1 className="bg-purple-800 px-20 text-xl text-white">Deployed</h1>
          <div className="mt-2 ml-2 overflow-y-scroll scrollbar-none max-h-[360px]">
            {deployedTasks.map((task, index) => (
              <div
                key={index}
                className="border rounded-lg border-white p-4 bg-gray-300 mb-4"
              >
                <div className="mb-2" style={{ marginBottom: "14px" }}>
                  <div className="flex flex-cols-2 gap-[130px]">
                    <div>{task.title}</div>
                    <div>{task.priority}</div>
                  </div>
                  <div className="border-b border-black my-2 ml-2 w-50"></div>
                  <div className="border border-slate-500 h-10 w-50">
                    <h4 className="ml-1 break-words">{task.description}</h4>
                  </div>
                  <div className="flex flex-cols-2 gap-16">
                    <h5>{task.assignee}</h5>

                    <select
                      className="bg-fixed mt-1"
                      onChange={(e) => handleTaskAction(e.target.value, task)}
                    >
                      <option>Select</option>
                      <option
                        value="edit"
                        onClick={() => handleTaskAction("edit", task)}
                      >
                        Edit Task:
                      </option>
                      <option
                        value="delete"
                        onClick={() => handleTaskAction("delete", task)}
                      >
                        Delete Task
                      </option>
                    </select>
                  </div>
                  {/* Move "Assign" button outside the flex container */}
                  <div className="border border-white bg-blue-500  mt-6 w-28">
                    <h4 className="p-1 px-2 text-white ">{task.status}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border rounded-lg border-white h-[420px] w-[260px] bg-white ">
          <h1 className=" bg-red-300 px-20 text-xl text-white">Deffered</h1>
          <div className="mt-2 ml-2 overflow-y-scroll scrollbar-none max-h-[360px]">
            {defferedTasks.map((task, index) => (
              <div
                key={index}
                className="border rounded-lg border-white p-4 bg-gray-300 mb-4"
              >
                <div className="mb-2" style={{ marginBottom: "14px" }}>
                  <div className="flex flex-cols-2 gap-[130px]">
                    <div>{task.title}</div>
                    <div>{task.priority}</div>
                  </div>
                  <div className="border-b border-black my-2 ml-2 w-50"></div>
                  <div className="border border-slate-500 h-10 w-50">
                    <h4 className="ml-1 break-words">{task.description}</h4>
                  </div>
                  <div className="flex flex-cols-2 gap-16">
                    <h5>{task.assignee}</h5>

                    <select
                      className="bg-fixed mt-1"
                      onChange={(e) => handleTaskAction(e.target.value, task)}
                    >
                      <option>Select</option>
                      <option
                        value="edit"
                        onClick={() => handleTaskAction("edit", task)}
                      >
                        Edit Task:
                      </option>
                      <option
                        value="delete"
                        onClick={() => handleTaskAction("delete", task)}
                      >
                        Delete Task
                      </option>
                    </select>
                  </div>
                  {/* Move "Assign" button outside the flex container */}
                  <div className="border border-white bg-blue-500  mt-6 w-28">
                    <h4 className="p-1 px-2 ">{task.status}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
