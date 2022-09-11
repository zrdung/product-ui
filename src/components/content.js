import React from "react";
import product_cart from "../data/product_data";

const Content = () => {
    console.log(product_cart)
    const listItems = product_cart.map((item) => {
        return (
            <div className="card" key={item.id}>
                <div className="card_img">
                    <img src={item.thumb} />
                </div>
                <div className="card_header">
                    <h2>{item.product_name}</h2>
                    <p>{item.description}</p>
                    <p className="price">
                        {item.price}
                        <span>{item.currency}</span>
                    </p>
                    <div className="btn">Add to cart</div>
                </div>
            </div>
        )
    })
    return (
        <div className="content">
            <h3>Nike</h3>
            {listItems}
        </div>
    )
}


export default Content