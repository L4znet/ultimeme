import '../App.css';
import Navbar from "../components/Navbar";
import MemeItems from "../components/MemeItems";
import {useSelector} from "react-redux";

const Home = () => {

    return (
        <div className="App">
            <MemeItems/>
        </div>
    );
}

export default Home;