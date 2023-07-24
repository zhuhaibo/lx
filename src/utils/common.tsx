import { iconfont } from '@/config';
import { createFromIconfontCN } from '@ant-design/icons/lib';
import { message } from 'antd';

// iconfont
export const Iconfont = createFromIconfontCN({ scriptUrl: iconfont });

// 菜单选中状态
export const resetMenus = (arr: any, pathname: any, menusChildrenType?: any) => (arr.map((v: any)=>{
    window.scrollTo(0, 0);
    // 匹配当前点击的menus对象与数据中的对象中code值是否匹配
    if( !menusChildrenType ){
        v.active = v.code.split(':')[1] === pathname.split('/')[1] ? 'active' : '';
    }else {
        let childCodeArr = v.code.split(':');
        let itemCodeArr = pathname.split('/');
        v.active = childCodeArr[childCodeArr.length-1] === itemCodeArr[itemCodeArr.length-1] ? 'active' : '';
    }
    // 存在子级时递归
    v.children && resetMenus(v.children, pathname,  true);
    return v; 
}));

export const addEventListenerScroll = (e: any) => {
    let scrollTop = document.documentElement.scrollTop
    let clientHeight = document.documentElement.clientHeight
    let scrollHeight = document.documentElement.scrollHeight
    let addEventListenerScrollNumber = 150;
    // console.log(scrollTop, clientHeight, scrollHeight);

    // 滚动到底部
    if( scrollHeight == clientHeight + scrollTop ){
        message.info('已经到底啦！')
    }
    if( scrollTop > addEventListenerScrollNumber ){
        
        console.log('动起来');
        
    }
}



