import './details.less'
import {
    Col,
    Row,
    Breadcrumb,
    Rate,
    Button,
    Table
} from 'antd';
import {
    ClockCircleOutlined,
    EyeOutlined,
    HomeOutlined,
    RightOutlined,
    DownOutlined,
    ZoomInOutlined
} from '@ant-design/icons';

import testImg from '../../assets/images/schoolDatails/banner1.png';
import testImg1 from '../../assets/images/schoolDatails/img6.png';


import icon1 from '../../assets/images/intelligence/icon1.png';
import icon2 from '../../assets/images/intelligence/icon2.png';
import icon3 from '../../assets/images/intelligence/icon3.png';
import icon4 from '../../assets/images/intelligence/icon4.png';
import icon5 from '../../assets/images/intelligence/icon5.png';
import icon6 from '../../assets/images/intelligence/icon6.png';
import icon7 from '../../assets/images/intelligence/icon7.png';
import icon8 from '../../assets/images/intelligence/icon8.png';
import icon9 from '../../assets/images/intelligence/icon9.png';

import img1 from '../../assets/images/schoolDatails/img1.png';
import img2 from '../../assets/images/schoolDatails/img2.png';
import img3 from '../../assets/images/schoolDatails/img3.png';
import img4 from '../../assets/images/schoolDatails/img4.png';
import img5 from '../../assets/images/schoolDatails/img5.png';



export default function Index() {

    let activeIndex = 0 // 顶部菜单
    let currentHot = 1 // 热点


    // 顶部菜单
    const navList = [
        {
            id: 1,
            name: '院校简介'
        },{
            id: 2,
            name: '开设专业'
        },{
            id: 3,
            name: '申请要求'
        },{
            id: 4,
            name: '校园风光'
        },{
            id: 5,
            name: '申请攻略'
        }
    ]
    
    // 排名相近的院校推荐
    const hotList = [
        {
            img: icon1,
            title: '皇家墨尔本理工大学皇家墨尔本理工大学',
            num: 'Royal Melbourne Institute …',
        },
        {
            img: icon2,
            title: '澳洲国立大学',
            num: 'Royal Melbourne Institute …Royal Melbourne Institute …',
        },
        {
            img: icon3,
            title: '南澳大学',
            num: 'Royal Melbourne Institute …',
        },
    ]

    // 面包屑
    const breadcrumb = [
        {
            title: <HomeOutlined />,
        },
        {
            // title: <a href="">首页</a>,
            title: '首页',
        },
        {
            // title: <a href="">找院校</a>,
            title: '找院校',
        },
        {
            title: '哈弗大学',
        },
    ]

    // 表格
    const columns = [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '住址',
          dataIndex: 'address',
          key: 'address',
        },
    ]

    // 表格
    const dataSource = [
        {
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号',
        },
        {
          key: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
        },
    ]

    // 学院风景
    const schoolList = [
        {
            url: testImg
        },
        {
            url: testImg
        },
        {
            url: testImg
        },
        {
            url: testImg
        },
        {
            url: testImg
        },
        {
            url: testImg
        },
        {
            url: testImg
        },
        {
            url: testImg
        },
        {
            url: testImg
        },
    ]

      
    return (
        <div className="schoolDatailsDIv">

            <div className='schoolDatails_banner'>
                <div className='banner_content'>
                    {/* <Breadcrumb items={breadcrumb} /> */}

                    <div className='banner_school'>
                        <div className='s_img'></div>
                        <div className='item'>
                            <p className='item1'>
                                哈弗大学
                                <span className='icons'> 私立 </span>
                            </p>
                            <p className='item2'>Harvard University</p>
                            <div className='item3'>
                                <img src={img3} alt="" className='item3_line' />
                                <div >美国-马萨诸塞州-波士顿</div>
                            </div>
                        </div>
                    </div>

                    <div className='datail'>
                        <div className='datail_item'>
                            <p className='datail_title mr_t'>托福: /</p>
                            <p className='mr_p'>雅思: 本5.5; 硕5.5-6.0</p>
                        </div> 
                        <div className='datail_item'>
                            <p className='datail_title mr_t'>申请难度</p>
                            <Rate allowHalf defaultValue={4.5} />
                        </div> 
                        <div className='datail_item'>
                            <p className='datail_title mr_t'>学费/年</p>
                            <p className='mr_p'>¥99.99</p>
                        </div> 
                        <div className='datail_item'>
                            <p className='datail_title mr_t'>申请截止日</p>
                            <p className='mr_p'>早: 1月1日</p>
                            <p >常规: 1月12日</p>
                        </div> 
                    </div>

                    <div className='banner_img'>
                        <div>4</div>
                        <div>QS</div>
                        <p>2023</p>

                    </div>
                </div>
            </div>



            <div className='schoolDatails_nav'>
                <div className='nav_row'>
                    <Row gutter={16} className="nav_row">
                        { 
                            navList?.map((item: any, index: any)=>{ 
                                return  <Col span={3} key={index} className={activeIndex === index ? 'active_nav' : 'nav_style'}>{item.name}</Col>
                            }) 
                        }
                    </Row>
                </div>
            </div>



                        
            <div className='schoolDatails_content'>

                <div className='left_box'>
                    <h3 className='article_title'>院校简介</h3>
                    <p className='article_content'>        哈佛大学是位于美国马萨诸塞州波士顿剑桥城的一所私立大学，同时是常春藤盟校成员之一。1636年由马萨诸塞州殖民地立法机关立案成立，迄今已是美国历史最悠久的高等学府，也是北美第一间和最古老的法人机构。该机构在1639年3月13日以一名毕业于英格兰剑桥大学的牧师约翰·哈佛之名，命名为哈佛学院，1780年哈佛学院更名为哈佛大学。哈佛大学是一所在世界上享有一流大学的声誉、财富和影响力的学校，被誉为美国政府的思想库，其商学院案例教学也盛名远播。在世界各报刊以及研究机构的排行榜中，仅次于英国剑桥大学。哈佛</p>
                    <Button> 展开全部 <DownOutlined /> </Button>
                    
                    <h3 className='article_title'>开设专业</h3>
                    <p className='article_sub_title'>本科生开设专业</p>
                    <Table dataSource={dataSource} columns={columns} />
                    <Button> 展开全部 <DownOutlined /> </Button>

                    <p className='article_sub_title'>研究生开设专业</p>
                    <Table dataSource={dataSource} columns={columns} />
                    <Button> 展开全部 <DownOutlined /> </Button>


                    <h3 className='article_title'>申请条件</h3>
                    <p className='article_content'>        哈佛大学是位于美国马萨诸塞州波士顿剑桥城的一所私立大学，同时是常春藤盟校成员之一。1636年由马萨诸塞州殖民地立法机关立案成立，迄今已是美国历史最悠久的高等学府，也是北美第一间和最古老的法人机构。该机构在1639年3月13日以一名毕业于英格兰剑桥大学的牧师约翰·哈佛之名，命名为哈佛学院，1780年哈佛学院更名为哈佛大学。哈佛大学是一所在世界上享有一流大学的声誉、财富和影响力的学校，被誉为美国政府的思想库，其商学院案例教学也盛名远播。在世界各报刊以及研究机构的排行榜中，仅次于英国剑桥大学。哈佛</p>
                    <Button> 展开全部 <DownOutlined /> </Button>


                    <h3 className='article_title'>校园风景</h3>
                    <Row gutter={15}>
                        {
                            schoolList?.map((item: any, index: any)=>{
                                return(
                                    <Col span={8}>
                                        <img src={item.url} alt=""  className='school_img' />
                                        <div className='school_img_model'>
                                            <ZoomInOutlined style={{fontSize: '40px'}}/>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>

                    <h3 className='article_title'>申请攻略</h3>
                    {
                        hotList?.map((item: any, index: any)=>{
                            return  <div className='top_items' key={index}>
                                        <img src={testImg} alt="" className='top_img'/>
                                        <div className='top_content'>
                                            <p className='top_font'>{item.title}</p>
                                            <div className='top_des'>
                                                <div style={{float: 'left'}}><ClockCircleOutlined /> 2023-12-09</div>
                                                <div style={{float: 'right'}}><EyeOutlined /> 99999次</div>
                                            </div>
                                        </div>
                                    </div>
                        })
                    }




                    




                    


                </div>



                <div className='right_box'>

                    <div className='tools'>
                        <div className='tools_img'></div>
                        <div className='tools_title'>
                            <p>我这种情况</p>
                            <p>能申请上伦敦艺术大学吗？</p>
                        </div>
                        <div className='tools_content'>
                            <p>无论你是国际高中，还是普高；</p>
                            <p>无论你的背景是985、211，还是普通本科院校；</p>
                            <p>无论你的语言成绩</p>
                            <p>GPA成绩、活动背景怎么样；</p>
                            <p>都会有一份专属你的留学规划方案</p>
                        </div>
                        <Button type="primary" shape="round"  size='large' >
                            免费订制留学方案
                        </Button>


                    </div>


                    <div className='top'>
                        <div className='top_title'>
                            <p>排名相近的院校推荐</p>
                            <div>换一批 <RightOutlined /> </div>
                        </div>
                        {
                            hotList?.map((item: any, index: any)=>{
                                return  <div className='top_items' key={index}>
                                            <img src={testImg} alt="" className='top_img'/>
                                            <div className='top_content'>
                                                <p className='top_font'>{item.title}</p>
                                                <div className='top_des'>
                                                    {item.num} 
                                                </div>
                                            </div>
                                        </div>
                            })
                        }
                        
                    </div>
                    
                
                </div>
            </div>

            
            
            <div className="clearfloat" >&nbsp;</div>




        </div>
    )

}
