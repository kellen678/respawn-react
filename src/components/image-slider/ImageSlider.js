import React, { useEffect, useState } from 'react';
import Modal from '../modal/Modal';
import './image-slider.css'

function ImageSlider({delay, images}) {

    const [index, setIndex] = useState(0);
    const [incId, setIncId] = useState(0);

    const [openModal, setOpenModal] = useState(false);
    const [modalPicNum, setModalPicNum] = useState(0);

    const slides = images;

    const incIndex = (num) => {
        setIndex((index) => (((index + num) % slides.length) + slides.length) % slides.length);
    };

    const startInc = () => {
        setIncId(
            setInterval(() => {
                incIndex(1);
            }, delay)
        );
    };

    const pauseInc = () => {
        clearInterval(incId);
        startInc();
    };

    useEffect(() => {
        startInc();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <div className='image-slider' style={{background : slides[index]}}>
                <button className='media-nav' onClick={() => { incIndex(-1); pauseInc(); }}>&#x276E;</button>
                <div id='image-container'>
                        {slides.map((slide, x) => {
                            return(
                                <img src={slide.props.src} alt={slide.props.alt} style={{display : x === index ? 'block' : 'none'}} onClick={() => {setModalPicNum(index); setOpenModal(true);}} className={slide.props.className} id='image-slider-img' />
                            )
                        })}
                </div>
                <button className='media-nav' onClick={() => { incIndex(1); pauseInc(); }}>&#x276F;</button>
            </div>
            <Modal state={openModal} onClose={() => setOpenModal(false)}>
                {slides[modalPicNum]}
            </Modal>
        </>
    );
}

export default ImageSlider;