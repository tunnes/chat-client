import "../assets/scss/chat_page.scss"
import React from "react"

import Navbar from '../containers/navbar'
import SideBar from "../containers/sidebar"
import EmptyConversation from './empty_conversation'
import Conversation from '../containers/conversation'

export default props => (
  <div className='page__wrapper'>
    <div className='page__body'>
      <Navbar />
      <SideBar />
      <div className='page__main'>
        { props.currentConversation ? <Conversation /> : <EmptyConversation /> }
      </div>
    </div>
  </div>
)
