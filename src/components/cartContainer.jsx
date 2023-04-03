import { useDispatch, useSelector } from 'react-redux';
import CartItem from './cartItem';
import { openModal } from '../features/modal/modalSlice';

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your bag</h2>
          <h4 className="empty-cart">Is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your bag</h2>
        <h4 className="empty-cart">Is currently empty</h4>
      </header>
      <div>
        {cartItems.map((item) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total
            <span>
              $
              {total.toFixed(2)}
            </span>
          </h4>
        </div>
        <button
          type="button"
          className="btn clear-btn"
          onClick={() => {
            dispatch(openModal());
          }}
        >
          Clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
