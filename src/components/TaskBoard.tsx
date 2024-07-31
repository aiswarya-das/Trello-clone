import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const columns = ['To-Do', 'In Progress', 'Under Review', 'Completed'];

interface Task {
  id: string;
  title: string;
  status: string;
  priority: string;
  deadline: string;
}

interface TaskBoardProps {
  tasks: Task[];
}

const TaskBoard: React.FC<TaskBoardProps> = ({ tasks }) => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {columns.map((column) => (
        <Droppable key={column} droppableId={column}>
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="bg-gray-100 p-4 rounded-lg"
            >
              <h2 className="font-bold mb-4">{column}</h2>
              {tasks.filter(task => task.status === column).map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className="bg-white p-4 rounded-lg mb-4 shadow-md"
                    >
                      <h3 className="font-bold">{task.title}</h3>
                      <p className="text-sm">{task.priority}</p>
                      <p className="text-sm">{task.deadline}</p>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ))}
    </div>
  );
};

export default TaskBoard;
