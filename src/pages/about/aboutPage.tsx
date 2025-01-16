import Navbar from "../../components/navBar/navbar";
import Header from "./component/Header";
import Misson from "./component/Misson";
import QuiNousSomme from "./component/QuiNousSomme";

const AboutPage = () => {
    return (
        <div className="flex flex-col justify-around overflow-x-hidden">
            <div className="flex flex-col justify-between ">
            <Navbar/>
            <Header/>
            <QuiNousSomme/>
            <Misson/>
            </div>
           
        </div>
    );
}

export default AboutPage;
