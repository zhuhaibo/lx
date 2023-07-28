import './style.less'
import { useState } from 'react';
import { Col, Row, Divider, Pagination, Tabs } from 'antd';
import { ClockCircleOutlined, EyeOutlined } from '@ant-design/icons';

import testImg from '../../assets/images/schoolDatails/banner1.png';
import icon1 from '../../assets/images/intelligence/icon1.png';
import icon2 from '../../assets/images/intelligence/icon2.png';
import icon3 from '../../assets/images/intelligence/icon3.png';
import icon4 from '../../assets/images/intelligence/icon4.png';
import icon5 from '../../assets/images/intelligence/icon5.png';
import icon6 from '../../assets/images/intelligence/icon6.png';
import icon7 from '../../assets/images/intelligence/icon7.png';
import icon8 from '../../assets/images/intelligence/icon8.png';
import icon9 from '../../assets/images/intelligence/icon9.png';


export default function Index() {

    let activeIndex = 0 // 顶部菜单
    let currentHot = 1 // 热点


    // 顶部菜单
    const navList = [
        {
            id: 1,
            name: '全部'
        },{
            id: 2,
            name: '留学政策'
        },{
            id: 3,
            name: '留学指南'
        },{
            id: 4,
            name: '留学费用'
        },{
            id: 5,
            name: '留学生活'
        },{
            id: 6,
            name: '国际课程'
        },{
            id: 7,
            name: '标化成绩'
        },{
            id: 8,
            name: '留学作品集'
        },
    ]

    // 列表数据
    const dataList = [
        {
            id: 1,
            img: '',
            time: '2023-01-01',
            num: 11,
            title: '英国突发两项留学新政策！针对所有国际生！', 
            content: '英国突发两项留学新政策！针对所有国际生！英国突发两项留学新政策！针对所有国际生！英国突发两项留学新政策！针对所有国际生！英国突发两项留学新政策！针对所有国际生！英国突发两项留学新政策！针对所有国际生！英国突发两项留学新政策！针对所有国际生！英国突发两项留学新政策！针对所有国际生！英国突发两项留学新政策！针对所有国际生！英国突发两项留学新政策！针对所有国际生！英国突发两项留学新政策！针对所有国际生！英国突发两项留学新政策！针对所有国际生！英国突发两项留学新政策！针对所有国际生！'
        },
        {
            id: 2,
            img: '',
            time: '2021-10-23',
            num: 11,
            title: '英国突发两项留学新政策！针对所有国际生！', 
            content: '英国突发两项留学新政策！针对所有国际生！英国突发两项留学新政策！针对所有国际生！英国突发两项留学新政策！针对所有国际生！'
        },
        {
            id: 3,
            img: '',
            time: '2021-08-24',
            num: 11,
            title: '英国突发两项留学新政策！针对所有国际生！', 
            content: '英国突发两项留学新政策！针对所有国际生！英国突发两项留学新政策！针对所有国际生！英国突发两项留学新政策！针对所有国际生！'
        },
    ]

    // 工具箱
    const tools = [
        {
            name: '排名查询',
            img: icon1
        },{
            name: 'GPA计算机',
            img: icon2
        },{
            name: '费用预估',
            img: icon3
        },{
            name: '雅托真题',
            img: icon4
        },{
            name: '中介对比',
            img: icon5
        },{
            name: '面试技巧',
            img: icon6
        },{
            name: '背题活动',
            img: icon7
        },{
            name: '国际课程',
            img: icon8
        },{
            name: '常见100问',
            img: icon9
        },
    ]

    // 热点
    const hotTabs = [
        {
          key: '1',
          label: `年榜`,
        },
        {
          key: '2',
          label: `半年榜`,
        },
        {
          key: '3',
          label: `月榜`,
        },
    ]

    // 热点
    const hotList = [
        {
            img: icon1,
            title: '用于英国签证及移民的雅思考试成绩单重新寄送…',
            num: 1231,
        },
        {
            img: icon2,
            title: '关于举办第十九届留学英才招聘会暨国家留学…',
            num: 253,
        },
        {
            img: icon3,
            title: '托福考试攻略_出国留学_中国教育在线',
            num: 123,
        },
    ]



    const onChange = (key: number) => {
        currentHot = key
        console.log(currentHot, 'currentHot')
    }

    return (
        <div className="intelligenceDiv">
            
            <Row gutter={16} className="nav">
                { 
                    navList?.map((item: any, index: any)=>{ 
                        return  <Col span={3} key={index} className={activeIndex === index ? 'active_nav' : null}>{item.name}</Col>
                    }) 
                }
            </Row>

            <Divider style={{margin: '0px'}} />

            <div className='left_box'>
                {
                    dataList?.map((item: any, index: any)=>{
                        return  <div className='items' key={index}>
                                    <img src={testImg} alt="" className='items_img'/>
                                    <div className='items_content'>
                                        <h3 className='items_title'>{item.title}</h3>
                                        <p className='items_font'>{item.content}</p>
                                        <div className='items_icon'>
                                            <ClockCircleOutlined /> {item.time}
                                            &nbsp;&nbsp;&nbsp;
                                            <EyeOutlined /> {item.num} 次
                                        </div>
                                    </div>
                                </div>
                    })
                }
            </div>

            <div className='right_box'>

                <div className='tools'>
                    <h3 className='tools_title'>留学工具箱TOOLS</h3>
                    {
                        tools?.map((item: any, index: any)=>{
                            return  <div className='tools_item' key={index}>
                                        <img src={item.img} alt="" />
                                        <div>{item.name}</div>
                                    </div>
                        })
                    }
                    
                </div>


                <div className='hot'>
                    <h3 className='hot_title'>热点关注</h3>
                    <Tabs defaultActiveKey={currentHot} items={hotTabs} onChange={onChange} />
                    
                    {
                        hotList?.map((item: any, index: any)=>{
                            return  <div className='hot_items' key={index}>
                                        <img src={testImg} alt="" className='hot_img'/>
                                        <div className='hot_content'>
                                            <p className='hot_font'>{item.title}</p>
                                            <div className='hot_icon'>
                                                阅读量: {item.num} 
                                            </div>
                                        </div>
                                    </div>
                        })
                    }
                </div>
                
               
            </div>

            

            
            <div className="clearfloat" >&nbsp;</div>


            <Pagination defaultCurrent={1} total={50} />


        </div>
    )

}
