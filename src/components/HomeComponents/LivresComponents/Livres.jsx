import AjoutLivre from "./AjoutLivre";
import TableLivres from "./TableLivres";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
function Livres() {
    const routes = [
        {
            path: "/listeLivres",
            component: TableLivres
        },
        {
            path: "/ajoutLivre",
            component: AjoutLivre,
        }
    ];
    return (
        <div className="p-10">
            <Link to="/livres/ajoutLivre" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Ajouter un nouveau Livre
            </Link>
            <Switch>
                <Route exact path="/livres">
                    <TableLivres />
                </Route>
                <Route path="/livres/ajoutLivre">
                    <AjoutLivre />
                </Route>
            </Switch>

        </div>
    )
}
export default Livres;