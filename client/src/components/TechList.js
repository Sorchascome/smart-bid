import React from 'react'

export default function TechList({ items }) {
    return items.map((item) => (<span key={item} className='TechList hidden_alt slide'>{item}</span>))
}
