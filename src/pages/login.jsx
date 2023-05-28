import Header2 from "../components/header/header2"
import Footer from "../components/footer/footer"
import LoginCard from "../components/logincard/logincard"
// import Animate from"../components/logincard/index"
import { useSearchParams } from 'react-router-dom';
function login() {

    const [searchParams] = useSearchParams();
   const redirect = searchParams.get('redirect');

    return (
        <div className="mainLayout">
        <Header2/>
        <div className="layoutContent container">
        <LoginCard redirect={redirect}/>
        {/* <Animate/> */}
        </div>
        <Footer className="layoutFooter" />
     </div>
    );
}
export default login;