import "./App.css";

import Topbar from "./components/Topbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import NavBar from "./components/NavBar";
import HomeScreens from "./screens/HomeScreens";
import CartScreen from "./screens/CartScreen";
import Login from "./screens/Login";
import Register from "./screens/register1";
import OrderScreen from "./screens/OrderScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <NavBar />
        <Switch>
          <Route path="/orderScreen" component={OrderScreen} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/cart" component={CartScreen} exact />
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/policy" component={Policy} exact />
          <Route path="/" component={HomeScreens} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
