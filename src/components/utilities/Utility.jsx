import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudBolt } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import './Utility.css'
const Utility = () => {

  return (
    <div className='utility'>
      <FontAwesomeIcon className='font-icon2' icon={faCloudBolt} />
      <FontAwesomeIcon clasName ='font-icon2 ' icon={faGear} />
      <FontAwesomeIcon className='font-icon2' icon={faBell} />
      <FontAwesomeIcon className='font-icon2' icon={faMessage} />
    </div>
  )
}
 
export default Utility