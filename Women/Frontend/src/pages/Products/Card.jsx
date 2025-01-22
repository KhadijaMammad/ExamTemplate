import React, {useEffect, useState} from "react";
import "./card.css";
import {Link} from "react-router-dom";

export default function Card() {
  const [card, setCard] = useState([]);

  function getData() {
    fetch("http://localhost:8080/clothes")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }
  console.log("card");

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="container">
        <div className="women-clothes">
          <div className="card-heading">
            <h1>New realeased Products for Women</h1>
            <p style={{opacity: "70%"}}>
              Who are in extremely love with eco friendly system.
            </p>
          </div>
          <div className="filter-add">
            <div className="filter">
              <input type="text" placeholder="Search.." className="search" />
            </div>
            <div className="add">
              <button className="addbtn">
                <Link to={"./add"}>
                  <i class="fa-solid fa-plus"></i>
                </Link>
              </button>
            </div>
          </div>

          <div className="card-container">
            {card.map((x) => (
              <div key={x.id} className="card">
                <div className="overlay">
                  <button><i class="fa-solid fa-circle-info"></i></button>
                  <button><i class="fa-solid fa-trash"></i></button>
                  <button><i class="fa-solid fa-heart"></i></button>
                  <button><i class="fa-solid fa-cart-shopping"></i></button>
                </div>
                <img src={x.image} className="card-image" />
                <div className="card-body">
                  <h4 className="card-name">{x.name}</h4>
                  <p className="card-price">${x.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
