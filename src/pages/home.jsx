import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Masonry from "../components/masonry/masonry"
import product from "../components/json/product.json"
function Home() {
    return (
            <div>
         <Header />
       <Masonry product={product}/>
        <Footer />
       </div>
    );
}

export default Home
