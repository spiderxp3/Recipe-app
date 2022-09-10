import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SigIn";
import Home from "./Pages/Home";
import AddRecipe from "./Pages/Addrecipe";
import AddedRecipes from "./Pages/Addedrecipes";
import { useState } from "react";
function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  return (
    <BrowserRouter>
      <div className="App">
        <div className="routes">
          <Routes>
            <Route
              exact
              path="/"
              element={<SignIn setIsAuth={setIsAuth} />}
            ></Route>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/addrecipe" element={<AddRecipe />}></Route>
            <Route
              exact
              path="/addedrecipe"
              element={<AddedRecipes isAuth={isAuth} />}
            ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
