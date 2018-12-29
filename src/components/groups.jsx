import React, { Component } from 'react'

class Groups extends Component {
  constructor (props) {
    super(props)
    this.toggleUser = this.toggleUser.bind(this)
  }

  toggleUser (user_id) {
    let users = this.props.groupForm.users

    if (users.find(id => id == user_id)) {
      users = users.filter(id => id !== user_id)
    } else {
      users.push(user_id)
    }

    this.props.setGroupUsers(users)
  }

  render () {
    return (
      <div className='navbar__body'>
        <div className='navbar__body__items'>
          <div className="navbar__body__input" >
            <input
              type="text"
              placeholder='Digite o nome para o grupo...'
              value={this.props.groupForm.name}
              onChange={e => this.props.setGroupName(e.target.value)}
            />
            <i
              className="lnr lnr-plus-circle navbar__body__input__confirm"
              onClick={e => this.props.createGroup(this.props.groupForm)}
            />
          </div>
          {this.props.contacts.map(contact =>
            <div className='conversations__item' key={contact.id} onClick={e => this.toggleUser(contact.id)}>
              <img className='conversations__item__image' src={`https://api.adorable.io/avatars/60/${contact.full_name}`} />
              <div className='conversations__item__body'>
                <h4>{contact.full_name}</h4>
                <h5>{`~${contact.user_name}`}</h5>
              </div>
              <div className='conversations__item__select'>
                {this.props.groupForm.users.find(u => u == contact.id) ? <i className="lnr lnr-checkmark-circle" /> : "" }
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Groups