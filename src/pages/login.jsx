import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import LoginCard from "../components/logincard/logincard"
import { useSearchParams } from 'react-router-dom';
// import Animate from"../components/logincard/index"
function login() {
    const [searchParams] = useSearchParams();
    const redirect = searchParams.get('redirect');
    
    return (
        <div className="mainLayout">
        <Header/>
        <div className="layoutContent container">
        <LoginCard redirect={redirect}/>
        </div>
        <Footer className="layoutFooter" />
     </div>
    );
}

export default login;