import React from 'react';
import Logo from './Logo.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom'
import './Header.css';
import { useStateValue } from './StateProvider';

function Header() {
  

  const [{cart,}] = useStateValue();
  return (
    <div className="header">
      
        
        <Link to ='/'>
          <img className="header-logo" src={Logo} alt='img' />
        </Link>
      <div className = "header-search">
        <input className="header-searchInput"
          type="text" />
        <SearchIcon className = 'header-searchIcon'/>
        
      </div>
      <Link to='/login'>
      <div className='header-nav'>
        <div className='header-option'>
            <span className='header-optionLine1'> 
              Hello, 
            </span>
            {/* {user
            ?<span className='header-optionLine2'>
              {user}
            </span>
            :<span className='header-optionLine2'>
              Sign in
            </span>} */}
            <span className='header-optionLine2'>
              Sign in
            </span>
          </div>

        </div>
        </Link>
        <div className='header-option'>
          <span className='header-optionLine1'>
            Returns
          </span>
          <span className='header-optionLine2'>
            & Orders
          </span>

        </div>
        <div className='header-option'>
          <span className='header-optionLine1'>
            Your
          </span>
          <span className='header-optionLine2'>
            Prime
          </span>

        </div>
        <Link to = '/checkout'>
        <div className='header-optionCart'>
          <ShoppingCartIcon />

          <span className='header-optionLine2 header-cartCount'>{cart?.length}</span>
        </div>
        </Link>
    </div>   
  )
}

export default Header