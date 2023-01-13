import '../App.css';
import Navbar from "../components/Navbar";
import MemeItems from "../components/MemeItems";
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { signInWithEmailAndPassword } from "firebase/auth";
import {useState} from "react";
import {auth} from '../firebase'
import { useSelector, useDispatch } from 'react-redux'
import {login} from "../store/slices/authReducer";
import {useNavigate} from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const logged = useSelector((state) => state.auth.logged)

    const LogUser = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

        if(auth.currentUser !== null){
            dispatch(login())
            navigate("/")
        }
    }


    return (
        <>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Connexion
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    E-mail
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="mb-5 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="E-mail"
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Mot de passe
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    required
                                    className="mb-5 relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Mot de passe"
                                />
                            </div>
                        </div>


                        <div>
                            <button
                                onClick={(e) => LogUser(e)}
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                </span>
                                Connexion
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login