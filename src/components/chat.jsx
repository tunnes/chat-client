import React from "react"

import Navbar from '../containers/navbar'
import SideBar from "../containers/sidebar"
import EmptyConversation from './empty_conversation'
import Conversation from '../containers/conversation'

export default props => (
  <div className='page__wrapper'>
    <span className='page__mobile-menu lnr lnr-menu'
      onClick={(e) => document.querySelector('.page__wrapper').classList.toggle('page__mobile-menu--open')} >
    </span>
    <div className='page__body'>
      <Navbar />
      <SideBar />
      <div className='page__main'>
        { props.currentConversation ? <Conversation /> : <EmptyConversation /> }
      </div>
    </div>
  </div>
)
