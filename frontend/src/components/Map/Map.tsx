import React from 'react'
import MapBox from './MapBox'

function Map() {
  return (
    <div className='container text-center'>
        <h1>Map Distribution</h1>
        <MapBox width="50vw" height="50vh"/>
    </div>
  )
}

export default Map;