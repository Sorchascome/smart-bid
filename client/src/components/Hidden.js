import React from 'react'

export default function Hidden(props) {
    return (
        <div className='hidden'>
            {props.children}
        </div>
    )
}
