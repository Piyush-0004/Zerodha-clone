import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Orders.css";


const Orders = () => {
    const [orders, setOrders] = useState([]);
     const fetchOrders = () => {
      axios.get("https://zerodha-clone-lb23.onrender.com/allOrders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.error("Failed to fetch orders", err));
     };
    useEffect(() => {
       fetchOrders();
  }, []);

   const deleteOrder = (id) => {
    axios
      .delete(`https://zerodha-clone-lb23.onrender.com/deleteOrder/${id}`)
      .then(() => {
        fetchOrders(); // refresh after deletion
      })
      .catch((err) => {
        console.error("Failed to delete order", err);
      });
  };

  return (
    /*<div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div> */
     <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <>
          <h3 className="title">Your Orders ({orders.length})</h3>
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Stock</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Mode</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id} className={`order-row ${order.mode === "BUY" ? "buy" : "sell"}`}>
                    <td>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>{order.price}</td>
                    <td className={order.mode === "BUY" ? "order-mode-buy" : "order-mode-sell"}>{order.mode}</td>
                     <td>
                      <button
                        onClick={() => deleteOrder(order._id)} className="order-delete-button">Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;