import {Route, Routes} from "react-router-dom";
import {publicRoutes} from "./routes";
import './components/GlobalStyle/output.css';

function App() {
  return (
      <Routes>
        {publicRoutes.map((route, index) => {
          return (
              <Route key={index} path={route.path} element={route.component}/>
          )
        })}
      </Routes>
  );
}

export default App;
