import React from 'react'
import PropTypes from 'prop-types'
export default function Card2({handleClick, id, flipped, back, front, height, width}) {
    return (
        <Card
            id={1}
            width={50}
            height={50}
            back={`/assets/images/board/back.png`}
            front={`/assets/images/board/1.png`}
            flipped={flipped.includes(1)}
            handleClick={() => handleClick(1)}
            />
    )
}
