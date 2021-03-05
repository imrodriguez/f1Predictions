import {
  DragDropContext,
  Droppable,
  Draggable,
  resetServerContext,
} from "react-beautiful-dnd";
import styles from './DragList.module.css';
import { Child } from './Child';

const DragList = ({ type, elements }) => {
  resetServerContext();

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    elements = reorder(elements, result.source.index, result.destination.index);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            data-draggable={snapshot.isDragging}
            className={styles.List}
          >
            {elements.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    data-draggable={snapshot.isDragging}
                    className={styles.Item}
                    style={provided.draggableProps.style}
                  >
                    <Child type={type} position={index + 1} data={item}/>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export { DragList };
