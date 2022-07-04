import React from 'react';
import './style.css'

function List() {
  return (
    <h1>hello</h1>
  )
}
class BaiDuMap extends React.Component {
  
    componentDidMount(){
      // 初始化地图实例
      // 注意在react脚手架中全局对象需要使用 window 来访问，否则会造成eslint校验错误
      const map=new window.BMapGL.Map('container')

      // 设置中心点坐标
      const point = new window.BMapGL.Point(116.404, 39.915)

      // 初始化地图  15是放大级别
      map.centerAndZoom(point, 15);
      map.enableScrollWheelZoom(true);
      var opts = {
          width: 50,     // 信息窗口宽度
          height: 50,    // 信息窗口高度
          title: "信息窗口标题"  // 信息窗口标题
      }
      var infoWindow = new window.BMapGL.InfoWindow(<List/>, opts);  // 创建信息窗口对象
      map.openInfoWindow(infoWindow, map.getCenter());        // 打开信息窗口
    }
  
    render() {
      return (
        <div className="map">
          {/* 地图容器 */}
          <div id="container"></div>
        </div>
      )
    }
  }

export default BaiDuMap;