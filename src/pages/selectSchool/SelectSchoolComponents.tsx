import './style.less'
import '@/global.less';
import { EnvironmentOutlined } from '@ant-design/icons';
import { Breadcrumb, Radio } from 'antd';
import {useState} from 'react';
import xuexiaoImg1 from '../../assets/images/xuexiaoImg1.png';
import xuexiaoImg2 from '../../assets/images/xuexiaoimg2.png';


export default function Index() {
    
    const [searchData, setSearchData] = useState({
        // 选择国家
        JGLXArr: {
            checked: '1',
            list: [
                { label: '全国', value: '1' },
                { label: '英国', value: '2' },
                { label: '美国', value: '3' },
                { label: '日本', value: '4' },
                { label: '加拿大', value: '5' },
                { label: '法国', value: '6' },
                { label: '孟加拉国', value: '7' }
            ]
        },
        // 院校类型
        SZCSArr: {
            checked: '1',
            list: [
                { label: '全部', value: '1' },
                { label: '综合院校', value: '3' },
                { label: '艺术院校', value: '2' },
            ]
        },
        //世界排名
        SJPMArr : {
            checked: '1',
            list: [
                { label: '全部', value: '1' },
                { label: '1-20', value: '4' },
                { label: '20-50', value: '2' },
                { label: '50-100', value: '3' },
                { label: '100-150', value: '4' },
                { label: '150-200', value: '5' },
                { label: '200+', value: '6' },
            ]
        }

    });

    return (
        <div className="selectSchoolPage">
            <div className="row">
                <div className="selectSchoolDiv">
                    <div className="selectSchoolDivLeft">
                        <div className="mbxDiv">
                            <EnvironmentOutlined className='searchThisAddressIcon' />
                            <Breadcrumb 
                                style={{left: 'left'}} 
                                items={[
                                    { href: '/home', title: <span>首页</span> },
                                    { title: '选学校' },
                                ]}
                            />
                        </div>
                        <div className="selectSchool">
                            <div className="searchItem">
                                <div className="hotSchoolTbsDiv">
                                    <strong>选择国家</strong>
                                    <Radio.Group
                                        options={searchData.JGLXArr.list} 
                                        defaultValue={'1'}
                                        optionType="button"
                                        buttonStyle="solid"
                                    />
                                </div>
                            </div>
                            <div className="searchItem">
                                <div className="hotSchoolTbsDiv">
                                    <strong>院校类型</strong>
                                    <ul>
                                        {searchData.SZCSArr.list.map((v: any, index: any)=>{
                                            return <li key={index} className={searchData.SZCSArr.checked == v.value ? 'active' : ''}>{v.label}</li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="searchItem">
                                <div className="hotSchoolTbsDiv">
                                    <strong>世界排名</strong>
                                    <ul>
                                        {searchData.SJPMArr.list.map((v: any, index: any)=>{
                                            return <li key={index} className={searchData.SJPMArr.checked == v.value ? 'active' : ''}>{v.label}</li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="searchItem" style={{marginTop: 30}}>
                                <div className="hotSchoolTbsDiv">
                                    <strong>您已选择</strong>
                                    <ul>
                                        <li className='active'>选择国家：美国</li>
                                        <li className='active'>院校类型：综合院校</li>
                                        <li className='active'>世界排名：10-20</li>
                                        <li className='active emptyBtn'>清空筛选条件</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="searchItem" style={{marginTop: 30}}>
                                <div className="hotSchoolTbsDiv">
                                    <strong>&nbsp;</strong>
                                    共找到 <span>586</span> 个符合条件的院校
                                </div>
                            </div>

                            
                        </div>
                    </div>
                    <div className="selectSchoolDivRight">
                        <img src={xuexiaoImg1} alt="" />
                        <img src={xuexiaoImg2} alt="" />
                    </div>
                </div>
            </div>
        </div>
  );
}
