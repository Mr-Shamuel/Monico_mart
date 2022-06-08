import Home from "./Components/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from "./Components/Navbars/Navbars";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Search from "./Components/Search/Search";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

import Shipment from "./Components/Shipment/Shipment";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Footer from "./Components/Footer/Footer";

export const CartDetails = createContext();
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [cartData, setCartData] = useState({})

  return (
    <div className="mainCon" style={{ color: "black" }}  >
      <CartDetails.Provider value={[cartData, setCartData]} >
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

       
          
          <Router>
            <Navbars></Navbars>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/search">
                <Search></Search>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
              <PrivateRoute path="/shipment">
                <Shipment></Shipment>
              </PrivateRoute>




            </Switch>

            <Footer></Footer>
          </Router>
        </UserContext.Provider>
      </CartDetails.Provider>
    </div>
  );
}

export default App;
