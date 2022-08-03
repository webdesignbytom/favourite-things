import React from "react";
import { useState, useEffect } from 'react';
import VoteRig from "./components/VoteRig";

function topTen(props) {
  // const [data1, setData1] = useState(props);
  // const { items, itemScoreArray, setItemScoreArray, itemScore, setItemScore } = props;

  // useEffect(() => {
  //   for (let i = 0; i < items.length; i++) {
  //     for (let j = 0; j < items.length; j++) {
  //       if (items[i].vote / 1 > items[j].vote / 1) {
  //         let temp = items[i];
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
      <VoteRig itemScoreArray={itemScoreArray} setItemScoreArray={setItemScoreArray} itemScore={itemScore} setItemScore={setItemScore}itemScore={itemScore} setItemScore={setItemScore} />
    </div> */}
    </>
    
  );
}

export default topTen;
