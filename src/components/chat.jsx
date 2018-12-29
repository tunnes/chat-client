import React from "react"

import Navbar from '../containers/navbar'
import EmptyConversation from './empty_conversation'
import Room from '../containers/room'

import { toogleNavbar } from '../utils/index'

export default props => (
  <div className='page__wrapper'>
    <span className='mobile__navbar lnr lnr-menu' onClick={toogleNavbar} />
    <div className='page__body'>
      <Navbar />
      <div className='page__main'>
        { props.currentConversation ? <Room /> : <EmptyConversation /> }
      </div>
    </div>
  </div>
)
