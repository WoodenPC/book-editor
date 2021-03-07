import React, { memo, FC, useCallback, ChangeEvent, useRef } from 'react';
import { ImageFieldProps } from './interfaces';
import Button from '../../../../components/Button';

import { ImageFieldStyled } from './styles';
import ImageNotFound from './image-not-found.png';

const ImageField: FC<ImageFieldProps> = (props) => {
  const { imageUrl, onChange } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleLoadImage = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { files } = event.target;
      if (!files) {
        return;
      }
      const file = files[0];

      if (!file) {
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        onChange(reader.result as string);
      };
    },
    [onChange],
  );

  const handleOpenFileDialog = useCallback(() => {
    const { current } = inputRef;
    if (!current) {
      return;
    }

    current.click();
  }, [inputRef]);
  return (
    <ImageFieldStyled>
      <img src={imageUrl || ImageNotFound} alt="Обложка книги" width={200} height={200} />
      <input ref={inputRef} type="file" onChange={handleLoadImage} accept=".gif,.jpg,.jpeg,.png" />
      <Button text="Загрузить обложку" onClick={handleOpenFileDialog} />
    </ImageFieldStyled>
  );
};

export default memo(ImageField);