import { useState } from "react"
import { Link, Routes, useSearchParams } from "react-router-dom"

function Random(props) {
    const { item } = props
    if(!item.contact) return "Loading..."

    return (
        <>
            <header>
                <h2>Random item</h2>
            </header>
            <p>
                {item.firstName} {item.lastName}
            </p>
            <p>
                <Link to={`/items/${item.id}`} state={item}>
                    View
                </Link>
            </p>
            <button>Next</button>
        </>
    )
}

export default Random