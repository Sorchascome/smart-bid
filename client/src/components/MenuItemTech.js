import React, { Component } from 'react'

import TechList from './TechList'

export default class MenuItemTech extends Component {
    componentDidUpdate() {
        let Component = document.querySelector('.MenuItemTech' + this.props.delay);
        let elems = [...Component.children];
        let time_delay = 500 + this.props.delay*150;
        elems.forEach((elem) => {
            setTimeout(() => {elem.classList.remove('hidden_alt')}, time_delay);
            setTimeout(() => {Component.classList.remove('hidden_alt')}, time_delay);;
            time_delay = time_delay + 150;
        });
    }

    render() {
        return (
            <div className={"hidden_alt slide MenuItemTech" + this.props.delay}>
                <div className="menu_item_image hidden_alt slide"><img src={this.props.icon} alt={this.props.id}></img></div>
                <div className="menu_item_title hidden_alt slide">{this.props.title}</div>
                <div className="menu_item_text  hidden_alt slide">{this.props.text}</div>
                <TechList items={this.props.list} />
            </div>
        )
    }
}

// this.props.list.forEach((item) => {return (<p>{item}</p>)})