import React, { Component } from 'react'

import  check from '../../uploads/check.png'

export default class MenuListItem extends Component {
    render() {
        return (
            <div className="MenuListItem">
                {this.props.hasIcon ? <img className="menu_item_image" src={this.props.icon} alt={this.props.id}></img> : ''}
                <div className="menu_item_title">{this.props.title}</div>
                <div className="menu_item_text">{this.props.text}</div>
                {this.props.list.map((item) => {
                    return (<div className='tablist_item' key={item}><img src={check} alt='check'></img>{item}</div>)
                })}
            </div>
        )
    }
}
