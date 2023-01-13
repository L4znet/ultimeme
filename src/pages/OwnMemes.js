import MemeItem from "../components/MemeItem";
import axios from "axios";
import {useEffect, useState} from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import {auth, db} from "../firebase";
import {useParams} from "react-router-dom";
const OwnMemes = () => {

    let { userid } = useParams();

    const [mymemes, setMyMemes] = useState([]);
    const getYourMemes = async () => {
        let memes = []

        const q = query(collection(db, "memes"), where("user_id", "==", userid));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.data())
            memes.push(doc.data())
        });

        setMyMemes(memes)
    };
    useEffect(() => {
        getYourMemes();
    }, []);

    return (
        <section className="w-full flex flex-col justify-center items-center">
            {mymemes.map(meme => (
                <MemeItem key={meme.id} id={meme.id}  pictureUrl={meme.url_meme}/>
            ))}
        </section>
    )
}

export default OwnMemes;