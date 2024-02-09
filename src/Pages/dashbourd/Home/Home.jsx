
import React from 'react'
import Features from '../../../Components/features/Features'
import Chart from '../../../Components/Chart/Chart'
import {xAccesData} from '../../../Data'
import './Home.css'
import WidgetSm from '../../../Components/WidgetSm/WidgetSm'
import WidgetLg from '../../../Components/WidgetLg/WidgetLg'
import './Home.css'


export default function Home() {
  return (
    <div className='home'>
    <Features />
    <Chart title='Month Sale' data = {xAccesData} datakey = 'Sale' />
     <div className='widgetContainer'>
     <WidgetSm />
     <WidgetLg />
     </div>
  </div>
  )
}
