import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Login from "../components/login/login"

function login() {

    return (
        <div className="mainLayout">
        <Header/>
        <div className="layoutContent container">
           <Login />
        </div>
        <Footer className="layoutFooter" />
     </div>
    );
}
export default login