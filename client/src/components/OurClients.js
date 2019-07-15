import React, { Component } from 'react'

export default class OurClients extends Component {
    componentDidUpdate() {
        if (this.props.show === true) {
            document.querySelector('.OurClients').classList.remove('hidden_alt');
            let OurClientsTopTitle = document.querySelector('.OurClients > .our_clients_top_title');
            let OurClientsMainTitle = document.querySelector('.OurClients > .our_clients_main_title');
            let OurClientsSubTitle = document.querySelector('.OurClients > .our_clients_subtitle');

            setTimeout(() => {
                OurClientsTopTitle.classList.remove('hidden_alt');
            }, 0);

            let topText = OurClientsMainTitle.innerText;
            OurClientsMainTitle.innerHTML = '';
            [...topText].forEach((char) => OurClientsMainTitle.innerHTML = OurClientsMainTitle.innerHTML + '<span class="hidden_alt slide">' + char + '</span>');

            let fallingLetters = document.querySelectorAll('.OurClients > .our_clients_main_title > span');
            fallingLetters.forEach((letter) => {
                let random = 300 + Math.random() * 500;
                setTimeout(() => {
                    letter.classList.remove('hidden_alt');
                    letter.style.animation = "textslide-backwards 0.25s 1";
                }, random);
            });

            setTimeout(() => {
                OurClientsSubTitle.classList.remove('hidden', 'hidden_alt');
            }, 500);
        }
    }

    render() {
        return (
            <div className='OurClients hidden_alt slide'>
                <div className="our_clients_top_title hidden_alt slide">
                    Our clients
                </div>
                <div className="our_clients_main_title">
                    Some of Smart.bid’s clients
                </div>
                <div className="our_clients_subtitle hidden_alt slide">
                    From performance focused customer acquisition campaigns to brand led content promotions, our ability to plan, launch and deliver at scale and across multiple markets is unrivalled.
                </div>
            </div>
        )
    }
}
