import './style.less';
import {  Carousel, Tag } from "antd";
import actricImg from '../../assets/images/actricImg.png';
import paihangbang from '../../assets/images/paihangbang@2x.png';
import jisuanqi from '../../assets/images/jisuanqi@2x.png';
import ahuobimeijin from '../../assets/images/a-huobimeijin@2x.png';
import kaoshi from '../../assets/images/kaoshi@2x.png';
import duibi from '../../assets/images/duibi@2x.png';
import mianshiguanli from '../../assets/images/mianshiguanli@2x.png';
import kewenbeisong from '../../assets/images/kewenbeisong@2x.png';
import zuoyeguanli from '../../assets/images/zuoyeguanli@2x.png';
import wentim from '../../assets/images/wenti-m@2x.png';

export default function Index() {
  return (
    <div className="row">
        <div className="studyAbroadPolicy">
          <div className="studyAbroadPolicyLeft">
            <div className="titles">
              <span>留学政策</span>
            </div>
            <div className="studyAbroadPolicyMain">
              <div className="studyAbroadPolicyImg">
              <Carousel autoplay={true}>
                <div>
                  <dl>
                    <dt>
                      <img src={actricImg} alt="" />
                      <p>2022全球最佳留学城市排名发布!</p>
                    </dt>
                    <dd>
                      新东方雅思频道特为大家整理了雅思口语话题预文，供各位的频道特为大家频道特为大家......
                      <div className="moreActr">【详情】</div>
                    </dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>
                      <img src={actricImg} alt="" />
                      <p>2022全球最佳留学城市排名发布!</p>
                    </dt>
                    <dd>
                      新东方雅思频道特为大家整理了雅思口语话题预文，供各位的频道特为大家频道特为大家......
                      <div className="moreActr">【详情】</div>
                    </dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>
                      <img src={actricImg} alt="" />
                      <p>2022全球最佳留学城市排名发布!</p>
                    </dt>
                    <dd>
                      新东方雅思频道特为大家整理了雅思口语话题预文，供各位的频道特为大家频道特为大家......
                      <div className="moreActr">【详情】</div>
                    </dd>
                  </dl>
                </div>
              </Carousel>
              </div>
              <div className="studyAbroadPolicyAcitel">
                <h5><Tag color="#FFA917">头条</Tag> <a href="#">英国签证政策放宽，留学生毕业轻松留英！</a></h5>
                <ul>
                  <li><a href="#">澳洲留学工签政策调整!附官方热门答疑</a></li>
                  <li><a href="#">重磅!香港发布最宽松工签政策:取消配额限制</a></li>
                  <li><a href="#">海外浙籍侨胞和留学生这些国家再次调整移民!</a></li>
                  <li><a href="#">2023年上海落户最新政策!引进/留学生落户条件</a></li>
                  <li><a href="#">澳洲留学工签政策调整!</a></li>
                  <li><a href="#">重磅!香港发布最宽松工签政策:取消配额限制</a></li>
                  <li><a href="#">海外浙籍侨胞和留学生这些国家再次调整移民!</a></li>
                  <li><a href="#">2023年上海落户最新政策!引进/留学生落户条件</a></li>
                </ul>
                <ul>
                  <li><a href="#">澳洲留学工签政策调整!附官方热门答疑</a></li>
                  <li><a href="#">重磅!香港发布最宽松工签政策:取消配额限制</a></li>
                  <li><a href="#">海外浙籍侨胞和留学生这些国家再次调整移民!</a></li>
                  <li><a href="#">2023年上海落户最新政策!引进/留学生落户条件</a></li>
                  <li><a href="#">澳洲留学工签政策调整!</a></li>
                  <li><a href="#">重磅!香港发布最宽松工签政策:取消配额限制</a></li>
                  <li><a href="#">海外浙籍侨胞和留学生这些国家再次调整移民!</a></li>
                  <li><a href="#">2023年上海落户最新政策!引进/留学生落户条件</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="studyAbroadPolicyRight">
            <div className="titles">
              <span>留学工具箱</span>
            </div>
            <div className="studyBoxIcons">
              <ul>
                <li>
                  <img src={paihangbang} alt="" />
                  <p>排名查询</p>
                </li>
                <li>
                  <img src={jisuanqi} alt="" />
                  <p>雅托真题</p>
                </li>
                <li>
                  <img src={ahuobimeijin} alt="" />
                  <p>背题活动</p>
                </li>
                <li>
                  <img src={kaoshi} alt="" />
                  <p>雅托真题</p>
                </li>
                <li>
                  <img src={duibi} alt="" />
                  <p>中介对比</p>
                </li>
                <li>
                  <img src={mianshiguanli} alt="" />
                  <p>面试技巧</p>
                </li>
                <li>
                  <img src={kewenbeisong} alt="" />
                  <p>背题活动</p>
                </li>
                <li>
                  <img src={zuoyeguanli} alt="" />
                  <p>国际课程</p>
                </li>
                <li>
                  <img src={wentim} alt="" />
                  <p>常见100问</p>
                </li>
              </ul>
            </div>
            


          </div>
        </div>
        <div className="clear"></div>
    </div>
  );
}
