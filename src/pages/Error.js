import '../App.css';
import Navbar from "../components/Navbar";
import MemeItems from "../components/MemeItems";

const Home = () => {
    return (
        <div className="bg-gray-50">
            <div
                className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block">404 Not Found</span>
                    <span className="block text-indigo-600">La page demandée n'existe pas.</span>
                </h2>
            </div>
        </div>
    );
}

export default Home;