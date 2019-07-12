import React, { Component } from 'react'

export default class OurProducts extends Component {
    componentDidUpdate() {
        if (this.props.show === true) {
            document.querySelector('.OurProducts').classList.remove('hidden_alt');
            let OurProductsTopTitle = document.querySelector('.OurProducts > .our_products_top_title');
            let OurProductsMainTitle = document.querySelector('.OurProducts > .our_products_main_title');
            let OurProductsSubTitle = document.querySelector('.OurProducts > .our_products_subtitle');

            setTimeout(() => {
                OurProductsTopTitle.classList.remove('hidden_alt');
            }, 0);

            let topText = OurProductsMainTitle.innerText;
            OurProductsMainTitle.innerHTML = '';
            [...topText].forEach((char) => OurProductsMainTitle.innerHTML = OurProductsMainTitle.innerHTML + '<span class="hidden_alt slide">' + char + '</span>');

            let fallingLetters = document.querySelectorAll('.OurProducts > .our_products_main_title > span');
            fallingLetters.forEach((letter) => {
                let random = 300 + Math.random() * 500;
                setTimeout(() => {
                    letter.classList.remove('hidden_alt');
                    letter.style.animation = "textslide-backwards 0.25s 1";
                }, random);
            });

            let topSubText = OurProductsSubTitle.innerText;
            OurProductsSubTitle.innerHTML = '';
            [...topSubText].forEach((char) => OurProductsSubTitle.innerHTML = OurProductsSubTitle.innerHTML + '<span class="hidden_alt slide">' + char + '</span>');

            let subLetters = document.querySelectorAll('.OurProducts > .our_products_subtitle > span');
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
            <div className='OurProducts desk hidden_alt slide'>
                <div className="our_products_top_title hidden_alt slide">
                    Our products
                </div>
                <div className="our_products_main_title">
                    360° Predictive Marketing Hub
                </div>
                <div className="our_products_subtitle">
                    Whether you’re a marketer, sales manager or retailer, Smart.bid’s unified hub will bring customer engagement to its fullest potential.
                </div>
            </div>
        )
    }
}
