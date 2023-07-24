import './style.less';
import { Space } from "antd";
import Texty from 'rc-texty';
import { history } from 'umi';
import QueueAnim from 'rc-queue-anim';
import { CaretDownOutlined } from '@ant-design/icons';
export default function Index() {
  return (
      <div className='homePageBanner'>
        <QueueAnim type='alpha' delay={400}>
          <div  key="menus" className="menus">
            <div className="row">
              <div className="lxDiv">
                <Space>  
                  <span style={{paddingLeft: 40}}>留学好帮手</span>
                  <CaretDownOutlined />
                </Space>
              </div>
              <ul>
                <li onClick={()=> history.push('/brandAgency')}>找品牌机构</li>
                <li onClick={()=> history.push('/selectSchool')}>选学校</li>
                <li>找专业</li>
                <li>产品/服务</li>
                <li>录取预估</li>
                <li>留学情报局</li>
              </ul>
            </div>
          </div>
        </QueueAnim>
        <div className="row flex" style={{height: '100%'}}>
          <div className="bannerLeft">
            <div className="leftMenusCity">
              <QueueAnim type='scale' delay={300}>
                <dl key='lxmdd'>
                  <dt>留学目的地</dt>
                  <dd>
                    <a href="#">英国</a>
                    <a href="#">加拿大</a>
                    <a href="#">荷兰</a>
                    <a href="#">新加坡</a>
                    <a href="#">新西兰</a>
                    <a href="#">澳大利亚</a>
                    <a href="#">法国</a>
                    <a href="#">瑞士</a>
                    <a href="#">日本</a>
                    <a href="#">意大利</a>
                    <a href="#">美国</a>
                    <a href="#">德国</a>
                    <a href="#">韩国</a>
                    <a href="#">中国香港</a>
                    <a href="#">中国澳门</a>
                  </dd>
                </dl>
                <dl key='rdgz'>
                  <dt>热点关注</dt>
                  <dd>
                    <p>2023 QS世界大学排名</p>
                    <p>2023 QS世界大学艺术设计排名</p>
                  </dd>
                  <dd>
                    <p>留学申请流程及要求</p>
                  </dd>
                </dl>
              </QueueAnim>
            </div>
          </div>
          <div className="bannerRight">
            <div className='bannerText'>
              <Texty 
                type='flash'
                mode='smooth'
              >
                2023 QS世界大学 艺术设计排名发布
              </Texty>
            </div>
            <i>
            <Texty 
                type='bottom'
                mode='sync'
              >
                -- 2023 QS Design University Art and Design Ranking Release --
              </Texty>
            </i>
          </div>
        </div>
      </div>
  );
}
