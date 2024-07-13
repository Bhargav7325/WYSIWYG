// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// <Route path="/" exact component={Home} />
// import Editor from './Editor';
// import Login from './Login';
// // import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/editor" component={Editor} />
//           <Route path="/login" component={Login} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Editor from './Editor';
import Home from './Home'

function App() {
  
 return(
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/editor" element={<Editor />} />
      <Route path="/" exact element={<Home />} />
    </Routes>
  </Router>
);
}

export default App;
