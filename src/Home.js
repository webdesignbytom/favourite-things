import React from "react";
import Total from "./components/Total";
import VoteRig from "./components/VoteRig";
import { useState, useEffect } from "react";

function Home() {
  const [item, setItem] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:4000/items/1`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setItem(data);
      });
  }, []);

  if (!item) {
    return <p>Loading</p>;
  }
  return (
    <>
      <Total />
      <main>
        <h2>
          {item.itemName} 
        </h2>
        <h3>
            Price of item:  
            {item.itemCost}
        </h3>
        <img src={item.itemImageURL} alt={item.itemName}>
        </img>
        <h3>
            Score!
            {item.itemScore}
        </h3>
            
      </main>
      <VoteRig />
    </>
  );
}

export default Home;
