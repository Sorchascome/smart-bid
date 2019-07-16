import React from 'react'

export default function TechList({ items }) {
    return items.map((item) => (<span className="listitem hidden_alt slide"><span key={item} className='TechList'>{item}</span></span>))
}
