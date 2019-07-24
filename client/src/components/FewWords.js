import React, { Component } from 'react'

export default class FewWords extends Component {
    componentDidUpdate() {
        if (this.props.show === true) {
            document.querySelector('.FewWords').classList.remove('hidden_alt');
            let FewWordsTopTitle = document.querySelector('.FewWords > .few_words_top_title');
            let FewWordsMainTitle = document.querySelector('.FewWords > .few_words_main_title');
            let FewWordsSubTitle = document.querySelector('.FewWords > .few_words_subtitle');

            setTimeout(() => {
                FewWordsTopTitle.classList.remove('hidden_alt');
            }, 0);

            let topText = FewWordsMainTitle.innerText;
            FewWordsMainTitle.innerHTML = '';
            [...topText].forEach((char) => FewWordsMainTitle.innerHTML = FewWordsMainTitle.innerHTML + '<span class="hidden_alt slide">' + char + '</span>');

            let fallingLetters = document.querySelectorAll('.FewWords > .few_words_main_title > span');
            fallingLetters.forEach((letter) => {
                let random = 300 + Math.random() * 500;
                setTimeout(() => {
                    letter.classList.remove('hidden_alt');
                    letter.style.animation = "textslide-backwards 0.25s 1";
                }, random);
            });

            setTimeout(() => {
                FewWordsSubTitle.classList.remove('hidden', 'hidden_alt');
            }, 1000);
        }
    }

    render() {
        return (
            <div className='FewWords desk hidden_alt slide'>
                <div className="few_words_top_title hidden_alt slide">
                    Few words
                </div>
                <div className="few_words_main_title">
                    About Us
                </div>
                <div className="few_words_subtitle hidden_alt slide">
                Established in 2016, Smart.bid operates in the heart of Tel Aviv business center, Smart.bid is a unified predictive marketing hub designed specifically to service the needs of online advertisers who operate in a multi-channel and data driven marketing ecosystem.
                </div>
            </div>
        )
    }
}
