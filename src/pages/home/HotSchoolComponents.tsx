import './style.less';
import { IconFont } from '@/utils';
import { Radio} from "antd";
import { RightOutlined } from '@ant-design/icons';
import niujindaxue from "../../assets/images/niujindaxuelogo.jpeg";
import jianqiaodaxue from "../../assets/images/jianqiaodaxuelogo.webp";
import dglgxy from "../../assets/images/dglgxy.jpg";
import lddxxy from '../../assets/images/lddxxy.webp';
import adbdx from '../../assets/images/adbdx.webp';
import mcstdx from '../../assets/images/mcstdx.webp';
import mjedx from '../../assets/images/mjedx.png';
import mebdx from '../../assets/images/mebdx.webp';
import ldgwxy from '../../assets/images/ldgwxy.webp';

export default function Index() {
  return (
    <div className="row">
        <div className="hotSchool">
          <div className="titles">
            <span>热门院校</span>
            <div className="hotSchoolTbsDiv">
              <Radio.Group
                options={ [
                  { label: '英国', value: '1' },
                  { label: '美国', value: '2' },
                  { label: '澳大利亚', value: '3' },
                  { label: '加拿大', value: '4' },
                  { label: '日本', value: '5' },
                  { label: '中国香港', value: '6' },
                  { label: '韩国', value: '7' },
                  { label: '新加坡', value: '8' },
                  { label: '意大利', value: '9' },
                  { label: '德国', value: '10' },
                  { label: '法国', value: '11' },
                ]} 
                defaultValue={'1'}
                optionType="button"
                buttonStyle="solid"
              />
            </div>
            <div className="moreSc"><a>全球院校 <RightOutlined /></a></div>
          </div>
          <div className="hotSchoolDiv">
            <div className="hotSchoolLeft">
              <h5>2023QS世界大学排行榜</h5>
              <table>
                <thead>
                  <tr>
                    <th style={{width: 60}}>排名</th>
                    <th>学校</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <p>牛津大学</p>
                      <p><i>Oxford</i></p>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <p>剑桥大学</p>
                      <p><i>Cambridge University </i></p>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <p>帝国理工学院</p>
                      <p><i>Imperial College </i></p>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      <p>伦敦大学学院</p>
                      <p><i>University College London </i></p>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>
                      <p>爱丁堡大学</p>
                      <p><i>University of Edinburgh </i></p>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>
                      <p>曼彻斯特大学</p>
                      <p><i>University of Manchester </i></p>
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>
                      <p>伦敦国王学院</p>
                      <p><i>King's College London </i></p>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={2}>
                      <a>查看全部</a>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="hotSchoolRight">
              <dl>
                <dt>
                  <img src={niujindaxue} />
                </dt>
                <dd>
                  <p>牛津大学</p>
                  <p><i>Oxford</i></p>
                  <p><span>有<strong>39467</strong>个申请者了解过该校</span></p>
                  <div className="topaffix">
                    <IconFont type='icon-shuqian' />
                    1
                  </div>
                </dd>
              </dl>
              <dl>
                <dt>
                  <img src={jianqiaodaxue} alt="" />
                </dt>
                <dd>
                  <p>剑桥大学</p>
                  <p><i>Cambridge University</i></p>
                  <p><span>有<strong>39467</strong>个申请者了解过该校</span></p>
                  <div className="topaffix">
                    <IconFont type='icon-shuqian' />
                    2
                  </div>
                </dd>
              </dl>
              <dl>
                <dt>
                  <img src={dglgxy} alt="" />
                </dt>
                <dd>
                  <p>帝国理工学院</p>
                  <p><i>Imperial College </i></p>
                  <p><span>有<strong>39467</strong>个申请者了解过该校</span></p>
                  <div className="topaffix">
                    <IconFont type='icon-shuqian' />
                    3
                  </div>
                </dd>
              </dl>
              <dl>
                <dt>
                  <img src={lddxxy} alt="" />
                </dt>
                <dd>
                  <p>伦敦大学学院 </p>
                  <p><i>University College London </i></p>
                  <p><span>有<strong>39467</strong>个申请者了解过该校</span></p>
                  <div className="topaffix">
                    <IconFont type='icon-shuqian' />
                    3
                  </div>
                </dd>
              </dl>
              <dl>
                <dt>
                  <img src={adbdx} alt="" />
                </dt>
                <dd>
                  <p>爱丁堡大学  </p>
                  <p><i>University of Edinburgh  </i></p>
                  <p><span>有<strong>39467</strong>个申请者了解过该校</span></p>
                  <div className="topaffix">
                    <IconFont type='icon-shuqian' />
                    3
                  </div>
                </dd>
              </dl>
              <dl>
                <dt>
                  <img src={mcstdx} alt="" />
                </dt>
                <dd>
                  <p>曼彻斯特大学  </p>
                  <p><i>University of Manchester </i></p>
                  <p><span>有<strong>39467</strong>个申请者了解过该校</span></p>
                  <div className="topaffix">
                    <IconFont type='icon-shuqian' />
                    3
                  </div>
                </dd>
              </dl>
              <dl>
                <dt>
                  <img src={mjedx} alt="" />
                </dt>
                <dd>
                  <p>麦吉尔大学  </p>
                  <p><i>Mcgill </i></p>
                  <p><span>有<strong>39467</strong>个申请者了解过该校</span></p>
                  <div className="topaffix">
                    <IconFont type='icon-shuqian' />
                    3
                  </div>
                </dd>
              </dl>
              <dl>
                <dt>
                  <img src={mebdx} alt="" />
                </dt>
                <dd>
                  <p>墨尔本大学  </p>
                  <p><i>University of Melbourne </i></p>
                  <p><span>有<strong>39467</strong>个申请者了解过该校</span></p>
                  <div className="topaffix">
                    <IconFont type='icon-shuqian' />
                    3
                  </div>
                </dd>
              </dl>
              <dl>
                <dt>
                  <img src={ldgwxy} alt="" />
                </dt>
                <dd>
                  <p>伦敦国王学院  </p>
                  <p><i>King's College London</i></p>
                  <p><span>有<strong>39467</strong>个申请者了解过该校</span></p>
                  <div className="topaffix">
                    <IconFont type='icon-shuqian' />
                    3
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
  );
}
