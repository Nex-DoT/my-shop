import './App.css';
import {Switch , Route , Redirect} from "react-router-dom/cjs/react-router-dom.min"
//Context
import ProductsContextProvider from './context/ProductsContextProvider';
//Component
import Store from './components/Store';
import Details from './components/Details';
import UseReducerContext from './context/UseReducerContext';
function App() {
  return (
    <ProductsContextProvider>
      <UseReducerContext>
          <Switch>
              <Route path="/products" component={Store} />
              <Route path="/detail/:id" component={Details}/>
              <Redirect to="/products"/>
          </Switch>
      </UseReducerContext>
    </ProductsContextProvider>
  );
}

export default App;
