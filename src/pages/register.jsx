import Header2 from "../components/header/header2"
import Footer from "../components/footer/footer"
import Register from "../components/registercard/registercard"
import { useSearchParams } from 'react-router-dom';
function register() {
    const [searchParams] = useSearchParams();
   const redirect = searchParams.get('redirect');

    return (
        <div className="mainLayout">
        <Header2/>
        <div className="layoutContent container">
           <Register redirect={redirect}/>
        </div>
        <Footer className="layoutFooter" />
     </div>
    );
}
export default register;