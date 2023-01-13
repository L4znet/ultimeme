import MemeItem from "./MemeItem";
import axios from "axios";
import {useEffect, useState} from "react";

const MemeItems = () => {


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
            {memes.map(meme => (
                <MemeItem key={meme.id} id={meme.id} title={meme.name} pictureUrl={meme.url}/>
            ))}
        </section>
    )
}

export default MemeItems;