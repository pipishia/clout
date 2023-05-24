import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Register from "../components/register/register"

function Register() {

    return (
        <div className="mainLayout">
        <Header/>
        <div className="layoutContent container">
           <Register />
        </div>
        <Footer className="layoutFooter" />
     </div>
    );
}
export default Register