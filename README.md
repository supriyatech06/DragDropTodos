# DragDropTodos
# Taskify - Kanban Board App

Taskify is a simple Kanban board application built using React and React Beautiful DnD for drag and drop functionality. It allows users to manage tasks across different stages, such as To Do, In Progress, Review, and Done.

## Features
- Drag and drop tasks between columns
- Add new tasks with details and comments
- Toggle task details and comments
- Randomly assigned colors to tasks

## Technologies Used
- React
- React Beautiful DnD
- Font Awesome icons

## Deployment
The project is deployed on Vercel. You can access the deployed application using the following link:
[Taskify - Kanban Board](https://taskify-smoky-eta.vercel.app/)

## How to Use
1. **Add Tasks**
   - Click on the "Add Task" button in any column to add a new task.
   - Enter the task name, details, and comments.
   - Click "Add Task" to add the task to the column.

2. **Drag and Drop**
   - Drag tasks between columns to change their status.
   - Tasks can be moved from To Do to In Progress, Review, and finally to Done.

3. **Toggle Details and Comments**
   - Click on the task to expand and view details.
   - Click on the icons (bars for details, speech bubble for comments) to toggle their visibility.

## Project Structure
- **`src/components/TaskColumn.js`**: Component for each column in the Kanban board.
- **`src/components/TaskItem.js`**: Component for individual tasks.
- **`src/App.js`**: Main component where the columns are rendered and state is managed.
- **`src/App.css`**: CSS styles for the application.

## How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/taskify-kanban-board.git
2.Navigate into the project directory:
```cd taskify-kanban-board
3.Install dependencies:
```npm install
4.Start the development server:
```npm start
5.Open your browser and visit http://localhost:3000 to view the application.


