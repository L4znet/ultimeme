import '../App.css';
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div className="App">
            <Navbar/>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Home;