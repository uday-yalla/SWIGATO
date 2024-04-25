import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownlod = () => {
  return (
    <div className='App-Download' id='Download'>
      <div className="App-text">
        <h1>For better expereince, Download the Swigato app now</h1>
      </div>
      <div className="App-images">
        <img src={assets.app_store} alt="" />
        <img src={assets.play_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownlod