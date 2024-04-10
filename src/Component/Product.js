{/*import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../features/cart/cartSlice';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart());
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;  */}
import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../cartActions';

const Product = ({ name, price, imageUrl, addToCart }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} />
      <p>{price}</p>
      <button onClick={() => addToCart({ name, price, imageUrl })}>
        Add to Cart
      </button>
    </div>
  );
};

export default connect(null, { addToCart })(Product);
