import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import MainNavigation from './components/MainNavigation';

import Home from './components/Pages/Home/Home';
import Search from './components/Pages/Search/Search';
import Favorite from './components/Pages/Favorite/Favorite';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="app">
      <Container>
          <Switch>
            <Route path="/" component={Home} exact/>            
            <Route path="/search" component={Search} />
            <Route path="/favorite" component={Favorite} />
          </Switch>
      </Container>
    </div>
    
      <MainNavigation/>
    </BrowserRouter>
  );
}

export default App;
