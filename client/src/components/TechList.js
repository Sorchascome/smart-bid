import React from 'react'

export default function TechList({ items }) {
    return items.map((item) => (<span key={item} className="listitem hidden_alt slide"><span className='TechList'>{item}</span></span>))
}
