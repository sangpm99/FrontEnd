import {Route, Routes} from "react-router-dom";
import {publicRoutes} from "./routes";
import './components/GlobalStyle/output.css';
import React from 'react';


function App() {
  return (
      <div>
          <Routes>
              {publicRoutes.map((route, index) => {
                  return (
                      <Route key={index} path={route.path} element={route.component}/>
                  )
              })}
          </Routes>
      </div>
  );
}

export default App;
