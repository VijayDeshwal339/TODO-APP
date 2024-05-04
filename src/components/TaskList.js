// // TaskList.js (Updated)
// import React from 'react';

// const TaskList = ({ tasks, onDeleteTask }) => {
//   return (
//     <ul>
//       {tasks.map((task) => (
//         <li key={task.id} className={`priority-${task.priority.toLowerCase()}`}>
//           {task.text} <button onClick={() => onDeleteTask(task.id)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default TaskList;

import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Task</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id} className={`priority-${task.priority.toLowerCase()}`}>
              <TableCell>{task.id}</TableCell>
              <TableCell>{task.text}</TableCell>
              <TableCell>{task.priority}</TableCell>
              <TableCell>
                <IconButton onClick={() => onDeleteTask(task.id)} color="error">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskList;

