
import { useState } from "react";
import { Badge, theme } from "antd";
import { CartIcon } from "./icon";
import styles from "./cartsummary.module.css"

export default function CartSummary() {
  const { token: { colorTextBase }} = theme.useToken();
  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <nav onClick={toggleModal} className={styles.cartSummary} >
      <Badge count={3} color="#6366F2" style={{color: 'white'}}>
        <CartIcon size={32} color={colorTextBase} />
      </Badge>
      <p className={styles.cartText}> </p>
    </nav>
  );
}