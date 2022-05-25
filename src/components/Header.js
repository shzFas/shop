import React from 'react';
import { Link } from 'react-router-dom';

import { useCart } from '../hooks/useCart';

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="img/logo.jpg" alt="Logotype" />
          <div className="shop__title-header">
            <h3 className="text-uppercase">Velo Shop</h3>
            <p className="opacity-5">Магазин лучших велосипедов</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="cart__custom cu-p">
          <img className='header_icons-custom' width={18} height={18} src="img/cart.svg" alt="Корзина" />
          <span>{totalPrice} тг.</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img className='header_icons-custom' width={18} height={18} src="img/heart.svg" alt="Закладки" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img className='header_icons-custom' width={18} height={18} src="img/user.svg" alt="Пользователь" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
