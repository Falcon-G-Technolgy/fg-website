import Navbar from "../../components/navBar/navbar";
import Header from "./component/Header";
import QuiNousSomme from "./component/QuiNousSomme";

const AboutPage = () => {
    return (
        <div className="flex flex-col justify-around overflow-x-hidden">
            <div className="flex flex-col justify-between gap-3">
            <Navbar/>
            <Header/>
            <QuiNousSomme/>
            </div>
           
        </div>
    );
}

export default AboutPage;
