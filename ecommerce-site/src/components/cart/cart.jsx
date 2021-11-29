import "./cart.css";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item";
import CustomButton from "../custom-button/custom-button";
import { selectCartItems } from "../../redux/cart/cart-selectors";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} item={cartItem} />;
        })}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};

export default connect(mapStateToProps)(Cart);
