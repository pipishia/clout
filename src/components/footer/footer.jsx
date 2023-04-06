import style from './footer.module.css'
import { Row, Col } from "antd";
export default function Footer() {
  return (
    <footer className={style.footerCustom}>
      <div className={style.footerAbove}>
        <div className="container">
          <Row gutter={[16, 16]}>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              lg={{ span: 20 }}
            >
              <h5 className={style.footerDescription}>
                客戶服務
              </h5>
              <ul className={style.footerlist1}>
                <li className={style.footerItem}><a href="" className={style.footerabout}>票務服務單位：拓元股份有限公司／統一編號54651107</a></li>
                <li className={style.footerItem}><a href="" className={style.footerabout}>客服專線：+886 (02) 8772-9835</a></li>
                <li className={style.footerItem}><a href="" className={style.footerabout}>客服信箱：聯繫我們</a></li>
                <li className={style.footerItem}><a href="" className={style.footerabout}>客服時間：週一 ~ 週五 10:00-12:30 | 13:30-18:00</a></li>
              </ul>


            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              lg={{ span: 4 }}
            >
                <h5 className={style.footerDescription}>
                相關連結
              </h5>
              <ul className={style.footerlist2}>
                <li className={style.footerItem}><a href="" className={style.footerlink}><i className="fab fa-facebook-f"></i></a></li>
                <li className={style.footerItem}><a href="" className={style.footerlink}><i className="fab fa-google-plus-g"></i></a></li>
                <li className={style.footerItem}><a href="" className={style.footerlink}><i className="fab fa-linkedin-in"></i></a></li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>

      <div className={style.footerBelow}>
        <div className="container">
          <h6>
            &copy; Clout copyright All rights reserved.
          </h6>
        </div>
      </div>
    </footer>
  );
}
