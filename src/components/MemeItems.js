import MemeItem from "./MemeItem";
import axios from "axios";
import {useEffect, useState} from "react";
import CreateMemeCard from "./CreateMemeCard";
import {useSelector} from "react-redux";

const MemeItems = () => {

    const logged = useSelector((state) => state.auth.logged)
    const [memes, setMemes] = useState([]);
    const getData = async () => {
         axios.get(`https://api.imgflip.com/get_memes`).then(response => {
             setMemes(response.data.data.memes);
         })

    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <section className="w-full flex flex-col justify-center items-center">
            {!logged &&
                <div className="w-72 flex justify-center items-center text-white text-sm text-center bg-red-500 px-3 py-3 rounded">
                    Vous devez vous connecter pour créer un meme
                </div>
            }
            {memes.map(meme => (
                <CreateMemeCard key={meme.id} id={meme.id} title={meme.name} pictureUrl={meme.url}/>
            ))}
        </section>
    )
}

export default MemeItems;