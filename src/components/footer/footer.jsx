import style from './footer.module.css'
import { Row, Col } from "antd";
export default function Footer() {
  return (
    <footer className={style.footerCustom}>
      <div className={style.footerAbove}>
        <div className={style.container}>
          <div className={style.client}>
              <h5 className={style.footerDescription}>
                客戶服務
              </h5>
              <ul className={style.footerlist1}>
                <li className={style.footerItem}><a href="" className={style.footerabout}>客服單位：CLOUT／統一編號54377888</a></li>
                <li className={style.footerItem}><a href="" className={style.footerabout}>客服專線：+886 (02) 8777-4532</a></li>
                <li className={style.footerItem}><a href="" className={style.footerabout}>客服信箱：clout@gmail.com</a></li>
                <li className={style.footerItem}><a href="" className={style.footerabout}>客服時間：週一 ~ 週五 10:00-12:30 | 13:30-18:00</a></li>
              </ul>
          </div>
          <div className={style.connect}>
                <h5 className={style.footerDescription}>
                相關連結
              </h5>
              <ul className={style.footerlist2}>
                <li className={style.footerItem}><img src = "/images/facebook-48.png" a href="" className={style.footerlink1}/><i className="fab fa-facebook-f"></i></li>
                <li className={style.footerItem}><img src = "images/instagram-48.png" a href="" className={style.footerlink2}/><i className="fab fa-google-plus-g"></i></li>
                <li className={style.footerItem}><img src = "/images/YOUTUBE.png" a href="" className={style.footerlink3}/><i className="fab fa-linkedin-in"></i></li>
              </ul>
            </div>
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
