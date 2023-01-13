import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import MemeItem from "./MemeItem";

const CreateMemeCard = (props) => {
    const logged = useSelector((state) => state.auth.logged)
    return (

        <article className="my-5">
            <MemeItem pictureUrl={props.pictureUrl}/>
            {logged &&
                <Link to={`meme/create/${props.id}`} state={{ picture:props.pictureUrl, title:props.title }} className="w-72 flex justify-center items-center text-white text-xl bg-[#1da1f2] px-3 py-3 rounded">
                    Créer un meme
                </Link>
            }
        </article>


    )
}

export default CreateMemeCard;