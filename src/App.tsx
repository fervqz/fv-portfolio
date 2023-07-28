import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./router/routes";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {
          routes.map(route => <Route key={route.path} {...route} />)
        }
      </Routes>
    </BrowserRouter>
  );
};

export default App;
