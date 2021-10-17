import Navbar from "./HomeComponents/navbar";
import Livres from "./HomeComponents/LivresComponents/Livres";
import Fournisseurs from "./HomeComponents/Fournisseurs";
import Prets from "./HomeComponents/Prets";
import Adherents from "./HomeComponents/AdherentsComponents/Adherents";
import { Route, Switch } from 'react-router';
import { BrowserRouter, HashRouter, Router, useRouteMatch } from 'react-router-dom';
import Dashboard from "./HomeComponents/Dashboard";
function Home() {
    let { path, url } = useRouteMatch();
    console.log(url);
    return (
        <div>
            <div>
                <Navbar />

            </div>

            <Switch>
                <Route exact path="/">
                    <Dashboard />
                </Route>
                <Route path="/livres">
                    <Livres />
                </Route>
                <Route path='/adherents'>
                    <Adherents />
                </Route>
                <Route path="/prets">
                    <Prets />
                </Route>
                <Route path="/fournisseurs">
                    <Fournisseurs />
                </Route>
            </Switch>


        </div>
    )
}
export default Home;