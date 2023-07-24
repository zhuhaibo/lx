import './style.less';
import { Button, Pagination, Space, Checkbox } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import hfdx from './../../assets/images/hfdx.png';
import {IconFont} from '@/utils';


export default function Index() {

    // 筛选结果
    const RenderSearchResultListItem: any = () => {
        return [1,2,3,4,5].map((v, k)=>{
            return <div key={k} className="searchResultListDiv">
                <div className="searchResultListItem">
                    <dl>
                        <dt>
                            <img src={hfdx} alt="" />
                        </dt>
                        <dd>
                            <h2>哈佛大学</h2>
                            <p><span>Harvard University</span></p>
                            <p style={{margin: '10px 0'}}><EnvironmentOutlined className='searchThisAddressIcon' /> 美国-马萨诸塞州-波士顿</p>
                            <p>
                                <Space size={20}>
                                    <a href="#">
                                        <IconFont type='icon-file-common' style={{ fontSize: 15, marginRight: 5 }} />
                                        学校简介
                                    </a>
                                    <a href="#">
                                        <IconFont type='icon-layers' style={{ fontSize: 15, marginRight: 5 }} />
                                        专业设置
                                    </a>
                                    <a href="#">
                                        <IconFont type='icon-file' style={{ fontSize: 15, marginRight: 5 }} />
                                        申请要求
                                    </a>
                                </Space>
                            </p>
                        </dd>
                        <dd className='offerMoreBtnDiv'>
                            <div className="yhqBtn"><span>查看详情</span></div>
                            <Button><Checkbox><span style={{fontSize: 12, color: '#888'}}>院校对比</span></Checkbox></Button>
                        </dd>
                    </dl>
                </div>
            </div>
        })
    }
    // 权威世界大学排名榜单
    const RenderHotNewsItem: any = () => {
        return <>
            <div className="searchResultDiv" style={{margin: '30px 0 30px 0'}}>
                <p>
                    <span style={{color: '#FF723F', borderColor: '#FF723F'}}>权威世界大学排名榜单 </span>
                    <i className='moreBtn'>更多》</i>
                </p>
            </div>
            <div className="searchHotNewsDiv">
                <ul>
                    {[1,2,3,4,5,6].map((item: any, index: any)=>{
                        let backgroundColor = 'D6D6D6';
                        if( index == 0 ){
                            backgroundColor = '#FFB44D';
                        }
                        if( index == 1 ){
                            backgroundColor = '#FADB14';
                        }
                        if( index == 2 ){
                            backgroundColor = '#69B1FF';
                        }
                        return <li key={index}>
                            <span style={{background: backgroundColor}}>{index+1}</span>2023 QS 世界大学排名
                        </li>
                    })}
                </ul>
            </div>
        </>
    }
    // 院校对比
    const RenderComparedDiv: any = () => {
        return <div className="comparedDiv">
            <div className="row">
                RenderComparedDiv
            </div>
        </div>
    }
    return (
        <div className="selectSchoolPage">
            {/* 院校列表 & 榜单 & 分页 */}
            <div className="row">
                <div className="selectSchoolListDiv">
                    <div className="selectSchoolListDivLeft">
                        {/* 筛选结果 */}
                        <RenderSearchResultListItem />
                    </div>
                    <div className="selectSchoolListDivRight">
                        {/* 权威世界大学排名榜单 */}
                        <RenderHotNewsItem />
                    </div>
                    <div className="clear"></div>
                </div>
                <center>
                    <Pagination defaultCurrent={1} total={50} />
                </center>
            </div>
            {/* 院校对比 Flex Div */}
            <RenderComparedDiv />
        </div>
    );
}
