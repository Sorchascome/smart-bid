import React, { Component } from 'react'

export default class MenuItem extends Component {
    componentDidUpdate() {
        let elems = [...document.querySelector('.MenuItem' + this.props.id).children];
        let time_delay = 500 + this.props.delay*150;
        elems.forEach((elem) => {
            setTimeout(() => {elem.classList.remove('hidden_alt')}, time_delay)
            time_delay = time_delay + 150;
        });
    }

    render() {
        return (
            <div className={"MenuItem" + this.props.id}>
                {this.props.hasIcon ? <div className="menu_item_image hidden_alt slide" key={this.props.id}><img src={this.props.icon} alt={this.props.id}></img></div> : ''}
                <div className="menu_item_title hidden_alt slide">{this.props.title}</div>
                <div className="menu_item_text  hidden_alt slide">{this.props.text}</div>
            </div>
        )
    }
}
