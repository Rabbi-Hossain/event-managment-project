
import { useLoaderData } from "react-router-dom";
import Banner from "../../Component/Banner/Banner";
import Coaching from "../../Component/Coaching/Coaching";
import Footer from "../../Component/Footer/Footer";
import JoinCommite from "../../Component/JoinCommite/JoinCommite";
import Services from "../../Component/Services/Services";



const Home = () => {

    const loader = useLoaderData()


    return (
        <div>
            <Banner></Banner>

            <div className=" grid grid-cols-1 md:grid-cols-3 gap-4  p-4">
                {
                    loader.map(load => <Services key={load.id} load={load}></Services>)
                }
            </div>
            <Coaching></Coaching>
            <JoinCommite></JoinCommite>

            <Footer></Footer>
        </div>
    );
};

export default Home;