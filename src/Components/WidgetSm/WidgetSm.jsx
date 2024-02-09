import React from 'react'
import './WidgetSm.css'
import VisibilityIcon from "@mui/icons-material/Visibility";
import { userRows } from '../../Data';

export default function WidgetSm() {

  


  return (
    <div className='widgetSm'>
      <div className="widgetSmContainer">
        <span className='widgetSmTitle'>New Join Members</span>
        <ul className="widgetSmList">
          {
            userRows.map(user => {

              return (
              <li key={user.id} className="widgetSmListItem">
                <img src={user.avatar} className="widgetSmImg" />
                <div className="widgetSmUser">
                  <span className="widgetSmUserName">{user.username}</span>
                  <span className="widgetSmUserTitle">{user.status}</span>
                </div>
                <button className="widgetSmButton">
                  <VisibilityIcon className="widgetSmIcon" />
                </button>
              </li>

              )
            })
          }
          
           
        </ul>
      </div>
    </div>
  )
}



