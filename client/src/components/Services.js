import React, { Component } from 'react'

export default class Services extends Component {
    componentDidUpdate() {
        if (this.props.show === true) {
            document.querySelector('.Services').classList.remove('hidden_alt');
            let ServicesTopTitle = document.querySelector('.Services > .Services_top_title');
            let ServicesMainTitle = document.querySelector('.Services > .Services_main_title');
            let ServicesSubTitle = document.querySelector('.Services > .Services_subtitle');

            setTimeout(() => {
                ServicesTopTitle.classList.remove('hidden_alt');
            }, 600);

            let topText = ServicesMainTitle.innerText;
            ServicesMainTitle.innerHTML = '';
            [...topText].forEach((char) => ServicesMainTitle.innerHTML = ServicesMainTitle.innerHTML + '<span class="hidden_alt slide">' + char + '</span>');

            let fallingLetters = document.querySelectorAll('.Services > .Services_main_title > span');
            fallingLetters.forEach((letter) => {
                let random = 600 + Math.random() * 500;
                setTimeout(() => {
                    letter.classList.remove('hidden_alt');
                    letter.style.animation = "textslide-backwards 0.25s 1";
                }, random);
            });

            let topSubText = ServicesSubTitle.innerText;
            ServicesSubTitle.innerHTML = '';
            [...topSubText].forEach((char) => ServicesSubTitle.innerHTML = ServicesSubTitle.innerHTML + '<span class="hidden_alt slide">' + char + '</span>');

            let subLetters = document.querySelectorAll('.Services > .Services_subtitle > span');
            subLetters.forEach((letter) => {
                let random = 900 + Math.random() * 500;
                setTimeout(() => {
                    letter.classList.remove('hidden_alt');
                }, random);
            });
        }
    }

    render() {
        return (
            <div className='Services hidden_alt slide'>
                <div className="Services_top_title hidden_alt slide">
                    Our Services
                </div>
                <div className="Services_main_title">
                    The Only MarTech Hub That Knows Your Business
                </div>
                <div className="Services_subtitle">
                    Learn about how Smart.bid is being utilized in the following channels.
                </div>
            </div>
        )
    }
}
