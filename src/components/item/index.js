import React, {useState} from "react";
import PropTypes from "prop-types";
import {plural} from "../../utils";
import './style.css';

function Item(props){

  // Счётчик выделений
  const [count, setCount] = useState(0);

  const callbacks = {
    onOpenCart: (e) => {
      e.stopPropagation();
     ////
    }
  }

  return (
    <div className='Item'>
      <div className='Item-code'>{props.item.code}</div>
      <div className='Item-title'>
        {props.item.title}
      </div>
      <div className='Item-price'>
        {props.item.price}&nbsp;₽
      </div>
      <div className='Item-actions'>
        <button onClick={callbacks.onAddToCart}>
          Добавить
        </button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    selected: PropTypes.bool,
    count: PropTypes.number
  }).isRequired,
  onAddToCart: PropTypes.func,
  onSelect: PropTypes.func
};

Item.defaultProps = {
  onAddToCart: () => {},
}

export default React.memo(Item);
