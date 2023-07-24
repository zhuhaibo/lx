import './style.less'
import { Divider } from 'antd';

export default function Index() {
  return (
    <div className="childFooterDiv">
        <Divider />
        <div className="row">
            <p><strong>Copyright@ 2004-2023</strong> 北京汇博山水科技有限公司网版权所有，京<strong>ICP</strong>备<strong>20005397</strong>号<strong>-1</strong></p>
            <p>投诉邮箱: <strong>web@zpjpx.com</strong>,我们将会在<strong>48</strong>小时内给与处理。</p>
        </div>
    </div>
  );
}
