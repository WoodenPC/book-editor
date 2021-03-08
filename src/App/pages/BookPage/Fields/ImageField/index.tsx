import React, { memo, FC, useCallback, ChangeEvent, useRef } from 'react';

import Button from '../../../../ui/Button';
import ImageView from '../../../../ui/ImageView';

import { ImageFieldProps } from './interfaces';
import { ImageFieldStyled } from './styles';

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
      /** сжимаем изображение, чтобы не получить километровый dataurl */
      const reader = new FileReader();
      const image = new Image();
      image.width = 160;
      image.height = 200;
      image.src = URL.createObjectURL(file);

      image.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          return;
        }
        ctx.drawImage(image, 0, 0, image.width, image.height);
        onChange(canvas.toDataURL('image/jpeg'));
      };

      reader.onerror = () => {
        alert('Ошибка при загрузке изображения');
      };
    },
    [onChange],
  );

  const handleDropImage = useCallback(() => {
    onChange(undefined);
  }, [onChange]);

  const handleOpenFileDialog = useCallback(() => {
    const { current } = inputRef;
    if (!current) {
      return;
    }

    current.click();
  }, [inputRef]);
  return (
    <ImageFieldStyled>
      <ImageView src={imageUrl} alt="Обложка книги" width={160} height={200} />
      <input ref={inputRef} type="file" onChange={handleLoadImage} accept=".gif,.jpg,.jpeg,.png" />
      <Button text="Загрузить обложку" onClick={handleOpenFileDialog} />
      {imageUrl && <Button text="Удалить обложку" onClick={handleDropImage} />}
    </ImageFieldStyled>
  );
};

export default memo(ImageField);
