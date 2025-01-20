import Footer from "../../components/footer/footer";
import Navbar from "../../components/navBar/navbar";
import Header from "./component/Header";
import Mission from "./component/Mission";
import QuiNousSomme from "./component/QuiNousSomme";

const AboutPage = () => {
    return (
        <>
            <Navbar/>
            <main>
                <Header/>
                <QuiNousSomme/>
                <Mission/>                
            </main>
            <Footer/>
        </>
    );
}

export default AboutPage;
