import './style.less'
import React from 'react';
import { Col, Row, Divider, Pagination } from 'antd';
import { ClockCircleOutlined, EyeOutlined } from '@ant-design/icons';

import testImg from '../../assets/images/schoolDatails/banner1.png';


export default function Index() {
    let activeIndex = 0

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

    const dataList = [
        {
            id: 1,
            img: '',
            time: '2023-01-01',
            num: 11,
            title: '英国突发两项留学新政策！针对所有国际生！', 
            content: '英国突发两项留学新政策！针对所有国际生！英国突发两项留学新政策！针对所有国际生！英国突发两项留学新政策！针对所有国际生！'
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

    return (
        <div className="intelligenceDiv">
            
            <Row gutter={16} className="nav">
                { 
                    navList?.map((item: any, index: any)=>{ 
                        return  <Col span={3} key={index} className={activeIndex === index ? 'active' : null}>{item.name}</Col>
                    }) 
                }
            </Row>

            <Divider style={{margin: '0px'}} />

            
            {
                dataList?.map((item: any, index: any)=>{
                    return <div className='items'>
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
            

            
            <div className="clearfloat" >&nbsp;</div>

            <Pagination defaultCurrent={1} total={50} />


        </div>
    )

}
