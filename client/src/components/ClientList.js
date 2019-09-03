import React from 'react'

export default function ClientList({ items }) {
    return items.map((item) => (<div className='ClientList hidden_alt slide'><img alt={item.name} key={item.name} src={item.image}></img></div>))
}
