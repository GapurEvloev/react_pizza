import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import { Header } from "./components";
import { Home, Cart } from "./pages";

import {setPizzas} from "./redux/actions/pizzas"
import store from "./redux/store";
import { connect } from "react-redux";

// function App() {
//   const [pizzas, setPizzas] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/db.json")
//       .then(({ data }) => setPizzas(data.pizzas));
//   }, []);

//   return (
//     <div className="App">
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Route exact path="/" render={() => <Home items={pizzas} />} />
//           <Route exact path="/cart" component={Cart} />
//         </div>
//       </div>
//     </div>
//   );
// }

class App extends React.Component {
  componentDidMount() {
    axios
      .get("http://localhost:3000/db.json")
      .then(({ data }) => store.dispatch(setPizzas(data.pizzas)));
  }
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Header />
          <div className="content">
            <Route exact path="/" render={() => <Home items={[]} />} />
            <Route exact path="/cart" component={Cart} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(App);
