import React from "react";
import { useState, useEffect } from 'react';
// import data from "../database/db.json";

function topTen(props) {
  // const [data1, setData1] = useState(props);
  // const { items } = props;

  // useEffect(() => {
  //   for (var i = 0; i < items.length; i++) {
  //     for (var j = 0; j < items.length; j++) {
  //       if (items[i].vote / 1 > items[j].vote / 1) {
  //         var temp = items[i];
  //         items[i] = items[j];
  //         items[j] = temp;
  //       }
  //     }
  //   }
  // }, [items]);

  return (
    <>
    Hello World
      {/* <div>
      {data1["items"].map((item, index) => {
        const { itemName, itemCost, itemScore } = item;
        return (
          <li className="item-list" key={index}>
            <p>
              {itemName} {itemCost}
              {itemScore}
            </p>
          </li>
        );
      })}
    </div> */}
    </>
    
  );
}

export default topTen;
