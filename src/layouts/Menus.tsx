import React from 'react';
import { history } from 'umi';
import styles from './index.less';
import { locale } from "@/config";
import QueueAnim from 'rc-queue-anim';
import routerMenusArr from '../config/Menus.json';
import { Spin, Dropdown, Space } from 'antd';
import { Iconfont, resetMenus } from '@/utils/common';
import { useCallback, useEffect, useState } from 'react';
import { LoadingOutlined, WindowsOutlined } from '@ant-design/icons';

const Index = () => {
    // 状态管理
    const [state, setState] = useState<any>({
        smallMenus: '',
        menus: [],
        menusLoads: true,
        menusActive: '',
    });
    
    // 菜单点击事件 - History 跳转
    const clickMenusLink = useCallback((item: any) => {
        !item.children && history.push(item.code.replace('m:', '/').replace(/:/g, '/'));
    },[state.menus])

    // 生成子级菜单对象
    const getItems = useCallback((item: any) => {
        let itemArr: any = [];
        item.forEach((el: any) => {
            itemArr.push({
                key: el.id,
                label:  (
                    <div onClick={()=> clickMenusLink(el) } className={styles.childLi+' '+styles[el.active] || ''}>
                        <Space>
                            <WindowsOutlined />
                            {isLocaleMenuName(el.name)}
                        </Space>
                    </div>
                ),
            });
        })
        return itemArr;
    },[state.menus])

    // 根据是否支持国际化，渲染Menu菜单名称
    const isLocaleMenuName = useCallback((name: string)=>{
        return locale ? name : name
    },[])
    
    useEffect(()=>{
        setTimeout(()=>{
            // 发起 ajax 请求，获取menus菜单
            let ajaxMenus = routerMenusArr;
            // 请求数据后根据浏览器pathname默认选中菜单
            setState({ ...state, menusLoads: false, menus: resetMenus(ajaxMenus, history.location.pathname) });
            // 监听浏览器地址变化并设置选中状态
            history.listen(loc => setState({ ...state, menusLoads: false, menus: resetMenus(ajaxMenus, loc.location.pathname) }));
        }, 400)
    },[]);


    return <div className={styles.Ht_Menus}>
        <QueueAnim animConfig={[{ opacity: [1, 0], translateY: [0, -50] }]} duration={500}>
            <div key='RenderMenus'>
                <Spin spinning={state.menusLoads} indicator={<LoadingOutlined />}>
                    <ul>
                        {state.menus?.map((item: any)=> {
                            return <React.Fragment key={item.id}>
                                { item?.children ? 
                                    <Dropdown 
                                        menu={{ items: getItems(item.children) }}
                                        overlayClassName={styles.childMenusDiv}
                                    >
                                        <li key={item.id} className={styles[item.active]}>
                                            {item.icon && <Iconfont type={item.icon} style={{fontSize: 18}}/>}
                                            {isLocaleMenuName(item.name)}
                                        </li>
                                    </Dropdown>
                                    : 
                                    <li onClick={ ()=>clickMenusLink(item) } className={styles[item.active]}>
                                        {item.icon && <Iconfont type={item.icon} style={{fontSize: 18}}/>}
                                        {isLocaleMenuName(item.name)}
                                    </li>
                                }
                            </React.Fragment>
                        })}
                    </ul>
                </Spin>
            </div>
        </QueueAnim>
    </div>
}



export default Index;