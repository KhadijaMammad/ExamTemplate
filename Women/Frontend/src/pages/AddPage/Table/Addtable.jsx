import React, { useState, useEffect } from "react";
import './table.css'

export default function Table() {
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
        <div className="add-table">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {card.map((item, index)=>(
                 <tr key={index}>
                 <td>
                   <img src={item.image} alt={item.name} style={{width:'150px'}}/>
                 </td>
                 <td>{item.name}</td>
                 <td>${item.price}</td>
               </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
