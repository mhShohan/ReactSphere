import { DragOverlay } from '@dnd-kit/core';
import { BoardColumn } from './BoardColumn';
import { TaskCard } from './TaskCard';
import { createPortal } from 'react-dom';

const CreatePortal = ({ activeColumn, activeTask, tasks }: any) => {
  return (
    <>
      {createPortal(
        <DragOverlay>
          {activeColumn && (
            <BoardColumn
              isOverlay
              column={activeColumn}
              tasks={tasks.filter((task: any) => task.columnId === activeColumn.id)}
            />
          )}
          {activeTask && <TaskCard task={activeTask} isOverlay />}
        </DragOverlay>,
        document.body
      )}
    </>
  );
};

export default CreatePortal;
