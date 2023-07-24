import './style.less'
import '@/global.less';

import { EnvironmentOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import { Breadcrumb, Radio } from 'antd';
import {useState} from 'react';



export default function Index() {
    
    const [searchData, setSearchData] = useState({
        // 机构类型
        JGLXArr: {
            checked: '1',
            list: [
                { label: '全部', value: '1' },
                { label: '留学', value: '2' },
                { label: '艺术留学', value: '3' },
                { label: '国际课程', value: '4' },
                { label: '雅思/托福', value: '5' },
                { label: '小语种', value: '6' },
                { label: '国际学校', value: '7' }
            ]
        },
        // 所在城市
        SZCSArr: {
            checked: '1',
            list: [
                { label: '北京', value: '1' },
                { label: '上海', value: '2' },
                { label: '广州', value: '3' },
                { label: '深圳', value: '4' },
                { label: '南京', value: '5' },
                { label: '杭州', value: '6' },
                { label: '武汉', value: '7' },
                { label: '成都', value: '8' },
                { label: '重庆', value: '9' },
                { label: '武汉', value: '10' },
                { label: '武汉', value: '11' },
                { label: '武汉', value: '12' },
                { label: '武汉', value: '13' },
                { label: '武汉', value: '14' },
                { label: '北京', value: '15' },
                { label: '上海', value: '2' },
                { label: '广州', value: '3' },
                { label: '深圳', value: '4' },
                { label: '南京', value: '5' },
                { label: '杭州', value: '6' },
                { label: '武汉', value: '7' },
                { label: '成都', value: '8' },
                { label: '重庆', value: '9' },
                { label: '武汉', value: '10' },
                { label: '武汉', value: '11' },
                { label: '武汉', value: '12' },
                { label: '武汉', value: '13' },
                { label: '武汉', value: '14' },
            ]
        }
    });

    return (
        <div className="row">
            <div className="BrandAgencySearchDiv">
                <div className="BrandAgencySearchDivLeft">
                    <div className="mbxDiv">
                        <EnvironmentOutlined className='searchThisAddressIcon' />
                        <Breadcrumb 
                            style={{left: 'left'}} 
                            items={[
                                { href: '/home', title: <span>首页</span> },
                                { title: '品牌机构' },
                            ]}
                        />
                    </div>
                    <div className="BrandAgencySearch">
                        <div className="searchItem">
                            <div className="hotSchoolTbsDiv">
                                <strong>机构类型</strong>
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
                                <strong>所在城市</strong>
                                <ul>
                                    {searchData.SZCSArr.list.map((v: any, index: any)=>{
                                        return <li key={index} className={searchData.SZCSArr.checked == v.value ? 'active' : ''}>{v.label}</li>
                                    })}
                                    <li><DownOutlined /></li>
                                    <li><UpOutlined /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="searchItem" style={{marginTop: 30}}>
                            <div className="hotSchoolTbsDiv">
                                <strong>您已选择</strong>
                                <ul>
                                    <li className='active'>机构类型：留学</li>
                                    <li className='active'>所在城市：北京</li>
                                    <li className='active emptyBtn'>清空筛选条件</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="BrandAgencySearchDivRight">
                    <div className="basdTitle">
                        <strong>15667</strong>位学员
                        <p>正在通过甄选留学找机构</p>
                    </div>
                    <div className="basdForm">
                        <ul>
                            <li>
                                <input placeholder='称呼（必填）' />
                                <input placeholder='城市' />
                            </li>
                            <li>
                                <input placeholder='意向国家（必填）' />
                                <input placeholder='申请专业' />
                            </li>
                            <li>
                                <input placeholder='手机号，接受免费规划方案（必填）' style={{width: '100%'}} />
                            </li>
                            <li>
                                <div className="basdBtn">立即免费规划</div>
                                <p>正在通过甄选留学找机构</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  );
}
