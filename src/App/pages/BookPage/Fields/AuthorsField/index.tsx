import React, { ChangeEvent, FC, memo } from 'react';

import Input from '../../../../ui/Input';
import Button from '../../../../ui/Button';
import Form from '../../../../ui/Form';
import { ValidationMessageStyled } from '../SimpleField/styles';

import { AuthorWrapperStyled } from './styles';
import { AUTHOR_INPUT_ATTRIBUTES } from './constants';
import { AuthorsFieldProps } from './interfaces';

/** поле с авторами */
const AuthorsField: FC<AuthorsFieldProps> = (props) => {
  const { authors, onChange, validationStatus, validationMessage } = props;

  const handleAddAuthor = () => {
    const updatedAuthors = [...authors, { name: '', surname: '' }];
    onChange(updatedAuthors);
  };

  const handleEditAuthorName = (event: ChangeEvent<HTMLInputElement>) => {
    const { id } = event.target;
    const [, index] = id.split('-');
    const updatedAuthors = [...authors];
    const indexNum = (index as unknown) as number;
    updatedAuthors[indexNum].name = event.target.value;
    onChange(updatedAuthors);
  };

  const handleEditAuthorSurname = (event: ChangeEvent<HTMLInputElement>) => {
    const { id } = event.target;
    const [, index] = id.split('-');
    const updatedAuthors = [...authors];
    const indexNum = (index as unknown) as number;
    updatedAuthors[indexNum].surname = event.target.value;
    onChange(updatedAuthors);
  };

  const handleRemoveAuthor = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget;

    const [, index] = id.split('-');
    const updatedAuthors = [...authors];
    const indexNum = (index as unknown) as number;
    updatedAuthors.splice(indexNum, 1);
    onChange(updatedAuthors);
  };

  return (
    <Form.FormField label="Авторы книги" isRequired>
      {authors.map((author, index) => (
        <AuthorWrapperStyled key={index}>
          <Input
            placeholder="Фамилия"
            value={author.surname}
            onChange={handleEditAuthorSurname}
            id={`authorSurname-${index}`}
            inputAttributes={AUTHOR_INPUT_ATTRIBUTES}
          />
          <Input
            placeholder="Имя"
            value={author.name}
            onChange={handleEditAuthorName}
            id={`authorName-${index}`}
            inputAttributes={AUTHOR_INPUT_ATTRIBUTES}
          />
          {authors.length > 0 && <Button text="Удалить" id={`authorRemoveBtn-${index}`} onClick={handleRemoveAuthor} />}
        </AuthorWrapperStyled>
      ))}
      <div>
        <Button text="Добавить" onClick={handleAddAuthor} />
      </div>
      {!validationStatus && <ValidationMessageStyled>{validationMessage}</ValidationMessageStyled>}
    </Form.FormField>
  );
};

export default memo(AuthorsField);
