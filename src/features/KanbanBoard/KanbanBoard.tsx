import React from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DroppableProvided,
  DraggableProvided,
  DropResult,
} from "react-beautiful-dnd";

export interface KanbanBoardProps<T extends { id: string }> {
  columns: string[];
  items: T[];
  itemField: keyof T;
  itemComponent: React.ComponentType<{ item: T }>;
  onItemUpdate: (updatedItem: T) => void;
}

export const KanbanBoard = <T extends { id: string }>(
  props: KanbanBoardProps<T>
) => {
  const {
    columns,
    items,
    itemField,
    itemComponent: ItemComponent,
    onItemUpdate,
  } = props;

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId) return;

    const item = items.find((item) => item.id === result.draggableId);
    if (!item) return;

    const updatedItem = { ...item, [itemField]: destination.droppableId };

    onItemUpdate(updatedItem as T);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-4 p-4 w-full overflow-x-auto">
        {columns.map((column) => (
          <div
            key={column}
            className="w-72 flex-shrink-0 bg-gray-100 rounded-lg shadow-md p-4"
          >
            <h2 className="text-lg font-bold text-gray-700 mb-4">{column}</h2>
            <Droppable droppableId={column}>
              {(provided: DroppableProvided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="space-y-4 h-full"
                >
                  {items
                    .filter((item) => item[itemField] === column)
                    .map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided: DraggableProvided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="cursor-move"
                          >
                            <ItemComponent item={item} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
};
