import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./router/routes";
import NavBar from "./components/NavBar/NavBar";

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {routes.map((route, i) => {
          return <Route key={`pr-${i}`} {...route} />
        })}

      </Routes>
    </BrowserRouter>
  )
}

export default App
