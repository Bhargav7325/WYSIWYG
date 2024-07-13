import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to the WYSIWYG Editor</h1>
      <Link to="/editor" style={styles.link}>Go to Editor</Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  link: {
    fontSize: '1.2rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    marginTop: '1rem',
  },
};

export default Home;
