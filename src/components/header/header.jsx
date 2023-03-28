import style from './header.module.css'
import { Row, Col } from 'antd';

export default function header({ title, slogan})
{
    return (
        <header className={style.header}>
            <div className="container d-flex flex-column align-items-center">
                <img className={style.avatar} src="./images/DICK.png" alt="avatar" />
                <h1 className={style.headerTitle}>最新消息{title}</h1>
                <hr className={style.divider} />
                <p className={style.slogan}>cart{slogan}</p>
                <p className={style.slogan}>login{slogan}</p>
            </div>
        </header>
    );
}

