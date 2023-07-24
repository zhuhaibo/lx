import {useState, useEffect} from 'react';
import { history } from 'umi';
import styles from './index.less';
import QueueAnim from 'rc-queue-anim';
import { logoPath, logo } from '@/config';
import Menus from '@/layouts/Menus';
import { 
    CaretDownOutlined, CaretUpOutlined, 
    SearchOutlined, WechatOutlined, PhoneOutlined
} from '@ant-design/icons';

export default function Layout() {
    const [cityHide, setCityHide] = useState(false);
    const [RenderMenus, setRenderMenus] = useState(false);
    useEffect(()=>setRenderMenus(history.location.pathname != '/home'),[]);
    // 监听浏览器地址变化控制是否渲染子页面菜单
    history.listen(loc => setRenderMenus(loc.location.pathname != '/home'));
    return (
        <>
            <div className={styles.Ht_topbar}>
                <QueueAnim animConfig={[{ opacity: [1, 0], translateY: [0, -50] }]}>
                    <div className={styles.topbarDiv} key='RenderTopBar'>
                        <div className={styles.Ht_logo} onClick={()=>history.push(logoPath)}>
                            <img src={logo} alt="logo" />
                        </div>
                        <div className={styles.Ht_toolsAndUsers}>
                            <div className={styles.topCity}>
                                <dl>
                                    <dt>找留学靠谱机构、中介、好老师上甄选留学</dt>
                                    <dd>
                                        <a href="#">北京</a>
                                        <a href="#">上海</a>
                                        <a href="#">广州</a>
                                        <a href="#">深圳</a>
                                        <a href="#">武汉</a>
                                        <a href="#">成都</a>
                                        <div className={styles.iconDownDiv} onClick={()=>setCityHide(!cityHide) }>
                                            {cityHide ? <CaretUpOutlined /> : <CaretDownOutlined />}
                                        </div>
                                        {cityHide && <div className={styles.topCityAll}>
                                            <a href="#">上海</a>
                                            <a href="#">广州</a>
                                            <a href="#">深圳</a>
                                            <a href="#">武汉</a>
                                            <a href="#">成都</a>
                                            <a href="#">北京</a>
                                            <a href="#">上海</a>
                                            <a href="#">广州</a>
                                            <a href="#">深圳</a>
                                            <a href="#">武汉</a>
                                            <a href="#">成都</a>
                                            <a href="#">北京</a>
                                            <a href="#">上海</a>
                                            <a href="#">广州</a>
                                            <a href="#">深圳</a>
                                            <a href="#">武汉</a>
                                            <a href="#">成都</a>
                                            <a href="#">北京</a>
                                            <a href="#">上海</a>
                                            <a href="#">广州</a>
                                            <a href="#">深圳</a>
                                            <a href="#">武汉</a>
                                            <a href="#">成都</a>
                                        </div>}
                                    </dd>
                                </dl>
                            </div>
                            <div className={styles.searchDiv}>
                                <input type="text" />
                                <div className={styles.btn}><SearchOutlined /> 搜索</div>
                            </div>
                            <div className={styles.tellDiv}>
                                <p>
                                    <a href="#">Mobile站</a>
                                    <a href="#">网站导航</a>
                                    <a href="#">品牌介绍</a>
                                    <a href="#">联系我们</a>
                                </p>
                                <div className={styles.telItem}>
                                    <div className={styles.tellItemIcon}>
                                        <WechatOutlined style={{color: '#fff', fontSize: '24px'}} />
                                    </div>
                                    <div className={styles.tellItemIcon}>
                                        <PhoneOutlined style={{color: '#fff', fontSize: '24px'}}/>
                                    </div>
                                    <div className={styles.tellItemDiv}>
                                        <p><span>135-5262-9241</span></p>
                                        <p><strong>全国咨询热线</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </QueueAnim>
            </div>
            {RenderMenus ? <Menus /> : null}
        </>
    );
}
