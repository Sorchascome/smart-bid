import React, { Component } from 'react'

export default class Technology extends Component {
    componentDidUpdate() {
        if (this.props.show === true) {
            document.querySelector('.Technology').classList.remove('hidden_alt');
            let TechnologyTopTitle = document.querySelector('.Technology > .technology_top_title');
            let TechnologyMainTitle = document.querySelector('.Technology > .technology_main_title');
            let TechnologySubTitle = document.querySelector('.Technology > .technology_subtitle');

            setTimeout(() => {
                TechnologyTopTitle.classList.remove('hidden_alt');
            }, 600);

            let topText = TechnologyMainTitle.innerText;
            TechnologyMainTitle.innerHTML = '';
            [...topText].forEach((char) => TechnologyMainTitle.innerHTML = TechnologyMainTitle.innerHTML + '<span class="hidden_alt slide">' + char + '</span>');

            let fallingLetters = document.querySelectorAll('.Technology > .technology_main_title > span');
            fallingLetters.forEach((letter) => {
                let random = 600 + Math.random() * 500;
                setTimeout(() => {
                    letter.classList.remove('hidden_alt');
                    letter.style.animation = "textslide-backwards 0.25s 1";
                }, random);
            });

            let topSubText = TechnologySubTitle.innerText;
            TechnologySubTitle.innerHTML = '';
            [...topSubText].forEach((char) => TechnologySubTitle.innerHTML = TechnologySubTitle.innerHTML + '<span class="hidden_alt slide">' + char + '</span>');

            let subLetters = document.querySelectorAll('.Technology > .technology_subtitle > span');
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
            <div className='Technology desk hidden_alt slide'>
                <div className="technology_top_title hidden_alt slide">
                    Technology
                </div>
                <div className="technology_main_title">
                    The Smart.bid Way
                </div>
                <div className="technology_subtitle">
                    With a unique combination of cutting edge unified marketing technology, Smart.bid are leading the marketing AI innovation.
                </div>
            </div>
        )
    }
}
