import Navbar from "../../components/navBar/navbar";
import Header from "./component/Header";

const AboutPage = () => {
    return (
        <div className="flex flex-col justify-around overflow-x-hidden">
            <div className="flex flex-col justify-between">
            <Navbar/>
            <Header/>
            </div>
           
        </div>
    );
}

export default AboutPage;
