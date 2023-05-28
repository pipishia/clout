import { Modal, Button, Select } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems, removeCartItems } from "../../redux/cartSlice";
import styles from "./basketmodal.module.css"
import { CartIcon } from "./icon";
import { selectCartItems } from "../../redux/cartSlice";
const { Option } = Select;


export default function BasketModal({ isOpen, toggleModal,total }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
 
    const handleCancel = () => toggleModal(!isOpen);
    const getTotalPrice = () => {
       return (cartItems.length > 0) ?
          cartItems.reduce((sum, item) => sum + item.price * item.qty0, 0)
          : 0;
    }
    
return (
    <Modal
       title="Shopping Basket"
       open={isOpen}
       onCancel={handleCancel}
       footer={null}
    >
       {cartItems.length === 0 ? (
          <div>Cart is empty</div>
       ) : (
          cartItems.map(item => (
             <li key={item.id} className={styles.item}>
                <Link to={`/activity/id/${item.id}`}>
                   <div onClick={handleCancel}>
                      <img className={styles.image} src={item.image} alt={item.name} />
                   </div>
                </Link>
                <div className={styles.content}>
                   <div className={styles.name}>{item.name}</div>
                   <div>
                   1F搖滾區 : {"   "}
                      <Select
                         defaultValue={item.qty0}
                         onChange={(qty0) => dispatch(addCartItems({
                           id: item.id,
                           name: item.name,
                           image: item.images,
                           price: item.price,
                           countInStock: item.countInStock,
                           qty0,qty1,qty2,qty3,
                           total
                         }))}
                      >
                         {[...Array(item.countInStock).keys()].map((x) => (
                            <Option key={x + 1} value={x + 1}>
                               {x + 1}
                            </Option>
                         ))}
                      </Select>
                   </div>
                   <div>
                   1F搖滾區 +酒水暢飲: {"   "}
                      <Select
                         defaultValue={item.qty1}
                         onChange={(qty1) => dispatch(addCartItems({
                           id: item.id,
                           name: item.name,
                           image: item.images,
                           price: item.price,
                           countInStock: item.countInStock,
                           qty0,qty1,qty2,qty3,
                           total,
                         }))}
                      >
                         {[...Array(item.countInStock).keys()].map((x) => (
                            <Option key={x + 1} value={x + 1}>
                               {x + 1}
                            </Option>
                         ))}
                      </Select>
                   </div>
                   <div>
                   1F 後排站台: {"   "}
                      <Select
                         defaultValue={item.qty2}
                         onChange={(qty2) => dispatch(addCartItems({
                           id: item.id,
                           name: item.name,
                           image: item.images,
                           price: item.price,
                           countInStock: item.countInStock,
                           qty0,qty1,qty2,qty3,
                           total,
                         }))}
                      >
                         {[...Array(item.countInStock).keys()].map((x) => (
                            <Option key={x + 1} value={x + 1}>
                               {x + 1}
                            </Option>
                         ))}
                      </Select>
                   </div>
                   <div>
                   1F 後排站台+酒水暢飲: {"   "}
                      <Select
                         defaultValue={item.qty3}
                         onChange={(qty3) => dispatch(addCartItems({
                           id: item.id,
                           name: item.name,
                           image: item.images,
                           price: item.price,
                           countInStock: item.countInStock,
                           qty0,qty1,qty2,qty3,
                           total,
                         }))}
                      >
                         {[...Array(item.countInStock).keys()].map((x) => (
                            <Option key={x + 1} value={x + 1}>
                               {x + 1}
                            </Option>
                         ))}
                      </Select>
                   </div>
                </div>
                <div>
                   <div className={styles.price} >
                      ${item.total}
                   </div>
                   <div className={styles.delete} onClick={() => dispatch(removeCartItems(item.id))}>
                      x
                   </div>
                </div>
             </li>
          ))
       )}
       <div className={styles.wrap}>
          Total
          <div className={styles.totalPrice}>${getTotalPrice()}</div>
       </div>
       <Button
          className={styles.btn}
          type="primary"
       >
          <CartIcon size={20} color={"#ffffff"}/>
          <span style={{ marginLeft: 12 }}>Start Checkout</span>
       </Button>
    </Modal>
 );
                         }
