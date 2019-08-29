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

            setTimeout(() => {
                OurProductsSubTitle.classList.remove('hidden', 'hidden_alt');
            }, 1000);
        }
    }

    render() {
        return (
            <div className='OurProducts desk hidden_alt slide'>
                <div className="our_products_top_title hidden_alt slide">
                    PRODUCT
                </div>
                <div className="our_products_main_title">
                    Data-driven Predictive Solutions
                </div>
                <div className="our_products_subtitle hidden_alt slide">
                    Whether you’re a marketer, sales manager or data analyst, Smart.bid’s predictive technology gives you insights on customers’ lifetime value and behavior.
                </div>
            </div>
        )
    }
}
