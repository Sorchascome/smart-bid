// Defines conditions when the component\s children should appear on screen

exports.componentAppears = (Component, scroll_func) => {
    let element = document.querySelector(Component.state.class);
    let prevElemH = element.previousSibling.getBoundingClientRect().height;
    let elemStart = Math.abs(element.getBoundingClientRect().y - prevElemH/2 - document.body.getBoundingClientRect().y);
    let elemEnd = Math.abs((element.getBoundingClientRect().y + element.getBoundingClientRect().height/2) - document.body.getBoundingClientRect().y);
    
    if (window.scrollY > elemEnd || window.scrollY < elemStart) {
        window.addEventListener('scroll', scroll_func); 
    } else {
        Component.setState({show: true});
        scroll_func();
    }
}