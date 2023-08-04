import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./router/routes";
import NavBar from "./components/navigation/NavBar/NavBar";
import Footer from "./components/navigation/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {
          routes.map(route => <Route key={route.path} {...route} />)
        }
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
