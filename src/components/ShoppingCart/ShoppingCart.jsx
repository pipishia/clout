import { useState } from "react";
import { useSelector } from "react-redux";
import { Badge, theme } from "antd";
import { CartIcon } from "./Icons";
import styles from "./ShoppingCart.module.css"
import { selectCartItems } from "../../redux/cartSlice";
import BasketModal from "../BasketMoal/BasketModal"

export default function ShoppingCart() {
  const { token: { colorTextBase }} = theme.useToken();
  const [isOpen, setIsOpen] = useState(false)
  const cartItems = useSelector(selectCartItems);
  const count = (cartItems.length > 0)
                ? cartItems.reduce((sum, item) => sum + item.qty, 0)
                : 0;
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <nav onClick={toggleOpen} className={styles.cartSummary} >
        <Badge count={count} color="#6366F2" style={{color: 'white'}}>
          <CartIcon size={32} color={colorTextBase} />
        </Badge>
        <p className={styles.cartText}>  </p>
      </nav>    
      <BasketModal
        isOpen={isOpen}
        toggleModal={toggleOpen}
      />
    </>

  );
}