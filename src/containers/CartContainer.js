import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cart from "./../components/Cart";
import CartItem from "./../components/CartItem";
import CartResult from "./../components/CartResult";
import { actChangeMessage, actDeleteProductInCart, actUpdateProductInCart } from "./../actions/index";
import * as Message from "./../constants/Message";

class CartContainer extends Component {
    render() {
        let { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }

    showCartItem = (cart) => {
        let { onDeleteProductInCart, onChangeMessage, onUpdateProductInCart } = this.props;
        let result = (
            <tr>
                <td>{Message.MSG_ADD_EMPTY}</td>
            </tr>
        );
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        onDeleteProductInCart={onDeleteProductInCart}
                        onChangeMessage={onChangeMessage}
                        onUpdateProductInCart={onUpdateProductInCart}
                    />
                );
            });
        }
        return result;
    };

    showTotalAmount = (cart) => {
        let result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />;
        }
        return result;
    };
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        }).isRequired,
        quantity: PropTypes.number.isRequired,
    }).isRequired,
    onDeleteProductInCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onUpdateProductInCart: PropTypes.func.isRequired,

};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actDeleteProductInCart(product));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
