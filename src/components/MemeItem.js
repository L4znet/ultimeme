import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const MemeItem = (props) => {
    const logged = useSelector((state) => state.auth.logged)
    return (

        <article className="my-5">
            <div className="w-72 mb-5 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src={props.pictureUrl} alt=""/>
                <div className="p-5">
                    <h5 className="mb-2 text-2md break-all font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                </div>
            </div>
            {logged &&
                <Link to={`meme/create/${props.id}`} state={{ picture:props.pictureUrl, title:props.title }} className="w-72 flex justify-center items-center text-white text-xl bg-[#1da1f2] px-3 py-3 rounded">
                    Créer un meme
                </Link>
            }
            {!logged &&
                <div className="w-72 flex justify-center items-center text-white text-sm text-center bg-red-500 px-3 py-3 rounded">
                    Vous devez vous connecter pour créer un meme
                </div>
            }
        </article>


    )
}

export default MemeItem;