import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import * as dataArray from "../components/moc-data/mockdata.json";

const Settlement = () => {
  useEffect(() => {
    console.log(dataArray.default);
  });

  return (
    <>
      <div className="pay">
        <div className="transac-head">
          <p className="p"> Settlements </p>
          <Link to="/components/Refund ">
            {" "}
            <p className="r">refunds</p>{" "}
          </Link>
          <p className="o">orders</p>
        </div>

        <div className="payment">
          <div>
            <p> Payment id</p>
            <button> </button>
          </div>
          <div>
            <p className="duration"> Duration</p>
            <div className="buttons">
              <button>Past 7 Days</button>
              <button> 11Nov2021</button>
            </div>
          </div>
          <div>
            <p> status</p>
            <button> All</button>
          </div>
          <div>
            <button className="btnn">search</button>
          </div>
        </div>

        <div className="titles ">
          <p>Settlement id</p>
          <p> Amount </p>
          <p> Fees </p>
          <p> Tax </p>
          <p>Created At</p>
          <p>Status </p>
        </div>

        <div className="feilds">
          {dataArray.default.map((user, index) => {
            const { id, contact, amount, time, paymentId, tax } = user;
            return (
              <article
                className="feild"
                style={{
                  backgroundColor: `${index % 2 !== 0 ? "  #F9F9F9" : "white"}`,
                }}
                key={id}
              >
                <p style={{ color: "blue" }}> {paymentId}</p>
                <p>{amount}</p>
                <p>{tax}</p>
                <p> {tax} </p>
                <p> {time}</p>
                <button
                  style={{
                    backgroundColor: `${
                      index === 2 || index === 6 ? "#EA534C " : "#26C24C "
                    }`,
                  }}
                >
                  {" "}
                  {index === 2 || index === 6 ? "failed" : " settled"}
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Settlement;
