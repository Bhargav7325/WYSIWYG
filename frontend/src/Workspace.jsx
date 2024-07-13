import React, { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import './Workspace.css'; // Import custom CSS for additional styling
import 'bootstrap/dist/css/bootstrap.min.css';


const Workspace = () => {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    console.log('Fetching components...');
    fetchComponents();
  }, []);

  const fetchComponents = async () => {
    try {
      const response = await fetch('/api/design/load');
      console.log('Response:', response);
      const data = await response.json();
      console.log('Data:', data);
      if (Array.isArray(data)) {
        setComponents(data);
      } else {
        console.error('Data is not an array:', data);
        setComponents([]);
      }
    } catch (error) {
      console.error('Error fetching components:', error);
      setComponents([]);
    }
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'COMPONENT',
    drop: (item, monitor) => {
      console.log('Dropped item:', item);
      setComponents((prevComponents) => [...prevComponents, item]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div className="container vh-100 mt-4">
      <div className="row">

        <div className="col-md-9">
          <div ref={drop} className={`workspace p-3 ${isOver ? 'workspace-over' : ''}`}>
            <h4>Workspace</h4>
            {components.map((component, index) => (
              <div key={index} className="component">
                {component.type}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
