import './style.less';
import { IconFont } from '@/utils';
import { Row, Col } from "antd";
import { RightOutlined } from '@ant-design/icons';
import lxqbj1 from '../../assets/images/lxqbj1.png';
import lxqbj2 from '../../assets/images/lxqbj2.png';
import lxqbj3 from '../../assets/images/lxqbj3.png';
import lxqbj4 from '../../assets/images/lxqbj4.png';
import lxqbj5 from '../../assets/images/lxqbj5.png';
import lxqbj6 from '../../assets/images/lxqbj6.png';

export default function Index() {
  // 留学情报局
  const countryList = [
    {
      title: '美国留学',
      icon: '🇺🇸',
      dl: {
        img: lxqbj1,
        title: '伯克利音乐学院世界排名 谁还敢 说伯克利辣鸡',
        info: ' 伯克利音乐学院是美国一所著名的音乐 学院，其在音乐教育领域有着非常令人',
        time: '04-14',
      },
      ul: [
        {title: '美国电影专业本科排名2023最新QS学科排名', time: '4-14' },
        {title: '美国室内设计专业留学必读留学清醒资料', time: '4-14' },
        {title: '2023茱莉亚音乐学院排名依旧强劲', time: '4-14' },
        {title: '美国电影专业本科排名2023最新QS学科排名', time: '4-14' },
        {title: '美国室内设计专业留学必读留学清醒资料', time: '4-14' },
        {title: '2023茱莉亚音乐学院排名依旧强劲', time: '4-14' },
      ]
    },
    {
      title: '英国留学',
      icon: '🇬🇧',
      dl: {
        img: lxqbj2,
        title: '伯克利音乐学院世界排名 谁还敢 说伯克利辣鸡',
        info: ' 伯克利音乐学院是美国一所著名的音乐 学院，其在音乐教育领域有着非常令人',
        time: '04-14',
      },
      ul: [
        {title: '美国电影专业本科排名2023最新QS学科排名', time: '4-14' },
        {title: '美国室内设计专业留学必读留学清醒资料', time: '4-14' },
        {title: '2023茱莉亚音乐学院排名依旧强劲', time: '4-14' },
        {title: '美国电影专业本科排名2023最新QS学科排名', time: '4-14' },
        {title: '美国室内设计专业留学必读留学清醒资料', time: '4-14' },
        {title: '2023茱莉亚音乐学院排名依旧强劲', time: '4-14' },
      ]
    },
    {
      title: '日本留学',
      icon: '🇯🇵',
      dl: {
        img: lxqbj3,
        title: '伯克利音乐学院世界排名 谁还敢 说伯克利辣鸡',
        info: ' 伯克利音乐学院是美国一所著名的音乐 学院，其在音乐教育领域有着非常令人',
        time: '04-14',
      },
      ul: [
        {title: '美国电影专业本科排名2023最新QS学科排名', time: '4-14' },
        {title: '美国室内设计专业留学必读留学清醒资料', time: '4-14' },
        {title: '2023茱莉亚音乐学院排名依旧强劲', time: '4-14' },
        {title: '美国电影专业本科排名2023最新QS学科排名', time: '4-14' },
        {title: '美国室内设计专业留学必读留学清醒资料', time: '4-14' },
        {title: '2023茱莉亚音乐学院排名依旧强劲', time: '4-14' },
      ]
    },
    {
      title: '雅思/托福',
      iconfontKey: 'icon-wenbenbianji',
      dl: {
        img: lxqbj4,
        title: '伯克利音乐学院世界排名 谁还敢 说伯克利辣鸡',
        info: ' 伯克利音乐学院是美国一所著名的音乐 学院，其在音乐教育领域有着非常令人',
        time: '04-14',
      },
      ul: [
        {title: '美国电影专业本科排名2023最新QS学科排名', time: '4-14' },
        {title: '美国室内设计专业留学必读留学清醒资料', time: '4-14' },
        {title: '2023茱莉亚音乐学院排名依旧强劲', time: '4-14' },
        {title: '美国电影专业本科排名2023最新QS学科排名', time: '4-14' },
        {title: '美国室内设计专业留学必读留学清醒资料', time: '4-14' },
        {title: '2023茱莉亚音乐学院排名依旧强劲', time: '4-14' },
      ]
    },
    {
      title: '作品集制作',
      iconfontKey: 'icon-_zuopinzhuzuoquan',
      dl: {
        img: lxqbj5,
        title: '伯克利音乐学院世界排名 谁还敢 说伯克利辣鸡',
        info: ' 伯克利音乐学院是美国一所著名的音乐 学院，其在音乐教育领域有着非常令人',
        time: '04-14',
      },
      ul: [
        {title: '美国电影专业本科排名2023最新QS学科排名', time: '4-14' },
        {title: '美国室内设计专业留学必读留学清醒资料', time: '4-14' },
        {title: '2023茱莉亚音乐学院排名依旧强劲', time: '4-14' },
        {title: '美国电影专业本科排名2023最新QS学科排名', time: '4-14' },
        {title: '美国室内设计专业留学必读留学清醒资料', time: '4-14' },
        {title: '2023茱莉亚音乐学院排名依旧强劲', time: '4-14' },
      ]
    },
    {
      title: '专业解读',
      iconfontKey: 'icon-chakan',
      dl: {
        img: lxqbj6,
        title: '伯克利音乐学院世界排名 谁还敢 说伯克利辣鸡',
        info: ' 伯克利音乐学院是美国一所著名的音乐 学院，其在音乐教育领域有着非常令人',
        time: '04-14',
      },
      ul: [
        {title: '美国电影专业本科排名2023最新QS学科排名', time: '4-14' },
        {title: '美国室内设计专业留学必读留学清醒资料', time: '4-14' },
        {title: '2023茱莉亚音乐学院排名依旧强劲', time: '4-14' },
        {title: '美国电影专业本科排名2023最新QS学科排名', time: '4-14' },
        {title: '美国室内设计专业留学必读留学清醒资料', time: '4-14' },
        {title: '2023茱莉亚音乐学院排名依旧强劲', time: '4-14' },
      ]
    },
  ]
  return (
    <div className="row">
        <div className="intelligenceDiv">
          <div className="titles">
            <span>留学情报局</span>
          </div>
          <Row gutter={30}>
            {countryList?.map((item: any, index: any)=>{
              return <Col key={index} span={8}>
                <div className="intelligenceList">
                  <div className="intelligenceListTitle">
                    <span>{item.iconfontKey ? <IconFont type={item.iconfontKey} /> : item.icon} {item.title}</span> 
                    <a>更多<RightOutlined /></a>
                  </div>
                  <dl>
                    <dt> <img src={item.dl.img} alt="" /> </dt>
                    <dd>
                      <h5>{item.dl.title}</h5>
                      <p>{item.dl.info}</p>
                      <div className="infoBtn">
                        {item.dl.time}
                        <a>查看详情</a>
                      </div>
                    </dd>
                  </dl>
                  <ul>
                    {item.ul?.map((vv: any,kk: any)=>{
                      return <li key={kk}><a>{vv.title}</a> <span>{vv.time}</span></li>
                    })}
                  </ul>
                </div>
              </Col>
            })}
          </Row>
        </div>
    </div>
  );
}
