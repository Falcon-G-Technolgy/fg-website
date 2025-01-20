import Footer from "../../components/footer/footer";
import Navbar from "../../components/navBar/navbar";
import Header from "./component/Header";
import Misson from "./component/Misson";
import QuiNousSomme from "./component/QuiNousSomme";

const AboutPage = () => {
    return (
        <>
            <Navbar/>
            <main>
                <Header/>
                <QuiNousSomme/>
                <Misson/>                
            </main>
            <Footer/>
        </>
    );
}

export default AboutPage;
