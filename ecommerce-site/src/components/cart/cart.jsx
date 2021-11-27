import "./cart.css";
import CustomButton from "../custom-button/custom-button";

const Cart = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default Cart;
