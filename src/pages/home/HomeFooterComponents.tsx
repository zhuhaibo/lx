import './style.less';
import { logo } from '@/config';
import ewmDiv from '../../assets/images/ewm.png';
export default function Index() {
  return (
    <div className="homeFooter">
        <div className="row">
          <div className="footerLogoDiv">
              <div className="footerLogo">
                <img src={logo} alt="logo" />
              </div>
              <p>解决留学问题  找甄选留学！</p>
              <p>-   50W人次使用   -</p>
          </div>
          <ul>
            <li>关于我们</li>
            <li>联系我们</li>
            <li>品牌入驻</li>
            <li>使用协议</li>
            <li>版权申明</li>
          </ul>
          <dl className='telDiv'>
            <dt>
              <strong>服务热线：</strong>
              （工作日09:00-18:00） 
              <p>135-1111-1111</p>
            </dt>
            <dd>
              <a>在线客服1</a>
              <a>在线客服2</a>
            </dd>
          </dl>
          <div className="ewmDiv">
            <dl>
              <dt><img src={ewmDiv} alt="" /></dt>
              <dd>李老师</dd>
            </dl>
            <dl>
              <dt><img src={ewmDiv} alt="" /></dt>
              <dd>陈老师</dd>
            </dl>
          </div>
          <div className="clear"></div>
          <div className="linksDiv">
            <dl>
              <dt>友情链接:</dt>
              <dd>
                <a>中国教育部图学监理网</a> <a>新浪学</a> <a>腾讯学</a> <a>新东方留学</a> <a>环球雅思启图学</a> <a>前途出国网</a> <a>新浪学</a> <a>腾讯学</a> <a>新东方留学</a><a> 环球雅思</a> <a>启德留学</a> <a>前途出国</a> <a>新浪图学腾讯图学</a> <a>新东方留学环球雅思启德留学前途出国</a>
              </dd>
            </dl>
          </div>
          <div className="icpDiv">
            <p>Copyright@2004-2023北京汇博山水科技有限公司网版权所有，京ICP备20005397号-1</p>
            <p>投诉邮箱: web@zpipx.com,我们将会在48小时内给与处理</p>
          </div>
        </div>
    </div>
  );
}
