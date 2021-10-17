import AjoutAdherent from "./AjoutAdherents";
import ListeAdherents from "./ListeAdherents";
import { useHistory } from "react-router";
import { Switch, Route, useRouteMatch } from "react-router";
import TableLivres from '../LivresComponents/TableLivres'
import { Link } from "react-router-dom";
function Adherents() {
    let history = useHistory();
    let { path, url } = useRouteMatch();
    return (
        <div className="p-10">
            <Link to="/adherents/ajoutadherent" class=" mr-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Ajouter un nouvel adherent
            </Link>
            <Link to="/adherents/listeadherents" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Afficiher la liste d'adherents
            </Link>
        </div>
    )

}

export default Adherents;