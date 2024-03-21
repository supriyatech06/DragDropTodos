




import React, { useState } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import TaskItem from "./TaskItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faComments, faPlus } from "@fortawesome/free-solid-svg-icons";

const TaskColumn = ({ title, tasks, onAddTask }) => {
  const [newTask, setNewTask] = useState({
    text: "",
    details: "",
    comments: "",
    color: getRandomColor(),
  });

  const [taskDetails, setTaskDetails] = useState({});
  const [taskComments, setTaskComments] = useState({});
  const [isAddingTask, setIsAddingTask] = useState(false);

  const handleInputChange = (e, field) => {
    setNewTask({ ...newTask, [field]: e.target.value });
  };

  const handleAddTask = () => {
    if (newTask.text.trim() !== "") {
      onAddTask({ ...newTask });
      setNewTask({
        text: "",
        details: "",
        comments: "",
        color: getRandomColor(),
      });
      setIsAddingTask(false);
    }
  };

  const handleToggleDetails = (taskId) => {
    setTaskDetails((prevDetails) => ({
      ...prevDetails,
      [taskId]: !prevDetails[taskId],
    }));
  };

  const handleToggleComments = (taskId) => {
    setTaskComments((prevComments) => ({
      ...prevComments,
      [taskId]: !prevComments[taskId],
    }));
  };

  const toggleAddTask = () => {
    setIsAddingTask(!isAddingTask);
  };

  return (
    <div className="column">
      <h2 className="column-title">{title}</h2>
      <Droppable droppableId={title.toLowerCase().replace(" ", "-")}>
        {(provided) => (
          <div
            className="task-list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <TaskItem
                    task={task}
                    provided={provided}
                    toggleDetails={() => handleToggleDetails(task.id)}
                    toggleComments={() => handleToggleComments(task.id)}
                    showDetails={!!taskDetails[task.id]}
                    showComments={!!taskComments[task.id]}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <div className="add-task">
        {!isAddingTask ? (
          <button className="add-task-button" onClick={toggleAddTask}>
            <FontAwesomeIcon icon={faPlus} /> Add Task
          </button>
        ) : (
          <div className="add-task-form">
            <input
              type="text"
              placeholder="Task Name"
              value={newTask.text}
              onChange={(e) => handleInputChange(e, "text")}
            />
            <input
              type="text"
              placeholder="Details"
              value={newTask.details}
              onChange={(e) => handleInputChange(e, "details")}
            />
            <input
              type="text"
              placeholder="Comments"
              value={newTask.comments}
              onChange={(e) => handleInputChange(e, "comments")}
            />
            <button onClick={handleAddTask}>Add Task</button>
          </div>
        )}
      </div>
    </div>
  );
};

function getRandomColor() {
  const colors = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6", "#E6B333", "#3366E6", "#999966"];
//   return colors[Math.floor(Math.random() * colors.length)];
}

export default TaskColumn;


