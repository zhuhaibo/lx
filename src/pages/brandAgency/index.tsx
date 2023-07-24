import './style.less'

import BrandAgencyBannerComponents from './BrandAgencyBanner';
import BrandAgencySearchComponents from './BrandAgencySearchComponents';
import BrandAgencySearchListComponents from './BrandAgencySearchListComponents'

export default function Index() {
  return (
    <div className="brandAgencyDiv">
      {/* banner */}
      <BrandAgencyBannerComponents />
      {/* 筛选 */}
      <BrandAgencySearchComponents />
      {/* 筛选结果 */}
      <BrandAgencySearchListComponents />
    </div>
  );
}
