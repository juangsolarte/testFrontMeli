import React from 'react';
import { NavLink } from 'react-router-dom';
import logoMeli from './Logo_ML.png';
import '../SearchBar/SearchBar.scss';

const LogoComponent: React.FC = () => {
    
    return (<NavLink to='/'>
    <img src={logoMeli} className="logoMeliTopBar" alt='logoMeli' title='logoMeli' />
  </NavLink>);
};

export default LogoComponent;