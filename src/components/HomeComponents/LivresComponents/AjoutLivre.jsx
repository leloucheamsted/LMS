import React from "react"

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titre: "", auteur: "", description: "", isbn: "", category: "", edition: 1,
      editeur: "", prix: 0, classe: "", serie: "", stock: 0, couverture: ""
    }
  }

  render() {

    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Ajouter d'un Livre</h2>

        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Titre
                </label>
                <div className="mt-1">
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    autoComplete="name"
                    value={this.state.titre}
                    onChange={(t) => { this.setState({ titre: t.target.value }) }}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Auteur
                </label>
                <div className="mt-1">
                  <input
                    id="mail"
                    name="mail"
                    type="text"
                    autoComplete="name"
                    value={this.state.auteur}
                    onChange={(t) => { this.setState({ auteur: t.target.value }) }}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  ISBN
                </label>
                <div className="mt-1">
                  <input
                    id="isbn"
                    name="isbn"
                    type="text"
                    value={this.state.isbn}
                    onChange={(t) => { this.setState({ isbn: t.target.value }) }}
                    autoComplete="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Categorie
                </label>
                <div className="mt-1">
                  <input
                    id="isbn"
                    name="isbn"
                    type="text"
                    value={this.state.category}
                    onChange={(t) => { this.setState({ category: t.target.value }) }}
                    autoComplete="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Edition
                </label>
                <div className="mt-1">
                  <input
                    id="isbn"
                    name="isbn"
                    type="text"
                    value={this.state.editeur}
                    onChange={(t) => { this.setState({ editeur: t.target.value }) }}
                    autoComplete="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Editeur
                </label>
                <div className="mt-1">
                  <input
                    id="editeur"
                    name="editeur"
                    type="text"
                    value={this.state.editeur}
                    onChange={(t) => { this.setState({ editeur: t.target.value }) }}
                    autoComplete="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Prix
                </label>
                <div className="mt-1">
                  <input
                    id="prix"
                    name="prix"
                    type="number"
                    value={this.state.prix}
                    onChange={(t) => { this.setState({ prix: t.target.value }) }}
                    autoComplete="number"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Classe
                </label>
                <div className="mt-1">
                  <input
                    id="classe"
                    name="classe"
                    type="text"
                    value={this.state.classe}
                    onChange={(t) => { this.setState({ classe: t.target.value }) }}
                    autoComplete="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Serie
                </label>
                <div className="mt-1">
                  <input
                    id="serie"
                    name="serie"
                    type="text"
                    value={this.state.serie}
                    onChange={(t) => { this.setState({ serie: t.target.value }) }}
                    autoComplete="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Stock
                </label>
                <div className="mt-1">
                  <input
                    id="stock"
                    name="stock"
                    type="number"
                    value={this.state.stock}
                    onChange={(t) => { this.setState({ stock: t.target.value }) }}
                    autoComplete="number"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <div className="mt-1">
                    <textarea class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" rows="4"></textarea>

                  </div>
                </div>

              </div>

              <div className="flex items-center justify-between">

              </div>


            </form>
            <div>
              <button

                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Ajoutez
              </button>
            </div>

          </div>
        </div>
      </div>
    )

  }
}