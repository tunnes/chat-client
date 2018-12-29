import React from 'react'

import Contacts from '../containers/contacts'
import Conversations from '../containers/conversations'
import Groups from '../containers/groups'

import * as option from '../constants/navbar_options'

export default props => {
  switch (props.layout.navbarOption) {
    case option.CONVERSATIONS:
      return (<Conversations />)
    case option.CONTACTS:
      return (<Contacts />)
    case option.CREATE_GROUP:
      return (<Groups />)
  }
}
