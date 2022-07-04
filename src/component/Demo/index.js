import React from 'react';

import {Map} from 'react-bmapgl'
class Demo extends React.Component {
    render() {
      return (
        
        <Map
          style={{ height: 450 }}
          center={new window.BMapGL.Point(116.404449, 39.914889)}
          zoom={12}
          heading={0}
          tilt={40}
          onClick={e => console.log(e)}
          enableScrollWheelZoom
        />
      )
    }
  }
export default Demo;