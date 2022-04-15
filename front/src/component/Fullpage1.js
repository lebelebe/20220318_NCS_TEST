import React, { useState, useEffect, useRef } from 'react';
import useInterval from './useInterval';
import useWindowSize from './useWindowSize';
import './css/slider.scss';



const Fullpage1 = (props) => {
    const currentsize = useWindowSize();
    const items = props.interview;
    const itemSize = items.length;
    const transition = 500;
    const transitionStyle = `transform ${transition}ms ease 0s`;
    const addData = 2;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideTransition, setTransition] = useState(transitionStyle);
    const sliderwidth = 16*15
    const widthtest = newwidth();


    let slides = setSlides();
    function setSlides(){
        let addedFront = [];
        let addedLast = [];
        var index = 0;
        while(index < addData){
            addedLast.push(items[index % items.length])
            addedFront.unshift(items[items.length - 1 - index % items.length])
            index++;
        }
        return [...addedFront,...items, ...addedLast];
    }

    function newwidth(){
        if(currentsize.width < 1920){
            return 16*10
        }
    }

    useInterval(() => {
        handleSlide(currentIndex + 1)
    }, 3000)

    function replaceSlide(index) {
        setTimeout(() => {
            setTransition('');
            setCurrentIndex(index);
        }, transition)
    }

    function handleSlide(index) {
        setCurrentIndex(index);
        if (index - addData < 0) {
            index += itemSize;
            replaceSlide(index)
        }
        else if (index - addData >= itemSize) {
            index -= itemSize;
            replaceSlide(index)
        }
        setTransition(transitionStyle);
    }
    function getItemIndex(index) {
        index -= addData;
        if (index < 0) {
            index += itemSize;
        }
        else if (index >= itemSize) {
            index -= itemSize;
        }
        return index;
    }


    if(!(items.length === 0)){
        return(
            <div className='slider-area'>
                <div>
                    {currentsize.width}px / {currentsize.height}px
                </div>
                <div className="slider">
                    <ul className="sliderTrack"
                     style={{
                        transform: `translateX(calc(${(-100 / slides.length) * (1 +  currentIndex)}%))`,
                        transition: slideTransition,
                        width: sliderwidth * (slides.length)
                    }}>
                        {
                            slides.map((content, slideIndex) => {
                                const itemIndex = getItemIndex(slideIndex);
                                return(
                                    <li key={slideIndex} className={`slideItem ${currentIndex === slideIndex ? 'current-slide' : ''}`}>
                                        <p className='question mb-4 nanumSquareB'>{content.wr_q}</p>
                                        <p className='answer nanumSquareR'>{content.wr_a}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
    else{
        return(
            <div>
                대기
            </div>
        )
    }
}

export default Fullpage1;