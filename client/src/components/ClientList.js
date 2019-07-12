import React from 'react'

export default function ClientList({ items }) {
    return items.map((item) => (<img alt={item.name} key={item.name} className='ClientList hidden_alt slide' src={item.image}></img>))
}
