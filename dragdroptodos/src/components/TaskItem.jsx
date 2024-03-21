
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faInfoCircle, faComments } from "@fortawesome/free-solid-svg-icons";

const TaskItem = ({ task, provided, toggleDetails, toggleComments, showDetails, showComments }) => {
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className="task-item"
      style={{ backgroundColor: task.color }}
    >
      <div className="task-text">{task.text}</div>
      <div className="task-icons">
        <button onClick={toggleDetails}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <button onClick={toggleComments}>
          <FontAwesomeIcon icon={faComments} />
        </button>
      </div>
      {showDetails && (
        <div className="task-details">
          <p>{task.details}</p>
        </div>
      )}
      {showComments && (
        <div className="task-comments">
          <p>{task.comments}</p>
        </div>
      )}
    </div>
  );
};

export default TaskItem;



// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInfoCircle, faComments } from "@fortawesome/free-solid-svg-icons";

// const TaskItem = ({ task, provided, toggleDetails, toggleComments, showDetails, showComments }) => {
//   return (
//     <div
//       ref={provided.innerRef}
//       {...provided.draggableProps}
//       {...provided.dragHandleProps}
//       className="task-item"
//       style={{ backgroundColor: task.color }}
//     >
//       <div className="task-text">{task.text}</div>
//       <div className="task-icons">
//         <button onClick={toggleDetails}>
//           <FontAwesomeIcon icon={faInfoCircle} />
//         </button>
//         <button onClick={toggleComments}>
//           <FontAwesomeIcon icon={faComments} />
//         </button>
//       </div>
//       {showDetails && (
//         <div className="task-details">
//           <p>{task.details}</p>
//         </div>
//       )}
//       {showComments && (
//         <div className="task-comments">
//           <p>{task.comments}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TaskItem;
