import React from 'react';
import { useDrag } from 'react-dnd';

const components = [
  { type: 'text', content: 'Text Block' },
  { type: 'image', content: 'Image Holder' },
  { type: 'button', content: 'Button' },
  // Add more components as needed
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      {components.map((component) => (
        <DraggableComponent key={component.type} component={component} />
      ))}
    </div>
  );
};

const DraggableComponent = ({ component }) => {
  const [, drag] = useDrag({
    type: 'COMPONENT',
    item: component,
  });

  return (
    <div ref={drag} className="draggable-component">
      {component.content}
    </div>
  );
};

export default Sidebar;
