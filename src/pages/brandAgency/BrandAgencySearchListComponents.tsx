import './style.less';
import { Rate, Button, Pagination } from 'antd';
import offerimg from './../../assets/images/51offerimg.png';
import chengIcon from './../../assets/images/chengIcon.png';
import shiziIcon from './../../assets/images/shiziIcon.png';
import hotkcfwimg from '../../assets/images/hotkcfwimg.png';

export default function Index() {

    // 筛选结果
    const RenderSearchResultListItem: any = () => {
        return [1,2,3,4,5].map((v, k)=>{
            return <div key={k} className="searchResultListDiv">
                <div className="searchResultListItem">
                    <dl>
                        <dt>
                            <img src={offerimg} alt="" />
                        </dt>
                        <dd>
                            <h2>51 OFFER <span><img src={chengIcon} /> 5年</span></h2>
                            <div className="offertext">
                                <div> 成立时间：2004 <i>年</i> </div>
                                <div>
                                    <div className="szzxDiv">
                                        <span><img src={shiziIcon} />500-700 <i>师资</i> </span>
                                        <span>7595 <i>人咨询过</i> </span>
                                    </div>
                                </div>
                            </div>
                            <div className="offertext">
                                <div> 办理国家：<i>英国/美国/加拿大/澳大利亚</i> </div>
                            </div>
                            <div className="offertext">
                                <div> 成功案例：<i>10000+</i> </div>
                            </div>
                            <div className="offertext">
                                <div> 综合评价：<Rate value={4} disabled style={{color: '#FF723F'}}/> <span className='offerRate'>9.2分</span></div>
                            </div>
                        </dd>
                        <dd className='offerMoreBtnDiv'>
                            <Button ghost type='primary'>了解详情</Button>
                            <div className="yhqBtn"><span>领取优惠券</span></div>
                        </dd>
                    </dl>
                </div>
            </div>
        })
    }

    // 热门课程服务
    const RenderSearchResultItem: any = () => {
        return <>
            <div className="searchResultDiv">
                <p>
                    <span>热门课程服务</span>
                </p>
            </div>
            <div className="searchResultItemDiv">
                {[1,2,3,4].map((v, k)=>{
                    return <dl key={k}>
                        <dt>
                            <img src={hotkcfwimg} />
                        </dt>
                        <dd>
                            <h5>艺术类作品集辅导 (线上/线下)</h5>
                            <p>7595人咨询过</p>
                            <p><span>¥ 6-7万</span></p>
                        </dd>
                    </dl>
                })}
            </div>
        </>
    }

    // 机构最新动态
    const RenderHotNewsItem: any = () => {
        return <>
            <div className="searchResultDiv" style={{margin: '30px 0 30px 0'}}>
                <p>
                    <span>机构最新动态 </span>
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
                            <span style={{background: backgroundColor}}>{index+1}</span>济南哪里有雅思培训暑期培训班…
                        </li>
                    })}
                </ul>
            </div>
        </>
    }
    return (
        <div className="row">
            <div className="BrandAgencySearchListDiv">
                <div className="BrandAgencySearchListDivLeft">
                    <div className="searchResultDiv">
                        <p>
                            <span>筛选结果</span>
                            共找到 <i>37</i> 个符合条件的品牌机构
                        </p>
                    </div>
                    {/* 筛选结果 */}
                    <RenderSearchResultListItem />
                </div>
                <div className="BrandAgencySearchListDivRight">
                    {/* 热门课程服务 */}
                    <RenderSearchResultItem />
                    {/* 机构最新动态 */}
                    <RenderHotNewsItem />
                </div>
                <div className="clear"></div>
            </div>
            <center>
                <Pagination defaultCurrent={1} total={50} />
            </center>
        </div>
    );
}
