import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectMyproducts,
  selectCart,
  add2cart,
  fetchDataAsync,
  addDataAsync,
  updDataAsync,
} from "./productSlice";
const Products = () => {
  const myProducts = useSelector(selectMyproducts);
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataAsync());
  }, []);

  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("");
  return (
    <div>
      {/* conditions in JS */}
      {/* {connect && "true"}
      {connect === true && "true"}
      {connect ? "true" : "false"}
      {connect === true ? "true" : "false"} */}
      Desc<input onChange={(e) => setDesc(e.target.value)}></input>
      Price<input onChange={(e) => setPrice(e.target.value)}></input>
      {myProducts.map((prod, i) => (
        <div key={i}>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://picsum.photos/200"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">{prod.desc}</h5>
              <p className="card-text">{prod.price}</p>
              <p className="card-text">{prod.id}</p>
              <button
                onClick={() =>
                  dispatch(addDataAsync({ desc: prod.desc, price: prod.price }))
                }
              >
                Buy
              </button>

              <button
                onClick={() =>
                  dispatch(
                    updDataAsync({
                      desc: desc,
                      price: price,
                      id: prod.id,
                    })
                  )
                }
              >
                Update
              </button>
            </div>
          </div>
        </div>
      ))}
      <h1>Cart</h1>
      {cart.map((prod, i) => (
        <div key={i}>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">{prod.desc}</p>
              <p className="card-text">{prod.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
