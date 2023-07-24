import './style.less';
import { Radio, Card, Row, Col, Rate } from "antd";
import { RightOutlined } from '@ant-design/icons';
import chengIcon from '../../assets/images/chengIcon.png';
import ba1 from '../../assets/images/ba1.png';
import ba2 from '../../assets/images/ba2.png';
import ba3 from '../../assets/images/ba3.png';
import ba4 from '../../assets/images/ba4.png';
import ba5 from '../../assets/images/ba5.png';
export default function Index() {
  // 品牌机构Data 
  const brandAgencyData = [
    { img: ba1, name: '51OFFER留学', amount: 5, age: 5, rate: 4 },
    { img: ba2, name: '斯芬克国际艺术教育', amount: 5, age: 5, rate: 4 },
    { img: ba3, name: 'AGC国际艺术教育', amount: 5, age: 5, rate: 4 },
    { img: ba4, name: 'SIA国际艺术教育', amount: 5, age: 5, rate: 4 },
    { img: ba5, name: 'ROSSO艺术留学', amount: 5, age: 5, rate: 4 },
    { img: ba2, name: '斯芬克国际艺术教育', amount: 5, age: 5, rate: 4 },
    { img: ba3, name: 'AGC国际艺术教育', amount: 5, age: 5, rate: 4 },
    { img: ba4, name: 'SIA国际艺术教育', amount: 5, age: 5, rate: 4 },
  ]
  return (
    <div className="row">
        <div className="brandAgency">
          <div className="titles">
            <span>品牌机构</span>
            <div className="hotSchoolTbsDiv">
              <Radio.Group
                options={ [
                  { label: '艺术作品集', value: '1' },
                  { label: '传统留学', value: '2' },
                  { label: '雅思/托福', value: '3' },
                  { label: '国际课程', value: '4' },
                ]} 
                defaultValue={'1'}
                optionType="button"
                buttonStyle="solid"
              />
            </div>
            <div className="moreSc"><a>全部品牌 <RightOutlined /></a></div>
          </div>
          <div className="agencyListDiv">
            <Row gutter={20}>
              {brandAgencyData?.map((item: any, index: any)=>{
                return <Col span={6} key={index}>
                  <Card
                    hoverable
                    style={{ width: '100%', marginBottom: 20 }}
                    cover={<div className='agencyImg'><img alt="甄选留学" src={item.img} /></div>}
                    className='agencyCardDiv'
                  >
                    <div className="cardInfos">
                      <h5>{item.name}</h5>
                      <div>
                        <div className="RateP">
                          <Rate className='RateComp' value={item.rate} disabled /> 
                          <span className='rateSpan'>{item.rate}分</span>
                        </div>
                        <div className="chengIconDiv">
                          <img src={chengIcon} alt="" />
                          5 年
                        </div>
                      </div>
                      <div style={{marginTop: 10}}>
                        <div className="cpInfo">
                          课程产品 （5）
                        </div>
                        <div className="cpBtnDiv">
                          <div className="yhqBtn">领取优惠券</div>
                        </div>
                      </div>
                    </div>

                  </Card>
                </Col>
              })}
            </Row>
            
          </div>
        </div>
    </div>
  );
}
