import React from 'react';
import { Button } from '@digitalglobe/dg-components';
import './AppCard.css';

const AppCard = ({
  link,
  svg: Logo,
  title,
  copy
}) => {
  return (
    <div className="app-card">
      <h3>{ title }</h3>    
      <Logo />
      <h6 style={{ fontSize: '15px' }}>{ copy }</h6>
      <Button onClick={() => window.location.href = link} outline intention="primary" style={{ borderColor: 'var(--dg-shade-light)', color: 'var(--dg-shade-light)' }}>Visit Site</Button>
    </div> 
  )
}

export default AppCard;
