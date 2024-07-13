import React, { useState, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import axios from 'axios';
import Sidebar from './Sidebar';
import Workspace from './Workspace';
import './Editor.css';

const Editor = () => {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    const fetchComponents = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/design/load', {
        headers: { Authorization: token },
      });
      setComponents(response.data);
    };

    fetchComponents();
  }, []);

  const handleDrop = (item) => {
    setComponents((prevComponents) => [...prevComponents, item]);
  };

  const handleSave = async () => {
    const token = localStorage.getItem('token');
    await axios.post('/api/design/save', { components }, {
      headers: { Authorization: token },
    });
    alert('Design saved');
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="editor">
        <Sidebar />
        <Workspace components={components} onDrop={handleDrop} />
        <button onClick={handleSave}>Save</button>
      </div>
    </DndProvider>
  );
};

export default Editor;
