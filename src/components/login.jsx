import { useState } from "react"
import { useHistory } from "react-router";
import axios from "axios";
import config from '../config'
import { reactLocalStorage } from "reactjs-localstorage";
import Home from "./Home";
export default function Signup() {
    const [InputPassValue, setInputPassValue] = useState('')
    const [InputNameValue, setInputNameValue] = useState('')
    const [InputMailValue, setInputMailValue] = useState('')
    let history = useHistory();
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                    className="mx-auto h-12 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Connexion</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" >
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Addresse Mail
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={InputMailValue}
                                    onChange={(t) => { setInputMailValue(t.target.value) }}
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>


                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={InputPassValue}
                                    onChange={(t) => { setInputPassValue(t.target.value) }}
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">

                        </div>
                    </form>
                    <div>
                        <button
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={() => { login(InputMailValue, InputPassValue) }}>
                            Connexion
                        </button>
                    </div>
                    <div>
                        <button
                            className="mt-5 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={() => { history.push('/signup') }}>
                            Creer un compte
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
    function login(email, password) {
        axios.post(config.APIURL + '/auth/local', {
            identifier: email,
            password: password
        })
            .then((data) => {
                if (data.jwt) {
                    reactLocalStorage.setObject('user', data.data)
                    history.push('/')
                    return true;
                }
            })
            .catch(() => { alert("email ou mot de passe incorrect"); })

    }
}
