import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import HomePage from "./pages";
import MenPage from "./pages/men";
import WomenPage from "./pages/women";
import CartPage from "./pages/cart";
import WishlistPage from "./pages/wishlist";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          {/* <h1>Myntra clone begins</h1> */}
          <Navbar />
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/men" component={MenPage} exact />
            <Route path="/women" component={WomenPage} exact />
            <Route path="/cart" component={CartPage} exact />
            <Route path="/wishlist" component={WishlistPage} exact />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
