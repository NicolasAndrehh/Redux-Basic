import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import CartContainer from './components/cartContainer';
import NavBar from './components/navbar';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';
import Modal from './components/modal';

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </div>
  );
}

export default App;
