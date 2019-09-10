// Makes component's children appear when scrtolled down/up the component's height

export function elementHandler(Component, scroll_func) {
    let element = document.querySelector(Component.state.class);
    let prevElemH = element.previousSibling.getBoundingClientRect().height;
    let elemStart = Math.abs(element.getBoundingClientRect().y - prevElemH/1.75 - document.body.getBoundingClientRect().y);
    let elemEnd = Math.abs((element.getBoundingClientRect().y + element.getBoundingClientRect().height/2) - document.body.getBoundingClientRect().y);

    if((window.scrollY < elemEnd && window.scrollY > elemStart)  || Component.state.show === true) {
        Component.setState({show: true});
        let hexes = [...document.body.querySelectorAll(Component.state.class + ' > .hidden_elems')];
        hexes.forEach((hex) => {
            setTimeout(() => {hex.classList.remove('hidden', 'hidden_alt', 'hidden_right', 'hidden_left')}, 300);
        });
        window.removeEventListener('scroll', scroll_func);
    }
}