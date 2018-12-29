import React from 'react'

import Contacts from '../containers/contacts'
import Conversations from '../containers/conversations'
import Groups from '../containers/groups'

export default props => {
  switch (props.layout.navbarOption) {
    case 'CONVERSATIONS':
      return (<Conversations />)
    case 'CONTACTS':
      return (<Contacts />)
    case 'CREATE_GROUP':
      return (<Groups />)
  }
}
