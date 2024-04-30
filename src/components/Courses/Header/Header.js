import React from 'react';
import './Header.css';

function Header(props) {

  return (
    <div className={props.class}>
        {props.header}
    </div>

  );
}

export default Header;
