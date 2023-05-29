import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import ProfileCard from "../components/ProfileCard/ProfileCard"
import { useSearchParams } from 'react-router-dom';

function login() {
    const [searchParams] = useSearchParams();
    const redirect = searchParams.get('redirect');

    return (
        <div className="mainLayout">
        <Header/>
        <div className="layoutContent container">
        <ProfileCard redirect={redirect}/>
        </div>
        <Footer className="layoutFooter" />
     </div>
    );
}

export default login;