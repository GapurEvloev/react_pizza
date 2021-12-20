import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Route } from "react-router-dom";
import { setPizzas } from "./redux/actions/pizzas";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({data}) => {
      dispatch(setPizzas(data.pizzas));
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

// class App extends React.Component {
//   componentDidMount() {
//     axios
//       .get("http://localhost:3000/db.json")
//       .then(({ data }) => this.props.setPizzas(data.pizzas));
//   }
//   render() {
//     console.log(this.props);
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
//     setPizzas: (items) => dispatch(SetPizzasAction(items)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
