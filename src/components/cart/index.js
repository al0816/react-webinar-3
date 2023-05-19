import React from "react";
import './style.css';

function Cart({ isOpen, onClose, cartItems, total }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="Cart">
            <div className="Cart-header">
                <h2>Корзина</h2>
                <button className="Cart-closeButton" onClick={onClose}>
                    Закрыть
                </button>
            </div>
            <ul className="Cart-items">
                {cartItems.map((item) => (
                    <li key={item.code} className="Cart-item">
                        <span className="Cart-itemTitle">{item.title}</span>
                        <span className="Cart-itemQuantity">{item.quantity}</span>
                        <button
                            className="Cart-removeButton"
                            onClick={() => onRemoveItem(item.code)}
                        >
                            Удалить
                        </button>
                    </li>
                ))}
            </ul>
            <div className="Cart-total">Общая сумма: {total}₽</div>
        </div>
    );
}

export default Cart;
