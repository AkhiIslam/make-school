import React from "react";
import List from "../List/List";
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart)
    const { cart } = props;
    // console.log(cart)
    const total = cart.reduce((previous, teacher) => previous + teacher.teacher.salary, 0)

    return (
        <div className="cart-degin">
            <h3>Teacher Summary</h3>
            <h5>Teacher Choices: {props.cart.length}</h5>
            <p>Total Cost: {total}</p>
            <ul className="ul-cart">
                {
                    cart.map(teacher => <List
                        key={teacher.teacher.id}
                        teacher={teacher}>
                    </List>)

                }
            </ul>

        </div>
    )
}

export default Cart;