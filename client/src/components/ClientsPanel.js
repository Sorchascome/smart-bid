import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import items from '../helpers/clientHandler'

const ClientsPanel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const slides = items.map((list, index) => {

    return (
        <CarouselItem
            className='client_panel'
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={index + 1}>

            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: '75%',
                    margin: '8vw auto',
                    justifyContent: 'center'
                }}>
            {
                list.map(item => <img src={item.image} key={item.name}></img>)
            }
            </div>

        </CarouselItem>
        );
    });

    return (
    <Carousel
        style={{overflow: 'hidden'}}
        activeIndex={activeIndex}
        next={next}
        previous={previous}>

        {slides}

        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    )
}

export default ClientsPanel