import React, { Component } from 'react'
import TrackVisibility from 'react-on-screen'

function withFallingLetters(WrappedComponent) {
    return class WrapperComponent extends Component {

        triggerLetterfall(text) {
            text.classList.remove('hidden', 'hidden_alt')
            let children = Array.from(text.children)

            children.map(child => {
                if (child.classList.contains('trigger')) {
                    child.classList.remove('hidden', 'hidden_alt')
                    Array.from(child.children).map(section => {
                        let sectionText = section.innerText
                        section.innerHTML = ''
                        Array.from(sectionText).forEach(char => section.innerHTML = section.innerHTML + '<span class="hidden slide">' + char + '</span>')
                    })
                    Array.from(child.children).map(section => {
                        let fallingLetters = section.children
                        Array.from(fallingLetters).forEach(letter => {
                            let random = 300 + Math.random() * 500;
                            setTimeout(() => {
                                letter.classList.remove('hidden');
                                letter.style.animation = "textslide 0.25s 1";
                            }, random);
                        });
                    })
                } else {
                    setTimeout(() => child.classList.remove('hidden', 'hidden_alt'), 850);
                }
            })

        }

        render() {
            return (
                <TrackVisibility once>
                    <WrappedComponent {...this.props}
                        triggerLetterfall={this.triggerLetterfall}/>
                </TrackVisibility>
            )
        }
    }
    
}

export default withFallingLetters