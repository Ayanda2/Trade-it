import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function CheckOut() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        {basket?.length === 0 ? (
          <div>
            <h2>Your Basket is empty</h2>
            <p>
              You have no items in you basket. To buy one or more items, click
              "Add to basket" next to the item.{" "}
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">Your Shopping basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default CheckOut;
