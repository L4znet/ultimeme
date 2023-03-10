import '../App.css';
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import {auth, db} from '../firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'

const MemeCreate = () => {

    const location = useLocation();

    let { id } = useParams();
    const [text0, setText0] = useState("")
    const [text1, setText1] = useState("")
    let navigate = useNavigate();
    const saveMeme = async () => {


        const formData = new FormData()

        formData.append('template_id', id);
        formData.append('username', 'laznet');
        formData.append('password', 'Uzkq24051000');
        formData.append('text0', text0);
        formData.append('text1', text1);

         fetch('https://api.imgflip.com/caption_image', {
            mode: 'cors',
            method: 'POST',
            body:formData
        }).then(response => response.json()).then(data => {

             addDoc(collection(db, 'memes'), {
                 user_id:auth.currentUser.uid,
                 url_meme: data.data.url,
                 created: Timestamp.now()
             }).then(() => {
                 navigate("/")
             })
         })
    }

    return (
        <article className="my-5 w-full flex flex-col items-center">
            <img className="rounded-t-lg" src={location.state.picture} alt=""/>
            <h5 className="mb-2 text-3xl break-all font-bold tracking-tight text-gray-900 dark:text-white">{location.state.title}</h5>
            <input
                id="text1"
                name="text1"
                type="text"
                autoComplete="text1"
                required
                className="my-5 relative block w-64 appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Le premier texte du meme"
                onChange={(e) => {setText0(e.target.value)}}
            />
            <input
                id="text2"
                name="text2"
                type="text"
                autoComplete="text2"
                required
                className="mb-5 w-64 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Le deuxi??me texte du meme"
                onChange={(e) => {setText1(e.target.value)}}
            />
            <button
                onClick={(e) => saveMeme()}
                type="submit"
                className="my-8 group relative flex w-3/5 justify-center rounded-md border border-transparent bg-indigo-600 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >

             Enregistrer votre cr??ation
            </button>
        </article>
    );
}

export default MemeCreate;