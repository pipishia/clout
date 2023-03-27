import style from './images.module.css'
import { Row, Col } from "antd";
export default function images() {
  return (

    <div>
    <article className={style.imageLayout}>
    <div className="container">
      <h1 className="text-center">IMAGES</h1>
      <hr className="divider--dark"/>
      <Row gutter={[24, 24]}>
        <Col
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
          xl={{ span: 6 }}
        >
           <div className={style.image}>
          <a href="" className={style.imagelink}>
            <img src="images/img1.jpg" alt="" className={style.imageStyle}/>
          </a>
          <p className={style.imageTitle}>Place 1</p>
          </div>
        </Col>
        <Col
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
          xl={{ span: 6 }} 
        >
           <div className={style.image}>
          <a href="" className={style.imagelink}>
            <img src="images/img2.jpg" alt="" className={style.imageStyle}/>
          </a>
          <p className={style.imageTitle}>Place 2</p>
          </div>
        </Col>
        <Col
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
          xl={{ span: 6 }}
        >
           <div className={style.image}>
          <a href="" className={style.imagelink}>
            <img src="images/img3.jpg" alt="" className={style.imageStyle}/>
          </a>
          <p className={style.imageTitle}>Place 3</p>
          </div>
        </Col>
        <Col
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
          xl={{ span: 6 }}
        >
           <div className={style.image}>
          <a href="" className={style.imagelink}>
            <img src="images/img4.jpg" alt="" className={style.imageStyle}/>
          </a>
          <p className={style.imageTitle}>Place 4</p>
          </div>
        </Col>
        <Col
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
          xl={{ span: 6 }}
        >
           <div className={style.image}>
          <a href="" className={style.imagelink}>
            <img src="images/img5.jpg" alt="" className={style.imageStyle}/>
          </a>
          <p className={style.imageTitle}>Place 5</p>
          </div>
        </Col>
        <Col
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
          xl={{ span: 6 }}
        >
           <div className={style.image}>
          <a href="" className={style.imagelink}>
            <img src="images/img6.jpg" alt="" className={style.imageStyle}/>
          </a>
          <p className={style.imageTitle}>Place 6</p>
          </div>
        </Col>
        <Col
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
          xl={{ span: 6 }}
        >
           <div className={style.image}>
          <a href="" className={style.imagelink}>
            <img src="images/img7.jpg" alt="" className={style.imageStyle}/>
          </a>
          <p className={style.imageTitle}>Place 7</p>
          </div>
        </Col>
        <Col
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
          xl={{ span: 6 }}
        >
           <div className={style.image}>
          <a href="" className={style.imagelink}>
            <img src="images/img8.jpg" alt="" className={style.imageStyle}/>
          </a>
          <p className={style.imageTitle}>Place 8</p>
          </div>
        </Col>
      </Row>
    </div>
  </article>      
  </div>
  
  );
}
