import './App.css';
import {Switch , Route , Redirect} from "react-router-dom/cjs/react-router-dom.min"
//Context
import ProductsContextProvider from './context/ProductsContextProvider';
import UseReducerContext from './context/UseReducerContext';
//Component
import Store from './components/Store';
import Details from './components/Details';
import CartX from './components/CartX';
function App() {
  return (
    <ProductsContextProvider>
      <UseReducerContext>
          <Switch>
              <Route path="/products" component={Store} />
              <Route path="/detail/:id" component={Details}/>
              <Route path="/Cart" component={CartX}/>
              <Redirect to="/products"/>
          </Switch>
      </UseReducerContext>
    </ProductsContextProvider>
  );
}

export default App;
