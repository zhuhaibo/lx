import BannerComponents from './BannerComponents';
import StudyAbroadPolicyComponents from './StudyAbroadPolicyComponents';
import HotSchoolComponents from './HotSchoolComponents';
import BrandAgencyComponents from './BrandAgencyComponents';
import IntelligenceDivcomponents from './IntelligenceDivcomponents';
import StudyAbroadCaseComponents from './StudyAbroadCaseComponents';
import AboutComponents from './AboutComponents';
import HomeFooterComponents from './HomeFooterComponents';
import './style.less';

export default function Index() {
  return (
    <div className='homeDiv pages'>
      {/* Banner */}
      <BannerComponents />
      {/* 留学政策、留学工具箱 */}
      <StudyAbroadPolicyComponents />
      {/* 热门院校 */}
      <HotSchoolComponents />
      {/* 品牌机构 */}
      <BrandAgencyComponents />
      {/* 留学情报局 */}
      <IntelligenceDivcomponents />
      {/* 留学案例 */}
      <StudyAbroadCaseComponents />
      {/* 关于我们 */}
      <AboutComponents />
      {/* Home Page Footer */}
      <HomeFooterComponents />
    </div>
  );
}
