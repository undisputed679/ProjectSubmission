import React from 'react';
import {Link} from 'react-router-dom';
import { auth } from '../../firebase/Firebase';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './HeaderStyle.scss';
import { connect } from 'react-redux';
import CartIcon from '../cart-Icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selecter';


const Header=({currentUser,hidden})=>(
    
        <div className='header'>
            <Link className="logo-container" to="/">
                <Logo className='Logo'/>
            </Link>
            <div className='options' >
                <Link className ='option' to='/shop'>
                    SHOP
                </Link>
                <Link className ='option' to='/contact'>
                    CONTACT
                </Link>
                {
                    currentUser?
                    <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }
                <CartIcon/>
            </div>
            {
                hidden ? null :
                <CartDropdown/>
            }
        </div>
    );

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
