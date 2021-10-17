import { Route, Switch } from 'react-router';
import { BrowserRouter, HashRouter, Router } from 'react-router-dom';
import './App.css';
import { ProvideAuth, PrivateRoute } from './components/auth';
import Home from './components/Home';
import Login from './components/login';
import Signup from './components/signup';
import AjoutAdherent from './components/HomeComponents/AdherentsComponents/AjoutAdherents';
import ListeAdherents from './components/HomeComponents/AdherentsComponents/ListeAdherents';
import Adherents from './components/HomeComponents/AdherentsComponents/Adherents';
function App() {
  return (
    <ProvideAuth>
      <BrowserRouter>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/adherents/ajoutadherent" component={AjoutAdherent} />
          <Route exact path="/adherents/listeadherents" component={ListeAdherents} />
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>

      </BrowserRouter>
    </ProvideAuth>



  );
}

export default App;
