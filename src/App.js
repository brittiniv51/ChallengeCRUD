import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './styles.css';
import Home from './components/Home';
import AddIngredients from './components/AddIngredients';
import EditIngredients from './components/EditIngredients';
import Rules from './components/Rules';
import  MyNavBar from './shared/MyNavBar';
import  Challenge from './components/Challenge';
import  Competition from './components/Competition';

/*
1) Refactor all food to ingredients
2) Add a route to your ingredientList.js in app js
3) Add a link to that route in MyNavbar.js
4) Create ingredientList.js based off example
5) Create a context folder and add AppReducer.js & GlobalState.js
6) CRUD by Thursday
*/

function App() {
  return (
    // <GlobalProvider>
      <BrowserRouter> 
        <MyNavBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/rules" component={Rules} exact />
          <Route path="/Challenge" component={Challenge} exact />
          <Route path="/Competition" component={Competition} exact />
          <Route path="/AddIngredients" component={AddIngredients} exact />
          <Route path="/EditIngredients/:id" component={EditIngredients} exact />
        </Switch>
      </BrowserRouter>
    // </GlobalProvider>
  );
}

export default App;