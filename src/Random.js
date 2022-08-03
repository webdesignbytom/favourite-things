import { useState } from "react"
import { Link, Routes, useSearchParams } from "react-router-dom"
import VoteRig from "./components/VoteRig";


function Random(props) {
    const { item, itemScoreArray, setItemScoreArray, itemScore, setItemScore } = props

    if(!item) return "Loading..."

    return (
        <>
            <header>
                <h2>Random item</h2>
            </header>
            <p>
                {item.itemName} {item.itemCost}
            </p>
            <p>
                <Link to={`/items/${item.id}`} state={item}>
                    View
                </Link>
            </p>
            <VoteRig itemScoreArray={itemScoreArray} setItemScoreArray={setItemScoreArray} itemScore={itemScore} setItemScore={setItemScore}/>
            <button>Next</button>
        </>
    )
}

export default Random