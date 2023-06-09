import React from 'react'
import mealsImage from '../../assets/foodimage.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
const Header = props => {
return <React.Fragment>
      <header className={classes.header}>
        <h3 className={classes.orderFoodHeader}>Order Some Food</h3>
        <HeaderCartButton
        onClick={props.onShowCart}
        />
    </header>
    <div className={classes['main-image']}>
        <img src={mealsImage} alt="food table"/>
    </div>
</React.Fragment>
}
export default Header;