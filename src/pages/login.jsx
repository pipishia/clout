import Header2 from "../components/header/header2"
import Footer from "../components/footer/footer"
import Login from "../components/logincard/logincard"
import { useSearchParams } from 'react-router-dom';
function login() {

    const [searchParams] = useSearchParams();
   const redirect = searchParams.get('redirect');

    return (
        <div className="mainLayout">
        <Header2/>
        <div className="layoutContent container">
        <Login redirect={redirect}/>
        </div>
        <Footer className="layoutFooter" />
     </div>
    );
}
export default login;