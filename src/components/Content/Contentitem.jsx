// import style from './Content.module.css'
// import { Row, Col, Select } from "antd";
// import { priceArray } from "../cartsummary/prices";
// function Contentitem({product}) {
//     return (

    
//         <div className={style.container}>
//         <div className={style.all}>
//             <div className={style.pic}>
//             <img className={style.pic_style}
//                 key={product.i}
//                 src={product.images}
//                 alt={product.name} />
//                     </div>
//         <div className={style.big_info}>
//                 <div class={style.info_container}>
//                     <div className={style.title} key={product.i}>{product.name}</div>
//                     <div className={style.info_wrapper}>
//                         <div className={style.info_col}>
//                             <div className={style.info_title}> 開始時間: </div>
//                             <div className={style.info_text} key={product.i}>  {product.time} </div>
//                         </div>
//                         <div className={style.info_col}>
//                             <div className={style.info_title}> 活動地點: </div>
//                             <div className={style.info_text} key={product.i}>{product.place} </div>
//                         </div>
//                         <div className={style.info_col}>
//                             <div className={style.info_title}> 主辦單位: </div>
//                             <div className={style.info_text} key={product.i}>{product.organizer}</div>
//                         </div>
//                         <div className={style.info_col}>
//                             <div className={style.info_title}> 票種種類: </div>
//                             <div className={style.info_text} key={product.i}>{product.ticket} </div>
//                         </div>
//                         <div className={style.info_col}>
//                             <div className={style.info_title}> 付款方式: </div>
//                             <div className={style.info_text} key={product.i}>{product.payment}</div>
//                         </div>
//                         <div className={style.info_title}> 售票種類: </div>
//                     </div>
//                 </div>
//                 <div class={style.sort}>
//                             <div className= {style.sort_container}>
//                                 <div className = {style.sort_col}>
//                                     <div className={style.st_box}>
//                                         <div className ={style.sort_text}>
//                                             {priceArray.map((price, id)=>(
//                                                 <h2 key={id}>{price.name}</h2>
//                                             ))}
//                                         </div>
//                                     </div>
//                                     <div className={style.counter}>
//                                          <Space className = {style.number}>
//                                      <InputNumber min={0} max={100000} defaultValue={0} onChange={onChange} />
//                                     </Space>
//                                     <Space className = {style.number}>
//                                      <InputNumber min={0} max={100000} defaultValue={0} onChange={onChange} />
//                                     </Space>
//                                     <Space className = {style.number}>
//                                      <InputNumber min={0} max={100000} defaultValue={0} onChange={onChange} />
//                                     </Space>
//                                     <Space className = {style.number}>
//                                      <InputNumber min={0} max={100000} defaultValue={0} onChange={onChange} />
//                                     </Space>
//                                     </div>
                                   
//                                     <div className={style.sort_money}>
//                                           {priceArray.map((price, id)=>(
//                                                 <h2 key={id}>{price.price}</h2>
//                                             ))}
//                                     </div>
//                                 </div>  

                            
//                              <button className={style.btn_buy} type="button" name="button">購買</button>    

//                             </div>
                           
//                             </div>
//             </div>
//         </div>    
//         </div>           
        
        
        
//         );
//         }       

//         export default Contentitem;