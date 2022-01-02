import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import { Header } from "./components";
import { Home, Cart } from "./pages";
import { useDispatch } from "react-redux";

import { setPizzas } from "./redux/actions/pizzas";

function App() {
  const dispatch = useDispatch();
  
  window.test = () => {
    axios.get("http://localhost:3001/db.json").then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  }

  React.useEffect(() => {
    axios.get("http://localhost:3001/pizzas").then(({ data }) => {
      dispatch(setPizzas(data));
    });
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
        </div>
      </div>
    </div>
  );
}

export default App;

// class App extends React.Component {
//   componentDidMount() {
//     axios
//       .get("http://localhost:3000/db.json")
//       .then(({ data }) => {
//         this.props.setPizzas(data.pizzas);
//       });
//   }
//   render() {
//     return (
//       <div className="App">
//         <div className="wrapper">
//           <Header />
//           <div className="content">
//             <Route exact path="/" render={() => <Home items={this.props.items} />} />
//             <Route exact path="/cart" component={Cart} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
