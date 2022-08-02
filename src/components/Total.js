import React from 'react'
import { useState } from 'react'

const startingTotal = 1000000

function Total() {
  const [totalFigure, setTotalFigure] = useState(startingTotal)

  return (
    <section className='total-tax-number'>
        £{totalFigure}
    </section>
  )
}

export default Total