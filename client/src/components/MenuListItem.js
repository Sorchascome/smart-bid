import React, { Component } from 'react'

import  check from '../uploads/check.png'
import TechList from './TechList'

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
                {this.props.hasIcon ? <img className="menu_item_image hidden_alt slide" src={this.props.icon} alt={this.props.id}></img> : ''}
                <div className="menu_item_title hidden_alt slide">{this.props.title}</div>
                <div className="menu_item_text hidden_alt slide">{this.props.text}</div>
                <TechList items={this.props.list} />
            </div>
        )
    }
}


// this.props.list.forEach((item) => {return (<p>{item}</p>)})