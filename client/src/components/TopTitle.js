import React, { Component } from 'react'

export default class TopTitle extends Component {
    componentDidUpdate() {
        if (this.props.show === true) {
            document.querySelector('.TopTitle').classList.remove('hidden');
            let topTitleMain = document.querySelector('.TopTitle > .top_title > .top_title_main');
            let topTitleLb = document.querySelector('.TopTitle > .top_title > .top_title_lb');
            let topSub = document.querySelector('.TopTitle > .top_subtitle');

            let topText = topTitleMain.innerText;
            topTitleMain.innerHTML = '';
            [...topText].forEach((char) => topTitleMain.innerHTML = topTitleMain.innerHTML + '<span class="hidden slide">' + char + '</span>');
            let topTextLb = topTitleLb.innerText;
            topTitleLb.innerHTML = '';
            [...topTextLb].forEach((char) => topTitleLb.innerHTML = topTitleLb.innerHTML + '<span class="hidden slide">' + char + '</span>');

            let fallingLetters = document.querySelectorAll('.TopTitle > .top_title > .top_title_main > span');
            fallingLetters.forEach((letter) => {
                let random = 300 + Math.random() * 500;
                setTimeout(() => {
                    letter.classList.remove('hidden');
                    letter.style.animation = "textslide 0.25s 1";
                }, random);
            });

            let fallingLettersLb = document.querySelectorAll('.TopTitle > .top_title > .top_title_lb > span');
            fallingLettersLb.forEach((letter) => {
                let random = 300 + Math.random() * 500;
                setTimeout(() => {
                    letter.classList.remove('hidden');
                    letter.style.animation = "textslide 0.25s 1";
                }, random);
            });

            setTimeout(() => {
                topSub.classList.remove('hidden', 'hidden_alt');
            }, 1000);
        }
    }

    render() {
        return (
            <div className='TopTitle hidden'>
                <div className="top_title slide">
                    <span className="top_title_main">Unlock your business potential with AI driven</span> <span className="top_title_lb" style={{color: '#029ED6'}}>Predictions</span>
                </div>
                <div className="top_subtitle hidden slide">
                    Let us show you how valuable your data is.
                </div>
            </div>
        )
    }
}
