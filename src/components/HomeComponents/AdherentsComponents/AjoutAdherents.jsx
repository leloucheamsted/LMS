import React from "react"
import { Link } from "react-router-dom"
export default class AjoutAdherent extends React.Component {
    render() {
        return (
            <div className="p-10 grid place-items-center">
                <p >Ajouter un Adherent</p>
                <div className="p-10 bg-red h-30">
                    <Link to="/adherents/listeAdherents" class=" mr-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Enregister
                    </Link>
                    <Link to="/adherents" class="bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Annuler
                    </Link>
                </div>
                <label class="block content-start place-items-start text-blue-700 text-sm font-bold mb-2">
                    Identite sur l'adherent
                </label>
                <div className="m-3 border-2 border-solid border-gray  rounded-x1">
                    <form className="m-5">
                        <div class="mb-4 flex ">
                            <label class="block text-gray-700 text-sm font-bold mb-2 mr-2" >
                                Nom de famille :
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" required placeholder="Nom " />
                        </div>
                        <div class="mb-4 flex ">
                            <label class="block text-gray-700 text-sm font-bold mb-2 mr-2" >
                                Prenom :
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" required placeholder="Prenom " />
                        </div>
                        <div class="mb-4 flex ">
                            <label class="block text-gray-700 text-sm font-bold mb-2 mr-2" >
                                Classe :
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" required placeholder="Prenom " />
                        </div>
                        <div class="mb-4 flex">
                            <label class="block text-gray-700 text-sm font-bold mb-2 mr-2" >
                                Date de Naissance :
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" required placeholder="01/01/1999" />
                        </div>
                        <div class="mb-4 flex ">
                            <label className="block text-gray-700 text-sm font-bold mb-2 mr-2" >
                                Autre Nom :
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" required placeholder="Henry" />
                        </div>
                        <div class="p-6 flex  card bordered">
                            <div className="form-control">
                                <label className="block text-blue-700 mr-4 text-sm font-bold mb-2" >
                                    Masculin
                                    <input type="radio" name="opt" checked="checked" class="radio" value="" />
                                </label>
                            </div>
                            <div class="form-control">
                                <label className="block text-blue-700 mr-4 text-sm font-bold mb-2" >
                                    Feminin
                                    <input type="radio" name="opt" checked="checked" class="radio radio-primary" value="" />
                                </label>
                            </div>
                            <div class="form-control">
                                <label className="block text-blue-700 mr-4 text-sm font-bold mb-2" >
                                    Nom specifie
                                    <input type="radio" name="opt" checked="checked" class="radio radio-secondary" value="" />
                                </label>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        )
    }

}
