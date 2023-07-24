import styles from './index.less';
import { useEffect, useState } from 'react';
import RenderTopBar from './Topbar';
import { history, Outlet } from 'umi';
import { addEventListenerScroll } from "@/utils/common";
import ChildFooter from '@/pages/footer/childFooter';

const Index = () => {
  const [RenderMenus, setRenderMenus] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',addEventListenerScroll);
    setRenderMenus(history.location.pathname != '/home');
    // 监听浏览器地址变化控制是否渲染子页面菜单
    history.listen(loc => setRenderMenus(loc.location.pathname != '/home'));
    return () => window.removeEventListener('scroll', addEventListenerScroll);
  },[]);
  
  return (
    <div className={styles.Ht_layout}>
      <div className={styles.Ht_Header} style={{top: 0, height: RenderMenus ? 150 : 103}}>
        <RenderTopBar />
      </div>
      <div className={styles.Ht_main} style={{marginTop: RenderMenus ? 150 : 103}}>
        <Outlet />
      </div>
      {RenderMenus && <ChildFooter />}
    </div>
  );
}
export default Index;
