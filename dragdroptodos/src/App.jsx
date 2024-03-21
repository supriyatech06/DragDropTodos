

import React, { useState } from "react";
import "./App.css"; 
import TaskColumn from "./components/TaskColumn";
import { DragDropContext } from "react-beautiful-dnd";

const App = () => {
  
  const initialTodos = [
    {
      id: "todo-1",
      text: "Create project plan",
      details: "Plan the project timeline, milestones, and tasks.",
      comments: "Discuss with the team and stakeholders.",
      color: getRandomColor(),
    },
    {
      id: "todo-2",
      text: "Design wireframes",
      details: "Create wireframes for the user interface.",
      comments: "Get feedback from the design team.",
      color: getRandomColor(),
    },
  ];

  const initialInProgress = [
    {
      id: "inProgress-1",
      text: "Develop landing page",
      details: "Code the landing page layout and design.",
      comments: "Check responsiveness for different screen sizes.",
      color: getRandomColor(),
    },
  ];

  const initialReview = [
    {
      id: "review-1",
      text: "Test user authentication",
      details: "Implement user authentication and authorization.",
      comments: "Perform security testing.",
      color: getRandomColor(),
    },
  ];

  const initialDone = [
    {
      id: "done-1",
      text: "Deploy to production",
      details: "Release the project to live servers.",
      comments: "Notify stakeholders about the launch.",
      color: getRandomColor(),
    },
  ];

  const [todos, setTodos] = useState(initialTodos);
  const [inProgress, setInProgress] = useState(initialInProgress);
  const [review, setReview] = useState(initialReview);
  const [done, setDone] = useState(initialDone);

  const handleAddTask = (column, task) => {
    switch (column) {
      case "todos":
        setTodos([...todos, { id: `todo-${Date.now()}`, ...task }]);
        break;
      case "inProgress":
        setInProgress([...inProgress, { id: `inProgress-${Date.now()}`, ...task }]);
        break;
      case "review":
        setReview([...review, { id: `review-${Date.now()}`, ...task }]);
        break;
      case "done":
        setDone([...done, { id: `done-${Date.now()}`, ...task }]);
        break;
      default:
        break;
    }
  };

  const handleOnDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const moveTask = (sourceList, destinationList) => {
      const [draggedItem] = sourceList.splice(source.index, 1);
      destinationList.splice(destination.index, 0, draggedItem);
    };

    switch (source.droppableId) {
      case "todos":
        moveTask(todos, destination.droppableId === "inProgress" ? inProgress : destination.droppableId === "review" ? review : done);
        break;
      case "inProgress":
        moveTask(inProgress, destination.droppableId === "todos" ? todos : destination.droppableId === "review" ? review : done);
        break;
      case "review":
        moveTask(review, destination.droppableId === "todos" ? todos : destination.droppableId === "inProgress" ? inProgress : done);
        break;
      case "done":
        moveTask(done, destination.droppableId === "todos" ? todos : destination.droppableId === "inProgress" ? inProgress : review);
        break;
      default:
        break;
    }

    setTodos([...todos]); // Update state to re-render
    setInProgress([...inProgress]);
    setReview([...review]);
    setDone([...done]);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="App">
        <h1 className="heading">Taskify</h1>
        <div className="columns">
          <TaskColumn
            title="To Do"
            tasks={todos}
            onAddTask={(task) => handleAddTask("todos", task)}
          />
          <TaskColumn
            title="In Progress"
            tasks={inProgress}
            onAddTask={(task) => handleAddTask("inProgress", task)}
          />
          <TaskColumn
            title="Review"
            tasks={review}
            onAddTask={(task) => handleAddTask("review", task)}
          />
          <TaskColumn
            title="Done"
            tasks={done}
            onAddTask={(task) => handleAddTask("done", task)}
          />
        </div>
      </div>
    </DragDropContext>
  );
};

function getRandomColor() {
  const colors = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6", "#E6B333", "#3366E6", "#999966"];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default App;


