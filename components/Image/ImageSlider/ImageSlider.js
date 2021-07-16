import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import ImageArrowBtn from '../../Button/components/ImageArrowBtn';
import ImageLoader from '../../../utils/ImageLoader'; 
import NoteImage from '../NoteImage';

const SliderContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageLeftArrowBtn = styled(ImageArrowBtn)`
  left: 0;
`;

const ImageRightArrowBtn = styled(ImageArrowBtn)`
  right: 0;
`;

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => (
    setCurrent(current === length - 1 ? 0 : current + 1)
  )

  const prevSlide = () => (
    setCurrent(current === 0 ? length - 1 : current - 1)
  )

  if (!Array.isArray(slides) || slides.length <= 0){
    return null;
  }

  return(
    <SliderContainer>
      <ImageLeftArrowBtn onClick={prevSlide}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </ImageLeftArrowBtn>
      <ImageRightArrowBtn onClick={nextSlide}>
        <FontAwesomeIcon icon={faAngleRight} />
      </ImageRightArrowBtn>
      {ImageLoader.map(( slide , index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index ===current && (<NoteImage src={slide.image} alt='IMAGE' />)}
          </div>
        )
      })}
    </SliderContainer>
  )
}

export default ImageSlider;