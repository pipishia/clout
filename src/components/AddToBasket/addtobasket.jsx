import { Button, notification } from "antd"
import { useDispatch } from "react-redux";
import { addCartItems } from "../../redux/cartSlice";
import styles from "./addtobasket.module.css"

export default function AddToCart({ product, qty, qty1 ,qty2,qty3,qty0,total }) {
  const dispatch = useDispatch();

  const openNotification = () => {
    notification.open({
      message: 'Shopping Notification',
      description:
        `${qty} ${qty > 1 ? "pieces" : "piece"} of ${product.name} ${qty > 1 ? "have" : "has"} been added to your cart.`,
      placement: 'bottomRight'
    });
  };

  const addToCart = () => {
    openNotification();
    dispatch(addCartItems({
      id: product.id,
      name: product.name,
      image: product.images,
      price: product.price,
      countInStock: product.countInStock,
      qty,qty0,qty1,qty2,qty3,
      total,
    }))
  };
  

  return (
    <Button type="primary" className={styles.btn} onClick={addToCart}>
      <img className={styles.image} src="/images/basket.svg" />PURCHASE
    </Button>
  );
}