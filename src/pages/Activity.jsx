import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Content from "../components/Content/Content"
import { useParams } from 'react-router-dom';
import products from "../components/json/product.json"
function Activity() {

    const { productId } = useParams();
   const product = products.find(
      (x) => x.id === productId
   );
    return (
    <div>
        <Header />
        <Content  product={product}/>
        <Footer />
    </div>
    );

}
export default Activity