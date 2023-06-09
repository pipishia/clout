import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import RegisterCard from "../components/registercard/registercard"
import { useSearchParams } from 'react-router-dom';

function register() {
    const [searchParams] = useSearchParams();
    const redirect = searchParams.get('redirect');

    return (
        <div className="mainLayout">
        <Header/>
        <div className="layoutContent container">
           <RegisterCard  redirect={redirect}/>
        </div>
        <Footer className="layoutFooter" />
     </div>
    );
}
export default register;