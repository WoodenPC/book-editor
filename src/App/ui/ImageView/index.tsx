import React, { FC, memo } from 'react';

import { ImageProps } from './interfaces';

import { ImageNotFoundStyledWrapper, ImageStyled } from './styles';
import ImageNotFound from './image-not-found.svg';

/** компонент изображения */
const ImageView: FC<ImageProps> = (props) => {
  const { src, width = 0, height = 0, alt = 'Изображение' } = props;
  if (!src) {
    return (
      <ImageNotFoundStyledWrapper $width={width} $height={height}>
        <ImageStyled src={ImageNotFound} alt="Изображение отсутствует" width={50} height={70} />
      </ImageNotFoundStyledWrapper>
    );
  }

  return <ImageStyled src={src} alt={alt} width={width} height={height} />;
};

export default memo(ImageView);
