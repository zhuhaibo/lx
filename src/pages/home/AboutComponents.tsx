import './style.less';
import { Row, Col } from "antd";
export default function Index() {
  return (
    <div className="aboutDiv">
        <div className="row">
          <div className="titles">
            <span>关于我们</span>
          </div>
          <div className="aboutListDiv">
            <Row gutter={20}>
              <Col span={6} className='itemAboutDiv'>
                <dl>
                  <dt>申</dt>
                  <dd>
                    <h5>审核严谨</h5>
                    <p>机构甄选，申请材料 必须完善</p>
                  </dd>
                </dl>
              </Col>
              <Col span={6} className='itemAboutDiv'>
                <dl>
                  <dt>审</dt>
                  <dd>
                    <h5>资质认证</h5>
                    <p>入驻机构，均需上门 核查相应资质</p>
                  </dd>
                </dl>
              </Col>
              <Col span={6} className='itemAboutDiv'>
                <dl>
                  <dt>监</dt>
                  <dd>
                    <h5>服务监管</h5>
                    <p>服务过程监管，服务方 必须接受平台协议</p>
                  </dd>
                </dl>
              </Col>
              <Col span={6} className='itemAboutDiv'>
                <dl>
                  <dt>保</dt>
                  <dd>
                    <h5>五星保障</h5>
                    <p>全程担保客户利益，直 至录取</p>
                  </dd>
                </dl>
              </Col>
            </Row>
          </div>
          <div className="aboutInfo">
            <p>
              甄选留学专注于留学申请规划，帮助客户筛选专业服务机构，匹配对时口院校的第三方服务平台。公司成立于2018年，由留学海归，资深留学专家等人才组成。平台入驻
              100多家知名留学、语培机构，2000余名海外学长，及500余名优秀从业顾问，积累了大量真实留学咨询申请案例，同时借助大数据能够精准匹配机目条件成功案例的服
              务方，帮助客户解决留学规划不清晰，选择难等问题。
            </p>
            <p><a>了解更多</a></p>
          </div>
        </div>
    </div>
  );
}