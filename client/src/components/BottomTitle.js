import React, { Component } from 'react'

export default class BottomTitle extends Component {
    componentDidUpdate() {
        if (this.props.show === true) {
            document.querySelector('.BottomTitle').classList.remove('hidden_alt');
            let BottomTitleTopTitle = document.querySelector('.BottomTitle > .bottom_title_top_title');
            let BottomTitleMainTitle = document.querySelector('.BottomTitle > .bottom_title_main_title');
            let BottomTitleSubTitle = document.querySelector('.BottomTitle > .bottom_title_subtitle');

            setTimeout(() => {
                BottomTitleTopTitle.classList.remove('hidden_alt');
            }, 0);

            let topText = BottomTitleMainTitle.innerText;
            BottomTitleMainTitle.innerHTML = '';
            [...topText].forEach((char) => BottomTitleMainTitle.innerHTML = BottomTitleMainTitle.innerHTML + '<span class="hidden_alt slide">' + char + '</span>');

            let fallingLetters = document.querySelectorAll('.BottomTitle > .bottom_title_main_title > span');
            fallingLetters.forEach((letter) => {
                let random = 300 + Math.random() * 500;
                setTimeout(() => {
                    letter.classList.remove('hidden_alt');
                    letter.style.animation = "textslide-backwards 0.25s 1";
                }, random);
            });

            let topSubText = BottomTitleSubTitle.innerText;
            BottomTitleSubTitle.innerHTML = '';
            [...topSubText].forEach((char) => BottomTitleSubTitle.innerHTML = BottomTitleSubTitle.innerHTML + '<span class="hidden_alt slide">' + char + '</span>');

            let subLetters = document.querySelectorAll('.BottomTitle > .bottom_title_subtitle > span');
            subLetters.forEach((letter) => {
                let random = 800 + Math.random() * 500;
                setTimeout(() => {
                    letter.classList.remove('hidden_alt');
                }, random);
            });
        }
    }

    render() {
        return (
            <div className='BottomTitle hidden_alt slide'>
                <div className="bottom_title_top_title hidden_alt slide">
                    let’s begin
                </div>
                <div className="bottom_title_main_title">
                    Request a Demo for your business!
                </div>
                <div className="bottom_title_subtitle">
                    We'll show you how Smart.bid can grow your business with our 360° Predictive Hub! 
                </div>
            </div>
        )
    }
}
