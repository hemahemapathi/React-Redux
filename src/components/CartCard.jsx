import React, { useState, useContext } from 'react';
import { UserContext } from '../utils/UserContextComponent';

function CartCard() {
  let { product, setProduct } = useContext(UserContext);

  return (
    <div className="container">
      <div className="row">
        {product.map((e, i) => {
          const discountPrice = Math.round((e.price * e.discountPercentage) / 100);
          const [quantity, setQuantity] = useState(1);

          const addQuantity = () => {
            setQuantity(quantity + 1);
          };

          const removeQuantity = () => {
            setQuantity(quantity - 1);
          };

          return (
            <div key={i} className="col-md-12 mb-3">
              <div className="card border border-secondary">
                <div className="row g-0">
                  <div className="col-md-3">
                    <img src={e.image} className="img-fluid rounded-start cardImage" alt="Loading..." />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body px-3">
                      <div className="top">
                        <div className="top-header d-flex justify-content-between align-items-center">
                          <h5 className="card-title">{e.title}</h5>
                          <h4 className="card-title">${e.price}</h4>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="card-text"><b>BRAND</b> : {e.brand}</p>
                          <p className="card-text text-success">Discount Offer : {e.discountPercentage}%</p>
                        </div>
                        <p className="card-text">{e.description}</p>
                        <p className="card-text"><b>RATING</b>: {e.rating}/5</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="card-text">
                            <small className="text-muted"><b>Last updated 3 mins ago</b></small>
                          </p>
                          <div className="d-flex flex-row justify-content-between align-items-center">
                            <button
                              type="button"
                              className="btn btn-info"
                              style={{ marginRight: '16px' }}
                              onClick={() => {
                                removeQuantity();
                              }}
                            >
                              {' '}
                              -{' '}
                            </button>
                            <div className="py-1 quantityText">{quantity}</div>
                            <button
                              type="button"
                              className="btn btn-secondary"
                              style={{ marginLeft: '16px' }}
                              onClick={() => {
                                addQuantity();
                              }}
                            >
                              {' '}
                              +{' '}
                            </button>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="bottom">
                        <div className="d-flex justify-content-between align-items-center">
                          <b>ORIGINAL PRICE (1 item) :</b>
                          <p className="card-text">${e.price} </p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <b>DISCOUNT AMOUNT :</b>
                          <p className="card-text text-success"> - ${discountPrice}</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <b>FINAL PRICE (Price - Discount) :</b>
                          <p className="card-text">${e.price - discountPrice}</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                        <b> TOTAL AMOUNT (Final price * Quantity) :</b>
                          <h5 className="card-text">${e.price * quantity}</h5>
                        </div>
                      </div>
                      <button type="button" className="btn btn-success float-end my-3">
                        PROCEED TO PAY
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CartCard;