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
    <h1 className="bg-orange-400 px-16 text-xl text-white">In Progress</h1>
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
</div>;
