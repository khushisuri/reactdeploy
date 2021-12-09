import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import * as dataArray from "../components/moc-data/mockdata.json";

const Refund = () => {
  useEffect(() => {
    console.log(dataArray.default);
  });

  return (
    <>
      <div className="pay">
        <div className="transac-head">
          <Link to="/components/Transactions ">
            {" "}
            <p className="p">Payments</p>{" "}
          </Link>
          <p className=" r ">refunds</p>
          <p className="o">orders</p>
        </div>

        <div className="payment">
          <div>
            <p> Refund id</p>
            <button> </button>
          </div>
          <div>
            <p> payment id</p>
            <div className="buttons">
              <button>Past 7 Days</button>
            </div>
          </div>
          <div>
            <p> status</p>
            <button> All</button>
          </div>
          <div>
            <button className=" btnn">search</button>
          </div>
        </div>

        <div className="titles">
          <p>refund id</p>
          <p> payment id</p>
          <p> amount </p>
          <p>Created At</p>
          <p>Status </p>
        </div>

        <div className="feilds">
          {dataArray.default.map((user, index) => {
            const { id, contact, amount, time, paymentId, email } = user;
            return (
              <article
                className="feild"
                style={{
                  backgroundColor: `${index % 2 !== 0 ? "  #F9F9F9" : "white"}`,
                }}
                key={id}
              >
                <p style={{ color: "blue" }}> {paymentId}</p>
                <p style={{ color: "blue" }}> {paymentId}</p>
                <p>{amount}</p>
                <p>{email}</p>
                <p> {time}</p>
                <button
                  style={{
                    backgroundColor: `${
                      index === 2 || index === 6 ? "#EA534C " : "#26C24C "
                    }`,
                  }}
                >
                  {" "}
                  {index === 2 || index === 6 ? "failed" : "processed "}
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Refund;
