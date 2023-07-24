import './style.less'

import SelectSchoolComponents from './SelectSchoolComponents';
import SelectSchoolListComponents from './SelectSchoolListComponents'

export default function Index() {
  return (
    <div className="brandAgencyDiv">
      {/* 筛选 */}
      <SelectSchoolComponents />
      {/* 筛选结果 */}
      <SelectSchoolListComponents />
    </div>
  );
}
