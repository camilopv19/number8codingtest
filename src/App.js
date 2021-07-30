import './App.css';
import Product from './components/catalog';
import data from './utils/productList.json';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Detail from './components/detail';

function App() {
  return (
    <div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous" />
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"></link>
      <BrowserRouter>
        <Switch>
          <Route exact path="/:id">
            <Detail />
          </Route>
          <Route path="/">
            {data.map(product => {
              // console.log(product);
              return (<Product key={product.ProductID} {...product}>{product.Name}</Product>)
            })}
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
