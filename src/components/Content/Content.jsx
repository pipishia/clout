import style from './Content.module.css'
import { Row, Col } from "antd";
import { InputNumber, Space } from 'antd';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";






export default function Content() {
    const onChange = (value) => {
        console.log('changed', value);
      };
    
     
      var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }
    
    
    
        
   
    return (

        <div className={style.container}>
            <div className={style.all}>

                <Row gutter={[24, 24]}>
                    <Col
                        sm={{ span: 24 }}
                        md={{ span: 24 }}
                        lg={{ span: 12 }}
                        xl={{ span: 12 }}
                    >
                        <div className={style.pic}>
                            <a href="" className={style.imagelink}>
                                <img src="images\RapEvent.jpg" alt="" className={style.pic_style} />
                            </a>
                        </div>
                    </Col>
                    <Col
                        sm={{ span: 24 }}
                        md={{ span: 24 }}
                        lg={{ span: 12 }}
                        xl={{ span: 12 }}
                    >
                    <div className = {style.big_info}>
                        <div class = {style.info_container}>
                            <div className={style.title}>HollyFish </div>
                            <div className={style.info_wrapper}>
                                <div className= {style.info_col}>
                                    <div className = {style.info_title}> 開始時間: </div>
                                    <div className = {style.info_text}> 2023/05/31 19:30 (+0800) </div>
                                </div>
                                <div className= {style.info_col}>
                                    <div className = {style.info_title}> 活動地點: </div>
                                    <div className = {style.info_text}> PIPE 水管音樂</div>
                                </div>
                                <div className= {style.info_col}>
                                    <div className = {style.info_title}> 主辦單位: </div>
                                    <div className = {style.info_text}> 山腳下音樂工作室</div>
                                </div>
                                <div className= {style.info_col}>
                                    <div className = {style.info_title}> 票種種類: </div>
                                    <div className = {style.info_text}> 台灣全家 FamiPort 取票</div>
                                </div>
                                <div className= {style.info_col}>
                                    <div className = {style.info_title}> 付款方式: </div>
                                    <div className = {style.info_text}> ATM 虛擬帳號、信用卡</div>
                                </div>
                                <div className={style.info_title}> 售票種類: </div>
                            </div> 
                        </div>
   
                        <div class={style.sort}>
                            <div className= {style.sort_container}>
                                <div className = {style.sort_col}>
                                    <div className={style.st_box}>
                                        <div className ={style.sort_text}>1F 搖滾區</div>
                                    </div>

                                    <Space className = {style.number}>
   
                                     <InputNumber min={0} max={100000} defaultValue={0} onChange={onChange} />
    
                                    </Space>
                                
                                    
                                    
                                    
                                    <div className={style.sort_money}>$400</div>
                                </div>  

                                <div className = {style.sort_col}>
                                    <div className={style.st_box}>
                                        <div className ={style.sort_text}>1F 搖滾區+酒水暢飲</div>
                                    </div>
                                    
                                
                                    <Space className = {style.number}>
   
                                     <InputNumber min={0} max={100000} defaultValue={0} onChange={onChange} />
    
                                    </Space>

                                    <div className={style.sort_money}>$500</div>
                                </div>  

                                <div className = {style.sort_col}>
                                    <div className={style.st_box}>
                                        <div className ={style.sort_text}>1F 後排站台</div>
                                    </div>
                                
                                    <Space className = {style.number}>
   
                                     <InputNumber min={0} max={100000} defaultValue={0} onChange={onChange} />
    
                                    </Space>

                                    <div className={style.sort_money}>$350</div>
                                </div>  

                                <div className = {style.sort_col}>
                                    <div className={style.st_box}>
                                        <div className ={style.sort_text}>1F 後排站台+酒水暢飲</div>
                                    </div>
                                
                                    <Space className = {style.number}>
   
                                     <InputNumber min={0} max={100000} defaultValue={0} onChange={onChange} />
    
                                    </Space>

                                    <div className={style.sort_money}>$450</div>
                                   
                                    
                                </div>  
                            </div>
                            
                             <button className={style.btn_buy} type="button" name="button">購買</button>    

                            
                           
                        </div>
           
                    </div>
                    </Col>
                </Row>
                
                
            </div>


            <div className = {style.all_2}>


            <Row gutter={[24, 24]} className={style.description__layout}>
                    <Col
                        sm={{ span: 24 }}
                        md={{ span: 24 }}
                        lg={{ span: 12 }}
                        xl={{ span: 12 }}
                    >
                        <article className= {style.activity} >
                            <div className = {style.de_title}> 
                                <div className={style.de_title_text}>活動介紹</div>
                            </div>
  
                        <div className={style.description_box}>
                            <div className={style.description_text}>
                            政大黑音第六屆謝幕專場【黯陰陽】預售票正式開賣
                            接連產出數首佳作，在街聲排行榜上嶄露頭角的政大黑音第六屆，將帶來屬於他們最後的表演！
                            從大家耳熟能詳的熱門歌曲，到你沒聽過的隱藏作品。
                            從你不可能不認識、才華足以衝擊饒舌圈的新生代饒舌歌手，到平時隱藏在他們之下，但才華一點都不遜色的神秘玩家。
                            這一次，政大黑音第六屆全員都將在這最後的舞台上集結！
                            更是特邀兩組重量級前輩擔任嘉賓，無需猶豫，保證值回票價。  -
                            至於為什麼要叫黯陰陽，7/10你們會明白的
                            </div>
                        </div>

                         </article>
                    </Col>
                    <Col
                        sm={{ span: 24 }}
                        md={{ span: 24 }}
                        lg={{ span: 12 }}
                        xl={{ span: 12 }}
                    >
                        <div className = {style.superstar}>
                            <div className = {style.ar_title}>
                                <div className={style.ar_title_text}>演出藝人</div>
                            </div>
                           
                           
                             
                                
                                <Slider {...settings}>
                                    <div className = {style.artist}>
                                        <img src="images\jadan.jpg" alt="" className={style.art_pic} />
                                    </div>
                                    <div className = {style.artist}>
                                        <img src="images\gunna2.png" alt="" className={style.art_pic} />
                                    </div>
                                    <div className = {style.artist}>
                                        <img src="images\thug2.png" alt="" className={style.art_pic} /> 
                                    </div>
                                    <div className = {style.artist}>
                                        <img src="images\billie.jpg" alt="" className={style.art_pic} />   
                                    </div>
                                    <div className = {style.artist}>
                                        <img src="images\uzi.jpg" alt="" className={style.art_pic} />
                                    </div>
                                    <div className = {style.artist}>
                                        <img src="images\will2.png" alt="" className={style.art_pic} />
                                    </div>
                                </Slider>


                           
                        </div>
                       


                    </Col>

                    
            </Row>


            
            
            </div>
            
        </div>

    );

}
