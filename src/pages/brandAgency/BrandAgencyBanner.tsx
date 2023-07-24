import './style.less'
import '@/global.less';

export default function Index() {
  return (
      <div className="brandAgencyBanner">
        <div className="row">
            <div className="brandAgencyBannerDiv">
                <div className="brandAgencyBannerLeft">
                </div>
                <div className="brandAgencyBannerRight">
                    <div className="bannerTextDiv">
                        <div className='bannerText'>知名品牌机构</div>
                        <div className='bannerTextIcon'></div>
                    </div>
                    <ul>
                        <li><div className="bticon bti01"></div>机构甄选</li>
                        <li><div className="bticon bti02"></div>机构底价</li>
                        <li><div className="bticon bti03"></div>服务监管</li>
                        <li><div className="bticon bti04"></div>五星保障</li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
  );
}
