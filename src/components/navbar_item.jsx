import React from 'react'

const select = () => (
  <div className='navbar__item__select'>
    <i className="lnr lnr-checkmark-circle" />
  </div>
)

export default props => (
  <div className={`navbar__item ${props.active ? 'active' : ''}`} onClick={props.onClick} >
    <img className='navbar__item__image' src={props.src} />
    <div className='navbar__item__body'>
      <h4>{props.title}</h4>
      <h5>{props.subtitle}</h5>
    </div>
    <div className='navbar__item__footer'>
      {props.footer}
    </div>
    {props.selected ? select() : null }
  </div>
)