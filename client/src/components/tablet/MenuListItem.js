import React, { Component } from 'react'

import  check from '../../uploads/check.png'

export default class MenuListItem extends Component {
    componentDidUpdate() {
        let elems = [...document.querySelector('.MenuListItem').children];
        let time_delay = 500 + this.props.delay*150;
        elems.forEach((elem) => {
            setTimeout(() => {elem.classList.remove('hidden_alt')}, time_delay)
            time_delay = time_delay + 150;
        });
    }

    render() {
        return (
            <div className="MenuListItem">
                {this.props.hasIcon ? <div className="menu_item_image hidden_alt slide" key={this.props.id}><img src={this.props.icon} alt={this.props.id}></img></div> : ''}
                <div className="menu_item_title hidden_alt slide">{this.props.title}</div>
                <div className="menu_item_text hidden_alt slide">{this.props.text}</div>
                {this.props.list.map((item) => {
                    return (<div className='tablist_item hidden_alt slide' key={item}><img src={check} alt='check'></img>{item}</div>)
                })}
            </div>
        )
    }
}
